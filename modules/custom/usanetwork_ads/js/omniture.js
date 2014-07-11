/*
 * Omniture Tracking Menu Liks Code
 */
(function ($) {
  Drupal.behaviors.omniture_tracking = {
    omniturePresent: function() {
      if (typeof s == 'object'
        && typeof s.tl == 'function'
        && typeof s.manageVars == 'function') {
        return true;
      }
      false;
    },
    formatPromo: function($node) {
      // get promo data
      var promoName = $node.attr('omniture-title');
      var promoId = $node.attr('omniture-id');

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
      $('#on-now.trigger').once('omniture-tracking', function() {
        $(this).on('click', function(){
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            var showName = '';
            try {
              showName = Drupal.settings.usanetwork_ads.onnow_upnext.on_now['s.prop10'];
            }
            catch (e) {}

            s.linkTrackVars='events,eVar63,prop63,prop10';
            s.linkTrackEvents='event63';
            s.events='event63';
            s.eVar63=s.prop63='On Now';
            s.prop10=showName;
            s.tl(this,'o','On Now Click');
            s.manageVars("clearVars", s.linkTrackVars, 1);
          }
        });
      });

      //Click on "Up Next"
      $('#jPanelMenu-menu .up-next .tab-wrapper, #jPanelMenu-menu .on-now .tab-wrapper').once('omniture-tracking', function() {
        $(this).on('click', function(){
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            var $self = $(this);
            var prop = '';
            var descr = '';
            var showName = '';
            if ($self.parents('.on-now').length > 0) {
              prop = 'On Now';
              descr = 'On Now Click';
              try {
                showName = Drupal.settings.usanetwork_ads.onnow_upnext.on_now['s.prop10'];
              }
              catch (e) {}
            }
            else {
              prop = 'On Now - Up Next';
              descr = 'Up Next Click';
              try {
                showName = Drupal.settings.usanetwork_ads.onnow_upnext.up_next['s.prop10'];
              }
              catch (e) {}
            }
            s.linkTrackVars='events,eVar64,prop64,prop10';
            s.linkTrackEvents='event64';
            s.events='event64';
            s.eVar64=s.prop64=prop;
            s.prop10=showName;
            s.tl(this,'o',descr);
            s.manageVars("clearVars", s.linkTrackVars, 1);
          }
        });
      });

      // Click on menu item
      $('#block-usanetwork-blocks-usa-meganav .mega-menu-items a, #logo a').once('omniture-tracking', function() {
        $(this).on('click', function(e){
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
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
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            s.linkTrackVars='events,eVar64,prop64';
            s.linkTrackEvents='event64';
            s.events='event64';
            var sub_menu_name = $self.text();

            var $parent = $self.parent('li');
            $parent.parents('li').each(function() {
              sub_menu_name = $(this).children('a').text() + ' : ' + sub_menu_name;
            });

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
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
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
      // Featured and Full Episodes
      $('.field-name-field-hp-promos .node a, #block-views-usa-mpx-video-front-full-epsds .file a').once('omniture-tracking', function() {
        var $self = $(this);
        var $items = $self.closest('.carousel').find('.carousel-item > div');
        var $node = $self.closest('.carousel-item').children('div');
        var promoLocation = $items.index($node) + 1;
        $node.attr('omniture-index', promoLocation);

        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var promoLocation = $node.attr('omniture-index');
            if ($self.closest('.field-name-field-hp-promos').length > 0) {
              promoLocation = 'F' + promoLocation;
            }
            else {
              promoLocation = 'FEP' + promoLocation;
            }

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
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
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
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
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

      // Showpage more button
      $('.node-type-tv-show .expandable-toggle-wrap').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          var $self = $(this);
          if ($self.find('.more:visible').length == 0) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              s.linkTrackVars = 'events,eVar65,prop65';
              s.linkTrackEvents = s.events = 'event65';
              s.eVar65 = s.prop65 = 'Show Page : More';
              s.tl(this,'o','Show Page : More');
              s.manageVars('clearVars',s.linkTrackVars,1);
            }
          }
        });
      });

      // Showpage social links
      $('.region-content #usanetwork_social_chatter_title > a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            var id = $self.attr('id');
            var feedTitle = 'Social Feed';
            switch (id) {
              case 'navFb': feedTitle = 'Facebook Feed'; break;
              default:
                if (id.indexOf('nav') === 0) {
                  feedTitle = id.substr(3) + ' Feed';
                }
                break;
            }
            s.linkTrackVars = 'events,eVar65,prop65';
            s.linkTrackEvents = s.events = 'event65';
            s.eVar65 = s.prop65 = 'Show Page : ' + feedTitle;
            s.tl(this,'o','Show Page : Social Feed Click');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      // OnNow/UpNext social links
      $('#block-usanetwork-tv-schedule-usa-on-now-panel').once('omniture-tracking', function() {
        $(this).on('click', '#usanetwork_social_chatter_title > a', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            var id = $self.attr('id').replace('OnNow', '');
            var feedTitle = 'Social Feed';
            switch (id) {
              case 'navFb': feedTitle = 'Facebook Feed'; break;
              default:
                if (id.indexOf('nav') === 0) {
                  feedTitle = id.substr(3) + ' Feed';
                }
                break;
            }
            s.linkTrackVars = 'events,eVar65,prop65';
            s.linkTrackEvents = s.events = 'event65';
            s.eVar65 = s.prop65 = 'On Now : ' + feedTitle;
            s.tl(this,'o','On Now : Social Feed Click');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      // Show selection drop-down
      $('#block-usanetwork-video-usa-show-video-nav ul.shows a, #block-usanetwork-video-usa-global-video-nav ul.shows a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            var showName = $self.text();
            var href = $self.attr('href');

            s.bcf = function() {
              setTimeout(function() {
                window.location = href;
              }, 500);
            };

            s.linkTrackVars = 'events,eVar64,prop64';
            s.linkTrackEvents = s.events = 'event64';
            s.eVar64 = s.prop64 = 'Video Page : Show Selector : ' + showName;
            s.tl(this,'o','Video Page : Show Selector Click');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      // Show video categories
      $('#block-usanetwork-video-usa-show-video-nav ul.categories a, #block-usanetwork-video-usa-global-video-nav ul.categories a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            var category = $self.text();

            s.linkTrackVars = 'events,eVar65,prop65';
            s.linkTrackEvents = s.events = 'event65';
            s.eVar65 = s.prop65 = 'Video Page : ' + category;
            s.tl(this,'o','Video Page : View Selection Click');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      // Show-level breadcrumbs
      $('.show-banner .show-name > a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            var showName = $self.text();
            var href = $self.attr('href');

            s.bcf = function() {
              setTimeout(function() {
                window.location = href;
              }, 500);
            };

            s.linkTrackVars = 'events,eVar64,prop64';
            s.linkTrackEvents = s.events = 'event64';
            s.eVar64 = s.prop64 = 'Breadcrumb : ' + showName;
            s.tl(this,'o','Video Page : Show Selector Click');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      // Main nav show name
      $('#block-usanetwork-blocks-usa-tv-show-menu .tv-show-menu-trigger > a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            var showName = $self.text();
            var href = $self.attr('href');

            s.bcf = function() {
              setTimeout(function() {
                window.location = href;
              }, 500);
            };

            s.linkTrackVars = 'events,eVar64,prop64';
            s.linkTrackEvents = s.events = 'event64';
            s.eVar64 = s.prop64 = 'Main Nav : ' + showName;
            s.tl(this,'o','Footer Show Home Page Click');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      $('.field-type-gigya-sharebar').once('omniture-tracking', function() {
        $(this).on('click', '.gig-share-button', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            var $self = $(this);
            var $container = $self.parents('.gig-button-container');
            var network = 'Share';
            if ($container.hasClass('gig-button-container-facebook')) {
              network = 'Facebook';
            }
            else if ($container.hasClass('gig-button-container-twitter')) {
              network = 'Twitter';
            }
            else if ($container.hasClass('gig-button-container-tumblr')) {
              network = 'Tumblr';
            }
            else if ($container.hasClass('gig-button-container-pinterest')) {
              network = 'Pinterest';
            }

            s.linkTrackVars = 'events,eVar74';
            s.linkTrackEvents = 'event41';
            s.events = 'event41';
            s.eVar74 = network;
            s.tl(this,'o','Social Share');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });
      
      //tracking link to Live TV in header
      $('#block-usanetwork-tv-schedule-usa-on-now-block .content > a, #on-now-image a').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            var href = $self.attr('href');
            
            s.bcf = function() {
              setTimeout(function() {
                window.location = href;
              }, 500);
            };
            
            s.linkTrackVars = 'events,eVar65,prop65'; 
            s.linkTrackEvents = 'event65'; 
            s.events = 'event65'; 
            s.eVar65 = s.prop65 = 'Home Page : Watch Live'; 
            s.tl(this,'o','Page Item Click'); 
            s.manageVars('clearVars', s.linkTrackVars, 1);
          }
        });
      });
      
      //tracking link to Live TV on "On Now" tab
      $('#on-now-panel-tab').once('omniture-tracking', function() {
        $(this).on('click', '.show-on-now-wrapper > figure > a, #show-on-now-watch a', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            var $self = $(this);
            var href = $self.attr('href');
            
            s.bcf = function() {
              setTimeout(function() {
                window.location = href;
              }, 500);
            };
            
            s.linkTrackVars = 'events,eVar65,prop65'; 
            s.linkTrackEvents = 'event65'; 
            s.events = 'event65'; 
            s.eVar65 = s.prop65 = 'On Now : Watch Live';            
            s.tl(this,'o','Page Item Click'); 
            s.manageVars('clearVars', s.linkTrackVars, 1);
          }
        });
      });
      
      function ucfirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
      $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
          this.trigger(ev);
          return el.apply(this, arguments);
        };
      });
      
      //Quizes omniture tracking. Track show Question
      $('.usanetwork-quiz-questions .usanetwork-quiz-question').once('omniture-tracking', function() {
        $(this).on('show', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
         
            var quizes = settings.usanetwork_quiz;
            var quiz_setting = quizes[nid];
            var quizShow = quiz_setting['quizShow'],
            quizTitle = quiz_setting['quizTitle'],
            quizType = quiz_setting['quizType'];

            var quizQuestionNumber = $(this).index() + 1;
            var quizQuestionTitle = $(this).find('.question-title').text();
            
            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber;
            s.linkTrackVars='events,prop58,eVar58';
            s.linkTrackEvents=s.events='event88';
            s.eVar58=s.prop58=quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestionTitle;
            s.tl(this,'o','Poll/Question Shown'); 
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });
      
      //Quizes omniture tracking. Track answer Question
      $('.usanetwork-quiz-questions .usanetwork-quiz-question .answers .usanetwork-quiz-answer').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
         
            var quizes = settings.usanetwork_quiz;
            var quiz_setting = quizes[nid];
            var quizShow = quiz_setting['quizShow'],
            quizTitle = quiz_setting['quizTitle'],
            quizType = quiz_setting['quizType'];

            var $quizQuestion = $(this).parents('.usanetwork-quiz-question');
            var quizQuestionNumber = $quizQuestion.index() + 1;
            var quizQuestionValue = $(this).attr('value');
            
            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question '+quizQuestionNumber;
            s.linkTrackVars='events,prop58,eVar58';
            s.linkTrackEvents=s.events='event89';
            s.eVar58=s.pageName;
            s.prop58=quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question '+quizQuestionNumber+' : Answer : ' + quizQuestionValue;
            s.tl(this,'o','Poll/Question Answered'); 
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });
      
      //Quizes omniture tracking. Track restart button
      $('.usanetwork-quiz-results input[type="button"]').once('omniture-tracking', function() {
        $(this).on('click', function(e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
         
            var quizes = settings.usanetwork_quiz;
            var quiz_setting = quizes[nid];
            var quizShow = quiz_setting['quizShow'],
            quizTitle = quiz_setting['quizTitle'],
            quizType = quiz_setting['quizType'];
            
            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType);
            s.linkTrackVars='events,eVar65,prop65';
            s.linkTrackEvents=s.events='event65';
            s.eVar65 = s.prop65 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Restart Button';
            s.tl(this,'o','Restart'); 
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });
    }
  }
}(jQuery));
