(function ($) {

  $(document).ready(function () {

    var first_state = true;
    if ($('#block-usanetwork-top3-usanetwork-top3-main-block').hasClass('shared-screen')) {
      first_state = false;
    }

    var body = document.body,
        dropArea = document.getElementById('drop-area'),
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
        top3_SliderContainer = $('#top3-slider-wrapper'),
        sliderContainer = $('#slider-container'),
        sliderWrapper = sliderContainer.find('.slider-wrapper'),
        currentSlideNum = sliderContainer.find('#counter .current-slide'),
        totalSlidesNum = sliderContainer.find('#counter .total-slides'),
        slide = sliderContainer.find('.slide'),
        slideTitle = slide.find('.title'),
        nextArrow = sliderContainer.find('.next'),
        prevArrow = sliderContainer.find('.prev'),
        playButton = $('#play-button'),
        videoBlock = $('#slider-player'),
        start_item = '';

    // omniture params
    var at_params = adobeTackingParam();

    function adobeTackingParam() {

      var headerNavBar = $('.header-nav-bar'),
          show = headerNavBar.find('.show-name').text().trim().split(' '),
          blockName = 'Top 3',
          page = Drupal.settings.top3_settings.top3_title.split(' '),
          pageName = '',
          showName = '';

      for (var i = 0; i < page.length; i++) {
        pageName += page[i].charAt(0).toUpperCase() + page[i].substr(1) + ' ';
      }

      for (var k = 0; k < show.length; k++) {
        showName += show[k].charAt(0).toUpperCase() + show[k].substr(1) + ' ';
      }

      return {
        'endButtons' : '',
        'nodeType': blockName,
        'pageName': pageName,
        'showName': showName
      };
    }

    function infoOpen() {
      $('#info').hide();
      $('.control-button').hide();
      $('#counter').hide();
      slideTitle.hide();
      playButton.removeClass('show');
      $('.drag-group').hide();
      $('#info-block').show();
    }

    function infoClose() {
      $('#info-block').hide();
      $('.control-button').show();
      $('#counter').show();
      slideTitle.show();
      playButton.addClass('show');
      $('.drag-group').show();
      $('#info').show();
    }

    function previewOpen() {
      $('#info').hide();
      $('.control-button').hide();
      $('#counter').hide();
      slideTitle.hide();
      playButton.addClass('popup-hide');
      $('.drag-group').hide();
      $('#drag-icon-block').hide();
      $('#share-block-preview').show();
    }

    function previewClose() {
      $('#share-block-preview').hide();
      $('.control-button').show();
      $('#counter').show();
      slideTitle.show();
      playButton.removeClass('popup-hide');
      $('.drag-group').show();
      $('#drag-icon-block').show();
      $('#info').show();
    }

    function changeTwoItems(first, second, target) {
      if (Math.abs(second - first) == 1) {
        if (second - first > 0) {
          target.eq(second).insertBefore(target.eq(first));
        } else {
          target.eq(first).insertBefore(target.eq(second));
        }
      }
      if (Math.abs(second - first) == 2) {
        if (second - first > 0) {
          target.eq(first).insertAfter(target.eq(second));
        } else {
          target.eq(first).insertBefore(target.eq(second));
        }
      }
    }

    $('#info').click(function () {
      infoOpen();
    });
    $('#info-close, #start-button').click(function () {
      infoClose();
      $('#start-button').once(function () {
        $('#start-button').remove();
        top3Usanetwork.carousel();
      });
    });
    $('#share-preview-close').click(function () {
      previewClose();
      if (Drupal.behaviors.omniture_tracking != 'undefined') {
        at_params.endButtons = 'Change Selections Button';
        Drupal.behaviors.omniture_tracking.top3.endButton(at_params);
      }
    });

    // player service
    var playerService = {

      playerStatus: false, // default value
      mediaLoadStatus: false, // default value
      mediaPlayStatus: false, // default value
      hideSliderWrapper: false, // default value
      clickOnThumb: false, // default value

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

          if (playerService.clickOnThumb) {
            playerService.clickOnThumb = false;
          }

        }

        function _onMediaPause(pdkEvent) {
          playerService.mediaPlayStatus = false;
        }

        function _onMediaUnpause(pdkEvent) {
          playerService.mediaPlayStatus = true;
        }

        function _onMediaLoadStart(pdkEvent) {
          playerService.mediaLoadStatus = true;
        }

        function _onReleaseEnd(pdkEvent) {
          playerService.mediaPlayStatus = false;
          // hide player

          if (playerService.clickOnThumb == false) {
            playerService.hidePlayer();
          }
        }
      },
      playPlayer: function () {
        $pdk.controller.pause();
      },
      pausePlayer: function () {
        $pdk.controller.pause(true);
        if(playButton.hasClass('inactive') && !usa_deviceInfo.mobileDevice){
          playButton.addClass('show');
        }
      },
      setPlayer: function () {

        var activeSlide, activeThumb, srcLink, src, neighborBlock;

        if (first_state) {
          activeSlide = $('#slider-container .slick-active');
          srcLink = activeSlide.find('.video-data').data('src-link');
          src = activeSlide.find('.video-data').data('src');
          neighborBlock = activeSlide.find('.slide-content-inner');
        } else {
          activeThumb = $('#chosen-items-block-wrapper .chosen-item-thumb.active');
          srcLink = activeThumb.data('src-link');
          src = activeThumb.data('src');
          neighborBlock = $('#chosen-player .img-wrapper');
        }

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
      loadPlayer: function () {
        var activeSlide, activeThumb, srcLink, src, neighborBlock;

        if (first_state) {
          activeSlide = $('#slider-container .slick-active');
          srcLink = activeSlide.find('.video-data').data('src-link');
          src = activeSlide.find('.video-data').data('src');
          neighborBlock = activeSlide.find('.slide-content-inner');
        } else {
          activeThumb = $('#chosen-items-block-wrapper .chosen-item-thumb.active');
          srcLink = activeThumb.data('src-link');
          src = activeThumb.data('src');
          neighborBlock = $('#chosen-player .img-wrapper');
        }

        if (videoBlock.hasClass('active')) {

          //change player status
          playerService.playerStatus = true;

          // change video in player
          $pdk.controller.loadReleaseURL(srcLink, true);

          neighborBlock.addClass('inactive');
          videoBlock.velocity("fadeIn", {
            duration: 200
          });
        }
      },
      hidePlayer: function (el) {
        if (first_state) {
          var activeSlide = $('#slider-container .slick-active'),
              neighborBlock = activeSlide.find('.slide-content-inner'),
              playButton = $('#play-button');

          if (playerService.hideSliderWrapper) {
            playerService.hideSliderWrapper = false;
            $('#slider-container .slider-wrapper').show();
          }

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
            playButton.removeClass('inactive');
          }
        } else {
          var neighborBlock = $('#chosen-player .img-wrapper');
          if (playerService.playerStatus) {
            //change player status
            playerService.playerStatus = false;

            if ($('#slider-player').hasClass('show-up')) {
              $('#slider-player').removeClass('show-up');
            }

            // stop video
            $pdk.controller.endCurrentRelease();

            // make image block active
            neighborBlock.removeClass('inactive');
            videoBlock.css({
              opacity: 0
            });
          }
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
          if(!playButton.hasClass('show')){
            playButton.addClass('show');
          }
        } else {
          if(playButton.hasClass('show')){
            playButton.removeClass('show');
          }
        }
      }
    };
    // end

    var top3Usanetwork = {
      init: function (config) {

        var isMobileDevice = usa_deviceInfo.mobileDevice;
        // add click on play button in slide
        $('#play-button').on('click', function () {

          var playBtn = $(this);


          if (!playBtn.hasClass('inactive')) {
            // added class and change status button
            playBtn.addClass('inactive').removeClass('show');
            // show player
            if (isMobileDevice) {
              playerService.loadPlayer();
              playerService.hideSliderWrapper = true;
              $('#slider-container .slider-wrapper').hide();
            } else {
              playerService.setPlayer();
            }
          } else {
            playerService.playPlayer();
            playBtn.removeClass('show');
          }

        });
        $('.set-video #chosen-player .img-wrapper').on('click', function () {
          if (!$(this).hasClass('inactive') && !$(this).hasClass('no-video')) {

            $('#slider-player').addClass('show-up');

            if (isMobileDevice) {
              playerService.loadPlayer();
            } else {
              playerService.setPlayer();
            }
          }
        });

        $('.chosen-item-thumb').on('click', function () {
          if (!$(this).hasClass('active')) {

            $('.chosen-item-thumb').removeClass('active');
            $(this).addClass('active');
            var thumbImageSrc = $(this).find('.img-wrapper img').attr('src');
            var thumbTitle = $(this).find('.title').html();
            $('#chosen-player .img-wrapper img').attr('src', thumbImageSrc);
            $('#chosen-player .title').html(thumbTitle);
            if($(this).hasClass('no-video')){
              if(!$('#chosen-player .img-wrapper').hasClass('no-video')) {
                $('#chosen-player .img-wrapper').addClass('no-video');
              }
              if (playerService.playerStatus) {
                playerService.hidePlayer();
              }
            } else {
              if($('#chosen-player .img-wrapper').hasClass('no-video')) {
                $('#chosen-player .img-wrapper').removeClass('no-video');
              }
              // set status clickOnThumb
              playerService.clickOnThumb = true;
              if (!$('#slider-player').hasClass('show-up')) {
                $('#slider-player').addClass('show-up');
              }
              if (isMobileDevice) {
                playerService.loadPlayer();
              } else {
                playerService.setPlayer();
              }
            }
          }
        });

        if (first_state) {
          setTimeout(function () {
            top3Usanetwork.droppables();
            top3Usanetwork.draggable();
          }, 1000);
        }

      },
      carousel: function () {

        sliderWrapper
            .on('init', function (slick) {

              var firstSlide = sliderWrapper.find('.slick-active').data('slick-index') + 1;

              currentSlideNum.text(firstSlide);
              totalSlidesNum.text(slide.length);
              //infoOpen();

              if (Drupal.behaviors.omniture_tracking != 'undefined') {
                Drupal.behaviors.omniture_tracking.top3.changeSlide(at_params, firstSlide);
              }

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
            .on('afterChange', function (event, slick, currentSlide) {

              playerService.showPlayButton();
              currentSlideNum.text(currentSlide + 1);
              if ($('body').hasClass('node-type-top3-gallery')) {
                Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
              }

              if (Drupal.behaviors.omniture_tracking != 'undefined') {
                Drupal.behaviors.omniture_tracking.top3.changeSlide(at_params, currentSlide + 1);
              }
            })
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

              if (playerService.playerStatus) {
                // hide player
                playerService.hidePlayer();
              }
            });

      },
      droppables: function () {

        console.log('droppables initilized');

        // initialize droppables
        [].slice.call(document.querySelectorAll('#drop-area .drop-area__item')).forEach(function (el) {
          droppableArr.push(new Droppable(el, {

            onDrop: function (instance, draggableEl) {
              $('.drop-area__item').removeClass('ui-sortable-handle');
              var cleanUp = draggableEl;
              topItem = $(draggableEl).find('.slide-content-inner');

              instanceDrop = instance.el.id;

              // show checkmark inside the droppabe element
              classie.add(instance.el, 'drop-feedback');

              clearInterval(dropZone2);
              dropZone2 = setInterval(function () {
                //check drop zone: full or not
                top3target.each(function () {
                  elementDropped = $(this).hasClass('drop-feedback');
                  if (elementDropped == true) {

                    if (Drupal.behaviors.omniture_tracking != 'undefined') {
                      Drupal.behaviors.omniture_tracking.top3.itemSelected(at_params);
                    }

                    switch (instanceDrop) {

                      case ins0:

                        if ($.trim(slot0.html())) {

                          var carouselTarget = $('#one').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot0.html(topItem.clone());
                          preview0.html(topItem.clone());

                        } else {

                          sliderWrapper.slick('slickNext');
                          $('#one').css('opacity', 1);
                          slot0.html(topItem.clone());
                          preview0.html(topItem.clone());

                        }

                        break;

                      case ins1:

                        if ($.trim(slot1.html())) {

                          var carouselTarget = $('#two').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot1.html(topItem.clone());
                          preview1.html(topItem.clone());

                        } else {

                          sliderWrapper.slick('slickNext');
                          $('#two').css('opacity', 1);
                          slot1.html(topItem.clone());
                          preview1.html(topItem.clone());

                        }

                        break;

                      case ins2:

                        if ($.trim(slot2.html())) {

                          var carouselTarget = $('#three').find('.slide-content-inner').attr('data-slide-id');

                          sliderWrapper.slick('slickGoTo', carouselTarget);
                          slot2.html(topItem.clone());
                          preview2.html(topItem.clone());

                        } else {
                          sliderWrapper.slick('slickNext');
                          $('#three').css('opacity', 1);
                          slot2.html(topItem.clone());
                          preview2.html(topItem.clone());
                        }

                        break;
                    }
                    if ($('#share-block-preview').hasClass('share-block-preview-processed')) {
                      previewOpen();
                    }
                  }
                });
              }, 900);

              $(draggableEl).css('visibility', 'hidden');
              setTimeout(function () {
                $(draggableEl).css('visibility', 'visible');
                $(draggableEl).attr("disabled", "disabled");
              }, 1700);

              clearTimeout(instance.checkmarkTimeout);
              instance.checkmarkTimeout = setTimeout(function () {
                classie.remove(instance.el, 'drop-feedback');

              }, 1000);

            }
          }));
        });
      },

      draggable: function () {

        console.log('draggable initilized');

        //simulation mouse controlls to resize drag contex
        var mouse_button = false;
        var IE_version = getInternetExplorerVersion();

        function get_offset(element, direction, touch) {
          var demensions_coefficient = 10.58;
          if (direction == 'left') {
            if (touch) {
              return element.originalEvent.touches[0].clientX - sliderContainer.offset()['left'] - sliderContainer.height() / demensions_coefficient;
            } else {
              return element.originalEvent.clientX - sliderContainer.offset()['left'] - sliderContainer.height() / demensions_coefficient;
            }
          }
          if (direction == 'top') {
            if (touch) {
              return element.originalEvent.touches[0].clientY - (sliderContainer.offset().top - $(window).scrollTop()) - sliderContainer.width() / demensions_coefficient;
            } else {
              return element.originalEvent.clientY - (sliderContainer.offset().top - $(window).scrollTop()) - sliderContainer.width() / demensions_coefficient;
            }
          }
        }

        switch (IE_version) {

          case 11:
            $('.slide-content').on('pointerdown', function (el) {
              mouse_button = true;
              $(el.currentTarget).addClass('slide-item-grab').css({
                'margin-top': get_offset(el, 'top', false) + 'px',
                'margin-left': get_offset(el, 'left', false) + 'px'
              });
            });

            break;

          case 10:
            $('.slide-content').on('MSPointerDown', function (el) {
              mouse_button = true;
              $(el.currentTarget).addClass('slide-item-grab').css({
                'margin-top': get_offset(el, 'top', false) + 'px',
                'margin-left': get_offset(el, 'left', false) + 'px'
              });
            });

            break;

        }
        $('.slide-content').on('mousedown', function (el) {
          mouse_button = true;
          $(el.currentTarget).addClass('slide-item-grab').css({
            'margin-top': get_offset(el, 'top', false) + 'px',
            'margin-left': get_offset(el, 'left', false) + 'px'
          });
        });
        $('.slide-content').on('mouseup', function () {
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
        $('.slide-content').on('touchstart', function (el) {
          $(el.currentTarget).addClass('slide-item-grab').css({
            'margin-top': get_offset(el, 'top', true) + 'px',
            'margin-left': get_offset(el, 'left', true) + 'px'
          });
        });

        /*$('.slide-content').on('touchend', function(){
         $('.slide-content').css({
         'margin': '0'
         }).removeClass('slide-item-grab');
         });*/

        // initialize draggable(s)
        [].slice.call(document.querySelectorAll('.slider-wrapper .slide-content')).forEach(function (el) {

          new Draggable(el, droppableArr, {

            draggabilly: {containment: sliderContainer},

            onStart: function () {

              // check player status on drag start
              if (playerService.mediaLoadStatus) {
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
              classie.add(body, 'drag-active');

              // clear timeout: dropAreaTimeout (toggle drop area)
              clearTimeout(dropAreaTimeout);

              // show dropArea
              classie.add(dropArea, 'show');

            },

            onDrag: function () {

              if ($('.container-message').hasClass('not-allowed')) {
                classie.add(dropArea, 'not-allowed');
              }

              inAction = true;
              dragEnd = false;
              if (inAction) {
                classie.add(el, 'slide-item-grab');
              }
            },

            onEnd: function (wasDropped) {

              //if element is not dropped please resize
              setTimeout(function () {
                $(el).css({
                  'margin': '0'
                });
                classie.remove(el, 'slide-item-grab');
              }, 500);

              function convertCanvasToImage(canvas) {
                var ctx = canvas.getContext('2d');
                var image = new Image();
                image.height = ctx['canvas'].height;
                image.width = ctx['canvas'].width;
                image.src = ctx['canvas'].toDataURL("image/jpeg", "1.0");
                console.info('CanvasToImageFinish');
                return image;
              }

              var afterDropFn = function () {

                clearInterval(dropZone2);

                $('.active').find('.title').show();
                $('.container-message').fadeOut(500).removeClass('not-allowed');

                // hide dropArea
                classie.remove(dropArea, 'not-allowed');
                classie.remove(dropArea, 'show');

                // remove class 'drag-active' from body
                classie.remove(body, 'drag-active');

                // check if top3 element are empty or full
                function isEmpty(el) {
                  return !$.trim(el.html());
                }

                if (isEmpty(slot0) || isEmpty(slot1) || isEmpty(slot2)) {

                  // hide dropArea
                  classie.remove(dropArea, 'show');

                }
                else {

                  classie.add(body, 'selectionComplete');
                  //highlight share btn
                  $('#share-button').once('share-button', function () {
                    $('#share-button').click(function () {
                      console.info('share-click');
                      if (Drupal.behaviors.omniture_tracking != 'undefined') {
                        at_params.endButtons = 'Create My Top3 Link Button';
                        Drupal.behaviors.omniture_tracking.top3.endButton(at_params);
                      }
                      $('#share-block-preview').hide();
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
                      $('#top3-slider-wrapper').addClass('share-open');
                      shareImageBlock.show();
                      $('#gigya-share-top3').before('<div class="loader-wrapper"><div class="load-more-loader"></div></div>');
                      setTimeout(function () {
                        html2canvas(shareImageBlock, {
                          onrendered: function (canvas) {
                            console.info('canvas-render');
                            shareImageBlock.remove();
                            imgShare.append(convertCanvasToImage(canvas));
                            console.info('image-render');
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
                                  if (Drupal.behaviors.omniture_tracking != 'undefined') {
                                    Drupal.behaviors.omniture_tracking.top3.share(at_params);
                                  }
                                }
                                $('.loader-wrapper').remove();
                              },
                              error: function () {
                                console.info('error');
                                $('.loader-wrapper').remove();
                              }
                            });
                          }
                        });
                      }, 1500);

                    });
                  });

                  $('#share-block-preview').once('share-block-preview', function () {
                    $('.drag-group').sortable({
                      start: function (event, ui) {
                        start_item = $('.drop-area__item').index($(ui.item));
                      },
                      //observe the update event...
                      update: function (event, ui) {
                        var finish_item = $('.drop-area__item').index($(ui.item));
                        changeTwoItems(start_item, finish_item, $('.preview-item'));
                        previewOpen();
                      },
                      items: ".drop-area__item"
                    });
                    $('.drag-group').disableSelection();
                    $('#drag-icon-block').remove();
                    previewOpen();
                    //top3Usanetwork.previewDroppables();
                    //top3Usanetwork.previewDraggable();
                  });

                  setTimeout(function () {
                    classie.add(dropArea, 'show');
                  }, 1000);


                }
              };

              if (!wasDropped) {
                afterDropFn();
              }
              else {
                // after some time hide drop area and remove class 'drag-active' from body
                clearTimeout(dropAreaTimeout);
                dropAreaTimeout = setTimeout(afterDropFn, 1000);
              }
            }
          });
        });
      },

      previewDroppables: function () {

        console.log('previewDroppables initilized');

        // initialize droppables
        [].slice.call(document.querySelectorAll('#share-block-preview .preview-item')).forEach(function (el) {
          droppableArr.push(new Droppable(el, {

            onDrop: function (instance, draggableEl) {
              instanceDrop = instance.el.id;
              instanceDrag = $(draggableEl).attr('id');

              if (instanceDrop != instanceDrag) {
                var dragId = $(draggableEl).attr('data-id');
                var dropId = $(instance.el).attr('data-id');
                var tempItem = $(draggableEl).html();
                $(draggableEl).html($(instance.el).html());
                $(instance.el).html(tempItem);
                var tempDropItem = $('#' + dragId).html();
                $('#' + dragId).html($('#' + dropId).html());
                $('#' + dropId).html(tempDropItem);
              }

            }
          }));
        });
      },

      previewDraggable: function () {

        console.log('previewDraggable initilized');

        //simulation mouse controlls to resize drag contex
        var mouse_button = false;
        $('.preview-item')
            .mousedown(function (el) {
              mouse_button = true;
              $(el.currentTarget).addClass('preview-item-grab');
            })
            .mouseup(function () {
              mouse_button = false;
              $('.preview-item').removeClass('preview-item-grab');

            })
            .mouseout(function () {
              if (mouse_button) {
                mouse_button = false;
                $('.preview-item').removeClass('preview-item-grab');
              }
            })
            .mouseover(function () {
              if (mouse_button) {
                mouse_button = false;
                $('.preview-item').removeClass('preview-item-grab');
              }
            });

        //mobile draging
        $('.preview-item').on('touchstart', function (el) {
          $(el.currentTarget).addClass('preview-item-grab');
        });

        $('.preview-item').on('touchend', function () {
          $('.preview-item').removeClass('preview-item-grab');
        });

        // initialize draggable(s)
        [].slice.call(document.querySelectorAll('#share-block-preview .preview-item')).forEach(function (el) {

          new Draggable(el, droppableArr, {

            draggabilly: {containment: $('#share-block-preview .preview-items-block')},

            onStart: function () {

              // add class 'drag-active' to body
              classie.add(body, 'drag-active');

              // clear timeout: dropAreaTimeout (toggle drop area)
              clearTimeout(dropAreaTimeout);

            },

            onDrag: function () {


              inAction = true;
              dragEnd = false;
              if (inAction) {
                classie.add(el, 'preview-item-grab');
              }
            },

            onEnd: function (wasDropped) {

              //if element is not dropped please resize
              setTimeout(function () {
                classie.remove(el, 'preview-item-grab');
              }, 500);

              var afterDropFn = function () {

                clearInterval(dropZone2);

                // remove class 'drag-active' from body
                classie.remove(body, 'drag-active');

                // check if top3 element are empty or full
                function isEmpty(el) {
                  return !$.trim(el.html());
                }

              };

              if (!wasDropped) {
                afterDropFn();
              }
              else {
                // after some time hide drop area and remove class 'drag-active' from body
                clearTimeout(dropAreaTimeout);
                dropAreaTimeout = setTimeout(afterDropFn, 1000);
              }
            }
          });
        });
      }

    };

    // create player block
    if(first_state) {
      playerService.createPlayer();
    } else {
      if ($('#shared-container').hasClass('set-video')) {
        playerService.createPlayer();
      }
    }

    top3Usanetwork.init();
    Drupal.behaviors.mpsAdvert.mpsLoadAd('#topbox', 'topbox');

  });

})(jQuery);
