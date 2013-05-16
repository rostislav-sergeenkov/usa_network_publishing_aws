// Navigation for narrow and wide screens
(function ($) {
  Drupal.behaviors.mainNavigation = {
    attach: function (context, settings) {
      $primary_nav = $('.primary-nav');
      // create a touch menu button
      $touch_btn = '<div id="main-menu-toggle" class="mobi-menu-icon slide-menu-toggle" data-module-type="SlideOut" data-active-layer="mega-menu"></div>'
      $primary_nav.prepend($touch_btn);

      var jPM = $.jPanelMenu({
          menu: '#block-usanetwork-blocks-usa-meganav',
          trigger: '#main-menu-toggle',
          openPosition: '258px',
          duration: '300',
          afterOn: function() {
            $jPanelMenu_menu = $('#jPanelMenu-menu');
            $jPanelMenu_menu
              .prepend('<h1 class="menu-title">Main Menu</h1>')
              .find('a').removeClass('mega-nav-link').addClass('slide-panel-link').end()
              .find('.mega-sub-nav-container')
                .removeClass('mega-sub-nav-container')
                .addClass('panel-sub-nav-container')
                .end()
              .find('.mega-sub-nav')
                .removeClass('mega-sub-nav')
                .addClass('panel-sub-nav')
                .end();
            // set up subsection expanders
            $jPanelMenu_menu
              .find('.panel-sub-nav-container')
                .siblings('a')
                  .css('cursor', 'default')
                  .click(function() {
                    $(this).parent().toggleClass('active');
                    return false;
                  })
                  .end()
                .parent()
                  .addClass('expandable')
                  .addClass('expandable-menu');
          },
          beforeOpen: function() {
            $('.jPanelMenu-panel')
              .append('<div id="wall" data-module-type="Wall"></div>');
          },
          beforeClose: function() {
            $('#wall').remove();
          },
          excludedPanelContent: '#environment-indicator'
      });
      jPM.on();

      off_canvas_auto_close();
      $(window).resize(function(){
        off_canvas_auto_close();
      });
      function off_canvas_auto_close() {
        if ($('#main-menu-toggle').css("display") != "block" ){
          jPM.close();
          if ($('.jPanelMenu-panel')) {
            jPM.off();
          }
        } else {
          if ($('.jPanelMenu-panel').length == 0) {
            jPM.on();
          }
        }
      }
    },
  };

}(jQuery));
