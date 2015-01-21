// using fred carousel
(function ($) {
  Drupal.behaviors.microsite_carousel = {
    replaceAd: function (){
      if ($(window).width() < 641) {
        $('.usa-microsite-featured .carousel li.ad').remove();
        $('#videos-content #block-usanetwork-mpx-video-usa-mpx-video-views li.ad').remove();
      }
    },
    changeGalleryDescription: function (current_gallery){
      var current_description = current_gallery.find('.flex-active-slide .field-name-field-caption').html();
      current_gallery.find('.description-block').html(current_description);
    },
    flexDestroy: function (selector) {
    var el = $(selector);
    var elClean = el.clone();

    elClean.find('.flex-viewport').children().unwrap();
    elClean
        .find('.clone, .flex-direction-nav, .flex-control-nav')
        .remove()
        .end()
        .find('*').removeAttr('style').removeClass (function (index, css) {
      return (css.match (/\bflex\S+/g) || []).join(' ');
    });

    elClean.insertBefore(el);
    elClean.next().remove();

  },
    setCollapsibleContentHeight: function($content) {
      var $container = $content.closest('.expandable-container');
      var $toggle = $content.parent().children('.expandable-toggle-wrap');
      // Number of rows to display by default
      var display_rows = 2;

      // Check if we have rows configured
      if ($container.data('microsite_carousel_toggle') !== undefined) {
        var options = $container.data('microsite_carousel_toggle');
        if (options.display_rows !== undefined) {
          display_rows = options.display_rows;
        }
      }

      // Arrange promos by rows
      var $promos = new Array();
      var y_offset;
      var row = 0;
      $content.find('ul li').each(function() {
        var $promo = $(this);
        var promo_offset = $promo.offset().top - $content.offset().top;
        if (promo_offset !== null && promo_offset > y_offset) {
          row++;
        }
        y_offset = promo_offset;
        if ($promos[row] == undefined) {
          $promos[row] = new Array();
        }
        $promos[row].push($promo);
      });

      if (!$container.hasClass('expanded')) {
        // Find the highest promo in the last row, in case they are not equal
        var $promo;
        for (i in $promos[(display_rows - 1)]) {
          if ($promo == null || $promos[(display_rows - 1)][i].height() > $promo.height()) {
            $promo = $promos[(display_rows - 1)][i];
          }
        }
        if ($promo !== undefined) {
          // Calculate visible content height
          var height = $promo.offset().top - $content.offset().top + $promo.outerHeight();
          // Take care of paddings
          height += parseInt($content.css('padding-top')) + parseInt($content.css('padding-bottom'));
          $content.height(height);
        }
      }

      $toggle = $content.parent().children('.expandable-toggle-wrap');
      // Check if all promos are shown or not. Hide or show toggle handle.
      if ($promos[display_rows] == undefined) {
        // They are all shown
        $toggle.hide();
      }
      else {
        $toggle.show();
      }
    },
    initCarousel: function() {

      if ($(window).width() < 769) {
        // items should collapse
        $('.carousel').each(function() {
          $(this).once('microsite-carousel-collapsible', function() {
            var $container = $(this);
            var $content = $container.children('.carousel-viewport');
            var $carousel = $container.find('.microsite-carousel');
            // destroy carousel
            Drupal.behaviors.microsite_carousel.flexDestroy($carousel);

            $container.addClass('expandable-container').removeClass('microsite-carousel-processed');
            $content.addClass('expandable-content');
            if ($(window).width() < 641) {
              $content.addClass('mobile');
            }
            // Force overflow: hidden;
            $content.css({
              overflow: 'hidden'
            });

            var $toggle = $('<div class="expandable-toggle-wrap"><div class="expandable-toggle"><div class="more" style="">more</div><div class="less" style="display: none;">close</div></div></div>').appendTo($container);

            Drupal.behaviors.microsite_carousel.setCollapsibleContentHeight($content);

            // Make toggle handle clickable
            $toggle.children('.expandable-toggle').click(function() {
              var $container = $(this).closest('.expandable-container');
              var $content = $container.children('.expandable-content');
              if ($container.hasClass('expanded')) {
                // collapse content
                $container.removeClass('expanded');
                Drupal.behaviors.microsite_carousel.setCollapsibleContentHeight($content);
                $(this).children('.more').show();
                $(this).children('.less').hide();
              }
              else {
                // expand it
                $container.addClass('expanded');
                $content.height('100%');
                $(this).children('.more').hide();
                $(this).children('.less').show();
              }
            });
          });
        });
      }
      else {
        // items should slide
        $('.microsite-carousel-collapsible-processed').each(function() {
          // switch from collapsible
          var $self = $(this);
          var $content = $self.children('.carousel-viewport');
          var $toggle = $self.children('.expandable-toggle-wrap');
          $content.css('height', '');
          $toggle.remove();
          $self.removeClass('expandable-container');
          $self.removeClass('expanded');
          $content.removeClass('expandable-content');
          $self.removeClass('microsite-carousel-collapsible-processed');
        });

        $('.carousel').each(function() {
          if(!$(this).hasClass('microsite-carousel-processed')){
            $(this).once('microsite-carousel', function() {

              $carousel_selector = $('.usa-microsite-featured ul');
              $touch = true;
              if ($carousel_selector.find('li').length <= 1){
                $touch = false;
              }
              $carousel_selector
                  .parent()
                  .flexslider({
                    animationLoop: false,
                    animation: 'slide',
                    slideshow: false,
                    controlNav: true,
                    itemWidth: 300,
                    itemMargin: 15,
                    directionNav: true,
                    touch: $touch
                  });

            });
          }

        });
      }
    },
    attach: function (context, settings) {
      Drupal.behaviors.microsite_carousel.replaceAd();
    }
  };

  var doit;
  $(window).resize(function() {
    if (doit == null) {
      doit = setTimeout(function() {
        Drupal.behaviors.microsite_carousel.replaceAd();
        Drupal.behaviors.microsite_carousel.initCarousel();
        if ($(window).width() < 641) {
          $('.expandable-content').each(function() {
            if(!$(this).hasClass('mobile')){
              Drupal.behaviors.microsite_carousel.setCollapsibleContentHeight($(this));
              $(this).addClass('mobile');
            }
          });
        } else {
          $('.expandable-content.mobile').each(function() {
            Drupal.behaviors.microsite_carousel.setCollapsibleContentHeight($(this));
            $(this).removeClass('mobile');
          });
        }
        clearTimeout(doit);
        doit = null
      }, 50);
    }
  });

  // check the collapsible content height one again when page is fully loaded
  $(window).load(function() {
    Drupal.behaviors.microsite_carousel.initCarousel();
    $('#galleries-content .microsite-gallery').each(function(){
      var current_gallery = $(this);
      var current_description = current_gallery.find('.flex-active-slide .field-name-field-caption').html();
      if (current_description) {
        current_gallery.find('.description-block').html();
      }
    });
    $('#galleries-content .microsite-gallery .flex-direction-nav a').click(function(){
      var current_gallery = $(this).closest('.microsite-gallery');
      Drupal.behaviors.microsite_carousel.changeGalleryDescription(current_gallery);
    });
  });

}(jQuery));
