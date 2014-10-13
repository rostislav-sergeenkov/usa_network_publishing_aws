<?php

/**
 * Extended class for writing XML sitemap files.
 */
class NBCUSitemapWriter extends XMLSitemapWriter {
  protected $status = TRUE;
  protected $uri = NULL;
  protected $type = NULL;
  protected $sitemapElementCount = 0;
  protected $linkCountFlush = 500;
  protected $sitemap = NULL;
  protected $sitemap_page = NULL;
  protected $rootElement = 'urlset';

  /**
   * Constructor.
   */
  function __construct(stdClass $sitemap, $page, $type = NULL) {
    $this->sitemap = $sitemap;
    $this->sitemap_page = $page;
    $this->type = $type;
    $this->uri = nbcu_seo_xmlsitemap_sitemap_get_file($sitemap, $page, $type);
    file_prepare_directory(dirname($this->uri), FILE_CREATE_DIRECTORY | FILE_MODIFY_PERMISSIONS);
    $this->openUri($this->uri);
  }

  /**
   * Return an array of attributes for the root element of the XML.
   */
  public function getRootAttributes() {
    $attributes = parent::getRootAttributes();
    $attributes['xmlns:image'] = 'http://www.google.com/schemas/sitemap-image/1.1';
    $attributes['xmlns:video'] = 'http://www.google.com/schemas/sitemap-video/1.1';
    $attributes['xmlns:mobile'] = 'http://www.google.com/schemas/sitemap-video/1.0';
    $attributes['xmlns:news'] = 'http://www.google.com/schemas/sitemap-news/0.9';
    return $attributes;
  }

  public function generateXML() {
    return nbcu_seo_xmlsitemap_generate_chunk($this->sitemap, $this, $this->sitemap_page, $this->type);
  }

  /**
   * Write full element tag including support for nested elements, attributes and namespaces.
   *
   * @param $name
   *   The element name.
   * @param $content
   *   The element contents or an array of the elements' sub-elements.
   */
  public function writeElement($name, $content = '') {
    if (is_array($content)) {
      if (!empty($content['#tag'])) {
        $name = $content['#tag'];
      }

      $namespace = isset($content['#namespace']) ? $content['#namespace'] : NULL;
      if (!empty($namespace)) {
        $this->startElementNs($namespace, $name, NULL);
      }
      else {
        $this->startElement($name);
      }
      if (isset($content['#attributes']) && is_array($content['#attributes'])) {
        foreach ($content['#attributes'] as $attr_name => $attr_value) {
          $this->startAttribute($attr_name);
          $this->text($attr_value);
          $this->endAttribute();
        }
      }
      if (!empty($content['#text'])) {
        $this->text($content['#text']);
      }

      foreach (element_children($content) as $sub_name) {
        $sub_content = $content[$sub_name];
        if (!empty($namespace)) {
          if (is_array($sub_content) && !isset($sub_content['#namespace'])) {
            $sub_content['#namespace'] = $namespace;
          }
          elseif (is_string($sub_content)) {
            $sub_content = array(
              '#text' => $sub_content,
              '#namespace' => $namespace,
            );
          }
        }
        $this->writeElement($sub_name, $sub_content);
      }
      $this->endElement();
    }
    else {
      parent::writeElement($name, $content);
    }
  }
}

class NBCUSitemapIndexWriter extends NBCUSitemapWriter {
  protected $rootElement = 'sitemapindex';

  function __construct(stdClass $sitemap, $type = NULL) {
    parent::__construct($sitemap, 'index', $type);
  }

  public function getRootAttributes() {
    $attributes['xmlns'] = 'http://www.sitemaps.org/schemas/sitemap/0.9';
    if (variable_get('xmlsitemap_developer_mode', 0)) {
      $attributes['xmlns:xsi'] = 'http://www.w3.org/2001/XMLSchema-instance';
      $attributes['xsi:schemaLocation'] = 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd';
    }
    return $attributes;
  }

