var USADTMMigrationArray = JSON.parse(Drupal.settings.USADTMMigrationArray);

(function ($) {

  $(window).load(function () {

    for (var key in s) {

      // find coincidence in obj USADTMMigrationArray
      if(USADTMMigrationArray['s.' + key]) {

        // set values
        var name = USADTMMigrationArray['s.' + key].replace('AdobeTracking.', ''),
            value = s[key];

        AdobeTracking[name] = value;
      }
    }

  });

})(jQuery);
