(function($) {
  var plugin = Echo.createPlugin({
    "name": "LinksBlank",
    "applications": ["Stream"],
    "init": function (plugin, application) {
      plugin.extendRenderer("Item", "content", function(element, dom) {
        var item = this;
        this.parentRenderer("body", arguments);
        plugin.doLinks(element, application);
      });
    }
  });


  plugin.doLinks = function(element, application) {
    $(element).find('a').each(function() {
      var target = $(this).attr('target');
      if (typeof target == 'undefined') {
        target = '_self';
      }
      var $link = $(this);
      if (target == '_self'
      && $link.attr('href') != 'javascript:void(0)'
      && $link.attr('href') != '#') {
        $link.attr('target', '_blank');
      }
    });
  }

})(jQuery);
