(function(){function c(a){return a.split("").reverse().join("")}function l(a,b){return a.substring(0,b.length)===b}function q(a,b,d){if((a[b]||a[d])&&a[b]===a[d])throw Error(b);}function m(a,b,d,e,n,h,w,k,A,H,D,g){w=g;var l,s=D="";h&&(g=h(g));if("number"!==typeof g||!isFinite(g))return!1;a&&0===parseFloat(g.toFixed(a))&&(g=0);0>g&&(l=!0,g=Math.abs(g));!1!==a&&(h=g,g=Math.pow(10,a),g=(Math.round(h*g)/g).toFixed(a));g=g.toString();-1!==g.indexOf(".")?(a=g.split("."),h=a[0],d&&(D=d+a[1])):h=g;b&&(h=

c(h).match(/.{1,3}/g),h=c(h.join(c(b))));l&&k&&(s+=k);e&&(s+=e);l&&A&&(s+=A);s=s+h+D;n&&(s+=n);H&&(s=H(s,w));return s}function u(a,b,d,c,e,h,w,k,A,H,D,g){var m;a="";D&&(g=D(g));if(!g||"string"!==typeof g)return!1;k&&l(g,k)&&(g=g.replace(k,""),m=!0);c&&l(g,c)&&(g=g.replace(c,""));A&&l(g,A)&&(g=g.replace(A,""),m=!0);if(c=e)c=g.slice(-1*e.length)===e;c&&(g=g.slice(0,-1*e.length));b&&(g=g.split(b).join(""));d&&(g=g.replace(d,"."));m&&(a+="-");a=(a+g).replace(/[^0-9\.\-.]/g,"");if(""===a)return!1;a=Number(a);

w&&(a=w(a));return"number"===typeof a&&isFinite(a)?a:!1}function a(a){var b,d,c,n={};for(b=0;b<e.length;b+=1)if(d=e[b],c=a[d],void 0===c)n[d]="negative"!==d||n.negativeBefore?"mark"===d&&"."!==n.thousand?".":!1:"-";else if("decimals"===d)if(0<=c&&8>c)n[d]=c;else throw Error(d);else if("encoder"===d||"decoder"===d||"edit"===d||"undo"===d)if("function"===typeof c)n[d]=c;else throw Error(d);else if("string"===typeof c)n[d]=c;else throw Error(d);q(n,"mark","thousand");q(n,"prefix","negative");q(n,"prefix",

"negativeBefore");return n}function b(a,b,d){var c,n=[];for(c=0;c<e.length;c+=1)n.push(a[e[c]]);n.push(d);return b.apply("",n)}function d(c){if(!(this instanceof d))return new d(c);"object"===typeof c&&(c=a(c),this.to=function(a){return b(c,m,a)},this.from=function(a){return b(c,u,a)})}var e="decimals thousand mark prefix postfix encoder decoder negativeBefore negative edit undo".split(" ");window.wNumb=d})();(function(c){function l(a){return a instanceof c||c.zepto&&c.zepto.isZ(a)}function q(a,b,d){var e=this,f=!1;this.changeHandler=function(a){var b=e.formatInstance.from(c(this).val());if(!1===b||isNaN(b))return c(this).val(e.lastSetValue),!1;e.changeHandlerMethod.call("",a,b)};this.el=!1;this.formatInstance=d;c.each(u,function(d,c){f=c.call(e,a,b);return!f});if(!f)throw new RangeError("(Link) Invalid Link.");}function m(a){this.items=[];this.elements=[];this.origin=a}var u=[function(a,b){if("string"===

typeof a&&0===a.indexOf("-inline-"))return this.method=b||"html",this.target=this.el=c(a.replace("-inline-","")||"<div/>"),!0},function(a){if("string"===typeof a&&0!==a.indexOf("-")){this.method="val";var b=document.createElement("input");b.name=a;b.type="hidden";this.target=this.el=c(b);return!0}},function(a){if("function"===typeof a)return this.target=!1,this.method=a,!0},function(a,b){if(l(a)&&!b)return a.is("input, select, textarea")?(this.method="val",this.target=a.on("change.liblink",this.changeHandler)):

(this.target=a,this.method="html"),!0},function(a,b){if(l(a)&&("function"===typeof b||"string"===typeof b&&a[b]))return this.method=b,this.target=a,!0}];q.prototype.set=function(a){var b=Array.prototype.slice.call(arguments).slice(1);this.lastSetValue=this.formatInstance.to(a);b.unshift(this.lastSetValue);("function"===typeof this.method?this.method:this.target[this.method]).apply(this.target,b)};m.prototype.push=function(a,b){this.items.push(a);b&&this.elements.push(b)};m.prototype.reconfirm=function(a){var b;

for(b=0;b<this.elements.length;b+=1)this.origin.LinkConfirm(a,this.elements[b])};m.prototype.remove=function(a){for(a=0;a<this.items.length;a+=1)this.items[a].target.off(".liblink");for(a=0;a<this.elements.length;a+=1)this.elements[a].remove()};m.prototype.change=function(a){if(this.origin.LinkIsEmitting)return!1;this.origin.LinkIsEmitting=!0;var b=Array.prototype.slice.call(arguments,1),d;b.unshift(a);for(d=0;d<this.items.length;d+=1)this.items[d].set.apply(this.items[d],b);this.origin.LinkIsEmitting=

!1};c.fn.Link=function(a){var b=this;if(!1===a)return b.each(function(){this.linkAPI&&(c.map(this.linkAPI,function(a){a.remove()}),delete this.linkAPI)});if(void 0===a)a=0;else if("string"!==typeof a)throw Error("Flag must be string.");return{to:function(d,e,f){return b.each(function(){var b=a;0===b&&(b=this.LinkDefaultFlag);this.linkAPI||(this.linkAPI={});this.linkAPI[b]||(this.linkAPI[b]=new m(this));var p=new q(d,e,f||this.LinkDefaultFormatter);p.target||(p.target=c(this));p.changeHandlerMethod=

this.LinkConfirm(b,p.el);this.linkAPI[b].push(p,p.el);this.LinkUpdate(b)})}}}})(window.jQuery||window.Zepto);(function(c){function l(a){return"number"===typeof a&&!isNaN(a)&&isFinite(a)}function q(a,b){return 100*b/(a[1]-a[0])}function m(a,b){for(var d=1;a>=b[d];)d+=1;return d}function u(a,b,d,c){this.xPct=[];this.xVal=[];this.xSteps=[c||!1];this.xNumSteps=[!1];this.snap=b;this.direction=d;for(var f in a)if(a.hasOwnProperty(f)){b=f;d=a[f];c=void 0;"number"===typeof d&&(d=[d]);if("[object Array]"!==Object.prototype.toString.call(d))throw Error("noUiSlider: 'range' contains invalid value.");c="min"===b?0:

"max"===b?100:parseFloat(b);if(!l(c)||!l(d[0]))throw Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(c);this.xVal.push(d[0]);c?this.xSteps.push(isNaN(d[1])?!1:d[1]):isNaN(d[1])||(this.xSteps[0]=d[1])}this.xNumSteps=this.xSteps.slice(0);for(f in this.xNumSteps)this.xNumSteps.hasOwnProperty(f)&&(a=Number(f),(b=this.xNumSteps[f])&&(this.xSteps[a]=q([this.xVal[a],this.xVal[a+1]],b)/(100/(this.xPct[a+1]-this.xPct[a]))))}u.prototype.getMargin=function(a){return 2===this.xPct.length?q(this.xVal,

a):!1};u.prototype.toStepping=function(a){var b=this.xVal,c=this.xPct;if(a>=b.slice(-1)[0])a=100;else{var e=m(a,b),f,l;f=b[e-1];l=b[e];b=c[e-1];c=c[e];f=[f,l];a=q(f,0>f[0]?a+Math.abs(f[0]):a-f[0]);a=b+a/(100/(c-b))}this.direction&&(a=100-a);return a};u.prototype.fromStepping=function(a){this.direction&&(a=100-a);var b;var c=this.xVal;b=this.xPct;if(100<=a)b=c.slice(-1)[0];else{var e=m(a,b),f,l;f=c[e-1];l=c[e];c=b[e-1];f=[f,l];b=100/(b[e]-c)*(a-c)*(f[1]-f[0])/100+f[0]}a=Math.pow(10,7);return Number((Math.round(b*

a)/a).toFixed(7))};u.prototype.getStep=function(a){this.direction&&(a=100-a);var b=this.xPct,c=this.xSteps,e=this.snap;if(100!==a){var f=m(a,b);e?(c=b[f-1],b=b[f],a=a-c>(b-c)/2?b:c):(c[f-1]?(e=b[f-1],c=c[f-1],b=Math.round((a-b[f-1])/c)*c,b=e+b):b=a,a=b)}this.direction&&(a=100-a);return a};u.prototype.getApplicableStep=function(a){var b=m(a,this.xPct);a=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-a],this.xNumSteps[b-a]]};u.prototype.convert=function(a){return this.getStep(this.toStepping(a))};

