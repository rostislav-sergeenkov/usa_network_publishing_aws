// Display comment count on page
(function ($) {
  Drupal.behaviors.usanetwork_post = {
    attach: function (context, settings) {
      function commentResponse(response) { 
        if ( response.errorCode == 0 ) {              
          var tag = response.context;
          tag.append(response.commentCount + ' Comments');
        } else {
          alert('Error :' + response.errorMessage);
        }
        return response.commentCount;
      }
      
      $('.usa-gigya-comments-count').each(function() {
        var nid = $(this).attr('nodenid');
        if (typeof Drupal.settings.gigyaComments !== 'undefined') {
          var params = {
            categoryID: Drupal.settings.gigyaComments.commentsUIparams.categoryID,    
            streamID: nid, 
            callback: commentResponse,
            context: $(this)
          };
          gigya.comments.getComments(params);
        }
      });
    }
  };
}(jQuery));
