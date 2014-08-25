<?php
/**
 * @file
 * finethepineapplemenu.tpl.php
 *
 * Theme implementation for the findthepineapple menu
 *
 * Available variables:
 *
 */
 $node_id = $data->nid;
 $current_path = '/node/'.$node_id.'/games/findthepineapple/';
 $image_path = drupal_get_path("module", "usanetwork_custompages")."/theme/images/";
 
?>

<!-- added by RF for USA Club END -->	
<table>
  <tr>
    <td align="right"><img src="/<?php echo $image_path;?>findmorepineapples.gif" vspace="15"></td>
    <td>
      <select onChange="window.location=this.options[this.selectedIndex].value" class="wide">
        <option value="">Select:</option>
        <option value='#'>---- EASY PEASY ----</option>            
        <option value="<?php echo $current_path;?>index1">Mona Lisa</option>            
        <option value="<?php echo $current_path;?>index3">The Scream</option>            
        <option value="<?php echo $current_path;?>index10">Starry Night</option>            
        <option value="<?php echo $current_path;?>index11">The Dessert</option>            
        <option value="<?php echo $current_path;?>index12">Where Do We Come From?</option>            
        <option value="<?php echo $current_path;?>index17">Aztec Calendar</option>            
        <option value="<?php echo $current_path;?>index19">I and the Village</option>
        <option value="<?php echo $current_path;?>index23">Quilt from the 1800's</option>
        <option value="<?php echo $current_path;?>index26">Vanity</option>
        <option value="<?php echo $current_path;?>index29">The Circus</option>
        <option value="<?php echo $current_path;?>index32">The Tilled Field</option>
        <option value="<?php echo $current_path;?>index36">The Dream</option>
        <option value="<?php echo $current_path;?>index43">The Reader</option>    
        <option value="<?php echo $current_path;?>index47">The Unicorn in Captivity</option>   
        <option value="<?php echo $current_path;?>index51">La Orana Maria</option>   
        <option value="<?php echo $current_path;?>index53">Fishing</option>    
        <option value="<?php echo $current_path;?>index54">Cider</option>    
        <option value="<?php echo $current_path;?>#"> </option>    
        <option value="<?php echo $current_path;?>#">---- DELICIOUS YET PERPLEXING ----</option>            
        <option value="<?php echo $current_path;?>index2">Crowd Listening To T.R. Speak</option>            
        <option value="<?php echo $current_path;?>index4">Sunday Afternoon</option>            
        <option value="<?php echo $current_path;?>index5">Wright Military Flyer</option>            
        <option value="<?php echo $current_path;?>index6">Washington Crossing The Delaware</option>            
        <option value="<?php echo $current_path;?>index13">Le Moulin de la Galette</option>            
        <option value="<?php echo $current_path;?>index14">Guernica</option>            
        <option value="<?php echo $current_path;?>index20">Lady of Shalott</option>            
        <option value="<?php echo $current_path;?>index21">Primavera</option>    
        <option value="<?php echo $current_path;?>index24">The Gallery of Archduke Leopold Wilhelm</option>  
        <option value="<?php echo $current_path;?>index27">Dance Hall in Arles</option>  
        <option value="<?php echo $current_path;?>index30">Apple Blossom</option>  
        <option value="<?php echo $current_path;?>index31">Work</option>  
        <option value="<?php echo $current_path;?>index34">The Procession of Elizabeth 1</option>  
        <option value="<?php echo $current_path;?>index37">Love and the Maiden</option>  
        <option value="<?php echo $current_path;?>index40">Spring Morning in the Han Palace</option>  
        <option value="<?php echo $current_path;?>index41">Nobleman Hunting in the Marshes</option>  
        <option value="<?php echo $current_path;?>index44">The Terrace at Vernonnet</option>    
        <option value="<?php echo $current_path;?>index45">Self Portrait with Seven Fingers</option>    
        <option value="<?php echo $current_path;?>index48">The Last Day in the Old Home</option>    
        <option value="<?php echo $current_path;?>index49">Modern Rome</option>    
        <option value="<?php echo $current_path;?>index50">Sacre de Napoleon</option>    
        <option value="<?php echo $current_path;?>index52">Bullfight in a Divided Ring</option>    
        <option value="<?php echo $current_path;?>index55">La Grenouillere</option>    
        <option value="<?php echo $current_path;?>index56">The Dance Class</option>    
        <option value="<?php echo $current_path;?>index57">First Steps</option>    
        <option value="<?php echo $current_path;?>#"> </option> 
        <option value="<?php echo $current_path;?>#">---- JACKALS ONLY ----</option>            
        <option value="<?php echo $current_path;?>index8">Declaration of Independence</option>            
        <option value="<?php echo $current_path;?>index9">Along the River</option>            
        <option value="<?php echo $current_path;?>index7">Hieronymus Bosch</option>            
        <option value="<?php echo $current_path;?>index15">Tower of Babel</option>            
        <option value="<?php echo $current_path;?>index16">Children</option>            
        <option value="<?php echo $current_path;?>index18">Procession of the Magi</option>            
        <option value="<?php echo $current_path;?>index22">A Bar at the Folies-Berg&egrave;re</option>    
        <option value="<?php echo $current_path;?>index25">Indian Wheel of Life</option>    
        <option value="<?php echo $current_path;?>index28">In Luna Park</option>    
        <option value="<?php echo $current_path;?>index33">The Exhumation of the Mastodon</option>    
        <option value="<?php echo $current_path;?>index35">Gallery of the Louvre</option>    
        <option value="<?php echo $current_path;?>index38">Entrance to the Public Garden in Arles</option>    
        <option value="<?php echo $current_path;?>index39">Coney Island</option>    
        <option value="<?php echo $current_path;?>index42">Mihrdukht Shoots an Arrow Through a Ring</option>    
        <option value="<?php echo $current_path;?>index46">Ivan the Terrible Showing His Treasury to Jerome Horsey</option>    
        <option value="<?php echo $current_path;?>index58">Bridge Over a Pond of Water Lilies</option>    
      </select>
    </td>
  </tr>
</table>
              