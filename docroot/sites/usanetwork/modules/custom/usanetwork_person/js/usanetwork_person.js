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

      function getPersonDetails(argument) {
        var person_prefix = $("#edit-field-person-prefix input").val() != ''
                            ? $("#edit-field-person-prefix input").val() + ' '
                            : '';
        var person_first_name = $("#edit-field-person-first-name input").val() != ''
                                ? $("#edit-field-person-first-name input").val() + ' '
                                : '';
        var person_middle_name = $("#edit-field-person-middle-name input").val() != ''
                                  ? $("#edit-field-person-middle-name input").val() + ' '
                                  : '';
        var person_last_name = $("#edit-field-person-last-name input").val() != ''
                                ? $("#edit-field-person-last-name input").val() + ' '
                                : '';
        var person_suffix = $("#edit-field-person-suffix input").val() != ''
                            ? $("#edit-field-person-suffix input").val() + ' '
                            : '';
        var person_actor_name = $("#edit-field-usa-actor-name input").val() != ''
                                ? $("#edit-field-usa-actor-name input").val()
                                : '';
        var person_role = $("#edit-field-role select option:selected").text();

        var person_playedby = '';
        if (person_role != '' && person_role == 'Character' && person_actor_name != '') {
          person_playedby = 'played by '+person_actor_name;
        }

        var h1 = person_prefix + person_first_name + person_middle_name + person_last_name + person_suffix;
        var person_title = person_prefix + person_first_name + person_middle_name + person_last_name + person_suffix + person_playedby;

        var show = ($("#edit-field-show select").val() != '_none')
                    ? ' ' + $("#edit-field-show select option:selected").text() + ' |'
                    : '';

        var page_title = '';
        if (person_title != '') {
          page_title = Drupal.t('@person | Characters & Crew |@show USA Network', {
            '@person' : person_title.trim(),
            '@show' : show
          });
        }
        if (argument == 'event') {
          $("#edit-field-seo-page-title input").val(page_title);
          $("#edit-field-seo-h1 input").val(h1);
        }

        /* Display default value for h1 field */
        if ($("#edit-field-seo-h1 input").val() == '' && h1 != '' && argument != 'event') {
          if ($('#edit-field-seo-h1 .description').length == 0) {
            $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                Drupal.t('DEFAULT').toUpperCase() + ': ' +
                                                Drupal.t('@h1', {'@h1' : h1.trim()}) + 
                                                '</div>');
          }
          else {
            $("#edit-field-seo-h1 .description").html(Drupal.t('DEFAULT').toUpperCase() + ': ' +
                                                      Drupal.t('@h1', {'@h1' : h1.trim()}));
          }
        }

        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-seo-page-title input").val();
        if (page_title != '' && seo_page_title == '' && argument != 'event') {
          if ($('#edit-field-seo-page-title .description').length == 0) {
            $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                              Drupal.t('DEFAULT').toUpperCase() + ': ' + page_title +
                                                              '</div>');
          }
          else {
            $("#edit-field-seo-page-title .description").html(Drupal.t('DEFAULT').toUpperCase() + ': ' + page_title);
          }
        }
      }
    }
  }
})(jQuery);
