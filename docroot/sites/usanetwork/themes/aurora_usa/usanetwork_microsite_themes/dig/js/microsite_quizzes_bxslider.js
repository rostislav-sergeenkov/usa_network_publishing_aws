// BXSLIDER for quizzes
(function ($) {
  Drupal.behaviors.micrositeQuizzesBxSliders = {

    activeQuizNavItem: null,
    quizIsLoading: null,

    getNumSlidesToDisplay: function() {
      var wwidth = $(window).width(),
          numSlides = 3;

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
//usa_debug('================== showHidePager(' + quizId + ', ' + numQuizzesShown + ')\nnumQuizzes: ' + numQuizzes + '\nfinalWidthQuizNav: ' + finalWidthQuizNav);
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

/*
    initCarousel: function() {
      $slideSelector = $('.microsite-quiz .flexslider');
      $touch = true;
      if ($slideSelector.find('li').length <= 1) {
        $touch = false;
      }
      $slideSelector
        .parent().append('<div class="description-block"></div>');
      $slideSelector
        .flexslider({
          animation: "slide",
          useCSS: true,
          touch: $touch,
          smoothHeight: false,
          slideshow: false,
          controlNav: true,
          directionNav: true,
          start: function() {
            var $slider = $slideSelector;
            Drupal.behaviors.microsite_quiz_carousel.updateGigyaSharebarOmniture($slider);
            var current_quiz = $slider.closest('.microsite-quiz');
            var current_description = current_quiz.find('.flex-active-slide .field-name-field-caption').html();
            if (current_description) {
              current_quiz.find('.description-block').html(current_description);
            }
            $slider.append('<div class="counter"></div>');
            Drupal.behaviors.microsite_quiz_carousel.updateCounter($slider);
          },
          after: function() {
            var $slider = $slideSelector;
            Drupal.behaviors.microsite_quiz_carousel.updateGigyaSharebarOmniture($slider);
            Drupal.behaviors.microsite_quiz_carousel.refreshBannerAd();
            Drupal.behaviors.microsite_quiz_carousel.changeQuizDescription($slider.closest('.microsite-quiz'));
            Drupal.behaviors.microsite_quiz_carousel.updateCounter($slider);
          }
        });
    },
*/
    showHideLoader: function() {
      var activeQuiz = $('#quizzes #viewport li'),
          qLoader = $('#quizzes #quiz-loader'),
          qHeight = activeQuiz.height();

      qLoader.height(qHeight);

      if (Drupal.behaviors.micrositeQuizzesBxSliders.quizIsLoading) {
        // show spinner
        qLoader.show().animate({'opacity': 1}, 1000);
      } else {
        // hide spinner
        qLoader.animate({'opacity': 0}, 1000).delay(1000).hide();
      }
    },

/*
    switchQuiz: function(nid, callback) {
      Drupal.behaviors.micrositeQuizzesBxSliders.quizIsLoading = true;
      Drupal.behaviors.micrositeQuizzesBxSliders.showHideLoader();

      // Make ajax call to '/ajax/get-quiz/' + nid
      var newQuiz = $.ajax({
        url: '/ajax/get-quiz/' + nid,
        type: 'GET',
        dataType: 'json'
      })
      .done(function(data, textStatus, jqXHR){
        var activeQuizMeta = $('#quizzes .microsite-quiz-meta'),
            activeQuiz = $('#quizzes .microsite-quiz'),
            activeQuizHeight = activeQuiz.height(),
            quizNavItems = $('#quizzes .quizzes-nav-bxslider li');

        callback();

        Drupal.behaviors.micrositeQuizzesBxSliders.quizIsLoading = false;

        activeQuiz.animate({'opacity': 0, 'scrollTop': 0}, 1000, function(){
          if (activeQuizMeta.find('h2').length > 0) {
            activeQuizMeta.find('h2').text(data.title);
          } else {
            $('#gigya-share_gig_containerParent').before('<h2>' + data.title + '</h2>');
          }
          if (activeQuizMeta.find('h1').length > 0) {
            activeQuizMeta.find('h1').text(data.h1);
          }
          activeQuiz.find('.center-wrapper').html(data.rendered);
          activeQuiz.find('.flexslider').height(activeQuizHeight);
          Drupal.behaviors.micrositeQuizzesBxSliders.initCarousel();
          quizNavItems.removeClass('active');
          $('#quizzes .quizzes-nav-bxslider li[data-node-id="' + nid + '"]').addClass('active');
          Drupal.behaviors.micrositeQuizzesBxSliders.setActiveQuizHeight();
          activeQuiz.animate({'opacity': 1}, 1000, function(){
            Drupal.behaviors.micrositeQuizzesBxSliders.showHideLoader();
          });
        });
      })
      .fail(function(jqXHR, textStatus, errorThrown){
        //usa_debug('********************\najax fail: ');
        //usa_debug(errorThrown);
      })
    },
*/
    micrositeReloadSliders: function() {
      $('#microsite #quizzes .bxslider-container').width('100%');

      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          numSlides = Drupal.behaviors.micrositeQuizzesBxSliders.getNumSlidesToDisplay(),
          slideWidth = (wwidth > transitionWidth) ? 250 : 140,
          slideMargin = 10;

      Drupal.behaviors.micrositeQuizzesBxSliders.setActiveQuizHeight();

      if (typeof Drupal.behaviors.micrositeQuizzesBxSliders.quizBxSlider == 'object') {
        Drupal.behaviors.micrositeQuizzesBxSliders.quizBxSlider.reloadSlider({
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
            Drupal.behaviors.micrositeQuizzesBxSliders.showHidePager('#quizzes-nav', numSlides);
            $('#microsite #quizzes #quizzes-nav-page-controls').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      $('#quizzes .quizzes-nav-bxslider li[data-node-id="' + Drupal.behaviors.micrositeQuizzesBxSliders.activeQuizNavItem + '"]').addClass('active');
    },

    attach: function (context, settings) {

      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          numSlides = Drupal.behaviors.micrositeQuizzesBxSliders.getNumSlidesToDisplay(),
          slideWidth = (wwidth > transitionWidth) ? 250 : 140,
          slideMargin = 10,
          self = this;

      self.setActiveQuizHeight();

      if ($('#microsite #quizzes #quizzes-nav li').length > 0) {
        usa_debug('================ initiating bxslider');
        self.quizBxSlider = $('#microsite #quizzes #quizzes-nav .quizzes-nav-bxslider').bxSlider({
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
            self.showHidePager('#quizzes-nav', numSlides);
            $('#microsite #quizzes #quizzes-nav').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      self.setActiveQuizNav();

/*
      var changeQuizHandler = function(e){
        var anchorFull = this.href,
            anchorPathParts = Drupal.behaviors.microsite_scroll.micrositeGetUrlPath(anchorFull),
            $navItems = $('#microsite #quizzes .quizzes-nav-bxslider li a');

        // Unbind click while selected quiz loading
        $navItems.unbind('click').bind('click', function(e) {
          e.preventDefault();
        });

        // if this is an internal microsite url
        // prevent the default action
        // and show the correct microsite item without a page reload
        if (anchorPathParts[0] == 'dig') {
          e.preventDefault();

          // if this is IE9, reload the correct page
          if ($('html.ie9').length > 0) {
            window.location.href = anchorFull;
            return false;
          }

          var nid = $(this).parent().attr('data-node-id');
          Drupal.behaviors.micrositeQuizzesBxSliders.activeQuizNavItem = nid;
          self.switchQuiz(nid, function() {
            $navItems.bind('click', changeQuizHandler);
          });
          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
        }
      };

      $('#microsite #quizzes .quizzes-nav-bxslider li a').bind('click', changeQuizHandler);
*/
      $(window).bind('resize', function () {
        self.micrositeReloadSliders();
      });
      window.addEventListener('orientationchange', self.micrositeReloadSliders);


    }
  }
}(jQuery));
