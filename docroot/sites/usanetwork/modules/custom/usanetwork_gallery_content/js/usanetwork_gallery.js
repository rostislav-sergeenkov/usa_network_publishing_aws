(function ($) {
  Drupal.behaviors.usanetwork_gallery = {
    attach: function(context){

      $gallery_controls = $("#edit-title, #edit-field-seo-h1 input, #edit-field-show select");

      $gallery_controls.on("change", function() {

        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var h1 = $("#edit-field-seo-h1 input").val() != ''
                  ? $("#edit-field-seo-h1 input").val()
                  : '';

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

        $("#edit-field-seo-page-title input").val(Drupal.t('@title | Photo Galleries |@show USA Network', {
          '@title' : gallery_title.trim(),
          '@show' : show
        }));
      });
    }
  }
})(jQuery);
