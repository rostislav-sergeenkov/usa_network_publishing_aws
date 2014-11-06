(function ($) {
  Drupal.behaviors.usanetwork_tv_shows = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      getTvShowDetails('pageload');

      $tv_shows_controls = $("#edit-title, #edit-field-seo-h1 input");

      $tv_shows_controls.on("change", function() {
        getTvShowDetails('event');
      });

      $("#edit-field-seo-page-title input").on("change", function() {
        getTvShowDetails('pageload');
      });

      function getTvShowDetails(argument) {
        var tv_shows_title = $("#edit-title").val() != ''
                            ? $("#edit-title").val()
                            : '';
        
        var tv_shows_h1 = $("#edit-field-seo-h1 input").val() != ''
                          ? $("#edit-field-seo-h1 input").val()
                          : '';

        var page_title = '';
        if (tv_shows_title != '' && tv_shows_h1 == '') {
          page_title = Drupal.t('@title | USA Network', {
            '@title' : tv_shows_title.trim()
          });
        }
        else if (tv_shows_h1 != '') {
          page_title = Drupal.t('@title | USA Network', {
            '@title' : tv_shows_h1.trim()
          });          
        }
        if (argument == 'event') {
          $("#edit-field-seo-page-title input").val(page_title);
        }

        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-seo-page-title input").val();
        if (seo_page_title == '') {
          if (tv_shows_title != '' || tv_shows_h1 != '') {
            if ($('#edit-field-seo-page-title .description').length == 0) {
              $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                                Drupal.t('DEFAULT').toUpperCase() + ': ' + page_title +
                                                                '</div>');
            }
            else {
              $("#edit-field-seo-page-title .description").html(Drupal.t('DEFAULT').toUpperCase() + ': ' + page_title);
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
