(function($) {
  'use strict';

  /**
   * USA Network Surf behavior.
   */
  Drupal.behaviors.usanetwork_surf = {
    attach: function (context, settings) {
      Drupal.usanetwork_surf = {
        toggle: function() {
          $('.logged-in-info').toggle();
          $('.logged-out-info').toggle();
        }
      };

      SURF.event.bind(Drupal.surf.events.sessionReady, function (e, user) {
        if (user) {
          $('.logged-out-info').hide();
          // Set up our user info block.
          $.tmpl("Welcome ${username}", user).appendTo("#surf-info");
        }
        else {
          $('.logged-in-info').hide();
        }
      });

      SURF.event.bind(SURF.events.SIGNIN, function (e, user) {
        $('.logged-in-info').show();
        $('.logged-out-info').hide();
        $('#surf-info').html('');
        $.tmpl("Welcome ${username}", user).appendTo("#surf-info");
      });

      // Bind all our DOM events.
      $('#action-signin', context).click(function (e) {
        if (Drupal.surf.session.get() === null) {
          e.preventDefault();
          SURF.signinDialog();
        }
      });

      $('#action-edit', context).click(function (e) {
        var sess = Drupal.surf.session.get()
        if (sess !== null) {
          e.preventDefault();
          SURF.editAccountDialog(sess);
        }
      });

      $('#action-create-account', context).click(function (e) {
        if (Drupal.surf.session.get() === null) {
          e.preventDefault();
          SURF.createAccountDialog();
        }
      });

      $('#action-signout', context).click(function (e) {
        var sess = Drupal.surf.session.get()
        if (sess !== null) {
          Drupal.usanetwork_surf.toggle()
          SURF.signout(sess);
          Drupal.surf.session.remove();
        }
      });
    }
  };

})(jQuery);
