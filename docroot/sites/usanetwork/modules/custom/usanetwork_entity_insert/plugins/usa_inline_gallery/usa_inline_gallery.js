(function ($) {
  Drupal.usanetwork_entity_insert = Drupal.usanetwork_entity_insert || {};

  /**
   * Register the plugin with WYSIWYG.
   */
  Drupal.wysiwyg.plugins.usa_inline_gallery = {
    /**
     * Determine whether a DOM element belongs to this plugin.
     *
     * @param node
     *   A DOM element
     */
    isNode: function(node, settings) {
      return $(node).is('.usa-inline-gallery-element');
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
    invoke: function (data, settings, instanceId) {
      if (this.isNode(data.node)) {
        // @todo: add edit form
      }
      else {
        Drupal.usanetwork_entity_insert.insertEntity(instanceId, settings);
      }
    },
    /**
     * Attach function, called when a rich text editor loads.
     * This finds all [[tags]] and replaces them with the html
     * that needs to show in the editor.
     *
     * This finds all JSON macros and replaces them with the HTML placeholder
     * that will show in the editor.
     */
    attach: function (content, settings, instanceId) {
      content = Drupal.usanetwork_entity_insert.replaceTokenWithPlaceholder(content, settings);
      return content;
    },
    /**
     * Detach function, called when a rich text editor detaches
     */
    detach: function (content, settings, instanceId) {
      content = Drupal.usanetwork_entity_insert.replacePlaceholderWithToken(content, settings);
      return content;
    }
  };
})(jQuery);
