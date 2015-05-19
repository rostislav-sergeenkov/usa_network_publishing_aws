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

    //----------- redesign ---------------

    // main menu elem click
    mainMenuTabs: function (elem) {
      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

        var $self = elem,
            menu_name = $self.text();

        if ($self.hasClass('active')) {
          // do not track when closing
          return;
        }

        s.linkTrackVars='events,eVar63';
        s.linkTrackEvents = s.events = 'event63';
        s.eVar63 = menu_name;

        if (!$self.hasClass('no-refresh') && $self.attr('href') != '#') {
          s.bcf = function() {
            setTimeout(function() {
              window.location = $self.attr('href');
            }, 500);
          };
        }
        s.tl(this,'o','Global Menu Click');
        s.manageVars("clearVars", s.linkTrackVars, 1);
      }
    },

    subMenuItems: function (elem, name) {

      var $self = elem;

      s.linkTrackVars='events,eVar64';
      s.linkTrackEvents = s.events = 'event64';
      s.eVar64 = name;

      if ($self.attr('href') != '#') {
        s.bcf = function() {
          setTimeout(function() {
            window.location = $self.attr('href');
          }, 500);
        };
      }
      s.tl(this,'o','Global SubMenu Click');
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    infiniteScroll: function (counter, event) {
      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
        if(event === "click") {

          s.linkTrackVars='events,eVar21';
          s.linkTrackEvents = s.events = 'event4';
          s.eVar21 = counter;

          s.tl(this,'o','Infinite Scroll Click Load');
          s.manageVars("clearVars", s.linkTrackVars, 1);

        } else {

          s.linkTrackVars='events,eVar21';
          s.linkTrackEvents = s.events = 'event5';
          s.eVar21 = counter;

          s.tl(this,'o','Infinite Scroll Auto Load');
          s.manageVars("clearVars", s.linkTrackVars, 1);
        }
      }
    },

    photoGalleries: function () {
      if (typeof s_gi != 'undefined') {
        void (s.t());
      }
    },

    scheduleBar: function (elem) {

      var $self = elem,
          item_name = '',
          name;

      if($self.hasClass('icon')) {

        name = $self.data('name');
        item_name = name.charAt(0).toUpperCase() + name.substr(1);

      } else if ($self.hasClass('on-now-link') || $self.hasClass('up-next-link') && item_name === ''){

        name = $self.closest('.schedule-item-wrap').find('.episode-show-wrapper').text();
        item_name = 'Show : ' + name;

      } else {

        item_name = $self.text();

      }

      s.linkTrackVars='events,eVar65';
      s.linkTrackEvents = s.events = 'event65';
      s.eVar65 = 'Schedule Bar : ' + item_name;

      //name = social_name.charAt(0).toUpperCase() + social_name.substr(1);

      if (!$self.hasClass('no-link') && $self.attr('href') != '#') {
        s.bcf = function() {
          setTimeout(function() {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this,'o','Schedule Bar Click');
      s.manageVars("clearVars", s.linkTrackVars, 1);
    },

    socialFollow: function (elem) {

      var $self = elem,
          social_name = $self.data('name'),
          name = social_name.charAt(0).toUpperCase() + social_name.substr(1);

      s.linkTrackVars='events,eVar74';
      s.linkTrackEvents = s.events = 'event40';
      s.eVar74 = name;

      if ($self.attr('href') != '#') {
        s.bcf = function() {
          setTimeout(function() {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this,'o','Social Follow');
      s.manageVars("clearVars", s.linkTrackVars, 1);
    },

    footerMenuItem: function (elem) {

      var $self = elem,
          link_name = $self.text();

      s.linkTrackVars='events,eVar63,eVar64';
      s.linkTrackEvents = s.events = 'event63,event64’';
      s.eVar63 = 'Footer';
      s.eVar64 = link_name;

      if ($self.attr('href') != '#') {
        s.bcf = function() {
          setTimeout(function() {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this,'o','Footer Item Clicked');
      s.manageVars("clearVars", s.linkTrackVars, 1);
    },

    attach: function (context, settings) {
      if (typeof s != 'object') {
        return;
      }

      //redesign

      // Click main menu links
      $('#block-usanetwork-menu-usanetwork-menu-sm-menu .usa-logo a,' +
      '#block-usanetwork-menu-usanetwork-menu-consumptionator .usa-logo a,' +
      '#block-usanetwork-menu-usanetwork-menu-consumptionator .nav-bar-tabs .show-name a').once('omniture-tracking', function() {
        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            Drupal.behaviors.omniture_tracking.mainMenuTabs($(this));
          }
        });
      });

      //Click on submenu item
      $('#block-usanetwork-menu-usanetwork-menu-sm-menu .tab-content .shows-tab a,' +
      '.pane-usanetwork-menu-usanetwork-menu-sm-main .menu .categorized-menu a,' +
      '.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu .title a,' +
      '.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu .show-menu-tab a,' +
      '.pane-usanetwork-menu-usanetwork-menu-sm-full-episodes a').once('omniture-tracking', function() {
        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();

            var $self = $(this),
                sub_menu_name;

            if($self.hasClass('full-episodes-link')) {
              sub_menu_name = $self.data('name');
            } else {
              sub_menu_name = $self.text();
            }

            Drupal.behaviors.omniture_tracking.subMenuItems($self, sub_menu_name);
          }
        });
      });

      // Click on submenu schedule items
      $('.schedule-tab .pane-usanetwork-menu-usanetwork-menu-sm-now-and-next .node-usanetwork-promo a,' +
      '.schedule-tab .pane-usanetwork-menu-usanetwork-menu-sm-now-and-next .on-now-panel-title a,' +
      '.schedule-tab .pane-usanetwork-menu-usanetwork-menu-sm-now-and-next .icons-block a.live-icon,' +
      '.schedule-tab .pane-usanetwork-menu-usanetwork-menu-sm-primetime a.more').once('omniture-tracking', function() {
        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();

            var $self = $(this),
                sub_menu_name = '';

            if($self.closest('.on-now-panel-title').length) {
              sub_menu_name = $self.text();
            } else if($self.closest('.node-usanetwork-promo').length && !$self.hasClass('live-icon') && sub_menu_name === '') {
              sub_menu_name = $self.closest('.node-usanetwork-promo').find('.title-overlay .title').text();
            } else {
              sub_menu_name = $self.text();
            }

            Drupal.behaviors.omniture_tracking.subMenuItems($self, sub_menu_name);
          }
        });
      });

      //Click on Social Follow item
      $('#block-usanetwork-home-usanetwork-home-shows-queue .social-follow a,' +
      'header .show-title-block-wrapper .social-follow a').once('omniture-tracking', function() {
        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            Drupal.behaviors.omniture_tracking.socialFollow($(this));
          }
        });
      });

      // Gigya share bar
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

            s.linkTrackVars = 'events,eVar73,eVar74';
            s.linkTrackEvents = s.events = 'event41';
            s.eVar73 = 'example Patrick J. Adams Interview'; //todo add title name
            s.eVar74 = network;
            s.tl(this,'o','Social Share');
            s.manageVars('clearVars',s.linkTrackVars,1);
          }
        });
      });

      //Click on footer item
      $('#footer .footer-menu-wrapper a').once('omniture-tracking', function() {
        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            e.preventDefault();
            Drupal.behaviors.omniture_tracking.footerMenuItem($(this));
          }
        });
      });

      $(window).load(function () {
        //Click on ON NOW / TONIGHT items
        $('#block-usanetwork-menu-usanetwork-menu-aspot-ot a').once('omniture-tracking', function() {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              e.preventDefault();
              Drupal.behaviors.omniture_tracking.scheduleBar($(this));
            }
          });
        });
      });

      //-------- end --------

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
      $('.field-name-field-hp-promos .node a, #block-views-usa-mpx-video-front-full-epsds .file a, #block-usanetwork-home-usanetwork-home-promo-carousel .node a').once('omniture-tracking', function() {
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
            var quizQuestionTitle = $(this).closest('.usanetwork-quiz-question').find('.question-title').text();
            var quizQuestionValue = $(this).attr('value');

            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question '+quizQuestionNumber;
            s.linkTrackVars='events,prop58,eVar58';
            s.linkTrackEvents=s.events='event89';
            s.eVar58=s.prop58=quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestionTitle + ' : Answer : ' + quizQuestionValue;
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
