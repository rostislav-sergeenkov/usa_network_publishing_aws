<?php

function usanetwork_menu_default_panels_mini() {
  $export = array();

  // Main menu panel

  $mini = new stdClass();
  $mini->disabled = FALSE; /* Edit this to true to make a default mini disabled initially */
  $mini->api_version = 1;
  $mini->name = 'usanetwork_show_menu';
  $mini->category = 'Custom USA';
  $mini->admin_title = 'Usanetwork: show menu';
  $mini->admin_description = '';
  $mini->requiredcontexts = array();
  $mini->contexts = array();
  $mini->relationships = array();
  $display = new panels_display();
  $display->layout = 'usanetwork-show-menu';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'reg_menu' => NULL,
      'reg_mobile_menu' => NULL,
      'reg_tab_shows' => NULL,
      'reg_tab_full_episodes' => NULL,
      'reg_tab_schedule' => NULL,
      'reg_tab_user_profile' => NULL,
      'reg_show_menu' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-1';
  $pane->panel = 'reg_menu';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_menu-usanetwork_menu_sm_main';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $display->content['new-1'] = $pane;
  $display->panels['reg_menu'][0] = 'new-1';
  $pane = new stdClass();
  $pane->pid = 'new-2';
  $pane->panel = 'reg_show_menu';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_tv_shows-usanetwork_tv_shows_submenu';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $display->content['new-2'] = $pane;
  $display->panels['reg_show_menu'][0] = 'new-2';
  $pane = new stdClass();
  $pane->pid = 'new-3';
  $pane->panel = 'reg_tab_full_episodes';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_menu-usanetwork_menu_sm_full_episodes';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => 'latest-full-episodes',
  );
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $display->content['new-3'] = $pane;
  $display->panels['reg_tab_full_episodes'][0] = 'new-3';
  $pane = new stdClass();
  $pane->pid = 'new-4';
  $pane->panel = 'reg_tab_schedule';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_menu-usanetwork_menu_sm_now_and_next';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 1,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $display->content['new-4'] = $pane;
  $display->panels['reg_tab_schedule'][0] = 'new-4';
  $pane = new stdClass();
  $pane->pid = 'new-5';
  $pane->panel = 'reg_tab_schedule';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_menu-usanetwork_menu_sm_primetime';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => 'primetime-panel',
  );
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $display->content['new-5'] = $pane;
  $display->panels['reg_tab_schedule'][1] = 'new-5';
  $pane = new stdClass();
  $pane->pid = 'new-6';
  $pane->panel = 'reg_tab_shows';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_menu-usanetwork_menu_sm_all_shows';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $display->content['new-6'] = $pane;
  $display->panels['reg_tab_shows'][0] = 'new-6';
  $pane = new stdClass();
  $pane->pid = 'new-7';
  $pane->panel = 'reg_tab_shows';
  $pane->type = 'menu_tree';
  $pane->subtype = 'menu-also-on-usa';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'menu_name' => 'menu-also-on-usa',
    'parent_mlid' => 0,
    'parent' => 'menu-also-on-usa:0',
    'title_link' => 0,
    'admin_title' => '',
    'level' => '1',
    'follow' => 0,
    'depth' => '1',
    'expanded' => 0,
    'sort' => 0,
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $display->content['new-7'] = $pane;
  $display->panels['reg_tab_shows'][1] = 'new-7';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = '0';
  $mini->display = $display;

  $export['usanetwork_show_menu'] = $mini;

  // Footer panel

  $mini = new stdClass();
  $mini->disabled = FALSE; /* Edit this to true to make a default mini disabled initially */
  $mini->api_version = 1;
  $mini->name = 'usanetwork_footer';
  $mini->category = 'Custom USA';
  $mini->admin_title = 'Usanetwork: footer';
  $mini->admin_description = '';
  $mini->requiredcontexts = array();
  $mini->contexts = array();
  $mini->relationships = array();
  $display = new panels_display();
  $display->layout = 'usanetwork-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'reg_footer_menu' => NULL,
      'reg_legal_and_social' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-1';
  $pane->panel = 'reg_footer_menu';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_menu-usanetwork_menu_fm_shows';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $display->content['new-1'] = $pane;
  $display->panels['reg_footer_menu'][0] = 'new-1';
  $pane = new stdClass();
  $pane->pid = 'new-2';
  $pane->panel = 'reg_footer_menu';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_menu-usanetwork_menu_fm_apps_services';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $display->content['new-2'] = $pane;
  $display->panels['reg_footer_menu'][1] = 'new-2';
  $pane = new stdClass();
  $pane->pid = 'new-3';
  $pane->panel = 'reg_legal_and_social';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_menu-usanetwork_menu_fm_social_links';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $display->content['new-3'] = $pane;
  $display->panels['reg_legal_and_social'][0] = 'new-3';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $mini->display = $display;

  $export['usanetwork_footer'] = $mini;

  return $export;
}
