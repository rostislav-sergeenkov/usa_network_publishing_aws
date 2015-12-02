/**
 * Script for Taboola module:Header
 */
window._taboola = window._taboola || [];
    _taboola.push({video:'auto'});
    !function (e, f, u) {
        e.async = 1;
        e.src = u;
        f.parentNode.insertBefore(e, f);
    }(document.createElement('script'),
        document.getElementsByTagName('script')[0],
        '//cdn.taboola.com/libtrc/usanetwork-network/loader.js');
