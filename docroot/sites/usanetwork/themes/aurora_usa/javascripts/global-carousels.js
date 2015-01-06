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
                    Drupal.behaviors.global_carousels.showClose($(v), false);
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
                      var visible_item = (!$container.hasClass('inner-carousel')) ? $container.jcarousel('visible').index($container.find('li.first')) : -1;
                      if (visible_item >= 0 && !$container.hasClass('start')) {
                        Drupal.behaviors.global_carousels.swipeShowDescription($container.prev());
                      }
                      var swipeElements = '-=' + Drupal.behaviors.global_carousels.swipeItems($carousel);
                      $container.jcarousel('scroll', swipeElements);
                    }
                  },
                  swipeLeft: function () {
                    if (!$carousel.hasClass('stop')) {
                      if ($container.hasClass('start')) {
                        Drupal.behaviors.global_carousels.swipeHideDescription($container.prev());
                        var count = (Drupal.behaviors.global_carousels.swipeItems($carousel) <= 1) ? 1 : Drupal.behaviors.global_carousels.swipeItems($carousel) - 1;
                        $container.jcarousel('scroll', '+=' + count);
                      } else {
                        $container.jcarousel('scroll', '+=' + Drupal.behaviors.global_carousels.swipeItems($carousel));
                      }
                    }
                  },
                  tap: function (event, target) {
                    if ((event instanceof MouseEvent) && event.button != 0) {
                      return false;
                    }
                    if (!$carousel.hasClass('stop')) {
                      if (target.href) {
                        if (!$(target).hasClass('show-open')) {
                          window.location = target.href;
                        } else {
                          if (window.innerWidth >= window_size_tablet_portrait) {
                            if ($container.hasClass('start')) {
                              Drupal.behaviors.global_carousels.swipeHideDescription($container.prev());
                              setTimeout(function () {
                                Drupal.behaviors.global_carousels.showOpen($(target), false);
                              }, 600);
                            }
                            else {
                              Drupal.behaviors.global_carousels.showOpen($(target), false);
                            }
                          }
                        }
                      } else {
                        var link = $(target).closest('a');
                        if (link.length == 0) {
                          return false;
                        }
                        if (!link.hasClass('show-open')) {
                          window.location = link.attr('href');
                        }
                        else {
                          if (window.innerWidth >= window_size_tablet_portrait) {
                            if ($container.hasClass('start')) {
                              Drupal.behaviors.global_carousels.swipeHideDescription($container.prev());
                              setTimeout(function () {
                                Drupal.behaviors.global_carousels.showOpen($(target), false);
                              }, 600);
                            }
                            else {
                              Drupal.behaviors.global_carousels.showOpen($(target), false);
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
                    Drupal.behaviors.global_carousels.showClose($(v), false);
                  }
                });
              })
              .on('jcarousel:reloadend', function (event, carousel) {
                $carousel.find('a').click(function (e) {
                  e.preventDefault();
                });
              })
              .on('jcarousel:firstin', 'li.first', function (event, carousel) {
                if (!$carousel.hasClass('stop') && !$container.hasClass('inner-carousel')) {
                  Drupal.behaviors.global_carousels.swipeShowDescription($container.prev());
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
                  var visible_item = (!$container.hasClass('inner-carousel')) ? $container.jcarousel('visible').index($container.find('li.first')) : -1;
                  if (visible_item >= 0 && !$container.hasClass('start')) {
                    Drupal.behaviors.global_carousels.swipeShowDescription($container.prev());
                  }
                  var swipeElements = '-=' + Drupal.behaviors.global_carousels.swipeItems($carousel);
                  $container.jcarousel('scroll', swipeElements);
                },
                swipeRight: function () {
                  if ($container.hasClass('start')) {
                    Drupal.behaviors.global_carousels.swipeHideDescription($container.prev());
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
                  if (target.href) {
                    window.location = target.href;
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
                  Drupal.behaviors.global_carousels.showClose($(v), false);
                }
              });
            })
            .on('jcarousel:reloadend', function (event, carousel) {
              $carousel.find('a').click(function (e) {
                e.preventDefault();
              });

              $carousel.css('left', '0px');
            })
            .on('jcarousel:firstin', 'li.first', function (event, carousel) {
              Drupal.behaviors.global_carousels.swipeShowDescription($container.prev());
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
                Drupal.behaviors.global_carousels.swipeShowDescription($container.prev());
              }
            })
            .jcarouselControl({
              target: '+=' + Drupal.behaviors.global_carousels.swipeItems($carousel)
            });
      }
    },
    swipeItems: function (carousel) {
      var width = window.innerWidth;
      if (carousel.closest('.carousel').hasClass('inner-carousel')) {
        width = carousel.closest('.show-info-block-wrapper').width();
      }
      var item_width = carousel.find('> li').eq(0).width() + parseInt(carousel.find('> li').eq(0).css('margin-right'));
      return Math.floor(width / item_width);
    },
    swipeHideDescription: function (element) {
      element.removeClass('start');
      element.next().removeClass('start');
    },
    swipeShowDescription: function (element) {
      element.addClass('start');
      element.next().addClass('start');
    },
    showOpen: function (target, mobile) {
      var current_item = target.closest('li');
      if (mobile) {
        current_item.addClass('active');
        Drupal.behaviors.global_carousels.carouselInit();
        return false;
      }
      var carousel = target.closest('ul');
      var current_left = parseInt(carousel.css('left'));
      var width = desktop_show_open_width;
      if (window.innerWidth <= window_size_desktop) {
        width = window.innerWidth - 2*show_carousel_margin + show_carousel_item_width;
      }
      var width_block = width - show_carousel_item_width;
      var left = (window.innerWidth - width_block) / 2 - show_carousel_item_width - current_item.offset()['left'] + current_left;
      carousel.animate({left: left}, 500);
      current_item.animate({width: width}, 500, 'easeInCubic');
      current_item.addClass('active');
      setTimeout(function () {
        current_item.find('.social-icons').toggle();
      }, 500);
      current_item.attr('data-left', current_left);
      carousel.addClass('stop');
    },
    showClose: function (item, mobile) {
      if (mobile) {
        item.removeClass('active');
        return false;
      }
      var carousel = item.closest('ul');
      var left = parseInt(item.attr('data-left'));
      carousel.animate({left: left}, 500);
      item.animate({width: show_carousel_item_width}, 500, 'easeOutQuint');
      setTimeout(function () {
        item.removeClass('active');
      }, 300);
      item.find('.social-icons').toggle();
      item.removeAttr('data-left');
      carousel.removeClass('stop');
    },

    attach: function (context, settings) {


      $(window).bind('resize', function () {
        Drupal.behaviors.global_carousels.carouselInit();
      });

      $(window).load(function () {
        Drupal.behaviors.global_carousels.carouselInit();

        $(".carousel.start .jcarousel-control-next").click(function (e) {
          var carousel = $(this).closest('.carousel'),
              count = null;

          if (carousel.length > 1) {
            carousel = $(carousel.get(0));
          }

          e.preventDefault();
          Drupal.behaviors.global_carousels.swipeHideDescription($(this).parent().parent().find('.carousel-description-item'));

          count = (Drupal.behaviors.global_carousels.swipeItems($(carousel).find('ul')) <= 1) ? 1 : Drupal.behaviors.global_carousels.swipeItems($(carousel).find('ul')) - 1;
          carousel.jcarousel('scroll', '+=' + count);
        });

      });

    }
  };

}(jQuery));

