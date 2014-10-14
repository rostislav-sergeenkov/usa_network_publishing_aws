(function ($) {
  Drupal.behaviors.usanetwork_tv_shows = {
    attach: function(context){

      $tv_shows_controls = $("#edit-title, #edit-field-seo-h1 input");

      $tv_shows_controls.on("change", function() {
        var tv_shows_title = $("#edit-title").val() != ''
                            ? $("#edit-title").val()
                            : '';
        var tv_shows_h1 = $("#edit-field-seo-h1 input").val() != ''
                          ? $("#edit-field-seo-h1 input").val()
                          : '';

        if (tv_shows_title != '' && tv_shows_h1 == '') {
          $("#edit-field-seo-page-title input").val(Drupal.t('@title | USA Network', {
            '@title' : tv_shows_title.trim()
          }));
        }
        else if (tv_shows_h1 != '') {
          $("#edit-field-seo-page-title input").val(Drupal.t('@title | USA Network', {
            '@title' : tv_shows_h1.trim()
          }));
        }
        else {
          $("#edit-field-seo-page-title input").val('');
        }
      });
    }
  }
})(jQuery);
