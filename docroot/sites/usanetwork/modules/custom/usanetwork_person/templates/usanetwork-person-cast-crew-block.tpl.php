<?php
/**
 * $title - title of block
 * $persons - array of persons
 *  name - Name of character
 *  role - Name of role
 *  image - Image url of character.
 * )
 */
?>


<?php print !empty($title) ? $title : ''; ?> </br>

<?php
if (!empty($persons)) :
  foreach ($persons as $person) :
?>

<?php print !empty($person['name']) ? $person['name'] : ''; ?>
</br>
<?php print !empty($person['role']) ? $person['role'] : ''; ?>
</br>
<?php print !empty($person['image'])  ? $person['image']  : ''; ?>
</br>

<?php
  endforeach;
endif;
?>
