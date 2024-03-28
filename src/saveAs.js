/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
export var saveAs=function(t){"use strict";if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,n=function(){return t.URL||t.webkitURL||t},o=e.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,a=/constructor/i.test(t.HTMLElement)||t.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),c=function(e){(t.setImmediate||t.setTimeout)((function(){throw e}),0)},f=function(t){setTimeout((function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()}),4e4)},d=function(t,e,n){for(var o=(e=[].concat(e)).length;o--;){var r=t["on"+e[o]];if("function"==typeof r)try{r.call(t,n||t)}catch(t){c(t)}}},u=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},s=function(e,c,s){s||(e=u(e));var l,p=this,v="application/octet-stream"===e.type,w=function(){d(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,r)return l=n().createObjectURL(e),void setTimeout((function(){o.href=l,o.download=c,function(t){var e=new MouseEvent("click");t.dispatchEvent(e)}(o),w(),f(l),p.readyState=p.DONE}));!function(){if((i||v&&a)&&t.FileReader){var o=new FileReader;return o.onloadend=function(){var e=i?o.result:o.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=void 0,p.readyState=p.DONE,w()},o.readAsDataURL(e),void(p.readyState=p.INIT)}(l||(l=n().createObjectURL(e)),v)?t.location.href=l:t.open(l,"_blank")||(t.location.href=l);p.readyState=p.DONE,w(),f(l)}()},l=s.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=u(t)),navigator.msSaveOrOpenBlob(t,e)}:(l.abort=function(){},l.readyState=l.INIT=0,l.WRITING=1,l.DONE=2,l.error=l.onwritestart=l.onprogress=l.onwrite=l.onabort=l.onerror=l.onwriteend=null,function(t,e,n){return new s(t,e||t.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window);