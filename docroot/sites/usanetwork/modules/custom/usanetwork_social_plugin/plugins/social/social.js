/**
 * Wysiwyg plugin button implementation for Social Media plugin.
 */
(function ($, Drupal) {

  var previewTimers = {};
  function RecurringTimer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
      window.clearTimeout(timerId);
      remaining -= new Date() - start;
    };

    var resume = function() {
      start = new Date();
      timerId = window.setTimeout(function() {
        remaining = delay;
        resume();
        callback();
      }, remaining);
    };

    this.resume = resume;

    this.resume();
  }

Drupal.wysiwyg.plugins.social = {
  /**
   * Return whether the passed node belongs to this plugin.
   *
   * @param node
   *   The currently focused DOM element in the editor content.
   */
  isNode: function(node) {
    return ($(node).is('.pub_blog_post-social'));
  },

  /**
   * Execute the button.
   *
   * @param data
   *   An object containing data about the current selection:
   *   - format: 'html' when the passed data is HTML content, 'text' when the
   *     passed data is plain-text content.
   *   - node: When 'format' is 'html', the focused DOM element in the editor.
   *   - content: The textual representation of the focused/selected editor
   *     content.
   * @param settings
   *   The plugin settings, as provided in the plugin's PHP include file.
   * @param instanceId
   *   The ID of the current editor instance.
   */
  invoke: function(data, settings, instanceId) {
    if (data.format !== 'html') {
      return;
    }

    // Display a dialog popup
    var $main = $('<div id="pub_blog_post-social"><div>');
    $main.append('<p>Choose social network and data to embed.</p>');

    var onRadio = function() {
      var $this = $(this);
      $this.closest('#pub_blog_post-social').find('input[type=text]').attr('disabled', 'disabled');
      $this.closest('#pub_blog_post-social').find('input[type=text][name=pub_blog_post-social-' + $this.val() + ']').removeAttr('disabled').focus();
    };

    var $fb = $('<div></div>');
    var $container = $('<div></div>');
    var $radio = $('<input type="radio" name="pub_blog_post-social-option" value="fb" />');
    $radio.click(onRadio);
    $container.append($radio);
    $container.append('&nbsp;<img src="' + settings.path + '/images/fb.png" alt="&lt;--fb-&gt;" title="&lt;--fb--&gt;" class="pub_blog_post-social fb" />&nbsp;');
    $container.append('<input type="text" name="pub_blog_post-social-fb" style="border: 1px solid gray;" disabled="disabled" size="65" />');
    $fb.append($container);
    $fb.append('<span style="font-size:smaller">Insert the Post URL or id.</span>');
    $main.append($fb);

    var $tw = $('<div></div>');
    var $container = $('<div></div>');
    var $radio = $('<input type="radio" name="pub_blog_post-social-option" value="tw" />');
    $radio.click(onRadio);
    $container.append($radio);
    $container.append('&nbsp;<img src="' + settings.path + '/images/tw.png" alt="&lt;--tw-&gt;" title="&lt;--tw--&gt;" class="pub_blog_post-social tw" />&nbsp;');
    $container.append('<input type="text" name="pub_blog_post-social-tw" style="border: 1px solid gray;" disabled="disabled" size="65" />');
    $tw.append($container);
    $tw.append('<span style="font-size:smaller">Insert the Twit URL or id.</span>');
    $main.append($tw);

    var $in = $('<div></div>');
    var $container = $('<div></div>');
    var $radio = $('<input type="radio" name="pub_blog_post-social-option" value="in" />');
    $radio.click(onRadio);
    $container.append($radio);
    $container.append('&nbsp;<img src="' + settings.path + '/images/in.png" alt="&lt;--in-&gt;" title="&lt;--in--&gt;" class="pub_blog_post-social in" />&nbsp;');
    $container.append('<input type="text" name="pub_blog_post-social-in" style="border: 1px solid gray;" disabled="disabled" size="65" />');
    $in.append($container);
    $in.append('<span style="font-size:smaller">Insert the Image URL.</span>');
    $main.append($in);

    var $vine = $('<div></div>');
    var $container = $('<div></div>');
    var $radio = $('<input type="radio" name="pub_blog_post-social-option" value="vi" />');
    $radio.click(onRadio);
    $container.append($radio);
    $container.append('&nbsp;<img src="' + settings.path + '/images/vi.png" alt="&lt;--vi-&gt;" title="&lt;--vi--&gt;" class="pub_blog_post-social vi" />&nbsp;');
    $container.append('<input type="text" name="pub_blog_post-social-vi" style="border: 1px solid gray;" disabled="disabled" size="65" />');
    $vine.append($container);
    $vine.append('<span style="font-size:smaller">Insert the Vine URL.</span>');
    $main.append($vine);

    var $imgur = $('<div></div>');
    var $container = $('<div></div>');
    var $radio = $('<input type="radio" name="pub_blog_post-social-option" value="im" />');
    $radio.click(onRadio);
    $container.append($radio);
    $container.append('&nbsp;<img src="' + settings.path + '/images/im.png" alt="&lt;--im-&gt;" title="&lt;--im--&gt;" class="pub_blog_post-social im" />&nbsp;');
    $container.append('<input type="text" name="pub_blog_post-social-im" style="border: 1px solid gray;" disabled="disabled" size="65" />');
    $imgur.append($container);
    $imgur.append('<span style="font-size:smaller">Insert the Imgur URL or id.</span>');
    $main.append($imgur);

    $('body').append($main);

    var $that = this;
    $("#pub_blog_post-social").dialog({
      title: "Social Media",
      resizable: false,
      height: 450,
      width: 550,
      modal: true,
      open: function() {
        // Set existing data in place.
        var option = $(data.node).data('social-option') || '';
        var value = $(data.node).data('social-value') || '';

        if (option) {
          $main.find('[type=radio][value=' + option + ']').first().click();
          $main.find('[type=text][name=pub_blog_post-social-' + option + ']').val(value);
        }
      },
      close: function() {
        $('#pub_blog_post-social').remove();
      },
      buttons: {
        "Select": function(event) {
          // Get the option entered.
          var $widget = $(this).dialog("widget");
          var $option = $widget.find('input[type=radio]:checked');
          var $value = $widget.find('input[type=text][name=pub_blog_post-social-' + $option.val() + ']');

          if ($option.length && $value.val().length) {
            var content = $that._getPlaceholder(settings, $option.val(), $value.val());
            Drupal.wysiwyg.instances[instanceId].insert(content);
          }

          // Close the dialog and removes the element.
          $(this).dialog("close");
          $('#pub_blog_post-social').remove();
        }
      }
    });
  },

  /**
   * Prepare all plain-text contents of this plugin with HTML representations.
   *
   * Optional; only required for "inline macro tag-processing" plugins.
   *
   * @param content
   *   The plain-text contents of a textarea.
   * @param settings
   *   The plugin settings, as provided in the plugin's PHP include file.
   * @param instanceId
   *   The ID of the current editor instance.
   */
  attach: function(content, settings, instanceId) {
    // Social Media Preview.
    // Isolating preview from WYSIWYG content by iframe.
    // Not possible to replace in 'attach' method as iframes get replaced with placeholder by iFrame plugin.
    if (typeof previewTimers[instanceId] == 'undefined') {
      previewTimers[instanceId] = new RecurringTimer(function() {
        var $editor = $('#' + instanceId).next().find('iframe');
        if ($editor.length > 0) {
          $editor.each(function(i, elem) {
            var doc = elem.contentDocument || elem.contentWindow.document;
            $('img.pub_blog_post-social', doc).each(function (i, elem) {
              var previewUrl = Drupal.settings.basePath + 'social-media/embed/' + $(elem).data('social-option') + '?url=' + encodeURIComponent($(elem).data('social-value')) + '&' + (new Date().getTime());
              var $preview = $('<iframe style="height: 120px; width: 100%; border: 1px dashed #ccc;" src="' + previewUrl +'" class="pub_blog_post-social social-media-preview-processed" data-social-option="' + $(elem).data('social-option') + '" data-social-value="' + $(elem).data('social-value') + '" scrolling="no"></iframe>');
              $(elem).replaceWith($preview);
            });

            $('iframe.social-media-preview-processed', doc).each(function(i, elem) {
              try {
                var previewDoc = elem.contentDocument || elem.contentWindow.document;
                if (previewDoc.readyState == 'complete') {
                  var height = $(elem).height();
                  var contentHeight = $('html', previewDoc).height();
                  if ((contentHeight > 0) && (contentHeight != height)) $(elem).height(contentHeight);
                }
              }
              catch(e) {
                if (typeof console !== 'undefined' && typeof console.debug == 'function') {
                  console.debug(e);
                }
              }
            });
          });
        }
      }, 500);
    }
    else {
      previewTimers[instanceId].resume();
    }

    return content;
  },

  /**
   * Process all HTML placeholders of this plugin with plain-text contents.
   *
   * Optional; only required for "inline macro tag-processing" plugins.
   *
   * @param content
   *   The HTML content string of the editor.
   * @param settings
   *   The plugin settings, as provided in the plugin's PHP include file.
   * @param instanceId
   *   The ID of the current editor instance.
   */
  detach: function(content, settings, instanceId) {
    if (typeof previewTimers[instanceId] !== 'undefined') {
      previewTimers[instanceId].pause();
    }
    var self = this;
    var $content = $('<div>' + content + '</div>');
    $.each($('.social-media-preview-processed', $content), function (i, elem) {
      $(elem).replaceWith(self._getPlaceholder(settings, $(elem).data('social-option'), $(elem).data('social-value')));
    });
    return $content.html();
  },

  /**
   * Helper function to return a HTML placeholder.
   *
   * The 'drupal-content' CSS class is required for HTML elements in the editor
   * content that shall not trigger any editor's native buttons (such as the
   * image button for this example placeholder markup).
   */
  _getPlaceholder: function (settings, option, value) {
    return '<img src="' + settings.path + '/images/social_loading.png" alt="&lt;--social-media--&gt;" title="&lt;--social-media--&gt;" class="pub_blog_post-social drupal-content" data-social-option="' + option + '" data-social-value="' + value + '" />';
  }
};

})(jQuery, Drupal);
