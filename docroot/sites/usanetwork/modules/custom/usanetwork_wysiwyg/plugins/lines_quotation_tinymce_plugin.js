/**
 *
 */

(function ($) {
  tinymce.create('tinymce.plugins.lines_quotation', {
    content_css: 'css/lines_quotation.css',
    init: function(editor, url) {


      editor.addCommand('mceLinesQuotation', function() {
        editor.focus();

        var text = editor.selection.getContent({'format': 'html'});

        if (text && text.length > 0) {
          editor.execCommand('mceInsertContent', false, '<span class="lines-quotation show-border">' + text + '</span>');
        }
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
