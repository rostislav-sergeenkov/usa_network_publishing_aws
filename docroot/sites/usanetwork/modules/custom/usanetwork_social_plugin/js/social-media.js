/**
 * @file
 * Behavior used to enable some social media libs.
 */

(function($, Drupal) {

  // Add some Facebook libs.
  if (typeof window.FB == 'undefined') {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v2.3'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      if (typeof fjs !== 'undefined' && typeof fjs.parentNode !== 'undefined') {
        fjs.parentNode.insertBefore(js, fjs);
      } else {
        d.head.appendChild(js);
      }
    }(document, 'script', 'facebook-jssdk'));
  }

  // Add some Twitter libs.
  // https://dev.twitter.com/web/javascript/loading
  if (typeof window.twttr == 'undefined') {
    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "//platform.twitter.com/widgets.js";
      if (typeof fjs !== 'undefined' && typeof fjs.parentNode !== 'undefined') {
        fjs.parentNode.insertBefore(js, fjs);
      } else {
        d.head.appendChild(js);
      }

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));
  }

  Drupal.behaviors.SocialMedia = {
    _getPlaceholder: function($el) {
      // @todo: move image src to config
      return '<img alt="&lt;--social-media--&gt;" class="pub_blog_post-social drupal-content" data-social-option="' + $el.data('socialOption') + '" data-social-value="' + $el.data('socialValue') + '" src="/sites/usanetwork/modules/custom/usanetwork_social_plugin/plugins/social/images/social_loading.png" title="&lt;--social-media--&gt;" />';
    },
    _getWrapper: function($el) {
      return '<div class="social-media-processed" data-social-option="' + $el.data('socialOption') + '" data-social-value="' + $el.data('socialValue') + '"></div>';
    },
    attach: function(context, settings) {
      var self = this;

      /////////////////////////////////////////////
      // Act on facebook embeds, when lib ready. //
      /////////////////////////////////////////////
      $('img[data-social-option=fb]:not(.social-media-processed)', context).each(function() {
        var $that = $(this);
        var $wrapper = $(self._getWrapper($that));
        $wrapper.append('<div class="fb-post" data-href="' + $(this).data('socialValue') + '"></div>');
        $that.replaceWith($wrapper);
      });
      if (typeof window.FB !== 'undefined') {
        window.FB.init({
          xfbml: true,
          version: 'v2.3'
        });
      }

      ////////////////////////////////////////////
      // Act on twitter embeds, when lib ready. //
      ////////////////////////////////////////////
      if (window.twttr !== 'undefined' && typeof twttr.ready === 'function') {
        twttr.ready(function (twttr) {
          $('img[data-social-option=tw]:not(.social-media-processed)', context).each(function () {
            var $that = $(this);
            var value = $(this).data('socialValue').match(/\w*$/)[0];

            if (!value) {
              return;
            }

            var $wrapper = $(self._getWrapper($that));
            $that.replaceWith($wrapper);

            twttr.widgets.createTweet(value, $wrapper[0], {
              conversation: 'none', // or all
              cards: 'visible', // or hidden
              linkColor: '#cc0000', // default is blue
              theme: 'light' // or dark
            });

          });
        });
      }

      //////////////////////////////
      // Act on instagram embeds. //
      //////////////////////////////
      $('img[data-social-option=in]:not(.social-media-processed)', context).each(function() {
        var $that = $(this);
        $.ajax({
          type: "GET",
          url: "//api.instagram.com/oembed?url=" + encodeURIComponent($that.data('socialValue')),
          crossDomain: true,
          headers: {
            'Access-Control-Allow-Methods': 'GET, POST, PUT'
          },
          dataType: "jsonp",
          success: function(data) {
            var $wrapper = $(self._getWrapper($that));
            var $data = $(data.html);
            $wrapper.append($data);
            $that.replaceWith($wrapper);

            // Add some Instagram libs.
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (js = d.getElementById(id)) {
                js.parentNode.removeChild(js);
              }
              js = d.createElement(s);
              js.id = id;
              js.src = "//platform.instagram.com/en_US/embeds.js";
              if (typeof fjs !== 'undefined' && typeof fjs.parentNode !== 'undefined') {
                fjs.parentNode.insertBefore(js, fjs);
              } else {
                d.head.appendChild(js);
              }
            }(document, 'script', 'instagram'));
          }
        });
      });

      /////////////////////////
      // Act on vine embeds. //
      /////////////////////////
      $('img[data-social-option=vi]:not(.social-media-processed)', context).each(function() {
        var $that = $(this);
        var $wrapper = $(self._getWrapper($that));
        $wrapper.append('<iframe class="vine-embed" src="' + $that.data('socialValue') + '/embed/simple" width="600" height="600" frameborder="0"></iframe>');
        $that.replaceWith($wrapper);
      });

      //////////////////////////
      // Act on imgur embeds. //
      //////////////////////////
      $('img[data-social-option=im]:not(.social-media-processed)', context).each(function() {
        var $that = $(this);
        var value = $that.data('socialValue').match(/\w*$/)[0];

        if (!value) {
          return;
        }
        value = value.length === 5 ? 'a/' + value : value;

        var $wrapper = $(self._getWrapper($that));
        $that.replaceWith($wrapper);
        $wrapper.append('<blockquote class="imgur-embed-pub" lang="en" data-id="' + value + '"></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>');
      });
    },
    detach: function(context) {
      var self = this;
      $('.social-media-processed:not(body)', context).each(function() {
        $(this).replaceWith(self._getPlaceholder($(this)));
      });
      $('#fb-root', context).remove();
    }
  };
})(jQuery, Drupal);
