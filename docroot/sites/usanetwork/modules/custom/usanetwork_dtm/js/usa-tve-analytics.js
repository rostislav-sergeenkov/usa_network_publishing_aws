/**
 * TVE Analytics implementation
 */
;
(function($, window) {
  'use strict';

  var NONE = 'None',
      AUTH_COOKIE_NAME = 'nbcu_ap_authzcheck';

  var adobePassConfig = Drupal.settings.adobePass || {},
      platform = $.browser.mobile ? 'Mobile' : 'PC',
      events = {
        MVPD_SELECTION: 'mvpdSelection',
        MVPD_SELECTED: 'mvpdSelected',
        ADOBE_PASS_LANDING: 'adobePassLanding',
        AUTHN_TRACK: 'authnTrack',
        PASS_SIGNIN: 'passsignin'
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
    AdobeTracking.tve_app = 'website';
    if (typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }

    AdobeTracking.tve_passmvpd = selectedProvider.mvpd_id;
    AdobeTracking.tve_passguid = tve.adobePass.getUserGuid();
    AdobeTracking.tve_passNetwork  = adobePassConfig.adobePassRequestorId;
    AdobeTracking.tve_network = adobePassConfig.adobePassRequestorId;
    AdobeTracking.tve_passauthorize = status ? 'Authorized' : 'Not Authorized';
    AdobeTracking[status ? 'tve_passauthorizesuccess' : 'tve_passauthorizefail'] = 'true';

    _trackEvent('', 'Pass:Authorize:' + (status ? 'Success' : 'Fail'), 'AdobeTracking.tve_app,AdobeTracking.tve_passauthorizefail,AdobeTracking.tve_passauthorizesuccess,AdobeTracking.tve_passguid,AdobeTracking.tve_passmvpd,AdobeTracking.tve_passNetwork,AdobeTracking.tve_network,AdobeTracking.tve_passauthorize' + additionalKeys);
    $.cookie(AUTH_COOKIE_NAME, '1');
  }

  function trackAuthEvents(eventType, args, additionalVars) {
    var additionalKeys = '';
    _preProcess();

    s.contextData = {};

    AdobeTracking.tve_app = 'website';

    if (typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }

    AdobeTracking.tve_contentHub = 'Pass';
    AdobeTracking.tve_passNetwork = adobePassConfig.adobePassRequestorId;
    AdobeTracking.tve_network = adobePassConfig.adobePassRequestorId;

    switch (eventType) {
      case events.MVPD_SELECTION:
        AdobeTracking.tve_passMVPDSelector = 'true';
        AdobeTracking.tve_title = 'Open MVPD Selector';
        AdobeTracking.tve_network = adobePassConfig.adobePassRequestorId;

        _trackPage(adobePassConfig.adobePassRequestorId + ':' + platform + ':Pass:' + 'Open MVPD Selector');

        break;
      case events.MVPD_SELECTED:
        AdobeTracking.tve_passselected = 'true';
        AdobeTracking.tve_passmvpd = args.mvpd_id;
        AdobeTracking.tve_platform = platform;
        AdobeTracking.tve_domain = document.domain;

        _trackEvent('', args.mvpd_id + ' Selected', 'AdobeTracking.tve_platform,AdobeTracking.tve_domain,AdobeTracking.tve_passselected,AdobeTracking.tve_passmvpd,AdobeTracking.tve_passNetwork,AdobeTracking.tve_network' + additionalKeys);

        break;
      case events.ADOBE_PASS_LANDING:
        AdobeTracking.tve_passlanding = 'true';
        AdobeTracking.tve_title = 'Provider Landing';
        AdobeTracking.tve_network = adobePassConfig.adobePassRequestorId;

        _trackPage(adobePassConfig.adobePassRequestorId + ':' + platform + ':Pass:Provider Landing');

        break;
      case events.AUTHN_TRACK:
        AdobeTracking.tve_passauthen = args.authnStatus;
        AdobeTracking.tve_passmvpd = args.mvpd_id;

        if (args.authnStatus == 'Authenticated') {
          AdobeTracking.tve_passguid = tve.adobePass.getUserGuid();
          AdobeTracking.tve_passauthensuccess = 'true';
          _trackEvent('', 'Pass:Authenticate:Success', 'AdobeTracking.tve_app,AdobeTracking.tve_passauthensuccess,AdobeTracking.tve_passguid,AdobeTracking.tve_contentHub,AdobeTracking.tve_passauthen,AdobeTracking.tve_passmvpd' + additionalKeys);
        } else {
          AdobeTracking.tve_passauthenfail = 'true';
          _trackEvent('', 'Pass:Authenticate:Fail', 'AdobeTracking.tve_app,AdobeTracking.tve_passauthenfail,AdobeTracking.tve_contentHub,AdobeTracking.tve_passauthen,AdobeTracking.tve_passmvpd' + additionalKeys);
        }

        break;
      case events.PASS_SIGNIN:
        AdobeTracking.tve_passsignin = 'true';
        AdobeTracking.tve_passmvpd = args.mvpd_id;
        AdobeTracking.tve_title = 'Provider Sign-In';
        AdobeTracking.tve_network = adobePassConfig.adobePassRequestorId;

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
    if (typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }

    AdobeTracking.tve_passmvpd = mvpdId;
    AdobeTracking.tve_affiliate = affiliateId;
    AdobeTracking.tve_localstream = (status ? 'true' : 'false');

    _trackEvent('', 'Stream Authorization ' + (status ? 'Success' : 'Fail'), 'AdobeTracking.tve_localstream,AdobeTracking.tve_passmvpd,AdobeTracking.tve_affiliate' + additionalKeys);
  }

  function setup() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        timeEST = _getDateTimeEST(),
        dd = timeEST.getDate(),
        mm = timeEST.getMonth() + 1,
        yyyy = timeEST.getFullYear();

    _setPageName(adobePassConfig.adobePassRequestorId + ':' + platform + ':' + document.title);

    s.linkInternalFilters = "javascript:," + document.domain;
    AdobeTracking.tve_minute = timeEST.getMinutes();
    AdobeTracking.tve_hour = timeEST.getHours();
    AdobeTracking.tve_day = days[timeEST.getDay()];
    AdobeTracking.tve_date = mm + '-' + dd + '-' + yyyy;
    AdobeTracking.tve_platform = platform;
    AdobeTracking.tve_domain = document.domain;
    AdobeTracking.tve_app = 'website';
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
    s.sa(window.s_account);
  }

  function _resetToBrandReporting() {
    window.s_account = Drupal.settings.analytics.brandSuiteId;
    s.sa(window.s_account);
    s.linkTrackEvents = NONE;

    _removeTveReportingVars();

    s.trackExternalLinks = false;
  }

  function _removeTveReportingVars() {
    $.each(s.contextData, function(index, item) {
      if (index.match('^tve.')) {
        delete s.contextData[index];
      }
    });
  }

  function _trackPage(pageName) {
    setup();

    if (typeof pageName != 'undefined') {
      _setPageName(pageName);
    }

    if (AdobeTracking.tve_contentHub != 'Pass') {
      $.each(s.contextData, function(key, value) {
        if (key.indexOf('tve.pass') != -1) {
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
    s.linkTrackVars = linkVars = linkVars + ',AdobeTracking.tve_minute,AdobeTracking.tve_hour,AdobeTracking.tve_day,AdobeTracking.tve_date,AdobeTracking.tve_platform,AdobeTracking.tve_domain,AdobeTracking.tve_app,AdobeTracking.tve_passNetwork,AdobeTracking.tve_network';
    s.pev2 = linkName;
    s.tl(true, 'o', linkName);

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
    events: events,
    //authorization check result tracking
    authzTrack: authzTrack,
    //tracking authentication events
    trackAuthEvents: trackAuthEvents,
    // Tracking Stream authorization failure
    trackStreamAuthorization: trackStreamAuthorization
  };

})(jQuery, this);
