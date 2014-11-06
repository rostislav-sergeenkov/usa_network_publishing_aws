(function ($) {
  Drupal.behaviors.usanetwork_seo_h1 = {
    attach: function(context){
      
      getAnnonation('pageload');
      
      $("#edit-title").on("change", function() {
        getAnnonation('event');
      });
      
      $("#edit-field-seo-h1 input").on("change", function() {
        getAnnonation('pageload');
      });
      
      function getAnnonation(param) {
        var title = $("#edit-title").val();
        var h1 = $("#edit-field-seo-h1 input").val();

        if ($("#edit-field-seo-h1").length > 0 && $("#edit-title").length > 0) {

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

          /* Display default value for h1 field */
          if (title != '' && h1 == '') {
            if ($('#edit-field-seo-h1 .description').length == 0) {
              $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                  Drupal.t('DEFAULT').toUpperCase() + ': ' +
                                                  Drupal.t('@h1', {'@h1' : title}) + 
                                                  '</div>');
            }
            else {
              $("#edit-field-seo-h1 .description").html(Drupal.t('DEFAULT').toUpperCase() + ': ' +
                                                        Drupal.t('@h1', {'@h1' : title}));
            }
          }
          else {
            if ($('#edit-field-seo-h1 .description').length > 0) {
              $("#edit-field-seo-h1 .description").html('');
            }
          }

          if (param == 'event') {
            if (h1 == '') {
              $("#edit-field-seo-h1 input").val(title);
              $("#edit-field-seo-h1 .description").html('');
            }
          }
        }
      }
    }
  }
})(jQuery);