c.noUiSlider={Spectrum:u}})(window.jQuery||window.Zepto);(function(c){function l(a){return"number"===typeof a&&!isNaN(a)&&isFinite(a)}function q(a,b){if(!l(b))throw Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function m(a,b){if("object"!==typeof b||c.isArray(b))throw Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");a.spectrum=new c.noUiSlider.Spectrum(b,a.snap,a.dir,a.singleStep)}function u(a,b){var d=b;b=c.isArray(d)?d:[d];if(!c.isArray(b)||!b.length||

2<b.length)throw Error("noUiSlider: 'start' option is incorrect.");a.handles=b.length;a.start=b}function a(a,b){a.snap=b;if("boolean"!==typeof b)throw Error("noUiSlider: 'snap' option must be a boolean.");}function b(a,b){a.animate=b;if("boolean"!==typeof b)throw Error("noUiSlider: 'animate' option must be a boolean.");}function d(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(!0===b&&2===a.handles)a.connect=3;else if(!1===b)a.connect=0;else throw Error("noUiSlider: 'connect' option doesn't match handle count.");

}function e(a,b){switch(b){case "horizontal":a.ort=0;break;case "vertical":a.ort=1;break;default:throw Error("noUiSlider: 'orientation' option is invalid.");}}function f(a,b){if(!l(b))throw Error("noUiSlider: 'margin' option must be numeric.");a.margin=a.spectrum.getMargin(b);if(!a.margin)throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");}function z(a,b){if(!l(b))throw Error("noUiSlider: 'limit' option must be numeric.");a.limit=a.spectrum.getMargin(b);if(!a.limit)throw Error("noUiSlider: 'limit' option is only supported on linear sliders.");

}function p(a,b){switch(b){case "ltr":a.dir=0;break;case "rtl":a.dir=1;a.connect=[0,2,1,3][a.connect];break;default:throw Error("noUiSlider: 'direction' option was not recognized.");}}function r(a,b){if("string"!==typeof b)throw Error("noUiSlider: 'behaviour' must be a string containing options.");var c=0<=b.indexOf("tap"),d=0<=b.indexOf("drag"),h=0<=b.indexOf("fixed"),e=0<=b.indexOf("snap");a.events={tap:c||e,drag:d,fixed:h,snap:e}}function n(a,b){a.format=b;if("function"===typeof b.to&&"function"===

typeof b.from)return!0;throw Error("noUiSlider: 'format' requires 'to' and 'from' methods.");}var h={to:function(a){return a.toFixed(2)},from:Number};c.noUiSlider.testOptions=function(w){var k={margin:0,limit:0,animate:!0,format:h},A;A={step:{r:!1,t:q},start:{r:!0,t:u},connect:{r:!0,t:d},direction:{r:!0,t:p},snap:{r:!1,t:a},animate:{r:!1,t:b},range:{r:!0,t:m},orientation:{r:!1,t:e},margin:{r:!1,t:f},limit:{r:!1,t:z},behaviour:{r:!0,t:r},format:{r:!1,t:n}};w=c.extend({connect:!1,direction:"ltr",behaviour:"tap",

orientation:"horizontal"},w);c.each(A,function(a,b){if(void 0===w[a]){if(b.r)throw Error("noUiSlider: '"+a+"' is required.");return!0}b.t(k,w[a])});k.style=k.ort?"top":"left";return k}})(window.jQuery||window.Zepto);(function(c){function l(a){return Math.max(Math.min(a,100),0)}function q(a,b,c){a.addClass(b);setTimeout(function(){a.removeClass(b)},c)}function m(a,b){var d=c("<div><div/></div>").addClass(h[2]),e=["-lower","-upper"];a&&e.reverse();d.children().addClass(h[3]+" "+h[3]+e[b]);return d}function u(a,b,c){switch(a){case 1:b.addClass(h[7]);c[0].addClass(h[6]);break;case 3:c[1].addClass(h[6]);case 2:c[0].addClass(h[7]);case 0:b.addClass(h[6])}}function a(a,b,c){var d,e=[];for(d=0;d<a;d+=1)e.push(m(b,d).appendTo(c));

return e}function b(a,b,d){d.addClass([h[0],h[8+a],h[4+b]].join(" "));return c("<div/>").appendTo(d).addClass(h[1])}function d(d,k,e){function f(){return B[["width","height"][k.ort]]()}function m(a){var b,c=[v.val()];for(b=0;b<a.length;b+=1)v.trigger(a[b],c)}function g(a){return 1===a.length?a[0]:k.dir?a.reverse():a}function r(a){return function(b,c){v.val([a?null:c,a?c:null],!0)}}function s(a){var b=c.inArray(a,C);v[0].linkAPI&&v[0].linkAPI[a]&&v[0].linkAPI[a].change(F[b],t[b].children(),v)}function z(a,

b,c){var d=a[0]!==t[0][0]?1:0,e=y[0]+k.margin,f=y[1]-k.margin,g=y[0]+k.limit,n=y[1]-k.limit;1<t.length&&(b=d?Math.max(b,e):Math.min(b,f));!1!==c&&k.limit&&1<t.length&&(b=d?Math.min(b,g):Math.max(b,n));b=E.getStep(b);b=l(parseFloat(b.toFixed(7)));if(b===y[d])return!1;a.css(k.style,b+"%");a.is(":first-child")&&a.toggleClass(h[17],50<b);y[d]=b;F[d]=E.fromStepping(b);s(C[d]);return!0}function x(a,b,c,d){a=a.replace(/\s/g,".nui ")+".nui";return b.on(a,function(a){if(v.attr("disabled")||v.hasClass(h[14]))return!1;

a.preventDefault();var b=0===a.type.indexOf("touch"),e=0===a.type.indexOf("mouse"),f=0===a.type.indexOf("pointer"),g,J,I=a;0===a.type.indexOf("MSPointer")&&(f=!0);a.originalEvent&&(a=a.originalEvent);b&&(g=a.changedTouches[0].pageX,J=a.changedTouches[0].pageY);if(e||f)f||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),g=a.clientX+window.pageXOffset,J=a.clientY+window.pageYOffset;I.points=[g,J];I.cursor=e;a=

I;a.calcPoint=a.points[k.ort];c(a,d)})}function G(a,b){var c=b.handles||t,d,e=!1,e=100*(a.calcPoint-b.start)/f(),k=c[0][0]!==t[0][0]?1:0;var h=b.positions;d=e+h[0];e+=h[1];1<c.length?(0>d&&(e+=Math.abs(d)),100<e&&(d-=e-100),d=[l(d),l(e)]):d=[d,e];e=z(c[0],d[k],1===c.length);1<c.length&&(e=z(c[1],d[k?0:1],!1)||e);e&&m(["slide"])}function L(a){c("."+h[15]).removeClass(h[15]);a.cursor&&c("body").css("cursor","").off(".nui");p.off(".nui");v.removeClass(h[12]);m(["set","change"])}function K(a,b){1===b.handles.length&&

b.handles[0].children().addClass(h[15]);a.stopPropagation();x(n.move,p,G,{start:a.calcPoint,handles:b.handles,positions:[y[0],y[t.length-1]]});x(n.end,p,L,null);a.cursor&&(c("body").css("cursor",c(a.target).css("cursor")),1<t.length&&v.addClass(h[12]),c("body").on("selectstart.nui",!1))}function M(a){var b=a.calcPoint,d=0;a.stopPropagation();c.each(t,function(){d+=this.offset()[k.style]});d=b<d/2||1===t.length?0:1;b-=B.offset()[k.style];b=100*b/f();k.events.snap||q(v,h[14],300);z(t[d],b);m(["slide",

"set","change"]);k.events.snap&&K(a,{handles:[t[d]]})}var v=c(d),y=[-1,-1],B,t,E=k.spectrum,F=[],C=["lower","upper"].slice(0,k.handles);k.dir&&C.reverse();d.LinkUpdate=s;d.LinkConfirm=function(a,b){var d=c.inArray(a,C);b&&b.appendTo(t[d].children());k.dir&&(d=1===d?0:1);return r(d)};d.LinkDefaultFormatter=k.format;d.LinkDefaultFlag="lower";d.reappend=function(){var a,b;for(a=0;a<C.length;a+=1)this.linkAPI&&this.linkAPI[b=C[a]]&&this.linkAPI[b].reconfirm(b)};if(v.hasClass(h[0]))throw Error("Slider was already initialized.");

B=b(k.dir,k.ort,v);t=a(k.handles,k.dir,B);u(k.connect,v,t);(function(a){var b;if(!a.fixed)for(b=0;b<t.length;b+=1)x(n.start,t[b].children(),K,{handles:[t[b]]});a.tap&&x(n.start,B,M,{handles:t});a.drag&&(b=B.find("."+h[7]).addClass(h[10]),a.fixed&&(b=b.add(B.children().not(b).children())),x(n.start,b,K,{handles:t}))})(k.events);d.vSet=function(a){if(v[0].LinkIsEmitting)return this;var b;a=c.isArray(a)?a:[a];k.dir&&1<k.handles&&a.reverse();k.animate&&-1!==y[0]&&q(v,h[14],300);b=1<t.length?3:1;1===a.length&&

(b=1);var d,e,f;k.limit&&(b+=1);for(d=0;d<b;d+=1)e=d%2,f=a[e],null!==f&&!1!==f&&("number"===typeof f&&(f=String(f)),f=k.format.from(f),(!1===f||isNaN(f)||!1===z(t[e],E.toStepping(f),d===3-k.dir))&&s(C[e]));m(["set"]);return this};d.vGet=function(){var a,b=[];for(a=0;a<k.handles;a+=1)b[a]=k.format.to(F[a]);return g(b)};d.destroy=function(){c(this).off(".nui").removeClass(h.join(" ")).empty();delete this.LinkUpdate;delete this.LinkConfirm;delete this.LinkDefaultFormatter;delete this.LinkDefaultFlag;

delete this.reappend;delete this.vGet;delete this.vSet;delete this.getCurrentStep;delete this.getInfo;delete this.destroy;return e};d.getCurrentStep=function(){var a=c.map(y,function(a,b){var c=E.getApplicableStep(a);return[[F[b]-c[2]>=c[1]?c[2]:c[0],c[2]]]});return g(a)};d.getInfo=function(){return[E,k.style,k.ort]};v.val(k.start)}function e(a){if(!this.length)throw Error("noUiSlider: Can't initialize slider on empty selection.");var b=c.noUiSlider.testOptions(a,this);return this.each(function(){d(this,

b,a)})}function f(a){return this.each(function(){if(this.destroy){var b=c(this).val(),d=this.destroy(),e=c.extend({},d,a);c(this).noUiSlider(e);this.reappend();d.start===e.start&&c(this).val(b)}else c(this).noUiSlider(a)})}function z(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}var p=c(document),r=c.fn.val,n=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",

end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},h="noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active  noUi-stacking".split(" ");c.fn.val=function(){var a=arguments,b=c(this[0]);return arguments.length?this.each(function(){(c(this).hasClass(h[0])?z:r).apply(c(this),a)}):(b.hasClass(h[0])?z:r).call(b)};c.fn.noUiSlider=

