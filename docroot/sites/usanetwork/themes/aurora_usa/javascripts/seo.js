(function ($) {
  Drupal.behaviors.usanetwork_seo_h1 = {
    attach: function(context){
      // Trigger on pageload once, to display default values
      $(".node-form").once('nodeform', function() {
        getAnnonation('pageload');
      });
      
      $("#edit-title").on("change", function() {
        getAnnonation('event');
      });
      function getAnnonation(event_type) {
        var defaultString = Drupal.t('Default').toUpperCase();
        var title = $("#edit-title").val();
        var h1 = $("#edit-field-seo-h1 input").val();
        var formId = $("input[name=form_id]").val();

        if (formId != 'person_node_form') {
          if ($("#edit-title").length > 0) {
            title = title.trim();
            /* Display default value of title field */
            $("#display_readonly_title .readonly_title").html('');
            if ($('#display_readonly_title').length == 0) {
              $wrapper = $("#edit-field-seo-h1");
              if (formId == 'catchall_page_node_form') {
                $wrapper = $("#edit-field-seo-page-title");
              }
              $wrapper.prepend('<div class="form-item" id="display_readonly_title">' + 
                                                '<label>' + Drupal.t('Title') + '</label><div class="readonly_title">' + 
                                                title + 
                                                '</div></div>');
            }
            else {
              $("#display_readonly_title .readonly_title").html(title);
            }

            /* Display default value for h1 field */
            if (event_type != 'event' && $("#edit-field-seo-h1 input").length > 0 && $("input[name=changed]").val() != '') {
              $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                  defaultString + ': ' +
                                                  title +
                                                  '</div>');
            }
            
            /* Autofill H1 field */
            if ($("#edit-field-seo-h1").length > 0 && event_type == 'event' && 
              $("input[name=changed]").val() == '') {
              $("#edit-field-seo-h1 input").val(title);
            }            
          }
        }
      }
    }
  }
})(jQuery);
