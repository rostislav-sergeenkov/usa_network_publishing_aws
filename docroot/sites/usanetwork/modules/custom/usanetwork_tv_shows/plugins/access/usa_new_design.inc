<?php

/*
 * Plugin for setting rules for checking new design
 */
$plugin = array(
  'title' => t("Usanetwork: Is New Design"),
  'description' => t('Set up new design.'),
  'callback' => 'usa_new_design_access_check',
  'required context' => new ctools_context_required(t('TV Show node'), 'node'),
);

/**
 * Check for new design.
 */
function usa_new_design_access_check($conf, $context) {
  if (empty($context) || empty($context->data)) {
    return FALSE;
  }

  $is_new_design = _usanetwork_tv_shows_is_new_design_entity('node', $context->data);
  return $is_new_design;
}