function(a,b){return(b?f:e).call(this,a)}})(window.jQuery||window.Zepto);(function(c){function l(a){return c.grep(a,function(b,d){return d===c.inArray(b,a)})}function q(a,b,d,e){if("range"===b||"steps"===b)return a.xVal;if("count"===b){b=100/(d-1);var f,l=0;for(d=[];100>=(f=l++*b);)d.push(f);b="positions"}if("positions"===b)return c.map(d,function(b){return a.fromStepping(e?a.getStep(b):b)});if("values"===b)return e?c.map(d,function(b){return a.fromStepping(a.getStep(a.toStepping(b)))}):d}function m(a,b,d,e){var f=a.direction,m={},p=a.xVal[0],r=a.xVal[a.xVal.length-1],

n=!1,h=!1,w=0;a.direction=0;e=l(e.slice().sort(function(a,b){return a-b}));e[0]!==p&&(e.unshift(p),n=!0);e[e.length-1]!==r&&(e.push(r),h=!0);c.each(e,function(f){var l,p,r,g=e[f],q=e[f+1],s,u,x,G;"steps"===d&&(l=a.xNumSteps[f]);l||(l=q-g);if(!1!==g&&void 0!==q)for(p=g;p<=q;p+=l){s=a.toStepping(p);r=s-w;x=r/b;x=Math.round(x);G=r/x;for(r=1;r<=x;r+=1)u=w+r*G,m[u.toFixed(5)]=["x",0];x=-1<c.inArray(p,e)?1:"steps"===d?2:0;f||!n||g||(x=0);p===q&&h||(m[s.toFixed(5)]=[p,x]);w=s}});a.direction=f;return m}function u(a,

b,d,e,f){function l(b,c,d){c='class="'+c+" "+c+"-"+p+" "+c;var e=d[1];d=["-normal","-large","-sub"][e&&f?f(d[0],e):e];return c+d+'" style="'+a+": "+b+'%"'}var p=["horizontal","vertical"][b],m=c("<div/>");m.addClass("noUi-pips noUi-pips-"+p);c.each(e,function(a,b){d&&(a=100-a);m.append("<div "+l(a,"noUi-marker",b)+"></div>");b[1]&&m.append("<div "+l(a,"noUi-value",b)+">"+Math.round(b[0])+"</div>")});return m}c.fn.noUiSlider_pips=function(a){var b=a.mode,d=a.density||1,e=a.filter||!1,f=a.values||!1,

l=a.stepped||!1;return this.each(function(){var a=this.getInfo(),r=q(a[0],b,f,l),r=m(a[0],d,b,r);return c(this).append(u(a[1],a[2],a[0].direction,r,e))})}})(window.jQuery||window.Zepto);

