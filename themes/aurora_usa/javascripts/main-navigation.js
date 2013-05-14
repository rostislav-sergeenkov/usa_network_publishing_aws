// Navigation for narrow and wide screens
(function ($) {
  Drupal.behaviors.mainNavigation = {
    attach: function (context, settings) {
      console.log('your mom is so fat');
      $primary_nav = $('.primary-nav');
      // create a touch menu button
      $touch_btn = '<div id="main-menu-toggle" class="mobi-menu-icon slide-menu-toggle" data-module-type="SlideOut" data-active-layer="mega-menu"></div>'
      $primary_nav.prepend($touch_btn);

      // var jPM = $.jPanelMenu({
      //     menu: '#block-usanetwork-blocks-usa-meganav',
      //     trigger: '#main-menu-toggle',
      //     excludedPanelContent: '#environment-indicator'
      // });
      // jPM.on();


      // off_canvas_auto_close();
      // $(window).resize(function(){
      //   off_canvas_auto_close();
      // });
      // function off_canvas_auto_close() {
      //   if ($('#main-menu-toggle').css("display") != "block" ){
      //     jPM.close();
      //   }
      // }
    },
  };

}(jQuery));
