(function ($) {

  $(document).ready(function () {

    var body = document.body,
        dropArea = document.getElementById( 'drop-area' ),
        //dropAreaPreview = document.getElementById( 'share-block-preview' ),
        droppableArr = [],
        dropAreaTimeout,
        top3target = $('.drop-area__item'),
        ins0 = $('#one').attr('id'),
        ins1 = $('#two').attr('id'),
        ins2 = $('#three').attr('id'),
        slot0 = $('#one'),
        slot1 = $('#two'),
        slot2 = $('#three'),
        preview0 = $('#preview-one'),
        preview1 = $('#preview-two'),
        preview2 = $('#preview-three'),
        dropZone2,
        sliderContainer = $('#slider-container'),
        sliderWrapper = sliderContainer.find('.slider-wrapper'),
        currentSlideNum = sliderContainer.find('#counter .current-slide'),
        totalSlidesNum= sliderContainer.find('#counter .total-slides'),
        slide = sliderContainer.find('.slide'),
        slideTitle = slide.find('.title'),
        nextArrow = sliderContainer.find('.next'),
        prevArrow = sliderContainer.find('.prev'),
        playButton = $('#play-button'),
        videoBlock = $('#slider-player'),
        start_item = '';

    function infoOpen() {
      $('#info').hide();
      $('.control-button').hide();
      $('#counter').hide();
      slideTitle.hide();
      //$('.play-button').hide();
      playerService.hidePlayButton();
      $('.drag-group').hide();
      $('#info-block').show();
    }
    function infoClose() {
      $('#info-block').hide();
      $('.control-button').show();
      $('#counter').show();
      slideTitle.show();
      //$('.play-button').show();
      playerService.showPlayButton();
      $('.drag-group').show();
      $('#info').show();
    }
    function previewOpen() {
      $('#info').hide();
      $('.control-button').hide();
      $('#counter').hide();
      slideTitle.hide();
      //$('.play-button').hide();
      playerService.hidePlayButton();
      $('.drag-group').hide();
      $('#drag-icon-block').hide();
      $('#share-block-preview').show();
    }
    function previewClose() {
      $('#share-block-preview').hide();
      $('.control-button').show();
      $('#counter').show();
      slideTitle.show();
      //$('.play-button').show();
      playerService.showPlayButton();
      $('.drag-group').show();
      $('#drag-icon-block').show();
      $('#info').show();
    }

    function changeTwoItems(first, second, target) {
      if(Math.abs(second - first) == 1) {
        if (second - first > 0) {
          target.eq(second).insertBefore(target.eq(first));
        } else {
          target.eq(first).insertBefore(target.eq(second));
        }
      }
      if(Math.abs(second - first) == 2) {
        if (second - first > 0) {
          target.eq(first).insertAfter(target.eq(second));
        } else {
          target.eq(first).insertBefore(target.eq(second));
        }
      }
    }

    $('#info').click(function(){
      infoOpen();
    });
    $('#info-close, #start-button').click(function(){
      infoClose();
      $('#start-button').once(function(){
        $('#start-button').remove();
        top3Usanetwork.carousel();
      });
    });
    $('#share-preview-close').click(function(){
      previewClose();
    });

    // player service
    var playerService = {

      playerStatus: false, // default value
      mediaLoadStatus: false, // default value
      mediaPlayStatus: false, // default value

      createPlayer: function () {
            var src = videoBlock.data('player-src'),
            frame, slide;

        if (src == undefined || src == '') {
          src = $('#slider-container .slide .video-data:eq(0)').data('src').replace('autoPlay=true', 'autoPlay=false')
        }

        frame = "<iframe src=" + src + " id='pdk-player' allowfullscreen='' width='100%' height='100%' frameborder='0'></iframe>";

        if (!videoBlock.hasClass('active')) {
          videoBlock
              .append(frame)
              .addClass('active');

          // add player listeners
          playerService.bindPlayer();
        }
      },
      bindPlayer: function () {

        // check on $pdk object
        if (!($pdk = window.$pdk)) {
          return;
        }


        $pdk.bind('pdk-player');
        $pdk.controller.addEventListener('OnMediaStart', _onMediaStart);
        $pdk.controller.addEventListener('OnMediaPause', _onMediaPause);
        $pdk.controller.addEventListener('OnMediaUnpause', _onMediaUnpause);
        $pdk.controller.addEventListener('OnMediaLoadStart', _onMediaLoadStart);
        $pdk.controller.addEventListener('OnReleaseEnd', _onReleaseEnd);

        function _onMediaStart(pdkEvent) {
          playerService.mediaLoadStatus = false;
          playerService.mediaPlayStatus = true;
          // change status play button
          playButton.attr('data-player-status', 'start');
        }

        function _onMediaPause(pdkEvent) {
          playButton.removeClass('play');
        }

        function _onMediaUnpause(pdkEvent) {
          playButton.addClass('play');
        }

        function _onMediaLoadStart(pdkEvent) {
          playerService.mediaLoadStatus = true;
        }

        function _onReleaseEnd(pdkEvent) {
          playerService.mediaPlayStatus = false;
          // hide player
          playerService.hidePlayer();
        }
      },
      playPlayer: function () {
        $pdk.controller.clickPlayButton(true);
        $pdk.controller.pause(false);
      },
      pausePlayer: function () {
        $pdk.controller.clickPlayButton(false);
        $pdk.controller.pause(true);
      },
      showPlayer: function () {
        var activeSlide = $('#slider-container .slick-active'),
            srcLink = activeSlide.find('.video-data').data('src-link'),
            src = activeSlide.find('.video-data').data('src'),
            neighborBlock = activeSlide.find('.slide-content-inner');

        if (videoBlock.hasClass('active')) {

          //change player status
          playerService.playerStatus = true;

          // change video in player
          $pdk.controller.setReleaseURL(srcLink, true);

          neighborBlock.addClass('inactive');
          videoBlock.velocity("fadeIn", {
            duration: 200
          });
        }
      },
      hidePlayer: function (el) {
        var activeSlide = $('#slider-container .slick-active'),
            neighborBlock = activeSlide.find('.slide-content-inner'),
            playButton = $('#play-button');

        if (playerService.playerStatus) {

          //change player status
          playerService.playerStatus = false;

          // stop video
          $pdk.controller.endCurrentRelease();

          // make image block active
          neighborBlock.removeClass('inactive');
          videoBlock.css({
            opacity: 0
          });

          // reset play button
          playButton
              .removeAttr('data-player-status')
              .removeClass('inactive play');
        }
      },
      resetPlayer: function () {
        if (playerService.mediaLoadStatus) {
          // stop video
          $pdk.controller.endCurrentRelease();
        } else {
          playerService.pausePlayer();
        }
      },
      showPlayButton: function () {
        var slideActive = $('#slider-container .slick-active'),
            srcLink;

        if (slideActive.length > 0) {
          srcLink = slideActive.find('.video-data').data('src-link');
        } else {
          srcLink = $('#slider-container .slide:eq(0) .video-data').data('src-link');
        }

        if (srcLink != undefined) {
          playButton.show();
        } else {
          playButton.hide();
        }
      },
      hidePlayButton: function () {
        playButton.hide();
      }
    };
    // end

    var top3Usanetwork = {
      init : function(config){

        // add click on play button in slide
        $('#play-button').on('click', function () {

          var playBtn = $(this);

          if (!playBtn.hasClass('inactive')) {
            playBtn.addClass('inactive play');
            // show player
            playerService.showPlayer();
          } else if(playBtn.data('player-status') === 'start') {
            if (playBtn.hasClass('play')) {
              playerService.pausePlayer();
            } else if (!playBtn.hasClass('play')){
              playerService.playPlayer();
            }
          }
        });

        /*$("#loading").fadeIn();

         // load UI only when everything is loaded
         $(window).on('load', function() {
         $("#loading").fadeOut();
         setTimeout(function(){
         $(".content").css('visibility','visible');
         },500);
         });

         htmlCount = ['<span>01</span>/'+countItems+''].join();
         countContainer.append(htmlCount);

         //substitute mousedown event for exact same result as touchstart
         $.fn.tclick = function (onclick) {
         this.bind("touchstart", function (e) { onclick.call(this, e); e.stopPropagation(); e.preventDefault(); });
         this.bind("click", function (e) { onclick.call(this, e); });
         return this;
         };*/

        /*this.tourCheck();
         this.createCookie("initload",'1',1000);
         this.dataCall();*/
        //this.carousel();
        //this.gotoCanvas();


        setTimeout(function(){
          top3Usanetwork.droppables();
          top3Usanetwork.draggable();
          //top3Telemundo.videoPlay();
        },1000);

      },
      carousel : function(){

        sliderWrapper
            .on('init', function (slick) {

              var firstSlide = sliderWrapper.find('.slick-active').data('slick-index') + 1;

              currentSlideNum.text(firstSlide);
              totalSlidesNum.text(slide.length);
              //infoOpen();

            })
            .slick({
              autoplay: false,
              infinite: true,
              nextArrow: nextArrow,
              prevArrow: prevArrow,
              respondTo: 'window',
              slidesToShow: 1,
              slidesToScroll: 1,
              swipe: false,
              speed: 300
            })
            .on('afterChange', function(event, slick, currentSlide){
              playerService.showPlayButton();
              currentSlideNum.text(currentSlide + 1);
              if ($('body').hasClass('node-type-top3-gallery')) {
                Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
              }
            })
            .on('beforeChange', function(event, slick, currentSlide, nextSlide){
              if (playerService.playerStatus) {
                // hide player
                playerService.hidePlayer();
              }
            });

      },
      droppables : function(){

        console.log('droppables initilized');

        // initialize droppables
        [].slice.call( document.querySelectorAll( '#drop-area .drop-area__item' )).forEach( function( el ) {
          droppableArr.push( new Droppable( el, {

            onDrop : function( instance, draggableEl ) {
              $('.drop-area__item').removeClass('ui-sortable-handle');
              var cleanUp = draggableEl;
              topItem=$(draggableEl).find('.slide-content-inner');

              instanceDrop = instance.el.id;

              // show checkmark inside the droppabe element
              classie.add( instance.el, 'drop-feedback' );

              clearInterval(dropZone2);
              dropZone2 = setInterval(function(){
                //check drop zone: full or not
                top3target.each(function() {
                  elementDropped = $(this).hasClass('drop-feedback');
                  if(elementDropped == true){
                    topItem.find('.title').removeAttr('style');
                    switch (instanceDrop) {

                      case ins0:

                        if($.trim(slot0.html())){

                          var carouselTarget = $('#one').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot0.html(topItem.clone());
                          preview0.html(topItem.clone());

                        } else {

                          sliderWrapper.slick('slickNext');
                          $('#one').css('opacity',1);
                          slot0.html(topItem.clone());
                          preview0.html(topItem.clone());

                        }

                        break;

                      case ins1:

                        if($.trim(slot1.html())){

                          var carouselTarget = $('#two').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot1.html(topItem.clone());
                          preview1.html(topItem.clone());

                        } else {

                          sliderWrapper.slick('slickNext');
                          $('#two').css('opacity',1);
                          slot1.html(topItem.clone());
                          preview1.html(topItem.clone());

                        }

                        break;

                      case ins2:

                        if($.trim(slot2.html())){

                          var carouselTarget = $('#three').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot2.html(topItem.clone());
                          preview2.html(topItem.clone());

                        } else {
                          sliderWrapper.slick('slickNext');
                          $('#three').css('opacity',1);
                          slot2.html(topItem.clone());
                          preview2.html(topItem.clone());
                        }

                        break;
                    }
                    if($('#share-block-preview').hasClass('share-block-preview-processed')){
                      previewOpen();
                    }
                  }
                });
              },900);

              $(draggableEl).css('visibility','hidden');
              setTimeout(function(){
                $(draggableEl).css('visibility','visible');
                $(draggableEl).attr("disabled","disabled");
              },1700);

              clearTimeout( instance.checkmarkTimeout );
              instance.checkmarkTimeout = setTimeout( function() {
                classie.remove( instance.el, 'drop-feedback' );

              }, 1000 );

            }
          } ) );
        } );
      },

      draggable : function(){

        console.log('draggable initilized');

        //simulation mouse controlls to resize drag contex
        var mouse_button = false;
        var IE_version = getInternetExplorerVersion();
        function get_offset(element, direction, touch) {
          var demensions_coefficient = 10.58;
          if(direction == 'left') {
            if(touch) {
              return element.originalEvent.touches[0].clientX- sliderContainer.offset()['left'] - sliderContainer.height()/demensions_coefficient;
            } else {
              return element.originalEvent.clientX - sliderContainer.offset()['left'] - sliderContainer.height()/demensions_coefficient;
            }
          }
          if(direction == 'top') {
            if(touch) {
              return element.originalEvent.touches[0].clientY - (sliderContainer.offset().top - $(window).scrollTop()) - sliderContainer.width()/demensions_coefficient;
            } else {
              return element.originalEvent.clientY - (sliderContainer.offset().top - $(window).scrollTop()) - sliderContainer.width()/demensions_coefficient;
            }
          }
        }
        switch (IE_version) {

          case 11:
            $('.slide-content').on('pointerdown', function(el){
              mouse_button = true;
              $(el.currentTarget).addClass('slide-item-grab').css({
                'margin-top': get_offset(el, 'top', false)+'px',
                'margin-left': get_offset(el, 'left', false)+'px'
              });
            });

            break;

          case 10:
            $('.slide-content').on('MSPointerDown', function(el){
              mouse_button = true;
              $(el.currentTarget).addClass('slide-item-grab').css({
                'margin-top': get_offset(el, 'top', false)+'px',
                'margin-left': get_offset(el, 'left', false)+'px'
              });
            });

            break;

        }
        $('.slide-content').on('mousedown', function(el){
          mouse_button = true;
          $(el.currentTarget).addClass('slide-item-grab').css({
            'margin-top': get_offset(el, 'top', false)+'px',
            'margin-left': get_offset(el, 'left', false)+'px'
          });
        });
        $('.slide-content').on('mouseup', function(){
          mouse_button = false;
          $('.slide-content').css({
            'margin': '0'
          }).removeClass('slide-item-grab');
        });
        /*$('.slide-content').on('mouseout', function(){
          if (mouse_button) {
            mouse_button = false;
            $('.slide-content').css("margin", 0).removeClass('slide-item-grab');
          }
        });
        $('.slide-content').on('mouseover', function(){
          if (mouse_button) {
            mouse_button = false;
            $('.slide-content').css("margin", 0).removeClass('slide-item-grab');
          }
        });*/

        //mobile draging
        $('.slide-content').on('touchstart', function(el){
          $(el.currentTarget).addClass('slide-item-grab').css({
            'margin-top': get_offset(el, 'top', true)+'px',
            'margin-left': get_offset(el, 'left', true)+'px'
          });
        });

        /*$('.slide-content').on('touchend', function(){
          $('.slide-content').css({
            'margin': '0'
          }).removeClass('slide-item-grab');
        });*/

        // initialize draggable(s)
        [].slice.call(document.querySelectorAll( '.slider-wrapper .slide-content' )).forEach( function( el ) {

          new Draggable( el, droppableArr, {

            draggabilly : { containment: sliderContainer },

            onStart : function() {

              // check player status on drag start
              if (playerService.mediaLoadStatus ) {
                playerService.resetPlayer();
              } else if (playerService.mediaPlayStatus) {
                playerService.pausePlayer();
              }

              //finds induvidul all id in drop area
              var matchId = $(el).find('.slide-content-inner').attr('data-slide-id');
              var findMatchOne = $('#one').find('.slide-content-inner').attr('data-slide-id');
              var findMatchTwo = $('#two').find('.slide-content-inner').attr('data-slide-id');
              var findMatchThree = $('#three').find('.slide-content-inner').attr('data-slide-id');

              var matchArray = [findMatchOne, findMatchTwo, findMatchThree];

              for (var i = 0; i < matchArray.length; i++) {
                if (matchArray[i] == matchId) {
                  console.log('not allowed');
                  $('.container-message').fadeIn(400).addClass('not-allowed');
                }
              }


              // add class 'drag-active' to body
              classie.add( body, 'drag-active' );

              // clear timeout: dropAreaTimeout (toggle drop area)
              clearTimeout( dropAreaTimeout );

              // show dropArea
              classie.add( dropArea, 'show' );

            },

            onDrag : function() {

              if($('.container-message').hasClass('not-allowed')){
                classie.add( dropArea, 'not-allowed' );
              }

              inAction = true;
              dragEnd = false;
              if(inAction){
                classie.add( el , 'slide-item-grab');
              }
            },

            onEnd : function( wasDropped ) {

              //if element is not dropped please resize
              setTimeout(function(){
                $(el).css({
                  'margin': '0'
                });
                classie.remove( el , 'slide-item-grab');
              },500);

              function convertCanvasToImage(canvas) {
                var ctx = canvas.getContext('2d');
                var image = new Image();
                image.height = ctx['canvas'].height;
                image.width = ctx['canvas'].width;
                image.src = ctx['canvas'].toDataURL("image/jpeg", "1.0");
                return image;
              }

              var afterDropFn = function() {

                clearInterval(dropZone2);

                $('.active').find('.title').show();
                $('.container-message').fadeOut(500).removeClass('not-allowed');

                // hide dropArea
                classie.remove( dropArea, 'not-allowed' );
                classie.remove( dropArea, 'show' );

                // remove class 'drag-active' from body
                classie.remove( body, 'drag-active' );

                // check if top3 element are empty or full
                function isEmpty( el ){
                  return !$.trim(el.html());
                }

                if(isEmpty(slot0) || isEmpty(slot1) || isEmpty(slot2)){

                  // hide dropArea
                  classie.remove( dropArea, 'show' );

                }
                else{

                  classie.add( body, 'selectionComplete' );
                  //highlight share btn
                  $('#share-button').once('share-button',function () {
                    $('#share-button').addClass('ready').click(function(){
                      $('#share-button').hide();
                      $('#share-block-preview').hide();
                      $('#info').hide();
                      $('.control-button').hide();
                      $('#counter').hide();
                      slideTitle.hide();
                      //$('.play-button').hide();
                      playerService.hidePlayButton();
                      $('.drag-group').hide();
                      $('#share-block img').remove();
                      $('<div id="share-image-block" class="show-color">' +
                          '<div class="share-image-block-wrapper">' +
                          ' <div class="first show-color show-font"></div> ' +
                          '<div class="img-wrap"> ' +
                          '<div class="second show-color show-font"></div> ' +
                          '<div class="third show-color show-font"></div>' +
                          ' </div>' +
                          ' </div>' +
                          ' </div>').insertBefore('#block-usanetwork-top3-usanetwork-top3-main-block');

                      $('#share-block .first, #share-image-block .first').html($('#share-block-preview .preview-item:eq(0) .slide-content-inner').clone());
                      $('#share-block .second, #share-image-block .second').html($('#share-block-preview .preview-item:eq(1) .slide-content-inner').clone());
                      $('#share-block .third, #share-image-block .third').html($('#share-block-preview .preview-item:eq(2) .slide-content-inner').clone());
                      var shareBlock = $('#share-block'),
                          shareImageBlock = $('#share-image-block'),
                          imgShare = $('#share-img');
                      shareBlock.css({
                        visibility: 'visible',
                        zIndex:'1'
                      });
                      shareImageBlock.show();
                      $('#slider-container .slider-wrapper').before('<div class="load-more-loader"></div>');
                      setTimeout(function(){
                        html2canvas(shareImageBlock, {
                          onrendered: function(canvas) {
                            shareImageBlock.remove();
                            imgShare.append(convertCanvasToImage(canvas));
                            var galleryNid = $('#slider-container').attr('data-nid'),
                                firstFid = $('#share-block .first .slide-content-inner').attr('data-fid'),
                                secondFid = $('#share-block .second .slide-content-inner').attr('data-fid'),
                                thirdFid = $('#share-block .third .slide-content-inner').attr('data-fid'),
                                imageSrc = imgShare.find('img').attr('src');
                            var serviceUrl = '/ajax/top3_create_url';
                            $.ajax({
                              type: 'POST',
                              url: serviceUrl,
                              dataType: 'json',
                              data: {
                                galleryNid: galleryNid,
                                firstFid: firstFid,
                                secondFid: secondFid,
                                thirdFid: thirdFid,
                                imageSrc: imageSrc
                              },
                              success: function (data) {
                                var url = 'http://' + window.location.hostname + data.url;
                                sharebar = new Object();
                                sharebar.gigyaSharebar = {
                                  containerID: "gigya-share-top3",
                                  iconsOnly: true,
                                  layout: "horizontal",
                                  shareButtons: "facebook, twitter, tumblr, email",
                                  shortURLs: "never",
                                  showCounts: "none"
                                };

                                sharebar.gigyaSharebar.ua = {
                                  description: Drupal.settings.top3_settings.top3_description,
                                  imageBhev: "url",
                                  imageUrl: data.image_url,
                                  linkBack: url,
                                  title: Drupal.settings.top3_settings.top3_title
                                };
                                if (typeof Drupal.gigya.showSharebar == 'function') {
                                  Drupal.gigya.showSharebar(sharebar);
                                }
                                $('.load-more-loader').remove();
                              },
                              error: function () {
                                console.info('error');
                                $('.load-more-loader').remove();
                              }
                            });

                          }
                        });
                      },1000);

                    });
                  });

                  $('#share-block-preview').once('share-block-preview',function () {
                    $('.drag-group').sortable({
                      start: function(event, ui) {
                        start_item = $('.drop-area__item').index($(ui.item));
                      },
                      //observe the update event...
                      update: function(event, ui) {
                        var finish_item = $('.drop-area__item').index($(ui.item));
                        changeTwoItems(start_item, finish_item, $('.preview-item'));
                      },
                      items: ".drop-area__item"
                    });
                    $('.drag-group').disableSelection();
                    $('#drag-icon-block').remove();
                    previewOpen();
                    top3Usanetwork.previewDroppables();
                    top3Usanetwork.previewDraggable();
                  });

                  setTimeout(function(){
                    classie.add( dropArea, 'show' );
                  },1000);


                }
              };

              if( !wasDropped ) {
                afterDropFn();
              }
              else {
                // after some time hide drop area and remove class 'drag-active' from body
                clearTimeout( dropAreaTimeout );
                dropAreaTimeout = setTimeout( afterDropFn, 1000 );
              }
            }
          } );
        } );
      },

      previewDroppables : function(){

        console.log('previewDroppables initilized');

        // initialize droppables
        [].slice.call( document.querySelectorAll( '#share-block-preview .preview-item' )).forEach( function( el ) {
          droppableArr.push( new Droppable( el, {

            onDrop : function( instance, draggableEl ) {
              console.info('drop');
              instanceDrop = instance.el.id;
              instanceDrag = $(draggableEl).attr('id');

              if(instanceDrop!=instanceDrag){
                var dragId = $(draggableEl).attr('data-id');
                var dropId = $(instance.el).attr('data-id');
                var tempItem = $(draggableEl).html();
                $(draggableEl).html($(instance.el).html());
                $(instance.el).html(tempItem);
                var tempDropItem = $('#'+dragId).html();
                $('#'+dragId).html($('#'+dropId).html());
                $('#'+dropId).html(tempDropItem);
              }

            }
          } ) );
        } );
      },

      previewDraggable : function(){

        console.log('previewDraggable initilized');

        //simulation mouse controlls to resize drag contex
        var mouse_button = false;
        $('.preview-item')
            .mousedown(function(el){
              mouse_button = true;
              $(el.currentTarget).addClass('preview-item-grab');
            })
            .mouseup(function(){
              mouse_button = false;
              $('.preview-item').removeClass('preview-item-grab');

            })
            .mouseout(function(){
              if (mouse_button) {
                mouse_button = false;
                $('.preview-item').removeClass('preview-item-grab');
              }
            })
            .mouseover(function(){
              if (mouse_button) {
                mouse_button = false;
                $('.preview-item').removeClass('preview-item-grab');
              }
            });

        //mobile draging
        $('.preview-item').on('touchstart', function(el){
          $(el.currentTarget).addClass('preview-item-grab');
        });

        $('.preview-item').on('touchend', function(){
          $('.preview-item').removeClass('preview-item-grab');
        });

        // initialize draggable(s)
        [].slice.call(document.querySelectorAll( '#share-block-preview .preview-item' )).forEach( function( el ) {

          new Draggable( el, droppableArr, {

            draggabilly : { containment: $('#share-block-preview .preview-items-block') },

            onStart : function() {

              // add class 'drag-active' to body
              classie.add( body, 'drag-active' );

              // clear timeout: dropAreaTimeout (toggle drop area)
              clearTimeout( dropAreaTimeout );

            },

            onDrag : function() {


              inAction = true;
              dragEnd = false;
              if(inAction){
                classie.add( el , 'preview-item-grab');
              }
            },

            onEnd : function( wasDropped ) {

              //if element is not dropped please resize
              setTimeout(function(){
                classie.remove( el , 'preview-item-grab');
              },500);

              var afterDropFn = function() {

                clearInterval(dropZone2);

                // remove class 'drag-active' from body
                classie.remove( body, 'drag-active' );

                // check if top3 element are empty or full
                function isEmpty( el ){
                  return !$.trim(el.html());
                }

              };

              if( !wasDropped ) {
                afterDropFn();
              }
              else {
                // after some time hide drop area and remove class 'drag-active' from body
                clearTimeout( dropAreaTimeout );
                dropAreaTimeout = setTimeout( afterDropFn, 1000 );
              }
            }
          } );
        } );
      }

    };
    // create player block
    playerService.createPlayer();
    top3Usanetwork.init();
    Drupal.behaviors.mpsAdvert.mpsLoadAd('#topbox', 'topbox');

  });

})(jQuery);
