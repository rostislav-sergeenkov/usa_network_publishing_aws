<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>

  <header role="banner" id="page-header">
    <div role="navigation" id="mega-nav" class="slide-container" data-module-type="Nav">
      <?php if ($site_name): ?>
        <h1 id="site-name">
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
        </h1>
      <?php endif; ?>
        <div class="mobi-menu-icon nav-toggle"></div>
        <nav>
          <ul>
            <!-- AJH: and replace with above -->
            <li data-module-type="NavDrawer" >
              <a href="" class="mega-nav-link shows drawer-toggle">Shows</a>
              <div class="mega-sub-nav-container" >
                <div class="mega-sub-nav" data-module-type="MegaSubNavList">
                  <h2>On Tonight</h2>
                  <div class="show-promotions">
                    <a href="" class="show-promotion">
                      <img src="/img/white-collar-wide.jpg" alt="White Collar"></a>
                    <a href="" class="show-promotion">
                      <img src="/img/burn-notice.jpg" alt="Burn Notice"></a>
                  </div>
                  <ul>

                    <li>
                      <a href="" class="mega-sub-nav-link">Burn Notice</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Common Law</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Covert Affairs</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">CSI: Crime Scene Investigation</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Fairly Legal</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">
                        <span class="flagged">NEW!</span>
                        Graceland
                      </a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">House</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">In Plain Sight</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Law &amp; Order: CI</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Law &amp; Order: SVU</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">
                        <span class="flagged">NEW!</span>
                        The Moment
                      </a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">NCIS</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">NCIS: Los Angeles</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Necessary Roughness</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Political Animals</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Psych</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Royal Pains</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Suits</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">Westminster Kennel Club Dog Show</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">White Collar</a>
                    </li>
                    <li>
                      <a href="" class="mega-sub-nav-link">WWE Raw</a>
                    </li>
                  </ul>
                  <ul></ul>
                  <ul></ul>
                  <ul></ul>
                </div>
              </div>
            </li>
            <li>
              <a href="/schedule.html" class="mega-nav-link schedule">Schedule</a>
            </li>
            <li>
              <a href="/videos.html" class="mega-nav-link videos">Videos</a>
            </li>
            <li>
              <a href="/more.html" class="mega-nav-link more">More</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>




  <div id="wrapper" class="slide-out" data-module-type="SlideOut" data-toggle-selector=".slide-menu-toggle">

    <section id="show-menu-panel" class="slide-panel">
      <header>
        <span class="close-panel">X</span>
        <h1>Show Menu</h1>
      </header>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>video</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>characters</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>series guide</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>photos</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>games</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>quizzes</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>extras</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>connect</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

      <section class="expandable expandable-menu" data-module-type="Expandable">
        <h1>shop</h1>
        <div>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

          <a href="#">Lorem Ipsum</a>

        </div>
      </section>

    </section>

    <!-- TOP TITLE AND TOOLS BAR -->
    <div id="utilities" >
      <!-- <div class="dropdown-list">
      dropdown toggle
      <div>
        <a href="#">
          Video
          <span>22</span>
        </a>
        <a href="#">Characters</a>
        <a href="#">Series Guide</a>
        <a href="#">
          Photos
          <span>140</span>
        </a>
        <a href="#">
          Games
          <span>7</span>
        </a>
        <a href="#">Quizzes</a>
        <a href="#">Extras</a>
        <a href="#">Connect</a>
        <a href="#">Shop</a>
      </div>
    </div>
    -->
    <!-- END .dropdown-list -->
    <span id="show-menu-toggle" class="slide-menu-toggle" data-active-class="show-menu-active">Open Show Menu</span>

    <span class="breadcrumb">Show Title/Photos</span>

    <form action="" id="header-search" data-module-type="HeaderSearch">
      <label for="searchNow" class="open-search">Open Search Box</label>
      <fieldset>
        <!-- <label for="searchNow">Search</label>
      -->
      <!--
          <div class="search-wrap">
      -->
      <input type="search" id="searchNow" name="searchNow" placeholder="Search Now">
      <!-- </div>
      -->
      <!-- <input type="submit" value="Go" id="searchSubmitButton" />
      -->
      <input type="reset">Reset Search Box</fieldset>
  </form>

  <a class="show-share">share/send</a>
  <span class="show-time">Tuesdays 10/9c</span>
  </div>
  <!-- /TOP TITLE AND TOOLS BAR -->

  <!-- MAIN CONTENT -->
  <header>
    <?php print render($page['header']); ?>
  </header>
  <div id="main" role="main" class="clearfix">
  <?php if ($page['main_prefix']) :?>
    <?php print render($page['main_prefix']); ?>
  <?php endif; ?>
  <?php print $breadcrumb; ?>
  <?php if ($messages): ?>
    <div id="messages" role="alertdialog"><?php print $messages; ?></div>
  <?php endif; ?>
  <div id="content" role="article" class="column">
    <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>
    <a id="main-content"></a>
    <?php print render($title_prefix); ?>
    <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
    <?php print render($page['help']); ?>
    <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
    <?php print render($page['content']); ?>
    <?php print $feed_icons; ?>
  </div>
  <?php if ($page['sidebar_first']): ?>
    <aside id="sidebar-first" role="complementary" class="column sidebar">
      <?php print render($page['sidebar_first']); ?>
    </aside><!-- #sidebar-first -->
  <?php endif; ?>

  <?php if ($page['sidebar_second']): ?>
    <aside id="sidebar-second" role="complementary" class="column sidebar">
      <?php print render($page['sidebar_second']); ?>
    </aside><!-- #sidebar-second -->
  <?php endif; ?>
  <!-- #content-suffix -->
  <?php if ($page['main_suffix']) :?>
    <?php print render($page['main_suffix']); ?>
  <?php endif; ?>
  </div><!-- #main -->
  <!-- /MAIN CONTENT -->




  <!-- FOOTER -->
  <footer id="footer" role="contentinfo">
    <?php print render($page['footer']); ?>
  </footer>
  <!-- /FOOTER -->

  <!-- </div>--></div>
