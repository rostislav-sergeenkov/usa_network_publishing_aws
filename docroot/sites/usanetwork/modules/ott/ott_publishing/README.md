OTT Publishing framework
========================
The programmatic infrastructure responsible for delivery of OTT media content and application (platform) structure to API Services.
Includes object monitoring, data transformation and transportation.

## Terminology
- Object: a single piece of media content or application (platform) structure participating in the publishing process. A node, file, or any other entity.
- Publishing profile: configuration for a class of Objects. Includes definition of the Object, publishing mode, API Services destination, etc.
- Monitoring: the infrastructure that includes automatic publishing of updated Objects, and the UI for reviewing, managing states and manual publishing of Objects.
- Data transformation: functional layer responsible for preparation of Object data prior to sending it to the API Services.
- Data transportation: functional layer responsible for delivery of prepared Object data to the API Services and reaction to API Services response.


## Features
- Publishing profile management
- Object event monitoring and reaction
- Manual publishing workflow
- Publishing states management
- API Services connection management
- Data transformation
- Data transportation


## Internal structure
The OTT Publishing framework is represented by the *ott_publishing* (OTT Publishing) module.

Module exposes a set of hooks allowing integration of new Objects and altering of the publishing process.

All hooks are described in *ott_publishing.api.php* file.


## A new Object integration how-to
To engage a new Object in the publishing flow the following steps must be performed:

#### Define Object with a Publishing profile
To do so, use the *hook_ott_publishing_profiles_info()*.

```php

    function example_ott_publishing_profiles_info() {
       $profiles = array();
       $profiles['cool_stuff'] = array(
         'module' => 'my_cool_module',
         'entity type' => 'cool_entity',
         'match callback' => 'cool_stuff_ott_publishing_match',
         'mode' => OTT_PUBLISHING_MODE_MANUAL,
         'form id' => 'cool_entity_edit_form',
         'endpoint callback' => 'cool_endpoint_callback',
         'preprocess callback' => 'cool_stuff_ott_publishing_preprocess',
         'process callback' => 'cool_stuff_ott_publishing_process',
         'postprocess callback' => 'cool_stuff_ott_publishing_postprocess',
         'output format callback' => 'drupal_json_encode',
       );

       return $profiles;
    }

```

Here we tell the Publishing framework that:

- It should handle a new class of Objects.
- Class identifier is "cool_stuff_object".
- Each Object is an entity of "cool_entity" type.
- If TRUE == cool_stuff_ott_publishing_match($entity, 'cool_entity'), the $entity must be handled.
- This Object is published manually by CMS administrator.
- Manual publishing controls for this entity must be attached to "cool_entity_edit_form".
- Before publishing, entity must be preprocessed by cool_stuff_ott_publishing_preprocess function.
- To publish it, entity data must be created by cool_stuff_ott_publishing_process function.
- When created, data must be updated by cool_stuff_ott_publishing_postprocess function.
- Prepared data must be formatted by drupal_json_encode function before sent to API Services.
- Prepared and formatted data must be sent to "{api.services.instance.url}/{endpoint}" endpoint.



In result:

- Manual publishing controls will appear on the entity edit form.
- With them CMS administrator will be able to publish current state of the entity to a API Services endpoint of his choice.

> Profile configuration can be altered using *hook_ott_publishing_profile_info_alter($profiles)*.
