<?php

function usanetwork_home_default_panels_mini() {
  $export = array();

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
      'reg_ag' => NULL,
      'reg_menu' => NULL,
      'reg_mobile_menu' => NULL,
      'reg_tab_shows' => NULL,
      'reg_tab_full_episodes' => NULL,
      'reg_tab_schedule' => NULL,
      'reg_tab_user_profile' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-1';
  $pane->panel = 'reg_menu';
  $pane->type = 'custom';
  $pane->subtype = 'custom';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'admin_title' => 'MOCK Menu',
    'title' => 'MOCK Menu',
    'body' => '<ul>
<li>Link 1</li>
<li>Link 2</li>
<li>Link 3</li>
</ul>',
    'format' => 'wysiwyg_basic',
    'substitute' => TRUE,
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
  $pane->panel = 'reg_tab_full_episodes';
  $pane->type = 'custom';
  $pane->subtype = 'custom';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'admin_title' => 'Watch Live',
    'title' => 'Watch Live',
    'body' => '<p>Item</p>',
    'format' => 'wysiwyg_basic',
    'substitute' => TRUE,
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $display->content['new-2'] = $pane;
  $display->panels['reg_tab_full_episodes'][0] = 'new-2';
  $pane = new stdClass();
  $pane->pid = 'new-3';
  $pane->panel = 'reg_tab_full_episodes';
  $pane->type = 'custom';
  $pane->subtype = 'custom';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'admin_title' => 'Latest Full Episodes',
    'title' => 'Latest Full Episodes',
    'body' => '<p>Item 1</p>
<p>Item 2</p>
<p>Item 3</p>',
    'format' => 'wysiwyg_basic',
    'substitute' => TRUE,
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $display->content['new-3'] = $pane;
  $display->panels['reg_tab_full_episodes'][1] = 'new-3';
  $pane = new stdClass();
  $pane->pid = 'new-4';
  $pane->panel = 'reg_tab_schedule';
  $pane->type = 'custom';
  $pane->subtype = 'custom';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'admin_title' => 'On Now, Up Next',
    'title' => 'On Now, Up Next',
    'body' => '<p>On Now, Up Next</p>',
    'format' => 'wysiwyg_basic',
    'substitute' => TRUE,
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
  $pane->subtype = 'usanetwork_home-usanetwork_home_sm_primetime';
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
  $display->content['new-5'] = $pane;
  $display->panels['reg_tab_schedule'][1] = 'new-5';
  $pane = new stdClass();
  $pane->pid = 'new-6';
  $pane->panel = 'reg_tab_shows';
  $pane->type = 'block';
  $pane->subtype = 'usanetwork_home-usanetwork_home_sm_featured';
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
  $pane->type = 'custom';
  $pane->subtype = 'custom';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'admin_title' => 'USA Originals',
    'title' => 'USA Originals',
    'body' => '<ul>
<li>Link 1</li>
<li>Link 2</li>
<li>Link 3</li>
<li>Link 4</li>
</ul>',
    'format' => 'wysiwyg_basic',
    'substitute' => TRUE,
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
  $pane = new stdClass();
  $pane->pid = 'new-8';
  $pane->panel = 'reg_tab_shows';
  $pane->type = 'custom';
  $pane->subtype = 'custom';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'admin_title' => 'Syndicated Shows',
    'title' => 'Syndicated Shows',
    'body' => '<ul>
<li>Link 1</li>
<li>Link 2</li>
<li>Link 3</li>
<li>Link 4</li>
</ul>',
    'format' => 'wysiwyg_basic',
    'substitute' => TRUE,
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $display->content['new-8'] = $pane;
  $display->panels['reg_tab_shows'][2] = 'new-8';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = '0';
  $mini->display = $display;

  $export['usanetwork_show_menu'] = $mini;

  return $export;
}
