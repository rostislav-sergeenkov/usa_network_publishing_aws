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
 * - $page['header']: Items for the header region.
 * - $page['head_show']: Show Header region
 * - $page['head_general']: General Header region.
 * - $page['sponsored']: Sponsored Block region.
 * - $page['search']: Search Block region.
 * - $page['leaderboard']: Leaderboard Ad region.
 * - $page['main_prefix']: Main Region Prefix region.
 * - $page['content']: The main content of the current page.
 * - $page['main_suffix']: Main Region Suffix region.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>
<?php if (!isset($ajax) || empty($ajax)): ?>
  <header>
    <span id="site-name">
      <?php print $site_name; ?>
    </span>
    <!-- leaderboard ad -->
    <?php if ($page['leaderboard']): ?><div id="head-leaderboard" class="ad-leaderboard"><?php print render($page['leaderboard']); ?></div><?php endif; ?>
    <!-- /leaderboard -->
    <div class="header-nav-bar">
      <?php print render($page['personalization_trigger']); ?>
      <div class="usa-logo show-color hover-avail">
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"></a>
      </div>
      <?php print render($page['header']); ?>
    </div>
  </header>

  <!-- TOP TITLE AND TOOLS BAR -->
  <div id="utilities" class="clearfix <?php print $util_classes; ?>">
    <div id="utilities-wrap" class="clearfix">
    <?php if ($page['search']) : ?>
      <div class="utilties-main-group">
    <?php endif; ?>
    <?php print render($title_prefix); ?>
    <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
    <?php if ($page['catchall_seo_title']): ?><h2 class="title" id="page-title"><?php print $page['catchall_seo_title']; ?></h2><?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if ($page['head_show']): ?><div id="head-show"><?php print render($page['head_show']); ?></div><?php endif; ?>
    <?php if ($page['head_general']): ?><div id="head-general"><?php print render($page['head_general']); ?></div><?php endif; ?>
    <?php if ($page['sponsored']): ?><div id="head-sponsored"><?php print render($page['sponsored']); ?></div><?php endif; ?>
    <?php if ($page['search']): ?>
      </div>
    <?php endif; ?>
    <?php if ($page['search']): ?><div id="head-search"><?php print render($page['search']); ?></div><?php endif; ?>
    </div>
  </div>
<?php endif; ?>
<!-- /TOP TITLE AND TOOLS BAR -->

<div class="usa-wrap"><?php // this wrapper is intended for ad rails response please do not theme against it ?>
  <!-- MAIN CONTENT -->
  <div id="main" role="main" class="clearfix">
    <?php if ($page['seoh1']): ?><h1 class="seoh1" id="seoh1"><?php print $page['seoh1']; ?></h1><?php endif; ?>
    <?php if ($page['main_prefix']) :?>
      <?php print render($page['main_prefix']); ?>
    <?php endif; ?>
    <?php //print $breadcrumb; ?>
    <?php if ($messages): ?>
      <div id="messages" role="alertdialog"><?php print $messages; ?></div>
    <?php endif; ?>
    <div id="content" role="article" class="column">
      <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>
      <a id="main-content"></a>
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

  <!-- PERSONALIZATION -->
  <aside id="personalization-panel" class="clearfix">
    <?php print render($page['personalization']); ?>
  </aside>
  <!-- /PERSONALIZATION -->

  <!-- FOOTER -->
  <footer id="footer" role="contentinfo" class="clearfix">
    <?php print render($page['footer']); ?>
  </footer>
  <!-- /FOOTER -->
</div>
