<?php
/**
 *
 */
?>
<div class="example">
  <?php
  if (!empty($promos) && is_array($promos)):
     foreach($promos as $promo):
        foreach($promo as $key => $element):
          print '$promo[' . $key . '] ='. $element . '<br>';
        endforeach;
      endforeach;
  endif;

  ?>

</div>
