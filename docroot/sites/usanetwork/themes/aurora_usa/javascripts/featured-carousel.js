(function ($) {
  Drupal.behaviors.featured_carousel = {
    attach: function (context) {

      function featuredRebuiltTwoOne() {
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
            $container.jcarousel('destroy').addClass('carousel-right').attr('dir', 'rtl').removeClass('carousel-left');
          });
        } else {
          $('.carousel-block-right .carousel-right').each(function (){
            var $container = $(this),
                $carousel = $container.find('ul').eq(0);
            $container.jcarousel('destroy').addClass('carousel-left').removeAttr('dir').removeClass('carousel-right');
          });
        }

      });
    }
  };

}(jQuery));