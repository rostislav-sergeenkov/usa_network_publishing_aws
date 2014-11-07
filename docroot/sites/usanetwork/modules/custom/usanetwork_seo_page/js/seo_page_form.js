(function ($) {
  Drupal.behaviors.usanetwork_seo_page = {
    attach: function(context){
      $("#edit-title").on("change", function() {
        if($("#edit-field-h1 input").val() == ''){
          $("#edit-field-h1 input").val($("#edit-title").val());
        }
        if($("#edit-field-page-title input").val() == ''){
          $("#edit-field-page-title input").val($("#edit-title").val());
        }
      });
    }
  }
})(jQuery);