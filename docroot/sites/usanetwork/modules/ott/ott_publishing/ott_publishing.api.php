<?php

/**
 * @file
 *
 * OTT Publishing module hooks and examples.
 */

/**
 * Returns information about items participating in the publishing process.
 *
 * Each item is represented by a "publishing profile".
 *
 * @return array
 *
 * Returns array of publishing profiles keyed by unique id.
 * Array contains the following fields:
 *  - entity type: [string] Type of the entity. For example "node", "file", etc.
 *    (omit this field if generic object is used - see "object type" and "object
 *    label" keys).
 *  - object type: [string] Type of the generic object (non-entity).
 *    (omit this field if entity is used - see "entity type" key).
 *  - object label: [string] Human-readable object name.
 *    (omit this field if entity is used: "entity type" key).
 *  - match callback: [callable] Function that returns true if entity fits the
 *    profile. Receives entity itself and its type like
 *    hook_entity_update($entity, $type). For example it can check
 *    $entity->type == 'some type'.
 *    If omitted, entities will be matched by entity type only.
 *  - endpoint callback: [string] Function that should return
 *    an array of endpoints (parts of the URL)
 *    for all the remote operations with entity:
 *    - create,
 *    - update,
 *    - read,
 *    - delete.
 *  - preprocess callback: [callable] Function that can prepare entity for
 *    publishing. Receives entity itself, its publishing profile and instance
 *    to publish to ($entity, $profile, $instance).
 *    Can be omitted.
 *  - process callback: [callable] Function that returns entity data that can be
 *    published. Receives entity itself, its publishing profile and instance to
 *    publish to ($entity, $profile, $instance). All parameters are passed to
 *    preprocess callback before this.
 *    Mandatory.
 *  - postprocess callback: [callable] Function that can update data prepared by
 *    process callback. Receives the data, entity itself, its publishing profile
 *    and instance to publish to ($data, $entity, $profile, $instance).
 *    Can be omitted.
 *  - delete callback: [callable] Function that returns entity data when entity is
 *    about to be deleted.
 *    Receives the data, entity itself, its publishing profile
 *    and instance to publish to ($data, $entity, $profile, $instance).
 *    Can be omitted.
 *  - response callback: [callable] Function that can be used for recursive
 *    publishing of attached entities based on the status of parent entity.
 *    Receives the boolean status on the request, entity itself, its publishing
 *    profile, instance to publish to and the context
 *  - postdelete callback: [callable] Called after entity is deleted.
 *    Can be omitted.
 *  - fallback publishing callback: Function that can be used to define whether
 *    publishing should be re-run.
 *    Practical case: re-run publishing if server returns 400-x HTTP code.
 *  - mode: [int] Publishing mode. Can be automatic, manual or disabled.
 *    Automatic means entity will be published on hook_entity_update.
 *    Manual means publishing controls will be added to entity edit form,
 *    allowing admins to publish it manually.
 *    Use one of the following constants as value:
 *    OTT_PUBLISHING_MODE_DISABLED|OTT_PUBLISHING_MODE_MANUAL|OTT_PUBLISHING_MODE_AUTO.
 *    If omitted, defaults to disabled.
 *  - form id: [string] Entity edit form ID used to attach manual publishing
 *    controls in manual publishing mode.
 *    Attachment is done by ott_publishing_form_alter().
 *  - output format callback: [callable] Function that converts the data created
 *    by preprocess, process and postprocess callbacks to appropriate format
 *    before actually pushing it to API Services.
 *    If omitted, defaults to drupal_json_encode.
 */
function hook_ott_publishing_profile_info() {
  $profiles = array();
  $profiles['cool_stuff'] = array(
    'entity type' => 'cool_entity',
    'object type' => 'cool_object',
    'object label' => 'Cool object',
    'mode' => OTT_PUBLISHING_MODE_MANUAL,
    'form id' => 'cool_entity_edit_form',
    'match callback' => 'cool_stuff_ott_publishing_match',
    'endpoint callback' => 'cool_stuff_ott_publishing_get_endpoint',
    'preprocess callback' => 'cool_stuff_ott_publishing_preprocess',
    'process callback' => 'cool_stuff_ott_publishing_process',
    'delete callback' => 'cool_stuff_ott_publishing_delete',
    'postdelete callback' => 'cool_stuff_ott_publishing_postdelete',
    'postprocess callback' => 'cool_stuff_ott_publishing_postprocess',
    'response callback' => 'cool_stuff_ott_publishing_response',
    'validation callback' => 'cool_stuff_ott_publishing_validate',
    'output format callback' => 'drupal_json_encode',
    'instance types' => ['api_services'],
  );

  return $profiles;
}

/**
 * Allows altering of publishing profiles info.
 *
 * @param array $profiles
 *  Information received from hook_ott_publishing_profile_info().
 */
function hook_ott_publishing_profile_info_alter($profiles) {
  if (isset($profiles['cool_stuff'])) {
    $profiles['cool_stuff']['mode'] = OTT_PUBLISHING_MODE_AUTO;
  }
}

/**
 * Allows altering of item data created by preprocess, process and postprocess
 * callbacks, before sending it to output format callback.
 *
 * @param array $data
 * @param mixed $entity
 * @param array $profile
 * @param object $instance
 */
function hook_ott_publishing_item_data_alter(&$data, $entity, $profile, $instance) {
  if ('cool_stuff' == $profile['id']) {
    $data['additional_data'] = 'some additional data';
  }
}

/**
 * Allows adding secondary functionality (or logic) followed right after http
 * request.
 *
 * @param string $request_url
 * @param array $request_options
 * @param object $response
 * @param array $context
 */
function hook_ott_publishing_http_request_after($request_url, $request_options, $response, $context) {
  watchdog('cool_stuff_log', 'Http request was performed!');
}
