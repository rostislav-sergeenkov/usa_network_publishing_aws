Third party cookies support detection module
=========
How to use:
- Enable TVE Cookie Detection module
- Set alternative domain on
"Configuration > System > 3rd party cookies detection" page
- Attach "3rd party cookies detection" library to a page in PHP script using
```drupal_add_library``` function:
	
	drupal_add_library('tve_cookie_detection', 'tve-3rd-party-cookies-detection');

- Your JavaScript can check the status value of 3rd party cookies support in
```Drupal.settings.tve_cookie_detection.status``` variable:

    *true* - 3rd party cookies are supported by the client (browser)
    
    *false* - 3rd party cookies aren't supported (blocked) by the client
    (browser)
    
    *null* - check for 3rd party cookies support wasn't held or was failed by
    some reason (incorrect alternative domain provided, for instance)

- 3rd party cookies detection progress can be checked in JavaScript via
```Drupal.settings.tve_cookie_detection.completed``` variable:

    *true* - 3rd party cookies detection have already completed

    *false* - 3rd party cookies detection have not yet completed
