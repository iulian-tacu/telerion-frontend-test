(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.fieldTestimonialsCarousel = {
    attach: function (context, settings) {
      const $slider = $('.field--name-field-testimonials', context).not('.slick-initialized');
      if ($slider.length > 0) {
        $slider.slick({
          dots: true,
          arrows: false,
          speed: 400,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
