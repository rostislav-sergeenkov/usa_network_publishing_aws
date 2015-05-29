<?php
/**
 * @file
 * beachcomber_menu.tpl.php
 *
 * Theme implementation for the seeitlikeaspy menu
 *
 * Available variables:
 *
 */
 global $base_url;
 $node_id = $data->nid;
 $current_path = '/node/'.$node_id.'/games/beachcomber/';
 $image_path = drupal_get_path("module", "usanetwork_custompages")."/theme/images/";
 
?>
<table>
  <tr>

    <td align="right"><img src="<?php echo "/".$image_path;?>findmore.png" vspace="15"></td>
    <td>

      <select onChange='window.location=this.options[this.selectedIndex].value' style="width:240px;" class="wide">
        <option value=''>Select:</option>
        <option value='<?php echo $current_path;?>index1'>Challenge 1</option>            
        <option value='<?php echo $current_path;?>index2'>Challenge 2</option>            
        <option value='<?php echo $current_path;?>index3'>Challenge 3</option>            
        <option value='<?php echo $current_path;?>index4'>Challenge 4</option>            
        <option value='<?php echo $current_path;?>index5'>Challenge 5</option>            
        <option value='<?php echo $current_path;?>index6'>Challenge 6</option>            
        <option value='<?php echo $current_path;?>index7'>Challenge 7</option>            
        <option value='<?php echo $current_path;?>index8'>Challenge 8</option>            
        <option value='<?php echo $current_path;?>index9'>Challenge 9</option>            
        <option value='<?php echo $current_path;?>index10'>Challenge 10</option>            
        <option value='<?php echo $current_path;?>index11'>Challenge 11</option>            
        <option value='<?php echo $current_path;?>index12'>Challenge 12</option>            
        <option value='<?php echo $current_path;?>index13'>Challenge 13</option>            
        <option value='<?php echo $current_path;?>index14'>Challenge 14</option>            
        <option value='<?php echo $current_path;?>index15'>Challenge 15</option>            
        <option value='<?php echo $current_path;?>index16'>Challenge 16</option>            
        <option value='<?php echo $current_path;?>index17'>Challenge 17</option>            
        <option value='<?php echo $current_path;?>index18'>Challenge 18</option>            
        <option value='<?php echo $current_path;?>index19'>Challenge 19</option>            
        <option value='<?php echo $current_path;?>index20'>Challenge 20</option>            
        <option value='<?php echo $current_path;?>index21'>Challenge 21</option>            

      </select>
    </td>

  </tr>
</table>
