/*
 * Omniture Tracking Menu Links Code
 */
(function ($) {
  Drupal.behaviors.omniture_tracking = {
    omniturePresent: function () {
      if (typeof s == 'object'
          && typeof s.tl == 'function'
          && typeof s.manageVars == 'function') {
        return true;
      }
      false;
    },

    //----------- redesign ---------------

    // main menu elem click
    mainMenuTabs: function (elem) {
      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

        var $self = elem,
            menu_name;

        if ($self.hasClass('logo')) {
          menu_name = 'Home';
        } else {
          menu_name = $self.text();
        }

        if ($self.hasClass('active')) {
          // do not track when closing
          return;
        }

        s.linkTrackVars = 'events,eVar63';
        s.linkTrackEvents = s.events = 'event63';
        s.eVar63 = menu_name;

        if (!$self.hasClass('no-refresh') && $self.attr('href') != '#') {
          s.bcf = function () {
            setTimeout(function () {
              window.location = $self.attr('href');
            }, 500);
          };
        }
        s.tl(this, 'o', 'Global Menu Click');
        s.manageVars("clearVars", s.linkTrackVars, 1);
      }
    },

    subMenuItems: function (elem, name) {

      var $self = elem;

      s.linkTrackVars = 'events,eVar64';
      s.linkTrackEvents = s.events = 'event64';
      s.eVar64 = name;
      if (!$self.hasClass('seeit-reminder') && $self.attr('href') != '#') {
        s.bcf = function () {
          setTimeout(function () {
            window.location = $self.attr('href');
          }, 500);
        };
      }
      s.tl(this, 'o', 'Global SubMenu Click');
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    infiniteScroll: function (counter, event) {
      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
        if (event === "click") {

          s.linkTrackVars = 'events,eVar21';
          s.linkTrackEvents = s.events = 'event4';
          //s.linkTrackEvents = s.events = 'event4,event6';
          s.eVar21 = "Page " + counter;

          s.tl(this, 'o', 'Infinite Scroll Click Load');
          s.manageVars("clearVars", s.linkTrackVars, 1);

        } else {

          s.linkTrackVars = 'events,eVar21';
          s.linkTrackEvents = s.events = 'event5';
          //s.linkTrackEvents = s.events = 'event5,event6';
          s.eVar21 = "Page " + counter;

          s.tl(this, 'o', 'Infinite Scroll Auto Load');
          s.manageVars("clearVars", s.linkTrackVars, 1);
        }
        void (s.t());
      }
    },

    newPageView: function (name) {
      if (typeof s_gi != 'undefined') {
        s.linkTrackVars = 'events,prop5';
        s.prop5 = name.trim();
        void (s.t());
      }
    },

    scheduleBar: function (elem) {

      var $self = elem,
          item_name = '',
          showName,
          name;


      if ($self.hasClass('icon')) {

        showName = $self.closest('.schedule-item-wrap').find('.episode-show-wrapper').html().split('<br>');
        name = $self.data('name').trim();
        item_name = name.charAt(0).toUpperCase() + name.substr(1) + ' : ' +showName[0].trim();

      } else if ($self.hasClass('on-now-link')) {
        //
        //name = $self.closest('.schedule-item-wrap').find('.episode-show-wrapper').text().trim();
        //item_name = 'Show : ' + name;

        item_name = 'On Now';

      } else if ($self.hasClass('up-next-link')) {

        item_name = 'Up Next';

      } else {

        item_name = $self.text().trim();

      }

      s.linkTrackVars = 'events,eVar65';
      s.linkTrackEvents = s.events = 'event65';
      s.eVar65 = 'Schedule Bar : ' + item_name;

      if (!$self.hasClass('no-link') && $self.attr('href') != '#') {
        s.bcf = function () {
          setTimeout(function () {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this, 'o', 'Schedule Bar Click');
      s.manageVars("clearVars", s.linkTrackVars, 1);
    },

    socialFollow: function (elem) {

      var $self = elem,
          social_name = $self.data('name'),
          name = social_name.charAt(0).toUpperCase() + social_name.substr(1);

      s.linkTrackVars = 'events,eVar74';
      s.linkTrackEvents = s.events = 'event40';
      s.eVar74 = name;

      if ($self.attr('href') != '#') {
        s.bcf = function () {
          setTimeout(function () {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this, 'o', 'Social Follow');
      s.manageVars("clearVars", s.linkTrackVars, 1);
    },

    footerMenuItem: function (elem) {

      var $self = elem,
          link_name = $self.text().replace(' New!', '');

      s.linkTrackVars = 'events,eVar63,eVar64';
      s.linkTrackEvents = s.events = 'event63,event64';
      s.eVar63 = 'Footer';
      s.eVar64 = link_name;

      if ($self.attr('href') != '#') {
        s.bcf = function () {
          setTimeout(function () {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this, 'o', 'Footer Item Clicked');
      s.manageVars("clearVars", s.linkTrackVars, 1);
    },

    showCardClick: function (item_node) {

      var show_name = item_node.find($('.show-open .title')).text();

      //s.linkTrackVars = 'events,prop4,prop10';
      //s.linkTrackEvents = s.events = 'event6';
      //s.prop4 = show_name + ' : Home Page Show Card';
      //s.prop10 = show_name;

      if (typeof s_gi != 'undefined') {
        s.linkTrackVars = 'events,prop4,prop10';
        s.prop4 = show_name + ' : Home Page Show Card';
        s.prop10 = show_name;
        void (s.t());
      }

      s.linkTrackEvents = s.events = 'event51';
      s.prop4 = s.prop10 = '';
      s.tl(this, 'o', 'Home Page Show Card Click');
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    showCardPromoClick: function ($self, name, prop4, prop10) {

      s.linkTrackVars = 'events,prop4,prop10,eVar55';
      s.prop4 = prop4;
      s.prop10 = prop10;
      s.linkTrackEvents = s.events = 'event51';
      s.eVar55 = name;

      if ($self.attr('href') != '#' && $self.find('.show-open').length === 0) {
        s.bcf = function () {
          setTimeout(function () {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this, 'o', name + ' Click');
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },
    promoClick: function ($self, name, show_name) {

      if (show_name === '') {
        s.linkTrackVars = 'events,eVar55';
        s.linkTrackEvents = s.events = 'event51';
        s.eVar55 = name;
      } else {
        s.linkTrackVars = 'events,eVar55,eVar33';
        s.linkTrackEvents = s.events = 'event51';
        s.eVar33 = show_name;
        s.eVar55 = name;
      }

      if ($self.attr('href') != '#' && $self.find('.show-open').length === 0) {
        s.bcf = function () {
          setTimeout(function () {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this, 'o', name + ' Click');
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    globalPromoClick: function (self) {
      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

        var body = $('body'),
            $self = self,
            global_show_name = $('header .nav-bar-tabs .show-name').text().trim() || '',
            show_name,
            page_name,
            name;

        // Home page
        if (body.hasClass('page-home')) {
          page_name = 'Home Page ';
          if ($self.closest('#block-usanetwork-home-usanetwork-home-shows-queue').length > 0) {
            name = page_name + 'Show Card Carousel';
          }
          if ($self.closest('#block-usanetwork-mpx-video-usa-mpx-video-home-full-latest').length > 0) {
            name = page_name + 'Full Latest Carousel';
          }
          if ($self.closest('.featured-block').length > 0) {
            name = page_name + 'Featured Carousel';
          }
          if ($self.closest('#block-usanetwork-blocks-usanetwork-social-carousel').length > 0) {
            name = page_name + 'Social Carousel';
          }
        }

        // Show page
        if (body.hasClass('usa-tv-show')) {
          page_name = 'Show Page ';
          if ($self.closest('.aspot-and-episodes .episodes-list').length > 0) {
            name = page_name + 'Latest Full Episodes Block';
          }
          if ($self.closest('.best-of-block').length > 0) {
            name = page_name + $('.best-of-block .section-title').text() + 'Block';
          }
          if ($self.closest('.show-latest-block').length > 0) {
            name = page_name + 'The Latest Block';
          }
        }

        // Show videos page
        if (body.hasClass('page-node-videos')) {
          page_name = 'Show Videos Page ';
          if ($self.closest('#block-usanetwork-tv-shows-usanetwork-tv-shows-video-vl').length > 0) {
            name = page_name + 'All Videos Block';
          }
        }

        // Page shows
        if (body.hasClass('page-shows')) {
          page_name = 'Shows Page ';
          if ($self.closest('#block-usanetwork-tv-shows-usanetwork-tv-shows-all-shows').length > 0) {
            name = page_name + 'All Shows';
          }
        }

        // Full episodes page
        if (body.hasClass('page-videos')) {
          page_name = 'Full Episodes Page ';
          if ($self.closest('.carousel-block').length > 0) {
            show_name = $self.closest('.carousel-block').find('.description-block .title').text();
            name = page_name + show_name + ' Carousel';
          }
        }

        // Cast page
        if (body.hasClass('page-node-cast')) {
          page_name = 'Cast Page ';
          if ($self.closest('#block-usanetwork-person-usanetwork-person-cast-crew').length > 0) {
            name = page_name + 'Cast & Crew Block';
          }
        }

        // Catchall page
        if (body.hasClass('node-type-catchall-page')) {
          page_name = 'Catchall Page ';
          if ($self.closest('#block-usanetwork-blocks-usanetwork-catchall-related').length > 0) {
            name = page_name + 'Related Content Block';
          }
        }

        // Episode Consumptionator page
        if (body.hasClass('node-type-tv-episode')) {
          page_name = 'Episode Consumptionator Page ';
          if ($self.closest('.consumptionator-episode-main-block .episodes-list-slider').length > 0) {
            name = page_name + 'Episode Guides Carousel';
          }
          if ($self.closest('#block-usanetwork-episodes-usanetwork-episode-rel-content').length > 0) {
            name = page_name + 'Related Content Block';
          }
        }

        // Video Consumptionator page
        if (body.hasClass('consumptionator-video-page')) {
          page_name = 'Video Consumptionator Page ';
          if ($self.closest('.video-block .episodes-list-slider').length > 0) {
            name = page_name + 'Episodes Carousel';
          }
          if ($self.closest('#block-usanetwork-mpx-video-usa-mpx-cons-related').length > 0) {
            name = page_name + 'Related Content Block';
          }
        }

        // Person Consumptionator page
        if (body.hasClass('node-type-person')) {
          page_name = 'Person Consumptionator Page ';
          if ($self.closest('.consumptionator-characters-main-block .episodes-list-slider').length > 0) {
            name = page_name + 'Character Carousel';
          }
          if ($self.closest('#block-usanetwork-person-usa-cons-chars-related-content').length > 0) {
            name = page_name + 'Related Content Block';
          }
        }

        // Media Gallery Consumptionator page
        if (body.hasClass('node-type-media-gallery')) {
          page_name = 'Gallery Consumptionator Page ';
          if ($self.closest('#block-usanetwork-media-gallery-usa-gallery-consumptionator-main .episodes-list-slider').length > 0) {
            name = page_name + 'Episode Galleries Block';
          }
          if ($self.closest('#block-usanetwork-media-gallery-usa-gallery-cons-related').length > 0) {
            name = page_name + 'Related Content Block';
          }
        }

        // init omniture tracking
        Drupal.behaviors.omniture_tracking.promoClick($self, name, global_show_name);
      }
    },

    // max number of characters to send to Omniture for questions
    omnitureMaxQuestionCharacters: 35,

    attach: function (context, settings) {
      if (typeof s != 'object') {
        return;
      }

      //redesign
      if (!$('body').hasClass('page-node-microsite')) {

        // Click promo item
        $('.usa-wrap .node-usanetwork-promo a,' +
        '#block-usanetwork-home-usanetwork-home-shows-queue .promos-list a,' +
        '#block-usanetwork-home-usanetwork-home-shows-queue .show-link a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            if(self.closest('#block-usanetwork-home-usanetwork-home-shows-queue').length > 0) {

              var name = 'Home Page Show Card Carousel',
                item_show_name = $('#block-usanetwork-home-usanetwork-home-shows-queue div.open .show-open .title').text(),
                prop4 = item_show_name + ' : Home Page Show Card',
                prop10 = item_show_name;

              Drupal.behaviors.omniture_tracking.showCardPromoClick(self, name, prop4, prop10);
            } else {
              Drupal.behaviors.omniture_tracking.globalPromoClick(self);
            }
          });
        });


        // Click main menu links
        $('#block-usanetwork-menu-usanetwork-menu-sm-menu .usa-logo a,' +
        '#block-usanetwork-menu-usanetwork-menu-consumptionator .usa-logo a,' +
        '#block-usanetwork-menu-usanetwork-menu-consumptionator .nav-bar-tabs .show-name a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              e.preventDefault();
              Drupal.behaviors.omniture_tracking.mainMenuTabs($(this));
            }
          });
        });

        // Click on submenu item
        $('#block-usanetwork-menu-usanetwork-menu-sm-menu .tab-content .shows-tab a,' +
        '.pane-usanetwork-menu-usanetwork-menu-sm-main .menu .categorized-menu a,' +
        '.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu .title a,' +
        '.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu .show-menu-tab a,' +
        '.pane-usanetwork-menu-usanetwork-menu-sm-full-episodes a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              e.preventDefault();

              var $self = $(this),
                  sub_menu_name;

              if ($self.hasClass('full-episodes-link')) {
                sub_menu_name = $self.data('name');
              } else {
                sub_menu_name = $self.text();
              }

              Drupal.behaviors.omniture_tracking.subMenuItems($self, sub_menu_name);
            }
          });
        });

        // Click on submenu schedule items
        $('header .schedule-tab a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              e.preventDefault();

              var $self = $(this),
                  sub_menu_name = '',
                  name,
                  paneTitle,
                  itemName;

              if($self.closest('.pane-usanetwork-menu-usanetwork-menu-sm-now-and-next').length > 0) {

                paneTitle = $self.closest('.node-usanetwork-promo').find('h2').text().trim();
                itemName = $self.closest('.node-usanetwork-promo').find('.title').text().trim();

                if($self.hasClass('live-icon')){

                  name = $self.text().trim();

                } else if($self.data('name') === 'description' || $self.data('name') === 'reminder') {

                  name = $self.data('name');
                  sub_menu_name = paneTitle + ' : ' + name.charAt(0).toUpperCase() + name.substr(1) + ' : ' + itemName;

                } else {

                  sub_menu_name = $self.text();

                }

              } else if($self.closest('.pane-usanetwork-menu-usanetwork-menu-sm-primetime').length > 0) {

                name = $self.data('name');
                paneTitle = $('.pane-usanetwork-menu-usanetwork-menu-sm-primetime h2.pane-title').text().trim();
                itemName = $self.closest('.schedule-item').find('.episode-show').text().trim();
                sub_menu_name = paneTitle + ' : ' + name.charAt(0).toUpperCase() + name.substr(1) + ' : ' + itemName;

              } else {

                name = $self.text();
                sub_menu_name = name.charAt(0).toUpperCase() + name.substr(1);

              }

              Drupal.behaviors.omniture_tracking.subMenuItems($self, sub_menu_name);
            }
          });
        });

        // Click on Social Follow item
        $('#block-usanetwork-home-usanetwork-home-shows-queue .social-follow a,' +
        'header .show-title-block-wrapper .social-follow a,' +
        '.footer-social-bar a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              e.preventDefault();
              Drupal.behaviors.omniture_tracking.socialFollow($(this));
            }
          });
        });

        // Click on node-type-person data-tab character-bio / actor-bio
        $('#block-usanetwork-person-usa-cons-chars-main-block .description li[data-tab]').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              var name = $(this).text().trim();
              Drupal.behaviors.omniture_tracking.newPageView(name);
            }
          });
        });

        // Gigya share bar
        $('.field-type-gigya-sharebar').once('omniture-tracking', function () {
          $(this).on('click', '.gig-share-button', function (e) {
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

              var name = '';

              if ($(this).closest('.gallery-wrapper').length > 0) {

                name = $('.gallery-wrapper .slide').eq(0).find('.gallery-name').text();

              } else if ($(this).closest('header .tab-item-wrapper').length > 0) {

                name = $('header .tab-item-wrapper .node-usanetwork-promo .title').text();

              } else if ($(this).closest('.block-character-info-header').length > 0) {

                name = $('.block-character-info-header .full-name').text();

              } else if ($(this).closest('.episode-info-block').length > 0) {

                name = $('.episode-info-block .episode-title').text();

              }

              s.linkTrackVars = 'events,eVar73,eVar74';
              s.linkTrackEvents = s.events = 'event41';
              s.eVar73 = name.trim();
              s.eVar74 = network;
              s.tl(this, 'o', 'Social Share');
              s.manageVars('clearVars', s.linkTrackVars, 1);
            }
          });
        });

        //Click on footer item
        $('#footer .footer-menu-wrapper a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              e.preventDefault();
              Drupal.behaviors.omniture_tracking.footerMenuItem($(this));
            }
          });
        });

        $(window).load(function () {
          //Click on ON NOW / TONIGHT items
          $('#block-usanetwork-menu-usanetwork-menu-aspot-ot a').once('omniture-tracking', function () {
            $(this).on('click', function (e) {
              if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
                e.preventDefault();
                Drupal.behaviors.omniture_tracking.scheduleBar($(this));
              }
            });
          });
        });
      }
      //-------- end --------


      function ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
          this.trigger(ev);
          return el.apply(this, arguments);
        };
      });

      // Quizzes omniture tracking. Track show Question
      $('.usanetwork-quiz-questions .usanetwork-quiz-question').once('omniture-tracking', function () {
        $(this).on('show', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            if (!$(this).hasClass('shown')) {
              $(this).addClass('shown');
              var quizes = settings.usanetwork_quiz;
              var quiz_setting = quizes[nid];
              var quizShow = quiz_setting['quizShow'],
                  quizTitle = quiz_setting['quizTitle'],
                  quizType = quiz_setting['quizType'];

              var quizQuestionNumber = $(this).index() + 1;
              var quizQuestionTitle = $(this).find('.question-title').text();
              var quizQuestion = (quizQuestionTitle.length > Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) ? quizQuestionTitle.substr(0, Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) + '...' : quizQuestionTitle;

              s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber;
              s.linkTrackVars = 'events,prop58,eVar58';
              s.linkTrackEvents = s.events = 'event88';
              s.eVar58 = s.prop58 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestion;
              s.tl(this, 'o', 'Poll/Question Shown');
              s.manageVars('clearVars', s.linkTrackVars, 1);
            }
          }
        });
      });

      // Quizzes omniture tracking. Track answer Question
      $('.usanetwork-quiz-questions .usanetwork-quiz-question .answers .usanetwork-quiz-answer').once('omniture-tracking', function () {
        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            if (!$(this).hasClass('answered')) {
              $(this).addClass('answered');
              var quizes = settings.usanetwork_quiz;
              var quiz_setting = quizes[nid];
              var quizShow = quiz_setting['quizShow'],
                  quizTitle = quiz_setting['quizTitle'],
                  quizType = quiz_setting['quizType'];

              var $quizQuestion = $(this).parents('.usanetwork-quiz-question');
              var quizQuestionNumber = $quizQuestion.index() + 1;
              var quizQuestionTitle = $(this).closest('.usanetwork-quiz-question').find('.question-title').text();
              var quizQuestionValue = $(this).attr('value');
              var quizQuestion = (quizQuestionTitle.length > Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) ? quizQuestionTitle.substr(0, Drupal.behaviors.omniture_tracking.omnitureMaxQuestionCharacters) + '...' : quizQuestionTitle;

              s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber;
              s.linkTrackVars = 'events,prop58,eVar58';
              s.linkTrackEvents = s.events = 'event89';
              s.eVar58 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestion;
              s.prop58 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Question ' + quizQuestionNumber + ' : ' + quizQuestion + ' : Answer : ' + quizQuestionValue;
              s.tl(this, 'o', 'Poll/Question Answered');
              s.manageVars('clearVars', s.linkTrackVars, 1);
            }
          }
        });
      });

      // Quizes omniture tracking. Track restart button
      $('.usanetwork-quiz-results input[type="button"]').once('omniture-tracking', function () {
        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
            $('.usanetwork-quiz-questions .usanetwork-quiz-question').removeClass('shown');
            $('.usanetwork-quiz-questions .usanetwork-quiz-question .answers .usanetwork-quiz-answer').removeClass('answered');

            var quizes = settings.usanetwork_quiz;
            var quiz_setting = quizes[nid];
            var quizShow = quiz_setting['quizShow'],
                quizTitle = quiz_setting['quizTitle'],
                quizType = quiz_setting['quizType'];

            s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType);
            s.linkTrackVars = 'events,eVar65,prop65';
            s.linkTrackEvents = s.events = 'event65';
            s.eVar65 = s.prop65 = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Restart Button';
            s.tl(this, 'o', 'Restart');
            s.manageVars('clearVars', s.linkTrackVars, 1);
          }
        });
      });
    }
  }
}(jQuery));
