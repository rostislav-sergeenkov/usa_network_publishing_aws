(function ($) {
  Drupal.behaviors.usanetwork_quiz_seo = {
    attach: function(context){

      $quiz_controls = $("#edit-title, #edit-field-seo-h1 input, #edit-field-show select");

      $quiz_controls.on("change", function() {
        var titleSuffix = Drupal.t('USA Network');
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var h1 = $("#edit-field-seo-h1 input").val() != ''
                  ? $("#edit-field-seo-h1 input").val()
                  : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text() + ' - '
                    : '';

        var quizTitle = '';
        if (title != '' && h1 == '') {
          quizTitle = title;
        }
        else {
          quizTitle = h1;
        }

        var quizDefaultValue = show + quizTitle + ' | ' + titleSuffix;
        $("#edit-field-seo-page-title input").val(quizDefaultValue);
      });
    }
  }
})(jQuery);
