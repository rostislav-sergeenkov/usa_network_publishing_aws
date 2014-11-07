(function ($) {
  Drupal.behaviors.usanetwork_tv_episode = {
    attach: function(context){

      $tv_episode_controls = $("#edit-title, #edit-field-seo-h1 input, #edit-field-show select, #edit-field-season select");

      $tv_episode_controls.on("change", function() {
        getPageTitle();
      });

      $("#edit-field-season select").on("blur", function() {
        getPageTitle();
      });
      
      function getPageTitle() {
        var tv_episode_title = $("#edit-title").val() != ''
                            ? $("#edit-title").val()
                            : '';

        var tv_episode_h1 = $("#edit-field-seo-h1 input").val() != ''
                          ? $("#edit-field-seo-h1 input").val()
                          : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? ' ' + $("#edit-field-show select option:selected").text() + ' |'
                    : '';

        var season = ($("#edit-field-season select").val() != '_none')
                    ? '- ' + $("#edit-field-season select option:selected").text() + ' '
                    : '';

        var episode_title = '';
        if (tv_episode_title != '' && tv_episode_h1 == '') {
          episode_title = tv_episode_title;
        }
        else {
          episode_title = tv_episode_h1;
        }

        $("#edit-field-seo-page-title input").val(Drupal.t('@title @season| Episode Guide |@show USA Network', {
          '@title' : episode_title.trim(),
          '@season' : season,
          '@show' : show
        }));        
      }
    }
  }
})(jQuery);