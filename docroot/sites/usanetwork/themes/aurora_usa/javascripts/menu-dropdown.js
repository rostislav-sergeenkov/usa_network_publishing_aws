(function ($) {
  Drupal.behaviors.usanetwork_menu_dropdown = {
    stickyHeader: function(offsetTop, subMenuSelector) {
      var $body = $('body'),
          header_submenu_h;

      if(!(offsetTop && subMenuSelector)) {return false;}

      header_submenu_h = subMenuSelector.outerHeight(true);

      function switchState() {
        $body.toggleClass('sub-menu-is-sticky');
        subMenuSelector.toggleClass('sticky-shows-submenu');
        $('#block-usanetwork-episodes-usanetwork-episodes-main-block .consum-sidebar').toggleClass('sticky-sidebar');
        if ($('body').hasClass('node-type-tv-episode')) {
          Drupal.behaviors.usanetwork_consumptionator_episode.rightRailPosition();
        }
        if($body.hasClass('sub-menu-is-sticky')) {
          $body.css('margin-top', header_submenu_h);
        } else {
          $body.css('margin-top', 0);
        }
      }

      if($(window).width() >= window_size_tablet_portrait) {
        // check offsetTop value
        if (!subMenuSelector.hasClass('sticky-shows-submenu')) {
          if (Math.round(subMenuSelector.offset().top) !== offsetTop) {
            offsetTop = Math.round(subMenuSelector.offset().top);
          }
        }
        if ($(window).scrollTop() >= offsetTop) {
          return !subMenuSelector.hasClass('sticky-shows-submenu') ? switchState() : false;
        } else {
          return subMenuSelector.hasClass('sticky-shows-submenu') ? switchState() : false;
        }
      } else {
        return subMenuSelector.hasClass('sticky-shows-submenu') ? switchState() : false;
      }
    },

    stickyFilterbar: function (offsetTop, $userMenu, $submenu) {
      var $upper_menu = $('.upper-menu'),
          header_submenu_h = $('.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu').outerHeight(true) - 1;

      if(!offsetTop) {return false;}

      if (!$('.fixed-position').length) {
        // check offsetTop value
        if (Math.round($userMenu.offset().top - $submenu.outerHeight(true) - 1) !== offsetTop) {
          offsetTop = Math.round($userMenu.offset().top - $submenu.outerHeight(true) - 1);
        }
        // check on class sticky-shows-submenu
        if ($submenu.hasClass('sticky-shows-submenu')) {
          offsetTop = Math.round($userMenu.offset().top - $submenu.outerHeight(true) - 1 - header_submenu_h)
        }
      } else {
        // check on class sticky-shows-submenu
        if (Math.round($userMenu.offset().top - $submenu.outerHeight(true) - 1) !== offsetTop) {
          if ($submenu.hasClass('sticky-shows-submenu') && $('.fixed-position').length) {
            offsetTop = Math.round($userMenu.offset().top - $submenu.outerHeight(true) - 1)
          }
          if ($('.fixed-position').css('top') !== header_submenu_h) {
            $('.fixed-position').css('top', header_submenu_h)
          }
        }
      }

      if ($(window).width() >= window_size_tablet_portrait) {
        if(!$('.fixed-position').length) {
          var $upperMenu = $upper_menu.eq(0),
              $cloned = $upperMenu.clone(true);

          $cloned
            .addClass('fixed-position')
            .css('top', header_submenu_h).find('h1').remove();
          $upperMenu.before($cloned);
        }

        if ($(window).scrollTop() >= offsetTop) {
            $('.fixed-position').addClass('is-visible');
        } else {
          $('.fixed-position').removeClass('is-visible');
        }
      } else if($('.fixed-position.is-visible').length) {
        $('.fixed-position').removeClass('is-visible');
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
      var _self = this,
          $body = $('body'),
          $submenu = $('.region-header'),
          submenuOffsetTop = null,
          $userMenu = $('.upper-menu'),
          timer_id;

      if($submenu.length) {
        if($('.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu', $submenu).length) {
          $submenu = $('.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu', $submenu);
        }
        submenuOffsetTop = Math.round($submenu.offset().top);
      } else {
        $submenu = null;
      }

      if($submenu.length && $userMenu.length) {
        var upperMenuOffsetTop = Math.round($userMenu.offset().top - $submenu.outerHeight(true) - 1);
      }

      $(document.body).once('window-events', function () {
        var tablet = false;

        if (window.innerWidth < window_size_tablet_portrait) {
          tablet = true;
        }

        Drupal.behaviors.usanetwork_menu_dropdown.tabItemScroll();

        // init sponsored in for tab full-episodes-list
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .full-episodes-list .node-usanetwork-promo'), 'dark-menu');

        function showTitleMove() {
          var $showTitleBlock = $('.show-title-block', '.show-title-block-wrapper');
          if (window.innerWidth < window_size_tablet_portrait && !$showTitleBlock.hasClass('inner')) {
            $showTitleBlock.addClass('secondary inner');
            $showTitleBlock.appendTo('.header-nav-bar .show-title-wrapper');
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

          if (Drupal.behaviors.omniture_tracking) {
            Drupal.behaviors.omniture_tracking.mainMenuTabs(tab);
          }

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
            if ($('body').hasClass('node-type-tv-show')) {
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

        //HotFix: Remove dropdown option from tab "Shop"
        $(".tab .no-refresh").each(function(){
          if ($(this).text() == 'shop' ||  $(this).text() == 'Shop') {
            $(this).removeClass('no-refresh active').attr('target', '_blank');
            return false;
          }
        });

        $(".tab .no-refresh").removeClass('active').bind('click', tabNavHandler);
        $(".main-menu-open a").bind('click', menuOpenHandler);

        // Positioning sticky header and photo/video filters, if the page was reloaded.
        setTimeout(function() {
          _self.stickyHeader(submenuOffsetTop, $submenu);
          if($body.hasClass('page-node-videos') || $body.hasClass('page-node-photos') || $body.hasClass('page-node-explore')) {
            _self.stickyFilterbar(upperMenuOffsetTop, $userMenu, $submenu);
          }
        }, 500);

        $(window).load(function () {
          $('.calendar-reminder').click(function () {
            if (getInternetExplorerVersion() !== -1) {
              $('.seeit-icon-close').bind('click', seeitClose);
            }
          });
        });

        $(window).on('resize', function (e) {
          clearTimeout(timer_id);
          timer_id = setTimeout(function() {
            _self.stickyHeader(submenuOffsetTop, $submenu);
            if($body.hasClass('page-node-videos') || $body.hasClass('page-node-photos') || $body.hasClass('page-node-explore')) {
              _self.stickyFilterbar(upperMenuOffsetTop, $userMenu, $submenu);
            }
          }, 300);

          showTitleMove();
          showMenuMove();

          if (window.innerWidth < window_size_tablet_portrait && !tablet) {
            if ($body.hasClass('page-home') || $body.hasClass('node-type-tv-show')) {
              $('header .tab-item.active').removeClass('active').removeAttr('style');
              $(".tab .no-refresh.active").removeClass('active').attr('data-state', '');
            }

            tablet = true;
          }

          if (window.innerWidth >= window_size_tablet_portrait && tablet) {
            if ($body.hasClass('page-home') || $body.hasClass('node-type-tv-show')) {
              if ($(".main-menu-open").hasClass('active')) {
                $('.nav-bar-tabs .expanded.active').removeClass('active');
                $('.nav-bar-tabs .expanded > a.active').removeClass('active');
              }
            }

            tablet = false;
          }

        });

        $(window).on('scroll', function (e) {
          _self.stickyHeader(submenuOffsetTop, $submenu);
          if($body.hasClass('page-node-videos') || $body.hasClass('page-node-photos') || $body.hasClass('page-node-explore')) {
            _self.stickyFilterbar(upperMenuOffsetTop, $userMenu, $submenu);
          }

          if ($('.tab-item.active').length) {
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
      });
    }
  }
})(jQuery);
