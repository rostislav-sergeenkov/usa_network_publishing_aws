/**
 * TVE Analytics implementation
 */
;
(function($, s, window) {
  'use strict';

  var NONE = 'None',
      AUTH_COOKIE_NAME = 'nbcu_ap_authzcheck';

  var adobePassConfig = Drupal.settings.adobePass || {},
      platform = $.browser.mobile ? 'Mobile' : 'PC',
      events = {
        MVPD_SELECTION     : 'mvpdSelection',
        MVPD_SELECTED      : 'mvpdSelected',
        ADOBE_PASS_LANDING : 'adobePassLanding',
        AUTHN_TRACK        : 'authnTrack',
        PASS_SIGNIN        : 'passsignin'
      };

  window.tve = window.tve || {};

  function authzTrack(status, selectedProvider, additionalVars) {
    var additionalKeys = '';

    if ($.cookie(AUTH_COOKIE_NAME)) {
      // Do not track if this cookie exists.
      return;
    }

    _preProcess();

    s.contextData = {};
    
    if(typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }

    s.contextData['tve_passmvpd']      = selectedProvider.mvpd_id;
    s.contextData['tve_passguid']      = tve.adobePass.getUserGuid();
    s.contextData['tve_passnetwork']   = adobePassConfig.adobePassRequestorId;
    s.contextData['tve_passauthorize'] = status ? 'Authorized' : 'Not Authorized';
    s.contextData[status ? 'tve_passauthorizesuccess' : 'tve_passauthorizefail'] = 'true';

    _trackEvent('', 'Pass:Authorize:' + (status ? 'Success' : 'Fail'), 'contextData.tve_passauthorizefail,contextData.tve_passauthorizesuccess,contextData.tve_passguid,contextData.tve_passmvpd,contextData.tve_passnetwork,contextData.tve_passauthorize' + additionalKeys);
    $.cookie(AUTH_COOKIE_NAME, '1');
  }

  function trackAuthEvents(eventType, args, additionalVars) {
    var additionalKeys = '';
    _preProcess();

    s.contextData = {};
    if(typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }
    s.contextData['tve_contenthub'] = 'Pass';
    s.contextData['tve_passnetwork']   = adobePassConfig.adobePassRequestorId;

    switch (eventType) {
      case events.MVPD_SELECTION:
        s.contextData['tve_passmvpdselector'] = 'true';

        _trackPage(adobePassConfig.adobePassRequestorId + ':' + platform + ':Pass:' + 'Open MVPD Selector');

        break;
      case events.MVPD_SELECTED:
        s.contextData['tve_passselected'] = 'true';
        s.contextData['tve_passmvpd'] = args.mvpd_id;

        _trackEvent('', args.mvpd_id + ' Selected', 'contextData.tve_passselected,contextData.tve_passmvpd,contextData.tve_passnetwork' + additionalKeys);

        break;
      case events.ADOBE_PASS_LANDING:
        s.contextData['tve_passlanding'] = 'true';

        _trackPage(adobePassConfig.adobePassRequestorId + ':' + platform + ':Pass:Provider Landing');

        break;
      case events.AUTHN_TRACK:
        s.contextData['tve_passauthen'] = args.authnStatus;
        s.contextData['tve_passmvpd'] = args.mvpd_id;

        if (args.authnStatus == 'Authenticated') {
          s.contextData['tve_passguid'] = tve.adobePass.getUserGuid();
          s.contextData['tve_passauthensuccess'] = 'true';
          _trackEvent('', 'Pass:Authenticate:Success', 'contextData.tve_passauthensuccess,contextData.tve_passguid,contextData.tve_contenthub,contextData.tve_passauthen,contextData.tve_passmvpd' + additionalKeys);
        }
        else {
          s.contextData['tve_passauthenfail'] = 'true';
          _trackEvent('', 'Pass:Authenticate:Fail', 'contextData.tve_passauthenfail,contextData.tve_contenthub,contextData.tve_passauthen,contextData.tve_passmvpd' + additionalKeys);
        }

        break;
      case events.PASS_SIGNIN:
        s.contextData['tve_passsignin'] = 'true';
        s.contextData['tve_passmvpd']   = args.mvpd_id;

        _trackPage(adobePassConfig.adobePassRequestorId + ':' + platform + ':Pass:Provider Sign-In');

        break;
    }
  }

  /**
   * Tracks stream authorization status events.
  */
  function trackStreamAuthorization(status, mvpdId, affiliateId, additionalVars) {
    var additionalKeys = '';
    _preProcess();

    s.contextData = {};
    if(typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }
    
    s.contextData['tve_passmvpd'] = mvpdId;
    s.contextData['tve_affiliate'] = affiliateId;
    s.contextData['tve_localstream'] = (status ? 'true' : 'false');

    _trackEvent('', 'Stream Authorization ' + (status ? 'Success' : 'Fail'), 'contextData.tve_localstream,contextData.tve_passmvpd,contextData.tve_affiliate' + additionalKeys);    
  }

  function setup() {
    var days    = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        timeEST = _getDateTimeEST(),
        dd      = timeEST.getDate(),
        mm      = timeEST.getMonth() + 1,
        yyyy    = timeEST.getFullYear();

    _setPageName(adobePassConfig.adobePassRequestorId + ':' + platform + ':' + document.title);

    s.contextData['tve_minute']   = timeEST.getHours() + ':' + timeEST.getMinutes();
    s.contextData['tve_hour']     = timeEST.getHours();
    s.contextData['tve_day']      = days[timeEST.getDay()];
    s.contextData['tve_date']     = mm + '-' + dd + '-' + yyyy;
    s.contextData['tve_platform'] = platform;
    s.contextData['tve_domain']   = document.domain;
    s.contextData['tve_app']      = 'website';
  }

  function updateContextData(additionalVars) {
    var keys = '';
    s.contextData = $.extend(s.contextData, additionalVars);
    $.each(additionalVars, function(key, value) {
      keys = ',contextData.' + key;
    });

    return keys;
  }

  function _preProcess() {
    window.s_account = Drupal.settings.analytics.tveSuiteId;
    s = window.s_gi(window.s_account);
  }

  function _resetToBrandReporting() {
    window.s_account = Drupal.settings.analytics.brandSuiteId;
    s = window.s_gi(window.s_account);
    s.linkTrackEvents = NONE;

    _removeTveReportingVars();

    s.trackExternalLinks = false;
  }

  function _removeTveReportingVars() {
    $.each(s.contextData, function(index, item) {
      if (index.match('^tve_')) {
        delete s.contextData[index];
      }
    });
  }

  function _trackPage(pageName) {
    setup();

    if(typeof pageName != 'undefined') {
      _setPageName(pageName);
    }

    if (s.contextData['tve_contenthub'] != 'Pass'){
      $.each( s.contextData, function( key, value ) {
        if (key.indexOf('tve_pass') != -1){
          delete s.contextData[key];
        }
      });
    }

    s.linkTrackEvents = s.linkTrackVars = NONE;
    s.t();

    _resetToBrandReporting();
  }

  function _trackEvent(events, linkName, linkVars) {
    s.events = s.linkTrackEvents = events;
    s.linkTrackVars = linkVars = linkVars + ',contextData.tve_minute,contextData.tve_hour,contextData.tve_day,contextData.tve_date,contextData.tve_platform,contextData.tve_domain,contextData.tve_app,contextData.tve_passnetwork';
    s.pev2 = linkName;
    s.tl(this, 'o', linkName);

    setup();

    _resetToBrandReporting();
  }

  /**
   * Returns date in EST
   * @returns {Date} current Date in EST timezone
   * @private
   */
  function _getDateTimeEST() {
    var HOURS_OFFSET = -18000000,
        clientDate = new Date(),
        utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

    return new Date(utc + HOURS_OFFSET);
  }

  /**
   * Setter for s['pageName']
   * @param {string} pageName Page name
   * @private
   */
  function _setPageName(pageName) {
    s.pageName = pageName;
  }

  //publishing API
  tve.analytics = {
    //events list
    events         : events,
    //authorization check result tracking
    authzTrack     : authzTrack,
    //tracking authentication events
    trackAuthEvents: trackAuthEvents,
    // Tracking Stream authorization failure
    trackStreamAuthorization: trackStreamAuthorization
  };

  //initialization
  setup();

})(jQuery, s, this);
