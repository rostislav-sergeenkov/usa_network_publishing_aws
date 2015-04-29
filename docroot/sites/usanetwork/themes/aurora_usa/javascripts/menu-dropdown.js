(function ($) {
  Drupal.behaviors.usanetwork_menu_dropdown = {
    stickyHeader: function() {
      var $header_full = $('.region-header'),
          $ad = $('.ad-leaderboard'),
          $header_submenu = $('.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu'),
          $navbar = $('.header-nav-bar'),
          ad_h = $ad.height(),
          navbar_h = $navbar.height(),
          header_full_h = $header_full.height(),
          scroll_top = $(window).scrollTop(),
          styles = {
            'position': 'fixed',
            'z-index': '9999',
            'width': '100%',
            'top': '0'
          }

      if ($('body').hasClass('usa-tv-show')) {
        if ((scroll_top > (ad_h + navbar_h + 20)) && ($(window).width() > 768)) {
          $header_submenu.css(styles);
          $ad.css('margin-bottom', navbar_h);
        } else if (scroll_top < (ad_h + navbar_h + 20)) {
          $header_submenu.attr('style', '');
          $ad.css('margin-bottom', 0);
        }
      } else {
        if ((scroll_top > ad_h + 20) && ($(window).width() > 768)) {
          $header_full.css(styles);
          $ad.css('margin-bottom', header_full_h);
        } else if (scroll_top < ad_h + 20) {
          $header_full.attr('style', '');
          $ad.css('margin-bottom', 0);
        }
      }
    },

    tabItemScroll: function() {
      var $tab = $('.tab-item.active'),
          tab_h = $tab.height(),
          ad_h = $('.ad-leaderboard').height() + 20,
          window_h = $(window).height(),
          header_h = $('.header-nav-bar').height(),
          ad_offset = ad_h - $(window).scrollTop(),
          scroll_h = window_h - header_h - ad_offset,

          destroyScroll = function() {
            $('.tab-item').mCustomScrollbar('destroy');
            setTimeout(function() {
              $('.tab-item').css('height', 'auto');
            }, 500);
          };

      if (tab_h + header_h + ad_offset > window_h) {
        $tab.mCustomScrollbar({
          setHeight: scroll_h,
          scrollInertia: 0,
          callbacks: {
            whileScrolling: function(){
              if (this.mcs.topPct == 100) {
                $('.nav-bar-tabs .tab a.active').removeClass('active').attr('data-state', '');
                $('.tab-item.active').slideUp(350).removeClass('active');

                destroyScroll();
              }
            }
          }
        });
      } else {
        destroyScroll();
      }
    },

    attach: function(context){
      var tablet = false;

      if (window.innerWidth < window_size_tablet_portrait) {
        tablet = true;
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
        }
        else if(window.innerWidth >= window_size_tablet_portrait && ($('.show-menu').hasClass('inner'))) {
          $('.header-show-menu .show-menu').removeClass('inner');
          $('.nav-bar-tabs .expanded > a:not(.no-refresh)').unbind('click');
          $('.header-show-menu .show-menu').appendTo('.show-menu-tab');
          $('.show-menu > li, .show-menu > li > a').removeClass('active');
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

            Drupal.behaviors.usanetwork_menu_dropdown.tabItemScroll();
          }).addClass('active');

          // HIDE SIGN TAB IF EXIST
          if ($('.page-videos .sign-in-link').length) {
            $('.page-videos .sign-in-link').removeClass('active');
            $('.tab-item.log-in').slideUp(350).removeClass('active');
          }

          // HIDE SEARCH BLOCK
          $('.search-input-block, .search a').removeClass('active');
        };

        if(!$('body').hasClass('consumptionator-page')){
          if (window.innerWidth >= window_size_tablet_portrait) {
            if (tab.attr('data-state') == 'active') {
              tab.removeClass('active').attr('data-state', '');
              tab_containers.eq(index).slideUp(animation_speed).removeClass('active');
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
        } else {
          if (tab.attr('data-state') == 'active') {
            tab.removeClass('active').attr('data-state', '');
            tab_containers.eq(index).slideUp(animation_speed).removeClass('active');

            if (tab_containers.eq(index).hasClass('mCustomScrollbar')) {
              tab_containers.eq(index).mCustomScrollbar('destroy');
              setTimeout(function() {
                tab_containers.eq(index).css('height', 'auto');
              }, 500);
            }
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

        if (window.innerWidth < window_size_tablet_portrait && $(this).hasClass('no-refresh') && this.href) {
          window.location = this.href;
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

      var seeitClose = function () {
        $('.seeit-iframe-wrapper').remove();
      };

      showTitleMove();
      showMenuMove();

      $(".tab .no-refresh").removeClass('active').bind('click', tabNavHandler);
      $(".main-menu-open a").bind('click', menuOpenHandler);

      $(window).load(function () {
        Drupal.behaviors.usanetwork_menu_dropdown.stickyHeader();

        $('.calendar-reminder').click(function() {
          if(getInternetExplorerVersion()!==-1){
            $('.seeit-icon-close').bind('click', seeitClose);
          }
        });
      });

      $(window).bind('resize', function () {
        Drupal.behaviors.usanetwork_menu_dropdown.stickyHeader();

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
              $('.nav-bar-tabs .expanded.active').removeClass('active');
              $('.nav-bar-tabs .expanded > a.active').removeClass('active');
            }
          }

          tablet = false;
        }

      });

      $(window).on("scroll", function() {
        Drupal.behaviors.usanetwork_menu_dropdown.stickyHeader();

        if (!$('.tab-item').hasClass('mCustomScrollbar') && window.innerWidth >= window_size_tablet_portrait && !$('body').hasClass('consumptionator-page')) {
          $('.nav-bar-tabs .tab a.active').removeClass('active').attr('data-state', '');
          $('.tab-item.active').slideUp(350).removeClass('active');
        }
      });
    }
  }
})(jQuery);
