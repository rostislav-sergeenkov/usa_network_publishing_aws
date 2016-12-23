<?php

/**
 * @file
 * OttPublishingProfile class.
 */

/**
 * Class OttPublishingProfile
 *
 * Wrapper encapsulating work with publishing profiles and subject items.
 */
class OttPublishingProfile {
  /**
   * Publishing mode constants.
   */
  const MODE_DISABLED = 0;
  const MODE_AUTO = 1;
  const MODE_MANUAL = 2;

  /**
   * Static profiles storage.
   *
   * @var array
   */
  private static $profiles = NULL;

  /**
   * Profile ID.
   *
   * @var string
   */
  protected $id;

  /**
   * Parent module name.
   *
   * @var string
   */
  protected $module;

  /**
   * Item type.
   *
   * @var string
   */
  protected $itemType;

  /**
   * Control type. Responsible for control button behaviour.
   *
   * @var string
   */
  protected $controlType;

  /**
   * Item is of Entity type flag.
   *
   * @var bool
   */
  protected $itemIsEntity;

  /**
   * Object label.
   *
   * @var string
   */
  protected $label;

  /**
   * Entity edit form ID.
   *
   * @var string
   */
  protected $formId;

  /**
   * Publishing mode.
   *
   * @var int
   */
  protected $mode;

  /**
   * Supported types of an instances.
   *
   * @var array
   */
  protected $instance_types = [];

  /**
   * Array of callbacks.
   *
   * @var array
   */
  protected $callbacks = [];

  /**
   * Helper object.
   *
   * @var OttPublishingProfileHelper
   */
  protected $helper;

  /**
   * Returns all active publishing profiles.
   *
   * @return array
   */
  public static function getProfiles() {
    if (NULL === self::$profiles) {
      self::initProfiles();
    }

    return self::$profiles;
  }

  /**
   * Returns a publishing profile by its ID.
   *
   * Returns null if profile cannot be found.
   *
   * @param string $id
   *
   * @return OttPublishingProfile|null
   */
  public static function getProfileById($id) {
    $profiles = self::getProfiles();

    return isset($profiles[$id]) ?
      $profiles[$id] :
      NULL;
  }

  /**
   * Returns a publishing profile by entity and its type.
   *
   * Returns null if no suitable profile can be found.
   *
   * @param object $entity
   * @param string $type
   *
   * @return OttPublishingProfile|null
   */
  public static function getProfileByEntity($entity, $type) {
    /** @var OttPublishingProfile $profile */
    foreach (self::getProfiles() as $profile) {
      if ($profile->isEntity() && $profile->getItemType() == $type && $profile->matchCallback($entity)) {
        return $profile;
      }
    }

    return NULL;
  }

  /**
   * Returns a publishing profile by form id.
   *
   * Returns null if no suitable profile can be found.
   *
   * @param string $formId
   *
   * @return OttPublishingProfile|null
   */
  public static function getProfileByFormId($formId) {
    /** @var OttPublishingProfile $profile */
    foreach (self::getProfiles() as $profile) {
      if ($profile->getFormId() == $formId) {
        return $profile;
      }
    }

    return NULL;
  }

  /**
   * Initializes publishing profiles.
   *
   * Fills out the self::$profiles array.
   */
  protected static function initProfiles() {
    $profiles_info = [];
    foreach (module_implements('ott_publishing_profile_info') as $module) {
      $module_profiles_info = module_invoke($module, 'ott_publishing_profile_info');
      foreach ($module_profiles_info as $id => $profile_info) {
        if (isset($profiles_info[$id])) {
          $message_args = [
            '!module' => $profile_info['module'],
            '!id' => $profile_info['id'],
            '!existing_module' => $profiles_info[$id]['module'],
          ];

          $message = t(
            'Publishing profile !module::!id initialization error: profile "!id" already defined by "!existing_module" module.',
            $message_args
          );

          watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_ERROR);
          drupal_set_message($message, 'error');

          continue;
        }

        $profile_info['id'] = $id;
        $profile_info['module'] = $module;
        $profiles_info[$id] = $profile_info;
      }
    }

