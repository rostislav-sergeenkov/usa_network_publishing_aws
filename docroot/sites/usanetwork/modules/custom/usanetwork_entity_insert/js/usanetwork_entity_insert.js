(function ($) {

  function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  Drupal.usanetwork_entity_insert = {
    xhr: null,
    pushContent: function(content, instanceId, settings) {
      content = Drupal.usanetwork_entity_insert.replaceTokenWithPlaceholder(content, settings);
      Drupal.wysiwyg.instances[instanceId].insert(content);
    },
    replaceTokenWithPlaceholder: function(content, settings) {
      settings = settings || {};
      var type = settings['type'];
      var placeholder = settings['placeholder'];
      if (typeof type == 'undefined' || typeof placeholder == 'undefined') {
        return content;
      }

      var pattern = new RegExp('\\[usa_embed:' + type + ':(\\w+):(\\d+):(\\w+):*(.*)\\]', 'ig');
      var match;
      while (match = pattern.exec(content)) {
        var token = '[usa_embed:' + type + ':' + match[1] + ':' + match[2];
        if (match[3].length > 0) {
          token += ':' + match[3];
        }
        if (match[4].length > 0) {
          token += ':' + match[4];
        }
        token += ']';

        var $token_placeholder = $(placeholder);
        $token_placeholder.attr('entity_type', match[1]);
        $token_placeholder.attr('entity_id', match[2]);
        $token_placeholder.attr('view_mode', match[3]);
        $token_placeholder.attr('video_autoplay',  match[4]);
        content = content.replace(new RegExp(escapeRegExp(token), 'ig'), $('<div>').append($token_placeholder.clone()).html());
      }

      return content;
    },
    replacePlaceholderWithToken: function(content, settings) {
      settings = settings || {};
      var type = settings['type'];
      var node_class = settings['node_class'];
      if (typeof type == 'undefined' || typeof node_class == 'undefined') {
        return content;
      }

      var $content = $(content);
      var $nodes = $content.find('.' + node_class);
      $nodes.each(function() {
        var $node = $(this);
        var token = '[usa_embed:' + type + ':' + $node.attr('entity_type') + ':' + $node.attr('entity_id');
        if ($node.attr('view_mode').length > 0) {
          token += ':' + $node.attr('view_mode');
        }
        if ($node.attr('video_autoplay').length > 0) {
          token += ':' + $node.attr('video_autoplay');
        }
        token += ']';

        $node.replaceWith(token);
      });

      return $('<div>').append($content).html();
    },
    insertEntity: function(instanceId, settings) {
      settings = settings || {};
      var type = settings['type'];
      if (typeof type == 'undefined') {
        return;
      }
      var url = Drupal.settings.basePath + 'index.php?q=usanetwork_entity_insert/insert/' + type;
      var $dialog = $('<div id="usanetwork-entity-insert-dialog"></div>');
      if (Drupal.usanetwork_entity_insert.xhr !== null) {
        Drupal.usanetwork_entity_insert.xhr.abort();
      }
      Drupal.usanetwork_entity_insert.xhr = $.getJSON(url, function(data) {
        $dialog.html(data);
        var dialogClose = function () {
          try {
            $dialog.dialog('destroy').remove();
          } catch (e) {};
        };

        var dialog_buttons = {};

        // Insert content button
        dialog_buttons[Drupal.t('Insert content')] = function () {
          var $self = $(this);
          var entity = $self.find('.form-item-entity input').val();

          var pattern = /\[(\w+)\:(\d+)\]/i;
          var matches = pattern.exec(entity);
          if (matches && matches.length > 0) {
            var entity_type = matches[1];
            var entity_id = matches[2];
            var view_mode = $self.find('.form-item-view-mode select').val();
            var video_autoplay = $self.find('.form-item-autoplay input').attr('checked');
            var content = '[usa_embed:' + type + ':' + entity_type + ':' + entity_id + (view_mode ? ':' + view_mode : '') + (video_autoplay ? ':' + 'ap_true' : '') + ']';
          }
          else {
            $self.find('.form-item-entity input').focus();
            alert(Drupal.t('Selected content is not valid.'));
            return;
          }

          Drupal.usanetwork_entity_insert.pushContent(content, instanceId, settings);
          $(this).dialog("close");
        };

        // Cancel button.
        dialog_buttons[Drupal.t('Cancel')] = function () {
          $(this).dialog("close");
        };

        $dialog.dialog({
          modal: true,
          autoOpen: false,
          closeOnEscape: true,
          resizable: false,
          draggable: false,
          autoresize: false,
          title: Drupal.t('Insert inline content'),
          buttons: dialog_buttons,
          width: 700,
          height: 350,
          close: dialogClose
        });
        $dialog.dialog("open");

        // Attach behaviors to the form.
        var $form = $('#usanetwork-entity-insert-dialog-form');
        Drupal.attachBehaviors($form);
        $('form', $form).submit(function() {
          // Prevent form submission.
          return false;
        });
      });
    }
  };
})(jQuery);
