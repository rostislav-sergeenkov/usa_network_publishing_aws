<?php
/**
* $season_number - integer
* $all_episodes_link - URL
* $episodes - array
* $episode['title'] - string
* $episode['episode_number'] - integer
* $episode['image'] - image url
* $episode['url'] - url to episode
*/
?>

Seasons <?php print $season_number; ?> episode guides <br>
<a href="<?php print $all_episodes_link; ?>"> View All episodes</a><br>

<?php foreach($episodes as $episode): ?>

  <?php print $episode['title']; ?> <br>
  S<?php print $season_number; ?> E<?php print $episode['episode_number']; ?> <br>
  <a href="<?php print $episode['url']; ?>"> <img src="<?php print $episode['image']; ?>"></a> <br><br>
<?php endforeach; ?>
