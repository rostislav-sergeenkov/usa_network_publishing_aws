// Navigation for narrow and wide screens
(function ($) {
  Drupal.behaviors.mainNavigation = {
    attach: function (context, settings) {
      $('body').once('mainNavigation', function() {
        // DOM SETUP SHUFFLING
        // TOUCH NAVIGATION
        $('.primary-nav').prepend('<div id="main-menu-toggle" class="mobi-menu-icon slide-menu-toggle" data-module-type="SlideOut" data-active-layer="mega-menu"></div>');
        // no destination for links with this class
        // if there is a child menu add a class
        $('#tv-show-menu li .item-list').parent().addClass('parent-item');
        $('#tv-show-menu a.link-empty').click(function() {
          return false;
        });

        // ON NOW BUTTON / PERSONALIZATION TRIGGER
        // add on now and personalization content to the panel
        // set the panel 'state' to menu (DEFAULT)
        $personalization_drawer = $('#personalization-panel').clone();
        $personalization_drawer.attr('id', 'personalization-drawer');
        $('.personalization-trigger').after($personalization_drawer);


        // MOVE CONTENT PANELS INTO JPM
        function insert_jpm_content() {
          $('#jPanelMenu-menu')
            .append($('#on-now-panel'))
            .append($('#personalization-panel'))
            .addClass('state-menu');
        }


        // SUPPORT FUNCTIONS
        function jpm_after_on() {
          $('#jPanelMenu-menu')
            .wrapInner('<div id="menu-wrapper"></div>');
          // dupe the footer into the side menu
          $footer_clone = $('#footer').clone();
          $footer_clone
            .attr('id', 'footer-offside')
            .find('.region-footer')
              .removeClass('region-footer')
              .addClass('region-footer-offside')
              .end()
            .find('#footer-message')
              .attr('id', 'footer-message-offside')
              .end();
          $('#menu-wrapper')
            .prepend('<h1 class="menu-title">Main Menu</h1>')
            .append($footer_clone)
            .find('.mega-menu-items a')
              .removeClass('mega-nav-link')
              .addClass('slide-panel-link')
              .end()
            .find('.mega-sub-nav-container')
              .removeClass('mega-sub-nav-container')
              .addClass('panel-sub-nav-container')
              .end()
            .find('.mega-sub-nav')
              .removeClass('mega-sub-nav')
              .addClass('panel-sub-nav')
              .end()
            .find('.panel-sub-nav-container')
              .siblings('a')
                .css('cursor', 'default')
                .click(function() {
                  $(this).parent().toggleClass('active-item');
                  return false;
                })
                .end()
              .parent()
                .addClass('expandable')
                .addClass('expandable-menu');

          insert_jpm_content();

          // set up show menu
          $show_menu = $('#block-usanetwork-blocks-usa-tv-show-menu').clone();
          if ($show_menu.length > 0) {
            $('#block-usanetwork-blocks-usa-meganav').addClass('usa-showmenu-active');
            $('.region-footer').addClass('usa-showmenu-loaded');
            $show_trigger = $show_menu.find('.tv-show-menu-trigger').html();
            $new_show_menu = $show_menu.find('#tv-show-menu');
            $new_show_title = $('<h1 class="menu-title"></h1>').html($show_trigger);
            $new_show_menu.prepend($new_show_title);
            $("#jPanelMenu-menu").prepend($new_show_menu);
            $('#jPanelMenu-menu')
              .find('a')
                .addClass('slide-panel-link')
                .end()
             .find('.parent-item')
                .addClass('expandable')
                .addClass('shows-expandable')
                .addClass('expandable-menu')
                .end()
             .find('li .item-list')
                .addClass('panel-sub-nav-container')
                .end()
              .find('li .item-list ul')
                .addClass('panel-sub-nav')
                .end()
              .find('.shows-expandable a.parent-trigger')
                .click(function() {
                  $(this).parent().toggleClass('active-item');
                  return false;
                })
                .end();
          }

          // initialize menu to height of window
          $('.jPanelMenu-panel').css('min-height', $(window).height());
        }

        // DART
        // Remove dart tag JS so it does not get re-executed and overwrite the page.
        function remove_dart() {
          $('.dart-tag script').remove();
        }

        // THE WALL
        function wall_build() {
          $('#wall').remove();
          $('.jPanelMenu-panel')
            .append('<div id="wall" data-module-type="Wall"></div>');
        }
        function wall_remove() {
          $('#wall').remove();
        }
        function wall_exists() {
          console.log($('#wall').length);
          console.log(($('#wall').length == 0)? false : true);
          return ($('#wall').length == 0)? false : true ;
        }

        // MANAGE JPM //
        function jpm_on_onnow() {
          console.log('on now');
          // set the panel 'state' to 'on now'
          // and trigger panel
          $('#jPanelMenu-menu')
            .removeClass('state-menu')
            .removeClass('state-personalization')
            .addClass('state-on-now');
          jPM.direction('left');
          $('body').attr('data-menu-direction', 'left');
          jPM.trigger();
        }

        function jpm_on_menu() {
          // set the panel 'state' to 'menu'
          // and trigger panel
          $('#jPanelMenu-menu')
            .removeClass('state-on-now')
            .removeClass('state-personalization')
            .addClass('state-menu');
          jPM.direction('left');
          $('body').attr('data-menu-direction', 'left');
          // note: no need to call jPM.trigger() because this is the default menu trigger in jPM init
        }

        function jpm_on_personalization() {
          // set the panel 'state' to 'personalization'
          // and trigger panel
          $('#jPanelMenu-menu')
            .removeClass('state-menu')
            .removeClass('state-on-now')
            .addClass('state-personalization');
          jPM.direction('right');
          $('body').attr('data-menu-direction', 'right');
          jPM.trigger();
        }
        // MANAGE JPM //


        // NARROW NAVIGATION
        var jPM = $.jPanelMenu({
            menu: '#block-usanetwork-blocks-usa-meganav',
            trigger: '#main-menu-toggle',
            openPosition: '258px',
            duration: '300',
            keyboardShortcuts: false,
            beforeOn: function() {
              remove_dart();
            },
            afterOn: function() {
              jpm_after_on();
            },
            beforeOpen: function() {
              wall_build();
            },
            beforeClose: function() {
              wall_remove();
            }
        });
        jPM.on();

        // WIDE NAVIGATION
        function manage_wide_subnav(el) {
          var Self = $(el);
          $('#mega-nav .active-item').not(Self).removeClass('active-item');
          Self.toggleClass('active-item');
          if (Self.hasClass('active-item') && wall_exists() == false) {
            wall_build();
            $('#wall')
              .click(function() {
                $('#mega-nav .active-item').removeClass('active-item');
                wall_remove();
              });
          } else if (!Self.hasClass('active-item') && wall_exists() == true) {
            wall_remove();
          }
        }
        function close_wide_subnav() {
          $('#mega-nav .active-item').removeClass('active-item');
          wall_remove();
        }

        function close_wide_personalization() {
          $('.personalization-trigger.active-item').removeClass('active-item');
          wall_remove();
        }

        $('.slide-container')
          .find('.mega-sub-nav-container')
          .siblings('a')
            .css('cursor', 'default')
            .click(function() {
              manage_wide_subnav($(this).parent());
              return false;
            });
        // close button
        $('.mega-nav-close').click(function() {
          close_wide_subnav();
          return false;
        });

        $('#personalization-drawer .close').click(function() {
          close_wide_personalization();
          return false;
        });


        // MANAGE PANEL STATES
        // TURN ON 'ON NOW' PANEL
        $('#on-now.trigger').click(function() {
          jpm_on_onnow();
        });

        // TURN ON 'MENU' PANEL
        $('#main-menu-toggle').click(function() {
          jpm_on_menu();
        });


        // ON NOW //
        // TOGGLE ON NOW / UP NEXT
        $wrapper = $("#inner-on-now-panel .tab-wrapper");
        $($wrapper).on('click', function() {
          $($wrapper).removeClass('active');
          $(this).addClass('active');
        });


        // RESPONSIVE BEHAVIOR
        $(window).resize(function(){
          if ($('#main-menu-toggle').is(':hidden') && jPM.isOpen()) {
            jPM.close();
          }
          $('.jPanelMenu-panel').css('min-height', $(window).height());
        });

        // call jRespond and add breakpoints
        var jRes = jRespond([
          {
            label: 'narrow',
            enter: 0,
            exit: 959
          },{
            label: 'wide',
            enter: 960,
            exit: 10000
          }
        ]);
        jRes.addFunc({
          breakpoint: 'narrow',
          enter: function() {
            jPM.close();
            $('.personalization-trigger').removeClass('active-item');
            jPM.position('258px');
            // set the panel 'state' to personalization
            // and trigger panel
            $('.personalization-trigger')
              .off('click')
              .click(function() {
                jpm_on_personalization();
                return false;
              });
          }
        });
        jRes.addFunc({
          breakpoint: 'wide',
          enter: function() {
            jPM.close();
            $('.personalization-trigger').removeClass('active-item');
            //
            jPM.position('362px');
            // slide up the drawer
            $('.personalization-trigger')
              .off('click')
              .click(function() {
                manage_wide_subnav($(this))
                return false;
              });
          }
        });
      });
    },
  };

}(jQuery));
