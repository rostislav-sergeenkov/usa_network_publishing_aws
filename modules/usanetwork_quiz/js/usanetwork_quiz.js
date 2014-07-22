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
        });
        $(quiz).trigger('onInit');
      },
      start: function() {
        quiz.score = 0;
        quizHandler.answers = {};
        $questions.hide();
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
    moveAds: function($container) {
      var $ads = $container.find('.ad-container');
      var $containers = $container.children('.container');
      var $visible = $containers.filter(':visible');
      if ($ads.closest($visible).length == 0) {
        $ads.appendTo($visible.find('.sidebar'));
      }
    },
    attach: function(context, settings) {
      var quizes = settings.usanetwork_quiz;
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
              },
              onRestart: function() {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
              },
              onShowQuestion: function(e, $question) {
                if (typeof usa_refreshBannerAd != 'undefined') {
                  usa_refreshBannerAd();
                }
              },
              onBeforeResult: function(e, $result) {
                var $container = $result.closest('.container');
                var $sharebar = $container.find('.field-name-field-gigya-share-bar > div');

                $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
                  if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
                    var image = $result.find('.result-image img').attr('src');
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
              onShowResult: function(e, $result) {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
              }
            }]);
          }
        });
      }
    }
  };
})(jQuery);