<?php

/**
 * Define this Export UI plugin.
 */
$plugin = array(
  'schema' => 'mps_blocks',
  'access' => 'administer mps account',

  // Define the menu item.
  'menu' => array(
    'menu item' => 'mps_blocks',
    'menu prefix' => 'admin/structure',
    'menu title' => 'MPS Blocks',
    'menu description' => 'Create and manage your MPS blocks.',
  ),

  // Define user interface texts.
  'title singular' => t('MPS block'),
  'title plural' => t('MPS blocks'),
  'title singular proper' => t('MPS block'),
  'title plural proper' => t('MPS blocks'),

  // Define the names of the functions that provide the add/edit forms.
  'form' => array(
    'settings' => 'mps_block_form',
    'validate' => 'mps_block_form_validate',
  ),
);

/**
 * Form builder--create a block.
 */
function mps_block_form(&$form, &$form_state) {
  // Make sure that all the necessary files are included even on ajax callbacks.
  form_load_include($form_state, 'inc', 'mps', 'plugins/export_ui/mps.export_ui');
  form_load_include($form_state, 'inc', 'mps', 'mps.admin');

  // Create a default tag object.
  $block = ($form_state['op'] == 'add' ? $form_state['item'] : $form_state['item']->raw);

  $form['machine_name'] = array(
    '#type' => 'machine_name',
    '#title' => t('Unique Name'),
    '#maxlength' => 32,
    '#default_value' => $block->machine_name,
    '#description' => t('Only use lowercase letters, numbers and underscores. Example: top_banner'),
    '#machine_name' => array(
      'exists' => 'mps_block_name_exists',
    ),
  );

  // Merge the machine_name that way it can tell new from edit.
  $form['machine_name'] += $form['info']['machine_name'];
  unset($form['info']);

  $form['block_name'] = array(
    '#type' => 'textfield',
    '#title' => t('Block Name'),
    '#required' => TRUE,
    '#maxlength' => 128,
    '#default_value' => $block->block_name,
    '#description' => t('The human-readable name for the block.'),
  );
}

/**
 * Form validation for the mps_block form.
 */
function mps_block_form_validate(&$form, &$form_state) {
  if (preg_match('@[^a-zA-Z0-9\/\-_\.\[\]\s]+@', $form_state['values']['block_name'])) {
    form_set_error('name', t('Block Names can only include letters, numbers, hyphens, dashes, periods, brackets and spaces.'));
  }
}

/**
 * Check if the given machine name is unique in the mps_blocks table.
 */
function mps_block_name_exists($machine_name) {
  $select = db_select('mps_blocks', 'mb');
  $select->addExpression('COUNT(*)');
  $select->condition('mb.machine_name', $machine_name);

  return $select->execute()->fetchField();
}
