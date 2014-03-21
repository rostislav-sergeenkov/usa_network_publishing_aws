/*
 * Omniture Tracking Menu Liks Code
 */
(function ($) {
  Drupal.behaviors.omniture_tracking = {
    formatPromo: function($node) {
      // get promo data
      var promoName = $node.attr('omniture-title');
      var promoId = null;
      var nid = $node.attr('omniture-nid');
      var vid = $node.attr('omniture-vid');
      if (nid) {
        promoId = '/node/' + nid + '/';
        if (vid) {
          promoId += 'revisions/' + vid + '/view';
        }
      }

      return {
        'promoName': promoName,
        'promoId': promoId
      };
    },
    trackPromo: function($node, location, link) {
      var data = Drupal.behaviors.omniture_tracking.formatPromo($node);
      s.linkTrackVars = 'events,prop52,prop53,prop54,eVar33,eVar34,eVar35';
      s.linkTrackEvents = s.events = 'event51';
      s.prop52 = s.eVar33 = data.promoName;
      s.prop53 = s.eVar34 = location;
      s.prop54 = s.eVar35 = data.promoId;

      if (link.target != '_blank') {
        s.bcf = function() {
          setTimeout(function() {
            window.location = link.href;
          }, 500);
        };
      }
      else {
        window.open(link.href, '_blank');
      }

      s.tl(this,'o','Promo Click');
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },
    attach: function (context, settings) {
      if (typeof s != 'object') {
        return;
      }
      //Click on "On Now" button
      $('#on-now').once('omniture-tracking', function() {
        $(this).on('click', function(){
          if (typeof s == 'object' && typeof s.tl == 'function') {
            s.linkTrackVars='events,eVar63,prop63';
            s.linkTrackEvents='event63';
            s.events='event63';
            s.eVar63=s.prop63='On Now'
            s.tl(this,'o','On Now Click');
            s.manageVars("clearVars", s.linkTrackVars, 1);
          }
        });
      });

      //Click on "Up Next"
      $('#jPanelMenu-menu .up-next .tab-wrapper, #jPanelMenu-menu .on-now .tab-wrapper').once('omniture-tracking', function() {
        $(this).on('click', function(){
          if (typeof s == 'object' && typeof s.tl == 'function') {
            var $self = $(this);
            var prop = '';
            var descr = '';
            if ($self.parents('.on-now').length > 0) {
              prop = 'On Now';
              descr = 'On Now Click';
            }
            else {
              prop = 'On Now - Up Next';
              descr = 'Up Next Click';
            }
            s.linkTrackVars='events,eVar64,prop64';
            s.linkTrackEvents='event64';
            s.events='event64';
            s.eVar64=s.prop64=prop;
            s.tl(this,'o',descr);
            s.manageVars("clearVars", s.linkTrackVars, 1);
          }
        });
      });

      // Click on menu item
      $('#block-usanetwork-blocks-usa-meganav .mega-menu-items a, #logo a').once('omniture-tracking', function() {
        $(this).on('click', function(e){
          if (typeof s == 'object' && typeof s.tl == 'function') {
            var $self = $(this);

            // check if link is related to drawer
            if ($self.attr('data-drawer-id')) {
              var drawerId = $self.attr('data-drawer-id');
              var $drawer = $('[data-drawer="' + drawerId + '"]');
              if ($drawer.length > 0) {
                $drawer.toggleClass('omniture-drawer-opened');
                if (!$drawer.hasClass('omniture-drawer-opened')) {
                  // do not track when closing
                  return;
                }
              }
            }

            s.linkTrackVars='events,eVar63,prop63';
            s.linkTrackEvents='event63';
            s.events='event63';
            var menu_name = $self.text();
            s.eVar63=s.prop63=menu_name;
            if (!$self.hasClass('use-ajax') && $self.attr('href') != '#') {
              e.preventDefault();
              s.bcf = function() {
                setTimeout(function() {
                  window.location = $self.attr('href');
                }, 500);
              };
            }
            s.tl(this,'o','Global Menu Click');
            s.manageVars("clearVars", s.linkTrackVars, 1);
          }
        });
      });

      //Click on submenu item
      $('.mega-sub-nav .item-list li a, #tv-show-menu .item-list li a').once('omniture-tracking', function() {
        $(this).on('click', function(e){
          if (typeof s == 'object' && typeof s.tl == 'function') {
            e.preventDefault();
            var $self = $(this);
            s.linkTrackVars='events,eVar64,prop64';
            s.linkTrackEvents='event64';
            s.events='event64';
            var sub_menu_name = $self.text();
            s.eVar64=s.prop64=sub_menu_name;
            if (!$self.hasClass('use-ajax') && !$self.hasClass('link-empty') && $self.attr('href') != '#') {
              s.bcf = function() {
                setTimeout(function() {
                  window.location = $self.attr('href');
                }, 500);
              };
            }
            s.tl(this,'o','Global SubMenu Click');
            s.manageVars('clearVars', s.linkTrackVars, 1);
          }
        });
      });

      /**
       * Track promos
      */

      /* Homepage */
      // A/B/C Spots
      $('.usa-home-aspot .node a, .usa-home-bspot .node a, .usa-home-cspot .node a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (typeof s == 'object' && typeof s.tl == 'function') {
            e.preventDefault();
            var $self = $(this);
            var $node = $self.parents('.node');
            var promoLocation = '';
            if ($self.parents('.usa-home-aspot').length > 0) {
              promoLocation = '1';
            }
            else if ($self.parents('.usa-home-bspot').length > 0) {
              promoLocation = '2';
            }
            else if ($self.parents('.usa-home-cspot').length > 0) {
              promoLocation = '3';
            }

            // get carousel position
            var $carouselItems = $self.parents('ul').children().not('.clone');
            if ($carouselItems.length > 1) {
              var index = $carouselItems.index($self.parents('li')) + 1;
              promoLocation = 'C' + index + '-' + promoLocation;
            }

            // track it
            Drupal.behaviors.omniture_tracking.trackPromo($node, promoLocation, {
              href: $self.attr('href'),
              target: $self.attr('target')
            });
          }
        });
      });
      // Featured
      $('.field-name-field-hp-promos .node a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (typeof s == 'object' && typeof s.tl == 'function') {
            e.preventDefault();
            var $self = $(this);
            var $node = $self.parents('.node');
            var $items = $self.parents('.field-name-field-hp-promos').find('.node');
            var promoLocation = $items.index($self.parents('.node')) + 4;

            // track it
            Drupal.behaviors.omniture_tracking.trackPromo($node, promoLocation, {
              href: $self.attr('href'),
              target: $self.attr('target')
            });
          }
        });
      });

      /* Show pages */
      // A Spot
      $('.show-aspot .node a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (typeof s == 'object' && typeof s.tl == 'function') {
            e.preventDefault();
            var $self = $(this);
            var $node = $self.parents('.node');
            var promoLocation = '1';

            // get carousel position
            var $carouselItems = $self.parents('ul').children().not('.clone');
            if ($carouselItems.length > 1) {
              var index = $carouselItems.index($self.parents('li')) + 1;
              promoLocation = 'C' + index + '-' + promoLocation;
            }

            // track it
            Drupal.behaviors.omniture_tracking.trackPromo($node, promoLocation, {
              href: $self.attr('href'),
              target: $self.attr('target')
            });
          }
        });
      });
      // Featured
      $('.field-name-field-usa-tv-promo .node a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (typeof s == 'object' && typeof s.tl == 'function') {
            e.preventDefault();
            var $self = $(this);
            var $node = $self.parents('.node');
            var $items = $self.parents('.field-name-field-usa-tv-promo').find('.node');
            var promoLocation = $items.index($self.parents('.node')) + 2;

            // track it
            Drupal.behaviors.omniture_tracking.trackPromo($node, promoLocation, {
              href: $self.attr('href'),
              target: $self.attr('target')
            });
          }
        });
      });
    }
  }
}(jQuery));
