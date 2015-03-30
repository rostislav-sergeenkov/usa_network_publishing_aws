# General

There are a few pieces to this:

* ctools exportable (plugins/export_ui/embed_external_ctools_export_ui.inc) for
  holding a set of plugins
* a new ctools plugin type for defining how to embed a given service. One working
  example is provided - plugins/embeddable/facebook_post
* a text filter for translating <drupal-embed> tags back to something a browser
  will tolerate
* a metric shitload of multistep form code for the embed wizard
* and finally, the wysiwyg plugin

The idea is sort of based off of the initial architectural discussion for the
Embed module (https://www.drupal.org/project/embed).

For a D8 port, stricter compliance with the document on that module page is recommended.

# Installation and usage

* Enable embed_external and pub_wysiwyg
* Configure the Publisher input format like this: http://take.ms/psMcv
* On /admin/structure/embed_external, create a new plugin set. Make sure that
  you include the Facebook Post plugin, as it's the only working plugin right now.
* On /admin/config/content/wysiwyg/profile/publisher/edit, check the
  "Embed External" checkbox (toward the bottom) and make sure your plugin set is
  selected in the "Embed External" vertical tab (further down the page).
* For my testing, I create a simple content type with only a title and body field.
  I called it Page.
* Create a new Page node (or whatever you want) and select the Publisher input
  format. There will be a new icon on the toolbar (a globe).

When you click on the globe, you'll be taken through the embed wizard. Choose
Facebook Post, copy in a Facebook post URL, and finish the wizard.

A big red square will be inserted into the WYSIWYG editor. If you disable rich
text, you'll see that this is the wrapper div and that there's now a <drupal-embed>
tag in the markup.

Finally, when you click save, the necessary FB Javascript will be added to the page
and the post will be displayed.

# Caveats

* The embed_external text filter must be enabled.
* You cannot have "Correct faulty and chopped off HTML" or "Limit allowed HTML
  tags" positioned before the embed_external filter because
  https://www.drupal.org/node/1333730. I'm not 100% sure if they can be enabled
  *at all*.

# Still to do/known issues

* A real preview system - both in the embed wizard, and in the WYSIWYG editor.
  Cutycapt was one option. Another is simply iframe-ing content into the WYSIWYG
  editor, which could get messy.
* Lots of error checking, particularly around when the embeddable plugin list changes.
* General UI cleanup/polish
  * The first step of the embed wizard could look a lot nicer. The plugins also
    have the necessary data to be separated out into categories if desired (kind
    of similar to how it's done on the plugin set configuration page).
  * When the embed wizard is triggered from the wysiwyg editor, the page styles
    get really messed up.
  * On the WYSIWYG profile configuration screen, the embed_external vertical tab
    is always visible, even if the WYSIWYG plugin isn't enabled. Drupal doesn't
    support #states on vertical tab elements, so instead, the contents are just
    selectively hidden. This is not ideal.
* Clean up embed_external_generate_embed_snippet() (I was tired and it worked
  well enough.)
* During planning for this story, we discussed creating a UI for creating new
  embeddable thingies. I don't think this is possible how the plugins are
  currently defined, and I'm not sure it's desirable in the first place.
* Sometimes, embedding multiple Facebook posts on the same page doesn't work
  quite right?
