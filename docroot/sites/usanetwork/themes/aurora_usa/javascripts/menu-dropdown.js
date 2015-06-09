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
            'z-index': '999',
            'width': '100%',
            'top': '0'
          };

      if ($('body').hasClass('node-type-tv-show')) {
        if ((scroll_top > (ad_h + navbar_h + 20)) && ($(window).width() >= window_size_tablet_portrait)) {
          $header_submenu.css(styles);
          $ad.css('margin-bottom', navbar_h);
        } else if (scroll_top < (ad_h + navbar_h + 20)) {
          $header_submenu.attr('style', '');
          $ad.css('margin-bottom', 0);
        }
      } else {
        if ((scroll_top > ad_h + 20) && ($(window).width() >= window_size_tablet_portrait)) {
          $header_full.addClass('sticky');
          $header_full.css(styles);
          $ad.css('margin-bottom', header_full_h);
        } else if (scroll_top < ad_h + 20) {
          $header_full.removeClass('sticky');
          $header_full.attr('style', '');
          $ad.css('margin-bottom', 0);
        }
      }
    },

      stickyFilterbar: function () {
        var $ad = $('.ad-leaderboard'),
            $header_submenu = $('.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu'),
            $navbar = $('.header-nav-bar'),
            $upper_menu = $('.upper-menu'),
            $landing_main_block = $('.landing-main-block'),
            $h2_landing = $('.landing-page-container h2'),
            ad_h = $ad.height(),
            navbar_h = $navbar.height(),
            header_submenu_h = $header_submenu.height(),
            landing_main_block_h = $landing_main_block.height(),
            h2_landing_h = $h2_landing.height(),
            scroll_top = $(window).scrollTop(),
            styles_filterbar = {
              'position': 'fixed',
              'z-index': '999',
              'width': '100%',
              'top': header_submenu_h
            };
        if ($('body').hasClass('page-node-videos') || $('body').hasClass('page-node-photos')) {
          if ((scroll_top > (ad_h + navbar_h + header_submenu_h + landing_main_block_h + h2_landing_h)) && ($(window).width() >= window_size_tablet_portrait )) {
            $upper_menu.css(styles_filterbar);
            $ad.css('margin-bottom', navbar_h );
          } else if (scroll_top  < (ad_h + navbar_h + header_submenu_h + landing_main_block_h + h2_landing_h)) {
            $upper_menu.attr('style', '');
            $ad.css('margin-bottom', 0);
          }
        }
      },

      onTotalMCScrollFlag: null,
      onTotalMCScrollOffset: null,
      onTotalMCScrollStartOffset: null,
      MCScrollInstance: null,

    closeTab: function() {
      setTimeout(function() {
        $('.tab-item').css('height', 'auto');
      }, 600);
    },

    tabItemScroll: function() {
      var tab_wrapper = $('header .tab-item-wrapper');

      tab_wrapper.mCustomScrollbar({
        //setHeight: scroll_h,
        scrollInertia: 0,
        scrollbarPosition: "outside",
        callbacks: {
          whileScrolling: function(){
            if (this.mcs.topPct == 100) {
              Drupal.behaviors.usanetwork_menu_dropdown.onTotalMCScrollFlag = true;
              Drupal.behaviors.usanetwork_menu_dropdown.onTotalMCScrollStartOffset = $(window).scrollTop();
            }
          }
        }
      });
    },

    updateItemScroll: function() {

      $('.tab-item-wrapper').css('height', 'auto');

      var tab = $('.tab-item.active'),
          tab_wrapper = tab.find('.tab-item-wrapper'),
          tab_padding_top = parseInt(tab.css('padding-top')),
          tab_padding_bottom = parseInt(tab.css('padding-bottom')),
          tab_wrapper_h = tab_wrapper.innerHeight(),
          ad_h = $('.ad-leaderboard').height() + 20,
          window_h = $(window).height(),
          header_h = $('.header-nav-bar').height(),
          ad_offset = ((ad_h - $(window).scrollTop()) < 0) ? 0 : ad_h - $(window).scrollTop(),
          scroll_h = window_h - header_h - ad_offset - (tab_padding_top + tab_padding_bottom);

      if(scroll_h < tab_wrapper_h) {
        tab_wrapper.height(scroll_h);
        tab_wrapper.mCustomScrollbar("update");
      }
    },

    startScrollAt: null,

    attach: function(context){
      $('body').once(function () {
        var tablet = false;

        if (window.innerWidth < window_size_tablet_portrait) {
          tablet = true;
        }

        Drupal.behaviors.usanetwork_menu_dropdown.tabItemScroll();
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .full-episodes-list .node-usanetwork-promo'), 'dark');

        function showTitleMove() {
          if (window.innerWidth < window_size_tablet_portrait && !($('.show-title-block-wrapper .show-title-block').hasClass('inner'))) {
            $('.show-title-block-wrapper .show-title-block').addClass('secondary');
            $('.show-title-block-wrapper .show-title-block').addClass('inner');
            $('.show-title-block-wrapper .show-title-block').appendTo('.header-nav-bar .show-title-wrapper');
          }
          else if (window.innerWidth >= window_size_tablet_portrait && ($('.header-nav-bar .show-title-block').hasClass('inner'))) {
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
          else if (window.innerWidth >= window_size_tablet_portrait && ($('.show-menu').hasClass('inner'))) {
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

          Drupal.behaviors.omniture_tracking.mainMenuTabs(tab);

          var openTab = function () {

            $(".tab .no-refresh").unbind('click');
            tab.addClass('active').attr('data-state', 'active');
            tab_containers.eq(index).hide().slideDown(animation_speed, function () {
              $(".tab .no-refresh").bind('click', tabNavHandler);
            }).addClass('active');

            setTimeout(function () {
              Drupal.behaviors.usanetwork_menu_dropdown.updateItemScroll();
            },animation_speed);

            // HIDE SIGN TAB IF EXIST
            if ($('.page-videos .sign-in-link').length) {
              $('.page-videos .sign-in-link').removeClass('active');
              $('.tab-item.log-in').slideUp(350).removeClass('active');
            }

            // HIDE SEARCH BLOCK
            $('.search-input-block, .search a').removeClass('active');
          };

          if (!$('body').hasClass('consumptionator-page')) {

            if (window.innerWidth >= window_size_tablet_portrait) {
              if (tab.attr('data-state') == 'active') {
                tab.removeClass('active').attr('data-state', '');
                tab_containers.eq(index).slideUp(animation_speed, function() {
                  if (tab_containers.eq(index).hasClass('mCustomScrollbar')) {
                    tab_containers.eq(index).css('height', 'auto');
                  }
                }).removeClass('active');
              } else {
                tabs.removeClass('active').attr('data-state', '');

                if (tab_container_act.length) {
                  $(".tab .no-refresh").unbind('click');
                  tab_container_act
                      .slideUp(animation_speed, function () {
                        if (tab_containers.eq(index).hasClass('mCustomScrollbar')) {
                          tab_containers.eq(index).css('height', 'auto');
                        }
                        $(".tab .no-refresh").unbind('click');
                        openTab();
                      })
                      .removeClass('active');
                } else {
                  openTab();
                }
              }
            }
          } else {

            var headerMenu = $('#block-usanetwork-menu-usanetwork-menu-consumptionator');

            if (!headerMenu.hasClass('open')) {
              headerMenu.addClass('open');
            } else {
              headerMenu.removeClass('open');
            }

            if (tab.attr('data-state') == 'active') {
              tab.removeClass('active').attr('data-state', '');
              tab_containers.eq(index).slideUp(animation_speed, function() {
                if (tab_containers.eq(index).hasClass('mCustomScrollbar')) {
                  tab_containers.eq(index).css('height', 'auto');
                }
              }).removeClass('active');
            } else {
              tabs.removeClass('active').attr('data-state', '');

              if (tab_container_act.length) {
                $(".tab .no-refresh").unbind('click');
                tab_container_act
                    .slideUp(animation_speed, function () {
                      if (tab_containers.eq(index).hasClass('mCustomScrollbar')) {
                        tab_containers.eq(index).css('height', 'auto');
                      }
                      $(".tab .no-refresh").unbind('click');
                      openTab();
                    })
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
          var openMainMenu = function () {
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
          var closeMainMenu = function () {
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
          Drupal.behaviors.usanetwork_menu_dropdown.stickyFilterbar();

          $('.calendar-reminder').click(function () {
            if (getInternetExplorerVersion() !== -1) {
              $('.seeit-icon-close').bind('click', seeitClose);
            }
          });
        });

        $(window).bind('resize', function () {
          Drupal.behaviors.usanetwork_menu_dropdown.stickyHeader();
          Drupal.behaviors.usanetwork_menu_dropdown.stickyFilterbar();

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
              if ($(".main-menu-open").hasClass('active')) {
                $('.nav-bar-tabs .expanded.active').removeClass('active');
                $('.nav-bar-tabs .expanded > a.active').removeClass('active');
              }
            }

            tablet = false;
          }

        });

        $(window).on("scroll", function () {
          Drupal.behaviors.usanetwork_menu_dropdown.stickyHeader();
          Drupal.behaviors.usanetwork_menu_dropdown.stickyFilterbar();

          if ($('.tab-item.active').length > 0) {
            if (Drupal.behaviors.usanetwork_menu_dropdown.startScrollAt == null) {
              Drupal.behaviors.usanetwork_menu_dropdown.startScrollAt = $(window).scrollTop();
            }

            if (($(window).scrollTop() - Drupal.behaviors.usanetwork_menu_dropdown.startScrollAt) > 100) {
              if (!$('.tab-item').hasClass('mCustomScrollbar') && window.innerWidth >= window_size_tablet_portrait && !$('body').hasClass('consumptionator-page')) {
                $('.nav-bar-tabs .tab a.active').removeClass('active').attr('data-state', '');
                $('.tab-item.active').slideUp(350).removeClass('active');
                Drupal.behaviors.usanetwork_menu_dropdown.startScrollAt = null;
              }
            }
          }

          if (Drupal.behaviors.usanetwork_menu_dropdown.onTotalMCScrollFlag) {
            Drupal.behaviors.usanetwork_menu_dropdown.onTotalMCScrollOffset = $(window).scrollTop();

            if ((Drupal.behaviors.usanetwork_menu_dropdown.onTotalMCScrollOffset - Drupal.behaviors.usanetwork_menu_dropdown.onTotalMCScrollStartOffset) > 100) {
              Drupal.behaviors.usanetwork_menu_dropdown.onTotalMCScrollFlag = false;
              Drupal.behaviors.usanetwork_menu_dropdown.onTotalMCScrollOffset = null;

              $('.nav-bar-tabs .tab a.active').removeClass('active').attr('data-state', '');
              $('.tab-item.active').slideUp(350).removeClass('active');

              Drupal.behaviors.usanetwork_menu_dropdown.closeTab();
            }
          }
        });
      })
    }
  }
})(jQuery);
