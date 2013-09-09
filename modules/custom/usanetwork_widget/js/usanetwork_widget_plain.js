var xmlhttp;
// TODO: change the 'stage' part of each URL to www
var url = "http://stage.usanetwork.com/navbar/syndicate_plain";
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

function load_menu() {
  document.getElementById("usanetwork-main-menu").innerHTML = xmlhttp.responseText;
}

if (typeof window.onload != 'function') {
   window.onload = create_menu;
} else {
  window.onload = function() {
    create_menu();
  }
}

function create_menu() {
  if(isIE9) {
    xmlhttp.onload = function() { load_menu(); };
    xmlhttp.open("GET", url);
    xmlhttp.onprogress = function() {};
  } else {
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function() { 
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        load_menu();
      }
    }
  } 
  xmlhttp.send();
}