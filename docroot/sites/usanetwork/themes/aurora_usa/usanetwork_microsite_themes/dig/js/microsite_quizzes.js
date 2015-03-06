(function ($) {
  Drupal.behaviors.microsite_quizzes = {
    // @TODO: What's the best Drupal way to handle the following default variables?
    siteName: 'Dig',
    basePath: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig',
    basePageName: 'Dig | USA Network',

    micrositeSwitchQuizzes: function(quizNodeId, callback) {
      var activeQuizNodeId = $('#microsite #quizzes article').attr('id').replace('node-', '');

      if (activeQuizNodeId != quizNodeId) {
        var newQuiz = $.ajax({
          url: '/ajax/get-quiz/' + quizNodeId,
          type: 'GET' //,
//          dataType: 'json'
        })
        .done(function(data, textStatus, jqXHR){
          var activeQuizContainer = $('#microsite #quizzes #viewport'),
              gamesNav = $('#microsite #left-nav #nav-quizzes');

          if (typeof callback == 'function') callback();

          activeQuizContainer.find('li').animate({'opacity': 0, 'scrollTop': 0}, 1000, function(){
            $(this).html('<li>' + data.quiz_html + '</li>');
            gamesNav.find('li.active').removeClass('active disabled');
            gamesNav.find('li#nav-quiz-' + quizNodeId).addClass('active');
            activeQuizContainer.find('li').animate({'opacity': 1}, 1000, function(){
              //Drupal.behaviors.micrositeGalleriesBxSliders.showHideLoader();
            });
          });
        })
        .fail(function(jqXHR, textStatus, errorThrown){
          usa_debug('********************\najax fail: ');
          usa_debug(errorThrown);
        })

      }
    },

    attach: function (context, settings) {
      var self = this;

      if ($('#quizzes').length > 0) {
        $('#microsite #left-nav #nav-quizzes li a').click(function(e){
          e.preventDefault();
//usa_debug('*************\nclicked quiz navigation');
          if ($(this).hasClass('disabled')) {
            // do nothing
          }
          else {
            var clickedNodeId = $(this).parent().attr('id').replace('nav-quiz-', '');
            $(this).parent().addClass('disabled');
            self.micrositeSwitchQuizzes(clickedNodeId);
          }
        });
      }

    }
  }
})(jQuery);
