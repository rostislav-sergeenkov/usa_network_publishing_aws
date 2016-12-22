<?php

use \PHPExif\Exif;

class SimpleExifAdapter extends \PHPExif\Reader\Adapter\Exiftool {

  /**
   * @inheritdoc
   */
  public function setToolPath($path) {
    if ($path == '') {
      // Try to fallback to the automatic discovery mechanism if we get an empty
      // path (which is the default).
      $path = $this->getToolPath();
    }

    parent::setToolPath($path);
  }

  /**
   * @inheritdoc
   */
  public function getExifFromFile($file)
  {
    $result = $this->getCliOutput(
      sprintf(
        '%1$s -j %2$s',
        $this->getToolPath(),
        $file
      )
    );

    $data = json_decode($result, true);

    // If we don't get anything back from exiftool, something has gone horribly
    // wrong and it's out of our hands.
    if (is_null($data)) {
      return false;
    }

    $mappedData = $this->mapData(reset($data));
    $exif = new Exif($mappedData);

    return $exif;
  }

  /**
   * @inheritdoc
   */
  public function mapData(array $source) {
    $map = parent::mapData($source);

    // If Caption isn't set, fall back to the stupid nonstandard Description field.
    if ($map[Exif::CAPTION] === false) {
      $map[Exif::CAPTION] = isset($source['Description']) ? $source['Description'] : false;
    }
    // If it's still not set, fall back to the even more stupid nonstandard
    // ImageDescription field.
    if ($map[Exif::CAPTION] === false) {
      $map[Exif::CAPTION] = isset($source['ImageDescription']) ? $source['ImageDescription'] : false;
    }

    // If we don't have copyright information, fallback to the Rights field.
    if ($map[Exif::COPYRIGHT] === false) {
      $map[Exif::COPYRIGHT] = isset($source['Rights']) ? $source['Rights'] : false;
    }

    // If we don't have author information, fallback to the Creator field.
    if ($map[Exif::AUTHOR] === false) {
      $map[Exif::AUTHOR] = isset($source['Creator']) ? $source['Creator'] : false;
    }

    // If we don't have credit information, fallback to the Credit field.
    if ($map[Exif::CREDIT] === false) {
      $map[Exif::CREDIT] = isset($source['Credit']) ? $source['Credit'] : false;
    }

    // If we don't have source information, fallback to the Source field.
    if ($map[Exif::SOURCE] === false) {
      $map[Exif::SOURCE] = isset($source['Source']) ? $source['Source'] : false;
    }

    // If we don't have headline information, fallback to the Headline field.
    if ($map[Exif::HEADLINE] === false) {
      $map[Exif::HEADLINE] = isset($source['Headline']) ? $source['Headline'] : false;
    }

    // If we don't have jobtitle information, fallback to the By-lineTitle field.
    if ($map[Exif::JOB_TITLE] === false) {
      $map[Exif::JOB_TITLE] = isset($source['By-lineTitle']) ? $source['By-lineTitle'] : false;
    }


    return $map;
  }
}
