(function ($)
{
  //timer function
  function countDown(element, second, endMinute, endHour, endDay, endMonth, endYear)
  {
    var now = new Date();
    second = second || now.getSeconds();
    second = second + now.getSeconds();
    endYear = endYear || now.getFullYear();
    endMonth = endMonth ? month - 1 : now.getMonth();
    endDay = endDay || now.getDate();
    endHour = endHour || now.getHours();
    endMinute = endMinute || now.getMinutes();
    var endDate = new Date(endYear, endMonth, endDay, endHour, endMinute, second + 1);
    var interval = setInterval(function ()
    {
      var time = endDate.getTime() - now.getTime();
      if (time < 0) {
        clearInterval(interval);
      } else {
        var digit = '<div class="digit">' +
          '<div class="digit-inner">';
        var text = '</div><div>';
        var end = '</div></div><div class="digit-separator">:</div>';
        var timer_text = digit;
        var days = Math.floor(time / 864e5);
        if (days < 10) {
          days = '0' + days;
        }
        if (days != '00') {
          timer_text = timer_text + days + end + digit;
        }
        var hours = Math.floor(time / 36e5) % 24;
        if (hours < 10) {
          hours = '0' + hours;
        }
        timer_text = timer_text + hours + end + digit;
        var minutes = Math.floor(time / 6e4) % 60;
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        timer_text = timer_text + minutes + end + digit;
        var seconds = Math.floor(time / 1e3) % 60;
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
        timer_text = timer_text + seconds + '</div>';

        element.innerHTML = timer_text;
        if (!seconds && !minutes && !days && !hours) {
          clearInterval(interval);
        }
      }
      now.setSeconds(now.getSeconds() + 1);
    }, 1000);
  }

  //move h1 tag for show page
  function showTitleMove() {
    if (window.innerWidth < 769 && !($('.show-title-block').hasClass('inner'))) {
      $('.show-title-block').removeClass('dark');
      $('.show-title-block').addClass('inner');
      $('.show-title-block').appendTo('.show-title-wrapper');
    }
    else if(window.innerWidth >= 769 && ($('.show-title-block').hasClass('inner'))) {
      $('.show-title-block').addClass('dark');
      $('.show-title-block').removeClass('inner');
      $('.show-title-block').appendTo('.show-title-block-wrapper');
      if ($(".main-menu-open a").hasClass('active')) {
        closeMainMenu();
      }
    }
  }

  //change column item height for consumptionator video page
  function changeColumnItemHeight() {
    if (window.innerWidth > 1280 || ((640 < window.innerWidth) && (window.innerWidth <= 768))) {
      var current_height = $('.consumptionator-content-block .show-content ul').find('> li').eq(0).height();
      $('.consumptionator-content-block .see-also-content ul li').css('height', current_height);
    } else {
      $('.consumptionator-content-block .see-also-content ul li').css('height', 'auto');
    }
  }

  //init hot value
  function hotValue() {
    $('.hot-block').each(function(){
      var hot = $(this).find('meter')[0].value;
      if (hot > 50) {
        $(this).addClass('hot');
      } else if (hot <= 50) {
        $(this).addClass('warm');
      }
    });
  }

  //move blocks in show-info-block in inner carousel
  function innerCarouselTablet() {
    $('.show-carousel .show-info-block').each(function() {
      if ( window.innerWidth < 1281 && !$(this).hasClass('tablet') ) {
        $('<li class="social-item"></li>').appendTo($(this).find('.inner-carousel ul'));
        $(this).find('.show-central-info .social .node').appendTo($(this).find('.inner-carousel ul .social-item'));
        $(this).addClass('tablet');
      }
      else if (window.innerWidth >= 1281 && $(this).hasClass('tablet') ) {
        $(this).find('.inner-carousel ul .social-item .node').appendTo($(this).find('.show-central-info .social'));
        $(this).find('.inner-carousel ul .social-item').remove();
        $(this).removeClass('tablet');
      }
      if (window.innerWidth < 769 && !$(this).hasClass('mobile') ) {
        $('<li class="last-full-video"></li>').prependTo($(this).find('.inner-carousel ul'));
        $(this).find('.show-central-info .promo .node').appendTo($(this).find('.inner-carousel ul .last-full-video'));
        $(this).addClass('mobile');
      }
      else if (window.innerWidth >= 769 && $(this).hasClass('mobile') ) {
        $(this).find('.inner-carousel ul .last-full-video .node').appendTo($(this).find('.show-central-info .promo'));
        $(this).find('.inner-carousel ul .last-full-video').remove();
        $(this).removeClass('mobile');
      }
    });
  }

  function swipeHideDescription(element) {
    element.removeClass('start');
    element.next().removeClass('start');
  }

  function swipeShowDescription(element) {
    element.addClass('start');
    element.next().addClass('start');
  }

  //count swipe item
  function swipeItems(carousel) {
    var width = window.innerWidth;
    if(carousel.closest('.carousel').hasClass('inner-carousel')){
      width = carousel.closest('.show-info-block-wrapper').width();
    }
    var item_width  = carousel.find('> li').eq(0).width() + parseInt(carousel.find('> li').eq(0).css('margin-right'));
    return Math.floor(width / item_width);
  }

  //open show-card block
  function showOpen(target, mobile) {
    var current_item = $(target).closest('li');
    if (mobile) {
      current_item.addClass('active');
      carouselInit();
      return false;
    }
    var carousel = $(target).closest('ul');
    var current_left = parseInt(carousel.css('left'));
    var width = 1470;
    if (window.innerWidth <= 1280){
      width = 990;
    }
    var width_block = width - 310;
    var left =  (window.innerWidth - width_block)/2 - 310 - current_item.offset()['left'] + current_left;
    carousel.animate({left: left}, 500);
    current_item.animate({width: width}, 500);
    current_item.addClass('active');
    setTimeout(function ()
    {
      current_item.find('.social-icons').toggle();
    }, 500);
    current_item.attr('data-left', current_left);
    carousel.addClass('stop');
  }

  //close show-card-block
  function showClose(item, mobile) {
    if (mobile) {
      item.removeClass('active');
      return false;
    }
    var carousel = item.closest('ul');
    var left = parseInt(item.attr('data-left'));
    carousel.animate({left: left}, 500);
    item.animate({width: 310}, 500);
    item.removeClass('active');
    item.find('.social-icons').toggle();
    item.removeAttr('data-left');
    carousel.removeClass('stop');
  }

  // TODO: Refactor it!
  //open main menu
  function openMainMenu() {
    $(".main-menu-open").addClass('active');
    $(".main-menu-open a").addClass('active');
    if ($('body').hasClass('show-page')) {
      $(".main-menu-open a").addClass('show-color');
    }
    $('.usa-logo').addClass('active');
    $(".search").addClass('active');
    $(".search a").addClass('active');
    $('.search-input-block').addClass('active');
    $('.header-small-menu').addClass('active');
    $('.show-title-wrapper').toggle();
  }

  // TODO: Refactor it!
  //close main menu
  function closeMainMenu() {
    $(".main-menu-open").removeClass('active');
    $(".main-menu-open a").removeClass('active show-color');
    $('.usa-logo').removeClass('active');
    $(".search").removeClass('active');
    $(".search a").removeClass('active');
    $('.search-input-block').removeClass('active');
    $('.header-small-menu').removeClass('active');
    $('.show-title-wrapper').toggle();
  }

  //init catch up carousel
  function catchUpInit() {
    if (!$('body').hasClass('new-show-page')){
      $('.catch-up-explore-carousel').carouFredSel({
        auto: false,
        circular: false,
        infinite: false,
        direction: "left",
        prev: $('.catch-up-explore-buttons').find('.catch-up'),
        next: $('.catch-up-explore-buttons').find('.explore'),
        responsive: true,
        items: {
          visible: 1,
          start: $('.catch-up-explore-carousel .catch-up-block')
        },
        scroll: {
          items: 1,
          duration: 300,
          pauseOnHover: true
        }
      });
    }
  }

  //init schedule carousel
  function scheduleInit() {
    $('.schedule-carousel').carouFredSel({
      auto: false,
      circular: false,
      infinite: false,
      direction: "left",
      prev: $('.schedule-on-tonight').find('.schedule-buttons .on-now'),
      next: $('.schedule-on-tonight').find('.schedule-buttons .on-tonight'),
      responsive: true,
      items: {
        visible: 1,
        start: $('.schedule-block .on-tonight')
      },
      scroll: {
        items: 1,
        duration: 300,
        pauseOnHover: true
      }

    });
  }

  //resize slider in aspot block
  function sliderResize() {
    var main_slider_item_width = (window.innerWidth >= 641) ? 0.85 : 1;
    var slider = $('#main-slider'),
      _width = $('#main-slider-wrapper').width();

    //	show images
    slider.find( '.slide' ).width( _width * 0.15 );

    //	enlarge first slide
    slider.find( '.slide.active' ).width( _width * main_slider_item_width );

    //	update item width config
    var ratio =  (window.innerWidth >= 641) ? 9 : 16;
    slider.trigger( 'configuration', ['items.height', (_width * ratio * main_slider_item_width)/16] );
    slider.trigger( 'configuration', ['items.width', _width * 0.15] );
  }

  // init carousels
  function carouselInit() {
    /*
    $('.carousel-left').each(function() {
      var $container = $(this);
      var $carousel = $container.find('ul').eq(0);
      if(!$carousel.hasClass('stop')){
        var createCarousel = true;
        var infinite = false;
        var circular = false;
        if ($container.hasClass('inner-carousel')){
          infinite = true;
          circular = true;
        }
        if($container.hasClass('destroy')) {
          createCarousel = false;
        }
        if(createCarousel) {
          $carousel.carouFredSel({
            auto: false,
            align: 'left',
            prev: $container.find('.carousel-btns .prev'),
            next: $container.find('.carousel-btns .next'),
            infinite: infinite,
            circular: circular,
            scroll: {
              duration: 500,
              onBefore: function(){
                if (!$container.find('.carousel-btns .prev').hasClass('disabled')) {
                  $container.removeClass('start');
                  $container.prev().removeClass('start');
                } else {
                  $container.addClass('start');
                  $container.prev().addClass('start');
                }
              },
              onEnd: function(){
                setTimeout(function ()
                {
                  if ($container.find('.carousel-btns .next').hasClass('disabled')) {
                    var item_width  = $carousel.find('> li').eq(0).width() + parseInt($carousel.find('> li').eq(0).css('margin-right'));
                    var width = $container.width() - $($container)[0].offsetLeft;
                    var left = -item_width + (width % item_width);
                    $carousel.animate({left: left}, 300);
                  }
                }, 400);
                //$carousel.trigger( 'configuration', ['items.visible', 'visible']);
              }
            },
            items: {
              visible: 'visible',
              width: 'variable'
            },
            onCreate: function(){
              $carousel.trigger( 'configuration', ['items.visible', '+1']);

              $carousel.find('a').click(function (e)
              {
                e.preventDefault();
              });

              $carousel.swipe({
                excludedElements: "button, input, select, textarea, .noSwipe",
                swipeLeft: function() {
                  if (!$carousel.hasClass('stop')) {
                    if ($container.hasClass('start')){
                      swipeHideDescription($container.prev());
                      if (window.innerWidth < 481 && !($container.hasClass('resizable'))) {
                        var swipeElements = swipeItems($carousel, true);
                        $carousel.trigger('next', swipeElements);
                      }
                    }
                    else {
                      var swipeElements = swipeItems($carousel, true);
                      $carousel.trigger('next', swipeElements);
                    }
                  }
                },
                swipeRight: function() {
                  if (!$carousel.hasClass('stop')) {
                    if (!$container.hasClass('start') && $container.find('.carousel-btns .prev').hasClass('disabled')) {
                      swipeShowDescription($container.prev());
                    }
                    else {
                      var swipeElements = swipeItems($carousel, false);
                      $carousel.trigger('prev', swipeElements);
                    }
                  }
                },
                tap: function(event, target)
                {
                  var link = $(target).closest('li').find('> .node > a');
                  if (!link.hasClass('show-open')) {
                    var href = link.attr('href');
                    window.location = href;
                  }
                  else {
                    if (!$carousel.hasClass('stop') && window.innerWidth >= 769) {
                      if ($container.hasClass('start')) {
                        swipeHideDescription($container.prev());
                        setTimeout(function ()
                        {
                          showOpen(target, false);
                        }, 600);
                      }
                      else {
                        showOpen(target, false);
                      }
                    }
                  }
                }
              });
            }
          });
        }
      }
    });
    */
		//todo
		$('.carousel-vertical').hover(function(){
			var myScroll = new IScroll('.carousel-vertical',{
				mouseWheel: true
			});
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		});
		//===================
    $('.carousel-left').each(function() {
      var $container = $(this);
      var $carousel = $container.find('ul').eq(0);
      if(!$carousel.hasClass('stop')){
        var createCarousel = true;
        if($container.hasClass('destroy')) {
          createCarousel = false;
        }
        if(createCarousel) {
          $container.on('jcarousel:createend', function() {
            $carousel.find('a').click(function (e)
            {
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
                  } else {
                    var swipeElements = '+=' + swipeItems($carousel);
                    $container.jcarousel('scroll', swipeElements);
                  }
                }
              },
              tap: function(event, target)
              {
                if (!$carousel.hasClass('stop')) {
                  if (target.href){
                    if (!$(target).hasClass('show-open')) {
                      window.location = target.href;
                    } else {
                      if (window.innerWidth >= 769) {
                        if ($container.hasClass('start')) {
                          swipeHideDescription($container.prev());
                          setTimeout(function ()
                          {
                            showOpen(target, false);
                          }, 600);
                        }
                        else {
                          showOpen(target, false);
                        }
                      }
                    }
                  } else {
                    var link = $(target).closest('a');
                    if (!link.hasClass('show-open')) {
                      window.location = link.attr('href');
                    }
                    else {
                      if (window.innerWidth >= 769) {
                        if ($container.hasClass('start')) {
                          swipeHideDescription($container.prev());
                          setTimeout(function ()
                          {
                            showOpen(target, false);
                          }, 600);
                        }
                        else {
                          showOpen(target, false);
                        }
                      }
                    }
                  }
                }
              }
            });

          }).on('jcarousel:reloadend', function(event, carousel) {
            $carousel.find('a').click(function (e)
            {
              e.preventDefault();
            });
          }).on('jcarousel:fullyvisiblein', 'li.first', function(event, carousel) {
            if(!$carousel.hasClass('stop') && !$container.hasClass('inner-carousel')) {
              swipeShowDescription($container.prev());
            }
          }).jcarousel({
            animation: {
              duration: 500,
              easing:   'linear'
            }
          })
        }
      }

    });

    $('.carousel-right').each(function() {
      var $container = $(this);
      var $carousel = $container.find('ul').eq(0);
      $container.on('jcarousel:createend', function() {
        $carousel.find('a').click(function (e)
        {
          e.preventDefault();
        });
        $carousel.css('left','0px');
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
            } else {
              var swipeElements = '+=' + swipeItems($carousel);
              $container.jcarousel('scroll', swipeElements);
            }
          },
          tap: function(event, target)
          {
            if (target.href){
              window.location = target.href;
            } else {
              window.location = $(target).closest('a').attr('href');
            }

          }
        });

      }).on('jcarousel:reloadend', function(event, carousel) {
        $carousel.find('a').click(function (e)
        {
          e.preventDefault();
        });
        $carousel.css('left','0px');
      }).on('jcarousel:fullyvisiblein', 'li.first', function(event, carousel) {
        swipeShowDescription($container.prev());
      }).jcarousel({
        animation: {
          duration: 500,
          easing:   'linear'
        },
        rtl: true
      })
    });
  }

  $(document).ready(function (){

    if ($('body').hasClass('show-page')) {
      showTitleMove();
    }

    if ($('body').hasClass('home') && window.innerWidth < 769) {
      $('.carousel-right').addClass('carousel-left').removeClass('carousel-right').removeAttr('dir');
    }

    if ($('body').hasClass('show-page') && window.innerWidth < 481) {
      $('.carousel-right').addClass('carousel-left').removeClass('carousel-right').removeAttr('dir');
    }

    innerCarouselTablet();
    hotValue();

    if (window.innerWidth < 769){
      $('.show-carousel').addClass('destroy');
      $('.show-carousel > ul > li:gt(2)').addClass('hidden');
    }

  });

  $(window).bind(
    'resize',
    function ()
    {
      $('.show-carousel li.active').each(function (){
        var mobile = false;
        if (window.innerWidth < 769) {
          mobile = true;
        }
        showClose($(this), mobile);
      });

      if (window.innerWidth >= 769){
        if ($('.show-carousel').hasClass('destroy')) {
          $('.show-carousel').removeClass('destroy');
          $('.show-carousel > ul > li').removeClass('hidden');
          $('.shows-block a.more').removeClass('hidden');
        }
        if ($('.schedule-carousel').hasClass('destroy')){
          scheduleInit();
          $('.schedule-carousel').removeClass('destroy');
        }
        $('.home .carousel-block-right .carousel-left').each(function (){
          var $container = $(this);
          var $carousel = $container.find('ul').eq(0);
          $container.jcarousel('destroy').addClass('carousel-right').attr('dir', 'rtl').removeClass('carousel-left');
        });

      } else {
        if (!$('.show-carousel').hasClass('destroy')) {
          $('.show-carousel').jcarousel('destroy');
          $('.show-carousel').addClass('destroy');
          $('.show-carousel > ul > li:gt(2)').addClass('hidden');
        }
        if (!$('.schedule-carousel').hasClass('destroy')) {
          $('.schedule-carousel').trigger('_cfs_triggerEvent', ['destroy', true]);
          $('.schedule-carousel').addClass('destroy');
        }
        $('.home .carousel-block-right .carousel-right').each(function (){
          var $container = $(this);
          var $carousel = $container.find('ul').eq(0);
          $container.jcarousel('destroy').addClass('carousel-left').removeAttr('dir').removeClass('carousel-right');
        });
        if ($('body').hasClass('home') || $('body').hasClass('show-page')){
          $('header .tab-item.active').removeClass('active').removeAttr('style');
          $(".tab .no-refresh.active").removeClass('active');
        }
      }

      if (window.innerWidth >= 481){
        $('.show-page .carousel-block-right .carousel-left').each(function (){
          var $container = $(this);
          var $carousel = $container.find('ul').eq(0);
          $container.jcarousel('destroy').addClass('carousel-right').attr('dir', 'rtl').removeClass('carousel-left');
        });
      } else {
        $('.show-page .carousel-block-right .carousel-right').each(function (){
          var $container = $(this);
          var $carousel = $container.find('ul').eq(0);
          $container.jcarousel('destroy').addClass('carousel-left').removeAttr('dir').removeClass('carousel-right');
        });
      }

      innerCarouselTablet();
      carouselInit();
      changeColumnItemHeight();
      sliderResize();

      if ($('body').hasClass('show-page')) {
        showTitleMove();
      }

      if (window.innerWidth >= 481){
        if ($('.catch-up-explore-carousel').hasClass('destroy')) {
          catchUpInit();
          $('.catch-up-explore-carousel').removeClass('destroy');
          $('.catch-up-explore-carousel .carousel-description-item .title').removeClass('show-color dark hover-avail');
          $('.catch-up-explore-carousel .carousel-block').removeClass('active');
        }
      } else {
        if (!$('.catch-up-explore-carousel').hasClass('destroy')) {
          $('.catch-up-explore-carousel').trigger('_cfs_triggerEvent', ['destroy', true]);
          $(".catch-up-explore-buttons a").removeClass('active');
          $(".catch-up-explore-buttons").removeClass('catch-up explore');
          $(".catch-up-explore-buttons").addClass('catch-up');
          $(".catch-up-explore-buttons a.catch-up").addClass('active');
          $('.catch-up-explore').removeClass('light');
          $('.catch-up-explore-carousel .carousel-description-item .title').addClass('show-color dark hover-avail');
          $('.catch-up-explore-carousel').addClass('destroy');
        }
      }

      return false;
    }
  );

  $(window).load(function ()
  {
    innerCarouselTablet();
    carouselInit();
    changeColumnItemHeight();

    if (window.innerWidth >= 481) {
      catchUpInit();
    }
    else {
      $('.schedule-carousel').addClass('destroy');
      $('.catch-up-explore-carousel').addClass('destroy');
      $('.catch-up-explore-carousel .carousel-description-item .title').addClass('show-color dark hover-avail');
    }

    $('.timer').each(function ()
    {
      if ($(this).attr('data-timer')) {
        var timer = parseInt($(this).attr('data-timer'));
        countDown(this, timer);
      }
    });

    if (window.innerWidth < 769) {
      $('.show-open').click(function (e)
      {
        e.preventDefault();
        if (!$(this).closest('li').hasClass('active')){
          showOpen($(this).closest('li'), true);
        }
        else {
          showClose($(this).closest('li'), true);
        }
      });
    } else {
      scheduleInit();
    }

    // after page load initialization main-slider on the homepage

    /*$('#main-slider').carouFredSel({
      width: '100%',
      align: false,
      items: 2,
      items: {
        width: $('#main-slider-wrapper').width() * 0.1,
        height: (window.innerWidth >= 641) ? ($('#main-slider-wrapper').width() * 9 * 0.9) / 16 : ($('#main-slider-wrapper').width() * 16) / 16,
        visible: 1,
        minimum: 1
      },
      scroll: {
        items: 1,
        duration: 800,
        timeoutDuration : 500000,
        pauseOnHover: true,
        onBefore: function(data) {
          var main_slider_item_width = (window.innerWidth >= 641) ? 0.9 : 1;
          //    block next-button
          $('.next-button').addClass('disabled');
          $('.next-button').fadeOut(100);
          //	find current and next slide
          var currentSlide = $('.slide.active', this),
            nextSlide = data.items.visible,
            _width = $('#main-slider-wrapper').width();

          //	resize currentslide to small version
          currentSlide.stop().animate({
            width: _width * 0.15
          }, 800);
          currentSlide.removeClass( 'active' );

          //	hide current block
          data.items.old.add( data.items.visible ).find( '.node' ).stop().fadeOut();

          //	animate clicked slide to large size
          nextSlide.addClass( 'active' );
          nextSlide.stop().animate({
            width: _width * main_slider_item_width
          }, 800);
        },
        onAfter: function(data) {
          //	show active slide block
          data.items.visible.last().find( '.node' ).stop().fadeIn();

          //unblock next-button
          $('.next-button').fadeIn(500, function() {
            $('.next-button').removeClass('disabled');
          });
        }
      },
      onCreate: function(data){
        $('#main-slider .slide').each(function(){
          var img = $(this).find('img');
          var src = img.attr('src');
          var position = img.attr('data-position');
          $(this).css({'background-position' : position+' 0px', 'background-size' : 'auto 100%', 'background-image' : 'url('+ src+')'});
        });

        $('#main-slider a').click(function (e)
        {
          e.preventDefault();
        });

        $('#main-slider').swipe({
          excludedElements: "button, input, select, textarea, .noSwipe",
          swipeLeft: function() {
            $('#main-slider').trigger('next', 1);
        },
        swipeRight: function() {
          $('#main-slider').trigger('prev', 1);
        },
        tap: function(event, target)
        {
          if (target.href) {
            window.location = target.href;
          }
        }
        });
        var main_slider_item_width = (window.innerWidth >= 641) ? 0.9 : 1;
        //	clone images for better sliding and insert them dynamacly in slider
        //var newitems = $('.slide',this).clone( true ),
          _width = $('#main-slider-wrapper').width();

        //$(this).trigger( 'insertItem', [newitems, newitems.length, false] );

        //	show images
        $('.slide', this).fadeIn();
        $('.slide:first-child', this).addClass( 'active' );
        $('.slide', this).width( _width * 0.1 );

        //	enlarge first slide
        $('.slide:first-child', this).animate({
          width: _width * main_slider_item_width
        });

        //	show first title block and hide the rest
        $(this).find( '.node' ).hide();
        $(this).find( '.slide.active .node' ).stop().fadeIn();
      }
    });*/

    //	click next-button event
    $('.next-button').click(function() {
      if (!$(this).hasClass('disabled')){
        var next = $('#main-slider .slide.active').next('.slide');
        $('#main-slider').trigger( 'slideTo', [next] );
      }
    });

    //show carousel more-button click
    $('.shows-block a.more').click(function(e) {
      e.preventDefault();
      var index = $(".show-carousel > ul > li.hidden").index() + 3;
      $('.show-carousel > ul > li:lt('+ index + ')').removeClass('hidden');
      index = $(".show-carousel > ul > li.hidden").index();
      if (index == -1) {
        $('.shows-block a.more').addClass('hidden');
      }
    });

    //click to close button when show-info-block open
    $('.show-info-block .close-button').click(function() {
      var item = $(this).closest('li');
      showClose(item);
    });

    //click to link when show-info-block open
    $('.show-carousel .show-info-block > div a').click(function() {
      window.location = this.href;
    });

    //click on header tabs
    $(".tab .no-refresh").click(function (e)
    {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $('header .tab-item.active').slideUp(1000, function () {
          $('header .tab-item.active').removeClass('active').removeAttr('style');
          $(".tab .no-refresh.active").removeClass('active');
        });
      } else {
        var index = $(".tab .no-refresh").index(this);
        $('header .tab-item.active').slideUp(1000, function () {
          $(".tab .no-refresh.active").removeClass('active');
          $('header .tab-item.active').removeClass('active').removeAttr('style');
        });
        $('.search a').removeClass('active');
        $('.search-input-block').removeClass('active');
        $('header .tab-item:eq(' + index + ')').slideDown(1000, function () {
          $('header .tab-item:eq(' + index + ')').addClass('active');
          $('header .tab .no-refresh:eq(' + index + ')').addClass('active');
        });

      }
    });

    //click on search icon
    $(".search a").click(function (e)
    {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.search-input-block').removeClass('active');
      } else {
        $(".tab .no-refresh").removeClass('active');
        $('header .tab-item').removeClass('active');
        $(this).addClass('active');
        $('.search-input-block').addClass('active');
        $('#search-input').focus();
      }
    });

    $(".description-button").click(function (e)
    {
      e.preventDefault();
      swipeHideDescription($(this).parent());
    });

    $(".schedule-buttons a").click(function (e)
    {
      e.preventDefault();
      if (!$(this).hasClass('active')) {
        var current_class = $(this).attr('data-class');
        $(".schedule-buttons a").removeClass('active');
        $(this).parent().removeClass('on-tonight on-now');
        $(this).parent().addClass(current_class);
        $(this).addClass('active');
      }
    });

    $(".catch-up-explore-buttons a").click(function (e)
    {
      e.preventDefault();
      if (!$(this).hasClass('active')) {
        var current_class = $(this).attr('data-class');
        $(".catch-up-explore-buttons a").removeClass('active');
        $(this).parent().removeClass('catch-up explore');
        $(this).parent().addClass(current_class);
        $(this).addClass('active');
        if($(this).hasClass('light')){
          $(this).closest('.catch-up-explore').addClass('light');
        }
        else {
          $(this).closest('.catch-up-explore').removeClass('light');
        }
      }
    });

    $(".menu-open a").click(function (e)
    {
      e.preventDefault();
      if (!$(this).hasClass('active')) {
        $(this).parent().addClass('active');
        $(this).addClass('active');
        $('.show-menu-tab').addClass('active');
      }
      else {
        $(this).parent().removeClass('active');
        $(this).removeClass('active');
        $('.show-menu-tab').removeClass('active');
      }
    });

    $(".main-menu-open a").click(function (e)
    {
      e.preventDefault();
      if (!$(this).hasClass('active')) {
        openMainMenu();
      }
      else {
        closeMainMenu();
      }
    });

    $('.header-small-menu .expanded > a').click(function (e)
    {
      e.preventDefault();
      if (!$(this).hasClass('active')) {
        $(this).parent().addClass('active');
        $(this).addClass('active');
      }
      else {
        $(this).parent().removeClass('active');
        $(this).removeClass('active');
      }
    });

    $(".show-menu .expanded > a,.show-menu .expanded > ul").hover(
      function () {
        $(this).parent().addClass('active');
        $(this).addClass('active');
      },
      function () {
        $(this).removeClass('active');
        $(this).parent().removeClass('active');
      }
    );

    $('.more-button a').click(function (e)
    {
      e.preventDefault();
      if ($(this).hasClass('more')) {
        $(this).removeClass('more');
        $(this).addClass('less');
        $('.episodes-list ul').addClass('open');
      }
      else {
        $(this).removeClass('less');
        $(this).addClass('more');
        $('.episodes-list ul').removeClass('open');
      }
    });

    $('.catch-up-explore-carousel .carousel-description-item .title').click(function (e)
    {
      if(!$(this).closest('.carousel-block').hasClass('active')) {
        $('.catch-up-explore-carousel .carousel-block.active .title').addClass('dark');
        $('.catch-up-explore-carousel .carousel-block').removeClass('active');
        $(this).closest('.carousel-block').addClass('active');
        $(this).removeClass('dark');
        carouselInit();
      }
      else {
        $(this).closest('.carousel-block').removeClass('active');
        $(this).addClass('dark');
      }
    });

    $('.consumptionator-page .social-more a').click(function (e)
    {
      e.preventDefault();
      $('.consumptionator-page .video-block .video-chat').toggle();
      $('.consumptionator-page .video-block .player').toggle();
      $('.consumptionator-page .video-block .coming-up-next').attr('style', 'display: none;');
      $('.consumptionator-page .social-block .social').toggle();
      $('.consumptionator-page .social-block .video-link').toggle();
      $('.consumptionator-page .social-block .social-more').toggle();
    });

    $('.consumptionator-page .video-block .player').click(function (e)
    {
      $('.consumptionator-page .video-block .coming-up-next').toggle();
    });

    $('.consumptionator-page .video-block .coming-up-next').click(function (e)
    {
      $('.consumptionator-page .video-block .coming-up-next').toggle();
    });

    $('.consumptionator-page .video-link a').click(function (e)
    {
      e.preventDefault();
      $('.consumptionator-page .social-block .video-link').toggle();
      $('.consumptionator-page .video-block .player').toggle();
      $('.consumptionator-page .video-block .video-chat').toggle();
      $('.consumptionator-page .social-block .social').toggle();
      $('.consumptionator-page .social-block .social-more').toggle();
    });

    $('.consumptionator-page .video-block .resize-video-button').click(function (e)
    {
      e.preventDefault();
      if ($(this).hasClass('active')){
        $('.consumptionator-page .video-block').removeClass('full-size');
        $(this).removeClass('active');
      }
      else {
        $('.consumptionator-page .video-block').addClass('full-size');
        $(this).addClass('active');
      }
    });

  });

  //////////////////////////////////////
  /// NEW CODE STARTS HERE
  /////////////////////////////////////

  // Describe main application object
  var USANetwork = {
    sliderHome: null,
    init: function() {

      // The main homepage slider initialization
      this.sliderHome = $('.slider').bxSlider({
        pager: false,
        controls: true,
        auto: true,
        speed: 1000,
        pause: 8000,
        nextSelector: '#next',
        prevSelector: '#prev',
        nextText: 'Next →',
        prevText: '← Prev',
        useCSS: false
      });
    }
  };

  $(document).ready(function() {
    USANetwork.init();
  });

}(jQuery));
