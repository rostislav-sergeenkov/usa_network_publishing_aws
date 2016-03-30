function share_config(clip) {

  console.log('start: share_config');
  var pageUrl = window.location.href;

  return {
    "shareLinkVisible": true,
    "shareLinkParam": "permalink",
    "shareEmbedVisible": false,
    "shareEmbedBaseUrl": "http://foo/bar",
    "shareEmbedString": '<param name="permalink" value="'+ pageUrl +'"/>',
    "shareFacebookVisible": true,
    "shareFacebookLink": "http://foo/bar",
    "shareGoogle+Visible": true
  };
}
