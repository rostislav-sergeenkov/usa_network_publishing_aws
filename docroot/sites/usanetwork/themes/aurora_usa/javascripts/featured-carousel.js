(function ($) {
  Drupal.behaviors.featured_carousel = {
    attach: function (context) {

      if (window.innerWidth < window_size_tablet_portrait){
        $('.featured-carousel').addClass('destroy');
        $('.featured-carousel > ul > li:gt(1)').addClass('hidden');
      }

      if ($('.featured-block').attr('data-url')) {
        var back_url = $('.featured-block').attr('data-url');
        $('.featured-block').attr('data-url').css({'background' : 'url('+ back_url +') no-repeat', 'background-size' : 'cover'});
      }

      $(window).bind('resize', function () {

        if (window.innerWidth >= window_size_tablet_portrait){
          if ($('.featured-carousel').hasClass('destroy')) {
            $('.featured-carousel').removeClass('destroy');
            $('.featured-carousel > ul > li').removeClass('hidden');
            $('.featured-block a.more-button.close').removeClass('close').addClass('more');
          }
        } else {
          if (!$('.featured-carousel').hasClass('destroy')) {
            $('.featured-carousel').jcarousel('destroy');
            $('.featured-carousel').addClass('destroy');
            $('.featured-carousel > ul > li:gt(1)').addClass('hidden');
          }
        }

      });

      // Show carousel more-button click
      $('.featured-block > a.more-button').click(function(e) {

        e.preventDefault();
        if ($(this).hasClass('more')) {
          $('.featured-carousel > ul > li').removeClass('hidden');
          $(this).removeClass('more').addClass('close');
        } else {
          $('.featured-carousel > ul > li:gt(1)').addClass('hidden');
          $(this).removeClass('close').addClass('more');
        }
      });

      /*function featuredRebuiltTwoOne() {
        $('.featured-carousel li').each(function(){
          if(!$(this).hasClass('last')){
            $(this).after('<li class="additional-li"></li>');
            $(this).find('.node').eq(1).appendTo($(this).next('li'));
          } else {
            $(this).before('<li class="additional-li additional-li-last"></li>');
            $(this).find('.node').eq(0).appendTo($(this).prev('li'));
          }
        });
        $('.featured-carousel').addClass('mobile');
      }

      function featuredRebuiltOneTwo() {
        $('.featured-carousel li.additional-li').each(function(){
          if(!$(this).hasClass('additional-li-last')){
            $(this).find('.node').appendTo($(this).prev('li'));
            $(this).remove();
          } else {
            $(this).find('.node').prependTo($(this).next('li'));
            $(this).remove();
          }
        });
        $('.featured-carousel').removeClass('mobile');
      }

      if (window.innerWidth < window_size_mobile && !$('.featured-carousel').hasClass('mobile')) {
        featuredRebuiltTwoOne();
      }

      $(window).bind('resize', function () {
        if (window.innerWidth >= window_size_mobile){
          if ($('.featured-carousel').hasClass('mobile')) {
            featuredRebuiltOneTwo();
          }
        } else {
          if (!$('.featured-carousel').hasClass('mobile')) {
            featuredRebuiltTwoOne();
          }
        }

        if (window.innerWidth >= window_size_tablet_portrait){
          $('.carousel-block-right .carousel-left').each(function (){
            var $container = $(this);
            var $carousel = $container.find('ul').eq(0);
            $container.jcarousel('destroy').addClass('carousel-right').removeClass('carousel-left');
          });
        } else {
          $('.carousel-block-right .carousel-right').each(function (){
            var $container = $(this),
                $carousel = $container.find('ul').eq(0);
            $container.jcarousel('destroy').addClass('carousel-left').removeClass('carousel-right');
          });
        }

      });*/
    }
  };

}(jQuery));
