/**
 *
 */

(function ($) {
  tinymce.create('tinymce.plugins.person_quotation', {
    content_css: 'css/person_quotation.css',
    init: function(editor, url) {


      editor.addCommand('mcePersonQuotation', function() {
        editor.focus();

        var text = editor.selection.getContent({'format': 'html'});

        if (text && text.length > 0) {
          editor.execCommand('mceInsertContent', false, '<span class="person-quotation">' + text + '</span>');
        }
      });

      editor.addButton('person_quotation', {
        title: 'Person Quotation',
        cmd: 'mcePersonQuotation',
        image : url + '/images/person_quotation.png'
      });
    },
    getInfo : function() {
      return {
        longname : 'Person Quotation',
        author : 'NBC Universal',
        version : tinymce.majorVersion + "." + tinymce.minorVersion
      };
    }
  });

  tinymce.PluginManager.add('person_quotation', tinymce.plugins.person_quotation);
})(jQuery);
