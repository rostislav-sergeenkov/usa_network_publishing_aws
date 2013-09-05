var xmlhttp;

if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

window.onload = function() {
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.write(xmlhttp.responseText);
      menu_init();
    }
  }
};

// TODO: change the 'stage' part of each URL to www
if(typeof $show_id != 'undefined') {
  document.write('<script src="http://stage.usanetwork.com/sites/usanetwork/themes/aurora_usa/javascripts/main-navigation-syndicate.js"></script>');
  xmlhttp.open("GET", "http://stage.usanetwork.com/node/" + $show_id + "/navbar/syndicate_styled", true);
  xmlhttp.send();
}
