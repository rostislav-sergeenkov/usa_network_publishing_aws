(function ($) {
  Drupal.behaviors.usanetwork_tv_schedule_filter= {
    attach: function(context) {
      var filters = {};
      readURLArguments(window.location);

      // Show node filter
      $(".show-filter .menu-item a").click(function(e) {
        e.preventDefault();

        var targetNid = $(this).data('nid');

        if (targetNid && targetNid != 0) { // Filter by nid
          addFilter('show_nid', targetNid, true);
        }
        else { // Show all records
          removeFilter('show_nid', true);
        }
      });

      // Show time filter
      $(".show-time-filter .menu-item a").click(function(e) {
        e.preventDefault();

        var targetKey = $(this).data('key');

        if (targetKey && targetKey != 'all_time') { // Filter by time
          addFilter('show_time', targetKey, true);
        }
        else { // Show all records
          removeFilter('show_time', true);
        }
      });

      $(document).click(function(e){
        if (e.target.className != 'filter-label') {
          $('.item-filter.open').removeClass('open');
        }
      });

      // Adds and applies a filter (applies if 'applyFilter' is true)
      function addFilter(filterName, filterValue, applyFilter) {
        filters[filterName] = filterValue;

        if (applyFilter) {
          applyFilters();
        }
      }

      // Removes and applies a filter (applies if 'applyFilter' is true)
      function removeFilter(filterName, applyFilter) {
        delete filters[filterName];

        if (applyFilter) {
          applyFilters();
        }
      }

      // Applies all possible filters
      function applyFilters() {
        var currentLocation = window.location.pathname;

        $.each(filters, function(index, value) {
          currentLocation = setURLArgument(currentLocation, index, value);
        });

        window.location = currentLocation;
      }

      function readURLArguments(url) {
        var sPageURL = url.search.substring(1);
        var sURLVariables = sPageURL.split('&');

        for (var i = 0; i < sURLVariables.length; i++) {
          var sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] && sParameterName[1]) {
            addFilter(sParameterName[0], sParameterName[1], false);
          }
        }
      }

      function getURLArgument(url, argumentName) {
        var sPageURL = url.search.substring(1);
        var sURLVariables = sPageURL.split('&');

        for (var i = 0; i < sURLVariables.length; i++) {
          var sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] == argumentName) {
            return sParameterName[1];
          }
        }

        return null;
      }

      function setURLArgument(url, argumentName, argumentValue) {
        var newAdditionalURL = "";
        var tempArray = url.split("?");
        var baseURL = tempArray[0];
        var additionalURL = tempArray[1];
        var temp = "";

        if (additionalURL) {
          tempArray = additionalURL.split("&");

          for (i=0; i<tempArray.length; i++) {
            if(tempArray[i].split('=')[0] != argumentName) {
              newAdditionalURL += temp + tempArray[i];
              temp = "&";
            }
          }
        }

        var rows_txt = temp + "" + argumentName + "=" + argumentValue;

        return baseURL + "?" + newAdditionalURL + rows_txt;
      }
    }
  }
})(jQuery);
