window.console||(window.console={log:function(){},error:function(){},debug:function(){}});
var polyClip=new function(){function m(c){E&&console.log(c)}function K(c,b){var e=new Image;jQuery(b).attr("data-polyclip-index",c);jQuery(e).bind("load",function(){var f=jQuery(b);f.attr("data-polyclip-transformorigin")||f.attr("data-polyclip-transformorigin",b.width/2+","+b.height/2);m("Cached "+e.src);A[e.src]=e;drawShape(c,b);var p,f=A,v=0;for(p in f)f.hasOwnProperty(p)&&v++;p=v;s.length==p?h.runCallbacks():m("Cached "+s.length+" out of "+p+" images.")});e.src=b.src}function t(c,b,e,f,p){c=c.x(b.add(e));
c=c.add(f);p.push(c.e(1));p.push(c.e(2));return c}var h=this,s,w=[],A=[],F=[],B=[],G=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)?!0:!1;!G&&document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg");var z,H,I,E=!1,C=!1;h.useSVGGlobally=!1;h.aniamtionNode=null;h.index=-1;h.isOldIE=window.G_vmlCanvasManager;h.polygonCache=[];h.init=function(){m("Initializing.");for(var c=document.getElementsByTagName("script"),b=null,e=0;e<c.length;e++){var f=c[e];f.src.match("polyclip(-p){0,1}.js")&&
(b=f)}if(!(c=!b)){var p=!1;jQuery.each(b.attributes,function(b,c){0==c.name.indexOf("data-")&&(p=!0)});c=!p}c&&(b=document.body);if(z=b)H=z.getAttribute("data-polyclip-clippreference"),I=z.getAttribute("data-polyclip-forcepointerevents"),E=z.getAttribute("data-polyclip-showdebugmessages")||!1,C=!h.isOldIE&&!G&&"true"==I,"SVG"==H&&C&&(h.useSVGGlobally=!0);h.$animationNode=jQuery('<div id="polyClip-tmp" />');document.body.appendChild(h.$animationNode.get(0));s=jQuery("img[data-polyclip]");m("Clipping "+
s.length+" image(s).");0<s.length?s.each(K):h.runCallbacks()};h.clipImage=function(c,b,e,f,p){var h=c.jquery?c:jQuery(c),j=b;f=h.attr("data-polyclip-transformorigin");var a,g;c=c.jquery?c.get(0):c;f&&(f=f.split(","));f&&2==f.length&&(a=parseFloat(f[0]),g=parseFloat(f[1]));!f||isNaN(a)||isNaN(g)?(f=c.offsetWidth/2,p=c.offsetHeight/2):(f=a,p=g);c.jquery&&c.get(0);if(e)if(window.$M){m("transform: "+e);"string"==typeof e&&(e=D.getTransformationMatrix(e));c=e;g=f;j=p;a=jQuery.trim(b);g=null==g?0:g;j=null==
j?0:j;b=$V([-g,-j,0]);var j=$V([g,j,0]),l;if(0==a.indexOf("path:")){a=a.substring(5);g=a.replace(","," ").split(/\s+/);var d=[],q=$V([0,0,1]),k=null;for(a=0;a<g.length;){var n=g[a];isNaN(parseFloat(n))?d.push(n):(n=k,a--);var J=n.toUpperCase(),k=0;switch(J){case "M":case "L":case "T":k=1;break;case "S":case "Q":k=2;break;case "C":k=2}switch(J){case "H":l=$V([parseFloat(g[a+1]),q.e(2),1]);t(c,l,b,j,d);break;case "V":l=$V([q.e(1),parseFloat(g[a+1]),1]);t(c,l,b,j,d);break;case "M":case "L":case "T":case "S":case "Q":case "C":for(q=
0;q<k;q++)l=$V([parseFloat(g[a+2*q+1]),parseFloat(g[a+2*q+2]),1]),t(c,l,b,j,d);break;case "A":d.push(g[a+1],g[a+2],g[a+3],g[a+4],g[a+5]),l=$V([parseFloat(g[a+6]),parseFloat(g[a+7]),1]),t(c,l,b,j,d)}a+=1+2*k;k=n;q=l}j=void 0}else{g=[];d=a.split(",");for(a=0;a<d.length;a+=2)l=$V([parseInt(jQuery.trim(d[a])),parseInt(jQuery.trim(d[a+1])),1]),t(c,l,b,j,g),m(c.e(1,1));j=g.join(",")}m(e)}else m("Sylvester.js is needed for scaling clip. Transformation aborted.");h.attr("data-polyclip-transformcoords",j).attr("data-polyclip-transformorigin",
f+","+p).each(drawShape);return h};h.transformClip=function(c,b,e,f){c=c.jquery?c:jQuery(c);h.clipImage(c,c.attr("data-polyclip"),b,e,f)};drawShape=function(c,b){var e=jQuery(b),f=jQuery.trim(e.attr("data-polyclip")),p=jQuery.trim(e.attr("data-polyclip-transformcoords")),v=e.attr("data-polyclip-transformorigin").split(",");parseFloat(v[0]);parseFloat(v[1]);var j=p||f,a,g,l,d;a=b.src;var q,k=b.id?b.id:"polyClip"+c,n=e,m,s,t=(h.useSVGGlobally||"SVG"==b.getAttribute("data-polyclip-clippreference")||
"SVG"==b.nodeName.toUpperCase())&&C,u;q=[];if(0==j.indexOf("path:"))l=j.substr(5);else{g=j.split(",");for(j=0;j<g.length;j+=2){var x=parseInt(jQuery.trim(g[j])),y=parseInt(jQuery.trim(g[j+1]));q.push(x+","+y+" ")}}if(t||l)u='width="'+b.offsetWidth+'" height="'+b.offsetHeight+'"',u='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="'+k+'" class="polyClip-clipped"  xmlns:xlink="http://www.w3.org/1999/xlink" '+u+'><defs><pattern id="polyClip-img-for-'+k+'" patternUnits="userSpaceOnUse" '+u+'><image xlink:href="'+
a+'" x="0" y="0" '+u+"/></pattern></defs>",u=l?u+('<path id="polyClip-poly-for-'+k+'" d="'+l+'" style="fill:url(\'#polyClip-img-for-'+k+"');\" /></svg>"):u+('<polygon id="polyClip-poly-for-'+k+'" points="'+q.join()+'" style="fill:url(\'#polyClip-img-for-'+k+"');\" /></svg>");switch(b.nodeName.toUpperCase()){case "IMG":m=b.offsetWidth;s=b.offsetHeight;if(t)m=(new DOMParser).parseFromString(u,"application/xml"),importNode=b.ownerDocument.importNode(m.documentElement,!0),e.attr("id","").replaceWith(importNode),
e=jQuery(importNode),e.attr("data-polyclip",f).attr("data-polyclip-transformcoords",p).attr("data-polyclip-transformorigin",v).attr("data-polyclip-transformoriginy",v),h.polygonCache[k]=jQuery("#polyClip-poly-for-"+k,e).get(0),m=b.offsetWidth,s=b.offsetHeight,n=e;else{var r=document.createElement("canvas"),n=jQuery(r);d=e.attr("data-polyclip-width");r.width=d?parseInt(d):m;d=e.attr("data-polyclip-height");r.height=d?parseInt(d):s;r.id=k;n.attr("data-polyclip",f).attr("data-polyclip-transformcoords",
p).attr("data-polyclip-transformorigin",v).attr("data-src",a).addClass("polyClip-clipped");e.replaceWith(r);h.isOldIE&&G_vmlCanvasManager.initElement(r);d=r.getContext("2d");F[k]=d;jQuery(window).trigger("resize");f=n.css("pointer-events");h.polygonCache[k]={ctx:d,imageData:d.getImageData?d.getImageData(0,0,r.width,r.height).data:null,pointerEventCSS:f?f.toLowerCase():null}}break;case "SVG":l?h.polygonCache[k].setAttribute("d",l):h.polygonCache[k].setAttribute("points",q.join());break;case "CANVAS":r=
b,a=e.attr("data-src"),d=F[k]}if(!t){w[r.id]=[];d.save();d.clearRect(0,0,r.width,r.height);if(l)d.drawSvg(u,0,0,m,s);else{d.beginPath();for(j=0;j<g.length;j+=2)x=parseInt(jQuery.trim(g[j])),y=parseInt(jQuery.trim(g[j+1])),w[r.id].push({x:x,y:y}),0==j?d.moveTo(x,y):d.lineTo(x,y);d.closePath()}h.isOldIE?(d.fillStyle="",d.fill(),g=jQuery("fill",r).get(0),l=jQuery("shape",r).get(0),g.color="none",l.fillcolor="none",g.src=a,g.type="tile",g.alignShape=!1):(a=d.createPattern(A[a],"repeat"),d.fillStyle=a,
d.fill());d.restore();f=n.css("pointer-events");h.polygonCache[k]={ctx:d,imageData:d.getImageData?d.getImageData(0,0,r.width,r.height).data:null,pointerEventCSS:f?f.toLowerCase():null}}return n};h.findObject=function(c){var b=c.currentTarget;if(jQuery(b).hasClass("cropParent"))return jQuery(b);for(var e in w)if(w.hasOwnProperty(e)&&(b=jQuery("#"+e),h.isInPolygon(b,c.pageX,c.pageY,!0)))return b};h.isInPolygon=function(c,b,e,f){var h=c.get(0),h=w[h.id],m=h.length,j,a,g,l,d,q,k=!1,n={left:0,top:0};f&&
(n=c.offset());if(3>m)return!1;j=h[m-1].x+n.left;a=h[m-1].y+n.top;for(q=0;q<m;q++)c=h[q].x+n.left,f=h[q].y+n.top,c>j?(g=j,d=c,l=a,a=f):(g=c,d=j,l=f),c<b==b<=j&&(e-l)*(d-g)<(a-l)*(b-g)&&(k=!k),j=c,a=f;return k};h.addCallback=function(c){B.push(c)};h.runCallbacks=function(){m("Cached all images.  Running callbacks...");for(var c=0;c<B.length;c++)B[c]()};if(window.$M)var D=new function(){function c(a){var b=parseFloat(a),c=a.match(e);"0"==jQuery.trim(a)&&(b=0,c="rad");if(1!=c.length||0==b)return 0;c=
c[0];switch(c){case "deg":a=b*Math.PI/180;break;case "rad":a=b;break;default:throw"Not an angle: "+a;}return a}var b=this,e=/[a-z]+$/,f=/[a-zA-Z]+\([^\)]*\)\s*/g,h=/\(/g,s=/\)/g,j=/,/g;b.identity=$M([[1,0,0],[0,1,0],[0,0,1]]);b.prettyPrint=function(a){return StringHelpers.sprintf("| %s %s %s | - | %s %s %s | - |%s %s %s|",a.e(1,1),a.e(1,2),a.e(1,3),a.e(2,1),a.e(2,2),a.e(2,3),a.e(3,1),a.e(3,2),a.e(3,3))};b.rotate=function(a){a=c(a);return Matrix.RotationZ(a)};b.scale=function(a,b){a=parseFloat(a);
b=b?parseFloat(b):a;return $M([[a,0,0],[0,b,0],[0,0,1]])};b.scaleX=function(a){return b.scale(a,1)};b.scaleY=function(a){return b.scale(1,a)};b.skew=function(a,b){var f=c(a),d;d=null!=b?c(b):f;return null!=f&&null!=d?$M([[1,Math.tan(f),0],[Math.tan(d),1,0],[0,0,1]]):null};b.skewX=function(a){return b.skew(a,"0")};b.skewY=function(a){return b.skew("0",a)};b.translate=function(a,b){var c=parseInt(a),d=parseInt(b);return $M([[1,0,c],[0,1,d],[0,0,1]])};b.translateX=function(a){return b.translate(a,0)};
b.translateY=function(a){return b.translate(0,a)};b.matrix=function(a,b,c,d,f,e){return $M([[a,c,parseInt(f)],[b,d,parseInt(e)],[0,0,1]])};b.getTransformationMatrix=function(a,b){m("transformString is "+a);var c=a.match(f);if(b){var d=c.join(" ").replace(/\s*/g," "),e=a.replace(/\s*/g," ");if(d!=e)throw"An invalid transform was given: "+a;}e=D.identity;m("num of transforms "+c.length);for(var k=0;k<c.length;k++){d=c[k];d=d.replace(h,'("').replace(j,'", "').replace(s,'")');try{m("looking up : "+d);
var n=eval("MatrixGenerator."+d),e=e.x(n)}catch(t){if(b){c=d.split("(")[0];n=d.replace(/\"/g,"");if(void 0==D[c])throw"Error: invalid tranform function: "+n;throw"Error: Invalid or missing parameters in function call: "+n;}}}return e}}};document.write('<style type="text/css">img[data-polyclip], img.polyClip { visibility: hidden; } </style>');polyClip.isOldIE?jQuery(window).bind("load",polyClip.init):jQuery(document).ready(polyClip.init);