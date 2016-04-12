function share_config(clip) {

  console.info('start: share_conf');

  var pageUrl = (window.location != window.parent.location) ? document.referrer : document.location,
      $playerContainer = document.querySelector('[data-usa-tve-player-container]'),
      $playerWrap = document.querySelector('[data-usa-tve-player="player"]'),
      isAuth = clip.baseClip.contentCustomData.entitlement == "free" ? false : true,
      isFullEpisode = clip.baseClip.contentCustomData.fullEpisode == "true" ? true : false,
      videoSrc =  $playerWrap.getAttribute('data-src') + '?ec=f',
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
    "shareEmbedString": '<iframe src="' + videoSrc + '" width="480" height="270" frameBorder="0" seamless="seamless" allowFullScreen></iframe>',
    "shareFacebookVisible": true,
    "shareFacebookLink": pageUrl,
    "shareTwitterVisible": true,
    "shareGooglePlusVisible": true
  };
}
