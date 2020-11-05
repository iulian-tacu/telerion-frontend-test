(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.paragraphExpertiseSection = {
    attach: function (context, settings) {
      const $slider = $('.paragraph--type--expertise-section.paragraph--view-mode--default .field--name-field-cards', context).not('.slick-initialized');
      if ($slider.length > 0 && window.innerWidth < 768) {
        $slider.slick({
          dots: true,
          speed: 400,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 768,
              settings: 'unslick'
            }
          ]
        });
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
