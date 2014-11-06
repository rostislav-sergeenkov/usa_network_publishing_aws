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

      function getTvShowDetails(t) {
        var tv_shows_title = $("#edit-title").val() != ''
                            ? $("#edit-title").val()
                            : '';

        /* Display default value of title field */
        if (tv_shows_title != '') {
          if ($('#display_readonly_title').length == 0) {
            $("#edit-field-seo-h1").prepend('<div class="form-item" id="display_readonly_title">' +
                                            '<label>Title</label><div class="readonly_title">' + 
                                            Drupal.t('@title', {'@title' : tv_shows_title}) + 
                                            '</div></div>');
          }
          else {
            $("#display_readonly_title .readonly_title").html(Drupal.t('@title', {'@title' : tv_shows_title}));
          }
        }
        else {
          $("#display_readonly_title .readonly_title").html('');
        }
        
        var tv_shows_h1 = $("#edit-field-seo-h1 input").val() != ''
                          ? $("#edit-field-seo-h1 input").val()
                          : '';

        /* Display default value for h1 field */
        if (tv_shows_title != '' && tv_shows_h1 == '') {
          if ($('#edit-field-seo-h1 .description').length == 0) {
            $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                Drupal.t('DEFAULT: @h1', {'@h1' : tv_shows_title}) + 
                                                '</div>');
          }
          else {
            $("#edit-field-seo-h1 .description").html(Drupal.t('DEFAULT: @h1', {'@h1' : tv_shows_title}));
          }
        }
        else {
          if ($('#edit-field-seo-h1 .description').length > 0) {
            $("#edit-field-seo-h1 .description").html('');
          }
        }

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
        if (t == 'event') {
          $("#edit-field-seo-page-title input").val(page_title);
        }

        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-seo-page-title input").val();
        if (seo_page_title == '') {
          if (tv_shows_title != '' || tv_shows_h1 != '') {
            if ($('#edit-field-seo-page-title .description').length == 0) {
              $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                                Drupal.t('DEFAULT: ') + page_title + 
                                                                '</div>');
            }
            else {
              $("#edit-field-seo-page-title .description").html(Drupal.t('DEFAULT: ') + page_title);
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
