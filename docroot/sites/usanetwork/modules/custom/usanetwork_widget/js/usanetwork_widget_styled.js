var xmlhttp;
var current_env = (typeof $env != 'undefined') ? $env : 'prod';
var domain = 'www.usanetwork.com'
switch (current_env) {
  case 'local': domain = 'local.usanetwork'; break;
  case 'dev': domain = 'dev.usanetwork.com'; break;
  case 'qa': domain = 'qa.usanetwork.com'; break;
  case 'stage': domain = 'stage.usanetwork.com'; break;
  case 'stage_origin': domain = 'origin.stage.usanetwork.com'; break;
  case 'prod': domain = 'www.usanetwork.com'; break;
  case 'prod_origin': domain = 'origin-www.usanetwork.com'; break;
}
var url = "//" + domain + "/navbar/syndicate_styled";
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
