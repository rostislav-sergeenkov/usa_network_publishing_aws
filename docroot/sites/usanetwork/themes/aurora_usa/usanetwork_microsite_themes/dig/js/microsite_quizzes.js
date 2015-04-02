(function ($) {
  Drupal.behaviors.microsite_quizzes = {
    quizIsLoading: null,

    micrositeInit300x250Ad: function(nid) {
      $('#microsite #usanetwork-quiz-' + nid).children('.container').filter(':visible').find('.dart-tag').html('<center><iframe src="/custom-dart-iframe?key=300x250_ifr_reload" frameborder="0" scrolling="no" width="300" height="250"></iframe></center>');
    },

    micrositeInitGigyaSharebar: function() {
      if (typeof gigya !== 'undefined') {
        if (typeof Drupal.settings.gigyaSharebars != 'undefined') {
          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
            Drupal.gigya.showSharebar(sharebar);
          });
        }
      }
    },

    micrositeSetOmnitureData: function setOmnitureData(itemTitle){
      var anchor = 'quizzes',
          itemTitle = itemTitle || '',
          siteName = Drupal.behaviors.microsite_quizzes.siteName,
          pageName = Drupal.behaviors.microsite_quizzes.basePageName,
          sectionTitle = 'Quiz',
          pageName = sectionTitle + ' | ' + pageName;

      s.pageName = siteName + ' : ' + sectionTitle;
      s.prop3 = sectionTitle;
      s.prop4 = siteName + ' : ' + sectionTitle;
      s.prop5 = siteName + ' : ' + sectionTitle;
      if (itemTitle != '') {
        pageName = itemTitle + ' | ' + pageName;
        s.pageName += ' : ' + itemTitle;
        s.prop5 += ' : ' + itemTitle;
      }
      $('title').text(pageName);

      if (typeof s_gi != 'undefined') {
        void(s.t()); // omniture page call
      }
    },

    micrositeUpdateSettingsGigyaSharebars: function(title, link, description, imageUrl) {
      var newSharebarObj = [];
      newSharebarObj.push({"gigyaSharebar": {"ua": {"linkBack": link, "title": title, "description": description, "imageBhev": "url", "imageUrl": imageUrl}, "shareButtons": "facebook, twitter, tumblr, pinterest, share", "shortURLs": "never", "containerID": 'quiz-gigya-share', "showCounts": "none", "layout": "horizontal", "iconsOnly": true}});
      newSharebarObj.push({"gigyaSharebar": {"ua": {"linkBack": link, "title": title, "description": description, "imageBhev": "url", "imageUrl": imageUrl}, "shareButtons": "facebook, twitter, tumblr, pinterest, share", "shortURLs": "never", "containerID": 'gigya-share--2', "showCounts": "none", "layout": "horizontal", "iconsOnly": true}});
      newSharebarObj.push({"gigyaSharebar": {"ua": {"linkBack": link, "title": title, "description": description, "imageBhev": "url", "imageUrl": imageUrl}, "shareButtons": "facebook, twitter, tumblr, pinterest, share", "shortURLs": "never", "containerID": 'gigya-share--3', "showCounts": "none", "layout": "horizontal", "iconsOnly": true}});
/*
      $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
        var containerId = sharebar.gigyaSharebar.containerID;
        if (containerId == 'gigya-share') {
          containerId = 'quiz-gigya-share';
          newSharebarObj.push({"gigyaSharebar": {"ua": {"linkBack": link, "title": title, "description": description, "imageBhev": "url", "imageUrl": imageUrl}, "shareButtons": "facebook, twitter, tumblr, pinterest, share", "shortURLs": "never", "containerID": containerId, "showCounts": "none", "layout": "horizontal", "iconsOnly": true}});
        }
        else if (containerId == 'gigya-share--2' || containerId == 'gigya-share--3') {
          newSharebarObj.push({"gigyaSharebar": {"ua": {"linkBack": link, "title": title, "description": description, "imageBhev": "url", "imageUrl": imageUrl}, "shareButtons": "facebook, twitter, tumblr, pinterest, share", "shortURLs": "never", "containerID": containerId, "showCounts": "none", "layout": "horizontal", "iconsOnly": true}});
        }
        else { // in case there is other gigya share bar information in this object
          newSharebarObj.push(sharebar);
        }
      });
*/
      Drupal.settings.gigyaSharebars = [];
      Drupal.settings.gigyaSharebars = newSharebarObj;
    },

    micrositeResetOmnitureClicks: function(activeQuizNid) {
//usa_debug('================== micrositeResetOmnitureClicks(' + activeQuizNid + ')');
      var settings = {"usanetwork_quiz" : Drupal.settings.usanetwork_quiz[activeQuizNid]};

      function ucfirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      // Gigya share bar
      $('#microsite #quizzes .field-type-gigya-sharebar').once('omniture-tracking', function() {
        $(this).on('click', '.gig-share-button', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            var $self = $(this);
            var $container = $self.parents('.gig-button-container');
            var network = 'Share';
            if ($container.hasClass('gig-button-container-facebook')) {
              network = 'Facebook';
            }
            else if ($container.hasClass('gig-button-container-twitter')) {
              network = 'Twitter';
            }
            else if ($container.hasClass('gig-button-container-tumblr')) {
              network = 'Tumblr';
            }
            else if ($container.hasClass('gig-button-container-pinterest')) {
              network = 'Pinterest';
            }

            s.linkTrackVars = 'events,eVar74';
            s.linkTrackEvents = 'event41';
            s.events = 'event41';
            s.eVar74 = network;
            s.tl(this,'o','Social Share');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      // Quizes omniture tracking. Track show Question
      $('#microsite #quizzes .usanetwork-quiz-questions .usanetwork-quiz-question').once('omniture-tracking', function() {
        $(this).on('show', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
//usa_debug('================== settings.usanetwork_quiz: ');
//usa_debug(settings.usanetwork_quiz);
            var quiz_setting = settings.usanetwork_quiz; // quizes[nid];
            var quizShow = quiz_setting['quizShow'],
            quizTitle = quiz_setting['quizTitle'],
            quizType = quiz_setting['quizType'];

            var quizQuestionNumber = $(this).index() + 1;
            var quizQuestionTitle = $(this).find('.question-title').text();

            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber;
            s.linkTrackVars='events,prop58,eVar58';
            s.linkTrackEvents=s.events='event88';
            s.eVar58=s.prop58=quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestionTitle;
            s.tl(this,'o','Poll/Question Shown');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      // Quizes omniture tracking. Track answer: 0 = incorrect, 1 = correct
      $('#microsite #quizzes .usanetwork-quiz-questions .usanetwork-quiz-question .answers .usanetwork-quiz-answer').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

//            var quizes = settings.usanetwork_quiz;
            var quiz_setting = settings.usanetwork_quiz; // quizes[nid];
            var quizShow = quiz_setting['quizShow'],
            quizTitle = quiz_setting['quizTitle'],
            quizType = quiz_setting['quizType'];

            var $quizQuestion = $(this).parents('.usanetwork-quiz-question');
            var quizQuestionNumber = $quizQuestion.index() + 1;
            var quizQuestionTitle = $(this).closest('.usanetwork-quiz-question').find('.question-title').text();
            var quizQuestionValue = $(this).attr('value');

            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber;
            s.linkTrackVars='events,prop58,eVar58';
            s.linkTrackEvents=s.events='event89';
            s.eVar58=s.prop58=quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestionTitle + ' : Answer : ' + quizQuestionValue;
            s.tl(this,'o','Poll/Question Answered');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      // Quizes omniture tracking. Track restart button
      $('#microsite #quizzes .usanetwork-quiz-results input[type="button"]').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

//            var quizes = settings.usanetwork_quiz;
            var quiz_setting = settings.usanetwork_quiz; // quizes[nid];
            var quizShow = quiz_setting['quizShow'],
            quizTitle = quiz_setting['quizTitle'],
            quizType = quiz_setting['quizType'];

            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType);
            s.linkTrackVars='events,eVar65,prop65';
            s.linkTrackEvents=s.events='event65';
            s.eVar65 = s.prop65 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Restart Button';
            s.tl(this,'o','Restart');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });
    },

    micrositeGetCustomJs: function(quizNodeId) {
      $.getScript( '/ajax/get-custom-js/' + quizNodeId, function( data, textStatus, jqxhr ) {
//        usa_debug( '============= micrositeGetCustomJs\ndata: ' );
//        usa_debug( data ); // Data returned
      });
    },

    micrositeSwitchQuizzes: function(quizNodeId, callback) {
      var currentQuizNodeId = $('#microsite #quizzes article').attr('id').replace('node-', '');

      if (currentQuizNodeId != quizNodeId) {
        Drupal.behaviors.microsite_quizzes.quizIsLoading = true;
        Drupal.behaviors.microsite_quizzes.showHideLoader();

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

          // change quiz
          // quiz is hidden here
          activeQuizContainer.find('li').attr({'id': 'quiz-' + data.nid, 'data-node-id': data.nid}).animate({'opacity': 0, 'scrollTop': 0}, 1000, function(){

            // change quiz title
            $('#microsite #quizzes .full-pane > h1, #microsite #quizzes .full-pane > h3').animate({'opacity': 0}, 1000, function(){
              if ($(this).hasClass('seo-h1')) {
                $(this).html(data.h1).animate({'opacity': 1}, 1000);
              }
              else {
                $(this).html(data.title).animate({'opacity': 1}, 1000);
              }
            });

            // @TODO: DV: The following line of code was added because the
            // Dig microsite has more than one #gigya-share element in the html,
            // which breaks the Gigya share bar. Is there a better way to
            // fix this?
            $(this).html(data.quiz_html.replace('id="gigya-share"', 'id="quiz-gigya-share"'));

            // reset Gigya share bar
            var link = window.location.protocol + '//' + window.location.hostname + Drupal.settings.microsites_settings.base_path + '/quizzes/' + Drupal.settings.quizzes[quizNodeId].url,
                imageUrl = $('#microsite #quizzes #viewport .usanetwork-quiz-splash img').attr('src');
//usa_debug('================= link: ' + link + '\nimageUrl: ' + imageUrl);
            // reset Gigya share bar
            Drupal.behaviors.microsite_quizzes.micrositeUpdateSettingsGigyaSharebars(data.title, link, data.description, imageUrl);
            // show Gigya share bar
            Drupal.behaviors.microsite_quizzes.micrositeInitGigyaSharebar();

            // reset quiz to track clicks in Omniture
            Drupal.behaviors.microsite_quizzes.micrositeResetOmnitureClicks(data.nid);

            // re-initialize quiz
            Drupal.behaviors.usanetwork_quiz.initQuizzes(Drupal.settings.usanetwork_quiz);

            // get js from custom field for current quiz
            Drupal.behaviors.microsite_quizzes.micrositeGetCustomJs(data.nid);

            // show the quiz now
            activeQuizContainer.find('li#quiz-' + data.nid).animate({'opacity': 1}, 1000, function(){
              // send Omniture data
              Drupal.behaviors.microsite_quizzes.micrositeSetOmnitureData(data.title);

//              setTimeout(function(){
                // refresh the 728x90 ad
                Drupal.behaviors.microsite_scroll.create728x90Ad();

                // show 300x250 ad on splash page
                Drupal.behaviors.microsite_quizzes.micrositeInit300x250Ad(data.nid);
//              }, 1000);

              // set url
              Drupal.behaviors.microsite_scroll.micrositeChangeUrl('quizzes', link);

              // update quiz navigation
              quizzesNav.find('li.active').removeClass('active disabled');
              quizzesNav.find('li#nav-quiz-' + data.nid).addClass('active');

              // hide loader
              Drupal.behaviors.microsite_quizzes.quizIsLoading = false;
              Drupal.behaviors.microsite_quizzes.showHideLoader();
            });
          });
        })
        .fail(function(jqXHR, textStatus, errorThrown){
          usa_debug('********************\najax fail: ');
          usa_debug(errorThrown);
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
          numSlides = Math.floor(quizzesNavWidth / totalSlideWidth);
      if (numSlides < 2) numSlides = 2;
      return numSlides;
    },

    showHidePager: function(quizId, numQuizzesShown) {
      // set quiz nav container width
      var $quizNavContainer = $('#microsite #quizzes ' + quizId),
          numQuizzes = $quizNavContainer.find('li').length,
          widthOneQuizNavItem = $quizNavContainer.find('li').width(),
          finalWidthQuizNav = Math.ceil(numQuizzesShown * (widthOneQuizNavItem + 10));
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
      var activeQuiz = $('#microsite #quizzes-content .flexslider'),
          activeQuizWidth = activeQuiz.width(),
          newHeight = Math.ceil(activeQuizWidth * 9/16);
      $('#microsite #quizzes-content .flexslider').height(newHeight);
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

      if (Drupal.behaviors.microsite_quizzes.quizIsLoading) {
        // show spinner
        qLoader.show().animate({'opacity': 1}, 1000);
      } else {
        // hide spinner
        qLoader.animate({'opacity': 0}, 1000).delay(1000).hide();
      }
    },

    micrositeReloadSliders: function() {
      $('#microsite #quizzes .bxslider-container').width('100%');

      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          slideWidth = (wwidth > transitionWidth) ? 250 : 125,
          slideMargin = 10,
          numSlides = Drupal.behaviors.microsite_quizzes.getNumSlidesToDisplay(slideWidth, slideMargin);

      Drupal.behaviors.microsite_quizzes.setActiveQuizHeight();

      if (typeof Drupal.behaviors.microsite_quizzes.quizBxSlider == 'object') {
        Drupal.behaviors.microsite_quizzes.quizBxSlider.reloadSlider({
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
            Drupal.behaviors.microsite_quizzes.showHidePager('#quizzes-nav', numSlides);
            $('#microsite #quizzes #quizzes-nav-page-controls').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      $('#quizzes .quizzes-nav-bxslider li[data-node-id="' + Drupal.behaviors.microsite_quizzes.activeQuizNavItem + '"]').addClass('active');
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
            imageUrl = $('#microsite #quizzes #viewport .usanetwork-quiz-splash img').attr('src');

        $('#microsite #quizzes #gigya-share').attr('id', 'quiz-gigya-share');
        self.micrositeUpdateSettingsGigyaSharebars(quiz.quizTitle, link, quiz.quizDescription, imageUrl);

        setTimeout(function(){
          // load Gigya share bar
          self.micrositeInitGigyaSharebar();
        }, 1000);


        // set defaults for quiz navigation
        var wwidth = $(window).width(),
            transitionWidth = 640,
            slideWidth = (wwidth > transitionWidth) ? 250 : 125,
            slideMargin = 10,
            numSlides = Drupal.behaviors.microsite_quizzes.getNumSlidesToDisplay(slideWidth, slideMargin),
            self = this;

        self.setActiveQuizHeight();

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
              self.micrositeSwitchQuizzes(clickedNodeId);
            }
          });
        }

        // set resize and orientation change
        $(window).bind('resize', function () {
          self.micrositeReloadSliders();
        });
        window.addEventListener('orientationchange', self.micrositeReloadSliders);
      }
    }
  }
})(jQuery);
