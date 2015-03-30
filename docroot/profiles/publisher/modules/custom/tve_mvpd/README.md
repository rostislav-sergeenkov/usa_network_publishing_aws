TVE MVPD
=====================================
"Bridge" between TVE and MVPD service.

Returns MVPD configs encoded in JSON format by requesting "/mvpd" path.
Front end application uses this config to build provider (MVPD) selector for the first authentication step (inside modal window).
The source of data is special service called "MVPD Admin".
So this module is a bridge between MVPD Admin service and TVE FE auth application.

Once enabled, setup permissions under "TVE MVPD" section:
 - "Administer connection to MVPD service";
 - "Administer MVPD (providers)";
