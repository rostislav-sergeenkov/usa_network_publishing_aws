TVE Authentication 2
=====================================
Provides authentication flow for TVE:
 - Modal windows ("welcome", "mvpd picker");
 - Adobe Pass authentication through MVPD;

Requirements:
 - TVE Adobe Pass module;
 - TVE MVPD module;
 - JQuery Update module (library version 1.8 or greater);
 - TVE Javascript library: copy content of libraries folder to sites/all/libraries

How to migrate from "TVE Auth" to "TVE Auth 2" module:
 - Check dependency - "TVE Adobe Pass" module version must be 3.1 or greater. In case of module update - verify module settings are correct and permissions are set properly.
 - Check dependency - "TVE MVPD" module version must be 2.2 or greater. In case of module update - verify module settings are correct and permissions are set properly.
 - Disable "TVE Auth" module.
 - Enable "TVE Auth 2" module.
 - TVE Javascript library: copy content of libraries folder to sites/all/libraries.
 - Set jQuery version to 1.8 or greater ("jQuery Update" module).
 - Fill "TVE Auth 2" settings form (TVE > Authentication > Auth Flow 2).
 - Save and then publish settings using appropriate submit buttons.
 - Setup sign-in block - upload sign-in button image then add "TVE Sign-In" block to the page (to "Content" region, for instance).