  public function generateXML() {
    $lastmod_format = variable_get('xmlsitemap_lastmod_format', XMLSITEMAP_LASTMOD_MEDIUM);

    $url_options = $this->sitemap->uri['options'];
    $url_options += array(
      'absolute' => TRUE,
      'base_url' => variable_get('xmlsitemap_base_url', $GLOBALS['base_url']),
      'language' => language_default(),
      'alias' => TRUE,
    );

    if ($this->type !== NULL) {
      // generate type-specific sitemap index
      for ($i = 1; $i <= $this->sitemap->chunks; $i++) {
        $filename = nbcu_seo_xmlsitemap_sitemap_get_file($this->sitemap, $i, $this->type);
        if (file_exists($filename)) {
          $url_options['query']['page'] = $i;
          $element = array(
            'loc' => url($this->type . '.xml', $url_options),
            'lastmod' => gmdate($lastmod_format, REQUEST_TIME),
          );
          $this->writeSitemapElement('sitemap', $element);
        }
      }
    }
    else {
      // generate global sitemap index
      $sitemaps = array();
      $sitemap = xmlsitemap_sitemap_load_by_context();
      if ($sitemap) {
        $sitemaps = array(
          'sitemap.xml' => filemtime(xmlsitemap_sitemap_get_file($sitemap, 1)),
        );
        $types = nbcu_seo_xmlsitemap_types();
        foreach ($types as $type) {
          $sitemap_file_name = nbcu_seo_xmlsitemap_sitemap_get_file($sitemap, 1, $type);

          if (module_exists('nbcu_seo_content_buffer') && $type == NBCU_SEO_CONTENT_BUFFER_NAME && !file_exists($sitemap_file_name)) {
            continue;
          }
          $sitemaps[$type . '.xml'] = filemtime($sitemap_file_name);
        }
      }
      drupal_alter('nbcu_seo_xmlsitemap_sitemaps', $sitemaps);

      foreach ($sitemaps as $sitemap => $lastmod) {
        $element = array(
          'loc' => url($sitemap, $url_options),
          'lastmod' => gmdate($lastmod_format, $lastmod),
        );
        $this->writeSitemapElement('sitemap', $element);
      }
    }
  }
}

/**
 * Generates sitemap files.
 */
function nbcu_seo_xmlsitemap_generate_page(stdClass $sitemap, $page, $type) {
  try {
    $writer = new NBCUSitemapWriter($sitemap, $page, $type);
    $writer->startDocument();
    $writer->generateXML();
    $writer->endDocument();
  }
  catch (Exception $e) {
    watchdog_exception('xmlsitemap', $e);
    throw $e;
    return FALSE;
  }

  return $writer->getSitemapElementCount();
}

/**
 * Generate the index sitemap.
 */
function nbcu_seo_xmlsitemap_generate_index(stdClass $sitemap, $type = NULL) {
  try {
    $writer = new NBCUSitemapIndexWriter($sitemap, $type);
    $writer->startDocument();
    $writer->generateXML();
    $writer->endDocument();
  }
  catch (Exception $e) {
    watchdog_exception('xmlsitemap', $e);
    throw $e;
    return FALSE;
  }

  return $writer->getSitemapElementCount();
}

/**
 * Outputs the sitemap.
 */
function nbcu_seo_xmlsitemap_output($type) {
  module_load_include('inc', 'xmlsitemap', 'xmlsitemap.pages');
  $sitemap = xmlsitemap_sitemap_load_by_context();
  if (!$sitemap) {
    return MENU_NOT_FOUND;
  }

  $chunk = xmlsitemap_get_current_chunk($sitemap);
  $file = nbcu_seo_xmlsitemap_sitemap_get_file($sitemap, $chunk, $type);

  // Provide debugging information if enabled.
  if (variable_get('xmlsitemap_developer_mode', 0) && isset($_GET['debug'])) {
    $output = array();
    $context = xmlsitemap_get_current_context();
    $output[] = "Current context: " . print_r($context, TRUE);
    $output[] = "Sitemap: " . print_r($sitemap, TRUE);
    $output[] = "Chunk: $chunk";
    $output[] = "Cache file location: $file";
    $output[] = "Cache file exists: " . (file_exists($file) ? 'Yes' : 'No');
    return implode('<br />', $output);
  }

  return xmlsitemap_output_file($file);
}

/**
 * Outputs the sitemap index.
 */
function nbcu_seo_xmlsitemap_index() {
  module_load_include('inc', 'xmlsitemap', 'xmlsitemap.pages');
  $sitemap = xmlsitemap_sitemap_load_by_context();
  if (!$sitemap) {
    return MENU_NOT_FOUND;
  }

  $chunk = 'index';
  $file = nbcu_seo_xmlsitemap_sitemap_get_file($sitemap, $chunk);

  // Provide debugging information if enabled.
  if (variable_get('xmlsitemap_developer_mode', 0) && isset($_GET['debug'])) {
    $output = array();
    $context = xmlsitemap_get_current_context();
    $output[] = "Current context: " . print_r($context, TRUE);
    $output[] = "Sitemap: " . print_r($sitemap, TRUE);
    $output[] = "Chunk: $chunk";
    $output[] = "Cache file location: $file";
    $output[] = "Cache file exists: " . (file_exists($file) ? 'Yes' : 'No');
    return implode('<br />', $output);
  }

  return xmlsitemap_output_file($file);
}

