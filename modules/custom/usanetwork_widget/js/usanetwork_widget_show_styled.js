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
    document.write(xmlhttp.responseText);
    menu_init();
  }
}

if(typeof $show_id != 'undefined') {
  document.write('<script src="/sites/usanetwork/themes/aurora_usa/javascripts/main-navigation-syndicate.js"></script>');
  xmlhttp.open("GET", "/node/" + $show_id + "/navbar/syndicate_styled", true);
  xmlhttp.send();
}
