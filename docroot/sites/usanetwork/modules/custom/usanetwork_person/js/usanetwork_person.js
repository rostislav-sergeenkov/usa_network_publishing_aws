(function ($) {
  Drupal.behaviors.usanetwork_person = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      getPersonDetails('pageload');

      $person_controls = $("#edit-field-person-prefix input, #edit-field-person-first-name input," + 
                            " #edit-field-person-middle-name input, #edit-field-person-last-name input," + 
                            " #edit-field-person-suffix input, #edit-field-usa-actor-name input," + 
                            " #edit-field-show select, #edit-field-role select");

      $person_controls.on("change", function() {
        getPersonDetails('event');
      });

      function getPersonDetails(event_type) {
        var defaultString = Drupal.t('Default').toUpperCase();
        var titleSuffix = Drupal.t('USA Network');
        var personPrefix = $("#edit-field-person-prefix input").val() != ''
                            ? $("#edit-field-person-prefix input").val() + ' '
                            : '';
        var personFirstName = $("#edit-field-person-first-name input").val() != ''
                                ? $("#edit-field-person-first-name input").val() + ' '
                                : '';
        var personMiddleName = $("#edit-field-person-middle-name input").val() != ''
                                  ? $("#edit-field-person-middle-name input").val() + ' '
                                  : '';
        var personLastName = $("#edit-field-person-last-name input").val() != ''
                                ? $("#edit-field-person-last-name input").val() + ' '
                                : '';
        var personSuffix = $("#edit-field-person-suffix input").val() != ''
                            ? $("#edit-field-person-suffix input").val() + ' '
                            : '';
        var personActorName = $("#edit-field-usa-actor-name input").val() != ''
                                ? $("#edit-field-usa-actor-name input").val()
                                : '';
        var personRole = $("#edit-field-role select option:selected").text();

        var personPlayedby = '';
        if (personRole != '' && personRole == 'Character' && personActorName != '') {
          personPlayedby = 'played by ' + personActorName;
        }

        var h1 = personPrefix + personFirstName + personMiddleName + personLastName + personSuffix;
        var personTitle = personPrefix + personFirstName + personMiddleName + personLastName + personSuffix + personPlayedby;

        var show = ($("#edit-field-show select").val() != '_none')
                    ? ' ' + $("#edit-field-show select option:selected").text() + ' |'
                    : '';

        var pageTitle = '';
        if (personTitle != '') {
          pageTitle = personTitle.trim() + ' | ' +  Drupal.t('Characters & Crew') + ' |' + show + ' ' + titleSuffix;
        }
        if (event_type == 'event') {
          $("#edit-field-seo-page-title input").val(pageTitle);
          $("#edit-field-seo-h1 input").val(h1);
        }

        /* Display default value for h1 field */
        if ($("#edit-field-seo-h1 input").val() == '' && h1 != '' && event_type != 'event') {
          if ($('#edit-field-seo-h1 .description').length == 0) {
            $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                defaultString + ': ' + h1.trim() +
                                                '</div>');
          }
          else {
            $("#edit-field-seo-h1 .description").html(defaultString + ': ' + h1.trim());
          }
        }

        /* Display default value for page title field */
        var seoPageTitle = $("#edit-field-seo-page-title input").val();
        if (pageTitle != '' && seoPageTitle == '' && event_type != 'event') {
          if ($('#edit-field-seo-page-title .description').length == 0) {
            $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                              defaultString + ': ' + pageTitle +
                                                              '</div>');
          }
          else {
            $("#edit-field-seo-page-title .description").html(defaultString + ': ' + pageTitle);
          }
        }
      }
    }
  }
})(jQuery);
