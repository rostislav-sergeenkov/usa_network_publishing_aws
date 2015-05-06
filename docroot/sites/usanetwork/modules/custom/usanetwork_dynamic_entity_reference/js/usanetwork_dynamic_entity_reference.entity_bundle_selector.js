(function($) {
  Drupal.behaviors.usanetwork_dynamic_entity_reference = {
    attach: function (context, settings) {
      var entityData = settings.entity_bundles_data;
      var entityBundlesSelectedDefault = settings.entity_bundles_selected;

      // Update default entity types
      updateEntityTypes();

      // Select default entity bundles
      fillEntityBundlesDefault();

      // ****************************************************

      $("#edit-field-settings-entity-type-ids").change(updateEntityTypes);

      function updateEntityTypes() {
        var entityTypeSelected = $("#edit-field-settings-entity-type-ids option:selected");
        var selectedEntityNames = [];

        if (entityTypeSelected) {
          $.each(entityTypeSelected, function(index, value) {
            selectedEntityNames.push($(value).val());
          });

          updateEntityBundles(selectedEntityNames);
        }
      }

      function updateEntityBundles(selectedEntityNames) {
        var bundlesContainer = $("#edit-field-settings-entity-bundles");

        bundlesContainer.find('option').remove();

        if (selectedEntityNames) {
          $.each(selectedEntityNames, function (index, value) {

            if (entityData) {
              $.each(entityData[value], function (bundleIndex, bundleName) {
                bundlesContainer.append('<option value=' + bundleIndex + '>' + bundleName + '</option>');
              });
            }
          });
        }

        fillEntityBundlesDefault();
      }

      function fillEntityBundlesDefault() {
        var bundlesContainer = $("#edit-field-settings-entity-bundles");

        if (entityBundlesSelectedDefault) {
          $.each(entityBundlesSelectedDefault, function(index, value) {
            markSelectOption(bundlesContainer, value);
          })
        }
      }


      function markSelectOption(selectContainer, optionName){
        $(selectContainer).find('option[value="' + optionName + '"]').attr('selected', 'selected');
      }
    }
  };
})(jQuery);
