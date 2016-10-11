// created global obj
var USAN = USAN || {};

USAN.initUSAGigya = function(newShareBar) {

  'use strict';

  var defaultShareBar = {},
      shareBar = {};

  newShareBar = newShareBar || {};

  defaultShareBar.gigyaSharebar = {
    ua: {
      description: '',
      imageBhev: 'url',
      imageUrl: '',
      linkBack: '',
      title: ''
    },
    containerID: '',
    iconsOnly: true,
    layout: 'horizontal',
    shareButtons: 'facebook, twitter, tumblr, pinterest, share',
    shortURLs: 'never',
    showCounts: 'none',
    buttonTemplate: '<div class="usa-share-button gig-share-button" onclick="$onClick"></div>'
  };

  shareBar.gigyaSharebar = Object.assign(defaultShareBar.gigyaSharebar, newShareBar.gigyaSharebar);

  if (Drupal.gigya.hasOwnProperty('showSharebar') && typeof Drupal.gigya.showSharebar == 'function') {
    console.log('done: init usa gigya');
    Drupal.gigya.showSharebar(shareBar);
  } else {
    console.log('error: usa gigya');
  }
};
