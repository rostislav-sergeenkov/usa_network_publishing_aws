(function ($) {
  Drupal.behaviors.ms_quizzes = {
    quizIsLoading: null,

    init300x250Ad: function() {
//usa_debug('========== quiz ad -- init300x250Ad()');
      var _target = '.ad-container';
      mps.insertAd(mps._select(_target),'topbox');
      mps.refreshAds('topbox');
    },

    refresh300x250Ad: function() {
//usa_debug('========== quiz ad -- refresh300x250Ad()');
      if ($(window).width() > 640 && $('#topbox .mps-slot').length < 1) {
        setTimeout(Drupal.behaviors.ms_quizzes.init300x250Ad, 1000);
      }
      else {
        mps.refreshAds('topbox');
      }
    },

    initGigyaSharebar: function() {
      if (typeof gigya !== 'undefined') {
        if (typeof Drupal.settings.gigyaSharebars != 'undefined') {
          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
            if (typeof Drupal.gigya.showSharebar == 'function') Drupal.gigya.showSharebar(sharebar);
          });
        }
      }
    },

    updateSettingsGigyaSharebars: function(title, link, description, imageUrl) {
      var newSharebarObj = [];
      newSharebarObj.push({"gigyaSharebar": {"ua": {"linkBack": link, "title": title, "description": description, "imageBhev": "url", "imageUrl": imageUrl}, "shareButtons": "facebook, twitter, tumblr, pinterest, share", "shortURLs": "never", "containerID": 'quiz-gigya-share', "showCounts": "none", "layout": "horizontal", "iconsOnly": true}});
      newSharebarObj.push({"gigyaSharebar": {"ua": {"linkBack": link, "title": title, "description": description, "imageBhev": "url", "imageUrl": imageUrl}, "shareButtons": "facebook, twitter, tumblr, pinterest, share", "shortURLs": "never", "containerID": 'gigya-share--2', "showCounts": "none", "layout": "horizontal", "iconsOnly": true}});
      newSharebarObj.push({"gigyaSharebar": {"ua": {"linkBack": link, "title": title, "description": description, "imageBhev": "url", "imageUrl": imageUrl}, "shareButtons": "facebook, twitter, tumblr, pinterest, share", "shortURLs": "never", "containerID": 'gigya-share--3', "showCounts": "none", "layout": "horizontal", "iconsOnly": true}});

      Drupal.settings.gigyaSharebars = [];
      Drupal.settings.gigyaSharebars = newSharebarObj;
    },

    resetOmnitureClicks: function(activeQuizNid) {
      var settings = {"usanetwork_quiz" : Drupal.settings.usanetwork_quiz[activeQuizNid]};

      function ucfirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      // Gigya share bar
      $('#microsite #quizzes .field-type-gigya-sharebar').once('omniture-tracking', function() {
        $(this).on('click', '.gig-share-button', function(e) {
          Drupal.behaviors.ms_global.sendSocialShareOmniture($(this), Drupal.settings.gigyaSharebars[0].gigyaSharebar.ua.title);
        });
      });

      // Quizes omniture tracking. Track show Question
      $('#microsite #quizzes .usanetwork-quiz-questions .usanetwork-quiz-question').once('omniture-tracking', function() {
        $(this).on('show', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            if (!$(this).hasClass('shown')) {
              $(this).addClass('shown');
              var quiz_setting = settings.usanetwork_quiz;
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
              s.tl(this,'o','Poll/Question Shown');
              s.manageVars('clearVars',s.linkTrackVars,1);
            }
          }
        });
      });

      // Quizes omniture tracking. Track answer: 0 = incorrect, 1 = correct
      $('#microsite #quizzes .usanetwork-quiz-questions .usanetwork-quiz-question .answers .usanetwork-quiz-answer').once('omniture-tracking', function() {

        var NumQuestions = $('#microsite #quizzes .usanetwork-quiz-questions .usanetwork-quiz-question').length;

        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            if (!$(this).hasClass('answered')) {
              $(this).addClass('answered');
              var quiz_setting = settings.usanetwork_quiz;
              var quizShow = quiz_setting['quizShow'],
              quizTitle = quiz_setting['quizTitle'],
              quizType = quiz_setting['quizType'];

              var $quizQuestion = $(this).parents('.usanetwork-quiz-question');
              var quizQuestionNumber = $quizQuestion.index() + 1;
              var quizQuestionTitle = $(this).closest('.usanetwork-quiz-question').find('.question-title').text();
              var quizQuestion = (quizQuestionTitle.length > Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) ? quizQuestionTitle.substr(0, Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) + '...' : quizQuestionTitle;
              var quizQuestionValue = $(this).attr('value');

              s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber;
              s.linkTrackVars = 'events,prop58,eVar58';
              s.linkTrackEvents = s.events = 'event89';
              s.eVar58 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestion;
              s.prop58 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestion + ' : Answer : ' + quizQuestionValue;
              s.tl(this,'o','Poll/Question Answered');

              if (NumQuestions === $quizQuestion.index() + 1) {
                s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Result';
              }

              s.manageVars('clearVars',s.linkTrackVars,1);
            }
          }
        });
      });

      // Quizes omniture tracking. Track restart button
      $('#microsite #quizzes .usanetwork-quiz-results input[type="button"]').once('omniture-tracking', function() {
        $(this).bindFirst('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            $('.usanetwork-quiz-questions .usanetwork-quiz-question').removeClass('shown');
            $('.usanetwork-quiz-questions .usanetwork-quiz-question .answers .usanetwork-quiz-answer').removeClass('answered');

            var quiz_setting = settings.usanetwork_quiz,
                quizShow = quiz_setting['quizShow'],
                quizTitle = quiz_setting['quizTitle'],
                quizType = quiz_setting['quizType'];

            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType);
            s.linkTrackVars = 'events,eVar65,prop65';
            s.linkTrackEvents = s.events = 'event65';
            s.eVar65 = s.prop65 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Restart Button';
            s.tl(this,'o','Restart');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });
    },

    getCustomJs: function(quizNodeId) {
      $.getScript( '/ajax/get-custom-js/' + quizNodeId, function( data, textStatus, jqxhr ) {
        // nothing needed here!
      });
    },

    switchQuizzes: function(quizNodeId, callback) {
      var currentQuizNodeId = $('#microsite #quizzes article').attr('id').replace('node-', '');

      if (currentQuizNodeId != quizNodeId) {
        Drupal.behaviors.ms_quizzes.quizIsLoading = true;
        Drupal.behaviors.ms_quizzes.showHideLoader();

        var newQuiz = $.ajax({
          url: '/ajax/get-quiz/' + quizNodeId,
          type: 'GET',
          dataType: 'json'
        })
        .done(function(data, textStatus, jqXHR){
          // reset quiz js settings
          Drupal.settings.usanetwork_quiz = {};
          Drupal.settings.usanetwork_quiz[data.nid] = {"container":"#usanetwork-quiz-" + data.nid, "quizType":data.quiz_type, "calculationMethod":data.calc_method, "quizShow":data.quiz_show, "quizTitle":data.title};

          var activeQuizContainer = $('#microsite #quizzes #viewport'),
              quizzesNav = $('#microsite #quizzes-nav-list');

          if (typeof callback == 'function') callback();

          // change quiz title
          $('#microsite #quizzes .full-pane > h1, #microsite #quizzes .full-pane > h3, #microsite #quizzes .active-quiz-title > h1, #microsite #quizzes .active-quiz-title > h3').animate({'opacity': 0}, 1000, function(){
            if ($(this).hasClass('seo-h1')) {
              $(this).html(data.h1).animate({'opacity': 1}, 1000);
            }
            else {
              $(this).html(data.title).animate({'opacity': 1}, 1000);
            }
          });

          // change quiz
          $('#microsite #quizzes').animate({'scrollTop': 0}, 1000, function(){
            // quiz is hidden here
            activeQuizContainer.find('li').attr({'id': 'quiz-' + data.nid, 'data-node-id': data.nid}).animate({'opacity': 0}, 1000, function(){

              // @TODO: DV: The following line of code was added because the
              // Dig microsite has more than one #gigya-share element in the html,
              // which breaks the Gigya share bar. Is there a better way to
              // fix this?
              $(this).html(data.quiz_html.replace('id="gigya-share"', 'id="quiz-gigya-share"'));

              // reset Gigya share bar
              var link = window.location.protocol + '//' + window.location.hostname + Drupal.settings.microsites_settings.base_path + '/quizzes/' + Drupal.settings.quizzes[quizNodeId].url,
                  $image = $('#microsite #quizzes #viewport .usanetwork-quiz-splash img'),
                  imageUrl = $image.attr('data-src'),
                  imageSrc = $image.attr('src');

              // if lazy loader is not done, force load image
              if (imageSrc != imageUrl) {
                $image.attr('src', imageUrl);
                $('#microsite #quizzes #viewport .usanetwork-quiz-questions img, #microsite #quizzes #viewport .usanetwork-quiz-results img').attr('src', imageUrl);
              }

              // re-initialize quiz
              Drupal.behaviors.usanetwork_quiz.initQuizzes(Drupal.settings.usanetwork_quiz);

              // get js from custom field for current quiz
              Drupal.behaviors.ms_quizzes.getCustomJs(data.nid);

              // show the quiz now
              activeQuizContainer.find('li#quiz-' + data.nid).animate({'opacity': 1}, 1000, function(){
                // set url
                Drupal.behaviors.ms_global.changeUrl('quizzes', link);

                // update quiz navigation
                quizzesNav.find('li.active').removeClass('active disabled');
                quizzesNav.find('li#nav-quiz-' + data.nid).addClass('active');

                setTimeout(function() {
                  Drupal.behaviors.ms_quizzes.updateSettingsGigyaSharebars(data.title, link, data.description, imageUrl);

                  // show Gigya share bar
                  Drupal.behaviors.ms_quizzes.initGigyaSharebar();

                  // reset quiz to track clicks in Omniture
                  Drupal.behaviors.ms_quizzes.resetOmnitureClicks(data.nid);
                }, 1000);

                // send Omniture data
                Drupal.behaviors.ms_global.setOmnitureData('quizzes', data.title);

                // refresh the 728x90 ad
                Drupal.behaviors.ms_global.create728x90Ad();

                // show 300x250 ad on splash page
                setTimeout(function(){
                  if ($(window).width() > 640) Drupal.behaviors.ms_quizzes.init300x250Ad();
                }, 1000);

                // hide loader
                Drupal.behaviors.ms_quizzes.quizIsLoading = false;
                Drupal.behaviors.ms_quizzes.showHideLoader();

                if (typeof Waypoint != 'undefined') Waypoint.refreshAll();
              });
            });
          });
        })
        .fail(function(jqXHR, textStatus, errorThrown){
          usa_debug('********************\najax fail: ');
          usa_debug(errorThrown);
          Drupal.behaviors.ms_quizzes.quizIsLoading = false;
          Drupal.behaviors.ms_quizzes.showHideLoader();
        });
      }
      else {
        // already looking at this quiz, so do nothing
      }
    },


    // QUIZ NAVIGATION CODE
    activeQuizNavItem: null,
    quizIsLoading: null,

    getNumSlidesToDisplay: function(slideWidth, slideMargin) {
      var quizzesNavWidth = $('#microsite #quizzes #quizzes-nav').width(),
          totalSlideWidth = slideWidth + slideMargin,
          numSlides = Math.ceil(quizzesNavWidth / totalSlideWidth);
      if (numSlides < 2) numSlides = 2;
      return numSlides;
    },

    showHidePager: function(quizId, numQuizzesShown) {
      // set quiz nav container width
      var $quizNavContainer = $('#microsite #quizzes ' + quizId),
          numQuizzes = $quizNavContainer.find('li').length,
          widthOneQuizNavItem = $quizNavContainer.find('li').width(),
          finalWidthQuizNav = Math.ceil(numQuizzesShown * (widthOneQuizNavItem + Drupal.behaviors.ms_quizzes.slideMargin));
      $quizNavContainer.find('.bxslider-container').width(finalWidthQuizNav);

      // show or hide the pager
      if (numQuizzes > numQuizzesShown) {
        $quizNavContainer.find('.quizzes-page-controls').show();
      }
      else {
        $quizNavContainer.find('.quizzes-page-controls').hide();
      }
    },

    setActiveQuizHeight: function() {
      var $activeQuiz = $('#quizzes article'),
          questionsHeight = $activeQuiz.find('.usanetwork-quiz-questions').height();
      $('#quizzes article > .content').css({'min-height': questionsHeight + 'px'});
    },

    setActiveQuizNav: function() {
      var activeQuizNid = $('#microsite #quizzes-content #viewport > li').attr('data-node-id');
      $('#quizzes .quizzes-nav-bxslider li').removeClass('active');
      $('#quizzes .quizzes-nav-bxslider li[data-node-id="' + activeQuizNid + '"]').addClass('active');
    },

    showHideLoader: function() {
      var activeQuiz = $('#quizzes #viewport li'),
          qLoader = $('#quizzes #quiz-loader'),
          qHeight = activeQuiz.height();

      qLoader.height(qHeight);

      if (Drupal.behaviors.ms_quizzes.quizIsLoading) {
        // show spinner
        qLoader.show().animate({'opacity': 1}, 1000);
      } else {
        // hide spinner
        qLoader.animate({'opacity': 0}, 1000).delay(1000).hide();
      }
    },

    reloadSliders: function() {
      $('#microsite #quizzes .bxslider-container').width('100%');

      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          slideWidth = (wwidth > transitionWidth) ? 200 : 100,
          slideMargin = 30,
          numSlides = Drupal.behaviors.ms_quizzes.getNumSlidesToDisplay(slideWidth, slideMargin);

      Drupal.behaviors.ms_quizzes.setActiveQuizHeight();

      if (typeof Drupal.behaviors.ms_quizzes.quizBxSlider == 'object') {
        Drupal.behaviors.ms_quizzes.quizBxSlider.reloadSlider({
          slideWidth: slideWidth,
          minSlides: numSlides,
          maxSlides: numSlides,
          slideMargin: slideMargin,
          nextSelector: '#quizzes-nav-next',
          prevSelector: '#quizzes-nav-prev',
          nextText: 'Next',
          prevText: 'Previous',
          pagerSelector: '#quizzes-nav-pagers',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            Drupal.behaviors.ms_quizzes.showHidePager('#quizzes-nav', numSlides);
            $('#microsite #quizzes #quizzes-nav-page-controls').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      $('#quizzes .quizzes-nav-bxslider li[data-node-id="' + Drupal.behaviors.ms_quizzes.activeQuizNavItem + '"]').addClass('active');
    },

    // ATTACH
    attach: function (context, settings) {
      var self = this;
      self.siteName = Drupal.settings.microsites_settings.title;
      self.basePath = Drupal.settings.microsites_settings.microsite_theme_path;
      self.basePageName = Drupal.settings.microsites_settings.title + ' | USA Network';

      // check to see if there is a quizzes section
      if ($('#microsite #quizzes').length > 0) {
        // reset Gigya share bar
        // @TODO: DV added the following reset for Gigya sharebar settings
        // because there is more than one #gigya-share element in the Dig
        // microsite html, which breaks the sharebar on page load. Is there a
        // better way to fix this?
        var quizId = $('#microsite #quizzes #viewport li').attr('data-node-id'),
            quiz = Drupal.settings.usanetwork_quiz[quizId],
            link = window.location.protocol + '//' + window.location.hostname + Drupal.settings.microsites_settings.base_path + '/quizzes/' + Drupal.settings.quizzes[quizId].url,
            $image = $('#microsite #quizzes #viewport .usanetwork-quiz-splash img'),
            imageUrl = $image.attr('data-src'),
            imageSrc = $image.attr('src');

        // if the lazy loader hasn't loaded the image yet, force the image load
        if (imageSrc != imageUrl) {
          $image.attr('src', imageUrl);
          $('#microsite #quizzes #viewport .usanetwork-quiz-questions img, #microsite #quizzes #viewport .usanetwork-quiz-results img').attr('src', imageUrl);
        }

        // set defaults for quiz navigation
        var wwidth = $(window).width(),
            transitionWidth = 640,
            slideWidth = (wwidth > transitionWidth) ? 200 : 100,
            slideMargin = 30,
            numSlides = Drupal.behaviors.ms_quizzes.getNumSlidesToDisplay(slideWidth, slideMargin);

        if ($('#microsite #quizzes #quizzes-nav li').length > 1) {
          self.quizBxSlider = $('#microsite #quizzes #quizzes-nav .quizzes-nav-bxslider').bxSlider({
            minSlides: numSlides,
            maxSlides: numSlides,
            slideWidth: slideWidth,
            slideMargin: slideMargin,
            nextSelector: '#quizzes-nav-next',
            prevSelector: '#quizzes-nav-prev',
            nextText: 'Next',
            prevText: 'Previous',
            pagerSelector: '#quizzes-nav-pagers',
            infiniteLoop: false,
            hideControlOnEnd: true,
            onSliderLoad: function(){
              self.showHidePager('#quizzes-nav', numSlides);
              $('#microsite #quizzes #quizzes-nav').animate({ 'opacity': 1 }, 1000, 'jswing');
            }
          });

          // initialize quiz nav clicks
          $('#microsite #quizzes-nav-list li a').click(function(e){
            e.preventDefault();

            if ($(this).hasClass('disabled')) {
              // do nothing
            }
            else {
              var clickedNodeId = $(this).parent().attr('data-node-id');
              $(this).parent().addClass('disabled');
              self.switchQuizzes(clickedNodeId);
            }
          });
        }

        $(window).load(function(){
          var self = Drupal.behaviors.ms_quizzes;

          $('#microsite #quizzes #gigya-share').attr('id', 'quiz-gigya-share');
          self.updateSettingsGigyaSharebars(quiz.quizTitle, link, quiz.quizDescription, imageUrl);

          // load Gigya share bar
          self.initGigyaSharebar();
          // reset quiz to track clicks in Omniture
          self.resetOmnitureClicks(quizId);

          self.setActiveQuizHeight();
        });
      }
    }
  }
})(jQuery);
