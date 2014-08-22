(function ($) {

  Drupal.behaviors.show_more_toggle = {
    setCollapsibleContentHeight: function($content) {
      var $container = $content.parents('.expandable-container');
      var $toggle = $content.parent().children('.expandable-toggle-wrap');
      // Number of rows to display by default
      var display_rows = 1;

      // Check if we have rows configured
      if ($container.data('show_more_toggle') !== undefined) {
        var options = $container.data('show_more_toggle');
        if (options.display_rows !== undefined) {
          display_rows = options.display_rows;
        }
      }

      // Arrange promos by rows
      var $promos = new Array();
      var y_offset;
      var row = 0;
      $content.find('ul li').each(function() {
        var $promo = $(this);
        var promo_offset = $promo.offset().top - $content.offset().top;
        if (promo_offset !== null && promo_offset > y_offset) {
          row++;
        }
        y_offset = promo_offset;
        if ($promos[row] == undefined) {
          $promos[row] = new Array();
        }
        $promos[row].push($promo);
      });

      if (!$container.hasClass('expanded')) {
        // Find the highest promo in the last row, in case they are not equal
        var $promo;
        for (i in $promos[(display_rows - 1)]) {
          if ($promo == null || $promos[(display_rows - 1)][i].height() > $promo.height()) {
            $promo = $promos[(display_rows - 1)][i];
          }
        }
        if ($promo !== undefined) {
          // Calculate visible content height
          var height = $promo.offset().top - $content.offset().top + $promo.outerHeight();
          // Take care of paddings
          height += parseInt($content.css('padding-top')) + parseInt($content.css('padding-bottom'));
          $content.height(height);
        }
      }

      $toggle = $content.parent().children('.expandable-toggle-wrap');
      // Check if all promos are shown or not. Hide or show toggle handle.
      if ($promos[display_rows] == undefined) {
        // They are all shown
        $toggle.hide();
      }
      else {
        $toggle.show();
      }
    },

    attach: function(context, settings) {
      $('.expandable-container').each(function() {
        $(this).once('show-toggle', function() {
          var $container = $(this);
          var $content = $container.children('.expandable-content');
          var $toggle = $container.children('.expandable-toggle-wrap');

          // Force overflow: hidden;
          $content.css({
            overflow: 'hidden'
          });

          Drupal.behaviors.show_more_toggle.setCollapsibleContentHeight($content);

          // Make toggle handle clickable
          $toggle.children('.expandable-toggle').click(function() {
            var $container = $(this).parents('.expandable-container');
            var $content = $container.children('.expandable-content');
            if ($container.hasClass('expanded')) {
              // collapse content
              $container.removeClass('expanded');
              Drupal.behaviors.show_more_toggle.setCollapsibleContentHeight($content);
              $(this).children('.more').show();
              $(this).children('.less').hide();
            }
            else {
              // expand it
              $container.addClass('expanded');
              $content.height('100%');
              $(this).children('.more').hide();
              $(this).children('.less').show();
            }
          });
        });
      });
    }
  };

  // Bind onresize event
  // Function is wrapped to be executed once in 200ms, but not on every onresize event
  $(window).resize((function() {
    var timer;
    var needInvoke = true;

    return function() {
      if(needInvoke) {
        needInvoke = false;

        $('.expandable-container').each(function() {
          var $content = $(this).children('.expandable-content');
          Drupal.behaviors.show_more_toggle.setCollapsibleContentHeight($content);
        });

        timer = setTimeout(function() {
          needInvoke = true;
        }, 200);
      }
      else {
        timer = null;
      }
    }
  })());
}(jQuery));
