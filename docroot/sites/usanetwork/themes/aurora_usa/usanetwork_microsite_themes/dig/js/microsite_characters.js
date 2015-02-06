(function ($) {
  Drupal.behaviors.microsite_characters = {
    // @TODO: What's the best Drupal way to handle the following default variables?
    siteName: 'Dig',
    basePath: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig',
    basePageName: 'Dig | USA Network',
    defaultCharBg: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/dig_bg_home.jpg',
    defaultMobileCharBg: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/dig_mobile_bg.jpg',

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
          characterTextHeight = Math.ceil(sectionHeight * 0.277);
      if (characterTextHeight < 200) characterTextHeight = 200;
      else if ($(window).width() < 542) characterTextHeight = 800;
      $('#microsite #characters .character-bios-container .text').css('max-height', characterTextHeight + 'px');
      $('#microsite #characters #character-info-container').css('min-height', (characterTextHeight + 172) + 'px');
      $('#microsite #characters #character-background li, #microsite #characters #right-pane-bg').height(sectionHeight);
    },

    micrositeGetActiveCharacter: function getActiveCharacter() {
      // return the active character
      return $('#characters #character-info li.active').attr('id');
    },

    micrositeSetCharBackground: function setCharBackground(charId) {
      if ($(window).width() < 874) {
        $('#microsite #characters #character-background li').css('background-image', 'url("' + Drupal.behaviors.microsite_characters.defaultMobileCharBg + '")');
      }
      else {
        var nextBgId = 'bg-' + charId,
            nextItemBg = $('#' + nextBgId).attr('data-bg-url');
        if (nextItemBg == '') nextItemBg = Drupal.behaviors.microsite_characters.defaultCharBg;
//usa_debug('micrositeSetCharBackground(' + charId + ')\nnextItemBg: ' + nextItemBg);
        $('#' + nextBgId).attr('data-bg-url', nextItemBg).css('background-image', 'url("' + nextItemBg + '")');
      }
    },

    // toTitleCase
    micrositeToTitleCase: function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    },

    // setOmnitureData
    micrositeSetOmnitureData: function setOmnitureData(itemTitle){
//usa_debug('************************\nmicrositeSetOmnitureData(' + itemTitle + ')');
      var anchor = 'characters',
          itemTitle = itemTitle || '',
          siteName = Drupal.behaviors.microsite_characters.siteName,
          pageName = Drupal.behaviors.microsite_characters.basePageName,
          sectionTitle = 'Bio',
          pageName = sectionTitle + ' | ' + pageName;
      s.pageName = siteName + ' : ' + sectionTitle;
      s.prop3 = sectionTitle;
      s.prop4 = siteName + ' : ' + sectionTitle;
      s.prop5 = s.prop4;
      if (itemTitle != '') {
        pageName = itemTitle + ' | ' + pageName;
        s.pageName += ' : ' + itemTitle;
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

    micrositeSwitchCharacters: function switchCharacters(clickedId) {
      var nextItem = $('#' + clickedId);
      if (nextItem.hasClass('active') || $('#characters .character-nav li').hasClass('disabled')) {
        // do nothing
      }
      else {
        $('#characters-content').css('overflow', 'hidden');
        nextItem.addClass('disabled');
        var navItems = $('#characters .character-nav'),
            currentItem = navItems.find('li.active'),
            currentItemId = currentItem.attr('id'),
            currentItemNum = currentItem.index(),
            currentCharacterId = currentItemId.replace('nav-', '');
            characterInfoHeight = currentItem.height(),
            nextItemId = nextItem.attr('id'),
            nextItemNum = nextItem.index(),
            nextCharacterId = nextItemId.replace('nav-', ''),
            nextCharacterInfoHeight = nextItem.height(),
            direction = (nextItemNum > currentItemNum) ? 'next' : 'prev',
            sign = (direction == 'next') ? '-' : '';

//usa_debug('nextCharacterId.css(background-image): ' + $('#bg-' + nextCharacterId).css('background-image'));
        if ($('#bg-' + nextCharacterId).css('background-image') == 'none') Drupal.behaviors.microsite_characters.micrositeSetCharBackground(nextCharacterId);
/*
usa_debug('currentItem: ');
usa_debug(currentItem);
usa_debug('nextItem: ');
usa_debug(nextItem);
*/
usa_debug('****************************\ncurrent: ' + currentItemNum + ', ' + currentItemId + ', ' + currentCharacterId + '\nnext: ' + nextItemNum + ', ' + nextItemId + ', ' + nextCharacterId + '\ndirection: ' + direction + ', sign: ' + sign);

        // prepare next or previous background and character-info
        $('#microsite #characters .' + nextCharacterId).addClass(direction);
//        $('#microsite #characters #character-info-container').css('min-height', characterInfoHeight + 'px');

        // refresh ads
        Drupal.behaviors.microsite_scroll.create728x90Ad('characters');

        // animate active character-info
        $('#character-info li.active').animate({'top': '-40px', 'opacity': 0}, 600, 'jswing', function(){
          if ($(window).width() < 874) {
            // animate next character-info
            $('#microsite #characters #character-info-container').animate({'height': nextCharacterInfoHeight + 'px'}, 600, 'jswing');
            $('#character-info li.' + direction).animate({'top': '0', 'opacity': 1}, 600, 'jswing', function(){
              // update classes
              $('#microsite #characters .' + direction).addClass('active').removeClass(direction);
              $('#microsite #characters .' + currentCharacterId).removeClass('active ');

              // update active nav item
              navItems.find('li.active').removeClass('active');
              nextItem.addClass('active');

              Drupal.behaviors.microsite_characters.micrositeSetPath(nextCharacterId);
              Drupal.behaviors.microsite_characters.micrositeSetOmnitureData($('#' + nextCharacterId + ' h3').text());
              Drupal.behaviors.microsite_characters.micrositeSetNavNextPrevState();

              // remove disabled
              navItems.find('li.disabled').removeClass('disabled');
              $('#characters-content').css('overflow', 'auto');
            });
          }
          else {
            // animate backgrounds
            $('#character-background li.active').animate({'left': sign + '100%'}, 800, 'jswing');
            $('#character-background li.' + direction).animate({'left': '0'}, 800, 'jswing', function(){
              // animate next character-info
              $('#microsite #characters #character-info-container').animate({'height': nextCharacterInfoHeight + 'px'}, 600, 'jswing');
              $('#character-info li.' + direction).animate({'top': '0', 'opacity': 1}, 600, 'jswing', function(){
                // update classes
                $('#microsite #characters .' + direction).addClass('active').removeClass(direction);
                $('#microsite #characters .' + currentCharacterId).removeClass('active ');

                // update active nav item
                navItems.find('li.active').removeClass('active');
                nextItem.addClass('active');

                Drupal.behaviors.microsite_characters.micrositeSetPath(nextCharacterId);
                Drupal.behaviors.microsite_characters.micrositeSetOmnitureData($('#' + nextCharacterId + ' h3').text());
                Drupal.behaviors.microsite_characters.micrositeSetNavNextPrevState();

                // remove disabled
                navItems.find('li.disabled').removeClass('disabled');
                $('#characters-content').css('overflow', 'auto');
              });
            });
          }
        });
      }
    },

    attach: function (context, settings) {
      if ($('#characters').length > 0) {
        Drupal.behaviors.microsite_characters.micrositeSetHeights();
//      var activeCharacter = Drupal.behaviors.microsite_characters.micrositeGetActiveCharacter();

        var characters = $('#microsite #character-info'),
            activeCharacter = characters.find('li.active').attr('id');
        Drupal.behaviors.microsite_characters.micrositeSetCharBackground(activeCharacter);
        Drupal.behaviors.microsite_characters.micrositeSetNavNextPrevState();
/*
usa_debug('******************************\n$characters: ');
usa_debug(characters);
usa_debug('activeCharacter: ' + activeCharacter);
*/
        // init active character nav item
        $('#nav-' + activeCharacter).addClass('active');

        // init character-nav clicks
        $('#microsite #characters .character-nav li').on('click', function(){
          var nextItemId = $(this).attr('id');
          Drupal.behaviors.microsite_characters.micrositeSwitchCharacters(nextItemId);
        });

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
//usa_debug('************************\nclicked: ' + $(this).attr('id') + '\nnumNavItems: ' + numNavItems + '\ncurrentItemNum: ' + currentItemNum + '\nnextItemNum: ' + nextItemNum + '\nnextItemId: ' + nextItemId + '\ncurrentItem: ');
            Drupal.behaviors.microsite_characters.micrositeSwitchCharacters(nextItemId);
          }
        });

        // init bio tab clicks
        $('#microsite #characters .character-bio-tabs div').on('click', function(){
          var clickedItem = ($(this).hasClass('character')) ? '.character' : '.actor',
              characterId = $(this).parent().parent().attr('id');
          $('#characters #character-info li#' + characterId).find('.actor, .character').removeClass('active');
          $('#characters #character-info li#' + characterId + ' ' + clickedItem).addClass('active');
//usa_debug('************************\nclicked: ' + $(this).attr('class') + '\ncharacterId: ' + characterId);
        });


        window.addEventListener('orientationchange', Drupal.behaviors.microsite_characters.micrositeSetHeights());
        $(window).bind('resize', function () {
          setTimeout(Drupal.behaviors.microsite_characters.micrositeSetHeights, 500);
        });
      }


    }
  }
})(jQuery);
