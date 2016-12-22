(function ($) {

  Drupal.behaviors.promo_rules = {
    refreshDescriptionLinesPromo: function () {
      $('.multiline-ellipsis-meta > div').each(function() {
        var item = $(this),
            dataText = item.attr('data-text');
        item.trigger("destroy");
        item.attr('style', '');
        $(item).text(dataText);
      });
      Drupal.behaviors.promo_rules.checkDescriptionLinesPromo();
    },
    checkDescriptionLinesPromo: function () {
      $('.multiline-ellipsis-meta').each(function() {
        var parent = $(this),
            linesCoefficient = 0,
            lineHeight = 0,
            text = '',
            childQuantity = parent.children().length;
        if (childQuantity === 2) {
          lineHeight = parseFloat(parent.children('.title').css('line-height'));
          linesCoefficient = parent.children('.title').outerHeight() / lineHeight;
          if (linesCoefficient > 1.3) {
            text = parent.children('.title').attr('data-text');
            addDots(parent.children('.title'), 2, lineHeight*1.2, text);
            parent.children().not('.title').css({
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            });
          } else {
            lineHeight = parseFloat(parent.children().not('.title').css('line-height'));
            text = parent.children().not('.title').attr('data-text');
            addDots(parent.children().not('.title'), 2, lineHeight*1.2, text);
          }
        } else if (childQuantity === 1) {
          lineHeight = parseFloat(parent.children().css('line-height'));
          text = parent.children().attr('data-text');
          addDots(parent.children(), 2, lineHeight*1.2, text);
        }
      });
    },
    checkDescriptionLines: function () {
      //calculate lines in articles block
      $('.multiline-ellipsis').parent().each(function() {
        var childrenHeight = 0,
            parent = $(this),
            item = parent.children('.multiline-ellipsis'),
            parentHeight = 0;
        parent.children().each(function() {
          if ($(this).hasClass('multiline-ellipsis')) {
            return false;
          }
          childrenHeight += $(this).outerHeight(true);
        });
        if (!isNaN(parseFloat(parent.css('height')))) {
          parentHeight = parseFloat(parent.css('height'));
        } else if (!isNaN(parseFloat(parent.css('max-height')))) {
          parentHeight = parseFloat(parent.css('max-height'));
        } else {

        }
        var captionHeight = parentHeight - childrenHeight,
            captionLineHeight = parseFloat(item.css('line-height')),
            lines = Math.floor(captionHeight / captionLineHeight),
            text = item.data('text');
        addDots(item, lines, captionLineHeight, text);
      });
    },
    attach: function (context, settings) {

      $(document).ready(function() {
        Drupal.behaviors.promo_rules.checkDescriptionLines();
        Drupal.behaviors.promo_rules.checkDescriptionLinesPromo();
      });

      var resizeTimer;

      $(window).on("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          Drupal.behaviors.promo_rules.checkDescriptionLines();
          Drupal.behaviors.promo_rules.refreshDescriptionLinesPromo();
        }, 500);
      });
    }
  }
})(jQuery);
