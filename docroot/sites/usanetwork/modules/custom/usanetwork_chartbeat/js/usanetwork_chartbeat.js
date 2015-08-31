/*
 * Chartbeat Scripts
 */
(function ($) {
  var chartbeat_domain = Drupal.settings.chartbeat_domain;

  window._sf_async_config = {};
  /** CONFIGURATION START **/
  _sf_async_config.uid = 61038;
  _sf_async_config.domain = chartbeat_domain;
  _sf_async_config.useCanonical = true;
  if (typeof s.prop10 != 'undefined') {
    _sf_async_config.sections = s.prop10;
  }
  if (typeof s.prop3 != 'undefined') {
    _sf_async_config.type = s.prop3;
  }
  /** CONFIGURATION END **/
  (function() {
    function loadChartbeat() {
      window._sf_endpt = (new Date()).getTime();
      var e = document.createElement('script');
      e.setAttribute('language', 'javascript');
      e.setAttribute('type', 'text/javascript');
      e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
      document.body.appendChild(e);
    }
    var oldonload = window.onload;
    window.onload = (typeof window.onload != 'function') ?
      loadChartbeat : function() {
      oldonload();
      loadChartbeat();
    };
  })();
})(jQuery);