/**
 * Return the expected file path for a specific sitemap chunk.
 */
function nbcu_seo_xmlsitemap_sitemap_get_file($sitemap, $chunk = 'index', $type = NULL) {
  $filename = nbcu_seo_xmlsitemap_get_directory($sitemap);
  if ($type !== NULL) {
    $filename .= "/{$type}";
  }
  $filename .= "/{$chunk}.xml";

  return $filename;
}

/**
 * Return directory name for a sitemap.
 */
function nbcu_seo_xmlsitemap_get_directory(stdClass $sitemap = NULL) {
  $directory = &drupal_static(__FUNCTION__);

  if (!isset($directory)) {
    $directory = NBCU_SEO_XMLSITEMAP_PATH;
  }

  if (!empty($sitemap->smid)) {
    return file_build_uri($directory . '/' . $sitemap->smid);
  }
  else {
    return file_build_uri($directory);
  }
}

/**
 * Generates a chunk of sitemap content.
 */
function nbcu_seo_xmlsitemap_generate_chunk(stdClass $sitemap, XMLSitemapWriter $writer, $chunk, $type) {
  module_load_include('inc', 'xmlsitemap', 'xmlsitemap.generate');

  $url_options = $sitemap->uri['options'];
  $url_options += array(
    'absolute' => TRUE,
    'base_url' => variable_get('xmlsitemap_base_url', $GLOBALS['base_url']),
    'language' => language_default(),
    'alias' => variable_get('xmlsitemap_prefetch_aliases', TRUE),
  );

  $last_url = '';
  $link_count = 0;

  $query = db_select('xmlsitemap', 'x');
  $query->fields('x');
  $query->condition('x.access', 1);
  $query->condition('x.status', 1);
  $query->leftJoin('xmlsitemap_link_type', 'xlt', 'x.id = xlt.id AND x.type = xlt.type');
  $query->rightJoin('cache_xmlsitemap_link', 'c', 'c.cid = CONCAT(\'nbcu_seo_xmlsitemap:' . $type . ':\', CONCAT_WS(\'_\', x.id, x.type))');
  $query->condition('xlt.link_type', $type, '=');
  $query->orderBy('x.language', 'DESC');
  $query->orderBy('x.loc');
  $query->addTag('nbcu_seo_xmlsitemap_generate');
  $query->addMetaData('sitemap', $sitemap);
  $query->addMetaData('type', $type);

  $offset = max($chunk - 1, 0) * xmlsitemap_get_chunk_size();
  $limit = xmlsitemap_get_chunk_size();
  $query->range($offset, $limit);
  $links = $query->execute();

  $link_elements = $links->fetchAll(PDO::FETCH_ASSOC);
  foreach ($link_elements as $link) {
    $link['language'] = $link['language'] != LANGUAGE_NONE ? xmlsitemap_language_load($link['language']) : $url_options['language'];
    if ($url_options['alias']) {
      $link['loc'] = xmlsitemap_get_path_alias($link['loc'], $link['language']->language);
    }
    $link_options = array(
      'language' => $link['language'],
      'xmlsitemap_link' => $link,
      'xmlsitemap_sitemap' => $sitemap,
    );
    $link_url = url($link['loc'], $link_options + $url_options);

    if ($link_url == $last_url) {
      continue;
    }
    else {
      $last_url = $link_url;
    }

    $cid = 'nbcu_seo_xmlsitemap:' . $type . ':' . $link['id'] . '_' . $link['type'];
    $cache = cache_get($cid, 'cache_xmlsitemap_link');
    if ($cache === FALSE) {
      continue;
    }
    $element = $cache->data;
    if (!empty($element)) {
      $writer->writeSitemapElement('url', $element);
      // Keep track of the total number of links written.
      $link_count++;
    }
  }

  return $link_count;
}

/**
 * Batch information callback for regenerating the sitemap files.
 *
 * @param $smids
 *   An optional array of XML sitemap IDs. If not provided, it will load all
 *   existing XML sitemaps.
 */
