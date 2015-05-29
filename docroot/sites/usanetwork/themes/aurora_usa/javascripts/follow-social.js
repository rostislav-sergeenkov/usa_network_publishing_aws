// toggle and text change for shows follow block
(function ($) {
  Drupal.behaviors.follow_social_toggle = {
    attach: function (context, settings) {
      $('body').once('followSocial', function() {
        var context = $('#block-views-usa-shows-block-2 .view-display-id-attachment_1, .pane-usa-cast-panel-pane-2 .view-usa-cast .view-display-id-attachment_2');
        $('.view-footer', context).click(function() {
          var that = this; 
          var isvisible = $(this).parent().find('.view-content').is(':visible');
          $('.view-content', context).slideToggle();
          $(this).toggleClass('open');
          $(that).html((isvisible ? 'expand to view all' : 'close'));
        });
      });  
    },
  };
}(jQuery));
