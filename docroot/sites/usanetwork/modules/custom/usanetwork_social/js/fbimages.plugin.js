(function($) {
  var plugin = Echo.createPlugin({
    "name": "FbImages",
    "applications": ["Stream"],
    "init": function (plugin, application) {
      plugin.extendRenderer("Item", "body", function(element, dom) {
        var item = this;
        this.parentRenderer("body", arguments);
        plugin.doFbImages(element, application);
      });
    }
  });


  plugin.doFbImages = function(element, application) {
    var $image = $(element).find('img[data-src-full]');
    if ($image.length > 0) {
      var $link = ($image.closest('a').length > 0) ? $image.closest('a') : $image.wrap('<a></a>').parent();
      $link.attr('href', $image.attr('data-src-full'));
    }
  }

})(jQuery);
