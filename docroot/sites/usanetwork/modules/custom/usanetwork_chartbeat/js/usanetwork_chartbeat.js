/*
 * Chartbeat Scripts
 */
(function ($) {
  var chartbeat_domain = Drupal.settings.chartbeat_domain;
  var chartbeat_type = Drupal.settings.chartbeat_type;

  window._sf_async_config = {};
  /** CONFIGURATION START **/
  _sf_async_config.uid = 61038;
  _sf_async_config.domain = chartbeat_domain;
  _sf_async_config.useCanonical = true;

  if (chartbeat_type !== null) {
    _sf_async_config.type = chartbeat_type;
  } else if (typeof s == 'object') {
    if (typeof s.prop3 !== 'undefined') {
      _sf_async_config.type = s.prop3;
    }
  } else if (AdobeTracking !== 'undefined') {
    if (typeof AdobeTracking.contentType !== 'undefined') {
      _sf_async_config.type = AdobeTracking.contentType;
    }
  }

  if (typeof s == 'object') {
    if (typeof s.prop10 !== 'undefined') {
      _sf_async_config.sections = s.prop10;
    }
  } else if (AdobeTracking !== 'undefined') {
    if (typeof AdobeTracking.showSite !== 'undefined') {
      _sf_async_config.sections = AdobeTracking.showSite;
    }
  }

  _sf_async_config.authors = _sf_async_config.type;

  /** CONFIGURATION END **/
  function loadChartbeat() {
    window._sf_endpt = (new Date()).getTime();
    var e = document.createElement('script');
    e.setAttribute('language', 'javascript');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
    document.body.appendChild(e);
  }
  $(window).load(function () {
    loadChartbeat();
  });
})(jQuery);