    drupal_alter('ott_publishing_profile_info', $profiles_info);

    self::$profiles = [];
    foreach ($profiles_info as $key => $profile_info) {
      try {
        $profileClassName = self::getProfileClassName($profile_info);

        /** @var OttPublishingProfile $profile */
        $profile = new $profileClassName($profile_info);

        $profile->loadModuleIncludes();

        self::$profiles[$profile_info['id']] = $profile;
      }
      catch (Exception $e) {
        $message_args = [
          '!module' => $profile_info['module'],
          '!id' => $profile_info['id'],
          '!message' => $e->getMessage(),
        ];

        $message = t(
          'Publishing profile !module::!id initialization error: !message.',
          $message_args
        );

        watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_ERROR);
        drupal_set_message($message, 'error');

        continue;
      }
    }
  }

  /**
   * Returns class name for profile instantiation.
   *
   * Default class is OttPublishingProfile.
   * A module can define a custom profile class and extend default one.
   * This method will be looking for a class named like this:
   * OttPublishingProfile{CustomProfileClassName}
   * Where CustomProfileClassName is camel-case version of the profile ID.
   * For example if profile ID is "mpx_video_file", custom class must be named
   * OttPublishingProfileMpxVideoFile.
   *
   * @param array $profile_info
   *
   * @return string
   */
  protected static function getProfileClassName($profile_info) {
    $profileClassName = 'OttPublishingProfile';

    $customProfileClassName = str_replace('_', ' ', $profile_info['id']);
    $customProfileClassName = ucwords($customProfileClassName);
    $customProfileClassName = str_replace(' ', '', $customProfileClassName);
    $customProfileClassName = $profileClassName . $customProfileClassName;

    return class_exists($customProfileClassName) ?
      $customProfileClassName :
      $profileClassName;
  }

  /**
   * Verifies if callback is callable.
   *
   * @param array $info
   *   Array of data $info.
   * @param string $callback
   *   The name of callback.
   *
   * @throws \Exception
   */
  protected function checkProfileCallback($info, $callback) {
    if (isset($info[$callback]) && !is_callable($info[$callback])) {
      $message = t('Specified !callback (!name) cannot be found', [
        '!callback' => $callback,
        '!name' => $info[$callback],
      ]);
      throw new Exception($message);
    }
  }

  /**
   * Profile constructor.
   * @see hook_ott_publishing_profile_info()
   *
   * @param array $info
   *
   * @throws Exception
   */
  public function __construct($info) {
    $this->id = $info['id'];
    $this->module = $info['module'];

    if (empty($info['entity type']) && empty($info['object type'])) {
      throw new Exception(t('No entity/object type specified'));
    }

    $this->itemType = isset($info['entity type']) ? $info['entity type'] : $info['object type'];
    $this->label    = !empty($info['object label']) ? $info['object label'] : $this->itemType;
    $this->controlType  = isset($info['control type']) ? $info['control type'] : OTT_PUBLISHING_CONTROL_DEFAULT;
    $this->itemIsEntity = isset($info['entity type']);

    $callbacks = [
      'match'    => ['default' => [$this, 'matchCallbackDefault']],
      //@TODO add logic for separate for callbacks.
      'endpoint' => ['default' => NULL],
      'output format' => ['default' => 'drupal_json_encode'],
      'validation'    => ['default' => [$this, 'validationCallbackDefault']],
      'preprocess'    => ['default' => [$this, 'preprocessCallbackDefault']],
      'delete'        => ['default' => [$this, 'deleteCallbackDefault']],
      'postdelete'    => ['default' => [$this, 'postdeleteCallbackDefault']],
      'process'       => ['default' => $info['process callback']],
      'postprocess'   => ['default' => [$this, 'postprocessCallbackDefault']],
      'response'      => ['default' => [$this, 'responseCallbackDefault']],
      'fallback publishing' => ['default' => [$this, 'fallbackPublishingCallbackDefault']],
    ];

    foreach ($callbacks as $name => $default) {
      // Set the default callback.
      $callback_name = $name . ' callback';
      $this->callbacks[$name] = $default;

      // Next step check the standard callbacks. If exists
      // will override the default callback.
      if (!empty($info[$callback_name])) {
        $this->checkProfileCallback($info, $callback_name);
        $this->callbacks[$name]['default'] = $info[$callback_name];
      }

      // Set the Publishing v2 callbacks if they are available. Will override
      // the standard callback.
      $this->setPublishingV2Callbacks($this, $info, $name);
    }

    // Publishing mode.
    if (!empty($info['mode callback']) && is_callable($info['mode callback'])) {
      $this->callbacks['mode callback'] = $info['mode callback'];
    }
    elseif (!empty($info['mode'])) {
      if (!in_array($info['mode'], [
        self::MODE_DISABLED,
        self::MODE_AUTO,
        self::MODE_MANUAL,
      ])) {
        throw new Exception(t('Unknown publishing mode value: !value', ['!value' => $info['mode']]));
      }

      $this->mode = $info['mode'];
    }
    else {
      $this->mode = self::MODE_DISABLED;
    }

    // Form ID.
    $this->formId = !empty($info['form id']) ? $info['form id'] : NULL;
    $this->instance_types = !empty($info['instance types']) ? $info['instance types'] : [];
  }

  /**
   * Sets the publishing v2 callbacks.
   *
   * @param object $profile
   * @param array $info
   * @param string $name
   */
  protected function setPublishingV2Callbacks($profile, $info, $name) {
    $callbacks = isset($info['publishing_v2 callbacks']) ? $info['publishing_v2 callbacks'] : [];
    $callback_name = $name . ' callback';
    foreach ($callbacks as $type => $conf) {
      if (!isset($conf[$callback_name])) {
        continue;
      }
      // Check is the callback is callable.
      $profile->checkProfileCallback($conf, $callback_name);
      $profile->callbacks[$name][$type] = $conf[$callback_name];
    }
  }

  /**
   * Returns profile ID.
   *
   * @return string
   */
  public function getId() {
    return $this->id;
  }

  /**
   * Returns profile module name.
   *
   * @return string
   */
  public function getModule() {
    return $this->module;
  }

  /**
   * Returns profile entity or object type.
   *
   * @return string
   */
  public function getItemType() {
    return $this->itemType;
  }

  /**
   * Returns profile control type.
   *
   * @return string
   */
  public function getControlType() {
    return $this->controlType;
  }

  /**
   * Returns true if profile item is an entity.
   *
   * @return bool
   */
  public function isEntity() {
    return $this->itemIsEntity;
  }

  /**
   * Returns item loaded with cache reset if possible.
   *
   * @param mixed $item
   *
   * @return bool|mixed|null
   */
  public function loadItem($item) {
    if ('node' == $this->getItemType()) {
      return node_load($item->nid, NULL, TRUE);
    }

    if ($this->isEntity()) {
      $loadFunction = $this->getItemType() . '_load';
      if (function_exists($loadFunction)) {
        return $loadFunction($this->getItemId($item), NULL, TRUE);
      }

      $entities = entity_load(
        $this->getItemType(),
        [$this->getItemId($item)],
        [],
        TRUE
      );

      return reset($entities);
    }

    return $item;
  }

  /**
   * Returns item ID.
   *
   * @param mixed $item
   *
   * @return mixed|null
   */
  public function getItemId($item) {
    if ($this->isEntity()) {
      return $this->getHelper()->getEntityId($item);
    }
    elseif (is_object($item) && isset($item->id)) {
      return $item->id;
    }
    elseif (is_array($item) && isset($item['id'])) {
      return $item['id'];
    }

    return NULL;
  }

  /**
   * Returns item label for logs and messages.
   *
   * @param $item
   *
   * @return string
   */
  public function getItemLabel($item) {
    return $this->getHelper()->getItemInfoString($item);
  }

  /**
   * Returns item MPX id if possible.
   *
   * @param $item
   *
   * @return string|null
   */
  public function getItemMpxId($item) {
    return $this->getHelper()->getItemMpxId($item);
  }

  /**
   * Returns item MPX guid if possible.
   *
   * @param $item
   *
   * @return string|null
   */
  public function getItemMpxGuid($item) {
    return $this->getHelper()->getItemMpxGuid($item);
  }

  /**
   * Returns basic item label (object label or just item type).
   *
   * @return string
   */
  public function getLabel() {
    return $this->label;
  }

  /**
   * Returns profile form ID, if specified.
   *
   * @return string|null
   */
  public function getFormId() {
    return $this->formId;
  }

  /**
   * Returns supported types of an instances.
   *
   * @return array
   */
  public function getInstanceTypes() {
    return $this->instance_types;
  }

  /**
   * Returns publishing mode.
   *
   * @param object $entity
   *
   * @return int
   */
  public function getMode($entity) {
    if (!empty($this->callbacks['mode callback'])) {
      return call_user_func($this->callbacks['mode callback'], $entity);
    }
    return $this->mode;
  }

  /**
   * Returns true if publishing mode is automatic.
   *
   * @param object $entity
   *
   * @return bool
   */
  public function isModeAuto($entity) {
    return self::MODE_AUTO == $this->getMode($entity);
  }

  /**
   * Returns true if publishing mode is manual.
   *
   * @param object $entity
   *
   * @return bool
   */
  public function isModeManual($entity) {
    return self::MODE_MANUAL == $this->getMode($entity);
  }

  /**
   * Returns true if publishing is disabled.
   *
   * @param object $entity
   *
   * @return bool
   */
  public function isModeDisabled($entity) {
    return self::MODE_DISABLED == $this->getMode($entity);
  }

  /**
   * Returns true if data tracking check is disabled for this profile.
   *
   * @return bool
   */
  public function isTrackingDisabled() {
    return (bool) variable_get("ott_publishing_tracking_disable_{$this->getId()}", 0);
  }

  /**
   * Returns entity revision key.
   *
   * @return string
   */
  public function getRevisionKey() {
    return $this->getHelper()->getRevisionKey();
  }

  /**
   * Returns "Create new revision" form key.
   *
   * @return string
   */
  public function getNewRevisionFormKey() {
    return $this->getHelper()->getNewRevisionFormKey();
  }

  /**
   * Returns helper object.
   *
   * @return OttPublishingProfileHelper
   */
  protected function getHelper() {
    if (NULL === $this->helper) {
      $this->helper = new OttPublishingProfileHelper($this);
    }

    return $this->helper;
  }

  /**
   * Returns item output prepared to be sent to API Services.
   *
   * @param $item
   * @param $instance
   *
   * @return mixed
   */
  public function prepareItemOutput(&$item, $instance) {
    $this->preprocessCallback($item, $this, $instance);
    $data = $this->processCallback($item, $this, $instance);
    $this->postprocessCallback($data, $item, $this, $instance);

    // Allow data altering.
    drupal_alter('ott_publishing_item_data', $data, $item, $this, $instance);

    $this->validateData($data, $item, $instance);

    return $data ? $this->outputFormatCallback($data, $instance) : NULL;
  }

  /**
   * Returns item delete output prepared to be sent to API Services.
   *
   * @param $item
   * @param $instance
   *
   * @return mixed
   */
  public function prepareItemDeleteOutput(&$item, $instance) {
    $data = $this->deleteCallback($item, $this, $instance);

    // Allow data altering.
    drupal_alter(
      'ott_publishing_item_delete_data',
      $data,
      $item,
      $this,
      $instance
    );

    return $data ? $this->outputFormatCallback($data, $instance) : NULL;
  }

  /**
   * Checks errors, displays and logs them.
   */
  protected function validateData(&$data, $item, $instance) {
    $errors = $this->validationCallback($data, $item, $this, $instance);
    if (!empty($errors)) {
      // Null the data if it is not valid.
      $data = NULL;

      $message = t(
        'Data validation failed for !label: !errors.',
        [
          '!label' => $this->getItemLabel($item),
          '!errors' => implode(', ', $errors),
        ]
      );

      drupal_set_message($message, 'error');
      watchdog(OTT_PUBLISHING_WATCHDOG, $message, array(), WATCHDOG_ERROR);
    }
  }

  /**
   * Match callback wrapper.
   *
   * @return bool
   */
  public function matchCallback($entity, $instance = NULL) {
    $callback = $this->getCorrectCallback('match', $instance);
    return call_user_func_array($callback, [$entity, $instance]);
  }

  /**
   * Default match callback.
   *
   * @return bool
   */
  public function matchCallbackDefault() {
    return TRUE;
  }

  /**
   * Endpoint callback wrapper.
   *
   * @return array
   */
  public function endpointCallback() {
    if (is_null($this->callbacks['endpoint']['default'])) {
      return [];
    }

    return call_user_func_array($this->callbacks['endpoint']['default'], func_get_args());
  }

  /**
   * Validation callback wrapper.
   */
  public function validationCallback($data, $item, $profile, $instance) {
    $callback = $this->getCorrectCallback('validation', $instance);
    return call_user_func_array($callback, [$data, $item, $profile, $instance]);
  }

  /**
   * Returns correct callback.
   *
   * @param string $name
   *   Callback name.
   * @param object $instance
   *   Instance object.
   *
   * @return mixed
   */
  protected function getCorrectCallback($name, $instance) {
    $callback = $this->callbacks[$name]['default'];
    if (isset($instance, $this->callbacks[$name][$instance->instance_type])) {
      $callback = $this->callbacks[$name][$instance->instance_type];
    }
    return $callback;
  }

  /**
   * Preprocess callback wrapper.
   */
  public function preprocessCallback($item, $profile, $instance) {
    $callback = $this->getCorrectCallback('preprocess', $instance);
    return call_user_func_array($callback, [$item, $profile, $instance]);
  }

  /**
   * Default preprocess callback.
   */
  public function preprocessCallbackDefault() {
    return;
  }

  /**
   * Process callback wrapper.
   *
   * @return mixed
   */
  public function processCallback($item, $profile, $instance) {
    $callback = $this->getCorrectCallback('process', $instance);
    return call_user_func_array($callback, [$item, $profile, $instance]);
  }

  /**
   * Process delete wrapper.
   *
   * @return mixed
   */
  public function deleteCallback() {
    list($item, $profile, $instance) = func_get_args();
    $callback = $this->getCorrectCallback('delete', $instance);
    return call_user_func_array($callback, [$item, $profile, $instance]);
  }

  /**
   * Default delete callback.
   */
  public function deleteCallbackDefault() {
    return;
  }

  /**
   * Postdefault delete callback.
   */
  public function postdeleteCallbackDefault() {
    return TRUE;
  }

  /**
   * Postprocess callback wrapper.
   *
   * @return mixed
   */
  public function postprocessCallback($data, $item, $profile, $instance) {
    $callback = $this->getCorrectCallback('postprocess', $instance);
    return call_user_func_array($callback, [$data, $item, $profile, $instance]);
  }

  /*
   * Default postprocess callback.
   */
  public function postprocessCallbackDefault() {
    return;
  }

  /**
   * Output format callback wrapper.
   *
   * @return mixed
   */
  public function outputFormatCallback($data, $instance) {
    $callback = $this->getCorrectCallback('output format', $instance);
    return call_user_func_array($callback, [$data, $instance]);
  }

  /**
   * Fallback publishing callback wrapper.
   *
   * @return bool
   */
  public function shouldRetryInverseOperation($response, $instance = NULL) {
    $callback = $this->getCorrectCallback('fallback publishing', $instance);
    return call_user_func_array($callback, [$response, $instance]);
  }

  /**
   * Default fallback publishing callback.
   *
   * Returns true in case response has error code.
   *
   * @param object $response
   *
   * @return bool
   */
  public function fallbackPublishingCallbackDefault($response) {
    return $response->code >= 400 && $response->code < 500;
  }

  /**
   * Response callback wrapper.
   *
   * @return mixed
   */
  public function onPublishingSuccess() {
    list($item, $profile, $instance) = func_get_args();
    $callback = $this->getCorrectCallback('response', $instance);
    return call_user_func_array($callback, [$item, $profile, $instance]);
  }

  /**
   * Response callback wrapper.
   *
   * @return mixed
   */
  public function onDeleteSuccess() {
    list($item, $profile, $instance) = func_get_args();
    $callback = $this->getCorrectCallback('postdelete', $instance);
    return call_user_func_array($callback, [$item, $profile, $instance]);
  }

  /**
   * Default response callback.
   */
  public function responseCallbackDefault() {
    return TRUE;
  }

  /**
   * Default validation callback.
   */
  public function validationCallbackDefault() {
    return array();
  }

  /**
   * Includes profile-specific files.
   */
  public function loadModuleIncludes() {
    module_load_include('inc', $this->module, $this->module . '.ott_publishing');
  }

  /**
   * Returns true if entity's current revision is currently published to
   * specified instance.
   *
   * @param object $entity
   * @param object $instance
   *
   * @return bool
   */
  public function isCurrentRevisionPublished($entity, $instance = NULL) {
    if (!$this->isEntity()) {
      return FALSE;
    }

    $query = db_select('ott_publishing', 'p')
      ->fields('p')
      ->condition('vid', $this->getCurrentRevisionId($entity))
      ->condition('entity_type', $this->getItemType())
      ->condition('entity_id', $this->getHelper()->getEntityId($entity));

    if (NULL !== $instance) {
      $query->condition('instance', $instance->name);
    }

    return (bool) $query->execute()->rowCount();
  }

  /**
   * Returns entity's current revision ID.
   *
   * @param $entity
   *
   * @return int|null
   */
  public function getCurrentRevisionId($entity) {
    if (!$this->isEntity()) {
      return NULL;
    }

    return $this->getHelper()->getEntityRevisionId($entity);
  }

  /**
   * Returns information on the entity's revision that is currently published
   * to specified instance.
   *
   * Information is a 'ott_publishing' table row.
   *
   * @param object $entity
   * @param object $instance
   *
   * @return array|null
   */
  public function getItemInstanceRevision($entity, $instance) {
    if (!$this->isEntity()) {
      return NULL;
    }

    $revisionGetter = $this->getHelper()->getInstanceRevisionGetter();

    return $revisionGetter($entity, $instance);
  }

  /**
   * Saves information that current entity's revision is published to specified
   * instance.
   *
   * @param object $entity
   * @param object $instance
   */
  public function setItemInstanceRevision($entity, $instance) {
    if (!$this->isEntity()) {
      return;
    }

    $revision_id = $this->getHelper()->getEntityRevisionId($entity);
    $revisionSetter = $this->getHelper()->getInstanceRevisionSetter();

    $revisionSetter($entity, $instance, $revision_id);
  }

  /**
   * Deletes information that current entity's revision is published to
   * specified instance.
   *
   * @param object $entity
   * @param object $instance
   */
  public function removeItemInstanceRevision($entity, $instance) {
    if (!$this->isEntity()) {
      return;
    }

    $revisionRemover = $this->getHelper()->getInstanceRevisionRemover();

    $revisionRemover($entity, $instance);
  }
}
