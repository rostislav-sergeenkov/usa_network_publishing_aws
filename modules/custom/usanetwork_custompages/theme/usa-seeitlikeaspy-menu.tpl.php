<?php
/**
 * @file
 * menu.tpl.php
 *
 * Theme implementation for the seeitlikeaspy menu
 *
 * Available variables:
 *
 */
 $node_id = $data->nid;
 $current_path = '/node/'.$node_id.'/games/seeitlikeaspy/';
 
?>

<!-- added by RF for USA Club END -->	
<select onchange="window.location=this.options[this.selectedIndex].value" class="wide">
  <option value="">MORE TASKS</option>
  <option value="<?php echo $current_path;?>money">Counterfeit Money</option>
  <option value="<?php echo $current_path;?>jammer">Wireless Signal Jammer</option>
  <option value="<?php echo $current_path;?>gadgets">CCTV Blinder</option>
  <option value="<?php echo $current_path;?>extinguisher">Fire Extinguisher</option>
  <option value="<?php echo $current_path;?>listening">Listening Device</option>
  <option value="<?php echo $current_path;?>develop">Develop It at Home</option>
  <option value="<?php echo $current_path;?>compass">Survival Compass</option>
  <option value="<?php echo $current_path;?>lifevest">Emergency Life Vest</option>
  <option value="<?php echo $current_path;?>microphone">Long-Distance Microphone</option>
  <option value="<?php echo $current_path;?>nightvision">Mobile Phone Night Vision</option>
  <option value="<?php echo $current_path;?>metaldetector">DIY Metal Detector</option>
  <option value="<?php echo $current_path;?>lasersignaller">Long-Distance Laser-Signaller</option>
  <option value="<?php echo $current_path;?>airhorn">Homemade Air Horn</option>
  <option value="<?php echo $current_path;?>tripwire">Tripwire Alarm</option>
  <option value="<?php echo $current_path;?>ballpointpen">Ballpoint Pen Stink-Bomb</option>
  <option value="<?php echo $current_path;?>copier">Covert Document Copier</option>
  <option value="<?php echo $current_path;?>recovertext">Recover Text from Burnt Paper</option>
  <option value="<?php echo $current_path;?>thumbprint">Thumb Print Spoofer</option>
  <option value="<?php echo $current_path;?>lockcracker">Sub-Zero Lock Cracker</option>
  <option value="<?php echo $current_path;?>emergencyfuel">Emergency Fuel</option>
  <option value="<?php echo $current_path;?>periscope">DIY Periscope</option>
  <option value="<?php echo $current_path;?>putty">Homemade Silly Putty</option>
  <option value="<?php echo $current_path;?>audiospeaker">DIY Audio Speaker</option>
  <option value="<?php echo $current_path;?>cutbottle">Cut a Bottle Clean in Half</option>
  <option value="<?php echo $current_path;?>glowstick">Glow Stick</option>
  <option value="<?php echo $current_path;?>polishdvd">Polish a DVD</option>
  <option value="<?php echo $current_path;?>toothpaste">Homemade Toothpaste</option>
  <option value="<?php echo $current_path;?>waterfilter">Emergency Water Filter</option>
  <option value="<?php echo $current_path;?>carlock">De-ice Car Lock</option>
  <option value="<?php echo $current_path;?>solarcooker">Solar Cooker</option>
  <option value="<?php echo $current_path;?>batteryhack">Hack a 9V Battery</option>
  <option value="<?php echo $current_path;?>combinationlock">Combination Lock</option>
  <option value="<?php echo $current_path;?>smokebomb">Homemade Smoke Bomb</option>
  <option value="<?php echo $current_path;?>campfire">Emergency Campfire</option>
  <option value="<?php echo $current_path;?>secretstash">Secret Stash Inside a Penny</option>
  <option value="<?php echo $current_path;?>lockpicker">Hairpin Lock Picker</option>
  <option value="<?php echo $current_path;?>diycandle">DIY Candle</option>
</select>
              