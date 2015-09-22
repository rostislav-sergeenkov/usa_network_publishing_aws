(function($) {

  Drupal.behaviors.usanetwork_quiz_edit = {

    attach: function(context, settings) {

      $('.question-expand').click(function(e){
        e.preventDefault();
        var handling = $(this).closest('.question-handling');
        if(handling.hasClass('hide')){
          handling.removeClass('hide');
        }
      });

      $('.question-collapse').click(function(e){
        e.preventDefault();
        var handling = $(this).closest('.question-handling');
        if(!handling.hasClass('hide')){
          handling.addClass('hide');
        }
      });

      $('.questions-expand').click(function(e){
        e.preventDefault();
        $(this).addClass('hide');
        $('.questions-collapse').removeClass('hide');
        $('.question-handling').removeClass('hide');
      });

      $('.questions-collapse').click(function(e){
        e.preventDefault();
        $(this).addClass('hide');
        $('.questions-expand').removeClass('hide');
        $('.question-handling').each(function () {
          if(!$(this).hasClass('hide')){
            $(this).addClass('hide');
          }
        });
      });

    }
  };
})(jQuery);
