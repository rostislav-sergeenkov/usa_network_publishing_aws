/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'usanetwork\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-on_now' : '&#x6f;&#x6e;&#x6e;&#x6f;&#x77;',
			'icon-arrow1' : '&#xe00d;',
			'icon-arrow3' : '&#x3e;',
			'icon-close' : '&#xe00a;',
			'icon-fb' : '&#x66;&#x61;&#x63;&#x65;&#x62;&#x6f;&#x6f;&#x6b;',
			'icon-open' : '&#x6f;&#x70;&#x65;&#x6e;',
			'icon-options' : '&#x6d;&#x65;&#x6e;&#x75;',
			'icon-search' : '&#x73;&#x65;&#x61;&#x72;&#x63;&#x68;',
			'icon-twitter' : '&#x74;&#x77;&#x69;&#x74;&#x74;&#x65;&#x72;',
			'icon-usa' : '&#x263a;',
			'icon-x1' : '&#x63;&#x6c;&#x6f;&#x73;&#x65;',
			'icon-arrow1-left' : '&#x2190;',
			'icon-arrow2-left' : '&#x50;&#x72;&#x65;&#x76;&#x69;&#x6f;&#x75;&#x73;',
			'icon-arrow3-left' : '&#x3c;',
			'icon-arrow2' : '&#x4e;&#x65;&#x78;&#x74;',
			'icon-usa-2' : '&#x55;&#x53;&#x41;',
			'icon-usa-3' : '&#x55;&#x53;&#x41;&#x4e;&#x65;&#x74;&#x77;&#x6f;&#x72;&#x6b;',
			'icon-tumblr' : '&#x74;&#x75;&#x6d;&#x62;&#x6c;&#x72;',
			'icon-pin' : '&#x70;&#x69;&#x6e;&#x74;&#x65;&#x72;&#x65;&#x73;&#x74;',
			'icon-arrow-separator' : '&#x276d;',
			'icon-dropdown' : '&#xe000;',
			'icon-tve-key' : '&#xe002;',
			'icon-tve-key-full' : '&#xe001;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};