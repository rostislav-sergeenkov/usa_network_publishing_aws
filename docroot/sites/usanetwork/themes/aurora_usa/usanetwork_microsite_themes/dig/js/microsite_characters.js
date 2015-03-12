(function ($) {
  Drupal.behaviors.microsite_characters = {
    // @TODO: What's the best Drupal way to handle the following default variables?
    siteName: 'Dig',
    basePath: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig',
    basePageName: 'Dig | USA Network',
    defaultCharBg: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/dig_bg_home.jpg',
    defaultMobileCharBg: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/dig_mobile_bg.jpg',

    micrositeSetCharNavWidthHeight: function setCharNavWidth() {
      var charactersNav = $('#characters .character-nav'),
          numCharacters = charactersNav.find('li').length,
          nextPrevWidth = $('#characters #nav-prev').outerWidth(true),
          navElemWidth = charactersNav.find('li').outerWidth(true),
          charNavListWidth = (numCharacters * navElemWidth),
          charNavWidth = charNavListWidth + (nextPrevWidth * 2),
          maxCharNavWidth = $('#characters #character-info').width(),
          nextPrevHeight = charactersNav.find('#nav-prev').outerHeight(true),
          navElemHeight = charactersNav.find('li').outerHeight(true),
          navHeight = (navElemHeight > nextPrevHeight) ? nextPrevHeight : navElemHeight;
      if (charNavWidth > maxCharNavWidth) {
        charNavListWidth = Math.ceil(numCharacters/2) * navElemWidth;
        charNavWidth = charNavListWidth + (nextPrevWidth * 2);
        navHeight = (navHeight * 2) + 6;
      }
      charactersNav.find('ul').width(charNavListWidth).height(navHeight);
      charactersNav.width(charNavWidth).height(navHeight).animate({'opacity': 1}, 600);
    },

    micrositeSetNavNextPrevState: function setNavNextPreState() {
      var activeCharacter = Drupal.behaviors.microsite_characters.micrositeGetActiveCharacter(),
          charactersNav = $('#characters .character-nav'),
          activeCharacterNum = charactersNav.find('li.active').index(),
          numCharacters = charactersNav.find('li').length;
      charactersNav.find('#nav-prev, #nav-next').removeClass('disabled');
      if (activeCharacterNum == 0) {
        charactersNav.find('#nav-prev').addClass('disabled');
      }
      else if (activeCharacterNum == (numCharacters - 1)) {
        charactersNav.find('#nav-next').addClass('disabled');
      }
    },

    micrositeSetHeights: function setHeights() {
      var sectionHeight = $(window).height() - $('#mega-nav').height(),
          contentHeight = $('#microsite #characters #characters-content').height(),
          characterTextHeight = Math.ceil(sectionHeight * 0.25),
          wwidth = $(window).width();
      if (characterTextHeight < 200) characterTextHeight = 200;
      else if (wwidth < 542) characterTextHeight = 800;

      // if not smartphone
      if (!usa_deviceInfo.smartphone) {
        $('#microsite #characters .character-bios-container .text').css('max-height', characterTextHeight + 'px');
        $('#microsite #characters .character-bios-container').css('min-height', (characterTextHeight + 50) + 'px');
        $('#microsite #characters .ad300x250').css('margin-top', (characterTextHeight + 20) + 'px');
      }
      if ($(window).height() > 1200) $('#microsite #characters #character-inner-container, #microsite #about #about-inner-container').height((sectionHeight - 5));
      $('#microsite #characters #character-background li, #microsite #characters #right-pane-bg, #microsite #about #right-pane-bg').height(sectionHeight);
    },

    micrositeGetActiveCharacter: function getActiveCharacter() {
      // return the active character
      return $('#characters #character-info li.active').attr('id');
    },

    micrositeSetCharBackground: function setCharBackground(charId) {
      if ($(window).width() < 875) {
        $('#microsite #characters #character-background li').css('background-image', 'url("' + Drupal.behaviors.microsite_characters.defaultMobileCharBg + '")');
      }
      else {
        var nextBgId = 'bg-' + charId,
            nextItemBg = $('#' + nextBgId).attr('data-bg-url');
        if (nextItemBg == '' || nextItemBg == window.location.protocol + '//' + window.location.hostname + '/') nextItemBg = Drupal.behaviors.microsite_characters.defaultCharBg;
        if ($('#' + nextBgId).length > 0) $('#' + nextBgId).attr('data-bg-url', nextItemBg).css('background-image', 'url("' + nextItemBg + '")');
      }
    },
    // toTitleCase
    micrositeToTitleCase: function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    },

    // setOmnitureData
    micrositeSetOmnitureData: function setOmnitureData(itemTitle){
      var anchor = 'characters',
          itemTitle = itemTitle || '',
          siteName = Drupal.behaviors.microsite_characters.siteName,
          pageName = Drupal.behaviors.microsite_characters.basePageName,
          sectionTitle = 'Bio',
          pageName = sectionTitle + ' | ' + pageName;
      s.pageName = siteName + ' : ' + sectionTitle;
      s.prop3 = sectionTitle;
      s.prop4 = 'Profile Page'; // This is intentional per Loretta
      s.prop5 = siteName + ' : ' + sectionTitle;
      if (itemTitle != '') {
        pageName = itemTitle + ' | ' + pageName;
        s.pageName += ' : ' + itemTitle;
        s.prop5 += ' : ' + itemTitle;
      }
      $('title').text(pageName);

      if (typeof s_gi != 'undefined') {
        void(s.t()); // omniture page call
      }
    },

    micrositeSetPath : function setPath(nextItemId) {
      var anchorFull = Drupal.settings.microsites_settings.base_path + '/characters/' + nextItemId;
      // if this is IE9, reload the correct page
      if ($('html.ie9').length > 0) {
        window.location.href = anchorFull;
        return false;
      }
      history.pushState({"state": anchorFull}, anchorFull, anchorFull);
    },

    micrositeSwitchCharacters: function switchCharacters(clickedId, animationSpeed, overrideActive) {
      overrideActive = overrideActive || false;
      animationSpeed = animationSpeed || 600;
      var nextItem = $('#' + clickedId);
      if (!overrideActive && (nextItem.hasClass('active') || $('#characters .character-nav li').hasClass('disabled'))) {
        // do nothing
      }
      else {
        $('#characters-content').css('overflow', 'hidden');
        nextItem.addClass('disabled');

        var navItems = $('#characters .character-nav'),
            currentItem = (navItems.find('li.active')) ? navItems.find('li.active') : navItems.find('li').eq(0),
            currentItemId = currentItem.attr('id'),
            currentItemNum = currentItem.index(),
            currentCharacterId = (currentItemId != null) ? currentItemId.replace('nav-', '') : null;
            characterInfoHeight = currentItem.height(),
            nextItemId = nextItem.attr('id'),
            nextItemNum = nextItem.index(),
            nextCharacterId = (nextItemId != null) ? nextItemId.replace('nav-', '') : null,
            nextItemTitle = (nextCharacterId != null) ? $('#' + nextCharacterId + ' > h3').text() : '',
            nextCharacterInfoHeight = nextItem.height(),
            direction = (nextItemNum > currentItemNum) ? 'next' : 'prev',
            sign = (direction == 'next') ? '-' : '',
            oppositeSign = (direction == 'next') ? '' : '-',
            activeSection = $('#microsite #sections > .active').attr('id');
        if (nextItemTitle == '') nextItemTitle = $('#' + nextCharacterId + ' > h1').text();

        if (nextCharacterId && currentCharacterId) {
          // if user clicked same character as already being shown -- especially in the Meet the Cast carousel
          if (nextCharacterId == currentCharacterId) {
            $('#microsite #characters .' + nextCharacterId).addClass('active');

            Drupal.behaviors.microsite_characters.micrositeSetPath(nextCharacterId);
            Drupal.behaviors.microsite_characters.micrositeSetNavNextPrevState();
            if (activeSection != 'characters') {
              Drupal.behaviors.microsite_scroll.micrositeSectionScroll('characters', nextItemId);
            }
            else {
              Drupal.behaviors.microsite_characters.micrositeSetOmnitureData(nextItemTitle);
              Drupal.behaviors.microsite_scroll.create728x90Ad('characters');
            }

            // remove disabled
            navItems.find('li.disabled').removeClass('disabled');
            $('#characters-content').css('overflow-y', 'auto');
          }
          // else switch chararcters
          else {
            if ($('#bg-' + nextCharacterId).css('background-image') == 'none') Drupal.behaviors.microsite_characters.micrositeSetCharBackground(nextCharacterId);

            // stop quotation animations and hide quotes
            if (typeof Drupal.behaviors.microsite_scroll.quoteAnimationTimer != 'undefined') clearInterval(Drupal.behaviors.microsite_scroll.quoteAnimationTimer);
            $('#microsite .quotes').removeClass('active');

            // prepare next or previous background and character-info
            $('#microsite #characters .' + nextCharacterId).addClass(direction);

            if ($(window).width() < 875) {
              $('#character-info li.' + direction).css('top', '0');
              // animate active character-info
              $('#character-info li.active').animate({'top': '0', 'opacity': 0}, animationSpeed, 'jswing', function(){
                // animate next character-info
                $('#character-info li.' + direction).animate({'top': '0', 'opacity': 1}, animationSpeed, 'jswing', function(){
                  // update classes
                  $('#microsite #characters .' + direction).addClass('active').removeClass(direction);
                  $('#microsite #characters .' + currentCharacterId).removeClass('active ');

                  // update active nav item
                  navItems.find('li.active').removeClass('active');
                  nextItem.addClass('active');

                  Drupal.behaviors.microsite_characters.micrositeSetPath(nextCharacterId);
                  Drupal.behaviors.microsite_characters.micrositeSetNavNextPrevState();
                  if (activeSection != 'characters') {
                    Drupal.behaviors.microsite_scroll.micrositeSectionScroll('characters', nextItemId);
                  }
                  else {
                    Drupal.behaviors.microsite_characters.micrositeSetOmnitureData(nextItemTitle);
                    Drupal.behaviors.microsite_scroll.create728x90Ad('characters');
                  }

                  // start quotation animations and show quotes
                  Drupal.behaviors.microsite_scroll.quotationAnimation('#characters .quotes.' + nextCharacterId);

                  // remove disabled
                  navItems.find('li.disabled').removeClass('disabled');
                  $('#characters-content').css('overflow-y', 'auto');
                });
              });
            }
            // else window width not less than 875
            else {
              $('#character-info li.' + direction).css('top', '-40px');
              // animate active character-info
              $('#character-info li.active').animate({'top': '-40px', 'opacity': 0}, animationSpeed, 'jswing', function(){
                // animate backgrounds
                $('#character-background li.active').animate({'left': sign + '100%'}, (animationSpeed + 200), 'jswing');
                $('#character-background li.' + direction).css('left', oppositeSign + '100%').animate({'left': '0'}, (animationSpeed + 200), 'jswing', function(){
                  // animate next character-info
                  $('#character-info li.' + direction).animate({'top': '0', 'opacity': 1}, animationSpeed, 'jswing', function(){

                    // update classes
                    $('#microsite #characters .' + direction).addClass('active').removeClass(direction);
                    $('#microsite #characters .' + currentCharacterId).removeClass('active ');

                    // update active nav item
                    navItems.find('li.active').removeClass('active');
                    nextItem.addClass('active');

                    Drupal.behaviors.microsite_characters.micrositeSetPath(nextCharacterId);
                    Drupal.behaviors.microsite_characters.micrositeSetNavNextPrevState();
                    if (activeSection != 'characters') {
                      Drupal.behaviors.microsite_scroll.micrositeSectionScroll('characters', nextItemId);
                    }
                    else {
                      Drupal.behaviors.microsite_characters.micrositeSetOmnitureData(nextItemTitle);
                      Drupal.behaviors.microsite_scroll.create728x90Ad('characters');
                    }

                    // start quotation animations and show quotes
                    Drupal.behaviors.microsite_scroll.quotationAnimation('#characters .quotes.' + nextCharacterId);

                    // remove disabled
                    navItems.find('li.disabled').removeClass('disabled');
                    $('#characters-content').css('overflow-y', 'auto');
                  });
                });
              });
            }
          }
        }
        else {
          // current or next character id was not set
          // @TODO: Should we do something here?
        }
      }
    },

    attach: function (context, settings) {
      if ($('#characters').length > 0) {
        Drupal.behaviors.microsite_characters.micrositeSetCharNavWidthHeight();
        var characters = $('#microsite #character-info'),
            activeCharacter = characters.find('li.active').attr('id');
        Drupal.behaviors.microsite_characters.micrositeSetCharBackground(activeCharacter);
        Drupal.behaviors.microsite_characters.micrositeSetNavNextPrevState();

        // init active character nav item
        $('#nav-' + activeCharacter).addClass('active');

        // init character-nav clicks
        $('#microsite #characters .character-nav li').on('click', function(){
          var nextItemId = $(this).attr('id');
          Drupal.behaviors.microsite_characters.micrositeSwitchCharacters(nextItemId);
        });

        if ($(window).width() < 875) {
          $('#microsite #character-background').addClass('mobile');
        }

        // init next / prev character nav clicks
        $('#microsite #characters .character-nav #nav-next, #microsite #characters .character-nav #nav-prev').on('click', function(){
            if ($(this).hasClass('disabled')) {
              // do nothing
            }
            else {
            var clickedId = $(this).attr('id'),
                navItems = $('#characters .character-nav'),
                numNavItems = navItems.find('li').length,
                currentItem = navItems.find('li.active'),
                currentItemNum = currentItem.index(),
                nextItemNum = (clickedId == 'nav-next') ? currentItemNum + 1 : currentItemNum - 1;
            if (nextItemNum >= numNavItems) nextItemNum = 0;
            if (nextItemNum < 0) nextItemNum = numNavItems - 1;
            var nextItemId = $('#characters .character-nav li').eq(nextItemNum).attr('id');

            Drupal.behaviors.microsite_characters.micrositeSwitchCharacters(nextItemId);
          }
        });

        // init bio tab clicks
        $('#microsite #characters .character-bio-tabs div').on('click', function(){
          var clickedItem = ($(this).hasClass('character')) ? '.character' : '.actor',
              characterId = $(this).parent().parent().attr('id');
          $('#characters #character-info li#' + characterId).find('.actor, .character').removeClass('active');
          $('#characters #character-info li#' + characterId + ' ' + clickedItem).addClass('active');
        });

        setTimeout(Drupal.behaviors.microsite_characters.micrositeSetHeights, 500);

        window.addEventListener('orientationchange', function() {
          Drupal.behaviors.microsite_characters.micrositeSetHeights();
          Drupal.behaviors.microsite_characters.micrositeSetCharNavWidthHeight();
        });
        $(window).bind('resize', function () {
          setTimeout(function() {
            Drupal.behaviors.microsite_characters.micrositeSetHeights();
            Drupal.behaviors.microsite_characters.micrositeSetCharNavWidthHeight();
            if ($(window).width() < 875) {
              if (!$('#microsite #character-background').hasClass('mobile')){
                $('#microsite #characters #character-background li').css('background-image', 'url("' + Drupal.behaviors.microsite_characters.defaultMobileCharBg + '")');
                $('#microsite #character-background').addClass('mobile');
              }
            }
            else {
              if ($('#microsite #character-background').hasClass('mobile')){
                $('#characters #character-background li').each(function() {
                  var bgUrl = $(this).attr('data-bg-url');
                  $(this).css('background-image', 'url("' + bgUrl + '")');
                });
                $('#microsite #character-background').removeClass('mobile');
              }
            }
          }, 500);
        });

        // character image pre-loading on desktop only
        if ($(window).width() >= 875) {
          $(window).bind("load", function() {
            var preload = new Array();
            $('#characters #character-background li').each(function() {
              //s = $(this).attr('data-bg-url').replace(/\.(.+)$/i, "_on.$1");
              var bgUrl = $(this).attr('data-bg-url');
              preload.push(bgUrl);
            });
            var img = document.createElement('img');
            $(img).bind('load', function() {
              if (preload[0]) {
                  this.src = preload.shift();
              }
            }).trigger('load');
          });
        }
      }


    }
  }
})(jQuery);
