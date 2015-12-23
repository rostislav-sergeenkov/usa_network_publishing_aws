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

    goToUrl: function (elem) {
      if(elem.attr('href').indexOf('enhanced') + 1) {

      } else if (elem.attr('target') == '_blank') {

      }
      else {
        setTimeout(function () {
          window.location = elem.attr('href');
        }, 500);
      }
    },

    //----------- redesign ---------------

    // top 3
    top3: {
      changeSlide: function (at_params, slideIndex) {
        AdobeTracking.pageName = at_params.showName + ': ' + at_params.nodeType + ' : ' + at_params.pageName + ': Clip ' + slideIndex;
        _satellite.track('virtPageTrack');
      },
      itemSelected: function (at_params) {
        AdobeTracking.clickedPageItem = at_params.showName + ': ' + at_params.nodeType + ' : ' + at_params.pageName + ': Clip Selected';
        _satellite.track('pageItemClicked');
      },
      endButton: function (at_params) {
        AdobeTracking.clickedPageItem = at_params.showName + ': ' + at_params.nodeType + ' : ' + at_params.pageName + ': ' + at_params.endButtons;
        _satellite.track('pageItemClicked');
      },
      share: function (at_params) {
        // Click on share
        $('#gigya-share-top3 .gig-button').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

              var selfId = $(this).attr('id'),
                  socialNetwork = gigya.services.socialize.plugins.reactions.instances['gigya-share-top3'].buttonInstances[selfId].id,
                  socialNetworkName = socialNetwork.charAt(0).toUpperCase() + socialNetwork.substr(1);

              AdobeTracking.socialNetwork = socialNetworkName;
              AdobeTracking.itemShared = at_params.showName + ': ' + at_params.nodeType + ' : ' + at_params.pageName;
              _satellite.track('socialShare');
            }
          });
        });
      }
    },

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
          s.goToUrl = function () {
            Drupal.behaviors.omniture_tracking.goToUrl($self);
          };
        }
        s.tl(this, 'o', 'Global Menu Click', null, s.goToUrl);
        s.manageVars("clearVars", s.linkTrackVars, 1);
      }
    },

    subMenuItems: function (elem, name) {

      var $self = elem;

      s.linkTrackVars = 'events,eVar64';
      s.linkTrackEvents = s.events = 'event64';
      s.eVar64 = name;
      if (!$self.hasClass('seeit-reminder') && $self.attr('href') != '#') {
        s.goToUrl = function () {
          Drupal.behaviors.omniture_tracking.goToUrl($self);
        };
      }
      s.tl(this, 'o', 'Global SubMenu Click', null, s.goToUrl);
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    infiniteScroll: function (counter, event) {
      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
        if (event === "click") {

          s.linkTrackVars = 'events,eVar21';
          //s.linkTrackEvents = s.events = 'event4';
          s.linkTrackEvents = s.events = 'event4,event6';
          s.eVar21 = "Page " + counter;

          s.tl(this, 'o', 'Infinite Scroll Click Load');
          s.manageVars("clearVars", s.linkTrackVars, 1);

        } else {

          s.linkTrackVars = 'events,eVar21';
          //s.linkTrackEvents = s.events = 'event5';
          s.linkTrackEvents = s.events = 'event5,event6';
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
        item_name = name.charAt(0).toUpperCase() + name.substr(1) + ' : ' + showName[0].trim();

      } else if ($self.hasClass('on-now-link')) {
        //
        //name = $self.closest('.schedule-item-wrap').find('.episode-show-wrapper').text().trim();
        //item_name = 'Show : ' + name;

        item_name = 'Live Watch Now';

      } else if ($self.hasClass('up-next-link')) {

        item_name = 'Up Next';

      } else {

        item_name = $self.text().trim();

      }

      s.linkTrackVars = 'events,eVar65';
      s.linkTrackEvents = s.events = 'event65';
      s.eVar65 = 'Schedule Bar : ' + item_name;

      if (!$self.hasClass('no-link') && $self.attr('href') != '#') {
        s.goToUrl = function () {
          Drupal.behaviors.omniture_tracking.goToUrl($self);
        };
      }

      s.tl(this, 'o', 'Schedule Bar Click', null, s.goToUrl);
      s.manageVars("clearVars", s.linkTrackVars, 1);
    },

    schedulePage: function (showName) {
      s.linkTrackVars = 'events,eVar65';
      s.linkTrackEvents = s.events = 'event65';
      s.eVar65 = 'Schedule Page : Reminder : ' + showName;
      s.tl(this, 'o', 'Schedule Page Click');
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
        s.goToUrl = function () {
          Drupal.behaviors.omniture_tracking.goToUrl($self);
        };
      }

      s.tl(this, 'o', 'Social Follow', null, s.goToUrl);
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
        s.goToUrl = function () {
          Drupal.behaviors.omniture_tracking.goToUrl($self);
        };
      }

      s.tl(this, 'o', 'Footer Item Clicked', null, s.goToUrl);
      s.manageVars("clearVars", s.linkTrackVars, 1);
    },

    showCardClick: function (item_node) {

      var show_name = item_node.find($('.show-open .title')).text();

      //s.linkTrackVars = 'events,prop4,prop10';
      //s.linkTrackEvents = s.events = 'event6';
      //s.prop4 = show_name + ' : Home Page Show Card';
      //s.prop10 = show_name;

      if (typeof s_gi != 'undefined') {
        s.linkTrackEvents = s.events = 'event51';
        s.linkTrackVars = 'events,prop4,prop10';
        s.prop4 = show_name + ' : Home Page Show Card';
        s.prop10 = show_name;
        void (s.t());
      }


      //s.prop4 = s.prop10 = '';
      //s.tl(this, 'o', 'Home Page Show Card Click');
      //s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    showCardPromoClick: function ($self, name, prop4, prop10) {

      s.linkTrackVars = 'events,prop4,prop10,eVar55';
      s.prop4 = prop4;
      s.prop10 = prop10;
      s.linkTrackEvents = s.events = 'event51';
      s.eVar55 = name;

      if ($self.attr('href') != '#' && $self.find('.show-open').length === 0) {
        s.goToUrl = function () {
          Drupal.behaviors.omniture_tracking.goToUrl($self);
        };
      }

      s.tl(this, 'o', name + ' Click', null, s.goToUrl);
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    aspotClick: function ($self, pageName, name, slideName) {

      if ($self.hasClass('next-button')) {
        s.linkTrackVars = 'events,eVar55,eVar33';
        s.linkTrackEvents = s.events = 'event51';
        s.eVar33 = name;
        s.eVar55 = pageName;
      } else {
        s.linkTrackVars = 'events,eVar55,eVar33,eVar35';
        s.linkTrackEvents = s.events = 'event51';
        s.eVar33 = slideName;
        s.eVar35 = name;
        s.eVar55 = pageName;
      }

      if ($self.attr('href') != '#' && !$self.hasClass('next-button')) {
        s.goToUrl = function () {
          Drupal.behaviors.omniture_tracking.goToUrl($self);
        };
      }

      s.tl(this, 'o', pageName + ' ' + name + ' Click', null, s.goToUrl);
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    carouselNavClick: function (fullName, nameNav) {

        s.linkTrackVars = 'events,eVar55,eVar33';
        s.linkTrackEvents = s.events = 'event51';
        s.eVar33 = nameNav;
        s.eVar55 = fullName;

      s.tl(this, 'o', fullName + ' ' + nameNav + ' Click');
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
        s.goToUrl = function () {
          Drupal.behaviors.omniture_tracking.goToUrl($self);
        };
      }

      s.tl(this, 'o', name + ' Click', null, s.goToUrl);
      s.manageVars('clearVars', s.linkTrackVars, 1);
    },

    globalPromoClick: function (self) {
      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

        var body = $('body'),
            $self = self,
            global_show_name = $('header .nav-bar-tabs .show-name').text().trim() || '',
            show_name,
            page_name,
            blockName,
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
            blockName = $('.best-of-block .section-title').text().trim();
            name = page_name + blockName + ' Block';
          }
          if ($self.closest('.show-latest-block').length > 0) {
            name = page_name + 'The Latest Block';
          }
        }

        // Show videos page
        if (body.hasClass('page-node-videos')) {
          page_name = 'Show Videos Page ';
          if ($self.closest('#block-usanetwork-tv-shows-usanetwork-tv-shows-video-lmb').length > 0) {
            name = page_name + 'Show Video Landing Main Block';
          }
          if ($self.closest('#block-usanetwork-tv-shows-usanetwork-tv-shows-video-vl').length > 0) {
            name = page_name + 'All Videos Block';
          }
        }

        // Movies page
        if (body.hasClass('page-movies')) {
          page_name = 'Movies Page ';
          if ($self.closest('#block-usanetwork-movie-usanetwork-movies-mb').length > 0) {
            name = page_name + 'Movies Main Block';
          }
          if ($self.closest('#block-usanetwork-movie-usanetwork-movies-all-movies').length > 0) {
            name = page_name + 'All Movies Block';
          }
        }

        // Movie page
        if (body.hasClass('node-type-movie')) {
          page_name = 'Movie Page ';
          //show_name = $('.show-title-block .title a').text().trim();
          if ($self.closest('#block-usanetwork-movie-usanetwork-movie-related').length > 0) {
            blockName = $('#block-usanetwork-movie-usanetwork-movie-related .section-title').text().trim();
            name = page_name + blockName + ' Block';
          }
          if ($self.closest('#block-usanetwork-movie-usanetwork-movie-cast-crew-block').length > 0) {
            name = page_name + 'Cast & Crew Block';
          }
        }

        // Show photos page
        if (body.hasClass('page-node-photos')) {
          page_name = 'Show Photos Page ';
          if ($self.closest('#block-usanetwork-media-gallery-usa-gallery-show-gallery-lmb').length > 0) {
            name = page_name + 'Show Photo Landing Main Block';
          }
          if ($self.closest('#block-usanetwork-media-gallery-usa-gallery-show-gallery-all').length > 0) {
            name = page_name + 'All Galleries Block';
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

        // Click on submenu item
        $('#block-usanetwork-menu-usanetwork-menu-sm-menu .tab-content .shows-tab a,' +
        '.pane-usanetwork-menu-usanetwork-menu-sm-main .menu .categorized-menu a,' +
        '.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu .title a,' +
        '.pane-usanetwork-tv-shows-usanetwork-tv-shows-submenu .show-menu-tab a,' +
        '.pane-usanetwork-menu-usanetwork-menu-sm-full-episodes a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }

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

        // Home Page A-spot click
        $( "#block-usanetwork-aspot-usanetwork-aspot-carousel a," +
        "#block-usanetwork-aspot-usanetwork-aspot-carousel .next-button," +
        ".aspot-and-episodes .show-aspot .slide a").once('omniture-tracking', function () {
        //$('#block-usanetwork-aspot-usanetwork-aspot-carousel a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }

              var target = $(this),
                  pageName = $('body').hasClass('page-home') ? 'Homepage A-Spot' : 'Show Landing A-Spot',
                  slideBlock, showName, titleName, slideName, name, titleField, titleClone;

              if (target.hasClass('next-button')) {
                name = 'Peek Ahead Strip';
              } else {
                slideBlock = target.closest('.node.usanetwork-aspot.');
                showName = slideBlock.data('show-name').trim();
                titleField = slideBlock.find('.slide-content .title');
                titleClone = titleField.clone();

                // check title value about tag style & br
                titleClone.find('br').replaceWith(' ');

                if (titleField.find('style').length > 0) {
                  // delete style from clone
                  titleClone.find('style').empty();
                  titleName = titleClone.text().trim();
                } else {
                  titleName = titleClone.text().trim();
                }

                slideName = showName + ' : ' + titleName;

                if (target.hasClass('asset-img-link')) {
                  name = 'BACKGROUND_IMAGE';
                } else if (target.hasClass('cta-button-link')) {
                  name = target.data('cta-link');
                } else if (target.hasClass('social-meter-link')) {
                  name = 'SOCIAL_INDICATOR';
                } else {
                  name = '';
                }
              }

              Drupal.behaviors.omniture_tracking.aspotClick(target, pageName, name, slideName);
            }
          })
        });

        // Click promo item
        $('.usa-wrap .node-usanetwork-promo a,' +
        '#block-usanetwork-home-usanetwork-home-shows-queue .promos-list a,' +
        '#block-usanetwork-home-usanetwork-home-shows-queue .show-link a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }
              var self = $(this);
              if (self.closest('#block-usanetwork-home-usanetwork-home-shows-queue').length > 0) {

                var name = 'Home Page Show Card Carousel',
                    item_show_name = $('#block-usanetwork-home-usanetwork-home-shows-queue div.open .show-open .title').text(),
                    prop4 = item_show_name + ' : Home Page Show Card',
                    prop10 = item_show_name;

                Drupal.behaviors.omniture_tracking.showCardPromoClick(self, name, prop4, prop10);
              } else {
                Drupal.behaviors.omniture_tracking.globalPromoClick(self);
              }
            }
          });
        });

        // Click promo item
        $('a.jcarousel-controls').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }

              var body = $('body'),
                  target = $(this),
                  pageName, blockName, nameNav, fullName;

              if (target.hasClass('jcarousel-control-prev')) {
                nameNav = 'Carousel Back';
              } else if (target.hasClass('jcarousel-control-next')) {
                nameNav = 'Carousel Next';
              }

              if (body.hasClass('page-home')) {
                pageName = 'Home Page';

                if (target.closest('.shows-block').length > 0) {
                  blockName = target.closest('.shows-block').data('block-name');
                } else if (target.closest('.full-episodes-block').length > 0) {
                  blockName = target.closest('.full-episodes-block').data('block-name');
                } else if (target.closest('.featured-block').length > 0) {
                  blockName = target.closest('.featured-block').data('block-name');
                } else if (target.closest('.social-block').length > 0) {
                  blockName = target.closest('.social-block').data('block-name');
                }


              } else if (body.hasClass('page-videos')) {
                pageName = 'Full Episodes Landing Page';
                blockName = target.closest('.carousel-block').data('block-name');
              } else if (body.hasClass('consumptionator-page')) {

                if (body.hasClass('consumptionator-video-page')) {
                  pageName = 'Consumptionator Video Page';
                } else if (body.hasClass('node-type-consumpt-post')) {
                  pageName = 'Consumptionator Post Page';
                } else if (body.hasClass('node-type-media-gallery')) {
                  pageName = 'Consumptionator Gallery Page';
                }  else if (body.hasClass('node-type-person')) {
                  pageName = 'Consumptionator Person Page';
                }  else if (body.hasClass('node-type-quiz')) {
                  pageName = 'Consumptionator Quiz Page';
                } else {
                  pageName = 'Consumptionator Page';
                }

                blockName = target.closest('.episodes-list-slider.horizontal').data('block-name');
              } else if (body.hasClass('node-type-tv-show')) {
                pageName = 'Show Page';
                blockName = target.closest('.episodes-list-slider.horizontal').data('block-name');
              } else {
                pageName = 'Page';
                blockName = 'Right Rail Carousel';
              }

              fullName = pageName + ' ' + blockName;

              Drupal.behaviors.omniture_tracking.carouselNavClick(fullName, nameNav);
            }
          });
        });

        // Click promo item
        //$('.usa-wrap .node-usanetwork-promo a,' +
        //'#block-usanetwork-home-usanetwork-home-shows-queue .promos-list a').once('omniture-tracking', function () {
        //  $(this).on('click', function (e) {
        //    if ($(this).attr('target') == '_blank') {

      //} else {
      //  e.preventDefault();
      //}
        //    var self = $(this);
        //    Drupal.behaviors.omniture_tracking.globalPromoClick(self);
        //  });
        //});

        // Click on submenu schedule items
        $('header .schedule-tab a').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }

              var $self = $(this),
                  sub_menu_name = '',
                  name,
                  paneTitle,
                  itemName;

              if ($self.closest('.pane-usanetwork-menu-usanetwork-menu-sm-now-and-next').length > 0) {

                paneTitle = $self.closest('.node-usanetwork-promo').find('h2 a').text().trim();
                itemName = $self.closest('.node-usanetwork-promo').find('.title').text().trim();

                if ($self.hasClass('live-icon')) {
                  console.info(1);
                  sub_menu_name = $self.text().trim();
                } else if ($self.data('name') === 'description' || $self.data('name') === 'reminder') {
                  console.info(2);
                  name = $self.data('name');
                  sub_menu_name = paneTitle + ' : ' + name.charAt(0).toUpperCase() + name.substr(1) + ' : ' + itemName;
                } else {
                  console.info(3);
                  sub_menu_name = $self.text();
                }

              } else if ($self.closest('.pane-usanetwork-menu-usanetwork-menu-sm-primetime').length > 0) {
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
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }
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
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }
              Drupal.behaviors.omniture_tracking.footerMenuItem($(this));
            }
          });
        });

        $(window).load(function () {
          // Click on ON NOW / TONIGHT items
          $('#block-usanetwork-menu-usanetwork-menu-aspot-ot a').once('omniture-tracking', function () {
            $(this).on('click', function (e) {
              if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
                if ($(this).attr('target') == '_blank') {

                } else {
                  e.preventDefault();
                }
                Drupal.behaviors.omniture_tracking.scheduleBar($(this));
              }
            });
          });
        });

        // schedule page click on reminder
        $('.page-schedule .schedule-wrapper a.seeit-reminder').once('omniture-tracking', function () {
          $(this).on('click', function (e) {
            if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }

              var showName = $(this).parents('.visible-block').find('.episode-show').text().trim();

              Drupal.behaviors.omniture_tracking.schedulePage(showName);
            }
          });
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

          var NumQuestions = $('.usanetwork-quiz-questions .usanetwork-quiz-question').length;

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

                if (NumQuestions === $quizQuestion.index() + 1) {
                  s.pageName = quizShow + ' : ' + quizTitle + ' : ' + ucfirst(quizType) + ' : Result';
                }

                s.manageVars('clearVars', s.linkTrackVars, 1);
              }
            }
          });
        });

        // Quizes omniture tracking. Track restart button
        $('.usanetwork-quiz-results input[type="button"]').once('omniture-tracking', function () {
          $(this).bindFirst('click', function (e) {
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
              console.info(s.pageName);
              s.tl(this, 'o', 'Restart');
              s.manageVars('clearVars', s.linkTrackVars, 1);
            }
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
    }
  }
}(jQuery));
