jQuery("#edit-submitted-age-range").change(function() {
  var age = jQuery(this).val();
  if(age == 12)
  {
    jQuery("#edit-submitted-name").attr("disabled", true);
    jQuery("#edit-submitted-email-address-").attr("disabled", true);
    jQuery("#edit-submitted-city-town").attr("disabled", true);
    jQuery("#edit-submitted-state").attr("disabled", true);
    jQuery("#edit-submitted-topic").attr("disabled", true);
    jQuery("#edit-submitted-program").attr("disabled", true);
    jQuery("#edit-submitted-site-area").attr("disabled", true);
    jQuery("#edit-submitted-tv-provider").attr("disabled", true);
    jQuery("#edit-submit").hide();
    alert("Sorry, you must be 13 years or older to use this e-mail form.");
  }
  else
  {
    jQuery("#edit-submitted-name").attr("disabled", false);
    jQuery("#edit-submitted-email-address-").attr("disabled", false);
    jQuery("#edit-submitted-city-town").attr("disabled", false);
    jQuery("#edit-submitted-state").attr("disabled", false);
    jQuery("#edit-submitted-topic").attr("disabled", false);
    jQuery("#edit-submitted-program").attr("disabled", false);
    jQuery("#edit-submitted-site-area").attr("disabled", false);
    jQuery("#edit-submitted-tv-provider").attr("disabled", false);
    jQuery("#edit-submit").show();
  }
});