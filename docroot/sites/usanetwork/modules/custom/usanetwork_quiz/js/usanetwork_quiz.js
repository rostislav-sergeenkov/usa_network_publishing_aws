(function($) {

  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  $.fn.usaQuiz = function(options) {
    var settings = $.extend({
      type: 'profiler',
      calculationMethod: 'sum',
      animationSpeed: 400,
      onInit: function() {},
      onStart: function() {},
      onRestart: function() {},
      onReset: function() {},
      onShowQuestion: function(e, $question) {},
      onHideQuestion: function(e, $question) {},
      onBeforeResult: function(e, $result) {},
      onShowResult: function(e, $result) {}
    }, options );

    var $container = $(this);
    var $splash_container = $container.find('.splash');
    var $questions_container = $container.find('.questions');
    var $questions = $questions_container.find('.usanetwork-quiz-question');
    var $results_container = $container.find('.results');
    var $results = $results_container.find('.usanetwork-quiz-result');

    var $containers = $container.children('.container');

    var quiz = {
      score: 0,
      maxScore: 0,
      container: $container,
      settings: settings
    };
    // attach events
    $(quiz).on('onInit', quiz.settings.onInit);
    $(quiz).on('onStart', quiz.settings.onStart);
    $(quiz).on('onRestart', quiz.settings.onRestart);
    $(quiz).on('onReset', quiz.settings.onReset);
    $(quiz).on('onShowQuestion', function(e, $question) {
      var page_note_text = ($questions.index($question)+1)+' of '+ $questions.length;
      $questions_container.find('.page-note').text(page_note_text);
      var $video_player = $question.find('.question-video iframe');
      if ($video_player.length > 0) {
        $video_player.attr('src', $video_player.attr('data-src'));
      }
      quiz.settings.onShowQuestion(e, $question);

    });
    $(quiz).on('onHideQuestion', function(e, $question) {
      var $video_player = $question.find('.question-video iframe');
      if ($video_player.length > 0) {
        $video_player.attr('src', '');
      }
      quiz.settings.onHideQuestion(e, $question);
    });
    $(quiz).on('onBeforeResult', function(e, $result) {
      var $video_player = $questions_container.find('.question-video iframe');
      $video_player.attr('src', '');
      var score = $result.find('.score-container');
      score.find('.score').text(quiz.score);
      score.find('.max').text(quiz.maxScore);
      quiz.settings.onBeforeResult(e, $result);
    });
    $(quiz).on('onShowResult', quiz.settings.onShowResult);

    // handle the quiz
    var quizHandler = {
      answers: {},
      init: function() {
        // calculate total
        $questions.each(function() {
          var $answers = $(this).find('.usanetwork-quiz-answer');
          var max_value = parseInt($answers.eq(0).attr('value'));
          $answers.each(function() {
            var value = parseInt($(this).attr('value'));
            if (value > max_value) {
              max_value = value;
            }
          });

          quiz.maxScore += max_value;
        });

        quizHandler.reset();

        // attach events
        $splash_container.find('.entry-button').on('click', function() {
          quizHandler.start();
        });
        $results_container.find('.repeat-button').on('click', function() {
          quizHandler.restart();
        });
        $questions_container.find('.answer-image img, .answer-title').on('click', function() {
          var value = parseInt($(this).closest('.usanetwork-quiz-answer').attr('value'));
          var $question = $(this).closest('.usanetwork-quiz-question');
          if (!isNaN(value) && $question.length > 0) {
            quizHandler.selectAnswer($questions.index($question), value);
          }
          Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
        });
        $(quiz).trigger('onInit');
      },
      start: function() {
        quiz.score = 0;
        quizHandler.answers = {};
        $questions.hide();
        if($('body').hasClass('page-videos-live')) {
          Drupal.behaviors.usanetwork_video_live.refreshQuizOmniture();
        } else {
          Drupal.behaviors.usanetwork_quiz.setQuizOmniture();
        }
        $questions.first().show();
        $containers.filter(':visible').fadeOut(quiz.settings.animationSpeed, function() {
          $questions_container.fadeIn(quiz.settings.animationSpeed, function() {
            $(quiz).trigger('onShowQuestion', [$questions.first()]);
            $(quiz).trigger('onStart');
          });
        });
      },
      restart: function() {
        quiz.score = 0;
        quizHandler.answers = {};
        $questions.hide();
        $questions.first().show();
        $questions_container.find('.page-note').text('');
        $containers.filter(':visible').fadeOut(quiz.settings.animationSpeed, function() {
          $questions_container.fadeIn(quiz.settings.animationSpeed, function() {
            $(quiz).trigger('onShowQuestion', [$questions.first()]);
            $(quiz).trigger('onRestart');
          });
        });
      },
      reset: function() {
        quiz.score = 0;
        quizHandler.answers = {};
        $containers.hide();
        if ($splash_container.length > 0) {
          $splash_container.fadeIn(quiz.settings.animationSpeed, function() {
            $(quiz).trigger('onReset');
          });
        }
        else {
          $(quiz).trigger('onReset');
          $questions_container.fadeIn(quiz.settings.animationSpeed, function() {
            $(quiz).trigger('onReset');
            $(quiz).trigger('onShowQuestion', [$questions.first()]);
            $(quiz).trigger('onStart');
          });
        }
      },
      selectAnswer: function(question, value) {
        quizHandler.answers[question] = value;
        quiz.score += value;
        if (Object.size(quizHandler.answers) == $questions.length) {
          // if all questions answered
          // calculate and show result
          quizHandler.showResult();
        }
        else {
          // show next not answered question
          var next_question;
          for (var i = question + 1; i < $questions.length; i++) {
            if (typeof quizHandler.answers[i]  == 'undefined') {
              next_question = i;
              break;
            }
            else {
              if (i == $questions.length - 1) {
                // loop to the first
                i = 0;
              }
            }

            if (i == question) {
              // break on a full loop
              break;
            }
          }

          if (next_question != null) {
            $questions.eq(question).fadeOut(quiz.settings.animationSpeed, function() {
              $(quiz).trigger('onHideQuestion', [$questions.eq(question)]);
              var $question = $questions.eq(next_question);
              $question.fadeIn(quiz.settings.animationSpeed, function() {
                $(quiz).trigger('onShowQuestion', [$question]);
              });
            });

            return;
          }

          // reset the quiz on failure
          quizHandler.reset();
        }
      },
      showResult: function() {
        // calculate result
        var result_value;
        switch (quiz.settings.calculationMethod) {
          case 'sum':
            result_value = 0;
            for (i in quizHandler.answers) {
              result_value += parseInt(quizHandler.answers[i]);
            }
            break;
          case 'count':
            var results = {};
            for (i in quizHandler.answers) {
              var value = quizHandler.answers[i];
              if (typeof results[value] == 'undefined') {
                results[value] = 1;
              }
              else {
                results[value]++;
              }

              if (result_value == null || (results[result_value] < results[value])) {
                result_value = value;
              }
            }
            break;
        }
        // show it!
        if (result_value != null) {
          var $result;
          $results.each(function() {
            var $self = $(this);
            var from = parseInt($self.attr('range_from'));
            var to = parseInt($self.attr('range_to'));

            if (result_value >= from && result_value <= to) {
              $result = $self;
            }
          });
          if ($result != null) {
            $results.hide();
            $result.show();
            $(quiz).trigger('onBeforeResult', [$result]);
            $containers.filter(':visible').fadeOut(quiz.settings.animationSpeed, function() {
              $results_container.fadeIn(quiz.settings.animationSpeed, function() {
                $(quiz).trigger('onShowResult', [$result]);
                Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
              });
            });

            return;
          }
        }

        // reset the quiz on failure
        quizHandler.reset();
      }
    };

    quiz.reset = function() {
      quizHandler.reset();
    }
    quiz.restart = function() {
      quizHandler.restart();
    }

    quizHandler.init();
    $container.data('quiz', quiz);
    return quiz;
  };

  Drupal.behaviors.usanetwork_quiz = {
    setQuizOmniture: function() {
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
    },
    moveAds: function($container) {
      var $ads = $container.find('.ad-container');
      var $containers = $container.children('.container');
      var $visible = $containers.filter(':visible');
      if ($ads.closest($visible).length == 0) {
        $ads.appendTo($visible.find('.sidebar'));
      }
    },

    refreshSharebar: function($result, container, elem) {
      var $container = $result.closest(container);
      var $sharebar = $container.find(elem);

      $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
        if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
          var image = $result.attr('data-share-image') || $result.find('.result-image img').attr('src');
          if (image) {
            sharebar.gigyaSharebar.ua.imageBhev = 'url';
            sharebar.gigyaSharebar.ua.imageUrl = image;
          }
          else {
            sharebar.gigyaSharebar.ua.imageBhev = 'default';
          }
          sharebar.gigyaSharebar.ua.description = $result.find('.result-description .share').text();
          Drupal.gigya.showSharebar(sharebar);
        }
      });
    },

    initQuizzes: function(quizes) {
      var $livePage = ($('body').hasClass('page-videos-live'))? true: false;
      for (nid in quizes) {
        var quiz_setting = quizes[nid];
        var $container = $(quiz_setting.container);
        $container.once('usanetwork-quiz', function() {
          var func = 'usaQuiz' + quiz_setting['quizType'].charAt(0).toUpperCase() + quiz_setting['quizType'].slice(1);
          func = (typeof $.fn[func] !== 'undefined') ? func : 'usaQuiz';
          if (typeof $.fn[func] !== 'undefined') {
            var quiz = $.fn[func].apply($container, [{
              type: quiz_setting['quizType'],
              calculationMethod: quiz_setting['calculationMethod'],
              onReset: function() {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
              },
              onStart: function() {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
                Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
              },
              onRestart: function() {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
                Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
              },
              onShowQuestion: function(e, $question) {
                if (typeof usa_refreshBannerAd != 'undefined') {
                  usa_refreshBannerAd();
                }
                /*if($livePage) {
                  var offset = -1*$('.nav-bar-tabs').height();
                  $('article.node-quiz').velocity("scroll", { duration: 500, easing: "linear", offset: offset });
                }*/
              },
              onBeforeResult: function(e, $result) {
                Drupal.behaviors.usanetwork_quiz.refreshSharebar($result, '.container', '.field-name-field-gigya-share-bar > div');
              },
              onShowResult: function(e, $result) {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
                if (typeof usa_refreshBannerAd != 'undefined') {
                  usa_refreshBannerAd();
                }
                /*if($livePage) {
                  var offset = -1*$('.nav-bar-tabs').height();
                  $('article.node-quiz').velocity("scroll", { duration: 500, easing: "linear", offset: offset });
                }*/
              }
            }]);
          }
        });
      }
    },

    attach: function(context, settings) {
      var quizes = settings.usanetwork_quiz,
          self = this;

      self.initQuizzes(quizes);

      $(window).load(function () {
        // init mps advert topbox
        Drupal.behaviors.mpsAdvert.mpsLoadAd('#topbox', Drupal.behaviors.mpsAdvert.mpsNameAD.topbox);
      });


    }
  };
})(jQuery);
