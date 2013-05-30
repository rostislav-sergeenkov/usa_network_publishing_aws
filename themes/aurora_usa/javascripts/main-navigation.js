// Navigation for narrow and wide screens
(function ($) {
  Drupal.behaviors.mainNavigation = {
    attach: function (context, settings) {

      // TOUCH NAVIGATION
      $('.primary-nav').prepend('<div id="main-menu-toggle" class="mobi-menu-icon slide-menu-toggle" data-module-type="SlideOut" data-active-layer="mega-menu"></div>');
      // no destination for links with this class
      // if there is a child menu add a class
      $('#tv-show-menu li .item-list').parent().addClass('parent-item');
      $('#tv-show-menu a.link-empty').click(function() {
        return false;
      });


      // NARROW NAVIGATION
      var jPM = $.jPanelMenu({
          menu: '#block-usanetwork-blocks-usa-meganav',
          trigger: '#main-menu-toggle',
          openPosition: '258px',
          duration: '300',
          afterOn: function() {
            $('#jPanelMenu-menu')
              .prepend('<h1 class="menu-title">Main Menu</h1>')
              .find('a')
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
            $show_menu = $('#block-usanetwork-blocks-usa-tv-show-menu').clone();
            if ($show_menu.length > 0) {
              $show_trigger = $show_menu.find('.tv-show-menu-trigger').html();
              $new_show_menu = $show_menu.find('#tv-show-menu');
              $new_show_title = $('<h1 class="menu-title"></h1>').html($show_trigger);
              $new_show_menu.prepend($new_show_title);
              $('#jPanelMenu-menu').prepend($new_show_menu);
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
                .find('.shows-expandable a:first-child')
                  .click(function() {
                    $(this).parent().toggleClass('active-item');
                    return false;
                  })
                  .end();
            }
            $('.jPanelMenu-panel').css('min-height', $(window).height());
          },
          beforeOpen: function() {
            $('#wall').remove();
            $('.jPanelMenu-panel')
              .append('<div id="wall" data-module-type="Wall"></div>');
          },
          beforeClose: function() {
            $('#wall').remove();
          }
      });
      // Remove dart tag JS so it does not get re-executed and overwrite the page.
      $('.dart-tag script').remove();
      jPM.on();

      // WIDE NAVIGATION
      $('.slide-container')
        .find('.mega-sub-nav-container')
        .siblings('a')
          .css('cursor', 'default')
          .click(function() {
            var Self = $(this).parent();
            //console.log(Self);
            var Wall = document.getElementById('wall');
            $('.mega-menu-items.active-item').not(Self).removeClass('active-item');
            Self.toggleClass('active-item');
            if (Self.hasClass('active-item') && Wall === null) {
              Wall = $('<div id="wall" data-module-type="Wall"></div>')
                .click(function() {
                  $('.mega-menu-items.active-item').removeClass('active-item');
                  $(this).remove();
                })
              $('.jPanelMenu-panel').append(Wall);
            } else {
              $(Wall).remove();
            }
            return false;
          });
      // close button
      $('.mega-nav-close').click(function() {
        var Self = $(this).parent();
        //console.log(Self);
        var Wall = document.getElementById('wall');
        $('.mega-menu-items.active-item').not(Self).removeClass('active-item');
        Self.toggleClass('active-item');
        if (Self.hasClass('active-item') && Wall === null) {
          Wall = $('<div id="wall" data-module-type="Wall"></div>')
            .click(function() {
              $('.mega-menu-items.active-item').removeClass('active-item');
              $(this).remove();
            })
          $('.jPanelMenu-panel').append(Wall);
        } else {
          $(Wall).remove();
        }
        return false;
      });

      // RESPONSIVE BEHAVIOR
      $(window).resize(function(){
        if ($('#main-menu-toggle').is(':hidden') && jPM.isOpen()) {
          jPM.close();
        }
        $('.jPanelMenu-panel').css('min-height', $(window).height());
      });
    },
  };

}(jQuery));
