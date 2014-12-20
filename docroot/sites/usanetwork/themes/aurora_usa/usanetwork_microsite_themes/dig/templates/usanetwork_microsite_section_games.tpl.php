<?php
/*
<div class="viewport">
  <div id="trivia-nav-container">
    <div id="trivia-nav">
      <ul>
        <li id="trivia1" class="active"><span>Beginner</span></li>
        <li id="trivia2"><span>Intermediate</span></li>
        <li id="trivia3"><span>Advanced</span></li>
      </ul>
    </div>
    <img src="images/trivia_bg.jpg" alt="White Collar Ultimate Fan Trivia" />
  </div>

  <div id="trivia-games">
    <div id="trivia1-game" class="selected trivia-game">
      <? include 'trivia1.php'; ?>
    </div>
    <div id="trivia2-game" class="trivia-game">
      <? //include 'trivia2.php'; ?>
    </div>
    <div id="trivia3-game" class="trivia-game">
      <? //include 'trivia3.php'; ?>
    </div>
  </div><!-- #trivia-games -->
</div>
*/
?>
<div id="viewport">
  <ul>
    <li>

<?php
  // just load the 1st one as the default
  $catchNode = $array['catchalls'][0];
  $catchNodeId = $catchNode['nid'];
//dpm($catchNode);
  //print '<iframe id="game-iframe" src="/node/' . $catchNodeId . '" width="100%" height="1000px" frameborder="0" scrolling="no"></iframe>';
  if (!empty($catchNode['field_usa_css']['und'][0]['safe_value'])) print '<style>' . html_entity_decode($catchNode['field_usa_css']['und'][0]['safe_value'], ENT_QUOTES) . '</style>';
  if (!empty($catchNode['field_usa_catchall_js']['und'][0]['safe_value'])) print '<script type="text/javascript">' . html_entity_decode($catchNode['field_usa_catchall_js']['und'][0]['safe_value'], ENT_QUOTES) . '</script>';
  if (!empty($catchNode['field_usa_catchall_html']['und'][0]['safe_value'])) print html_entity_decode($catchNode['field_usa_catchall_html']['und'][0]['safe_value'], ENT_QUOTES);
?>

    </li>
  </ul>
</div><!-- #viewport -->
