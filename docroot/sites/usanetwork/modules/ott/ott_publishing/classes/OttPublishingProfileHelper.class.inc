<?php

/**
 * @file
 * OttPublishingProfileHelper class.
 */

/**
 * Class OttPublishingProfileHelper
 */
class OttPublishingProfileHelper {
  /**
   * Publishing profile.
   *
   * @var OttPublishingProfile
   */
  protected $profile;

  /**
   * @param OttPublishingProfile $profile
   */
  public function __construct($profile) {
    $this->profile = $profile;
  }

  /**
   * Returns publishing profile.
   *
   * @return OttPublishingProfile
   */
  protected function getProfile() {
    return $this->profile;
  }

  /**
   * Returns entity info.
   *
   * @param string $key
   *
   * @return mixed|null
   */
  public function getEntityInfo($key = NULL) {
    if (!$this->getProfile()->isEntity()) {
      return NULL;
    }

    $entityInfo = entity_get_info($this->getProfile()->getItemType());
    if (!$entityInfo) {
      return NULL;
    }

    if (NULL === $key) {
      return $entityInfo;
    }

    return isset($entityInfo[$key]) ?
      $entityInfo[$key] :
      NULL;
  }

  /**
   * Returns "Create new revision" form key.
   *
   * @return string
   */
  public function getNewRevisionFormKey() {
    if ('node' == $this->getProfile()->getItemType()) {
      return 'revision';
    }

    return 'is_new_revision';
  }

  /**
   * Returns profile entity revision key.
   *
   * @return string
   */
  public function getRevisionKey() {
    $entity_info = $this->getEntityInfo();

    return $entity_info['entity keys']['revision'];
  }

  /**
   * Returns profile entity bundle key.
   *
   * @return string
   */
  public function getEntityTypeBundleKey() {
    $entity_info = $this->getEntityInfo();

    return !empty($entity_info['entity keys']['bundle']) ?
      $entity_info['entity keys']['bundle'] :
      NULL;
  }

  /**
   * Returns profile entity type label.
   *
   * @return string
   */
  public function getEntityTypeLabel() {
    return $this->getEntityInfo('label');
  }

  /**
   * Returns profile entity title.
   *
   * @param array $entity
   *
   * @return mixed
   */
  public function getEntityTitle($entity) {
    $wrapper = entity_metadata_wrapper($this->getProfile()->getItemType(), $entity);
    return $wrapper->label();
  }

  /**
   * Returns profile entity identifier.
   *
   * @param $entity
   *
   * @return mixed
   */
  public function getEntityId($entity) {
    $wrapper = entity_metadata_wrapper($this->getProfile()->getItemType(), $entity);
    return $wrapper->getIdentifier();
  }

  /**
   * Returns profile entity revision identifier.
   *
   * @param $entity
   *
   * @return int|null
   */
  public function getEntityRevisionId($entity) {
    // Get current entity revision ID.
    $revision_key = $this->getRevisionKey();
    if (!$revision_key) {
      return NULL;
    }

    return isset($entity->{$revision_key}) ?
      $entity->{$revision_key} :
      NULL;
  }

  /**
   * Returns profile entity bundle label.
   *
   * @param $entity
   *
   * @return mixed
   */
  public function getEntityBundleLabel($entity) {
    $entity = (object) $entity;
    $bundle_key = $this->getEntityTypeBundleKey();
    $bundle = $bundle_key ? $entity->{$bundle_key} : $this->getProfile()->getItemType();
    $entity_info = $this->getEntityInfo();

    if (!is_string($bundle) && method_exists($entity, 'getBundle')) {
      $bundle = $entity->getBundle();
    }

    return $entity_info['bundles'][$bundle]['label'];
  }

  /**
   * Returns human-readable item information text.
   *
   * @param $item
   *
   * @return string
   */
  public function getItemInfoString($item) {
    if ($this->getProfile()->isEntity()) {
      $type = $this->getEntityTypeLabel();
      $bundle = $this->getEntityBundleLabel($item);
      if ($bundle == $type) {
        $bundle = '';
      }

      $id = $this->getEntityId($item);
      $title = $this->getEntityTitle($item);

      return $type . ($bundle ? " ({$bundle}) " : ' ') . "#{$id} \"{$title}\"";
    }

    if (isset($item->label)) {
      return $item->label;
    }

    return $this->getProfile()->getLabel();
  }

  /**
   * Returns profile entity instance revision getter function.
   *
   * @return callable
   */
  public function getInstanceRevisionGetter() {
    $function = "ott_publishing_get_{$this->getProfile()->getItemType()}_instance_revision";
    return is_callable($function) ?
      $function :
      'ott_publishing_get_entity_instance_revision';
  }

  /**
   * Returns profile entity instance revision setter function.
   *
   * @return callable
   */
  public function getInstanceRevisionSetter() {
    $function = "ott_publishing_set_{$this->getProfile()->getItemType()}_instance_revision";
    return is_callable($function) ?
      $function :
      'ott_publishing_set_entity_instance_revision';
  }

  /**
   * Returns profile entity instance revision removal function.
   *
   * @return callable
   */
  public function getInstanceRevisionRemover() {
    $function = "ott_publishing_remove_{$this->getProfile()->getItemType()}_instance_revision";
    return is_callable($function) ?
      $function :
      'ott_publishing_remove_entity_instance_revision';
  }

  /**
   * Return item MPX id if possible.
   *
   * @param $item
   *
   * @return string|null
   */
  public function getItemMpxId($item) {
    if (!empty($item->field_mpx_file[LANGUAGE_NONE][0])) {
      $mpx_file = $item->field_mpx_file[LANGUAGE_NONE][0];
      if (!empty($mpx_file['field_mpx_id'][LANGUAGE_NONE][0])) {
        return $mpx_file['field_mpx_id'][LANGUAGE_NONE][0]['value'];
      }
    }
    return NULL;
  }

  /**
   * Return item MPX guid if possible.
   *
   * @param $item
   *
   * @return string|null
   */
  public function getItemMpxGuid($item) {
    if (!empty($item->field_mpx_file[LANGUAGE_NONE][0])) {
      $mpx_file = $item->field_mpx_file[LANGUAGE_NONE][0];
      if (!empty($mpx_file['field_mpx_guid'][LANGUAGE_NONE][0])) {
        return $mpx_file['field_mpx_guid'][LANGUAGE_NONE][0]['value'];
      }
    }
    return NULL;
  }
}
