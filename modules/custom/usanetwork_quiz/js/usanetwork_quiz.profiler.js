(function($) {
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  $.fn.quizProfiler = function(options) {
    var settings = $.extend({
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
      container: $container,
      settings: settings
    };
    // attach events
    $(quiz).on('onInit', quiz.settings.onInit);
    $(quiz).on('onStart', quiz.settings.onStart);
    $(quiz).on('onRestart', quiz.settings.onRestart);
    $(quiz).on('onReset', quiz.settings.onReset);
    $(quiz).on('onShowQuestion', quiz.settings.onShowQuestion);
    $(quiz).on('onHideQuestion', quiz.settings.onHideQuestion);
    $(quiz).on('onBeforeResult', quiz.settings.onBeforeResult);
    $(quiz).on('onShowResult', quiz.settings.onShowResult);

    // handle the quiz
    var quizHandler = {
      answers: {},
      init: function() {
        quizHandler.reset();

        // attach events
        $splash_container.find('.entry-button').on('click', function() {
          quizHandler.start();
        });
        $results_container.find('.repeat-button').on('click', function() {
          quizHandler.restart();
        });
        $questions_container.find('.answer-image img, .answer-title').on('click', function() {
          var value = $(this).closest('.usanetwork-quiz-answer').attr('value');
          var $question = $(this).closest('.usanetwork-quiz-question');
          if (value && $question.length > 0) {
            quizHandler.selectAnswer($questions.index($question), value);
          }
        });
        $(quiz).trigger('onInit');
      },
      start: function() {
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
        quizHandler.answers = {};
        $questions.hide();
        $questions.first().show();
        $containers.filter(':visible').fadeOut(quiz.settings.animationSpeed, function() {
          $questions_container.fadeIn(quiz.settings.animationSpeed, function() {
            $(quiz).trigger('onRestart');
          });
        });
      },
      reset: function() {
        quizHandler.answers = {};
        $containers.hide();
        $splash_container.fadeIn(quiz.settings.animationSpeed);
        $(quiz).trigger('onReset');
      },
      selectAnswer: function(question, value) {
        quizHandler.answers[question] = value;
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
})(jQuery);
