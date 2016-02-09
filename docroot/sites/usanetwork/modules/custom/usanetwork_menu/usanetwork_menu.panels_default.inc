<?php
/**
 * @file
 * usanetwork_menu.panels_default.inc
 */

/**
 * Implements hook_default_panels_mini().
 */
function usanetwork_menu_default_panels_mini() {
  $export = array();

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
  $display->uuid = '910ddec5-4eb5-4c8c-9bba-baaa68e932b6';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-69f1ce95-1e43-474a-be0f-4107f0f50a6d';
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
    $pane->uuid = '69f1ce95-1e43-474a-be0f-4107f0f50a6d';
    $display->content['new-69f1ce95-1e43-474a-be0f-4107f0f50a6d'] = $pane;
    $display->panels['reg_footer_menu'][0] = 'new-69f1ce95-1e43-474a-be0f-4107f0f50a6d';
    $pane = new stdClass();
    $pane->pid = 'new-0fe79d2b-85ae-43c7-ae71-478eb790626f';
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
    $pane->uuid = '0fe79d2b-85ae-43c7-ae71-478eb790626f';
    $display->content['new-0fe79d2b-85ae-43c7-ae71-478eb790626f'] = $pane;
    $display->panels['reg_footer_menu'][1] = 'new-0fe79d2b-85ae-43c7-ae71-478eb790626f';
    $pane = new stdClass();
    $pane->pid = 'new-d874b6b7-5da0-4a70-a35f-5caf2fcdf1ec';
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
    $pane->uuid = 'd874b6b7-5da0-4a70-a35f-5caf2fcdf1ec';
    $display->content['new-d874b6b7-5da0-4a70-a35f-5caf2fcdf1ec'] = $pane;
    $display->panels['reg_legal_and_social'][0] = 'new-d874b6b7-5da0-4a70-a35f-5caf2fcdf1ec';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $mini->display = $display;
  $export['usanetwork_footer'] = $mini;

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
      'profile' => NULL,
      'reg_tab_movies' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = 'cee7138f-4c48-4379-ba01-2b5abb50cb2e';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-8788e37e-5a4a-4531-9411-bae792eb6e6b';
    $pane->panel = 'profile';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_tve_video-usanetwork_tve_video_auth_menu';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '8788e37e-5a4a-4531-9411-bae792eb6e6b';
    $display->content['new-8788e37e-5a4a-4531-9411-bae792eb6e6b'] = $pane;
    $display->panels['profile'][0] = 'new-8788e37e-5a4a-4531-9411-bae792eb6e6b';
    $pane = new stdClass();
    $pane->pid = 'new-9b040d82-efba-4999-8442-305ca73433a9';
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
    $pane->uuid = '9b040d82-efba-4999-8442-305ca73433a9';
    $display->content['new-9b040d82-efba-4999-8442-305ca73433a9'] = $pane;
    $display->panels['reg_menu'][0] = 'new-9b040d82-efba-4999-8442-305ca73433a9';
    $pane = new stdClass();
    $pane->pid = 'new-87d69b57-bdf7-4c34-a09e-b5c6620b9dde';
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
    $pane->uuid = '87d69b57-bdf7-4c34-a09e-b5c6620b9dde';
    $display->content['new-87d69b57-bdf7-4c34-a09e-b5c6620b9dde'] = $pane;
    $display->panels['reg_show_menu'][0] = 'new-87d69b57-bdf7-4c34-a09e-b5c6620b9dde';
    $pane = new stdClass();
    $pane->pid = 'new-bdf85dd1-17c9-418f-bf11-49d5c9630ab1';
    $pane->panel = 'reg_show_menu';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_movie-usanetwork_movie_submenu';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'bdf85dd1-17c9-418f-bf11-49d5c9630ab1';
    $display->content['new-bdf85dd1-17c9-418f-bf11-49d5c9630ab1'] = $pane;
    $display->panels['reg_show_menu'][1] = 'new-bdf85dd1-17c9-418f-bf11-49d5c9630ab1';
    $pane = new stdClass();
    $pane->pid = 'new-53e1c0b9-b44d-4133-b11a-adfefe0c2143';
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
    $pane->uuid = '53e1c0b9-b44d-4133-b11a-adfefe0c2143';
    $display->content['new-53e1c0b9-b44d-4133-b11a-adfefe0c2143'] = $pane;
    $display->panels['reg_tab_full_episodes'][0] = 'new-53e1c0b9-b44d-4133-b11a-adfefe0c2143';
    $pane = new stdClass();
    $pane->pid = 'new-d6193ee3-2e33-47da-9d24-bece9ccb3317';
    $pane->panel = 'reg_tab_movies';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_menu-usanetwork_menu_sm_movies';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'latest-movies',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'd6193ee3-2e33-47da-9d24-bece9ccb3317';
    $display->content['new-d6193ee3-2e33-47da-9d24-bece9ccb3317'] = $pane;
    $display->panels['reg_tab_movies'][0] = 'new-d6193ee3-2e33-47da-9d24-bece9ccb3317';
    $pane = new stdClass();
    $pane->pid = 'new-8cdcdc38-ddae-43f6-b2d1-36745522a8c4';
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
    $pane->uuid = '8cdcdc38-ddae-43f6-b2d1-36745522a8c4';
    $display->content['new-8cdcdc38-ddae-43f6-b2d1-36745522a8c4'] = $pane;
    $display->panels['reg_tab_schedule'][0] = 'new-8cdcdc38-ddae-43f6-b2d1-36745522a8c4';
    $pane = new stdClass();
    $pane->pid = 'new-2cb45bf5-1694-4737-b453-51889e8f292f';
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
    $pane->uuid = '2cb45bf5-1694-4737-b453-51889e8f292f';
    $display->content['new-2cb45bf5-1694-4737-b453-51889e8f292f'] = $pane;
    $display->panels['reg_tab_schedule'][1] = 'new-2cb45bf5-1694-4737-b453-51889e8f292f';
    $pane = new stdClass();
    $pane->pid = 'new-f8f4725c-eee0-4dbe-9c0d-27c0b9d95de0';
    $pane->panel = 'reg_tab_shows';
    $pane->type = 'views';
    $pane->subtype = 'usa_nav';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'originals_show',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'originals-shows-menu',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'f8f4725c-eee0-4dbe-9c0d-27c0b9d95de0';
    $display->content['new-f8f4725c-eee0-4dbe-9c0d-27c0b9d95de0'] = $pane;
    $display->panels['reg_tab_shows'][0] = 'new-f8f4725c-eee0-4dbe-9c0d-27c0b9d95de0';
    $pane = new stdClass();
    $pane->pid = 'new-058e23fa-b437-4ae8-a081-43c201f61c66';
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
    $pane->uuid = '058e23fa-b437-4ae8-a081-43c201f61c66';
    $display->content['new-058e23fa-b437-4ae8-a081-43c201f61c66'] = $pane;
    $display->panels['reg_tab_shows'][1] = 'new-058e23fa-b437-4ae8-a081-43c201f61c66';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = '0';
  $mini->display = $display;
  $export['usanetwork_show_menu'] = $mini;

  return $export;
}
