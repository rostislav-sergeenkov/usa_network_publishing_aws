(function($) {
  var plugin = Echo.createPlugin({
    "name": "LinksBlank",
    "applications": ["Stream"],
    "init": function (plugin, application) {
      plugin.extendRenderer("Item", "body", function(element, dom) {
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
        if (target == '_self') {
          $(this).attr('target', '_blank');
        }
      }
    });
  }

})(jQuery);
