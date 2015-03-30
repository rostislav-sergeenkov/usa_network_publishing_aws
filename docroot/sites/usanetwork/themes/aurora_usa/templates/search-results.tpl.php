<?php
/**
 * @file
 * Default theme implementation for displaying search results.
 *
 * This template collects each invocation of theme_search_result(). This and
 * the child template are dependent to one another sharing the markup for
 * definition lists.
 *
 * Note that modules may implement their own search type and theme function
 * completely bypassing this template.
 *
 * Available variables:
 * - $search_results: All results as it is rendered through
 *   search-result.tpl.php
 * - $module: The machine-readable name of the module (tab) being searched, such
 *   as "node" or "user".
 *
 *
 * @see template_preprocess_search_results()
 *
 * @ingroup themeable
 */
?>
<div class="search-filter">
  <div class="item-filter">
    <div class="item-label page-numbers">
      <?php print $result_count; ?>
    </div>
    <?php print $content_type_select; ?>
  </div>
  <div class="item-filter">
    <div class="item-label">
      <?php print t('For'); ?>
    </div>
    <div class="filter-button close">
      <?php print $keywords; ?>
    </div>
  </div>
  <div class="item-filter">
    <div class="item-label">
      <?php print t('In'); ?>
    </div>
    <?php print $tv_show_select; ?>
  </div>
  <div class="item-filter">
    <div class="item-label">
      <?php print t('Sorted by'); ?>
    </div>
    <?php print $sort_select; ?>
  </div>
  <div class="filter-reset">
    <a href="javascript:void(0)">Reset</a>
  </div>
</div>

<?php if ($search_results): ?>
  <?php print $search_results; ?>
  <div class="search-footer">
    <?php print $pager; ?>
  </div>
<?php else : ?>
  <h2><?php print t('Your search yielded no results'); ?></h2>
  <?php print search_help('search#noresults', drupal_help_arg()); ?>
<?php endif; ?>

