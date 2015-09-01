// New Tracking Features
if (typeof AdobeTracking != 'undefined') {
  // set breakpoint
  if (typeof(document.documentElement.clientWidth) != 'undefined') {
    usa_cw = document.documentElement.clientWidth;
    if (usa_cw <= 644) {
      AdobeTracking.searchKW8 = usa_deviceInfo.mobileDevice ? 'Smartphone Portrait' : 'Desktop';
    } else if (usa_cw >= 645 && usa_cw <= 959) {
      AdobeTracking.searchKW8 = usa_deviceInfo.mobileDevice ? 'Tablet Portrait' : 'Desktop';
    } else if (usa_cw >= 960 && usa_cw <= 1274) {
      AdobeTracking.searchKW8 = usa_deviceInfo.mobileDevice ? 'Tablet Landscape' : 'Desktop';
    } else if (usa_cw >= 1275) {
      AdobeTracking.searchKW8 = 'Desktop Large';
    }
  }
  // Desktop Large | Desktop | Tablet Landscape | Tablet Portrait | Smartphone Portrait

  // set screen height
  AdobeTracking.searchKW9 = typeof(document.documentElement.clientHeight) != 'undefined' ? document.documentElement.clientHeight : '';

  // set screen width
  AdobeTracking.screenWidth = typeof(document.documentElement.clientWidth) != 'undefined' ? document.documentElement.clientWidth : '';

  // set device type
  if (usa_deviceInfo.mobileDevice && usa_deviceInfo.smartphone) {
    AdobeTracking.deviceType = 'Smartphone';
  } else if (usa_deviceInfo.mobileDevice && !usa_deviceInfo.smartphone) {
    AdobeTracking.deviceType = 'Tablet';
  } else {
    AdobeTracking.deviceType = 'Desktop';
  }

  // set screen orientation - for mobile devices only
  AdobeTracking.screenOrientation = 'Desktop'; // default value when not on a mobile device
  if (usa_deviceInfo.mobileDevice) {
    if (typeof window.onorientationchange != 'undefined') {
      if (orientation == 0) {
        AdobeTracking.screenOrientation = 'Portrait'; // Landscape | Portrait
      } else if (orientation == 90) {
        AdobeTracking.screenOrientation = 'Landscape';
      } else if (orientation == -90) {
        AdobeTracking.screenOrientation = 'Landscape';
      } else if (orientation == 180) {
        AdobeTracking.screenOrientation = 'Portrait';
      }
    }
  }

  // check for sponsored flag
  if (Drupal.settings.USA.DART.is_sponsored) {
    AdobeTracking.sponsorship = 'Sponsored';
  } else {
    AdobeTracking.sponsorship = 'Not Sponsored';
  }

  var usa_pageTitle = document.title;
  usa_pageTitleElements = usa_pageTitle.split(' | ');
  var usa_pageTitleFinal = '';

  if (usa_pageTitleElements.length > 1) {
    for (var i = usa_pageTitleElements.length - 2; i >= 0; i--) {
      usa_pageTitleFinal += usa_pageTitleElements[i];
      if (i > 0) {
        usa_pageTitleFinal += ' : ';
      }
    }
  } else {
    usa_pageTitleFinal = usa_pageTitle;
  }

  AdobeTracking.pageName = usa_pageTitleFinal;
  AdobeTracking.tve_platform = jQuery.browser.mobile ? "Mobile" : "PC";
}
