(function($) {

  /**
   * @see pub_pipeline_info().
   */
  Drupal.behaviors.pubPipeline = {
    attach: function () {
      $('#environment-indicator').once('pub-pipeline').click(function() {
        $('#pub-pipeline').toggle(50);
      });
    }
  };

})(jQuery);
