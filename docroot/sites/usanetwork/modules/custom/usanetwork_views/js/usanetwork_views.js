// Show text field with node address
(function ($) {
  Drupal.behaviors.usanetwork_view = {
    attach: function (context, settings) {
      $( '#views-form-usanetwork-content-page table .views-field-nid' ).on('click', function(){
        //remove all previous textfileds
        $('.text-box-nid').remove();
        //hide and show text 
        $('.views-field-nid span').show();
        $(this).find('span').hide();

        $('.views-field-views-bulk-operations input').prop("checked", false);

        var text = $(this).text();
        $(this).append('<input type="text" class="form-text text-box-nid" name="text-box-nid" value="node/'+ text.replace(/\s+/g, '')+'" >');
        $('.text-box-nid').select();
      });
    }
  };
}(jQuery));
