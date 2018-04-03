(function() {
  var blob = new Blob([`
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

* { box-sizing: border-box; overflow: hidden; }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
    </style>
  </head>
  <body>
    <img src="https://i.giphy.com/media/ZHXz9MZbJI1YA/giphy.gif">
  </body>
</html>
`], { type: 'text/html' })
  var win = $window({
    url: URL.createObjectURL(blob),
    icon: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/fire_1f525.png',
    title: 'Fireplace',
    width: 400,
    height: 225,
    resizable: false,
    maximizable: false,
    minimizable: false
  })
})()