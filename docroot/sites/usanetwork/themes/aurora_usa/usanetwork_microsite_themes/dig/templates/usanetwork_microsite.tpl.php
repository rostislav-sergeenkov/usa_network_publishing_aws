<?php
/**
 * @file  Themes the usanetwork_show_microsite block.
 */
?>
<style>
#visible {
  display: block;
}
#hidden-prev,
#hidden-next,
#microsite .hidden-section {
  display: none;
}
#microsite .section-info {
  display: none !important;
}
#activeContent > a[name] {
  height: 130px;
  display: block;
}
</style>

<div id='microsite' class="<?php print $theme; ?>">
  <div id="activeContent">
    <div id="hidden-prev" class="hidden-section"></div>
    <div id="visible"></div>
    <div id="hidden-next" class="hidden-section"></div>
  </div>
<!--
  <pre>
  Show: <?php print $show; ?><br>
  Theme: <?php print $theme; ?><br>
  Profile_image: <?php print $profile_image; ?><br>
  Tune_in: <?php print $tune_in; ?><br>
  Section_separator: <?php print $section_separator; ?><br>
  <br>
  Section_enabled: <?php print $section_enabled; ?><br>
  Aspots: <?php print $aspots; ?><br>
  Bspot: <?php print $bspot; ?><br>
  Cspot: <?php print $cspot; ?><br>
  Gallery: <?php print $gallery; ?><br>
  Person: <?php print $person; ?><br>
  </pre>

<br>
  Aspots: <?php print '<img src="/sites/usanetwork/files/public/aspot_desktop/' . $section[0]['aspot'][0]['field_usa_aspot_desktop']['und'][0]['filename'] . '" />'; ?><br>
<br><br>
-->
<?php //dpm($section); ?>


<?php
$sectionCount = 0;
// we've already checked to make sure the section is enabled in the module
// so we don't need to do that again
$numSections = count($section);
foreach($section as $key => $array) {
  $type = $array['type']; ?>

    <!-- <?php print strtoupper($type); ?> -->
    <div id="section-<?php print $type; ?>" class="section-info">

      <a name="/<?php print $type; ?>"></a>
      <section id="<?php print $type; ?>" class="clearfix">

  <? switch($type) {
    case 'home':
      include 'usanetwork_microsite_section_home.tpl.php';
      break;
    case 'videos':
      include 'usanetwork_microsite_section_videos.tpl.php';
      break;
    case 'about':
      include 'usanetwork_microsite_section_about.tpl.php';
      break;
    case 'characters':
      include 'usanetwork_microsite_section_characters.tpl.php';
      break;
    case 'galleries':
      include 'usanetwork_microsite_section_galleries.tpl.php';
      break;
    case 'games':
      include 'usanetwork_microsite_section_games.tpl.php';
      break;
  } // switch ?>

      </section>
      <?php if($sectionCount < ($numSections - 1)) print str_replace('XXX', $section[($key + 1)]['type'], $section_separator); ?>
    </div>
    <!-- /<?php print strtoupper($type); ?> -->

  <?php
  $sectionCount++;
} // foreach
?>


  <!-- LEFT NAV -->
  <div id="left-nav">
    <div id="left-nav-inner" class="hide">
      <div id="left-nav-logo"></div>
      <div id="left-nav-tunein"><?php print $tune_in; ?></div>
      <div id="left-nav-social" class="clearfix">
        <a class="facebook" href="https://www.facebook.com/USANetwork"></a>
        <a class="twitter" href="https://twitter.com/usa_network"></a>
        <a class="instagram" href="http://instagram.com/USANetwork"></a>
      </div>
      <div id="left-nav-links">
        <ul>
          <?php
          foreach($section as $j => $item) {
            // @TODO: CHANGE NAMING CONVENTION HERE TO USE SECTION TITLE
            // INSTEAD OF TYPE IN CASE THERE IS MORE THAN ONE OF THE SAME
            // TYPE!!
            // @TODO: ADD FIELD TO CMS TO FLAG SECTIONS THAT SHOULD APPEAR
            // IN THE MENU
            // don't add a home nav-item -- for dig only!!
            if ($item['type'] != 'home') {
              print '<li id="nav-' . $item['type'] . '">' . $item['title'];
              if ($item['type'] == 'games') {
                print '<ul id="nav-games-sub">';
                foreach ($item['catchalls'] as $l => $game) {
                  $class = ($l == 0) ? ' class="active"' : '';
                  print '<li id="nav-games-' . $game['nid'] . '"' . $class . ' data-nid="' . $game['nid'] . '">' . $game['title'] . '</li>';
                }
                print '</ul>';
              }
              print '</li>';
            }
          }
          ?>
          <li>Dig Decoded</li>
          <li>Wattpad</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /LEFT NAV -->

</div><!-- #show-microsite -->
