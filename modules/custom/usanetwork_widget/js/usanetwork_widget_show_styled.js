var xmlhttp;
// TODO: change the 'stage' part of each URL to www
var url = "http://origin.stage.usanetwork.com/node/" + $show_id + "/navbar/syndicate_styled";
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
  document.write(xmlhttp.responseText);
  menu_init();
}


// // TODO: change the 'stage' part of each URL to www
if(isIE9) { 
  xmlhttp.onload = function() { loadUsanetworkShowNavMenu(); };
  xmlhttp.onprogress = function() {};
} else { 
  xmlhttp.onreadystatechange = function() { 
   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      loadUsanetworkShowNavMenu();
    }
  }
}

// // TODO: change the 'stage' part of each URL to www

if(typeof $show_id != 'undefined') {
  document.write('<script src="http://origin.stage.usanetwork.com/sites/usanetwork/themes/aurora_usa/javascripts/main-navigation-syndicate.js"></script>');
  if(isIE9) { 
    xmlhttp.open("GET", url);
  } else { 
    xmlhttp.open("GET", url, true);  
  }
  xmlhttp.send();
} 
