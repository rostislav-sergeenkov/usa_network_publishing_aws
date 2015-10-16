(function($) {

  Drupal.behaviors.usanetwork_quiz_edit = {

    attach: function(context, settings) {

      function checkHide(){
        var hide = true;
        $('.question-handling').each(function () {
          if(!$(this).hasClass('hide')){
            hide = false;
            return false;
          }
        });
        return hide;
      }
      function checkShow(){
        var show = true;
        $('.question-handling').each(function () {
          if($(this).hasClass('hide')){
            show = false;
            return false;
          }
        });
        return show;
      }

      function collapseTest(){
        if(checkHide()) {
          if(!$('.questions-collapse').hasClass('hide')){
            $('.questions-collapse').addClass('hide');
          }
        } else {
          if($('.questions-collapse').hasClass('hide')){
            $('.questions-collapse').removeClass('hide');
          }
        }
      }
      function expandTest(){
        if(checkShow()) {
          if(!$('.questions-expand').hasClass('hide')){
            $('.questions-expand').addClass('hide');
          }
        } else {
          if($('.questions-expand').hasClass('hide')){
            $('.questions-expand').removeClass('hide');
          }
        }
      }

      $('.question-expand').click(function(e){
        e.preventDefault();
        var handling = $(this).closest('.question-handling');
        if(handling.hasClass('hide')){
          handling.removeClass('hide');
        }
        collapseTest();
        expandTest();
      });

      $('.question-collapse').click(function(e){
        e.preventDefault();
        var handling = $(this).closest('.question-handling');
        if(!handling.hasClass('hide')){
          handling.addClass('hide');
        }
        collapseTest();
        expandTest();
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
