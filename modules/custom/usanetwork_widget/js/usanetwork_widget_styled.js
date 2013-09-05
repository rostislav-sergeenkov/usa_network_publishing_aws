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
    var text = xmlhttp.responseText;
    document.getElementById("usanetwork-main-menu").innerHTML = text;
    menu_init();    
    }
  }
};

// TODO: change the 'stage' part of each URL to www
xmlhttp.open("GET", "http://stage.usanetwork.com/navbar/syndicate_styled", true);
xmlhttp.send();
