<?php
/**
 * @file
 * usanetwork_workbench.workbench_workflows.inc
 */

/**
 * Implements hook_default_workbench_workflows_workflows().
 */
function usanetwork_workbench_default_workbench_workflows_workflows() {
  $export = array();

  $workflow = new stdClass();
  $workflow->disabled = FALSE; /* Edit this to true to make a default workflow disabled initially */
  $workflow->api_version = 1;
  $workflow->name = 'usa_default_workflow';
  $workflow->editor_title = '';
  $workflow->admin_title = 'USA default workflow';
  $workflow->admin_description = 'please work';
  $workflow->requiredcontexts = array(
    0 => array(
      'identifier' => 'Node',
      'keyword' => 'node',
      'name' => 'entity:node',
      'id' => 1,
    ),
  );
  $workflow->contexts = array();
  $workflow->relationships = array();
  $workflow->access = array();
  $workflow->weight = 1;
  $workflow->category = '';
  $workflow->states = array(
    'draft' => 'draft',
    'published' => 'published',
    'unpublished' => 'unpublished',
  );
  $workflow->events = array(
    'to_draft' => 'to_draft',
    'to_published' => 'to_published',
    'to_unpublished' => 'to_unpublished',
  );
  $export['usa_default_workflow'] = $workflow;

  return $export;
}
