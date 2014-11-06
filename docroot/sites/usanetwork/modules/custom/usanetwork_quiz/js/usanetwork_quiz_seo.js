(function ($) {
  Drupal.behaviors.usanetwork_quiz_seo = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      getQuizDetails('pageload');

      $quiz_controls = $("#edit-title, #edit-field-seo-h1 input, #edit-field-show select");

      $quiz_controls.on("change", function() {
        getQuizDetails('event');
      });

      $("#edit-field-seo-page-title input").on("change", function() {
        getQuizDetails('pageload');
      });
      
      function getQuizDetails(argument) {
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var h1 = $("#edit-field-seo-h1 input").val() != ''
                  ? $("#edit-field-seo-h1 input").val()
                  : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text() + ' - '
                    : '';

        var quiz_title = '';
        if (title != '' && h1 == '') {
          quiz_title = title;
        }
        else {
          quiz_title = h1;
        }

        var page_title = '';
        if (quiz_title != '' || show != '') {
          page_title = Drupal.t('@show @title | USA Network', {
              '@title' : quiz_title.trim(),
              '@show' : show
            });
        }
        if (argument == 'event') {
          $("#edit-field-seo-page-title input").val(page_title);
        }

        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-seo-page-title input").val();
        if (seo_page_title == '') {
          if (quiz_title != '' || show != '') {
            if ($('#edit-field-seo-page-title .description').length == 0) {
              $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                                Drupal.t('DEFAULT').toUpperCase() + ': ' + page_title.trim() +
                                                                '</div>');
            }
            else {
              $("#edit-field-seo-page-title .description").html(Drupal.t('DEFAULT').toUpperCase() + ': ' + page_title.trim());
            }
          }
          else {
            if ($('#edit-field-seo-page-title .description').length > 0) {
              $("#edit-field-seo-page-title .description").html('');
            }
          }          
        }
        else {
          if ($('#edit-field-seo-page-title .description').length > 0) {
            $("#edit-field-seo-page-title .description").html('');
          }
        }
        
      }
    }
  }
})(jQuery);
