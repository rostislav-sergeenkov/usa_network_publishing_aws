(function ($) {
  Drupal.behaviors.usanetwork_gallery = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      $(".node-form").once('galleryform', function() {
        getGalleryDetails('pageload');
      });

      $gallery_controls = $("#edit-title, #edit-field-show select");

      if ($("input[name=changed]").val() == '') {
        $gallery_controls.on("change", function() {
          getGalleryDetails('event');
        });
      }

      function getGalleryDetails(event_type) {
        var defaultString = Drupal.t('Default').toUpperCase();
        var titleSuffix = Drupal.t('USA Network');
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? ' ' + $("#edit-field-show select option:selected").text() + ' |'
                    : '';

        var inputDefaultValue = title.trim() + ' | ' + Drupal.t('Photo Galleries') + ' |' + show + ' ' + titleSuffix;
        if (event_type == 'event') {
          $("#edit-field-seo-page-title input").val(inputDefaultValue);
        }
        /* Display default value for page title field */
        if (inputDefaultValue != '' && event_type != 'event' && $("input[name=changed]").val() != '') {
            $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                              defaultString + ': ' + inputDefaultValue +
                                                              '</div>');
        }        
      }
    }
  }
})(jQuery);
