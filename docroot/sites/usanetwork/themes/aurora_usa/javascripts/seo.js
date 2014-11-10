(function ($) {
  Drupal.behaviors.usanetwork_seo_h1 = {
    attach: function(context){
      // Trigger on pageload to display default values
      getAnnonation('pageload');
      
      $("#edit-title").on("change", function() {
        getAnnonation('event');
      });
      function getAnnonation(argument) {
        var title = $("#edit-title").val();
        var h1 = $("#edit-field-seo-h1 input").val();
        var page_title = $("#edit-field-seo-page-title input").val();
        var form_id = $("input[name=form_id]").val();
        var document_title = document.title;
        if (form_id != 'person_node_form') {
          /* Display default value of title field */
          if (title != '' && $("#edit-title").length > 0) {
            if ($('#display_readonly_title').length == 0) {
              $wrapper = $("#edit-field-seo-h1");
              if (form_id == 'catchall_page_node_form') {
                $wrapper = $("#edit-field-seo-page-title");
              }
              $wrapper.prepend('<div class="form-item" id="display_readonly_title">' + 
                                                '<label>Title</label><div class="readonly_title">' + 
                                                title.trim() + 
                                                '</div></div>');
            }
            else {
              $("#display_readonly_title .readonly_title").html(title.trim());
            }
          }
          else {
            $("#display_readonly_title .readonly_title").html('');
          }

          /* Display default value for h1 field */
          if (title != '' && h1 == '' && argument != 'event' && $("#edit-field-seo-h1 input").length > 0 && $("#edit-title").length > 0) {
            if ($('#edit-field-seo-h1 .description').length == 0) {
              $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                  Drupal.t('default').toUpperCase() + ': ' +
                                                  title.trim() +
                                                  '</div>');
            }
            else {
              $("#edit-field-seo-h1 .description").html(Drupal.t('default').toUpperCase() + ': ' + title.trim());
            }
          }
          /* Display default value for page title field */
          if (title != '' && page_title == '' && argument != 'event') {
            if ($('#edit-field-seo-page-title .description').length == 0) {
              $("#edit-field-seo-page-title input").after('<div class="description">' + 
                                                                Drupal.t('default').toUpperCase() + ': ' + 
                                                                document_title + 
                                                                '</div>');
            }
            else {
              $("#edit-field-seo-page-title .description").html(Drupal.t('default').toUpperCase() + ': ' + document_title);
            }
          }
          if($("#edit-field-seo-h1").length > 0 && $("#edit-title").length > 0 && argument == 'event' && h1 == ''){
            $("#edit-field-seo-h1 input").val(title);
          }
        }
      }
    }
  }
})(jQuery);
