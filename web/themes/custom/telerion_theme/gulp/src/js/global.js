(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mobileMenuToggle = {
    attach: function (context, settings) {
      const $header = $('.region.region-header', context);
      const $toggle = $('.region.region-header > .menu-toggle', context);
      $toggle.click(() => $header.toggleClass('menu-open'));
    }
  };

})(jQuery, Drupal, drupalSettings);
