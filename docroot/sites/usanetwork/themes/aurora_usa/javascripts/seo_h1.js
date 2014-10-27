(function ($) {
  Drupal.behaviors.usanetwork_seo_h1 = {
    attach: function(context){
      $("#edit-title").on("change", function() {
        if($("#edit-field-seo-h1").length > 0){
          if($("#edit-field-seo-h1 input").val() == ''){
            $("#edit-field-seo-h1 input").val($("#edit-title").val());
          }
        }
      });
    }
  }
})(jQuery);