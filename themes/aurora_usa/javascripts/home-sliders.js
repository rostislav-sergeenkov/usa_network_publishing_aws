// homepage sliders
(function ($) {
  Drupal.behaviors.homeSliders = {
    attach: function (context, settings) {

      var SliderTiles = function SliderTiles(el) {
        var self = this instanceof SliderTiles
             ? this
             : Object.create(SliderTiles.prototype);
        self.el = el;
        self.$el = $(el);
        self.initialize();
        return self;
      };
      
      SliderTiles.prototype.initialize = function initialize() {
        var mainOptions,
          secondaryOptionsm,
          $mainSlider,
          $secondarySlider;
      
        this.$mainSlider = $mainSlider = this.$el.find('#main-slider');
        this.$secondarySlider = $secondarySlider = this.$el.find('.secondary-slider');
      
        mainOptions     = {
          animation     : 'slide',
          controlNav    : true,
          directionNav  : (!Modernizr.touch),
          slideshow     : false,
          before      : function(slider) {
            var target      = slider.animatingTo,
              currentSlide  = slider.currentSlide;
      
            $secondarySlider.each(function (index, element) {
              var flexslider = $(element).data('flexslider');
      
              // Setting the animation direction of the secondary slider to be the 
              // same as the primary slider.
              flexslider.direction = slider.direction;
              
              flexslider.flexAnimate(target, true);
            });
          }
        };
        secondaryOptions  = {
          animation     : 'slide',
          controlNav    : false,
          directionNav  : false,
          slideshow     : false,
          touch       : false
        };
      
        this.$mainSlider.flexslider(mainOptions);
        this.$secondarySlider.flexslider(secondaryOptions);
      
      };
      
    },
  };

}(jQuery));
