<?php

/**
 * @file
 * Extension for Ctools' export ui plugin.
 */

class ott_services_instance_ui extends ctools_export_ui {

  /**
   * Builds table row.
   *
   * @see ctools_export_ui::list_build_row().
   */
  public function list_build_row($item, &$form_state, $operations) {
    // Set up sorting.
    $name = $item->{$this->plugin['export']['key']};
    $schema = ctools_export_get_schema($this->plugin['schema']);
    $secondary_instances = ott_services_get_secondary_instances();

    // Note: $item->{$schema['export']['export type string']} should have
    // already been set up by export.inc so we can use it safely.
    switch ($form_state['values']['order']) {
      case 'disabled':
        $this->sorts[$name] = empty($item->disabled) . $name;
        break;

      case 'title':
        $this->sorts[$name] = $item->{$this->plugin['export']['admin_title']};
        break;

      case 'name':
        $this->sorts[$name] = $name;
        break;

      case 'storage':
        $this->sorts[$name] = $item->{$schema['export']['export type string']} . $name;
        break;
    }

    $this->rows[$name]['data'] = array();
    $this->rows[$name]['class'] = !empty($item->disabled) ? array('ctools-export-ui-disabled') : array('ctools-export-ui-enabled');

    // If we have an admin title, make it the first row.
    if (!empty($this->plugin['export']['admin_title'])) {
      $this->rows[$name]['data'][] = array(
        'data' => check_plain($item->{$this->plugin['export']['admin_title']}),
        'class' => array('ctools-export-ui-title'),
      );
    }
    $this->rows[$name]['data'][] = array(
      'data' => check_plain($name),
      'class' => array('ctools-export-ui-name'),
    );
    $this->rows[$name]['data'][] = array(
      'data' => isset($item->environment) ? $item->environment : '',
      'class' => array('ctools-export-ui-environment'),
    );
    $this->rows[$name]['data'][] = array(
      'data' => check_plain($item->{$schema['export']['export type string']}),
      'class' => array('ctools-export-ui-storage'),
    );
    $this->rows[$name]['data'][] = array(
      'data' => check_plain($item->url),
      'class' => array('ctools-export-ui-url'),
    );

    // Render "Instance Type" value.
    $instance_types = ott_services_ott_publishing_instance_type_info();
    $this->rows[$name]['data'][] = array(
      'data' => isset($instance_types[$item->instance_type]['label']) ? $instance_types[$item->instance_type]['label'] : $item->instance_type,
      'class' => array('ctools-export-ui-type'),
    );

    // Render "Secondary Instance" value.
    $this->rows[$name]['data'][] = array(
      'data' => !empty($item->secondary_instance_name) && isset($secondary_instances[$item->secondary_instance_name]) ?
        $secondary_instances[$item->secondary_instance_name] : '',
      'class' => array('ctools-export-ui-secondary-instance-name'),
    );

    $ops = theme('links__ctools_dropbutton', array(
      'links' => $operations,
      'attributes' => array('class' => array('links', 'inline')),
    ));

    $this->rows[$name]['data'][] = array(
      'data' => $ops,
      'class' => array('ctools-export-ui-operations'),
    );

    // Add an automatic mouseover of the description if one exists.
    if (!empty($this->plugin['export']['admin_description'])) {
      $this->rows[$name]['title'] = $item->{$this->plugin['export']['admin_description']};
    }
  }

  /**
   * Declares table header.
   *
   * @see ctools_export_ui::list_table_header().
   */
  function list_table_header() {
    $header = array();
    if (!empty($this->plugin['export']['admin_title'])) {
      $header[] = array(
        'data' => t('Title'),
        'class' => array('ctools-export-ui-title'),
      );
    }

    $header[] = array(
      'data' => t('Name'),
      'class' => array('ctools-export-ui-name'),
    );

    $header[] = array(
      'data' => t('Environment'),
      'class' => array('ctools-export-ui-environment'),
    );

    $header[] = array(
      'data' => t('Storage'),
      'class' => array('ctools-export-ui-storage'),
    );

    $header[] = array(
      'data' => t('Address'),
      'class' => array('ctools-export-ui-url'),
    );

    $header[] = array(
      'data' => t('Type'),
      'class' => array('ctools-export-ui-type'),
    );

    $header[] = array(
      'data' => t('Secondary Instance'),
      'class' => array('ctools-export-ui-secondary-instance-id'),
    );

    $header[] = array(
      'data' => t('Operations'),
      'class' => array('ctools-export-ui-operations'),
    );

    return $header;
  }

  /**
   * Callback to enable API Services instance.
   */
  function enable_page($js, $input, $item) {
    parent::enable_page($js, $input, $item);

    $item->status = 1;
    ctools_export_crud_save('ott_services_instance', $item);
  }

  /**
   * Callback to disable API Services instance.
   */
  function disable_page($js, $input, $item) {
    parent::disable_page($js, $input, $item);

    $item->status = 0;
    ctools_export_crud_save('ott_services_instance', $item);
  }
}
