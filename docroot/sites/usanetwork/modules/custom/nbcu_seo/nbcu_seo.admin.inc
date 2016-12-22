<?php

function nbcu_seo_sitemap_settings_form($form, &$form_state) {
  $form = array();

  $form['nbcu_seo_ping_google_after_cron'] = array(
    '#type' => 'select',
    '#title' => t('Ping Google when cron updates XML Sitemap'),
    '#description' => t('Each time when cron runs and updates XML Sitemap let Google know that Sitemap is updated.'),
    '#options' => array(
      0 => t('No'),
      1 => t('Yes'),
    ),
    '#default_value' => variable_get('nbcu_seo_ping_google_after_cron', 1),
  );

  return system_settings_form($form);
}
