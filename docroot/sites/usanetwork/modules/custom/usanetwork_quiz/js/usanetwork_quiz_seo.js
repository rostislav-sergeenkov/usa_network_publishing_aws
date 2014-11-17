(function ($) {
  Drupal.behaviors.usanetwork_quiz_seo = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      $(".node-form").once('quizform', function() {
        getQuizDetails('pageload');
      });

      $quiz_controls = $("#edit-title, #edit-field-show select");

      if ($("input[name=changed]").val() == '') {
        $quiz_controls.on("change", function() {
          getQuizDetails('event');
        });
      }

      function getQuizDetails(event_type) {
        var defaultString = Drupal.t('Default').toUpperCase();
        var titleSuffix = Drupal.t('USA Network');
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text() + ' - '
                    : '';

        var quizDefaultValue = show + title.trim() + ' | ' + titleSuffix;
        if (event_type == 'event') {
          $("#edit-field-seo-page-title input").val(quizDefaultValue);
        }
        /* Display default value for page title field */
        if (quizDefaultValue != '' && event_type != 'event' && $("input[name=changed]").val() != '') {
            $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                              defaultString + ': ' + quizDefaultValue +
                                                              '</div>');
        }     
      }
    }
  }
})(jQuery);
