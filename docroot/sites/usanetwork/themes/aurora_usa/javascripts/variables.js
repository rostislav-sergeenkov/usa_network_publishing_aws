var $ = jQuery;
var window_size_desktop = 1281;
var window_size_tablet_portrait = 769;
var window_size_tablet = 1025;
var window_size_mobile = 481;
var show_carousel_item_width = 310;
var desktop_show_open_width = 1470;
var small_desktop_show_open_width = 990;
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

function swipeHideDescription(element) {
  element.removeClass('start');
  element.next().removeClass('start');
}

function swipeShowDescription(element) {
  element.addClass('start');
  element.next().addClass('start');
}

//open show-card block
function showOpen(target, mobile) {
  var current_item = target.closest('li');
  if (mobile) {
    current_item.addClass('active');
    Drupal.behaviors.global_carousels.carouselInit();
    return false;
  }
  var carousel = target.closest('ul');
  var current_left = parseInt(carousel.css('left'));
  var width = desktop_show_open_width;
  if (window.innerWidth <= window_size_desktop){
    width = small_desktop_show_open_width;
  }
  var width_block = width - show_carousel_item_width;
  var left =  (window.innerWidth - width_block)/2 - show_carousel_item_width - current_item.offset()['left'] + current_left;
  carousel.animate({left: left}, 500);
  current_item.animate({width: width}, 500, 'easeInCubic');
  current_item.addClass('active');
  setTimeout(function ()
  {
    current_item.find('.social-icons').toggle();
  }, 500);
  current_item.attr('data-left', current_left);
  carousel.addClass('stop');
}

//close show-card-block
function showClose(item, mobile) {
  if (mobile) {
    item.removeClass('active');
    return false;
  }
  var carousel = item.closest('ul');
  var left = parseInt(item.attr('data-left'));
  carousel.animate({left: left}, 500);
  item.animate({width: show_carousel_item_width}, 500, 'easeOutQuint');
  item.removeClass('active');
  item.find('.social-icons').toggle();
  item.removeAttr('data-left');
  carousel.removeClass('stop');
}

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