function nbcu_seo_xmlsitemap_regenerate_batch(array $smids = array()) {
  if (empty($smids)) {
    $smids = db_query("SELECT smid FROM {xmlsitemap_sitemap}")->fetchCol();
  }

  $batch = array(
    'operations' => array(),
    'title' => t('Regenerating Sitemap'),
    'file' => drupal_get_path('module', 'nbcu_seo') . '/nbcu_seo.xmlsitemap.inc',
  );

  // Generate all the sitemap pages for each context.
  $regenerate = variable_get('nbcu_seo_xmlsitemap_regenerate_needed', array());
  foreach ($smids as $smid) {
    foreach (nbcu_seo_xmlsitemap_types() as $type) {
      if (module_exists('nbcu_seo_content_buffer') && $type == NBCU_SEO_CONTENT_BUFFER_NAME) {
        continue;
      }

      $regenerate[$smid] = isset($regenerate[$smid]) ? $regenerate[$smid] : array();
      $regenerate[$smid][$type] = isset($regenerate[$smid][$type]) ? $regenerate[$smid][$type] : FALSE;

      if (isset($regenerate[$smid]) && $regenerate[$smid][$type] === TRUE) {
        $batch['operations'][] = array('nbcu_seo_xmlsitemap_regenerate_batch_preprocess', array($smid, $type));
        $batch['operations'][] = array('nbcu_seo_xmlsitemap_regenerate_batch_generate', array($smid, $type));
        $batch['operations'][] = array('nbcu_seo_xmlsitemap_regenerate_batch_generate_index', array($smid, $type));
      }
    }
    $batch['operations'][] = array('nbcu_seo_xmlsitemap_regenerate_batch_generate_index', array($smid, NULL));
  }

  return $batch;
}

/**
 * Batch callback; prepares links for a sitemap.
 */
