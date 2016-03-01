var $ = jQuery;
var window_size_desktop_max_width = 2500;
var window_size_desktop_large = 1901;
var window_size_desktop = 1281;
var window_size_tablet_portrait = 769;
var window_size_tablet = 1025;
var window_size_mobile = 481;
var window_size_mobile_641 = 641;
//var show_carousel_margin = (window.innerWidth < window_size_tablet_portrait)? 40: 50;
var desktop_show_open_width = 1450;
var desktop_show_open_width_large = 2164;
var show_title_offset_desktop = 200;
var show_title_offset_tablet = 160;
//var show_title_offset = (window.innerWidth < window_size_tablet)? 160: 200;
var right_rail_min_height_livepage = 490;
// New breakpoint vars for window.matchMedia
// window.matchMedia("(min-width: " + 640 + "px)").matches = window.innerWidth > window_size_mobile_640
// window.matchMedia("(max-width: " + 640 + "px)").matches = window.innerWidth <= window_size_mobile_640
var window_size_desktop_max_width_2500 = 2500,
    window_size_desktop_large_1900 = 1900,
    window_size_desktop_1280 = 1280,
    window_size_tablet_1024 = 1024,
    window_size_tablet_portrait_768 = 768,
    show_carousel_margin = (window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches) ? 40 : 50,
    window_size_mobile_640 = 640,
    window_size_mobile_480 = 480,
    show_title_offset = (window.matchMedia("(max-width: " + window_size_tablet_1024 + "px)").matches) ? 160 : 200;

var USAN = USAN || {};

// change priority for events
$.fn.bindFirst = function (name, fn) {
  // bind as you normally would
  // don't want to miss out on any jQuery magic
  this.on(name, fn);

  // Thanks to a comment by @Martin, adding support for
  // namespaced events too.
  this.each(function () {
    var handlers = $._data(this, 'events')[name.split('.')[0]];
    // take out the handler we just inserted from the end
    var handler = handlers.pop();
    // move it at the beginning
    handlers.splice(0, 0, handler);
  });
};


// waitForFinalEvent
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

//Example
//jQuery(window).scroll(function() {
//  waitForFinalEvent(function(){
//    positionFooter();
//  },100,"positioned footer");
//
//});

// end

// get param url
// example $.urlParam(name, url);
// name = string
// url = default window.location.href
$.urlParam = function (name, url) {
  var url = url || window.location.href,
      results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
  if (results == null) {
    return null;
  }
  else {
    return results[1] || 0;
  }
};

function customParseURL(url) {
  var a = document.createElement('a');
  a.href = url;
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function () {
      var ret = {},
          seg = a.search.replace(/^\?/, '').split('&'),
          len = seg.length, i = 0, s;
      for (; i < len; i++) {
        if (!seg[i]) {
          continue;
        }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
      }
      return ret;
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^\/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/')
  };
}


function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat(RegExp.$1);
  }
  else if (navigator.appName == 'Netscape') {
    var ua = navigator.userAgent;
    var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat(RegExp.$1);
  }
  return rv;
}

function scrollToAnchorName(targetName) {
  var $active = $('a[name="' + targetName + '"]');
  var navbarHeight = $('.region-header').height();
  $('html, body').animate({
    scrollTop: $active.position().top - navbarHeight - 20
  }, 1000);
}

$(window).bind('resize', function () {

  //show_carousel_margin = (window.innerWidth < window_size_tablet_portrait)? 40: 50;
  show_carousel_margin = (window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches) ? 40 : 50;

});

$(document).ready(function () {

  $('.node-type-usanetwork-static-page .node-usanetwork-static-page a[href^="#"]').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href').substring(1);
    var targetName = target.substring(0);
    scrollToAnchorName(targetName);
  });

  $('.character-info-block .tabs li').click(function () {
    if (!$(this).hasClass('active')) {
      $('.character-info-block .tabs li').removeClass('active');
      $('.character-info-block .description-item').removeClass('active');
      $(this).addClass('active');
      var activeTab = $(this).attr('data-tab');
      $('.description-item[data-tab="' + activeTab + '"]').addClass('active');
    }
  });

  $(document).on('click', 'a[href$="enhanced"]', function(e){
    e.preventDefault();
    var parced_src = customParseURL(unescape($(this).attr('href')));
    if (parced_src.params.mobile_url && (usa_deviceInfo.smartphone || usa_deviceInfo.mobileDevice)) {
      setTimeout(function () {
        window.location = parced_src.params.mobile_url;
      }, 500);
    } else {
      setTimeout(function () {
        window.location = parced_src.path;
      }, 500);
    }
  });

});

// detect browser
function browserDetect() {

  var browserName = '';

  //Check if browser is IE or not
  if (navigator.userAgent.search("MSIE") >= 0) {
    browserName = 'msie';
  }
  //Check if browser is Chrome or not
  else if (navigator.userAgent.search("Chrome") >= 0) {
    browserName = 'chrome';
  }
  //Check if browser is Firefox or not
  else if (navigator.userAgent.search("Firefox") >= 0) {
    browserName = 'firefox';
  }
  //Check if browser is Safari or not
  else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    browserName = 'safari';
  }
  //Check if browser is Opera or not
  else if (navigator.userAgent.search("Opera") >= 0) {
    browserName = 'opera';
  }

  return browserName;
}

// Add Spin JS
// itemId - string, spinner block id
// bodyClass - string, body class
// color - set spinner color, default color #000000
function addSpinJs(itemId, bodyClass, color) {

  var currentColor = '#000000';

  if ($('body').hasClass(bodyClass)) {
    currentColor = color;
  }

  var opts = {
    lines: 13, // The number of lines to draw
    length: 0, // The length of each line
    width: 4, // The line thickness
    radius: 12, // The radius of the inner circle
    //width: 27, // The line thickness
    //radius: 54, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: currentColor, // #rgb or #rrggbb or array of colors
    speed: 1.3, // Rounds per second
    trail: 100, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: '50%', // Top position relative to parent
    left: '50%' // Left position relative to parent
  };

  var target = document.getElementById(itemId);
  var spinner = new Spinner(opts).spin(target);
}
