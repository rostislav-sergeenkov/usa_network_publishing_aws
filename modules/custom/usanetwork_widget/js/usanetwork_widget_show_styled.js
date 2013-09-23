var xmlhttp;
// TODO: change the 'stage' part of each URL to www
var url = "http://stage.usanetwork.com/node/" + $show_id + "/navbar/syndicate_styled?923519";
var isIE9 = window.XDomainRequest ? true : false;


if (isIE9) {
  // code for IE9 // ref http://www.codemonkeez.com/2011/12/ie9-cross-sitedomain-scripting-with.html
  xmlhttp = new window.XDomainRequest();
} else if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}


function loadUsanetworkShowNavMenu() {
  var text = xmlhttp.responseText;
  document.getElementById("usanetwork-main-menu").innerHTML = text;
  menu_init();
}

if (typeof window.onload != 'function') {
  window.onload = create_show_menu;
} else {
  window.onload = function() {
    create_show_menu();
  };
}


function create_show_menu() {
  if(isIE9) {
    xmlhttp.onload = function() { loadUsanetworkShowNavMenu(); };
    xmlhttp.onprogress = function() {};
  } else {

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        loadUsanetworkShowNavMenu();
      }
    };
  }

  // TODO: change the 'stage' part of each URL to www & remove cache buster
  if(typeof $show_id != 'undefined') {
    //document.write('<script src="http://stage.usanetwork.com/sites/usanetwork/themes/aurora_usa/javascripts/main-navigation-syndicate.js?923"></script>');
    if(isIE9) {
      xmlhttp.open("GET", url);
    } else {
      xmlhttp.open("GET", url, true);
    }
    xmlhttp.send();
  }
}

