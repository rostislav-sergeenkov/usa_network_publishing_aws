(function ($) {

  $(document).ready(function () {

    var body = document.body,
        dropArea = document.getElementById( 'drop-area' ),
        droppableArr = [],
        dropAreaTimeout,
        dragItemSize = $('.slide-content'),
        top3target = $('.drop-area__item'),
        ins0 = $('#one').attr('id'),
        ins1 = $('#two').attr('id'),
        ins2 = $('#three').attr('id'),
        slot0 = $('#one'),
        slot1 = $('#two'),
        slot2 = $('#three'),
        dropZone,
        dropZone2,
        sliderContainer = $('#slider-container'),
        sliderWrapper = sliderContainer.find('.slider-wrapper'),
        currentSlideNum = sliderContainer.find('.counter .current-slide'),
        totalSlidesNum= sliderContainer.find('.counter .total-slides'),
        slide = sliderContainer.find('.slide'),
        nextArrow = sliderContainer.find('.next'),
        prevArrow = sliderContainer.find('.prev');

    var jumpDropzone = setInterval(function(){
      $('.num1').fadeIn(300).animate({marginTop:'-15px'},110);
      $('.num1').fadeIn(300).animate({marginTop:'-10px'},90);
      $('#drop-area').animate({zIndex:'1000',marginTop:'130px'},250);
      $('#drop-area').animate({zIndex:'1000',marginTop:'120px'},150);
      $('.num2').fadeIn(300).animate({marginTop:'-15px'},110);
      $('.num2').fadeIn(300).animate({marginTop:'-10px'},90);
      $('#drop-area').animate({zIndex:'1000',marginTop:'130px'},250);
      $('#drop-area').animate({zIndex:'1000',marginTop:'120px'},150);
      $('.num3').fadeIn(300).animate({marginTop:'-15px'},110);
      $('.num3').fadeIn(300).animate({marginTop:'-10px'},90);
    },2000);


    // player service
    var playerService = {

      createPlayer: function (el) {
        console.info('createPlayer');
        var videoBlock = el.find('.video-wrapper'),
            neighborBlock = el.find('.slide-content-inner'),
            src = videoBlock.data('src'),
            frame = "<iframe src=" + src + " id='slide-player' allowfullscreen='' width='100%' height='100%' frameborder='0'></iframe>";

        if (!videoBlock.hasClass('active')) {
          // make image block inactive
          neighborBlock.addClass('inactive');

          // show video player
          videoBlock
              .append(frame)
              .addClass('active')
              .removeClass('hide-block')
              .velocity("fadeIn", {
                duration: 200
              });

          // add player listeners
          playerService.bindPlayer();

          $('#slide-player').load(function () {

          });
        }
      },

      removePlayer: function (el) {
        console.info('removePlayer');
        var videoBlock = el.find('.video-wrapper'),
            neighborBlock = el.find('.slide-content-inner'),
            frame = videoBlock.find('#slide-player'),
            playButton = el.find('.play-button');

        if (videoBlock.hasClass('active')) {
          // hide video block
          videoBlock
              .addClass('hide-block')
              .removeClass('active')
              .css({
                display: 'none',
                opacity: 0
              });

          // remove player block
          frame.remove();

          // make image block active
          neighborBlock.removeClass('inactive');
          playButton.removeClass('inactive');


          // reset player listeners
          playerService.resetPlayer();
        }
      },

      bindPlayer: function () {
        console.info('bindPlayer');
        // check on $pdk object
        if (!($pdk = window.$pdk)) {
          return;
        }

        $pdk.bind('slide-player');
        $pdk.controller.addEventListener('OnReleaseEnd', _onReleaseEnd);

        function _onReleaseEnd(pdkEvent) {
          console.info('OnReleaseEnd');
          //slideService.resetSlide();
        }
      },

      playPlayer: function () {
        console.info('playPlayer');
        $pdk.controller.clickPlayButton(true);
        $pdk.controller.pause(false);
      },

      pausePlayer: function () {
        console.info('pausePlayer');
        $pdk.controller.clickPlayButton(false);
        $pdk.controller.pause(true);
      },

      resetPlayer: function () {
        console.info('resetPlayer');
        $pdk.controller.listenerId = 0;
        for (var key in $pdk.controller.listeners) {
          delete $pdk.controller.listeners[key];
        }
      }
    };
    // end

    var top3Usanetwork = {
      init : function(config){

        // add click on play button in slide
        $('#slider-container .play-button').on('click', function () {

          var playButton = $(this),
              parentBlock = playButton.closest('.slide.slick-active');

          playButton.addClass('inactive');
          playerService.createPlayer(parentBlock);
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
        this.carousel();
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
            })
            .slick({
              autoplay: false,
              infinite: true,
              nextArrow: nextArrow,
              prevArrow: prevArrow,
              slidesToShow: 1,
              slidesToScroll: 1,
              //swipe: false,
              speed: 300
            })
            .on('afterChange', function(event, slick, currentSlide){
              currentSlideNum.text(currentSlide + 1);
            })
            .on('beforeChange', function(event, slick, currentSlide, nextSlide){

              var currentSlideBlock = sliderWrapper.find('.slide.slick-active');

              // remove player
              playerService.removePlayer(currentSlideBlock);

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
              topItem=$(draggableEl).find('.slide-content-inner').clone();
              console.info(draggableEl);
              instanceDrop = instance.el.id;

              // show checkmark inside the droppabe element
              classie.add( instance.el, 'drop-feedback' );

              console.log('draggableEl',draggableEl);
              console.log('instance', instance.el.id);

              clearInterval(dropZone2);
              dropZone2 = setInterval(function(){
                //check drop zone: full or not
                for(i=0; i<top3target.length; i++){

                  onDragCount = top3target[i].classList.length == 2;
                  elementDropped = top3target[i].classList[1] == 'drop-feedback';
                  console.log('after drop', count);
                  console.info(elementDropped);
                  if(elementDropped == true){

                    switch (instanceDrop) {

                      case ins0:

                        if($.trim(slot0.html())){

                          console.log(topItem === topItem);
                          console.log('&&&&&&&&&&&&&&&&&&&');

                          var carouselTarget = $('#one').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot0.html(topItem);

                        } else {

                          sliderWrapper.slick('slickNext');
                          slot0.html(topItem);

                        }

                        break;

                      case ins1:

                        if($.trim(slot1.html())){

                          var carouselTarget = $('#two').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot1.html(topItem);

                        } else {

                          sliderWrapper.slick('slickNext');
                          slot1.html(topItem);

                        }

                        break;

                      case ins2:

                        if($.trim(slot2.html())){

                          var carouselTarget = $('#three').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot2.html(topItem);

                        } else {
                          sliderWrapper.slick('slickNext');
                          slot2.html(topItem);
                        }

                        break;
                    }
                  }
                }
              },900);

              //resize drag element of drop and removes dropped element
              // classie.add( draggableEl, 'grid__item_remove' );
              // setTimeout(function(){
              //     //augmenting native DOM function to use remove() methoth for IE and other modern broswers
              //     Element.prototype.remove = function() {
              //         this.parentElement.removeChild(this);
              //     };
              //     NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
              //         for(var i = 0, len = this.length; i < len; i++) {
              //             if(this[i] && this[i].parentElement) {
              //                 this[i].parentElement.removeChild(this[i]);
              //             }
              //         }
              //     };

              //     $('.carousel').carousel('next');
              //     $('.grid__item_remove').parent()[0].remove();
              // },1000);

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
        $('.slide-content')
            .mousedown(function(){
              mouse_button = true;
              $('.slide-content').addClass('slide-item-grab');
              $('.numGroup').fadeOut();
            })
            .mouseup(function(){
              mouse_button = false;
              $('.slide-content').removeClass('slide-item-grab');

            })
            .mouseout(function(){
              if (mouse_button) {
                mouse_button = false;
                $('.slide-content').removeClass('slide-item-grab');
              }
            })
            .mouseover(function(){
              if (mouse_button) {
                mouse_button = false;
                $('.slide-content').removeClass('slide-item-grab');
              }
            });

        //mobile draging
        $('.slide-content').on('touchstart', function(e){
          $('.slide-content').addClass('slide-item-grab');
        });

        $('.slide-content').on('touchend', function(e){
          $('.slide-content').removeClass('slide-item-grab');
        });

        // initialize draggable(s)
        [].slice.call(document.querySelectorAll( '.slider-wrapper .slide-content' )).forEach( function( el ) {

          new Draggable( el, droppableArr, {

            draggabilly : { containment: document.body },

            onStart : function() {

              console.log($(el).attr('data-slide-id'));
              console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

              //finds induvidul all id in drop area
              console.log('******************************');
              //console.log($('#one').find('.mainContent').attr('id'));
              //console.log($('#two').find('.mainContent').attr('id'));
              //console.log($('#three').find('.mainContent').attr('id'));
              var matchId = $(el).find('.slide-content-inner').attr('data-slide-id');
              var findMatchOne = $('#one').find('.slide-content-inner').attr('data-slide-id');
              var findMatchTwo = $('#two').find('.slide-content-inner').attr('data-slide-id');
              var findMatchThree = $('#three').find('.slide-content-inner').attr('data-slide-id');

              var matchArray = [findMatchOne, findMatchTwo, findMatchThree];
              console.log(matchArray);

              for (var i = 0; i < matchArray.length; i++) {
                if (matchArray[i] == matchId) {
                  console.log('not allowed');
                  $('.container-message').fadeIn(400).addClass('not-allowed');
                }
              }

              /*carouselOn = false;

               if (carouselOn) return;*/

              //if top 3 already selected and user wants to drag again hide top 3 again
              function isEmpty( el ){

                $('.active').find('.title').hide();
                $('.active').find('#video-js').hide();
                return !$.trim(el.html());
              }
              if (!isEmpty(slot0 && slot1 && slot2)) {
                $('#drop-area').css({zIndex:''});
              }

              //check where to drop the selectied item
              clearInterval(dropZone);
              dropZone = setInterval(function(){

                for(count=0; count<top3target.length; count++){

                  onDragCount = top3target[count].classList.length == 2;
                  isHighlighet = top3target[count].classList[1] == 'highlight';

                  //console.log(onDragCount);
                  //console.log(isHighlighet);

                  if(onDragCount == true && isHighlighet == true){
                    console.log('this is the drop area', count);


                    //finds induvidul id in drop area
                    //console.log($(top3target[count]).find('.mainContent').attr('id'));

                    //finds induvidul id of dragging el
                  }
                }
              },500);

              // add class 'drag-active' to body
              classie.add( body, 'drag-active' );

              // clear timeout: dropAreaTimeout (toggle drop area)
              clearTimeout( dropAreaTimeout );

              // show dropArea
              classie.add( dropArea, 'show' );

              //chnage size of drag-item
              console.log(dragItemSize);

            },

            onDrag : function() {

              if($('.container-message').hasClass('not-allowed')){
                $('#drop-area').css({
                  zIndex:'0',
                  margin:"500px 0 0 0",
                });
              }
              else{
                $('#drop-area').css({
                  zIndex:'999',
                  margin:"0px",
                });
              }

              $('.num3').css('display','none');

              //stop jumping dropzone
              clearInterval(jumpDropzone);

              /*var vidPlaying = $(".active").find('.video-js');
               console.log('hasClass video-js',+vidPlaying.hasClass('video-js'));

               $('.active').find('#video-js').hide();
               $('.active').find(playBtn).hide();
               $('.active').find(playBtn1).hide();
               $('.active').find(playBtn2).hide();
               $('.active').find(playBtn3).hide();
               $('.active').find(playBtn4).hide();

               if(vidPlaying.hasClass('video-js')){
               vidPlaying[0].player.pause();
               $('.active .video-js').css('z-index','0');
               }
               */
              inAction = true;
              dragEnd = false;
              if(inAction){
                classie.add( el , 'slide-item-grab');
              }
            },

            onEnd : function( wasDropped ) {

              //if element is not dropped please resize
              setTimeout(function(){
                classie.remove( el , 'slide-item-grab');
              },500);

              function convertCanvasToImage(canvas) {
                var ctx = canvas.getContext('2d');
                var image = new Image();
                image.src = ctx['canvas'].toDataURL("image/png");
                return image;
              }

              var afterDropFn = function() {

                clearInterval(dropZone2);
                clearInterval(dropZone);

                $('.active').find('.title').show();
                $('.container-message').fadeOut(500).removeClass('not-allowed');

                /*setTimeout(function(){
                 $('.active').find('#video-js').show();

                 console.log('paused',+ $('.active .video-js').paused);
                 console.log('not paused',+ !$('.active .video-js').paused);

                 var playing = $('.active .video-js').hasClass('vjs-playing');
                 var paused = $('.active .video-js').hasClass('vjs-paused');

                 console.log('PLAYING',+$('.active .video-js').hasClass('vjs-playing'));
                 console.log('PAUSED',+$('.active .video-js').hasClass('vjs-paused'));

                 if(paused){
                 $(playBtn).show();
                 $(playBtn1).show();
                 $(playBtn2).show();
                 $(playBtn3).show();
                 $(playBtn4).show();
                 }
                 else if(playing){
                 $(playBtn).hide();
                 $(playBtn1).hide();
                 $(playBtn2).hide();
                 $(playBtn3).hide();
                 $(playBtn4).hide();
                 }
                 },500);*/

                // hide dropArea
                //classie.remove( dropArea, 'show' );

                $('#drop-area').css({
                  zIndex:'1000',
                  margin:"120px 0 0 0"
                });

                // remove class 'drag-active' from body
                classie.remove( body, 'drag-active' );

                // check if top3 element are empty or full
                function isEmpty( el ){
                  return !$.trim(el.html());
                }

                if(isEmpty(slot0) || isEmpty(slot1) || isEmpty(slot2)){

                  // hide dropArea
                  $('#drop-area').animate({
                    zIndex:'1000',
                    margin:"120px 0 0 0"
                  });

                }
                else{

                  classie.add( body, 'selectionComplete' );

                  //highlight share btn
                  $('#compare-button').css({
                    opacity: 1,
                    cursor: 'pointer',
                    background:'green'
                  }).click(function(){
                    $('#share-block img').remove();
                    $('#share-block .first').html($('#one .img-wrapper img').clone());
                    $('#share-block .second').html($('#two .img-wrapper img').clone());
                    $('#share-block .third').html($('#three .img-wrapper img').clone());
                    var shareBlock = $('#share-block'),
                        imgShare = $('#share-img');
                    shareBlock.css({
                      visibility: 'visible'
                    });
                    html2canvas(shareBlock, {
                      onrendered: function(canvas) {
                        console.info(canvas);
                        imgShare.append(convertCanvasToImage(canvas));
                      }
                    });
                  });
                  // show dropArea
                  $('#drop-area').css({
                    zIndex:'1000',
                    margin:"0px"

                  });
                  setTimeout(function(){
                    classie.add( dropArea, 'show' );
                  },1000);

                  $(function() {
                    $('.drag-group').sortable({
                      //observe the update event...
                      update: function(event, ui) {
                        //create the array that hold the positions...
                        var order = [];
                        //loop trought each li...
                        $('.drag-group .drop-area__item').each( function(e) {

                          //add each li position to the array...
                          // the +1 is for make it start from 1 instead of 0
                          order.push( $(this).attr('id'));
                          //order.push( $(this).attr('id')  + '=' + ( $(this).index() + 1 ) );
                        });

                        var positions = order;
                        console.log( positions);

                        var target1 = positions[0];
                        var index1  = positions.indexOf("one");

                        var target2 = positions[1];
                        var index2  = positions.indexOf("two");

                        var target3 = positions[2];
                        var index3  = positions.indexOf("three");

                        var zero = 0;
                        var one  = 1;
                        var two  = 2;

                        console.log(target1);
                        console.log(target2);
                        console.log(target3);
                        console.log('------');
                        console.log(positions = index1);

                      },
                      items: ".drop-area__item"
                    });
                    $('.drag-group').disableSelection();
                  });

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
    top3Usanetwork.init();

  });

})(jQuery);
