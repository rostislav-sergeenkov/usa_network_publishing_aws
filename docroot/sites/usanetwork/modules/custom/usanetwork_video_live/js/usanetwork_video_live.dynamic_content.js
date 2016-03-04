(function($) {
  Drupal.behaviors.usanetwork_video_live = {
    showName: '',
    contentName: '',
    // gigyaSharebar
    initGigyaSharebar: function (data) {

      if (typeof Drupal.gigya != 'undefined') {

        var $gallery = _.$gallery,
            $sharebar = $('.field-name-field-gigya-share-bar > div'),
            description = data.description.trim(),
            container = $(data.container),
            image = container.find('.image img'),
            imageUrl = image.attr('data-src')? image.attr('data-src'): image.attr('src'),
            link_back = (_.data.gallerySharingPath == '')? window.location.href.split('#')[0]: _.data.gallerySharingPath;

        if ($sharebar.length > 0) {

          if (link_back == '' && $('meta[property="og:url"]').length > 0) {
            link_back = $('meta[property="og:url"]').attr('content');
          }

          if (description == '' && $('meta[property="og:description"]').length > 0) {
            description = $('meta[property="og:description"]').attr('content');
          }

          if (imageUrl == '' && $('meta[property="og:image"]').length > 0) {
            imageUrl = $('meta[property="og:image"]').attr('content');
          }


          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
            if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
              var url = window.location.href.split('#')[0];
              sharebar.gigyaSharebar.ua.linkBack = link_back;
              sharebar.gigyaSharebar.ua.imageBhev = 'url';
              sharebar.gigyaSharebar.ua.imageUrl = imageUrl.attr('src') ? imageUrl.attr('src') : imageUrl.attr('data-lazy');
              sharebar.gigyaSharebar.ua.description = description;
              Drupal.gigya.showSharebar(sharebar);
            }
          });
        }
      }
    },
    refreshQuizOmniture: function() {

      function ucfirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      // Quizzes omniture tracking. Track show Question
      $('.usanetwork-quiz-questions .usanetwork-quiz-question').once('omniture-tracking', function () {
        $(this).on('show', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            if (!$(this).hasClass('shown')) {
              $(this).addClass('shown');
              var quizes = Drupal.settings.usanetwork_quiz;
              var quiz_setting = quizes[nid];
              var quizShow = quiz_setting['quizShow'],
                  quizTitle = quiz_setting['quizTitle'],
                  quizType = quiz_setting['quizType'];

              var quizQuestionNumber = $(this).index() + 1;
              var quizQuestionTitle = $(this).find('.question-title').text();
              var quizQuestion = (quizQuestionTitle.length > Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) ? quizQuestionTitle.substr(0, Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) + '...' : quizQuestionTitle;

              s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber;
              s.linkTrackVars = 'events,prop58,eVar58';
              s.linkTrackEvents = s.events = 'event88';
              s.eVar58 = s.prop58 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestion;
              s.tl(this, 'o', 'Poll/Question Shown');
              s.manageVars('clearVars', s.linkTrackVars, 1);
            }
          }
        });
      });

      // Quizzes omniture tracking. Track answer Question
      $('.usanetwork-quiz-questions .usanetwork-quiz-question .answers .usanetwork-quiz-answer').once('omniture-tracking', function () {

        var NumQuestions = $('.usanetwork-quiz-questions .usanetwork-quiz-question').length;

        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            if (!$(this).hasClass('answered')) {
              $(this).addClass('answered');
              var quizes = Drupal.settings.usanetwork_quiz;
              var quiz_setting = quizes[nid];
              var quizShow = quiz_setting['quizShow'],
                  quizTitle = quiz_setting['quizTitle'],
                  quizType = quiz_setting['quizType'];

              var $quizQuestion = $(this).parents('.usanetwork-quiz-question');
              var quizQuestionNumber = $quizQuestion.index() + 1;
              var quizQuestionTitle = $(this).closest('.usanetwork-quiz-question').find('.question-title').text();
              var quizQuestionValue = $(this).attr('value');
              var quizQuestion = (quizQuestionTitle.length > Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) ? quizQuestionTitle.substr(0, Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) + '...' : quizQuestionTitle;

              s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber;
              s.linkTrackVars = 'events,prop58,eVar58';
              s.linkTrackEvents = s.events = 'event89';
              s.eVar58 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestion;
              s.prop58 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestion + ' : Answer : ' + quizQuestionValue;
              s.tl(this, 'o', 'Poll/Question Answered');

              if (NumQuestions === $quizQuestion.index() + 1) {
                s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Result';
              }

              s.manageVars('clearVars', s.linkTrackVars, 1);
            }
          }
        });
      });

      // Quizzes omniture tracking. Track restart button
      $('.usanetwork-quiz-results input[type="button"]').once('omniture-tracking', function () {
        $(this).bindFirst('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            $('.usanetwork-quiz-questions .usanetwork-quiz-question').removeClass('shown');
            $('.usanetwork-quiz-questions .usanetwork-quiz-question .answers .usanetwork-quiz-answer').removeClass('answered');

            var quizes = Drupal.settings.usanetwork_quiz;
            var quiz_setting = quizes[nid];
            var quizShow = quiz_setting['quizShow'],
                quizTitle = quiz_setting['quizTitle'],
                quizType = quiz_setting['quizType'];

            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType);
            s.linkTrackVars = 'events,eVar65,prop65';
            s.linkTrackEvents = s.events = 'event65';
            s.eVar65 = s.prop65 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Restart Button';
            console.info(s.pageName);
            s.tl(this, 'o', 'Restart');
            s.manageVars('clearVars', s.linkTrackVars, 1);
          }
        });
      });
    //-------- end --------
    },
    reset_right_rail: function() {
      $('.consum-sidebar').removeClass('sticky-sidebar footer-visible').removeAttr('style');
    },
    right_rail: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset(),
          videoBlock = $('.video-block');

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: Drupal.settings.basePath + 'ajax/render-video-live-right-rail/' + timezoneOffset,
        success: function(data) {
          if ( data != null && typeof data != 'undefined') {
            $('.consum-sidebar .items-block').remove();
            $('.consum-sidebar .more-items').remove();
            videoBlock.removeClass('show-app');
            $('.consum-sidebar .download-app').after(data.rendered);

            Drupal.behaviors.consumptionator_carousels.initVSliders();

            $('.episodes-list-slider.horizontal').usaCarousel();

          } else {
            $('.consum-sidebar .items-block').remove();
            $('.consum-sidebar .more-items').remove();
            videoBlock.addClass('show-app');
          }
        },
        error: function () {
          console.info('error');
          $('.consum-sidebar .items-block').remove();
          $('.consum-sidebar .more-items').remove();
          videoBlock.addClass('show-app');
        }
      });
    },
    related_content: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset(),
          videoBlock = $('.video-block');

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: Drupal.settings.basePath + 'ajax/render-video-live-related/' + timezoneOffset,
        success: function(data) {
          console.info(data);
          if (data != null && typeof data != 'undefined') {

            $('h2.section-title').remove();
            $('.gallery-wrapper').remove();
            $('.styles-quiz').remove();
            $('.video-block > article').remove();
            if (!videoBlock.hasClass('show-related')) {
              videoBlock.addClass('show-related');
            }
            $('.consum-sidebar').after(data.rendered);
            $('.consum-sidebar').after('<h2 class="section-title"><span class="section-title-wrapper show-border secondary">Related content</span></h2>');

            if (data.variables) {
              Drupal.settings.usanetwork_quiz = {};
              Drupal.settings.usanetwork_quiz[data.variables.nid] = {
                container: "#usanetwork-quiz-" + data.variables.nid,
                quizType: data.variables.quiz_type,
                calculationMethod: data.variables.calc_method,
                quizShow: data.showName,
                quizTitle: data.contentName
              };
              Drupal.behaviors.usanetwork_quiz.initQuizzes(Drupal.settings.usanetwork_quiz);
              Drupal.behaviors.usanetwork_video_live.initGigyaSharebar(data.variables);
              Drupal.behaviors.usanetwork_video_live.refreshQuizOmniture();
            } else {
              if (data.showName != null && typeof data.showName != 'undefined') {
                Drupal.behaviors.usanetwork_video_live.showName = data.showName;
              }
              if (data.contentName != null && typeof data.contentName != 'undefined') {
                Drupal.behaviors.usanetwork_video_live.contentName = data.contentName;
              }
              $('.gallery-wrapper').usaGallery();
            }


            if ($('body').hasClass('sub-menu-is-sticky') && !$('.consum-sidebar').hasClass('sticky-sidebar')) {
              $('.consum-sidebar').addClass('sticky-sidebar');
            }

            Drupal.behaviors.consumptionator_right_rail.rightRailPosition();

          } else {
            $('h2.section-title').remove();
            $('.gallery-wrapper').remove();
            $('.styles-quiz').remove();
            $('.video-block > article').remove();
            Drupal.behaviors.usanetwork_video_live.showName = '';
            Drupal.behaviors.usanetwork_video_live.contentName = '';
            videoBlock.removeClass('show-related');
            Drupal.behaviors.usanetwork_video_live.reset_right_rail();
          }
        },
        error: function () {
          console.info('error');
          $('h2.section-title').remove();
          $('.gallery-wrapper').remove();
          $('.styles-quiz').remove();
          $('.video-block > article').remove();
          Drupal.behaviors.usanetwork_video_live.showName = '';
          Drupal.behaviors.usanetwork_video_live.contentName = '';
          videoBlock.removeClass('show-related');
          Drupal.behaviors.usanetwork_video_live.reset_right_rail();
        }
      });
    },
    attach: function (context, settings) {
      $('body').once(function () {
        Drupal.behaviors.usanetwork_video_live.right_rail();
        Drupal.behaviors.usanetwork_video_live.related_content();
      })
    }
  };
})(jQuery);