function nbcu_seo_xmlsitemap_regenerate_batch_preprocess($smid, $type, array &$context) {
  module_load_include('inc', 'xmlsitemap', 'xmlsitemap.generate');
  $preprocess_count = variable_get('xmlsitemap_batch_limit', NBCU_SEO_XMLSITEMAP_PREPROCESS_COUNT);

  if (!isset($context['sandbox']['sitemap'])) {
    $context['sandbox']['sitemap'] = xmlsitemap_sitemap_load($smid);
    $sitemap = $context['sandbox']['sitemap'];
    $context['sandbox']['chunk'] = 0;
    $context['sandbox']['progress'] = 0;

    $query = db_select('xmlsitemap', 'x');
    $query->fields('x');
    $query->fields('c', array('cid'));
    $query->condition('x.access', 1);
    $query->condition('x.status', 1);
    $query->leftJoin('xmlsitemap_link_type', 'xlt', 'x.id = xlt.id AND x.type = xlt.type');
    $query->leftJoin('cache_xmlsitemap_link', 'c', 'c.cid = CONCAT(\'nbcu_seo_xmlsitemap:' . $type . ':\', CONCAT_WS(\'_\', x.id, x.type))');
    $query->condition('xlt.link_type', $type, '=');
    $query->isNull('cid');
    $query->orderBy('x.language', 'DESC');
    $query->orderBy('x.loc');
    $query->addTag('nbcu_seo_xmlsitemap_generate');
    $query->addMetaData('sitemap', $sitemap);
    $query->addMetaData('type', $type);
    $context['sandbox']['max'] = min($query->execute()->rowCount(), $preprocess_count);
    if ($context['sandbox']['max'] == 0) {
      $regenerate = variable_get('nbcu_seo_xmlsitemap_regenerate_needed', array());
      $regenerate[$smid][$type] = FALSE;
      variable_set('nbcu_seo_xmlsitemap_regenerate_needed', $regenerate);
      $context['finished'] = 1;
      return;
    }
  }

  $sitemap = $context['sandbox']['sitemap'];
  $lastmod_format = variable_get('xmlsitemap_lastmod_format', XMLSITEMAP_LASTMOD_MEDIUM);

  $url_options = $sitemap->uri['options'];
  $url_options += array(
    'absolute' => TRUE,
    'base_url' => variable_get('xmlsitemap_base_url', $GLOBALS['base_url']),
    'language' => language_default(),
    'alias' => variable_get('xmlsitemap_prefetch_aliases', TRUE),
  );

  $last_url = '';

  $query = db_select('xmlsitemap', 'x');
  $query->fields('x');
  $query->condition('x.access', 1);
  $query->condition('x.status', 1);
  $query->leftJoin('xmlsitemap_link_type', 'xlt', 'x.id = xlt.id AND x.type = xlt.type');
  $query->leftJoin('cache_xmlsitemap_link', 'c', 'c.cid = CONCAT(\'nbcu_seo_xmlsitemap:' . $type . ':\', CONCAT_WS(\'_\', x.id, x.type))');
  $query->condition('xlt.link_type', $type, '=');
  $query->isNull('cid');
  $query->orderBy('x.language', 'DESC');
  $query->orderBy('x.loc');
  $query->addTag('nbcu_seo_xmlsitemap_generate');
  $query->addMetaData('sitemap', $sitemap);
  $query->addMetaData('type', $type);

  $offset = $context['sandbox']['chunk'] * $preprocess_count;
  $limit = $preprocess_count;
  $query->range($offset, $limit);
  $links = $query->execute();

  $link_elements = $links->fetchAll(PDO::FETCH_ASSOC);
  foreach ($link_elements as $link) {
    
    //added opportunity to remove some elements from sitemap 
    $remove_element = FALSE;
    $analized_element = array(
      'link' => $link,
      'type' => $type,
    );
    drupal_alter('nbcu_seo_xmlsitemap_remove_element', $analized_element, $remove_element);
    if ($remove_element == TRUE) {
      $context['sandbox']['progress']++;
      continue;
    }
    
    $link['language'] = $link['language'] != LANGUAGE_NONE ? xmlsitemap_language_load($link['language']) : $url_options['language'];
    if ($url_options['alias']) {
      $link['loc'] = xmlsitemap_get_path_alias($link['loc'], $link['language']->language);
    }
    $link_options = array(
      'language' => $link['language'],
      'xmlsitemap_link' => $link,
      'xmlsitemap_sitemap' => $sitemap,
    );
    $link_url = url($link['loc'], $link_options + $url_options);

    if ($link_url == $last_url) {
      continue;
    }
    else {
      $last_url = $link_url;
    }

    $cid = 'nbcu_seo_xmlsitemap:' . $type . ':' . $link['id'] . '_' . $link['type'];
    $cache = cache_get($cid, 'cache_xmlsitemap_link');
    if ($cache === FALSE || $cache->expire > REQUEST_TIME) {
      $element = array();
      $element['loc'] = $link_url;
      if ($link['lastmod']) {
        $element['lastmod'] = gmdate($lastmod_format, $link['lastmod']);
        // If the link has a lastmod value, update the changefreq so that links
        // with a short changefreq but updated two years ago show decay.
        // We use abs() here just incase items were created on this same cron run
        // because lastmod would be greater than REQUEST_TIME.
//        $link['changefreq'] = (abs(REQUEST_TIME - $link['lastmod']) + $link['changefreq']) / 2;
      }
//      if ($link['changefreq']) {
//        $element['changefreq'] = xmlsitemap_get_changefreq($link['changefreq']);
//      }
      if (isset($link['priority']) && $link['priority'] != 0.5) {
        // Don't output the priority value for links that have 0.5 priority. This
        // is the default 'assumed' value if priority is not included as per the
        // sitemaps.org specification.
        $element['priority'] = number_format($link['priority'], 1);
      }
      $alter_context = array(
        'sitemap' => $sitemap,
        'type' => $type,
        'link' => $link,
      );
      drupal_alter('nbcu_seo_xmlsitemap_xml_element', $element, $alter_context);
      cache_set($cid, $element, 'cache_xmlsitemap_link');
    }
    $context['sandbox']['progress']++;
  }
  $context['sandbox']['chunk']++;

  if ($context['sandbox']['progress'] != $context['sandbox']['max']) {
    $context['finished'] = $context['sandbox']['progress'] / $context['sandbox']['max'];
  }
}

/**
 * Batch callback; generate all pages of a sitemap.
 */
