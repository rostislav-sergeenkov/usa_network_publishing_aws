/**
 * TVE Analytics implementation
 */
;
<<<<<<< HEAD
(function($, s, window) {
=======
(function($, window) {
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
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
<<<<<<< HEAD
    
=======
    s.contextData['tve.app'] = 'website';
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
    if(typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }

<<<<<<< HEAD
    s.contextData['tve_passmvpd']      = selectedProvider.mvpd_id;
    s.contextData['tve_passguid']      = tve.adobePass.getUserGuid();
    s.contextData['tve_passnetwork']   = adobePassConfig.adobePassRequestorId;
    s.contextData['tve_passauthorize'] = status ? 'Authorized' : 'Not Authorized';
    s.contextData[status ? 'tve_passauthorizesuccess' : 'tve_passauthorizefail'] = 'true';

    _trackEvent('', 'Pass:Authorize:' + (status ? 'Success' : 'Fail'), 'contextData.tve_passauthorizefail,contextData.tve_passauthorizesuccess,contextData.tve_passguid,contextData.tve_passmvpd,contextData.tve_passnetwork,contextData.tve_passauthorize' + additionalKeys);
=======
    s.contextData['tve.passmvpd']      = selectedProvider.mvpd_id;
    s.contextData['tve.passguid']      = tve.adobePass.getUserGuid();
    s.contextData['tve.passnetwork']   = adobePassConfig.adobePassRequestorId;
    s.contextData['tve.network']   = adobePassConfig.adobePassRequestorId;
    s.contextData['tve.passauthorize'] = status ? 'Authorized' : 'Not Authorized';
    s.contextData[status ? 'tve.passauthorizesuccess' : 'tve.passauthorizefail'] = 'true';

    _trackEvent('', 'Pass:Authorize:' + (status ? 'Success' : 'Fail'), 'contextData.tve.app,contextData.tve.passauthorizefail,contextData.tve.passauthorizesuccess,contextData.tve.passguid,contextData.tve.passmvpd,contextData.tve.passnetwork,contextData.tve.network,contextData.tve.passauthorize' + additionalKeys);
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
    $.cookie(AUTH_COOKIE_NAME, '1');
  }

  function trackAuthEvents(eventType, args, additionalVars) {
    var additionalKeys = '';
    _preProcess();

    s.contextData = {};
<<<<<<< HEAD
    if(typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }
    s.contextData['tve_contenthub'] = 'Pass';
    s.contextData['tve_passnetwork']   = adobePassConfig.adobePassRequestorId;

    switch (eventType) {
      case events.MVPD_SELECTION:
        s.contextData['tve_passmvpdselector'] = 'true';
=======
    s.contextData['tve.app'] = 'website';

    if(typeof additionalVars != 'undefined') {
      additionalKeys = updateContextData(additionalVars);
    }
    s.contextData['tve.contenthub'] = 'Pass';
    s.contextData['tve.passnetwork']   = adobePassConfig.adobePassRequestorId;
    s.contextData['tve.network']   = adobePassConfig.adobePassRequestorId;

    switch (eventType) {
      case events.MVPD_SELECTION:
        s.contextData['tve.passmvpdselector'] = 'true';
        s.contextData['tve.title'] = 'Open MVPD Selector';
        s.contextData['tve.network']   = adobePassConfig.adobePassRequestorId;
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf

        _trackPage(adobePassConfig.adobePassRequestorId + ':' + platform + ':Pass:' + 'Open MVPD Selector');

        break;
      case events.MVPD_SELECTED:
<<<<<<< HEAD
        s.contextData['tve_passselected'] = 'true';
        s.contextData['tve_passmvpd'] = args.mvpd_id;

        _trackEvent('', args.mvpd_id + ' Selected', 'contextData.tve_passselected,contextData.tve_passmvpd,contextData.tve_passnetwork' + additionalKeys);

        break;
      case events.ADOBE_PASS_LANDING:
        s.contextData['tve_passlanding'] = 'true';
=======
        s.contextData['tve.passselected'] = 'true';
        s.contextData['tve.passmvpd'] = args.mvpd_id;
        s.contextData['tve.platform'] = platform;
        s.contextData['tve.domain']   = document.domain;

        _trackEvent('', args.mvpd_id + ' Selected', 'contextData.tve.platform,contextData.tve.domain,contextData.tve.passselected,contextData.tve.passmvpd,contextData.tve.passnetwork,contextData.tve.network' + additionalKeys);

        break;
      case events.ADOBE_PASS_LANDING:
        s.contextData['tve.passlanding'] = 'true';
        s.contextData['tve.title'] = 'Provider Landing';
        s.contextData['tve.network']   = adobePassConfig.adobePassRequestorId;
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf

        _trackPage(adobePassConfig.adobePassRequestorId + ':' + platform + ':Pass:Provider Landing');

        break;
      case events.AUTHN_TRACK:
<<<<<<< HEAD
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
=======
        s.contextData['tve.passauthen'] = args.authnStatus;
        s.contextData['tve.passmvpd'] = args.mvpd_id;

        if (args.authnStatus == 'Authenticated') {
          s.contextData['tve.passguid'] = tve.adobePass.getUserGuid();
          s.contextData['tve.passauthensuccess'] = 'true';
          _trackEvent('', 'Pass:Authenticate:Success', 'contextData.tve.app,contextData.tve.passauthensuccess,contextData.tve.passguid,contextData.tve.contenthub,contextData.tve.passauthen,contextData.tve.passmvpd' + additionalKeys);
        }
        else {
          s.contextData['tve.passauthenfail'] = 'true';
          _trackEvent('', 'Pass:Authenticate:Fail', 'contextData.tve.app,contextData.tve.passauthenfail,contextData.tve.contenthub,contextData.tve.passauthen,contextData.tve.passmvpd' + additionalKeys);
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
        }

        break;
      case events.PASS_SIGNIN:
<<<<<<< HEAD
        s.contextData['tve_passsignin'] = 'true';
        s.contextData['tve_passmvpd']   = args.mvpd_id;
=======
        s.contextData['tve.passsignin'] = 'true';
        s.contextData['tve.passmvpd']   = args.mvpd_id;
        s.contextData['tve.title'] = 'Provider Sign-In';
        s.contextData['tve.network']   = adobePassConfig.adobePassRequestorId;
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf

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
    
<<<<<<< HEAD
    s.contextData['tve_passmvpd'] = mvpdId;
    s.contextData['tve_affiliate'] = affiliateId;
    s.contextData['tve_localstream'] = (status ? 'true' : 'false');

    _trackEvent('', 'Stream Authorization ' + (status ? 'Success' : 'Fail'), 'contextData.tve_localstream,contextData.tve_passmvpd,contextData.tve_affiliate' + additionalKeys);    
=======
    s.contextData['tve.passmvpd'] = mvpdId;
    s.contextData['tve.affiliate'] = affiliateId;
    s.contextData['tve.localstream'] = (status ? 'true' : 'false');

    _trackEvent('', 'Stream Authorization ' + (status ? 'Success' : 'Fail'), 'contextData.tve.localstream,contextData.tve.passmvpd,contextData.tve.affiliate' + additionalKeys);    
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
  }

  function setup() {
    var days    = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        timeEST = _getDateTimeEST(),
        dd      = timeEST.getDate(),
        mm      = timeEST.getMonth() + 1,
        yyyy    = timeEST.getFullYear();

    _setPageName(adobePassConfig.adobePassRequestorId + ':' + platform + ':' + document.title);

<<<<<<< HEAD
    s.contextData['tve_minute']   = timeEST.getHours() + ':' + timeEST.getMinutes();
    s.contextData['tve_hour']     = timeEST.getHours();
    s.contextData['tve_day']      = days[timeEST.getDay()];
    s.contextData['tve_date']     = mm + '-' + dd + '-' + yyyy;
    s.contextData['tve_platform'] = platform;
    s.contextData['tve_domain']   = document.domain;
    s.contextData['tve_app']      = 'website';
=======
    s.linkInternalFilters = "javascript:," + document.domain;
    s.contextData['tve.minute']   = timeEST.getMinutes();
    s.contextData['tve.hour']     = timeEST.getHours();
    s.contextData['tve.day']      = days[timeEST.getDay()];
    s.contextData['tve.date']     = mm + '-' + dd + '-' + yyyy;
    s.contextData['tve.platform'] = platform;
    s.contextData['tve.domain']   = document.domain;
    s.contextData['tve.app']      = 'website';
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
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
<<<<<<< HEAD
    s = window.s_gi(window.s_account);
=======
    s.sa(window.s_account);
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
  }

  function _resetToBrandReporting() {
    window.s_account = Drupal.settings.analytics.brandSuiteId;
<<<<<<< HEAD
    s = window.s_gi(window.s_account);
=======
    s.sa(window.s_account);
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
    s.linkTrackEvents = NONE;

    _removeTveReportingVars();

    s.trackExternalLinks = false;
  }

  function _removeTveReportingVars() {
    $.each(s.contextData, function(index, item) {
<<<<<<< HEAD
      if (index.match('^tve_')) {
=======
      if (index.match('^tve.')) {
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
        delete s.contextData[index];
      }
    });
  }

  function _trackPage(pageName) {
    setup();

    if(typeof pageName != 'undefined') {
      _setPageName(pageName);
    }

<<<<<<< HEAD
    if (s.contextData['tve_contenthub'] != 'Pass'){
      $.each( s.contextData, function( key, value ) {
        if (key.indexOf('tve_pass') != -1){
=======
    if (s.contextData['tve.contenthub'] != 'Pass'){
      $.each( s.contextData, function( key, value ) {
        if (key.indexOf('tve.pass') != -1){
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
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
<<<<<<< HEAD
    s.linkTrackVars = linkVars = linkVars + ',contextData.tve_minute,contextData.tve_hour,contextData.tve_day,contextData.tve_date,contextData.tve_platform,contextData.tve_domain,contextData.tve_app,contextData.tve_passnetwork';
    s.pev2 = linkName;
    s.tl(this, 'o', linkName);
=======
    s.linkTrackVars = linkVars = linkVars + ',contextData.tve.minute,contextData.tve.hour,contextData.tve.day,contextData.tve.date,contextData.tve.platform,contextData.tve.domain,contextData.tve.app,contextData.tve.passnetwork,contextData.tve.network';
    s.pev2 = linkName;
    s.tl(true, 'o', linkName);
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf

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

<<<<<<< HEAD
  //initialization
  setup();

})(jQuery, s, this);
=======
})(jQuery, this);
>>>>>>> 1508041d918abfb3dc1739fc7f67d24d2d0f4daf
