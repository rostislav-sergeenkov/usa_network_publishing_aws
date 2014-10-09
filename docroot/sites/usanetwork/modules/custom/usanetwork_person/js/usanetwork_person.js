(function ($) {
  Drupal.behaviors.usanetwork_person = {
    attach: function(context){

      $person_controls = $("#edit-field-person-prefix input, #edit-field-person-first-name input," + 
                            " #edit-field-person-middle-name input, #edit-field-person-last-name input," + 
                            " #edit-field-person-suffix input, #edit-field-usa-actor-name input," + 
                            " #edit-field-show select, #edit-field-role select");

      $person_controls.on("change", function() {
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

        var person_title = person_prefix + person_first_name + person_middle_name + person_last_name + person_suffix + person_playedby;

        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text() + ' | '
                    : '';

        $("#edit-field-seo-page-title input").val(person_title.trim() + ' | Characters & Crew | ' + show + 'USA Network');
      });
    }
  }
})(jQuery);
