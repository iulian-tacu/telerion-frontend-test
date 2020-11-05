<?php

namespace Drupal\telerion_core\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Displays the social links.
 *
 * @Block(
 *   id = "social_links_block",
 *   admin_label = @Translation("Social Links Block")
 * )
 */
class SocialLinksBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    $config = parent::defaultConfiguration();
    $config += [
      'social_links' => [
        'facebook' => '',
        'instagram' => '',
        'twitter' => '',
      ],
    ];

    return $config;
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      'block_content' => [
        'buttons' => [
          '#prefix' => '<div class="buttons">',
          '#suffix' => '</div>',
          'facebook' => [
            '#type' => 'inline_template',
            '#template' => '<a href="{{ url }}" target="_blank" class="facebook-btn">{{ title }}</a>',
            '#context' => [
              'url' => $this->configuration['social_links']['facebook'],
              'title' => $this->t('Facebook page'),
            ],
            '#access' => !empty($this->configuration['social_links']['facebook']),
          ],
          'instagram' => [
            '#type' => 'inline_template',
            '#template' => '<a href="{{ url }}" target="_blank" class="instagram-btn">{{ title }}</a>',
            '#context' => [
              'url' => $this->configuration['social_links']['instagram'],
              'title' => $this->t('Instagram page'),
            ],
            '#access' => !empty($this->configuration['social_links']['instagram']),
          ],
          'twitter' => [
            '#type' => 'inline_template',
            '#template' => '<a href="{{ url }}" target="_blank" class="twitter-btn">{{ title }}</a>',
            '#context' => [
              'url' => $this->configuration['social_links']['twitter'],
              'title' => $this->t('Twitter page'),
            ],
            '#access' => !empty($this->configuration['social_links']['twitter']),
          ],
        ],
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);

    $config = $this->configuration['social_links'];
    $form['info'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Social links'),
      '#description' => $this->t('Add the url for each of the social link you want to use.'),
    ];

    foreach ($config as $key => $values) {
      $form['info'][$key] = [
        '#type' => 'url',
        '#title' => $this->t('@key', ['@key' => $key]),
        '#default_value' => $this->configuration['social_links'][$key],
        '#open' => TRUE,
      ];
    }

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);

    $this->configuration['social_links'] = $form_state->getValue('info');
  }

}
