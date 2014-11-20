(function ($) {
  Drupal.behaviors.usanetwork_seo_h1 = {
    attach: function(context){
      var formId = $("input[name=form_id]").val();

      // Trigger on pageload once, to display default values
      $(".node-form").once('nodeform', function() {
        getAnnonation(this, formId);
      });

      $annotationcontrols = $("#edit-title, #edit-field-show select, #edit-field-season select, #edit-path-alias," + 
                    " #edit-field-person-prefix input, #edit-field-person-first-name input," + 
                    " #edit-field-person-middle-name input, #edit-field-person-last-name input," + 
                    " #edit-field-person-suffix input, #edit-field-usa-actor-name input," + 
                    " #edit-field-show select, #edit-field-role select");

      $annotationcontrols.on("change", function() {
        getAnnonation(this, formId);
      });
      $("#edit-field-season select").on("blur", function() {
        getAnnonation(this, formId);
      });
      function getAnnonation(controlObject, formId) {
        var defaultString = Drupal.t('Default').toUpperCase();
        var titleSuffix = Drupal.t('USA Network'); 
        var title = $("#edit-title").val();
        var h1 = $("#edit-field-seo-h1 input").val();
        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text()
                    : '';
        var season = ($("#edit-field-season select").val() != '_none')
                      ? $("#edit-field-season select option:selected").text()
                      : '';
        var path = $("#edit-path-alias").val();

        if ($("#edit-title").length > 0 || formId == 'person_node_form') {

          $readonlywrapper = $("#edit-field-seo-h1");
          if (formId == 'catchall_page_node_form') {
            $readonlywrapper = $("#edit-field-seo-page-title");
            var catchallType = '';
            var catchallString = '';            
            if (path != '') {
              var pathArray = path.split("/");
              if (pathArray.length > 1 && typeof pathArray[1] != undefined) {
                switch (pathArray[1]) {
                  case 'features':
                    catchallType = Drupal.t('Features')
                    break;
                  case 'quizzes':
                    catchallType = Drupal.t('Quizzes')
                    break;
                  case 'games':
                    catchallType = Drupal.t('Games')
                    break;                
                }
                if (catchallType != '' && show != '') {
                  catchallString = '| ' + catchallType + ' | ' + show + ' ';
                }
              }
            }            
          }
          if (formId == 'person_node_form') {
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
              personPlayedby = Drupal.t('played by')+ ' ' + personActorName;
            }
            title = personPrefix + personFirstName + personMiddleName + personLastName + personSuffix;
            var personTitle = personPrefix + personFirstName + personMiddleName + personLastName + personSuffix + personPlayedby;
          }

          title = title.trim();

          /* TITLE LABEL */
          $("#display_readonly_title .readonly_title").html('');
          if ($('#display_readonly_title').length == 0) {
            $readonlywrapper.prepend('<div class="form-item" id="display_readonly_title">' + 
                                              '<label>' + Drupal.t('Title') + '</label><div class="readonly_title">' + 
                                              title + 
                                              '</div></div>');
          }
          else {
            $("#display_readonly_title .readonly_title").html(title);
          }

          /* H1 ANNOTATION */
          $("#edit-field-seo-h1 .description").html('');
          if (title != '') {
            if ($('#edit-field-seo-h1 .description').length == 0) {
              $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                  defaultString + ': ' +
                                                  title +
                                                  '</div>');
            }
            else {
              $("#edit-field-seo-h1 .description").html(defaultString + ': ' + title);
            }
          }

          /* PAGE TITLE ANNOTATION */
          var inputDefaultValue = '';
          if (title != '' || season != '' || show != '') {
            switch (formId) {
              case 'tv_episode_node_form':
                show = (show != '')
                       ? ' ' + show + ' |'
                       : '';
                season = (season == '' || controlObject.name == 'field_show[und]')
                         ? ''
                         : '- ' + season + ' ';
                inputDefaultValue = title + ' ' + season + '| Episode Guide |' + show + ' ' + titleSuffix;
                break;
              case 'tv_show_node_form':
                inputDefaultValue = title + ' | ' + titleSuffix;
                break;
              case 'media_gallery_node_form':
                show = (show != '')
                       ? ' ' + show + ' |'
                       : '';                  
                inputDefaultValue = title + ' | ' + Drupal.t('Photo Galleries') + ' |' + show + ' ' + titleSuffix;
                break;
              case 'quiz_node_form':
                show = (show != '')
                       ? show + ' - '
                       : '';
                inputDefaultValue = show + title + ' | ' + titleSuffix;
                break;
              case 'catchall_page_node_form':            
                inputDefaultValue = title + ' ' + catchallString + '| ' + titleSuffix;
                break;
              case 'person_node_form':
                show = (show != '')
                       ? ' ' + show + ' |'
                       : '';              
                inputDefaultValue = personTitle.trim() + ' | ' +  Drupal.t('Characters & Crew') + ' |' + show + ' ' + titleSuffix;
                break;                
            }
          }
          $("#edit-field-seo-page-title .description").html('');
          if (inputDefaultValue != '') {
            if ($('#edit-field-seo-page-title .description').length == 0) {
              $("#edit-field-seo-page-title input").after('<div class="description">' + 
                                                                defaultString + ': ' + inputDefaultValue +
                                                                '</div>');
            }
            else {
              $("#edit-field-seo-page-title .description").html(defaultString + ': ' + inputDefaultValue);
            }
          }
        }
      }
    }
  }
})(jQuery);
