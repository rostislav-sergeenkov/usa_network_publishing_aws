(function ($) {

  //=======================================
  // usa changable-link
  //=======================================
  function initUsaChangableLink() {
    if (usa_deviceInfo.mobileDevice) {
      $('a.changable-link').each(function (i, el) {
        $(el).attr('href', $(el).data('data-mobile-href'));
      })
    }
  }

  $(document).ready(function () {
    initUsaChangableLink()
  });

})(jQuery);
