(function ($) {
  Drupal.behaviors.global_carousels = {
    attach: function (context, settings) {

      //count swipe item
      function swipeItems(carousel) {
        var width = window.innerWidth;
        if(carousel.closest('.carousel').hasClass('inner-carousel')){
          width = carousel.closest('.show-info-block-wrapper').width();
        }
        var item_width  = carousel.find('> li').eq(0).width() + parseInt(carousel.find('> li').eq(0).css('margin-right'));
        return Math.floor(width / item_width);
      }

      function carouselControlsInit(direction, carousel_id, $container, $carousel) {
        var carousel = '.carousel-' + direction + '[data-carousel-id="' + carousel_id + '"] ',
            prev_control = '.jcarousel-control-prev',
            next_control = '.jcarousel-control-next',
            first = carousel, second = carousel;

        if ((carousel_id) && (!$(carousel).hasClass('destroy'))) {
          if ((direction === 'left') || (direction === 'vert')) {
            first += prev_control;
            second += next_control;
          } else {
            first += next_control;
            second += prev_control;
          }

          $(first + ', ' + second)
              .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
              })
              .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
              })

          $(first).jcarouselControl({
            target: '+=' + swipeItems($carousel)
          });

          $(second)
              .on('click', function () {
                if ($(this).hasClass('inactive')) {
                  swipeShowDescription($container.prev());
                }
              })
              .jcarouselControl({
                target: '-=' + swipeItems($carousel)
              });
        }
      }

      function carouselInit() {
        /*$('.carousel-vertical').hover(function () {
         var myScroll = new IScroll('.carousel-vertical', {
         mouseWheel: true
         });

         document.addEventListener('touchmove', function (e) {
         e.preventDefault();
         }, false);
         });*/

        /**
         * VERTICAL CAROUSELS INITIALIZATION
         */
        $('.carousel-vert').each(function () {
          var $container = $(this),
              $carousel = $container.find('ul').eq(0),
              carousel_id = $container.eq(0).attr('data-carousel-id');

          // Schedule page open-description-button click
          $('.carousel-vert .open-description').bind('click', function (e) {
            e.preventDefault();
            if ($(this).closest('li').hasClass('active')) {
              $('.carousel-vert li').removeClass('active');
            } else {
              $('.carousel-vert li').removeClass('active');
              $(this).closest('li').addClass('active');
            }
          });

          // Carousels initialization
          if (!$carousel.hasClass('stop')) {
            $container
                .on('jcarousel:createend', function () {
                  $carousel.find('a').click(function (e) {
                    e.preventDefault();
                  });

                  $container.swipe({
                    excludedElements: "button, input, select, textarea, .noSwipe",
                    swipeUp: function () {
                      if (!$carousel.hasClass('stop')) {
                        if ($('.carousel-vert .open-description').closest('li').hasClass('active')) {
                          $('.carousel-vert li').removeClass('active');
                        }
                        $container.jcarousel('scroll', '+=2');
                      }
                    },
                    swipeDown: function () {
                      if (!$carousel.hasClass('stop')) {
                        if ($('.carousel-vert .open-description').closest('li').hasClass('active')) {
                          $('.carousel-vert li').removeClass('active');
                        }
                        $container.jcarousel('scroll', '-=2');
                      }
                    }
                  });
                })
                .on('jcarousel:scroll', function (event, carousel) {
                  $.each(carousel._items, function (i, v) {
                    if ($(v).hasClass('active')) {
                      showClose($(v), false);
                    }
                  });
                })
                .jcarousel({
                  vertical: true,
                  animation: {
                    duration: 500,
                    easing: 'linear'
                  },
                  rtl: false
                });
          }

          carouselControlsInit('vert', carousel_id, $container, $carousel);
        });

        /**
         * LEFT CAROUSELS INITIALIZATION
         */
        $('.carousel-left').each(function () {
          var $container = $(this),
              $carousel = $container.find('ul').eq(0),
              carousel_id = $container.eq(0).attr('data-carousel-id');

          if ((!$carousel.hasClass('stop')) && (!$container.hasClass('destroy'))) {
            $container
                .on('jcarousel:createend', function () {
                  $carousel.find('a').click(function (e) {
                    e.preventDefault();
                  });

                  $container.swipe({
                    excludedElements: "button, input, select, textarea, .noSwipe",
                    swipeRight: function() {
                      if (!$carousel.hasClass('stop')) {
                        var visible_item = (!$container.hasClass('inner-carousel'))? $container.jcarousel('visible').index($container.find('li.first')):-1;
                        if (visible_item >= 0 && !$container.hasClass('start')) {
                          swipeShowDescription($container.prev());
                        }
                        var swipeElements = '-=' + swipeItems($carousel);
                        $container.jcarousel('scroll', swipeElements);
                      }
                    },
                    swipeLeft: function() {
                      if (!$carousel.hasClass('stop')) {
                        if ($container.hasClass('start')){
                          swipeHideDescription($container.prev());
                          var count = (swipeItems($carousel) <= 1)? 1: swipeItems($carousel) - 1;
                          $container.jcarousel('scroll', '+=' + count);
                        } else {
                          $container.jcarousel('scroll', '+=' + swipeItems($carousel));
                        }
                      }
                    },
                    tap: function (event, target) {
                      if ((event instanceof MouseEvent) && event.button != 0){
                        return false;
                      }
                      if (!$carousel.hasClass('stop')) {
                        if (target.href) {
                          if (!$(target).hasClass('show-open')) {
                            window.location = target.href;
                          } else {
                            if (window.innerWidth >= window_size_tablet_portrait) {
                              if ($container.hasClass('start')) {
                                swipeHideDescription($container.prev());
                                setTimeout(function () {
                                  showOpen($(target), false);
                                }, 600);
                              }
                              else {
                                showOpen($(target), false);
                              }
                            }
                          }
                        } else {
                          var link = $(target).closest('a');
                          if (!link.hasClass('show-open')) {
                            window.location = link.attr('href');
                          }
                          else {
                            if (window.innerWidth >= window_size_tablet_portrait) {
                              if ($container.hasClass('start')) {
                                swipeHideDescription($container.prev());
                                setTimeout(function () {
                                  showOpen($(target), false);
                                }, 600);
                              }
                              else {
                                showOpen($(target), false);
                              }
                            }
                          }
                        }
                      }
                    }
                  });
                })
                .on('jcarousel:scroll', function (event, carousel) {
                  $.each(carousel._items, function (i, v) {
                    if ($(v).hasClass('active')) {
                      showClose($(v), false);
                    }
                  });
                })
                .on('jcarousel:reloadend', function (event, carousel) {
                  $carousel.find('a').click(function (e) {
                    e.preventDefault();
                  });
                })
                .on('jcarousel:firstin', 'li.first', function(event, carousel) {
                  if(!$carousel.hasClass('stop') && !$container.hasClass('inner-carousel')) {
                    swipeShowDescription($container.prev());
                  }
                })
                .jcarousel({
                  animation: {
                    duration: 500,
                    easing: 'linear'
                  },
                  rtl: false
                });
          }

          carouselControlsInit('left', carousel_id, $container, $carousel);
        });

        /**
         * RIGHT CAROUSELS INITIALIZATION
         */
        $('.carousel-right').each(function () {
          var $container = $(this),
              $carousel = $container.find('ul').eq(0),
              carousel_id = $container.eq(0).attr('data-carousel-id');

          $container
              .on('jcarousel:createend', function () {
                $carousel.find('a').click(function (e) {
                  e.preventDefault();
                });

                $carousel.css('left', '0px');
                $container.swipe({
                  excludedElements: "button, input, select, textarea, .noSwipe",
                  swipeLeft: function() {
                    var visible_item = (!$container.hasClass('inner-carousel'))? $container.jcarousel('visible').index($container.find('li.first')):-1;
                    if (visible_item >= 0 && !$container.hasClass('start')) {
                      swipeShowDescription($container.prev());
                    }
                    var swipeElements = '-=' + swipeItems($carousel);
                    $container.jcarousel('scroll', swipeElements);
                  },
                  swipeRight: function() {
                    if ($container.hasClass('start')){
                      swipeHideDescription($container.prev());
                      var count = (swipeItems($carousel) <= 1)? 1: swipeItems($carousel) - 1;
                      $container.jcarousel('scroll', '+=' + count);
                    } else {
                      $container.jcarousel('scroll', '+=' + swipeItems($carousel));
                    }
                  },
                  tap: function (event, target) {
                    if ((event instanceof MouseEvent) && event.button != 0){
                      return false;
                    }
                    if (target.href) {
                      window.location = target.href;
                    } else {
                      window.location = $(target).closest('a').attr('href');
                    }
                  }
                });
              })
              .on('jcarousel:scroll', function (event, carousel) {
                $.each(carousel._items, function (i, v) {
                  if ($(v).hasClass('active')) {
                    showClose($(v), false);
                  }
                });
              })
              .on('jcarousel:reloadend', function (event, carousel) {
                $carousel.find('a').click(function (e) {
                  e.preventDefault();
                });

                $carousel.css('left', '0px');
              })
              .on('jcarousel:firstin', 'li.first', function(event, carousel) {
                swipeShowDescription($container.prev());
              })
              .jcarousel({
                animation: {
                  duration: 500,
                  easing: 'linear'
                },
                rtl: true
              });

          carouselControlsInit('right', carousel_id, $container, $carousel);
        });

        // TODO: Unite right, left, vert initialization loops into one
        $('.carousel').each(function () {
          var $container = $(this),
              $carousel = $container.find('ul').eq(0),
              carousel_id = $container.eq(0).attr('data-carousel-id');
        });

      }



      $(window).bind('resize', function () {
        carouselInit();
      });

      $(window).load(function () {
        carouselInit();

        $(".description-button").click(function (e) {
          var carousel = $(this).parent().parent().find('.carousel'),
              count = null;

          if (carousel.length > 1) {
            carousel = $(carousel.get(0));
          }

          e.preventDefault();
          swipeHideDescription($(this).parent());

          count = (swipeItems($(carousel).find('ul')) <= 1)? 1: swipeItems($(carousel).find('ul')) - 1;
          carousel.jcarousel('scroll', '+=' + count);
        });

      });

    }
  };

}(jQuery));

