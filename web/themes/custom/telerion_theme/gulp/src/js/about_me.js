(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.aboutMeTabs = {
    attach: function (context, settings) {
      if (context === document) {
        const $tabToggles = $('.paragraph--type--about-me-section .tabs .toggles .toggle', context);
        const $tabParagraphs = $('.paragraph--type--about-me-section .tabs .body .paragraph');

        function toggleHandler (tab) {
          $tabParagraphs.map(
            (index, element) =>
              $(element).hasClass(tab) ? $(element).show() : $(element).hide()
          )
        }

        $tabToggles.click(event => {
          $tabToggles.removeClass('active');
          $(event.target).addClass('active');
          toggleHandler(event.target.getAttribute('data-tab'));
        });

        toggleHandler($tabToggles[0].getAttribute('data-tab'));
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
