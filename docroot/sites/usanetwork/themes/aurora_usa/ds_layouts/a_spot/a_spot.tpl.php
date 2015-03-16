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

//color for the episodic lines
$line_1_color = trim(strip_tags($line_1_color));
$line_2_color = trim(strip_tags($line_2_color));
$line_3_color = trim(strip_tags($line_3_color));

//font-size for the episodic lines
$line_1_fontsize = trim(strip_tags($line_1_fontsize));
$line_2_fontsize = trim(strip_tags($line_2_fontsize));
$line_3_fontsize = trim(strip_tags($line_3_fontsize));

//tablet landscape font-size for the episodic lines
$line_1_tabletlandscape_fontsize = trim(strip_tags($line_1_tabletlandscape_fontsize));
$line_2_tabletlandscape_fontsize = trim(strip_tags($line_2_tabletlandscape_fontsize));
$line_3_tabletlandscape_fontsize = trim(strip_tags($line_3_tabletlandscape_fontsize));

//tablet portrait font-size for the episodic lines
$line_1_tabletportrait_fontsize = trim(strip_tags($line_1_tabletportrait_fontsize));
$line_2_tabletportrait_fontsize = trim(strip_tags($line_2_tabletportrait_fontsize));
$line_3_tabletportrait_fontsize = trim(strip_tags($line_3_tabletportrait_fontsize));

//mobile font-size for the episodic lines
$line_1_mobile_fontsize = trim(strip_tags($line_1_mobile_fontsize));
$line_2_mobile_fontsize = trim(strip_tags($line_2_mobile_fontsize));
$line_3_mobile_fontsize = trim(strip_tags($line_3_mobile_fontsize));

$nodeid = $node->nid;

$text_1_font_size = $text_1_font_size ? $text_1_font_size : '';
$text_2_font_size = $text_2_font_size ? $text_2_font_size : '';
$media_tablet_portrait = $media_tablet_portrait ? $media_tablet_portrait : '';

if($text_1_font_size == '&nbsp;') {
  $text_1_font_size = '';
}

if($text_2_font_size == '&nbsp;') {
  $text_2_font_size = '';
}

