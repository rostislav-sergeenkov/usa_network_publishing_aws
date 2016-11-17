/**
 * Script for Taboola module:Header
 */
window._taboola = window._taboola || [];
_taboola.push({article:'auto'});
!function (e, f, u, i) {
  if (!document.getElementById(i))
  { e.async = 1; e.src = u; e.id = i; f.parentNode.insertBefore(e, f); }
}(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/usanetwork-network/loader.js',
  'tb_loader_script');
