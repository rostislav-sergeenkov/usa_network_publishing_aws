
/* HEY!!! This is junk example code not intended for production.*/

var flashPlayerVersion = "10.1.53";
var accessEnablerObject;
var mvpdList = {};  // The list of cached MVPDs
var mvpdWindow;  // The reference to the popup with the MVPD login page
var cancelTimer = 0;
var useIframeLoginStyle = false; // by default use popup implementation
var authRequestor = "cnbc";
//var authResource = '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/"><channel><title>cnbc</title><item><title><![CDATA[CNBC Live]]></title><guid>ZWLpN_xW2XueeKGiv__jc8U2V8URuwW0</guid><media:rating scheme="urn:mpaa">TV-14</media:rating></item></channel></rss>';
var authResource = "cnbc";
var message ="";

var $ = jQuery;


$(function(){
  loadAccessEnabler();
});

function logEvent (str){
  console.log(str);
  message = message+"<br>"+str;
  $("#feedback").html(message)
};

function setAuthenticationStatus(isAuthenticated, errorCode) {
  updateStatus();
  if (isAuthenticated) {
    accessEnablerObject.getAuthorization(authResource, null);

  } else {
    logEvent("[WARN] AuthN Error: errorCode:" + errorCode);
  }
}


function tokenRequestFailed(){
  logEvent("AuthZ Token Request Failed.");
}
function updateStatus() {
  var provObj = accessEnablerObject.getSelectedProvider();
  loadPlayer(provObj.MVPD);
  $("#mvpdIdLabel").html("<span class='infoValue'>" + provObj.MVPD + "</span>");
  $("#authNLabel").html(provObj.AE_State);
}

/*
 * Callback indicating that the AccessEnabler swf has initialized
 */
function swfLoaded() {
  logEvent("ACCESS ENABLER LOADED!");
  var ae = $('#accessEnabler').get(0);
  accessEnablerObject = new AccessEnablerWrapper(ae);
  $("#logoutAdobePass").click(function() {
    accessEnablerObject.logout();
  });
  accessEnablerObject.setRequestor(authRequestor, null);
  accessEnablerObject.setResourceID(authResource);
  accessEnablerObject.checkAuthentication();
}

function loadAccessEnabler() {
  logEvent("Load production Access Enabler ...");
  var accessEnablerLocation = "http://entitlement.auth.adobe.com/entitlement/AccessEnablerDebug.swf";

  $("#requestorIdLabel").html("<span class='infoValue'>"+authRequestor+"</span>");
  var flashvars = false;
  var params = {
    menu: "false",
    quality: "high",
    align: "middle",
    AllowScriptAccess: "always",
    swliveconnect: "true",
    color: "#33FF22"
  };
  var attributes = {
    id: "accessEnabler",
    name: "accessEnabler"
  };

  swfobject.embedSWF(accessEnablerLocation, "contentAccessEnabler", "1", "1", flashPlayerVersion, "swf/expressInstall.swf", flashvars, params, attributes);

  // if browser is ie then force using the iframe
  if (window.attachEvent && !window.addEventListener) {
    useIframeLoginStyle = true;
  }

  // check for URL query parameter to see if we should use popup or iframe
  var loginStyle = null;
  if (loginStyle != null) {
    if (loginStyle == "true") {
      useIframeLoginStyle = true;
    } else if (loginStyle == "false") {
      useIframeLoginStyle = false;
    }
  }
  $('#mvpddiv').hide();
  if (useIframeLoginStyle == true) {
    $("#mvpddiv").html("<div style=\"background: red\"><input type=\"button\" id=\"btnCloseIframe\" value=\"X\" onclick=\"closeIframeAction();\"></div><iframe id=\"mvpdframe\" name=\"mvpdframe\" src=\"about:blank\"></iframe>");
  }
}

function authenticate() {
  var mvpdId = $('#mvpdList').val();
  accessEnablerObject.setSelectedProvider(mvpdId);
}

