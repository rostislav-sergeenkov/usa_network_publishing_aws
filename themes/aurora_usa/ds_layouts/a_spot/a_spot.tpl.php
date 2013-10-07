<?php
/*
 * warning: hideos temporary things ahead
 * @TODO: a proper implementation of the css and js
 */
$hex = strip_tags(trim($hex));
if ($hex == '&nbsp;') {
  $hex = 'fff';
}
$hexcolor = $hex ?  $hex : 'ffffff';
$nodeid = $node->nid;

$text_1_font_size = $text_1_font_size ? $text_1_font_size : '';
$text_2_font_size = $text_2_font_size ? $text_2_font_size : '';

if($text_1_font_size == '&nbsp;') {
  $text_1_font_size = '';
}

if($text_2_font_size == '&nbsp;') {
  $text_2_font_size = '';
}

/*
 * adding custom css here
 */
$css = '
.aspot-node-'. $nodeid .' a,
.aspot-node-'. $nodeid .' a:hover,
.aspot-node-'. $nodeid .' a:visited {
  color: #'. $hexcolor .';
}
.aspot-node-'. $nodeid .' a .meta-wrap {
  color: #'. $hexcolor .';
}
.aspot-node-'. $nodeid .' a .meta .show-title:after {
  background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #'. $hexcolor .'), color-stop(100%, transparent));
  background-image: -webkit-linear-gradient(left, #'. $hexcolor .', transparent);
  background-image: -moz-linear-gradient(left, #'. $hexcolor .', transparent);
  background-image: -o-linear-gradient(left, #'. $hexcolor .', transparent);
  background-image: linear-gradient(left, #'. $hexcolor .', transparent);
}
.ie9 .aspot-node-'. $nodeid .' a .meta .show-title:after {
  background-color: #'. $hexcolor .';
}
';
// ugly is ugly but ugly is working for the moment
drupal_add_css($css, array('group' => CSS_THEME, 'type' => 'inline', 'every_page' => FALSE));
?>

<div class="<?php print $classes;?> aspot aspot-node-<?php print $nodeid; ?>">
<?php if ($link && $link !== '&nbsp;'): ?>
  <a href="<?php print $link; ?>" class="aspot-link">
<?php endif; ?>

  <?php if ($aspot_title_image && $aspot_title_image !== '&nbsp;'): ?>
    <div class="show-title-image"><?php print $aspot_title_image; ?></div>
  <?php endif; ?>
  <div class="meta-wrap">
    <div class="meta">
    <?php if (!$aspot_title_image || $aspot_title_image == '&nbsp;'): ?>
      <?php if ($text_1 && $text_1 !== '&nbsp;'): ?>
        <h1 class="show-title<?php print $text_1_font_size; ?>"><?php print $text_1; ?></h1>
      <?php endif; ?>
    <?php endif; ?>
    <?php if ($mobile_text_2 && $mobile_text_2 !== '&nbsp;'): ?>
      <h2 class="mobile-show-time show-time"><?php print $mobile_text_2; ?></h2>
    <?php endif; ?>
    <?php if ($text_2 && $text_2 !== '&nbsp;'): ?>
      <h2 class="show-time<?php print $text_2_font_size; ?>"><?php print ($text_2); ?></h2>
    <?php endif; ?>
    <?php if ($text_3 && $text_3 !== '&nbsp;'): ?>
      <h3 class="episode-title"><?php print ($text_3); ?></h3>
    <?php endif; ?>
    </div>
    <?php if ($cta && $cta !== '&nbsp;'): ?>
    <div class="cta"><?php print $cta; ?></div>
    <?php endif; ?>
  </div>

  <div data-picture data-alt="" data-class="tile-img">
    <?php if ($media_mobile): ?><?php print $media_mobile; ?><?php endif; ?>
    <?php if ($media_tablet_portrait): ?><?php print $media_tablet_portrait; ?><?php endif; ?>
    <?php if ($media_desktop): ?><?php print $media_desktop; ?><?php endif; ?>   
  </div>

<?php if ($link || $link !== '&nbsp;'): ?>
  </a>
<?php endif; ?>
</div>