function nbcu_seo_xmlsitemap_regenerate_batch_generate($smid, $type, array &$context) {
  if (!isset($context['sandbox']['sitemap'])) {
    $context['sandbox']['sitemap'] = xmlsitemap_sitemap_load($smid);
    $context['sandbox']['sitemap']->chunks = 1;
    $context['sandbox']['sitemap']->links = 0;
    $context['sandbox']['type'] = $type;
    $context['sandbox']['max'] = XMLSITEMAP_MAX_SITEMAP_LINKS;

    // Clear the cache directory for this sitemap before generating any files.
    $directory = nbcu_seo_xmlsitemap_get_directory($context['sandbox']['sitemap']) . "/{$type}";
    _xmlsitemap_delete_recursive($directory, FALSE);
  }

  $sitemap = &$context['sandbox']['sitemap'];
  $type = $context['sandbox']['type'];
  $links = nbcu_seo_xmlsitemap_generate_page($sitemap, $sitemap->chunks, $type);

  if ($links) {
    $sitemap->links += $links;
    $sitemap->chunks++;
  }
  else {
    // Cleanup the 'extra' empty file.
    $file = nbcu_seo_xmlsitemap_sitemap_get_file($sitemap, $sitemap->chunks, $type);
    if (file_exists($file) && $sitemap->chunks > 1) {
      file_unmanaged_delete($file);
    }
    $sitemap->chunks--;

    // Save the updated chunks and links values.
    $context['sandbox']['max'] = $sitemap->chunks;
  }

  if ($sitemap->chunks != $context['sandbox']['max']) {
    $context['finished'] = $sitemap->chunks / $context['sandbox']['max'];
  }
}

/**
 * Batch callback; generate the index page of a sitemap.
 */
function nbcu_seo_xmlsitemap_regenerate_batch_generate_index($smid, $type, array &$context) {
  $sitemap = xmlsitemap_sitemap_load($smid);
  if ($type === NULL) {
    nbcu_seo_xmlsitemap_generate_index($sitemap);
  }
  elseif ($sitemap->chunks > 1) {
    nbcu_seo_xmlsitemap_generate_index($sitemap, $type);
  }
}

/**
 * Implements hook_xmlsitemap_link_insert().
 */
function nbcu_seo_xmlsitemap_link_insert(array $link) {
  $types = module_invoke_all('nbcu_seo_xmpsitemap_link_type', $link);
  if (!empty($types)) {
    $smids = db_query("SELECT smid FROM {xmlsitemap_sitemap}")->fetchCol();
    $regenerate = variable_get('nbcu_seo_xmlsitemap_regenerate_needed', array());
    foreach ($types as $type) {
      foreach ($smids as $smid) {
        $regenerate[$smid] = isset($regenerate[$smid]) ? $regenerate[$smid] : array();
        $regenerate[$smid][$type] = isset($regenerate[$smid][$type]) ? $regenerate[$smid][$type] : FALSE;
        $regenerate[$smid][$type] = TRUE;
      }
      variable_set('nbcu_seo_xmlsitemap_regenerate_needed', $regenerate);

      db_insert('xmlsitemap_link_type')
        ->fields(array(
          'id' => $link['id'],
          'type' => $link['type'],
          'link_type' => $type,
        ))
        ->execute();
    }
  }
}

/**
 * Implements hook_xmlsitemap_link_update().
 */
function nbcu_seo_xmlsitemap_link_update(array $link) {
  $sitemap_types = nbcu_seo_xmlsitemap_types();
  foreach ($sitemap_types as $type) {
    $cid = 'nbcu_seo_xmlsitemap:' . $type . ':' . $link['id'] . '_' . $link['type'];
    cache_clear_all($cid, 'cache_xmlsitemap_link'); // clear cache
  }
  $types = module_invoke_all('nbcu_seo_xmpsitemap_link_type', $link);
  db_delete('xmlsitemap_link_type')
    ->condition('id', $link['id'], '=')
    ->condition('type', $link['type'], '=')
    ->execute();
  if (!empty($types)) {
    $smids = db_query("SELECT smid FROM {xmlsitemap_sitemap}")->fetchCol();
    $regenerate = variable_get('nbcu_seo_xmlsitemap_regenerate_needed', array());
    foreach ($types as $type) {
      foreach ($smids as $smid) {
        $regenerate[$smid] = isset($regenerate[$smid]) ? $regenerate[$smid] : array();
        $regenerate[$smid][$type] = isset($regenerate[$smid][$type]) ? $regenerate[$smid][$type] : FALSE;
        $regenerate[$smid][$type] = TRUE;
      }
      variable_set('nbcu_seo_xmlsitemap_regenerate_needed', $regenerate);

      db_insert('xmlsitemap_link_type')
        ->fields(array(
          'id' => $link['id'],
          'type' => $link['type'],
          'link_type' => $type,
        ))
        ->execute();
    }
  }
}
