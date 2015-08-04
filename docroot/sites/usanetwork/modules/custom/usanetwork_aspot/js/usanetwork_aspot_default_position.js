/* == Admin Tool Tweaks ===================================== */
var usa_setHomepageDefaults, usa_setTVShowDefaults, usa_alignHomepageToTitle, usa_alignTVShowToTitle;

(function ($) {
$(document).ready(function() {
  if ($('body').hasClass('page-node-edit') && $('body').hasClass('node-type-usanetwork-aspot')) {
    $('.aspot-draggable-element').draggable({ grid: [1, 1] }).css("position", "absolute");

    usa_setHomepageDefaults = function() {

      if ($( ".vertical-tabs-list .vertical-tab-button strong:contains('Homepage A-spot UI')" ).closest('li').hasClass('selected')) {
        $('#mobile-aspot-draggable-title_prefix').css({left: '37px',position: 'absolute',top: '254px'});
        $('#mobile-aspot-draggable-title').css({left: '34px',position: 'absolute',top: '281px'});
        $('#mobile-aspot-draggable-aspot_description').css({left: '37px',position: 'absolute',top: '353px'});
        $('#mobile-aspot-draggable-cta_button_0').css({left: '36px',position: 'absolute',top: '402px'});
        $('#mobile-aspot-draggable-cta_button_1').css({left: '17px',position: 'absolute',top: '462px'});
        $('#mobile-aspot-draggable-cta_button_2').css({left: '17px',position: 'absolute',top: '505px'});

        $('#aspot-draggable-title_prefix').css({left: '78px',position: 'absolute',top: '249px'});
        $('#aspot-draggable-title').css({left: '75px',position: 'absolute',top: '275px'});
        $('#aspot-draggable-aspot_description').css({left: '78px',position: 'absolute',top: '353px'});
        $('#aspot-draggable-cta_button_0').css({left: '79px',position: 'absolute',top: '409px'});
        $('#aspot-draggable-cta_button_1').css({left: '37px',position: 'absolute',top: '484px'});
        $('#aspot-draggable-cta_button_2').css({left: '335px',position: 'absolute',top: '484px'});

        homeAspot.setPosition();
      }
    }

    usa_setTVShowDefaults = function() {
      if ($( ".vertical-tabs-list .vertical-tab-button strong:contains('TV show A-spot UI')" ).closest('li').hasClass('selected')) {
        $('#mobile-aspot-draggable-tv_show-title_prefix').css({left: '56px',position: 'absolute',top: '285px'});
        $('#mobile-aspot-draggable-tv_show-title').css({left: '54px',position: 'absolute',top: '314px'});
        $('#mobile-aspot-draggable-tv_show-aspot_description').css({left: '58px',position: 'absolute',top: '382px'});
        $('#mobile-aspot-draggable-tv_show-cta_button_0').css({left: '55px',position: 'absolute',top: '441px'});
        $('#mobile-aspot-draggable-tv_show-cta_button_1').css({left: '36px',position: 'absolute',top: '495px'});

        $('#aspot-draggable-tv_show-title_prefix').css({left: '43px',position: 'absolute',top: '268px'});
        $('#aspot-draggable-tv_show-title').css({left: '40px',position: 'absolute',top: '291px'});
        $('#aspot-draggable-tv_show-aspot_description').css({left: '46px',position: 'absolute',top: '364px'});
        $('#aspot-draggable-tv_show-cta_button_0').css({left: '45px',position: 'absolute',top: '416px'});
        $('#aspot-draggable-tv_show-cta_button_1').css({left: '3px',position: 'absolute',top: '485px'});

        showAspot.setPosition();
      }
    }


    usa_alignHomepageToTitle = function() {
      if ($( ".vertical-tabs-list .vertical-tab-button strong:contains('Homepage A-spot UI')" ).closest('li').hasClass('selected')) {
        var mobileTitleLeft = parseInt(jQuery('#mobile-aspot-draggable-title').css('left'));

        $('#mobile-aspot-draggable-title_prefix').css({left: String((mobileTitleLeft + 3) + 'px'),position: 'absolute'});
        $('#mobile-aspot-draggable-aspot_description').css({left: String((mobileTitleLeft + 3) + 'px'),position: 'absolute'});
        $('#mobile-aspot-draggable-cta_button_0').css({left: String((mobileTitleLeft - 1) + 'px'),position: 'absolute'});
        $('#mobile-aspot-draggable-cta_button_1').css({left: String((mobileTitleLeft - 17) + 'px'),position: 'absolute'});
        $('#mobile-aspot-draggable-cta_button_2').css({left: String((mobileTitleLeft - 17) + 'px'),position: 'absolute'});

        var titleLeft = parseInt($('#aspot-draggable-title').css('left'));
        $('#aspot-draggable-title_prefix').css({left: String((titleLeft + 3) + 'px'),position: 'absolute'});
        $('#aspot-draggable-aspot_description').css({left: String((titleLeft + 3) + 'px'),position: 'absolute'});
        $('#aspot-draggable-cta_button_0').css({left: String((titleLeft + 4) + 'px'),position: 'absolute'});
        $('#aspot-draggable-cta_button_1').css({left: String((titleLeft - 38) + 'px'),position: 'absolute'});
        $('#aspot-draggable-cta_button_2').css({left: String((titleLeft + 409) + 'px'),position: 'absolute'});

        homeAspot.setPosition();
      }
    }

    usa_alignTVShowToTitle = function() {
      if ($( ".vertical-tabs-list .vertical-tab-button strong:contains('TV show A-spot UI')" ).closest('li').hasClass('selected')) {
        var mobileTitleLeft = parseInt($('#mobile-aspot-draggable-tv_show-title').css('left'));

        $('#mobile-aspot-draggable-tv_show-title_prefix').css({left: String((mobileTitleLeft + 2) + 'px'),position: 'absolute'});
        $('#mobile-aspot-draggable-tv_show-aspot_description').css({left: String((mobileTitleLeft + 4) + 'px'),position: 'absolute'});
        $('#mobile-aspot-draggable-tv_show-cta_button_0').css({left: String((mobileTitleLeft + 1) + 'px'),position: 'absolute'});
        $('#mobile-aspot-draggable-tv_show-cta_button_1').css({left: String((mobileTitleLeft - 18) + 'px'),position: 'absolute'});

        var titleLeft = parseInt($('#aspot-draggable-tv_show-title').css('left'));
        $('#aspot-draggable-tv_show-title_prefix').css({left: String((titleLeft + 3) + 'px'),position: 'absolute'});
        $('#aspot-draggable-tv_show-aspot_description').css({left: String((titleLeft + 6) + 'px'),position: 'absolute'});
        $('#aspot-draggable-tv_show-cta_button_0').css({left: String((titleLeft + 5) + 'px'),position: 'absolute'});
        $('#aspot-draggable-tv_show-cta_button_1').css({left: String((titleLeft - 37) + 'px'),position: 'absolute'});

        showAspot.setPosition();
      }
    }

    $('.vertical-tabs-list').append('<li class="vertical-tab-button last"><a href="javascript:void(0);" onclick="usa_setHomepageDefaults()"><strong>Homepage A-Spot</strong><span class="summary">Set Defaults</span></a></li>');
    $('.vertical-tabs-list').append('<li class="vertical-tab-button last"><a href="javascript:void(0);" onclick="usa_setTVShowDefaults()"><strong>TV Show A-Spot</strong><span class="summary">Set Defaults</span></a></li>');

    $('.vertical-tabs-list').append('<li class="vertical-tab-button last"><a href="javascript:void(0);" onclick="usa_alignHomepageToTitle()"><strong>Homepage A-Spot</strong><span class="summary">Align Lefts to Title</span></a></li>');
    $('.vertical-tabs-list').append('<li class="vertical-tab-button last"><a href="javascript:void(0);" onclick="usa_alignTVShowToTitle()"><strong>TV Show A-Spot</strong><span class="summary">Align Lefts to Title</span></a></li>');
  }
});
}(jQuery));
