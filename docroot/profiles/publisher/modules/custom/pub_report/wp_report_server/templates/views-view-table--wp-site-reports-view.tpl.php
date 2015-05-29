<?php

/**
 * @file
 * Template to display a view as a table.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $header: An array of header labels keyed by field id.
 * - $caption: The caption for this table. May be empty.
 * - $header_classes: An array of header classes keyed by field id.
 * - $fields: An array of CSS IDs to use for each field id.
 * - $classes: A class or classes to apply to the table, based on settings.
 * - $row_classes: An array of classes to apply to each row, indexed by row
 *   number. This matches the index in $rows.
 * - $rows: An array of row items. Each row is an array of content.
 *   $rows are keyed by row number, fields within rows are keyed by field ID.
 * - $field_classes: An array of classes to apply to each field, indexed by
 *   field id, then row number. This matches the index in $rows.
 * @ingroup views_templates
 */

?>
<table <?php if ($classes) { print 'class="'. $classes . '" '; } ?><?php print $attributes; ?>>
   <?php if (!empty($title) || !empty($caption)) : ?>
     <caption><?php print $caption . $title; ?></caption>
  <?php endif; ?>
  <?php if (!empty($header)) : ?>
    <thead>
      <tr>
        <?php foreach ($header as $field => $label): ?>
          <th <?php if ($header_classes[$field]) { print 'class="'. $header_classes[$field] . '" '; } ?>>
            <?php print $label; ?>
          </th>
        <?php endforeach; ?>
        <th <?php if ($header_classes[$field]) { print 'class="'. $header_classes[$field] . '" '; } ?>>
          Show 
        </th>
        <th <?php if ($header_classes[$field]) { print 'class="'. $header_classes[$field] . '" '; } ?>>
          Time sent
        </th>
      </tr>
    </thead>
  <?php endif; ?>
  <tbody>
    <?php foreach ($rows as $row_count => $row): ?>
      <tr <?php if ($row_classes[$row_count]) { print 'class="' . implode(' ', $row_classes[$row_count]) .'"';  } ?>>
        <?php foreach ($row as $field => $content): ?>
          <td <?php if ($field_classes[$field][$row_count]) { print 'class="'. $field_classes[$field][$row_count] . '" '; } ?><?php print drupal_attributes($field_attributes[$field][$row_count]); ?>>
            <?php print $content; ?>
          </td>
        <?php endforeach; ?>
        <td class="views-field-modules-show">
           <input type="checkbox" class="show-modules-row-checkbox" id="show_modules_row_<?php print $row_count ?>"> Plugins
        </td>
        <td>
           <?php print $view->result[$row_count]->wp_report_sites_time_sent_formatted ?>
        </td>
      </tr>
      <tr class="modules-row-<?php print $row_count ?>" style="display:none">
        <td class="pub-server-modules-content" colspan = "100%">
          <span>
            <strong>Site Plugins:</strong> 
            <?php if (isset($view->result[$row_count]->mod_updated_count)): ?>
              Updated versions: <strong><?php print $view->result[$row_count]->mod_updated_count ?>  </strong>  
            <?php endif;?>
            <?php if (isset($view->result[$row_count]->mod_deleted_count)): ?>
              Deleted plugins: <strong><?php print $view->result[$row_count]->mod_deleted_count ?> </strong> 
            <?php endif;?>
            <?php if (isset($view->result[$row_count]->mod_added_count)): ?>
              New plugins: <strong><?php print $view->result[$row_count]->mod_added_count ?>  </strong> 
            <?php endif;?>
          </span> <br />
          <?php foreach ($view->result[$row_count]->wp_report_sites_site_plugins_array as $kw => $vw): ?>
            <?php if($kw % $view->result[$row_count]->mod_in_column == 0):?>
              <div  class="pub-server-modules-data-content-div-wrapper-<?php print $row_count ?>">
            <?php endif ?>
            <span <?php if($vw['new'] == 1) :?> class="pub-server-modules-new-element" <?php endif;?>
              <?php if(!empty($vw['del'])) :?> class="pub-server-modules-deleted-element" <?php endif;?>>
              <?php print $vw['name'] ?>
                <?php if(!empty($vw['ver'])) :?>
                  (<span <?php if(!empty($vw['prev_ver'])) :?>class="pub-server-modules-updated-element"<?php endif;?>>
                    <?php print $vw['ver'] ?>
                   </span>)
                <?php endif;?>
                <br />
            </span>
            <?php if($kw % $view->result[$row_count]->mod_in_column == $view->result[$row_count]->mod_in_column-1):?>
              </div>
            <?php endif ?>
          <?php endforeach; ?>

        </td>
      </tr>
      <tr class="modules-row-<?php print $row_count ?>" style="display:none">
        <td class="pub-server-modules-content" colspan = "100%">
          <span>
            <strong>NBCUPress Plugins:</strong> 
            <?php if (isset($view->result[$row_count]->mod_updated_count_nbcupress)): ?>
              Updated versions: <strong><?php print $view->result[$row_count]->mod_updated_count_nbcupress ?>  </strong>  
            <?php endif;?>
            <?php if (isset($view->result[$row_count]->mod_deleted_count_nbcupress)): ?>
              Deleted plugins: <strong><?php print $view->result[$row_count]->mod_deleted_count_nbcupress ?> </strong> 
            <?php endif;?>
            <?php if (isset($view->result[$row_count]->mod_added_count_nbcupress)): ?>
              New plugins: <strong><?php print $view->result[$row_count]->mod_added_count_nbcupress ?>  </strong> 
            <?php endif;?>
          </span>
          <br />
          <?php foreach ($view->result[$row_count]->wp_report_sites_nbcupress_plugins_array as $kw => $vw): ?>
            <?php if($kw % $view->result[$row_count]->mod_in_column_nbcupress == 0):?>
              <div  class="pub-server-modules-data-content-div-wrapper-<?php print $row_count ?>">
            <?php endif ?>
            <span <?php if($vw['new'] == 1) :?> class="pub-server-modules-new-element" <?php endif;?>
              <?php if(!empty($vw['del'])) :?> class="pub-server-modules-deleted-element" <?php endif;?>>
              <?php print $vw['name'] ?>
                <?php if(!empty($vw['ver'])) :?>
                  (<span <?php if(!empty($vw['prev_ver'])) :?>class="pub-server-modules-updated-element"<?php endif;?>>
                    <?php print $vw['ver'] ?>
                   </span>)
                <?php endif;?>
                <br />
            </span>
            <?php if($kw % $view->result[$row_count]->mod_in_column_nbcupress == $view->result[$row_count]->mod_in_column_nbcupress-1):?>
              </div>
            <?php endif ?>
          <?php endforeach; ?>
        </td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
