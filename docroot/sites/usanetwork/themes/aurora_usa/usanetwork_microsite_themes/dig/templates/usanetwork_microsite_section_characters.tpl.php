<ul>
<?php
$person_html = '';
if (count($array['people']) > 0) {
  $character_nav_html = '';
  // build character nav
  foreach ($array['people'] as $person_key => $person_array) {
    $person_id = strtolower(str_replace(array(' ', '.'), array('-', ''), trim($person_array['title'])));
    $character_nav_html .= '        <li>&nbsp;<div class="tooltip"><img src="/' . $theme_path . '/images/characters/char_' . $person_id . '.jpg" /><div>' . $person_array['title'] . '</div></div></li>';
  }
  foreach ($array['people'] as $person_key => $person_array) {
    $person_id = strtolower(str_replace(array(' ', '.'), array('-', ''), trim($person_array['title'])));
    $person_html .= '<li id="' . $person_id . '">';
    $person_html .= ' <div class="left-pane">';
    $person_html .= '   <div class="caption">';
    $person_html .= '     <ul>';
    if (count($person_array['quotes'] > 0)) {
      foreach ($person_array['quotes'] as $quote_key => $quote_array) {
        $class = ($quote_key == 0) ? ' class="active"' : '';
        $person_html .= '       <li id' . $class . '><div class="quote">' . $quote_array['quote'] . '</div><div class="quote-source">- ' . $quote_array['source'] . '</div></li>';
      }
    }
    $person_html .= '     </ul>';
    $person_html .= '   </div>';
    $person_html .= ' </div>';

    $person_html .= ' <div class="right-pane">';
    $person_html .= '   <h2>' . $person_array['title'] . '</h2>';
    $person_html .= '   <div class="underline"></div>';

    $person_html .= '   <div class="character-nav">';
    $person_html .= '     <div class="prev"><span><</span></div>';
    $person_html .= '     <ul>';
    $person_html .= $character_nav_html;
    $person_html .= '     </ul>';
    $person_html .= '     <div class="next"><span>></span></div>';
    $person_html .= '   </div>';

    $person_html .= '   <h3>' . $person_array['title'] . '</h3>';
    $person_html .= '   <div class="text">';
    $person_html .= '     ' . $person_array['description'];
    $person_html .= '   </div>';

    $person_html .= '   <div class="ad300x250"><center>Ad goes here!</center></div>';
    $person_html .= ' </div>';
    $person_html .= '</li>';
  }
}

print $person_html;
?>
</ul>
