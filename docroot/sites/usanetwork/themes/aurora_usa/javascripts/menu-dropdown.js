(function ($) {
  Drupal.behaviors.usanetwork_menu_dropdown = {
    attach: function(context){

      var tablet = false;
      if (window.innerWidth < window_size_tablet_portrait) {
        tablet = true;
      }

      function getShowTitleOffset(){
        if ($('body').hasClass('usa-tv-show')) {
          if ($('.tab-item').hasClass('active')) {
            show_title_offset = $('.show-title-block-wrapper').offset().top;
          }
        }
      }

      function setShowTitleOffset(){
        if ($('body').hasClass('usa-tv-show')) {
          if ($(window).scrollTop() > show_title_offset) {
            $('.show-title-block-wrapper').addClass('fixed');
            $('.show-menu-tab').addClass('fixed');
          } else {
            $('.show-title-block-wrapper').removeClass('fixed');
            $('.show-menu-tab').removeClass('fixed');
          }
        }
      }

      function showTitleMove() {
        if (window.innerWidth < window_size_tablet_portrait && !($('.show-title-block-wrapper .show-title-block').hasClass('inner'))) {
          $('.show-title-block-wrapper .show-title-block').addClass('secondary');
          $('.show-title-block-wrapper .show-title-block').addClass('inner');
          $('.show-title-block-wrapper .show-title-block').appendTo('.header-nav-bar .show-title-wrapper');
        }
        else if(window.innerWidth >= window_size_tablet_portrait && ($('.header-nav-bar .show-title-block').hasClass('inner'))) {
          $('.header-nav-bar .show-title-block').removeClass('secondary');
          $('.header-nav-bar .show-title-block').removeClass('inner');
          $('.header-nav-bar .show-title-block').appendTo('.show-title-block-wrapper');
        }
      }

      function showMenuMove() {
        if (window.innerWidth < window_size_tablet_portrait && !($('.show-menu').hasClass('inner'))) {
          $('.show-menu-tab .show-menu').addClass('inner');
          $('.show-menu-tab .show-menu').appendTo('.header-show-menu');
          $('.nav-bar-tabs .expanded > a:not(.no-refresh)').bind('click', tabNavHandler);
          $(".show-menu > li > a").unbind('hover');
          $('.show-menu > li, .show-menu > li > a').removeClass('active');
        }
        else if(window.innerWidth >= window_size_tablet_portrait && ($('.show-menu').hasClass('inner'))) {
          $('.header-show-menu .show-menu').removeClass('inner');
          $('.nav-bar-tabs .expanded > a:not(.no-refresh)').unbind('click');
          $('.header-show-menu .show-menu').appendTo('.show-menu-tab');
          $(".show-menu > li > a").bind('hover', showMenuHoverItem);
          $('.show-menu > li, .show-menu > li > a').removeClass('active');
          $('.show-menu > li.expanded:eq(0)').addClass('active').children().addClass('active');
        }
      }

      var tabNavHandler = function (e) {
        e.preventDefault();

        var tab = $(this),
            tabs = $('header .tab .no-refresh'),
            tab_containers = $('header .tab-item'),
            tab_container_act = $('header .tab-item.active'),
            index = $(".tab .no-refresh").index(tab),
            animation_speed = 350;

        var openTab = function() {
          $(".tab .no-refresh").unbind('click');

          tab.addClass('active').attr('data-state', 'active');
          tab_containers.eq(index).hide().slideDown(animation_speed, function() {
            $(".tab .no-refresh").bind('click', tabNavHandler);
            getShowTitleOffset();
          }).addClass('active');

          // HIDE 'SHOW MENU' WHEN OPEN THIS
          $(".menu-open a").parent().removeClass('active');
          $(".menu-open a").removeClass('active');
          $('.show-menu-tab').slideUp(350).removeClass('active');

          // HIDE SEARCH BLOCK
          $('.search-input-block, .search a').removeClass('active');
        };

        if (window.innerWidth >= window_size_tablet_portrait) {
          if (tab.attr('data-state') == 'active') {
            tab.removeClass('active').attr('data-state', '');
            tab_containers.eq(index).slideUp(animation_speed, function(){
              getShowTitleOffset();
            }).removeClass('active');
          } else {
            tabs.removeClass('active').attr('data-state', '');
            if (tab_container_act.length) {
              $(".tab .no-refresh").unbind('click');
              tab_container_act
                  .slideUp(animation_speed, function() { $(".tab .no-refresh").unbind('click'); openTab(); })
                  .removeClass('active');
            } else {
              openTab();
            }
          }
        }

        if (window.innerWidth < window_size_tablet_portrait && $(this).parent().hasClass('expanded')) {
          if (!$(this).hasClass('active')) {
            $(this).parent().addClass('active');
            $(this).addClass('active');
          } else {
            $(this).parent().removeClass('active');
            $(this).removeClass('active');
          }
        }

      };

      var menuOpenHandler = function (e) {
        if (e) {
          e.preventDefault();
        }

        var menu_link = $(".main-menu-open a"),
            menu_link_container = $(".main-menu-open"),
            usa_logo = $('.usa-logo'),
            search_container = $('.search'),
            search_link = $('.search a'),
            search_input_block = $('.search-input-block'),
            title_wrapper = $('.show-title-wrapper'),
            menu = $('header .nav-bar-tabs');

        // Open main menu action
        var openMainMenu = function() {
          menu_link_container.addClass('active');
          menu_link.addClass('active');
          search_link.addClass('active');
          search_container.addClass('active');
          search_input_block.addClass('active');
          //usa_logo.addClass('active');
          menu.addClass('active');
          if ($('body').hasClass('usa-tv-show')) {
            menu_link.addClass('show-color');
          }
          title_wrapper.toggle();
        };

        // Close main menu action
        var closeMainMenu = function() {
          menu_link_container.removeClass('active');
          menu_link.removeClass('active show-color');
          search_link.removeClass('active');
          search_container.removeClass('active');
          search_input_block.removeClass('active');
          //usa_logo.removeClass('active');
          menu.removeClass('active');
          title_wrapper.toggle();
        };

        if (!menu_link.hasClass('active')) {
          openMainMenu();
        } else {
          closeMainMenu();
        }
      };

      var showMenuOpenHandler = function (e) {
        e.preventDefault();

        if (!$(this).hasClass('active')) {
          $(this).parent().addClass('active');
          $(this).addClass('active');
          $('.show-menu-tab').slideDown(350).addClass('active');

          // HIDE MAIN NAVIGATION TABS
          $('header .tab .no-refresh').removeClass('active').attr('data-state', '');
          $('header .tab-item.active').removeClass('active').slideUp(450, function(){
            getShowTitleOffset();
            setShowTitleOffset();
          });

          // HIDE SEARCH BLOCK
          $('.search-input-block, .search a').removeClass('active');
        }
        else {
          $(this).parent().removeClass('active');
          $(this).removeClass('active');
          $('.show-menu-tab').slideUp(350).removeClass('active');
        }
      };

      var showMenuHoverItem = function () {
        $('.show-menu > li, .show-menu > li > a').removeClass('active');
        $(this).parent().addClass('active');
        $(this).addClass('active');
      };

      var seeitClose = function () {
        $('.seeit-iframe-wrapper').remove();
      };


      showTitleMove();
      showMenuMove();

      $(".tab .no-refresh").bind('click', tabNavHandler);
      $(".main-menu-open a").bind('click', menuOpenHandler);
      $(".menu-open a").bind('click', showMenuOpenHandler);

      $(window).load(function () {
        if ($('body').hasClass('usa-tv-show') && window.innerWidth >= window_size_tablet_portrait) {
          getShowTitleOffset();
          $(".show-menu > li > a").bind('hover', showMenuHoverItem);
          $('.show-menu > li.expanded:eq(0)').addClass('active').children().addClass('active');
        }
        $('.calendar-reminder').click(function() {
          if(getInternetExplorerVersion()!==-1){
            $('.seeit-icon-close').bind('click', seeitClose);
          }
        });
      });

      $(window).bind('resize', function () {

        showTitleMove();
        showMenuMove();

        if (window.innerWidth < window_size_tablet_portrait && !tablet) {
          if ($('body').hasClass('page-home') || $('body').hasClass('usa-tv-show')) {
            $('header .tab-item.active').removeClass('active').removeAttr('style');
            $(".tab .no-refresh.active").removeClass('active').attr('data-state', '');
          }
          tablet = true;
        }
        if (window.innerWidth >= window_size_tablet_portrait && tablet) {
          if ($('body').hasClass('page-home') || $('body').hasClass('usa-tv-show')) {
            if($(".main-menu-open").hasClass('active')) {
              menuOpenHandler();
              $('.nav-bar-tabs .expanded.active').removeClass('active');
              $('.nav-bar-tabs .expanded > a.active').removeClass('active');
            }
          }
          tablet = false;
        }
        if (window.innerWidth >= window_size_tablet_portrait) {
          getShowTitleOffset();
          setShowTitleOffset();
        }
        if (window.innerWidth < window_size_tablet_portrait) {
          if ($('body').hasClass('usa-tv-show')){
            $('.show-menu-tab.active').removeClass('active').removeAttr('style');
            $(".menu-open a").parent().removeClass('active');
            $(".menu-open a").removeClass('active');
          }
        }
        if (window.innerWidth < window_size_tablet_portrait && $('.show-title-block-wrapper').hasClass('fixed')) {
          $('.show-title-block-wrapper').removeClass('fixed');
          $('.show-menu-tab').removeClass('fixed');
        }
      });

      $(window).on("scroll", function() {
        if (window.innerWidth >= window_size_tablet_portrait) {
          setShowTitleOffset();
        }
      });

    }
  }
})(jQuery);
