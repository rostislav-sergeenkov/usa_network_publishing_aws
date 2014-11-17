(function ($) {
  Drupal.behaviors.usanetwork_catchall = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      $(".node-form").once('catchallform', function() {
        getCatchallDetails('pageload');
      });
      
      $catchall_controls = $("#edit-title, #edit-path-alias, #edit-field-show select");

      if ($("input[name=changed]").val() == '') {
        $catchall_controls.on("change", function() {
          getCatchallDetails('event');
        });
      }

      function getCatchallDetails(event_type) {
        var defaultString = Drupal.t('Default').toUpperCase();
        var titleSuffix = Drupal.t('USA Network');
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text()
                    : '';
                    
        var path = $("#edit-path-alias").val() != ''
                  ? $("#edit-path-alias").val()
                  : '';

        var catchallType = '';
        var catchallString = '';
        if (path != '') {
          var pathArray = path.split("/");
                                
          if (pathArray.length > 1 && typeof pathArray[1] != undefined) {
            switch (pathArray[1]) {
              case 'features':
                catchallType = Drupal.t('Features')
                break;
              case 'quizzes':
                catchallType = Drupal.t('Quizzes')
                break;
              case 'games':
                catchallType = Drupal.t('Games')
                break;                
            }
            if (catchallType != '' && show != '') {
              catchallString = '| ' + catchallType + ' | ' + show + ' ';
            }
          }
        }
        var inputDefaultValue = title.trim() + ' ' + catchallString + '| ' + titleSuffix;
        if (event_type == 'event') {
          $("#edit-field-seo-page-title input").val(inputDefaultValue);
        }
        /* Display default value for page title field */
        if (inputDefaultValue != '' && event_type != 'event' && $("input[name=changed]").val() != '') {
            $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                              defaultString + ': ' + inputDefaultValue +
                                                              '</div>');
        }        
      }
    }
  }
})(jQuery);