function checkClosed() {
  try {
    if (mvpdWindow && mvpdWindow["closed"]) {
      clearInterval(cancelTimer);
      accessEnablerObject.setSelectedProvider(null);
      accessEnablerObject.getAuthentication();
      $('#mvpddiv').hide();
    }
  } catch (error) {
    logEvent(error);
  }
}

function setConfig(configXML) {
  mvpdList = [];
  $.each($($.parseXML(configXML)).find('mvpd'), function (idx, item) {
    var mvpdId = $(item).find('id').text();
    mvpdList[mvpdId] = {
      displayName: $(item).find('displayName').text(),
      logo: $(item).find('logoUrl').text(),
      popup: $(item).find('iFrameRequired').text() == "true",
      width: $(item).find('iFrameWidth').text(),
      height: $(item).find('iFrameHeight').text()
    };
    $('#mvpdList').append($('<option value="' + mvpdId + '" title="' + mvpdId + '">' + mvpdList[mvpdId].displayName + '</option>'));
  });
  $('#mvpdList').change(function(event) { //debugger;
    authenticate();
  });
  accessEnablerObject.getAuthentication();
}

/*
 * The custom non-Flash MVPD selector dialog will be implemented in this function.
 */
function displayProviderDialog(providers) {

}

function createIFrame(width, height) {
  var mdiv = $('#mvpddiv');
  mdiv.width(width+"px");
  mdiv.show();
  ifrm = $('#mvpdframe');
  ifrm.width(width+"px");
  ifrm.height(height+"px");
}

/*
 * The code the correctly closes the opened IFrame and does not leave the
 * AccessEnabler in an undefined state.
 */
function closeIframeAction() {
  accessEnablerObject.setSelectedProvider(null);
  accessEnablerObject.getAuthentication();
  $('#mvpdframe').src = "about:blank";
  $('#mvpddiv').hide();
}

function AccessEnablerWrapper(ae) {
  this.getAccessEnabler = function() {
    return ae;
  }

  this.setRequestor = function(requestor_id, sp_configuration) {
    ae.setRequestor(requestor_id, sp_configuration);
  }

  this.setResourceID = function(resourceId) {
    ae.setResourceID(resourceId);
  }

  /** Ask for authorization for a given resource. */
  this.getAuthorization = function(resource_id) {
    ae.getAuthorization(resource_id);
  }

  this.setProviderDialogURL = function(url) {
    ae.setProviderDialogURL(url);
  }

  /**
   * Check authorization for a given resource.
   * This does not authenticate, but queries the authorization status
   * if the user is already authenticated.
   */
  this.checkAuthorization = function(resource_id) {
    ae.checkAuthorization(resource_id);
  }
  /**
   * Check authentication status for the user.
   * This does not authenticate, but queries the authentication status.
   */
  this.checkAuthentication = function() {
    ae.checkAuthentication();
  }
  /**
   * Start the authentication flow if no valid authentication token
   * is found in the local shared object.
   */
  this.getAuthentication = function() {
    ae.getAuthentication();
  }
  /**
   * Clear all authentication and authorization for the client.
   */
  this.logout = function() {
    ae.logout();
  }
  /**
   * Set the ID of the selected provider
   * @param provider_id A provider identifier.
   */
  this.setSelectedProvider = function(provider_id) {
    //debugger;
    ae.setSelectedProvider(provider_id);
  }
  /**
   * Find the currently selected provider.
   * @return An object with two properties:
   * - MVPD: contains the currently selected provider ID, or null if no MVPD was selected; * - AE_State: contains the Access Enabler's current authentication status for the user, * one of "New User", "User Not Authenticated" or "User Authenticated")
   */
  this.getSelectedProvider = function() {
    return ae.getSelectedProvider();
  }
  /**
   * Requests a given metadata property value from the Access Enabler.
   * @param metadata key for which the value will be returned.
   * @param args additional arguments
   */

  this.getMetadata = function(key) {
    var args = arguments.splice(1);
    ae.getMetadata(key, args);
  }
}