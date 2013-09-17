var xmlhttp;

if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    document.getElementById("usanetwork-main-menu").innerHTML = xmlhttp.responseText;
  }
}

// TODO: change the 'stage' part of each URL to www
if(typeof $show_id != 'undefined') {
  xmlhttp.open("GET", "http://stage.usanetwork.com/node/" + $show_id + "/navbar/syndicate_plain", true);
  xmlhttp.send();
}
