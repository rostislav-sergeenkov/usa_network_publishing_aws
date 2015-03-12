/* 
 * Umbel Scripts
 */
(function ($) {
  $(document).ready(function() {
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    function umbelCall(email) {
      if (validateEmail(email)) {
        _umbel.push({"type": "set", "name": "profile.email", "value": email})
      } else {
        console.log('[umbel] Incorrect email!')
      }
    }

    $('form.webform-client-form input[type="submit"]').bind('mousedown', function() {
      var email = $('form.webform-client-form input[type="email"]').val();

      umbelCall(email);
    });

    $('form#usanetwork-lyris-newsletter-subscription input[type="submit"]').bind('mousedown', function() {
      var email = $('form#usanetwork-lyris-newsletter-subscription input[name="email"]').val();

      umbelCall(email);
    });
  });
})(jQuery);
