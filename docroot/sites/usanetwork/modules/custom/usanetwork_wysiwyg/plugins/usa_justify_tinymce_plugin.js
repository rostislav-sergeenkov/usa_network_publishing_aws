/**
 *
 */
(function ($) {
  //alight left
  tinymce.create('tinymce.plugins.usa_justify_left', {
    init: function(editor, url) {
      editor.addCommand('mceUsaJustifyLeft', function() {
        tinymce.activeEditor.formatter.register('usa_justify_left', {inline : 'span', 'classes' : 'usa-left'} );
        if (tinymce.activeEditor.formatter.match('usa_justify_center')) {
          tinymce.activeEditor.formatter.remove('usa_justify_center');
        }
        if (tinymce.activeEditor.formatter.match('usa_justify_right')) {
          tinymce.activeEditor.formatter.remove('usa_justify_right');
        }
        tinymce.activeEditor.formatter.toggle('usa_justify_left');
      });

      editor.addButton('usa_justify_left', {
        title: 'Align Left',
        cmd: 'mceUsaJustifyLeft',
        image : url + '/images/usa_justify_left.png'
      });
    },
    getInfo : function() {
      return {
        longname : 'Align Left',
        author : 'USA Network',
        version : tinymce.majorVersion + "." + tinymce.minorVersion
      };
    }
  });

  tinymce.PluginManager.add('usa_justify_left', tinymce.plugins.usa_justify_left);

  //alight center
  tinymce.create('tinymce.plugins.usa_justify_center', {
    init: function(editor, url) {
      editor.addCommand('mceUsaJustifyCenter', function() {
        tinymce.activeEditor.formatter.register('usa_justify_center', {inline : 'span', 'classes' : 'usa-center'} );
        if (tinymce.activeEditor.formatter.match('usa_justify_left')) {
          tinymce.activeEditor.formatter.remove('usa_justify_left');
        }
        if (tinymce.activeEditor.formatter.match('usa_justify_right')) {
          tinymce.activeEditor.formatter.remove('usa_justify_right');
        }
        tinymce.activeEditor.formatter.toggle('usa_justify_center');
      });

      editor.addButton('usa_justify_center', {
        title: 'Align Center',
        cmd: 'mceUsaJustifyCenter',
        image : url + '/images/usa_justify_center.png'
      });
    },
    getInfo : function() {
      return {
        longname : 'Align Center',
        author : 'USA Network',
        version : tinymce.majorVersion + "." + tinymce.minorVersion
      };
    }
  });

  tinymce.PluginManager.add('usa_justify_center', tinymce.plugins.usa_justify_center);

  //alight left
  tinymce.create('tinymce.plugins.usa_justify_right', {
    init: function(editor, url) {
      editor.addCommand('mceUsaJustifyRight', function() {
        tinymce.activeEditor.formatter.register('usa_justify_right', {inline : 'span', 'classes' : 'usa-right'} );
        if (tinymce.activeEditor.formatter.match('usa_justify_center')) {
          tinymce.activeEditor.formatter.remove('usa_justify_center');
        }
        if (tinymce.activeEditor.formatter.match('usa_justify_left')) {
          tinymce.activeEditor.formatter.remove('usa_justify_left');
        }
        tinymce.activeEditor.formatter.toggle('usa_justify_right');
      });

      editor.addButton('usa_justify_right', {
        title: 'Align Right',
        cmd: 'mceUsaJustifyRight',
        image : url + '/images/usa_justify_right.png'
      });
    },
    getInfo : function() {
      return {
        longname : 'Align Right',
        author : 'USA Network',
        version : tinymce.majorVersion + "." + tinymce.minorVersion
      };
    }
  });

  tinymce.PluginManager.add('usa_justify_right', tinymce.plugins.usa_justify_right);

})(jQuery);
