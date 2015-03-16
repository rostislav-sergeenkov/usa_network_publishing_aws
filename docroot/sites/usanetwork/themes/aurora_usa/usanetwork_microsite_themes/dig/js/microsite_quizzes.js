(function ($) {
  Drupal.behaviors.microsite_quizzes = {
    // @TODO: What's the best Drupal way to handle the following default variables?
    siteName: 'Dig',
    basePath: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig',
    basePageName: 'Dig | USA Network',

    micrositeInit300x250Ad: function(nid) {
      $('#microsite #usanetwork-quiz-' + nid).children('.container').filter(':visible').find('.dart-tag').html('<center><iframe src="/custom-dart-iframe?key=300x250_ifr_reload" frameborder="0" scrolling="no" width="300" height="250"></iframe></center>');
    },

    micrositeInitGigyaSharebar: function() {
      if (typeof gigya !== 'undefined') {
        if (typeof Drupal.settings.gigyaSharebars != 'undefined') {
          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
//usa_debug('===================\nDrupal.gigya.showSharebar: ');
//usa_debug(sharebar);
            Drupal.gigya.showSharebar(sharebar);
          });
        }
      }
    },

    micrositeGetCustomJs: function(quizNodeId) {
      $.getScript( '/ajax/get-custom-js/' + quizNodeId, function( data, textStatus, jqxhr ) {
        usa_debug( data ); // Data returned
        usa_debug( textStatus ); // Success
        usa_debug( jqxhr.status ); // 200
        usa_debug( 'Load was performed.' );
      });
    },

    micrositeSwitchQuizzes: function(quizNodeId, callback) {
      var currentQuizNodeId = $('#microsite #quizzes article').attr('id').replace('node-', '');

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

          // reset Gigya share bar
          var link = window.location.protocol + '//' + window.location.hostname + Drupal.settings.microsites_settings.base_path + '/quizzes/' + data.url;
          Drupal.settings.gigyaSharebars = [];
          Drupal.settings.gigyaSharebars = [{"gigyaSharebar": {"ua": {"linkBack": link,"title": data.title,"description": data.description,"imageBhev": "default","imageUrl": ""},"shareButtons": "facebook, twitter, tumblr, pinterest, share","shortURLs": "never","containerID": "quiz-gigya-share","showCounts": "none","layout": "horizontal","iconsOnly": true}},{"gigyaSharebar": {"ua": {"linkBack": link,"title": data.title,"description": data.description,"imageBhev": "default","imageUrl": ""},"shareButtons": "facebook, twitter, tumblr, pinterest, share","shortURLs": "never","containerID": "gigya-share--2","showCounts": "none","layout": "horizontal","iconsOnly": true}},{"gigyaSharebar": {"ua": {"linkBack": link,"title": data.title,"description": data.description,"imageBhev": "default","imageUrl": ""},"shareButtons": "facebook, twitter, tumblr, pinterest, share","shortURLs": "never","containerID": "gigya-share--3","showCounts": "none","layout": "horizontal","iconsOnly": true}}];

          var activeQuizContainer = $('#microsite #quizzes #viewport'),
              quizzesNav = $('#microsite #quizzes-nav-list');

          if (typeof callback == 'function') callback();

          // change quiz title
          $('#microsite #quizzes h1, #microsite #quizzes h2').animate({'opacity': 0}, 1000, function(){
            $(this).html(data.title).animate({'opacity': 1}, 1000);
          });

          // change quiz
          activeQuizContainer.find('li').attr({'id': 'quiz-' + data.nid, 'data-node-id': data.nid}).animate({'opacity': 0, 'scrollTop': 0}, 1000, function(){
            $(this).html(data.quiz_html.replace('id="gigya-share', 'id="quiz-gigya-share'));
            activeQuizContainer.find('li#quiz-' + data.nid).animate({'opacity': 1}, 1000, function(){
              // re-initialize quiz
              Drupal.behaviors.usanetwork_quiz.initQuizzes(Drupal.settings.usanetwork_quiz);

              // update 300x250 ad, if needed
              setTimeout(function(){
                // show 300x250 ad on splash page
                Drupal.behaviors.microsite_quizzes.micrositeInit300x250Ad(data.nid);

                // show Gigya share bar
                Drupal.behaviors.microsite_quizzes.micrositeInitGigyaSharebar();
              }, 1000);

              // change quiz navigation
              quizzesNav.find('li.active').removeClass('active disabled');
              quizzesNav.find('li#nav-quiz-' + data.nid).addClass('active');
//Drupal.behaviors.micrositeGalleriesBxSliders.showHideLoader();
            });
          });

          // get js from custom field for current quiz
          Drupal.behaviors.microsite_quizzes.micrositeGetCustomJs(data.nid);

          // set url
          Drupal.behaviors.microsite_scroll.micrositeChangeUrl('quizzes', link);
        })
        .fail(function(jqXHR, textStatus, errorThrown){
          usa_debug('********************\najax fail: ');
          usa_debug(errorThrown);
        });

      }
    },

    attach: function (context, settings) {
      var self = this;

      setTimeout(function(){
        // load Gigya sharebar
        self.micrositeInitGigyaSharebar();

        // load custom js
      }, 1000);


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