jQuery(document).ready(function($) {

'use strict';	

$('.user_rating_slider_criteria').each(function() {
	var directionui = (jQuery('body.rtl').length > 0) ? "rtl" : "ltr";
    $(this).noUiSlider({
		range: {
			  'min': 0,
			  'max': 10
			},
		direction : directionui,
		step: 1,
		start: 0,
		connect: "lower",
	});
	$(this).on({
		set: function(){
			var score_criteria = 0;
			var count_criterias = 0;
			$('.user_rating_slider_criteria').each(function(i) {
				score_criteria += parseInt($(this).val());
				count_criterias ++;
			});
			var average_criteria = Math.round(score_criteria / count_criterias) ;
			$('.your_total_score span').find('.userstar-rating span').css('width', average_criteria*10 + '%');
		}
	});
}); 

$("#user_reviews_in_comment").find(".user_rating_slider_criteria").each(function(i) {
	$(this).on('slide', function(){
		var slidervalue = $(this).val()*10;
		$(".criteria_visible_input"+i).find('.userstar-rating span').css('width', slidervalue + '%');
	});
    $(this).Link('lower').to($(".criteria_hidden_input"+i), null, wNumb({decimals: 0}));
});

$('#user_reviews_in_frontend .rh_front_criteria').each(function(i) {
	var directionui = (jQuery('body.rtl').length > 0) ? "rtl" : "ltr";
	var $this = $(this);
	var criteriascore = $("#criteria_input_"+i).val();
    $(this).noUiSlider({
		range: {
			  'min': 0,
			  'max': 10
			},
		direction : directionui,
		step: 0.5,
		start: criteriascore,
		connect: "lower",
	});
	$(this).on({
		set: function(){
			var score_criteria = 0;
			var count_criterias = 0;
			$('.rh_front_criteria').each(function(i) {
				score_criteria += parseInt($(this).val());
				count_criterias ++;
			});
			var average_criteria = Math.round(score_criteria / count_criterias) ;
			$('.your_total_score span').find('.userstar-rating span').css('width', average_criteria*10 + '%');
		}
	});
	$(this).Link('lower').to($(".criteria_hidden_input"+i), null, wNumb({decimals: 1}));
}); 

});
;function gmwSetCookie(e,t,o){var a=new Date;a.setTime(a.getTime()+24*o*60*60*1e3);var s=escape(encodeURIComponent(t))+(null==o?"":"; expires="+a.toUTCString());document.cookie=e+"="+s+"; path=/"}function gmwGetCookie(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?decodeURIComponent(t[2]):null}function gmwDeleteCookie(e){document.cookie=encodeURIComponent(e)+"=deleted; expires="+new Date(0).toUTCString()}function GmwAutoLocator(e,t){function o(o){var a=new google.maps.Geocoder;a.geocode({latLng:new google.maps.LatLng(o.coords.latitude,o.coords.longitude)},function(o,a){return a==google.maps.GeocoderStatus.OK?(s={status:"success",results:o},e(s)):(s={status:"falied",type:"2",message:a},t(s))})}function a(e){var o;switch(e.code){case e.PERMISSION_DENIED:o="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:o="Location information is unavailable.";break;case 3:o="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:o="An unknown error occurred"}return s={status:"failed",type:"3",message:o},t(s)}var s=!1;return navigator.geolocation?void navigator.geolocation.getCurrentPosition(o,a,{timeout:1e4}):(s={status:"failed",type:"1",message:"Sorry! Geolocation is not supported by this browser."},t(s))}function gmwAddressGeocoder(e,t,o){geocoder=new google.maps.Geocoder,geocoder.geocode({address:e.address,region:e.region},function(e,a){return a==google.maps.GeocoderStatus.OK?t(e):o(a)})}jQuery(document).ready(function(e){function t(e){a(e.results)}function o(t){2==t.type?alert("Geocoder failed due to: "+t.message):alert(t.message),0!=r&&e("#gmw-locator-btn-loader-"+r).fadeToggle("fast",function(){e(".locator-submitted").fadeToggle("fast").removeClass("locator-submitted"),e(".gmw-address").removeAttr("disabled"),e(".gmw-submit").removeAttr("disabled")})}function a(t){var o="",a="",i="",g="",l="",d="",m=t[0].address_components,u=t[0].geometry.location.lat(),c=t[0].geometry.location.lng();gmwSetCookie("gmw_lat",u,7),gmwSetCookie("gmw_lng",c,7),gmwSetCookie("gmw_address",t[0].formatted_address,7),0!=n&&(n.find(".gmw-lat").val(u),n.find(".gmw-lng").val(c));for(x in m)"street_number"==m[x].types&&(o=m[x].long_name,gmwSetCookie("gmw_street_number",o,7)),"route"==m[x].types&&(street_name=m[x].long_name,gmwSetCookie("gmw_street_name",street_name,7),a=0!=o&&""!=o?o+" "+street_name:street_name,gmwSetCookie("gmw_street",a,7)),"administrative_area_level_1,political"==m[x].types&&(g=m[x].short_name,gmwSetCookie("gmw_state",m[x].short_name,7),gmwSetCookie("gmw_state_long",m[x].long_name,7)),"locality,political"==m[x].types&&(i=m[x].short_name,gmwSetCookie("gmw_city",m[x].short_name,7)),"postal_code"==m[x].types&&(l=m[x].short_name,gmwSetCookie("gmw_zipcode",m[x].short_name,7)),"country,political"==m[x].types&&(d=m[x].short_name,gmwSetCookie("gmw_country",m[x].short_name,7),gmwSetCookie("gmw_country_long",m[x].long_name,7));1==s&&location.reload(),e(".locator-submitted")[0]&&(e(".gmw-address").removeAttr("disabled"),e(".gmw-submit").removeAttr("disabled"),n.find(".gmw-address").hasClass("gmw-full-address")?n.find(".gmw-full-address").val(t[0].formatted_address):(n.find(".gmw-saf-street").val(a),n.find(".gmw-saf-city").val(i),n.find(".gmw-saf-state").val(g),n.find(".gmw-saf-zipcode").val(l),n.find(".gmw-saf-country").val(d)),n.find(".gmw-submit").toggleClass("submitted"),n.find(".gmw-lat").val(u),n.find(".gmw-lng").val(c),e("#"+r).hasClass("gmw-locator-submit")?setTimeout(function(){e(".gmw-locator-btn-loader-"+r).fadeToggle("fast",function(){locatorButton.fadeToggle("fast")}),n.find(".gmw-submit").click()},1500):e("#gmw-locator-btn-loader-"+r).fadeToggle("fast",function(){e(".locator-submitted").fadeToggle("fast").removeClass("locator-submitted")}))}e(".gmw-map-loader").fadeOut(1500),jQuery().chosen&&e(".gmw-chosen").chosen(),navigator.geolocation||e(".gmw-locator-btn-wrapper").hide(),e(".gmw-address").focus(function(){e(this).hasClass("gmw-no-address-error")&&e(this).removeClass("gmw-no-address-error")}),e(".gmw-submit").click(function(t){var o=e(t.target);o.is("input")||e(this).closest("form").submit()}),e(".gmw-form input[type='text']").keyup(function(t){13==t.keyCode&&e(this).closest("form").submit()}),e(".gmw-address").keyup(function(){e(this).closest("form").find(".gmw-lat").val(""),e(this).closest("form").find(".gmw-lng").val("")}),jQuery(".gmw-per-page").change(function(){thisValue=jQuery(this).val(),ppValues=jQuery(this).next(),formID=ppValues.attr("data-formid"),totalResults=ppValues.attr("data-totalcount"),paged=ppValues.attr("data-paged"),pageName=ppValues.attr("data-pagename"),urlPx=ppValues.attr("data-urlpx"),gmwPost=ppValues.attr("data-gmwpost"),perPage=ppValues.attr("data-perpage"),lastPage=Math.ceil(totalResults/thisValue),newPaged=paged>lastPage||1==lastPage?lastPage:paged,0==gmwPost?window.location.href=window.location.href+"?"+urlPx+"auto=auto&"+urlPx+"per_page="+thisValue+"&"+urlPx+"form="+formID+"&"+pageName+"="+newPaged:window.location.href=location.href.replace(urlPx+"per_page="+perPage,urlPx+"per_page="+thisValue).replace("&page="+paged,"&"+pageName+"="+newPaged)}),e(".gmw-form").submit(function(t){var o,a=e(this);if(a.find(".gmw-paged").val("1"),a.find(".gmw-address").hasClass("gmw-full-address")?o=a.find(".gmw-full-address").val():(o=[],a.find(".gmw-address").each(function(){o.push(e(this).val())}),o=o.join(" ")),!e.trim(o).length){var s=a.find(".gmw-address");if(s.hasClass("mandatory"))return s.hasClass("gmw-no-address-error")||s.toggleClass("gmw-no-address-error"),!1;a.find(".gmw-submit").addClass("submitted")}return 1!=gmwSettings.general_settings.js_geocode?!0:""!=a.find(".gmw-lat").val()&&""!=a.find(".gmw-lng").val()?!0:a.find(".gmw-submit").hasClass("submitted")?!0:(t.preventDefault(),geocoder=new google.maps.Geocoder,countryCode=gmwSettings.general_settings.country_code,void geocoder.geocode({address:o,region:countryCode},function(e,t){t==google.maps.GeocoderStatus.OK?(a.find(".gmw-submit").addClass("submitted"),a.find(".gmw-lat").val(e[0].geometry.location.lat()),a.find(".gmw-lng").val(e[0].geometry.location.lng()),setTimeout(function(){a.submit()},500)):alert("We could not find the address you entered for the following reason: "+t)}))});var s=!1,n=!1,r=!1;1==gmwSettings.general_settings.auto_locate&&1!=gmwGetCookie("gmw_autolocate")&&(gmwSetCookie("gmw_autolocate",1,1),s=!0,GmwAutoLocator(t,o)),e(".gmw-locate-btn").click(function(){r=e(this).closest("form").find(".gmw-form-id").val(),locatorButton=e(this),n=e(this).closest("form"),n.find(".gmw-lat").val(""),n.find(".gmw-lng").val(""),e(this).toggleClass("locator-submitted"),locatorButton.fadeToggle("fast",function(){e("#gmw-locator-btn-loader-"+r).fadeToggle("fast",function(){e(".gmw-address").attr("disabled","disabled"),e(".gmw-submit").attr("disabled","disabled"),GmwAutoLocator(t,o)})})})});