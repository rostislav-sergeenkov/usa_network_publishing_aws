(function ($) {
  Drupal.behaviors.usanetwork_aspot_home_page_giui = {
    init: function (context, settings) {

      var aspotHomeSlide = $('#block-usanetwork-aspot-usanetwork-aspot-carousel .slide'),
          aspotShowSlide = $('#main-slider .slide .slide-content'),
          aspotMovieSlide = $('#block-usanetwork-movie-usanetwork-movie-main-block .slide .slide-content');

      // init add style for Aspot druggeble elements
      if($('body').hasClass('usa-tv-show')) {
        changeDraggableElementsPosition(aspotShowSlide);
      } else if($('body').hasClass('page-home')) {
        changeDraggableElementsPosition(aspotHomeSlide);
      } else if($('body').hasClass('node-type-movie')) {
        changeDraggableElementsPosition(aspotMovieSlide);
      } else if($('body').hasClass('node-type-usanetwork-aspot')) {
        changeDraggableElementsPosition($('#home_page_aspot_preview'));
        changeDraggableElementsPosition($('#show_aspot_preview'));
      }

      function changeDraggableElementsPosition(elem) {
        $.each(elem, function (indexItem, itemElement) {
          var container = $(this);
          if(container.find('.aspot-draggable-element')){
            var currentEl = container.find('.meta .aspot-draggable-element');
            $.each(currentEl, function(indexEl, elem){
              var self = $(this),
                  styleDesktop = $(this).attr('data-style-desktop'),
                  styleMobile = $(this).attr('data-style-mobile'),
                  elWidth, maxWidth, betweenWidth, myArr = [];

              if (window.matchMedia("(min-width: " + window_size_mobile_640 + "px)").matches) {

                self.attr('style', styleDesktop);

                elWidth = self.data('width');

                // create attributes data width for bp 2500 & 640-768
                if(!self.data('max-width')) {
                  if (elWidth === 'auto') {
                    self.attr('data-max-width', elWidth);
                  } else {
                    maxWidth = (elWidth / 100 * 2500) + 'px';
                    self.attr('data-max-width', maxWidth);
                  }
                }

                if($('body').hasClass('usa-tv-show')) {
                  if(!self.data('between-width')) {
                    if (elWidth === 'auto') {
                      self.attr('data-between-width', elWidth);
                    } else {
                      betweenWidth = elWidth + 'vw';
                      self.attr('data-between-width', betweenWidth);
                    }
                  }

                  // change width on tv-show page
                  if(window.matchMedia("(min-width: " + window_size_mobile_640 + "px)").matches && window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches) {
                    self.css('width', self.data('between-width'));
                  }

                  if(window.matchMedia("(min-width: " + window_size_tablet_portrait_768 + "px)").matches && window.matchMedia("(max-width: " + window_size_desktop_max_width_2500 + "px)").matches) {
                    self.css('width', self.data('width') + '%');
                  }
                }

                if(window.matchMedia("(min-width: " + window_size_desktop_max_width_2500 + "px)").matches) {
                  self.css('width', self.data('max-width'));
                }

              } else if (window.matchMedia("(max-width: " + window_size_mobile_640 + "px)").matches){
                self.attr('style', styleMobile);
              }
            });
          }
        });
      }



      $(window).bind('resize', function () {
        waitForFinalEvent(function(){
          // init add style for Aspot druggeble elements
          if(!$('body').hasClass('usa-tv-show')) {
            changeDraggableElementsPosition(aspotHomeSlide);
          } else {
            changeDraggableElementsPosition(aspotShowSlide);
          }
        }, 50, "home A-spot draggable elements");
      });
    },
    attach: function (context, settings) {
      if ($('body').hasClass('node-type-movie')) {
        Drupal.behaviors.usanetwork_aspot_home_page_giui.init();
      } else if ($('body').hasClass('node-type-usanetwork-aspot')) {
        Drupal.behaviors.usanetwork_aspot_home_page_giui.init();
      }
    }
  };
}(jQuery));
