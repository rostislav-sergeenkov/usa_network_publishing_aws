function usanetwork_menu_get_user_timezone_offset() {
  var timezone = jstz.determine();
  var timezoneOffset = 0;
  var timezoneET = false;

  switch (timezone.name()) {
    case 'America/New_York':
    case 'America/Chicago':
    case 'America/Denver':
      timezoneOffset = 0;
      break;
    case 'America/Phoenix':
      timezoneOffset = -3600;
      break;
    case 'America/Los_Angeles':
    case 'America/Anchorage':
    case 'Pacific/Honolulu':
      timezoneOffset = -10800;
      break;
  }

  return timezoneOffset;
}
