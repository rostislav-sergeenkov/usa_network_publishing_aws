
// for IE8
(function ($) {

  Drupal.behaviors.ie8 = {
    attach: function (context, settings) {

      if ($('.ie8 .expandable-container.promo-ads-panel li', context).length > 0) {
        var panel = $('.ie8 .expandable-container.promo-ads-panel').eq(0);
        $('li:nth-of-type(odd)', panel).addClass('odd');
        $('li:first-child', panel).addClass('nth1');
        $('li:nth-of-type(2)', panel).addClass('nth2');
        $('li:nth-of-type(3)', panel).addClass('nth3');
        $('li:nth-of-type(3n+5)', panel).addClass('nth3n5');
        $('li:nth-of-type(4n+4)', panel).addClass('nth4n4');
        $('li:nth-of-type(4n+6)', panel).addClass('nth4n6');
        $('li:nth-of-type(4n+7)', panel).addClass('nth4n7');
      }
      $('iframe').attr("frameBorder", 0).attr("marginheight", 0).attr("marginwidth", 0).attr("hspace", 0).attr("vspace", 0).attr('border', 'none').css("border-collapse", "1");
    },

  };


}(jQuery));