if ($media_tablet_portrait == '&nbsp;') {
  $media_tablet_portrait = '';
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

if ((isset($line_1_color)) && ($line_1_color != '&nbsp;')) {
  $css .= '  
.aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-show-title,
.aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-show-title,
.aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-show-title {
  color: ' . $line_1_color . ';
}
';
}
if ((isset($line_2_color)) && ($line_2_color != '&nbsp;')) {
  $css .= '
.aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-show-time,
.aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-show-time 
.aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-show-time {
  color: ' . $line_2_color . ';
} 
';
}
if ((isset($line_3_color)) && ($line_3_color != '&nbsp;')) {
  $css .= '
.aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-episode-title,
.aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-episode-title,
.aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-episode-title {
  color: ' . $line_3_color . ';
}  
';
}

if ((isset($line_1_mobile_fontsize)) && ($line_1_mobile_fontsize != '&nbsp;')) {
  $css .= '
@media (max-width: 709px) {
.aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-show-title,
.aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-show-title,
.aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-show-title {
  font-size: ' . $line_1_mobile_fontsize . 'px;
}
}
';
}
if ((isset($line_2_mobile_fontsize)) && ($line_2_mobile_fontsize != '&nbsp;')) {
  $css .= '
@media (max-width: 709px) {
.aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-show-time,
.aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-show-time 
.aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-show-time {
  font-size: ' . $line_2_mobile_fontsize . 'px;
}
}
';
}
if ((isset($line_3_mobile_fontsize)) && ($line_3_mobile_fontsize != '&nbsp;')) {
  $css .= '
@media (max-width: 709px) {
.aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-episode-title,
.aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-episode-title,
.aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-episode-title {
  font-size: ' . $line_3_mobile_fontsize . 'px;
}
}
';
}

if ((isset($line_1_tabletportrait_fontsize)) && ($line_1_tabletportrait_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 710px) and (max-width: 1019px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-show-title,
  .aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-show-title,
  .aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-show-title {
    font-size: ' . $line_1_tabletportrait_fontsize . 'px;
  }
}
';
}
if ((isset($line_2_tabletportrait_fontsize)) && ($line_2_tabletportrait_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 710px) and (max-width: 1019px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-show-time,
  .aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-show-time 
  .aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-show-time {
    font-size: ' . $line_2_tabletportrait_fontsize . 'px;
  }
}
';
}
if ((isset($line_3_tabletportrait_fontsize)) && ($line_3_tabletportrait_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 710px) and (max-width: 1019px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-episode-title,
  .aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-episode-title,
  .aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-episode-title {
    font-size: ' . $line_3_tabletportrait_fontsize . 'px;
  }
}
';
}

if ((isset($line_1_tabletlandscape_fontsize)) && ($line_1_tabletlandscape_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 1020px) and (max-width: 1334px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-show-title,
  .aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-show-title,
  .aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-show-title {
    font-size: ' . $line_1_tabletlandscape_fontsize . 'px;
  }
}
';
}
if ((isset($line_2_tabletlandscape_fontsize)) && ($line_2_tabletlandscape_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 1020px) and (max-width: 1334px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-show-time,
  .aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-show-time 
  .aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-show-time {
    font-size: ' . $line_2_tabletlandscape_fontsize . 'px;
  }
}
';
}
if ((isset($line_3_tabletlandscape_fontsize)) && ($line_3_tabletlandscape_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 1020px) and (max-width: 1334px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .episodic-episode-title,
  .aspot-node-' . $nodeid . ' a:hover .meta-wrap.episodic .episodic-episode-title,
  .aspot-node-' . $nodeid . ' a:visited .meta-wrap.episodic .episodic-episode-title {
    font-size: ' . $line_3_tabletlandscape_fontsize . 'px;
  }
}
';
}

if ((isset($line_1_fontsize)) && ($line_1_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 1335px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .meta .episodic-show-title {
    font-size: ' . $line_1_fontsize . 'px;
  }
}
';
}
if ((isset($line_2_fontsize)) && ($line_2_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 1335px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .meta .episodic-show-time {
    font-size: ' . $line_2_fontsize . 'px;
  }
}
';
}
if ((isset($line_3_fontsize)) && ($line_3_fontsize != '&nbsp;')) {
  $css .= '
@media (min-width: 1335px) {
  .aspot-node-' . $nodeid . ' a .meta-wrap.episodic .meta .episodic-episode-title {
    font-size: ' . $line_3_fontsize . 'px;
  }
}
';
}

// ugly is ugly but ugly is working for the moment
drupal_add_css($css, array('group' => CSS_THEME, 'type' => 'inline', 'every_page' => FALSE));
?>

<div class="<?php print $classes;?> aspot aspot-node-<?php print $nodeid; ?>"<?php print $attributes; ?>>
<?php if ($link && $link !== '&nbsp;'): ?>
  <?php if ((!$target) || ($target && $target == '&nbsp;')): ?> 
    <a href="<?php print $link; ?>" class="aspot-link">
  <?php else: ?>
    <a href="<?php print $link; ?>" target="<?php print $target; ?>" class="aspot-link">
  <?php endif; ?>
<?php endif; ?>

  <?php if ((!isset($node->field_is_episodic['und'][0]['value'])) || (isset($node->field_is_episodic['und'][0]['value']) && $node->field_is_episodic['und'][0]['value'] == 0)): ?>
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
  <?php else : ?>
     <?php if ($line_1_image && $line_1_image !== '&nbsp;'): ?>
      <div class="show-title-image"><?php print $line_1_image; ?></div>
    <?php endif; ?>
    <div class="meta-wrap episodic">
      <div class="meta">
      <?php if (!$line_1_image || $line_1_image == '&nbsp;'): ?>
        <?php if ($line_1_tite && $line_1_tite !== '&nbsp;'): ?>
          <h2 class="episodic-show-title"><?php print $line_1_tite; ?></h2>
        <?php endif; ?>
      <?php endif; ?>
      <?php if ($line_2_tite && $line_2_tite !== '&nbsp;'): ?>
        <h3 class="episodic-show-time"><?php print ($line_2_tite); ?></h3>
      <?php endif; ?>
      <?php if ($line_3_tite && $line_3_tite !== '&nbsp;'): ?>
        <h4 class="episodic-episode-title"><span class="arrow-right">&#9658;</span><?php print ($line_3_tite); ?></h4>
      <?php endif; ?>
      </div>
    </div>
  <?php endif; ?>

  <div data-picture data-alt="" data-class="tile-img">
    <?php if ($media_mobile): ?><?php print $media_mobile; ?><?php endif; ?>
    <?php if ($media_tablet_portrait): ?><?php print $media_tablet_portrait; ?><?php endif; ?>
    <?php if ($media_desktop): ?><?php print $media_desktop; ?><?php endif; ?>   
  </div>
  <?php if(!empty($aspot_page)):?>
    <?php drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/aspot_page.js'); ?>
    <div id="aspot-video-container"></div>
  <?php endif; ?>
<?php if ($link || $link !== '&nbsp;'): ?>
  </a>
<?php endif; ?>
</div>
