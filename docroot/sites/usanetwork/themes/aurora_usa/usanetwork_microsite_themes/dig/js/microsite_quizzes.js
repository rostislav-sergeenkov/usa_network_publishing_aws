(function ($) {
  Drupal.behaviors.microsite_quizzes = {
    // @TODO: What's the best Drupal way to handle the following default variables?
    siteName: 'Dig',
    basePath: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig',
    basePageName: 'Dig | USA Network',

    micrositeSwitchQuizzes: function(quizNodeId, callback) {
      var currentQuizNodeId = $('#microsite #quizzes article').attr('id').replace('node-', '');

//usa_debug('================ micrositeSwitchQuizzes(' + quizNodeId + ')\ncurrentQuizNodeId: ' + currentQuizNodeId );
      if (currentQuizNodeId != quizNodeId) {
        var newQuiz = $.ajax({
          url: '/ajax/get-quiz/' + quizNodeId,
          type: 'GET',
          dataType: 'json'
        })
        .done(function(data, textStatus, jqXHR){
//usa_debug('================= data: ');
//usa_debug(data);

          // reset quiz js settings
          Drupal.settings.usanetwork_quiz = {};
          Drupal.settings.usanetwork_quiz[data.nid] = {"container":"#usanetwork-quiz-" + data.nid, "quizType":data.quiz_type, "calculationMethod":data.calc_method, "quizShow":data.quiz_show, "quizTitle":data.title};
//usa_debug('================= Drupal.settings.usanetwork_quiz: ');
//usa_debug(Drupal.settings.usanetwork_quiz);

          var activeQuizContainer = $('#microsite #quizzes #viewport'),
              quizzesNav = $('#microsite #quizzes-nav-list');

          if (typeof callback == 'function') callback();

          activeQuizContainer.find('li').animate({'opacity': 0, 'scrollTop': 0}, 1000, function(){
            $(this).html('<li>' + data.quiz_html + '</li>');

            // reset quiz behavior
            Drupal.behaviors.usanetwork_quiz.initQuizzes(Drupal.settings.usanetwork_quiz);

            quizzesNav.find('li.active').removeClass('active disabled');
            quizzesNav.find('li#nav-quiz-' + data.nid).addClass('active');
            activeQuizContainer.find('li[data-node-id]').animate({'opacity': 1}, 1000, function(){
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
        $('#microsite #quizzes-nav-list li a').click(function(e){
          e.preventDefault();

          if ($(this).hasClass('disabled')) {
            // do nothing
          }
          else {
            var clickedNodeId = $(this).parent().attr('data-node-id');
            $(this).parent().addClass('disabled');
            self.micrositeSwitchQuizzes(clickedNodeId);
          }
        });
      }

    }
  }
})(jQuery);
