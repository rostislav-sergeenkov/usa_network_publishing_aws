/* 
 * Unbel Scripts
 */

$('form.webform-client-form input[type="submit"]').bind('click', function() {
  var email = $('form.webform-client-form input[type="email"]').val();
  _umbel.push({"type": "set", "name": "profile.email", "value": email});
});

$('form#usanetwork-lyris-newsletter-subscription input[type="submit"]').bind('click', function() {
  var email = $('form#usanetwork-lyris-newsletter-subscription input[name="email"]').val();
  _umbel.push({"type": "set","name": "profile.email","value": email});
});
