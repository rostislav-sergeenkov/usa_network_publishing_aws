/**
 * @file
 * AdobePass javascript functions.
 */
;
(function($, ng, window) {
  var tve = (window.tve = window.tve || {}),
      adobePass = tve.adobePass || (tve.adobePass = {}),

      ACCESS_ENABLER_ID = (adobePass.ACCESS_ENABLER_ID = 'AccessEnabler'),
      USER_COOKIE = 'nbcu_user_settings',
      MVPD_FRAME_ID = 'mvpdframe',
      LOGIN_PENDING_COOKIE = 'nbcu_ap_loginpending',
      ADOBE_PASS_USER_GUID_COOKIE = 'adobepass_user_guid',
      
      drupalSettings = Drupal.settings,
      basePath = drupalSettings.basePath,
      _selectedProvider = '',
      $injector, authService, _aeCheckTimeoutId, tveAnalytics, accessEnabler, mvpdWindow, config;

  if (ng) {
    ng.module('tve.auth')
        .run(['$injector', 'authService', function(_injector, _authService) {
          $injector   = _injector;
          authService = _authService;
        }]);
  }

  Drupal.behaviors.adobePass = {
    attach: function(context, settings) {
      config = settings.adobePass;
      tveAnalytics = tve.analytics;
      loadAccessEnabler();
    }
  };

  _publishApi(adobePass);

  /**
   * Embeds AccessEnabler swf object into specific container.
   *
   * @param {Object} settings
   *    Configuration object exposed from adobe_pass.module.
   */
  function loadAccessEnabler() {
    var params = {
          menu: 'false',
          quality: 'low',
          AllowScriptAccess: 'always',
          swliveconnect: 'true',
          wmode: 'transparent',
          align: 'middle'
        },
        attributes = {
          id: ACCESS_ENABLER_ID,
          name: ACCESS_ENABLER_ID
        },
        ACCESS_ENABLER_CONTAINER_ID = 'contentAccessEnabler',
        container = document.createElement('div');

    container.id = ACCESS_ENABLER_CONTAINER_ID;
    $(document.body).append(container);

    swfobject.embedSWF(
        // AccessEnabler.swf location.
        config.adobePassAccessEnablerLoc,
        // Container ID to embed AccessEnabled.swf.
        ACCESS_ENABLER_CONTAINER_ID,
        // Object size 1pxx1px.
        1, 1,
        // Minimum flash version.
        config.adobePassFlashVer,
        // XiSwfUrlStr.
        null,
        // Flash variables.
        null,
        // Parameters.
        params,
        // Object attributes.
        attributes,
        // Onload callback.
        accessLoadedCheck
    );
  }

  /**
   * Creates timeout for swf loaded event.
   *
   * Logs an error, if timeout expired before onload event.
   */
  function accessLoadedCheck() {
    _aeCheckTimeoutId = setTimeout(function() {
      var ERROR_MESSAGE = 'AccessEnabler Initialization Failed';

      if (accessEnabler == null) {
        _logError({
          message: ERROR_MESSAGE
        });
      }

      if (authService) {
        authService.rejectAuthPromise(ERROR_MESSAGE);
      }
    }, config.adobePassTimeoutLength);
  }

  /**
   * Clears accessLoadedCheck timeout.
   */
  function stopAECheck() {
    if (_aeCheckTimeoutId) {
      clearTimeout(_aeCheckTimeoutId);
      _aeCheckTimeoutId = null;
    }
  }

  /**
   * Initiates the check authentication process on load of the page.
   */
  function initiateCheckAuthProcess() {
    stopAECheck();
    accessEnabler = document.getElementById(ACCESS_ENABLER_ID);

    // Logging error and exit if AccessEnabler is not found.
    if (accessEnabler == null) {
      _logError({
        message: 'AccessEnabler Initialization Failed'
      });

      return;
    }

    // Enabler configuration.
    accessEnabler.setProviderDialogURL('none');
    accessEnabler.setRequestor(config.adobePassRequestorId, null);
    accessEnabler.checkAuthentication();

    return this;
  }

  /**
   * Start the authentication flow if no valid authentication token
   * is found in the local shared object.
   */
  function getAuthentication(redirectUrl) {
    var redirect = redirectUrl || document.URL || window.location.href;
    redirect = redirect.replace(/\/#/g, '/').replace(/#(.*)/g, '');
    accessEnabler.getAuthentication(redirect);

    return this;
  }

  /**
   * Clear all authentication and authorization for the client.
   */
  function logout() {
    _deleteCookie();
    accessEnabler.logout();

    return this;
  }

  /**
   * Set the ID of the selected provider.
   *
   * @param providerId A provider identifier.
   */
  function setSelectedProvider(providerId) {
    var args = {
          'authnStatus': 'Not Authenticated',
          'mvpd_id': providerId
        },
        currentProvider = authService.getProviderById(providerId);

    if (currentProvider['is_new_window'] === '1') {
      createMVPDWindow();
    }

    tveAnalytics.trackAuthEvents(tveAnalytics.events.MVPD_SELECTED, args);

    _aeCheckTimeoutId = setTimeout(function() {
      if (!mvpdWindow) {
        _logError({
          message: Drupal.t('Adobe Pass authn/authz process could not be completed due to some technical Issue')
        });
      }

      stopAECheck();
    }, config.adobePassTimeoutLength);

    $.cookie(LOGIN_PENDING_COOKIE, '1', { expires: 30, path: basePath });
    _selectedProvider = providerId;
    accessEnabler.setSelectedProvider(providerId);

    return this;
  }

  /**
   * Find the currently selected provider.
   * @return An object with two properties:
   * - MVPD: contains the currently selected provider ID, or null if no MVPD was selected;
   * - AE_State: contains the Access Enabler's current authentication status for the user,
   *             one of 'New User', 'User Not Authenticated' or 'User Authenticated')
   */
  function getSelectedProvider() {
    return accessEnabler.getSelectedProvider();
  }

  /**
   * Perform the post auth check actions.
   */
  function performPostAuthCheckActions(isAuthenticated, errorCode) {
    var selected;

    selected = getSelectedProvider();
    isAuthenticated = !!isAuthenticated;

    if (isAuthenticated) {
      _setCookie({'authn': isAuthenticated, 'selectedProvider': selected.MVPD });
      if(!$('body').hasClass('page-videos-live')){
        changeSrc(selected.MVPD);
      }

    }
    else {
      _deleteCookie();
      if (selected.MVPD != null) {
        accessEnabler.setSelectedProvider(null);
      }
    }

    authService.resolveAuthPromise(isAuthenticated);
  }

  function cancelAuthentication() {
    var mvpdFrame = document.getElementById(MVPD_FRAME_ID);
    accessEnabler.setProviderDialogURL('none');

    stopAECheck();

    if (accessEnabler.getSelectedProvider().MVPD != null) {
      accessEnabler.setSelectedProvider(null);
    }

    if (mvpdFrame) {
      mvpdFrame.src = 'about:blank';
    }
    mvpdWindow = null;
  }

  /**
   * Creates a iframe from mvpd login screen to load
   */

  function createIframe(width, height) {
    var iframe = document.getElementById(MVPD_FRAME_ID),
      selected = getSelectedProvider(),
      args = {
        'authnStatus' : "Not Authenticated",
        'mvpd_id' : selected.MVPD
      };
    // This call needs to be triggered for new window/iframe workflow.
    tveAnalytics.trackAuthEvents(tveAnalytics.events.PASS_SIGNIN, args);

    if (mvpdWindow) {
      mvpdWindow.resizeTo(width,height);
      return false;
    }

    stopAECheck();

    if ($injector) {
      var tveModal = $injector.get('tveModal');
      tveModal && tveModal.openAdobePassModal();
    }

    create();

    function create() {
      var container = document.getElementById('adobePassIframeContainer'),
          MAX_WIDTH = 500;
      // Create the iframe to the specified width and height for the MVPD login page.
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = iframe.name = MVPD_FRAME_ID;
        iframe.style.width = (width > MAX_WIDTH ? MAX_WIDTH : width) + 'px';
        iframe.style.height = height + 'px';
      }

      container.appendChild(iframe);
      // Force the name into the DOM since it is still not refreshed, for IE.
      window.frames[MVPD_FRAME_ID].name = MVPD_FRAME_ID;
    }
  }

  /**
   * MVPD Login screen in a new window rather than iframe workflow.
   */
  function createMVPDWindow() {
    mvpdWindow = window.open(null, MVPD_FRAME_ID, "width=300,height=300", true);
    setTimeout(checkClosed, 200);
  }

  /**
   *  Reopens the mvpd login screen if the user has kept the login screen open
   */
  function reopenMVPDWindow() {
    if (mvpdWindow && !mvpdWindow.closed) {
      mvpdWindow.focus();
      return true;
    }
    else{
      return false;
    }
  }

  /**
   * Watch when the Pop-up window is closed (either by the user or by finishing the authentication flow).
   */
  function checkClosed() {
    try {
      if (mvpdWindow && mvpdWindow.closed) {
        location.reload();
      }
      else {
        setTimeout(checkClosed, 200);
      }
    }
    catch (error) {

    }
  }

  /**
   * Returns the adobe pass GUID.
   */
  function getUserGuid() {
    return $.cookie(ADOBE_PASS_USER_GUID_COOKIE);
  }

  /**
   * Send Tracking Data function implementation
   * @public
   */
  function sendAuthnEvents(trackingEventType, trackingData) {
    // Getting the selected mvpd id from tracking data since after authn success page gets reloaded.
    if (trackingData[0]) {
      _selectedProvider = trackingData[1]; 
    }
    var args = {'authnStatus' : trackingData[0] ? "Authenticated" : "Not Authenticated", 'mvpd_id' : _selectedProvider };
    $.cookie(ADOBE_PASS_USER_GUID_COOKIE, trackingData[2], { path: basePath });
    if (trackingEventType == "authenticationDetection" && $.cookie(LOGIN_PENDING_COOKIE) != null) {
      tveAnalytics.trackAuthEvents(tveAnalytics.events.AUTHN_TRACK, args);
      $.cookie(LOGIN_PENDING_COOKIE, '', { expires: -1, path: basePath });
    }
  }

  /**
   * Logs the error message into drupalis watch dog
   */
  function _logError(error) {
    var injector = angular.element(document).injector();
    injector.invoke(['tveErrorHandler', function(tveErrorHandler) {
      tveErrorHandler.showErrorMessage(tveErrorHandler.errors.ADOBE_PASS);
    }]);

    $.ajax({
      type: 'POST',
      url: Drupal.settings.basePath + 'adobe-pass/log',
      dataType: 'json',
      data: {'errorObj': error},
      success: function() {

      }
    });
  }

  /**
   * Sets adobe cookies.
   *
   * @param input parameters
   */
  function _setCookie(input) {
    $.cookie(USER_COOKIE, JSON.stringify(input), { path: basePath });
  }

  /**
   * Deletes adobe auth cookies.
   */
  function _deleteCookie(input) {
    $.cookie(USER_COOKIE, '', { expires: -1, path: basePath });
  }

  /**
   * Change iframe src after Authentication.
   */
  function changeSrc(mvpd) {
    var iframe = $('.video-player-wrapper iframe');
    var str = iframe.attr('src');
    var current_src = parseURL(str);
    if (current_src.params.MVPDid){
      str = str.replace('MVPDid='+current_src.params.MVPDid, 'MVPDid='+mvpd);
      iframe.attr('src', str);
    }
    else {
      var i=str.indexOf('#');
      if (i != -1){
        str = myStr(str,'&MVPDid='+mvpd,i);
        iframe.attr('src', str);
      }
      else {
        str += '&MVPDid='+mvpd;
      }
    }
    function parseURL(url) {
      var a =  document.createElement('a');
      a.href = url;
      return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
          var ret = {},
            seg = a.search.replace(/^\?/,'').split('&'),
            len = seg.length, i = 0, s;
          for (;i<len;i++) {
            if (!seg[i]) { continue; }
            s = seg[i].split('=');
            ret[s[0]] = s[1];
          }
          return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
      };
    }
    function myStr(str1,str2,i) {
      return str1.slice(0,i)+str2+str1.slice(i)
    }
  }

  function _publishApi(instance) {
    $.extend(instance, {
      'initiateCheckAuthProcess': initiateCheckAuthProcess,
      'stopAECheck': stopAECheck,
      'createIframe': createIframe,
      'performPostAuthCheckActions': performPostAuthCheckActions,
      'getAuthentication': getAuthentication,
      'logout': logout,
      'setSelectedProvider': setSelectedProvider,
      'cancelAuthentication': cancelAuthentication,
      'sendAuthnEvents': sendAuthnEvents,
      'reopenMVPDWindow': reopenMVPDWindow,
      'getUserGuid': getUserGuid
    });
  }

})(jQuery, this.angular, this);

