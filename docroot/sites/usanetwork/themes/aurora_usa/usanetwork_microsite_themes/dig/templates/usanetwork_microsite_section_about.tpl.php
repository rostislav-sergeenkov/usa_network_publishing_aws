<div class="left-pane">
  <div class="caption">
    <ul>
<?php
if (count($array['about_quotations'] > 0)) {
  foreach ($array['about_quotations'] as $about_quote_key => $about_quote_array) {
    $class = ($about_quote_key == 0) ? ' class="active"' : '';
    print '     <li' . $class. '><div class="quote">' . $about_quote_array['quote'] . '</div><div class="quote-source">- ' . $about_quote_array['source'] . '</div></li>';
  }
}
?>
    </ul>
  </div>
</div>

<div class="right-pane">
  <h2><?php print $array['title']; ?></h2>
  <div class="underline"></div>
  <div class="text">
    <?php print $array['description']; ?>
  </div>
  <div class="ad300x250"><center>Ad goes here!</center></div>
</div><!-- .right-pane -->
