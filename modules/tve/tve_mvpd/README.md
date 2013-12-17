TVE MVPD
=====================================
"Bridge" between TVE and MVPD service.

Attaches MVPD configs encoded in JSON format to the footer.
Front end application uses this config to build provider (MVPD) selector for the first authentication step (inside modal window).
The source of data is special service called "MVPD Admin".
So this module is a bridge between MVPD Admin service and TVE FE auth application.

For configuration uses TVE Admin UI module.
Once enabled, setup permissions under "TVE MVPD" section:
 - "Administer connection to MVPD service";
 - "Administer MVPD (providers)";
