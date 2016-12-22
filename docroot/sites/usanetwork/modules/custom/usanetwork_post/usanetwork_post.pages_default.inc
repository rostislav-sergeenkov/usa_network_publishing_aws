<?php
/**
 * @file
 * usanetwork_post.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function usanetwork_post_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view_panel_context_4';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = 5;
  $handler->conf = array(
    'title' => 'Blog Post',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => 'blog',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(
      0 => array(
        'identifier' => 'Taxonomy term from Node (on Node: Blog [field_blog])',
        'keyword' => 'taxonomy_term',
        'name' => 'entity_from_field:field_blog-node-taxonomy_term',
        'delta' => 0,
        'context' => 'argument_entity_id:node_1',
        'id' => 1,
      ),
    ),
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'entity_bundle:node',
          'settings' => array(
            'type' => array(
              'post' => 'post',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'twocol_stacked';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => NULL,
      'left' => NULL,
      'right' => NULL,
      'bottom' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '3c5c60a5-be72-4595-9a0b-bab90f65334f';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-e1f15260-b462-4c73-a783-9abacbe54f58';
    $pane->panel = 'left';
    $pane->type = 'entity_field_extra';
    $pane->subtype = 'taxonomy_term:description';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'view_mode' => 'full',
      'context' => 'relationship_entity_from_field:field_blog-node-taxonomy_term_1',
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
    $pane->uuid = 'e1f15260-b462-4c73-a783-9abacbe54f58';
    $display->content['new-e1f15260-b462-4c73-a783-9abacbe54f58'] = $pane;
    $display->panels['left'][0] = 'new-e1f15260-b462-4c73-a783-9abacbe54f58';
    $pane = new stdClass();
    $pane->pid = 'new-38280608-9765-4514-9ee8-d7b92b17e758';
    $pane->panel = 'left';
    $pane->type = 'entity_view';
    $pane->subtype = 'node';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'view_mode' => 'full',
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
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
    $pane->uuid = '38280608-9765-4514-9ee8-d7b92b17e758';
    $display->content['new-38280608-9765-4514-9ee8-d7b92b17e758'] = $pane;
    $display->panels['left'][1] = 'new-38280608-9765-4514-9ee8-d7b92b17e758';
    $pane = new stdClass();
    $pane->pid = 'new-cbc4d797-97f4-46d0-a083-6fd90d62aa7f';
    $pane->panel = 'right';
    $pane->type = 'block';
    $pane->subtype = 'mps-topbox';
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
    $pane->uuid = 'cbc4d797-97f4-46d0-a083-6fd90d62aa7f';
    $display->content['new-cbc4d797-97f4-46d0-a083-6fd90d62aa7f'] = $pane;
    $display->panels['right'][0] = 'new-cbc4d797-97f4-46d0-a083-6fd90d62aa7f';
    $pane = new stdClass();
    $pane->pid = 'new-11a72565-332a-4a43-88af-8302c995977f';
    $pane->panel = 'right';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_post-usanetwork_post_latest';
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
    $pane->uuid = '11a72565-332a-4a43-88af-8302c995977f';
    $display->content['new-11a72565-332a-4a43-88af-8302c995977f'] = $pane;
    $display->panels['right'][1] = 'new-11a72565-332a-4a43-88af-8302c995977f';
    $pane = new stdClass();
    $pane->pid = 'new-8817a61d-8007-47e3-b308-57a2ec7c0bd3';
    $pane->panel = 'right';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_post-usanetwork_post_banners';
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
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = '8817a61d-8007-47e3-b308-57a2ec7c0bd3';
    $display->content['new-8817a61d-8007-47e3-b308-57a2ec7c0bd3'] = $pane;
    $display->panels['right'][2] = 'new-8817a61d-8007-47e3-b308-57a2ec7c0bd3';
    $pane = new stdClass();
    $pane->pid = 'new-1b631335-4706-420c-8c1b-cc7c6d81f251';
    $pane->panel = 'top';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_post-usanetwork_post_header';
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
    $pane->uuid = '1b631335-4706-420c-8c1b-cc7c6d81f251';
    $display->content['new-1b631335-4706-420c-8c1b-cc7c6d81f251'] = $pane;
    $display->panels['top'][0] = 'new-1b631335-4706-420c-8c1b-cc7c6d81f251';
    $pane = new stdClass();
    $pane->pid = 'new-4fbe27a6-b16d-455e-9c77-a01f82acc497';
    $pane->panel = 'top';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_post-usanetwork_post_global_header';
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
    $pane->uuid = '4fbe27a6-b16d-455e-9c77-a01f82acc497';
    $display->content['new-4fbe27a6-b16d-455e-9c77-a01f82acc497'] = $pane;
    $display->panels['top'][1] = 'new-4fbe27a6-b16d-455e-9c77-a01f82acc497';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-38280608-9765-4514-9ee8-d7b92b17e758';
  $handler->conf['display'] = $display;
  $export['node_view_panel_context_4'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'term_view_panel_context';
  $handler->task = 'term_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Blog',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => 'blog',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'term_vocabulary',
          'settings' => array(
            'machine_name' => array(
              'blog' => 'blog',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'twocol_stacked';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => NULL,
      'left' => NULL,
      'right' => NULL,
      'bottom' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '7bf06b50-9659-44ec-aac5-f1c429410117';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-242d6a93-f72b-4207-90c9-f12e9b57a387';
    $pane->panel = 'left';
    $pane->type = 'entity_field_extra';
    $pane->subtype = 'taxonomy_term:description';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'view_mode' => 'full',
      'context' => 'argument_term_1',
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
    $pane->uuid = '242d6a93-f72b-4207-90c9-f12e9b57a387';
    $display->content['new-242d6a93-f72b-4207-90c9-f12e9b57a387'] = $pane;
    $display->panels['left'][0] = 'new-242d6a93-f72b-4207-90c9-f12e9b57a387';
    $pane = new stdClass();
    $pane->pid = 'new-dbe8b781-8094-45de-bfee-594eefd5c896';
    $pane->panel = 'left';
    $pane->type = 'views';
    $pane->subtype = 'blog';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 1,
      'nodes_per_page' => '10',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block_latest_content',
      'context' => array(
        0 => 'argument_term_1.tid',
      ),
      'override_title' => 1,
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
    $pane->uuid = 'dbe8b781-8094-45de-bfee-594eefd5c896';
    $display->content['new-dbe8b781-8094-45de-bfee-594eefd5c896'] = $pane;
    $display->panels['left'][1] = 'new-dbe8b781-8094-45de-bfee-594eefd5c896';
    $pane = new stdClass();
    $pane->pid = 'new-fcf5e7f1-fa5b-413b-8b58-5058388e55c2';
    $pane->panel = 'right';
    $pane->type = 'block';
    $pane->subtype = 'mps-topbox';
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
    $pane->uuid = 'fcf5e7f1-fa5b-413b-8b58-5058388e55c2';
    $display->content['new-fcf5e7f1-fa5b-413b-8b58-5058388e55c2'] = $pane;
    $display->panels['right'][0] = 'new-fcf5e7f1-fa5b-413b-8b58-5058388e55c2';
    $pane = new stdClass();
    $pane->pid = 'new-95a8de46-a09d-47f9-bdb6-8f0208761814';
    $pane->panel = 'right';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_post-usanetwork_post_latest';
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
    $pane->uuid = '95a8de46-a09d-47f9-bdb6-8f0208761814';
    $display->content['new-95a8de46-a09d-47f9-bdb6-8f0208761814'] = $pane;
    $display->panels['right'][1] = 'new-95a8de46-a09d-47f9-bdb6-8f0208761814';
    $pane = new stdClass();
    $pane->pid = 'new-98bb2871-ce66-4d85-8062-7c8ea734f41d';
    $pane->panel = 'right';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_post-usanetwork_post_banners';
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
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = '98bb2871-ce66-4d85-8062-7c8ea734f41d';
    $display->content['new-98bb2871-ce66-4d85-8062-7c8ea734f41d'] = $pane;
    $display->panels['right'][2] = 'new-98bb2871-ce66-4d85-8062-7c8ea734f41d';
    $pane = new stdClass();
    $pane->pid = 'new-bc6f5395-4936-47e0-92e2-4b106caca865';
    $pane->panel = 'top';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_post-usanetwork_post_header';
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
    $pane->uuid = 'bc6f5395-4936-47e0-92e2-4b106caca865';
    $display->content['new-bc6f5395-4936-47e0-92e2-4b106caca865'] = $pane;
    $display->panels['top'][0] = 'new-bc6f5395-4936-47e0-92e2-4b106caca865';
    $pane = new stdClass();
    $pane->pid = 'new-869f56fb-2ec1-46ef-b69f-fc076add3a2d';
    $pane->panel = 'top';
    $pane->type = 'block';
    $pane->subtype = 'usanetwork_post-usanetwork_post_global_header';
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
    $pane->uuid = '869f56fb-2ec1-46ef-b69f-fc076add3a2d';
    $display->content['new-869f56fb-2ec1-46ef-b69f-fc076add3a2d'] = $pane;
    $display->panels['top'][1] = 'new-869f56fb-2ec1-46ef-b69f-fc076add3a2d';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['term_view_panel_context'] = $handler;

  return $export;
}
