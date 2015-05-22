(function ($) {
  Drupal.behaviors.global_carousels = {
    carouselInit: function () {
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
                    Drupal.behaviors.global_carousels.showClose($(v));
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

        Drupal.behaviors.global_carousels.carouselControlsInit('vert', carousel_id, $container, $carousel);
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
                  swipeRight: function () {
                    if (!$carousel.hasClass('stop')) {
                      var visible_item = $container.jcarousel('visible').index($container.find('li.first'));
                      if (visible_item >= 0 && !$container.hasClass('start')) {
                        Drupal.behaviors.global_carousels.swipeShowDescription($container);
                      }
                      var swipeElements = '-=' + Drupal.behaviors.global_carousels.swipeItems($carousel);
                      $container.jcarousel('scroll', swipeElements);
                    }
                  },
                  swipeLeft: function () {
                    var count = Drupal.behaviors.global_carousels.swipeItems($carousel);

                    if (!$carousel.hasClass('stop')) {
                      if ($container.hasClass('start')) {
                        if ($(window).width() <= 768) {
                          $container.jcarousel('scroll', '+=' + count);
                        } else {
                          if (Drupal.behaviors.global_carousels.checkFirstSlideOverflow($container)) {
                            Drupal.behaviors.global_carousels.swipeHideDescription($container);
                          } else {
                            Drupal.behaviors.global_carousels.swipeHideDescription($container);
                            $container.jcarousel('scroll', '+=' + count);
                          }
                        }
                      } else {
                        $container.jcarousel('scroll', '+=' + count);
                      }
                    }
                  },
                  tap: function (event, target) {
                    var click_on_opened = $(target).closest('li.active').length > 0;
                    var tapHandler = function() {
                      if ($(target).attr('href')) {
                        if (!$(target).hasClass('show-open')) {
                          window.location = $(target).attr('href');
                        } else {
                          if ($container.hasClass('start')) {
                            Drupal.behaviors.global_carousels.swipeHideDescription($container);
                            setTimeout(function () {
                              Drupal.behaviors.global_carousels.showOpen($(target));
                            }, 600);
                          }
                          else {
                            Drupal.behaviors.global_carousels.showOpen($(target));
                          }
                        }
                      } else {
                        var link = $(target).closest('a');

                        if ($(target).find('a.show-open').length > 0) {
                          if ($container.hasClass('start')) {
                            Drupal.behaviors.global_carousels.swipeHideDescription($container);

                            setTimeout(function () {
                              Drupal.behaviors.global_carousels.showOpen($(target).find('a.show-open'));
                            }, 600);
                          }
                          else {
                            Drupal.behaviors.global_carousels.showOpen($(target).find('a.show-open'));
                          }
                        }

                        if (link.length == 0) {
                          return false;
                        }

                        if (!link.hasClass('show-open')) {
                          window.location = link.attr('href');
                        } else {
                          if ($container.hasClass('start')) {
                            Drupal.behaviors.global_carousels.swipeHideDescription($container);

                            setTimeout(function () {
                              Drupal.behaviors.global_carousels.showOpen($(target));
                            }, 600);
                          } else {
                            Drupal.behaviors.global_carousels.showOpen($(target));
                          }
                        }
                      }
                    };

                    if ((event instanceof MouseEvent) && event.button != 0) {
                      return false;
                    }

                    if (($carousel.find('li.active').length > 0) && ($carousel.hasClass('stop'))) {
                      $carousel.unbind('show:close');
                      $carousel.on('show:close', function() {
                        if (!click_on_opened) {
                          tapHandler();
                        }
                      });
                      Drupal.behaviors.global_carousels.showClose($carousel.find('li.active'));
                    } else {
                      tapHandler();
                    }
                  }
                });
              })
              .on('jcarousel:scroll', function (event, carousel) {
                $.each(carousel._items, function (i, v) {
                  if ($(v).hasClass('active')) {
                    Drupal.behaviors.global_carousels.showClose($(v));
                  }
                });
                $container.on('jcarousel:fullyvisiblein', 'li.first', function (event, carousel) {
                  if (!$carousel.hasClass('stop')) {
                    Drupal.behaviors.global_carousels.swipeShowDescription($container);
                  }
                })
              })
              .on('jcarousel:reloadend', function (event, carousel) {
                $carousel.find('a').click(function (e) {
                  e.preventDefault();
                });
              })
              .jcarousel({
                animation: {
                  duration: 500,
                  easing: 'linear'
                },
                rtl: false
              });
        }

        Drupal.behaviors.global_carousels.carouselControlsInit('left', carousel_id, $container, $carousel);
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
                swipeLeft: function () {
                  var visible_item = $container.jcarousel('visible').index($container.find('li.first'))
                  if (visible_item >= 0 && !$container.hasClass('start')) {
                    Drupal.behaviors.global_carousels.swipeShowDescription($container);
                  }
                  var swipeElements = '-=' + Drupal.behaviors.global_carousels.swipeItems($carousel);
                  $container.jcarousel('scroll', swipeElements);
                },
                swipeRight: function () {
                  if ($container.hasClass('start')) {
                    Drupal.behaviors.global_carousels.swipeHideDescription($container);
                    var count = (Drupal.behaviors.global_carousels.swipeItems($carousel) <= 1) ? 1 : Drupal.behaviors.global_carousels.swipeItems($carousel) - 1;
                    $container.jcarousel('scroll', '+=' + count);
                  } else {
                    $container.jcarousel('scroll', '+=' + Drupal.behaviors.global_carousels.swipeItems($carousel));
                  }
                },
                tap: function (event, target) {
                  if ((event instanceof MouseEvent) && event.button != 0) {
                    return false;
                  }
                  if ($(target).attr('href')) {
                    window.location = $(target).attr('href');
                  } else {
                    var link = $(target).closest('a');
                    if (link.length == 0) {
                      return false;
                    }
                    window.location = link.attr('href');
                  }
                }
              });
            })
            .on('jcarousel:scroll', function (event, carousel) {
              $.each(carousel._items, function (i, v) {
                if ($(v).hasClass('active')) {
                  Drupal.behaviors.global_carousels.showClose($(v));
                }
              });
              $container.on('jcarousel:fullyvisiblein', 'li.first', function (event, carousel) {
                Drupal.behaviors.global_carousels.swipeShowDescription($container);
              })
            })
            .on('jcarousel:reloadend', function (event, carousel) {
              $carousel.find('a').click(function (e) {
                e.preventDefault();
              });

              $carousel.css('left', '0px');
            })
            .jcarousel({
              animation: {
                duration: 500,
                easing: 'linear'
              },
              rtl: true
            });

        Drupal.behaviors.global_carousels.carouselControlsInit('right', carousel_id, $container, $carousel);
      });

      // TODO: Unite right, left, vert initialization loops into one
      $('.carousel').each(function () {
        var $container = $(this),
            $carousel = $container.find('ul').eq(0),
            carousel_id = $container.eq(0).attr('data-carousel-id');
      });

    },
    carouselControlsInit: function (direction, carousel_id, $container, $carousel) {
      var carousel = '.carousel-' + direction + '[data-carousel-id="' + carousel_id + '"] ',
          prev_control = '.jcarousel-control-prev',
          next_control = '.jcarousel-control-next',
          first = carousel, second = carousel;

      if ((carousel_id) && (!$(carousel).hasClass('destroy'))) {
        /*if ((direction === 'left') || (direction === 'vert')) {
         first += prev_control;
         second += next_control;
         } else {
         first += next_control;
         second += prev_control;
         }*/
        first += prev_control;
        second += next_control;

        $(first + ', ' + second)
            .on('jcarouselcontrol:active', function () {
              $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
              $(this).addClass('inactive');
            })

        $(first).jcarouselControl({
          target: '-=' + Drupal.behaviors.global_carousels.swipeItems($carousel)
        });

        $(second)
            .on('click', function () {
              if ($(this).hasClass('inactive') && $(this).hasClass('jcarousel-control-prev')) {
                Drupal.behaviors.global_carousels.swipeShowDescription($container);
              }
            })
            .jcarouselControl({
              target: '+=' + Drupal.behaviors.global_carousels.swipeItems($carousel)
            });
      }
    },
    swipeItems: function (carousel) {
      var width = window.innerWidth,
          item_width = carousel.find('> li').eq(0).width() + parseInt(carousel.find('> li').eq(0).css('margin-right'));

      return Math.floor(width / item_width);
    },
    swipeHideDescription: function (element) {
      element.removeClass('start');
      element.prev().removeClass('start');
    },
    swipeShowDescription: function (element) {
      element.addClass('start');
      element.prev().addClass('start');
    },
    showOpen: function (target) {
      var current_item = target.closest('li');
      var current_item_node = current_item.find('.node-usanetwork-promo');
      var carousel = target.closest('ul');
      var current_left = parseInt(carousel.css('left'));
      var width = desktop_show_open_width;
      var item_width = current_item.width();

      if (window.innerWidth >= window_size_desktop_large) {
        var width = desktop_show_open_width_large;
      }
      if (window.innerWidth < window_size_desktop) {
        width = window.innerWidth - 2*show_carousel_margin + item_width;
      }
      if (window.innerWidth < window_size_mobile) {
        var scrollWidth = window.innerWidth - document.body.clientWidth;
        width = width + scrollWidth;
      }
      var width_block = width - item_width;
      var left = (window.innerWidth - width_block) / 2 - item_width - current_item.offset()['left'] + current_left;
      carousel.animate({left: left}, 500);
      current_item.animate({width: width}, 500, 'easeInCubic');
      current_item.addClass('active');
      current_item_node.addClass('open');
      current_item.find('.show-open').css('max-width', item_width);
      setTimeout(function () {
        current_item.find('.social-icons').show();
      }, 500);
      current_item.attr('data-left', current_left);
      current_item.attr('data-width', item_width);
      carousel.addClass('stop');

      if(window.innerWidth >= window_size_tablet_portrait ) {
        if (current_item_node.data('mpspath') && !current_item_node.hasClass('ad-enable')) {
          current_item_node.addClass('ad-enable');
          Drupal.behaviors.mpsSponsorShip.execSponsoredBlock(current_item_node);
        } else {
          Drupal.behaviors.mpsAdvert.homeShowsQueueInsertAd(current_item_node);
        }
      }

      /*current_item.find('.show-open').bind('click', function() {
        Drupal.behaviors.global_carousels.showClose(current_item);
      });*/
    },
    showClose: function (item) {
      var carousel = item.closest('ul');
      var current_item_node = item.find('.node-usanetwork-promo');
      var left = parseInt(item.attr('data-left'));
      var item_width = parseInt(item.attr('data-width'));
      carousel.animate({left: left}, 500);
      item.animate({width: item_width}, 500, 'easeOutQuint', function(){
        item.removeAttr('style');
        item.find('.show-open').removeAttr('style');
        carousel.trigger('show:close');
      });
      setTimeout(function () {
        item.removeClass('active');
        current_item_node.removeClass('open');
      }, 300);
      item.find('.social-icons').hide();
      item.removeAttr('data-left');
      item.removeAttr('data-width');
      carousel.removeClass('stop');

      if(window.innerWidth >= window_size_tablet_portrait ) {
        if (current_item_node.data('mpspath')) {
          Drupal.behaviors.mpsSponsorShip.removeExecSponsoredBlock(current_item_node);
        } else {
          Drupal.behaviors.mpsAdvert.homeShowsQueueRemoveAd(current_item_node);
        }
      }

      //item.find('.show-open').unbind('click');
    },

    checkFirstSlideOverflow: function($carousel) {
      var first_slide_width = $carousel.find('ul.slides .first').width(),
          desc_width = $carousel.parent().find('.carousel-description-item').width(),
          window_width = $(window).width();

      return (first_slide_width + desc_width > window_width);
    },

    attach: function (context, settings) {


      $(window).bind('resize', function () {
        Drupal.behaviors.global_carousels.carouselInit();
      });

      $(window).load(function () {
        Drupal.behaviors.global_carousels.carouselInit();

        $(".carousel.start .jcarousel-control-next").unbind('click');
        $(".carousel.start .jcarousel-control-next").click(function (e) {
          var $carousel = $(this).closest('.carousel'),
              overflow = Drupal.behaviors.global_carousels.checkFirstSlideOverflow($carousel),
              count;

          if ($carousel.length > 1) $carousel = $($carousel.get(0));

          e.preventDefault();

          count = (Drupal.behaviors.global_carousels.swipeItems($($carousel).find('ul')) <= 1)
            ? 1 : Drupal.behaviors.global_carousels.swipeItems($($carousel).find('ul')) - 1;

          if (overflow && $carousel.hasClass('start')) {
            Drupal.behaviors.global_carousels.swipeHideDescription($(this).parent());
          } else {
            Drupal.behaviors.global_carousels.swipeHideDescription($(this).parent());
            $carousel.jcarousel('scroll', '+=' + count);
          }
        });

        $(".carousel .jcarousel-control-prev").click(function (e) {
          if ($(this).hasClass('inactive') && !$(this).closest('.carousel').hasClass('start')){
            var carousel = $(this).closest('.carousel');

            Drupal.behaviors.global_carousels.swipeShowDescription(carousel);
          }
        });

      });

    }
  };

}(jQuery));

