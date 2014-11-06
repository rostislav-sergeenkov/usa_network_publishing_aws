(function ($) {
  Drupal.behaviors.usanetwork_gallery = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      getGalleryDetails('pageload');

      $gallery_controls = $("#edit-title, #edit-field-seo-h1 input, #edit-field-show select");

      $gallery_controls.on("change", function() {
        getGalleryDetails('event');
      });
      $("#edit-field-seo-page-title input").on("change", function() {
        getGalleryDetails('pageload');
      });

      function getGalleryDetails(t) {
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        /* Display default value of title field */
        if (title != '') {
          if ($('#display_readonly_title').length == 0) {
            $("#edit-field-seo-h1").prepend('<div class="form-item" id="display_readonly_title">' +
                                            '<label>Title</label><div class="readonly_title">' + 
                                            Drupal.t('@title', {'@title' : title}) + 
                                            '</div></div>');
          }
          else {
            $("#display_readonly_title .readonly_title").html(Drupal.t('@title', {'@title' : title}));
          }
        }
        else {
          $("#display_readonly_title .readonly_title").html('');
        }

        var h1 = $("#edit-field-seo-h1 input").val() != ''
                  ? $("#edit-field-seo-h1 input").val()
                  : '';

        /* Display default value for h1 field */
        if (title != '' && h1 == '') {
          if ($('#edit-field-seo-h1 .description').length == 0) {
            $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                Drupal.t('DEFAULT: @h1', {'@h1' : title}) + 
                                                '</div>');
          }
          else {
            $("#edit-field-seo-h1 .description").html(Drupal.t('DEFAULT: @h1', {'@h1' : title}));
          }
        }
        else {
          if ($('#edit-field-seo-h1 .description').length > 0) {
            $("#edit-field-seo-h1 .description").html('');
          }
        }

        var show = ($("#edit-field-show select").val() != '_none')
                    ? ' ' + $("#edit-field-show select option:selected").text() + ' |'
                    : '';

        var gallery_title = '';
        if (title != '' && h1 == '') {
          gallery_title = title;
        }
        else {
          gallery_title = h1;
        }

        var page_title = '';
        if (gallery_title != '' || show != '') {
          page_title = Drupal.t('@title | Photo Galleries |@show USA Network', {
            '@title' : gallery_title.trim(),
            '@show' : show
          });
        }
        if (t == 'event') {
          $("#edit-field-seo-page-title input").val(page_title);
        }
        
        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-seo-page-title input").val();
        if (seo_page_title == '') {
          if (gallery_title != '' || show != '') {
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
