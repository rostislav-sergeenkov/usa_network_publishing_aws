var $ = jQuery;
var window_size_desktop_large = 1901;
var window_size_desktop = 1281;
var window_size_tablet_portrait = 769;
var window_size_tablet = 1025;
var window_size_mobile = 481;
var window_size_mobile_641 = 641;
var show_carousel_margin = (window.innerWidth < window_size_tablet_portrait)? 40: 50;
var desktop_show_open_width = 1450;
var desktop_show_open_width_large = 2164;
var show_title_offset_desktop = 200;
var show_title_offset_tablet = 160;
var show_title_offset = (window.innerWidth < window_size_tablet)? 160: 200;

var USAN = USAN || {};

var waitForFinalEvent = function () {
  var timers = {};

  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
};

function getInternetExplorerVersion()
{
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

function scrollToAnchorName(targetName) {
  var $active = $('a[name="'+targetName+'"]');
  var navbarHeight = $('.region-header').height();
  $('html, body').animate({
    scrollTop: $active.position().top - navbarHeight -20
  }, 1000);
}

$(window).bind('resize', function () {

  show_carousel_margin = (window.innerWidth < window_size_tablet_portrait)? 40: 50;

});

$(document).ready(function(){

  $('.node-type-usanetwork-static-page .node-usanetwork-static-page a[href^="#"]').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href').substring(1);
    var targetName = target.substring(0);
    scrollToAnchorName(targetName);
  });

  $('.character-info-block .tabs li').click(function(){
    if(!$(this).hasClass('active')){
      $('.character-info-block .tabs li').removeClass('active');
      $('.character-info-block .description-item').removeClass('active');
      $(this).addClass('active');
      var activeTab = $(this).attr('data-tab');
      $('.description-item[data-tab="'+activeTab+'"]').addClass('active');
    }
  });

});


