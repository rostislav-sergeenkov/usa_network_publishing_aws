// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.video_dropdowns = {

    attach: function (context, settings) {

      $('body').once('usaVideo', function() {

        // all shows menu toggle
        $('.usa-secondary-menu .shows > li.first').click(function() {
          $(this).find('.item-list').toggle();
        });

        $('.usa-secondary-menu .categories > li.more').hover(function() {
          $(this).find('.item-list .more').toggle();
          $(this).toggleClass('open');
        });


        $filter_menus = $('.usa-secondary-menu .content > .item-list:nth-child(2)');
        $filter_menus.each(function(index, value){
          $filter_menu = $(this);
          $filter_menu.addClass('filter-dropdown_v2')
          // grab active item and copy it as a lable
          // create a div classed 'filter-menu' to contain the options
          $menu_item = $(this).find('.categories > li.active > a');
          if($menu_item.text() == '') {
            $menu_item = $(this).find('.categories > li.first > span');
          }

          $filter_menu.find('.menu-label').remove();
          $menu_label = '<div class="menu-label">' + $menu_item.text() + '</div>';

          $($filter_menu).find('.categories').addClass('filter-menu').before($menu_label);

          $(this).find('.menu-label').click(function () {
            $filter_menus.not($(this)).parent().removeClass("open");
            $(this).parent().toggleClass("open");
          });
        });

        video_dropdown_class_toggle();
        $(window).resize(function(){
          video_dropdown_class_toggle();
        });
        function video_dropdown_class_toggle() {
          $drop_elements = $('.usa-secondary-menu .content > .item-list:nth-child(2)');
          if ($drop_elements.css("font-size") == "20px" ){
            $drop_elements.find('.categories').removeClass('filter-menu');
            $drop_elements.removeClass('filter-dropdown_v2');
          } else {
            $drop_elements.find('.categories').addClass('filter-menu');
            $drop_elements.addClass('filter-dropdown_v2');
          }
        }
      });

      // video items toggler
      var $expandable_container = $('.view.expandable-container');
      $expandable_container.each(function() {
        var $self = $(this);
        var $container = $self.find('.view-content');
        var $toggler = $self.find('.expandable-toggle li');

        var i = 0;

        if($toggler.text() != 'more') {
          $toggler.addClass('less').text('close');
          $self.addClass('expanded');
          i = 1;
        }

        $toggler.click(function() {
          if($toggler.text() == 'close') {
            i = 1;
            $container.find('.item-list').hide();
            $container.find('.item-list:first-child').css('display','block');
            $toggler.text('more');
            $toggler.removeClass('less').addClass('more');
            $self.removeClass('expanded');
          } else if ($toggler.text() == 'more') {
            $toggler.removeClass('less').addClass('more');
            $container.find('.item-list:first-child').css('display','block');
            $count = $container.find('.item-list').length - 1;
            $container.find('.item-list:eq('+ i + ')').show();
            if($count == i) {
              $toggler.text('close');
              $toggler.addClass('less').removeClass('more');
              $self.addClass('expanded');
              i = 1;
            }
            i++;
          }
        });
      });

      // tve help messaging

      $tve_toggler = $('.tve-help-link');
//    $('.tve-help-link').click(function() {
      $tve_toggler.click(function() {
        if($('.tve-help-link').hasClass('selected')) {
          $('.tve-help-link').removeClass('selected');
          $('.tve-help').hide();
          $('.video-player-wrapper #player').find('div').removeAttr('style');
          $('.video-player-wrapper #player').find('a').removeAttr('style');
          $('.video-player-wrapper img').removeAttr('style');
          $('.video-player-wrapper').find('.locked-msg').removeAttr('style');
//          $('.tve-help-link img').attr('src','/sites/usanetwork/themes/aurora_usa/images/info_gray.png');
          $('.featured-asset').removeClass('tve-overlay');
        }
        else {
          $('.tve-help-link').addClass('selected');
          $('.tve-help').show();
          $('.video-player-wrapper').find('.locked-msg').hide();
          $('.video-player-wrapper #player').find('div').css('opacity', 0.1);
          $('.video-player-wrapper #player').find('a').css('opacity', 0);
          $('.video-player-wrapper img').css('opacity', 1);
//          $('.tve-help-link img').attr('src','/sites/usanetwork/themes/aurora_usa/images/info_blue.png');
          $('.featured-asset').addClass('tve-overlay');
        }
      });

      $('.tve-close').click(function() {
        $('.tve-help-link').removeClass('selected');
        $('.tve-help').hide();
        $('.video-player-wrapper #player').find('div').removeAttr('style');
        $('.video-player-wrapper #player').find('a').removeAttr('style');
        $('.video-player-wrapper img').removeAttr('style');
        $('.video-player-wrapper').find('.locked-msg').removeAttr('style');
//        $('.tve-help-link img').attr('src','/sites/usanetwork/themes/aurora_usa/images/info_gray.png');
        $('.featured-asset').removeClass('tve-overlay');
      });
    }
  };

}(jQuery));
