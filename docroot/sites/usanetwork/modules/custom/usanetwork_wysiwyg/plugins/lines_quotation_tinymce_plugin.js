/**
 *
 */

(function ($) {
  tinymce.create('tinymce.plugins.lines_quotation', {
    content_css: 'css/lines_quotation.css',
    init: function(editor, url) {


      editor.addCommand('mceLinesQuotation', function() {
        tinymce.activeEditor.formatter.register( 'lines_quotation', {inline : 'span', 'classes' : 'lines-quotation show-border'} );
        tinymce.activeEditor.formatter.toggle('lines_quotation');
      });

      editor.addButton('lines_quotation', {
        title: 'Lines Quotation',
        cmd: 'mceLinesQuotation',
        image : url + '/images/lines_quotation.png'
      });
    },
    getInfo : function() {
      return {
        longname : 'Lines Quotation',
        author : 'NBC Universal',
        version : tinymce.majorVersion + "." + tinymce.minorVersion
      };
    }
  });

  tinymce.PluginManager.add('lines_quotation', tinymce.plugins.lines_quotation);
})(jQuery);
