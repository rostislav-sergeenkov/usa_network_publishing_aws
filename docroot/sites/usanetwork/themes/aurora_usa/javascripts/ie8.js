
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
        $('li:nth-of-type(2n+1)', panel).addClass('nth2n+1');
        $('li:nth-of-type(3n+5)', panel).addClass('nth3n5');
        $('li:nth-of-type(4n+4)', panel).addClass('nth4n4');
        $('li:nth-of-type(4n+6)', panel).addClass('nth4n6');
        $('li:nth-of-type(4n+7)', panel).addClass('nth4n7');
      };

      if ($('.ie8 .node-type-catchall-page .tiles .upcoming-movie', context).length > 0) {
        var movie = $('.ie8 .node-type-catchall-page .tiles').eq(0);
        $('.upcoming-movie:nth-of-type(even)', movie).addClass('even');
        $('.upcoming-movie:nth-of-type(odd)', movie).addClass('odd');
        $('.upcoming-movie:nth-of-type(2)', movie).addClass('nth2');
        $('.upcoming-movie:nth-of-type(3)', movie).addClass('nth3');
        $('.upcoming-movie:nth-of-type(4)', movie).addClass('nth4');
        $('.upcoming-movie:nth-of-type(2n+3)', movie).addClass('nth2n3');
        $('.upcoming-movie:nth-of-type(2n+4)', movie).addClass('nth2n4');
        $('.upcoming-movie:nth-of-type(3n+4)', movie).addClass('nth3n4');
        $('.upcoming-movie:nth-of-type(3n+5)', movie).addClass('nth3n5');
        $('.upcoming-movie:nth-of-type(3n+6)', movie).addClass('nth3n6');
        $('.upcoming-movie:nth-of-type(4n+5)', movie).addClass('nth4n5');
        $('.upcoming-movie:nth-of-type(4n+6)', movie).addClass('nth4n6');
        $('.upcoming-movie:nth-of-type(4n+7)', movie).addClass('nth4n7');
        $('.upcoming-movie:nth-of-type(4n+8)', movie).addClass('nth4n8');
      }

    },

  };


}(jQuery));