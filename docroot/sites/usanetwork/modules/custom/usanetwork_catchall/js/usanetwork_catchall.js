(function ($) {
  Drupal.behaviors.usanetwork_catchall = {
    attach: function(context){
      var titleSuffix = Drupal.t('USA Network');
      $catchall_controls = $("#edit-title, #edit-path-alias, #edit-field-show select");

      $catchall_controls.on("change", function() {
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
        $("#edit-field-seo-page-title input").val(inputDefaultValue);
      });
    }
  }
})(jQuery);
