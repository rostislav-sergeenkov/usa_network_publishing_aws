(function($) {
  Drupal.behaviors.usanetwork_quiz = {
    moveAds: function($container) {
      var $ads = $container.find('.ad-container');
      var $containers = $container.children('.container');
      var $visible = $containers.filter(':visible');
      if ($ads.closest($visible).length == 0) {
        $ads.appendTo($visible.find('.sidebar'));
      }
    },
    attach: function(context, settings) {
      var quizes = settings.usanetwork_quiz;
      for (nid in quizes) {
        var quiz_setting = quizes[nid];
        var $container = $(quiz_setting.container);
        $container.once('usanetwork-quiz', function() {
          var func = 'quiz' + quiz_setting['quizType'].charAt(0).toUpperCase() + quiz_setting['quizType'].slice(1);
          if (typeof $.fn[func] !== 'undefined') {
            var quiz = $.fn[func].apply($container, [{
              calculationMethod: quiz_setting['calculationMethod'],
              onReset: function() {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
              },
              onStart: function() {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
              },
              onRestart: function() {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
              },
              onShowQuestion: function(e, $question) {
                if (typeof usa_refreshBannerAd != 'undefined') {
                  usa_refreshBannerAd();
                }
              },
              onBeforeResult: function(e, $result) {
                var $container = $result.closest('.container');
                var $sharebar = $container.find('.field-name-field-gigya-share-bar > div');

                $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
                  if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
                    var image = $result.find('.result-image img').attr('src');
                    if (image) {
                      sharebar.gigyaSharebar.ua.imageBhev = 'url';
                      sharebar.gigyaSharebar.ua.imageUrl = image;
                    }
                    else {
                      sharebar.gigyaSharebar.ua.imageBhev = 'default';
                    }
                    sharebar.gigyaSharebar.ua.description = $result.find('.result-description .share').text();
                    Drupal.gigya.showSharebar(sharebar);
                  }
                });
              },
              onShowResult: function(e, $result) {
                Drupal.behaviors.usanetwork_quiz.moveAds(this.container);
              }
            }]);
          }
        });
      }
    }
  };
})(jQuery);