/**
 * Callbacks
 */

/**
 * Called when the Access Enabler is successfully loaded and initialized.
 * This is the entry point for your communication with the AE.
 */
function swfLoaded() {
  tve.adobePass.initiateCheckAuthProcess();
}

/**
 * Callback that receives the list of available providers for the current requestor ID.
 */
function displayProviderDialog(providers) {
  tve.adobePass.stopAECheck();
}

/**
 * Callback that creates an iFrame to use for login if the MVPD requires it.
 */
function createIFrame(width, height) {
  tve.adobePass.createIframe(width, height);
}

/**
 * Callback that receives the result of a successful authorization token request.
 * Your implementation sets the authorization token.
 */
function setToken(requestedResourceID, token) {

}

/**
 * Callback that indicates a failed authorization token request.
 * @param requestedResourceID The resource ID for which the token request failed.
 * @param requestErrorCode  The error code for the failure.
 * @param requestErrorDetails The custom error message that describes the failure.
 */
function tokenRequestFailed(requestedResourceID, requestErrorCode, requestErrorDetails) {

}

/** Callback that customizes the size of the provided selector dialog. **/
setMovieDimensions = function(width, height) {
  //TODO: Set the dimension for the provider selector.
}

/**
 * Callback that indicates the authentication status for the user.
 *  @param isAuthenticated Authentication status is one of 1 (Authenticated) or 0 (Not authenticated).
 *  @param errorCode Any error that occurred when determining the authentication status,
 *                   or an empty string if no error occurred.
 */
