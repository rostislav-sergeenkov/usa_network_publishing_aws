(function ($) {
  Drupal.behaviors.usanetwork_seo_page = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      getSeoPageDetails('pageload');

      $("#edit-title").on("change", function() {
        getSeoPageDetails('event');
      });
      $("#edit-field-h1 input, #edit-field-page-title input").on("change", function() {
        getSeoPageDetails('pageload');
      });      
      function getSeoPageDetails(t) {
        if (t == 'event') {
          if($("#edit-field-h1 input").val() == ''){
            $("#edit-field-h1 input").val($("#edit-title").val());
          }
          if($("#edit-field-page-title input").val() == ''){
            $("#edit-field-page-title input").val($("#edit-title").val());
          }
        }
        /* Display default value for h1 field */
        var title = $("#edit-title").val();
        var h1 = $("#edit-field-h1 input").val();
        if (title != '' && h1 == '') {
          if ($('#edit-field-h1 .description').length == 0) {
            $("#edit-field-h1 input").after('<div class="description">' + 
                                            Drupal.t('DEFAULT: @h1', {'@h1' : title}) + 
                                            '</div>');
          }
          else {
            $("#edit-field-h1 .description").html(Drupal.t('DEFAULT: @h1', {'@h1' : title}));
          }
        }
        else {
          if ($('#edit-field-h1 .description').length > 0) {
            $("#edit-field-h1 .description").html('');
          }
        }

        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-page-title input").val();
        if (seo_page_title == '') {
          if (title != '') {
            if ($('#edit-field-page-title .description').length == 0) {
              $("#edit-field-page-title .form-item").append('<div class="description">' + 
                                                            Drupal.t('DEFAULT: ') + title + 
                                                            '</div>');
            }
            else {
              $("#edit-field-page-title .description").html(Drupal.t('DEFAULT: ') + title);
            }
          }
          else {
            if ($('#edit-field-page-title .description').length > 0) {
              $("#edit-field-page-title .description").html('');
            }
          }          
        }
        else {
          if ($('#edit-field-page-title .description').length > 0) {
            $("#edit-field-page-title .description").html('');
          }
        }
        
      }
    }
  }
})(jQuery);
