/*
Content Timeline 3.1
Date organised content slider.
Copyright (c) 2012 Br0 (shindiristudio.com)

Project site: http://codecanyon.net/
Project demo: http://shindiristudio.com/timeline
*/

// Update by RF on 5.12.14
// Update to Drupal by DV on 4.17.15

// EVENTS.timeline

// init.timeline          : triggered when timeline is initialised
// scrollStart.timeline   : triggered when item move animation starts
// scrollEnd.timeline     : triggered when item move animation ends
// itemOpen.timeline      : triggered on click to open item
// itemClose.timeline     : triggered on click to close item

// ---------------------------------------------------------

// On KeyPress (left)     : trigger $.timeline('left')
// On KeyPress (right)    : trigger $.timeline('right')

// ---------------------------------------------------------

// $.timeline(METHODS)

// $.timeline('init')     : initializes timeline
// $.timeline('destroy')  : clears timeline data
// $.timeline('left')     : moves one left by one element
// $.timeline('right')    : moves right by one element
// $.timeline('open', id) : opens element with 'data-id' = id
// $.timeline('close', id): closes element with 'data-id' = id
// $.timeline('goTo', id) : goes to element width 'data-id' = id


(function ($) {
  Drupal.behaviors.timeline_gallery = {

    attach: function (context, settings) {

      var t_methods = {
        init : function( options ) {

          // Default settings
          var timeline_settings = $.extend( {
            'itemClass'             : '.timeline-item',      // class used for timeline items
            'itemOpenClass'         : '.timeline-item-open', // class used for item details
            'openTriggerClass'      : '',                    // class of read more element (default uses whole item to trigger open event)
            'closeText'             : '',                    // text of close button in open item
            'itemMargin'            : 16,                    // spacing between items
            'percentItemWidth'      : 0.8,                   // percent width of each item
            'percentLineWidth'      : 0.7,                   // percent width of the viewable line
            'scrollSpeed'           : 400,                   // animation speed
            'startItem'             : 'last',                // timeline start item id, 'last' or 'first' can be used insted
            'easing'                : 'easeOutSine',         // jquery.easing function for animations,
            'categories'            : categoryArray,         // categories shown above timeline (months are default)
            'numberOfSegments'      : segmentArray,          // number of elements per category (number of days)
            'yearsOn'               : true,                  // show years (can be any number you use in data-id (elementNumber/category/yearOrSomeOtherNumber))
            'swipeOn'               : true,                  // turn on swipe moving function
            'hideTimeline'          : false,                 // hides the timeline line
            'hideControls'          : false,                 // hides the prev/next controls
            'closeItemOnTransition' : false,                 // if true, closes the item after transition
            'ajaxFailMessage'		    : 'Ajax request has failed.'
          }, options); // end timeline_settings


          // main queries
          var $this = this, // $this = $('.timelineFlat.timelineFlatPortfolio.tl3')
            $body = $('body'),
            $items = $this.find(timeline_settings.itemClass),
            $itemsOpen = $this.find(timeline_settings.itemOpenClass),
            itemWidth = $items.first().width(),
            itemOpenWidth = $itemsOpen.first().width(),
            closeItemOnTransition=timeline_settings.closeItemOnTransition;

          // Trigger init event
          $this.trigger('init.Timeline');

          // If no index found
          var startIndex = $items.length-1;

          // Find index of start element
          if (timeline_settings.startItem == 'first') {
            startIndex = 0;
          }
          else if (timeline_settings.startItem == 'last') {
            startIndex = $items.length-1;
          }
          else {
            $items.each(function(index){
              if (timeline_settings.startItem == $(this).attr('data-id')) {
                startIndex = index;
                return true;
              }
            });
          }

          $items.each(function(index) {
            $(this).attr('data-count', index);
            $(this).next(timeline_settings.itemOpenClass).attr('data-count', index);
            if(!$(this).hasClass(timeline_settings.openTriggerClass)) {
              $(this).find(timeline_settings.openTriggerClass).attr('data-count', index);
            }
          });

          // Create wrapper elements, and needed properties for timeline-items
          $this.append('<div class="clear"></div>');
//usa_debug('============== $this: ');
//usa_debug($this); // $this = $('.timelineFlat.timelineFlatPortfolio.tl3')
//          $this.css({width: '100%', 'overflow' : 'hidden', marginLeft : 'auto', marginRight : 'auto','text-align': 'center', height:0});
          $this.wrapInner('<div class="timeline-items" />');
//          $this.find('.timeline-items').css('text-align','left');

          if('ontouchstart' in window) {
            $this.addClass('timelineTouch');
          }

          // ZoomOut placement fix
          $this.wrapInner('<div class="timeline-items-holder" />');
          if (!timeline_settings.hideControls) {
            $this.append('<div class="timeline-controls"><div class="timeline-left"></div><div class="timeline-right"></div></div>');
          }
          $this.wrapInner('<div class="timeline-items-wrapper" />');
//          $this.find('.timeline-items-holder').css({width: '300px', marginLeft : 'auto', marginRight : 'auto'});
//          $this.find('.timeline-items-holder').css({'width': '100%', 'height': '33%', 'margin': '0 auto', 'overflow': 'hidden'});

//          $items.css({paddingLeft:0 , paddingRight:0, marginLeft: timeline_settings.itemMargin/2, marginRight: timeline_settings.itemMargin/2, float: 'left', position:'relative'});
          $items.css({marginLeft: timeline_settings.itemMargin/2, marginRight: timeline_settings.itemMargin/2});

          $itemsOpen.each(function(){
            $(this).prepend('');
            $(this).wrapInner('<div class="'+timeline_settings.itemOpenClass.substr(1)+'-cwrapper"  />').find('div:first').css({position: 'relative'});
//            $(this).css({width: 0, padding:0 , margin: 0, float: 'left', display : 'none', position : 'relative', overflow : 'hidden'});
          });

          // Get new queries
          var	timelineWidth = $this.find('.timeline-items-holder').width(),
              $iholder =  $this.find('.timeline-items:first'),
              $line = $this.find('.timeline-wrapper:first'),
//              margin = 300/2 - (itemWidth + timeline_settings.itemMargin)*(1/2 + startIndex) ,
//              width = (itemWidth + timeline_settings.itemMargin)*$items.length + (itemOpenWidth + timeline_settings.itemMargin) + 660 ,
              margin = timelineWidth - ((itemWidth + timeline_settings.itemMargin)/2),
              width = ((itemWidth + timeline_settings.itemMargin) * $items.length) + 32, // 16px padding on left and right of .timeline-items
              data = $this.data('timeline');
usa_debug('========= timelineWidth: ' + timelineWidth + ', itemWidth: ' + itemWidth + ', timeline_settings.itemMargin: ' + timeline_settings.itemMargin + ', startIndex: ' + startIndex + ', $items.length: ' + $items.length + ', itemOpenWidth: ' + itemOpenWidth + ' => margin: ' + margin + ', width: ' + width);

          // Set margin so start element would place in middle of the screen
          $iholder.css({width: width, marginLeft: margin});


          // If the plugin hasn't been initialized yet
          if (!data){
            $this.data('timeline', {
              currentIndex      : startIndex,
              itemCount         : $items.length,
              margin            : margin,
//              percentItemWidth  : percentItemWidth,
              itemWidth         : itemWidth,
              itemOpenWidth     : itemOpenWidth,
              lineMargin        : 0,
              lineViewCount     : 0,
              options           : timeline_settings,
              items             : $items,
              iholder           : $iholder,
              open              : false,
              noAnimation       : false,
              marginResponse    : false,
              mousedown         : false,
              mousestartpos     : 0
            });
          }

          if(!timeline_settings.hideTimeline) {
            $this.timeline('createElements');
//            if($this.hasClass('timelineClean')) {}
          }

          // Bind keyLeft and KeyRight functions
          $(document).keydown(function(e){
            if (e.keyCode == 37) {
              $this.timeline('left');
              return false;
            }
            if (e.keyCode == 39) {
              $this.timeline('right');
              return false;
            }
          });

          $(document).ready(function(){
//            $this.find(timeline_settings.itemClass).css({ '-webkit-touch-callout': 'none', '-webkit-user-select': 'none', '-khtml-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', 'user-select': 'none'}).find('img').on('dragstart', function(event) {
            $this.timeline('setInitWidthMargin');

            $this.find(timeline_settings.itemClass).find('img').on('dragstart', function(event) {
              if (!($(this).hasClass('timeline-rollover-bottom')))
                event.preventDefault();
            });

            $('.timeline-image-rollover-bottom').on('dragstart', function(event) {
              $(this).addClass("disableClick");
              event.preventDefault();
            });

            $('.timeline-image-rollover-bottom').on('mousedown', function(event) {
              if (!$(this).is("hover")) {
              $(this).removeClass("disableClick");
            }

            });

            $('.timeline-image-rollover-bottom').on('click', function(event) {
              if ($(this).hasClass('disableClick')) {
                event.preventDefault();
                event.stopPropagation();
              }
              $(this).removeClass('disableClick')
            });
          });

          // WINDOW RESIZING
/*
          $(window).resize(function() {
            //var id = $this.find('.active:first').attr('href').substr(1);
            var data = $this.data('timeline'),
                id = $items.eq(data.currentIndex).attr('data-id');

            itemWidth = $items.first().width(),
            itemOpenWidth = $itemsOpen.first().find('div:first').width();

            data.margin += data.itemCount*(data.itemWidth-itemWidth);
            data.itemWidth = itemWidth;

            if (data.open) data.margin += (data.itemOpenWidth-itemOpenWidth)/2;
            data.itemOpenWidth = itemOpenWidth;


            if ($('body').width() < 767 && data.open && !data.marginResponse) {
              data.margin -= (itemWidth+timeline_settings.itemMargin)/2;
              data.marginResponse = true;
            }
            else if ($('body').width() >= 767 && data.marginResponse && data.open) {
              data.margin += (itemWidth+timeline_settings.itemMargin)/2;
              data.marginResponse = false;
            }

            data.noAnimation = true;
            $this.timeline('goTo', id);
          });
*/

          // Bind left on click
          $this.find('.timeline-left').click(function(){
            $this.timeline('left');
          });

          // Bind right on click
          $this.find('.timeline-right').click(function(){
            $this.timeline('right');
          });

          // SWIPE bind
          if (timeline_settings.swipeOn) {
            $items.find('*').each(function(){
              $(this).css({'-webkit-touch-callout': 'none',
                    '-webkit-user-select': 'none',
                    '-khtml-user-select': 'none',
                    '-moz-user-select': 'none',
                    '-ms-user-select': 'none',
                    'user-select': 'none'});
            });

            $this.bind('touchstart', function(e) {
              $this.timeline('touchStart', e);
            });

            $this.find(timeline_settings.itemClass).mousedown(function(e) {
              $this.timeline('mouseDown', e.pageX);
            });

            $(document).bind('touchend',function(e) {
              data = $this.data('timeline');
              $this.timeline('touchEnd', data.touchpos);
            });

            $(document).mouseup(function(e) {
              var data = $this.data('timeline');
              if (data.mousedown) {
                $this.timeline('mouseUp', e.pageX);
              }
            });
          }

          // Bind open on click
          $this.find(timeline_settings.openTriggerClass).click(function(){
            $this.timeline('goTo', $(this).attr('data-id'), $(this).attr('data-count'), true);
          });

          // Bind close on click
          $this.find('.timeline-close').click(function(){
            $this.timeline('close',$(this).attr('data-id'),$(this).attr('data-count'));
          });

          // Show when loaded
          $this.css({height: 'auto'}).show();
          $this.prev('.timelineLoader').hide();

          // Reposition nodes due to their width
          $this.find('.timeline-node').each(function(){
            if ($(this).width() < 10) $(this).width(12);
            $(this).css({marginLeft: -$(this).width()/2});
          });
          return $this;
        }, // end init

        // Clear data
        destroy : function( ) {
          $(document).unbind('mouseup');
          $(window).unbind('resize');
          var $this = this,
              data = $this.data('timeline');
          $this.removeData('timeline');
        }, // end destroy

        setInitWidthMargin : function() {
          var $this = this,
//              data = $this.data('timeline'),
//              itemWidth = data.itemWidth + data.options.itemMargin,
              data = $this.data('timeline'),
              timeline_settings = data.options,
//          var	$this = $('.timelineFlat'),
              timelineWidth = $this.find('.timeline-items-holder:first').width(),
              $items = $this.find(timeline_settings.itemClass),
              itemWidth = Math.ceil(timelineWidth * timeline_settings.percentItemWidth), // $items.first().width(),
              $iholder =  $this.find('.timeline-items:first'),
              lineWidth = Math.ceil(timelineWidth * timeline_settings.percentLineWidth),
              $line = $this.find('.timeline-wrapper:first'),
//              margin = 300/2 - (itemWidth + timeline_settings.itemMargin)*(1/2 + startIndex) ,
//              width = (itemWidth + timeline_settings.itemMargin)*$items.length + (itemOpenWidth + timeline_settings.itemMargin) + 660 ,
              margin = (timelineWidth - (itemWidth + timeline_settings.itemMargin))/2,
              width = ((itemWidth + timeline_settings.itemMargin) * $items.length) + 32; // 16px padding on left and right of .timeline-items
usa_debug('========= timelineWidth: ' + timelineWidth + ', itemWidth: ' + itemWidth + ', timeline_settings.itemMargin: ' + timeline_settings.itemMargin + ', $items.length: ' + $items.length + ' => margin: ' + margin + ', width: ' + width);

          data.itemWidth = itemWidth;
          data.margin = margin;
          $items.css({width: itemWidth});
          // Set margin so start element would place in middle of the screen
          $iholder.css({width: width, marginLeft: margin});

          $line.css({width: lineWidth}).parents('.timeline-line').css({width: lineWidth});
        }, // end setInitWidthMargin

        touchStart : function(evt) {
          var $this = this,
              data = $this.data('timeline'),
              xmargin = 0;
          data.xpos = evt.originalEvent.touches[0].pageX,
          data.ypos = evt.originalEvent.touches[0].pageY;
          data.mousedown = true;
          data.touchHorizontal = false;
          data.mousestartpos = data.xpos;
          $this.unbind('touchmove');
          $this.bind('touchmove', function(e){
            var newx = e.originalEvent.touches[0].pageX,
                newy = e.originalEvent.touches[0].pageY;
            if (data.mousedown && !data.touchHorizontal) {
              if (Math.abs(newx-data.xpos) > Math.abs(newy-data.ypos)) {
                data.touchHorizontal = true;
              }
            }
            else if (data.touchHorizontal) {
              e.preventDefault();
              data.touchpos = e.originalEvent.touches[0].pageX;
              xmargin = data.margin - data.xpos + e.originalEvent.touches[0].pageX;
              data.iholder.css('marginLeft', xmargin + 'px');
            }
            data.mousedown = false
          });
        }, // end touchStart

        mouseDown : function(xpos) {
          var $this = this,
              data = $this.data('timeline'),
              xmargin = 0;
          data.mousedown = true;
          data.mousestartpos = xpos;

          $('body').css('cursor','move');
          $(document).mousemove(function(e){
            xmargin = data.margin - xpos + e.pageX;
            data.iholder.css('marginLeft', xmargin + 'px');
          });
        }, // end mouseDown

        touchEnd : function(xpos) {
          var $this = this,
              data = $this.data('timeline'),
              itemWidth = data.itemWidth + data.options.itemMargin,
              itemC = data.currentIndex,
              mod = 0,
              xmargin = xpos - data.mousestartpos;

          if (typeof data.touchHorizontal != 'undefined' && data.touchHorizontal) {
            data.touchHorizontal = false;

            itemC -= parseInt(xmargin/itemWidth);
            mod = xmargin%itemWidth;
            if (xmargin < 0 && mod < -itemWidth/2) {
              itemC++;
            }
            if (xmargin > 0 && mod > itemWidth/2) {
              itemC--;
            }
            if(itemC < 0) {
              itemC = 0;
            }
            if(itemC >= data.itemCount) {
              itemC = data.itemCount-1;
            }

            $this.timeline('goTo', data.items.eq(itemC).attr('data-id'), data.items.eq(itemC).attr('data-count'));

            if (data.options.closeItemOnTransition)
              $this.timeline('close', data.items.eq(itemC).attr('data-id'));
          }
        }, // end touchEnd

        mouseUp : function(xpos) {
          var $this = this,
              data = $this.data('timeline'),
              itemWidth = data.itemWidth + data.options.itemMargin,
              itemC = data.currentIndex,
              mod = 0,
              xmargin = xpos - data.mousestartpos;
          data.mousedown = false;

          $(document).unbind('mousemove');
          $('body').css('cursor','auto');

          itemC -= parseInt(xmargin/itemWidth);
          mod = xmargin%itemWidth;
          if (xmargin < 0 && mod < -itemWidth/2) {
            itemC++;
          }
          if (xmargin > 0 && mod > itemWidth/2) {
            itemC--;
          }
          if(itemC < 0) {
            itemC = 0;
          }
          if(itemC >= data.itemCount) {
            itemC = data.itemCount-1;
          }

          $this.timeline('goTo', data.items.eq(itemC).attr('data-id'), data.items.eq(itemC).attr('data-count'));
          if (data.options.closeItemOnTransition)
              $this.timeline('close', data.items.eq(itemC).attr('data-id'));
        }, // end mouseUp

        open : function (id, data_count) {
          var $this = this,
              data = $this.data('timeline'),
              $items = $this.find(data.options.itemOpenClass),
              speed = data.options.scrollSpeed,
              width =  data.itemOpenWidth,
              easing = data.options.easin,
              itemMargin = data.options.itemMargin;

          $items.each(function(){
            if ($(this).attr('data-id') == id) {
              if (!data_count || data_count == $(this).attr('data-count')) {
                var $newThis = $(this);
                // Trigger itemOpen event
                $this.trigger('itemOpen.Timeline');

                // Open content and move margin
                $(this).stop(true).show().animate({width: width, marginLeft: itemMargin/2, marginRight: itemMargin/2}, speed, easing);

                if (typeof $(this).attr('data-access') != 'undefined' && $(this).attr('data-access') != '') {
                  var action = $(this).attr('data-access');

                  $.get(action, function(data){
                    $('body').append('<div class="ajax-preloading-holder" style="display:none"></div>');
                    $('.ajax-preloading-holder').html(data);
                    if ($('.ajax-preloading-holder img').length > 0 ) {
                      $('.ajax-preloading-holder img').load(function() {
                        $newThis.find('.timeline-item-open-content').html(data);
                        $('.ajax-preloading-holder').remove();
                        $(this).attr('data-access', '');

                        /* trigger */
                        var event = jQuery.Event( 'ajaxLoaded.timeline' );
                        event.element = $newThis.find('.timeline-item-open-content');
                        $( "body" ).trigger( event );
                        $this.trigger(event);
                      });
                    }
                    else {
                      $newThis.find('.timeline-item-open-content').html(data);
                      $('.ajax-preloading-holder').remove();
                      $(this).attr('data-access', '');

                      /* trigger */
                      var event = jQuery.Event( 'ajaxLoaded.timeline' );
                      event.element = $newThis.find('.timeline-item-open-content');
                      $( "body" ).trigger( event );
                      $this.trigger(event);
                    }
                  },'text').fail(function() {
                    data = '<div class="timeline-open-content"><h2 class="no-marg-top">'+data.options.ajaxFailMessage+'</h2></div>';
                    $newThis.find('.timeline-item-open-content').html(data);
                    $('.ajax-preloading-holder').remove();

                    /* trigger */
                    var event = jQuery.Event( 'ajaxLoaded.timeline' );
                    event.element = $newThis.find('.timeline-item-open-content');
                    $( "body" ).trigger( event );
                    $this.trigger(event);
                  });
                }

                if ($('body').width() < 767) {
                  data.margin -= (data.itemWidth+data.options.itemMargin)/2;
                  data.marginResponse = true;
                }
                else {
                  data.marginResponse = false;
                }
                data.margin -= (width + data.options.itemMargin + data.itemWidth)/2 - data.itemWidth/2;
                data.iholder.stop(true).animate({marginLeft : data.margin}, speed, easing);
                data.open = id;
              }
            }
          });
          return $this;
        }, // end open

        close : function (id, idOpen, dataCountOpen) {
          var $this = this,
              data = $this.data('timeline'),
              $items = $this.find(data.options.itemOpenClass),
              speed = data.options.scrollSpeed,
              width =  data.itemOpenWidth,
              easing = data.options.easing;

          $items.each(function(){
            if ($(this).attr('data-id') == id && $(this).is(":visible")) {
              // Trigger itemOpen event
              $this.trigger('itemClose.Timeline');

              // Close content and move margin
              $(this).stop(true).animate({width: 0, margin:0}, speed, easing, function(){$(this).hide()});
              if (data.marginResponse) {
                data.margin += (data.itemWidth+data.options.itemMargin)/2;
              }
              data.margin += (width + data.options.itemMargin)/2;
              data.iholder.stop(true).animate({marginLeft : data.margin}, speed, easing);
              data.open = false;
            }
          });
          if(idOpen) {
            $this.timeline('open', idOpen, dataCountOpen);
          }
          return $this;
        }, // end close

        // Move one step left
        right : function() {
          var $this = this,
            data = $this.data('timeline'),
            speed = data.options.scrollSpeed,
            easing = data.options.easing;
          if (data.currentIndex < data.itemCount-1) {
            var dataId = data.items.eq(data.currentIndex+1).attr('data-id');
            var dataCount = data.items.eq(data.currentIndex+1).attr('data-count');
            $this.timeline('goTo', dataId, dataCount);

            if (data.options.closeItemOnTransition)
              $this.timeline('close', dataId);
          }
          else {
            data.iholder.stop(true).animate({marginLeft : data.margin-50}, speed/2, easing).animate({marginLeft : data.margin}, speed/2, easing);
          }
          return $this
        }, // end right

        // Move one step right
        left : function() {
          var $this = this,
            data = $this.data('timeline'),
            speed = data.options.scrollSpeed,
            easing = data.options.easing;
          if (data.currentIndex > 0) {
            var dataId = data.items.eq(data.currentIndex-1).attr('data-id');
            var dataCount = data.items.eq(data.currentIndex-1).attr('data-count');
            $this.timeline('goTo', dataId, dataCount);

            if (data.options.closeItemOnTransition)
              $this.timeline('close', dataId);
          }
          else {
            data.iholder.stop(true).animate({marginLeft : data.margin+50}, speed/2, easing).animate({marginLeft : data.margin}, speed/2, easing);
          }
          return $this;
        }, // end left

        // GO TO ITEM
        goTo : function (id, data_count, openElement) {
usa_debug('========== goTo(' + id + ', ' + data_count + ', ' + openElement + ')');
          var $this = this,
              data = $this.data('timeline'),
              speed = data.options.scrollSpeed,
              easing = data.options.easing,
              $items = data.items,
              timelineWidth = $this.find('.timeline-line').width(), // the line nav -- not the entire timeline container
              count = -1,
              found = false;
usa_debug('======= data: ');
usa_debug(data);

          // Find item index
          $items.each(function(index){
            if (id == $(this).attr('data-id')) {
              if (!data_count || data_count == $(this).attr('data-count')) {
                found = true;
                count = index;
                return false;
              }
            }
          });

          // Move if found
          if (found) {
usa_debug('======= if (found)');
            // Move lineView (dots) to current element
            var $nodes = $this.find('.timeline-node');
            $nodes.removeClass('active');
            var $goToNode = $nodes.parent().parent().find('[href="#'+id+'"]').addClass('active');
            data.lineMargin = -parseInt($goToNode.parent().parent().attr('data-id'), 10)*100;
usa_debug('======== data.lineMargin: ' + data.lineMargin);

            // check if responsive width
            if ($this.find('.timeline-view:first').width() > $this.find('.timeline-line').width()) {
              data.lineMargin *=2;
              if ($goToNode.parent().hasClass('right')) data.lineMargin -= 100;
            }
usa_debug('======== data.lineMargin: ' + data.lineMargin);

            if (data.noAnimation){
              data.noAnimation = false;
              $this.find('.timeline-wrapper').stop(true).css({marginLeft : data.lineMargin+'%'});
            }
            else {
              $this.find('.timeline-wrapper').stop(true).animate({marginLeft : data.lineMargin+'%'}, speed, easing );
            }


            if (data.open) {
              $this.timeline('close', data.open, id, data_count);
            }
            else if (openElement) {
              $this.timeline('open', id, data_count);
            }

            // Trigger ScrollStart event
            $this.trigger('scrollStart.Timeline');

            // Scroll
//            data.margin += (data.itemWidth + data.options.itemMargin)*(data.currentIndex - count);
            var itemWidth = $this.find('.timeline-item:first').width();
usa_debug('======== data.margin: ' + data.margin);
            data.margin += (itemWidth + data.options.itemMargin)*(data.currentIndex - count);
usa_debug('========= data.itemWidth: ' + data.itemWidth + ', itemWidth: ' + itemWidth + ', data.options.itemMargin: ' + data.options.itemMargin + ', data.currentIndex: ' + data.currentIndex + ', count: ' + count + ' => data.margin: ' + data.margin);
            data.currentIndex = count;

            var multiply = (parseInt(data.iholder.css('margin-left')) - data.margin)/data.itemWidth;

            // RF CODE CHANGE
usa_debug('========== RF DEBUG: multiply = ' + String(multiply));
usa_debug(data);
// NOTE: data.iholder = $('.timeline-items')
            var ignoreMultiply = false;

            if (multiply < 0 && multiply > -0.3) {
              ignoreMultiply = true;
            }

            if (multiply > 0 && multiply < 0.3) {
              ignoreMultiply = true;
            }

            if (multiply == 0 || ignoreMultiply == true) {
              data.iholder.stop(true).animate({marginLeft : data.margin}, speed+(speed/5)*(Math.abs(multiply)-1), easing, function() {
                // Trigger ScrollStopIgnore event - this is for events that didn't really move on to the next/previous item
                $this.trigger('scrollStopIgnore.Timeline');
              });
            }
            else {
              var currentId = data.items[data.currentIndex].dataset.id;
              //usa_debug(jQuery(".timeline-items").find(".item[data-id='" + currentId + "'] .timeline-item-text").html());
              var slideTitlePartsForOmniture = String($(".timeline-items").find(".timeline-item[data-id='" + currentId + "'] .timeline-item-text").text()).split('\n');
              var slideTitleForOmniture = slideTitlePartsForOmniture[0];
              //usa_debug('slideTitleForOmniture: ' + slideTitleForOmniture);
    //					usa_refreshBannerAds('slideshow', slideTitleForOmniture);
              usa_refreshBannerAd();

              data.iholder.stop(true).animate({marginLeft : data.margin}, speed+(speed/5)*(Math.abs(multiply)-1), easing, function(){
                // Trigger ScrollStop event
                $this.trigger('scrollStop.Timeline');
              });
            }
          }
          return $this;
        }, // end goTo

        // move line to the left
        lineLeft : function() {
          var $this = this,
              data = $this.data('timeline'),
              speed = data.options.scrollSpeed,
              easing = data.options.easing;
usa_debug('=========== lineLeft: speed: ' + speed + ', easing: ' + easing);
          if (data.lineMargin != 0 && data.options.categories) {
            data.lineMargin += 100;
            $this.find('.timeline-wrapper').stop(true).animate({marginLeft : data.lineMargin+'%'}, speed, easing);
          }
        }, // end lineLeft

        // move line to the right
        lineRight : function() {
          var $this = this,
              data = $this.data('timeline'),
              speed = data.options.scrollSpeed,
              easing = data.options.easing;
          if ($this.find('.timeline-view:first').width() > $this.find('.timeline-line').width()) {
            var viewCount = data.lineViewCount * 2;
          }
          else {
            var viewCount = data.lineViewCount;
          }
usa_debug('=========== lineRight: viewCount: ' + viewCount + ', data.lineMargin: ' + data.lineMargin + ', data.options.categories: ');
usa_debug(data.options.categories);

          if (data.lineMargin != -(viewCount-1)*100 && data.options.categories) {
            data.lineMargin -= 100;
            $this.find('.timeline-wrapper').stop(true).animate({marginLeft : data.lineMargin+'%'}, speed, easing);
          }
        }, // end lineRight

        // Create timeline elements and css dependent properties
        createElements : function() {
usa_debug('========== createElements()');
          var $this = this,
              data = $this.data('timeline'),
              $items = data.items;

          var html = '\n' +
//    '    <div class="timeline-line" style="text-align: left; position:relative; margin-left:auto; margin-right:auto;"></div>\n';
    '    <div class="timeline-line"></div>\n';
          $this.prepend(html);
          var	timelineWidth = $this.find('.timeline-line').width(),
              nodes = new Array(),
              months = [''].concat(data.options.categories),
              monthsDays = [0].concat(data.options.numberOfSegments),
              minM = months.length,
              minY = 99999,
              maxM = 0,
              maxY = 0;
usa_debug('======= months: ');
usa_debug(months);
usa_debug('======= monthsDays: ' );
usa_debug(monthsDays);
          if (!data.options.yearsOn) maxY = 99999;

          var yearsArr = {};
          if (!data.options.categories) {
usa_debug('======= if (!data.options.categories)');
            $items.each(function(){
              var dataId = $(this).attr('data-id'),
                  dataArray = dataId.split('/'),
                  d = parseInt(dataArray[0], 10),
                  m = ($.inArray(dataArray[1],months) != -1) ? $.inArray(dataArray[1],months) : parseInt(dataArray[1], 10),
                  y = parseInt(dataArray[2], 10);
              if (d < minY) minY = d;
              if (d > maxY) maxY = d;
            });
            minY -= 10;
            maxY += 10;
          }

          // LOOP THROUGH EACH ITEM AND CREATE ELEMENTS
          // find timeline date range and make node elements
usa_debug('=========== $items: ');
usa_debug($items);
          var mCnt = 1;
          $items.each(function(index) {
            var dataId = $(this).attr('data-id'),
                nodeName = $(this).attr('data-name'),
                dataDesc = $(this).attr('data-description'),
                dataArray = dataId.split('/'),
                d = parseInt(dataArray[0], 10),
                m = ($.inArray(dataArray[1], months) != -1) ? $.inArray(dataArray[1], months) : parseInt(dataArray[1], 10),
                y = parseInt(dataArray[2], 10);
usa_debug('======== mCnt: ' + mCnt + ', d: ' + d + ', m: ' + m + ', y: ' + y);
            if (typeof yearsArr[y] == 'undefined') yearsArr[y] = {};
            if (typeof yearsArr[y][m] == 'undefined') yearsArr[y][m] = {};
            yearsArr[y][m][d] = dataId;
            var isActive = (index == data.currentIndex ? ' active' : '');
            // leftPos = position of dots for each episode
            if (data.options.categories) {
//              var leftPos = (100/(monthsDays[m] + 1)) * d;
              var leftPos = (100/(monthsDays[m] + 1)) * d;
usa_debug('============ data.options.categories => leftPos: ' + leftPos + '\nmonthsDays[m]: ' + monthsDays[m] + '\nd: ' + d);
            }
            else {
              var leftPos = (100/(maxY-minY))*(d-minY);
usa_debug('============ data.options.categories else => leftPos: ' + leftPos + '\nmaxY: ' + maxY + '\nminY: ' + minY + '\nd: ' + d);
            }
            var nName = ((typeof nodeName != 'undefined') ? nodeName : d);

            // Store node element
            nodes[dataId] = '<a href="#'+dataId+'" class="timeline-node'+isActive+'" style="left: '+leftPos+'%">';

//            if (typeof dataDesc != 'undefined') nodes[dataId]+= '<span class="timeline-node-desc" style="white-space:nowrap; position:absolute; z-index: 1;"><span>'+dataDesc+'</span></span>';
            if (typeof dataDesc != 'undefined') nodes[dataId]+= '<span class="timeline-node-desc"><span>'+dataDesc+'</span></span>';

            nodes[dataId]+='</a>\n';
            mCnt++;
          });
usa_debug('========== yearsArr: ');
usa_debug(yearsArr);
usa_debug('========== nodes: ');
usa_debug(nodes);

          // Make wrapper elements
          html = '\n' +
//    '		<div id="timeline-left" style="position: absolute;"></div><div id="timeline-right" style="position: absolute;"></div>\n' +
//    '		<div class="timeline-holder" style="position:relative; overflow: hidden; width:100%;">\n' +
//    '			<div class="timeline-wrapper" style="white-space:nowrap;">\n';
    '		<div id="timeline-line-left"></div><div id="timeline-line-right"></div>\n' +
    '		<div class="timeline-holder">\n' +
    '			<div class="timeline-wrapper">\n';

          // Prepare for loop, every view has 2 months, we show both if first has nodes in it
          if (!data.options.categories) {
usa_debug('========= if (!data.options.categories)');
            html +=
//            '<div class="timeline-view" data-id="'+cnt+'" style="position:relative; display:inline-block; width:100%;">\n'+
//            '					<div class="timeline-m" style="width:100%; border:0; position:absolute; top:0;">\n';
            '<div class="timeline-view" data-id="'+cnt+'">\n'+
            '					<div class="timeline-m">\n';
            for (var x in nodes) {
              html += nodes[x];
            }
            html += '</div>\n'+
            '</div>';
          }
          else {
            var firstMonth = true,
                cnt = 0;
usa_debug('=========== else');
            for (var yr in yearsArr) {
              for (var mnth in yearsArr[yr]) {
                if (firstMonth) {
usa_debug('============ if (firstMonth) : cnt: ' + cnt + ', months[(cnt + 1)]: ' + months[(cnt + 1)] + ', mnth: ' + mnth);
                  firstMonth = !firstMonth;
                  html +=
                '<div class="timeline-view" data-id="'+cnt+'">\n'+
        '					<div class="timeline-m">\n'+
//        '						<h4 class="timeline-month">'+months[mnth]+(data.options.yearsOn ? '<span class="timeline-month-year"></span>' : '' )+'</h4>\n';
        '						<h4 class="timeline-month">'+(data.options.yearsOn ? 's' + yr + ' ' : '') + 'e' + mnth + (data.options.yearsOn ? '<span class="timeline-month-year"></span>' : '' )+'</h4>\n';

                  // Fill with nodes
                  for (dy in yearsArr[yr][mnth]) {
usa_debug('============= yr: ' + yr + ', mnth: ' + mnth + ', dy: ' + dy);
                    html+= nodes[yearsArr[yr][mnth][dy]];
                  }
                  html +=
        '					</div> <!-- KRAJ PRVOG -->\n';
                }
                else {
usa_debug('============ else !firstMonth : cnt: ' + cnt + ', months[(cnt + 1)]: ' + months[(cnt + 1)] + ', mnth: ' + mnth);
                  firstMonth = !firstMonth;
                  html +=
        '					<div class="timeline-m right">\n'+
//        '						<h4 class="timeline-month">'+(typeof months[mnth] !== 'undefined' ? months[mnth] : '')+(data.options.yearsOn ? '<span class="timeline-month-year"> </span>' : '' )+'</h4>\n';
        '						<h4 class="timeline-month">' + (data.options.yearsOn ? 's' + yr + ' ' : '') + (typeof months[mnth] !== 'undefined' ? 'e' + mnth : '') + (data.options.yearsOn ? '<span class="timeline-month-year"> </span>' : '' )+'</h4>\n';

                  // Fill with nodes
                  for (dy in yearsArr[yr][mnth]) {
usa_debug('============= yr: ' + yr + ', mnth: ' + mnth + ', dy: ' + dy);
                    html+= nodes[yearsArr[yr][mnth][dy]];
                  }
                  html +=
        '					</div><!-- KRAJ DRUGOG -->\n'+
        '					<div class="clear"></div>\n'+
        '				</div>';
                  cnt++;
                }
              } // for mnth
            } // for yr

            if (!firstMonth) {
              html +=
      '					<div class="timeline-m right">\n'+
      '						<h4 class="timeline-month"></h4>\n'+
      '					</div>\n'+
      '					<div class="clear"></div>\n'+
      '				</div>';
              cnt++;
            }
          } // if - else

          html +=	'\n' +
    '				<div class="clear"></div>\n'+
    '			</div>\n'+
    '		</div>\n';

          // Set number of View elements
          data.lineViewCount = cnt;
          // Add generated html and set width & margin for dynamic timeline
          $this.find('.timeline-line:first').html(html);
usa_debug('=========== .timeline-line:first: ');
usa_debug($this.find('.timeline-line:first'));
          $this.find('.timeline-node').each(function(){
            var $thisNode = $(this);
            $(this).find('span').hide();
            $(this).hover(function() {
              $items.each(function() {
                if ($(this).attr('data-id') == $thisNode.attr('href').substr(1)) {
                  $(this).addClass('timeline-item-node-hover');
                }
              });
              $(this).find('span').css('display','block');
            }, function() {
              $(this).find('span').css('display','none');
              $('.timeline-item-node-hover').removeClass('timeline-item-node-hover');
            });

            // Position lineView to selected item
            if ($(this).hasClass('active')) {
              data.lineMargin = -parseInt($(this).parent().parent('.timeline-view').attr('data-id'), 10)*100;
              $this.find('.timeline-wrapper').css('margin-left', data.lineMargin+'%');
            }

            // Bind goTo function to "dot" click event
            $(this).click(function(e){
              e.preventDefault();
              $this.find('.timeline-node').removeClass('active');
              $(this).addClass('active');
              $this.timeline('goTo', $(this).attr('href').substr(1));
            });
          });

          $this.find('#timeline-line-left').on('click', function(){
//usa_debug('============ #timeline-line-left click');
            $this.timeline('lineLeft');
          });

          $this.find('#timeline-line-right').on('click', function(){
//usa_debug('============ #timeline-line-right click');
            $this.timeline('lineRight');
          });
        } // end createElements
      }; // end t_methods

      // Initiate methods
      $.fn.timeline = function( method ) {
        if ( t_methods[method] ) {
          return t_methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        }
        else if ( typeof method === 'object' || ! method ) {
          return t_methods.init.apply( this, arguments );
        }
        else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.timeline' );
        }
      };



      // MOVED FROM TEMPLATE PAGE
      $('.tl3').timeline({
        openTriggerClass : '.read-more',
        startItem : '01/01/01', // '01/01',
        closeText : ''
      });
      $('.tl3').on('ajaxLoaded.timeline', function(e){
        usa_debug('TIMELINE: loaded');
        usa_debug(e.element.find('.timeline-open-content span'));

        var height = e.element.height() - 60 - e.element.find('h2').height();
        e.element.find('.timeline-open-content span').css('max-height', height).mCustomScrollbar({
          autoHideScrollbar:true,
          theme:"light-thin"
        });
      });
      $('.tl3').on('scrollStart.Timeline', function(e){
        usa_debug('TIMELINE: start');
      });
      $('.tl3').on('scrollStop.Timeline', function(e){
        usa_debug('TIMELINE: end');
      });


      // socialShareOmniture
      function socialShareOmniture(shareType) {
        usa_debug('USA: ' + shareType + 'Share()');
        s.linkTrackVars = 'events,eVar74';
        s.linkTrackEvents = 'event41';
        s.events = 'event41';
        s.eVar74 = shareType;
        s.tl(this,'o','Social Share');
        s.manageVars('clearVars', s.linkTrackVars,1);
      }

      // set social sharing clicks
      jQuery('#social-hqpage-reaction0-icon div').on('click', function() {
        socialShareOmniture('Facebook');
      });
      jQuery('#social-hqpage-reaction1-icon div').on('click', function() {
        socialShareOmniture('Tumblr');
      });
      jQuery('#social-hqpage-reaction2-icon div').on('click', function() {
        socialShareOmniture('Twitter');
      });
      jQuery('#social-hqpage-reaction3-icon div').on('click', function() {
        socialShareOmniture('Othershare');
      });


    }
  }
})(jQuery);
