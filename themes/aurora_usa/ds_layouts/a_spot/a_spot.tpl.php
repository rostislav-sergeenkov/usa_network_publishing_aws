<?php 
/*
 * warning: hideos temporary things ahead
 * @TODO: a proper implementation of the css and js
 */
if ($hex == '&nbsp;') {
  $hex = 'fff';
}
$hexcolor = $hex ? '#' . $hex : '#ffffff';

/*
 * adding custom css here
 */
$css = '
.aspot {
  position: relative;
  display: block;
}
.aspot a,
.aspot a:hover,
.aspot a:visited {
  color: '. $hexcolor .';
}
.aspot a .meta-wrap {
  position: absolute;
  z-index: 1;
  top: 110px;
  left: 0;
  padding-left: 15px;
  color: '. $hexcolor .';
  text-align: left;
}
@media (min-width: 645px) and (max-width: 959px) {
  .aspot a .meta-wrap {
    top: 150px;
    padding-left: 25px;
  }
}
@media (min-width: 960px) and (max-width: 1274px) {
  .aspot a .meta-wrap {
    top: 140px;
    padding-left: 35px;
  }
}
@media (min-width: 1275px) {
  .aspot a .meta-wrap {
    top: 190px;
    padding-left: 50px;
  }
}
.aspot a .meta {
  margin-bottom: 10px;
}
.aspot a .meta .show-title,
.aspot a .meta .show-time,
.aspot a .meta .episode-title,
.aspot a .meta .cta {
  margin: 0;
  line-height: 1;
}
.aspot a .meta .show-title,
.aspot a .meta .show-time {
  font-size: 24px;
}
.aspot a .meta .show-title,
.aspot a .meta .show-time,
.aspot a .meta .cta {
  text-transform: uppercase;
}
.aspot a .meta .show-time,
.aspot a .meta .episode-title,
.aspot a .meta .cta {
  font-family: Proxima N W01 Thin Reg;
  font-weight: normal;
  letter-spacing: 0.05em;
}
.aspot a .meta .show-title {
  position: relative;
  margin-bottom: 5px;
}
.aspot a .meta .show-title:after {
  content: "";
  z-index: 1;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, '. $hexcolor .'), color-stop(100%, transparent));
  background-image: -webkit-linear-gradient(left, '. $hexcolor .', transparent);
  background-image: -moz-linear-gradient(left, '. $hexcolor .', transparent);
  background-image: -o-linear-gradient(left, '. $hexcolor .', transparent);
  background-image: linear-gradient(left, '. $hexcolor .', transparent);
}
.aspot a .meta .show-time {
  margin-bottom: 2px;
}
.aspot a .meta .episode-title {
  font-size: 12px;
}
@media (min-width: 645px) and (max-width: 959px) {
  .aspot a .meta {
    margin-bottom: 15px;
  }
  .aspot a .meta .show-title,
  .aspot a .meta .show-time {
    font-size: 34px;
  }
  .aspot a .meta .show-title {
    margin-bottom: 5px;
  }
  .aspot a .meta .show-time {
    margin-bottom: 5px;
  }
  .aspot a .meta .episode-title {
    font-size: 18px;
  }
}
@media (min-width: 960px) and (max-width: 1274px) {
  .aspot a .meta {
    margin-bottom: 22px;
  }
  .aspot a .meta .show-title,
  .aspot a .meta .show-time {
    font-size: 44px;
  }
  .aspot a .meta .show-title {
    margin-bottom: 10px;
  }
  .aspot a .meta .show-time {
    margin-bottom: 8px;
  }
  .aspot a .meta .episode-title {
    font-size: 22px;
  }
}
@media (min-width: 1275px) {
  .aspot a .meta {
    margin-bottom: 27px;
  }
  .aspot a .meta .show-title {
    font-size: 54px;
  }
  .aspot a .meta .show-title {
    margin-bottom: 16px;
  }
  .aspot a .meta .show-time {
    margin-bottom: 8px;
    font-size: 60px;
  }
  .aspot a .meta .episode-title {
    font-size: 32px;
  }
}
.aspot a .cta {
  position: relative;
  padding-left: 45px;
  font-size: 12px;
  line-height: 35px;
}
.aspot a .cta:before {
  content: "";
  z-index: 1;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  background-color: none;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
}
.aspot a .cta.watch:before {
  background-image: url("../img/home/watch.png");
}
.aspot a .cta.sync:before {
  background-image: url("../img/home/sync.png");
}
.aspot a .cta.favorite:before {
  background-image: url("../img/home/favorite.png");
}
.aspot a .cta.share:before {
  background-image: url("../img/home/share.png");
}
.aspot a .cta span {
  font-family: Proxima N W01 Smbd;
  font-weight: normal;
  letter-spacing: 0.05em;
}
@media (min-width: 645px) and (max-width: 959px) {
  .aspot a .cta {
    padding-left: 55px;
    font-size: 14px;
    line-height: 45px;
  }
  .aspot a .cta:before {
    width: 45px;
    height: 45px;
  }
}
@media (min-width: 960px) and (max-width: 1274px) {
  .aspot a .cta {
    padding-left: 70px;
    font-size: 18px;
    line-height: 60px;
  }
  .aspot a .cta:before {
    width: 60px;
    height: 60px;
  }
}
@media (min-width: 1275px) {
  .aspot a .cta {
    padding-left: 90px;
    font-size: 25px;
    line-height: 80px;
  }
  .aspot a .cta:before {
    width: 80px;
    height: 80px;
  }
}
.aspot .suits a .meta .show-time {
  margin-bottom: 0;
  font-size: 27px;
}
@media (min-width: 645px) and (max-width: 959px) {
  .aspot .suits a .meta .show-time {
    margin-bottom: 3px;
    font-size: 37px;
  }
}
@media (min-width: 960px) and (max-width: 1274px) {
  .aspot .suits a .meta .show-time {
    margin-bottom: 4px;
    font-size: 50px;
  }
}
@media (min-width: 1275px) {
  .aspot .suits a .meta .show-time {
    margin-bottom: 2px;
    font-size: 67px;
  }
}
.aspot .themoment a .meta-wrap {
  top: 105px;
}
@media (min-width: 645px) and (max-width: 959px) {
  .aspot .themoment a .meta-wrap {
    top: 150px;
  }
}
@media (min-width: 960px) and (max-width: 1274px) {
  .aspot .themoment a .meta-wrap {
    top: 140px;
  }
}
@media (min-width: 1275px) {
  .aspot .themoment a .meta-wrap {
    top: 190px;
  }
}
.aspot .themoment a .meta {
  width: 190px;
  margin-bottom: 0;
}
@media (min-width: 645px) and (max-width: 959px) {
  .aspot .themoment a .meta {
    width: 250px;
    margin-bottom: 5px;
  }
}
@media (min-width: 960px) and (max-width: 1274px) {
  .aspot .themoment a .meta {
    width: auto;
    margin-bottom: 52px;
  }
}
@media (min-width: 1275px) {
  .aspot .themoment a .meta {
    width: auto;
    margin-bottom: 68px;
  }
}
';
// ugly is ugly but ugly is working for the moment
drupal_add_css($css, array('group' => CSS_THEME, 'type' => 'inline', 'every_page' => FALSE));
drupal_add_js(drupal_get_path('theme', 'aurora_usa') . '/javascripts/picturefill.js', 'file');

?>

<div class="<?php print $classes;?> aspot">
<?php if ($link && $link !== '&nbsp;'): ?>
  <a href="<?php print $link; ?>" class="aspot-link">
<?php endif; ?>

  <div class="meta-wrap">
    <div class="meta">
    <?php if ($text_1 && $text_1 !== '&nbsp;'): ?>
      <h1 class="show-title"><?php print $text_1; ?></h1>
    <?php endif; ?>
    <?php if ($text_2 && $text_2 !== '&nbsp;'): ?>
      <h2 class="show-time"><?php print ($text_2); ?></h2>
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
    <?php if ($media_mobile): ?>
      <div class="media-mobile"><?php print $media_mobile; ?></div>
    <?php endif; ?>
    <?php if ($media_desktop): ?>
      <div class="media-desktop"><?php print $media_desktop; ?></div>
    <?php endif; ?>
  </div>
  
<?php if ($link || $link !== '&nbsp;'): ?>
  </a>
<?php endif; ?>
</div>