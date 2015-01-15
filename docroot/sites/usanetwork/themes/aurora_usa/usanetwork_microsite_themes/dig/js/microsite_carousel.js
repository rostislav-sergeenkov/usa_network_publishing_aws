// using fred carousel
(function ($) {
  Drupal.behaviors.microsite_carousel = {
    replaceAd: function (){
      if ($(window).width() < 641) {
        if(!$('#home-content .ad-mobile').hasClass('mobile')) {
          $('.usa-microsite-featured .carousel li.ad').children().appendTo($('#home-content .ad-mobile'));
          $('#home-content .ad-mobile').addClass('mobile');
          $('.usa-microsite-featured .carousel li.ad').remove();
        }
      }
      else {
        if($('#home-content .ad-mobile').hasClass('mobile')) {
          $('<li class="ad ad300x250 carousel-item"></li>').insertAfter($('.usa-microsite-featured .carousel li').eq(0));
          $('#home-content .ad-mobile').children().appendTo($('.usa-microsite-featured .carousel li.ad'));
          $('#home-content .ad-mobile').removeClass('mobile');
        }
      }
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
      $('.microsite-carousel-processed').each(function() {
        var $self = $(this);
        $self.find('.carousel-btns').remove();
        $self.removeClass('microsite-carousel-processed');
      });

      if ($(window).width() < 769) {
        // items should collapse
        $('.carousel').each(function() {
          $(this).once('microsite-carousel-collapsible', function() {
            var $container = $(this);
            var $content = $container.children('.carousel-viewport');
            var $carousel = $container.find('ul').eq(0);
            // destroy carousel
            $carousel.triggerHandler('_cfs_triggerEvent', ['destroy', true]);

            $container.addClass('expandable-container');
            $content.addClass('expandable-content');

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
          $(this).once('microsite-carousel', function() {
            var $container = $(this);
            // append controls
            $('<div class="carousel-btns"><div class="prev btns">Previous</div><div class="next btns">Next</div></div>').appendTo($container);

            // init carousel
            var $carousel = $container.find('ul').eq(0);
            $carousel.carouFredSel({
                  auto: false,
                  circular: false,
                  infinite: false,
                  align: 'left',
                  prev: $container.find('.carousel-btns .prev'),
                  next: $container.find('.carousel-btns .next'),
                  swipe: {
                    onTouch: true,
                    onMouse: true
                  }
                },
                {
                  wrapper: {
                    classname: "microsite-carousel"
                  }
                });
          });
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
        clearTimeout(doit);
        doit = null
      }, 50);
    }
  });

  // check the collapsible content height one again when page is fully loaded
  $(window).load(function() {
    Drupal.behaviors.microsite_carousel.initCarousel();
  });

}(jQuery));