function setAuthenticationStatus(isAuthenticated, errorCode) {
  tve.adobePass.performPostAuthCheckActions(isAuthenticated, errorCode);
}

/**
 * Callback that sends a tracking data event and associated data
 *  @param trackingEventType The type of event that triggered this tracking event
 *  @param trackingData An array of all the tracking data/variables associated with the tracking event
 *
 * There are three possible tracking events types:
 *    authorizationDetection    - any time an authorization token request returns
 *    authenticationDetection    - any time an authentication check occurs
 *    mvpdSelection                - when the user selects an mvpd in the mvpd selection dialog
 * trackingData values:
 * For trackingEventType 'authorizationDetection'
 *     [0] Whether the token request was successful [true/false]
 *       and if true:
 *       [1] MVPD ID [string]
 *       [2] User ID (md5 hashed) [string]
 *       [3] Whether it was cached or not [true/false]
 *
 * For trackingEventType 'authenticationDetection'
 *     [0] Whether the token request was successful (false)
 *       and if successful is true:
 *       [1] MVPD ID
 *       [2] User ID (md5 hashed)
 *       [3] Whether it was cached or not (true/false)
 *
 * For trackingEventType 'mvpdSelection'
 *       [0] MVPD ID
 *
 * MVPD Example: MVPD ID for Comcast is 'Comcast'
 */
function sendTrackingData(trackingEventType, trackingData) {
  tve.adobePass.sendAuthnEvents(trackingEventType,trackingData);
}

/**
 * Called when a get-metadata request has completed successfully.
 * Passes back property key for the requested value, an array containing the resource ID for an AuthZ
 * token TTL (or null for any other key), and the property value retrieved from Access Enabler.
 * 
 * @param key the Metadata key for which a value has been requested
 * @param args an array containing extra arguments passed when requesting metadata
 * @param value the values associated with the Metadata key or null if no value is associated with the key.
 */
function setMetadataStatus(key, args, value) {
  // TODO: Start here implementing logic for handling the metadata that has been returned.
}
