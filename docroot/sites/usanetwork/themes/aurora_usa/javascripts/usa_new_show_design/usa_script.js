(function ($) {

  //=======================================
  // usa changable-link
  //=======================================
  function checkDescriptionLines() {
    if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches) {
      if($('.articles-block').length > 0) {
        $('.title-and-additional').each(function(){
          var captionHeight = parseFloat($(this).closest('.meta-wrapper').css('max-height')) - $(this).outerHeight();
          var captionLineHeight = parseFloat($(this).next().css('line-height'));
          var lines = Math.floor(captionHeight/captionLineHeight);
          $(this).next().attr('style', '-webkit-line-clamp:'+ lines +';max-height:'+ captionLineHeight*lines +'px;');
        });
      }
    }
  }

  function initUsaChangableLink() {
    if (usa_deviceInfo.mobileDevice) {
      $('a.changable-link').each(function (i, el) {
        $(el).attr('href', $(el).data('data-mobile-href'));
      })
    }
  }

  $(document).ready(function () {
    initUsaChangableLink();
    checkDescriptionLines();
  });
  $(window).resize(function(){
    setTimeout(function () {
      checkDescriptionLines();
    }, 50);
  });

})(jQuery);
