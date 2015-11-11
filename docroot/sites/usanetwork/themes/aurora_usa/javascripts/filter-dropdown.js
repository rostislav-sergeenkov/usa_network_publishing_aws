// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.filterDropdown = {
    attach: function (context, settings) {

      // Click on filter-label
      $('.item-filter .filter-label').click(function() {
        if ($(this).closest('.item-filter').hasClass('open')) {
          $(this).closest('.item-filter').removeClass('open');
        } else {
          $('.item-filter').removeClass('open');
          $(this).closest('.item-filter').addClass('open');
        }

      });

      // Select block item click
      $('.item-filter .filter-menu a').click(function(e) {
        if (!$(this).hasClass('no-ajax')){
          e.preventDefault();
        }
        if (!$(this).hasClass('active')) {
          $('.item-filter .filter-menu a.active').removeClass('active');
          $(this).addClass('active');
          $(this).closest('.item-filter').find('.filter-label').text($(this).text());
          $(this).closest('.item-filter').removeClass('open');
        } else {
          $(this).closest('.item-filter').removeClass('open');
        }
      });

      //js for custom scroll bar
      $('.item-filter .filter-menu').each(function(){
        $(this).mCustomScrollbar({
          axis: "y",
          theme: "dark-3",
          scrollEasing: "easeOut"
        });
      });

      $(document).click(function(e){
        if (e.target.className != 'filter-label') {
          $('.item-filter.open').removeClass('open');
        }
      });
      
      $(window).bind('resize', function () {

        if( window.matchMedia("(min-width: " + window_size_tablet_portrait_768 + "px)").matches && !$('.transform-filter').hasClass('mCS_destroyed')) {
          $('.transform-filter').each(function(){
            $(this).mCustomScrollbar('destroy');
          });
        }
        if( window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches && $('.transform-filter').hasClass('mCS_destroyed')) {
          $('.transform-filter.mCS_destroyed').each(function(){
            $(this).mCustomScrollbar({
              axis: "y",
              theme: "dark-3",
              scrollEasing: "easeOut"
            });
          });
        }
      });
    }
  };

}(jQuery));
