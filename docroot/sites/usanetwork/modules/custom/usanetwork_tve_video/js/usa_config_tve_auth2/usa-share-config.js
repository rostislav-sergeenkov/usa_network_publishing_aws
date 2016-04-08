function share_config(clip) {

  console.info('start: share_config');

  var pageUrl = window.location.href,
      $playerContainer = document.querySelector('[data-usa-tve-player-container]'),
      $playerWrap = document.querySelector('[data-usa-tve-player="player"]'),
      videoSrc =  $playerWrap.getAttribute('data-src'),
      isAuth = $playerContainer.getAttribute('data-entitlement') === 'auth' ? true : false,
      isFullEpisode = parseInt($playerContainer.getAttribute('data-is-full-episode')) === 1 ? true : false,
      shareEmbed;

  if (isFullEpisode) {
    shareEmbed = false;
  } else {
    shareEmbed = true;
  }

  return {
    "shareLinkVisible": true,
    "shareLinkUrl": pageUrl,
    "shareEmbedVisible": shareEmbed,
    "shareEmbedBaseUrl": pageUrl,
    "shareEmbedString": '<iframe src="' + videoSrc + '" frameBorder="0" seamless="seamless" allowFullScreen></iframe>',
    "shareFacebookVisible": true,
    "shareFacebookLink": pageUrl,
    "shareTwitterVisible": true,
    "shareGooglePlusVisible": true
  };
}
