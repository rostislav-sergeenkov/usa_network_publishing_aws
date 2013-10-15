var xmlhttp;
// TODO: change the 'stage' part of each URL to www

var current_url = window.location.href;
var url_parts = current_url.split('/');
var domain = url_parts[2];
var url = "http://" + domain + "/navbar/syndicate_styled";
var isIE9 = window.XDomainRequest ? true : false;


if (isIE9) {
  // code for IE9 // ref http://www.codemonkeez.com/2011/12/ie9-cross-sitedomain-scripting-with.html
  xmlhttp = new window.XDomainRequest();
} else if(window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}


function loadUsanetworkGlobalNavMenu() {
  var text = xmlhttp.responseText;
  document.getElementById("usanetwork-main-menu").innerHTML = text;
  menu_init();
}


if (window.attachEvent) {
  window.attachEvent('onload', create_menu);
} else if (window.addEventListener) {
  window.addEventListener('load', create_menu, false);
} else {
  document.addEventListener('load', create_menu, false);
}


function create_menu() {
  if(isIE9) {
    xmlhttp.onload = function() { loadUsanetworkGlobalNavMenu(); };
    xmlhttp.open("GET", url);
    xmlhttp.onprogress = function() {};
  } else {
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        loadUsanetworkGlobalNavMenu();
      }
    };
  }
  xmlhttp.send();
}
