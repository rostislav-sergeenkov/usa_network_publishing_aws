/* 
 * Omniture Tracking Menu Liks Code
 */
(function ($) {
  Drupal.behaviors.omniture_tracking = {

    attach: function (context, settings) {
      
      //Click on "On Now" button
      $('#on-now').on('click', function(){
        s.linkTrackVars='events,eVar63,prop63';
        s.linkTrackEvents='event63';
        s.events='event63';
        s.eVar63=s.prop63='On Now'
        s.tl(this,'o','On Now Click');
        s.manageVars("clearVars", s.linkTrackVars, 1);
      });
      
      //Click on "Up Next"
      $('#jPanelMenu-menu .up-next .tab-wrapper').on('click', function(){
        s.linkTrackVars='events,eVar64,prop64';
        s.linkTrackEvents='event64';
        s.events='event64';
        s.eVar64=s.prop64='On Now - Up Next';
        s.tl(this,'o','Up Next Click');
        s.manageVars("clearVars", s.linkTrackVars, 1);
      });
      
     //Clicking on fisrt, last link
      $('#block-usanetwork-blocks-usa-meganav .mega-menu-items:first, #block-usanetwork-blocks-usa-meganav .mega-menu-items:last').find('a').on('click', function(e){
        s.linkTrackVars='events,eVar63,prop63';
        s.linkTrackEvents='event63';
        s.events='event63';
        var menu_name = $(this).text();
        s.eVar63=s.prop63=menu_name;
        s.tl(this,'o','Global Menu Click');
        s.manageVars("clearVars", s.linkTrackVars, 1);
      });
      
       // Click on menu item
      $('#block-usanetwork-blocks-usa-meganav .mega-menu-items:not(:first):not(:last)').on('click', 'a', function(e){
        e.preventDefault();
        var $self = $(this);
        s.linkTrackVars='events,eVar63,prop63';
        s.linkTrackEvents='event63';
        s.events='event63';
        var menu_name = $self.text();
        s.eVar63=s.prop63=menu_name;
        s.tl(this,'o','Global Menu Click');
        s.manageVars("clearVars", s.linkTrackVars, 1);
        var timer = setTimeout(function() {
           window.location = $self.attr('href');
        }, 200);

      });
      
      //Click on submenu item
      $('.mega-sub-nav .item-list li').on('click', 'a', function(e){
        e.preventDefault();
        var $self = $(this);
        s.linkTrackVars='events,eVar64,prop64';
        s.linkTrackEvents='event64';
        s.events='event64';
        var sub_menu_name = $self.text();
        s.eVar64=s.prop64=sub_menu_name;
        s.tl(this,'o','Global SubMenu Click');
        s.manageVars('clearVars', s.linkTrackVars, 1);
        var timer = setTimeout(function() {
           window.location = $self.attr('href');
        }, 200);
      });
    }
  }
}(jQuery));
