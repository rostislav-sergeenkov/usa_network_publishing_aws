/**
 * @file
 * Check version of flash.
 */

// Code to identify whether flash player installed or not
var playerVersion = swfobject.getFlashPlayerVersion();

// set a cookie in Javascript and reload your page
document.cookie="flashplayer_status" + "=" + "major=" + playerVersion.major + ", minor=" + playerVersion.minor + ", release=" + playerVersion.release;
