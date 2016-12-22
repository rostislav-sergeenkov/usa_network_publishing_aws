<?php
/**
 * @file
 * usa-office.tpl.php
 *
 * Theme implementation for the seeitlikeaspy games
 *
 * Available variables:
 *
 */
 global $base_url;
 $swf_path = drupal_get_path("module", "usanetwork_custompages")."/swf/";
 $image_path = drupal_get_path("module", "usanetwork_custompages")."/theme/images/";
 ?>
 
<script type="text/javascript">
	var gameURL;
	
	function showGame(url)
	{
    var  swfUrl = "<?php echo $base_url.'/'.$swf_path; ?>"+url;
    jQuery('#as2Container').css("left","-3000px");
		jQuery('#as3Container').css("left","0px");
		jQuery('.closeBtn').css("left","875px");
		
		swfobject.embedSWF(swfUrl, "as3Flash", "924", "480", "9.0.0", "flash/expressInstall.swf", {},  {bgcolor: "#000000"},{id:"as3Flash",name:"as3Flash"});
	}
	
	function showShell()
	{
		jQuery('#as2Container').css("left","-0px");
		jQuery('#as3Container').css("left","-3000px");
		jQuery('.closeBtn').css("left","-3000px");
		restartFlash();
	}

</script>




<div id="container">
  
  <div id="as2Container">
    <div id="as2Flash"> </div>
  </div>
  
    <a class="closeBtn" href="javascript:showShell()" title="close"><span>close</span></a>
  <div id="as3Container">
  	<img src="<?php echo '/'.$image_path; ?>fakeBG.jpg" />
    <div id="as3Flash"> </div>
  </div>
</div>
<script type="text/javascript">
	var flashvars = {};
	var params = {
	wmode: "transparent"
	};
	var attributes = {
	id: "as2Flash",
	name: "as2Flash"
	};
	
	swfobject.embedSWF("<?php echo $base_url.'/'.$swf_path; ?>PSYCH_OFFICE.swf", "as2Flash", "935", "727", "9.0.0", "flash/expressInstall.swf", flashvars, params, attributes);
	
	function getFlashMovie(movieName) 
	{   
		var isIE = navigator.appName.indexOf("Microsoft") != -1;   
		return (isIE) ? window[movieName] : document[movieName];  
	}  
	
	function restartFlash() {		
		getFlashMovie('as2Flash').fadeIn();
		
		// unload swf
				swfobject.embedSWF("<?php echo $base_url.'/'.$swf_path; ?>dummy.swf", "as3Flash", "924", "480", "9.0.0", "flash/expressInstall.swf", {},  {bgcolor: "#000000"},{id:"as3Flash",name:"as3Flash"});

	}
</script>

