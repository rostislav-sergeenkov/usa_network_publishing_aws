// MEDIA GALLERY TABS
(function ($) {
  Drupal.behaviors.mediaGalleryTabs = {

    attach: function (context, settings) {

      $('body').once('mediaGallery', function() {
        $tabCount = 0;
        $tabs = $('<div class="gallery-tabs grid-container-small usa-secondary-menu"><ul></ul></div>');
        $tabs_ul = $tabs.find('ul');
        $('.gallery-tab-group').once('gallery-tabs', function() {
          // grab all the gallery pane title headings
          // create an unordered list from them
          $(this).each(function(index, value) {
            $tabCount++;
            $(this).attr('id', 'tab-' + $tabCount);
            $thisHeader = $(this).find('h2.pane-title').hide();
            console.log($thisHeader);
            $thisTab = '<li class="tab"><a href="#tab-'+ $tabCount +'"><h2>' + $thisHeader.html() + '</h2></a></li>';
           
            $tabs_ul.append($thisTab); 
          });
        });    

      
        // hide all the gallery panes
        $('.gallery-tab-group').hide()
        $('.panel-col-bottom .pane-views-panes:first-child').before($tabs);
        $('#tab-1').show();
        // clicking a tab will set classes to hide all gallery panes,
        // and show one associated with that tab
        $('.tab a[href="#tab-1"]').addClass('selected');
        $('.tab a').click(function() {
          $('.tab a').removeClass('selected');
          $(this).addClass('selected');
          $('.gallery-tab-group').hide().filter(this.hash).show();
          $('.filter-dropdown').removeClass('open');
          $('.menu-label').text($(this).text());
          return false;
        });  
     

        ///// FILTER TABS FOR MEDIA GALLERY PAGE /////
        $filter_menus = $('.gallery-tabs');
        $filter_menus.each(function(index, value){
          $filter_menu = $(this);
          $filter_menu.addClass('filter-dropdown').find('li').addClass('menu-item');
          // grab active item and copy it as a lable
          // create a div classed 'filter-menu' to contain the options
          $active_item = $(this).find('.selected');
          $menu_label = '<div class="menu-label">' + $active_item.text() + '</div>';
          $(this).find('ul').addClass('filter-menu');
          $(this).prepend($menu_label);
          // clicking the lable toggles an 'open' class on .filter-menu
          $('.menu-label').click(function () {
            // $filter_menus.not($(this).parent()).removeClass("open");
            $(this).parent().toggleClass("open");
          });
        });
        dropdown_class_toggle();
        $(window).resize(function(){
          dropdown_class_toggle();
        });
        function dropdown_class_toggle() {
          $drop_elements = $(".gallery-tabs");
          if ($drop_elements.css("background-color") != "rgb(61, 61, 61)" ){
            $drop_elements.removeClass("filter-dropdown");
          } else {
            $drop_elements.addClass("filter-dropdown");
          }
        }
		
		// To select correct category on gallery page #985
		$active_tab = $("li.active").closest(".gallery-tab-group").attr('id');
		if ( $active_tab != '' ) {
			$(".gallery-tab-group").hide();
			$("#"+$active_tab).show();
			$(".filter-menu li a").removeClass("selected");
			$('a[href*="#'+$active_tab+'"]' ).addClass("selected");
		}
      });


      //// photo more items toggler ////

      $expandable_container = $('.view.expandable-container');
      $container = $('.view.expandable-container .view-content');
      $toggler = $('.view.expandable-container .expandable-toggle li');

      var i = 0;

      if($toggler.text() != 'more') {
        $toggler.addClass('less').text('close');
        $expandable_container.addClass('expanded');
        i = 1;
      }

      $toggler.click(function() {
        if($toggler.text() == 'close') {
          i = 1;
          $container.find('.item-list').hide();
          $container.find('.item-list:first-child').css('display','block');
          $toggler.text('more');
          $toggler.removeClass('less').addClass('more');
          $expandable_container.removeClass('expanded');
        } else if ($toggler.text() == 'more') {
          $toggler.removeClass('less').addClass('more');
          $container.find('.item-list:first-child').css('display','block');
          $count = $container.find('.item-list').length - 1;
          $container.find('.item-list:eq('+ i + ')').show();
          if($count == i) {
            $toggler.text('close');
            $toggler.addClass('less').removeClass('more');
            $expandable_container.addClass('expanded');
            i = 1;
          }
          i++;
        }
      });


    },
  };

}(jQuery));
