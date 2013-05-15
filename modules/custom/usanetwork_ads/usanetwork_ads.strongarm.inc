<?php
/**
 * @file
 * usanetwork_ads.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_ads_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_enable_ad_categories';
  $strongarm->value = 1;
  $export['dart_enable_ad_categories'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_enable_ad_categories_bundles';
  $strongarm->value = array(
    'categories' => 0,
    'genre' => 0,
    'role' => 0,
    'tags' => 0,
    'media_categories' => 0,
    'media_tags' => 0,
    'movie_rating' => 0,
    'movie_types' => 0,
    'rating_attributes' => 0,
    'tv_episode_type' => 0,
    'tv_rating' => 0,
    'cta_type' => 0,
  );
  $export['dart_enable_ad_categories_bundles'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_global_prefix';
  $strongarm->value = 'nbcu';
  $export['dart_global_prefix'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_global_site';
  $strongarm->value = 'usa';
  $export['dart_global_site'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_global_slug';
  $strongarm->value = 'Advertisement';
  $export['dart_global_slug'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_global_zone';
  $strongarm->value = 'home_responsetest';
  $export['dart_global_zone'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_include_taxonomy_terms';
  $strongarm->value = 1;
  $export['dart_include_taxonomy_terms'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_js';
  $strongarm->value = 'if (typeof eTandomAd == "undefined") eTandomAd = "none";

// MISC
if (typeof usa_debug != \'function\') {
	function usa_debug(msg)
	{
		if (typeof console != \'undefined\')
		{
			console.log(msg);
		}
	}
}

function setRandomNumber()
{
	return Math.round(Math.random()*1000000000000);
}

// RAILS CODE BEGINS
//usa_debug(\'rf - test rails code\');
var jqN = jQuery;
var usa_defaultBgImg, usa_defaultBgAttach, usa_defaultBgPos, usa_defaultBgCol;
var usa_railsSet = false;

// this function sets the body CSS properties to show the rails and handle the click
function usa_setRails(railAdBg, railAdBgColor, railAdBgRepeat, railAdBgClickthru)
{
    //usa_debug(\'rf - usa_setRails()\');

	if (usa_railsSet)
	{
		return;
	}
	
	if ((typeof railAdBg != \'undefined\') && railAdBg)
	{
		// site specific custom background code.
		if (typeof usa_defaultBgImg == \'undefined\')
		{
			usa_defaultBgImg = jqN(\'body\').css(\'background-image\');
			usa_defaultBgAttach = jqN(\'body\').css(\'background-attachment\');
			usa_defaultBgPos = jqN(\'body\').css(\'background-position\');
		}
		jqN(\'body\').css({\'background-image\':\'url("\'+railAdBg+\'")\'});
		jqN(\'body\').css({\'background-attachment\':\'fixed\'});
		jqN(\'body\').css({\'background-position\':\'center 66px\'});
	}
	
	if((typeof railAdBgColor !=\'undefined\') && railAdBgColor)
	{
		if (typeof usa_defaultBgCol == \'undefined\')
		{
			usa_defaultBgCol = jqN(\'body\').css(\'background-color\');
		}
		// site specific custom background color code.
		jqN(\'body\').css({\'background-color\':\'#\'+railAdBgColor});
	}
	if((typeof railAdBgRepeat != \'undefined\') && railAdBgRepeat)
	{
		// site specific custom background repeat code.
		jqN(\'body\').css({\'background-repeat\':railAdBgRepeat});
	}
	
	if ((typeof railAdBgClickthru !=\'undefined\') && railAdBgClickthru)
	{
		//usa_debug(\'railAdBgClickthru: \' + railAdBgClickthru);
		
		// site specific custom background click event code.
	  jqN(\'body\').click(function (e) {
		//usa_debug(\'body clicked: \');
		//usa_debug(e);
	  evt = e || window.event;
	  if (e.target) targ = e.target;
	  else if (e.srcElement) targ = e.srcElement;
	  if (targ.nodeType == 3) // Safari bug 
	  targ = targ.parentNode;
	  //usa_debug(targ.id);
	  //railAdBgClickthru = unescape(railAdBgClickthru);
	  //if (targ.id == jqN(\'body\').attr(\'id\')) {
	  if (targ.tagName.toLowerCase() == jqN(\'body\')[0].tagName.toLowerCase() || targ.id == \'usa_innerContainer\') {
		  //usa_debug(\'open rails page...\');
		  window.open(railAdBgClickthru);
		}
	 });
	 
	 jqN(\'body\').bind(\'mouseenter\',function () {
	   jqN(this).css(\'cursor\',\'pointer\');
	 });
	 
	 jqN(\'body\').bind(\'mouseleave\',function () {
	    jqN(this).css(\'cursor\',\'default\');
	  });	
	}
	
	// rails are set, so set the class on the body tag to lock the desktop
	// @TODO: add a class to the body tag????

	// for admin use, hide the background color on the page div, so we can see the rails in the admin tool
	jqN(\'div#page\').css(\'background\',\'transparent\');

	usa_railsSet = true;
}

// this will set the rails once the page is done loading and call our usa_setRails function
jqN(document).ready(function() {
	var p1 = null;
	var p2 = null;
	var p3 = null;
	var p4 = null;
	
	if((typeof railAdBg !=\'undefined\') && railAdBg)
	{
		p1 = railAdBg;
	}
	
	if((typeof railAdBgColor !=\'undefined\') && railAdBgColor)
	{
		p2 = railAdBgColor;
	}
	
	if((typeof railAdBgRepeat !=\'undefined\') && railAdBgRepeat)
	{
		p3 = railAdBgRepeat;
	}
	
	if((typeof railAdBgClickthru !=\'undefined\') && railAdBgClickthru)
	{
		p4 = railAdBgClickthru;
	}
	
	if ((p1 != null || p2 != null || p3 != null || p4 != null) && typeof parent.usa_setRails != \'undefined\')
	{
		usa_setRails(p1, p2, p3, p4);
	}
});
';
  $export['dart_js'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_key_vals';
  $strongarm->value = array(
    0 => array(
      'key' => '!category',
      'val' => 'home',
      'eval' => 0,
    ),
    1 => array(
      'key' => '!category',
      'val' => 'js',
      'eval' => 0,
    ),
    2 => array(
      'key' => '!category',
      'val' => 'usa',
      'eval' => 0,
    ),
    3 => array(
      'key' => 'tandomad',
      'val' => 'eTandomAd',
      'eval' => 1,
    ),
    4 => array(
      'key' => '<none>',
      'val' => 'top.__nbcudigitaladops_dtparams || \'\'',
      'eval' => 1,
    ),
    5 => array(
      'key' => 'pm',
      'val' => '1',
      'eval' => 0,
    ),
    6 => array(
      'key' => 'dcopt',
      'val' => 'ist',
      'eval' => 0,
    ),
    7 => array(
      'key' => 'site',
      'val' => 'usa',
      'eval' => 0,
    ),
  );
  $export['dart_key_vals'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_load_last';
  $strongarm->value = 0;
  $export['dart_load_last'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_noscript';
  $strongarm->value = 1;
  $export['dart_noscript'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_special_key_vals';
  $strongarm->value = array(
    'tile' => 'tile',
    'ord' => 'ord',
  );
  $export['dart_special_key_vals'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_special_tile_init';
  $strongarm->value = '1';
  $export['dart_special_tile_init'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_term_formatter';
  $strongarm->value = '_dart_term_formatter_truncated';
  $export['dart_term_formatter'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_term_key';
  $strongarm->value = 'term';
  $export['dart_term_key'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'dart_test_prefix';
  $strongarm->value = 'nbcu';
  $export['dart_test_prefix'] = $strongarm;

  return $export;
}
