!function(){let e,t,r,n,o,i;function a(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var s,l,u,c,f,d,p,h,m,g,v,y,b,x,w,S,_,E,A,M,C,T,P,O,R,L,N,D,F,I,U,z,k,B,j,$,V,G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function q(e){return e&&e.__esModule?e.default:e}var H={},W={},X=G.parcelRequire38c1;null==X&&((X=function(e){if(e in H)return H[e].exports;if(e in W){var t=W[e];delete W[e];var r={id:e,exports:{}};return H[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){W[e]=t},G.parcelRequire38c1=X),X.register("gm67B",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Sha1=void 0;var r=X("5z9Uh"),n=X("l6bE3"),o=X("kPffy"),i=X("hzSL5"),a=X("luDhA"),s=X("kZO5e"),l=/** @class */function(){function e(e){if((0,o.supportsWebCrypto)((0,a.locateWindow)()))this.hash=new n.Sha1(e);else if((0,i.isMsWindow)((0,a.locateWindow)()))this.hash=new r.Sha1(e);else throw Error("SHA1 not supported")}return e.prototype.update=function(e,t){this.hash.update((0,s.convertToBuffer)(e))},e.prototype.digest=function(){return this.hash.digest()},e.prototype.reset=function(){this.hash.reset()},e}();e.exports.Sha1=l}),X.register("5z9Uh",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Sha1=void 0;var r=X("e1G4Y"),n=X("5LNfI"),o=X("hOBaX"),i=X("luDhA"),a=/** @class */function(){function e(e){this.secret=e,this.reset()}return e.prototype.update=function(e){var t=this;(0,r.isEmptyData)(e)||(this.operation=this.operation.then(function(r){return r.onerror=function(){t.operation=Promise.reject(Error("Error encountered updating hash"))},r.process(s(e)),r}),this.operation.catch(function(){}))},e.prototype.digest=function(){return this.operation.then(function(e){return new Promise(function(t,r){e.onerror=function(){r(Error("Error encountered finalizing hash"))},e.oncomplete=function(){e.result&&t(new Uint8Array(e.result)),r(Error("Error encountered finalizing hash"))},e.finish()})})},e.prototype.reset=function(){var e;this.secret?(this.operation=(e=this.secret,new Promise(function(t,r){var o=(0,i.locateWindow)().msCrypto.subtle.importKey("raw",s(e),n.SHA_1_HMAC_ALGO,!1,["sign"]);o.oncomplete=function(){o.result&&t(o.result),r(Error("ImportKey completed without importing key."))},o.onerror=function(){r(Error("ImportKey failed to import key."))}})).then(function(e){return(0,i.locateWindow)().msCrypto.subtle.sign(n.SHA_1_HMAC_ALGO,e)}),this.operation.catch(function(){})):this.operation=Promise.resolve((0,i.locateWindow)().msCrypto.subtle.digest("SHA-1"))},e}();function s(e){return"string"==typeof e?(0,o.fromUtf8)(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}e.exports.Sha1=a}),X.register("e1G4Y",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.isEmptyData=void 0,e.exports.isEmptyData=function(e){return"string"==typeof e?0===e.length:0===e.byteLength}}),X.register("5LNfI",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.EMPTY_DATA_SHA_1=e.exports.SHA_1_HMAC_ALGO=e.exports.SHA_1_HASH=void 0,e.exports.SHA_1_HASH={name:"SHA-1"},e.exports.SHA_1_HMAC_ALGO={name:"HMAC",hash:e.exports.SHA_1_HASH},e.exports.EMPTY_DATA_SHA_1=new Uint8Array([218,57,163,238,94,107,75,13,50,85,191,239,149,96,24,144,175,216,7,9])}),X.register("hOBaX",function(e,t){a(e.exports,"fromUtf8",function(){return o});var r=X("lBia6"),n=X("eLXnn");let o=e=>"function"==typeof TextEncoder?(0,n.fromUtf8)(e):(0,r.fromUtf8)(e)}),X.register("lBia6",function(e,t){a(e.exports,"fromUtf8",function(){return r}),a(e.exports,"toUtf8",function(){return n});let r=e=>{let t=[];for(let r=0,n=e.length;r<n;r++){let n=e.charCodeAt(r);if(n<128)t.push(n);else if(n<2048)t.push(n>>6|192,63&n|128);else if(r+1<e.length&&(64512&n)==55296&&(64512&e.charCodeAt(r+1))==56320){let o=65536+((1023&n)<<10)+(1023&e.charCodeAt(++r));t.push(o>>18|240,o>>12&63|128,o>>6&63|128,63&o|128)}else t.push(n>>12|224,n>>6&63|128,63&n|128)}return Uint8Array.from(t)},n=e=>{let t="";for(let r=0,n=e.length;r<n;r++){let n=e[r];if(n<128)t+=String.fromCharCode(n);else if(192<=n&&n<224){let o=e[++r];t+=String.fromCharCode((31&n)<<6|63&o)}else if(240<=n&&n<365){let o=[n,e[++r],e[++r],e[++r]],i="%"+o.map(e=>e.toString(16)).join("%");t+=decodeURIComponent(i)}else t+=String.fromCharCode((15&n)<<12|(63&e[++r])<<6|63&e[++r])}return t}}),X.register("eLXnn",function(e,t){function r(e){return new TextEncoder().encode(e)}function n(e){return new TextDecoder("utf-8").decode(e)}a(e.exports,"fromUtf8",function(){return r}),a(e.exports,"toUtf8",function(){return n})}),X.register("luDhA",function(e,t){a(e.exports,"locateWindow",function(){return n});let r={};function n(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:r}}),X.register("l6bE3",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Sha1=void 0;var r=X("hOBaX"),n=X("e1G4Y"),o=X("5LNfI"),i=X("luDhA"),a=/** @class */function(){function e(e){this.toHash=new Uint8Array(0),void 0!==e&&(this.key=new Promise(function(t,r){(0,i.locateWindow)().crypto.subtle.importKey("raw",s(e),o.SHA_1_HMAC_ALGO,!1,["sign"]).then(t,r)}),this.key.catch(function(){}))}return e.prototype.update=function(e){if(!(0,n.isEmptyData)(e)){var t=s(e),r=new Uint8Array(this.toHash.byteLength+t.byteLength);r.set(this.toHash,0),r.set(t,this.toHash.byteLength),this.toHash=r}},e.prototype.digest=function(){var e=this;return this.key?this.key.then(function(t){return(0,i.locateWindow)().crypto.subtle.sign(o.SHA_1_HMAC_ALGO,t,e.toHash).then(function(e){return new Uint8Array(e)})}):(0,n.isEmptyData)(this.toHash)?Promise.resolve(o.EMPTY_DATA_SHA_1):Promise.resolve().then(function(){return(0,i.locateWindow)().crypto.subtle.digest(o.SHA_1_HASH,e.toHash)}).then(function(e){return Promise.resolve(new Uint8Array(e))})},e.prototype.reset=function(){this.toHash=new Uint8Array(0)},e}();function s(e){return"string"==typeof e?(0,r.fromUtf8)(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}e.exports.Sha1=a}),X.register("kPffy",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),X("guPxh").__exportStar(X("gOX1D"),e.exports)}),X.register("guPxh",function(e,t){function r(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})}function n(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function o(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function i(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}a(e.exports,"__awaiter",function(){return r}),a(e.exports,"__generator",function(){return n}),a(e.exports,"__exportStar",function(){return o}),a(e.exports,"__values",function(){return i})}),X.register("gOX1D",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.supportsZeroByteGCM=e.exports.supportsSubtleCrypto=e.exports.supportsSecureRandom=e.exports.supportsWebCrypto=void 0;var r=X("guPxh"),n=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];function o(e){return"object"==typeof e&&"object"==typeof e.crypto&&"function"==typeof e.crypto.getRandomValues}function i(e){return e&&n.every(function(t){return"function"==typeof e[t]})}e.exports.supportsWebCrypto=function(e){return!!o(e)&&"object"==typeof e.crypto.subtle&&i(e.crypto.subtle)},e.exports.supportsSecureRandom=o,e.exports.supportsSubtleCrypto=i,e.exports.supportsZeroByteGCM=function(e){return r.__awaiter(this,void 0,void 0,function(){var t;return r.__generator(this,function(r){switch(r.label){case 0:if(!i(e))return[2/*return*/,!1];r.label=1;case 1:return r.trys.push([1,4,,5]),[4/*yield*/,e.generateKey({name:"AES-GCM",length:128},!1,["encrypt"])];case 2:return t=r.sent(),[4/*yield*/,e.encrypt({name:"AES-GCM",iv:new Uint8Array(Array(12)),additionalData:new Uint8Array(Array(16)),tagLength:128},t,new Uint8Array(0))];case 3:return[2/*return*/,16===r.sent().byteLength];case 4:return r.sent(),[2/*return*/,!1];case 5:return[2/*return*/]}})})}}),X.register("hzSL5",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0});var r=X("guPxh");r.__exportStar(X("jX5n0"),e.exports),r.__exportStar(X("dhXpP"),e.exports),r.__exportStar(X("eNkPx"),e.exports),r.__exportStar(X("8aktS"),e.exports),r.__exportStar(X("keZAE"),e.exports)}),X.register("jX5n0",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0})}),X.register("dhXpP",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0})}),X.register("eNkPx",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0})}),X.register("8aktS",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0})}),X.register("keZAE",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.isMsWindow=void 0;var r=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];e.exports.isMsWindow=/**
 * Determines if the provided window is (or is like) the window object one would
 * expect to encounter in Internet Explorer 11.
 */function(e){if("MSInputMethodContext"in e&&"msCrypto"in e&&void 0!==e.msCrypto.subtle){var t=e.msCrypto,n=t.getRandomValues,o=t.subtle;return r.map(function(e){return o[e]}).concat(n).every(function(e){return"function"==typeof e})}return!1}}),X.register("kZO5e",function(e,t){// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.uint32ArrayFrom=e.exports.numToUint8=e.exports.isEmptyData=e.exports.convertToBuffer=void 0;var r=X("eK5Rj");Object.defineProperty(e.exports,"convertToBuffer",{enumerable:!0,get:function(){return r.convertToBuffer}});var n=X("9Bgb6");Object.defineProperty(e.exports,"isEmptyData",{enumerable:!0,get:function(){return n.isEmptyData}});var o=X("gHWol");Object.defineProperty(e.exports,"numToUint8",{enumerable:!0,get:function(){return o.numToUint8}});var i=X("3kZ0x");Object.defineProperty(e.exports,"uint32ArrayFrom",{enumerable:!0,get:function(){return i.uint32ArrayFrom}})}),X.register("eK5Rj",function(e,t){var r=X("1LDSl").Buffer;// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.convertToBuffer=void 0;var n=X("hOBaX"),o=void 0!==r&&r.from?function(e){return r.from(e,"utf8")}:n.fromUtf8;e.exports.convertToBuffer=function(e){return(// Already a Uint8, do nothing
e instanceof Uint8Array?e:"string"==typeof e?o(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e))}}),X.register("1LDSl",function(e,t){a(e.exports,"Buffer",function(){return r},function(e){return r=e}),a(e.exports,"INSPECT_MAX_BYTES",function(){return n},function(e){return n=e});var r,n,o=X("igoVI"),i=X("jzL3i");let s="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function l(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,u.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function u(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return d(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!u.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|g(e,t),n=l(r),o=n.write(e,t);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(k(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(k(e,ArrayBuffer)||e&&k(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(k(e,SharedArrayBuffer)||e&&k(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return u.from(n,t,r);let o=function(e){var t;if(u.isBuffer(e)){let t=0|m(e.length),r=l(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?l(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return u.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function d(e){return f(e),l(e<0?0:0|m(e))}function p(e){let t=e.length<0?0:0|m(e.length),r=l(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),u.prototype),n)}function m(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function g(e,t){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||k(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return I(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(e).length;default:if(o)return n?-1:I(e).length// assume utf8
;t=(""+t).toLowerCase(),o=!0}}function v(e,t,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=t;n<r;++n)o+=B[e[n]];return o}(this,t,r);case"utf8":case"utf-8":return w(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":var i,a;return i=t,a=r,0===i&&a===this.length?o.fromByteArray(this):o.fromByteArray(this.slice(i,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function y(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function b(e,t,r,n,o){var i;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=u.from(t,n)),u.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:x(e,t,r,n,o));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):x(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function x(e,t,r,n,o){let i,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function u(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){let n=-1;for(i=r;i<s;i++)if(u(e,i)===u(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===l)return n*a}else -1!==n&&(i-=i-n),n=-1}else for(r+l>s&&(r=s-l),i=r;i>=0;i--){let r=!0;for(let n=0;n<l;n++)if(u(e,i+n)!==u(t,n)){r=!1;break}if(r)return i}return -1}function w(e,t,r){r=Math.min(e.length,r);let n=[],o=t;for(;o<r;){let t=e[o],i=null,a=t>239?4:t>223?3:t>191?2:1;if(o+a<=r){let r,n,s,l;switch(a){case 1:t<128&&(i=t);break;case 2:(192&(r=e[o+1]))==128&&(l=(31&t)<<6|63&r)>127&&(i=l);break;case 3:r=e[o+1],n=e[o+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(i=l);break;case 4:r=e[o+1],n=e[o+2],s=e[o+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&l<1114112&&(i=l)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,a=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function S(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function _(e,t,r,n,o,i){if(!u.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function E(e,t,r,n,o){L(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function A(e,t,r,n,o){L(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function M(e,t,r,n,o,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function C(e,t,r,n,o){return t=+t,r>>>=0,o||M(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function T(e,t,r,n,o){return t=+t,r>>>=0,o||M(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}r=u,n=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */u.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/u.from=function(e,t,r){return c(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/u.alloc=function(e,t,r){return(f(e),e<=0)?l(e):void 0!==t?"string"==typeof r?l(e).fill(t,r):l(e).fill(t):l(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */u.allocUnsafe=function(e){return d(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */u.allocUnsafeSlow=function(e){return d(e)},u.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==u.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},u.compare=function(e,t){if(k(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),k(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(e)||!u.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=u.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){let t=e[r];if(k(t,Uint8Array))o+t.length>n.length?(u.isBuffer(t)||(t=u.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else if(u.isBuffer(t))t.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=t.length}return n},u.byteLength=g,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
u.prototype._isBuffer=!0,u.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)y(this,t,t+1);return this},u.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2);return this},u.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4);return this},u.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?w(this,0,e):v.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(e){if(!u.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){let e="",t=n;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},s&&(u.prototype[s]=u.prototype.inspect),u.prototype.compare=function(e,t,r,n,o){if(k(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;let i=o-n,a=r-t,s=Math.min(i,a),l=this.slice(n,o),c=e.slice(t,r);for(let e=0;e<s;++e)if(l[e]!==c[e]){i=l[e],a=c[e];break}return i<a?-1:a<i?1:0},u.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},u.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},u.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},u.prototype.write=function(e,t,r,n){var o,i,a,s,l,u,c,f;// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let o;r=Number(r)||0;let i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;let a=t.length;for(n>a/2&&(n=a/2),o=0;o<n;++o){let n=parseInt(t.substr(2*o,2),16);if(n!=n)break;e[r+o]=n}return o}(this,e,t,r);case"utf8":case"utf-8":return o=t,i=r,z(I(e,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return a=t,s=r,z(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return l=t,u=r,z(U(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,f=r,z(function(e,t){let r,n;let o=[];for(let i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,this.length-c),this,c,f);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,u.prototype),n)},u.prototype.readUintLE=u.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||S(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n},u.prototype.readUintBE=u.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||S(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},u.prototype.readUint8=u.prototype.readUInt8=function(e,t){return e>>>=0,t||S(e,1,this.length),this[e]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,t){return e>>>=0,t||S(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,t){return e>>>=0,t||S(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,t){return e>>>=0,t||S(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,t){return e>>>=0,t||S(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readBigUInt64LE=j(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&D(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],o=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(o)<<BigInt(32))}),u.prototype.readBigUInt64BE=j(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&D(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],o=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),u.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||S(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},u.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||S(e,t,this.length);let n=t,o=1,i=this[e+--n];for(;n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},u.prototype.readInt8=function(e,t){return(e>>>=0,t||S(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},u.prototype.readInt16LE=function(e,t){e>>>=0,t||S(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(e,t){e>>>=0,t||S(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(e,t){return e>>>=0,t||S(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return e>>>=0,t||S(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readBigInt64LE=j(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&D(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),u.prototype.readBigInt64BE=j(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&D(e,this.length-8);let n=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),u.prototype.readFloatLE=function(e,t){return e>>>=0,t||S(e,4,this.length),i.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return e>>>=0,t||S(e,4,this.length),i.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return e>>>=0,t||S(e,8,this.length),i.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return e>>>=0,t||S(e,8,this.length),i.read(this,e,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;_(this,e,t,r,n,0)}let o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;_(this,e,t,r,n,0)}let o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},u.prototype.writeUint8=u.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,1,255,0),this[t]=255&e,t+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigUInt64LE=j(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=j(function(e,t=0){return A(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);_(this,e,t,r,n-1,-n)}let o=0,i=1,a=0;for(this[t]=255&e;++o<r&&(i*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+r},u.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);_(this,e,t,r,n-1,-n)}let o=r-1,i=1,a=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+r},u.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},u.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigInt64LE=j(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=j(function(e,t=0){return A(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeFloatLE=function(e,t,r){return C(this,e,t,!0,r)},u.prototype.writeFloatBE=function(e,t,r){return C(this,e,t,!1,r)},u.prototype.writeDoubleLE=function(e,t,r){return T(this,e,t,!0,r)},u.prototype.writeDoubleBE=function(e,t,r){return T(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
u.prototype.copy=function(e,t,r,n){if(!u.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
u.prototype.fill=function(e,t,r,n){let o;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{let i=u.isBuffer(e)?e:u.from(e,n),a=i.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=i[o%a]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let P={};function O(e,t,r){P[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function R(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function L(e,t,r,n,o,i){if(e>r||e<t){let n;let o="bigint"==typeof t?"n":"";throw n=i>3?0===t||t===BigInt(0)?`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:`>= -(2${o} ** ${(i+1)*8-1}${o}) and < 2 ** ${(i+1)*8-1}${o}`:`>= ${t}${o} and <= ${r}${o}`,new P.ERR_OUT_OF_RANGE("value",n,e)}N(o,"offset"),(void 0===n[o]||void 0===n[o+i])&&D(o,n.length-(i+1))}function N(e,t){if("number"!=typeof e)throw new P.ERR_INVALID_ARG_TYPE(t,"number",e)}function D(e,t,r){if(Math.floor(e)!==e)throw N(e,r),new P.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new P.ERR_BUFFER_OUT_OF_BOUNDS;throw new P.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}O("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),O("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),O("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?o=R(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=R(o)),o+="n"),n+=` It must be ${t}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
let F=/[^+/0-9A-Za-z-_]/g;function I(e,t){let r;t=t||1/0;let n=e.length,o=null,i=[];for(let a=0;a<n;++a){// is surrogate component
if((r=e.charCodeAt(a))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||a+1===n){// unexpected trail
(t-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function U(e){return o.toByteArray(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(F,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function z(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function k(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let B=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o]}return t}();// Return not function with Error if BigInt not supported
function j(e){return"undefined"==typeof BigInt?$:e}function $(){throw Error("BigInt not supported")}}),X.register("igoVI",function(e,t){a(e.exports,"toByteArray",function(){return r},function(e){return r=e}),a(e.exports,"fromByteArray",function(){return n},function(e){return n=e}),r=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),o=n[0],a=n[1],l=new s((o+a)*3/4-a),u=0,c=a>0?o-4:o;for(r=0;r<c;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===a&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===a&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},n=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],a=0,s=r-n;a<s;a+=16383// must be multiple of 3
)i.push(function(e,t,r){for(var n,i=[],a=t;a<r;a+=3)i.push(o[(n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+o[n>>12&63]+o[n>>6&63]+o[63&n]);return i.join("")}(e,a,a+16383>s?s:a+16383));return 1===n?i.push(o[(t=e[r-1])>>2]+o[t<<4&63]+"=="):2===n&&i.push(o[(t=(e[r-2]<<8)+e[r-1])>>10]+o[t>>4&63]+o[t<<2&63]+"="),i.join("")};for(var r,n,o=[],i=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,c=l.length;u<c;++u)o[u]=l[u],i[l.charCodeAt(u)]=u;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63}),X.register("jzL3i",function(e,t){var r,n;a(e.exports,"read",function(){return r},function(e){return r=e}),a(e.exports,"write",function(){return n},function(e){return n=e}),r=function(e,t,r,n,o){var i,a,s=8*o-n-1,l=(1<<s)-1,u=l>>1,c=-7,f=r?o-1:0,d=r?-1:1,p=e[t+f];for(f+=d,i=p&(1<<-c)-1,p>>=-c,c+=s;c>0;i=256*i+e[t+f],f+=d,c-=8);for(a=i&(1<<-c)-1,i>>=-c,c+=n;c>0;a=256*a+e[t+f],f+=d,c-=8);if(0===i)i=1-u;else{if(i===l)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,n),i-=u}return(p?-1:1)*a*Math.pow(2,i-n)},n=function(e,t,r,n,o,i){var a,s,l,u=8*i-o-1,c=(1<<u)-1,f=c>>1,d=23===o?5960464477539062e-23:0,p=n?0:i-1,h=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+f>=1?t+=d/l:t+=d*Math.pow(2,1-f),t*l>=2&&(a++,l/=2),a+f>=c?(s=0,a=c):a+f>=1?(s=(t*l-1)*Math.pow(2,o),a+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,o),a=0));o>=8;e[r+p]=255&s,p+=h,s/=256,o-=8);for(a=a<<o|s,u+=o;u>0;e[r+p]=255&a,p+=h,a/=256,u-=8);e[r+p-h]|=128*m}}),X.register("9Bgb6",function(e,t){// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.isEmptyData=void 0,e.exports.isEmptyData=function(e){return"string"==typeof e?0===e.length:0===e.byteLength}}),X.register("gHWol",function(e,t){// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.numToUint8=void 0,e.exports.numToUint8=function(e){return new Uint8Array([(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e])}}),X.register("3kZ0x",function(e,t){// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.uint32ArrayFrom=void 0,e.exports.uint32ArrayFrom=// IE 11 does not support Array.from, so we do it manually
function(e){if(!Uint32Array.from){for(var t=new Uint32Array(e.length),r=0;r<e.length;)t[r]=e[r],r+=1;return t}return Uint32Array.from(e)}}),X.register("3bHDv",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Sha256=void 0;var r=X("8Y0Pr"),n=X("ev0FX"),o=X("5nXtZ"),i=X("kPffy"),a=X("hzSL5"),s=X("luDhA"),l=X("kZO5e"),u=/** @class */function(){function e(e){(0,i.supportsWebCrypto)((0,s.locateWindow)())?this.hash=new n.Sha256(e):(0,a.isMsWindow)((0,s.locateWindow)())?this.hash=new r.Sha256(e):this.hash=new o.Sha256(e)}return e.prototype.update=function(e,t){this.hash.update((0,l.convertToBuffer)(e))},e.prototype.digest=function(){return this.hash.digest()},e.prototype.reset=function(){this.hash.reset()},e}();e.exports.Sha256=u}),X.register("8Y0Pr",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Sha256=void 0;var r=X("gBPlx"),n=X("aqpcw"),o=X("hOBaX"),i=X("luDhA"),a=/** @class */function(){function e(e){this.secret=e,this.reset()}return e.prototype.update=function(e){var t=this;(0,r.isEmptyData)(e)||(this.operation=this.operation.then(function(r){return r.onerror=function(){t.operation=Promise.reject(Error("Error encountered updating hash"))},r.process(s(e)),r}),this.operation.catch(function(){}))},e.prototype.digest=function(){return this.operation.then(function(e){return new Promise(function(t,r){e.onerror=function(){r(Error("Error encountered finalizing hash"))},e.oncomplete=function(){e.result&&t(new Uint8Array(e.result)),r(Error("Error encountered finalizing hash"))},e.finish()})})},e.prototype.reset=function(){var e;this.secret?(this.operation=(e=this.secret,new Promise(function(t,r){var o=(0,i.locateWindow)().msCrypto.subtle.importKey("raw",s(e),n.SHA_256_HMAC_ALGO,!1,["sign"]);o.oncomplete=function(){o.result&&t(o.result),r(Error("ImportKey completed without importing key."))},o.onerror=function(){r(Error("ImportKey failed to import key."))}})).then(function(e){return(0,i.locateWindow)().msCrypto.subtle.sign(n.SHA_256_HMAC_ALGO,e)}),this.operation.catch(function(){})):this.operation=Promise.resolve((0,i.locateWindow)().msCrypto.subtle.digest("SHA-256"))},e}();function s(e){return"string"==typeof e?(0,o.fromUtf8)(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}e.exports.Sha256=a}),X.register("gBPlx",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.isEmptyData=void 0,e.exports.isEmptyData=function(e){return"string"==typeof e?0===e.length:0===e.byteLength}}),X.register("aqpcw",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.EMPTY_DATA_SHA_256=e.exports.SHA_256_HMAC_ALGO=e.exports.SHA_256_HASH=void 0,e.exports.SHA_256_HASH={name:"SHA-256"},e.exports.SHA_256_HMAC_ALGO={name:"HMAC",hash:e.exports.SHA_256_HASH},e.exports.EMPTY_DATA_SHA_256=new Uint8Array([227,176,196,66,152,252,28,20,154,251,244,200,153,111,185,36,39,174,65,228,100,155,147,76,164,149,153,27,120,82,184,85])}),X.register("ev0FX",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Sha256=void 0;var r=X("kZO5e"),n=X("aqpcw"),o=X("luDhA"),i=/** @class */function(){function e(e){this.toHash=new Uint8Array(0),this.secret=e,this.reset()}return e.prototype.update=function(e){if(!(0,r.isEmptyData)(e)){var t=(0,r.convertToBuffer)(e),n=new Uint8Array(this.toHash.byteLength+t.byteLength);n.set(this.toHash,0),n.set(t,this.toHash.byteLength),this.toHash=n}},e.prototype.digest=function(){var e=this;return this.key?this.key.then(function(t){return(0,o.locateWindow)().crypto.subtle.sign(n.SHA_256_HMAC_ALGO,t,e.toHash).then(function(e){return new Uint8Array(e)})}):(0,r.isEmptyData)(this.toHash)?Promise.resolve(n.EMPTY_DATA_SHA_256):Promise.resolve().then(function(){return(0,o.locateWindow)().crypto.subtle.digest(n.SHA_256_HASH,e.toHash)}).then(function(e){return Promise.resolve(new Uint8Array(e))})},e.prototype.reset=function(){var e=this;this.toHash=new Uint8Array(0),this.secret&&void 0!==this.secret&&(this.key=new Promise(function(t,i){(0,o.locateWindow)().crypto.subtle.importKey("raw",(0,r.convertToBuffer)(e.secret),n.SHA_256_HMAC_ALGO,!1,["sign"]).then(t,i)}),this.key.catch(function(){}))},e}();e.exports.Sha256=i}),X.register("5nXtZ",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),X("guPxh").__exportStar(X("hvifq"),e.exports)}),X.register("hvifq",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Sha256=void 0;var r=X("guPxh"),n=X("ZkgSS"),o=X("1EypX"),i=X("kZO5e"),a=/** @class */function(){function e(e){this.secret=e,this.hash=new o.RawSha256,this.reset()}return e.prototype.update=function(e){if(!(0,i.isEmptyData)(e)&&!this.error)try{this.hash.update((0,i.convertToBuffer)(e))}catch(e){this.error=e}},/* This synchronous method keeps compatibility
     * with the v2 aws-sdk.
     */e.prototype.digestSync=function(){if(this.error)throw this.error;return this.outer?(this.outer.finished||this.outer.update(this.hash.digest()),this.outer.digest()):this.hash.digest()},/* The underlying digest method here is synchronous.
     * To keep the same interface with the other hash functions
     * the default is to expose this as an async method.
     * However, it can sometimes be useful to have a sync method.
     */e.prototype.digest=function(){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){return[2/*return*/,this.digestSync()]})})},e.prototype.reset=function(){if(this.hash=new o.RawSha256,this.secret){this.outer=new o.RawSha256;var e=function(e){var t=(0,i.convertToBuffer)(e);if(t.byteLength>n.BLOCK_SIZE){var r=new o.RawSha256;r.update(t),t=r.digest()}var a=new Uint8Array(n.BLOCK_SIZE);return a.set(t),a}(this.secret),t=new Uint8Array(n.BLOCK_SIZE);t.set(e);for(var r=0;r<n.BLOCK_SIZE;r++)e[r]^=54,t[r]^=92;this.hash.update(e),this.outer.update(t);// overwrite the copied key in memory
for(var r=0;r<e.byteLength;r++)e[r]=0}},e}();e.exports.Sha256=a}),X.register("ZkgSS",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.MAX_HASHABLE_LENGTH=e.exports.INIT=e.exports.KEY=e.exports.DIGEST_LENGTH=e.exports.BLOCK_SIZE=void 0,/**
 * @internal
 */e.exports.BLOCK_SIZE=64,/**
 * @internal
 */e.exports.DIGEST_LENGTH=32,/**
 * @internal
 */e.exports.KEY=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),/**
 * @internal
 */e.exports.INIT=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],/**
 * @internal
 */e.exports.MAX_HASHABLE_LENGTH=9007199254740991}),X.register("1EypX",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.RawSha256=void 0;var r=X("ZkgSS"),n=/** @class */function(){function e(){this.state=Int32Array.from(r.INIT),this.temp=new Int32Array(64),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytesHashed=0,/**
         * @internal
         */this.finished=!1}return e.prototype.update=function(e){if(this.finished)throw Error("Attempted to update an already finished hash.");var t=0,n=e.byteLength;if(this.bytesHashed+=n,8*this.bytesHashed>r.MAX_HASHABLE_LENGTH)throw Error("Cannot hash more than 2^53 - 1 bits");for(;n>0;)this.buffer[this.bufferLength++]=e[t++],n--,this.bufferLength===r.BLOCK_SIZE&&(this.hashBuffer(),this.bufferLength=0)},e.prototype.digest=function(){if(!this.finished){var e=8*this.bytesHashed,t=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),n=this.bufferLength;// Ensure the final block has enough room for the hashed length
if(t.setUint8(this.bufferLength++,128),n%r.BLOCK_SIZE>=r.BLOCK_SIZE-8){for(var o=this.bufferLength;o<r.BLOCK_SIZE;o++)t.setUint8(o,0);this.hashBuffer(),this.bufferLength=0}for(var o=this.bufferLength;o<r.BLOCK_SIZE-8;o++)t.setUint8(o,0);t.setUint32(r.BLOCK_SIZE-8,Math.floor(e/4294967296),!0),t.setUint32(r.BLOCK_SIZE-4,e),this.hashBuffer(),this.finished=!0}for(var i=new Uint8Array(r.DIGEST_LENGTH),o=0;o<8;o++)i[4*o]=this.state[o]>>>24&255,i[4*o+1]=this.state[o]>>>16&255,i[4*o+2]=this.state[o]>>>8&255,i[4*o+3]=this.state[o]>>>0&255;return i},e.prototype.hashBuffer=function(){for(var e=this.buffer,t=this.state,n=t[0],o=t[1],i=t[2],a=t[3],s=t[4],l=t[5],u=t[6],c=t[7],f=0;f<r.BLOCK_SIZE;f++){if(f<16)this.temp[f]=(255&e[4*f])<<24|(255&e[4*f+1])<<16|(255&e[4*f+2])<<8|255&e[4*f+3];else{var d=this.temp[f-2],p=(d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10,h=((d=this.temp[f-15])>>>7|d<<25)^(d>>>18|d<<14)^d>>>3;this.temp[f]=(p+this.temp[f-7]|0)+(h+this.temp[f-16]|0)}var m=(((s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(s&l^~s&u)|0)+(c+(r.KEY[f]+this.temp[f]|0)|0)|0,g=((n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10))+(n&o^n&i^o&i)|0;c=u,u=l,l=s,s=a+m|0,a=i,i=o,o=n,n=m+g|0}t[0]+=n,t[1]+=o,t[2]+=i,t[3]+=a,t[4]+=s,t[5]+=l,t[6]+=u,t[7]+=c},e}();e.exports.RawSha256=n}),X.register("1vV4g",function(e,t){// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var r,n,o,i,a,s=X("liSpS");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(n.key),n)}}var c=X("7K0pG").codes,f=c.ERR_AMBIGUOUS_ARGUMENT,d=c.ERR_INVALID_ARG_TYPE,p=c.ERR_INVALID_ARG_VALUE,h=c.ERR_INVALID_RETURN_VALUE,m=c.ERR_MISSING_ARGS,g=X("9LElP"),v=X("7XndD"),y=v.inspect,v=X("7XndD"),b=v.types,x=b.isPromise,w=b.isRegExp,S=X("9v8zJ")(),_=X("hT0td")(),E=X("7bdzw")("RegExp.prototype.test");function A(){var e=X("gNEYh");i=e.isDeepEqual,a=e.isDeepStrictEqual}var M=!1,C=e.exports=R,T={};// All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function P(e){if(e.message instanceof Error)throw e.message;throw new g(e)}function O(e,t,r,n){if(!r){var o=!1;if(0===t)o=!0,n="No value argument passed to `assert.ok()`";else if(n instanceof Error)throw n;var i=new g({actual:r,expected:!0,message:n,operator:"==",stackStartFn:e});throw i.generatedMessage=o,i}}// Pure assertion tests whether a value is truthy, as determined
// by !!value.
function R(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];O.apply(void 0,[R,t.length].concat(t))}C.fail=function e(t,r,n,o,i){var a,l=arguments.length;if(0===l?a="Failed":1===l?(n=t,t=void 0):(!1===M&&(M=!0,(s.emitWarning?s.emitWarning:console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094")),2===l&&(o="!=")),n instanceof Error)throw n;var u={actual:t,expected:r,operator:void 0===o?"fail":o,stackStartFn:i||e};void 0!==n&&(u.message=n);var c=new g(u);throw a&&(c.message=a,c.generatedMessage=!0),c},// The AssertionError is defined in internal/error.
C.AssertionError=g,C.ok=R,// The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */C.equal=function e(t,r,n){if(arguments.length<2)throw new m("actual","expected");// eslint-disable-next-line eqeqeq
t!=r&&P({actual:t,expected:r,message:n,operator:"==",stackStartFn:e})},// The non-equality assertion tests for whether two objects are not
// equal with !=.
C.notEqual=function e(t,r,n){if(arguments.length<2)throw new m("actual","expected");// eslint-disable-next-line eqeqeq
t==r&&P({actual:t,expected:r,message:n,operator:"!=",stackStartFn:e})},// The equivalence assertion tests a deep equality relation.
C.deepEqual=function e(t,r,n){if(arguments.length<2)throw new m("actual","expected");void 0===i&&A(),i(t,r)||P({actual:t,expected:r,message:n,operator:"deepEqual",stackStartFn:e})},// The non-equivalence assertion tests for any deep inequality.
C.notDeepEqual=function e(t,r,n){if(arguments.length<2)throw new m("actual","expected");void 0===i&&A(),i(t,r)&&P({actual:t,expected:r,message:n,operator:"notDeepEqual",stackStartFn:e})},/* eslint-enable */C.deepStrictEqual=function e(t,r,n){if(arguments.length<2)throw new m("actual","expected");void 0===i&&A(),a(t,r)||P({actual:t,expected:r,message:n,operator:"deepStrictEqual",stackStartFn:e})},C.notDeepStrictEqual=function e(t,r,n){if(arguments.length<2)throw new m("actual","expected");void 0===i&&A(),a(t,r)&&P({actual:t,expected:r,message:n,operator:"notDeepStrictEqual",stackStartFn:e})},C.strictEqual=function e(t,r,n){if(arguments.length<2)throw new m("actual","expected");_(t,r)||P({actual:t,expected:r,message:n,operator:"strictEqual",stackStartFn:e})},C.notStrictEqual=function e(t,r,n){if(arguments.length<2)throw new m("actual","expected");_(t,r)&&P({actual:t,expected:r,message:n,operator:"notStrictEqual",stackStartFn:e})};var L=(r=function e(t,r,n){var o=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),r.forEach(function(e){e in t&&(void 0!==n&&"string"==typeof n[e]&&w(t[e])&&E(t[e],n[e])?o[e]=n[e]:o[e]=t[e])})},n&&u(r.prototype,n),o&&u(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r);function N(e,t,r,n){if("function"!=typeof t){if(w(t))return E(t,e);// assert.doesNotThrow does not accept objects.
if(2==arguments.length)throw new d("expected",["Function","RegExp"],t);// Handle primitives properly.
if("object"!==l(e)||null===e){var o=new g({actual:e,expected:t,message:r,operator:"deepStrictEqual",stackStartFn:n});throw o.operator=n.name,o}var s=Object.keys(t);// Special handle errors to make sure the name and the message are compared
// as well.
if(t instanceof Error)s.push("name","message");else if(0===s.length)throw new p("error",t,"may not be an empty object");return void 0===i&&A(),s.forEach(function(o){"string"==typeof e[o]&&w(t[o])&&E(t[o],e[o])||function(e,t,r,n,o,i){if(!(r in e)||!a(e[r],t[r])){if(!n){// Create placeholder objects to create a nice output.
var s=new L(e,o),l=new L(t,o,e),u=new g({actual:s,expected:l,operator:"deepStrictEqual",stackStartFn:i});throw u.actual=e,u.expected=t,u.operator=i.name,u}P({actual:e,expected:t,message:n,operator:i.name,stackStartFn:i})}}(e,t,o,r,s,n)}),!0}return(// Guard instanceof against arrow functions as they don't have a prototype.
void 0!==t.prototype&&e instanceof t||!Error.isPrototypeOf(t)&&!0===t.call({},e))}function D(e){if("function"!=typeof e)throw new d("fn","Function",e);try{e()}catch(e){return e}return T}function F(e){// Accept native ES6 promises and promises that are implemented in a similar
// way. Do not accept thenables that use a function as `obj` and that have no
// `catch` handler.
// TODO: thenables are checked up until they have the correct methods,
// but according to documentation, the `then` method should receive
// the `fulfill` and `reject` arguments as well or it may be never resolved.
return x(e)||null!==e&&"object"===l(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function I(e){return Promise.resolve().then(function(){var t;if("function"==typeof e)// Fail in case no promise is returned.
{if(!F(// Return a rejected promise if `promiseFn` throws synchronously.
t=e()))throw new h("instance of Promise","promiseFn",t)}else if(F(e))t=e;else throw new d("promiseFn",["Function","Promise"],e);return Promise.resolve().then(function(){return t}).then(function(){return T}).catch(function(e){return e})})}function U(e,t,r,n){if("string"==typeof r){if(4==arguments.length)throw new d("error",["Object","Error","Function","RegExp"],r);if("object"===l(t)&&null!==t){if(t.message===r)throw new f("error/message",'The error message "'.concat(t.message,'" is identical to the message.'))}else if(t===r)throw new f("error/message",'The error "'.concat(t,'" is identical to the message.'));n=r,r=void 0}else if(null!=r&&"object"!==l(r)&&"function"!=typeof r)throw new d("error",["Object","Error","Function","RegExp"],r);if(t===T){var o="";r&&r.name&&(o+=" (".concat(r.name,")")),o+=n?": ".concat(n):".";var i="rejects"===e.name?"rejection":"exception";P({actual:void 0,expected:r,operator:e.name,message:"Missing expected ".concat(i).concat(o),stackStartFn:e})}if(r&&!N(t,r,n,e))throw t}function z(e,t,r,n){if(t!==T){if("string"==typeof r&&(n=r,r=void 0),!r||N(t,r)){var o=n?": ".concat(n):".",i="doesNotReject"===e.name?"rejection":"exception";P({actual:t,expected:r,operator:e.name,message:"Got unwanted ".concat(i).concat(o,"\n")+'Actual message: "'.concat(t&&t.message,'"'),stackStartFn:e})}throw t}}// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a871df3dfb8ea663ef5e1f8f62701ec51384ecb
function k(e,t,r,n,o){if(!w(t))throw new d("regexp","RegExp",t);var i="match"===o;if("string"!=typeof e||E(t,e)!==i){if(r instanceof Error)throw r;var a=!r;// 'The input was expected to not match the regular expression ' +
r=r||("string"!=typeof e?'The "string" argument must be of type string. Received type '+"".concat(l(e)," (").concat(y(e),")"):(i?"The input did not match the regular expression ":"The input was expected to not match the regular expression ")+"".concat(y(t),". Input:\n\n").concat(y(e),"\n"));var s=new g({actual:e,expected:t,message:r,operator:o,stackStartFn:n});throw s.generatedMessage=a,s}}C.throws=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];U.apply(void 0,[e,D(t)].concat(n))},C.rejects=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return I(t).then(function(t){return U.apply(void 0,[e,t].concat(n))})},C.doesNotThrow=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];z.apply(void 0,[e,D(t)].concat(n))},C.doesNotReject=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return I(t).then(function(t){return z.apply(void 0,[e,t].concat(n))})},C.ifError=function e(t){if(null!=t){var r="ifError got unwanted exception: ";"object"===l(t)&&"string"==typeof t.message?0===t.message.length&&t.constructor?r+=t.constructor.name:r+=t.message:r+=y(t);var n=new g({actual:t,expected:null,operator:"ifError",message:r,stackStartFn:e}),o=t.stack;if("string"==typeof o){// This will remove any duplicated frames from the error frames taken
// from within `ifError` and add the original error frames to the newly
// created ones.
var i=o.split("\n");i.shift();for(var a=n.stack.split("\n"),s=0;s<i.length;s++){// Find the first occurrence of the frame.
var u=a.indexOf(i[s]);if(-1!==u){// Only keep new frames.
a=a.slice(0,u);break}}n.stack="".concat(a.join("\n"),"\n").concat(i.join("\n"))}throw n}},C.match=function e(t,r,n){k(t,r,n,e,"match")},C.doesNotMatch=function e(t,r,n){k(t,r,n,e,"doesNotMatch")},C.strict=S(// Expose a strict only variant of assert
function e(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];O.apply(void 0,[e,r.length].concat(r))},C,{equal:C.strictEqual,deepEqual:C.deepStrictEqual,notEqual:C.notStrictEqual,notDeepEqual:C.notDeepStrictEqual}),C.strict.strict=C.strict}),X.register("liSpS",function(e,t){// shim for using process in browser
var r,n,o,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return r(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return r.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u=[],c=!1,f=-1;function d(){c&&o&&(c=!1,o.length?u=o.concat(u):f=-1,u.length&&p())}function p(){if(!c){var e=l(d);c=!0;for(var t=u.length;t;){for(o=u,u=[];++f<t;)o&&o[f].run();f=-1,t=u.length}o=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
n(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return n.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return n.call(this,e)}}}(e)}}// v8 likes predictible objects
function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||c||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}),X.register("7K0pG",function(e,t){// The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(o.key),o)}}function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a(e.exports,"codes",function(){return s},function(e){return s=e});var s,l,u,c={};function f(e,t,a){a||(a=Error);var s=/*#__PURE__*/function(a){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(f,a);var s,l,u,c=(s=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=i(f);if(s){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function f(r,n,o){var i;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,f),(i=c.call(this,"string"==typeof t?t:t(r,n,o))).code=e,i}return l&&n(f.prototype,l),u&&n(f,u),Object.defineProperty(f,"prototype",{writable:!1}),f}(a);c[e]=s}// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function d(e,t){if(!Array.isArray(e))return"of ".concat(t," ").concat(String(e));var r=e.length;return(e=e.map(function(e){return String(e)}),r>2)?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}f("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),f("ERR_INVALID_ARG_TYPE",function(e,t,n){if((void 0===l&&(l=X("1vV4g")),l("string"==typeof e,"'name' must be a string"),"string"==typeof t&&(o="not ",t.substr(!i||i<0?0:+i,o.length)===o))?(c="must not be",t=t.replace(/^not /,"")):c="must be",a=" argument",(void 0===s||s>e.length)&&(s=e.length),e.substring(s-a.length,s)===a)f="The ".concat(e," ").concat(c," ").concat(d(t,"type"));else{var o,i,a,s,u,c,f,p=("number"!=typeof u&&(u=0),u+1>e.length||-1===e.indexOf(".",u))?"argument":"property";f='The "'.concat(e,'" ').concat(p," ").concat(c," ").concat(d(t,"type"))}return(// TODO(BridgeAR): Improve the output by showing `null` and similar.
f+". Received type ".concat(r(n)))},TypeError),f("ERR_INVALID_ARG_VALUE",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is invalid";void 0===u&&(u=X("7XndD"));var n=u.inspect(t);return n.length>128&&(n="".concat(n.slice(0,128),"...")),"The argument '".concat(e,"' ").concat(r,". Received ").concat(n)},TypeError,RangeError),f("ERR_INVALID_RETURN_VALUE",function(e,t,n){var o;return o=n&&n.constructor&&n.constructor.name?"instance of ".concat(n.constructor.name):"type ".concat(r(n)),"Expected ".concat(e,' to be returned from the "').concat(t,'"')+" function but got ".concat(o,".")},TypeError),f("ERR_MISSING_ARGS",function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];void 0===l&&(l=X("1vV4g")),l(t.length>0,"At least one arg needs to be specified");var n="The ",o=t.length;switch(t=t.map(function(e){return'"'.concat(e,'"')}),o){case 1:n+="".concat(t[0]," argument");break;case 2:n+="".concat(t[0]," and ").concat(t[1]," arguments");break;default:n+=t.slice(0,o-1).join(", ")+", and ".concat(t[o-1]," arguments")}return"".concat(n," must be specified")},TypeError),s=c}),X.register("7XndD",function(e,t){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var r=X("liSpS"),n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},o=/%[sdj%]/g;e.exports.format=function(e){if(!v(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(s(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,i=n.length,a=String(e).replace(o,function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),l=n[r];r<i;l=n[++r])m(l)||!x(l)?a+=" "+l:a+=" "+s(l);return a},// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
e.exports.deprecate=function(t,n){if(void 0!==r&&!0===r.noDeprecation)return t;// Allow for deprecating things in the process of starting up.
if(void 0===r)return function(){return e.exports.deprecate(t,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(r.throwDeprecation)throw Error(n);r.traceDeprecation?console.trace(n):console.error(n),o=!0}return t.apply(this,arguments)}};var i={},a=/^$/;/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 *//* legacy: obj, showHidden, depth, colors*/function s(t,r){// default options
var n={seen:[],stylize:u};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),h(r)?n.showHidden=r:r&&e.exports._extend(n,r),y(n.showHidden)&&(n.showHidden=!1),y(n.depth)&&(n.depth=2),y(n.colors)&&(n.colors=!1),y(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=l),c(n,t,n.depth)}function l(e,t){var r=s.styles[t];return r?"\x1b["+s.colors[r][0]+"m"+e+"\x1b["+s.colors[r][1]+"m":e}function u(e,t){return e}function c(t,r,n){// Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(t.customInspect&&r&&_(r.inspect)&&// Filter out the util module, it's inspect function is special
r.inspect!==e.exports.inspect&&// Also filter out any prototype objects using the circular check.
!(r.constructor&&r.constructor.prototype===r)){var o,i,a,s,l,u=r.inspect(n,t);return v(u)||(u=c(t,u,n)),u}// Primitive types cannot have properties
var x=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return g(t)?e.stylize(""+t,"number"):h(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}(t,r);if(x)return x;// Look up the keys of the object.
var E=Object.keys(r),A=(s={},E.forEach(function(e,t){s[e]=!0}),s);// IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(t.showHidden&&(E=Object.getOwnPropertyNames(r)),S(r)&&(E.indexOf("message")>=0||E.indexOf("description")>=0))return f(r);// Some type of object without properties can be shortcutted.
if(0===E.length){if(_(r)){var M=r.name?": "+r.name:"";return t.stylize("[Function"+M+"]","special")}if(b(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(w(r))return t.stylize(Date.prototype.toString.call(r),"date");if(S(r))return f(r)}var T="",P=!1,O=["{","}"];return(p(r)&&(P=!0,O=["[","]"]),_(r)&&(T=" [Function"+(r.name?": "+r.name:"")+"]"),b(r)&&(T=" "+RegExp.prototype.toString.call(r)),w(r)&&(T=" "+Date.prototype.toUTCString.call(r)),S(r)&&(T=" "+f(r)),0!==E.length||P&&0!=r.length)?n<0?b(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),l=P?function(e,t,r,n,o){for(var i=[],a=0,s=t.length;a<s;++a)C(t,String(a))?i.push(d(e,t,r,n,String(a),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(d(e,t,r,n,o,!0))}),i}(t,r,n,A,E):E.map(function(e){return d(t,r,n,A,e,P)}),t.seen.pop(),o=T,i=O,a=0,l.reduce(function(e,t){return a++,t.indexOf("\n")>=0&&a++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?i[0]+(""===o?"":o+"\n ")+" "+l.join(",\n  ")+" "+i[1]:i[0]+o+" "+l.join(", ")+" "+i[1]):O[0]+T+O[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,r,n,o,i){var a,s,l;if((l=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(s=e.stylize("[Setter]","special")),C(n,o)||(a="["+o+"]"),!s&&(0>e.seen.indexOf(l.value)?(s=m(r)?c(e,l.value,null):c(e,l.value,r-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map(function(e){return"  "+e}).join("\n").slice(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),y(a)){if(i&&o.match(/^\d+$/))return s;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.slice(1,-1),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function p(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function m(e){return null===e}function g(e){return"number"==typeof e}function v(e){return"string"==typeof e}function y(e){return void 0===e}function b(e){return x(e)&&"[object RegExp]"===E(e)}function x(e){return"object"==typeof e&&null!==e}function w(e){return x(e)&&"[object Date]"===E(e)}function S(e){return x(e)&&("[object Error]"===E(e)||e instanceof Error)}function _(e){return"function"==typeof e}function E(e){return Object.prototype.toString.call(e)}function A(e){return e<10?"0"+e.toString(10):e.toString(10)}e.exports.debuglog=function(t){if(!i[t=t.toUpperCase()]){if(a.test(t)){var n=r.pid;i[t]=function(){var r=e.exports.format.apply(e.exports,arguments);console.error("%s %d: %s",t,n,r)}}else i[t]=function(){}}return i[t]},e.exports.inspect=s,// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},// Don't use 'blue' not visible on cmd.exe
s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",// "name": intentionally not styling
regexp:"red"},// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
e.exports.types=X("U3kcx"),e.exports.isArray=p,e.exports.isBoolean=h,e.exports.isNull=m,e.exports.isNullOrUndefined=function(e){return null==e},e.exports.isNumber=g,e.exports.isString=v,e.exports.isSymbol=function(e){return"symbol"==typeof e},e.exports.isUndefined=y,e.exports.isRegExp=b,e.exports.types.isRegExp=b,e.exports.isObject=x,e.exports.isDate=w,e.exports.types.isDate=w,e.exports.isError=S,e.exports.types.isNativeError=S,e.exports.isFunction=_,e.exports.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||// ES6 symbol
void 0===e},e.exports.isBuffer=X("1P4I0");var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}// log is just a thin wrapper to console.log that prepends a timestamp
e.exports.log=function(){var t,r;console.log("%s - %s",(r=[A((t=new Date).getHours()),A(t.getMinutes()),A(t.getSeconds())].join(":"),[t.getDate(),M[t.getMonth()],r].join(" ")),e.exports.format.apply(e.exports,arguments))},/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */e.exports.inherits=X("ir72Z"),e.exports._extend=function(e,t){// Don't do anything if add isn't an object
if(!t||!x(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var T="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(e,t){// `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
// Because `null` is a special error value in callbacks which means "no error
// occurred", we error-wrap so the callback consumer can distinguish between
// "the promise rejected with null" or "the promise fulfilled with undefined".
if(!e){var r=Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}e.exports.promisify=function(e){if("function"!=typeof e)throw TypeError('The "original" argument must be of type Function');if(T&&e[T]){var t=e[T];if("function"!=typeof t)throw TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,n){e?r(e):t(n)});try{e.apply(this,o)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),T&&Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},e.exports.promisify.custom=T,e.exports.callbackify=function(e){if("function"!=typeof e)throw TypeError('The "original" argument must be of type Function');// We DO NOT return the promise as it gives the user a false sense that
// the promise is actually somehow related to the callback's execution
// and that the callback throwing will reject the promise.
function t(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var o=t.pop();if("function"!=typeof o)throw TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};// In true node style we process the callback on `nextTick` with all the
// implications (stack, `uncaughtException`, `async_hooks`)
e.apply(this,t).then(function(e){r.nextTick(a.bind(null,null,e))},function(e){r.nextTick(P.bind(null,e,a))})}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,n(e)),t}}),X.register("U3kcx",function(e,t){var r=X("cXaZy"),n=X("inS9E"),o=X("9MzYB"),i=X("iPgrv");function a(e){return e.call.bind(e)}var s="undefined"!=typeof BigInt,l="undefined"!=typeof Symbol,u=a(Object.prototype.toString),c=a(Number.prototype.valueOf),f=a(String.prototype.valueOf),d=a(Boolean.prototype.valueOf);if(s)var p=a(BigInt.prototype.valueOf);if(l)var h=a(Symbol.prototype.valueOf);function m(e,t){if("object"!=typeof e)return!1;try{return t(e),!0}catch(e){return!1}}function g(e){return"[object Map]"===u(e)}function v(e){return"[object Set]"===u(e)}function y(e){return"[object WeakMap]"===u(e)}function b(e){return"[object WeakSet]"===u(e)}function x(e){return"[object ArrayBuffer]"===u(e)}function w(e){return"undefined"!=typeof ArrayBuffer&&(x.working?x(e):e instanceof ArrayBuffer)}function S(e){return"[object DataView]"===u(e)}function _(e){return"undefined"!=typeof DataView&&(S.working?S(e):e instanceof DataView)}e.exports.isArgumentsObject=r,e.exports.isGeneratorFunction=n,e.exports.isTypedArray=i,e.exports.isPromise=// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},e.exports.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):i(e)||_(e)},e.exports.isUint8Array=function(e){return"Uint8Array"===o(e)},e.exports.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===o(e)},e.exports.isUint16Array=function(e){return"Uint16Array"===o(e)},e.exports.isUint32Array=function(e){return"Uint32Array"===o(e)},e.exports.isInt8Array=function(e){return"Int8Array"===o(e)},e.exports.isInt16Array=function(e){return"Int16Array"===o(e)},e.exports.isInt32Array=function(e){return"Int32Array"===o(e)},e.exports.isFloat32Array=function(e){return"Float32Array"===o(e)},e.exports.isFloat64Array=function(e){return"Float64Array"===o(e)},e.exports.isBigInt64Array=function(e){return"BigInt64Array"===o(e)},e.exports.isBigUint64Array=function(e){return"BigUint64Array"===o(e)},g.working="undefined"!=typeof Map&&g(new Map),e.exports.isMap=function(e){return"undefined"!=typeof Map&&(g.working?g(e):e instanceof Map)},v.working="undefined"!=typeof Set&&v(new Set),e.exports.isSet=function(e){return"undefined"!=typeof Set&&(v.working?v(e):e instanceof Set)},y.working="undefined"!=typeof WeakMap&&y(new WeakMap),e.exports.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(y.working?y(e):e instanceof WeakMap)},b.working="undefined"!=typeof WeakSet&&b(new WeakSet),e.exports.isWeakSet=function(e){return b(e)},x.working="undefined"!=typeof ArrayBuffer&&x(new ArrayBuffer),e.exports.isArrayBuffer=w,S.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&S(new DataView(new ArrayBuffer(1),0,1)),e.exports.isDataView=_;// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var E="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function A(e){return"[object SharedArrayBuffer]"===u(e)}function M(e){return void 0!==E&&(void 0===A.working&&(A.working=A(new E)),A.working?A(e):e instanceof E)}function C(e){return m(e,c)}function T(e){return m(e,f)}function P(e){return m(e,d)}function O(e){return s&&m(e,p)}function R(e){return l&&m(e,h)}e.exports.isSharedArrayBuffer=M,e.exports.isAsyncFunction=function(e){return"[object AsyncFunction]"===u(e)},e.exports.isMapIterator=function(e){return"[object Map Iterator]"===u(e)},e.exports.isSetIterator=function(e){return"[object Set Iterator]"===u(e)},e.exports.isGeneratorObject=function(e){return"[object Generator]"===u(e)},e.exports.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===u(e)},e.exports.isNumberObject=C,e.exports.isStringObject=T,e.exports.isBooleanObject=P,e.exports.isBigIntObject=O,e.exports.isSymbolObject=R,e.exports.isBoxedPrimitive=function(e){return C(e)||T(e)||P(e)||O(e)||R(e)},e.exports.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(w(e)||M(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(t){Object.defineProperty(e.exports,t,{enumerable:!1,value:function(){throw Error(t+" is not supported in userland")}})})}),X.register("cXaZy",function(e,t){var r=X("eOEoS")(),n=X("7bdzw")("Object.prototype.toString"),o=function(e){return(!r||!e||"object"!=typeof e||!(Symbol.toStringTag in e))&&"[object Arguments]"===n(e)},i=function(e){return!!o(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==n(e)&&"[object Function]"===n(e.callee)},a=function(){return o(arguments)}();o.isLegacyArguments=i,e.exports=a?o:i}),X.register("eOEoS",function(e,t){var r=X("deI1o");e.exports=function(){return r()&&!!Symbol.toStringTag}}),X.register("deI1o",function(e,t){/* eslint complexity: [2, 18], max-statements: [2, 33] */e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t||"[object Symbol]"!==Object.prototype.toString.call(t)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;// eslint-disable-line no-restricted-syntax, no-unreachable-loop
if("function"==typeof Object.keys&&0!==Object.keys(e).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}}),X.register("7bdzw",function(e,t){var r=X("joCfq"),n=X("aKnjK"),o=n(r("String.prototype.indexOf"));e.exports=function(e,t){var i=r(e,!!t);return"function"==typeof i&&o(e,".prototype.")>-1?n(i):i}}),X.register("joCfq",function(e,t){var r,n=SyntaxError,o=Function,i=TypeError,a=function(e){try{return o('"use strict"; return ('+e+").constructor;")()}catch(e){}},s=Object.getOwnPropertyDescriptor;if(s)try{s({},"")}catch(e){s=null;// this is IE 8, which has a broken gOPD
}var l=function(){throw new i},u=s?function(){try{return(// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
arguments.callee,l)}catch(e){try{// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
return s(arguments,"callee").get}catch(e){return l}}}():l,c=X("8a7E0")(),f=X("fKFZZ")(),d=Object.getPrototypeOf||(f?function(e){return e.__proto__}// eslint-disable-line no-proto
:null),p={},h="undefined"!=typeof Uint8Array&&d?d(Uint8Array):r,m={"%AggregateError%":"undefined"==typeof AggregateError?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?r:ArrayBuffer,"%ArrayIteratorPrototype%":c&&d?d([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":p,"%AsyncGenerator%":p,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":p,"%Atomics%":"undefined"==typeof Atomics?r:Atomics,"%BigInt%":"undefined"==typeof BigInt?r:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?r:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?r:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?r:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?r:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?r:FinalizationRegistry,"%Function%":o,"%GeneratorFunction%":p,"%Int8Array%":"undefined"==typeof Int8Array?r:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?r:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":c&&d?d(d([][Symbol.iterator]())):r,"%JSON%":"object"==typeof JSON?JSON:r,"%Map%":"undefined"==typeof Map?r:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&c&&d?d(new Map()[Symbol.iterator]()):r,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?r:Promise,"%Proxy%":"undefined"==typeof Proxy?r:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?r:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?r:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&c&&d?d(new Set()[Symbol.iterator]()):r,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":c&&d?d(""[Symbol.iterator]()):r,"%Symbol%":c?Symbol:r,"%SyntaxError%":n,"%ThrowTypeError%":u,"%TypedArray%":h,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?r:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?r:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?r:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?r:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?r:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?r:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?r:WeakSet};if(d)try{null.error;// eslint-disable-line no-unused-expressions
}catch(e){// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
var g=d(d(e));m["%Error.prototype%"]=g}var v=function e(t){var r;if("%AsyncFunction%"===t)r=a("async function () {}");else if("%GeneratorFunction%"===t)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=a("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&d&&(r=d(o.prototype))}return m[t]=r,r},y={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=X("1kqVG"),x=X("dESe3"),w=b.call(Function.call,Array.prototype.concat),S=b.call(Function.apply,Array.prototype.splice),_=b.call(Function.call,String.prototype.replace),E=b.call(Function.call,String.prototype.slice),A=b.call(Function.call,RegExp.prototype.exec),M=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,C=/\\(\\)?/g,T=function(e){var t=E(e,0,1),r=E(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return _(e,M,function(e,t,r,n){o[o.length]=r?_(n,C,"$1"):t||e}),o},P=function(e,t){var r,o=e;if(x(y,o)&&(o="%"+(r=y[o])[0]+"%"),x(m,o)){var a=m[o];if(a===p&&(a=v(o)),void 0===a&&!t)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:a}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new i('"allowMissing" argument must be a boolean');if(null===A(/^%?[^%]*%?$/,e))throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=T(e),o=r.length>0?r[0]:"",a=P("%"+o+"%",t),l=a.name,u=a.value,c=!1,f=a.alias;f&&(o=f[0],S(r,w([0,1],f)));for(var d=1,p=!0;d<r.length;d+=1){var h=r[d],g=E(h,0,1),v=E(h,-1);if(('"'===g||"'"===g||"`"===g||'"'===v||"'"===v||"`"===v)&&g!==v)throw new n("property names with quotes must have matching quotes");if("constructor"!==h&&p||(c=!0),o+="."+h,x(m,l="%"+o+"%"))u=m[l];else if(null!=u){if(!(h in u)){if(!t)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(s&&d+1>=r.length){var y=s(u,h);// By convention, when a data property is converted to an accessor
// property to emulate a data property that does not suffer from
// the override mistake, that accessor's getter is marked with
// an `originalValue` property. Here, when we detect this, we
// uphold the illusion by pretending to see that original data
// property, i.e., returning the value rather than the getter
// itself.
u=(p=!!y)&&"get"in y&&!("originalValue"in y.get)?y.get:u[h]}else p=x(u,h),u=u[h];p&&!c&&(m[l]=u)}}return u}}),X.register("8a7E0",function(e,t){var r="undefined"!=typeof Symbol&&Symbol,n=X("deI1o");e.exports=function(){return"function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&n()}}),X.register("fKFZZ",function(e,t){var r={foo:{}},n=Object;e.exports=function(){return({__proto__:r}).foo===r.foo&&!(({__proto__:null})instanceof n)}}),X.register("1kqVG",function(e,t){var r=X("lpSLc");e.exports=Function.prototype.bind||r}),X.register("lpSLc",function(e,t){var r=Array.prototype.slice,n=Object.prototype.toString;e.exports=function(e){var t,o=this;if("function"!=typeof o||"[object Function]"!==n.call(o))throw TypeError("Function.prototype.bind called on incompatible "+o);for(var i=r.call(arguments,1),a=Math.max(0,o.length-i.length),s=[],l=0;l<a;l++)s.push("$"+l);if(t=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(!(this instanceof t))return o.apply(e,i.concat(r.call(arguments)));var n=o.apply(this,i.concat(r.call(arguments)));return Object(n)===n?n:this}),o.prototype){var u=function(){};u.prototype=o.prototype,t.prototype=new u,u.prototype=null}return t}}),X.register("dESe3",function(e,t){var r={}.hasOwnProperty,n=Function.prototype.call;e.exports=n.bind?n.bind(r):function(e,t){return n.call(r,e,t)}}),X.register("aKnjK",function(e,t){var r=X("1kqVG"),n=X("joCfq"),o=n("%Function.prototype.apply%"),i=n("%Function.prototype.call%"),a=n("%Reflect.apply%",!0)||r.call(i,o),s=n("%Object.getOwnPropertyDescriptor%",!0),l=n("%Object.defineProperty%",!0),u=n("%Math.max%");if(l)try{l({},"a",{value:1})}catch(e){// IE 8 has a broken defineProperty
l=null}e.exports=function(e){var t=a(r,i,arguments);return s&&l&&s(t,"length").configurable&&l(t,"length",{value:1+u(0,e.length-(arguments.length-1))}),t};var c=function(){return a(r,o,arguments)};l?l(e.exports,"apply",{value:c}):e.exports.apply=c}),X.register("inS9E",function(e,t){var r,n=Object.prototype.toString,o=Function.prototype.toString,i=/^\s*(?:function)?\*/,a=X("eOEoS")(),s=Object.getPrototypeOf,l=function(){if(!a)return!1;try{return Function("return function*() {}")()}catch(e){}};e.exports=function(e){if("function"!=typeof e)return!1;if(i.test(o.call(e)))return!0;if(!a)return"[object GeneratorFunction]"===n.call(e);if(!s)return!1;if(void 0===r){var t=l();r=!!t&&s(t)}return s(e)===r}}),X.register("9MzYB",function(e,t){var r=X("edRb2"),n=X("3DJN1"),o=X("aKnjK"),i=X("7bdzw"),a=X("kQ34V"),s=i("Object.prototype.toString"),l=X("eOEoS")(),u="undefined"==typeof globalThis?G:globalThis,c=n(),f=i("String.prototype.slice"),d=Object.getPrototypeOf,p=i("Array.prototype.indexOf",!0)||function(e,t){for(var r=0;r<e.length;r+=1)if(e[r]===t)return r;return -1},h={__proto__:null};l&&a&&d?r(c,function(e){var t=new u[e];if(Symbol.toStringTag in t){var r=d(t),n=a(r,Symbol.toStringTag);n||(n=a(d(r),Symbol.toStringTag)),h["$"+e]=o(n.get)}}):r(c,function(e){var t=new u[e];h["$"+e]=o(t.slice)});var m=function(e){var t=!1;return r(h,function(r,n){if(!t)try{"$"+r(e)===n&&(t=f(n,1))}catch(e){}}),t},g=function(e){var t=!1;return r(h,function(r,n){if(!t)try{r(e),t=f(n,1)}catch(e){}}),t};e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!l){var t=f(s(e),8,-1);return p(c,t)>-1?t:"Object"===t&&g(e)}return a?m(e):null}}),X.register("edRb2",function(e,t){var r=X("cjOjN"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i=function(e,t,r){for(var n=0,i=e.length;n<i;n++)o.call(e,n)&&(null==r?t(e[n],n,e):t.call(r,e[n],n,e))},a=function(e,t,r){for(var n=0,o=e.length;n<o;n++)null==r?t(e.charAt(n),n,e):t.call(r,e.charAt(n),n,e)},s=function(e,t,r){for(var n in e)o.call(e,n)&&(null==r?t(e[n],n,e):t.call(r,e[n],n,e))};e.exports=function(e,t,o){var l;if(!r(t))throw TypeError("iterator must be a function");arguments.length>=3&&(l=o),"[object Array]"===n.call(e)?i(e,t,l):"string"==typeof e?a(e,t,l):s(e,t,l)}}),X.register("cjOjN",function(e,t){var r,n,o=Function.prototype.toString,i="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof i&&"function"==typeof Object.defineProperty)try{r=Object.defineProperty({},"length",{get:function(){throw n}}),n={},// eslint-disable-next-line no-throw-literal
i(function(){throw 42},null,r)}catch(e){e!==n&&(i=null)}else i=null;var a=/^\s*class\b/,s=function(e){try{var t=o.call(e);return a.test(t)}catch(e){return!1;// not a function
}},l=function(e){try{if(s(e))return!1;return o.call(e),!0}catch(e){return!1}},u=Object.prototype.toString,c="function"==typeof Symbol&&!!Symbol.toStringTag,f=!(0 in[,]),d=function(){return!1};if("object"==typeof document){// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
var p=document.all;u.call(p)===u.call(document.all)&&(d=function(e){/* globals document: false */// in IE 6-8, typeof document.all is "object" and it's truthy
if((f||!e)&&(void 0===e||"object"==typeof e))try{var t=u.call(e);return("[object HTMLAllCollection]"===t||"[object HTML document.all class]"===t||"[object HTMLCollection]"===t// opera 12.16
||"[object Object]"===t// IE 6-8
)&&null==e("");// eslint-disable-line eqeqeq
}catch(e){}return!1})}e.exports=i?function(e){if(d(e))return!0;if(!e||"function"!=typeof e&&"object"!=typeof e)return!1;try{i(e,null,r)}catch(e){if(e!==n)return!1}return!s(e)&&l(e)}:function(e){if(d(e))return!0;if(!e||"function"!=typeof e&&"object"!=typeof e)return!1;if(c)return l(e);if(s(e))return!1;var t=u.call(e);return!!("[object Function]"===t||"[object GeneratorFunction]"===t||/^\[object HTML/.test(t))&&l(e)}}),X.register("3DJN1",function(e,t){var r=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],n="undefined"==typeof globalThis?G:globalThis;e.exports=function(){for(var e=[],t=0;t<r.length;t++)"function"==typeof n[r[t]]&&(e[e.length]=r[t]);return e}}),X.register("kQ34V",function(e,t){var r=X("joCfq")("%Object.getOwnPropertyDescriptor%",!0);if(r)try{r([],"length")}catch(e){// IE 8 has a broken gOPD
r=null}e.exports=r}),X.register("iPgrv",function(e,t){var r=X("9MzYB");e.exports=function(e){return!!r(e)}}),X.register("1P4I0",function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}}),X.register("ir72Z",function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}}),X.register("9LElP",function(e,t){// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
var r=X("liSpS");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=a(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==h(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===h(t)?t:String(t)}function s(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),d(r,e)})(e)}function c(e,t,r){return(c=f()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&d(o,r.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=X("7XndD").inspect,g=X("7K0pG").codes.ERR_INVALID_ARG_TYPE;// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function v(e,t,r){return(void 0===r||r>e.length)&&(r=e.length),e.substring(r-t.length,r)===t}var y="",b="",x="",w="",S={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"};function _(e){var t=Object.keys(e),r=Object.create(Object.getPrototypeOf(e));return t.forEach(function(t){r[t]=e[t]}),Object.defineProperty(r,"message",{value:e.message}),r}function E(e){// The util.inspect default values could be changed. This makes sure the
// error messages contain the necessary information nevertheless.
return m(e,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,// Assert compares only enumerable properties (with a few exceptions).
showHidden:!1,// Having a long line as error is better than wrapping the line for
// comparison for now.
// TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
// have meta information about the inspected properties (i.e., know where
// in what line the property starts and ends).
breakLength:1/0,// Assert does not detect proxies currently.
showProxy:!1,sorted:!0,// Inspect getters as we also check them when comparing entries.
getters:!0})}var A=/*#__PURE__*/function(e,t){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(A,e);var n,a,u,c=(n=f(),function(){var e,t=p(A);if(n){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function A(e){if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,A),"object"!==h(e)||null===e)throw new g("options","Object",e);var t,n=e.message,o=e.operator,i=e.stackStartFn,a=e.actual,u=e.expected,f=Error.stackTraceLimit;if(Error.stackTraceLimit=0,null!=n)t=c.call(this,String(n));else if(r.stderr&&r.stderr.isTTY&&(r.stderr&&r.stderr.getColorDepth&&1!==r.stderr.getColorDepth()?(y="\x1b[34m",b="\x1b[32m",w="\x1b[39m",x="\x1b[31m"):(y="",b="",w="",x="")),"object"===h(a)&&null!==a&&"object"===h(u)&&null!==u&&"stack"in a&&a instanceof Error&&"stack"in u&&u instanceof Error&&(a=_(a),u=_(u)),"deepStrictEqual"===o||"strictEqual"===o)t=c.call(this,function(e,t,n){var o="",i="",a=0,s="",l=!1,u=E(e),c=u.split("\n"),f=E(t).split("\n"),d=0,p="";// If "actual" and "expected" fit on a single line and they are not strictly
// equal, check further special handling.
if("strictEqual"===n&&"object"===h(e)&&"object"===h(t)&&null!==e&&null!==t&&(n="strictEqualObject"),1===c.length&&1===f.length&&c[0]!==f[0]){var m=c[0].length+f[0].length;// If the character length of "actual" and "expected" together is less than
// kMaxShortLength and if neither is an object and at least one of them is
// not `zero`, use the strict equal comparison to visualize the output.
if(m<=10){if(("object"!==h(e)||null===e)&&("object"!==h(t)||null===t)&&(0!==e||0!==t))return"".concat(S[n],"\n\n")+"".concat(c[0]," !== ").concat(f[0],"\n")}else if("strictEqualObject"!==n&&m<(r.stderr&&r.stderr.isTTY?r.stderr.columns:80)){for(;c[0][d]===f[0][d];)d++;// Ignore the first characters.
d>2&&(// Add position indicator for the first mismatch in case it is a
// single line and the input length is less than the column length.
p="\n  ".concat(// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function(e,t){if(t=Math.floor(t),0==e.length||0==t)return"";var r=e.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)e+=e,t--;return e+e.substring(0,r-e.length)}(" ",d),"^"),d=0)}}for(// Remove all ending lines that match (this optimizes the output for
// readability by reducing the number of total changed lines).
var g=c[c.length-1],_=f[f.length-1];g===_&&(d++<2?s="\n  ".concat(g).concat(s):o=g,c.pop(),f.pop(),0!==c.length&&0!==f.length);)g=c[c.length-1],_=f[f.length-1];var A=Math.max(c.length,f.length);// Strict equal with identical objects that are not identical by reference.
// E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
if(0===A){// We have to get the result again. The lines were all removed before.
var M=u.split("\n");// Only remove lines in case it makes sense to collapse those.
// TODO: Accept env to always show the full error.
if(M.length>30)for(M[26]="".concat(y,"...").concat(w);M.length>27;)M.pop();return"".concat(S.notIdentical,"\n\n").concat(M.join("\n"),"\n")}d>3&&(s="\n".concat(y,"...").concat(w).concat(s),l=!0),""!==o&&(s="\n  ".concat(o).concat(s),o="");var C=0,T=S[n]+"\n".concat(b,"+ actual").concat(w," ").concat(x,"- expected").concat(w),P=" ".concat(y,"...").concat(w," Lines skipped");for(d=0;d<A;d++){// Only extra expected lines exist
var O=d-a;if(c.length<d+1)O>1&&d>2&&(O>4?(i+="\n".concat(y,"...").concat(w),l=!0):O>3&&(i+="\n  ".concat(f[d-2]),C++),i+="\n  ".concat(f[d-1]),C++),// Mark the current line as the last diverging one.
a=d,// Add the expected line to the cache.
o+="\n".concat(x,"-").concat(w," ").concat(f[d]),C++;else if(f.length<d+1)O>1&&d>2&&(O>4?(i+="\n".concat(y,"...").concat(w),l=!0):O>3&&(i+="\n  ".concat(c[d-2]),C++),i+="\n  ".concat(c[d-1]),C++),// Mark the current line as the last diverging one.
a=d,// Add the actual line to the result.
i+="\n".concat(b,"+").concat(w," ").concat(c[d]),C++;else{var R=f[d],L=c[d],N=L!==R&&(!v(L,",")||L.slice(0,-1)!==R);N&&v(R,",")&&R.slice(0,-1)===L&&(N=!1,L+=","),N?(O>1&&d>2&&(O>4?(i+="\n".concat(y,"...").concat(w),l=!0):O>3&&(i+="\n  ".concat(c[d-2]),C++),i+="\n  ".concat(c[d-1]),C++),// Mark the current line as the last diverging one.
a=d,// Add the actual line to the result and cache the expected diverging
// line so consecutive diverging lines show up as +++--- and not +-+-+-.
i+="\n".concat(b,"+").concat(w," ").concat(L),o+="\n".concat(x,"-").concat(w," ").concat(R),C+=2):(// Add all cached information to the result before adding other things
// and reset the cache.
i+=o,o="",(1===O||0===d)&&(i+="\n  ".concat(L),C++))}// Inspected object to big (Show ~20 rows max)
if(C>20&&d<A-2)return"".concat(T).concat(P,"\n").concat(i,"\n").concat(y,"...").concat(w).concat(o,"\n")+"".concat(y,"...").concat(w)}return"".concat(T).concat(l?P:"","\n").concat(i).concat(o).concat(s).concat(p)}(a,u,o));else if("notDeepStrictEqual"===o||"notStrictEqual"===o){// In case the objects are equal but the operator requires unequal, show
// the first object and say A equals B
var d=S[o],p=E(a).split("\n");// Only remove lines in case it makes sense to collapse those.
// TODO: Accept env to always show the full error.
if("notStrictEqual"===o&&"object"===h(a)&&null!==a&&(d=S.notStrictEqualObject),p.length>30)for(p[26]="".concat(y,"...").concat(w);p.length>27;)p.pop();t=1===p.length?c.call(this,"".concat(d," ").concat(p[0])):c.call(this,"".concat(d,"\n\n").concat(p.join("\n"),"\n"))}else{var m=E(a),M="",C=S[o];"notDeepEqual"===o||"notEqual"===o?(m="".concat(S[o],"\n\n").concat(m)).length>1024&&(m="".concat(m.slice(0,1021),"...")):(M="".concat(E(u)),m.length>512&&(m="".concat(m.slice(0,509),"...")),M.length>512&&(M="".concat(M.slice(0,509),"...")),"deepEqual"===o||"equal"===o?m="".concat(C,"\n\n").concat(m,"\n\nshould equal\n\n"):M=" ".concat(o," ").concat(M)),t=c.call(this,"".concat(m).concat(M))}return Error.stackTraceLimit=f,t.generatedMessage=!n,Object.defineProperty(l(t),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),t.code="ERR_ASSERTION",t.actual=a,t.expected=u,t.operator=o,Error.captureStackTrace&&Error.captureStackTrace(l(t),i),// Create error message including the error code in the name.
t.stack,// Reset the name.
t.name="AssertionError",s(t)}return a=[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:t,value:function(e,t){// This limits the `actual` and `expected` property default inspection to
// the minimum depth. Otherwise those values would be too verbose compared
// to the actual error message which contains a combined view of these two
// input values.
return m(this,o(o({},t),{},{customInspect:!1,depth:0}))}}],i(A.prototype,a),u&&i(A,u),Object.defineProperty(A,"prototype",{writable:!1}),A}(/*#__PURE__*/u(Error),m.custom);e.exports=A}),X.register("9v8zJ",function(e,t){var r=X("1U5DU"),n=function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},n=0;n<t.length;++n)r[t[n]]=t[n];/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */var o=Object.assign({},r),i="";for(var a in o)i+=a;return e!==i},o=function(){if(!Object.assign||!Object.preventExtensions)return!1;/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1};e.exports=function(){return!Object.assign||n()||o()?r:Object.assign}}),X.register("1U5DU",function(e,t){var r=X("7CVZZ"),n=X("deI1o")(),o=X("7bdzw"),i=Object,a=o("Array.prototype.push"),s=o("Object.prototype.propertyIsEnumerable"),l=n?Object.getOwnPropertySymbols:null;// eslint-disable-next-line no-unused-vars
e.exports=function(e,t){if(null==e)throw TypeError("target must be an object");var o=i(e);// step 1
if(1==arguments.length)return o;// step 2
for(var u=1;u<arguments.length;++u){var c=i(arguments[u]),f=r(c),d=n&&(Object.getOwnPropertySymbols||l);// step 3.a.i
if(d)for(var p=d(c),h=0;h<p.length;++h){var m=p[h];s(c,m)&&a(f,m)}// step 3.a.iii:
for(var g=0;g<f.length;++g){var v=f[g];if(s(c,v)){var y=c[v];// step 3.a.iii.2.a
o[v]=y;// step 3.a.iii.2.b
}}}return o;// step 4
}}),X.register("7CVZZ",function(e,t){var r=Array.prototype.slice,n=X("bfwib"),o=Object.keys,i=o?function(e){return o(e)}:X("flsOX"),a=Object.keys;i.shim=function(){return Object.keys?!function(){// Safari 5.0 bug
var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2)&&(Object.keys=function(e){return n(e)?a(r.call(e)):a(e)}):Object.keys=i,Object.keys||i},e.exports=i}),X.register("bfwib",function(e,t){var r=Object.prototype.toString;e.exports=function(e){var t=r.call(e),n="[object Arguments]"===t;return n||(n="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===r.call(e.callee)),n}}),X.register("flsOX",function(e,t){var r;if(!Object.keys){// modified from https://github.com/es-shims/es5-shim
var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=X("bfwib"),a=Object.prototype.propertyIsEnumerable,s=!a.call({toString:null},"toString"),l=a.call(function(){},"prototype"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(e){var t=e.constructor;return t&&t.prototype===e},f={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},d=function(){/* global window */if("undefined"==typeof window)return!1;for(var e in window)try{if(!f["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{c(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),p=function(e){/* global window */if("undefined"==typeof window||!d)return c(e);try{return c(e)}catch(e){return!1}};r=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),a=i(e),c=t&&"[object String]"===o.call(e),f=[];if(!t&&!r&&!a)throw TypeError("Object.keys called on a non-object");var d=l&&r;if(c&&e.length>0&&!n.call(e,0))for(var h=0;h<e.length;++h)f.push(String(h));if(a&&e.length>0)for(var m=0;m<e.length;++m)f.push(String(m));else for(var g in e)!(d&&"prototype"===g)&&n.call(e,g)&&f.push(String(g));if(s)for(var v=p(e),y=0;y<u.length;++y)!(v&&"constructor"===u[y])&&n.call(e,u[y])&&f.push(u[y]);return f}}e.exports=r}),X.register("hT0td",function(e,t){var r=X("5XYVk");e.exports=function(){return"function"==typeof Object.is?Object.is:r}}),X.register("5XYVk",function(e,t){var r=function(e){return e!=e};e.exports=function(e,t){return 0===e&&0===t?1/e==1/t:!!(e===t||r(e)&&r(t))}}),X.register("gNEYh",function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=void 0!==/a/g.flags,a=function(e){var t=[];return e.forEach(function(e){return t.push(e)}),t},s=function(e){var t=[];return e.forEach(function(e,r){return t.push([r,e])}),t},l=Object.is?Object.is:X("kEn0T"),u=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},c=Number.isNaN?Number.isNaN:X("1HkNB");function f(e){return e.call.bind(e)}var d=f(Object.prototype.hasOwnProperty),p=f(Object.prototype.propertyIsEnumerable),h=f(Object.prototype.toString),m=X("7XndD").types,g=m.isAnyArrayBuffer,v=m.isArrayBufferView,y=m.isDate,b=m.isMap,x=m.isRegExp,w=m.isSet,S=m.isNativeError,_=m.isBoxedPrimitive,E=m.isNumberObject,A=m.isStringObject,M=m.isBooleanObject,C=m.isBigIntObject,T=m.isSymbolObject,P=m.isFloat32Array,O=m.isFloat64Array;function R(e){if(0===e.length||e.length>10)return!0;for(var t=0;t<e.length;t++){var r=e.charCodeAt(t);if(r<48||r>57)return!0}// The maximum size for an array is 2 ** 32 -1.
return 10===e.length&&e>=4294967296}function L(e){return Object.keys(e).filter(R).concat(u(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))}// Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function N(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0}var D=void 0;// Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function F(e,t,r,n){// All identical values are equivalent, as determined by ===.
if(e===t)return 0!==e||!r||l(e,t);// Check more closely if val1 and val2 are equal.
if(r){if("object"!==o(e))return"number"==typeof e&&c(e)&&c(t);if("object"!==o(t)||null===e||null===t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1}else{if(null===e||"object"!==o(e))return(null===t||"object"!==o(t))&&e==t;if(null===t||"object"!==o(t))return!1}var a=h(e);if(a!==h(t))return!1;if(Array.isArray(e)){// Check for sparse arrays and general fast path
if(e.length!==t.length)return!1;var s=L(e,D),u=L(t,D);return s.length===u.length&&U(e,t,r,n,1,s)}// [browserify] This triggers on certain types in IE (Map/Set) so we don't
// wan't to early return out of the rest of the checks. However we can check
// if the second value is one of these values and the first isn't.
if("[object Object]"===a&&(!b(e)&&b(t)||!w(e)&&w(t)))return!1;if(y(e)){if(!y(t)||Date.prototype.getTime.call(e)!==Date.prototype.getTime.call(t))return!1}else if(x(e)){if(!x(t)||(i?e.source!==t.source||e.flags!==t.flags:RegExp.prototype.toString.call(e)!==RegExp.prototype.toString.call(t)))return!1}else if(S(e)||e instanceof Error)// Do not compare the stack as it might differ even though the error itself
// is otherwise identical.
{if(e.message!==t.message||e.name!==t.name)return!1}else if(v(e)){if(!r&&(P(e)||O(e))){if(!function(e,t){if(e.byteLength!==t.byteLength)return!1;for(var r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0}(e,t))return!1}else if(e.byteLength!==t.byteLength||0!==N(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength)))return!1;// Buffer.compare returns true, so val1.length === val2.length. If they both
// only contain numeric keys, we don't need to exam further than checking
// the symbols.
var f=L(e,D),d=L(t,D);return f.length===d.length&&U(e,t,r,n,0,f)}else if(w(e))return!!w(t)&&e.size===t.size&&U(e,t,r,n,2);else if(b(e))return!!b(t)&&e.size===t.size&&U(e,t,r,n,3);else if(g(e)){if(e.byteLength!==t.byteLength||0!==N(new Uint8Array(e),new Uint8Array(t)))return!1}else if(_(e)&&(E(e)?!(E(t)&&l(Number.prototype.valueOf.call(e),Number.prototype.valueOf.call(t))):A(e)?!A(t)||String.prototype.valueOf.call(e)!==String.prototype.valueOf.call(t):M(e)?!M(t)||Boolean.prototype.valueOf.call(e)!==Boolean.prototype.valueOf.call(t):C(e)?!C(t)||BigInt.prototype.valueOf.call(e)!==BigInt.prototype.valueOf.call(t):!T(t)||Symbol.prototype.valueOf.call(e)!==Symbol.prototype.valueOf.call(t)))return!1;return U(e,t,r,n,0)}function I(e,t){return t.filter(function(t){return p(e,t)})}function U(e,t,n,i,l,c){// For all remaining Object pairs, including Array, objects and Maps,
// equivalence is determined by having:
// a) The same number of owned enumerable properties
// b) The same set of keys/indexes (although not necessarily the same order)
// c) Equivalent values for every corresponding key/index
// d) For Sets and Maps, equal contents
// Note: this accounts for both named and indexed properties on Arrays.
if(5==arguments.length){c=Object.keys(e);var f=Object.keys(t);// The pair must have the same number of owned properties.
if(c.length!==f.length)return!1}for(// Cheap key test
var h=0;h<c.length;h++)if(!d(t,c[h]))return!1;if(n&&5==arguments.length){var m=u(e);if(0!==m.length){var g=0;for(h=0;h<m.length;h++){var v=m[h];if(p(e,v)){if(!p(t,v))return!1;c.push(v),g++}else if(p(t,v))return!1}var y=u(t);if(m.length!==y.length&&I(t,y).length!==g)return!1}else{var b=u(t);if(0!==b.length&&0!==I(t,b).length)return!1}}if(0===c.length&&(0===l||1===l&&0===e.length||0===e.size))return!0;// Use memos to handle cycles.
if(void 0===i)i={val1:new Map,val2:new Map,position:0};else{// We prevent up to two map.has(x) calls by directly retrieving the value
// and checking for undefined. The map can only contain numbers, so it is
// safe to check for undefined only.
var x=i.val1.get(e);if(void 0!==x){var w=i.val2.get(t);if(void 0!==w)return x===w}i.position++}i.val1.set(e,i.position),i.val2.set(t,i.position);var S=function(e,t,n,i,l,u){// Sets and maps don't have their entries accessible via normal object
// properties.
var c=0;if(2===u){if(!function(e,t,r,n){for(var i=null,s=a(e),l=0;l<s.length;l++){var u=s[l];// Note: Checking for the objects first improves the performance for object
// heavy sets but it is a minor slow down for primitives. As they are fast
// to check this improves the worst case scenario instead.
if("object"===o(u)&&null!==u)null===i&&(i=new Set),// If the specified value doesn't exist in the second set its an not null
// object (or non strict only: a not matching primitive) we'll need to go
// hunting for something thats deep-(strict-)equal to it. To make this
// O(n log n) complexity we have to copy these values in a new set first.
i.add(u);else if(!t.has(u)){if(r||!function(e,t,r){var n=k(r);return null!=n?n:t.has(n)&&!e.has(n)}(e,t,u))return!1;null===i&&(i=new Set),i.add(u)}}if(null!==i){for(var c=a(t),f=0;f<c.length;f++){var d=c[f];// We have to check if a primitive value is already
// matching and only if it's not, go hunting for it.
if("object"===o(d)&&null!==d){if(!z(i,d,r,n))return!1}else if(!r&&!e.has(d)&&!z(i,d,r,n))return!1}return 0===i.size}return!0}(e,t,n,l))return!1}else if(3===u){if(!function(e,t,n,i){for(var a=null,l=s(e),u=0;u<l.length;u++){var c=r(l[u],2),f=c[0],d=c[1];if("object"===o(f)&&null!==f)null===a&&(a=new Set),a.add(f);else{// By directly retrieving the value we prevent another b.has(key) check in
// almost all possible cases.
var p=t.get(f);if(void 0===p&&!t.has(f)||!F(d,p,n,i)){if(n||!function(e,t,r,n,o){var i=k(r);if(null!=i)return i;var a=t.get(i);return!!((void 0!==a||t.has(i))&&F(n,a,!1,o))&&!e.has(i)&&F(n,a,!1,o)}(e,t,f,d,i))return!1;null===a&&(a=new Set),a.add(f)}}}if(null!==a){for(var h=s(t),m=0;m<h.length;m++){var g=r(h[m],2),v=g[0],y=g[1];if("object"===o(v)&&null!==v){if(!B(a,e,v,y,n,i))return!1}else if(!n&&(!e.has(v)||!F(e.get(v),y,!1,i))&&!B(a,e,v,y,!1,i))return!1}return 0===a.size}return!0}(e,t,n,l))return!1}else if(1===u)for(;c<e.length;c++)if(d(e,c)){if(!d(t,c)||!F(e[c],t[c],n,l))return!1}else{if(d(t,c))return!1;for(// Array is sparse.
var f=Object.keys(e);c<f.length;c++){var p=f[c];if(!d(t,p)||!F(e[p],t[p],n,l))return!1}if(f.length!==Object.keys(t).length)return!1;return!0}// The pair must have equivalent values for every corresponding key.
// Possibly expensive deep test:
for(c=0;c<i.length;c++){var h=i[c];if(!F(e[h],t[h],n,l))return!1}return!0}(e,t,n,c,i,l);return i.val1.delete(e),i.val2.delete(t),S}function z(e,t,r,n){for(var o=a(e),i=0;i<o.length;i++){var s=o[i];if(F(t,s,r,n))return(// Remove the matching element to make sure we do not check that again.
e.delete(s),!0)}return!1}// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function k(e){switch(o(e)){case"undefined":return null;case"object":// Only pass in null as object!
return;case"symbol":return!1;case"string":e=+e;// Loose equal entries exist only if the string is possible to convert to
// a regular number and not NaN.
// Fall through
case"number":if(c(e))return!1}return!0}function B(e,t,r,n,o,i){for(var s=a(e),l=0;l<s.length;l++){var u=s[l];if(F(r,u,o,i)&&F(n,t.get(u),o,i))return e.delete(u),!0}return!1}e.exports={isDeepEqual:function(e,t){return F(e,t,!1)},isDeepStrictEqual:function(e,t){return F(e,t,!0)}}}),X.register("kEn0T",function(e,t){var r=X("a4fnF"),n=X("aKnjK"),o=X("5XYVk"),i=X("hT0td"),a=X("gpohG"),s=n(i(),Object);r(s,{getPolyfill:i,implementation:o,shim:a}),e.exports=s}),X.register("a4fnF",function(e,t){var r=X("7CVZZ"),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,i=Array.prototype.concat,a=X("2CbmM"),s=X("8wlhN")(),l=function(e,t,r,n){if(t in e){if(!0===n){if(e[t]===r)return}else if(!("function"==typeof n&&"[object Function]"===o.call(n))||!n())return}s?a(e,t,r,!0):a(e,t,r)},u=function(e,t){var o=arguments.length>2?arguments[2]:{},a=r(t);n&&(a=i.call(a,Object.getOwnPropertySymbols(t)));for(var s=0;s<a.length;s+=1)l(e,a[s],t[a[s]],o[a[s]])};u.supportsDescriptors=!!s,e.exports=u}),X.register("2CbmM",function(e,t){var r=X("8wlhN")(),n=X("joCfq"),o=r&&n("%Object.defineProperty%",!0),i=n("%SyntaxError%"),a=n("%TypeError%"),s=X("kQ34V");/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */e.exports=function(e,t,r){if(!e||"object"!=typeof e&&"function"!=typeof e)throw new a("`obj` must be an object or a function`");if("string"!=typeof t&&"symbol"!=typeof t)throw new a("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new a("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new a("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new a("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new a("`loose`, if provided, must be a boolean");var n=arguments.length>3?arguments[3]:null,l=arguments.length>4?arguments[4]:null,u=arguments.length>5?arguments[5]:null,c=arguments.length>6&&arguments[6],f=!!s&&s(e,t);if(o)o(e,t,{configurable:null===u&&f?f.configurable:!u,enumerable:null===n&&f?f.enumerable:!n,value:r,writable:null===l&&f?f.writable:!l});else if(!c&&(n||l||u))throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");else e[t]=r;// eslint-disable-line no-param-reassign
}}),X.register("8wlhN",function(e,t){var r=X("joCfq")("%Object.defineProperty%",!0),n=function(){if(r)try{return r({},"a",{value:1}),!0}catch(e){}return!1};n.hasArrayLengthDefineBug=function(){// node v0.6 has a bug where array lengths can be Set but not Defined
if(!n())return null;try{return 1!==r([],"length",{value:1}).length}catch(e){// In Firefox 4-22, defining length on an array throws an exception.
return!0}},e.exports=n}),X.register("gpohG",function(e,t){var r=X("hT0td"),n=X("a4fnF");e.exports=function(){var e=r();return n(Object,{is:e},{is:function(){return Object.is!==e}}),e}}),X.register("1HkNB",function(e,t){var r=X("aKnjK"),n=X("a4fnF"),o=X("gcsrM"),i=X("5fGpP"),a=X("7L6SW"),s=r(i(),Number);/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */n(s,{getPolyfill:i,implementation:o,shim:a}),e.exports=s}),X.register("gcsrM",function(e,t){/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */e.exports=function(e){return e!=e}}),X.register("5fGpP",function(e,t){var r=X("gcsrM");e.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:r}}),X.register("7L6SW",function(e,t){var r=X("a4fnF"),n=X("5fGpP");/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */e.exports=function(){var e=n();return r(Number,{isNaN:e},{isNaN:function(){return Number.isNaN!==e}}),e}}),X.register("3FCuC",function(e,t){/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */var r=X("liSpS");/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */function n(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=void 0),e}(t=e.exports=X("hEyvy")).log=/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */function(){// this hackery is required for IE8/9, where
// the `console.log` function doesn't have 'apply'
return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),r){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");// the final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&// (the user may have provided their own)
(i=o))}),e.splice(i,0,n)}},t.save=/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=n,t.useColors=/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */function(){return(// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
"undefined"!=typeof window&&!!window.process&&"renderer"===window.process.type||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||// is firebug? http://stackoverflow.com/a/398120/376773
"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||// is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||// double check webkit in userAgent just in case we are in a worker
"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */function(){try{return window.localStorage}catch(e){}}(),/**
 * Colors.
 */t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */t.enable(n())}),X.register("hEyvy",function(e,t){var r;/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */function n(e){function n(){// disabled?
if(n.enabled){// set `diff` timestamp
var e=+new Date,o=e-(r||e);n.diff=o,n.prev=r,n.curr=e,r=e;for(var i=Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");// apply any `formatters` transformations
var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(e,r){// if we encounter an escaped % then don't increase the array index
if("%%"===e)return e;s++;var o=t.formatters[r];if("function"==typeof o){var a=i[s];e=o.call(n,a),// now we need to remove `args[index]` since it's inlined in the `format`
i.splice(s,1),s--}return e}),// apply env-specific formatting (colors, etc.)
t.formatArgs.call(n,i),(n.log||t.log||console.log.bind(console)).apply(n,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r)|0;// Convert to 32bit integer
return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */(t=e.exports=n.debug=n.default=n).coerce=/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */function(e){return e instanceof Error?e.stack||e.message:e},t.disable=/**
 * Disable debug output.
 *
 * @api public
 */function(){t.enable("")},t.enable=/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.substr(1)+"$")):t.names.push(RegExp("^"+e+"$")));// ignore empty strings
},t.enabled=/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=X("cPdD0"),/**
 * The currently active debug mode names, and names to skip.
 */t.names=[],t.skips=[],/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */t.formatters={}}),X.register("cPdD0",function(e,t){/**
 * Pluralization helper.
 */function r(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return(/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"days":case"day":case"d":return 864e5*r;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e));if("number"===n&&!1===isNaN(e))return t.long?r(e,864e5,"day")||r(e,36e5,"hour")||r(e,6e4,"minute")||r(e,1e3,"second")||e+" ms":e>=864e5?Math.round(e/864e5)+"d":e>=36e5?Math.round(e/36e5)+"h":e>=6e4?Math.round(e/6e4)+"m":e>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}),X.register("ksOMs",function(e,t){e.exports={create:function(){return[0,0,0]},set:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},copy:function(e){return e.slice(0)},equals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]},add:function(e,t){return e[0]+=t[0],e[1]+=t[1],e[2]+=t[2],e},addScaled:function(e,t,r){return e[0]+=t[0]*r,e[1]+=t[1]*r,e[2]+=t[2]*r,e},sub:function(e,t){return e[0]-=t[0],e[1]-=t[1],e[2]-=t[2],e},scale:function(e,t){return e[0]*=t,e[1]*=t,e[2]*=t,e},multMat4:function(e,t){var r=e[0],n=e[1],o=e[2];return e[0]=t[0]*r+t[4]*n+t[8]*o+t[12],e[1]=t[1]*r+t[5]*n+t[9]*o+t[13],e[2]=t[2]*r+t[6]*n+t[10]*o+t[14],e},multQuat:function(e,t){var r=e[0],n=e[1],o=e[2],i=t[0],a=t[1],s=t[2],l=t[3],u=l*r+a*o-s*n,c=l*n+s*r-i*o,f=l*o+i*n-a*r,d=-i*r-a*n-s*o;return e[0]=u*l+-(d*i)+-(c*s)- -(f*a),e[1]=c*l+-(d*a)+-(f*i)- -(u*s),e[2]=f*l+-(d*s)+-(u*a)- -(c*i),e},dot:function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},cross:function(e,t){var r=e[0],n=e[1],o=e[2],i=t[0],a=t[1],s=t[2];return e[0]=n*s-a*o,e[1]=o*i-s*r,e[2]=r*a-i*n,e},length:function(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)},lengthSq:function(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n},normalize:function(e){var t=e[0],r=e[1],n=e[2],o=Math.sqrt(t*t+r*r+n*n);return o=1/(o||1),e[0]*=o,e[1]*=o,e[2]*=o,e},distance:function(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)},distanceSq:function(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o},limit:function(e,t){var r=e[0],n=e[1],o=e[2],i=r*r+n*n+o*o,a=t*t;if(a>0&&i>a){var s=t/Math.sqrt(i);e[0]*=s,e[1]*=s,e[2]*=s}return e},lerp:function(e,t,r){var n=e[0],o=e[1],i=e[2];return e[0]=n+(t[0]-n)*r,e[1]=o+(t[1]-o)*r,e[2]=i+(t[2]-i)*r,e},toString:function(e,t){var r=Math.pow(10,void 0!==t?t:4);return"["+(Math.floor(e[0]*r)/r+", "+Math.floor(e[1]*r)/r+", "+Math.floor(e[2]*r)/r)+"]"}}}),X.register("lryJ3",function(e,t){e.exports={create:function(){return[0,0,0,1]},set:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},fromVec3:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1,e},multMat4:function(e,t){var r=e[0],n=e[1],o=e[2],i=e[3];return e[0]=t[0]*r+t[4]*n+t[8]*o+t[12]*i,e[1]=t[1]*r+t[5]*n+t[9]*o+t[13]*i,e[2]=t[2]*r+t[6]*n+t[10]*o+t[14]*i,e[3]=t[3]*r+t[7]*n+t[11]*o+t[15]*i,e},copy:function(e){return e.slice(0)},scale:function(e,t){return e[0]*=t,e[1]*=t,e[2]*=t,e[3]*=t,e},equals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}}}),X.register("lbKz8",function(e,t){e.exports={_set9:function(e,t,r,n,o,i,a,s,l,u){return e[0]=t,e[1]=r,e[2]=n,e[3]=o,e[4]=i,e[5]=a,e[6]=s,e[7]=l,e[8]=u,e},// documented
create:function(){return[1,0,0,0,1,0,0,0,1]},set:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},identity:function(e){return e[0]=e[4]=e[8]=1,e[1]=e[2]=e[3]=e[5]=e[6]=e[7]=0,e},equals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]},mult:function(e,t){let r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=t[0],d=t[1],p=t[2],h=t[3],m=t[4],g=t[5],v=t[6],y=t[7],b=t[8];return e[0]=f*r+d*i+p*l,e[1]=f*n+d*a+p*u,e[2]=f*o+d*s+p*c,e[3]=h*r+m*i+g*l,e[4]=h*n+m*a+g*u,e[5]=h*o+m*s+g*c,e[6]=v*r+y*i+b*l,e[7]=v*n+y*a+b*u,e[8]=v*o+y*s+b*c,e},fromMat2x3:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e},fromMat4:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e},fromQuat:function(e,t){var r=t[0],n=t[1],o=t[2],i=t[3],a=r+r,s=n+n,l=o+o,u=r*a,c=r*s,f=r*l,d=n*s,p=n*l,h=o*l,m=i*a,g=i*s,v=i*l;return e[0]=1-(d+h),e[3]=c-v,e[6]=f+g,e[1]=c+v,e[4]=1-(u+h),e[7]=p-m,e[2]=f-g,e[5]=p+m,e[8]=1-(u+d),e}}}),X.register("iFSYq",function(e,t){var r=X("1vV4g");function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(e,t,r,n,o,i,a,s,l,u,c,f,d,p,h,m,g){var v=e[0],y=e[1],b=e[2],x=e[3],w=e[4],S=e[5],_=e[6],E=e[7],A=e[8],M=e[9],C=e[10],T=e[11],P=e[12],O=e[13],R=e[14],L=e[15];return e[0]=t*v+r*w+n*A+o*P,e[1]=t*y+r*S+n*M+o*O,e[2]=t*b+r*_+n*C+o*R,e[3]=t*x+r*E+n*T+o*L,e[4]=i*v+a*w+s*A+l*P,e[5]=i*y+a*S+s*M+l*O,e[6]=i*b+a*_+s*C+l*R,e[7]=i*x+a*E+s*T+l*L,e[8]=u*v+c*w+f*A+d*P,e[9]=u*y+c*S+f*M+d*O,e[10]=u*b+c*_+f*C+d*R,e[11]=u*x+c*E+f*T+d*L,e[12]=p*v+h*w+m*A+g*P,e[13]=p*y+h*S+m*M+g*O,e[14]=p*b+h*_+m*C+g*R,e[15]=p*x+h*E+m*T+g*L,e}function i(e,t){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],h=e[12],m=e[13],g=e[14],v=e[15],y=t[0],b=t[1],x=t[2],w=t[3],S=t[4],_=t[5],E=t[6],A=t[7],M=t[8],C=t[9],T=t[10],P=t[11],O=t[12],R=t[13],L=t[14],N=t[15];return e[0]=y*r+b*a+x*c+w*h,e[1]=y*n+b*s+x*f+w*m,e[2]=y*o+b*l+x*d+w*g,e[3]=y*i+b*u+x*p+w*v,e[4]=S*r+_*a+E*c+A*h,e[5]=S*n+_*s+E*f+A*m,e[6]=S*o+_*l+E*d+A*g,e[7]=S*i+_*u+E*p+A*v,e[8]=M*r+C*a+T*c+P*h,e[9]=M*n+C*s+T*f+P*m,e[10]=M*o+C*l+T*d+P*g,e[11]=M*i+C*u+T*p+P*v,e[12]=O*r+R*a+L*c+N*h,e[13]=O*n+R*s+L*f+N*m,e[14]=O*o+R*l+L*d+N*g,e[15]=O*i+R*u+L*p+N*v,e}function a(e){return e[0]=e[5]=e[10]=e[15]=1,e[1]=e[2]=e[3]=e[4]=e[6]=e[7]=e[8]=e[9]=e[11]=e[12]=e[13]=e[14]=0,e}function s(e,t,r,n){return o(e,t,0,0,0,0,r,0,0,0,0,n,0,0,0,0,1)}function l(e,t){return s(e,t[0],t[1],t[2])}function u(e,t,r,n){return o(e,1,0,0,0,0,1,0,0,0,0,1,0,t,r,n,1)}function c(e,t){return u(e,t[0],t[1],t[2])}function f(e,t,r,n,i){var a,s,l,u,c,f,d,p,h,m,g,v,y=Math.sqrt(r*r+n*n+i*i);return y<1e-4?null:(r*=y=1/y,n*=y,i*=y,a=Math.sin(t),o(e,1*(u=r*r*(l=1-(s=Math.cos(t)))+s)+0*(c=n*r*l+i*a)+0*(f=i*r*l-n*a),0*u+1*c+0*f,0*u+0*c+1*f,0*u+0*c+0*f,1*(d=r*n*l-i*a)+0*(p=n*n*l+s)+0*(h=i*n*l+r*a),0*d+1*p+0*h,0*d+0*p+1*h,0*d+0*p+0*h,1*(m=r*i*l+n*a)+0*(g=n*i*l-r*a)+0*(v=i*i*l+s),0*m+1*g+0*v,0*m+0*g+1*v,0*m+0*g+0*v,0,0,0,1))}function d(e,t){var r=t[0],n=t[1],o=t[2],i=t[3],a=r+r,s=n+n,l=o+o,u=r*a,c=r*s,f=r*l,d=n*s,p=n*l,h=o*l,m=i*a,g=i*s,v=i*l;return e[0]=1-(d+h),e[4]=c-v,e[8]=f+g,e[1]=c+v,e[5]=1-(u+h),e[9]=p-m,e[2]=f-g,e[6]=p+m,e[10]=1-(u+d),e[3]=e[7]=e[11]=e[12]=e[13]=e[14]=0,e[15]=1,e}let p=n();e.exports={_mult16:o,_scale3:s,_translate3:u,_rotate3:f,_lookAt9:function(e,t,r,n,o,i,a,s,l,u){var c,f,d,p,h,m,g,v,y,b;return 1e-6>Math.abs(t-o)&&1e-6>Math.abs(r-i)&&1e-6>Math.abs(n-a)?(e[0]=1,e[1]=e[2]=e[3]=0,e[5]=1,e[4]=e[6]=e[7]=0,e[10]=1,e[8]=e[9]=e[11]=0,e[15]=1,e[12]=e[13]=e[14]=0):(b=1/Math.sqrt((g=t-o)*g+(v=r-i)*v+(y=n-a)*y),g*=b,v*=b,y*=b,(b=Math.sqrt((c=l*y-u*v)*c+(f=u*g-s*y)*f+(d=s*v-l*g)*d))&&(c*=b=1/b,f*=b,d*=b),(b=Math.sqrt((p=v*d-y*f)*p+(h=y*c-g*d)*h+(m=g*f-v*c)*m))&&(c*=b=1/b,f*=b,d*=b),e[0]=c,e[1]=p,e[2]=g,e[3]=0,e[4]=f,e[5]=h,e[6]=v,e[7]=0,e[8]=d,e[9]=m,e[10]=y,e[11]=0,e[12]=-(c*t+f*r+d*n),e[13]=-(p*t+h*r+m*n),e[14]=-(g*t+v*r+y*n),e[15]=1),e},// documented
fromMat3:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[4]=t[3],e[5]=t[4],e[6]=t[5],e[8]=t[6],e[9]=t[7],e[10]=t[8],e[3]=e[7]=e[11]=e[12]=e[13]=e[14]=0,e[15]=1,e},fromQuat:d,fromTranslationRotationScale:function(e,t,r,n){return a(e),c(e,t),i(e,d(p,r)),l(e,n),e},translate:c,scale:l,rotate:function(e,t,r){return f(e,t,r[0],r[1],r[2])},identity:a,mult:i,invert:function(e){var t=e[0],r=e[1],n=e[2],o=e[3],i=e[4],a=e[5],s=e[6],l=e[7],u=e[8],c=e[9],f=e[10],d=e[11],p=e[12],h=e[13],m=e[14],g=e[15];// TODO: add caching
e[0]=a*f*g-a*d*m-c*s*g+c*l*m+h*s*d-h*l*f,e[4]=-i*f*g+i*d*m+u*s*g-u*l*m-p*s*d+p*l*f,e[8]=i*c*g-i*d*h-u*a*g+u*l*h+p*a*d-p*l*c,e[12]=-i*c*m+i*f*h+u*a*m-u*s*h-p*a*f+p*s*c,e[1]=-r*f*g+r*d*m+c*n*g-c*o*m-h*n*d+h*o*f,e[5]=t*f*g-t*d*m-u*n*g+u*o*m+p*n*d-p*o*f,e[9]=-t*c*g+t*d*h+u*r*g-u*o*h-p*r*d+p*o*c,e[13]=t*c*m-t*f*h-u*r*m+u*n*h+p*r*f-p*n*c,e[2]=r*s*g-r*l*m-a*n*g+a*o*m+h*n*l-h*o*s,e[6]=-t*s*g+t*l*m+i*n*g-i*o*m-p*n*l+p*o*s,e[10]=t*a*g-t*l*h-i*r*g+i*o*h+p*r*l-p*o*a,e[14]=-t*a*m+t*s*h+i*r*m-i*n*h-p*r*s+p*n*a,e[3]=-r*s*d+r*l*f+a*n*d-a*o*f-c*n*l+c*o*s,e[7]=t*s*d-t*l*f-i*n*d+i*o*f+u*n*l-u*o*s,e[11]=-t*a*d+t*l*c+i*r*d-i*o*c-u*r*l+u*o*a,e[15]=t*a*f-t*s*c-i*r*f+i*n*c+u*r*s-u*n*a;var v=t*e[0]+r*e[4]+n*e[8]+o*e[12];return 0===v?null:(v=1/v,e[0]*=v,e[1]*=v,e[2]*=v,e[3]*=v,e[4]*=v,e[5]*=v,e[6]*=v,e[7]*=v,e[8]*=v,e[9]*=v,e[10]*=v,e[11]*=v,e[12]*=v,e[13]*=v,e[14]*=v,e[15]*=v,e)},transpose:function(e){var t=e[1],r=e[2],n=e[3],o=e[6],i=e[7],a=e[8],s=e[9],l=e[11],u=e[12],c=e[13],f=e[14];return(// 1st row - keeping a00
e[1]=e[4],e[2]=a,e[3]=u,// 2nd row - keeping a11
e[4]=t,e[6]=s,e[7]=c,// 3rd row - keeping a22
e[8]=r,e[9]=o,e[11]=f,// 4th row - keeping a33
e[12]=n,e[13]=i,e[14]=l,e)},equals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]},copy:function(e){return e.slice(0)},create:n,set:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},frustum:function(e,t,r,n,o,i,a){var s=1/(r-t),l=1/(o-n),u=1/(i-a),c=2*i;return e[0]=c*s,e[1]=e[2]=0,e[3]=0,e[4]=0,e[5]=c*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(o+n)*l,e[10]=(a+i)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=a*c*u,e[15]=0,e},perspective:function(e,t,n,o,i){r(t<Math.PI,"mat4.perpsective: vertical field of view should be in radians (0 to PI)");var a=1/Math.tan(.5*t),s=1/(o-i);return e[1]=e[2]=e[3]=e[4]=e[6]=e[7]=e[8]=e[9]=e[12]=e[13]=e[15]=0,e[0]=a/n,e[5]=a,e[10]=(i+o)*s,e[11]=-1,e[14]=2*i*o*s,e},ortho:function(e,t,r,n,o,i,a){var s=t-r,l=n-o,u=i-a;return e[1]=e[2]=e[3]=e[4]=e[6]=e[7]=e[8]=e[9]=e[11]=0,e[0]=-2/s,e[5]=-2/l,e[10]=2/u,e[12]=(t+r)/s,e[13]=(o+n)/l,e[14]=(a+i)/u,e[15]=1,e},lookAt:function(e,t,r,n){var o,i,a,s,l,u,c,f,d,p,h=t[0],m=t[1],g=t[2],v=r[0],y=r[1],b=r[2],x=n[0],w=n[1],S=n[2];return 1e-6>Math.abs(h-v)&&1e-6>Math.abs(m-y)&&1e-6>Math.abs(g-b)?(e[0]=1,e[1]=e[2]=e[3]=0,e[5]=1,e[4]=e[6]=e[7]=0,e[10]=1,e[8]=e[9]=e[11]=0,e[15]=1,e[12]=e[13]=e[14]=0):(p=1/Math.sqrt((c=h-v)*c+(f=m-y)*f+(d=g-b)*d),c*=p,f*=p,d*=p,(p=Math.sqrt((o=w*d-S*f)*o+(i=S*c-x*d)*i+(a=x*f-w*c)*a))&&(o*=p=1/p,i*=p,a*=p),(p=Math.sqrt((s=f*a-d*i)*s+(l=d*o-c*a)*l+(u=c*i-f*o)*u))&&(o*=p=1/p,i*=p,a*=p),e[0]=o,e[1]=s,e[2]=c,e[3]=0,e[4]=i,e[5]=l,e[6]=f,e[7]=0,e[8]=a,e[9]=u,e[10]=d,e[11]=0,e[12]=-(o*h+i*m+a*g),e[13]=-(s*h+l*m+u*g),e[14]=-(c*h+f*m+d*g),e[15]=1),e}}}),X.register("iGt5r",function(e,t){var r,n=X("1vV4g"),o=X("ksOMs");function i(e){var t=e[0],r=e[1],n=e[2],o=e[3];return Math.sqrt(t*t+r*r+n*n+o*o)}function a(e){var t=i(e);return t>5960464477539063e-23&&(t=1/t,e[0]*=t,e[1]*=t,e[2]*=t,e[3]*=t),e}function s(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function l(e,t,r,n,o,i,a,s,l,u){var c,f=t+i+u;return f>=0?(c=Math.sqrt(f+1),e[3]=.5*c,c=.5/c,e[0]=(a-l)*c,e[1]=(s-n)*c,e[2]=(r-o)*c):t>i&&t>u?(c=Math.sqrt(1+t-i-u),e[0]=.5*c,c=.5/c,e[1]=(r+o)*c,e[2]=(s+n)*c,e[3]=(a-l)*c):i>u?(c=Math.sqrt(1+i-t-u),e[1]=.5*c,c=.5/c,e[0]=(r+o)*c,e[2]=(a+l)*c,e[3]=(s-n)*c):(c=Math.sqrt(1+u-t-i),e[2]=.5*c,c=.5/c,e[0]=(s+n)*c,e[1]=(a+l)*c,e[3]=(r-o)*c),e}var u=(r=[],function(e,t,n){return r=o.cross(o.set(r,t),n),e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=1+o.dot(t,n),a(e),e});e.exports={create:function(){return[0,0,0,1]},equals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]},identity:function(e){return e[0]=e[1]=e[2]=0,e[3]=1,e},copy:function(e){return e.slice(0)},set:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},mult:function(e,t){var r=e[0],n=e[1],o=e[2],i=e[3],a=t[0],s=t[1],l=t[2],u=t[3];return e[0]=i*a+r*u+n*l-o*s,e[1]=i*s+n*u+o*a-r*l,e[2]=i*l+o*u+r*s-n*a,e[3]=i*u-r*a-n*s-o*l,e},invert:function(e){var t=s(e,e);return t=t?1/t:0,e[0]*=-t,e[1]*=-t,e[2]*=-t,e[3]*=t,e},conjugate:function(e){return e[0]*=-1,e[1]*=-1,e[2]*=-1,e},dot:s,length:i,normalize:a,fromEuler://x = yaw, y = pitch, z = roll
//assumes XYZ order
function(e,t){var r=t[0],n=t[1],o=t[2],i=Math.cos(r/2),a=Math.cos(n/2),s=Math.cos(o/2),l=Math.sin(r/2),u=Math.sin(n/2),c=Math.sin(o/2);return e[0]=l*a*s+i*u*c,e[1]=i*u*s-l*a*c,e[2]=i*a*c+l*u*s,e[3]=i*a*s-l*u*c,e},fromAxisAngle:function(e,t,r){n(void 0!==t.length,"quat.fromAxisAngle: axis should be vec3");var o=.5*r,i=Math.sin(o);return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=Math.cos(o),a(e)},fromAxes:function(e,t,r,n){return l(e,t[0],t[1],t[2],r[0],r[1],r[2],n[0],n[1],n[2])},fromMat3:function(e,t){return l(e,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])},fromMat4:function(e,t){return l(e,t[0],t[1],t[2],t[4],t[5],t[6],t[8],t[9],t[10])},slerp:function(e,t,r){// http://jsperf.com/quaternion-slerp-implementations
var n,o,i,a,l,u=e[0],c=e[1],f=e[2],d=e[3],p=t[0],h=t[1],m=t[2],g=t[3];return(o=s(e,t))<0?(o=-o,e[0]=-p,e[1]=-h,e[2]=-m,e[3]=-g):(e[0]=p,e[1]=h,e[2]=m,e[3]=g),1-o>1e-6?(i=Math.sin(n=Math.acos(o)),a=Math.sin((1-r)*n)/i,l=Math.sin(r*n)/i):(a=1-r,l=r),e[0]=a*u+l*e[0],e[1]=a*c+l*e[1],e[2]=a*f+l*e[2],e[3]=a*d+l*e[3],e},fromTo:u}}),X.register("i4aBd",function(e,t){function r(e,t,r){return Math.max(t,Math.min(e,r))}e.exports={lerp:function(e,t,r){return e+(t-e)*r},clamp:r,smoothstep:function(e,t,n){return(e=r((e-t)/(n-t),0,1))*e*(3-2*e)},map:function(e,t,r,n,o){return n+(o-n)*(e-t)/(r-t)},toRadians:function(e){return e*Math.PI/180},toDegrees:function(e){return 180*e/Math.PI},sign:function(e){return e/Math.abs(e)},isPowerOfTwo:function(e){return(e&e-1)==0},nextPowerOfTwo:function(e){return 0===e?1:(e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,(e|=e>>16)+1)}}}),X.register("eZuFQ",function(e,t){e.exports={create:function(){return[1,0,0,1,0,0]},set:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},identity:function(e){return e[0]=e[3]=1,e[1]=e[2]=e[4]=e[5]=0,e},mult:function(e,t){let r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=t[0],u=t[1],c=t[2],f=t[3],d=t[4],p=t[5];return e[0]=r*l+o*u,e[1]=n*l+i*u,e[2]=r*c+o*f,e[3]=n*c+i*f,e[4]=r*d+o*p+a,e[5]=n*d+i*p+s,e},translate:function(e,t){let r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=t[0],u=t[1];return e[0]=r,e[1]=n,e[2]=o,e[3]=i,e[4]=r*l+o*u+a,e[5]=n*l+i*u+s,e},rotate:function(e,t){let r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sin(t),s=Math.cos(t);return e[0]=r*s+o*a,e[1]=n*s+i*a,e[2]=-(r*a)+o*s,e[3]=-(n*a)+i*s,e},scale:function(e,t){let r=e[0],n=e[1],o=e[2],i=e[3];return e[0]=r*t[0],e[1]=n*t[0],e[2]=o*t[1],e[3]=i*t[1],e}}}),X.register("bUOQo",function(e,t){e.exports={create:function(){return[0,0]},set:function(e,t){return e[0]=t[0],e[1]=t[1],e},copy:function(e){return e.slice(0)},equals:function(e,t){return e[0]===t[0]&&e[1]===t[1]},add:function(e,t){return e[0]+=t[0],e[1]+=t[1],e},addScaled:function(e,t,r){return e[0]+=t[0]*r,e[1]+=t[1]*r,e},sub:function(e,t){return e[0]-=t[0],e[1]-=t[1],e},scale:function(e,t){return e[0]*=t,e[1]*=t,e},dot:function(e,t){return e[0]*t[0]+e[1]*t[1]},length:function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)},lengthSq:function(e){var t=e[0],r=e[1];return t*t+r*r},normalize:function(e){var t=e[0],r=e[1],n=Math.sqrt(t*t+r*r);return n=1/(n||1),e[0]*=n,e[1]*=n,e},distance:function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)},distanceSq:function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return r*r+n*n},limit:function(e,t){var r=e[0],n=e[1],o=r*r+n*n,i=t*t;if(i>0&&o>i){var a=t/Math.sqrt(o);e[0]*=a,e[1]*=a}return e},lerp:function(e,t,r){var n=e[0],o=e[1];return e[0]=n+(t[0]-n)*r,e[1]=o+(t[1]-o)*r,e},toString:function(e,t){var r=Math.pow(10,void 0!==t?t:4);return"["+(Math.floor(e[0]*r)/r+", "+Math.floor(e[1]*r)/r)+"]"}}}),X.register("kjPYl",function(e,t){var r=X("i4aBd").clamp;e.exports={create:function(){return[0,0,0]},fromQuat:// assumes XYZ order
function(e,t){var n=t[0]*t[0],o=t[1]*t[1],i=t[2]*t[2],a=t[3]*t[3];return e[0]=Math.atan2(2*(t[0]*t[3]-t[1]*t[2]),a-n-o+i),e[1]=Math.asin(r(2*(t[0]*t[2]+t[1]*t[3]),-1,1)),e[2]=Math.atan2(2*(t[2]*t[3]-t[0]*t[1]),a+n-o-i),e}}}),X.register("crZsA",function(e,t){X("29z4Q");var r=X("7RNlM"),n=new r(Math.random),o={};o.seed=function(e){n=new r(Math.random)},o.float=function(e,t){return 0==arguments.length?(e=0,t=1):1==arguments.length&&(t=e,e=0),e+(t-e)*Math.random()},//Using max safe integer as max value unless otherwise specified
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
o.int=function(e,t){return 0==arguments.length?(e=0,t=9007199254740991):1==arguments.length&&(t=e,e=0),Math.floor(o.float(e,t))},o.vec2=function(e){void 0===e&&(e=1);var t=2*Math.random()-1,r=2*Math.random()-1,n=Math.random()*e,o=Math.sqrt(t*t+r*r);return[n*t/o,n*r/o]},o.vec3=function(e){void 0===e&&(e=1);var t=2*Math.random()-1,r=2*Math.random()-1,n=2*Math.random()-1,o=Math.random()*e,i=Math.sqrt(t*t+r*r+n*n);return[o*t/i,o*r/i,o*n/i]},o.vec2InRect=function(e){return[e[0][0]+Math.random()*(e[1][0]-e[0][0]),e[0][1]+Math.random()*(e[1][1]-e[0][1])]},o.vec3InAABB=function(e){return[e[0][0]+Math.random()*(e[1][0]-e[0][0]),e[0][1]+Math.random()*(e[1][1]-e[0][1]),e[0][2]+Math.random()*(e[1][2]-e[0][2])]},o.chance=function(e){return Math.random()<=e},o.element=function(e){return e[Math.floor(Math.random()*e.length)]},o.noise2=function(e,t){return n.noise2D(e,t)},o.noise3=function(e,t,r){return n.noise3D(e,t,r)},o.noise4=function(e,t,r,o){return n.noise4D(e,t,r,o)},e.exports=o}),X.register("29z4Q",function(e,t){// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.
// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var r=X("aq2Zd"),n=X("OOJmO"),o=X("7TG4B"),i=X("bTfIm"),a=X("dZZsw"),s=X("dnlmk"),l=X("9fAmK");l.alea=r,l.xor128=n,l.xorwow=o,l.xorshift7=i,l.xor4096=a,l.tychei=s,e.exports=l}),X.register("aq2Zd",function(e,t){!// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -
// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
function(e,t,r){function n(e){var t,r=this,n=(t=4022871197,function(e){e=e.toString();for(var r=0;r<e.length;r++){var n=.02519603282416938*(t+=e.charCodeAt(r));t=n>>>0,n-=t,n*=t,t=n>>>0,n-=t,t+=4294967296*n}return(t>>>0)*23283064365386963e-26;// 2^-32
});r.next=function(){var e=2091639*r.s0+23283064365386963e-26*r.c;// 2^-32
return r.s0=r.s1,r.s1=r.s2,r.s2=e-(r.c=0|e)},// Apply the seeding algorithm from Baagoe.
r.c=1,r.s0=n(" "),r.s1=n(" "),r.s2=n(" "),r.s0-=n(e),r.s0<0&&(r.s0+=1),r.s1-=n(e),r.s1<0&&(r.s1+=1),r.s2-=n(e),r.s2<0&&(r.s2+=1)}function o(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function i(e,t){var r=new n(e),i=t&&t.state,a=r.next;return a.int32=function(){return 4294967296*r.next()|0},a.double=function(){return a()+(2097152*a()|0)*11102230246251565e-32;// 2^-53
},a.quick=a,i&&("object"==typeof i&&o(i,r),a.state=function(){return o(r,{})}),a}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.alea=i}(0,e,"function"==typeof define&&define// present with an AMD loader
)}),X.register("OOJmO",function(e,t){!// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
function(e,t,r){function n(e){var t=this,r="";t.x=0,t.y=0,t.z=0,t.w=0,// Set up generator function.
t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:r+=e;// Mix in string seed, then discard an initial batch of 64 values.
for(var n=0;n<r.length+64;n++)t.x^=0|r.charCodeAt(n),t.next()}function o(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function i(e,t){var r=new n(e),i=t&&t.state,a=function(){return(r.next()>>>0)/4294967296};return a.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/4294967296,n=(e+t)/2097152;while(0===n)return n},a.int32=r.next,a.quick=a,i&&("object"==typeof i&&o(i,r),a.state=function(){return o(r,{})}),a}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.xor128=i}(0,e,"function"==typeof define&&define// present with an AMD loader
)}),X.register("7TG4B",function(e,t){!// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
function(e,t,r){function n(e){var t=this,r="";// Set up generator function.
t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:r+=e;// Mix in string seed, then discard an initial batch of 64 values.
for(var n=0;n<r.length+64;n++)t.x^=0|r.charCodeAt(n),n==r.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function o(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function i(e,t){var r=new n(e),i=t&&t.state,a=function(){return(r.next()>>>0)/4294967296};return a.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/4294967296,n=(e+t)/2097152;while(0===n)return n},a.int32=r.next,a.quick=a,i&&("object"==typeof i&&o(i,r),a.state=function(){return o(r,{})}),a}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.xorwow=i}(0,e,"function"==typeof define&&define// present with an AMD loader
)}),X.register("bTfIm",function(e,t){!// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf
function(e,t,r){function n(e){var t=this;// Set up generator function.
t.next=function(){// Update xor generator.
var e,r,n=t.x,o=t.i;return e=n[o],e^=e>>>7,r=e^e<<24^((e=n[o+1&7])^e>>>10)^((e=n[o+3&7])^e>>>3)^((e=n[o+4&7])^e<<7),e=n[o+7&7],e^=e<<13,r^=e^e<<9,n[o]=r,t.i=o+1&7,r},function(e,t){var r,n=[];if(t===(0|t))n[0]=t;else for(r=0,// Seed state using a string.
t=""+t;r<t.length;++r)n[7&r]=n[7&r]<<15^t.charCodeAt(r)+n[r+1&7]<<13;// Enforce an array length of 8, not all zeroes.
for(;n.length<8;)n.push(0);for(r=0;r<8&&0===n[r];++r);// Discard an initial 256 values.
for(8==r?n[7]=-1:n[r],e.x=n,e.i=0,r=256;r>0;--r)e.next()}(t,e)}function o(e,t){return t.x=e.x.slice(),t.i=e.i,t}function i(e,t){null==e&&(e=+new Date);var r=new n(e),i=t&&t.state,a=function(){return(r.next()>>>0)/4294967296};return a.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/4294967296,n=(e+t)/2097152;while(0===n)return n},a.int32=r.next,a.quick=a,i&&(i.x&&o(i,r),a.state=function(){return o(r,{})}),a}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.xorshift7=i}(0,e,"function"==typeof define&&define// present with an AMD loader
)}),X.register("dZZsw",function(e,t){!// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().
function(e,t,r){function n(e){var t=this;// Set up generator function.
t.next=function(){var e,r,n=t.w,o=t.X,i=t.i;// Result is the combination.
return(// Update Weyl generator.
t.w=n=n+1640531527|0,// Update xor generator.
r=o[i+34&127],e=o[i=i+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,// Update Xor generator array state.
r=o[i]=r^e,t.i=i,r+(n^n>>>16)|0)},function(e,t){var r,n,o,i,a,s=[],l=128;// Initialize circular array and weyl value.
for(t===(0|t)?(// Numeric seeds initialize v, which is used to generates X.
n=t,t=null):(// String seeds are mixed into v and X one character at a time.
t+="\x00",n=0,l=Math.max(l,t.length)),o=0,i=-32;i<l;++i)t&&(n^=t.charCodeAt((i+32)%t.length)),0===i&&(a=n),n^=n<<10,n^=n>>>15,n^=n<<4,n^=n>>>13,i>=0&&(a=a+1640531527|0,o=0==(r=s[127&i]^=n+a)?o+1:0);for(o>=128&&(s[127&(t&&t.length||0)]=-1),// Run the generator 512 times to further mix the state before using it.
// Factoring this as a function slows the main generator, so it is just
// unrolled here.  The weyl generator is not advanced while warming up.
o=127,i=512;i>0;--i)n=s[o+34&127],r=s[o=o+1&127],n^=n<<13,r^=r<<17,n^=n>>>15,r^=r>>>12,s[o]=n^r;// Storing state as object members is faster than using closure variables.
e.w=a,e.X=s,e.i=o}(t,e)}function o(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function i(e,t){null==e&&(e=+new Date);var r=new n(e),i=t&&t.state,a=function(){return(r.next()>>>0)/4294967296};return a.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/4294967296,n=(e+t)/2097152;while(0===n)return n},a.int32=r.next,a.quick=a,i&&(i.X&&o(i,r),a.state=function(){return o(r,{})}),a}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.xor4096=i}(0,e,"function"==typeof define&&define// present with an AMD loader
)}),X.register("dnlmk",function(e,t){!// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
function(e,t,r){function n(e){var t=this,r="";// Set up generator function.
t.next=function(){var e=t.b,r=t.c,n=t.d,o=t.a;return e=e<<25^e>>>7^r,r=r-n|0,n=n<<24^n>>>8^o,o=o-e|0,t.b=e=e<<20^e>>>12^r,t.c=r=r-n|0,t.d=n<<16^r>>>16^o,t.a=o-e|0},/* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(// Integer seed.
t.a=e/4294967296|0,t.b=0|e):r+=e;// Mix in string seed, then discard an initial batch of 64 values.
for(var n=0;n<r.length+20;n++)t.b^=0|r.charCodeAt(n),t.next()}function o(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function i(e,t){var r=new n(e),i=t&&t.state,a=function(){return(r.next()>>>0)/4294967296};return a.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/4294967296,n=(e+t)/2097152;while(0===n)return n},a.int32=r.next,a.quick=a,i&&("object"==typeof i&&o(i,r),a.state=function(){return o(r,{})}),a}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.tychei=i}(0,e,"function"==typeof define&&define// present with an AMD loader
)}),X.register("9fAmK",function(e,t){!/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/function(t,r){//
// The following constants are related to IEEE 754 limits.
//
// Detect the global object, even if operating in strict mode.
// http://stackoverflow.com/a/14387057/265298
var n,o=(0,eval)("this"),i="random",a=r.pow(256,6),s=r.pow(2,52),l=2*s;// node.js crypto module, initialized at the bottom.
//
// seedrandom()
// This is the seedrandom function described above.
//
function u(e,u,h){var m=[],g=d(//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function e(t,r){var n,o=[],i=typeof t;if(r&&"object"==i)for(n in t)try{o.push(e(t[n],r-1))}catch(e){}return o.length?o:"string"==i?t:t+"\x00"}((u=!0==u?{entropy:!0}:u||{}).entropy?[e,p(t)]:null==e?//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function(){try{var e;return n&&(e=n.randomBytes)?e=e(256):(e=new Uint8Array(256),(o.crypto||o.msCrypto).getRandomValues(e)),p(e)}catch(e){var r=o.navigator,i=r&&r.plugins;return[+new Date,o,i,o.screen,p(t)]}}():e,3),m),v=new c(m),y=function(){for(var e=v.g(6),t=a,r=0;e<s;)e=(e+r)*256,t*=256,r=v.g(1);for(;e>=l;)e/=2,t/=2,r>>>=1;return(e+r)/t;// Form the number within [0, 1).
};// Calling convention: what to return as a function of prng, seed, is_math.
return y.int32=function(){return 0|v.g(4)},y.quick=function(){return v.g(4)/4294967296},y.double=y,// Mix the randomness into accumulated entropy.
d(p(v.S),t),(u.pass||h||function(e,t,n,o){return(// If called as a method of Math (Math.seedrandom()), mutate
// Math.random because that is how seedrandom.js has worked since v1.0.
(o&&(o.S&&f(o,v),// Only provide the .state method if requested via options.state.
e.state=function(){return f(v,{})}),n)?(r[i]=e,t):e)})(y,g,"global"in u?u.global:this==r,u.state)}//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function c(e){var t,r=e.length,n=this,o=0,i=n.i=n.j=0,a=n.S=[];// Set up S using the standard key scheduling algorithm.
for(r||(e=[r++]);o<256;)a[o]=o++;for(o=0;o<256;o++)a[o]=a[i=255&i+e[o%r]+(t=a[o])],a[i]=t;// The "g" method returns the next (count) outputs as one number.
(n.g=function(e){for(// Using instance members instead of closure state nearly doubles speed.
var t,r=0,o=n.i,i=n.j,a=n.S;e--;)t=a[o=255&o+1],r=256*r+a[255&(a[o]=a[i=255&i+t])+(a[i]=t)];return n.i=o,n.j=i,r;// For robust unpredictability, the function call below automatically
// discards an initial batch of values.  This is called RC4-drop[256].
// See http://google.com/search?q=rsa+fluhrer+response&btnI
})(256)}//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function f(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function d(e,t){for(var r,n=e+"",o=0;o<n.length;)t[255&o]=255&(r^=19*t[255&o])+n.charCodeAt(o++);return p(t)}//
// tostring()
// Converts an array of charcodes to a string
//
function p(e){return String.fromCharCode.apply(0,e)}//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if(r["seed"+i]=u,//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
d(r.random(),t),e.exports){e.exports=u;// When in node.js, try using crypto package for autoseeding.
try{n=X("hkq8B")}catch(e){}}else"function"==typeof define&&define.amd&&define(function(){return u});// End anonymous scope, and pass initial values.
}([],Math// math: package containing random, pow, and seedrandom
)}),X.register("hkq8B",function(e,t){}),X.register("7RNlM",function(e,t){!/*
 * A fast javascript implementation of simplex noise by Jonas Wagner
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 *
 *
 * Copyright (C) 2012 Jonas Wagner
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */function(){var t=.5*(Math.sqrt(3)-1),r=(3-Math.sqrt(3))/6,n=1/3,o=1/6,i=(Math.sqrt(5)-1)/4,a=(5-Math.sqrt(5))/20;function s(e){e||(e=Math.random),this.p=new Uint8Array(256),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var t=0;t<256;t++)this.p[t]=256*e();for(t=0;t<512;t++)this.perm[t]=this.p[255&t],this.permMod12[t]=this.perm[t]%12}s.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,n){var o,i,a,s,l,u=this.permMod12,c=this.perm,f=this.grad3,d=(e+n)*t,p=Math.floor(e+d),h=Math.floor(n+d),m=(p+h)*r,g=e-(p-m),v=n-(h-m);g>v?(s=1,l=0):(s=0,l=1);// upper triangle, YX order: (0,0)->(0,1)->(1,1)
// A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
// a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
// c = (3-sqrt(3))/6
var y=g-s+r,b=v-l+r,x=g-1+2*r,w=v-1+2*r,S=255&p,_=255&h,E=.5-g*g-v*v;// Offsets for middle corner in (x,y) unskewed coords
if(E<0)o=0;else{var A=3*u[S+c[_]];E*=E,o=E*E*(f[A]*g+f[A+1]*v)}var M=.5-y*y-b*b;if(M<0)i=0;else{var C=3*u[S+s+c[_+l]];M*=M,i=M*M*(f[C]*y+f[C+1]*b)}var T=.5-x*x-w*w;if(T<0)a=0;else{var P=3*u[S+1+c[_+1]];T*=T,a=T*T*(f[P]*x+f[P+1]*w)}// Add contributions from each corner to get the final noise value.
// The result is scaled to return values in the interval [-1,1].
return 70*(o+i+a)},// 3D simplex noise
noise3D:function(e,t,r){var i,a,s,l,u,c,f,d,p,h,m=this.permMod12,g=this.perm,v=this.grad3,y=(e+t+r)*n,b=Math.floor(e+y),x=Math.floor(t+y),w=Math.floor(r+y),S=(b+x+w)*o,_=e-(b-S),E=t-(x-S),A=r-(w-S);_>=E?E>=A?(u=1,c=0,f=0,d=1,p=1,h=0):(_>=A?(u=1,c=0,f=0):(u=0,c=0,f=1),d=1,p=0,h=1):E<A?(u=0,c=0,f=1,d=0,p=1,h=1):_<A?(u=0,c=1,f=0,d=0,p=1,h=1):(u=0,c=1,f=0,d=1,p=1,h=0);// A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
// a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
// a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
// c = 1/6.
var M=_-u+o,C=E-c+o,T=A-f+o,P=_-d+2*o,O=E-p+2*o,R=A-h+2*o,L=_-1+3*o,N=E-1+3*o,D=A-1+3*o,F=255&b,I=255&x,U=255&w,z=.6-_*_-E*E-A*A;// Offsets for second corner in (x,y,z) coords
if(z<0)i=0;else{var k=3*m[F+g[I+g[U]]];z*=z,i=z*z*(v[k]*_+v[k+1]*E+v[k+2]*A)}var B=.6-M*M-C*C-T*T;if(B<0)a=0;else{var j=3*m[F+u+g[I+c+g[U+f]]];B*=B,a=B*B*(v[j]*M+v[j+1]*C+v[j+2]*T)}var $=.6-P*P-O*O-R*R;if($<0)s=0;else{var V=3*m[F+d+g[I+p+g[U+h]]];$*=$,s=$*$*(v[V]*P+v[V+1]*O+v[V+2]*R)}var G=.6-L*L-N*N-D*D;if(G<0)l=0;else{var q=3*m[F+1+g[I+1+g[U+1]]];G*=G,l=G*G*(v[q]*L+v[q+1]*N+v[q+2]*D)}// Add contributions from each corner to get the final noise value.
// The result is scaled to stay just inside [-1,1]
return 32*(i+a+s+l)},// 4D simplex noise, better simplex rank ordering method 2012-03-09
noise4D:function(e,t,r,n){this.permMod12;var o,s,l,u,c,f,d,p,h,m,g,v,y,b,x,w,S,_=this.perm,E=this.grad4,A=(e+t+r+n)*i,M=Math.floor(e+A),C=Math.floor(t+A),T=Math.floor(r+A),P=Math.floor(n+A),O=(M+C+T+P)*a,R=e-(M-O),L=t-(C-O),N=r-(T-O),D=n-(P-O),F=0,I=0,U=0,z=0;R>L?F++:I++,R>N?F++:U++,R>D?F++:z++,L>N?I++:U++,L>D?I++:z++,N>D?U++:z++;// The fifth corner has all coordinate offsets = 1, so no need to compute that.
var k=R-// simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
// Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
// impossible. Only the 24 indices which have non-zero entries make any sense.
// We use a thresholding to set the coordinates in turn from the largest magnitude.
// Rank 3 denotes the largest coordinate.
(f=F>=3?1:0)+a,B=L-(d=I>=3?1:0)+a,j=N-(p=U>=3?1:0)+a,$=D-(h=z>=3?1:0)+a,V=R-// Rank 2 denotes the second largest coordinate.
(m=F>=2?1:0)+2*a,G=L-(g=I>=2?1:0)+2*a,q=N-(v=U>=2?1:0)+2*a,H=D-(y=z>=2?1:0)+2*a,W=R-// Rank 1 denotes the second smallest coordinate.
(b=F>=1?1:0)+3*a,X=L-(x=I>=1?1:0)+3*a,K=N-(w=U>=1?1:0)+3*a,Y=D-(S=z>=1?1:0)+3*a,Z=R-1+4*a,J=L-1+4*a,Q=N-1+4*a,ee=D-1+4*a,et=255&M,er=255&C,en=255&T,eo=255&P,ei=.6-R*R-L*L-N*N-D*D;// Offsets for second corner in (x,y,z,w) coords
if(ei<0)o=0;else{var ea=_[et+_[er+_[en+_[eo]]]]%32*4;ei*=ei,o=ei*ei*(E[ea]*R+E[ea+1]*L+E[ea+2]*N+E[ea+3]*D)}var es=.6-k*k-B*B-j*j-$*$;if(es<0)s=0;else{var el=_[et+f+_[er+d+_[en+p+_[eo+h]]]]%32*4;es*=es,s=es*es*(E[el]*k+E[el+1]*B+E[el+2]*j+E[el+3]*$)}var eu=.6-V*V-G*G-q*q-H*H;if(eu<0)l=0;else{var ec=_[et+m+_[er+g+_[en+v+_[eo+y]]]]%32*4;eu*=eu,l=eu*eu*(E[ec]*V+E[ec+1]*G+E[ec+2]*q+E[ec+3]*H)}var ef=.6-W*W-X*X-K*K-Y*Y;if(ef<0)u=0;else{var ed=_[et+b+_[er+x+_[en+w+_[eo+S]]]]%32*4;ef*=ef,u=ef*ef*(E[ed]*W+E[ed+1]*X+E[ed+2]*K+E[ed+3]*Y)}var ep=.6-Z*Z-J*J-Q*Q-ee*ee;if(ep<0)c=0;else{var eh=_[et+1+_[er+1+_[en+1+_[eo+1]]]]%32*4;ep*=ep,c=ep*ep*(E[eh]*Z+E[eh+1]*J+E[eh+2]*Q+E[eh+3]*ee)}// Sum up and scale the result to cover the range [-1,1]
return 27*(o+s+l+u+c)}},"undefined"!=typeof define&&define.amd?define(function(){return s}):"undefined"!=typeof window&&(window.SimplexNoise=s),e.exports.SimplexNoise=s,e.exports=s}()}),X.register("iz6tX",function(e,t){let r;/* eslint-env browser *//**
 * This is the web browser implementation of `debug()`.
 */var n=X("liSpS");e.exports.formatArgs=/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;let r="color: "+this.color;t.splice(1,0,r,"color: inherit");// The final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(n++,"%c"===e&&// (the user may have provided their own)
(o=n))}),t.splice(o,0,r)},e.exports.save=/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */function(t){try{t?e.exports.storage.setItem("debug",t):e.exports.storage.removeItem("debug")}catch(e){// Swallow
// XXX (@Qix-) should we be logging these?
}},e.exports.load=/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */function(){let t;try{t=e.exports.storage.getItem("debug")}catch(e){// Swallow
// XXX (@Qix-) should we be logging these?
}return!t&&void 0!==n&&"env"in n&&(t=void 0),t},e.exports.useColors=/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */// eslint-disable-next-line complexity
function(){return(// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
"undefined"!=typeof window&&!!window.process&&("renderer"===window.process.type||!!window.process.__nwjs)||!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||// Is firebug? http://stackoverflow.com/a/398120/376773
"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||// Is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||// Double check webkit in userAgent just in case we are in a worker
"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)))},e.exports.storage=/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */function(){try{// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
// The Browser also has localStorage in the global context.
return localStorage}catch(e){// Swallow
// XXX (@Qix-) should we be logging these?
}}(),e.exports.destroy=(r=!1,()=>{r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),/**
 * Colors.
 */e.exports.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */e.exports.log=console.debug||console.log||(()=>{}),e.exports=X("jC4s8")(e.exports);let{formatters:o}=e.exports;/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}),X.register("jC4s8",function(e,t){e.exports=/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */function(e){/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/function t(e){let n,o,i;let a=null;function s(...e){// Disabled?
if(!s.enabled)return;// Set `diff` timestamp
let r=Number(new Date),o=r-(n||r);s.diff=o,s.prev=n,s.curr=r,n=r,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");// Apply any `formatters` transformations
let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(r,n)=>{// If we encounter an escaped % then don't increase the array index
if("%%"===r)return"%";i++;let o=t.formatters[n];if("function"==typeof o){let t=e[i];r=o.call(s,t),// Now we need to remove `args[index]` since it's inlined in the `format`
e.splice(i,1),i--}return r}),// Apply env-specific formatting (colors, etc.)
t.formatArgs.call(s,e);let a=s.log||t.log;a.apply(s,e)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=r,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(o!==t.namespaces&&(o=t.namespaces,i=t.enabled(e)),i),set:e=>{a=e}}),"function"==typeof t.init&&t.init(s),s}function r(e,r){let n=t(this.namespace+(void 0===r?":":r)+e);return n.log=this.log,n}/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/function n(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/function(e){return e instanceof Error?e.stack||e.message:e},t.disable=/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/function(){let e=[...t.names.map(n),...t.skips.map(n).map(e=>"-"+e)].join(",");return t.enable(""),e},t.enable=/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/function(e){let r;t.save(e),t.namespaces=e,t.names=[],t.skips=[];let n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.slice(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/function(e){let r,n;if("*"===e[e.length-1])return!0;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=X("hnS6k"),t.destroy=/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(r=>{t[r]=e[r]}),/**
	* The currently active debug mode names, and names to skip.
	*/t.names=[],t.skips=[],/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/t.formatters={},t.selectColor=/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t)|0;// Convert to 32bit integer
return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}}),X.register("hnS6k",function(e,t){/**
 * Pluralization helper.
 */function r(e,t,r,n){return Math.round(e/r)+" "+n+(t>=1.5*r?"s":"")}/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */e.exports=function(e,t){t=t||{};var n,o,i=typeof e;if("string"===i&&e.length>0)return(/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */function(e){if(!((e=String(e)).length>100)){var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"weeks":case"week":case"w":return 6048e5*r;case"days":case"day":case"d":return 864e5*r;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e));if("number"===i&&isFinite(e))return t.long?(n=Math.abs(e))>=864e5?r(e,n,864e5,"day"):n>=36e5?r(e,n,36e5,"hour"):n>=6e4?r(e,n,6e4,"minute"):n>=1e3?r(e,n,1e3,"second"):e+" ms":(o=Math.abs(e))>=864e5?Math.round(e/864e5)+"d":o>=36e5?Math.round(e/36e5)+"h":o>=6e4?Math.round(e/6e4)+"m":o>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}),X.register("jSebG",function(e,t){var r=X("aqyWn"),n=X("lIZb1"),o=X("6RMJd"),i=X("85Ju0"),a=X("6a43o");e.exports=a(/**
 * Load provided resources
 * @param   {Object} resources - map of resources, see example
 * @param   {Function} callback function(err, resources), see example
 * @returns {Object}   - with same properties are resource list but resolved to the actual data
 *
 * @example
 * var resources = {
 *   img     : { image: __dirname + '/tex.jpg'},
 *   hdrImg  : { binary: __dirname + '/tex.hdr'}
 *   data    : { json: __dirname + '/data.json'},
 *   hello   : { text: __dirname + '/hello.txt'}
 * }
 * load(resources, function(err, res) {
 *   res.img    //{Image} in a Browser or {SkCanvas} in Plask
 *   res.hdrImg //{ArrayBuffer}
 *   res.data   //{JSON}
 *   res.hello  //{String}
 * })
 */function(e,t){var a={},s={},l=!1,u=0,c=Object.keys(e),f=c.length;function d(){try{l?t(s,null):t(null,a)}catch(e){console.log(e),console.log(e.stack)}}c.forEach(function(t){function c(e,r){e?(l=!0,s[t]=e):a[t]=r,++u===f&&d()}var p=e[t];p.image?r(p.image,c):p.text?o(p.text,c):p.json?i(p.json,c):p.binary?n(p.binary,c):c(Error("pex-io/load unknown resource type "+Object.keys(p)),null)}),0===c.length&&d()})}),X.register("aqyWn",function(e,t){var r=X("b3txx"),n=X("4Kn4s"),o=X("6a43o");e.exports=o(/**
 * Loads a HTML Image from an url in the borwser, SkCanvas from a file in Plask
 * @param {String} file - url addess (Browser) or file path (Plask)
 * @param {Function} callback - function(err, image) { }
 * @param {Error} callback.err - error if any or null
 * @param {Image|SkCanvas} callback.image - loaded image
 */function(e,t,o){if(r)!function(e,t){var r;try{(r=n.SkCanvas.createFromImage(e)).data=function(e,t,r){for(var n=new Uint8Array(e*t*4),o=0;o<t;o++)for(var i=0;i<e;i++){var a=(i+o*e)*4;n[a+0]=r[a+2],n[a+1]=r[a+1],n[a+2]=r[a+0],n[a+3]=r[a+3]}return n}(r.width,r.height,r.pixels)}catch(r){t(Error(r+' "'+e+'"'),null)}t(null,r)}(e,t);else{var i,a,s;i=null,(a=e).url&&(i=a.crossOrigin,a=a.url),s=new window.Image,i&&(s.crossOrigin=i),s.onerror=function(){t(Error("Failed to load "+a),null)},s.onload=function(){t(null,s)},s.src=a}})}),X.register("b3txx",function(e,t){var r=X("4Kn4s");e.exports=!!r.SkCanvas}),X.register("4Kn4s",function(e,t){e.exports={}}),X.register("6a43o",function(e,t){e.exports=function(e){return function(t,r){return r?e(t,r):new Promise((r,n)=>{e(t,(e,t)=>{if(e)return n(e);r(t)})})}}}),X.register("lIZb1",function(e,t){var r=X("b3txx"),n=X("hkq8B"),o=X("6a43o");e.exports=o(/**
 * Loads binary data
 * @param {String} file - url addess (Browser) or file path (Plask)
 * @param {Function} callback - function(err, data) { }
 * @param {Error} callback.err - error if any or null
 * @param {ArrayBuffer} callback.data - loaded binary data
 */function(e,t){if(r)!function(e,t){try{if(!n.existsSync(e)&&t)return t(Error("loadBinary error: File doesn	 exist"),null)}catch(e){return t(Error("loadBinary error : "+e.toString()),null)}t(null,function(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n<e.length;++n)r[n]=e[n];return t}(n.readFileSync(e)))}(e,t);else{var o;(o=new window.XMLHttpRequest).open("GET",e,!0),o.responseType="arraybuffer",o.onreadystatechange=function(e){4===o.readyState&&(200===o.status?t(null,o.response):t(Error("loadBinary error : "+o.response),null))},o.send(null)}})}),X.register("6RMJd",function(e,t){var r=X("b3txx"),n=X("hkq8B"),o=X("6a43o");e.exports=o(/**
 * @desc Loads text string
 * @param {String} file - url addess (Browser) or file path (Plask)
 * @param {Function} callback - function(err, text) { }
 * @param {Error} callback.err - error if any or null
 * @param {String} callback.text - loaded text
 */function(e,t){if(r)!function(e,t){if(!n.existsSync(e)&&t)return t(Error("loadText error: File doesn't exist \""+e+'"'),null);var r=n.readFileSync(e,"utf8");t&&t(null,r)}(e,t);else{var o;(o=new window.XMLHttpRequest).open("GET",e,!0),o.onreadystatechange=function(e){4===o.readyState&&(200===o.status?t&&t(null,o.responseText):t(Error("loadText error: "+o.statusText),null))},o.send(null)}})}),X.register("85Ju0",function(e,t){var r=X("6RMJd"),n=X("6a43o");e.exports=n(/**
 * Loads JSON data
 * @param {String} file - url addess (Browser) or file path (Plask)
 * @param {Function} callback - function(err, json) { }
 * @param {Error} callback.err - error if any or null
 * @param {String} callback.json - loaded JSON data
 */function(e,t){r(e,function(e,r){if(e)t(e,null);else{var n=null;try{n=JSON.parse(r)}catch(e){return t(e,null)}t(null,n)}})})}),X.register("13t6T",function(e,t){a(e.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),(s=x||(x={})).MD5="MD5",s.CRC32="CRC32",s.CRC32C="CRC32C",s.SHA1="SHA1",s.SHA256="SHA256",(l=w||(w={})).HEADER="header",l.TRAILER="trailer";let K=e=>{let t=e.httpHandler;return{setHttpHandler(e){t=e},httpHandler:()=>t,updateHttpClientConfig(e,r){t.updateHttpClientConfig(e,r)},httpHandlerConfigs:()=>t.httpHandlerConfigs()}},Y=e=>({httpHandler:e.httpHandler()});(u=S||(S={})).HEADER="header",u.QUERY="query",(c=_||(_={})).HTTP="http",c.HTTPS="https",(f=E||(E={})).MD5="md5",f.CRC32="crc32",f.CRC32C="crc32c",f.SHA1="sha1",f.SHA256="sha256",(d=A||(A={}))[d.HEADER=0]="HEADER",d[d.TRAILER=1]="TRAILER",(p=M||(M={})).PROFILE="profile",p.SSO_SESSION="sso-session",p.SERVICES="services",(h=C||(C={})).HTTP_0_9="http/0.9",h.HTTP_1_0="http/1.0",h.TDS_8_0="tds/8.0";class Z{constructor(e){this.method=e.method||"GET",this.hostname=e.hostname||"localhost",this.port=e.port,this.query=e.query||{},this.headers=e.headers||{},this.body=e.body,this.protocol=e.protocol?":"!==e.protocol.slice(-1)?`${e.protocol}:`:e.protocol:"https:",this.path=e.path?"/"!==e.path.charAt(0)?`/${e.path}`:e.path:"/",this.username=e.username,this.password=e.password,this.fragment=e.fragment}static isInstance(e){return!!e&&"method"in e&&"protocol"in e&&"hostname"in e&&"path"in e&&"object"==typeof e.query&&"object"==typeof e.headers}clone(){var e;let t=new Z({...this,headers:{...this.headers}});return t.query&&(t.query=Object.keys(e=t.query).reduce((t,r)=>{let n=e[r];return{...t,[r]:Array.isArray(n)?[...n]:n}},{})),t}}class J{constructor(e){this.statusCode=e.statusCode,this.reason=e.reason,this.headers=e.headers||{},this.body=e.body}static isInstance(e){return!!e&&"number"==typeof e.statusCode&&"object"==typeof e.headers}}let Q=[x.CRC32,x.CRC32C,x.SHA1,x.SHA256],ee=[x.CRC32,x.CRC32C,x.SHA1,x.SHA256],et=(e,{requestChecksumRequired:t,requestAlgorithmMember:r})=>{if(!r||!e[r])return t?x.MD5:void 0;let n=e[r];if(!Q.includes(n))throw Error(`The checksum algorithm "${n}" is not supported by the client. Select one of ${Q}.`);return n},er=e=>e===x.MD5?"content-md5":`x-amz-checksum-${e.toLowerCase()}`,en=(e,t)=>{let r=e.toLowerCase();for(let e of Object.keys(t))if(r===e.toLowerCase())return!0;return!1},eo=e=>"function"==typeof ArrayBuffer&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(e),ei=e=>void 0!==e&&"string"!=typeof e&&!ArrayBuffer.isView(e)&&!eo(e);var ea={};Object.defineProperty(ea,"__esModule",{value:!0}),ea.AwsCrc32=ea.Crc32=ea.crc32=void 0;var es=X("guPxh"),el=X("kZO5e");ea.crc32=function(e){return new eu().update(e).digest()};var eu=/** @class */function(){function e(){this.checksum=4294967295}return e.prototype.update=function(e){var t,r;try{for(var n=es.__values(e),o=n.next();!o.done;o=n.next()){var i=o.value;this.checksum=this.checksum>>>8^ec[(this.checksum^i)&255]}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return this},e.prototype.digest=function(){return(4294967295^this.checksum)>>>0},e}();ea.Crc32=eu;var ec=(0,el.uint32ArrayFrom)([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),ef={};// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(ef,"__esModule",{value:!0}),ef.AwsCrc32=void 0;var es=X("guPxh"),el=X("kZO5e"),ed=/** @class */function(){function e(){this.crc32=new ea.Crc32}return e.prototype.update=function(e){(0,el.isEmptyData)(e)||this.crc32.update((0,el.convertToBuffer)(e))},e.prototype.digest=function(){return es.__awaiter(this,void 0,void 0,function(){return es.__generator(this,function(e){return[2/*return*/,(0,el.numToUint8)(this.crc32.digest())]})})},e.prototype.reset=function(){this.crc32=new ea.Crc32},e}();ef.AwsCrc32=ed,Object.defineProperty(ea,"AwsCrc32",{enumerable:!0,get:function(){return ef.AwsCrc32}});var ep={};// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(ep,"__esModule",{value:!0}),ep.AwsCrc32c=ep.Crc32c=ep.crc32c=void 0;var es=X("guPxh"),el=X("kZO5e");ep.crc32c=function(e){return new eh().update(e).digest()};var eh=/** @class */function(){function e(){this.checksum=4294967295}return e.prototype.update=function(e){var t,r;try{for(var n=es.__values(e),o=n.next();!o.done;o=n.next()){var i=o.value;this.checksum=this.checksum>>>8^em[(this.checksum^i)&255]}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return this},e.prototype.digest=function(){return(4294967295^this.checksum)>>>0},e}();ep.Crc32c=eh;var em=(0,el.uint32ArrayFrom)([0,4067132163,3778769143,324072436,3348797215,904991772,648144872,3570033899,2329499855,2024987596,1809983544,2575936315,1296289744,3207089363,2893594407,1578318884,274646895,3795141740,4049975192,51262619,3619967088,632279923,922689671,3298075524,2592579488,1760304291,2075979607,2312596564,1562183871,2943781820,3156637768,1313733451,549293790,3537243613,3246849577,871202090,3878099393,357341890,102525238,4101499445,2858735121,1477399826,1264559846,3107202533,1845379342,2677391885,2361733625,2125378298,820201905,3263744690,3520608582,598981189,4151959214,85089709,373468761,3827903834,3124367742,1213305469,1526817161,2842354314,2107672161,2412447074,2627466902,1861252501,1098587580,3004210879,2688576843,1378610760,2262928035,1955203488,1742404180,2511436119,3416409459,969524848,714683780,3639785095,205050476,4266873199,3976438427,526918040,1361435347,2739821008,2954799652,1114974503,2529119692,1691668175,2005155131,2247081528,3690758684,697762079,986182379,3366744552,476452099,3993867776,4250756596,255256311,1640403810,2477592673,2164122517,1922457750,2791048317,1412925310,1197962378,3037525897,3944729517,427051182,170179418,4165941337,746937522,3740196785,3451792453,1070968646,1905808397,2213795598,2426610938,1657317369,3053634322,1147748369,1463399397,2773627110,4215344322,153784257,444234805,3893493558,1021025245,3467647198,3722505002,797665321,2197175160,1889384571,1674398607,2443626636,1164749927,3070701412,2757221520,1446797203,137323447,4198817972,3910406976,461344835,3484808360,1037989803,781091935,3705997148,2460548119,1623424788,1939049696,2180517859,1429367560,2807687179,3020495871,1180866812,410100952,3927582683,4182430767,186734380,3756733383,763408580,1053836080,3434856499,2722870694,1344288421,1131464017,2971354706,1708204729,2545590714,2229949006,1988219213,680717673,3673779818,3383336350,1002577565,4010310262,493091189,238226049,4233660802,2987750089,1082061258,1395524158,2705686845,1972364758,2279892693,2494862625,1725896226,952904198,3399985413,3656866545,731699698,4283874585,222117402,510512622,3959836397,3280807620,837199303,582374963,3504198960,68661723,4135334616,3844915500,390545967,1230274059,3141532936,2825850620,1510247935,2395924756,2091215383,1878366691,2644384480,3553878443,565732008,854102364,3229815391,340358836,3861050807,4117890627,119113024,1493875044,2875275879,3090270611,1247431312,2660249211,1828433272,2141937292,2378227087,3811616794,291187481,34330861,4032846830,615137029,3603020806,3314634738,939183345,1776939221,2609017814,2295496738,2058945313,2926798794,1545135305,1330124605,3173225534,4084100981,17165430,307568514,3762199681,888469610,3332340585,3587147933,665062302,2042050490,2346497209,2559330125,1793573966,3190661285,1279665062,1595330642,2910671697]),eg={};// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(eg,"__esModule",{value:!0}),eg.AwsCrc32c=void 0;var es=X("guPxh"),el=X("kZO5e"),ev=/** @class */function(){function e(){this.crc32c=new ep.Crc32c}return e.prototype.update=function(e){(0,el.isEmptyData)(e)||this.crc32c.update((0,el.convertToBuffer)(e))},e.prototype.digest=function(){return es.__awaiter(this,void 0,void 0,function(){return es.__generator(this,function(e){return[2/*return*/,(0,el.numToUint8)(this.crc32c.digest())]})})},e.prototype.reset=function(){this.crc32c=new ep.Crc32c},e}();eg.AwsCrc32c=ev,Object.defineProperty(ep,"AwsCrc32c",{enumerable:!0,get:function(){return eg.AwsCrc32c}});let ey=(e,t)=>({[x.MD5]:t.md5,[x.CRC32]:ea.AwsCrc32,[x.CRC32C]:ep.AwsCrc32c,[x.SHA1]:t.sha1,[x.SHA256]:t.sha256})[e],eb=e=>new TextEncoder().encode(e),ex=e=>"string"==typeof e?eb(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e),ew=e=>new TextDecoder("utf-8").decode(e),eS=(e,t)=>{let r=new e;return r.update(ex(t||"")),r.digest()},e_={name:"flexibleChecksumsMiddleware",step:"build",tags:["BODY_CHECKSUM"],override:!0},eE=(e,t)=>r=>async n=>{if(!Z.isInstance(n.request))return r(n);let{request:o}=n,{body:i,headers:a}=o,{base64Encoder:s,streamHasher:l}=e,{input:u,requestChecksumRequired:c,requestAlgorithmMember:f}=t,d=et(u,{requestChecksumRequired:c,requestAlgorithmMember:f}),p=i,h=a;if(d){let t=er(d),r=ey(d,e);if(ei(i)){let{getAwsChunkedEncodingStream:n,bodyLengthChecker:o}=e;p=n(i,{base64Encoder:s,bodyLengthChecker:o,checksumLocationName:t,checksumAlgorithmFn:r,streamHasher:l}),h={...a,"content-encoding":a["content-encoding"]?`${a["content-encoding"]},aws-chunked`:"aws-chunked","transfer-encoding":"chunked","x-amz-decoded-content-length":a["content-length"],"x-amz-content-sha256":"STREAMING-UNSIGNED-PAYLOAD-TRAILER","x-amz-trailer":t},delete h["content-length"]}else if(!en(t,a)){let e=await eS(r,i);h={...a,[t]:s(e)}}}let m=await r({...n,request:{...o,headers:h,body:p}});return m},eA=(e=[])=>{let t=[];for(let r of ee)e.includes(r)&&Q.includes(r)&&t.push(r);return t},eM=e=>{let t=e.lastIndexOf("-");if(-1!==t){let r=e.slice(t+1);if(!r.startsWith("0")){let e=parseInt(r,10);if(!isNaN(e)&&e>=1&&e<=1e4)return!0}}return!1};function eC(e){return new Blob([e]).stream()}let eT=async(e,{streamHasher:t,checksumAlgorithmFn:r,base64Encoder:n})=>{let o=ei(e)?t(r,e):eS(r,e);return n(await o)},eP=async(e,{config:t,responseAlgorithms:r})=>{let n=eA(r),{body:o,headers:i}=e;for(let e of n){let r=er(e),n=i[r];if(n){let i=ey(e,t),{streamHasher:a,base64Encoder:s}=t,l=await eT(o,{streamHasher:a,checksumAlgorithmFn:i,base64Encoder:s});if(l===n)break;throw Error(`Checksum mismatch: expected "${l}" but received "${n}" in response header "${r}".`)}}},eO={name:"flexibleChecksumsResponseMiddleware",toMiddleware:"deserializerMiddleware",relation:"after",tags:["BODY_CHECKSUM"],override:!0},eR=(e,t)=>(r,n)=>async o=>{let i;if(!Z.isInstance(o.request))return r(o);let a=o.input,s=await r(o),l=s.response,{requestValidationModeMember:u,responseAlgorithms:c}=t;if(u&&"ENABLED"===a[u]){let{clientName:t,commandName:r}=n,o="S3Client"===t&&"GetObjectCommand"===r&&eA(c).every(e=>{let t=er(e),r=l.headers[t];return!r||eM(r)});if(o)return s;let a=ei(l.body);a&&(i=await e.streamCollector(l.body),l.body=eC(i)),await eP(s.response,{config:e,responseAlgorithms:c}),a&&i&&(l.body=eC(i))}return s},eL=(e,t)=>({applyToStack:r=>{r.add(eE(e,t),e_),r.addRelativeTo(eR(e,t),eO)}});class eN{trace(){}debug(){}info(){}warn(){}error(){}}let eD=(e,t)=>{let r=[];if(e&&r.push(e),t)for(let e of t)r.push(e);return r},eF=(e,t)=>`${e||"anonymous"}${t&&t.length>0?` (a.k.a. ${t.join(",")})`:""}`,eI=()=>{let e=[],t=[],r=!1,n=new Set,o=e=>e.sort((e,t)=>eU[t.step]-eU[e.step]||ez[t.priority||"normal"]-ez[e.priority||"normal"]),i=r=>{let o=!1,i=e=>{let t=eD(e.name,e.aliases);if(t.includes(r)){for(let e of(o=!0,t))n.delete(e);return!1}return!0};return e=e.filter(i),t=t.filter(i),o},a=r=>{let o=!1,i=e=>{if(e.middleware===r){for(let t of(o=!0,eD(e.name,e.aliases)))n.delete(t);return!1}return!0};return e=e.filter(i),t=t.filter(i),o},s=r=>(e.forEach(e=>{r.add(e.middleware,{...e})}),t.forEach(e=>{r.addRelativeTo(e.middleware,{...e})}),r.identifyOnResolve?.(c.identifyOnResolve()),r),l=e=>{let t=[];return e.before.forEach(e=>{0===e.before.length&&0===e.after.length?t.push(e):t.push(...l(e))}),t.push(e),e.after.reverse().forEach(e=>{0===e.before.length&&0===e.after.length?t.push(e):t.push(...l(e))}),t},u=(r=!1)=>{let n=[],i=[],a={};e.forEach(e=>{let t={...e,before:[],after:[]};for(let e of eD(t.name,t.aliases))a[e]=t;n.push(t)}),t.forEach(e=>{let t={...e,before:[],after:[]};for(let e of eD(t.name,t.aliases))a[e]=t;i.push(t)}),i.forEach(e=>{if(e.toMiddleware){let t=a[e.toMiddleware];if(void 0===t){if(r)return;throw Error(`${e.toMiddleware} is not found when adding ${eF(e.name,e.aliases)} middleware ${e.relation} ${e.toMiddleware}`)}"after"===e.relation&&t.after.push(e),"before"===e.relation&&t.before.push(e)}});let s=o(n).map(l).reduce((e,t)=>(e.push(...t),e),[]);return s},c={add:(t,r={})=>{let{name:o,override:i,aliases:a}=r,s={step:"initialize",priority:"normal",middleware:t,...r},l=eD(o,a);if(l.length>0){if(l.some(e=>n.has(e))){if(!i)throw Error(`Duplicate middleware name '${eF(o,a)}'`);for(let t of l){let r=e.findIndex(e=>e.name===t||e.aliases?.some(e=>e===t));if(-1===r)continue;let n=e[r];if(n.step!==s.step||s.priority!==n.priority)throw Error(`"${eF(n.name,n.aliases)}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by "${eF(o,a)}" middleware with ${s.priority} priority in ${s.step} step.`);e.splice(r,1)}}for(let e of l)n.add(e)}e.push(s)},addRelativeTo:(e,r)=>{let{name:o,override:i,aliases:a}=r,s={middleware:e,...r},l=eD(o,a);if(l.length>0){if(l.some(e=>n.has(e))){if(!i)throw Error(`Duplicate middleware name '${eF(o,a)}'`);for(let e of l){let r=t.findIndex(t=>t.name===e||t.aliases?.some(t=>t===e));if(-1===r)continue;let n=t[r];if(n.toMiddleware!==s.toMiddleware||n.relation!==s.relation)throw Error(`"${eF(n.name,n.aliases)}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by "${eF(o,a)}" middleware ${s.relation} "${s.toMiddleware}" middleware.`);t.splice(r,1)}}for(let e of l)n.add(e)}t.push(s)},clone:()=>s(eI()),use:e=>{e.applyToStack(c)},remove:e=>"string"==typeof e?i(e):a(e),removeByTag:r=>{let o=!1,i=e=>{let{tags:t,name:i,aliases:a}=e;if(t&&t.includes(r)){let e=eD(i,a);for(let t of e)n.delete(t);return o=!0,!1}return!0};return e=e.filter(i),t=t.filter(i),o},concat:e=>{let t=s(eI());return t.use(e),t.identifyOnResolve(r||t.identifyOnResolve()||(e.identifyOnResolve?.()??!1)),t},applyToStack:s,identify:()=>u(!0).map(e=>{let t=e.step??e.relation+" "+e.toMiddleware;return eF(e.name,e.aliases)+" - "+t}),identifyOnResolve:e=>("boolean"==typeof e&&(r=e),r),resolve:(e,t)=>{for(let r of u().map(e=>e.middleware).reverse())e=r(e,t);return r&&console.log(c.identify()),e}};return c},eU={initialize:5,serialize:4,build:3,finalizeRequest:2,deserialize:1},ez={high:3,normal:2,low:1};class ek{constructor(e){this.middlewareStack=eI(),this.config=e}send(e,t,r){let n="function"==typeof t?t:r,o=e.resolveMiddleware(this.middlewareStack,this.config,"function"!=typeof t?t:void 0);if(!n)return o(e).then(e=>e.output);o(e).then(e=>n(null,e.output),e=>n(e)).catch(()=>{})}destroy(){this.config.requestHandler.destroy&&this.config.requestHandler.destroy()}}let eB={},ej=Array(64);for(let e=0;e+65<=90;e++){let t=String.fromCharCode(e+65);eB[t]=e,ej[e]=t}for(let e=0;e+97<=122;e++){let t=String.fromCharCode(e+97),r=e+26;eB[t]=r,ej[r]=t}for(let e=0;e<10;e++){eB[e.toString(10)]=e+52;let t=e.toString(10),r=e+52;eB[t]=r,ej[r]=t}eB["+"]=62,ej[62]="+",eB["/"]=63,ej[63]="/";let e$=e=>{let t=e.length/4*3;"=="===e.slice(-2)?t-=2:"="===e.slice(-1)&&t--;let r=new ArrayBuffer(t),n=new DataView(r);for(let t=0;t<e.length;t+=4){let r=0,o=0;for(let n=t,i=t+3;n<=i;n++)if("="!==e[n]){if(!(e[n]in eB))throw TypeError(`Invalid character ${e[n]} in base64 string.`);r|=eB[e[n]]<<(i-n)*6,o+=6}else r>>=6;let i=t/4*3;r>>=o%8;let a=Math.floor(o/8);for(let e=0;e<a;e++){let t=(a-e-1)*8;n.setUint8(i+e,(r&255<<t)>>t)}}return new Uint8Array(r)};function eV(e){let t="";for(let r=0;r<e.length;r+=3){let n=0,o=0;for(let t=r,i=Math.min(r+3,e.length);t<i;t++)n|=e[t]<<(i-t-1)*8,o+=8;let i=Math.ceil(o/6);n<<=6*i-o;for(let e=1;e<=i;e++){let r=(i-e)*6;t+=ej[(n&63<<r)>>r]}t+="==".slice(0,4-i)}return t}class eG extends Uint8Array{static fromString(e,t="utf-8"){if("string"==typeof e)return"base64"===t?eG.mutate(e$(e)):eG.mutate(eb(e));throw Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`)}static mutate(e){return Object.setPrototypeOf(e,eG.prototype),e}transformToString(e="utf-8"){return function(e,t="utf-8"){return"base64"===t?eV(e):ew(e)}(this,e)}}let eq=(e,t)=>{let{base64Encoder:r,bodyLengthChecker:n,checksumAlgorithmFn:o,checksumLocationName:i,streamHasher:a}=t,s=void 0!==r&&void 0!==n&&void 0!==o&&void 0!==i&&void 0!==a,l=s?a(o,e):void 0,u=e.getReader();return new ReadableStream({async pull(e){let{value:t,done:o}=await u.read();if(o){if(e.enqueue(`0\r
`),s){let t=r(await l);e.enqueue(`${i}:${t}\r
`),e.enqueue(`\r
`)}e.close()}else e.enqueue(`${(n(t)||0).toString(16)}\r
${t}\r
`)}})},eH=e=>encodeURIComponent(e).replace(/[!'()*]/g,eW),eW=e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`,eX={supported:!!("undefined"!=typeof Request&&"keepalive"in new Request("https://[::1]"))};class eK{constructor(e){"function"==typeof e?this.configProvider=e().then(e=>e||{}):(this.config=e??{},this.configProvider=Promise.resolve(this.config))}destroy(){}async handle(e,{abortSignal:t}={}){this.config||(this.config=await this.configProvider);let r=this.config.requestTimeout,n=!0===this.config.keepAlive;if(t?.aborted){let e=Error("Request aborted");return e.name="AbortError",Promise.reject(e)}let o=e.path,i=function(e){let t=[];for(let r of Object.keys(e).sort()){let n=e[r];if(r=eH(r),Array.isArray(n))for(let e=0,o=n.length;e<o;e++)t.push(`${r}=${eH(n[e])}`);else{let e=r;(n||"string"==typeof n)&&(e+=`=${eH(n)}`),t.push(e)}}return t.join("&")}(e.query||{});i&&(o+=`?${i}`),e.fragment&&(o+=`#${e.fragment}`);let a="";if(null!=e.username||null!=e.password){let t=e.username??"",r=e.password??"";a=`${t}:${r}@`}let{port:s,method:l}=e,u=`${e.protocol}//${a}${e.hostname}${s?`:${s}`:""}${o}`,c="GET"===l||"HEAD"===l?void 0:e.body,f={body:c,headers:new Headers(e.headers),method:l};"undefined"!=typeof AbortController&&(f.signal=t),eX.supported&&(f.keepalive=n);let d=new Request(u,f),p=[fetch(d).then(e=>{let t=e.headers,r={};for(let e of t.entries())r[e[0]]=e[1];let n=void 0!=e.body;return n?{response:new J({headers:r,reason:e.statusText,statusCode:e.status,body:e.body})}:e.blob().then(t=>({response:new J({headers:r,reason:e.statusText,statusCode:e.status,body:t})}))}),function(e=0){return new Promise((t,r)=>{e&&setTimeout(()=>{let t=Error(`Request did not complete within ${e} ms`);t.name="TimeoutError",r(t)},e)})}(r)];return t&&p.push(new Promise((e,r)=>{t.onabort=()=>{let e=Error("Request aborted");e.name="AbortError",r(e)}})),Promise.race(p)}updateHttpClientConfig(e,t){this.config=void 0,this.configProvider=this.configProvider.then(r=>(r[e]=t,r))}httpHandlerConfigs(){return this.config??{}}}let eY=e=>"function"==typeof Blob&&e instanceof Blob?eZ(e):eJ(e);async function eZ(e){let t=await new Promise((t,r)=>{let n=new FileReader;n.onloadend=()=>{if(2!==n.readyState)return r(Error("Reader aborted too early"));let e=n.result??"",o=e.indexOf(","),i=o>-1?o+1:e.length;t(e.substring(i))},n.onabort=()=>r(Error("Read aborted")),n.onerror=()=>r(n.error),n.readAsDataURL(e)}),r=e$(t);return new Uint8Array(r)}async function eJ(e){let t=new Uint8Array(0),r=e.getReader(),n=!1;for(;!n;){let{done:e,value:o}=await r.read();if(o){let e=t;(t=new Uint8Array(e.length+o.length)).set(e),t.set(o,e.length)}n=e}return t}let eQ={},e1={};for(let e=0;e<256;e++){let t=e.toString(16).toLowerCase();1===t.length&&(t=`0${t}`),eQ[e]=t,e1[t]=e}function e0(e){let t="";for(let r=0;r<e.byteLength;r++)t+=eQ[e[r]];return t}let e2="The stream has already been transformed.",e3=e=>{if(!e9(e)&&!e4(e)){let t=e?.__proto__?.constructor?.name||e;throw Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${t}`)}let t=!1,r=async()=>{if(t)throw Error(e2);return t=!0,await eY(e)},n=e=>{if("function"!=typeof e.stream)throw Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");return e.stream()};return Object.assign(e,{transformToByteArray:r,transformToString:async e=>{let t=await r();if("base64"===e)return eV(t);if("hex"===e)return e0(t);if(void 0===e||"utf8"===e||"utf-8"===e)return ew(t);if("function"==typeof TextDecoder)return new TextDecoder(e).decode(t);throw Error("TextDecoder is not available, please make sure polyfill is provided.")},transformToWebStream:()=>{if(t)throw Error(e2);if(t=!0,e9(e))return n(e);if(e4(e))return e;throw Error(`Cannot transform payload to web stream, got ${e}`)}})},e9=e=>"function"==typeof Blob&&e instanceof Blob,e4=e=>"function"==typeof ReadableStream&&e instanceof ReadableStream,e5=async(e=new Uint8Array,t)=>{if(e instanceof Uint8Array)return eG.mutate(e);if(!e)return eG.mutate(new Uint8Array);let r=t.streamCollector(e);return eG.mutate(await r)};class e6{constructor(){this.middlewareStack=eI()}}let e8="***SensitiveInformation***",e7=e=>{switch(e){case"true":return!0;case"false":return!1;default:throw Error(`Unable to parse boolean value "${e}"`)}},te=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],tt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);class tr extends Error{constructor(e){super(e.message),Object.setPrototypeOf(this,tr.prototype),this.name=e.name,this.$fault=e.$fault,this.$metadata=e.$metadata}}let tn=(e,t={})=>{Object.entries(t).filter(([,e])=>void 0!==e).forEach(([t,r])=>{(void 0==e[t]||""===e[t])&&(e[t]=r)});let r=e.message||e.Message||"UnknownError";return e.message=r,delete e.Message,e},to=({output:e,parsedBody:t,exceptionCtor:r,errorCode:n})=>{let o=ti(e),i=o.httpStatusCode?o.httpStatusCode+"":void 0,a=new r({name:t?.code||t?.Code||n||i||"UnknownError",$fault:"client",$metadata:o});throw tn(a,t)},ti=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),ta=e=>{switch(e){case"standard":case"cross-region":return{retryMode:"standard",connectionTimeout:3100};case"in-region":return{retryMode:"standard",connectionTimeout:1100};case"mobile":return{retryMode:"standard",connectionTimeout:3e4};default:return{}}},ts=e=>{let t=[];for(let r in E){let n=E[r];void 0!==e[n]&&t.push({algorithmId:()=>n,checksumConstructor:()=>e[n]})}return{_checksumAlgorithms:t,addChecksumAlgorithm(e){this._checksumAlgorithms.push(e)},checksumAlgorithms(){return this._checksumAlgorithms}}},tl=e=>{let t={};return e.checksumAlgorithms().forEach(e=>{t[e.algorithmId()]=e.checksumConstructor()}),t},tu=e=>{let t=e.retryStrategy;return{setRetryStrategy(e){t=e},retryStrategy:()=>t}},tc=e=>{let t={};return t.retryStrategy=e.retryStrategy(),t},tf=e=>({...ts(e),...tu(e)}),td=e=>({...tl(e),...tc(e)});function tp(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}let th=e=>{let t="#text";for(let r in e)e.hasOwnProperty(r)&&void 0!==e[r][t]?e[r]=e[r][t]:"object"==typeof e[r]&&null!==e[r]&&(e[r]=th(e[r]));return e},tm=function(){let e=Object.getPrototypeOf(this).constructor,t=Function.bind.apply(String,[null,...arguments]),r=new t;return Object.setPrototypeOf(r,e.prototype),r};function tg(e,t,r){let n,o;if(void 0===t&&void 0===r)n={},o=e;else{if(n=e,"function"==typeof t)return tv(n,t,o=r);o=t}for(let e of Object.keys(o)){if(!Array.isArray(o[e])){n[e]=o[e];continue}ty(n,null,o,e)}return n}tm.prototype=Object.create(String.prototype,{constructor:{value:tm,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(tm,String);let tv=(e,t,r)=>tg(e,Object.entries(r).reduce((e,[r,n])=>(Array.isArray(n)?e[r]=n:"function"==typeof n?e[r]=[t,n()]:e[r]=[t,n],e),{})),ty=(e,t,r,n)=>{if(null!==t){let o=r[n];"function"==typeof o&&(o=[,o]);let[i=tb,a=tx,s=n]=o;("function"==typeof i&&i(t[s])||"function"!=typeof i&&i)&&(e[n]=a(t[s]));return}let[o,i]=r[n];if("function"==typeof i){let t;let r=void 0===o&&null!=(t=i()),a="function"==typeof o&&!!o(void 0)||"function"!=typeof o&&!!o;r?e[n]=t:a&&(e[n]=i())}else{let t=void 0===o&&null!=i,r="function"==typeof o&&!!o(i)||"function"!=typeof o&&!!o;(t||r)&&(e[n]=i)}},tb=e=>null!=e,tx=e=>e,tw=(e,t,r,n,o,i)=>{if(null!=t&&void 0!==t[r]){let t=n();if(t.length<=0)throw Error("Empty value provided for input HTTP label: "+r+".");e=e.replace(o,i?t.split("/").map(e=>tp(e)).join("/"):tp(t))}else throw Error("No value provided for input HTTP label: "+r+".");return e},tS={step:"finalizeRequest",tags:["CHECK_CONTENT_LENGTH_HEADER"],name:"getCheckContentLengthHeaderPlugin",override:!0},t_=e=>({applyToStack:e=>{e.add((e,t)=>async r=>{let{request:n}=r;if(Z.isInstance(n)&&!n.headers["content-length"]){let e="Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.";"function"!=typeof t?.logger?.warn||t.logger instanceof eN?console.warn(e):t.logger.warn(e)}return e({...r})},tS)}}),tE=e=>(t,r)=>async n=>{let o=await e.region(),i=e.region;r.__s3RegionRedirect&&(e.region=async()=>(e.region=i,r.__s3RegionRedirect));let a=await t(n);if(r.__s3RegionRedirect){let t=await e.region();if(o!==t)throw Error("Region was not restored following S3 region redirect.")}return a},tA={tags:["REGION_REDIRECT","S3"],name:"regionRedirectEndpointMiddleware",override:!0,relation:"before",toMiddleware:"endpointV2Middleware"},tM={step:"initialize",tags:["REGION_REDIRECT","S3"],name:"regionRedirectMiddleware",override:!0},tC=e=>({applyToStack:t=>{t.add((t,r)=>async n=>{try{return await t(n)}catch(o){if(e.followRegionRedirects&&301===o.$metadata.httpStatusCode){try{let t=o.$response.headers["x-amz-bucket-region"];r.logger?.debug(`Redirecting from ${await e.region()} to ${t}`),r.__s3RegionRedirect=t}catch(e){throw Error("Region redirect failed: "+e)}return t(n)}throw o}},tM),t.addRelativeTo(tE(e),tA)}}),tT=e=>({...e,forcePathStyle:e.forcePathStyle??!1,useAccelerateEndpoint:e.useAccelerateEndpoint??!1,disableMultiregionAccessPoints:e.disableMultiregionAccessPoints??!1,followRegionRedirects:e.followRegionRedirects??!1}),tP=e=>"string"==typeof e&&0===e.indexOf("arn:")&&e.split(":").length>=6,tO={step:"initialize",tags:["VALIDATE_BUCKET_NAME"],name:"validateBucketNameMiddleware",override:!0},tR=e=>({applyToStack:e=>{e.add(e=>async t=>{let{input:{Bucket:r}}=t;if("string"==typeof r&&!tP(r)&&r.indexOf("/")>=0){let e=Error(`Bucket name shouldn't contain '/', received '${r}'`);throw e.name="InvalidBucketName",e}return e({...t})},tO)}}),tL={name:"ssecMiddleware",step:"initialize",tags:["SSE"],override:!0},tN=e=>({applyToStack:t=>{t.add(t=>async r=>{let n={...r.input};for(let t of[{target:"SSECustomerKey",hash:"SSECustomerKeyMD5"},{target:"CopySourceSSECustomerKey",hash:"CopySourceSSECustomerKeyMD5"}]){let r=n[t.target];if(r){let o=ArrayBuffer.isView(r)?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):"string"==typeof r?e.utf8Decoder(r):new Uint8Array(r),i=e.base64Encoder(o),a=new e.md5;a.update(o),n={...n,[t.target]:i,[t.hash]:e.base64Encoder(await a.digest())}}}return t({...r,input:n})},tL)}}),tD=async e=>{let t=e?.Bucket||"";if("string"==typeof e.Bucket&&(e.Bucket=t.replace(/#/g,encodeURIComponent("#")).replace(/\?/g,encodeURIComponent("?"))),tk(t)){if(!0===e.ForcePathStyle)throw Error("Path-style addressing cannot be used with ARN buckets")}else tz(t)&&(-1===t.indexOf(".")||String(e.Endpoint).startsWith("http:"))&&t.toLowerCase()===t&&!(t.length<3)||(e.ForcePathStyle=!0);return e.DisableMultiRegionAccessPoints&&(e.disableMultiRegionAccessPoints=!0,e.DisableMRAP=!0),e},tF=/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,tI=/(\d+\.){3}\d+/,tU=/\.\./,tz=e=>tF.test(e)&&!tI.test(e)&&!tU.test(e),tk=e=>{let[t,r,n,o,i,a]=e.split(":"),s="arn"===t&&e.split(":").length>=6,l=5===[t,r,n,i,a].filter(Boolean).length;if(s&&!l)throw Error(`Invalid ARN: ${e} was an invalid ARN.`);return"arn"===t&&!!r&&!!n&&!!i&&!!a},tB=(e,t,r)=>{let n=async()=>{let n=r[e]??r[t];return"function"==typeof n?n():n};return"endpoint"===e||"endpoint"===t?async()=>{let e=await n();if(e&&"object"==typeof e){if("url"in e)return e.url.href;if("hostname"in e){let{protocol:t,hostname:r,port:n,path:o}=e;return`${t}//${r}${n?":"+n:""}${o}`}}return e}:n},tj=async e=>void 0,t$=e=>{let t;if("string"==typeof e)return t$(new URL(e));let{hostname:r,pathname:n,port:o,protocol:i,search:a}=e;return a&&(t=function(e){let t={};if(e=e.replace(/^\?/,""))for(let r of e.split("&")){let[e,n=null]=r.split("=");e=decodeURIComponent(e),n&&(n=decodeURIComponent(n)),e in t?Array.isArray(t[e])?t[e].push(n):t[e]=[t[e],n]:t[e]=n}return t}(a)),{hostname:r,port:o?parseInt(o):void 0,protocol:i,path:n,query:t}},tV=e=>"object"==typeof e?"url"in e?t$(e.url):e:t$(e),tG=async(e,t,r,n)=>{if(!r.endpoint){let e=await tj(r.serviceId||"");e&&(r.endpoint=()=>Promise.resolve(tV(e)))}let o=await tq(e,t,r);if("function"!=typeof r.endpointProvider)throw Error("config.endpointProvider is not set.");let i=r.endpointProvider(o,n);return i},tq=async(e,t,r)=>{let n={},o=t?.getEndpointParameterInstructions?.()||{};for(let[t,i]of Object.entries(o))switch(i.type){case"staticContextParams":n[t]=i.value;break;case"contextParams":n[t]=e[i.name];break;case"clientContextParams":case"builtInParams":n[t]=await tB(i.name,t,r)();break;default:throw Error("Unrecognized endpoint parameter instruction: "+JSON.stringify(i))}return 0===Object.keys(o).length&&Object.assign(n,r),"s3"===String(r.serviceId).toLowerCase()&&await tD(n),n},tH=({config:e,instructions:t})=>(r,n)=>async o=>{let i=await tG(o.input,{getEndpointParameterInstructions:()=>t},{...e},n);n.endpointV2=i,n.authSchemes=i.properties?.authSchemes;let a=n.authSchemes?.[0];return a&&(n.signing_region=a.signingRegion,n.signing_service=a.signingName),r({...o})},tW=(e,t)=>(r,n)=>async n=>{let{response:o}=await r(n);try{let r=await t(o,e);return{response:o,output:r}}catch(e){throw Object.defineProperty(e,"$response",{value:o}),"$metadata"in e||(e.message+="\n  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object."),e}},tX=(e,t)=>(r,n)=>async o=>{let i=n.endpointV2?.url&&e.urlParser?async()=>e.urlParser(n.endpointV2.url):e.endpoint;if(!i)throw Error("No valid endpoint provider available.");let a=await t(o.input,{...e,endpoint:i});return r({...o,request:a})},tK={name:"deserializerMiddleware",step:"deserialize",tags:["DESERIALIZER"],override:!0},tY={name:"serializerMiddleware",step:"serialize",tags:["SERIALIZER"],override:!0},tZ={step:"serialize",tags:["ENDPOINT_PARAMETERS","ENDPOINT_V2","ENDPOINT"],name:"endpointV2Middleware",override:!0,relation:"before",toMiddleware:tY.name},tJ=(e,t)=>({applyToStack:r=>{r.addRelativeTo(tH({config:e,instructions:t}),tZ)}}),tQ=e=>{if("function"==typeof e)return e;let t=Promise.resolve(e);return()=>t},t1=e=>{let t=e.tls??!0,{endpoint:r}=e,n=null!=r?async()=>tV(await tQ(r)()):void 0,o=!!r;return{...e,endpoint:n,tls:t,isCustomEndpoint:o,useDualstackEndpoint:tQ(e.useDualstackEndpoint??!1),useFipsEndpoint:tQ(e.useFipsEndpoint??!1)}};class t0 extends tr{constructor(e){super(e),Object.setPrototypeOf(this,t0.prototype)}}(T||(T={})).visit=(e,t)=>void 0!==e.Prefix?t.Prefix(e.Prefix):void 0!==e.Tag?t.Tag(e.Tag):void 0!==e.And?t.And(e.And):t._(e.$unknown[0],e.$unknown[1]),(P||(P={})).visit=(e,t)=>void 0!==e.Prefix?t.Prefix(e.Prefix):void 0!==e.Tag?t.Tag(e.Tag):void 0!==e.ObjectSizeGreaterThan?t.ObjectSizeGreaterThan(e.ObjectSizeGreaterThan):void 0!==e.ObjectSizeLessThan?t.ObjectSizeLessThan(e.ObjectSizeLessThan):void 0!==e.And?t.And(e.And):t._(e.$unknown[0],e.$unknown[1]),(O||(O={})).visit=(e,t)=>void 0!==e.Prefix?t.Prefix(e.Prefix):void 0!==e.Tag?t.Tag(e.Tag):void 0!==e.AccessPointArn?t.AccessPointArn(e.AccessPointArn):void 0!==e.And?t.And(e.And):t._(e.$unknown[0],e.$unknown[1]),(R||(R={})).visit=(e,t)=>void 0!==e.Prefix?t.Prefix(e.Prefix):void 0!==e.Tag?t.Tag(e.Tag):void 0!==e.And?t.And(e.And):t._(e.$unknown[0],e.$unknown[1]);let t2=e=>({...e,...e.SSEKMSKeyId&&{SSEKMSKeyId:e8},...e.SSEKMSEncryptionContext&&{SSEKMSEncryptionContext:e8}}),t3=e=>({...e,...e.SSECustomerKey&&{SSECustomerKey:e8},...e.SSEKMSKeyId&&{SSEKMSKeyId:e8},...e.SSEKMSEncryptionContext&&{SSEKMSEncryptionContext:e8}});var t9={},t4={};a(t4,"validate",function(){return L},function(e){return L=e});let t5=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-퟿\\uF900-\\uFDCF\\uFDF0-\\uFFFD",t6="["+t5+"]["+t5+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",t8=RegExp("^"+t6+"$");N=function(e){let t=t8.exec(e);return null!=t},D=function(e,t){let r=[],n=t.exec(e);for(;n;){let o=[];o.startIndex=t.lastIndex-n[0].length;let i=n.length;for(let e=0;e<i;e++)o.push(n[e]);r.push(o),n=t.exec(e)}return r};let t7={allowBooleanAttributes:!1,unpairedTags:[]};function re(e){return" "===e||"	"===e||"\n"===e||"\r"===e}/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */function rt(e,t){let r=t;for(;t<e.length;t++)if("?"==e[t]||" "==e[t]){//tagname
let n=e.substr(r,t-r);if(t>5&&"xml"===n)return ri("InvalidXml","XML declaration allowed only at the start of the document.",ra(e,t));if("?"!=e[t]||">"!=e[t+1])continue;//check if valid attribut string
t++;break}return t}function rr(e,t){if(e.length>t+5&&"-"===e[t+1]&&"-"===e[t+2])//comment
{for(t+=3;t<e.length;t++)if("-"===e[t]&&"-"===e[t+1]&&">"===e[t+2]){t+=2;break}}else if(e.length>t+8&&"D"===e[t+1]&&"O"===e[t+2]&&"C"===e[t+3]&&"T"===e[t+4]&&"Y"===e[t+5]&&"P"===e[t+6]&&"E"===e[t+7]){let r=1;for(t+=8;t<e.length;t++)if("<"===e[t])r++;else if(">"===e[t]&&0==--r)break}else if(e.length>t+9&&"["===e[t+1]&&"C"===e[t+2]&&"D"===e[t+3]&&"A"===e[t+4]&&"T"===e[t+5]&&"A"===e[t+6]&&"["===e[t+7]){for(t+=8;t<e.length;t++)if("]"===e[t]&&"]"===e[t+1]&&">"===e[t+2]){t+=2;break}}return t}L=function(e,t){t=Object.assign({},t7,t);//xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
//xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
//xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
let r=[],n=!1,o=!1;"\uFEFF"===e[0]&&(e=e.substr(1));for(let i=0;i<e.length;i++)if("<"===e[i]&&"?"===e[i+1]){if(i+=2,(i=rt(e,i)).err)return i}else if("<"===e[i]){//starting of tag
//read until you reach to '>' avoiding any '>' in attribute value
let a=i;if("!"===e[++i]){i=rr(e,i);continue}{let s=!1;"/"===e[i]&&(//closing tag
s=!0,i++);//read tagname
let l="";for(;i<e.length&&">"!==e[i]&&" "!==e[i]&&"	"!==e[i]&&"\n"!==e[i]&&"\r"!==e[i];i++)l+=e[i];if("/"===(l=l.trim())[l.length-1]&&(//self closing tag without attributes
l=l.substring(0,l.length-1),//continue;
i--),!N(l)/* && !tagname.match(startsWithXML) */)return ri("InvalidTag",0===l.trim().length?"Invalid space after '<'.":"Tag '"+l+"' is an invalid name.",ra(e,i));let u=/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */function(e,t){let r="",n="",o=!1;for(;t<e.length;t++){if('"'===e[t]||"'"===e[t])""===n?n=e[t]:n!==e[t]||(n="");else if(">"===e[t]&&""===n){o=!0;break}r+=e[t]}return""===n&&{value:r,index:t,tagClosed:o}}(e,i);if(!1===u)return ri("InvalidAttr","Attributes for '"+l+"' have open quote.",ra(e,i));let c=u.value;if(i=u.index,"/"===c[c.length-1]){//self closing tag
let r=i-c.length;c=c.substring(0,c.length-1);let o=ro(c,t);if(!0!==o)//in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
//this gives us the absolute index in the entire xml, which we can use to find the line at last
return ri(o.err.code,o.err.msg,ra(e,r+o.err.line));n=!0}else if(s){if(!u.tagClosed)return ri("InvalidTag","Closing tag '"+l+"' doesn't have proper closing.",ra(e,i));{if(c.trim().length>0)return ri("InvalidTag","Closing tag '"+l+"' can't have attributes or invalid starting.",ra(e,a));let t=r.pop();if(l!==t.tagName){let r=ra(e,t.tagStartPos);return ri("InvalidTag","Expected closing tag '"+t.tagName+"' (opened in line "+r.line+", col "+r.col+") instead of closing tag '"+l+"'.",ra(e,a))}//when there are no more tags, we reached the root level.
0==r.length&&(o=!0)}}else{let s=ro(c,t);if(!0!==s)//in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
//this gives us the absolute index in the entire xml, which we can use to find the line at last
return ri(s.err.code,s.err.msg,ra(e,i-c.length+s.err.line));//if the root level has been reached before ...
if(!0===o)return ri("InvalidXml","Multiple possible root nodes found.",ra(e,i));-1!==t.unpairedTags.indexOf(l)||r.push({tagName:l,tagStartPos:a}),n=!0}//skip tag text value
//It may include comments and CDATA value
for(i++;i<e.length;i++)if("<"===e[i]){if("!"===e[i+1]){i=rr(e,++i);continue}if("?"===e[i+1]){if((i=rt(e,++i)).err)return i}else break}else if("&"===e[i]){let t=function(e,t){if(";"===e[++t])return -1;if("#"===e[t])return function(e,t){let r=/\d/;for("x"===e[t]&&(t++,r=/[\da-fA-F]/);t<e.length;t++){if(";"===e[t])return t;if(!e[t].match(r))break}return -1}(e,++t);let r=0;for(;t<e.length;t++,r++)if(!e[t].match(/\w/)||!(r<20)){if(";"===e[t])break;return -1}return t}(e,i);if(-1==t)return ri("InvalidChar","char '&' is not expected.",ra(e,i));i=t}else if(!0===o&&!re(e[i]))return ri("InvalidXml","Extra text at the end",ra(e,i));//end of reading tag text value
"<"===e[i]&&i--}}else{if(re(e[i]))continue;return ri("InvalidChar","char '"+e[i]+"' is not expected.",ra(e,i))}return n?1==r.length?ri("InvalidTag","Unclosed tag '"+r[0].tagName+"'.",ra(e,r[0].tagStartPos)):!(r.length>0)||ri("InvalidXml","Invalid '"+JSON.stringify(r.map(e=>e.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):ri("InvalidXml","Start tag expected.",1)};/**
 * Select all the attributes whether valid or invalid.
 */let rn=RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""
function ro(e,t){//console.log("start:"+attrStr+":end");
//if(attrStr.trim().length === 0) return true; //empty string
let r=D(e,rn),n={};for(let e=0;e<r.length;e++){if(0===r[e][1].length)return ri("InvalidAttr","Attribute '"+r[e][2]+"' has no space in starting.",rs(r[e]));if(void 0!==r[e][3]&&void 0===r[e][4])return ri("InvalidAttr","Attribute '"+r[e][2]+"' is without value.",rs(r[e]));if(void 0===r[e][3]&&!t.allowBooleanAttributes)return ri("InvalidAttr","boolean attribute '"+r[e][2]+"' is not allowed.",rs(r[e]));/* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */let o=r[e][2];if(!N(o))return ri("InvalidAttr","Attribute '"+o+"' is an invalid name.",rs(r[e]));if(n.hasOwnProperty(o))return ri("InvalidAttr","Attribute '"+o+"' is repeated.",rs(r[e]));n[o]=1}return!0}function ri(e,t,r){return{err:{code:e,msg:t,line:r.line||r,col:r.col}}}//this function returns the line number for the character at the given index
function ra(e,t){let r=e.substring(0,t).split(/\r?\n/);return{line:r.length,// column number is last line's length + 1, because column numbering starts at 1:
col:r[r.length-1].length+1}}//this function returns the position of the first character of match within attrStr
function rs(e){return e.startIndex+e[1].length}var rl={};let ru={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,//ignoreRootElement : false,
parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(e,t,r){return e}};var rc={},rf={};rf=class{constructor(e){this.tagname=e,this.child=[],this[":@"]={}}add(e,t){"__proto__"===e&&(e="#__proto__"),this.child.push({[e]:t})}addChild(e){"__proto__"===e.tagname&&(e.tagname="#__proto__"),e[":@"]&&Object.keys(e[":@"]).length>0?this.child.push({[e.tagname]:e.child,":@":e[":@"]}):this.child.push({[e.tagname]:e.child})}};var rd={};function rp(e,t){return"!"===e[t+1]&&"-"===e[t+2]&&"-"===e[t+3]}rd=//TODO: handle comments
function(e,t){let r={};if("O"===e[t+3]&&"C"===e[t+4]&&"T"===e[t+5]&&"Y"===e[t+6]&&"P"===e[t+7]&&"E"===e[t+8]){t+=9;let f=1,d=!1,p=!1;for(;t<e.length;t++)if("<"!==e[t]||p){if(">"===e[t]){if(p?"-"===e[t-1]&&"-"===e[t-2]&&(p=!1,f--):f--,0===f)break}else"["===e[t]?d=!0:e[t]}else{var n,o,i,a,s,l,u,c;if(d&&"!"===(n=e)[(o=t)+1]&&"E"===n[o+2]&&"N"===n[o+3]&&"T"===n[o+4]&&"I"===n[o+5]&&"T"===n[o+6]&&"Y"===n[o+7])t+=7,[entityName,val,t]=function(e,t){//External entities are not supported
//    <!ENTITY ext SYSTEM "http://normal-website.com" >
//Parameter entities are not supported
//    <!ENTITY entityname "&anotherElement;">
//Internal entities are supported
//    <!ENTITY entityname "replacement text">
//read EntityName
let r="";for(;t<e.length&&"'"!==e[t]&&'"'!==e[t];t++)// else 
r+=e[t];if(-1!==(r=r.trim()).indexOf(" "))throw Error("External entites are not supported");//read Entity Value
let n=e[t++],o="";for(;t<e.length&&e[t]!==n;t++)o+=e[t];return[r,o,t]}(e,t+1),-1===val.indexOf("&")&&(r[function(e){if(N(e))return e;throw Error(`Invalid entity name ${e}`)}(entityName)]={regx:RegExp(`&${entityName};`,"g"),val:val});else if(d&&"!"===(i=e)[(a=t)+1]&&"E"===i[a+2]&&"L"===i[a+3]&&"E"===i[a+4]&&"M"===i[a+5]&&"E"===i[a+6]&&"N"===i[a+7]&&"T"===i[a+8])t+=8;//Not supported
else if(d&&"!"===(s=e)[(l=t)+1]&&"A"===s[l+2]&&"T"===s[l+3]&&"T"===s[l+4]&&"L"===s[l+5]&&"I"===s[l+6]&&"S"===s[l+7]&&"T"===s[l+8])t+=8;//Not supported
else if(d&&"!"===(u=e)[(c=t)+1]&&"N"===u[c+2]&&"O"===u[c+3]&&"T"===u[c+4]&&"A"===u[c+5]&&"T"===u[c+6]&&"I"===u[c+7]&&"O"===u[c+8]&&"N"===u[c+9])t+=9;//Not supported
else if(rp)p=!0;else throw Error("Invalid DOCTYPE");f++}if(0!==f)throw Error("Unclosed DOCTYPE")}else throw Error("Invalid Tag instead of DOCTYPE");return{entities:r,i:t}};var rh={};let rm=/^[-+]?0x[a-fA-F0-9]+$/,rg=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);let rv={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function ry(e){let t=Object.keys(e);for(let r=0;r<t.length;r++){let n=t[r];this.lastEntities[n]={regex:RegExp("&"+n+";","g"),val:e[n]}}}/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */function rb(e,t,r,n,o,i,a){if(void 0!==e&&(this.options.trimValues&&!n&&(e=e.trim()),e.length>0)){a||(e=this.replaceEntitiesValue(e));let n=this.options.tagValueProcessor(t,e,r,o,i);if(null==n)return e;{if(typeof n!=typeof e||n!==e)return n;if(this.options.trimValues)return rR(e,this.options.parseTagValue,this.options.numberParseOptions);let t=e.trim();return t===e?rR(e,this.options.parseTagValue,this.options.numberParseOptions):e}}}function rx(e){if(this.options.removeNSPrefix){let t=e.split(":"),r="/"===e.charAt(0)?"/":"";if("xmlns"===t[0])return"";2===t.length&&(e=r+t[1])}return e}rh=function(e,t={}){if(// const options = Object.assign({}, consider);
// if(opt.leadingZeros === false){
//     options.leadingZeros = false;
// }else if(opt.hex === false){
//     options.hex = false;
// }
t=Object.assign({},rv,t),!e||"string"!=typeof e)return e;let r=e.trim();// if(trimmedStr === "0.0") return 0;
// else if(trimmedStr === "+0.0") return 0;
// else if(trimmedStr === "-0.0") return -0;
if(void 0!==t.skipLike&&t.skipLike.test(r))return e;{if(t.hex&&rm.test(r))return Number.parseInt(r,16);//separate negative sign, leading zeros, and rest number
let o=rg.exec(r);if(!o)return e;{var n;let i=o[1],a=o[2],s=((n=o[3])&&-1!==n.indexOf(".")&&("."===(n=n.replace(/0+$/,""))?n="0":"."===n[0]?n="0"+n:"."===n[n.length-1]&&(n=n.substr(0,n.length-1))),n),l=o[4]||o[6];if(!t.leadingZeros&&a.length>0&&i&&"."!==r[2])return e;//-0123
{if(!t.leadingZeros&&a.length>0&&!i&&"."!==r[1])return e;//0123
let n=Number(r),o=""+n;return -1!==o.search(/[eE]/)||l?t.eNotation?n:e:-1!==r.indexOf(".")?// const decimalPart = match[5].substr(1);
// const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));
// const p = numStr.indexOf(".");
// const givenIntPart = numStr.substr(0,p);
// const givenDecPart = numStr.substr(p+1);
"0"===o&&""===s?n:o===s?n:i&&o==="-"+s?n:e:a?// if(numTrimmedByZeros === numStr){
//     if(options.leadingZeros) return num;
//     else return str;
// }else return str;
s===o?n:i+s===o?n:e:r===o?n:r===i+o?n:e}// else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
}}},"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,t6);//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
let rw=RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");function rS(e,t,r){if(!this.options.ignoreAttributes&&"string"==typeof e){// attrStr = attrStr.replace(/\r?\n/g, ' ');
//attrStr = attrStr || attrStr.trim();
let r=D(e,rw),n=r.length,o={};for(let e=0;e<n;e++){let n=this.resolveNameSpace(r[e][1]),i=r[e][4],a=this.options.attributeNamePrefix+n;if(n.length){if(this.options.transformAttributeName&&(a=this.options.transformAttributeName(a)),"__proto__"===a&&(a="#__proto__"),void 0!==i){this.options.trimValues&&(i=i.trim()),i=this.replaceEntitiesValue(i);let e=this.options.attributeValueProcessor(n,i,t);null==e?o[a]=i:typeof e!=typeof i||e!==i?o[a]=e:o[a]=rR(i,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(o[a]=!0)}}if(Object.keys(o).length){if(this.options.attributesGroupName){let e={};return e[this.options.attributesGroupName]=o,e}return o}}}let r_=function(e){e=e.replace(/\r\n?/g,"\n");//TODO: remove this line
let t=new rf("!xml"),r=t,n="",o="";for(let i=0;i<e.length;i++){let a=e[i];if("<"===a){// const nextIndex = i+1;
// const _2ndChar = xmlData[nextIndex];
if("/"===e[i+1]){let t=rT(e,">",i,"Closing Tag is not closed."),a=e.substring(i+2,t).trim();if(this.options.removeNSPrefix){let e=a.indexOf(":");-1!==e&&(a=a.substr(e+1))}this.options.transformTagName&&(a=this.options.transformTagName(a)),r&&(n=this.saveTextToParentTag(n,r,o));//check if last tag of nested tag was unpaired tag
let s=o.substring(o.lastIndexOf(".")+1);if(a&&-1!==this.options.unpairedTags.indexOf(a))throw Error(`Unpaired tag can not be used as closing tag: </${a}>`);let l=0;s&&-1!==this.options.unpairedTags.indexOf(s)?(l=o.lastIndexOf(".",o.lastIndexOf(".")-1),this.tagsNodeStack.pop()):l=o.lastIndexOf("."),o=o.substring(0,l),r=this.tagsNodeStack.pop(),n="",i=t}else if("?"===e[i+1]){let t=rP(e,i,!1,"?>");if(!t)throw Error("Pi Tag is not closed.");if(n=this.saveTextToParentTag(n,r,o),this.options.ignoreDeclaration&&"?xml"===t.tagName||this.options.ignorePiTags);else{let e=new rf(t.tagName);e.add(this.options.textNodeName,""),t.tagName!==t.tagExp&&t.attrExpPresent&&(e[":@"]=this.buildAttributesMap(t.tagExp,o,t.tagName)),this.addChild(r,e,o)}i=t.closeIndex+1}else if("!--"===e.substr(i+1,3)){let t=rT(e,"-->",i+4,"Comment is not closed.");if(this.options.commentPropName){let a=e.substring(i+4,t-2);n=this.saveTextToParentTag(n,r,o),r.add(this.options.commentPropName,[{[this.options.textNodeName]:a}])}i=t}else if("!D"===e.substr(i+1,2)){let t=rd(e,i);this.docTypeEntities=t.entities,i=t.i}else if("!["===e.substr(i+1,2)){let t=rT(e,"]]>",i,"CDATA is not closed.")-2,a=e.substring(i+9,t);//cdata should be set even if it is 0 length string
if(n=this.saveTextToParentTag(n,r,o),this.options.cdataPropName)// if(!val) val = "";
r.add(this.options.cdataPropName,[{[this.options.textNodeName]:a}]);else{let e=this.parseTextData(a,r.tagname,o,!0,!1,!0);void 0==e&&(e=""),r.add(this.options.textNodeName,e)}i=t+2}else{let a=rP(e,i,this.options.removeNSPrefix),s=a.tagName,l=a.tagExp,u=a.attrExpPresent,c=a.closeIndex;this.options.transformTagName&&(s=this.options.transformTagName(s)),r&&n&&"!xml"!==r.tagname&&(n=this.saveTextToParentTag(n,r,o,!1));//check if last tag was unpaired tag
let f=r;if(f&&-1!==this.options.unpairedTags.indexOf(f.tagname)&&(r=this.tagsNodeStack.pop(),o=o.substring(0,o.lastIndexOf("."))),s!==t.tagname&&(o+=o?"."+s:s),this.isItStopNode(this.options.stopNodes,o,s)){let t="";//self-closing tag
if(l.length>0&&l.lastIndexOf("/")===l.length-1)i=a.closeIndex;else if(-1!==this.options.unpairedTags.indexOf(s))i=a.closeIndex;else{//read until closing tag is found
let r=this.readStopNodeData(e,s,c+1);if(!r)throw Error(`Unexpected end of ${s}`);i=r.i,t=r.tagContent}let n=new rf(s);s!==l&&u&&(n[":@"]=this.buildAttributesMap(l,o,s)),t&&(t=this.parseTextData(t,s,o,!0,u,!0,!0)),o=o.substr(0,o.lastIndexOf(".")),n.add(this.options.textNodeName,t),this.addChild(r,n,o)}else{//selfClosing tag
if(l.length>0&&l.lastIndexOf("/")===l.length-1){l="/"===s[s.length-1]?s=s.substr(0,s.length-1):l.substr(0,l.length-1),this.options.transformTagName&&(s=this.options.transformTagName(s));let e=new rf(s);s!==l&&u&&(e[":@"]=this.buildAttributesMap(l,o,s)),this.addChild(r,e,o),o=o.substr(0,o.lastIndexOf("."))}else{let e=new rf(s);this.tagsNodeStack.push(r),s!==l&&u&&(e[":@"]=this.buildAttributesMap(l,o,s)),this.addChild(r,e,o),r=e}n="",i=c}}}else n+=e[i]}return t.child};function rE(e,t,r){let n=this.options.updateTag(t.tagname,r,t[":@"]);!1===n||("string"==typeof n&&(t.tagname=n),e.addChild(t))}let rA=function(e){if(this.options.processEntities){for(let t in this.docTypeEntities){let r=this.docTypeEntities[t];e=e.replace(r.regx,r.val)}for(let t in this.lastEntities){let r=this.lastEntities[t];e=e.replace(r.regex,r.val)}if(this.options.htmlEntities)for(let t in this.htmlEntities){let r=this.htmlEntities[t];e=e.replace(r.regex,r.val)}e=e.replace(this.ampEntity.regex,this.ampEntity.val)}return e};function rM(e,t,r,n){return e&&(void 0===n&&(n=0===Object.keys(t.child).length),void 0!==(e=this.parseTextData(e,t.tagname,r,!1,!!t[":@"]&&0!==Object.keys(t[":@"]).length,n))&&""!==e&&t.add(this.options.textNodeName,e),e=""),e}//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */function rC(e,t,r){let n="*."+r;for(let r in e){let o=e[r];if(n===o||t===o)return!0}return!1}function rT(e,t,r,n){let o=e.indexOf(t,r);if(-1!==o)return o+t.length-1;throw Error(n)}function rP(e,t,r,n=">"){let o=/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */function(e,t,r=">"){let n;let o="";for(let i=t;i<e.length;i++){let t=e[i];if(n)t===n&&(n="");//reset
else if('"'===t||"'"===t)n=t;else if(t===r[0]){if(!r[1]||e[i+1]===r[1])return{data:o,index:i}}else"	"===t&&(t=" ");o+=t}}(e,t+1,n);if(!o)return;let i=o.data,a=o.index,s=i.search(/\s/),l=i,u=!0;if(-1!==s&&(l=i.substr(0,s).replace(/\s\s*$/,""),i=i.substr(s+1)),r){let e=l.indexOf(":");-1!==e&&(u=(l=l.substr(e+1))!==o.data.substr(e+1))}return{tagName:l,tagExp:i,closeIndex:a,attrExpPresent:u}}/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */function rO(e,t,r){let n=r,o=1;for(;r<e.length;r++)if("<"===e[r]){if("/"===e[r+1]){let i=rT(e,">",r,`${t} is not closed`);if(e.substring(r+2,i).trim()===t&&0==--o)return{tagContent:e.substring(n,r),i:i};r=i}else if("?"===e[r+1]){let t=rT(e,"?>",r+1,"StopNode is not closed.");r=t}else if("!--"===e.substr(r+1,3)){let t=rT(e,"-->",r+3,"StopNode is not closed.");r=t}else if("!["===e.substr(r+1,2)){let t=rT(e,"]]>",r,"StopNode is not closed.")-2;r=t}else{let n=rP(e,r,">");if(n){let e=n&&n.tagName;e===t&&"/"!==n.tagExp[n.tagExp.length-1]&&o++,r=n.closeIndex}}}//end for loop
}function rR(e,t,r){if(t&&"string"==typeof e){//console.log(options)
let t=e.trim();return"true"===t||"false"!==t&&rh(e,r)}return void 0!==e?e:""}rc=//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");
class{constructor(e){this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},// "lt" : { regex: /&(lt|#60);/g, val: "<" },
// "gt" : { regex: /&(gt|#62);/g, val: ">" },
// "amp" : { regex: /&(amp|#38);/g, val: "&" },
// "quot" : { regex: /&(quot|#34);/g, val: "\"" },
// "apos" : { regex: /&(apos|#39);/g, val: "'" },
cent:{regex:/&(cent|#162);/g,val:"\xa2"},pound:{regex:/&(pound|#163);/g,val:"\xa3"},yen:{regex:/&(yen|#165);/g,val:"\xa5"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"\xa9"},reg:{regex:/&(reg|#174);/g,val:"\xae"},inr:{regex:/&(inr|#8377);/g,val:"₹"}},this.addExternalEntities=ry,this.parseXml=r_,this.parseTextData=rb,this.resolveNameSpace=rx,this.buildAttributesMap=rS,this.isItStopNode=rC,this.replaceEntitiesValue=rA,this.readStopNodeData=rO,this.saveTextToParentTag=rM,this.addChild=rE}},rl=class{constructor(e){this.externalEntities={},this.options=Object.assign({},ru,e)}/**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */parse(e,t){if("string"==typeof e);else if(e.toString)e=e.toString();else throw Error("XML data is accepted in String or Bytes[] form.");if(t){!0===t&&(t={});//validate with default options
let r=L(e,t);if(!0!==r)throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)}let r=new rc(this.options);r.addExternalEntities(this.externalEntities);let n=r.parseXml(e);return this.options.preserveOrder||void 0===n?n:/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */function e(t,r,n){let o;let i={};for(let a=0;a<t.length;a++){let s=t[a],l=function(e){let t=Object.keys(e);for(let e=0;e<t.length;e++){let r=t[e];if(":@"!==r)return r}}(s),u="";if(u=void 0===n?l:n+"."+l,l===r.textNodeName)void 0===o?o=s[l]:o+=""+s[l];else if(void 0===l)continue;else if(s[l]){let t=e(s[l],r,u),n=function(e,t){let{textNodeName:r}=t,n=Object.keys(e).length;return 0===n||1===n&&(!!e[r]||"boolean"==typeof e[r]||0===e[r])}(t,r);s[":@"]?function(e,t,r,n){if(t){let o=Object.keys(t),i=o.length;for(let a=0;a<i;a++){let i=o[a];n.isArray(i,r+"."+i,!0,!0)?e[i]=[t[i]]:e[i]=t[i]}}}(t,s[":@"],u,r):1!==Object.keys(t).length||void 0===t[r.textNodeName]||r.alwaysCreateTextNode?0===Object.keys(t).length&&(r.alwaysCreateTextNode?t[r.textNodeName]="":t=""):t=t[r.textNodeName],void 0!==i[l]&&i.hasOwnProperty(l)?(Array.isArray(i[l])||(i[l]=[i[l]]),i[l].push(t)):r.isArray(l,u,n)?i[l]=[t]:i[l]=t}}return"string"==typeof o?o.length>0&&(i[r.textNodeName]=o):void 0!==o&&(i[r.textNodeName]=o),i}(n,this.options)}/**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */addEntity(e,t){if(-1!==t.indexOf("&"))throw Error("Entity value can't have '&'");if(-1!==e.indexOf("&")||-1!==e.indexOf(";"))throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if("&"===t)throw Error("An entity with value '&' is not permitted");this.externalEntities[e]=t}};var rL={};function rN(e,t){let r="";if(e&&!t.ignoreAttributes)for(let n in e){let o=t.attributeValueProcessor(n,e[n]);!0===(o=rD(o,t))&&t.suppressBooleanAttributes?r+=` ${n.substr(t.attributeNamePrefix.length)}`:r+=` ${n.substr(t.attributeNamePrefix.length)}="${o}"`}return r}function rD(e,t){if(e&&e.length>0&&t.processEntities)for(let r=0;r<t.entities.length;r++){let n=t.entities[r];e=e.replace(n.regex,n.val)}return e}rL=/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */function(e,t){let r="";return t.format&&t.indentBy.length>0&&(r="\n"),function e(t,r,n,o){let i="",a=!1;for(let s=0;s<t.length;s++){let l=t[s],u=function(e){let t=Object.keys(e);for(let e=0;e<t.length;e++){let r=t[e];if(":@"!==r)return r}}(l),c="";if(c=0===n.length?u:`${n}.${u}`,u===r.textNodeName){let e=l[u];!function(e,t){let r=(e=e.substr(0,e.length-t.textNodeName.length-1)).substr(e.lastIndexOf(".")+1);for(let n in t.stopNodes)if(t.stopNodes[n]===e||t.stopNodes[n]==="*."+r)return!0;return!1}(c,r)&&(e=rD(e=r.tagValueProcessor(u,e),r)),a&&(i+=o),i+=e,a=!1;continue}if(u===r.cdataPropName){a&&(i+=o),i+=`<![CDATA[${l[u][0][r.textNodeName]}]]>`,a=!1;continue}if(u===r.commentPropName){i+=o+`<!--${l[u][0][r.textNodeName]}-->`,a=!0;continue}if("?"===u[0]){let e=rN(l[":@"],r),t="?xml"===u?"":o,n=l[u][0][r.textNodeName];n=0!==n.length?" "+n:"",i+=t+`<${u}${n}${e}?>`,a=!0;continue}let f=o;""!==f&&(f+=r.indentBy);let d=rN(l[":@"],r),p=o+`<${u}${d}`,h=e(l[u],r,c,f);-1!==r.unpairedTags.indexOf(u)?r.suppressUnpairedNode?i+=p+">":i+=p+"/>":(!h||0===h.length)&&r.suppressEmptyNode?i+=p+"/>":h&&h.endsWith(">")?i+=p+`>${h}${o}</${u}>`:(i+=p+">",h&&""!==o&&(h.includes("/>")||h.includes("</"))?i+=o+r.indentBy+h+o:i+=h,i+=`</${u}>`),a=!0}return i}(e,t,"",r)};let rF={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:RegExp("&","g"),val:"&amp;"},{regex:RegExp(">","g"),val:"&gt;"},{regex:RegExp("<","g"),val:"&lt;"},{regex:RegExp("'","g"),val:"&apos;"},{regex:RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],// transformTagName: false,
// transformAttributeName: false,
oneListGroup:!1};function rI(e){this.options=Object.assign({},rF,e),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=rk),this.processTextOrObjNode=rU,this.options.format?(this.indentate=rz,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function rU(e,t,r){let n=this.j2x(e,r+1);return void 0!==e[this.options.textNodeName]&&1===Object.keys(e).length?this.buildTextValNode(e[this.options.textNodeName],t,n.attrStr,r):this.buildObjectNode(n.val,t,n.attrStr,r)}function rz(e){return this.options.indentBy.repeat(e)}function rk(e/*, options*/){return!!e.startsWith(this.options.attributeNamePrefix)&&e.substr(this.attrPrefixLen)}rI.prototype.build=function(e){return this.options.preserveOrder?rL(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0).val)},rI.prototype.j2x=function(e,t){let r="",n="";for(let o in e)if(void 0===e[o]);else if(null===e[o])"?"===o[0]?n+=this.indentate(t)+"<"+o+"?"+this.tagEndChar:n+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if(e[o]instanceof Date)n+=this.buildTextValNode(e[o],o,"",t);else if("object"!=typeof e[o]){//premitive type
let i=this.isAttribute(o);if(i)r+=this.buildAttrPairStr(i,""+e[o]);else if(o===this.options.textNodeName){let t=this.options.tagValueProcessor(o,""+e[o]);n+=this.replaceEntitiesValue(t)}else n+=this.buildTextValNode(e[o],o,"",t)}else if(Array.isArray(e[o])){//repeated nodes
let r=e[o].length,i="";for(let a=0;a<r;a++){let r=e[o][a];void 0===r||(null===r?"?"===o[0]?n+=this.indentate(t)+"<"+o+"?"+this.tagEndChar:n+=this.indentate(t)+"<"+o+"/"+this.tagEndChar:"object"==typeof r?this.options.oneListGroup?i+=this.j2x(r,t+1).val:i+=this.processTextOrObjNode(r,o,t):i+=this.buildTextValNode(r,o,"",t))}this.options.oneListGroup&&(i=this.buildObjectNode(i,o,"",t)),n+=i}else if(this.options.attributesGroupName&&o===this.options.attributesGroupName){let t=Object.keys(e[o]),n=t.length;for(let i=0;i<n;i++)r+=this.buildAttrPairStr(t[i],""+e[o][t[i]])}else n+=this.processTextOrObjNode(e[o],o,t);return{attrStr:r,val:n}},rI.prototype.buildAttrPairStr=function(e,t){return(t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&"true"===t)?" "+e:" "+e+'="'+t+'"'},rI.prototype.buildObjectNode=function(e,t,r,n){if(""===e)return"?"===t[0]?this.indentate(n)+"<"+t+r+"?"+this.tagEndChar:this.indentate(n)+"<"+t+r+this.closeTag(t)+this.tagEndChar;{let o="</"+t+this.tagEndChar,i="";return("?"===t[0]&&(i="?",o=""),r&&-1===e.indexOf("<"))?this.indentate(n)+"<"+t+r+i+">"+e+o:!1!==this.options.commentPropName&&t===this.options.commentPropName&&0===i.length?this.indentate(n)+`<!--${e}-->`+this.newLine:this.indentate(n)+"<"+t+r+i+this.tagEndChar+e+this.indentate(n)+o}},rI.prototype.closeTag=function(e){let t="";return -1!==this.options.unpairedTags.indexOf(e)?this.options.suppressUnpairedNode||(t="/"):t=this.options.suppressEmptyNode?"/":`></${e}`,t},rI.prototype.buildTextValNode=function(e,t,r,n){if(!1!==this.options.cdataPropName&&t===this.options.cdataPropName)return this.indentate(n)+`<![CDATA[${e}]]>`+this.newLine;{if(!1!==this.options.commentPropName&&t===this.options.commentPropName)return this.indentate(n)+`<!--${e}-->`+this.newLine;if("?"===t[0])return this.indentate(n)+"<"+t+r+"?"+this.tagEndChar;let o=this.options.tagValueProcessor(t,e);return""===(o=this.replaceEntitiesValue(o))?this.indentate(n)+"<"+t+r+this.closeTag(t)+this.tagEndChar:this.indentate(n)+"<"+t+r+">"+o+"</"+t+this.tagEndChar}},rI.prototype.replaceEntitiesValue=function(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){let r=this.options.entities[t];e=e.replace(r.regex,r.val)}return e},t9={XMLParser:rl,XMLValidator:t4,XMLBuilder:rI},(F||(F={})).visit=(e,t)=>void 0!==e.Records?t.Records(e.Records):void 0!==e.Stats?t.Stats(e.Stats):void 0!==e.Progress?t.Progress(e.Progress):void 0!==e.Cont?t.Cont(e.Cont):void 0!==e.End?t.End(e.End):t._(e.$unknown[0],e.$unknown[1]);let rB=async(e,t)=>{let r;let{hostname:n,protocol:o="https",port:i,path:a}=await t.endpoint(),s=tg({},rH,{"content-type":e.ContentType||"application/octet-stream","x-amz-acl":e.ACL,"cache-control":e.CacheControl,"content-disposition":e.ContentDisposition,"content-encoding":e.ContentEncoding,"content-language":e.ContentLanguage,"content-length":[()=>rH(e.ContentLength),()=>e.ContentLength.toString()],"content-md5":e.ContentMD5,"x-amz-sdk-checksum-algorithm":e.ChecksumAlgorithm,"x-amz-checksum-crc32":e.ChecksumCRC32,"x-amz-checksum-crc32c":e.ChecksumCRC32C,"x-amz-checksum-sha1":e.ChecksumSHA1,"x-amz-checksum-sha256":e.ChecksumSHA256,expires:[()=>rH(e.Expires),()=>(function(e){let t=e.getUTCFullYear(),r=e.getUTCMonth(),n=e.getUTCDay(),o=e.getUTCDate(),i=e.getUTCHours(),a=e.getUTCMinutes(),s=e.getUTCSeconds(),l=o<10?`0${o}`:`${o}`,u=i<10?`0${i}`:`${i}`,c=a<10?`0${a}`:`${a}`,f=s<10?`0${s}`:`${s}`;return`${te[n]}, ${l} ${tt[r]} ${t} ${u}:${c}:${f} GMT`})(e.Expires).toString()],"x-amz-grant-full-control":e.GrantFullControl,"x-amz-grant-read":e.GrantRead,"x-amz-grant-read-acp":e.GrantReadACP,"x-amz-grant-write-acp":e.GrantWriteACP,"x-amz-server-side-encryption":e.ServerSideEncryption,"x-amz-storage-class":e.StorageClass,"x-amz-website-redirect-location":e.WebsiteRedirectLocation,"x-amz-server-side-encryption-customer-algorithm":e.SSECustomerAlgorithm,"x-amz-server-side-encryption-customer-key":e.SSECustomerKey,"x-amz-server-side-encryption-customer-key-md5":e.SSECustomerKeyMD5,"x-amz-server-side-encryption-aws-kms-key-id":e.SSEKMSKeyId,"x-amz-server-side-encryption-context":e.SSEKMSEncryptionContext,"x-amz-server-side-encryption-bucket-key-enabled":[()=>rH(e.BucketKeyEnabled),()=>e.BucketKeyEnabled.toString()],"x-amz-request-payer":e.RequestPayer,"x-amz-tagging":e.Tagging,"x-amz-object-lock-mode":e.ObjectLockMode,"x-amz-object-lock-retain-until-date":[()=>rH(e.ObjectLockRetainUntilDate),()=>(e.ObjectLockRetainUntilDate.toISOString().split(".")[0]+"Z").toString()],"x-amz-object-lock-legal-hold":e.ObjectLockLegalHoldStatus,"x-amz-expected-bucket-owner":e.ExpectedBucketOwner,...void 0!==e.Metadata&&Object.keys(e.Metadata).reduce((t,r)=>(t[`x-amz-meta-${r.toLowerCase()}`]=e.Metadata[r],t),{})}),l=`${a?.endsWith("/")?a.slice(0,-1):a||""}/{Key+}`;l=tw(l,e,"Bucket",()=>e.Bucket,"{Bucket}",!1),l=tw(l,e,"Key",()=>e.Key,"{Key+}",!0);let u=tg({"x-id":[,"PutObject"]});return void 0!==e.Body&&(r=e.Body),void 0!==e.Body&&(r=e.Body),new Z({protocol:o,hostname:n,port:i,method:"PUT",headers:s,path:l,query:u,body:r})},rj=async(e,t)=>{if(200!==e.statusCode&&e.statusCode>=300)return r$(e,t);let r=tg({$metadata:rG(e),Expiration:[,e.headers["x-amz-expiration"]],ETag:[,e.headers.etag],ChecksumCRC32:[,e.headers["x-amz-checksum-crc32"]],ChecksumCRC32C:[,e.headers["x-amz-checksum-crc32c"]],ChecksumSHA1:[,e.headers["x-amz-checksum-sha1"]],ChecksumSHA256:[,e.headers["x-amz-checksum-sha256"]],ServerSideEncryption:[,e.headers["x-amz-server-side-encryption"]],VersionId:[,e.headers["x-amz-version-id"]],SSECustomerAlgorithm:[,e.headers["x-amz-server-side-encryption-customer-algorithm"]],SSECustomerKeyMD5:[,e.headers["x-amz-server-side-encryption-customer-key-md5"]],SSEKMSKeyId:[,e.headers["x-amz-server-side-encryption-aws-kms-key-id"]],SSEKMSEncryptionContext:[,e.headers["x-amz-server-side-encryption-context"]],BucketKeyEnabled:[()=>void 0!==e.headers["x-amz-server-side-encryption-bucket-key-enabled"],()=>e7(e.headers["x-amz-server-side-encryption-bucket-key-enabled"])],RequestCharged:[,e.headers["x-amz-request-charged"]]});return await e5(e.body,t),r},r$=async(e,t)=>{let r={...e,body:await rX(e.body,t)},n=rK(e,r.body),o=r.body;return rV({output:e,parsedBody:o,errorCode:n})},rV=({output:e,parsedBody:t,errorCode:r})=>{to({output:e,parsedBody:t,exceptionCtor:t0,errorCode:r})},rG=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),rq=(e,t)=>e5(e,t).then(e=>t.utf8Encoder(e)),rH=e=>null!=e&&""!==e&&(!Object.getOwnPropertyNames(e).includes("length")||0!=e.length)&&(!Object.getOwnPropertyNames(e).includes("size")||0!=e.size),rW=(e,t)=>rq(e,t).then(e=>{if(e.length){let t=new t9.XMLParser({attributeNamePrefix:"",htmlEntities:!0,ignoreAttributes:!1,ignoreDeclaration:!0,parseTagValue:!1,trimValues:!1,tagValueProcessor:(e,t)=>""===t.trim()&&t.includes("\n")?"":void 0});t.addEntity("#xD","\r"),t.addEntity("#10","\n");let r=t.parse(e),n="#text",o=Object.keys(r)[0],i=r[o];return i[n]&&(i[o]=i[n],delete i[n]),th(i)}return{}}),rX=async(e,t)=>{let r=await rW(e,t);return r.Error&&(r.Error.message=r.Error.message??r.Error.Message),r},rK=(e,t)=>t?.Code!==void 0?t.Code:404==e.statusCode?"NotFound":void 0;class rY extends e6{static getEndpointParameterInstructions(){return{Bucket:{type:"contextParams",name:"Bucket"},ForcePathStyle:{type:"clientContextParams",name:"forcePathStyle"},UseArnRegion:{type:"clientContextParams",name:"useArnRegion"},DisableMultiRegionAccessPoints:{type:"clientContextParams",name:"disableMultiregionAccessPoints"},Accelerate:{type:"clientContextParams",name:"useAccelerateEndpoint"},UseGlobalEndpoint:{type:"builtInParams",name:"useGlobalEndpoint"},UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}}}constructor(e){super(),this.input=e}resolveMiddleware(e,t,r){var n,o;this.middlewareStack.use((n=this.serialize,o=this.deserialize,{applyToStack:e=>{e.add(tW(t,o),tK),e.add(tX(t,n),tY)}})),this.middlewareStack.use(tJ(t,rY.getEndpointParameterInstructions())),this.middlewareStack.use(t_(t)),this.middlewareStack.use(tN(t)),this.middlewareStack.use(eL(t,{input:this.input,requestAlgorithmMember:"ChecksumAlgorithm",requestChecksumRequired:!1}));let i=e.concat(this.middlewareStack),{logger:a}=t,{requestHandler:s}=t;return i.resolve(e=>s.handle(e.request,r||{}),{logger:a,clientName:"S3Client",commandName:"PutObjectCommand",inputFilterSensitiveLog:t3,outputFilterSensitiveLog:t2,__smithy_context:{service:"AmazonS3",operation:"PutObject"}})}serialize(e,t){return rB(e,t)}deserialize(e,t){return rj(e,t)}}let rZ={step:"build",tags:["SET_EXPECT_HEADER","EXPECT_HEADER"],name:"addExpectContinueMiddleware",override:!0},rJ=e=>({applyToStack:t=>{t.add(t=>async r=>{let{request:n}=r;return Z.isInstance(n)&&n.body&&"node"===e.runtime&&(n.headers={...n.headers,Expect:"100-continue"}),t({...r,request:n})},rZ)}}),rQ=e=>t=>async r=>{if(!Z.isInstance(r.request))return t(r);let{request:n}=r,{handlerProtocol:o=""}=e.requestHandler.metadata||{};if(o.indexOf("h2")>=0&&!n.headers[":authority"])delete n.headers.host,n.headers[":authority"]=n.hostname+(n.port?":"+n.port:"");else if(!n.headers.host){let e=n.hostname;null!=n.port&&(e+=`:${n.port}`),n.headers.host=e}return t(r)},r1={name:"hostHeaderMiddleware",step:"build",priority:"low",tags:["HOST"],override:!0},r0=e=>({applyToStack:t=>{t.add(rQ(e),r1)}}),r2=()=>(e,t)=>async r=>{try{let n=await e(r),{clientName:o,commandName:i,logger:a,dynamoDbDocumentClientOptions:s={}}=t,{overrideInputFilterSensitiveLog:l,overrideOutputFilterSensitiveLog:u}=s,c=l??t.inputFilterSensitiveLog,f=u??t.outputFilterSensitiveLog,{$metadata:d,...p}=n.output;return a?.info?.({clientName:o,commandName:i,input:c(r.input),output:f(p),metadata:d}),n}catch(l){let{clientName:e,commandName:n,logger:o,dynamoDbDocumentClientOptions:i={}}=t,{overrideInputFilterSensitiveLog:a}=i,s=a??t.inputFilterSensitiveLog;throw o?.error?.({clientName:e,commandName:n,input:s(r.input),error:l,metadata:l.$metadata}),l}},r3={name:"loggerMiddleware",tags:["LOGGER"],step:"initialize",override:!0},r9=e=>({applyToStack:e=>{e.add(r2(),r3)}});var r4=X("liSpS");let r5="X-Amzn-Trace-Id",r6=e=>t=>async r=>{let{request:n}=r;if(!Z.isInstance(n)||"node"!==e.runtime||n.headers.hasOwnProperty(r5))return t(r);let o=r4.env.AWS_LAMBDA_FUNCTION_NAME,i=r4.env._X_AMZN_TRACE_ID;return"string"==typeof o&&o.length>0&&"string"==typeof i&&i.length>0&&(n.headers[r5]=i),t({...r,request:n})},r8={step:"build",tags:["RECURSION_DETECTION"],name:"recursionDetectionMiddleware",override:!0,priority:"low"},r7=e=>({applyToStack:t=>{t.add(r6(e),r8)}}),ne=(e,t,r)=>{let n,o,i;let a=!1,s=async()=>{o||(o=e());try{n=await o,i=!0,a=!1}finally{o=void 0}return n};return void 0===t?async e=>((!i||e?.forceRefresh)&&(n=await s()),n):async e=>((!i||e?.forceRefresh)&&(n=await s()),a||(r&&!r(n)?a=!0:t(n)&&await s()),n)};class nt{constructor(e){if(this.bytes=e,8!==e.byteLength)throw Error("Int64 buffers must be exactly 8 bytes")}static fromNumber(e){if(e>0x7fffffffffffffff||e<-0x8000000000000000)throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);let t=new Uint8Array(8);for(let r=7,n=Math.abs(Math.round(e));r>-1&&n>0;r--,n/=256)t[r]=n;return e<0&&nr(t),new nt(t)}valueOf(){let e=this.bytes.slice(0),t=128&e[0];return t&&nr(e),parseInt(e0(e),16)*(t?-1:1)}toString(){return String(this.valueOf())}}function nr(e){for(let t=0;t<8;t++)e[t]^=255;for(let t=7;t>-1&&(e[t]++,0===e[t]);t--);}class nn{constructor(e,t){this.toUtf8=e,this.fromUtf8=t}format(e){let t=[];for(let r of Object.keys(e)){let n=this.fromUtf8(r);t.push(Uint8Array.from([n.byteLength]),n,this.formatHeaderValue(e[r]))}let r=new Uint8Array(t.reduce((e,t)=>e+t.byteLength,0)),n=0;for(let e of t)r.set(e,n),n+=e.byteLength;return r}formatHeaderValue(e){switch(e.type){case"boolean":return Uint8Array.from([e.value?0:1]);case"byte":return Uint8Array.from([2,e.value]);case"short":let t=new DataView(new ArrayBuffer(3));return t.setUint8(0,3),t.setInt16(1,e.value,!1),new Uint8Array(t.buffer);case"integer":let r=new DataView(new ArrayBuffer(5));return r.setUint8(0,4),r.setInt32(1,e.value,!1),new Uint8Array(r.buffer);case"long":let n=new Uint8Array(9);return n[0]=5,n.set(e.value.bytes,1),n;case"binary":let o=new DataView(new ArrayBuffer(3+e.value.byteLength));o.setUint8(0,6),o.setUint16(1,e.value.byteLength,!1);let i=new Uint8Array(o.buffer);return i.set(e.value,3),i;case"string":let a=this.fromUtf8(e.value),s=new DataView(new ArrayBuffer(3+a.byteLength));s.setUint8(0,7),s.setUint16(1,a.byteLength,!1);let l=new Uint8Array(s.buffer);return l.set(a,3),l;case"timestamp":let u=new Uint8Array(9);return u[0]=8,u.set(nt.fromNumber(e.value.valueOf()).bytes,1),u;case"uuid":if(!np.test(e.value))throw Error(`Invalid UUID received: ${e.value}`);let c=new Uint8Array(17);return c[0]=9,c.set(function(e){if(e.length%2!=0)throw Error("Hex encoded strings must have an even number length");let t=new Uint8Array(e.length/2);for(let r=0;r<e.length;r+=2){let n=e.slice(r,r+2).toLowerCase();if(n in e1)t[r/2]=e1[n];else throw Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`)}return t}(e.value.replace(/\-/g,"")),1),c}}parse(e){let t={},r=0;for(;r<e.byteLength;){let n=e.getUint8(r++),o=this.toUtf8(new Uint8Array(e.buffer,e.byteOffset+r,n));switch(r+=n,e.getUint8(r++)){case 0:t[o]={type:no,value:!0};break;case 1:t[o]={type:no,value:!1};break;case 2:t[o]={type:ni,value:e.getInt8(r++)};break;case 3:t[o]={type:na,value:e.getInt16(r,!1)},r+=2;break;case 4:t[o]={type:ns,value:e.getInt32(r,!1)},r+=4;break;case 5:t[o]={type:nl,value:new nt(new Uint8Array(e.buffer,e.byteOffset+r,8))},r+=8;break;case 6:let i=e.getUint16(r,!1);r+=2,t[o]={type:nu,value:new Uint8Array(e.buffer,e.byteOffset+r,i)},r+=i;break;case 7:let a=e.getUint16(r,!1);r+=2,t[o]={type:nc,value:this.toUtf8(new Uint8Array(e.buffer,e.byteOffset+r,a))},r+=a;break;case 8:t[o]={type:nf,value:new Date(new nt(new Uint8Array(e.buffer,e.byteOffset+r,8)).valueOf())},r+=8;break;case 9:let s=new Uint8Array(e.buffer,e.byteOffset+r,16);r+=16,t[o]={type:nd,value:`${e0(s.subarray(0,4))}-${e0(s.subarray(4,6))}-${e0(s.subarray(6,8))}-${e0(s.subarray(8,10))}-${e0(s.subarray(10))}`};break;default:throw Error("Unrecognized header type tag")}}return t}}(m=I||(I={}))[m.boolTrue=0]="boolTrue",m[m.boolFalse=1]="boolFalse",m[m.byte=2]="byte",m[m.short=3]="short",m[m.integer=4]="integer",m[m.long=5]="long",m[m.byteArray=6]="byteArray",m[m.string=7]="string",m[m.timestamp=8]="timestamp",m[m.uuid=9]="uuid";let no="boolean",ni="byte",na="short",ns="integer",nl="long",nu="binary",nc="string",nf="timestamp",nd="uuid",np=/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;class nh{constructor(e,t){this.headerMarshaller=new nn(e,t),this.messageBuffer=[],this.isEndOfStream=!1}feed(e){this.messageBuffer.push(this.decode(e))}endOfStream(){this.isEndOfStream=!0}getMessage(){let e=this.messageBuffer.pop(),t=this.isEndOfStream;return{getMessage:()=>e,isEndOfStream:()=>t}}getAvailableMessages(){let e=this.messageBuffer;this.messageBuffer=[];let t=this.isEndOfStream;return{getMessages:()=>e,isEndOfStream:()=>t}}encode({headers:e,body:t}){let r=this.headerMarshaller.format(e),n=r.byteLength+t.byteLength+16,o=new Uint8Array(n),i=new DataView(o.buffer,o.byteOffset,o.byteLength),a=new ea.Crc32;return i.setUint32(0,n,!1),i.setUint32(4,r.byteLength,!1),i.setUint32(8,a.update(o.subarray(0,8)).digest(),!1),o.set(r,12),o.set(t,r.byteLength+12),i.setUint32(n-4,a.update(o.subarray(8,n-4)).digest(),!1),o}decode(e){let{headers:t,body:r}=function({byteLength:e,byteOffset:t,buffer:r}){if(e<16)throw Error("Provided message too short to accommodate event stream message overhead");let n=new DataView(r,t,e),o=n.getUint32(0,!1);if(e!==o)throw Error("Reported message length does not match received message length");let i=n.getUint32(4,!1),a=n.getUint32(8,!1),s=n.getUint32(e-4,!1),l=new(0,ea.Crc32)().update(new Uint8Array(r,t,8));if(a!==l.digest())throw Error(`The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${l.digest()})`);if(l.update(new Uint8Array(r,t+8,e-12)),s!==l.digest())throw Error(`The message checksum (${l.digest()}) did not match the expected value of ${s}`);return{headers:new DataView(r,t+8+4,i),body:new Uint8Array(r,t+8+4+i,o-i-16)}}(e);return{headers:this.headerMarshaller.parse(t),body:r}}formatHeaders(e){return this.headerMarshaller.format(e)}}class nm{constructor(e){this.options=e}[Symbol.asyncIterator](){return this.asyncIterator()}async *asyncIterator(){for await(let e of this.options.inputStream){let t=this.options.decoder.decode(e);yield t}}}class ng{constructor(e){this.options=e}[Symbol.asyncIterator](){return this.asyncIterator()}async *asyncIterator(){for await(let e of this.options.messageStream){let t=this.options.encoder.encode(e);yield t}this.options.includeEndFrame&&(yield new Uint8Array(0))}}class nv{constructor(e){this.options=e}[Symbol.asyncIterator](){return this.asyncIterator()}async *asyncIterator(){for await(let e of this.options.messageStream){let t=await this.options.deserializer(e);void 0!==t&&(yield t)}}}class ny{constructor(e){this.options=e}[Symbol.asyncIterator](){return this.asyncIterator()}async *asyncIterator(){for await(let e of this.options.inputStream){let t=this.options.serializer(e);yield t}}}let nb="X-Amz-Date",nx="X-Amz-Signature",nw="X-Amz-Security-Token",nS="authorization",n_=nb.toLowerCase(),nE=[nS,n_,"date"],nA=nx.toLowerCase(),nM="x-amz-content-sha256",nC=nw.toLowerCase(),nT={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},nP=/^proxy-/,nO=/^sec-/,nR="AWS4-HMAC-SHA256",nL="aws4_request",nN={},nD=[],nF=(e,t,r)=>`${e}/${t}/${r}/${nL}`,nI=async(e,t,r,n,o)=>{let i=await nU(e,t.secretAccessKey,t.accessKeyId),a=`${r}:${n}:${o}:${e0(i)}:${t.sessionToken}`;if(a in nN)return nN[a];for(nD.push(a);nD.length>50;)delete nN[nD.shift()];let s=`AWS4${t.secretAccessKey}`;for(let t of[r,n,o,nL])s=await nU(e,s,t);return nN[a]=s},nU=(e,t,r)=>{let n=new e(t);return n.update(ex(r)),n.digest()},nz=({headers:e},t,r)=>{let n={};for(let o of Object.keys(e).sort()){if(void 0==e[o])continue;let i=o.toLowerCase();(!(i in nT||t?.has(i)||nP.test(i)||nO.test(i))||r&&(!r||r.has(i)))&&(n[i]=e[o].trim().replace(/\s+/g," "))}return n},nk=({query:e={}})=>{let t=[],r={};for(let n of Object.keys(e).sort()){if(n.toLowerCase()===nA)continue;t.push(n);let o=e[n];"string"==typeof o?r[n]=`${eH(n)}=${eH(o)}`:Array.isArray(o)&&(r[n]=o.slice(0).reduce((e,t)=>e.concat([`${eH(n)}=${eH(t)}`]),[]).sort().join("&"))}return t.map(e=>r[e]).filter(e=>e).join("&")},nB=async({headers:e,body:t},r)=>{for(let t of Object.keys(e))if(t.toLowerCase()===nM)return e[t];if(void 0==t)return"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";if("string"==typeof t||ArrayBuffer.isView(t)||eo(t)){let e=new r;return e.update(ex(t)),e0(await e.digest())}return"UNSIGNED-PAYLOAD"},nj=(e,t)=>{for(let r of(e=e.toLowerCase(),Object.keys(t)))if(e===r.toLowerCase())return!0;return!1},n$=({headers:e,query:t,...r})=>({...r,headers:{...e},query:t?nV(t):void 0}),nV=e=>Object.keys(e).reduce((t,r)=>{let n=e[r];return{...t,[r]:Array.isArray(n)?[...n]:n}},{}),nG=(e,t={})=>{let{headers:r,query:n={}}="function"==typeof e.clone?e.clone():n$(e);for(let e of Object.keys(r)){let o=e.toLowerCase();"x-amz-"!==o.slice(0,6)||t.unhoistableHeaders?.has(o)||(n[e]=r[e],delete r[e])}return{...e,headers:r,query:n}},nq=e=>{for(let t of Object.keys((e="function"==typeof e.clone?e.clone():n$(e)).headers))nE.indexOf(t.toLowerCase())>-1&&delete e.headers[t];return e},nH=e=>nW(e).toISOString().replace(/\.\d{3}Z$/,"Z"),nW=e=>"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e;class nX{constructor({applyChecksum:e,credentials:t,region:r,service:n,sha256:o,uriEscapePath:i=!0}){this.headerMarshaller=new nn(ew,eb),this.service=n,this.sha256=o,this.uriEscapePath=i,this.applyChecksum="boolean"!=typeof e||e,this.regionProvider=tQ(r),this.credentialProvider=tQ(t)}async presign(e,t={}){let{signingDate:r=new Date,expiresIn:n=3600,unsignableHeaders:o,unhoistableHeaders:i,signableHeaders:a,signingRegion:s,signingService:l}=t,u=await this.credentialProvider();this.validateResolvedCredentials(u);let c=s??await this.regionProvider(),{longDate:f,shortDate:d}=nK(r);if(n>604800)return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");let p=nF(d,c,l??this.service),h=nG(nq(e),{unhoistableHeaders:i});u.sessionToken&&(h.query[nw]=u.sessionToken),h.query["X-Amz-Algorithm"]=nR,h.query["X-Amz-Credential"]=`${u.accessKeyId}/${p}`,h.query[nb]=f,h.query["X-Amz-Expires"]=n.toString(10);let m=nz(h,o,a);return h.query["X-Amz-SignedHeaders"]=nY(m),h.query[nx]=await this.getSignature(f,p,this.getSigningKey(u,c,d,l),this.createCanonicalRequest(h,m,await nB(e,this.sha256))),h}async sign(e,t){return"string"==typeof e?this.signString(e,t):e.headers&&e.payload?this.signEvent(e,t):e.message?this.signMessage(e,t):this.signRequest(e,t)}async signEvent({headers:e,payload:t},{signingDate:r=new Date,priorSignature:n,signingRegion:o,signingService:i}){let a=o??await this.regionProvider(),{shortDate:s,longDate:l}=nK(r),u=nF(s,a,i??this.service),c=await nB({headers:{},body:t},this.sha256),f=new this.sha256;f.update(e);let d=e0(await f.digest()),p=["AWS4-HMAC-SHA256-PAYLOAD",l,u,n,d,c].join("\n");return this.signString(p,{signingDate:r,signingRegion:a,signingService:i})}async signMessage(e,{signingDate:t=new Date,signingRegion:r,signingService:n}){let o=this.signEvent({headers:this.headerMarshaller.format(e.message.headers),payload:e.message.body},{signingDate:t,signingRegion:r,signingService:n,priorSignature:e.priorSignature});return o.then(t=>({message:e.message,signature:t}))}async signString(e,{signingDate:t=new Date,signingRegion:r,signingService:n}={}){let o=await this.credentialProvider();this.validateResolvedCredentials(o);let i=r??await this.regionProvider(),{shortDate:a}=nK(t),s=new this.sha256(await this.getSigningKey(o,i,a,n));return s.update(ex(e)),e0(await s.digest())}async signRequest(e,{signingDate:t=new Date,signableHeaders:r,unsignableHeaders:n,signingRegion:o,signingService:i}={}){let a=await this.credentialProvider();this.validateResolvedCredentials(a);let s=o??await this.regionProvider(),l=nq(e),{longDate:u,shortDate:c}=nK(t),f=nF(c,s,i??this.service);l.headers[n_]=u,a.sessionToken&&(l.headers[nC]=a.sessionToken);let d=await nB(l,this.sha256);!nj(nM,l.headers)&&this.applyChecksum&&(l.headers[nM]=d);let p=nz(l,n,r),h=await this.getSignature(u,f,this.getSigningKey(a,s,c,i),this.createCanonicalRequest(l,p,d));return l.headers[nS]=`${nR} Credential=${a.accessKeyId}/${f}, SignedHeaders=${nY(p)}, Signature=${h}`,l}createCanonicalRequest(e,t,r){let n=Object.keys(t).sort();return`${e.method}
${this.getCanonicalPath(e)}
${nk(e)}
${n.map(e=>`${e}:${t[e]}`).join("\n")}

${n.join(";")}
${r}`}async createStringToSign(e,t,r){let n=new this.sha256;n.update(ex(r));let o=await n.digest();return`${nR}
${e}
${t}
${e0(o)}`}getCanonicalPath({path:e}){if(this.uriEscapePath){let t=[];for(let r of e.split("/"))r?.length!==0&&"."!==r&&(".."===r?t.pop():t.push(r));let r=`${e?.startsWith("/")?"/":""}${t.join("/")}${t.length>0&&e?.endsWith("/")?"/":""}`,n=encodeURIComponent(r);return n.replace(/%2F/g,"/")}return e}async getSignature(e,t,r,n){let o=await this.createStringToSign(e,t,n),i=new this.sha256(await r);return i.update(ex(o)),e0(await i.digest())}getSigningKey(e,t,r,n){return nI(this.sha256,e,r,t,n||this.service)}validateResolvedCredentials(e){if("object"!=typeof e||"string"!=typeof e.accessKeyId||"string"!=typeof e.secretAccessKey)throw Error("Resolved credential object is not valid")}}let nK=e=>{let t=nH(e).replace(/[\-:]/g,"");return{longDate:t,shortDate:t.slice(0,8)}},nY=e=>Object.keys(e).sort().join(";"),nZ=e=>{let t;let r=e.credentials?nJ(e.credentials):e.credentialDefaultProvider(e),{signingEscapePath:n=!0,systemClockOffset:o=e.systemClockOffset||0,sha256:i}=e;return t=e.signer?tQ(e.signer):e.regionInfoProvider?()=>tQ(e.region)().then(async t=>[await e.regionInfoProvider(t,{useFipsEndpoint:await e.useFipsEndpoint(),useDualstackEndpoint:await e.useDualstackEndpoint()})||{},t]).then(([t,o])=>{let{signingRegion:a,signingService:s}=t;e.signingRegion=e.signingRegion||a||o,e.signingName=e.signingName||s||e.serviceId;let l={...e,credentials:r,region:e.signingRegion,service:e.signingName,sha256:i,uriEscapePath:n},u=e.signerConstructor||nX;return new u(l)}):async t=>{t=Object.assign({},{name:"sigv4",signingName:e.signingName||e.defaultSigningName,signingRegion:await tQ(e.region)(),properties:{}},t);let o=t.signingRegion,a=t.signingName;e.signingRegion=e.signingRegion||o,e.signingName=e.signingName||a||e.serviceId;let s={...e,credentials:r,region:e.signingRegion,service:e.signingName,sha256:i,uriEscapePath:n},l=e.signerConstructor||nX;return new l(s)},{...e,systemClockOffset:o,signingEscapePath:n,credentials:r,signer:t}},nJ=e=>"function"==typeof e?ne(e,e=>void 0!==e.expiration&&e.expiration.getTime()-Date.now()<3e5,e=>void 0!==e.expiration):tQ(e),nQ=e=>new Date(Date.now()+e),n1=(e,t)=>Math.abs(nQ(t).getTime()-e)>=3e5,n0=(e,t)=>{let r=Date.parse(e);return n1(r,t)?r-Date.now():t},n2=e=>(t,r)=>async function(n){if(!Z.isInstance(n.request))return t(n);let o=r.endpointV2?.properties?.authSchemes?.[0],i=o?.name==="sigv4a"?o?.signingRegionSet?.join(","):void 0,a=await e.signer(o),s=await t({...n,request:await a.sign(n.request,{signingDate:nQ(e.systemClockOffset),signingRegion:i||r.signing_region,signingService:r.signing_service})}).catch(t=>{let r=t.ServerTime??n3(t.$response);throw r&&(e.systemClockOffset=n0(r,e.systemClockOffset)),t}),l=n3(s.response);return l&&(e.systemClockOffset=n0(l,e.systemClockOffset)),s},n3=e=>J.isInstance(e)?e.headers?.date??e.headers?.Date:void 0,n9={name:"awsAuthMiddleware",tags:["SIGNATURE","AWSAUTH"],relation:"after",toMiddleware:"retryMiddleware",override:!0},n4=e=>({applyToStack:t=>{t.addRelativeTo(n2(e),n9)}}),n5=RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),n6=e=>n5.test(e)||e.startsWith("[")&&e.endsWith("]"),n8=RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),n7=(e,t=!1)=>{if(!t)return n8.test(e);let r=e.split(".");for(let e of r)if(!n7(e))return!1;return!0},oe={},ot="endpoints";function or(e){return"object"!=typeof e||null==e?e:"ref"in e?`$${or(e.ref)}`:"fn"in e?`${e.fn}(${(e.argv||[]).map(or).join(", ")})`:JSON.stringify(e,null,2)}class on extends Error{constructor(e){super(e),this.name="EndpointError"}}let oo=e=>{let t=e.split("."),r=[];for(let n of t){let t=n.indexOf("[");if(-1!==t){if(n.indexOf("]")!==n.length-1)throw new on(`Path: '${e}' does not end with ']'`);let o=n.slice(t+1,-1);if(Number.isNaN(parseInt(o)))throw new on(`Invalid array index: '${o}' in path: '${e}'`);0!==t&&r.push(n.slice(0,t)),r.push(o)}else r.push(n)}return r},oi=(e,t)=>oo(t).reduce((r,n)=>{if("object"!=typeof r)throw new on(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`);return Array.isArray(r)?r[parseInt(n)]:r[n]},e),oa={[_.HTTP]:80,[_.HTTPS]:443},os={booleanEquals:(e,t)=>e===t,getAttr:oi,isSet:e=>null!=e,isValidHostLabel:n7,not:e=>!e,parseURL:e=>{let t=(()=>{try{if(e instanceof URL)return e;if("object"==typeof e&&"hostname"in e){let{hostname:t,port:r,protocol:n="",path:o="",query:i={}}=e,a=new URL(`${n}//${t}${r?`:${r}`:""}${o}`);return a.search=Object.entries(i).map(([e,t])=>`${e}=${t}`).join("&"),a}return new URL(e)}catch(e){return null}})();if(!t)return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`),null;let r=t.href,{host:n,hostname:o,pathname:i,protocol:a,search:s}=t;if(s)return null;let l=a.slice(0,-1);if(!Object.values(_).includes(l))return null;let u=n6(o),c=r.includes(`${n}:${oa[l]}`)||"string"==typeof e&&e.includes(`${n}:${oa[l]}`),f=`${n}${c?`:${oa[l]}`:""}`;return{scheme:l,authority:f,path:i,normalizedPath:i.endsWith("/")?i:`${i}/`,isIp:u}},stringEquals:(e,t)=>e===t,substring:(e,t,r,n)=>t>=r||e.length<r?null:n?e.substring(e.length-r,e.length-t):e.substring(t,r),uriEncode:e=>encodeURIComponent(e).replace(/[!*'()]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},ol=(e,t)=>{let r=[],n={...t.endpointParams,...t.referenceRecord},o=0;for(;o<e.length;){let t=e.indexOf("{",o);if(-1===t){r.push(e.slice(o));break}r.push(e.slice(o,t));let i=e.indexOf("}",t);if(-1===i){r.push(e.slice(t));break}"{"===e[t+1]&&"}"===e[i+1]&&(r.push(e.slice(t+1,i)),o=i+2);let a=e.substring(t+1,i);if(a.includes("#")){let[e,t]=a.split("#");r.push(oi(n[e],t))}else r.push(n[a]);o=i+1}return r.join("")},ou=({ref:e},t)=>{let r={...t.endpointParams,...t.referenceRecord};return r[e]},oc=(e,t,r)=>{if("string"==typeof e)return ol(e,r);if(e.fn)return of(e,r);if(e.ref)return ou(e,r);throw new on(`'${t}': ${String(e)} is not a string, function or reference.`)},of=({fn:e,argv:t},r)=>{let n=t.map(e=>["boolean","number"].includes(typeof e)?e:oc(e,"arg",r)),o=e.split(".");return o[0]in oe&&null!=o[1]?oe[o[0]][o[1]](...n):os[e](...n)},od=({assign:e,...t},r)=>{if(e&&e in r.referenceRecord)throw new on(`'${e}' is already defined in Reference Record.`);let n=of(t,r);return r.logger?.debug?.(ot,`evaluateCondition: ${or(t)} = ${or(n)}`),{result:""===n||!!n,...null!=e&&{toAssign:{name:e,value:n}}}},op=(e=[],t)=>{let r={};for(let n of e){let{result:e,toAssign:o}=od(n,{...t,referenceRecord:{...t.referenceRecord,...r}});if(!e)return{result:e};o&&(r[o.name]=o.value,t.logger?.debug?.(ot,`assign: ${o.name} := ${or(o.value)}`))}return{result:!0,referenceRecord:r}},oh=(e,t)=>Object.entries(e).reduce((e,[r,n])=>({...e,[r]:n.map(e=>{let n=oc(e,"Header value entry",t);if("string"!=typeof n)throw new on(`Header '${r}' value '${n}' is not a string`);return n})}),{}),om=(e,t)=>{if(Array.isArray(e))return e.map(e=>om(e,t));switch(typeof e){case"string":return ol(e,t);case"object":if(null===e)throw new on(`Unexpected endpoint property: ${e}`);return og(e,t);case"boolean":return e;default:throw new on(`Unexpected endpoint property type: ${typeof e}`)}},og=(e,t)=>Object.entries(e).reduce((e,[r,n])=>({...e,[r]:om(n,t)}),{}),ov=(e,t)=>{let r=oc(e,"Endpoint URL",t);if("string"==typeof r)try{return new URL(r)}catch(e){throw console.error(`Failed to construct URL with ${r}`,e),e}throw new on(`Endpoint URL must be a string, got ${typeof r}`)},oy=(e,t)=>{let{conditions:r,endpoint:n}=e,{result:o,referenceRecord:i}=op(r,t);if(!o)return;let a={...t,referenceRecord:{...t.referenceRecord,...i}},{url:s,properties:l,headers:u}=n;return t.logger?.debug?.(ot,`Resolving endpoint from template: ${or(n)}`),{...void 0!=u&&{headers:oh(u,a)},...void 0!=l&&{properties:og(l,a)},url:ov(s,a)}},ob=(e,t)=>{let{conditions:r,error:n}=e,{result:o,referenceRecord:i}=op(r,t);if(o)throw new on(oc(n,"Error",{...t,referenceRecord:{...t.referenceRecord,...i}}))},ox=(e,t)=>{let{conditions:r,rules:n}=e,{result:o,referenceRecord:i}=op(r,t);if(o)return ow(n,{...t,referenceRecord:{...t.referenceRecord,...i}})},ow=(e,t)=>{for(let r of e)if("endpoint"===r.type){let e=oy(r,t);if(e)return e}else if("error"===r.type)ob(r,t);else if("tree"===r.type){let e=ox(r,t);if(e)return e}else throw new on(`Unknown endpoint rule: ${r}`);throw new on("Rules evaluation failed")},oS=(e,t)=>{let{endpointParams:r,logger:n}=t,{parameters:o,rules:i}=e;t.logger?.debug?.(`${ot} Initial EndpointParams: ${or(r)}`);let a=Object.entries(o).filter(([,e])=>null!=e.default).map(([e,t])=>[e,t.default]);if(a.length>0)for(let[e,t]of a)r[e]=r[e]??t;let s=Object.entries(o).filter(([,e])=>e.required).map(([e])=>e);for(let e of s)if(null==r[e])throw new on(`Missing required parameter: '${e}'`);let l=ow(i,{endpointParams:r,logger:n,referenceRecord:{}});if(t.endpointParams?.Endpoint)try{let e=new URL(t.endpointParams.Endpoint),{protocol:r,port:n}=e;l.url.protocol=r,l.url.port=n}catch(e){}return t.logger?.debug?.(`${ot} Resolved endpoint: ${or(l)}`),l},o_=(e,t=!1)=>{if(t){for(let t of e.split("."))if(!o_(t))return!1;return!0}return!(!n7(e)||e.length<3||e.length>63||e!==e.toLowerCase()||n6(e))},oE=/*@__PURE__*/q(JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{}}],"version":"1.1"}')),oA=()=>"";oe.aws={isVirtualHostableS3Bucket:o_,parseArn:e=>{let t=e.split(":");if(t.length<6)return null;let[r,n,o,i,a,...s]=t;return"arn"!==r||""===n||""===o||""===s[0]?null:{partition:n,service:o,region:i,accountId:a,resourceId:s[0].includes("/")?s[0].split("/"):s}},partition:e=>{let{partitions:t}=oE;for(let r of t){let{regions:t,outputs:n}=r;for(let[r,o]of Object.entries(t))if(r===e)return{...n,...o}}for(let r of t){let{regionRegex:t,outputs:n}=r;if(new RegExp(t).test(e))return{...n}}let r=t.find(e=>"aws"===e.id);if(!r)throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");return{...r.outputs}}};let oM="user-agent",oC="x-amz-user-agent",oT=/[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,oP=/[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,oO=e=>(t,r)=>async n=>{let{request:o}=n;if(!Z.isInstance(o))return t(n);let{headers:i}=o,a=r?.userAgent?.map(oR)||[],s=(await e.defaultUserAgentProvider()).map(oR),l=e?.customUserAgent?.map(oR)||[],u=oA(),c=(u?[u]:[]).concat([...s,...a,...l]).join(" "),f=[...s.filter(e=>e.startsWith("aws-sdk-")),...l].join(" ");return"browser"!==e.runtime?(f&&(i[oC]=i[oC]?`${i[oM]} ${f}`:f),i[oM]=c):i[oC]=c,t({...n,request:o})},oR=e=>{let t=e[0].split("/").map(e=>e.replace(oT,"-")).join("/"),r=e[1]?.replace(oP,"-"),n=t.indexOf("/"),o=t.substring(0,n),i=t.substring(n+1);return"api"===o&&(i=i.toLowerCase()),[o,i,r].filter(e=>e&&e.length>0).reduce((e,t,r)=>{switch(r){case 0:return t;case 1:return`${e}/${t}`;default:return`${e}#${t}`}},"")},oL={name:"getUserAgentMiddleware",step:"build",priority:"low",tags:["SET_USER_AGENT","USER_AGENT"],override:!0},oN=e=>({applyToStack:t=>{t.add(oO(e),oL)}});(g=U||(U={})).ENV="env",g.CONFIG="shared config entry";let oD=e=>"string"==typeof e&&(e.startsWith("fips-")||e.endsWith("-fips")),oF=e=>oD(e)?["fips-aws-global","aws-fips"].includes(e)?"us-east-1":e.replace(/fips-(dkr-|prod-)?|-fips/,""):e,oI=e=>{let{region:t,useFipsEndpoint:r}=e;if(!t)throw Error("Region is missing");return{...e,region:async()=>{if("string"==typeof t)return oF(t);let e=await t();return oF(e)},useFipsEndpoint:async()=>{let e="string"==typeof t?t:await t();return!!oD(e)||("function"!=typeof r?Promise.resolve(!!r):r())}}},oU=e=>({...e,eventStreamMarshaller:e.eventStreamSerdeProvider(e)}),oz="content-length",ok={step:"build",tags:["SET_CONTENT_LENGTH","CONTENT_LENGTH"],name:"contentLengthMiddleware",override:!0},oB=e=>({applyToStack:t=>{var r;t.add((r=e.bodyLengthChecker,e=>async t=>{let n=t.request;if(Z.isInstance(n)){let{body:e,headers:t}=n;if(e&&-1===Object.keys(t).map(e=>e.toLowerCase()).indexOf(oz))try{let t=r(e);n.headers={...n.headers,[oz]:String(t)}}catch(e){}}return e({...t,request:n})}),ok)}});(v=z||(z={})).STANDARD="standard",v.ADAPTIVE="adaptive";let oj=z.STANDARD,o$=["BandwidthLimitExceeded","EC2ThrottledException","LimitExceededException","PriorRequestNotComplete","ProvisionedThroughputExceededException","RequestLimitExceeded","RequestThrottled","RequestThrottledException","SlowDown","ThrottledException","Throttling","ThrottlingException","TooManyRequestsException","TransactionInProgressException"],oV=["TimeoutError","RequestTimeout","RequestTimeoutException"],oG=[500,502,503,504],oq=["ECONNRESET","ECONNREFUSED","EPIPE","ETIMEDOUT"],oH=e=>e.$metadata?.httpStatusCode===429||o$.includes(e.name)||e.$retryable?.throttling==!0,oW=e=>oV.includes(e.name)||oq.includes(e?.code||"")||oG.includes(e.$metadata?.httpStatusCode||0),oX=e=>{if(e.$metadata?.httpStatusCode!==void 0){let t=e.$metadata.httpStatusCode;if(500<=t&&t<=599&&!oW(e))return!0}return!1};class oK{constructor(e){this.currentCapacity=0,this.enabled=!1,this.lastMaxRate=0,this.measuredTxRate=0,this.requestCount=0,this.lastTimestamp=0,this.timeWindow=0,this.beta=e?.beta??.7,this.minCapacity=e?.minCapacity??1,this.minFillRate=e?.minFillRate??.5,this.scaleConstant=e?.scaleConstant??.4,this.smooth=e?.smooth??.8;let t=this.getCurrentTimeInSeconds();this.lastThrottleTime=t,this.lastTxRateBucket=Math.floor(this.getCurrentTimeInSeconds()),this.fillRate=this.minFillRate,this.maxCapacity=this.minCapacity}getCurrentTimeInSeconds(){return Date.now()/1e3}async getSendToken(){return this.acquireTokenBucket(1)}async acquireTokenBucket(e){if(this.enabled){if(this.refillTokenBucket(),e>this.currentCapacity){let t=(e-this.currentCapacity)/this.fillRate*1e3;await new Promise(e=>setTimeout(e,t))}this.currentCapacity=this.currentCapacity-e}}refillTokenBucket(){let e=this.getCurrentTimeInSeconds();if(!this.lastTimestamp){this.lastTimestamp=e;return}let t=(e-this.lastTimestamp)*this.fillRate;this.currentCapacity=Math.min(this.maxCapacity,this.currentCapacity+t),this.lastTimestamp=e}updateClientSendingRate(e){let t;if(this.updateMeasuredRate(),oH(e)){let e=this.enabled?Math.min(this.measuredTxRate,this.fillRate):this.measuredTxRate;this.lastMaxRate=e,this.calculateTimeWindow(),this.lastThrottleTime=this.getCurrentTimeInSeconds(),t=this.cubicThrottle(e),this.enableTokenBucket()}else this.calculateTimeWindow(),t=this.cubicSuccess(this.getCurrentTimeInSeconds());let r=Math.min(t,2*this.measuredTxRate);this.updateTokenBucketRate(r)}calculateTimeWindow(){this.timeWindow=this.getPrecise(Math.pow(this.lastMaxRate*(1-this.beta)/this.scaleConstant,1/3))}cubicThrottle(e){return this.getPrecise(e*this.beta)}cubicSuccess(e){return this.getPrecise(this.scaleConstant*Math.pow(e-this.lastThrottleTime-this.timeWindow,3)+this.lastMaxRate)}enableTokenBucket(){this.enabled=!0}updateTokenBucketRate(e){this.refillTokenBucket(),this.fillRate=Math.max(e,this.minFillRate),this.maxCapacity=Math.max(e,this.minCapacity),this.currentCapacity=Math.min(this.currentCapacity,this.maxCapacity)}updateMeasuredRate(){let e=this.getCurrentTimeInSeconds(),t=Math.floor(2*e)/2;if(this.requestCount++,t>this.lastTxRateBucket){let e=this.requestCount/(t-this.lastTxRateBucket);this.measuredTxRate=this.getPrecise(e*this.smooth+this.measuredTxRate*(1-this.smooth)),this.requestCount=0,this.lastTxRateBucket=t}}getPrecise(e){return parseFloat(e.toFixed(8))}}let oY=()=>{let e=100;return{computeNextBackoffDelay:t=>Math.floor(Math.min(2e4,Math.random()*2**t*e)),setDelayBase:t=>{e=t}}},oZ=({retryDelay:e,retryCount:t,retryCost:r})=>({getRetryCount:()=>t,getRetryDelay:()=>Math.min(2e4,e),getRetryCost:()=>r});class oJ{constructor(e){this.maxAttempts=e,this.mode=z.STANDARD,this.capacity=500,this.retryBackoffStrategy=oY(),this.maxAttemptsProvider="function"==typeof e?e:async()=>e}async acquireInitialRetryToken(e){return oZ({retryDelay:100,retryCount:0})}async refreshRetryTokenForRetry(e,t){let r=await this.getMaxAttempts();if(this.shouldRetry(e,t,r)){let r=t.errorType;this.retryBackoffStrategy.setDelayBase("THROTTLING"===r?500:100);let n=this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()),o=t.retryAfterHint?Math.max(t.retryAfterHint.getTime()-Date.now()||0,n):n,i=this.getCapacityCost(r);return this.capacity-=i,oZ({retryDelay:o,retryCount:e.getRetryCount()+1,retryCost:i})}throw Error("No retry token available")}recordSuccess(e){this.capacity=Math.max(500,this.capacity+(e.getRetryCost()??1))}getCapacity(){return this.capacity}async getMaxAttempts(){try{return await this.maxAttemptsProvider()}catch(e){return console.warn("Max attempts provider could not resolve. Using default of 3"),3}}shouldRetry(e,t,r){let n=e.getRetryCount()+1;return n<r&&this.capacity>=this.getCapacityCost(t.errorType)&&this.isRetryableError(t.errorType)}getCapacityCost(e){return"TRANSIENT"===e?10:5}isRetryableError(e){return"THROTTLING"===e||"TRANSIENT"===e}}class oQ{constructor(e,t){this.maxAttemptsProvider=e,this.mode=z.ADAPTIVE;let{rateLimiter:r}=t??{};this.rateLimiter=r??new oK,this.standardRetryStrategy=new oJ(e)}async acquireInitialRetryToken(e){return await this.rateLimiter.getSendToken(),this.standardRetryStrategy.acquireInitialRetryToken(e)}async refreshRetryTokenForRetry(e,t){return this.rateLimiter.updateClientSendingRate(t),this.standardRetryStrategy.refreshRetryTokenForRetry(e,t)}recordSuccess(e){this.rateLimiter.updateClientSendingRate({}),this.standardRetryStrategy.recordSuccess(e)}}for(var o1=new Uint8Array(16),o0=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o2=[],o3=0;o3<256;++o3)o2.push((o3+256).toString(16).substr(1));var o9=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(o2[e[t+0]]+o2[e[t+1]]+o2[e[t+2]]+o2[e[t+3]]+"-"+o2[e[t+4]]+o2[e[t+5]]+"-"+o2[e[t+6]]+o2[e[t+7]]+"-"+o2[e[t+8]]+o2[e[t+9]]+"-"+o2[e[t+10]]+o2[e[t+11]]+o2[e[t+12]]+o2[e[t+13]]+o2[e[t+14]]+o2[e[t+15]]).toLowerCase();// of the following:
// - One or more input array values don't map to a hex octet (leading to
// "undefined" in the uuid)
// - Invalid input values for the RFC `version` or `variant` fields
if(!("string"==typeof r&&o0.test(r)))throw TypeError("Stringified UUID is invalid");return r},o4=function(e,t,r){var n=(e=e||{}).random||(e.rng||function(){// lazy load so that environments that need to polyfill have a chance to do so
if(!k&&!// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
(k="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return k(o1)})();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return o9(n)};let o5=e=>e instanceof Error?e:e instanceof Object?Object.assign(Error(),e):"string"==typeof e?Error(e):Error(`AWS SDK error wrapper for ${e}`),o6=e=>{let{retryStrategy:t}=e,r=tQ(e.maxAttempts??3);return{...e,maxAttempts:r,retryStrategy:async()=>{if(t)return t;let n=await tQ(e.retryMode)();return n===z.ADAPTIVE?new oQ(r):new oJ(r)}}},o8=e=>(t,r)=>async n=>{let o=await e.retryStrategy(),i=await e.maxAttempts();if(!o7(o))return o?.mode&&(r.userAgent=[...r.userAgent||[],["cfg/retry-mode",o.mode]]),o.retry(t,n);{let e=await o.acquireInitialRetryToken(r.partition_id),a=Error(),s=0,l=0,{request:u}=n;for(Z.isInstance(u)&&(u.headers["amz-sdk-invocation-id"]=o4());;)try{Z.isInstance(u)&&(u.headers["amz-sdk-request"]=`attempt=${s+1}; max=${i}`);let{response:r,output:a}=await t(n);return o.recordSuccess(e),a.$metadata.attempts=s+1,a.$metadata.totalRetryDelay=l,{response:r,output:a}}catch(n){let t=ie(n);a=o5(n);try{e=await o.refreshRetryTokenForRetry(e,t)}catch(e){throw a.$metadata||(a.$metadata={}),a.$metadata.attempts=s+1,a.$metadata.totalRetryDelay=l,a}s=e.getRetryCount();let r=e.getRetryDelay();l+=r,await new Promise(e=>setTimeout(e,r))}}},o7=e=>void 0!==e.acquireInitialRetryToken&&void 0!==e.refreshRetryTokenForRetry&&void 0!==e.recordSuccess,ie=e=>{let t={errorType:it(e)},r=ii(e.$response);return r&&(t.retryAfterHint=r),t},it=e=>oH(e)?"THROTTLING":oW(e)?"TRANSIENT":oX(e)?"SERVER_ERROR":"CLIENT_ERROR",ir={name:"retryMiddleware",tags:["RETRY"],step:"finalizeRequest",priority:"high",override:!0},io=e=>({applyToStack:t=>{t.add(o8(e),ir)}}),ii=e=>{if(!J.isInstance(e))return;let t=Object.keys(e.headers).find(e=>"retry-after"===e.toLowerCase());if(!t)return;let r=e.headers[t],n=Number(r);if(!Number.isNaN(n))return new Date(1e3*n);let o=new Date(r);return o},ia=e=>({...e,useFipsEndpoint:e.useFipsEndpoint??!1,useDualstackEndpoint:e.useDualstackEndpoint??!1,forcePathStyle:e.forcePathStyle??!1,useAccelerateEndpoint:e.useAccelerateEndpoint??!1,useGlobalEndpoint:e.useGlobalEndpoint??!1,disableMultiregionAccessPoints:e.disableMultiregionAccessPoints??!1,defaultSigningName:"s3"});var is={};is=JSON.parse('{"name":"@aws-sdk/client-s3","description":"AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native","version":"3.441.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo s3","test":"yarn test:unit","test:e2e":"yarn test:e2e:node && yarn test:e2e:browser","test:e2e:browser":"ts-mocha test/**/*.browser.ispec.ts && karma start karma.conf.js","test:e2e:node":"jest --c jest.config.e2e.js","test:unit":"ts-mocha test/unit/**/*.spec.ts"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha1-browser":"3.0.0","@aws-crypto/sha256-browser":"3.0.0","@aws-crypto/sha256-js":"3.0.0","@aws-sdk/client-sts":"3.441.0","@aws-sdk/core":"3.441.0","@aws-sdk/credential-provider-node":"3.441.0","@aws-sdk/middleware-bucket-endpoint":"3.433.0","@aws-sdk/middleware-expect-continue":"3.433.0","@aws-sdk/middleware-flexible-checksums":"3.433.0","@aws-sdk/middleware-host-header":"3.433.0","@aws-sdk/middleware-location-constraint":"3.433.0","@aws-sdk/middleware-logger":"3.433.0","@aws-sdk/middleware-recursion-detection":"3.433.0","@aws-sdk/middleware-sdk-s3":"3.440.0","@aws-sdk/middleware-signing":"3.433.0","@aws-sdk/middleware-ssec":"3.433.0","@aws-sdk/middleware-user-agent":"3.438.0","@aws-sdk/region-config-resolver":"3.433.0","@aws-sdk/signature-v4-multi-region":"3.437.0","@aws-sdk/types":"3.433.0","@aws-sdk/util-endpoints":"3.438.0","@aws-sdk/util-user-agent-browser":"3.433.0","@aws-sdk/util-user-agent-node":"3.437.0","@aws-sdk/xml-builder":"3.310.0","@smithy/config-resolver":"^2.0.16","@smithy/eventstream-serde-browser":"^2.0.12","@smithy/eventstream-serde-config-resolver":"^2.0.12","@smithy/eventstream-serde-node":"^2.0.12","@smithy/fetch-http-handler":"^2.2.4","@smithy/hash-blob-browser":"^2.0.12","@smithy/hash-node":"^2.0.12","@smithy/hash-stream-node":"^2.0.12","@smithy/invalid-dependency":"^2.0.12","@smithy/md5-js":"^2.0.12","@smithy/middleware-content-length":"^2.0.14","@smithy/middleware-endpoint":"^2.1.3","@smithy/middleware-retry":"^2.0.18","@smithy/middleware-serde":"^2.0.12","@smithy/middleware-stack":"^2.0.6","@smithy/node-config-provider":"^2.1.3","@smithy/node-http-handler":"^2.1.8","@smithy/protocol-http":"^3.0.8","@smithy/smithy-client":"^2.1.12","@smithy/types":"^2.4.0","@smithy/url-parser":"^2.0.12","@smithy/util-base64":"^2.0.0","@smithy/util-body-length-browser":"^2.0.0","@smithy/util-body-length-node":"^2.1.0","@smithy/util-defaults-mode-browser":"^2.0.16","@smithy/util-defaults-mode-node":"^2.0.21","@smithy/util-endpoints":"^1.0.2","@smithy/util-retry":"^2.0.5","@smithy/util-stream":"^2.0.17","@smithy/util-utf8":"^2.0.0","@smithy/util-waiter":"^2.0.12","fast-xml-parser":"4.2.5","tslib":"^2.5.0"},"devDependencies":{"@smithy/service-client-documentation-generator":"^2.0.0","@tsconfig/node14":"1.0.3","@types/chai":"^4.2.11","@types/mocha":"^8.0.4","@types/node":"^14.14.31","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typedoc":"0.23.23","typescript":"~4.9.5"},"engines":{"node":">=14.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-s3"}}');var il={};Object.defineProperty(il,"__esModule",{value:!0}),il.WebCryptoSha1=il.Ie11Sha1=void 0;var es=X("guPxh");es.__exportStar(X("gm67B"),il);var iu=X("5z9Uh");Object.defineProperty(il,"Ie11Sha1",{enumerable:!0,get:function(){return iu.Sha1}});var ic=X("l6bE3");Object.defineProperty(il,"WebCryptoSha1",{enumerable:!0,get:function(){return ic.Sha1}});var id={};Object.defineProperty(id,"__esModule",{value:!0}),id.WebCryptoSha256=id.Ie11Sha256=void 0;var es=X("guPxh");es.__exportStar(X("3bHDv"),id);var ip=X("8Y0Pr");Object.defineProperty(id,"Ie11Sha256",{enumerable:!0,get:function(){return ip.Sha256}});var ih=X("ev0FX");Object.defineProperty(id,"WebCryptoSha256",{enumerable:!0,get:function(){return ih.Sha256}});var im={};im=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){t.__esModule=!0,t.default=void 0;var n=r(18),o=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0});if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0});if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var o=e.getVersionPrecision(t),i=e.getVersionPrecision(r),a=Math.max(o,i),s=0,l=e.map([t,r],function(t){var r=a-e.getVersionPrecision(t),n=t+Array(r+1).join(".0");return e.map(n.split("."),function(e){return Array(20-e.length).join("0")+e}).reverse()});for(n&&(s=a-Math.min(o,i)),a-=1;a>=s;){if(l[0][a]>l[1][a])return 1;if(l[0][a]===l[1][a]){if(a===s)return 0;a-=1}else if(l[0][a]<l[1][a])return -1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var o=e[r];if(t(o,r))return o}},e.assign=function(e){for(var t,r,n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];if(Object.assign)return Object.assign.apply(Object,[e].concat(o));for(t=0,r=o.length;t<r;t+=1)(function(){var r=o[t];"object"==typeof r&&null!==r&&Object.keys(r).forEach(function(t){e[t]=r[t]})})();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=o,e.exports=t.default},18:function(e,t,r){t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,o=(n=r(91))&&n.__esModule?n:{default:n},i=r(18),a=function(){function e(){}return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw Error("UserAgent should be a string");return new o.default(e,t)},e.parse=function(e){return new o.default(e).getResult()},function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e,[{key:"BROWSER_MAP",get:function(){return i.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return i.ENGINE_MAP}},{key:"OS_MAP",get:function(){return i.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return i.PLATFORMS_MAP}}]),e}();t.default=a,e.exports=t.default},91:function(e,t,r){t.__esModule=!0,t.default=void 0;var n=l(r(92)),o=l(r(93)),i=l(r(94)),a=l(r(95)),s=l(r(17));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=s.default.find(n.default,function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=s.default.find(o.default,function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=s.default.find(i.default,function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=s.default.find(a.default,function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return s.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,o={},i=0;if(Object.keys(e).forEach(function(t){var a=e[t];"string"==typeof a?(o[t]=a,i+=1):"object"==typeof a&&(r[t]=a,n+=1)}),n>0){var a=Object.keys(r),l=s.default.find(a,function(e){return t.isOS(e)});if(l){var u=this.satisfies(r[l]);if(void 0!==u)return u}var c=s.default.find(a,function(e){return t.isPlatform(e)});if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(i>0){var d=Object.keys(o),p=s.default.find(d,function(e){return t.isBrowser(e,!0)});if(void 0!==p)return this.compareVersion(o[p])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),o=s.default.getBrowserTypeByAlias(n);return t&&o&&(n=o.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,o=this.getBrowserVersion();if("string"==typeof o)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(s.default.compareVersions(o,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some(function(e){return t.is(e)})},e}();t.default=u,e.exports=t.default},92:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,o=(n=r(17))&&n.__esModule?n:{default:n},i=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=o.default.getFirstMatch(i,e)||o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=o.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=o.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:o.default.getFirstMatch(t,e),version:o.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,o=(n=r(17))&&n.__esModule?n:{default:n},i=r(18),a=[{test:[/Roku\/DVP/],describe:function(e){var t=o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:i.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=o.default.getWindowsVersionName(t);return{name:i.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:i.OS_MAP.iOS},r=o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=o.default.getMacOSVersionName(t),n={name:i.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:i.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=o.default.getAndroidVersionName(t),n={name:i.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:i.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||o.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:i.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:i.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:i.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,o=(n=r(17))&&n.__esModule?n:{default:n},i=r(18),a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=o.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:i.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=o.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:i.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:i.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:i.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,o=(n=r(17))&&n.__esModule?n:{default:n},i=r(18),a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:i.ENGINE_MAP.Blink};var t=o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:i.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:i.ENGINE_MAP.Trident},r=o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:i.ENGINE_MAP.Presto},r=o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:i.ENGINE_MAP.Gecko},r=o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:i.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:i.ENGINE_MAP.WebKit},r=o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}});let ig=({serviceId:e,clientVersion:t})=>async()=>{let r="undefined"!=typeof window&&window?.navigator?.userAgent?/*@__PURE__*/q(im).parse(window.navigator.userAgent):void 0,n=[["aws-sdk-js",t],["ua","2.0"],[`os/${r?.os?.name||"other"}`,r?.os?.version],["lang/js"],["md/browser",`${r?.browser?.name??"unknown"}_${r?.browser?.version??"unknown"}`]];return e&&n.push([`api/${e}`,t]),n};class iv{constructor({utf8Encoder:e,utf8Decoder:t}){this.eventStreamCodec=new nh(e,t),this.utfEncoder=e}deserialize(e,t){var r;let n=function(e){let t=0,r=0,n=null,o=null,i=e=>{if("number"!=typeof e)throw Error("Attempted to allocate an event message where size was not a number: "+e);t=e,r=4,n=new Uint8Array(e);let o=new DataView(n.buffer);o.setUint32(0,e,!1)},a=async function*(){let a=e[Symbol.asyncIterator]();for(;;){let{value:e,done:s}=await a.next();if(s){if(t){if(t===r)yield n;else throw Error("Truncated event message received.")}return}let l=e.length,u=0;for(;u<l;){if(!n){let t=l-u;o||(o=new Uint8Array(4));let n=Math.min(4-r,t);if(o.set(e.slice(u,u+n),r),r+=n,u+=n,r<4)break;i(new DataView(o.buffer).getUint32(0,!1)),o=null}let a=Math.min(t-r,l-u);n.set(e.slice(u,u+a),r),r+=a,u+=a,t&&t===r&&(yield n,n=null,t=0,r=0)}}};return{[Symbol.asyncIterator]:a}}(e);return new nv({messageStream:new nm({inputStream:n,decoder:this.eventStreamCodec}),deserializer:(r=this.utfEncoder,async function(e){let{value:n}=e.headers[":message-type"];if("error"===n){let t=Error(e.headers[":error-message"].value||"UnknownError");throw t.name=e.headers[":error-code"].value,t}if("exception"===n){let n=e.headers[":exception-type"].value,o=await t({[n]:e});if(o.$unknown){let t=Error(r(e.body));throw t.name=n,t}throw o[n]}if("event"===n){let r={[e.headers[":event-type"].value]:e},n=await t(r);if(n.$unknown)return;return n}throw Error(`Unrecognizable event type: ${e.headers[":event-type"].value}`)})})}serialize(e,t){return new ng({messageStream:new ny({inputStream:e,serializer:t}),encoder:this.eventStreamCodec,includeEndFrame:!0})}}let iy=e=>({[Symbol.asyncIterator]:async function*(){let t=e.getReader();try{for(;;){let{done:e,value:r}=await t.read();if(e)return;yield r}}finally{t.releaseLock()}}}),ib=e=>{let t=e[Symbol.asyncIterator]();return new ReadableStream({async pull(e){let{done:r,value:n}=await t.next();if(r)return e.close();e.enqueue(n)}})};class ix{constructor({utf8Encoder:e,utf8Decoder:t}){this.universalMarshaller=new iv({utf8Decoder:t,utf8Encoder:e})}deserialize(e,t){let r=iw(e)?iy(e):e;return this.universalMarshaller.deserialize(r,t)}serialize(e,t){let r=this.universalMarshaller.serialize(e,t);return"function"==typeof ReadableStream?ib(r):r}}let iw=e=>"function"==typeof ReadableStream&&e instanceof ReadableStream,iS=e=>new ix(e),i_=async function(e,t){let r=new e;return await function(e,t,r=1048576){return new Promise((n,o)=>{let i=new FileReader;i.addEventListener("error",o),i.addEventListener("abort",o);let a=e.size,s=0;function l(){if(s>=a){n();return}i.readAsArrayBuffer(e.slice(s,Math.min(a,s+r)))}i.addEventListener("load",e=>{let r=e.target.result;t(new Uint8Array(r)),s+=r.byteLength,l()}),l()})}(t,e=>{r.update(e)}),r.digest()},iE=e=>()=>Promise.reject(e),iA=[1732584193,4023233417,2562383102,271733878];class iM{constructor(){this.reset()}update(e){if("string"==typeof e?0===e.length:0===e.byteLength)return;if(this.finished)throw Error("Attempted to update an already finished hash.");let t="string"==typeof e?eb(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e),r=0,{byteLength:n}=t;for(this.bytesHashed+=n;n>0;)this.buffer.setUint8(this.bufferLength++,t[r++]),n--,64===this.bufferLength&&(this.hashBuffer(),this.bufferLength=0)}async digest(){if(!this.finished){let{buffer:e,bufferLength:t,bytesHashed:r}=this,n=8*r;if(e.setUint8(this.bufferLength++,128),t%64>=56){for(let t=this.bufferLength;t<64;t++)e.setUint8(t,0);this.hashBuffer(),this.bufferLength=0}for(let t=this.bufferLength;t<56;t++)e.setUint8(t,0);e.setUint32(56,n>>>0,!0),e.setUint32(60,Math.floor(n/4294967296),!0),this.hashBuffer(),this.finished=!0}let e=new DataView(new ArrayBuffer(16));for(let t=0;t<4;t++)e.setUint32(4*t,this.state[t],!0);return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}hashBuffer(){let{buffer:e,state:t}=this,r=t[0],n=t[1],o=t[2],i=t[3];r=iT(r,n,o,i,e.getUint32(0,!0),7,3614090360),i=iT(i,r,n,o,e.getUint32(4,!0),12,3905402710),o=iT(o,i,r,n,e.getUint32(8,!0),17,606105819),n=iT(n,o,i,r,e.getUint32(12,!0),22,3250441966),r=iT(r,n,o,i,e.getUint32(16,!0),7,4118548399),i=iT(i,r,n,o,e.getUint32(20,!0),12,1200080426),o=iT(o,i,r,n,e.getUint32(24,!0),17,2821735955),n=iT(n,o,i,r,e.getUint32(28,!0),22,4249261313),r=iT(r,n,o,i,e.getUint32(32,!0),7,1770035416),i=iT(i,r,n,o,e.getUint32(36,!0),12,2336552879),o=iT(o,i,r,n,e.getUint32(40,!0),17,4294925233),n=iT(n,o,i,r,e.getUint32(44,!0),22,2304563134),r=iT(r,n,o,i,e.getUint32(48,!0),7,1804603682),i=iT(i,r,n,o,e.getUint32(52,!0),12,4254626195),o=iT(o,i,r,n,e.getUint32(56,!0),17,2792965006),n=iT(n,o,i,r,e.getUint32(60,!0),22,1236535329),r=iP(r,n,o,i,e.getUint32(4,!0),5,4129170786),i=iP(i,r,n,o,e.getUint32(24,!0),9,3225465664),o=iP(o,i,r,n,e.getUint32(44,!0),14,643717713),n=iP(n,o,i,r,e.getUint32(0,!0),20,3921069994),r=iP(r,n,o,i,e.getUint32(20,!0),5,3593408605),i=iP(i,r,n,o,e.getUint32(40,!0),9,38016083),o=iP(o,i,r,n,e.getUint32(60,!0),14,3634488961),n=iP(n,o,i,r,e.getUint32(16,!0),20,3889429448),r=iP(r,n,o,i,e.getUint32(36,!0),5,568446438),i=iP(i,r,n,o,e.getUint32(56,!0),9,3275163606),o=iP(o,i,r,n,e.getUint32(12,!0),14,4107603335),n=iP(n,o,i,r,e.getUint32(32,!0),20,1163531501),r=iP(r,n,o,i,e.getUint32(52,!0),5,2850285829),i=iP(i,r,n,o,e.getUint32(8,!0),9,4243563512),o=iP(o,i,r,n,e.getUint32(28,!0),14,1735328473),n=iP(n,o,i,r,e.getUint32(48,!0),20,2368359562),r=iO(r,n,o,i,e.getUint32(20,!0),4,4294588738),i=iO(i,r,n,o,e.getUint32(32,!0),11,2272392833),o=iO(o,i,r,n,e.getUint32(44,!0),16,1839030562),n=iO(n,o,i,r,e.getUint32(56,!0),23,4259657740),r=iO(r,n,o,i,e.getUint32(4,!0),4,2763975236),i=iO(i,r,n,o,e.getUint32(16,!0),11,1272893353),o=iO(o,i,r,n,e.getUint32(28,!0),16,4139469664),n=iO(n,o,i,r,e.getUint32(40,!0),23,3200236656),r=iO(r,n,o,i,e.getUint32(52,!0),4,681279174),i=iO(i,r,n,o,e.getUint32(0,!0),11,3936430074),o=iO(o,i,r,n,e.getUint32(12,!0),16,3572445317),n=iO(n,o,i,r,e.getUint32(24,!0),23,76029189),r=iO(r,n,o,i,e.getUint32(36,!0),4,3654602809),i=iO(i,r,n,o,e.getUint32(48,!0),11,3873151461),o=iO(o,i,r,n,e.getUint32(60,!0),16,530742520),n=iO(n,o,i,r,e.getUint32(8,!0),23,3299628645),r=iR(r,n,o,i,e.getUint32(0,!0),6,4096336452),i=iR(i,r,n,o,e.getUint32(28,!0),10,1126891415),o=iR(o,i,r,n,e.getUint32(56,!0),15,2878612391),n=iR(n,o,i,r,e.getUint32(20,!0),21,4237533241),r=iR(r,n,o,i,e.getUint32(48,!0),6,1700485571),i=iR(i,r,n,o,e.getUint32(12,!0),10,2399980690),o=iR(o,i,r,n,e.getUint32(40,!0),15,4293915773),n=iR(n,o,i,r,e.getUint32(4,!0),21,2240044497),r=iR(r,n,o,i,e.getUint32(32,!0),6,1873313359),i=iR(i,r,n,o,e.getUint32(60,!0),10,4264355552),o=iR(o,i,r,n,e.getUint32(24,!0),15,2734768916),n=iR(n,o,i,r,e.getUint32(52,!0),21,1309151649),r=iR(r,n,o,i,e.getUint32(16,!0),6,4149444226),i=iR(i,r,n,o,e.getUint32(44,!0),10,3174756917),o=iR(o,i,r,n,e.getUint32(8,!0),15,718787259),n=iR(n,o,i,r,e.getUint32(36,!0),21,3951481745),t[0]=r+t[0]&4294967295,t[1]=n+t[1]&4294967295,t[2]=o+t[2]&4294967295,t[3]=i+t[3]&4294967295}reset(){this.state=Uint32Array.from(iA),this.buffer=new DataView(new ArrayBuffer(64)),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}}function iC(e,t,r,n,o,i){return((t=(t+e&4294967295)+(n+i&4294967295)&4294967295)<<o|t>>>32-o)+r&4294967295}function iT(e,t,r,n,o,i,a){return iC(t&r|~t&n,e,t,o,i,a)}function iP(e,t,r,n,o,i,a){return iC(t&n|r&~n,e,t,o,i,a)}function iO(e,t,r,n,o,i,a){return iC(t^r^n,e,t,o,i,a)}function iR(e,t,r,n,o,i,a){return iC(r^(t|~n),e,t,o,i,a)}let iL=e=>{if("string"==typeof e){let t=e.length;for(let r=t-1;r>=0;r--){let n=e.charCodeAt(r);n>127&&n<=2047?t++:n>2047&&n<=65535&&(t+=2),n>=56320&&n<=57343&&r--}return t}if("number"==typeof e.byteLength)return e.byteLength;if("number"==typeof e.size)return e.size;throw Error(`Body Length computation failed for ${e}`)},iN={CrtSignerV4:null};class iD{constructor(e){this.sigv4Signer=new nX(e),this.signerOptions=e}async sign(e,t={}){if("*"===t.signingRegion){if("node"!==this.signerOptions.runtime)throw Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");return this.getSigv4aSigner().sign(e,t)}return this.sigv4Signer.sign(e,t)}async presign(e,t={}){if("*"===t.signingRegion){if("node"!==this.signerOptions.runtime)throw Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");return this.getSigv4aSigner().presign(e,t)}return this.sigv4Signer.presign(e,t)}getSigv4aSigner(){if(!this.sigv4aSigner){let e=null;try{if(e=iN.CrtSignerV4,"function"!=typeof e)throw Error()}catch(e){throw e.message=`${e.message}
Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`,e}this.sigv4aSigner=new e({...this.signerOptions,signingAlgorithm:1})}return this.sigv4aSigner}}let iF="required",iI="type",iU="conditions",iz="argv",ik="assign",iB="properties",ij="authSchemes",i$="disableDoubleEncoding",iV="signingName",iG="signingRegion",iq="headers",iH="isSet",iW="tree",iX="booleanEquals",iK="error",iY="aws.partition",iZ="stringEquals",iJ="getAttr",iQ="name",i1="substring",i0="hardwareType",i2="regionPrefix",i3="bucketAliasSuffix",i9="outpostId",i4="isValidHostLabel",i5="parseURL",i6="s3-outposts",i8="endpoint",i7="aws.isVirtualHostableS3Bucket",ae="{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",at="{url#scheme}://{Bucket}.{url#authority}{url#path}",ar="https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}",an="https://{Bucket}.s3.{partitionResult#dnsSuffix}",ao="aws.parseArn",ai="bucketArn",aa="arnType",as="s3-object-lambda",al="accesspoint",au="accessPointName",ac="{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}",af="mrapPartition",ad="outpostType",ap="arnPrefix",ah="{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}",am="https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",ag="{url#scheme}://{url#authority}{url#path}",av="https://s3.{partitionResult#dnsSuffix}",ay={[iF]:!1,[iI]:"String"},ab={[iF]:!0,default:!1,[iI]:"Boolean"},ax={[iF]:!1,[iI]:"Boolean"},aw={fn:iX,[iz]:[{ref:"Accelerate"},!0]},aS={fn:iX,[iz]:[{ref:"UseFIPS"},!0]},a_={fn:iX,[iz]:[{ref:"UseDualStack"},!0]},aE={fn:iH,[iz]:[{ref:"Endpoint"}]},aA={fn:iY,[iz]:[{ref:"Region"}],[ik]:"partitionResult"},aM={fn:iZ,[iz]:[{fn:iJ,[iz]:[{ref:"partitionResult"},iQ]},"aws-cn"]},aC={fn:iH,[iz]:[{ref:"Bucket"}]},aT={ref:"Bucket"},aP={ref:i0},aO={[iU]:[{fn:"not",[iz]:[aE]}],[iK]:"Expected a endpoint to be specified but no endpoint was found",[iI]:iK},aR={fn:"not",[iz]:[aE]},aL={fn:i5,[iz]:[{ref:"Endpoint"}],[ik]:"url"},aN={[ij]:[{[i$]:!0,[iQ]:"sigv4",[iV]:i6,[iG]:"{Region}"}]},aD={},aF={fn:iX,[iz]:[{ref:"ForcePathStyle"},!1]},aI={fn:iX,[iz]:[{ref:"Accelerate"},!1]},aU={fn:iZ,[iz]:[{ref:"Region"},"aws-global"]},az={[ij]:[{[i$]:!0,[iQ]:"sigv4",[iV]:"s3",[iG]:"us-east-1"}]},ak={fn:"not",[iz]:[aU]},aB={fn:iX,[iz]:[{ref:"UseGlobalEndpoint"},!0]},aj={url:"https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",[iB]:{[ij]:[{[i$]:!0,[iQ]:"sigv4",[iV]:"s3",[iG]:"{Region}"}]},[iq]:{}},a$={[ij]:[{[i$]:!0,[iQ]:"sigv4",[iV]:"s3",[iG]:"{Region}"}]},aV={fn:iX,[iz]:[{ref:"UseGlobalEndpoint"},!1]},aG={fn:iX,[iz]:[{ref:"UseDualStack"},!1]},aq={url:"https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}",[iB]:a$,[iq]:{}},aH={fn:iX,[iz]:[{ref:"UseFIPS"},!1]},aW={url:"https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}",[iB]:a$,[iq]:{}},aX={url:"https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}",[iB]:a$,[iq]:{}},aK={fn:iX,[iz]:[{fn:iJ,[iz]:[{ref:"url"},"isIp"]},!0]},aY={ref:"url"},aZ={fn:iX,[iz]:[{fn:iJ,[iz]:[aY,"isIp"]},!1]},aJ={url:ae,[iB]:a$,[iq]:{}},aQ={url:at,[iB]:a$,[iq]:{}},a1={[i8]:aQ,[iI]:i8},a0={url:ar,[iB]:a$,[iq]:{}},a2={url:"https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}",[iB]:a$,[iq]:{}},a3={[iK]:"Invalid region: region was not a valid DNS name.",[iI]:iK},a9={ref:ai},a4={ref:aa},a5={fn:iJ,[iz]:[a9,"service"]},a6={ref:au},a8={[iU]:[a_],[iK]:"S3 Object Lambda does not support Dual-stack",[iI]:iK},a7={[iU]:[aw],[iK]:"S3 Object Lambda does not support S3 Accelerate",[iI]:iK},se={[iU]:[{fn:iH,[iz]:[{ref:"DisableAccessPoints"}]},{fn:iX,[iz]:[{ref:"DisableAccessPoints"},!0]}],[iK]:"Access points are not supported for this operation",[iI]:iK},st={[iU]:[{fn:iH,[iz]:[{ref:"UseArnRegion"}]},{fn:iX,[iz]:[{ref:"UseArnRegion"},!1]},{fn:"not",[iz]:[{fn:iZ,[iz]:[{fn:iJ,[iz]:[a9,"region"]},"{Region}"]}]}],[iK]:"Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",[iI]:iK},sr={fn:iJ,[iz]:[{ref:"bucketPartition"},iQ]},sn={fn:iJ,[iz]:[a9,"accountId"]},so={[ij]:[{[i$]:!0,[iQ]:"sigv4",[iV]:as,[iG]:"{bucketArn#region}"}]},si={[iK]:"Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`",[iI]:iK},sa={[iK]:"Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",[iI]:iK},ss={[iK]:"Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)",[iI]:iK},sl={[iK]:"Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`",[iI]:iK},su={[iK]:"Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.",[iI]:iK},sc={[iK]:"Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",[iI]:iK},sf={[ij]:[{[i$]:!0,[iQ]:"sigv4",[iV]:"s3",[iG]:"{bucketArn#region}"}]},sd={[ij]:[{[i$]:!0,[iQ]:"sigv4",[iV]:i6,[iG]:"{bucketArn#region}"}]},sp={fn:ao,[iz]:[aT]},sh={url:"https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[iB]:a$,[iq]:{}},sm={url:"https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[iB]:a$,[iq]:{}},sg={url:"https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[iB]:a$,[iq]:{}},sv={url:ah,[iB]:a$,[iq]:{}},sy={url:"https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[iB]:a$,[iq]:{}},sb={ref:"UseObjectLambdaEndpoint"},sx={[ij]:[{[i$]:!0,[iQ]:"sigv4",[iV]:as,[iG]:"{Region}"}]},sw={url:"https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",[iB]:a$,[iq]:{}},sS={url:"https://s3-fips.{Region}.{partitionResult#dnsSuffix}",[iB]:a$,[iq]:{}},s_={url:"https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}",[iB]:a$,[iq]:{}},sE={url:ag,[iB]:a$,[iq]:{}},sA={url:"https://s3.{Region}.{partitionResult#dnsSuffix}",[iB]:a$,[iq]:{}},sM=[{ref:"Region"}],sC=[aT],sT=[{fn:i4,[iz]:[{ref:i9},!1]}],sP=[{fn:iZ,[iz]:[{ref:i2},"beta"]}],sO=[aE,aL],sR=[aC],sL=[aA],sN=[{fn:i4,[iz]:[{ref:"Region"},!1]}],sD=[{fn:iZ,[iz]:[{ref:"Region"},"us-east-1"]}],sF=[{fn:iZ,[iz]:[a4,al]}],sI=[{fn:iJ,[iz]:[a9,"resourceId[1]"],[ik]:au},{fn:"not",[iz]:[{fn:iZ,[iz]:[a6,""]}]}],sU=[a_],sz=[aw],sk=[{fn:"not",[iz]:[{fn:iZ,[iz]:[{fn:iJ,[iz]:[a9,"region"]},""]}]}],sB=[{fn:"not",[iz]:[{fn:iH,[iz]:[{fn:iJ,[iz]:[a9,"resourceId[2]"]}]}]}],sj=[{fn:iY,[iz]:[{fn:iJ,[iz]:[a9,"region"]}],[ik]:"bucketPartition"}],s$=[{fn:iZ,[iz]:[sr,{fn:iJ,[iz]:[{ref:"partitionResult"},iQ]}]}],sV=[{fn:i4,[iz]:[{fn:iJ,[iz]:[a9,"region"]},!0]}],sG=[{fn:i4,[iz]:[sn,!1]}],sq=[{fn:i4,[iz]:[a6,!1]}],sH=[aS],sW=[{fn:i4,[iz]:[{ref:"Region"},!0]}],sX={version:"1.0",parameters:{Bucket:ay,Region:ay,UseFIPS:ab,UseDualStack:ab,Endpoint:ay,ForcePathStyle:ab,Accelerate:ab,UseGlobalEndpoint:ab,UseObjectLambdaEndpoint:ax,DisableAccessPoints:ax,DisableMultiRegionAccessPoints:ab,UseArnRegion:ax},rules:[{[iU]:[{fn:iH,[iz]:sM}],[iI]:iW,rules:[{[iU]:[aw,aS],error:"Accelerate cannot be used with FIPS",[iI]:iK},{[iU]:[a_,aE],error:"Cannot set dual-stack in combination with a custom endpoint.",[iI]:iK},{[iU]:[aE,aS],error:"A custom endpoint cannot be combined with FIPS",[iI]:iK},{[iU]:[aE,aw],error:"A custom endpoint cannot be combined with S3 Accelerate",[iI]:iK},{[iU]:[aS,aA,aM],error:"Partition does not support FIPS",[iI]:iK},{[iU]:[aC,{fn:i1,[iz]:[aT,49,50,!0],[ik]:i0},{fn:i1,[iz]:[aT,8,12,!0],[ik]:i2},{fn:i1,[iz]:[aT,0,7,!0],[ik]:i3},{fn:i1,[iz]:[aT,32,49,!0],[ik]:i9},{fn:iY,[iz]:sM,[ik]:"regionPartition"},{fn:iZ,[iz]:[{ref:i3},"--op-s3"]}],[iI]:iW,rules:[{[iU]:sT,[iI]:iW,rules:[{[iU]:[{fn:iZ,[iz]:[aP,"e"]}],[iI]:iW,rules:[{[iU]:sP,[iI]:iW,rules:[aO,{[iU]:sO,endpoint:{url:"https://{Bucket}.ec2.{url#authority}",[iB]:aN,[iq]:aD},[iI]:i8}]},{endpoint:{url:"https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",[iB]:aN,[iq]:aD},[iI]:i8}]},{[iU]:[{fn:iZ,[iz]:[aP,"o"]}],[iI]:iW,rules:[{[iU]:sP,[iI]:iW,rules:[aO,{[iU]:sO,endpoint:{url:"https://{Bucket}.op-{outpostId}.{url#authority}",[iB]:aN,[iq]:aD},[iI]:i8}]},{endpoint:{url:"https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",[iB]:aN,[iq]:aD},[iI]:i8}]},{error:'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"',[iI]:iK}]},{error:"Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",[iI]:iK}]},{[iU]:sR,[iI]:iW,rules:[{[iU]:[aE,{fn:"not",[iz]:[{fn:iH,[iz]:[{fn:i5,[iz]:[{ref:"Endpoint"}]}]}]}],error:"Custom endpoint `{Endpoint}` was not a valid URI",[iI]:iK},{[iU]:[aF,{fn:i7,[iz]:[aT,!1]}],[iI]:iW,rules:[{[iU]:sL,[iI]:iW,rules:[{[iU]:sN,[iI]:iW,rules:[{[iU]:[aw,aM],error:"S3 Accelerate cannot be used in this region",[iI]:iK},{[iU]:[a_,aS,aI,aR,aU],endpoint:{url:"https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[a_,aS,aI,aR,ak,aB],[iI]:iW,rules:[{endpoint:aj,[iI]:i8}]},{[iU]:[a_,aS,aI,aR,ak,aV],endpoint:aj,[iI]:i8},{[iU]:[aG,aS,aI,aR,aU],endpoint:{url:"https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aG,aS,aI,aR,ak,aB],[iI]:iW,rules:[{endpoint:aq,[iI]:i8}]},{[iU]:[aG,aS,aI,aR,ak,aV],endpoint:aq,[iI]:i8},{[iU]:[a_,aH,aw,aR,aU],endpoint:{url:"https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[a_,aH,aw,aR,ak,aB],[iI]:iW,rules:[{endpoint:aW,[iI]:i8}]},{[iU]:[a_,aH,aw,aR,ak,aV],endpoint:aW,[iI]:i8},{[iU]:[a_,aH,aI,aR,aU],endpoint:{url:"https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[a_,aH,aI,aR,ak,aB],[iI]:iW,rules:[{endpoint:aX,[iI]:i8}]},{[iU]:[a_,aH,aI,aR,ak,aV],endpoint:aX,[iI]:i8},{[iU]:[aG,aH,aI,aE,aL,aK,aU],endpoint:{url:ae,[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aG,aH,aI,aE,aL,aZ,aU],endpoint:{url:at,[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aG,aH,aI,aE,aL,aK,ak,aB],[iI]:iW,rules:[{[iU]:sD,endpoint:aJ,[iI]:i8},{endpoint:aJ,[iI]:i8}]},{[iU]:[aG,aH,aI,aE,aL,aZ,ak,aB],[iI]:iW,rules:[{[iU]:sD,endpoint:aQ,[iI]:i8},a1]},{[iU]:[aG,aH,aI,aE,aL,aK,ak,aV],endpoint:aJ,[iI]:i8},{[iU]:[aG,aH,aI,aE,aL,aZ,ak,aV],endpoint:aQ,[iI]:i8},{[iU]:[aG,aH,aw,aR,aU],endpoint:{url:ar,[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aG,aH,aw,aR,ak,aB],[iI]:iW,rules:[{[iU]:sD,endpoint:a0,[iI]:i8},{endpoint:a0,[iI]:i8}]},{[iU]:[aG,aH,aw,aR,ak,aV],endpoint:a0,[iI]:i8},{[iU]:[aG,aH,aI,aR,aU],endpoint:{url:an,[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aG,aH,aI,aR,ak,aB],[iI]:iW,rules:[{[iU]:sD,endpoint:{url:an,[iB]:a$,[iq]:aD},[iI]:i8},{endpoint:a2,[iI]:i8}]},{[iU]:[aG,aH,aI,aR,ak,aV],endpoint:a2,[iI]:i8}]},a3]}]},{[iU]:[aE,aL,{fn:iZ,[iz]:[{fn:iJ,[iz]:[aY,"scheme"]},"http"]},{fn:i7,[iz]:[aT,!0]},aF,aH,aG,aI],[iI]:iW,rules:[{[iU]:sL,[iI]:iW,rules:[{[iU]:sN,[iI]:iW,rules:[a1]},a3]}]},{[iU]:[aF,{fn:ao,[iz]:sC,[ik]:ai}],[iI]:iW,rules:[{[iU]:[{fn:iJ,[iz]:[a9,"resourceId[0]"],[ik]:aa},{fn:"not",[iz]:[{fn:iZ,[iz]:[a4,""]}]}],[iI]:iW,rules:[{[iU]:[{fn:iZ,[iz]:[a5,as]}],[iI]:iW,rules:[{[iU]:sF,[iI]:iW,rules:[{[iU]:sI,[iI]:iW,rules:[a8,a7,{[iU]:sk,[iI]:iW,rules:[se,{[iU]:sB,[iI]:iW,rules:[st,{[iU]:sj,[iI]:iW,rules:[{[iU]:sL,[iI]:iW,rules:[{[iU]:s$,[iI]:iW,rules:[{[iU]:sV,[iI]:iW,rules:[{[iU]:[{fn:iZ,[iz]:[sn,""]}],error:"Invalid ARN: Missing account id",[iI]:iK},{[iU]:sG,[iI]:iW,rules:[{[iU]:sq,[iI]:iW,rules:[{[iU]:sO,endpoint:{url:ac,[iB]:so,[iq]:aD},[iI]:i8},{[iU]:sH,endpoint:{url:"https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",[iB]:so,[iq]:aD},[iI]:i8},{endpoint:{url:"https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}",[iB]:so,[iq]:aD},[iI]:i8}]},si]},sa]},ss]},sl]}]}]},su]},{error:"Invalid ARN: bucket ARN is missing a region",[iI]:iK}]},sc]},{error:"Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`",[iI]:iK}]},{[iU]:sF,[iI]:iW,rules:[{[iU]:sI,[iI]:iW,rules:[{[iU]:sk,[iI]:iW,rules:[{[iU]:sF,[iI]:iW,rules:[{[iU]:sk,[iI]:iW,rules:[se,{[iU]:sB,[iI]:iW,rules:[st,{[iU]:sj,[iI]:iW,rules:[{[iU]:sL,[iI]:iW,rules:[{[iU]:[{fn:iZ,[iz]:[sr,"{partitionResult#name}"]}],[iI]:iW,rules:[{[iU]:sV,[iI]:iW,rules:[{[iU]:[{fn:iZ,[iz]:[a5,"s3"]}],[iI]:iW,rules:[{[iU]:sG,[iI]:iW,rules:[{[iU]:sq,[iI]:iW,rules:[{[iU]:sz,error:"Access Points do not support S3 Accelerate",[iI]:iK},{[iU]:[aS,a_],endpoint:{url:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",[iB]:sf,[iq]:aD},[iI]:i8},{[iU]:[aS,aG],endpoint:{url:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",[iB]:sf,[iq]:aD},[iI]:i8},{[iU]:[aH,a_],endpoint:{url:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",[iB]:sf,[iq]:aD},[iI]:i8},{[iU]:[aH,aG,aE,aL],endpoint:{url:ac,[iB]:sf,[iq]:aD},[iI]:i8},{[iU]:[aH,aG],endpoint:{url:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",[iB]:sf,[iq]:aD},[iI]:i8}]},si]},sa]},{error:"Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",[iI]:iK}]},ss]},sl]}]}]},su]}]}]},{[iU]:[{fn:i4,[iz]:[a6,!0]}],[iI]:iW,rules:[{[iU]:sU,error:"S3 MRAP does not support dual-stack",[iI]:iK},{[iU]:sH,error:"S3 MRAP does not support FIPS",[iI]:iK},{[iU]:sz,error:"S3 MRAP does not support S3 Accelerate",[iI]:iK},{[iU]:[{fn:iX,[iz]:[{ref:"DisableMultiRegionAccessPoints"},!0]}],error:"Invalid configuration: Multi-Region Access Point ARNs are disabled.",[iI]:iK},{[iU]:[{fn:iY,[iz]:sM,[ik]:af}],[iI]:iW,rules:[{[iU]:[{fn:iZ,[iz]:[{fn:iJ,[iz]:[{ref:af},iQ]},{fn:iJ,[iz]:[a9,"partition"]}]}],[iI]:iW,rules:[{endpoint:{url:"https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",[iB]:{[ij]:[{[i$]:!0,name:"sigv4a",[iV]:"s3",signingRegionSet:["*"]}]},[iq]:aD},[iI]:i8}]},{error:"Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`",[iI]:iK}]}]},{error:"Invalid Access Point Name",[iI]:iK}]},sc]},{[iU]:[{fn:iZ,[iz]:[a5,i6]}],[iI]:iW,rules:[{[iU]:sU,error:"S3 Outposts does not support Dual-stack",[iI]:iK},{[iU]:sH,error:"S3 Outposts does not support FIPS",[iI]:iK},{[iU]:sz,error:"S3 Outposts does not support S3 Accelerate",[iI]:iK},{[iU]:[{fn:iH,[iz]:[{fn:iJ,[iz]:[a9,"resourceId[4]"]}]}],error:"Invalid Arn: Outpost Access Point ARN contains sub resources",[iI]:iK},{[iU]:[{fn:iJ,[iz]:[a9,"resourceId[1]"],[ik]:i9}],[iI]:iW,rules:[{[iU]:sT,[iI]:iW,rules:[st,{[iU]:sj,[iI]:iW,rules:[{[iU]:sL,[iI]:iW,rules:[{[iU]:s$,[iI]:iW,rules:[{[iU]:sV,[iI]:iW,rules:[{[iU]:sG,[iI]:iW,rules:[{[iU]:[{fn:iJ,[iz]:[a9,"resourceId[2]"],[ik]:ad}],[iI]:iW,rules:[{[iU]:[{fn:iJ,[iz]:[a9,"resourceId[3]"],[ik]:au}],[iI]:iW,rules:[{[iU]:[{fn:iZ,[iz]:[{ref:ad},al]}],[iI]:iW,rules:[{[iU]:sO,endpoint:{url:"https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}",[iB]:sd,[iq]:aD},[iI]:i8},{endpoint:{url:"https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",[iB]:sd,[iq]:aD},[iI]:i8}]},{error:"Expected an outpost type `accesspoint`, found {outpostType}",[iI]:iK}]},{error:"Invalid ARN: expected an access point name",[iI]:iK}]},{error:"Invalid ARN: Expected a 4-component resource",[iI]:iK}]},sa]},ss]},sl]}]}]},{error:"Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`",[iI]:iK}]},{error:"Invalid ARN: The Outpost Id was not set",[iI]:iK}]},{error:"Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})",[iI]:iK}]},{error:"Invalid ARN: No ARN type specified",[iI]:iK}]},{[iU]:[{fn:i1,[iz]:[aT,0,4,!1],[ik]:ap},{fn:iZ,[iz]:[{ref:ap},"arn:"]},{fn:"not",[iz]:[{fn:iH,[iz]:[sp]}]}],error:"Invalid ARN: `{Bucket}` was not a valid ARN",[iI]:iK},{[iU]:[{fn:iX,[iz]:[{ref:"ForcePathStyle"},!0]},sp],error:"Path-style addressing cannot be used with ARN buckets",[iI]:iK},{[iU]:[{fn:"uriEncode",[iz]:sC,[ik]:"uri_encoded_bucket"}],[iI]:iW,rules:[{[iU]:sL,[iI]:iW,rules:[{[iU]:[aI],[iI]:iW,rules:[{[iU]:[a_,aR,aS,aU],endpoint:{url:"https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[a_,aR,aS,ak,aB],[iI]:iW,rules:[{endpoint:sh,[iI]:i8}]},{[iU]:[a_,aR,aS,ak,aV],endpoint:sh,[iI]:i8},{[iU]:[aG,aR,aS,aU],endpoint:{url:"https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aG,aR,aS,ak,aB],[iI]:iW,rules:[{endpoint:sm,[iI]:i8}]},{[iU]:[aG,aR,aS,ak,aV],endpoint:sm,[iI]:i8},{[iU]:[a_,aR,aH,aU],endpoint:{url:"https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[a_,aR,aH,ak,aB],[iI]:iW,rules:[{endpoint:sg,[iI]:i8}]},{[iU]:[a_,aR,aH,ak,aV],endpoint:sg,[iI]:i8},{[iU]:[aG,aE,aL,aH,aU],endpoint:{url:ah,[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aG,aE,aL,aH,ak,aB],[iI]:iW,rules:[{[iU]:sD,endpoint:sv,[iI]:i8},{endpoint:sv,[iI]:i8}]},{[iU]:[aG,aE,aL,aH,ak,aV],endpoint:sv,[iI]:i8},{[iU]:[aG,aR,aH,aU],endpoint:{url:am,[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aG,aR,aH,ak,aB],[iI]:iW,rules:[{[iU]:sD,endpoint:{url:am,[iB]:a$,[iq]:aD},[iI]:i8},{endpoint:sy,[iI]:i8}]},{[iU]:[aG,aR,aH,ak,aV],endpoint:sy,[iI]:i8}]},{error:"Path-style addressing cannot be used with S3 Accelerate",[iI]:iK}]}]}]},{[iU]:[{fn:iH,[iz]:[sb]},{fn:iX,[iz]:[sb,!0]}],[iI]:iW,rules:[{[iU]:sL,[iI]:iW,rules:[{[iU]:sW,[iI]:iW,rules:[a8,a7,{[iU]:sO,endpoint:{url:ag,[iB]:sx,[iq]:aD},[iI]:i8},{[iU]:sH,endpoint:{url:"https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}",[iB]:sx,[iq]:aD},[iI]:i8},{endpoint:{url:"https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}",[iB]:sx,[iq]:aD},[iI]:i8}]},a3]}]},{[iU]:[{fn:"not",[iz]:sR}],[iI]:iW,rules:[{[iU]:sL,[iI]:iW,rules:[{[iU]:sW,[iI]:iW,rules:[{[iU]:[aS,a_,aR,aU],endpoint:{url:"https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aS,a_,aR,ak,aB],[iI]:iW,rules:[{endpoint:sw,[iI]:i8}]},{[iU]:[aS,a_,aR,ak,aV],endpoint:sw,[iI]:i8},{[iU]:[aS,aG,aR,aU],endpoint:{url:"https://s3-fips.us-east-1.{partitionResult#dnsSuffix}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aS,aG,aR,ak,aB],[iI]:iW,rules:[{endpoint:sS,[iI]:i8}]},{[iU]:[aS,aG,aR,ak,aV],endpoint:sS,[iI]:i8},{[iU]:[aH,a_,aR,aU],endpoint:{url:"https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aH,a_,aR,ak,aB],[iI]:iW,rules:[{endpoint:s_,[iI]:i8}]},{[iU]:[aH,a_,aR,ak,aV],endpoint:s_,[iI]:i8},{[iU]:[aH,aG,aE,aL,aU],endpoint:{url:ag,[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aH,aG,aE,aL,ak,aB],[iI]:iW,rules:[{[iU]:sD,endpoint:sE,[iI]:i8},{endpoint:sE,[iI]:i8}]},{[iU]:[aH,aG,aE,aL,ak,aV],endpoint:sE,[iI]:i8},{[iU]:[aH,aG,aR,aU],endpoint:{url:av,[iB]:az,[iq]:aD},[iI]:i8},{[iU]:[aH,aG,aR,ak,aB],[iI]:iW,rules:[{[iU]:sD,endpoint:{url:av,[iB]:a$,[iq]:aD},[iI]:i8},{endpoint:sA,[iI]:i8}]},{[iU]:[aH,aG,aR,ak,aV],endpoint:sA,[iI]:i8}]},a3]}]}]},{error:"A region must be set when sending requests to S3.",[iI]:iK}]},sK=(e,t={})=>oS(sX,{endpointParams:e,logger:t.logger}),sY=e=>({apiVersion:"2006-03-01",base64Decoder:e?.base64Decoder??e$,base64Encoder:e?.base64Encoder??eV,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??sK,extensions:e?.extensions??[],getAwsChunkedEncodingStream:e?.getAwsChunkedEncodingStream??eq,logger:e?.logger??new eN,sdkStreamMixin:e?.sdkStreamMixin??e3,serviceId:e?.serviceId??"S3",signerConstructor:e?.signerConstructor??iD,signingEscapePath:e?.signingEscapePath??!1,urlParser:e?.urlParser??t$,useArnRegion:e?.useArnRegion??!1,utf8Decoder:e?.utf8Decoder??eb,utf8Encoder:e?.utf8Encoder??ew}),sZ=["in-region","cross-region","mobile","standard","legacy"],sJ=({defaultsMode:e}={})=>ne(async()=>{let t="function"==typeof e?await e():e;switch(t?.toLowerCase()){case"auto":return Promise.resolve(sQ()?"mobile":"standard");case"mobile":case"in-region":case"cross-region":case"standard":case"legacy":return Promise.resolve(t?.toLocaleLowerCase());case void 0:return Promise.resolve("legacy");default:throw Error(`Invalid parameter for "defaultsMode", expect ${sZ.join(", ")}, got ${t}`)}}),sQ=()=>{let e="undefined"!=typeof window&&window?.navigator?.userAgent?/*@__PURE__*/q(im).parse(window.navigator.userAgent):void 0,t=e?.platform?.type;return"tablet"===t||"mobile"===t},s1=e=>{let t=sJ(e),r=()=>t().then(ta),n=sY(e);return{...n,...e,runtime:"browser",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??iL,credentialDefaultProvider:e?.credentialDefaultProvider??(e=>()=>Promise.reject(Error("Credential is missing"))),defaultUserAgentProvider:e?.defaultUserAgentProvider??ig({serviceId:n.serviceId,clientVersion:/*@__PURE__*/q(is).version}),eventStreamSerdeProvider:e?.eventStreamSerdeProvider??iS,maxAttempts:e?.maxAttempts??3,md5:e?.md5??iM,region:e?.region??iE("Region is missing"),requestHandler:e?.requestHandler??new eK(r),retryMode:e?.retryMode??(async()=>(await r()).retryMode||oj),sha1:e?.sha1??il.Sha1,sha256:e?.sha256??id.Sha256,streamCollector:e?.streamCollector??eY,streamHasher:e?.streamHasher??i_,useDualstackEndpoint:e?.useDualstackEndpoint??(()=>Promise.resolve(!1)),useFipsEndpoint:e?.useFipsEndpoint??(()=>Promise.resolve(!1))}},s0=e=>{let t=async()=>{if(void 0===e.region)throw Error("Region is missing from runtimeConfig");let t=e.region;return"string"==typeof t?t:t()};return{setRegion(e){t=e},region:()=>t}},s2=e=>({region:e.region()}),s3=e=>e,s9=(e,t)=>{let r={...s3(s0(e)),...s3(tf(e)),...s3(K(e))};return t.forEach(e=>e.configure(r)),{...e,...s2(r),...td(r),...Y(r)}};var s4={},s5={},s6=X("1vV4g");s5=function(e){s6(!e||"object"==typeof e,"pex-gl: createGL requires opts argument to be null or an object"),e||(e={});let t=e.canvas,r=e.pixelRatio||1,n=!e.width&&!e.height;if(!t){if(t=document.createElement("canvas"),n){let e=document.createElement("meta");e.setAttribute("name","viewport"),e.setAttribute("content","width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, shrink-to-fit=0.0"),document.head.appendChild(e)}let o=()=>{n&&(document.body.style.margin="0px",document.body.style.overflow="hidden",document.body.style.background="#000"),document.body.appendChild(t)},i=e.width||window.innerWidth,a=e.height||window.innerHeight;1!==r&&(t.style.width=i+"px",t.style.height=a+"px"),t.width=i*r,t.height=a*r,document.body?o():document.addEventListener("DOMContentLoaded",o)}let o=["webgl","experimental-webgl"];for(var i=0;i<o.length;i++)try{let r=t.getContext(o[i],e);if(!r)throw Error("Canvas.getContext returned null");return console.info("pex-gl","Creating",o[i],"succeeded"),r}catch(e){console.warn("pex-gl","Creating",o[i],"failed",e)}};var s8={};s8=!0;var s6=X("1vV4g"),s7={},le={},r4=X("liSpS");// Generated by CoffeeScript 1.12.2
(function(){var e,t,r,n;"undefined"!=typeof performance&&null!==performance&&performance.now?le=function(){return performance.now()}:null!=r4&&r4.hrtime?(le=function(){return(e()-n)/1e6},t=r4.hrtime,n=(e=function(){var e;return 1e9*(e=t())[0]+e[1]})()-1e9*r4.uptime()):Date.now?(le=function(){return Date.now()-r},r=Date.now()):(le=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(le);for(var lt="undefined"==typeof window?G:window,lr=["moz","webkit"],ln="AnimationFrame",lo=lt["request"+ln],li=lt["cancel"+ln]||lt["cancelRequest"+ln],la=0;!lo&&la<lr.length;la++)lo=lt[lr[la]+"Request"+ln],li=lt[lr[la]+"Cancel"+ln]||lt[lr[la]+"CancelRequest"+ln];// Some versions of FF have rAF but not cAF
if(!lo||!li){var ls=0,ll=0,lu=[],lc=1e3/60;lo=function(e){if(0===lu.length){var t=le(),r=Math.max(0,lc-(t-ls));ls=r+t,setTimeout(function(){var e=lu.slice(0);// Clear queue here to prevent
// callbacks from appending listeners
// to the current frame's queue
lu.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(ls)}catch(e){setTimeout(function(){throw e},0)}},Math.round(r))}return lu.push({handle:++ll,callback:e,cancelled:!1}),ll},li=function(e){for(var t=0;t<lu.length;t++)lu[t].handle===e&&(lu[t].cancelled=!0)}}(s7=function(e){// Wrap in a new function to prevent
// `cancel` potentially being assigned
// to the native rAF function
return lo.call(lt,e)}).cancel=function(){li.apply(lt,arguments)},s7.polyfill=function(e){e||(e=lt),e.requestAnimationFrame=lo,e.cancelAnimationFrame=li};let lf=X("3FCuC")("context");var ld={},s6=X("1vV4g"),lp={};lp=function(e,t){Object.keys(t).forEach(t=>{if(-1===e.indexOf(t))throw Error(`Unknown prop "${t}"`)})};let lh=["name","data","width","height","pixelFormat","encoding","flipY","mipmap","target","min","mag","wrap","wrapS","wrapT","aniso","premultiplayAlpha"];function lm(e,t){return void 0!==e?e:t}// opts = { src, width, height }
// opts = { data, width, height, pixelFormat, encoding, flipY }
function lg(e,t,r){let n,o,i;// checkProps(allowedProps, opts)
let a=e.gl,s=e.PixelFormat,l=null,u=r.width,c=r.height,f=lm(r.flipY,lm(t.flipY,!1)),d=r.target||t.target,p=r.pixelFormat||t.pixelFormat||e.PixelFormat.RGBA8,h=r.encoding||t.encoding||e.Encoding.Linear,m=r.min||t.min||a.NEAREST,g=r.mag||t.mag||a.NEAREST,v=r.wrapS||t.wrapS||r.wrap||t.wrap||a.CLAMP_TO_EDGE,y=r.wrapT||t.wrapT||r.wrap||t.wrap||a.CLAMP_TO_EDGE,b=r.aniso||t.aniso||0,x=lm(r.premultiplayAlpha,lm(t.premultiplayAlpha,!1));var w=a.getExtension("EXT_texture_filter_anisotropic");a.activeTexture(a.TEXTURE0+0),a.bindTexture(t.target,t.handle),e.state.activeTextures[0]=t,a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,f),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x),a.texParameteri(d,a.TEXTURE_MAG_FILTER,g),a.texParameteri(d,a.TEXTURE_MIN_FILTER,m),a.texParameteri(d,a.TEXTURE_WRAP_S,v),a.texParameteri(d,a.TEXTURE_WRAP_T,y),w&&b>0&&a.texParameterf(d,w.TEXTURE_MAX_ANISOTROPY_EXT,b);// just an image
// opts = HTMLImage
// image with flags
// opts = { data: HTMLImage, flipY: Boolean }
// pixel data
// opts = { data: Array, width: Number, height: Number, flipY: Boolean }
// pixel data with flags
// opts = { data: { data: Array, width: Number, height: Number }, flipY: Boolean },
// array of images for cubemaps (and array textures in webgl2)
// opts = { data: [ HTMLImage, ... ], width: Number, height: Number, flipY: Boolean }
// array of pixel data for cubemaps (and array texture in webgl2)
// opts = { data: [ { data: Array, width: Number, height: Number }, ..], flipY: Boolean }
let S=r.data?r.data:r;if(S&&S.nodeName)s6(S instanceof window.HTMLImageElement||S instanceof window.HTMLVideoElement||S instanceof window.HTMLCanvasElement,"Texture2D.update opts has to be Image, Canvas or Video element"),u=S.width||S.videoHeight,c=S.height||S.videoHeight,n=a.RGBA,i=a.RGBA,o=a.UNSIGNED_BYTE,a.texImage2D(d,0,n,i,o,S),t.width=u,t.height=c;else if("object"==typeof r){if(s6(!l||Array.isArray(r.data)||r.data instanceof Uint8Array||r.data instanceof Float32Array,"Texture2D.update opts.data has to be null or an Array, Uint8Array or Float32Array"),l=r.data?r.data.data||r.data:null,!r.width&&l&&l.width&&(u=l.width),!r.height&&l&&l.height&&(u=l.height),s6(!l||void 0!==u&&void 0!==c,"Texture2D.update opts.width and opts.height are required when providing opts.data"),p===s.Depth||p===s.Depth16?(i=a.DEPTH_COMPONENT,n=a.DEPTH_COMPONENT,o=a.UNSIGNED_SHORT):p===s.Depth24?(i=a.DEPTH_COMPONENT,n=a.DEPTH_COMPONENT,o=a.UNSIGNED_INT):p===s.RGBA8?(i=a.RGBA,n=a.RGBA,o=a.UNSIGNED_BYTE):p===s.RGBA32F?(i=a.RGBA,n=a.RGBA,o=a.FLOAT):p===s.RGBA16F?(i=a.RGBA,n=a.RGBA,o=a.HALF_FLOAT):p===s.R32F?(i=a.ALPHA,n=a.ALPHA,o=a.FLOAT):p&&s6.fail(`Unknown texture pixel format: ${r.format}`),d===a.TEXTURE_2D)Array.isArray(l)&&(o===a.UNSIGNED_BYTE?l=new Uint8Array(l):o===a.FLOAT?l=new Float32Array(l):o===a.HALF_FLOAT?l=new Float32Array(l):s6.fail(`Unknown texture data type: ${o}`)),u&&c&&(a.texImage2D(d,0,n,u,c,0,i,o,l),t.width=u,t.height=c);else if(d===a.TEXTURE_CUBE_MAP){s6(!l||Array.isArray(l)&&6===l.length,"TextureCube requires data for 6 faces");for(let e=0;e<6;e++){let r=l?l[e].data||l[e]:null,s=a.TEXTURE_CUBE_MAP_POSITIVE_X+e;Array.isArray(r)?(o===a.UNSIGNED_BYTE?r=new Uint8Array(r):o===a.FLOAT?r=new Float32Array(l):s6.fail(`Unknown texture data type: ${o}`),a.texImage2D(s,0,n,u,c,0,i,o,r)):r&&r.nodeName?a.texImage2D(s,0,n,i,o,r):a.texImage2D(s,0,n,u,c,0,i,o,r),t.width=u,t.height=c}}}else s6.fail("Texture2D.update opts has to be a HTMLElement or Object");return r.mipmap&&a.generateMipmap(t.target),t.target=d,t.pixelFormat=p,t.encoding=h,t.min=m,t.mag=g,t.wrapS=v,t.wrapT=y,t.format=i,t.flipY=f,t.internalFormat=n,t.type=o,t.info="",t.info+=Object.keys(e.PixelFormat).find(t=>e.PixelFormat[t]===p),t.info+="_",t.info+=Object.keys(e.Encoding).find(t=>e.Encoding[t]===h),t}ld=function(e,t){lp(lh,t);let r=e.gl,n={class:"texture",handle:r.createTexture(),target:t.target,width:0,height:0,_update:lg,_dispose:function(){r.deleteTexture(this.handle),this.handle=null}};return lg(e,n,t),n};var lv={},s6=X("1vV4g");let ly=X("3FCuC")("context/framebuffer");// opts = { color: [texture] }
// opts = { color: [texture], depth }
// opts = { color: [{texture, target}], depth }
function lb(e,t,r){let n=e.gl;// TODO: if color.length > 1 check for WebGL2 or gl.getExtension('WEBGL_draw_buffers')
t.color=r.color.map(e=>{let t=e.texture?e:{texture:e};return t.level=0// we can't render to mipmap level other than 0 in webgl
,t.target||(t.target=t.texture.target),t}),r.depth&&!r.depth.texture&&(r.depth={texture:r.depth}),t.depth=r.depth,t.width=t.color[0].texture.width,t.height=t.color[0].texture.height,// TODO: ctx push framebuffer
n.bindFramebuffer(t.target,t.handle),t.drawBuffers.length=0;for(let e=0;e<t.color.length;e++){let r=t.color[e];t.drawBuffers.push(n.COLOR_ATTACHMENT0+e),n.framebufferTexture2D(t.target,n.COLOR_ATTACHMENT0+e,r.target,r.texture.handle,r.level)}for(let r=t.color.length;r<e.capabilities.maxColorAttachments;r++)n.framebufferTexture2D(t.target,n.COLOR_ATTACHMENT0+r,n.TEXTURE_2D,null,0);if(t.depth){e.debugMode&&ly("fbo attaching depth",t.depth);let r=t.depth;r.texture.target===n.RENDERBUFFER?n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,r.texture.handle):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,r.texture.target,r.texture.handle,r.level)}else e.debugMode&&ly("fbo deattaching depth"),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,null),n.framebufferTexture2D(t.target,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,null,0);var o=[];if(o[n.FRAMEBUFFER_COMPLETE]="FRAMEBUFFER_COMPLETE",o[n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",o[n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",o[n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",o[n.FRAMEBUFFER_UNSUPPORTED]="FRAMEBUFFER_UNSUPPORTED",e.debugMode){var i=n.checkFramebufferStatus(n.FRAMEBUFFER);s6(i===n.FRAMEBUFFER_COMPLETE,`FBO incomplete ${o[i]}`)}// TODO: ctx. pop framebuffer
n.bindFramebuffer(t.target,null)}lv=function(e,t){let r=e.gl,n={class:"framebuffer",handle:r.createFramebuffer(),target:r.FRAMEBUFFER,drawBuffers:[],color:[],depth:null,width:0,height:0,refCount:0,_update:lb,_dispose:function(){r.deleteFramebuffer(this.handle),this.color=null,this.depth=null}};return(t.color||t.depth)&&lb(e,n,t),n};var lx={},s6=X("1vV4g");// opts = { width: int, height: int, pixelFormat: PixelFormat }
function lw(e,t,r){Object.assign(t,r);let n=e.gl;s6(t.pixelFormat===e.PixelFormat.Depth16,"Only PixelFormat.Depth16 is supported for renderbuffers"),t.format=n.DEPTH_COMPONENT16,n.bindRenderbuffer(t.target,t.handle),n.renderbufferStorage(t.target,t.format,t.width,t.height),n.bindRenderbuffer(t.target,null)}lx=function(e,t){let r=e.gl,n={class:"renderbuffer",handle:r.createRenderbuffer(),target:r.RENDERBUFFER,width:0,height:0,_update:lw,_dispose:function(){r.deleteRenderbuffer(this.handle),this.color=null,this.depth=null}};return lw(e,n,t),n};var lS={};let l_=["name","framebuffer","color","depth","clearColor","clearDepth"];lS=function(e,t){lp(l_,t);let r={class:"pass",opts:t,// framebuffer: opts.framebuffer,
clearColor:t.clearColor,clearDepth:t.clearDepth,_dispose:function(){this.opts=null,this.clearColor=null,this.clearDepth=null,this.framebuffer===e.defaultState.pass.sharedFramebuffer&&0==--e.defaultState.pass.sharedFramebuffer.refCount&&(e.defaultState.pass.sharedFramebuffer._dispose(),e.defaultState.pass.sharedFramebuffer=null),this.framebuffer=null}};return(t.color||t.depth)&&(e.defaultState.pass.sharedFramebuffer||(e.defaultState.pass.sharedFramebuffer=e.framebuffer({})),r.framebuffer=e.defaultState.pass.sharedFramebuffer,e.defaultState.pass.sharedFramebuffer.refCount++),r.framebuffer||(r.framebuffer=e.defaultState.pass.framebuffer),r};var lE={};let lA=["vert","frag","program","depthWrite","depthTest","depthFunc","blend","blendSrcRGBFactor","blendSrcAlphaFactor","blendDstRGBFactor","blendDstAlphaFactor","cullFace","cullFaceMode","colorMask","primitive"];lE=function(e,t){lp(lA,t);let r=Object.assign({class:"pipeline",vert:null,frag:null,program:null,depthWrite:!0,depthTest:!1,depthFunc:e.DepthFunc.LessEqual,blend:!1,blendSrcRGBFactor:e.BlendFactor.One,blendSrcAlphaFactor:e.BlendFactor.One,blendDstRGBFactor:e.BlendFactor.One,blendDstAlphaFactor:e.BlendFactor.One,cullFace:!1,cullFaceMode:e.Face.Back,colorMask:[!0,!0,!0,!0],primitive:e.Primitive.Triangles,_dispose:function(){this.vert=null,this.frag=null,this.program&&0==--this.program.refCount&&this.program.handle&&e.dispose(this.program),this.program=null}},t);if(t.vert&&t.frag&&(r.program=e.program({vert:t.vert,frag:t.frag})),r.program&&!r.vertexLayout){r.program.refCount++;let e=r.program.attributesPerLocation;r.vertexLayout=Object.keys(e).map(t=>{let r=e[t];return[r.name,parseInt(t,10),r.size]})}return r};var lM={};let lC=X("3FCuC")("context/program");var s6=X("1vV4g");function lT(e,t,r){s6("string"==typeof r.vert,"Vertex shader source must be a string"),s6("string"==typeof r.frag,"Fragment shader source must be a string");let n=e.gl,o=lP(e,t,n.VERTEX_SHADER,r.vert),i=lP(e,t,n.FRAGMENT_SHADER,r.frag);if(// TODO: implement custom vertex layouts
// gl.bindAttribLocation(program, location, attributeName)
n.attachShader(t.handle,o),n.attachShader(t.handle,i),n.linkProgram(t.handle),!n.getProgramParameter(t.handle,n.LINK_STATUS))throw Error("Program: "+n.getProgramInfoLog(t.handle));n.deleteShader(o),n.deleteShader(i),function(e,t){let r=e.gl;t.uniforms={};let n=r.getProgramParameter(t.handle,r.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let n=r.getActiveUniform(t.handle,o),i=n.name,a=0;switch(n.type){case r.INT:case r.BOOL:case r.FLOAT:a=1;break;case r.FLOAT_VEC2:a=2;break;case r.FLOAT_VEC3:a=3;break;case r.FLOAT_VEC4:case r.FLOAT_MAT2:a=4;break;case r.FLOAT_MAT3:a=9;break;case r.FLOAT_MAT4:a=16;break;case r.SAMPLER_2D:case r.SAMPLER_CUBE:a=0;break;default:throw Error(`Unknwon attribute type ${n.type} : ${e.getGLString(n.type)}`)}if(t.uniforms[i]={name:i,type:n.type,size:a,location:r.getUniformLocation(t.handle,i)},n.size>1)for(let e=1;e<n.size;e++){let o=n.name.substr(0,n.name.indexOf("[")+1)+e+"]";t.uniforms[o]={type:n.type,location:r.getUniformLocation(t.handle,o)}}}}(e,t),function(e,t){let r=e.gl;t.attributes={},t.attributesPerLocation={};let n=r.getProgramParameter(t.handle,r.ACTIVE_ATTRIBUTES);for(let o=0;o<n;++o){let n=r.getActiveAttrib(t.handle,o),i=n.name,a=0;switch(n.type){case r.FLOAT:a=1;break;case r.FLOAT_VEC2:a=2;break;case r.FLOAT_VEC3:a=3;break;case r.FLOAT_VEC4:a=4;break;case r.FLOAT_MAT4:a=16;break;default:throw Error(`Unknwon attribute type ${n.type} : ${e.getGLString(n.type)}`)}let s={name:i,type:n.type,size:a,location:r.getAttribLocation(t.handle,i)};t.attributes[i]=s,t.attributesPerLocation[s.location]=s}}(e,t)}function lP(e,t,r,n){let o=e.gl,i=o.createShader(r);if(o.shaderSource(i,n+"\n"),o.compileShader(i),!o.getShaderParameter(i,o.COMPILE_STATUS)){let e=r===o.VERTEX_SHADER?"Vertex":"Fragment";throw lC(e+" shader compilation failed"),lC(n),Error(e+" shader error: "+o.getShaderInfoLog(i))}return i}lM=function(e,t){let r=e.gl,n={class:"program",handle:r.createProgram(),attributes:[],attributesPerLocation:{},uniforms:{},refCount:0,_update:lT,_dispose:function(){r.deleteProgram(this.handle),this.handle=null,this.attributes=null,this.attributesPerLocation=null,this.uniforms=null},setUniform:function(t,r){let n=this.uniforms[t];if(void 0===n)throw Error(`Uniform ${t} is not defined`);let o=e.gl,i=n.type,a=n.location;switch(n.type){case o.INT:case o.BOOL:o.uniform1i(a,r);break;case o.FLOAT:o.uniform1f(a,r);break;case o.FLOAT_VEC2:o.uniform2fv(a,r);break;case o.FLOAT_VEC3:o.uniform3fv(a,r);break;case o.FLOAT_VEC4:o.uniform4fv(a,r);break;case o.FLOAT_MAT2:o.uniformMatrix2fv(a,!1,r);break;case o.FLOAT_MAT3:o.uniformMatrix3fv(a,!1,r);break;case o.FLOAT_MAT4:o.uniformMatrix4fv(a,!1,r);break;case o.SAMPLER_2D:case o.SAMPLER_CUBE:o.uniform1i(a,r);break;default:throw Error(`Invalid uniform type ${i} : ${e.getGLString(i)}`)}}};return lT(e,n,t),n};var lO={},s6=X("1vV4g");let lR=["target","data","usage","type","offset"];function lL(e,t,r){lp(lR,r);let n=e.gl,o=r.data||r,i=r.type||t.type,a=r.offset||0;if(Array.isArray(o)){i||(r.target===n.ARRAY_BUFFER&&(i=e.DataType.Float32),r.target!==n.ELEMENT_ARRAY_BUFFER||(i=e.DataType.Uint16));var s=o,l=Array.isArray(s[0])?s[0].length:1,u=l*s.length;if(i===e.DataType.Float32?o=new Float32Array(1===l?s:u):i===e.DataType.Uint8?o=new Uint8Array(1===l?s:u):i===e.DataType.Uint16?o=new Uint16Array(1===l?s:u):i===e.DataType.Uint32&&(o=new Uint32Array(1===l?s:u)),l>1)for(var c=0;c<s.length;c++)for(var f=0;f<l;f++)o[c*l+f]=s[c][f]}else if(o instanceof Float32Array)i=e.DataType.Float32;else if(o instanceof Uint8Array)i=e.DataType.Uint8;else if(o instanceof Uint16Array)i=e.DataType.Uint16;else if(o instanceof Uint32Array)i=e.DataType.Uint32;else if(o instanceof ArrayBuffer);else throw Error(`Unknown buffer data type: ${o.constructor}`);t.type=i,// TODO: is this a valid guess?
t.length=o.length,// TODO: push state, and pop as this can modify existing VBO?
n.bindBuffer(t.target,t.handle),a?n.bufferSubData(t.target,a,o):n.bufferData(t.target,o,t.usage)}lO=function(e,t){let r=e.gl;lp(lR,t),s6(t.target===r.ARRAY_BUFFER||t.target===r.ELEMENT_ARRAY_BUFFER,"Invalid buffer target");let n=t.target===r.ARRAY_BUFFER?"vertexBuffer":"indexBuffer",o={class:n,handle:r.createBuffer(),target:t.target,usage:t.usage||r.STATIC_DRAW,_update:lL,_dispose:function(){r.deleteBuffer(this.handle),this.handle=null}};return lL(e,o,t),o};var lN={};// const assert = require('assert')
let lD=["target"];function lF(e,t){return t.state===e.QueryState.Ready&&(e.gl.beginQuery(t.target,t.handle),t.state=e.QueryState.Active,t.result=null,!0)}function lI(e,t){return t.state===e.QueryState.Active&&(e.gl.endQuery(t.target),t.state=e.QueryState.Pending,!0)}function lU(e,t){return!!e.gl.getQueryObject(t.handle,e.gl.QUERY_RESULT_AVAILABLE)&&(t.result=e.gl.getQueryObject(t.handle,e.gl.QUERY_RESULT),t.state=e.QueryState.Ready,!0)}lN=function(e,t){let r=e.gl;lp(lD,t=t||{});let n=Object.assign({class:"query",handle:r.createQuery(),target:null,state:e.QueryState.Ready,result:null,_begin:lF,_end:lI,_available:lU,_dispose:function(){r.deleteQuery(this.handle),this.handle=null}},t);return n.target||(n.target=e.QueryTarget.TimeElapsed),n};let lz=0,lk=["name","pass","pipeline","uniforms","attributes","indices","count","instances","viewport","scissor"];s4=function(e){s6(!e||"object"==typeof e,"pex-context: createContext requires opts argument to be null or an object");let t=null;(e=Object.assign({},{pixelRatio:1},e)).pixelRatio&&(e=Object.assign(e,{pixelRatio:Math.min(e.pixelRatio,window.devicePixelRatio)})),e&&e.gl?e&&e.gl&&(t=e.gl):t=s5(e),s6(t,"pex-context: createContext failed");let r={maxColorAttachments:1,maxTextureImageUnits:t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextureImageUnits:t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxCubeMapTextureSize:t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),instancedArrays:!1,instancing:!1,elementIndexUint32:!!t.getExtension("OES_element_index_uint"),standardDerivatives:!!t.getExtension("OES_standard_derivatives"),depthTexture:!!t.getExtension("WEBGL_depth_texture"),shaderTextureLod:!!t.getExtension("EXT_shader_texture_lod"),textureFloat:!!t.getExtension("OES_texture_float"),textureFloatLinear:!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!!t.getExtension("OES_texture_half_float"),textureHalfFloatLinear:!!t.getExtension("OES_texture_half_float_linear"),textureFilterAnisotropic:!!t.getExtension("EXT_texture_filter_anisotropic")};if(!t.HALF_FLOAT){let e=t.getExtension("OES_texture_half_float");e&&(t.HALF_FLOAT=e.HALF_FLOAT_OES)}if(!t.createQuery){let e=t.getExtension("EXT_disjoint_timer_query");e?(t.TIME_ELAPSED=e.TIME_ELAPSED_EXT,t.QUERY_RESULT_AVAILABLE=e.QUERY_RESULT_AVAILABLE_EXT,t.GPU_DISJOINT=e.GPU_DISJOINT_EXT,t.QUERY_RESULT=e.QUERY_RESULT_EXT,t.createQuery=e.createQueryEXT.bind(e),t.deleteQuery=e.deleteQueryEXT.bind(e),t.beginQuery=e.beginQueryEXT.bind(e),t.endQuery=e.endQueryEXT.bind(e),t.getQueryObject=e.getQueryObjectEXT.bind(e)):(t.TIME_ELAPSED="TIME_ELAPSED",t.QUERY_RESULT_AVAILABLE="QUERY_RESULT_AVAILABLE",t.GPU_DISJOINT="GPU_DISJOINT",t.QUERY_RESULT="QUERY_RESULT",t.createQuery=function(){return{}},t.deleteQuery=function(){},t.beginQuery=function(){},t.endQuery=function(){},t.getQueryObject=function(e,r){return r===t.QUERY_RESULT_AVAILABLE||(r===t.QUERY_RESULT?0:void 0)})}let n={One:t.ONE,Zero:t.ZERO,SrcAlpha:t.SRC_ALPHA,OneMinusSrcAlpha:t.ONE_MINUS_SRC_ALPHA,DstAlpha:t.DST_ALPHA,OneMinusDstAlpha:t.ONE_MINUS_DST_ALPHA,SrcColor:t.SRC_COLOR,OneMinusSrcColor:t.ONE_MINUS_SRC_COLOR,DstColor:t.DST_COLOR,OneMinusDstColor:t.ONE_MINUS_DST_COLOR},o={PositiveX:t.TEXTURE_CUBE_MAP_POSITIVE_X,NegativeX:t.TEXTURE_CUBE_MAP_NEGATIVE_X,PositiveY:t.TEXTURE_CUBE_MAP_POSITIVE_Y,NegativeY:t.TEXTURE_CUBE_MAP_NEGATIVE_Y,PositiveZ:t.TEXTURE_CUBE_MAP_POSITIVE_Z,NegativeZ:t.TEXTURE_CUBE_MAP_NEGATIVE_Z},i={Never:t.NEVER,Less:t.LESS,Equal:t.EQUAL,LessEqual:t.LEQUAL,Greater:t.GREATER,NotEqual:t.NOTEQUAL,GreaterEqual:t.GEQUAL,Always:t.ALWAYS},a={Float32:t.FLOAT,Uint8:t.UNSIGNED_BYTE,Uint16:t.UNSIGNED_SHORT,Uint32:t.UNSIGNED_INT},s={Front:t.FRONT,Back:t.BACK,FrontAndBack:t.FRONT_AND_BACK},l={Nearest:t.NEAREST,Linear:t.LINEAR,NearestMipmapNearest:t.NEAREST_MIPMAP_NEAREST,NearestMipmapLinear:t.NEAREST_MIPMAP_LINEAR,LinearMipmapNearest:t.LINEAR_MIPMAP_NEAREST,LinearMipmapLinear:t.LINEAR_MIPMAP_LINEAR},u={Points:t.POINTS,Lines:t.LINES,LineStrip:t.LINE_STRIP,Triangles:t.TRIANGLES,TriangleStrip:t.TRIANGLE_STRIP},c={StaticDraw:t.STATIC_DRAW,DynamicDraw:t.DYNAMIC_DRAW,StreamDraw:t.STREAM_DRAW},f={ClampToEdge:t.CLAMP_TO_EDGE,Repeat:t.REPEAT},d={TimeElapsed:t.TIME_ELAPSED},p={gl:t,BlendFactor:n,CubemapFace:o,DataType:a,DepthFunc:i,Face:s,Filter:l,PixelFormat:{RGBA8:"rgba8",RGBA32F:"rgba32f",RGBA16F:"rgba16f",R32F:"r32f",R16F:"r16f",Depth:"depth",Depth16:"depth16",Depth24:"depth24"// gl.DEPTH_COMPONENT + gl.UNSIGNED_INT
},Encoding:{Linear:1,Gamma:2,SRGB:3,RGBM:4},Primitive:u,Usage:c,Wrap:f,QueryTarget:d,QueryState:{Ready:"ready",Active:"active",Pending:"pending"}},h={pass:{framebuffer:{target:t.FRAMEBUFFER,handle:null,width:t.drawingBufferWidth,height:t.drawingBufferHeight},clearColor:[0,0,0,1],clearDepth:1},pipeline:lE(p,{}),viewport:[0,0,t.drawingBufferWidth,t.drawingBufferHeight],scissor:null,count:0};// extensions
if(t.drawElementsInstanced)r.instancedArrays=!0,r.instancing=!0// TODO: deprecate
;else{let e=t.getExtension("ANGLE_instanced_arrays");e?(// TODO: this._caps[CAPS_INSTANCED_ARRAYS] = true;
t.drawElementsInstanced=e.drawElementsInstancedANGLE.bind(e),t.drawArraysInstanced=e.drawArraysInstancedANGLE.bind(e),t.vertexAttribDivisor=e.vertexAttribDivisorANGLE.bind(e),r.instancedArrays=!0,r.instancing=!0// TODO: deprecate
):(// TODO: this._caps[CAPS_INSTANCED_ARRAYS] = false;
t.drawElementsInstanced=function(){throw Error("gl.drawElementsInstanced not available. ANGLE_instanced_arrays not supported")},t.drawArraysInstanced=function(){throw Error("gl.drawArraysInstanced not available. ANGLE_instanced_arrays not supported")},t.vertexAttribDivisor=function(){throw Error("gl.vertexAttribDivisor not available. ANGLE_instanced_arrays not supported")})}if(t.drawBuffers)r.maxColorAttachments=t.getParameter("MAX_COLOR_ATTACHMENTS");else{let e=t.getExtension("WEBGL_draw_buffers");e?(t.drawBuffers=e.drawBuffersWEBGL.bind(e),r.maxColorAttachments=t.getParameter(e.MAX_COLOR_ATTACHMENTS_WEBGL)):t.drawBuffers=function(){throw Error("WEBGL_draw_buffers not supported")}}return lf("capabilities",r),Object.assign(p,{debugMode:!1,capabilities:r,// debugGraph: '',
debugCommands:[],resources:[],stats:[],queries:[],stack:[h],defaultState:h,pixelRatio:e.pixelRatio||1,state:{pass:{framebuffer:h.pass.framebuffer},pipeline:lE(p,{}),activeTextures:[],activeAttributes:[]},getGLString:function(e){let r="";for(let n in t)t[n]===e&&(r=n);return r||(r="UNDEFINED"),r},set:function(e){s6(s8,"changing resolution is not supported in Plask"),e.pixelRatio&&(this.updatePixelRatio=Math.min(e.pixelRatio,window.devicePixelRatio)),e.width&&(this.updateWidth=e.width),e.height&&(this.updateHeight=e.height)},debug:function(e){this.debugMode=e,e&&(this.debugCommands=[])},checkError:function(){if(this.debugMode){var e=t.getError();if(e)throw this.debugMode=!1// prevents rolling errors
,s8&&lf("State",this.state.state),Error(`GL error ${e} : ${this.getGLString(e)}`)}},resource:function(e){return e.id=e.class+"_"+lz++,this.stats[e.class]||(this.stats[e.class]={alive:0,total:0}),this.stats[e.class].alive++,this.stats[e.class].total++,this.resources.push(e),this.checkError(),e},// texture2D({ data: TypedArray, width: Int, height: Int, format: PixelFormat, flipY: Boolean })
texture2D:function(e){return lf("texture2D",e),e.target=t.TEXTURE_2D,this.resource(ld(this,e))},// textureCube({ data: [negxData, negyData,...], width: Int, height: Int, format: PixelFormat, flipY: Boolean })
textureCube:function(e){return lf("textureCube",e),e.target=t.TEXTURE_CUBE_MAP,this.resource(ld(this,e))},// framebuffer({ color: [ Texture2D, .. ], depth: Texture2D }
// framebuffer({ color: [ { texture: Texture2D, target: Enum, level: int }, .. ], depth: { texture: Texture2D }})
framebuffer:function(e){return lf("framebuffer",e),this.resource(lv(this,e))},// renderbuffer({ width: int, height: int })
renderbuffer:function(e){return lf("renderbuffer",e),this.resource(lx(this,e))},// TODO: Should we have named versions or generic 'ctx.buffer' command?
// In regl buffer() is ARRAY_BUFFER (aka VertexBuffer) and elements() is ELEMENT_ARRAY_BUFFER
// Now in WebGL2 we get more types Uniform, TransformFeedback, Copy
// Possible options: {
//    data: Array or ArrayBuffer
//    type: 'float', 'uint16' etc
// }
vertexBuffer:function(e){return lf("vertexBuffer",e),e.length&&(e={data:e}),e.target=t.ARRAY_BUFFER,this.resource(lO(this,e))},indexBuffer:function(e){return lf("indexBuffer",e),e.length&&(e={data:e}),e.target=t.ELEMENT_ARRAY_BUFFER,this.resource(lO(this,e))},program:function(e){return lf("program",e),this.resource(lM(this,e))},pipeline:function(e){return lf("pipeline",e),this.resource(lE(this,e))},pass:function(e){return lf("pass",e,e.color?e.color.map(e=>e.texture?e.texture.info:e.info):""),this.resource(lS(this,e))},query:function(e){return lf("query",e),this.resource(lN(this,e))},beginQuery:function(e){s6(!this.activeQuery,"Only one query can be active at the time"),e._begin(this,e)&&(this.activeQuery=e)},endQuery:function(e){e._end(this,e)&&(this.queries.push(e),this.activeQuery=null)},readPixels:function(e){let r=e.x||0,n=e.y||0,o=e.width,i=e.height,a=t.RGBA,s=t.UNSIGNED_BYTE,l=null;return l=new Uint8Array(o*i*4),t.readPixels(r,n,o,i,a,s,l),l},// update(texture, { data: TypeArray, [width: Int, height: Int] })
// update(texture, { data: TypedArray })
update:function(e,t){this.debugMode&&lf("update",{resource:e,opts:t}),e._update(this,e,t)},// TODO: i don't like this inherit flag
mergeCommands:function(e,t,r){// copy old state so we don't modify it's internals
let n=Object.assign({},e);// set viewport to FBO sizes when rendering to a texture
if(r||(// clear values are not merged as they are applied only in the parent command
n.pass=Object.assign({},e.pass),n.pass.clearColor=void 0,n.pass.clearDepth=void 0),// overwrite properties from new command
Object.assign(n,t),!t.viewport&&t.pass&&t.pass.opts.color){let e=null;t.pass.opts.color[0]&&(e=t.pass.opts.color[0].texture||t.pass.opts.color[0]),t.pass.opts.depth&&(e=t.pass.opts.depth.texture||t.pass.opts.depth),e&&(n.viewport=[0,0,e.width,e.height])}return(// merge uniforms
n.uniforms=e.uniforms||t.uniforms?Object.assign({},e.uniforms,t.uniforms):null,n)},applyPass:function(e){let t=this.gl,r=this.state;r.pass.id!==e.id&&(this.debugMode&&lf("change framebuffer",r.pass.framebuffer,"->",e.framebuffer),r.pass=e,e.framebuffer._update&&this.update(e.framebuffer,e.opts),t.bindFramebuffer(e.framebuffer.target,e.framebuffer.handle),e.framebuffer.drawBuffers&&e.framebuffer.drawBuffers.length>1&&t.drawBuffers(e.framebuffer.drawBuffers));let n=0;void 0!==e.clearColor&&(this.debugMode&&lf("clearing color",e.clearColor),n|=t.COLOR_BUFFER_BIT,// TODO this might be unnecesary but we don't know because we don't store the clearColor in state
t.clearColor(e.clearColor[0],e.clearColor[1],e.clearColor[2],e.clearColor[3])),void 0!==e.clearDepth&&(this.debugMode&&lf("clearing depth",e.clearDepth),n|=t.DEPTH_BUFFER_BIT,r.depthWrite||(r.depthWrite=!0,t.depthMask(!0)),// TODO this might be unnecesary but we don't know because we don't store the clearDepth in state
t.clearDepth(e.clearDepth)),n&&t.clear(n),this.checkError()},applyPipeline:function(e){let t=this.gl,r=this.state;e.depthWrite!==r.depthWrite&&(r.depthWrite=e.depthWrite,t.depthMask(r.depthWrite)),e.depthTest!==r.depthTest&&(r.depthTest=e.depthTest,r.depthTest?t.enable(t.DEPTH_TEST):t.disable(t.DEPTH_TEST)),e.depthFunc!==r.depthFunc&&(r.depthFunc=e.depthFunc,t.depthFunc(r.depthFunc)),(e.blend!==r.blend||e.blendSrcRGBFactor!==r.blendSrcRGBFactor||e.blendSrcAlphaFactor!==r.blendSrcAlphaFactor||e.blendDstRGBFactor!==r.blendDstRGBFactor||e.blendDstAlphaFactor!==r.blendDstAlphaFactor)&&(r.blend=e.blend,r.blendSrcRGBFactor=e.blendSrcRGBFactor,r.blendSrcAlphaFactor=e.blendSrcAlphaFactor,r.blendDstRGBFactor=e.blendDstRGBFactor,r.blendDstAlphaFactor=e.blendDstAlphaFactor,r.blend?t.enable(t.BLEND):t.disable(t.BLEND),t.blendFuncSeparate(r.blendSrcRGBFactor,r.blendDstRGBFactor,r.blendSrcAlphaFactor,r.blendDstAlphaFactor)),(e.cullFace!==r.cullFace||e.cullFaceMode!==r.cullFaceMode)&&(r.cullFace=e.cullFace,r.cullFaceMode=e.cullFaceMode,r.cullFace?t.enable(t.CULL_FACE):t.disable(t.CULL_FACE),r.cullFace&&t.cullFace(r.cullFaceMode)),(e.colorMask[0]!==r.pipeline.colorMask[0]||e.colorMask[1]!==r.pipeline.colorMask[1]||e.colorMask[2]!==r.pipeline.colorMask[2]||e.colorMask[3]!==r.pipeline.colorMask[3])&&(r.pipeline.colorMask[0]=e.colorMask[0],r.pipeline.colorMask[1]=e.colorMask[1],r.pipeline.colorMask[2]=e.colorMask[2],r.pipeline.colorMask[3]=e.colorMask[3],t.colorMask(e.colorMask[0],e.colorMask[1],e.colorMask[2],e.colorMask[3])),e.program!==r.program&&(r.program=e.program,r.program&&t.useProgram(r.program.handle)),e.vertexLayout&&(r.vertexLayout=e.vertexLayout),this.checkError()},applyUniforms:function(e,t){let r=this.gl,n=this.state,o=0;n.program||s6.fail("Trying to draw without an active program");let i=this.debugMode?Object.keys(n.program.uniforms):null;for(var a in e){let u=e[a];// TODO: find a better way to not trying to set unused uniforms that might have been inherited
if(n.program.uniforms[a]||n.program.uniforms[a+"[0]"]){// FIXME: uniform array hack
if(null==u&&(lf("invalid command",t),s6.fail(`Can't set uniform "${a}" with a null value`)),Array.isArray(u)&&!n.program.uniforms[a]){this.debugMode&&lf("unknown uniform",a,Object.keys(n.program.uniforms));for(var s=0;s<u.length;s++){var l=a+"["+s+"]";n.program.setUniform(l,u[s]),this.debugMode&&i.splice(i.indexOf(l),1)}}else if(u.target){// assuming texture
// FIXME: texture binding hack
let e=o++;r.activeTexture(r.TEXTURE0+e),n.activeTextures[e]!==u&&(r.bindTexture(u.target,u.handle),n.activeTextures[e]=u),n.program.setUniform(a,e),this.debugMode&&i.splice(i.indexOf(a),1)}else u.length||"object"!=typeof u?(n.program.setUniform(a,u),this.debugMode&&i.splice(i.indexOf(a),1)):(lf("invalid command",t),s6.fail(`Can set uniform "${a}" with an Object value`))}}this.debugMode&&i.length>0&&(lf("invalid command",t),s6.fail(`Trying to draw with missing uniforms: ${i.join(", ")}`)),this.checkError()},drawVertexData:function(e){let n=this.state,o=n.vertexLayout;n.program||s6.fail("Trying to draw without an active program"),this.debugMode&&o.length!==Object.keys(n.program.attributes).length&&(lf("Invalid vertex layout not matching the shader",o,n.program.attributes,e),s6.fail("Invalid vertex layout not matching the shader"));let i=!1;// TODO: disable unused vertex array slots
for(let e=0;e<16;e++)n.activeAttributes[e]=null,t.disableVertexAttribArray(e);// TODO: the same as i support [tex] and { texture: tex } i should support buffers in attributes?
for(let a=0;a<o.length;a++){let s=o[a],l=s[0],u=s[1],c=s[2],f=e.attributes[a]||e.attributes[l];f||(lf("Invalid command",e,"doesn't satisfy vertex layout",o),s6.fail(`Command is missing attribute "${l}" at location ${u} with ${f}`));let d=f.buffer;d||"vertexBuffer"!==f.class||(d=f),d&&d.target||(lf("Invalid command",e),s6.fail(`Trying to draw arrays with invalid buffer for attribute : ${l}`)),t.bindBuffer(d.target,d.handle),16===c?(t.enableVertexAttribArray(u+0),t.enableVertexAttribArray(u+1),t.enableVertexAttribArray(u+2),t.enableVertexAttribArray(u+3),n.activeAttributes[u+0]=d,n.activeAttributes[u+1]=d,n.activeAttributes[u+2]=d,n.activeAttributes[u+3]=d,// we still check for buffer type because while e.g. pex-renderer would copy buffer type to attrib
// a raw pex-context example probably would not
t.vertexAttribPointer(u,4,f.type||d.type,f.normalized||!1,f.stride||64,f.offset||0),t.vertexAttribPointer(u+1,4,f.type||d.type,f.normalized||!1,f.stride||64,f.offset||16),t.vertexAttribPointer(u+2,4,f.type||d.type,f.normalized||!1,f.stride||64,f.offset||32),t.vertexAttribPointer(u+3,4,f.type||d.type,f.normalized||!1,f.stride||64,f.offset||48),f.divisor?(t.vertexAttribDivisor(u+0,f.divisor),t.vertexAttribDivisor(u+1,f.divisor),t.vertexAttribDivisor(u+2,f.divisor),t.vertexAttribDivisor(u+3,f.divisor),i=!0):r.instancing&&(t.vertexAttribDivisor(u+0,0),t.vertexAttribDivisor(u+1,0),t.vertexAttribDivisor(u+2,0),t.vertexAttribDivisor(u+3,0))):(t.enableVertexAttribArray(u),n.activeAttributes[u]=d,t.vertexAttribPointer(u,c,f.type||d.type,f.normalized||!1,f.stride||0,f.offset||0),f.divisor?(t.vertexAttribDivisor(u,f.divisor),i=!0):r.instancing&&t.vertexAttribDivisor(u,0));// TODO: how to match index with vertexLayout location?
}let a=e.pipeline.primitive;if(e.indices){let r=e.indices.buffer;r||"indexBuffer"!==e.indices.class||(r=e.indices),r&&r.target||(lf("Invalid command",e),s6.fail("Trying to draw arrays with invalid buffer for elements")),n.indexBuffer=r,t.bindBuffer(r.target,r.handle);var s=e.count||r.length,l=e.indices.offset||0,u=e.indices.type||r.type;i?t.drawElementsInstanced(a,s,u,l,e.instances):t.drawElements(a,s,u,l)}else e.count?i?t.drawArraysInstanced(a,0,e.count,e.instances):t.drawArrays(a,0,e.count):s6.fail("Vertex arrays requres elements or count to draw");this.checkError()},frame:function(e){let r=this;s7(function n(){r.updatePixelRatio&&(r.pixelRatio=r.updatePixelRatio,r.updateWidth||(r.updateWidth=parseInt(t.canvas.style.width)||t.canvas.width),r.updateHeight||(r.updateHeight=parseInt(t.canvas.style.height)||t.canvas.height),r.updatePixelRatio=0),r.updateWidth&&(t.canvas.style.width=r.updateWidth+"px",t.canvas.width=r.updateWidth*r.pixelRatio,r.updateWidth=0),r.updateHeight&&(t.canvas.style.height=r.updateHeight+"px",t.canvas.height=r.updateHeight*r.pixelRatio,r.updateHeight=0),(r.defaultState.viewport[2]!==t.drawingBufferWidth||r.defaultState.viewport[3]!==t.drawingBufferHeight)&&(r.defaultState.viewport[2]=t.drawingBufferWidth,r.defaultState.viewport[3]=t.drawingBufferHeight,r.defaultState.pass.framebuffer.width=t.drawingBufferWidth,r.defaultState.pass.framebuffer.height=t.drawingBufferHeight,t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight)),!1!==e()&&(r.queries.length&&(r.queries=r.queries.filter(e=>!e._available(r,e))),s7(n))})},// TODO: switching to lightweight resources would allow to just clone state
// and use commands as state modifiers?
apply:function(e){let r=this.state;this.debugMode&&lf("apply",e.name||e.id,{cmd:e,state:JSON.parse(JSON.stringify(r))}),this.checkError(),e.scissor?e.scissor!==r.scissor&&(r.scissor=e.scissor,t.enable(t.SCISSOR_TEST),t.scissor(r.scissor[0],r.scissor[1],r.scissor[2],r.scissor[3])):e.scissor!==r.scissor&&(r.scissor=e.scissor,t.disable(t.SCISSOR_TEST)),e.pass&&this.applyPass(e.pass),e.pipeline&&this.applyPipeline(e.pipeline),e.uniforms&&this.applyUniforms(e.uniforms),e.viewport&&e.viewport!==r.viewport&&(r.viewport=e.viewport,t.viewport(r.viewport[0],r.viewport[1],r.viewport[2],r.viewport[3])),e.attributes&&this.drawVertexData(e)},submit:function(e,t,r){if(this.debugMode&&(lp(lk,e),t&&r?lf("submit",e.name||e.id,{depth:this.stack.length,cmd:e,batches:t,subCommand:r,state:this.state,stack:this.stack}):t?lf("submit",e.name||e.id,{depth:this.stack.length,cmd:e,batches:t,state:this.state,stack:this.stack}):lf("submit",e.name||e.id,{depth:this.stack.length,cmd:e,state:this.state,stack:this.stack})),t){if(Array.isArray(t)){// TODO: quick hack
for(let n=0;n<t.length;n++){let o=t[n];this.submit(this.mergeCommands(e,o,!0),r)}return}if("object"==typeof t){this.submit(this.mergeCommands(e,t,!0),r);return}r=t// shift argument
}let n=this.stack[this.stack.length-1],o=this.mergeCommands(n,e,!1);if(this.apply(o),this.debugMode&&(o.debugId=this.debugCommands.length,this.debugCommands.push({cmd:e,cmdState:o,parentState:n})),r){if(this.debugMode&&(this.debugGraph+=`subgraph cluster_${e.name||e.id} {
`,this.debugGraph+=`label = "${e.name}"
`,e.program&&(this.debugGraph+=`${e.program.id} -> cluster_${e.name||e.id}
`),e.framebuffer)){this.debugGraph+=`${e.framebuffer.id} -> cluster_${e.name||e.id}
`;for(let t=0;t<e.framebuffer.color;t++){let r=e.framebuffer.color[t];this.debugGraph+=`${r.texture.id} -> ${e.framebuffer.id}
`}e.framebuffer.depth&&(this.debugGraph+=`${e.framebuffer.depth.texture.id} -> ${e.framebuffer.id}
`)}this.stack.push(o),r(),this.stack.pop(),this.debugMode&&(this.debugGraph+="}\n")}this.checkError()},dispose:function(e){if(lf("dispose",e),s6(e||0==arguments.length,"Trying to dispose undefined resource"),e){e._dispose||s6(e._dispose,"Trying to dispose non resource");let t=this.resources.indexOf(e);s6(-1!==t,"Trying to dispose resource from another context"),this.resources.splice(t,1),this.stats[e.class].alive--,e._dispose()}else{for(;this.resources.length;)this.dispose(this.resources[0]);this.gl.canvas.width=1,this.gl.canvas.height=1}}}),p.apply(h),p};var lB={},lj={},r4=X("liSpS");function l$(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}// Resolves . and .. elements in a path with directory names
function lV(e,t){for(var r,n="",o=0,i=-1,a=0,s=0;s<=e.length;++s){if(s<e.length)r=e.charCodeAt(s);else if(47/*/*/===r)break;else r=47/*/*/;if(47/*/*/===r){if(i===s-1||1===a);else if(i!==s-1&&2===a){if(n.length<2||2!==o||46/*.*/!==n.charCodeAt(n.length-1)||46/*.*/!==n.charCodeAt(n.length-2)){if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",o=0):o=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),i=s,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=s,a=0;continue}}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),o=s-i-1;i=s,a=0}else 46/*.*/===r&&-1!==a?++a:a=-1}return n}var lG={// path.resolve([from ...], to)
resolve:function(){for(var e,t,r="",n=!1,o=arguments.length-1;o>=-1&&!n;o--)o>=0?t=arguments[o]:(void 0===e&&(e=r4.cwd()),t=e),l$(t),0!==t.length&&(r=t+"/"+r,n=47/*/*/===t.charCodeAt(0));return(// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)
// Normalize the path
r=lV(r,!n),n)?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(l$(e),0===e.length)return".";var t=47/*/*/===e.charCodeAt(0),r=47/*/*/===e.charCodeAt(e.length-1);return(0!==// Normalize the path
(e=lV(e,!t)).length||t||(e="."),e.length>0&&r&&(e+="/"),t)?"/"+e:e},isAbsolute:function(e){return l$(e),e.length>0&&47/*/*/===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];l$(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":lG.normalize(e)},relative:function(e,t){if(l$(e),l$(t),e===t||(e=lG.resolve(e))===(t=lG.resolve(t)))return"";for(// Trim any leading backslashes
var r=1;r<e.length&&47/*/*/===e.charCodeAt(r);++r);for(var n=e.length,o=n-r,i=1;i<t.length&&47/*/*/===t.charCodeAt(i);++i);for(var a=t.length-i,s=o<a?o:a,l=-1,u=0;u<=s;++u){if(u===s){if(a>s){if(47/*/*/===t.charCodeAt(i+u))// For example: from='/foo/bar'; to='/foo/bar/baz'
return t.slice(i+u+1);if(0===u)// For example: from='/'; to='/foo'
return t.slice(i+u)}else o>s&&(47/*/*/===e.charCodeAt(r+u)?// For example: from='/foo/bar/baz'; to='/foo/bar'
l=u:0===u&&// For example: from='/foo'; to='/'
(l=0));break}var c=e.charCodeAt(r+u);if(c!==t.charCodeAt(i+u))break;47/*/*/===c&&(l=u)}var f="";// Generate the relative path based on the path difference between `to`
// and `from`
for(u=r+l+1;u<=n;++u)(u===n||47/*/*/===e.charCodeAt(u))&&(0===f.length?f+="..":f+="/..");return(// Lastly, append the rest of the destination (`to`) path that comes after
// the common path parts
f.length>0?f+t.slice(i+l):(i+=l,47/*/*/===t.charCodeAt(i)&&++i,t.slice(i)))},_makeLong:function(e){return e},dirname:function(e){if(l$(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47/*/*/===t,n=-1,o=!0,i=e.length-1;i>=1;--i)if(47/*/*/===(t=e.charCodeAt(i))){if(!o){n=i;break}}else o=!1;return -1===n?r?"/":".":r&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');l$(e);var r,n=0,o=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,s=-1;for(r=e.length-1;r>=0;--r){var l=e.charCodeAt(r);if(47/*/*/===l){if(!i){n=r+1;break}}else -1===s&&(// We saw the first non-path separator, remember this index in case
// we need it if the extension ends up not matching
i=!1,s=r+1),a>=0&&(l===t.charCodeAt(a)?-1==--a&&// component
(o=r):(// Extension does not match, so our result is the entire path
// component
a=-1,o=s))}return n===o?o=s:-1===o&&(o=e.length),e.slice(n,o)}for(r=e.length-1;r>=0;--r)if(47/*/*/===e.charCodeAt(r)){if(!i){n=r+1;break}}else -1===o&&(// We saw the first non-path separator, mark this as the end of our
// path component
i=!1,o=r+1);return -1===o?"":e.slice(n,o)},extname:function(e){l$(e);for(var t=-1,r=0,n=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47/*/*/===s){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now
if(!o){r=a+1;break}continue}-1===n&&(// We saw the first non-path separator, mark this as the end of our
// extension
o=!1,n=a+1),46/*.*/===s?-1===t?t=a:1!==i&&(i=1):-1!==t&&// have a good chance at having a non-empty extension
(i=-1)}return -1===t||-1===n||// We saw a non-dot character immediately before the dot
0===i||// The (right-most) trimmed path component is exactly '..'
1===i&&t===n-1&&t===r+1?"":e.slice(t,n)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){l$(e);var t,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n=e.charCodeAt(0),o=47/*/*/===n;o?(r.root="/",t=1):t=0;// Get non-dir info
for(var i=-1,a=0,s=-1,l=!0,u=e.length-1,c=0;u>=t;--u){if(47/*/*/===(n=e.charCodeAt(u))){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now
if(!l){a=u+1;break}continue}-1===s&&(// We saw the first non-path separator, mark this as the end of our
// extension
l=!1,s=u+1),46/*.*/===n?-1===i?i=u:1!==c&&(c=1):-1!==i&&// have a good chance at having a non-empty extension
(c=-1)}return -1===i||-1===s||// We saw a non-dot character immediately before the dot
0===c||// The (right-most) trimmed path component is exactly '..'
1===c&&i===s-1&&i===a+1?-1!==s&&(0===a&&o?r.base=r.name=e.slice(1,s):r.base=r.name=e.slice(a,s)):(0===a&&o?(r.name=e.slice(1,i),r.base=e.slice(1,s)):(r.name=e.slice(a,i),r.base=e.slice(a,s)),r.ext=e.slice(i,s)),a>0?r.dir=e.slice(0,a-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};lG.posix=lG,lj=lG;var lq=X("ksOMs"),lH=X("lryJ3"),lW=X("lbKz8"),lX=X("iFSYq"),lK={};function lY(){return[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]]}function lZ(e,t){e[0][0]=t[0][0],e[0][1]=t[0][1],e[0][2]=t[0][2],e[1][0]=t[1][0],e[1][1]=t[1][1],e[1][2]=t[1][2]}function lJ(e){return e[0][0]>e[1][0]||e[0][1]>e[1][1]||e[0][2]>e[1][2]}lK={create:lY,set:lZ,copy:function(e){var t=lY();return lZ(t,e),t},fromPoints:function(e){for(var t=lY(),r=t[0],n=t[1],o=0,i=e.length;o<i;o++){var a=e[o];r[0]=Math.min(r[0],a[0]),r[1]=Math.min(r[1],a[1]),r[2]=Math.min(r[2],a[2]),n[0]=Math.max(n[0],a[0]),n[1]=Math.max(n[1],a[1]),n[2]=Math.max(n[2],a[2])}return t},center:function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=(e[0][0]+e[1][0])/2,t[1]=(e[0][1]+e[1][1])/2,t[2]=(e[0][2]+e[1][2])/2,t},size:function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=Math.abs(e[1][0]-e[0][0]),t[1]=Math.abs(e[1][1]-e[0][1]),t[2]=Math.abs(e[1][2]-e[0][2]),t},isEmpty:lJ,includeAABB:function(e,t){return lJ(e)?lZ(e,t):lJ(t)||(e[0][0]=Math.min(e[0][0],t[0][0]),e[0][1]=Math.min(e[0][1],t[0][1]),e[0][2]=Math.min(e[0][2],t[0][2]),e[1][0]=Math.max(e[1][0],t[1][0]),e[1][1]=Math.max(e[1][1],t[1][1]),e[1][2]=Math.max(e[1][2],t[1][2])),e},includePoint:function(e,t){return e[0][0]=Math.min(e[0][0],t[0]),e[0][1]=Math.min(e[0][1],t[1]),e[0][2]=Math.min(e[0][2],t[2]),e[1][0]=Math.max(e[1][0],t[0]),e[1][1]=Math.max(e[1][1],t[1]),e[1][2]=Math.max(e[1][2],t[2]),e}};var lQ={};let l1=null,l0=null;function l2(e){return e<10?"  "+e:e<100?" "+e:e}function l3(e){return function(t){return t[e]}}function l9(e,t){return t.reduce((t,r)=>{var n=e(r);return t[n]||(t[n]=[]),t[n].push(r),t},{})}lQ=function(e,t){let r=e.gl;s8&&!l1&&((l1=document.createElement("canvas")).id="pex-renderer-profiler",l1.width=500,l1.height=1720,e.gl.canvas.parentElement.appendChild(l1),l1.style.position="absolute",l1.style.width="250px",l1.style.height="860px",l1.style.top="10px",l1.style.right="10px",l1.style.zIndex=1e3,l0=l1.getContext("2d"));let n={canvas:l1,frame:0,flush:!0,measurements:{},commands:[],ctx2d:l0,bufferCount:0,totalBufferCount:0,textureCount:0,totalTextureCount:0,programCount:0,totalProgramCount:0,framebufferCount:0,totalFramebufferCount:0,bindTextureCount:0,useProgramCount:0,setUniformCount:0,trianglesCount:0,drawElementsCount:0,drawElementsInstancedCount:0,drawArraysCount:0,drawArraysInstancedCount:0,linesCount:0,time:function(t,n){this.flush&&r.finish(),this.flush&&r.flush();let o=this.measurements[t];!o&&(o=this.measurements[t]={begin:0,end:0,last:0,total:0,count:0,avg:0,max:0},n&&(o.query=e.query())),this.measurements[t].start=window.performance?window.performance.now():Date.now(),o.query&&o.query.result&&(o.gpu=o.query.result/1e6),o.query&&e.beginQuery(o.query)},timeEnd:function(t){this.flush&&r.finish(),this.flush&&r.flush();let n=this.measurements[t];n&&(n.end=window.performance?window.performance.now():Date.now(),n.last=n.end-n.start,n.total+=n.last,n.max=Math.max(n.max,n.last),n.count++,n.avg=(9*n.avg+1*n.last)/10,n.query&&e.endQuery(n.query))},add:function(e,t){let r=null;try{throw Error("Call stack capture")}catch(e){r=e.stack}this.commands.push({command:e,stack:r,label:t})},setFlush:function(e){this.flush=e},summary:function(){var e=[];let r=this.measurements.Frame;r&&e.push(`FPS: ${(1e3/r.avg).toFixed(3)}`);let o=this.measurements.FrameRAF;o&&e.push(`FPS (RAF): ${(1e3/o.avg).toFixed(3)}`),e.push("------"),e=e.concat(Object.keys(this.measurements).sort((e,t)=>this.measurements[e].start-this.measurements[t].start).map(e=>{var t,r;let n=this.measurements[e];return`${e}: ${r=""+(t=Math.floor(10*n.avg)/10),t%1==0&&(r+=".0"),t<10&&(r=" "+r),r+""} ${n.gpu?" / "+(Math.floor(10*n.gpu)/10).toFixed(1):""}`}));var i=t._ctx,a=i.resources.filter(e=>"texture"===e.class),s=0,l=l9(l3("pixelFormat"),a.filter(e=>e.target===i.gl.TEXTURE_2D)),u=l9(l3("pixelFormat"),a.filter(e=>e.target===i.gl.TEXTURE_CUBE_MAP));return a.forEach(e=>{var t=8;e.pixelFormat===i.PixelFormat.RGBA32F&&(t=32),e.pixelFormat===i.PixelFormat.RGBA16F&&(t=16),e.pixelFormat===i.PixelFormat.Depth&&(t=24// estimate
);var r=t/8*4;e.target===i.gl.TEXTURE_2D?s+=e.width*e.height*r:e.target===i.gl.TEXTURE_CUBE_MAP&&(s+=e.width*e.height*r*6)}),e.push("------"),e.push(`Entities: ${l2(t.entities.length)}`),e.push(`Geometries: ${l2(t.getComponents("Geometry").length)}`),e.push(`Materials: ${l2(t.getComponents("Material").length)}`),e.push(`Skins: ${l2(t.getComponents("Skin").length)}`),e.push(`Animations: ${l2(t.getComponents("Animation").length)}`),e.push(`Morphs: ${l2(t.getComponents("Morph").length)}`),e.push(`Cameras: ${l2(t.getComponents("Camera").length)}`),e.push(`Orbiters: ${l2(t.getComponents("Orbiter").length)}`),e.push(`Reflection Probes: ${l2(t.getComponents("ReflectionProbe").length)}`),e.push(`Skyboxes: ${l2(t.getComponents("Skybox").length)}`),e.push(`Ambient Lights: ${l2(t.getComponents("AmbientLight").length)}`),e.push(`Point Lights: ${l2(t.getComponents("PointLight").length)}`),e.push(`Directional Lights: ${l2(t.getComponents("DirectionalLight").length)}`),e.push(`Spot Lights: ${l2(t.getComponents("SpotLight").length)}`),e.push(`Area Lights: ${l2(t.getComponents("AreaLight").length)}`),e.push("------"),e.push(`Programs: ${l2(t._ctx.resources.filter(e=>"program"===e.class).length)}`),e.push(`Passes: ${l2(t._ctx.resources.filter(e=>"pass"===e.class).length)}`),e.push(`Pipelines: ${l2(t._ctx.resources.filter(e=>"pipeline"===e.class).length)}`),e.push(`Textures 2D: ${l2(t._ctx.resources.filter(e=>"texture"===e.class&&e.target===i.gl.TEXTURE_2D).length)}`),Object.keys(l).forEach(t=>{e.push(`${t.toUpperCase()}: ${l2(l[t].length)}`)}),e.push(`Textures Cube: ${l2(t._ctx.resources.filter(e=>"texture"===e.class&&e.target===i.gl.TEXTURE_CUBE_MAP).length)}`),Object.keys(u).forEach(t=>{e.push(`${t.toUpperCase()}: ${l2(u[t].length)}`)}),e.push(`Texture VRAM: ${(s/1048576).toFixed(0)}MB`),e.push("------"),e.push(`Buffers: ${l2(n.bufferCount)} / ${l2(n.totalBufferCount)}`),e.push(`Textures: ${l2(n.textureCount)} / ${l2(n.totalTextureCount)}`),e.push(`Programs: ${l2(n.programCount)} / ${l2(n.totalProgramCount)}`),e.push(`FBOs: ${l2(n.framebufferCount)} / ${l2(n.totalFramebufferCount)}`),e.push("------"),e.push(`Lines: ${n.linesCount}`),e.push(`Triangles: ${n.trianglesCount}`),e.push(`Instanced Lines: ${n.instancedLinesCount}`),e.push(`Instanced Triangles: ${n.instancedTrianglesCount}`),e.push("------"),e.push(`Bind Texture: ${l2(n.bindTextureCount)}`),e.push(`Use Program: ${l2(n.useProgramCount)}`),e.push(`Set Uniform: ${l2(n.setUniformCount)}`),e.push(`Draw Elements : ${l2(n.drawElementsCount)}`),e.push(`Instanced Draw Elements: ${l2(n.drawElementsInstancedCount)}`),e.push(`Draw Arrays : ${l2(n.drawArraysCount)}`),e.push(`Instanced Draw Arrays: ${l2(n.drawArraysInstancedCount)}`),e.push("------"),e=e.concat(this.commands.map(e=>`${e.label}: N/A`))},setEnabled:function(e){s8&&(l1.style.display=e?"block":"none")},startFrame:function(){this.timeEnd("FrameRAF"),this.time("FrameRAF"),this.time("Frame"),n.bindTextureCount=0,n.useProgramCount=0,n.setUniformCount=0,n.linesCount=0,n.trianglesCount=0,n.instancedLinesCount=0,n.instancedTrianglesCount=0,n.drawElementsCount=0,n.drawElementsInstancedCount=0,n.drawArraysCount=0,n.drawArraysInstancedCount=0},endFrame:function(){this.timeEnd("Frame"),function(){if(n.frame++,!l0){n.frame%30==0&&console.log("profiler",n.summary());return}let e=n.summary();l0.save(),l0.scale(2,2),l0.fillStyle="rgba(0, 0, 0, 0.5)",l0.clearRect(0,0,l1.width,l1.height),l0.fillRect(0,0,l1.width,l1.height),l0.font="11px Droid Sans Mono, Andale Mono, monospace",l0.fillStyle="#FFF",e.forEach((e,t)=>{let r=l0.measureText(e).width;l0.fillText(e,240-r,21+16*t)}),l0.restore()}()}};// function wrapRes (fn, counter) {
// const ctxFn = ctx[fn]
// ctx[fn] = function () {
// profiler[counter]++
// return ctxFn.apply(this, arguments)
// }
// }
// TODO:
// pipelines, passes, etc
// wrapRes('vertexBuffer', 'bufferCount')
// wrapRes('elementsBuffer', 'elementsCount')
// wrapRes('texture2D', 'text')
// wrapRes('cube', 'totalTextureCubeCount')
// wrapRes('framebuffer', 'totalFramebufferCount')
function o(e,t){let n=r[e];r[e]=function(){return t(arguments),n.apply(this,arguments)}}for(let e in // TODO
o("createBuffer",()=>{n.bufferCount++,n.totalBufferCount++}),o("deleteBuffer",()=>{n.bufferCount--}),o("createProgram",()=>{n.programCount++,n.totalProgramCount++}),o("deleteProgram",()=>{n.programCount--}),o("createTexture",()=>{n.textureCount++,n.totalTextureCount++}),o("deleteTexture",()=>{n.textureCount--}),o("createFramebuffer",()=>{n.framebufferCount++,n.totalFramebufferCount++}),o("deleteFramebuffer",()=>{n.framebufferCount--}),o("bindTexture",()=>n.bindTextureCount++),o("useProgram",()=>n.useProgramCount++),o("drawElements",e=>{let t=e[0],o=e[1];t===r.LINES&&(n.linesCount+=o),t===r.TRIANGLES&&(n.trianglesCount+=o),n.drawElementsCount++}),o("drawArrays",e=>{let t=e[0],o=e[2];t===r.LINES&&(n.linesCount+=o),t===r.TRIANGLES&&(n.trianglesCount+=o),n.drawArraysCount++}),r)0===e.indexOf("uniform")&&o(e,()=>n.setUniformCount++);return(// TODO: what about webgl2?
o("drawElementsInstanced",e=>{let t=e[0],o=e[1],i=e[4];t===r.LINES&&(n.instancedLinesCount+=o*i// assuming divisor 1
),t===r.TRIANGLES&&(n.instancedTrianglesCount+=o*i// assuming divisor 1
),n.drawElementsInstancedCount++}),o("drawArraysInstanced",e=>{let t=e[0],o=e[2],i=e[3];t===r.LINES&&(n.instancedLinesCount+=o*i// assuming divisor 1
),t===r.TRIANGLES&&(n.instancedTrianglesCount+=o*i// assuming divisor 1
),n.drawArraysInstancedCount++}),n)};var l4={},l5={},l6={};!/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false *//*global define:false, require:false, exports:false, module:false, signals:false *//** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */function(e){// SignalBinding -------------------------------------------------
//================================================================
/**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name SignalBinding
     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
     * @param {Function} listener Handler function bound to the signal.
     * @param {boolean} isOnce If binding should be executed just once.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. (default = 0).
     */function t(e,t,r,n,o){/**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */this._listener=t,/**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */this._isOnce=r,/**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */this.context=n,/**
         * Reference to Signal object that listener is currently bound to.
         * @type Signal
         * @private
         */this._signal=e,/**
         * Listener priority
         * @type Number
         * @private
         */this._priority=o||0}/*global SignalBinding:false*/// Signal --------------------------------------------------------
//================================================================
function r(e,t){if("function"!=typeof e)throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",t))}/**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @name Signal
     * @author Miller Medeiros
     * @constructor
     */function n(){/**
         * @type Array.<SignalBinding>
         * @private
         */this._bindings=[],this._prevParams=null;// enforce dispatch to aways work on same context (#47)
var e=this;this.dispatch=function(){n.prototype.dispatch.apply(e,arguments)}}t.prototype={/**
         * If binding is active and should be executed.
         * @type boolean
         */active:!0,/**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */params:null,/**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */execute:function(e){var t,r;return this.active&&this._listener&&(r=this.params?this.params.concat(e):e,t=this._listener.apply(this.context,r),this._isOnce&&this.detach()),t},/**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},/**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */isBound:function(){return!!this._signal&&!!this._listener},/**
         * @return {boolean} If SignalBinding will only be executed once.
         */isOnce:function(){return this._isOnce},/**
         * @return {Function} Handler function bound to the signal.
         */getListener:function(){return this._listener},/**
         * @return {Signal} Signal that listener is currently bound to.
         */getSignal:function(){return this._signal},/**
         * Delete instance properties
         * @private
         */_destroy:function(){delete this._signal,delete this._listener,delete this.context},/**
         * @return {string} String representation of the object.
         */toString:function(){return"[SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"}},n.prototype={/**
         * Signals Version Number
         * @type String
         * @const
         */VERSION:"1.0.0",/**
         * If Signal should keep record of previously dispatched parameters and
         * automatically execute listener during `add()`/`addOnce()` if Signal was
         * already dispatched before.
         * @type boolean
         */memorize:!1,/**
         * @type boolean
         * @private
         */_shouldPropagate:!0,/**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */active:!0,/**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [listenerContext]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */_registerListener:function(e,r,n,o){var i,a=this._indexOfListener(e,n);if(-1!==a){if((i=this._bindings[a]).isOnce()!==r)throw Error("You cannot add"+(r?"":"Once")+"() then add"+(r?"Once":"")+"() the same listener without removing the relationship first.")}else i=new t(this,e,r,n,o),this._addBinding(i);return this.memorize&&this._prevParams&&i.execute(this._prevParams),i},/**
         * @param {SignalBinding} binding
         * @private
         */_addBinding:function(e){//simplified insertion sort
var t=this._bindings.length;do--t;while(this._bindings[t]&&e._priority<=this._bindings[t]._priority)this._bindings.splice(t+1,0,e)},/**
         * @param {Function} listener
         * @return {number}
         * @private
         */_indexOfListener:function(e,t){for(var r,n=this._bindings.length;n--;)if((r=this._bindings[n])._listener===e&&r.context===t)return n;return -1},/**
         * Check if listener was attached to Signal.
         * @param {Function} listener
         * @param {Object} [context]
         * @return {boolean} if Signal has the specified listener.
         */has:function(e,t){return -1!==this._indexOfListener(e,t)},/**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */add:function(e,t,n){return r(e,"add"),this._registerListener(e,!1,t,n)},/**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */addOnce:function(e,t,n){return r(e,"addOnce"),this._registerListener(e,!0,t,n)},/**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */remove:function(e,t){r(e,"remove");var n=this._indexOfListener(e,t);return -1!==n&&(this._bindings[n]._destroy(),this._bindings.splice(n,1)),e},/**
         * Remove all listeners from the Signal.
         */removeAll:function(){for(var e=this._bindings.length;e--;)this._bindings[e]._destroy();this._bindings.length=0},/**
         * @return {number} Number of listeners attached to the Signal.
         */getNumListeners:function(){return this._bindings.length},/**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see Signal.prototype.disable
         */halt:function(){this._shouldPropagate=!1},/**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params] Parameters that should be passed to each handler.
         */dispatch:function(e){if(this.active){var t,r=Array.prototype.slice.call(arguments),n=this._bindings.length;if(this.memorize&&(this._prevParams=r),n){t=this._bindings.slice(),this._shouldPropagate=!0;//execute all callbacks until end of the list or until a callback returns `false` or stops propagation
//reverse loop since listeners with higher priority will be added at the end of the list
do n--;while(t[n]&&this._shouldPropagate&&!1!==t[n].execute(r))}}},/**
         * Forget memorized arguments.
         * @see Signal.memorize
         */forget:function(){this._prevParams=null},/**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */dispose:function(){this.removeAll(),delete this._bindings,delete this._prevParams},/**
         * @return {string} String representation of the object.
         */toString:function(){return"[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}},/**
     * Custom event broadcaster
     * @see Signal
     */// alias for backwards compatibility (see #gh-44)
n.Signal=n,"function"==typeof define&&define.amd?define(function(){return n}):l6?l6=n:/*jslint sub:true */e.signals=n}(l6);var lq=X("ksOMs"),lH=X("lryJ3"),lX=X("iFSYq");function l8(e,t,r,n,o){return e[0]=t,e[1]=r,e[2]=n,e[3]=o,e}// TODO remove, should in AABB
function l7(e){e[0][0]=1/0,e[0][1]=1/0,e[0][2]=1/0,e[1][0]=-1/0,e[1][1]=-1/0,e[1][2]=-1/0}var ue=lX.create();function ut(e){this.type="Transform",this.enabled=!0,this.changed=new l6,this.entity=null,this.position=[0,0,0],this.worldPosition=[0,0,0],this.rotation=[0,0,0,1],this.scale=[1,1,1],this.parent=null,this.children=[],// bounds of this node and it's children
this.bounds=lK.create(),this._boundsPoints=Array(8).fill(0).map(()=>lH.create()),// bounds of this node and it's children in the world space
this.worldBounds=lK.create(),this.localModelMatrix=lX.create(),this.modelMatrix=lX.create(),this.geometry=null,this.set(e)}ut.prototype.init=function(e){this.entity=e},ut.prototype.set=function(e){void 0!==e.parent&&(this.parent&&this.parent.children.splice(this.parent.children.indexOf(this),1),e.parent&&e.parent.children.push(this)),Object.assign(this,e),Object.keys(e).forEach(e=>this.changed.dispatch(e))},ut.prototype.update=function(){lX.identity(this.localModelMatrix),lX.translate(this.localModelMatrix,this.position),e=this.localModelMatrix,t=this.rotation,lX.fromQuat(ue,t),lX.mult(e,ue),lX.scale(this.localModelMatrix,this.scale),this.matrix&&lX.mult(this.localModelMatrix,this.matrix),lX.identity(this.modelMatrix);for(var e,t,r=[],n=this;n;)r.unshift(n)// TODO: GC
,n=n.parent;r.forEach(e=>{// TODO: forEach
lX.mult(this.modelMatrix,e.localModelMatrix)}),l7(this.bounds);let o=this.entity.getComponent("Geometry");o&&lK.set(this.bounds,o.bounds)},ut.prototype.afterUpdate=function(){if(l7(this.worldBounds),!lK.isEmpty(this.bounds)){var e,t;e=this._boundsPoints,t=this.bounds,l8(e[0],t[0][0],t[0][1],t[0][2],1),l8(e[1],t[1][0],t[0][1],t[0][2],1),l8(e[2],t[1][0],t[0][1],t[1][2],1),l8(e[3],t[0][0],t[0][1],t[1][2],1),l8(e[4],t[0][0],t[1][1],t[0][2],1),l8(e[5],t[1][0],t[1][1],t[0][2],1),l8(e[6],t[1][0],t[1][1],t[1][2],1),l8(e[7],t[0][0],t[1][1],t[1][2],1);for(var r=0;r<this._boundsPoints.length;r++)lq.multMat4(this._boundsPoints[r],this.modelMatrix);!function(e,t){for(var r=e[0],n=e[1],o=0,i=t.length;o<i;o++){var a=t[o];r[0]=Math.min(r[0],a[0]),r[1]=Math.min(r[1],a[1]),r[2]=Math.min(r[2],a[2]),n[0]=Math.max(n[0],a[0]),n[1]=Math.max(n[1],a[1]),n[2]=Math.max(n[2],a[2])}}(this.worldBounds,this._boundsPoints)}this.children.forEach(e=>{lK.isEmpty(e.worldBounds)||lK.includeAABB(this.worldBounds,e.worldBounds)}),lq.scale(this.worldPosition,0),lq.multMat4(this.worldPosition,this.modelMatrix)},l5=function(e){return new ut(e)};var s6=X("1vV4g");let ur=0;function un(e,t,r){s6(!t||Array.isArray(t),"Entity tags must be an array or null"),this.id=ur++,this.tags=t||[],this.renderer=r,this.components=e?e.slice(0):[],this.componentsMap=new Map,this.components.forEach(e=>{this.componentsMap.set(e.type,e)}),this.transform=this.getComponent("Transform"),this.transform||(this.transform=l5({parent:null}),this.addComponent(this.transform)),this.components.forEach(e=>e.init(this))}un.prototype.dispose=function(){this.components.forEach(e=>{e.dispose&&e.dispose()}),// detach from the hierarchy
this.transform.set({parent:null})},un.prototype.addComponent=function(e){this.components.push(e),this.componentsMap.set(e.type,e),e.init(this)},un.prototype.removeComponent=function(e){var t=this.components.indexOf(e);s6(-1!==t,"Removing component that doesn't belong to this entity"),this.components.splice(t,1),this.componentsMap.delete(e.type),this.components.forEach(t=>{t.type===e.type&&this.componentsMap.set(t.type,t)})},// Only the last added component of that type will be returned
un.prototype.getComponent=function(e){return this.componentsMap.get(e)},l4=function(e,t,r){return new un(e,t,r)};var uo={},lX=X("iFSYq");function ui(e){this.type="Skin",this.enabled=!0,this.changed=new l6,this.entity=null,this.joints=[],this.jointMatrices=[],this.inverseBindMatrices=[],this.set(e)}ui.prototype.init=function(e){this.entity=e},ui.prototype.set=function(e){if(Object.assign(this,e),Object.keys(e).forEach(e=>this.changed.dispatch(e)),e.joints){this.jointMatrices.length=this.joints.length;for(let e=0;e<this.joints.length;e++)this.jointMatrices[e]=this.jointMatrices[e]||lX.create()}},ui.prototype.update=function(){if(this.enabled)for(let e=0;e<this.joints.length;e++){let t=this.joints[e],r=this.jointMatrices[e];lX.identity(r),lX.mult(r,t.transform.modelMatrix),lX.mult(r,this.inverseBindMatrices[e])}},uo=function(e){return new ui(e)};var ua={};function us(e){this.type="Morph",this.enabled=!0,this.changed=new l6,this.entity=null,this.dirty=!1,this.sources=e.sources,this.current=e.current,this.targets=e.targets,this.weights=e.weights||[],this.set(e)}us.prototype.init=function(e){this.entity=e,this.current=this.current||Object.keys(this.sources).reduce((e,t)=>(e[t]=[...this.sources[t]],e),{})},us.prototype.set=function(e){Object.assign(this,e),Object.keys(e).forEach(e=>this.changed.dispatch(e)),this.dirty=!0},us.prototype.update=function(){this.dirty&&this.enabled&&(this.dirty=!1,Object.keys(this.sources).forEach(e=>{let t=this.sources[e],r=this.targets[e];this.current[e]=t.map((e,t)=>{let n=e.length?[0,0,0]:0;return r.forEach((r,o)=>{let i=this.weights[o],a=r[t];e.length?(n[0]+=a[0]*i,n[1]+=a[1]*i,n[2]+=a[2]*i):n+=a*i}),e.length?(n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]):n+=e,n})}),this.entity.getComponent("Geometry").set(this.current))},ua=function(e){return new us(e)};var ul={},uu=X("iGt5r"),lq=X("ksOMs"),lH=X("lryJ3"),uc=X("i4aBd");let uf=lq.create(),ud=uu.create();// Assumptions:
// - all channels have the same time length
// - animation channels can reference other entities
// - currently all animations track time by themselves
function up(e){this.type="Animation",this.entity=null,this.enabled=!0,this.playing=!1,this.loop=!1,this.time=0// seconds
,this.prevTime=Date.now()// ms
,this.channels=e.channels||[],this.changed=new l6,this.needsUpdate=!0,this.set(e)}up.prototype.init=function(e){this.entity=e},up.prototype.set=function(e){Object.assign(this,e),Object.keys(e).forEach(e=>this.changed.dispatch(e)),(e.autoplay||e.playing)&&(this.playing=!0,// reset timer to avoid jumps
this.time=0,this.prevTime=Date.now()),this.needsUpdate=!0},up.prototype.update=function(){if(this.enabled){if(this.playing){let e=this.channels[0].input[this.channels[0].input.length-1],t=Date.now(),r=(t-this.prevTime)/1e3;this.prevTime=t,this.time+=r,this.time>e&&(this.loop?this.time%=e:(this.time=0,this.set({playing:!1}))),this.needsUpdate=!0}if(this.needsUpdate){this.needsUpdate=!1;for(let e=0;e<this.channels.length;e++){let t,r;let n=this.channels[e],o=n.input;for(let e=0;e<o.length&&(r=e,!(o[e]>=this.time));e++)t=r;let i="rotation"===n.path,a=n.output,s=o[t],l=o[r],u=l-s,c=(this.time-s)/u;if(void 0!==t){switch(n.interpolation){case"STEP":i?uu.set(ud,a[t]):lq.set(uf,a[t]);break;case"CUBICSPLINE":{let e=i?lH:lq,n=c*c,s=n*c,l=e.copy(a[3*t+1]),f=e.copy(a[3*r+1]),d=t?e.scale(e.copy(a[3*t+2]),u):e.create(),p=r!==o.length-1?e.scale(e.copy(a[3*t]),u):e.create(),h=e.scale(l,2*s-3*n+1),m=e.scale(d,s-2*n+c),g=e.scale(f,-2*s+3*n),v=e.scale(p,s-n);i?uu.set(ud,uu.normalize([h[0]+m[0]+g[0]+v[0],h[1]+m[1]+g[1]+v[1],h[2]+m[2]+g[2]+v[2],h[3]+m[3]+g[3]+v[3]])):lq.set(uf,lq.add(lq.add(lq.add(h,m),g),v));break}default:// LINEAR
i?uu.slerp(uu.set(ud,a[t]),a[r],c):lq.set(uf,a[r].map((e,r)=>uc.lerp(a[t][r],e,c)))}i?n.target.transform.set({rotation:uu.copy(ud)}):"translation"===n.path?n.target.transform.set({position:lq.copy(uf)}):"scale"===n.path?n.target.transform.set({scale:lq.copy(uf)}):"weights"===n.path&&n.target.getComponent("Morph").set({weights:a[r].slice()})}}}}},ul=function(e){return new up(e)};var uh={};let um={positions:"aPosition",normals:"aNormal",tangents:"aTangent",texCoords:"aTexCoord0",texCoords1:"aTexCoord1",uvs:"aTexCoord0",uvs2:"aTexCoord1",vertexColors:"aVertexColor",offsets:"aOffset",scales:"aScale",rotations:"aRotation",colors:"aColor",joints:"aJoint",weights:"aWeight"},ug={indices:"indices",cells:"indices"};function uv(e){this.type="Geometry",this.enabled=!0,this.changed=new l6,this.bounds=lK.create(),this.primitive=e.ctx.Primitive.Triangles,this.count=void 0,this._indices=null,this._attributes={},this.set(e)}uv.prototype.init=function(e){this.entity=e},uv.prototype.set=function(e){let t=e.ctx||this.ctx;for(let r in // This is a bit messy because indices will could ovewrite this.indices
// so we have to use this._indices internally
Object.assign(this,e),e){let n=e[r];if(um[r]){let o=um[r],i=this._attributes[o];i||(i=this._attributes[o]={buffer:null,offset:0,stride:0,divisor:0,type:void 0});let a=void 0!==n.length?n:n.data;if(a?(i.buffer?t.update(i.buffer,{data:a,type:n.type||i.type,offset:i.offset||0}):i.buffer=t.vertexBuffer({data:a,type:n.type||i.type}),"aPosition"===o&&a[0].length&&(this.bounds=e.bounds||lK.fromPoints(a))):n.buffer&&// TODO: should we delete previous buffer?
(i.buffer=n.buffer),// Update attrib data type from buffer
// It will be either re-used from val.type or attrib.type
// or guessed from the typed array
i.type=n.type||i.buffer.type,void 0!==n.offset&&(i.offset=n.offset),void 0!==n.stride&&(i.stride=n.stride),void 0!==n.divisor&&(i.divisor=n.divisor),!i.type)throw Error(`Unknown ${o} attrib type`)}}for(let r in e){if(ug[r]){// TODO: this is just a guestimate, we should probably push creating flat uint32 array to the user space
// const numPositions = this._attributes['aPosition'].count
let n=e[r],o=this._indices;o||(o=this._indices={buffer:null,offset:0,type:void 0});let i=void 0!==n.length?n:n.data;if(i?o.buffer?t.update(o.buffer,{data:i,type:n.type||o.type}):o.buffer=t.indexBuffer({data:i,type:n.type||o.type}):n.buffer&&(o.buffer=n.buffer),void 0!==n.offset&&(o.offset=n.offset),void 0!==n.count&&(o.count=n.count),o.type=n.type||o.buffer.type,!o.type)throw Error("Unknown indices type")}this.changed.dispatch(r)}},uh=function(e){return new uv(e)};var uy={},ub={},ux=(ub={mat2x3:X("eZuFQ"),mat3:X("lbKz8"),mat4:X("iFSYq"),vec2:X("bUOQo"),vec3:X("ksOMs"),vec4:X("lryJ3"),quat:X("iGt5r"),euler:X("kjPYl"),utils:X("i4aBd")}).mat3,uw=ub.mat2x3;let uS=0,u_=uw.create(),uE=["baseColorMap","emissiveColorMap","matallicMap","roughnessMap","metallicRoughnessMap","normalMap","clearCoatNormalMap","occlusionMap","diffuseMap","specularGlossinessMap"],uA=["depthTest","depthWrite","depthFunc","blend","blendSrcRGBFactor","blendSrcAlphaFactor","blendDstRGBFactor","blendDstAlphaFactor","cullFace","cullFaceMode"];function uM(e){this.type="Material",this.id="Material_"+uS++,this.enabled=!0,this.changed=new l6,this._uniforms={};let t=e.ctx;this.baseColor=[1,1,1,1],this.baseColorMap=null,this.useSpecularGlossinessWorkflow=e.useSpecularGlossinessWorkflow||!1,this.unlit=e.unlit||!1,e.useSpecularGlossinessWorkflow?(// Specular Glossiness workflow
this.diffuse=[1,1,1,1],this.diffuseMap=null,this.specular=[1,1,1],this.glossiness=1,this.specularGlossinessMap=null):this.unlit||(// Metallic Roughness workflow
this.metallic=1,this.matallicMap=null,this.roughness=1,this.roughnessMap=null,this.metallicRoughnessMap=null),this.normalMap=null,this.normalScale=1,this.displacementMap=null,this.displacement=0,this.emissiveColor=null,this.emissiveIntensity=1,this.emissiveColorMap=null,this.occlusionMap=null,this.reflectance=.5,this.clearCoat=null,this.clearCoatRoughness=null,this.clearCoatNormalMap=null,this.clearCoatNormalMapScale=1//TODO: what's clearCoatNormalMapScale
,this.alphaMap=null,this.alphaTest=void 0,// pipeline props
this.depthTest=!0,this.depthWrite=!0,this.depthFunc=t.DepthFunc.LessEqual,this.blend=!1,this.blendSrcRGBFactor=t.BlendFactor.One,this.blendSrcAlphaFactor=t.BlendFactor.One,this.blendDstRGBFactor=t.BlendFactor.One,this.blendDstAlphaFactor=t.BlendFactor.One,this.cullFace=!0,this.cullFaceMode=t.Face.Back,this.pointSize=1,this.castShadows=!1,this.receiveShadows=!1,this.needsPipelineUpdate=!1,this.set(e)}uM.prototype.init=function(e){this.entity=e},uM.prototype.set=function(e){Object.assign(this,e);let t=Object.keys(e),r=t.filter(e=>uE.includes(e));if(r.length)for(let e=0;e<r.length;e++){let t=this[r[e]];t&&t.texture&&(uw.identity(u_),uw.translate(u_,t.offset||[0,0]),uw.rotate(u_,-t.rotation||0),uw.scale(u_,t.scale||[1,1]),t.texCoordTransformMatrix=ux.fromMat2x3(t.texCoordTransformMatrix?ux.identity(t.texCoordTransformMatrix):ux.create(),u_))}for(let t of uA)void 0!==e[t]&&(this.needsPipelineUpdate=!0);t.forEach(e=>this.changed.dispatch(e))},uy=function(e){return new uM(e)};var uC={},lX=X("iFSYq"),lq=X("ksOMs");function uT(e){let t=e.ctx.gl;this.type="Camera",this.projection=e.projection||"perspective",this.enabled=!0,this.changed=new l6,this.near=.1,this.far=100,this.aspect=1,this.exposure=1,this.viewMatrix=lX.create(),this.inverseViewMatrix=lX.create(),this.focalLength=50// mm
,this.fStop=2.8,this.sensorSize=[36,24]//mm
,this.actualSensorHeight=24//mm
,this.sensorFit="vertical","perspective"===this.projection?(this.fov=Math.PI/4,this.projectionMatrix=lX.perspective(lX.create(),this.fov,this.aspect,this.near,this.far)):"orthographic"===this.projection&&(this.left=-1,this.right=1,this.bottom=-1,this.top=1,this.zoom=1,this.projectionMatrix=lX.ortho(lX.create(),this.left,this.right,this.bottom,this.top,this.near,this.far)),this.viewport=[0,0,t.drawingBufferWidth,t.drawingBufferHeight],this.view=null,this.set(e)}uT.prototype.init=function(e){this.entity=e},uT.prototype.set=function(e){if(Object.assign(this,e),e.viewport){this.aspect=this.viewport[2]/this.viewport[3];let e=this.entity&&this.entity.getComponent("PostProcessing");e&&e.set({viewport:this.viewport,viewMatrix:this.viewMatrix})}// calculate new fov based on sensor size and focal length
if(e.sensorSize||e.sensorFit||e.focalLength||e.viewport||e.fov){let t=this.sensorSize[0],r=this.sensorSize[1],n=t/r;this.aspect>n?("horizontal"===this.sensorFit||"fill"===this.sensorFit)&&(r=t/this.aspect):("horizontal"===this.sensorFit||"overscan"===this.sensorFit)&&(r=t/this.aspect),e.fov?this.focalLength=r/2/Math.tan(this.fov/2):this.fov=2*Math.atan(r/2/this.focalLength),this.actualSensorHeight=r}if("perspective"===this.projection&&(e.aspect||e.near||e.far||e.fov||e.view||e.viewport||e.sensorSize||e.sensorFit||e.focalLength)){if(this.view){let e=this.view.totalSize[0]/this.view.totalSize[1],t=Math.tan(.5*this.fov)*this.near,r=-t,n=e*r,o=Math.abs(e*t-n),i=Math.abs(t-r),a=o/this.view.totalSize[0],s=i/this.view.totalSize[1],l=n+this.view.offset[0]*a,u=n+(this.view.offset[0]+this.view.size[0])*a,c=t-(this.view.offset[1]+this.view.size[1])*s,f=t-this.view.offset[1]*s;lX.frustum(this.projectionMatrix,l,u,c,f,this.near,this.far)}else lX.perspective(this.projectionMatrix,this.fov,this.aspect,this.near,this.far)}else if("orthographic"===this.projection&&(e.left||e.right||e.bottom||e.top||e.zoom||e.near||e.far||e.view)){let e=(this.right-this.left)/(2/this.zoom),t=(this.top-this.bottom)/(2/this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2,o=r-e,i=r+e,a=n+t,s=n-t;if(this.view){let e=1/this.zoom/(this.view.size[0]/this.view.totalSize[0]),t=1/this.zoom/(this.view.size[1]/this.view.totalSize[1]),r=(this.right-this.left)/this.view.size[0],n=(this.top-this.bottom)/this.view.size[1];o+=r*(this.view.offset[0]/e),i=o+r*(this.view.size[0]/e),a-=n*(this.view.offset[1]/t),s=a-n*(this.view.size[1]/t)}lX.ortho(this.projectionMatrix,o,i,s,a,this.near,this.far)}Object.keys(e).forEach(e=>this.changed.dispatch(e))},uT.prototype.getViewRay=function(e,t,r,n){this.view&&(e+=this.view.offset[0],t+=this.view.offset[1],r=this.view.totalSize[0],n=this.view.totalSize[1]);let o=2*e/r-1,i=1-2*t/n,a=2*Math.tan(this.fov/2)*this.near;return o*=.5*(a*this.aspect),i*=.5*a,[[0,0,0],lq.normalize([o,i,-this.near])]},uT.prototype.update=function(){lX.set(this.inverseViewMatrix,this.entity.transform.modelMatrix),lX.set(this.viewMatrix,this.entity.transform.modelMatrix),lX.invert(this.viewMatrix)},uC=function(e){return new uT(e)};var uP={},uO={};uO=X("crZsA");var lq=X("ksOMs"),lX=X("iFSYq"),uc=X("i4aBd"),uR={};uR=/* glsl */`
attribute vec2 aPosition;

varying vec2 vTexCoord0;

void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
  vTexCoord0 = vec2((aPosition + 1.0) / 2.0);
}
`;var uL={},uN={};let uD=/* glsl */`
const float PI = 3.14159265359;
`,uF=/* glsl */`
const float TWO_PI = 6.28318530718;
`,uI=/* glsl */`
#define MEDIUMP_FLT_MAX    65504.0
#define MEDIUMP_FLT_MIN    0.00006103515625

// Could be 1e-5 on Desktop
#define FLT_EPS            MEDIUMP_FLT_MIN

// Could be NOP on desktop
#define saturateMediump(x) min(x, MEDIUMP_FLT_MAX)

#define saturate(x) clamp(x, 0.0, 1.0)
`,uU=/* glsl */`
mat4 quatToMat4(vec4 q) {
  float xs = q.x + q.x;
  float ys = q.y + q.y;
  float zs = q.z + q.z;
  float wx = q.w * xs;
  float wy = q.w * ys;
  float wz = q.w * zs;
  float xx = q.x * xs;
  float xy = q.x * ys;
  float xz = q.x * zs;
  float yy = q.y * ys;
  float yz = q.y * zs;
  float zz = q.z * zs;
  return transpose(
      mat4(
          1.0 - (yy + zz), xy - wz, xz + wy, 0.0,
          xy + wz, 1.0 - (xx + zz), yz - wx, 0.0,
          xz - wy, yz + wx, 1.0 - (xx + yy), 0.0,
          0.0, 0.0, 0.0, 1.0
      )
  );
}
`,uz=/* glsl */`
mat3 transpose(mat3 m) {
  return mat3(m[0][0], m[1][0], m[2][0],
              m[0][1], m[1][1], m[2][1],
              m[0][2], m[1][2], m[2][2]);
}`,uk=/* glsl */`
mat4 transpose(mat4 m) {
  return mat4(
    m[0][0], m[1][0], m[2][0], m[3][0],
    m[0][1], m[1][1], m[2][1], m[3][1],
    m[0][2], m[1][2], m[2][2], m[3][2],
    m[0][3], m[1][3], m[2][3], m[3][3]
  );
}
`,uB=/* glsl */`
mat4 inverse(mat4 m) {
  float
      a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
      a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
      a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
      a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],

      b00 = a00 * a11 - a01 * a10,
      b01 = a00 * a12 - a02 * a10,
      b02 = a00 * a13 - a03 * a10,
      b03 = a01 * a12 - a02 * a11,
      b04 = a01 * a13 - a03 * a11,
      b05 = a02 * a13 - a03 * a12,
      b06 = a20 * a31 - a21 * a30,
      b07 = a20 * a32 - a22 * a30,
      b08 = a20 * a33 - a23 * a30,
      b09 = a21 * a32 - a22 * a31,
      b10 = a21 * a33 - a23 * a31,
      b11 = a22 * a33 - a23 * a32,

      det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  return mat4(
      a11 * b11 - a12 * b10 + a13 * b09,
      a02 * b10 - a01 * b11 - a03 * b09,
      a31 * b05 - a32 * b04 + a33 * b03,
      a22 * b04 - a21 * b05 - a23 * b03,
      a12 * b08 - a10 * b11 - a13 * b07,
      a00 * b11 - a02 * b08 + a03 * b07,
      a32 * b02 - a30 * b05 - a33 * b01,
      a20 * b05 - a22 * b02 + a23 * b01,
      a10 * b10 - a11 * b08 + a13 * b06,
      a01 * b08 - a00 * b10 - a03 * b06,
      a30 * b04 - a31 * b02 + a33 * b00,
      a21 * b02 - a20 * b04 - a23 * b00,
      a11 * b07 - a10 * b09 - a12 * b06,
      a00 * b09 - a01 * b07 + a02 * b06,
      a31 * b01 - a30 * b03 - a32 * b00,
      a20 * b03 - a21 * b01 + a22 * b00) / det;
}`;var uj={},u$={},uV={},uG={},uq={},uH={},uW={},uX={},uK={},uY={},uZ={},uJ={},uQ={},u1={},u0={},u2={},u3={},u9={},u4={},u5={},u6={},u8={},u7={},ce={},ct={},cr={},cn={},co={},ci={},ca={},cs={},cl={},cu={};uN={math:{PI:uD,TWO_PI:uF,saturate:uI,transposeMat4:uk,quatToMat4:uU,transposeMat3:uz,inverseMat4:uB},encodeDecode:/* glsl */`
#define LINEAR 1
#define GAMMA 2
#define SRGB 3
#define RGBM 4

vec4 decode(vec4 pixel, int encoding) {
  if (encoding == LINEAR) return pixel;
  if (encoding == GAMMA) return toLinear(pixel);
  if (encoding == SRGB) return toLinear(pixel);
  if (encoding == RGBM) return vec4(decodeRGBM(pixel), 1.0);
  return pixel;
}

vec4 encode(vec4 pixel, int encoding) {
  if (encoding == LINEAR) return pixel;
  if (encoding == GAMMA) return toGamma(pixel);
  if (encoding == SRGB) return toGamma(pixel);
  if (encoding == RGBM) return encodeRGBM(pixel.rgb);
  return pixel;
}
`,rgbm:/* glsl */`
#define LINEAR 1
#define GAMMA 2
#define SRGB 3
#define RGBM 4

vec3 decodeRGBM (vec4 rgbm) {
  vec3 r = rgbm.rgb * (7.0 * rgbm.a);
  return r * r;
}

vec4 encodeRGBM (vec3 rgb_0) {
  vec4 r;
  r.xyz = (1.0 / 7.0) * sqrt(rgb_0);
  r.a = max(max(r.x, r.y), r.z);
  r.a = clamp(r.a, 1.0 / 255.0, 1.0);
  r.a = ceil(r.a * 255.0) / 255.0;
  r.xyz /= r.a;
  return r;
}
`,gamma:/* glsl */`
const float gamma = 2.2;

// Linear
float toLinear(float v) {
  return pow(v, gamma);
}

vec2 toLinear(vec2 v) {
  return pow(v, vec2(gamma));
}

vec3 toLinear(vec3 v) {
  return pow(v, vec3(gamma));
}

vec4 toLinear(vec4 v) {
  return vec4(toLinear(v.rgb), v.a);
}

// Gamma
float toGamma(float v) {
  return pow(v, 1.0 / gamma);
}

vec2 toGamma(vec2 v) {
  return pow(v, vec2(1.0 / gamma));
}

vec3 toGamma(vec3 v) {
  return pow(v, vec3(1.0 / gamma));
}

vec4 toGamma(vec4 v) {
  return vec4(toGamma(v.rgb), v.a);
}
`,lightAmbient:/* glsl */`
#if NUM_AMBIENT_LIGHTS > 0

struct AmbientLight {
  vec4 color;
};

uniform AmbientLight uAmbientLights[NUM_AMBIENT_LIGHTS];

void EvaluateAmbientLight(inout PBRData data, AmbientLight light, float ao) {
  vec3 lightColor = decode(light.color, 3).rgb;
  lightColor *= light.color.a;
  data.indirectDiffuse += ao * (data.diffuseColor * lightColor);
}
#endif
`,lightDirectional:/* glsl */`
#if NUM_DIRECTIONAL_LIGHTS > 0

struct DirectionalLight {
  vec3 direction;
  vec4 color;
  mat4 projectionMatrix;
  mat4 viewMatrix;
  bool castShadows;
  float near;
  float far;
  float bias;
  vec2 shadowMapSize;
};

uniform DirectionalLight uDirectionalLights[NUM_DIRECTIONAL_LIGHTS];
uniform sampler2D uDirectionalLightShadowMaps[NUM_DIRECTIONAL_LIGHTS]; //TODO: is it ok to sample depth texture as sampler2D?

void EvaluateDirectionalLight(inout PBRData data, DirectionalLight light, sampler2D shadowMap) {
  vec4 lightViewPosition = light.viewMatrix * vec4(vPositionWorld, 1.0);
  float lightDistView = -lightViewPosition.z;
  vec4 lightDeviceCoordsPosition = light.projectionMatrix * lightViewPosition;
  vec3 lightDeviceCoordsPositionNormalized = lightDeviceCoordsPosition.xyz / lightDeviceCoordsPosition.w;
  vec2 lightUV = lightDeviceCoordsPositionNormalized.xy * 0.5 + 0.5;

  float illuminated = bool(light.castShadows) ? getShadow(shadowMap, light.shadowMapSize, lightUV, lightDistView - light.bias, light.near, light.far) : 1.0;

  if (illuminated > 0.0) {
    Light l;
    l.l = -light.direction;
    l.color = light.color;
    l.attenuation = 1.0;
    getSurfaceShading(data, l, illuminated);
  }
}
#endif
`,lightPoint:/* glsl */`
#if NUM_POINT_LIGHTS > 0

struct PointLight {
  vec3 position;
  vec4 color;
  float range;
  bool castShadows;
};

uniform PointLight uPointLights[NUM_POINT_LIGHTS];
uniform samplerCube uPointLightShadowMaps[NUM_POINT_LIGHTS];

void EvaluatePointLight(inout PBRData data, PointLight light, samplerCube shadowMap) {
  vec3 posToLight = light.position - data.positionWorld;

  float illuminated = bool(light.castShadows) ? getPunctualShadow(shadowMap, posToLight) : 1.0;

  if (illuminated > 0.0) {
    float invSqrFalloff = 1.0 / pow(light.range, 2.0);
    float attenuation = getDistanceAttenuation(posToLight, invSqrFalloff);

    Light l;
    l.l = normalize(posToLight);
    l.color = light.color;
    l.attenuation = attenuation;
    getSurfaceShading(data, l, illuminated);
  }
}
#endif
`,lightSpot:/* glsl */`
#if NUM_SPOT_LIGHTS > 0

struct SpotLight {
  vec3 position;
  vec3 direction;
  vec4 color;
  float innerAngle;
  float angle;
  float range;
  mat4 projectionMatrix;
  mat4 viewMatrix;
  bool castShadows;
  float near;
  float far;
  float bias;
  vec2 shadowMapSize;
};

uniform SpotLight uSpotLights[NUM_SPOT_LIGHTS];
uniform sampler2D uSpotLightShadowMaps[NUM_SPOT_LIGHTS];

void EvaluateSpotLight(inout PBRData data, SpotLight light, sampler2D shadowMap) {
  vec4 lightViewPosition = light.viewMatrix * vec4(vPositionWorld, 1.0); // TODO: move in the vertex shader
  float lightDistView = -lightViewPosition.z;
  vec4 lightDeviceCoordsPosition = light.projectionMatrix * lightViewPosition;
  vec3 lightDeviceCoordsPositionNormalized = lightDeviceCoordsPosition.xyz / lightDeviceCoordsPosition.w;
  vec2 lightUV = lightDeviceCoordsPositionNormalized.xy * 0.5 + 0.5;

  float illuminated = bool(light.castShadows) ? getShadow(shadowMap, light.shadowMapSize, lightUV, lightDistView - light.bias, light.near, light.far) : 1.0;

  if (illuminated > 0.0) {
    vec3 posToLight = light.position - data.positionWorld;

    float invSqrFalloff = 1.0 / pow(light.range, 2.0);
    float attenuation = getDistanceAttenuation(posToLight, invSqrFalloff);

    // TODO: luminous power to intensity
    float innerAngle = light.innerAngle;
    float cosOuter = cos(light.angle);
    float cosInner = cos(innerAngle);
    float cosOuterSquared = cosOuter * cosOuter;
    float scale = 1.0 / max(1.0 / 1024.0, cosInner - cosOuter);
    float offset = -cosOuter * scale;

    vec2 scaleOffset = vec2(scale, offset);
    attenuation *= getAngleAttenuation(-light.direction, normalize(posToLight), scaleOffset);

    Light l;
    l.l = normalize(posToLight);
    l.color = light.color;
    l.attenuation = attenuation;
    getSurfaceShading(data, l, illuminated);
  }
}
#endif
`,lightArea:/* glsl */`
#if NUM_AREA_LIGHTS > 0

struct AreaLight {
    vec3 position;
    vec2 size;
    vec4 color;
    float intensity;
    vec4 rotation;
};

uniform AreaLight uAreaLights[NUM_AREA_LIGHTS];

uniform sampler2D ltc_mat;
uniform sampler2D ltc_mag;

uniform mat4  view;

const vec2  resolution = vec2(1280.0, 720.0);

const int   sampleCount = 4;

const int   NUM_SAMPLES_3020430251 = 8;
const float LUT_SIZE_3020430251  = 64.0;
const float LUT_SCALE_3020430251 = (LUT_SIZE_3020430251 - 1.0)/LUT_SIZE_3020430251;
const float LUT_BIAS_3020430251  = 0.5/LUT_SIZE_3020430251;
const float pi_0 = 3.14159265;

// Tracing and intersection
///////////////////////////
///
///
struct Ray
{
    vec3 origin;
    vec3 dir;
};

struct Rect
{
    vec3  origin;
    vec4  plane;
    float sizex;
    float sizey;
};

bool RayPlaneIntersect(Ray ray, vec4 plane, out float t)
{
    t = -dot(plane, vec4(ray.origin, 1.0))/dot(plane.xyz, ray.dir);
    return t > 0.0;
}

bool RayRectIntersect(Ray ray, Rect rect, out float t)
{
    bool intersect = RayPlaneIntersect(ray, rect.plane, t);
    if (intersect)
    {
        vec3 pos = ray.origin + ray.dir*t;
        vec3 lpos = pos - rect.origin;
        if (abs(lpos.x) > rect.sizex || abs(lpos.y) > rect.sizey)
            intersect = false;
    }

    return intersect;
}

// Adapted from:
// https://www.shadertoy.com/view/4djSRW
float hash(float x, float y)
{
    vec2 p = vec2(x, y);
    p  = fract(p * vec2(443.8975, 397.2973));
    p += dot(p.xy, p.yx + 19.19);
    return fract(p.x + p.y);
}

//TODO: which coordinate space?
Ray GenerateCameraRay(float u1, float u2)
{
    Ray ray;

    // Random jitter within pixel for AA, huh? what jitter
    vec2 xy = 2.0*(gl_FragCoord.xy)/resolution - vec2(1.0);

    ray.dir = normalize(vec3(xy, 2.0));

    float focalDistance = 2.0;
    float ft = focalDistance/ray.dir.z;
    vec3 pFocus = ray.dir*ft;

    ray.origin = vec3(0);
    ray.dir    = normalize(pFocus - ray.origin);

    // Apply camera transform
    ray.origin = (view*vec4(ray.origin, 1)).xyz;
    ray.dir    = (view*vec4(ray.dir,    0)).xyz;

    return ray;
}

vec3 mul(mat3 m, vec3 v)
{
    return m * v;
}

mat3 mul(mat3 m1, mat3 m2)
{
    return m1 * m2;
}

int modi(int x, int y)
{
    return int(mod(float(x), float(y)));
}

mat3 transpose(mat3 v)
{
    mat3 tmp;
    tmp[0] = vec3(v[0].x, v[1].x, v[2].x);
    tmp[1] = vec3(v[0].y, v[1].y, v[2].y);
    tmp[2] = vec3(v[0].z, v[1].z, v[2].z);

    return tmp;
}

struct SphQuad
{
    vec3 o, x, y, z;
    float z0, z0sq;
    float x0, y0, y0sq;
    float x1, y1, y1sq;
    float b0, b1, b0sq, k;
    float S;
};

SphQuad SphQuadInit(vec3 s, vec3 ex, vec3 ey, vec3 o)
{
    SphQuad squad;

    squad.o = o;
    float exl = length(ex);
    float eyl = length(ey);

    // compute local reference system ’R’
    squad.x = ex / exl;
    squad.y = ey / eyl;
    squad.z = cross(squad.x, squad.y);

    // compute rectangle coords in local reference system
    vec3 d = s - o;
    squad.z0 = dot(d, squad.z);

    // flip ’z’ to make it point against ’Q’
    if (squad.z0 > 0.0)
    {
        squad.z  *= -1.0;
        squad.z0 *= -1.0;
    }

    squad.z0sq = squad.z0 * squad.z0;
    squad.x0 = dot(d, squad.x);
    squad.y0 = dot(d, squad.y);
    squad.x1 = squad.x0 + exl;
    squad.y1 = squad.y0 + eyl;
    squad.y0sq = squad.y0 * squad.y0;
    squad.y1sq = squad.y1 * squad.y1;

    // create vectors to four vertices
    vec3 v00 = vec3(squad.x0, squad.y0, squad.z0);
    vec3 v01 = vec3(squad.x0, squad.y1, squad.z0);
    vec3 v10 = vec3(squad.x1, squad.y0, squad.z0);
    vec3 v11 = vec3(squad.x1, squad.y1, squad.z0);

    // compute normals to edges
    vec3 n0 = normalize(cross(v00, v10));
    vec3 n1 = normalize(cross(v10, v11));
    vec3 n2 = normalize(cross(v11, v01));
    vec3 n3 = normalize(cross(v01, v00));

    // compute internal angles (gamma_i)
    float g0 = acos(-dot(n0, n1));
    float g1 = acos(-dot(n1, n2));
    float g2 = acos(-dot(n2, n3));
    float g3 = acos(-dot(n3, n0));

    // compute predefined constants
    squad.b0 = n0.z;
    squad.b1 = n2.z;
    squad.b0sq = squad.b0 * squad.b0;
    squad.k = 2.0*pi_0 - g2 - g3;

    // compute solid angle from internal angles
    squad.S = g0 + g1 - squad.k;

    return squad;
}

vec3 SphQuadSample(SphQuad squad, float u, float v)
{
    // 1. compute 'cu'
    float au = u * squad.S + squad.k;
    float fu = (cos(au) * squad.b0 - squad.b1) / sin(au);
    float cu = 1.0 / sqrt(fu*fu + squad.b0sq) * (fu > 0.0 ? 1.0 : -1.0);
    cu = clamp(cu, -1.0, 1.0); // avoid NaNs

    // 2. compute 'xu'
    float xu = -(cu * squad.z0) / sqrt(1.0 - cu * cu);
    xu = clamp(xu, squad.x0, squad.x1); // avoid Infs

    // 3. compute 'yv'
    float d = sqrt(xu * xu + squad.z0sq);
    float h0 = squad.y0 / sqrt(d*d + squad.y0sq);
    float h1 = squad.y1 / sqrt(d*d + squad.y1sq);
    float hv = h0 + v * (h1 - h0), hv2 = hv * hv;
    float yv = (hv2 < 1.0 - 1e-6) ? (hv * d) / sqrt(1.0 - hv2) : squad.y1;

    // 4. transform (xu, yv, z0) to world coords
    return squad.o + xu*squad.x + yv*squad.y + squad.z0*squad.z;
}

// Sample generation
////////////////////

float Halton(int index, float base)
{
    float result = 0.0;
    float f = 1.0/base;
    float i = float(index);
    for (int x = 0; x < 8; x++)
    {
        if (i <= 0.0) break;

        result += f*mod(i, base);
        i = floor(i/base);
        f = f/base;
    }

    return result;
}

void Halton2D(out vec2 s[NUM_SAMPLES_3020430251], int offset)
{
    for (int i = 0; i < NUM_SAMPLES_3020430251; i++)
    {
        s[i].x = Halton(i + offset, 2.0);
        s[i].y = Halton(i + offset, 3.0);
    }
}

// Linearly Transformed Cosines
///////////////////////////////

float IntegrateEdge(vec3 v1, vec3 v2)
{
    float cosTheta = dot(v1, v2);
    cosTheta = clamp(cosTheta, -0.9999, 0.9999);

    float theta = acos(cosTheta);
    float res = cross(v1, v2).z * theta / sin(theta);

    return res;
}

void ClipQuadToHorizon(inout vec3 L[5], out int n)
{
    // detect clipping config
    int config = 0;
    if (L[0].z > 0.0) config += 1;
    if (L[1].z > 0.0) config += 2;
    if (L[2].z > 0.0) config += 4;
    if (L[3].z > 0.0) config += 8;

    // clip
    n = 0;

    if (config == 0)
    {
        // clip all
    }
    else if (config == 1) // V1 clip V2 V3 V4
    {
        n = 3;
        L[1] = -L[1].z * L[0] + L[0].z * L[1];
        L[2] = -L[3].z * L[0] + L[0].z * L[3];
    }
    else if (config == 2) // V2 clip V1 V3 V4
    {
        n = 3;
        L[0] = -L[0].z * L[1] + L[1].z * L[0];
        L[2] = -L[2].z * L[1] + L[1].z * L[2];
    }
    else if (config == 3) // V1 V2 clip V3 V4
    {
        n = 4;
        L[2] = -L[2].z * L[1] + L[1].z * L[2];
        L[3] = -L[3].z * L[0] + L[0].z * L[3];
    }
    else if (config == 4) // V3 clip V1 V2 V4
    {
        n = 3;
        L[0] = -L[3].z * L[2] + L[2].z * L[3];
        L[1] = -L[1].z * L[2] + L[2].z * L[1];
    }
    else if (config == 5) // V1 V3 clip V2 V4) impossible
    {
        n = 0;
    }
    else if (config == 6) // V2 V3 clip V1 V4
    {
        n = 4;
        L[0] = -L[0].z * L[1] + L[1].z * L[0];
        L[3] = -L[3].z * L[2] + L[2].z * L[3];
    }
    else if (config == 7) // V1 V2 V3 clip V4
    {
        n = 5;
        L[4] = -L[3].z * L[0] + L[0].z * L[3];
        L[3] = -L[3].z * L[2] + L[2].z * L[3];
    }
    else if (config == 8) // V4 clip V1 V2 V3
    {
        n = 3;
        L[0] = -L[0].z * L[3] + L[3].z * L[0];
        L[1] = -L[2].z * L[3] + L[3].z * L[2];
        L[2] =  L[3];
    }
    else if (config == 9) // V1 V4 clip V2 V3
    {
        n = 4;
        L[1] = -L[1].z * L[0] + L[0].z * L[1];
        L[2] = -L[2].z * L[3] + L[3].z * L[2];
    }
    else if (config == 10) // V2 V4 clip V1 V3) impossible
    {
        n = 0;
    }
    else if (config == 11) // V1 V2 V4 clip V3
    {
        n = 5;
        L[4] = L[3];
        L[3] = -L[2].z * L[3] + L[3].z * L[2];
        L[2] = -L[2].z * L[1] + L[1].z * L[2];
    }
    else if (config == 12) // V3 V4 clip V1 V2
    {
        n = 4;
        L[1] = -L[1].z * L[2] + L[2].z * L[1];
        L[0] = -L[0].z * L[3] + L[3].z * L[0];
    }
    else if (config == 13) // V1 V3 V4 clip V2
    {
        n = 5;
        L[4] = L[3];
        L[3] = L[2];
        L[2] = -L[1].z * L[2] + L[2].z * L[1];
        L[1] = -L[1].z * L[0] + L[0].z * L[1];
    }
    else if (config == 14) // V2 V3 V4 clip V1
    {
        n = 5;
        L[4] = -L[0].z * L[3] + L[3].z * L[0];
        L[0] = -L[0].z * L[1] + L[1].z * L[0];
    }
    else if (config == 15) // V1 V2 V3 V4
    {
        n = 4;
    }

    if (n == 3)
        L[3] = L[0];
    if (n == 4)
        L[4] = L[0];
}

vec3 LTC_Evaluate_3020430251(
    vec3 N, vec3 V, vec3 P, mat3 Minv, vec3 points[4], bool twoSided)
{
    // construct orthonormal basis around N
    vec3 T1, T2;
    T1 = normalize(V - N*dot(V, N));
    T2 = cross(N, T1);

    // rotate area light in (T1, T2, R) basis
    Minv = Minv * transpose(mat3(T1, T2, N));

    // polygon (allocate 5 vertices for clipping)
    vec3 L[5];
    L[0] = Minv * (points[0] - P);
    L[1] = Minv * (points[1] - P);
    L[2] = Minv * (points[2] - P);
    L[3] = Minv * (points[3] - P);

    int n;
    ClipQuadToHorizon(L, n);

    if (n == 0)
        return vec3(0, 0, 0);

    // project onto sphere
    L[0] = normalize(L[0]);
    L[1] = normalize(L[1]);
    L[2] = normalize(L[2]);
    L[3] = normalize(L[3]);
    L[4] = normalize(L[4]);

    // integrate
    float sum = 0.0;

    sum += IntegrateEdge(L[0], L[1]);
    sum += IntegrateEdge(L[1], L[2]);
    sum += IntegrateEdge(L[2], L[3]);
    if (n >= 4)
        sum += IntegrateEdge(L[3], L[4]);
    if (n == 5)
        sum += IntegrateEdge(L[4], L[0]);

    sum = twoSided ? abs(sum) : max(0.0, -sum);

    vec3 Lo_i = vec3(sum, sum, sum);

    return Lo_i;
}

// Misc. helpers
////////////////

vec3 PowVec3(vec3 v, float p)
{
    return vec3(pow(v.x, p), pow(v.y, p), pow(v.z, p));
}

vec3 check(bool test) {
    if (test) return vec3(0,1,0);
    else return vec3(1,0.2,0);
}

vec3 multQuat(vec3 a, vec4 q){
    float x = a.x;
    float y = a.y;
    float z = a.z;

    float qx = q.x;
    float qy = q.y;
    float qz = q.z;
    float qw = q.w;

    float ix =  qw * x + qy * z - qz * y;
    float iy =  qw * y + qz * x - qx * z;
    float iz =  qw * z + qx * y - qy * x;
    float iw = -qx * x - qy * y - qz * z;

    a.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    a.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    a.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return a;
}

vec3 evalAreaLight(AreaLight light, vec3 posWorld, vec3 normalWorld, vec3 diffuseColor, vec3 specularColor, float roughness)
{
    vec2 seq[NUM_SAMPLES_3020430251];
    Halton2D(seq, sampleCount);

    vec3 col = vec3(0);

    // Scene info

    vec3 lcol = toLinear(light.color.rgb) * light.intensity;
    vec3 dcol = diffuseColor;
    vec3 scol = specularColor;
    {
        Ray ray;
        ray.origin = uCameraPosition;
        ray.dir = normalize(posWorld - uCameraPosition);
        {
            vec3 pos = posWorld;

            vec3 N = normalWorld;
            vec3 V = -ray.dir;

            //FIXME: why this has to be -1?
            vec3 ex = multQuat(vec3(-1, 0, 0), light.rotation)*light.size.x;
            vec3 ey = multQuat(vec3(0, 1, 0), light.rotation)*light.size.y;

            vec3 p1 = light.position - ex + ey;
            vec3 p2 = light.position + ex + ey;
            vec3 p3 = light.position + ex - ey;
            vec3 p4 = light.position - ex - ey;

            vec3 points[4];
            points[0] = p1;
            points[1] = p2;
            points[2] = p3;
            points[3] = p4;

            float theta = acos(dot(N, V));
            vec2 uv = vec2(roughness, theta/(0.5*pi_0));
            uv = uv*LUT_SCALE_3020430251 + LUT_BIAS_3020430251;

            vec4 t = texture2D(ltc_mat, uv);
            mat3 Minv = mat3(
                vec3(  1,   0, t.y),
                vec3(  0, t.z,   0),
                vec3(t.w,   0, t.x)
            );

            vec3 spec = lcol*scol*LTC_Evaluate_3020430251(N, V, pos, Minv, points, false);
            spec *= texture2D(ltc_mag, uv).w;

            vec3 diff = lcol*dcol*LTC_Evaluate_3020430251(N, V, pos, mat3(1), points, false);

            col  = spec + diff;
            col /= 2.0*pi_0;
        }

        //TODO: how to find out we had hit the screen?
        //float distToRect;
        //if (RayRectIntersect(ray, rect, distToRect))
        //    if ((distToRect < distToFloor) || !hitFloor)
        //        col = lcol;
    }

    return col;
}


void EvaluateAreaLight(inout PBRData data, AreaLight light, float ao) {
  data.indirectSpecular += ao * evalAreaLight(light, data.positionWorld, data.normalWorld, data.baseColor, data.f0, data.roughness);
}
#endif
`,shadowing:/* glsl */`

#if NUM_DIRECTIONAL_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0

  //fron depth buf normalized z to linear (eye space) z
  //http://stackoverflow.com/questions/6652253/getting-the-true-z-value-from-the-depth-buffer
  // float ndcDepthToEyeSpaceProj(float ndcDepth, float near, float far) {
  //   return 2.0 * near * far / (far + near - ndcDepth * (far - near));
  // }

  //otho
  //z = (f - n) * (zn + (f + n)/(f-n))/2
  //http://www.ogldev.org/www/tutorial47/tutorial47.html
  const float DEPTH_TOLERANCE = 0.000001;

  float ndcDepthToEyeSpace(float ndcDepth, float near, float far) {
    return (far - near) * (ndcDepth + (far + near) / (far - near)) / 2.0;
  }

  float readDepth(sampler2D depthMap, vec2 coord, float near, float far) {
    float z_b = texture2D(depthMap, coord).r;
    float z_n = 2.0 * z_b - 1.0;

    return ndcDepthToEyeSpace(z_n, near, far);
  }

  float texture2DCompare(sampler2D depthMap, vec2 uv, float compare, float near, float far) {
    float depth = readDepth(depthMap, uv, near, far);
    if (depth >= far - DEPTH_TOLERANCE) return 1.0;
    // if (depth >= far) return 1.0;
    return step(compare, depth);
  }

  float texture2DShadowLerp(sampler2D depthMap, vec2 size, vec2 uv, float compare, float near, float far){
    vec2 texelSize = vec2(1.0)/size;
    vec2 f = fract(uv * size + 0.5);
    vec2 centroidUV = floor(uv*size+0.5)/size;

    float lb = texture2DCompare(depthMap, centroidUV+texelSize*vec2(0.0, 0.0), compare, near, far);
    float lt = texture2DCompare(depthMap, centroidUV+texelSize*vec2(0.0, 1.0), compare, near, far);
    float rb = texture2DCompare(depthMap, centroidUV+texelSize*vec2(1.0, 0.0), compare, near, far);
    float rt = texture2DCompare(depthMap, centroidUV+texelSize*vec2(1.0, 1.0), compare, near, far);
    float a = mix(lb, lt, f.y);
    float b = mix(rb, rt, f.y);
    float c = mix(a, b, f.x);

    return c;
  }

  float PCF3x3(sampler2D depths, vec2 size, vec2 uv, float compare, float near, float far){
    float result = 0.0;
    for(int x=-1; x<=1; x++){
        for(int y=-1; y<=1; y++){
            vec2 off = vec2(x,y)/float(size);
            result += texture2DShadowLerp(depths, size, uv+off, compare, near, far);
        }
    }
    return result/9.0;
  }

  float PCF5x5(sampler2D depths, vec2 size, vec2 uv, float compare, float near, float far){
    float result = 0.0;
    for(int x=-2; x<=2; x++){
        for(int y=-2; y<=2; y++){
            vec2 off = vec2(x,y)/float(size);
            result += texture2DShadowLerp(depths, size, uv+off, compare, near, far);
        }
    }
    return result/25.0;
  }

  float getShadow(sampler2D depths, vec2 size, vec2 uv, float compare, float near, float far) {
    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
      return 1.0;
    }
    #if SHADOW_QUALITY == 0
      float illuminated = 1.0;
    #endif
    #if SHADOW_QUALITY == 1
      float illuminated = texture2DCompare(depths, uv, compare, near, far);
    #endif
    #if SHADOW_QUALITY == 2
      float illuminated = texture2DShadowLerp(depths, size, uv, compare, near, far);
    #endif
    #if SHADOW_QUALITY == 3
      float illuminated = PCF3x3(depths, size, uv, compare, near, far);
    #endif
    #if SHADOW_QUALITY == 4
      float illuminated = PCF5x5(depths, size, uv, compare, near, far);
    #endif
    return illuminated;
  }
#endif

#if NUM_POINT_LIGHTS > 0
  float getPunctualShadow(samplerCube depths, vec3 posToLight) {
    float dist = length(posToLight);
    vec3 N = -normalize(posToLight);
    float far = 10.0;
    float depth = unpackDepth(textureCube(depths, N)) * far;

    if (dist - 0.05 > depth) {
      return 0.0;
    }

    return 1.0;

    // float depth = textureCube(depths, N).r;
    // illuminated = (depth - dist);
    // illuminated = step(dist, depth / 2.0);

    // data.directDiffuse = vec3(fract(depth));
    // data.directDiffuse = vec3(fract(dist));
    // data.directDiffuse = vec3(illuminated);
  }
#endif
`,brdf:/* glsl */`
uniform float uReflectance;

// TODO: used by clearCoat
// https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf
// Distribution
// Walter et al. 2007, "Microfacet Models for Refraction through Rough Surfaces"
float D_GGX(float linearRoughness, float NoH, const vec3 h, const vec3 normalWorld) {
  float oneMinusNoHSquared = 1.0 - NoH * NoH;

  float a = NoH * linearRoughness;
  float k = linearRoughness / (oneMinusNoHSquared + a * a);
  float d = k * k * (1.0 / PI);
  return saturateMediump(d);
}

// TODO: Used by clearCoat
// Kelemen 2001, "A Microfacet Based Coupled Specular-Matte BRDF Model with Importance Sampling"
float V_Kelemen(float LoH) {
  return saturateMediump(0.25 / (LoH * LoH));
}


// TODO: used by clearCoat e.g. in indirect.glsl.js
float F_Schlick(float f0, float f90, float VoH) {
  return f0 + (f90 - f0) * pow(1.0 - VoH, 5.0);
}

// Diffuse
float DiffuseLambert() {
  return 1.0 / PI;
}

// GGX, Trowbridge-Reitz
// Same as glTF2.0 PBR Spec
float MicrofacetDistribution(float linearRoughness, float NdotH) {
  float a2 = linearRoughness * linearRoughness;
  float NdotH2 = NdotH * NdotH;

  float nom = a2;
  float denom  = (NdotH2 * (a2 - 1.0) + 1.0);
  denom = PI * denom * denom;

  if (denom > 0.0) {
    return nom / denom;
  } else {
    return 1.0;
  }
}

// FresnelSchlick
// Same as glTF2.0 PBR Spec
vec3 SpecularReflection(vec3 specularColor, float HdotV) {
  float cosTheta = HdotV;
  return specularColor + (1.0 - specularColor) * pow(1.0 - cosTheta, 5.0);
}

// Smith Joint GGX
// Sometimes called Smith GGX Correlated 
// Note: Vis = G / (4 * NdotL * NdotV)
// see Eric Heitz. 2014. Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs. Journal of Computer Graphics Techniques, 3
// see Real-Time Rendering. Page 331 to 336.
// see https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf/geometricshadowing(specularg)
float VisibilityOcclusion(float linearRoughness, float NdotL, float NdotV) {
  float linearRoughnessSq = linearRoughness * linearRoughness;

  float GGXV = NdotL * sqrt(NdotV * NdotV * (1.0 - linearRoughnessSq) + linearRoughnessSq);
  float GGXL = NdotV * sqrt(NdotL * NdotL * (1.0 - linearRoughnessSq) + linearRoughnessSq);

  float GGX = GGXV + GGXL;
  if (GGX > 0.0) {
      return 0.5 / GGX;
  }
  return 0.0;
}

`,clearCoat:/* glsl */`
#ifdef USE_CLEAR_COAT
  uniform float uClearCoat;
  uniform float uClearCoatRoughness;

  #ifdef USE_CLEAR_COAT_NORMAL_MAP
    uniform sampler2D uClearCoatNormalMap;
    uniform float uClearCoatNormalMapScale;

    #ifdef USE_CLEAR_COAT_NORMAL_MAP_TEX_COORD_TRANSFORM
      uniform mat3 uClearCoatNormalMapTexCoordTransform;
    #endif

    void getClearCoatNormal(inout PBRData data) {
      #ifdef USE_CLEAR_COAT_NORMAL_MAP_TEX_COORD_TRANSFORM
        vec2 texCoord = getTextureCoordinates(data, CLEAR_COAT_NORMAL_MAP_TEX_COORD_INDEX, uClearCoatNormalMapTexCoordTransform);
      #else
        vec2 texCoord = getTextureCoordinates(data, CLEAR_COAT_NORMAL_MAP_TEX_COORD_INDEX);
      #endif

      vec3 normalMap = texture2D(uClearCoatNormalMap, texCoord).rgb * 2.0 - 1.0;
      normalMap.y *= uClearCoatNormalMapScale;
      normalMap = normalize(normalMap);

      vec3 N = normalize(data.normalView);
      vec3 V = normalize(data.eyeDirView);

      vec3 normalView;

      #ifdef USE_TANGENTS
        vec3 bitangent = cross(N, data.tangentView.xyz) * sign(data.tangentView.w);
        mat3 TBN = mat3(data.tangentView.xyz, bitangent, N);
        normalView = normalize(TBN * normalMap);
      #else
        normalMap.xy *= float(gl_FrontFacing) * 2.0 - 1.0;
        // make the output normalView match glTF expected right handed orientation
        normalMap.y *= -1.0;
        normalView = perturb(normalMap, N, V, texCoord);
      #endif

      data.clearCoatNormal = normalize(vec3(data.inverseViewMatrix * vec4(normalView, 0.0)));
    }
  #else
    void getClearCoatNormal(inout PBRData data) {
      // geometric normal without perturbation from normalMap
      // this normal is in world space
      data.clearCoatNormal = normalize(vec3(data.inverseViewMatrix * vec4(normalize(data.normalView), 0.0)));
    }
  #endif


  // IOR = 1.5, F0 = 0.04
  // as material is no longer in contact with air we calculate new IOR on the 
  // clear coat and material interface
  vec3 f0ClearCoatToSurface(const vec3 f0) {
    return saturate(f0 * (f0 * (0.941892 - 0.263008 * f0) + 0.346479) - 0.0285998);
  }

  float clearCoatBRDF(const PBRData data, const vec3 h, float NoH, float LoH, out float Fcc) {
    #if defined(USE_NORMAL_MAP) || defined(USE_CLEAR_COAT_NORMAL_MAP)
      float clearCoatNoH = saturate(dot(data.clearCoatNormal, h));
    #else
      float clearCoatNoH = NoH;
    #endif
    float D = D_GGX(data.clearCoatLinearRoughness, clearCoatNoH, h, data.normalWorld);
    float V = V_Kelemen(LoH);
    // air-polyurethane interface has IOR = 1.5 -> F0 = 0.04
    float F = F_Schlick(0.04, 1.0, LoH) * uClearCoat;

    Fcc = F;
    return D * V * F;
  }
#endif
`,irradiance:/* glsl */`
vec3 getIrradiance(vec3 normalWorld, sampler2D map, int encoding) {
  vec2 uv = envMapOctahedral(normalWorld);
  float width = 2048.0;
  float irrSize = 64.0;
  uv += 0.5 / irrSize;
  uv /= irrSize / (irrSize - 1.0);
  uv = (uv * irrSize + vec2(2048.0 - irrSize)) / width;
  return decode(texture2D(map, uv), encoding).rgb;
}
`,direct:/* glsl */`
struct Light {
  vec3 l;
  vec4 color;
  float attenuation;
};

// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float getDistanceAttenuation(const highp vec3 posToLight, float falloff) {
  // Square Falloff Attenuation
  float distanceSquare = dot(posToLight, posToLight);
  float factor = distanceSquare * falloff;
  float smoothFactor = saturate(1.0 - factor * factor);
  float attenuation = smoothFactor * smoothFactor;

  return attenuation * 1.0 / max(distanceSquare, 1e-4);
}

float getAngleAttenuation(const vec3 lightDir, const vec3 l, const vec2 scaleOffset) {
  float cd = dot(lightDir, l);
  float attenuation  = saturate(cd * scaleOffset.x + scaleOffset.y);
  return attenuation * attenuation;
}

void getSurfaceShading(inout PBRData data, Light light, float illuminated) {
  vec3 N = data.normalWorld;
  vec3 V = data.viewWorld;
  vec3 L = normalize(light.l);
  vec3 H = normalize(V + L);

  float NdotV = saturate(abs(dot(N, V)) + FLT_EPS);
  float NdotL = saturate(dot(N, L));

  if (NdotL <= 0.0) return;

  float NdotH = saturate(dot(N, H));
  float LdotH = saturate(dot(L, H));
  float HdotV = max(0.0, dot(H, V));

  vec3 F = SpecularReflection(data.f0, HdotV);
  
  float D = MicrofacetDistribution(data.linearRoughness, NdotH);  
  float Vis = VisibilityOcclusion(data.linearRoughness, NdotL, NdotV);

  //TODO: switch to linear colors
  vec3 lightColor = decode(light.color, 3).rgb;

  vec3 Fd = DiffuseLambert() * data.diffuseColor;
  vec3 Fr = F * Vis * D;

  //TODO: energy compensation
  float energyCompensation = 1.0;
  
  #ifdef USE_CLEAR_COAT
    float Fcc;
    float clearCoat = clearCoatBRDF(data, H, NdotH, LdotH, Fcc);
    float attenuation = 1.0 - Fcc;
    
    vec3 color = (Fd + Fr * (energyCompensation * attenuation)) * attenuation * NdotL;

    // direct light still uses NdotL but clear coat needs separate dot product when using normal map
    // if only normal map is present not clear coat normal map, we will get smooth coating on top of bumpy surface
    #if defined(USE_NORMAL_MAP) || defined(USE_CLEAR_COAT_NORMAL_MAP)
      float clearCoatNoL = saturate(dot(data.clearCoatNormal, light.l));
      color += clearCoat * clearCoatNoL;
    #else
      color += clearCoat * NdotL;      
    #endif    
  #else
    vec3 color = (Fd + Fr * energyCompensation) * NdotL;    
  #endif  

  data.directColor += (color * lightColor) * (light.color.a * light.attenuation * illuminated);
}
`,indirect:/* glsl */`
#ifdef USE_REFLECTION_PROBES
  uniform sampler2D uReflectionMap;
  uniform int uReflectionMapEncoding;

  #define MAX_MIPMAP_LEVEL 5.0

  vec3 getPrefilteredReflection(vec3 reflected, float roughness) {
    // float lod = pow(roughness, 2.0) * MAX_MIPMAP_LEVEL; // TODO: verify reflection probe blurring code
    float lod = pow(roughness, 1.5) * MAX_MIPMAP_LEVEL;
    float upLod = floor(lod);
    float downLod = ceil(lod);

    vec3 a = decode(texture2D(uReflectionMap, envMapOctahedral(reflected, 0.0, upLod)), uReflectionMapEncoding).rgb;
    vec3 b = decode(texture2D(uReflectionMap, envMapOctahedral(reflected, 0.0, downLod)), uReflectionMapEncoding).rgb;

    return mix(a, b, lod - upLod);
  }

  vec3 EnvBRDFApprox( vec3 specularColor, float roughness, float NoV ) {
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022 );
    const vec4 c1 = vec4( 1.0, 0.0425, 1.04, -0.04 );
    vec4 r = roughness * c0 + c1;
    float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;
    vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;
    return specularColor * AB.x + AB.y;
  }

  #if defined(USE_CLEAR_COAT)
    // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/clearcoat
    void evaluateClearCoatIBL(const PBRData data, float ao, inout vec3 Fd, inout vec3 Fr) {
      #if defined(USE_NORMAL_MAP) || defined(USE_CLEAR_COAT_NORMAL_MAP)
        float clearCoatNoV = abs(dot(data.clearCoatNormal, data.viewWorld)) + FLT_EPS;
        vec3 clearCoatR = reflect(-data.viewWorld, data.clearCoatNormal);
      #else
        float clearCoatNoV = data.NdotV;
        vec3 clearCoatR = data.reflectionWorld;
      #endif
      // The clear coat layer assumes an IOR of 1.5 (4% reflectance)
      float Fc = F_Schlick(0.04, 1.0, clearCoatNoV) * uClearCoat;
      float attenuation = 1.0 - Fc;
      Fr *= (attenuation * attenuation);
      Fr += getPrefilteredReflection(clearCoatR, uClearCoatRoughness) * (ao * Fc);
      Fd *= attenuation;
    }
  #endif

  void EvaluateLightProbe(inout PBRData data, float ao) {
    // TODO: energyCompensation
    float energyCompensation = 1.0;

    vec3 diffuseIrradiance = getIrradiance(data.normalWorld, uReflectionMap, uReflectionMapEncoding);
    vec3 Fd = data.diffuseColor * diffuseIrradiance * ao;

    vec3 specularReflectance = EnvBRDFApprox(data.f0, data.roughness, data.NdotV);
    vec3 prefilteredRadiance = getPrefilteredReflection(data.reflectionWorld, data.roughness);    

    vec3 Fr = specularReflectance * prefilteredRadiance * ao;
    Fr *= energyCompensation;

    #ifdef USE_CLEAR_COAT
      evaluateClearCoatIBL(data, ao, Fd, Fr);
    #endif

    data.indirectDiffuse += Fd;
    data.indirectSpecular += Fr;
  }
#endif
`,envMapEquirect:/* glsl */`
vec2 envMapEquirect(vec3 wcNormal) {
  float flipEnvMap = -1.0;

  // I assume envMap texture has been flipped the WebGL way (pixel 0,0 is a the bottom)
  // therefore we flip wcNorma.y as acos(1) = 0
  float phi = acos(-wcNormal.y);
  float theta = atan(wcNormal.x, flipEnvMap * wcNormal.z) + PI;
  return vec2(theta / TWO_PI, phi / PI);
}
`,octMap:/* glsl */`
vec2 envMapOctahedral(vec3 dir) {
  dir /= dot(vec3(1.0), abs(dir));
  // Add epsylon to avoid bottom face flickering when sampling irradiance
  dir += 0.00001;
  if (dir.y < 0.0) {
    dir.xy = vec2(1.0 - abs(dir.zx)) * sign(dir.xz);
  }
  else {
    dir.xy = dir.xz;
  }
  dir.xy = dir.xy * 0.5;
  dir.xy += 0.5; // move to center
  // dir.xy = (dir.xy * 64.0 + 1.0) / 66.0;
  return dir.xy;
}

vec2 envMapOctahedral(vec3 dir, float textureSize) {
  dir /= dot(vec3(1.0), abs(dir));
  if (dir.y < 0.0) {
    dir.xy = vec2(1.0 - abs(dir.zx)) * sign(dir.xz);
  }
  else {
    dir.xy = dir.xz;
  }
  dir.xy = dir.xy * 0.5;
  dir.xy += 0.5; // move to center

  // center on texels
  dir.xy += 0.5 / textureSize;
  dir.xy /= textureSize / (textureSize - 1.0);

  return dir.xy;
}

vec2 envMapOctahedral(vec3 dir, float mipmapLevel, float roughnessLevel) {
  float width = 2048.0;
  float maxLevel = 11.0; // this should come from log of size
  float levelSizeInPixels = pow(2.0, 1.0 + mipmapLevel + roughnessLevel);
  float levelSize = max(64.0, width / levelSizeInPixels);
  float roughnessLevelWidth = width / pow(2.0, 1.0 + roughnessLevel);
  float vOffset = (width - pow(2.0, maxLevel - roughnessLevel));
  float hOffset = 2.0 * roughnessLevelWidth - pow(2.0, log2(2.0 * roughnessLevelWidth) - mipmapLevel);
  vec2 uv = envMapOctahedral(dir, levelSize);
  uv *= levelSize;

  return (uv + vec2(hOffset, vOffset)) / width;
}
`,octMapUvToDir:/* glsl */`
vec2 signed(vec2 v) {
  return step(0.0, v) * 2.0 - 1.0;
}

// size = target octMap size
vec3 octMapUVToDir (vec2 uv, float size) {
  // center pixels with texels
  // https://msdn.microsoft.com/en-us/library/windows/desktop/bb219690(v=vs.85).aspx
  // creates 2 pixel border on the seams so the texture will filter properly
  // uv = (uv * size - 0.5) / (size - 1.0); // THIS!!!

  // float uBorder = 5.0;
  // uv = uv * 2.0 - 1.0;
  // uv *= (size + uBorder) / size;
  // uv = (uv + 1.0) / 2.0;

  // if (uv.x < 0.0) { uv.x *= -1.0; uv.y = 1.0 - uv.y; }
  // else if (uv.x > 1.0) { uv.x = 2.0 - uv.x; uv.y = 1.0 - uv.y; }
  // if (uv.y < 0.0) { uv.y *= -1.0; uv.x = 1.0 - uv.x; }
  // else if (uv.y > 1.0) { uv.y = 2.0 - uv.y; uv.x = 1.0 - uv.x; }

  uv = uv * 2.0 - 1.0;

  vec2 auv = abs(uv);
  float len = dot(auv, vec2(1.0));

  if (len > 1.0) {
    //y < 0 case
    uv = (auv.yx - 1.0) * -1.0 * signed(uv);
  }
  return normalize(vec3(uv.x, 1.0 - len, uv.y));
}

// size = target octMap size
vec3 octMapUVToDir (vec2 uv) {
  // center pixels with texels
  // https://msdn.microsoft.com/en-us/library/windows/desktop/bb219690(v=vs.85).aspx
  // uv = (uv * size - 0.5) / (size - 1.0); // THIS!!!

  // uv = uv * 2.0 - 1.0;
  // uv *= (uTextureSize + uBorder) / uTextureSize;
  // uv = (uv + 1.0) / 2.0;

  // if (uv.x < 0.0) { uv.x *= -1.0; uv.y = 1.0 - uv.y; }
  // else if (uv.x > 1.0) { uv.x = 2.0 - uv.x; uv.y = 1.0 - uv.y; }
  // if (uv.y < 0.0) { uv.y *= -1.0; uv.x = 1.0 - uv.x; }
  // else if (uv.y > 1.0) { uv.y = 2.0 - uv.y; uv.x = 1.0 - uv.x; }

  uv = uv * 2.0 - 1.0;

  vec2 auv = abs(uv);
  float len = dot(auv, vec2(1.0));

  if (len > 1.0) {
    //y < 0 case
    uv = (auv.yx - 1.0) * -1.0 * signed(uv);
  }
  return normalize(vec3(uv.x, 1.0 - len, uv.y));
}
`,textureCoordinates:/* glsl */`
vec2 getTextureCoordinates(in PBRData data, in int index) {
  #ifdef USE_TEXCOORD_1
    if (index == 1) return data.texCoord1;
  #endif

  return data.texCoord0;
}

vec2 getTextureCoordinates(in PBRData data, in int index, in mat3 texCoordTransform) {
  vec2 texCoord = getTextureCoordinates(data, index);

  return (texCoordTransform * vec3(texCoord.xy, 1)).xy;
}
`,baseColor:/* glsl */`
uniform vec4 uBaseColor; // TODO: gltf assumes sRGB color, not linear

#ifdef USE_BASE_COLOR_MAP
  uniform sampler2D uBaseColorMap; // assumes sRGB color, not linear

  #ifdef USE_BASE_COLOR_MAP_TEX_COORD_TRANSFORM
    uniform mat3 uBaseColorMapTexCoordTransform;
  #endif

  void getBaseColor(inout PBRData data) {
    #ifdef USE_BASE_COLOR_MAP_TEX_COORD_TRANSFORM
      vec2 texCoord = getTextureCoordinates(data, BASE_COLOR_MAP_TEX_COORD_INDEX, uBaseColorMapTexCoordTransform);
    #else
      vec2 texCoord = getTextureCoordinates(data, BASE_COLOR_MAP_TEX_COORD_INDEX);
    #endif
    vec4 texelColor = texture2D(uBaseColorMap, texCoord);

    #if !defined(DEPTH_PASS_ONLY) && !defined(DEPTH_PRE_PASS_ONLY)
      data.baseColor = decode(uBaseColor, 3).rgb * decode(texelColor, 3).rgb;
    #endif

    #if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)
      #if !defined(DEPTH_PASS_ONLY) && !defined(DEPTH_PRE_PASS_ONLY)
        data.baseColor *= decode(vColor, 3).rgb;
      #endif
      data.opacity = uBaseColor.a * texelColor.a * vColor.a;
    #else
      data.opacity = uBaseColor.a * texelColor.a;
    #endif
  }
#else
  void getBaseColor(inout PBRData data) {
    #if !defined(DEPTH_PASS_ONLY) && !defined(DEPTH_PRE_PASS_ONLY)
      data.baseColor = decode(uBaseColor, 3).rgb;
    #endif

    #if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)
      #if !defined(DEPTH_PASS_ONLY) && !defined(DEPTH_PRE_PASS_ONLY)
        data.baseColor *= decode(vColor, 3).rgb;
      #endif
      data.opacity = uBaseColor.a * vColor.a;
    #else
      data.opacity = uBaseColor.a;
    #endif
  }
#endif
`,emissiveColor:/* glsl */`
#ifdef USE_EMISSIVE_COLOR
  uniform vec4 uEmissiveColor; // TODO: gltf assumes sRGB color, not linear
  uniform float uEmissiveIntensity;
#endif

#ifdef USE_EMISSIVE_COLOR_MAP
  uniform sampler2D uEmissiveColorMap; //assumes sRGB color, not linear

  #ifdef USE_EMISSIVE_COLOR_MAP_TEX_COORD_TRANSFORM
    uniform mat3 uEmissiveColorMapTexCoordTransform;
  #endif

  void getEmissiveColor(inout PBRData data) {
    #ifdef USE_EMISSIVE_COLOR_MAP_TEX_COORD_TRANSFORM
      vec2 texCoord = getTextureCoordinates(data, EMISSIVE_COLOR_MAP_TEX_COORD_INDEX, uEmissiveColorMapTexCoordTransform);
    #else
      vec2 texCoord = getTextureCoordinates(data, EMISSIVE_COLOR_MAP_TEX_COORD_INDEX);
    #endif

    data.emissiveColor = decode(texture2D(uEmissiveColorMap, texCoord), SRGB).rgb;

    #ifdef USE_EMISSIVE_COLOR
      data.emissiveColor *= uEmissiveIntensity * decode(uEmissiveColor, SRGB).rgb;
    #endif
  }
#elif defined(USE_EMISSIVE_COLOR)
  void getEmissiveColor(inout PBRData data) {
    data.emissiveColor = uEmissiveIntensity * decode(uEmissiveColor, SRGB).rgb;
  }
#else
  void getEmissiveColor(inout PBRData data) {
    data.emissiveColor = vec3(0.0);
  }
#endif
`,alpha:/* glsl */`
#ifdef USE_ALPHA_MAP
  uniform sampler2D uAlphaMap;

  #ifdef ALPHA_MAP_TEX_COORD_TRANSFORM
    uniform mat3 uAlphaMapTexCoordTransform;
  #endif
#endif

#ifdef USE_ALPHA_TEST
  uniform float uAlphaTest; // assumes sRGB color, not linear

  void alphaTest(inout PBRData data) {
    if (data.opacity < uAlphaTest) discard;
    // if (length(data.emissiveColor) < 0.1) discard;
    // else data.baseColor = vec3(1.0, 0.0, 0.0);
  }
#endif
`,ambientOcclusion:/* glsl */`
#ifdef USE_AO
  uniform sampler2D uAO;
  uniform vec2 uScreenSize;
#endif

#ifdef USE_OCCLUSION_MAP
  uniform sampler2D uOcclusionMap;

  #ifdef USE_OCCLUSION_MAP_TEX_COORD_TRANSFORM
    uniform mat3 uOcclusionMapTexCoordTransform;
  #endif
#endif
`,normal:/* glsl */`
#ifdef USE_NORMAL_MAP
uniform sampler2D uNormalMap;
uniform float uNormalScale;

#ifdef USE_NORMAL_MAP_TEX_COORD_TRANSFORM
  uniform mat3 uNormalMapTexCoordTransform;
#endif

void getNormal(inout PBRData data) {
  #ifdef USE_NORMAL_MAP_TEX_COORD_TRANSFORM
    vec2 texCoord = getTextureCoordinates(data, NORMAL_MAP_TEX_COORD_INDEX, uNormalMapTexCoordTransform);
  #else
    vec2 texCoord = getTextureCoordinates(data, NORMAL_MAP_TEX_COORD_INDEX);
  #endif

  vec3 normalMap = texture2D(uNormalMap, texCoord).rgb * 2.0 - 1.0;
  normalMap.y *= uNormalScale;
  normalMap = normalize(normalMap);

  vec3 N = normalize(data.normalView);
  vec3 V = normalize(data.eyeDirView);

  vec3 normalView;

  #ifdef USE_TANGENTS
    vec3 bitangent = cross(N, data.tangentView.xyz) * sign(data.tangentView.w);
    mat3 TBN = mat3(data.tangentView.xyz, bitangent, N);
    normalView = normalize(TBN * normalMap);
  #else
    normalMap.xy *= float(gl_FrontFacing) * 2.0 - 1.0;
    // make the output normalView match glTF expected right handed orientation
    normalMap.y *= -1.0;
    normalView = perturb(normalMap, N, V, texCoord);
  #endif

  data.normalWorld = normalize(vec3(data.inverseViewMatrix * vec4(normalView, 0.0)));
}
// #elif defined(USE_DISPLACEMENT_MAP)
//   uniform sampler2D uDisplacementMap;
//   uniform float uDisplacement;
//   uniform float uDisplacementNormalScale;

//   vec3 getNormal() {
//     float scale = uDisplacement * uDisplacementNormalScale;
//     float h = scale * texture2D(uDisplacementMap, texCoord).r;
//     float hx = scale * texture2D(uDisplacementMap, texCoord + vec2(1.0 / 2048.0, 0.0)).r;
//     float hz = scale * texture2D(uDisplacementMap, texCoord + vec2(0.0, 1.0 / 2048.0)).r;
//     float meshSize = 20.0;
//     vec3 a = vec3(0.0, h, 0.0);
//     vec3 b = vec3(1.0 / 2048.0 * meshSize, hx, 0.0);
//     vec3 c = vec3(0.0, hz, 1.0 / 2048.0 * meshSize);
//     vec3 N = normalize(cross(normalize(c - a), normalize(b - a)));
//     // FIXME: this is model space normal, need to multiply by modelWorld
//     // N = mat3(uModelMatrix) * N;
//     return N;
//   }
#else
void getNormal(inout PBRData data) {
  // NOP
}
#endif
`,normalPerturb:/* glsl */`
#if !defined(USE_TANGENTS) && (defined(USE_NORMAL_MAP) || defined(USE_CLEAR_COAT_NORMAL_MAP))
  //http://www.thetenthplanet.de/archives/1180
  mat3 cotangentFrame(vec3 N, vec3 p, vec2 uv) {
    // get edge vectors of the pixel triangle
    highp vec3 dp1 = dFdx(p);
    highp vec3 dp2 = dFdy(p);
    highp vec2 duv1 = dFdx(uv);
    highp vec2 duv2 = dFdy(uv);

    // solve the linear system
    vec3 dp2perp = cross(dp2, N);
    vec3 dp1perp = cross(N, dp1);
    vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
    vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;

    // construct a scale-invariant frame
    float invmax = 1.0 / sqrt(max(dot(T,T), dot(B,B)));
    return mat3(normalize(T * invmax), normalize(B * invmax), N);
  }

  vec3 perturb(vec3 map, vec3 N, vec3 V, vec2 texcoord) {
    mat3 TBN = cotangentFrame(N, -V, texcoord);
    return normalize(TBN * map);
  }
#endif
`,metallicRoughness:/* glsl */`
#ifdef USE_METALLIC_ROUGHNESS_WORKFLOW

  // Source: Google/Filament/Overview/4.8.3.3 Roughness remapping and clamping, 07/2019
  // Minimum roughness to avoid division by zerio when 1/a^2 and to limit specular aliasing
  // This could be 0.045 when using single precision float fp32
  #define MIN_ROUGHNESS 0.089

  #ifdef USE_METALLIC_ROUGHNESS_MAP
    // R = ?, G = roughness, B = metallic
    uniform sampler2D uMetallicRoughnessMap;

    #ifdef USE_METALLIC_ROUGHNESS_MAP_TEX_COORD_TRANSFORM
      uniform mat3 uMetallicRoughnessMapTexCoordTransform;
    #endif

    // TODO: sampling the same texture twice
    void getMetallic(inout PBRData data) {
      #ifdef USE_METALLIC_ROUGHNESS_MAP_TEX_COORD_TRANSFORM
        vec2 texCoord = getTextureCoordinates(data, METALLIC_ROUGHNESS_MAP_TEX_COORD_INDEX, uMetallicRoughnessMapTexCoordTransform);
      #else
        vec2 texCoord = getTextureCoordinates(data, METALLIC_ROUGHNESS_MAP_TEX_COORD_INDEX);
      #endif
      vec4 texelColor = texture2D(uMetallicRoughnessMap, texCoord);
      data.metallic = texelColor.b;
      data.roughness = texelColor.g;
    }

    void getRoughness(inout PBRData data) {
      // NOP, already read in getMetallic
    }
  #else
    uniform float uMetallic;
    uniform float uRoughness;

    #ifdef USE_METALLIC_MAP
      uniform sampler2D uMetallicMap; //assumes linear, TODO: check gltf

      #ifdef USE_METALLIC_MAP_TEX_COORD_TRANSFORM
        uniform mat3 uMetallicMapTexCoordTransform;
      #endif

      void getMetallic(inout PBRData data) {
        #ifdef USE_METALLIC_MAP_TEX_COORD_TRANSFORM
          vec2 texCoord = getTextureCoordinates(data, METALLIC_MAP_TEX_COORD_INDEX, uMetallicMapTexCoordTransform);
        #else
          vec2 texCoord = getTextureCoordinates(data, METALLIC_MAP_TEX_COORD_INDEX);
        #endif
        data.metallic = uMetallic * texture2D(uMetallicMap, texCoord).r;
      }
    #else
      void getMetallic(inout PBRData data) {
        data.metallic = uMetallic;
      }
    #endif

    #ifdef USE_ROUGHNESS_MAP
      uniform sampler2D uRoughnessMap; //assumes linear, TODO: check glTF

      #ifdef USE_ROUGHNESS_MAP_TEX_COORD_TRANSFORM
        uniform mat3 uRoughnessMapTexCoordTransform;
      #endif

      void getRoughness(inout PBRData data) {
        #ifdef USE_ROUGHNESS_MAP_TEX_COORD_TRANSFORM
          vec2 texCoord = getTextureCoordinates(data, ROUGHNESS_MAP_TEX_COORD_INDEX, uRoughnessMapTexCoordTransform);
        #else
          vec2 texCoord = getTextureCoordinates(data, ROUGHNESS_MAP_TEX_COORD_INDEX);
        #endif
        data.roughness = uRoughness * texture2D(uRoughnessMap, getTextureCoordinates(data, ROUGHNESS_MAP_TEX_COORD_INDEX)).r + 0.01;
      }
    #else
      void getRoughness(inout PBRData data) {
        data.roughness = uRoughness + 0.01;
      }
    #endif
  #endif
#endif
`,specularGlossiness:/* glsl */`
#ifdef USE_SPECULAR_GLOSSINESS_WORKFLOW
  uniform vec4 uDiffuse;
  uniform vec3 uSpecular;
  uniform float uGlossiness;

  #ifdef USE_DIFFUSE_MAP
    uniform sampler2D uDiffuseMap;
    uniform float uDiffuseMapEncoding;

    #ifdef USE_DIFFUSE_MAP_TEX_COORD_TRANSFORM
      uniform mat3 uDiffuseMapTexCoordTransform;
    #endif

    vec4 getDiffuse(in PBRData data) {
      // assumes sRGB texture
      #ifdef USE_DIFFUSE_MAP_TEX_COORD_TRANSFORM
        vec2 texCoord = getTextureCoordinates(data, DIFFUSE_MAP_TEX_COORD_INDEX, uDiffuseMapTexCoordTransform);
      #else
        vec2 texCoord = getTextureCoordinates(data, DIFFUSE_MAP_TEX_COORD_INDEX);
      #endif
      vec4 texelColor = texture2D(uDiffuseMap, texCoord);
      return vec4(decode(uDiffuse, 3).rgb, uDiffuse.a) * vec4(decode(texelColor, 3).rgb, texelColor.a);
    }
  #else
    vec4 getDiffuse(in PBRData data) {
      return vec4(decode(uDiffuse, 3).rgb, uDiffuse.a);
    }
  #endif

  #ifdef USE_SPECULAR_GLOSSINESS_MAP
    uniform sampler2D uSpecularGlossinessMap;

    #ifdef USE_SPECULAR_GLOSSINESS_MAP_TEX_COORD_TRANSFORM
      uniform mat3 uSpecularGlossinessMapTexCoordTransform;
    #endif

    vec4 getSpecularGlossiness(in PBRData data) {
      // assumes specular is sRGB and glossiness is linear
      #ifdef USE_SPECULAR_GLOSSINESS_MAP_TEX_COORD_TRANSFORM
        vec2 texCoord = getTextureCoordinates(data, SPECULAR_GLOSSINESS_MAP_TEX_COORD_INDEX, uSpecularGlossinessMapTexCoordTransform);
      #else
        vec2 texCoord = getTextureCoordinates(data, SPECULAR_GLOSSINESS_MAP_TEX_COORD_INDEX);
      #endif
      vec4 specGloss = texture2D(uSpecularGlossinessMap, texCoord);
      //TODO: should i move uSpecular to linear?
      return vec4(uSpecular, uGlossiness) * vec4(decode(vec4(specGloss.rgb, 1.0), 3).rgb, specGloss.a);
    }
  #else
    vec4 getSpecularGlossiness(in PBRData data) {
      return vec4(uSpecular, uGlossiness);
    }
  #endif

  // assumes linear color
  float perceivedBrightness(vec3 c) {
    return 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
  }

  float maxComponent(vec3 c) {
    return max(c.r, max(c.b, c.g));
  }

  float solveMetallic(float diffuse, float specular, float oneMinusSpecularStrength) {
    if (specular < 0.04) {
      return 0.0;
    }

    float a = 0.04;
    float b = diffuse * oneMinusSpecularStrength / (1.0 - a) + specular - 2.0 * a;
    float c = a - specular;
    float D = max(b * b - 4.0 * a * c, 0.0);
    return clamp((-b + sqrt(D)) / (2.0 * a), 0.0, 1.0);
  }

  void getBaseColorAndMetallicRoughnessFromSpecularGlossiness(inout PBRData data) {
    vec4 specularGlossiness = getSpecularGlossiness(data);

    vec3 specular = specularGlossiness.rgb;
    data.f0 = specular;

    float glossiness = specularGlossiness.a;
    data.roughness = 1.0 - glossiness;

    vec4 diffuseRGBA = getDiffuse(data);
    vec3 diffuse = diffuseRGBA.rgb;
    data.opacity = diffuseRGBA.a;
    float epsilon = 1e-6;
    float a = 0.04;

    // ported from https://github.com/KhronosGroup/glTF/blob/master/extensions/Khronos/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows/js/three.pbrUtilities.js
    float oneMinusSpecularStrength = 1.0 - maxComponent(specular);
    data.metallic = solveMetallic(perceivedBrightness(diffuse), perceivedBrightness(specular), oneMinusSpecularStrength);

    vec3 baseColorFromDiffuse = diffuse * oneMinusSpecularStrength / (1.0 - a) / max(1.0 - data.metallic, epsilon);
    vec3 baseColorFromSpecular = (specular - a * (1.0 - data.metallic)) * (1.0 / max(data.metallic, epsilon));
    data.baseColor = mix(baseColorFromDiffuse, baseColorFromSpecular, data.metallic * data.metallic);

    #if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)
      vec3 tint = decode(vColor, SRGB).rgb;
      data.baseColor *= tint;
      data.f0 *= tint;
      data.opacity *= vColor.a;
    #endif
  }
#endif
`,depthRead:/* glsl */`
float readDepth(const in sampler2D depthMap, const in vec2 coord, const in float near, const in float far) {
  float z_b = texture2D(depthMap, coord).r;
  float z_n = 2.0 * z_b - 1.0;
  float z_e = 2.0 * near * far / (far + near - z_n * (far - near));
  return z_e;
}
`,depthUnpack:/* glsl */`
float unpackDepth (const in vec4 rgba_depth) {
  const vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
  float depth = dot(rgba_depth, bit_shift);
  return depth;
}
`,depthPack:/* glsl */`
//from http://spidergl.org/example.php?id=6
vec4 packDepth(const in float depth) {
  const vec4 bit_shift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
  const vec4 bit_mask  = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
  vec4 res = fract(depth * bit_shift);
  res -= res.xxyz * bit_mask;
  return res;
}
`,sky:/* glsl */`
/*

Based on "A Practical Analytic Model for Daylight"
aka The Preetham Model, the de facto standard analytic skydome model
http://www.cs.utah.edu/~shirley/papers/sunsky/sunsky.pdf

First implemented by Simon Wallner http://www.simonwallner.at/projects/atmospheric-scattering

Improved by Martin Upitis http://blenderartists.org/forum/showthread.php?245954-preethams-sky-impementation-HDR

Three.js integration by zz85 http://twitter.com/blurspline

Plask / Pex integration by Marcin Ignac http://twitter.com/marcinignac, 2015-09
*/


vec3 cameraPos = vec3(0.0, 0.0, 0.0);

const float luminance = 1.0;
const float turbidity = 10.0;
const float reileigh = 2.0;
const float mieCoefficient = 0.005;
const float mieDirectionalG = 0.8;

//uniform float luminance; //1.0
//uniform float turbidity; //10.0
//uniform float reileigh; //2.0
//uniform float mieCoefficient; //0.005
//uniform float mieDirectionalG; //0.8


float reileighCoefficient = reileigh;

// constants for atmospheric scattering
const float e = 2.71828182845904523536028747135266249775724709369995957;
const float pi = 3.141592653589793238462643383279502884197169;

const float n = 1.0003; // refractive index of air
const float N = 2.545E25; // number of molecules per unit volume for air at
// 288.15K and 1013mb (sea level -45 celsius)
const float pn = 0.035; // depolatization factor for standard air

// wavelength of used primaries, according to preetham
const vec3 lambda = vec3(680E-9, 550E-9, 450E-9);

// mie stuff
// K coefficient for the primaries
const vec3 K = vec3(0.686, 0.678, 0.666);
const float v = 4.0;

// optical length at zenith for molecules
const float rayleighZenithLength = 8.4E3;
const float mieZenithLength = 1.25E3;
const vec3 up = vec3(0.0, 1.0, 0.0);

const float EE = 1000.0;
const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;
// 66 arc seconds -> degrees, and the cosine of that

// earth shadow hack
const float cutoffAngle = pi/1.95;
const float steepness = 1.5;


vec3 totalRayleigh(vec3 lambda)
{
    return (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn));
}

// A simplied version of the total Reayleigh scattering to works on browsers that use ANGLE
vec3 simplifiedRayleigh()
{
    return 0.0005 / vec3(94, 40, 18);
}

float rayleighPhase(float cosTheta)
{
    return (3.0 / (16.0*pi)) * (1.0 + pow(cosTheta, 2.0));
    // return (1.0 / (3.0*pi)) * (1.0 + pow(cosTheta, 2.0));
    // return (3.0 / 4.0) * (1.0 + pow(cosTheta, 2.0));
}

vec3 totalMie(vec3 lambda, vec3 K, float T)
{
    float c = (0.2 * T ) * 10E-18;
    return 0.434 * c * pi * pow((2.0 * pi) / lambda, vec3(v - 2.0)) * K;
}

float hgPhase(float cosTheta, float g)
{
    return (1.0 / (4.0*pi)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0*g*cosTheta + pow(g, 2.0), 1.5));
}

float sunIntensity(float zenithAngleCos)
{
    return EE * max(0.0, 1.0 - exp(-((cutoffAngle - acos(zenithAngleCos))/steepness)));
}

// float logLuminance(vec3 c)
// {
// return log(c.r * 0.2126 + c.g * 0.7152 + c.b * 0.0722);
// }

// Filmic ToneMapping http://filmicgames.com/archives/75
float A = 0.15;
float B = 0.50;
float C = 0.10;
float D = 0.20;
float E = 0.02;
float F = 0.30;
float W = 1000.0;

vec3 Uncharted2Tonemap(vec3 x)
{
    return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;
}


vec3 sky(vec3 sunPosition, vec3 worldNormal) {
    vec3 sunDirection = normalize(sunPosition);
    float sunfade = 1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);

    // luminance = 1.0 ;// vWorldPosition.y / 450000. + 0.5; //sunPosition.y / 450000. * 1. + 0.5;

    // gl_FragColor = vec4(sunfade, sunfade, sunfade, 1.0);

    reileighCoefficient = reileighCoefficient - (1.0* (1.0-sunfade));

    float sunE = sunIntensity(dot(sunDirection, up));

    // extinction (absorbtion + out scattering)
    // rayleigh coefficients
    //vec3 betaR = totalRayleigh(lambda) * reileighCoefficient;
    vec3 betaR = simplifiedRayleigh() * reileighCoefficient;

    // mie coefficients
    vec3 betaM = totalMie(lambda, K, turbidity) * mieCoefficient;

    // optical length
    // cutoff angle at 90 to avoid singularity in next formula.
    //float zenithAngle = acos(max(0.0, dot(up, normalize(vWorldPosition - cameraPos))));
    float zenithAngle = acos(max(0.0, dot(up, normalize(worldNormal))));
    float sR = rayleighZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));
    float sM = mieZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));



    // combined extinction factor
    vec3 Fex = exp(-(betaR * sR + betaM * sM));

    // in scattering
    float cosTheta = dot(normalize(worldNormal), sunDirection);

    float rPhase = rayleighPhase(cosTheta*0.5+0.5);
    vec3 betaRTheta = betaR * rPhase;

    float mPhase = hgPhase(cosTheta, mieDirectionalG);
    vec3 betaMTheta = betaM * mPhase;


    vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex),vec3(1.5));
    Lin *= mix(vec3(1.0),pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up, sunDirection),5.0),0.0,1.0));

    //nightsky
    vec3 direction = normalize(worldNormal);
    float theta = acos(direction.y); // elevation --> y-axis, [-pi/2, pi/2]
    float phi = atan(direction.z, direction.x); // azimuth --> x-axis [-pi/2, pi/2]
    vec2 uv = vec2(phi, theta) / vec2(2.0*pi, pi) + vec2(0.5, 0.0);
    // vec3 L0 = texture2D(skySampler, uv).rgb+0.1 * Fex;
    vec3 L0 = vec3(0.1) * Fex;

    // composition + solar disc
    //if (cosTheta > sunAngularDiameterCos)
    float sundisk = smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);
    // if (normalize(vWorldPosition - cameraPos).y>0.0)
    L0 += (sunE * 19000.0 * Fex)*sundisk;


    vec3 whiteScale = 1.0/Uncharted2Tonemap(vec3(W));

    vec3 texColor = (Lin+L0);
    texColor *= 0.04 ;
    texColor += vec3(0.0,0.001,0.0025)*0.3;

    float g_fMaxLuminance = 1.0;
    float fLumScaled = 0.1 / luminance;
    float fLumCompressed = (fLumScaled * (1.0 + (fLumScaled / (g_fMaxLuminance * g_fMaxLuminance)))) / (1.0 + fLumScaled);

    float ExposureBias = fLumCompressed;

    vec3 curr = Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);
    //vec3 curr = texColor;
    vec3 color = curr*whiteScale;

    vec3 retColor = pow(color,vec3(1.0/(1.2+(1.2*sunfade))));

    //VRG hack
    retColor = pow(retColor, vec3(2.2));
    return retColor;
}
`,fog:/* glsl */`
uniform float       uFogDensity;

uniform vec3        uSunColor;
uniform float       uSunDispertion;
uniform float       uSunIntensity;
uniform vec3        uInscatteringCoeffs;
uniform vec3        uFogColor;

// Fog adapted from from I\xf1igo Quilez article on fog
// http://www.iquilezles.org/www/articles/fog/fog.htm
vec4 fog(vec3 rgb, float dist, vec3 rayDir, vec3 sunDir) {
  vec3 sunColor = toLinear(uSunColor).rgb;
  vec3 fogColor = toLinear(uFogColor).rgb;

  float minSc         = 0.02;
  float density       = -(dist+1.0) * uFogDensity * 0.15 - dist * 0.0025;
  float sunAmount     = pow(max(dot(rayDir, sunDir), 0.0), 1.0 / (0.008 + uSunDispertion*3.0));
  sunAmount           = uSunIntensity * 10.0 * pow(sunAmount,10.0);
  sunAmount           = max(0.0, min(sunAmount, 1.0));
  vec3 sunFogColor    = mix(fogColor, sunColor, sunAmount);
  vec3 insColor       = vec3(1.0) - clamp( vec3(
        exp(density*(uInscatteringCoeffs.x+minSc)),
        exp(density*(uInscatteringCoeffs.y+minSc)),
        exp(density*(uInscatteringCoeffs.z+minSc))),
      vec3(0), vec3(1));

  return vec4(mix(rgb, sunFogColor, insColor), 1.0);
}
`,tonemapUncharted2:/* glsl */`
float A = 0.15;
float B = 0.50;
float C = 0.10;
float D = 0.20;
float E = 0.02;
float F = 0.30;
float W = 11.2;

vec3 Uncharted2Tonemap(vec3 x) {
  return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

// Based on Filmic Tonemapping Operators http://filmicgames.com/archives/75
vec3 tonemapUncharted2(vec3 color) {
  float ExposureBias = 2.0;
  vec3 curr = Uncharted2Tonemap(ExposureBias * color);

  vec3 whiteScale = 1.0 / Uncharted2Tonemap(vec3(W));
  return curr * whiteScale;
}
`,fxaa:/* glsl */`
#ifndef FXAA_REDUCE_MIN
    #define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
    #define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
    #define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa_calc(sampler2D tex, vec2 fragCoord, vec2 resolution,
            vec2 v_rgbNW, vec2 v_rgbNE,
            vec2 v_rgbSW, vec2 v_rgbSE,
            vec2 v_rgbM) {
    vec4 color;
    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
              dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void texcoords(vec2 fragCoord, vec2 resolution,
			out vec2 v_rgbNW, out vec2 v_rgbNE,
			out vec2 v_rgbSW, out vec2 v_rgbSE,
			out vec2 v_rgbM) {
	vec2 inverseVP = 1.0 / resolution.xy;
	v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
	v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
	v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
	v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
	v_rgbM = vec2(fragCoord * inverseVP);
}

vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution) {
	mediump vec2 v_rgbNW;
	mediump vec2 v_rgbNE;
	mediump vec2 v_rgbSW;
	mediump vec2 v_rgbSE;
	mediump vec2 v_rgbM;

	// compute the texture coords
	texcoords(fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

	// compute FXAA
	return fxaa_calc(tex, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`},uL=/* glsl */`
precision highp float;

// Variables
uniform vec2 uScreenSize;

uniform sampler2D uOverlay;
uniform sampler2D depthMap;
uniform sampler2D uBloomMap;
uniform sampler2D uEmissiveMap;
uniform vec2 depthMapSize;
uniform mat4 uViewMatrix;

uniform int uOverlayEncoding;

uniform float uExposure;
uniform int uOutputEncoding;

uniform float uFogStart;
uniform float uNear;
uniform float uFar;
uniform float uFov;
uniform vec3 uSunPosition;

uniform bool uFXAA;
uniform bool uFog;
uniform bool uBloom;
uniform float uBloomIntensity;

varying vec2 vTexCoord0;

// Includes
${uN.rgbm}
${uN.gamma}
${uN.encodeDecode}
${uN.depthRead}
${uN.fxaa}
${uN.fog}
${uN.tonemapUncharted2}

vec3 getFarViewDir(vec2 tc) {
  float hfar = 2.0 * tan(uFov/2.0) * uFar;
  float wfar = hfar * uScreenSize.x / uScreenSize.y;
  vec3 dir = (vec3(wfar * (tc.x - 0.5), hfar * (tc.y - 0.5), -uFar));
  return dir;
}

vec3 reconstructPositionFromDepth(vec2 texCoord, float z) {
  vec3 ray = getFarViewDir(texCoord);
  vec3 pos = ray;
  return pos * z / uFar;
}

void main() {
  vec4 color = vec4(0.0);

  if (uFXAA) {
    color = fxaa(uOverlay, vTexCoord0 * uScreenSize, uScreenSize);
  } else {
    color = texture2D(uOverlay, vTexCoord0);
  }
  color = decode(color, uOverlayEncoding);

  if (uFog) {
    float z = readDepth(depthMap, vTexCoord0, uNear, uFar);
    vec3 pos = reconstructPositionFromDepth(vTexCoord0, z);
    float rayLength = length(pos);
    vec3 rayDir = pos / rayLength;
    vec3 sunDir = normalize(vec3(uViewMatrix * vec4(normalize(uSunPosition), 0.0)));
    color = fog(color.rgb, rayLength - uFogStart, rayDir, sunDir);
  }

  if (uBloom) {
    color.rgb += texture2D(uBloomMap, vTexCoord0).rgb * uBloomIntensity;
  }
  color.rgb *= uExposure;
  color.rgb = tonemapUncharted2(color.rgb);
  gl_FragColor = encode(color, uOutputEncoding);
}
`;var cc={};cc=/* glsl */`
// https://gist.github.com/fisch0920/6770311
// Updated by marcin.ignac@gmail.com 2017-05-08
#extension GL_OES_standard_derivatives : enable

precision mediump float;

// total number of samples at each fragment
#define NUM_SAMPLES 11

#define NUM_SPIRAL_TURNS 7

#define USE_ACTUAL_NORMALS false

#define VARIATION 1

#define PI 3.14159265359

uniform sampler2D uDepthMap;
uniform sampler2D uNormalMap;
uniform sampler2D uNoiseMap;

uniform float uFOV;
uniform float uIntensity;
uniform vec2  uNoiseScale;
uniform float uSampleRadiusWS;
uniform float uBias;
uniform float uNear;
uniform float uFar;
uniform float uFov;
uniform mat4 viewProjectionInverseMatrix;
uniform mat4 viewMatrix;
uniform vec2 uScreenSize;
uniform vec3 cameraPositionWorldSpace;

// reconstructs view-space unit normal from view-space position
${uN.depthRead}

vec3 getPositionVSOld(vec2 uv) {
  // float depth = decodeGBufferDepth(uDepthMap, uv, clipFar);
  float depth = readDepth(uDepthMap, uv, uNear, uFar);

  vec2 uv2  = uv * 2.0 - vec2(1.0);
  vec4 temp = viewProjectionInverseMatrix * vec4(uv2, -1.0, 1.0);
  vec3 cameraFarPlaneWS = (temp / temp.w).xyz;

  vec3 cameraToPositionRay = normalize(cameraFarPlaneWS - cameraPositionWorldSpace);
  vec3 originWS = cameraToPositionRay * depth + cameraPositionWorldSpace;
  vec3 originVS = (viewMatrix * vec4(originWS, 1.0)).xyz;

  return originVS;
}

vec3 getFarViewDir(vec2 tc) {
  float hfar = 2.0 * tan(uFov/2.0) * uFar;
  float wfar = hfar * uScreenSize.x / uScreenSize.y;
  vec3 dir = (vec3(wfar * (tc.x - 0.5), hfar * (tc.y - 0.5), -uFar));
  return dir;
}

vec3 getViewRay(vec2 tc) {
  vec3 ray = normalize(getFarViewDir(tc));
  return ray;
}


//asumming z comes from depth buffer (ndc coords) and it's not a linear distance from the camera but
//perpendicular to the near/far clipping planes
//http://mynameismjp.wordpress.com/2010/09/05/position-from-depth-3/
//assumes z = eye space z
vec3 reconstructPositionFromDepth(vec2 texCoord, float z) {
  vec3 ray = getFarViewDir(texCoord);
  vec3 pos = ray;
  return pos * z / uFar;
}

vec3 getPositionVS(vec2 uv) {
  float depth = readDepth(uDepthMap, uv, uNear, uFar);
  return reconstructPositionFromDepth(uv, depth);
}

// returns a unit vector and a screen-space radius for the tap on a unit disk
// (the caller should scale by the actual disk radius)
vec2 tapLocation(int sampleNumber, float spinAngle, out float radiusSS) {
  // radius relative to radiusSS
  float alpha = (float(sampleNumber) + 0.5) * (1.0 / float(NUM_SAMPLES));
  float angle = alpha * (float(NUM_SPIRAL_TURNS) * 6.28) + spinAngle;

  radiusSS = alpha;
  return vec2(cos(angle), sin(angle));
}

vec3 getOffsetPositionVS(vec2 uv, vec2 unitOffset, float radiusSS) {
  uv = uv + radiusSS * unitOffset * (1.0 / uScreenSize);

  return getPositionVS(uv);
}

float sampleAO(vec2 uv, vec3 positionVS, vec3 normalVS, float sampleRadiusSS,
               int tapIndex, float rotationAngle)
{
  const float epsilon = 0.01;
  float radius2 = uSampleRadiusWS * uSampleRadiusWS;

  // offset on the unit disk, spun for this pixel
  float radiusSS = 0.0;
  vec2 unitOffset = tapLocation(tapIndex, rotationAngle, radiusSS);
  radiusSS *= sampleRadiusSS;

  vec3 Q = getOffsetPositionVS(uv, unitOffset, radiusSS);
  vec3 v = Q - positionVS;

  float vv = dot(v, v);
  float vn = dot(v, normalVS) - uBias;

  // return vv;

#if VARIATION == 0

  // (from the HPG12 paper)
  // Note large epsilon to avoid overdarkening within cracks
  return float(vv < radius2) * max(vn / (epsilon + vv), 0.0);

#elif VARIATION == 1 // default / recommended

  // Smoother transition to zero (lowers contrast, smoothing out corners). [Recommended]
  float f = max(radius2 - vv, 0.0) / radius2;
  // gl_FragColor = vec4(sampleRadiusSS, 0.0, 0.0, 1.0);
  // return vv / 1000.0;
  return f * f * f * max((vn) / (epsilon + vv), 0.0);

#elif VARIATION == 2

  // Medium contrast (which looks better at high radii), no division.  Note that the
  // contribution still falls off with radius^2, but we've adjusted the rate in a way that is
  // more computationally efficient and happens to be aesthetically pleasing.
  float invRadius2 = 1.0 / radius2;
  return 4.0 * max(1.0 - vv * invRadius2, 0.0) * max(vn, 0.0);

#else

  // Low contrast, no division operation
  return 2.0 * float(vv < radius2) * max(vn, 0.0);

#endif
}

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
  vec2 vUV = vec2(gl_FragCoord.x / uScreenSize.x, gl_FragCoord.y / uScreenSize.y);
  vec3 originVS = getPositionVS(vUV);

  vec3 normalVS = texture2D(uNormalMap, vUV).rgb * 2.0 - 1.0;

  vec3 sampleNoise = texture2D(uNoiseMap, vUV * uNoiseScale).xyz;

  //float randomPatternRotationAngle = 2.0 * PI * sampleNoise.x;
  float randomPatternRotationAngle = rand(gl_FragCoord.xy) * PI * 2.0 * sampleNoise.x;

  float radiusSS  = 0.0; // radius of influence in screen space
  float radiusWS  = 0.0; // radius of influence in world space
  float occlusion = 0.0;

  // TODO (travis): don't hardcode projScale
  float projScale = 40.0;//1.0 / (2.0 * tan(uFOV * 0.5));
   // Matrix4 P;
    // camera.getProjectUnitMatrix(Rect2D::xywh(0, 0, width, height), P);
    // const Vector4 projConstant
        // (float(-2.0 / (width * P[0][0])),
         // float(-2.0 / (height * P[1][1])),
         // float((1.0 - (double)P[0][2]) / P[0][0]),
         // float((1.0 + (double)P[1][2]) / P[1][1]));

  // float projScale = 4.0 / (2.0 * tan(uFov * 0.5));
  radiusWS = uSampleRadiusWS;
  radiusSS = projScale * radiusWS / originVS.z;// / originVS.y; // WAT?

  for (int i = 0; i < NUM_SAMPLES; ++i) {
    occlusion += sampleAO(vUV, originVS, normalVS, radiusSS, i,
                          randomPatternRotationAngle);
  }

  occlusion = 1.0 - occlusion / (4.0 * float(NUM_SAMPLES));
  occlusion = clamp(pow(occlusion, 1.0 + uIntensity), 0.0, 1.0);
  gl_FragColor = vec4(occlusion, occlusion, occlusion, 1.0);
}
`;var cf={};cf=/* glsl */`
precision highp float;

varying vec2 vTexCoord;

uniform float near;
uniform float far;

uniform sampler2D image;
uniform vec2 imageSize;

uniform sampler2D depthMap;
uniform vec2 depthMapSize;

uniform vec2 direction;

uniform float sharpness;

${uN.depthRead}

//blur weight based on https://github.com/nvpro-samples/gl_ssao/blob/master/hbao_blur.frag.glsl
vec4 bilateralBlur(sampler2D image, vec2 imageResolution, sampler2D depthMap, vec2 depthMapResolution, vec2 uv, vec2 direction) {
  vec4 color = vec4(0.0);
  const int numSamples = 9;
  const float blurRadius = float(numSamples) / 2.0;
  const float blurSigma = blurRadius * 0.5;
  const float blurFalloff = 1.0 / (2.0*blurSigma*blurSigma);

  float centerDepth = readDepth(depthMap, uv, near, far);
  float dist = 0.0;
  
  float weightSum = 0.0;
  for (float i = -8.0; i <= 8.0; i += 2.0) {
    float r = i;
    vec2 off = direction * r;
    float sampleDepth = readDepth(depthMap, uv + (off / imageResolution), near, far);
    float diff = (sampleDepth - centerDepth) * sharpness;
    float weight = exp2(-r * r * blurFalloff - diff * diff);
    weightSum += weight;
    color += texture2D(image, uv + (off / imageResolution)) * weight;
  }
  color /= weightSum;
  return color;
}

void main() {
  vec2 vUV = vec2(gl_FragCoord.x / depthMapSize.x, gl_FragCoord.y / depthMapSize.y);
  gl_FragColor = bilateralBlur(image, imageSize, depthMap, depthMapSize, vUV, direction);
}
`;var cd={};cd=/* glsl */`
precision highp float;

varying vec2 vTexCoord;

uniform float near;
uniform float far;
uniform float fov;

uniform sampler2D image;
uniform sampler2D emissiveTex;
uniform vec2 imageSize;

uniform float uExposure;
uniform float uBloomThreshold;

float perceivedBrightness(vec3 c) {
  return (c.r + c.g + c.b) / 3.0;
  //return 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
}

void main() {
  vec2 vUV = vec2(gl_FragCoord.x / imageSize.x, gl_FragCoord.y / imageSize.y);
  vec4 color = texture2D(image, vUV);
  color.rgb *= uExposure;
  float brightness = perceivedBrightness(color.rgb);
  float smoothRange = 0.1;
  float t1 = uBloomThreshold * (1.0 - smoothRange);
  float t2 = uBloomThreshold * (1.0 + smoothRange);
  if (brightness > t1) {
    gl_FragColor = color * smoothstep(t1, t2, brightness);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
  }

  gl_FragColor += texture2D(emissiveTex, vUV);
}
`;var cp={};cp=/* glsl */`
#extension GL_EXT_shader_texture_lod : enable

precision highp float;

varying vec2 vTexCoord0;

uniform sampler2D image;
uniform vec2 imageSize;

vec3 sampleBloom (sampler2D texture, vec2 uv) {
  vec3 color = vec3(0.0);
  vec2 s = 1.0 / imageSize;
  color += texture2D(texture, uv + vec2(-1.0, -1.0) * s).rgb;
  color += texture2D(texture, uv + vec2( 0.0, -1.0) * s).rgb;
  color += texture2D(texture, uv + vec2( 1.0, -1.0) * s).rgb;
  color += texture2D(texture, uv + vec2( 0.0, -1.0) * s).rgb;
  color += texture2D(texture, uv + vec2( 0.0,  0.0) * s).rgb;
  color += texture2D(texture, uv + vec2( 0.0,  1.0) * s).rgb;
  color += texture2D(texture, uv + vec2(-1.0,  1.0) * s).rgb;
  color += texture2D(texture, uv + vec2( 0.0,  1.0) * s).rgb;
  color += texture2D(texture, uv + vec2( 1.0,  1.0) * s).rgb;
  color /= 9.0;
  return color;
}

void main () {
  gl_FragColor.rgb = sampleBloom(image, vTexCoord0);
  gl_FragColor.a = 1.0;
}
`;var ch={};ch=/* glsl */`
precision highp float;

varying vec2 vTexCoord0;

uniform sampler2D image;
uniform vec2 imageSize;

uniform float intensity;

float Brightness(vec3 c) {
  return max(max(c.r, c.g), c.b);
}

void main () {
  vec4 d = (1.0 / imageSize).xyxy * vec4(-1, -1, +1, +1);

  // vec4 color = vec4(0.0);
  // color += texture2D(image, vTexCoord0 + d.xy);
  // color += texture2D(image, vTexCoord0 + d.zy);
  // color += texture2D(image, vTexCoord0);
  // color += texture2D(image, vTexCoord0 + d.xw);
  // color += texture2D(image, vTexCoord0 + d.zw);
  // gl_FragColor = color / 5.0 * intensity;

  vec4 s1 = texture2D(image, vTexCoord0 + d.xy);
  vec4 s2 = texture2D(image, vTexCoord0 + d.zy);
  vec4 s3 = texture2D(image, vTexCoord0 + d.xw);
  vec4 s4 = texture2D(image, vTexCoord0 + d.zw);

  // Karis's luma weighted average (using brightness instead of luma)
  float s1w = 1.0 / (Brightness(s1.xyz) + 1.0);
  float s2w = 1.0 / (Brightness(s2.xyz) + 1.0);
  float s3w = 1.0 / (Brightness(s3.xyz) + 1.0);
  float s4w = 1.0 / (Brightness(s4.xyz) + 1.0);
  float one_div_wsum = 1.0 / (s1w + s2w + s3w + s4w);

  vec4 color = (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * one_div_wsum;
  gl_FragColor = color * intensity;
}
`;var cm={};cm=/* glsl */`
// based on Bokeh depth of field in a single pass
// http://blog.tuxedolabs.com/2018/05/04/bokeh-depth-of-field-in-single-pass.html
precision highp float;

varying vec2 vTexCoord0;
uniform sampler2D image; //Image to be processed
uniform vec2 imageSize;
uniform sampler2D depthMap; //Linear depth, where 1.0 == far plane

uniform vec2 uPixelSize; //The size of a pixel: vec2(1.0/width, 1.0/height)
uniform float uFar; // Far plane
uniform float uNear;
uniform float uFocusDistance;
uniform float uFStop;
uniform float uFocalLength;
uniform bool uDOFDebug;
uniform float uSensorHeight;

const float GOLDEN_ANGLE = 2.39996323;  // rad
const float MAX_BLUR_SIZE = 30.0;
const float RAD_SCALE = 1.0; // Smaller = nicer blur, larger = faster
const float NUM_ITERATIONS = 50.0;

${uN.depthRead}

float getCoCSize(float depth, float focusDistance, float maxCoC) {
  float coc = clamp((1.0 - focusDistance / depth) * maxCoC, -1.0, 1.0); // (1 - mm/mm) * mm = mm
  return abs(coc) * MAX_BLUR_SIZE;
}

vec3 depthOfField(vec2 texCoord, float focusDistance, float maxCoC) {
  float resolutionScale = imageSize.y / 1080.0;

  float centerDepth = readDepth(depthMap, texCoord, uNear, uFar) * 1000.0; //m -> mm
  float centerSize = getCoCSize(centerDepth, focusDistance, maxCoC);

  if (uDOFDebug && texCoord.x > 0.5) {
    float coc = (1.0 - focusDistance / centerDepth) * maxCoC;
    if (texCoord.x > 0.90) {
      float depth = texCoord.y * 1000.0 * 100.0; //100m
      if (texCoord.x <= 0.95) { 
        float t = (texCoord.x - 0.9) * 20.0;
        float coc = (1.0 - focusDistance / depth) * maxCoC * 10.0;
        coc = abs(coc);
        if (coc > t) return vec3(1.0);
        return vec3(0.0);
      }
      if (texCoord.x > 0.97) {
        if (depth > focusDistance - 250.0 && depth < focusDistance + 250.0) {
          return vec3(1.0, 1.0, 0.0);
        }
        return vec3(floor(texCoord.y * 10.0)) / 10.0;
      }
      float c = 0.03; //0.03mm for 35mm format
      float H = uFocalLength * uFocalLength / (uFStop * c); //mm
      float Dn = H * focusDistance / (H + focusDistance);
      float Df = H * focusDistance / (H - focusDistance);
      if (depth > H - 250.0 && depth < H + 250.0) return vec3(1.0, 1.0, 0.0);
      if (depth < Dn) return vec3(1.0, 0.0, 0.0);
      if (depth > Df) return vec3(1.0, 0.0, 0.0);
      return vec3(0.0, 1.0, 0.0);
    }
    return vec3(floor(abs(coc) / 0.1 * 100.0) / 100.0, 0.0, 0.0);

    float c = abs(coc);
    c = c / (1.0 + c); // tonemapping to avoid burning the color
    c = pow(c, 2.2); // gamma to linear

    if (coc > 0.0) return vec3(c, 0.0, 0.0);
    else return vec3(0.0, 0.0, c);
  }
  vec3 color = texture2D(image, vTexCoord0).rgb;
  float tot = 1.0;
  float radius = RAD_SCALE;
  for (float ang = 0.0; ang < GOLDEN_ANGLE * NUM_ITERATIONS; ang += GOLDEN_ANGLE){
    vec2 tc = texCoord + vec2(cos(ang), sin(ang)) * uPixelSize * radius * resolutionScale;
    vec3 sampleColor = texture2D(image, tc).rgb;
    float sampleDepth = readDepth(depthMap, tc, uNear, uFar) * 1000.0; //m -> mm;
    float sampleSize = getCoCSize(sampleDepth, focusDistance, maxCoC);
    if (sampleDepth > centerDepth)
      sampleSize = clamp(sampleSize, 0.0, centerSize * 2.0);
    float m = smoothstep(radius - 0.5, radius + 0.5, sampleSize);
    color += mix(color/tot, sampleColor, m);
    tot += 1.0;
    radius += RAD_SCALE / radius;

    // Not sure if this ever happens as we exit after 50 iterations anyway
    if (radius > MAX_BLUR_SIZE) {
       break;
    }
  }
  return color /= tot;
}

void main () {
  float F = uFocalLength;

  float A = F / uFStop;
  float focusDistance = uFocusDistance * 1000.0; // m -> mm
  float maxCoC = A * F / (focusDistance - F); //mm * mm / mm = mm

  vec3 color = depthOfField(vTexCoord0, focusDistance, maxCoC);
  gl_FragColor = vec4(color, 1.0);
}


`;let cg=new Float32Array(256);for(let e=0;e<64;e++){var cv=[2*uO.float()-1,2*uO.float()-1,uO.float(),1];lq.normalize(cv);var cy=uO.float();cy=uc.lerp(.1,1,cy*cy),lq.scale(cv,cy),cg[4*e+0]=cv[0],cg[4*e+1]=cv[1],cg[4*e+2]=cv[2],cg[4*e+3]=cv[3]}let cb=new Float32Array(65536);for(let e=0;e<16384;e++)// let noiseSample = [
//   random.float() * 2 - 1,
//   random.float() * 2 - 1,
//   0,
//   1
// ]
cb[4*e+0]=cv[0],cb[4*e+1]=cv[1],cb[4*e+2]=cv[2],cb[4*e+3]=cv[3];function cx(e){let t=e.ctx.gl;this.type="PostProcessing",this.enabled=!0,this.changed=new l6,this.entity=null,this.rgbm=!1,this.depthPrepass=!0,this.backgroundColor=[0,0,0,1],this.viewMatrix=lX.create(),this.viewport=[0,0,t.drawingBufferWidth,t.drawingBufferHeight],this.fxaa=!1,this.fog=!1,this.fogColor=[.5,.5,.5],this.fogStart=5,this.fogDensity=.15,this.inscatteringCoeffs=[.3,.3,.3],this.ssao=!1,this.ssaoIntensity=5,this.ssaoRadius=12,this.ssaoBias=.01,this.ssaoBlurRadius=2,this.ssaoBlurSharpness=10,this.dof=!1,this.dofDebug=!1,this.dofFocusDistance=5,this.dofAperture=1,this.bloom=!1,this.bloomRadius=1,this.bloomThreshold=1,this.bloomIntensity=.1,this.sunPosition=[1,1,1],this.sunColor=[.98,.98,.7],this.sunDispertion=.2,this.sunIntensity=.1,this._textures=[],this.set(e)}cx.prototype.init=function(e){this.entity=e;let t=this.entity&&this.entity.getComponent("Camera");t&&this.set({viewport:t.viewport,viewMatrix:t.viewMatrix}),this.enabled&&this.ctx.capabilities.maxColorAttachments<2&&(this.enabled=!1,console.log(`pex-renderer disabling postprocess as MAX_COLOR_ATTACHMENTS=${this.ctx.capabilities.maxColorAttachments}`),console.log("pex-renderer ctx",this.ctx.capabilities)),this.enabled&&!this._fsqMesh&&this.initPostproces()},cx.prototype.set=function(e){Object.assign(this,e),e.viewport&&this._textures.forEach(t=>{let r=Math.floor(e.viewport[2]*(t.sizeScale||1)),n=Math.floor(e.viewport[3]*(t.sizeScale||1));(t.width!==r||t.height!==n)&&this.ctx.update(t,{width:Math.max(r,1),height:Math.max(n,1)})}),Object.keys(e).forEach(e=>this.changed.dispatch(e))},cx.prototype.initPostproces=function(){let e=this.ctx,t=this.viewport[2],r=this.viewport[3];this._fsqMesh={attributes:{aPosition:e.vertexBuffer([[-1,-1],[1,-1],[1,1],[-1,1]])},indices:e.indexBuffer([[0,1,2],[0,2,3]])},// Init resizable textures
this._frameColorTex=e.texture2D({name:"frameColorTex",width:t,height:r,pixelFormat:this.rgbm?e.PixelFormat.RGBA8:e.PixelFormat.RGBA16F,encoding:this.rgbm?e.Encoding.RGBM:e.Encoding.Linear}),this._frameEmissiveTex=e.texture2D({name:"frameColorTex",width:t,height:r,pixelFormat:this.rgbm?e.PixelFormat.RGBA8:e.PixelFormat.RGBA16F,encoding:this.rgbm?e.Encoding.RGBM:e.Encoding.Linear}),this._frameNormalTex=e.texture2D({name:"frameNormalTex",width:t,height:r,pixelFormat:e.PixelFormat.RGBA8,encoding:e.Encoding.Linear}),this._frameDepthTex=e.texture2D({name:"frameDepthTex",width:t,height:r,pixelFormat:e.PixelFormat.Depth24,encoding:e.Encoding.Linear}),this._frameAOTex=e.texture2D({name:"frameAOTex",width:t,height:r,pixelFormat:e.PixelFormat.RGBA8,encoding:e.Encoding.Linear}),this._frameAOBlurTex=e.texture2D({name:"frameAOBlurTex",width:t,height:r,pixelFormat:e.PixelFormat.RGBA8,encoding:e.Encoding.Linear}),this._frameDofBlurTex=e.texture2D({name:"frameDofBlurTex",width:t,height:r,pixelFormat:this.rgbm?e.PixelFormat.RGBA8:e.PixelFormat.RGBA16F,encoding:this.rgbm?e.Encoding.RGBM:e.Encoding.Linear}),this._frameBloomTex=e.texture2D({name:"frameBloomHTex",width:t,height:r,pixelFormat:this.rgbm?e.PixelFormat.RGBA8:e.PixelFormat.RGBA16F,encoding:this.rgbm?e.Encoding.RGBM:e.Encoding.Linear}),this._frameDownSampleTextures=Array.from({length:9},(e,t)=>t).map(n=>{let o=Math.pow(2,n+1),i=e.texture2D({width:Math.max(Math.floor(t/o),1),height:Math.max(Math.floor(r/o),1),pixelFormat:e.PixelFormat.RGBA16F,encoding:e.Encoding.Linear,min:e.Filter.Linear,mag:e.Filter.Linear});return i.sizeScale=1/o,i}),this._textures=[this._frameColorTex,this._frameEmissiveTex,this._frameNormalTex,this._frameDepthTex,this._frameAOTex,this._frameAOBlurTex,this._frameDofBlurTex,this._frameBloomTex,...this._frameDownSampleTextures],// Init fixed sizes textures
e.gl.getExtension("OES_texture_float "),this._ssaoKernelMap=e.texture2D({width:8,height:8,data:cg,pixelFormat:e.PixelFormat.RGBA32F,encoding:e.Encoding.Linear,wrap:e.Wrap.Repeat}),this._ssaoNoiseMap=e.texture2D({width:128,height:128,data:cb,pixelFormat:e.PixelFormat.RGBA32F,encoding:e.Encoding.Linear,wrap:e.Wrap.Repeat,mag:e.Filter.Linear,min:e.Filter.Linear}),// Init commands
this._drawFrameNormalsFboCommand={name:"PostProcessing.drawFrameNormals",pass:e.pass({name:"PostProcessing.drawFrameNormals",color:[this._frameNormalTex],depth:this._frameDepthTex,clearColor:[0,0,0,0],clearDepth:1})},this._drawFrameFboCommand={name:"PostProcessing.drawFrame",pass:e.pass({name:"PostProcessing.drawFrame",color:[this._frameColorTex,this._frameEmissiveTex],depth:this._frameDepthTex,clearColor:this.backgroundColor})},this._ssaoCmd={name:"PostProcessing.ssao",pass:e.pass({name:"PostProcessing.ssao",color:[this._frameAOTex],clearColor:[0,0,0,1]}),pipeline:e.pipeline({vert:uR,frag:cc}),attributes:this._fsqMesh.attributes,indices:this._fsqMesh.indices,uniforms:{uDepthMap:this._frameDepthTex,uNormalMap:this._frameNormalTex,uNoiseMap:this._ssaoNoiseMap}},this._bilateralBlurHCmd={name:"PostProcessing.bilateralBlurH",pass:e.pass({name:"PostProcessing.bilateralBlurH",color:[this._frameAOBlurTex],clearColor:[1,1,0,1]}),pipeline:e.pipeline({vert:uR,frag:cf}),attributes:this._fsqMesh.attributes,indices:this._fsqMesh.indices,uniforms:{depthMap:this._frameDepthTex,image:this._frameAOTex,// direction: [State.bilateralBlurRadius, 0], // TODO:
direction:[.5,0]}},this._bilateralBlurVCmd={name:"PostProcessing.bilateralBlurV",pass:e.pass({name:"PostProcessing.bilateralBlurV",color:[this._frameAOTex],clearColor:[1,1,0,1]}),pipeline:e.pipeline({vert:uR,frag:cf}),attributes:this._fsqMesh.attributes,indices:this._fsqMesh.indices,uniforms:{depthMap:this._frameDepthTex,image:this._frameAOBlurTex,// direction: [0, State.bilateralBlurRadius], // TODO:
direction:[0,.5]}},this._dofCmd={name:"PostProcessing.dof",pass:e.pass({name:"PostProcessing.dof",color:[this._frameDofBlurTex],clearColor:[1,1,1,1]}),pipeline:e.pipeline({vert:uR,frag:cm}),attributes:this._fsqMesh.attributes,indices:this._fsqMesh.indices,uniforms:{depthMap:this._frameDepthTex,image:this._frameColorTex}},this._thresholdCmd={name:"PostProcessing.threshold",pass:e.pass({name:"PostProcessing.threshold",color:[this._frameBloomTex],clearColor:[1,1,1,1]}),pipeline:e.pipeline({vert:uR,frag:cd}),attributes:this._fsqMesh.attributes,indices:this._fsqMesh.indices,uniforms:{image:this._frameColorTex,emissiveTex:this._frameEmissiveTex,// TODO: this should be called screenSize as it's used to calculate uv
imageSize:[this._frameBloomTex.width,this._frameBloomTex.height]}},this._downSampleCmds=this._frameDownSampleTextures.map((t,r)=>{let n=0===r?this._frameBloomTex:this._frameDownSampleTextures[r-1];return{name:`PostProcessing.downSample[${r}]`,pass:e.pass({name:`PostProcessing.downSample[${r}]`,color:[t]}),pipeline:e.pipeline({vert:uR,frag:ch}),attributes:this._fsqMesh.attributes,indices:this._fsqMesh.indices,uniforms:{image:n,imageSize:[n.width,n.height],intensity:this.bloomRadius}}}),this._bloomCmds=this._frameDownSampleTextures.slice(1).map((t,r)=>({name:`PostProcessing.bloom[${r}]`,pass:e.pass({name:`PostProcessing.bloom[${r}]`,color:[this._frameBloomTex]}),pipeline:e.pipeline({vert:uR,frag:cp,blend:!0}),attributes:this._fsqMesh.attributes,indices:this._fsqMesh.indices,uniforms:{image:t,imageSize:[t.width,t.height]}})),// this._overlayProgram = ctx.program({ vert: POSTPROCESS_VERT, frag: POSTPROCESS_FRAG }) // TODO
this._blitCmd={name:"PostProcessing.blit",pipeline:e.pipeline({vert:uR,frag:uL}),attributes:this._fsqMesh.attributes,indices:this._fsqMesh.indices,uniforms:{uOverlay:this._frameColorTex,uOverlayEncoding:this._frameColorTex.encoding,uViewMatrix:this.viewMatrix,depthMap:this._frameDepthTex,depthMapSize:[t,r],uBloomMap:this._frameBloomTex,uEmissiveMap:this._frameEmissiveTex}}},uP=function(e){return new cx(e)};var cw={},lX=X("iFSYq"),lq=X("ksOMs"),uu=X("iGt5r"),cS={},c_={},cE=(c_={create:function(){return[0,0,0]},set:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},copy:function(e){return e.slice(0)},equals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]},add:function(e,t){return e[0]+=t[0],e[1]+=t[1],e[2]+=t[2],e},addScaled:function(e,t,r){return e[0]+=t[0]*r,e[1]+=t[1]*r,e[2]+=t[2]*r,e},sub:function(e,t){return e[0]-=t[0],e[1]-=t[1],e[2]-=t[2],e},scale:function(e,t){return e[0]*=t,e[1]*=t,e[2]*=t,e},multMat4:function(e,t){var r=e[0],n=e[1],o=e[2];return e[0]=t[0]*r+t[4]*n+t[8]*o+t[12],e[1]=t[1]*r+t[5]*n+t[9]*o+t[13],e[2]=t[2]*r+t[6]*n+t[10]*o+t[14],e},multQuat:function(e,t){var r=e[0],n=e[1],o=e[2],i=t[0],a=t[1],s=t[2],l=t[3],u=l*r+a*o-s*n,c=l*n+s*r-i*o,f=l*o+i*n-a*r,d=-i*r-a*n-s*o;return e[0]=u*l+-(d*i)+-(c*s)- -(f*a),e[1]=c*l+-(d*a)+-(f*i)- -(u*s),e[2]=f*l+-(d*s)+-(u*a)- -(c*i),e},dot:function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},cross:function(e,t){var r=e[0],n=e[1],o=e[2],i=t[0],a=t[1],s=t[2];return e[0]=n*s-a*o,e[1]=o*i-s*r,e[2]=r*a-i*n,e},length:function(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)},lengthSq:function(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n},normalize:function(e){var t=e[0],r=e[1],n=e[2],o=Math.sqrt(t*t+r*r+n*n);return o=1/(o||1),e[0]*=o,e[1]*=o,e[2]*=o,e},distance:function(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+n*n+o*o)},distanceSq:function(e,t){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o},limit:function(e,t){var r=e[0],n=e[1],o=e[2],i=r*r+n*n+o*o,a=t*t;if(a>0&&i>a){var s=t/Math.sqrt(i);e[0]*=s,e[1]*=s,e[2]*=s}return e},lerp:function(e,t,r){var n=e[0],o=e[1],i=e[2];return e[0]=n+(t[0]-n)*r,e[1]=o+(t[1]-o)*r,e[2]=i+(t[2]-i)*r,e},toString:function(e,t){var r=Math.pow(10,void 0!==t?t:4);return"["+(Math.floor(e[0]*r)/r+", "+Math.floor(e[1]*r)/r+", "+Math.floor(e[2]*r)/r)+"]"}}).create(),cA=c_.create(),cM=c_.create(),cC=c_.create(),cT=c_.create(),cP=c_.create(),cO=c_.create(),cR=c_.create();cS={create:function(){return[[0,0,0],[0,0,1]]},hitTestTriangle:function(e,t,r){var n=t[0],o=t[1],i=t[2],a=e[0],s=e[1],l=c_.sub(c_.set(cE,o),n),u=c_.sub(c_.set(cA,i),n),c=c_.cross(c_.set(cM,l),u);if(1e-6>c_.length(c))return -1;var f=c_.sub(c_.set(cC,a),n),d=-c_.dot(c,f),p=c_.dot(c,s);if(1e-6>Math.abs(p))return 0===d?-2:-3;var h=d/p;if(h<-.000001)return -4;var m=c_.add(c_.set(cT,a),c_.scale(c_.set(cP,s),h)),g=c_.dot(l,l),v=c_.dot(l,u),y=c_.dot(u,u),b=c_.sub(c_.set(cO,m),n),x=c_.dot(b,l),w=c_.dot(b,u),S=v*v-g*y,_=(v*w-y*x)/S;if(_<-.000001||_>1.000001)return -5;var E=(v*x-g*w)/S;return E<-.000001||_+E>1.000001?-6:(r=void 0===r?c_.create():r,c_.set(r,l),c_.scale(r,_),c_.add(r,c_.scale(c_.set(cR,u),E)),c_.add(r,n),1)},hitTestPlane:function(e,t,r,n){var o=c_.set(cE,e[0]),i=c_.set(cA,e[1]);t=c_.set(cM,t);var a=c_.dot(i,r);if(0===a)return -1;var s=c_.dot(c_.sub(t,o),r)/a;return s<0?-2:(n=void 0===n?c_.create():n,c_.set(n,c_.add(o,c_.scale(i,s))),1)},intersectsAABB:// http://gamedev.stackexchange.com/questions/18436/most-efficient-aabb-vs-ray-collision-algorithms
function(e,t){var r=e[0],n=e[1],o=1/n[0],i=1/n[1],a=1/n[2],s=t[0],l=t[1],u=s[0],c=s[1],f=s[2],d=l[0],p=l[1],h=l[2],m=(u-r[0])*o,g=(d-r[0])*o,v=(c-r[1])*i,y=(p-r[1])*i,b=(f-r[2])*a,x=(h-r[2])*a,w=Math.max(Math.max(Math.min(m,g),Math.min(v,y)),Math.min(b,x)),S=Math.min(Math.min(Math.max(m,g),Math.max(v,y)),Math.max(b,x));return!(S<0||w>S)}};var cL={},cN={};cN=function(e,t,r){return e*(1-r)+t*r};var cD=Math.PI,cF=2*Math.PI;cL=function(e,t,r){return Math.abs((e=(e+cF)%cF)-(t=(t+cF)%cF))<cD?cN(e,t,r):e>t?(e-=cF,cN(e,t,r)):t>e?(t-=cF,cN(e,t,r)):void 0};var uc=X("i4aBd"),cI=uc.clamp,uc=X("i4aBd"),cU=uc.lerp,uc=X("i4aBd"),cz=uc.toRadians,uc=X("i4aBd"),ck=uc.toDegrees,cB={};cB=function(e,t,r){r=r||[0,0,0];let n=(t+90)/180*Math.PI,o=(90-e)/180*Math.PI;return r[0]=Math.sin(o)*Math.sin(n),r[1]=Math.cos(o),r[2]=Math.sin(o)*Math.cos(n),r};var cj={};cj=function(e,t){return(t=t||[0,0])[0]=90-Math.acos(e[1])/Math.PI*180,t[1]=-Math.atan2(e[2],e[0])/Math.PI*180,t};var c$={},cV={left:0,top:0};function cG(e){this.type="Orbiter",this.enabled=!0,this.changed=new l6,this.entity=null,this.dirty=!1;let t={target:[0,0,0],position:[0,0,5],matrix:lX.create(),invViewMatrix:lX.create(),dragging:!1,lat:0,lon:0,currentLat:0,currentLon:0,easing:.1,element:e.element||document,width:0,height:0,clickPosWindow:[0,0],dragPos:[0,0,0],dragPosWindow:[0,0],distance:1,currentDistance:1,minDistance:.1,maxDistance:10,minLat:-89.5,maxLat:89.5,minLon:-1/0,maxLon:1/0,zoomSlowdown:400,zoom:!0,pan:!0,drag:!0,dragSlowdown:4,clickTarget:[0,0,0],clickPosPlane:[0,0,0],dragPosPlane:[0,0,0],clickPosWorld:[0,0,0],dragPosWorld:[0,0,0],panPlane:null,autoUpdate:!0};this.set(t),this.set(e)}c$=function(e,t,r){t=t||e.currentTarget||e.srcElement,Array.isArray(r)||(r=[0,0]);var n,o=e.clientX||0,i=e.clientY||0,a=(n=t)===window||n===document||n===document.body?cV:n.getBoundingClientRect();return r[0]=o-a.left,r[1]=i-a.top,r},cG.prototype.init=function(e){this.entity=e,this.setup()},cG.prototype.set=function(e){if(Object.assign(this,e),e.target||e.position){let t=lq.distance(this.position,this.target),r=cj(lq.normalize(lq.sub(lq.copy(this.position),this.target)));this.lat=r[0],this.lon=r[1],this.currentLat=this.lat,this.currentLon=this.lon,this.distance=t,this.currentDistance=this.distance,this.minDistance=e.minDistance||t/10,this.maxDistance=e.maxDistance||10*t,this.minLat=e.minLat||-89.5,this.maxLat=e.maxLat||89.5,this.minLon=e.minLon||-1/0,this.maxLon=e.maxLon||1/0}Object.keys(e).forEach(e=>this.changed.dispatch(e))},cG.prototype.update=function(){let e=this.entity.getComponent("Camera");this.updateMatrix();let t=this.entity.transform,r=t.rotation;uu.fromMat4(r,this.matrix),e?(t.set({position:this.position,rotation:r}),"orthographic"===e.projection&&e.set({zoom:this.distance})):t.set({rotation:r})},cG.prototype.updateWindowSize=function(){let e=this.element.clientWidth||this.element.innerWidth,t=this.element.clientHeight||this.element.innerHeight;e!==this.width&&(this.width=e,this.height=t)},cG.prototype.updateMatrix=function(){let e=this.entity.getComponent("Camera"),t=this.position,r=this.target;this.lat=cI(this.lat,this.minLat,this.maxLat),this.lon=cI(this.lon,this.minLon,this.maxLon)%360,this.currentLat=ck(cL((cz(this.currentLat)+2*Math.PI)%(2*Math.PI),(cz(this.lat)+2*Math.PI)%(2*Math.PI),this.easing)),this.currentLon=ck(cL((cz(this.currentLon)+2*Math.PI)%(2*Math.PI),(cz(this.lon)+2*Math.PI)%(2*Math.PI),this.easing)),this.currentDistance=cU(this.currentDistance,this.distance,this.easing),// set new camera position according to the current
// rotation at distance relative to target
cB(this.currentLat,this.currentLon,t),lq.scale(t,this.currentDistance),lq.add(t,r),lX.identity(this.matrix),lX.lookAt(this.matrix,t,r,[0,1,0]),e&&lX.invert(this.matrix)},cG.prototype.setup=function(){let e=this;function t(e,t){return e.touches?c$(e.touches[0],t):c$(e,t)}function r(r){if(!e.enabled)return;let n=t(r,e.element);!function(t,r,n){let o=e.entity.getComponent("Camera");if(e.dragging=!0,e.dragPos[0]=t,e.dragPos[1]=r,o&&n&&e.pan){e.updateWindowSize(),e.clickPosWindow[0]=t,e.clickPosWindow[1]=r,lq.set(e.clickTarget,e.target);let n=lq.multMat4(lq.copy(e.clickTarget),o.viewMatrix);e.panPlane=[n,[0,0,1]],cS.hitTestPlane(o.getViewRay(e.clickPosWindow[0],e.clickPosWindow[1],e.width,e.height),e.panPlane[0],e.panPlane[1],e.clickPosPlane),cS.hitTestPlane(o.getViewRay(e.dragPosWindow[0],e.dragPosWindow[1],e.width,e.height),e.panPlane[0],e.panPlane[1],e.dragPosPlane)}else e.panPlane=null}(n[0],n[1],r.shiftKey||r.touches&&2===r.touches.length)}function n(r){if(!e.enabled)return;let n=t(r,e.element);!function(t,r,n){let o=e.entity.getComponent("Camera");if(e.dragging){if(o&&n&&e.panPlane){e.dragPosWindow[0]=t,e.dragPosWindow[1]=r,cS.hitTestPlane(o.getViewRay(e.clickPosWindow[0],e.clickPosWindow[1],e.width,e.height),e.panPlane[0],e.panPlane[1],e.clickPosPlane),cS.hitTestPlane(o.getViewRay(e.dragPosWindow[0],e.dragPosWindow[1],e.width,e.height),e.panPlane[0],e.panPlane[1],e.dragPosPlane),lX.set(e.invViewMatrix,o.viewMatrix),lX.invert(e.invViewMatrix),lq.multMat4(lq.set(e.clickPosWorld,e.clickPosPlane),e.invViewMatrix),lq.multMat4(lq.set(e.dragPosWorld,e.dragPosPlane),e.invViewMatrix);let n=lq.sub(lq.copy(e.dragPosWorld),e.clickPosWorld),i=lq.sub(lq.copy(e.clickTarget),n);e.set({target:i})}else if(e.drag){let n=t-e.dragPos[0],o=r-e.dragPos[1];e.dragPos[0]=t,e.dragPos[1]=r,e.lat+=o/e.dragSlowdown,e.lon-=n/e.dragSlowdown}}}(n[0],n[1],r.shiftKey||r.touches&&2===r.touches.length)}function o(){e.enabled&&(e.dragging=!1,e.panPlane=null)}function i(t){if(e.enabled){var r;r=t.deltaY,e.zoom&&(e.distance*=1+r/e.zoomSlowdown,e.distance=cI(e.distance,e.minDistance,e.maxDistance)),t.preventDefault()}}function a(t){e.enabled&&(t.preventDefault(),r(t))}function s(t){e.enabled&&(t.preventDefault(),n(t))}this._onMouseDown=r,this._onTouchStart=a,this._onMouseMove=n,this._onTouchMove=s,this._onMouseUp=o,this._onWheel=i,this.element.addEventListener("mousedown",r),this.element.addEventListener("wheel",i),this.element.addEventListener("touchstart",a),this.element.addEventListener("touchmove",s,{passive:!1}),this.element.addEventListener("touchend",o),document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)},cG.prototype.dispose=function(){this.element.removeEventListener("mousedown",this._onMouseDown),this.element.removeEventListener("wheel",this._onWheel),this.element.removeEventListener("touchstart",this._onTouchStart),this.element.removeEventListener("touchmove",this._onMouseMove),this.element.removeEventListener("touchend",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("mouseup",this._onMouseUp)},cw=function(e){return new cG(e)};var cq={};function cH(e){this.type="AmbientLight",this.enabled=!0,this.changed=new l6,this.color=[1,1,1,1],this.intensity=1,this.set(e)}cH.prototype.init=function(e){this.entity=e},cH.prototype.set=function(e){Object.assign(this,e),(void 0!==e.color||void 0!==e.intensity)&&(this.color[3]=this.intensity),Object.keys(e).forEach(e=>this.changed.dispatch(e))},cq=function(e){return new cH(e)};var cW={},lX=X("iFSYq");let cX=X("iz6tX")("pex-renderer:directional-light");function cK(e){this.type="DirectionalLight",this.enabled=!0,this.changed=new l6,this.shadows=!1,this.color=[1,1,1,1],this.intensity=1,this.bias=.1,this.castShadows=!1;let t=e.ctx;this._ctx=t,this._left=-10,this._right=10,this._bottom=-10,this._top=10,this._near=2,this._far=40,this._viewMatrix=lX.create(),this._projectionMatrix=lX.create(),this.set(e)}cK.prototype.init=function(e){this.entity=e},cK.prototype.set=function(e){Object.assign(this,e),(void 0!==e.color||void 0!==e.intensity)&&(this.color[3]=this.intensity),Object.keys(e).forEach(e=>this.changed.dispatch(e)),e.castShadows&&!this._ctx.capabilities.depthTexture&&(console.warn("DirectionalLight.castShadows is not supported. WEBGL_depth_texture missing."),this.castShadows=!1),this.castShadows?this._colorMap||this.allocateResources():this._colorMap&&this.disposeResources()},cK.prototype.allocateResources=function(){cX("allocatedResources");let e=this._ctx;this._colorMap=e.texture2D({name:"directionalLightColorMap",width:1024,height:1024,pixelFormat:e.PixelFormat.RGBA8,encoding:e.Encoding.Linear,min:e.Filter.Linear,mag:e.Filter.Linear}),this._shadowMap=e.texture2D({name:"directionalLightShadowMap",width:1024,height:1024,pixelFormat:e.PixelFormat.Depth,encoding:e.Encoding.Linear}),this._shadowMapDrawCommand={name:"DirectionalLight.shadowMap",pass:e.pass({name:"DirectionalLight.shadowMap",color:[this._colorMap],depth:this._shadowMap,clearColor:[0,0,0,1],clearDepth:1}),viewport:[0,0,1024,1024]// TODO: viewport bug
}},cK.prototype.disposeResources=function(){cX("disposeResources");let e=this._ctx;e.dispose(this._colorMap),this._colorMap=null,e.dispose(this._shadowMap),this._shadowMap=null,e.dispose(this._shadowMapDrawCommand.pipeline),this._shadowMapDrawCommand=null},cW=function(e){return new cK(e)};var cY={},cZ=ub.mat4;function cJ(e){this.type="PointLight",this.enabled=!0,this.changed=new l6,this.color=[1,1,1,1],this.intensity=1,this.range=10,this.castShadows=!1;let t=e.ctx;this._ctx=t,this.set(e)}cJ.prototype.init=function(e){this.entity=e},cJ.prototype.set=function(e){Object.assign(this,e),(void 0!==e.color||void 0!==e.intensity)&&(this.color[3]=this.intensity),e.castShadows&&!this._ctx.capabilities.depthTexture&&(console.warn("PointLight.castShadows is not supported. WEBGL_depth_texture missing."),this.castShadows=!1),Object.keys(e).forEach(e=>this.changed.dispatch(e)),this.castShadows?this._shadowCubemap||this.allocateResources():this._shadowCubemap&&this.disposeResources()},cJ.prototype.allocateResources=function(){let e=this._ctx;this._shadowCubemap=e.textureCube({width:512,height:512,pixelFormat:this.rgbm?e.PixelFormat.RGBA8:e.PixelFormat.RGBA16F,encoding:this.rgbm?e.Encoding.RGBM:e.Encoding.Linear}),this._shadowMap=e.texture2D({name:"pointLightShadowMap",width:512,height:512,pixelFormat:e.PixelFormat.Depth,encoding:e.Encoding.Linear}),this._sides=[{eye:[0,0,0],target:[1,0,0],up:[0,-1,0]},{eye:[0,0,0],target:[-1,0,0],up:[0,-1,0]},{eye:[0,0,0],target:[0,1,0],up:[0,0,1]},{eye:[0,0,0],target:[0,-1,0],up:[0,0,-1]},{eye:[0,0,0],target:[0,0,1],up:[0,-1,0]},{eye:[0,0,0],target:[0,0,-1],up:[0,-1,0]}].map((t,r)=>(t.projectionMatrix=cZ.perspective(cZ.create(),Math.PI/2,1,.1,100)// TODO: change this to radians
    ,t.viewMatrix=cZ.lookAt(cZ.create(),t.eye,t.target,t.up),t.drawPassCmd={name:"PointLight.sidePass",pass:e.pass({name:"PointLight.sidePass",depth:this._shadowMap,color:[{texture:this._shadowCubemap,target:e.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r}],clearColor:[0,0,0,1],clearDepth:1})},t))},cJ.prototype.disposeResources=function(){let e=this._ctx;e.dispose(this._shadowCubemap),this._shadowCubemap=null,e.dispose(this._shadowMap),this._shadowMap=null,this._sides.forEach(t=>{e.dispose(t.drawPassCmd.pass)}),this._sides=null},cY=function(e){return new cJ(e)};var cQ={},c1=ub.mat4;function c0(e){this.type="SpotLight",this.enabled=!0,this.changed=new l6,this.target=[0,0,0],this.color=[1,1,1,1],this.intensity=1,this.angle=Math.PI/4,this.innerAngle=0,this.range=10,this.castShadows=!1,this.bias=.1;let t=e.ctx;this._ctx=t,this._near=2,this._far=40,this._viewMatrix=c1.create(),this._projectionMatrix=c1.create(),this.set(e)}c0.prototype.init=function(e){this.entity=e},c0.prototype.set=function(e){Object.assign(this,e),(void 0!==e.color||void 0!==e.intensity)&&(this.color[3]=this.intensity),e.castShadows&&!this._ctx.capabilities.depthTexture&&(console.warn("SpotLight.castShadows is not supported. WEBGL_depth_texture missing."),this.castShadows=!1),this.castShadows?this._colorMap||this.allocateResources():this._colorMap&&this.disposeResources(),Object.keys(e).forEach(e=>this.changed.dispatch(e))},c0.prototype.allocateResources=function(){let e=this._ctx;this._colorMap=e.texture2D({name:"spotLightColorMap",width:1024,height:1024,pixelFormat:e.PixelFormat.RGBA8,encoding:e.Encoding.Linear,min:e.Filter.Linear,mag:e.Filter.Linear}),this._shadowMap=e.texture2D({name:"spotLightShadowMap",width:1024,height:1024,pixelFormat:e.PixelFormat.Depth,encoding:e.Encoding.Linear}),this._shadowMapDrawCommand={name:"SpotLight.shadowMap",pass:e.pass({name:"SpotLight.shadowMap",color:[this._colorMap],depth:this._shadowMap,clearColor:[0,0,0,1],clearDepth:1}),viewport:[0,0,1024,1024]// TODO: viewport bug
}},c0.prototype.disposeResources=function(){let e=this._ctx;e.dispose(this._colorMap),this._colorMap=null,e.dispose(this._shadowMap),this._shadowMap=null,e.dispose(this._shadowMapDrawCommand.pipeline),this._shadowMapDrawCommand=null},cQ=function(e){return new c0(e)};var c2={};function c3(e){this.type="AreaLight",this.enabled=!0,this.changed=new l6,this.color=[1,1,1,1],this.intensity=1,this.castShadows=!1,this.set(e);let t=e.ctx;c3.areaLightTexturesRefs||(c3.ltc_mat_texture=t.texture2D({data:B,width:64,height:64,pixelFormat:t.PixelFormat.RGBA32F,encoding:t.Encoding.Linear,min:t.Filter.Linear,mag:t.Filter.Linear}),c3.ltc_mag_texture=t.texture2D({data:j,width:64,height:64,pixelFormat:t.PixelFormat.R32F,encoding:t.Encoding.Linear,min:t.Filter.Linear,mag:t.Filter.Linear})),c3.areaLightTexturesRefs=(c3.areaLightTexturesRefs||0)+1,this.ltc_mat_texture=c3.ltc_mat_texture,this.ltc_mag_texture=c3.ltc_mag_texture}B=[2e-4,-0,1,-0,504e-6,-0,1,-0,.002016,-0,1,-0,.004535,-0,1,-0,.008063,-0,1,-0,.012598,-0,1,-0,.018141,-0,1,-0,.024692,-0,1,-0,.032252,-0,1,-0,.040821,-0,1,-0,.0504,-0,1,-0,.060989,-0,1,-0,.072591,-0,1,-0,.085206,-0,1,-0,.098836,-0,1,-0,.113483,-0,1,-0,.129147,-0,1,-0,.145828,-0,1,-0,.163499,-0,1,-0,.181972,-0,1,-0,.199498,-0,1,-0,.220031,-0,1,-0,.241588,-0,1,-0,.26412,-0,1,-0,.287521,-0,1,-0,.311478,-0,1,-0,.335127,-0,1,-0,.359811,-0,1,-0,.386446,-0,1,-0,.413161,-0,1,-0,.439142,-0,1,-0,.467039,-0,1,-0,.49517,-0,1,-0,.522324,-0,1,-0,.551482,-0,1,-0,.579621,-0,1,-0,.608255,-0,1,-0,.636515,-0,1,-0,.664835,-0,1,-0,.692549,-0,1,-0,.720375,-0,1,-0,.747238,-0,1,-0,.773956,-0,1,-0,.799879,-0,1,-0,.824889,-0,1,-0,.849357,-0,1,-0,.873016,-0,1,-0,.89567,-0,1,-0,.917194,-0,1,-0,.937978,-0,1,-0,.957872,-0,1,-0,.976736,-0,1,-0,.994433,-0,1,-0,1.011206,-0,1,-0,1.02682,-0,1,-0,1.04172,-0,1,-0,1.055657,-0,1,-0,1.068642,-0,1,-0,1.080646,-0,1,-0,1.091637,-0,1,-0,1.101837,-0,1,-0,1.111292,-0,1,-0,1.120025,-0,1,-0,1.127918,-0,1,-0,2e-4,-.000005,1.000623,.024938,504e-6,-.000013,1.000643,.024938,.002016,-.00005,1.000618,.024938,.004535,-.000113,1.000621,.024938,.008063,-.000201,1.000746,.024938,.012596,-.000314,1.000463,.024937,.01814,-.000452,1.000511,.024939,.024693,-.000616,1.000541,.024938,.032253,-.000804,1.000684,.024938,.040815,-.001018,1.000524,.02494,.050399,-.001257,1.000582,.024937,.060989,-.001521,1.000655,.024937,.072591,-.00181,1.000608,.024938,.085204,-.002125,1.000622,.024939,.098835,-.002465,1.000632,.024937,.113483,-.00283,1.00064,.024939,.129143,-.00322,1.000568,.024938,.14583,-.003633,1.000635,.024938,.163497,-.004062,1.000626,.024938,.181956,-.004424,1.000612,.024924,.199791,-.004593,1.000627,.02489,.220029,-.00548,1.000594,.024935,.241586,-.00601,1.000616,.024933,.264115,-.00655,1.000607,.024927,.287514,-.007072,1.000595,.024909,.311455,-.007472,1.000616,.024872,.335083,-.007491,1.000589,.024755,.359805,-.00881,1.000601,.024877,.386438,-.009282,1.00064,.024824,.413131,-.009534,1.000599,.024708,.439249,-.009701,1.000497,.024573,.466997,-.010878,1.000467,.024652,.495138,-.010959,1.000539,.024455,.522654,-.011386,1.000518,.024318,.551415,-.012022,1.000533,.024216,.57961,-.011805,1.000495,.023867,.608185,-.012773,1.000474,.023834,.636492,-.012377,1.000488,.023327,.664826,-.013172,1.000576,.023205,.692674,-.012847,1.000505,.022708,.720341,-.013141,1.000424,.022349,.747373,-.013227,1.000449,.021871,.77398,-.012739,1.000478,.021171,.799839,-.012999,1.000396,.020606,.825113,-.012727,1.000425,.020006,.849579,-.01217,1.000469,.019089,.873046,-.011855,1.000411,.018291,.895777,-.011711,1.000426,.017534,.917518,-.011107,1.000373,.016542,.938264,-.010439,1.000322,.015512,.958032,-.009807,1.000324,.014491,.976838,-.009268,1.000341,.013468,.994631,-.008662,1.000318,.012376,1.011434,-.007923,1.000289,.011187,1.027169,-.007132,1.000216,.010078,1.041929,-.006332,1.000096,.008924,1.055767,-.005554,1.000156,.00777,1.068595,-.004811,1.000084,.006611,1.080612,-.00395,1.000047,.005485,1.091785,-.003174,1.000109,.004352,1.101998,-.002363,1.000029,.00318,1.111423,-.001552,.999985,.002091,1.120007,-.000786,.999947,991e-6,1.127918,4e-6,1,-.000004,2e-4,-.00001,1.002495,.049907,504e-6,-.000025,1.002476,.049908,.002016,-.000101,1.0025,.049908,.004535,-.000226,1.002487,.049908,.008062,-.000402,1.002364,.049908,.012598,-.000629,1.002412,.049908,.01814,-.000905,1.002379,.049908,.024691,-.001232,1.00249,.049907,.032251,-.00161,1.002398,.049908,.040821,-.002037,1.002392,.049908,.050398,-.002515,1.002431,.049907,.060989,-.003044,1.002475,.049908,.072592,-.003623,1.002546,.049907,.085204,-.004252,1.002467,.049907,.098832,-.004932,1.00245,.049908,.113481,-.005663,1.002482,.049907,.129145,-.006443,1.002443,.049907,.145825,-.007271,1.002495,.049906,.163491,-.008128,1.002475,.049903,.181911,-.008826,1.002459,.049879,.200065,-.009285,1.002443,.049824,.220025,-.010966,1.00245,.049897,.241581,-.012025,1.002463,.049893,.264099,-.013105,1.002395,.049881,.287493,-.014145,1.00239,.049855,.311399,-.014925,1.002414,.049769,.335096,-.015239,1.002363,.049591,.359815,-.017559,1.002415,.049777,.386365,-.018554,1.002354,.049675,.413017,-.019043,1.002297,.049444,.439519,-.019815,1.002284,.049253,.466938,-.021741,1.002307,.049327,.494999,-.021887,1.002181,.048922,.522922,-.022844,1.002107,.048677,.55127,-.024014,1.002101,.048478,.579771,-.024156,1.00206,.047904,.608156,-.025317,1.002077,.047594,.636662,-.025321,1.001975,.046876,.664846,-.026018,1.001992,.046354,.692877,-.026041,1.001846,.045504,.720316,-.026252,1.001846,.044655,.747658,-.026159,1.001931,.04367,.774252,-.026086,1.001845,.042515,.800179,-.025653,1.001794,.041211,.825525,-.02517,1.001787,.039823,.850013,-.024788,1.001806,.038409,.873593,-.023992,1.001688,.036767,.896343,-.022985,1.001666,.0349,.918062,-.022005,1.001548,.03301,.938928,-.02111,1.001503,.031143,.958667,-.019893,1.001341,.029059,.977457,-.018546,1.001194,.026888,.995243,-.017152,1.001095,.024713,1.012023,-.01575,1.0011,.022496,1.027614,-.014289,1.000851,.020153,1.042389,-.012688,1.000724,.017839,1.056161,-.011118,1.000572,.015529,1.068968,-.00954,1.000407,.01324,1.080866,-.007963,1.000258,.01094,1.091944,-.006416,1.000254,.008716,1.102104,-.004771,1.000175,.006434,1.111571,-.003056,1.000148,.004169,1.120084,-.001458,1.00005,.002033,1.127981,21e-6,.999987,-.000027,2e-4,-.000015,1.00562,.07494,504e-6,-.000038,1.00565,.074939,.002016,-.000151,1.005613,.074939,.004535,-.00034,1.005618,.074939,.008062,-.000604,1.005614,.074939,.012597,-.000944,1.005616,.07494,.018141,-.001359,1.005558,.074939,.024695,-.001851,1.005495,.07494,.032253,-.002417,1.005616,.074939,.040822,-.003059,1.005591,.07494,.050399,-.003777,1.005596,.07494,.060989,-.00457,1.005599,.074939,.072591,-.00544,1.005616,.07494,.085203,-.006385,1.005616,.074939,.098833,-.007406,1.005595,.074938,.113481,-.008502,1.005605,.074938,.129147,-.009674,1.005605,.074937,.145817,-.010916,1.005513,.074937,.163485,-.012199,1.005579,.074928,.181824,-.013172,1.005552,.074885,.200274,-.0141,1.005524,.074825,.220017,-.016464,1.005529,.074928,.241568,-.018052,1.00549,.074914,.264084,-.019671,1.005457,.074898,.28745,-.021217,1.005431,.07486,.311281,-.022341,1.005395,.074717,.335228,-.023296,1.00532,.074526,.360047,-.025965,1.005302,.074649,.386273,-.027808,1.005285,.074575,.412855,-.028504,1.005167,.074237,.439705,-.030007,1.005129,.074013,.466975,-.032263,1.005082,.073967,.494874,-.032931,1.00496,.073475,.523066,-.034348,1.004834,.073084,.551198,-.035739,1.004806,.072657,.579889,-.036575,1.004687,.072029,.608282,-.037434,1.004605,.071309,.636812,-.038323,1.004589,.070507,.66501,-.038676,1.004403,.069424,.693063,-.039237,1.00434,.06837,.72075,-.039332,1.004224,.066988,.747911,-.039179,1.004117,.065447,.774576,-.03911,1.004035,.063838,.800737,-.038542,1.004027,.061923,.825966,-.037966,1.003825,.059859,.850534,-.036943,1.003786,.057529,.874289,-.035853,1.00356,.055081,.897152,-.03473,1.003549,.052476,.919029,-.033242,1.003454,.049647,.939851,-.031508,1.003215,.04667,.959599,-.029695,1.002916,.043588,.978293,-.027845,1.00272,.040401,.996085,-.025775,1.002445,.03706,1.012768,-.023607,1.002133,.033726,1.028404,-.021374,1.001822,.030217,1.04315,-.019108,1.001602,.02682,1.05676,-.016823,1.001274,.023372,1.069471,-.014378,1.000964,.019891,1.081283,-.011884,1.000684,.016405,1.092238,-.009398,1.000514,.01295,1.102384,-.00703,1.000319,.009579,1.111737,-.004751,1.000225,.006384,1.120274,-.002404,1.000046,.003192,1.128182,31e-6,1.00002,33e-6,2e-4,-.00002,1.010006,.100065,504e-6,-.00005,1.009927,.100065,.002016,-.000202,1.010026,.100064,.004535,-.000454,1.010018,.100065,.008062,-.000807,1.009891,.100064,.012599,-.001261,1.010175,.100064,.018141,-.001815,1.010067,.100065,.024692,-.002471,1.010014,.100066,.032251,-.003227,1.00995,.100065,.040818,-.004084,1.009963,.100067,.050401,-.005043,1.010032,.100064,.060988,-.006102,1.009979,.100064,.072588,-.007263,1.009984,.100063,.085205,-.008525,1.010023,.100063,.098832,-.009888,1.00996,.100062,.113479,-.011352,1.009974,.100063,.129142,-.012916,1.009945,.100062,.145817,-.014573,1.009924,.100058,.163468,-.016276,1.009912,.10005,.181674,-.017411,1.009859,.099975,.200435,-.019002,1.009842,.099932,.220005,-.021978,1.00982,.100043,.24155,-.024096,1.009778,.100031,.264058,-.02625,1.009765,.100002,.287399,-.028286,1.009724,.099939,.311134,-.029698,1.009596,.099748,.33535,-.031442,1.009508,.099582,.360295,-.034401,1.009475,.099613,.386112,-.03703,1.009329,.099558,.412733,-.038163,1.00925,.099137,.439833,-.04025,1.009125,.098866,.467099,-.042583,1.009011,.098626,.494828,-.044299,1.008803,.098149,.523217,-.045876,1.008712,.0976,.551338,-.04744,1.008509,.096929,.579917,-.048995,1.008371,.096178,.608454,-.049901,1.008212,.095145,.636785,-.051224,1.007963,.094151,.66522,-.051675,1.007741,.092728,.693194,-.052278,1.007616,.091195,.721008,-.052406,1.007327,.089384,.748196,-.052529,1.007219,.087461,.774975,-.05195,1.006851,.085133,.801129,-.051456,1.006732,.082628,.826668,-.050569,1.006612,.079817,.851291,-.049328,1.006374,.07671,.875056,-.047988,1.006183,.073481,.897872,-.046149,1.005742,.069943,.919803,-.044144,1.005514,.066151,.940701,-.042095,1.005153,.062247,.96058,-.03973,1.004843,.058158,.979427,-.037104,1.004535,.05385,.997157,-.034369,1.004023,.049403,1.013777,-.031555,1.003622,.044944,1.029452,-.028571,1.003212,.040414,1.044029,-.025416,1.002698,.035723,1.057586,-.022217,1.002202,.031072,1.070148,-.019037,1.001703,.026429,1.081875,-.015936,1.001322,.021896,1.092789,-.012734,1.001053,.017288,1.102704,-.009454,1.000604,.012841,1.112011,-.006199,1.000387,.008446,1.12059,-.00301,1.000166,.004122,1.128283,27e-6,.999956,-.000038,2e-4,-.000025,1.015664,.125315,504e-6,-.000063,1.015664,.125316,.002016,-.000253,1.015727,.125315,.004535,-.000568,1.015695,.125314,.008063,-.00101,1.015823,.125316,.012599,-.001579,1.015867,.125315,.018141,-.002273,1.015758,.125316,.024691,-.003094,1.015662,.125316,.032252,-.004042,1.015674,.125316,.04082,-.005115,1.015678,.125316,.0504,-.006316,1.015684,.125315,.060989,-.007642,1.015685,.125315,.07259,-.009096,1.015703,.125314,.085203,-.010676,1.015654,.125314,.098833,-.012383,1.01567,.125315,.113477,-.014215,1.015635,.125312,.129138,-.016173,1.015599,.125311,.145815,-.018246,1.01561,.125306,.16345,-.02036,1.015564,.125294,.181595,-.021807,1.01546,.125204,.200563,-.023971,1.01544,.125165,.220186,-.02728,1.015412,.12525,.241528,-.030164,1.015342,.125267,.26402,-.032847,1.015269,.125233,.287311,-.035345,1.015232,.125138,.310993,-.037108,1.015063,.124903,.335467,-.039653,1.01497,.124749,.360497,-.042914,1.014819,.124702,.385986,-.046142,1.014685,.124623,.412703,-.04805,1.014543,.124193,.439929,-.050527,1.014315,.123833,.467163,-.05288,1.014087,.123375,.494824,-.055672,1.013898,.122982,.523222,-.057388,1.013647,.122166,.551557,-.059328,1.013403,.121343,.579884,-.061315,1.013059,.12043,.608619,-.062531,1.012745,.11914,.637014,-.063778,1.012425,.117721,.665425,-.064734,1.012067,.116069,.69358,-.065315,1.011712,.114146,.721194,-.065535,1.0112,.111846,.748586,-.065501,1.010896,.109309,.775437,-.065091,1.010576,.106504,.801554,-.064332,1.010136,.103308,.827079,-.063078,1.009629,.099695,.851693,-.061728,1.009233,.095946,.875586,-.059853,1.008726,.091802,.898589,-.057727,1.008412,.087339,.920421,-.055377,1.007767,.082687,.941533,-.052571,1.007529,.077716,.961426,-.049544,1.006929,.072574,.980287,-.0464,1.006393,.067217,.99808,-.042966,1.005872,.061757,1.01494,-.039321,1.005346,.056072,1.030455,-.035585,1.004609,.05041,1.045078,-.031823,1.004151,.044622,1.058555,-.027947,1.003421,.038893,1.071009,-.023891,1.002704,.032977,1.082594,-.019822,1.002023,.02729,1.093265,-.015765,1.001403,.021543,1.103132,-.01179,1.000944,.016072,1.112348,-.007784,1.00055,.010511,1.120845,-.003849,1.000224,.005174,1.128573,57e-6,.999975,-.000039,2e-4,-.00003,1.022609,.150725,504e-6,-.000076,1.022728,.150725,.002016,-.000304,1.022728,.150725,.004535,-.000684,1.022733,.150725,.008062,-.001215,1.022715,.150725,.012598,-.001899,1.02272,.150725,.018141,-.002734,1.022659,.150725,.024694,-.003722,1.022801,.150724,.032254,-.004861,1.022779,.150726,.040815,-.006152,1.022693,.150724,.0504,-.007596,1.022716,.150725,.06099,-.009192,1.022733,.150725,.072587,-.010939,1.02263,.150723,.085203,-.012839,1.022676,.150725,.098828,-.014891,1.022659,.150725,.113473,-.017095,1.022589,.15072,.129137,-.019449,1.022572,.150716,.145803,-.021938,1.022508,.150712,.163417,-.024443,1.022471,.150691,.18158,-.026329,1.022406,.1506,.200667,-.028997,1.022336,.150553,.220429,-.032584,1.022296,.15061,.241497,-.03626,1.022202,.150658,.263975,-.039465,1.022119,.150619,.28721,-.042385,1.021988,.15049,.310935,-.044758,1.021771,.150241,.335556,-.047922,1.021658,.150076,.360667,-.051493,1.021437,.149931,.386028,-.054931,1.021228,.149754,.412665,-.058007,1.021023,.1494,.439951,-.060813,1.020723,.148913,.467262,-.063461,1.020332,.148319,.494972,-.066738,1.020097,.147798,.523153,-.068976,1.01963,.146903,.5517,-.071268,1.019245,.145863,.580046,-.073439,1.018797,.144695,.608649,-.075193,1.018201,.143237,.637239,-.076536,1.017746,.141463,.665388,-.077771,1.017111,.139462,.693755,-.078344,1.016609,.137082,.721345,-.078817,1.015863,.134403,.748879,-.078512,1.01539,.131252,.77556,-.078128,1.014652,.127866,.801897,-.077094,1.013877,.123928,.827193,-.075863,1.013021,.119733,.85199,-.073973,1.012395,.115055,.875823,-.071765,1.011595,.110098,.898655,-.069241,1.010862,.104722,.920915,-.066232,1.010185,.098991,.941969,-.06298,1.009588,.093044,.961882,-.059507,1.008777,.086925,.980952,-.055606,1.008252,.08052,.998955,-.051503,1.007633,.07389,1.015756,-.047292,1.006908,.067302,1.031571,-.042804,1.006338,.060412,1.046095,-.038132,1.005512,.053497,1.059542,-.03338,1.004592,.046569,1.072006,-.028613,1.003731,.039679,1.083348,-.023811,1.002871,.032772,1.093969,-.01893,1.002068,.025894,1.103697,-.014098,1.001284,.019178,1.112813,-.009339,1.00082,.012652,1.121193,-.004661,1.000324,.006226,1.12893,52e-6,.999988,-.000008,2e-4,-.000035,1.030857,.176327,504e-6,-.000089,1.031137,.176326,.002016,-.000355,1.031049,.176325,.004535,-.0008,1.031105,.176326,.008062,-.001422,1.030973,.176326,.012598,-.002221,1.031168,.176326,.018141,-.003199,1.031093,.176326,.024695,-.004354,1.031297,.176326,.032253,-.005687,1.031091,.176327,.040821,-.007197,1.031012,.176326,.050399,-.008886,1.031068,.176325,.060987,-.010752,1.030967,.176323,.072588,-.012797,1.031028,.176324,.0852,-.015019,1.030985,.176322,.098829,-.017419,1.030983,.17632,.113474,-.019997,1.030953,.176317,.129133,-.022748,1.030891,.176312,.1458,-.025655,1.030825,.176306,.163372,-.02851,1.030781,.176279,.181578,-.030914,1.030683,.176187,.200761,-.034076,1.030574,.176139,.220645,-.037985,1.030476,.17616,.241473,-.042391,1.030384,.176238,.263922,-.046105,1.030241,.176175,.287074,-.04939,1.030049,.176013,.310915,-.052511,1.029839,.175776,.335604,-.056236,1.029608,.175578,.360775,-.060118,1.029355,.175359,.386196,-.063907,1.029052,.175083,.412599,-.067997,1.028766,.174791,.439916,-.071088,1.028326,.174174,.467444,-.074247,1.02789,.173487,.495132,-.077728,1.027374,.172774,.523117,-.080822,1.026763,.171824,.551783,-.083228,1.026205,.170554,.580234,-.085682,1.025614,.16909,.608568,-.08786,1.024668,.167468,.637357,-.089346,1.023939,.165283,.665507,-.090704,1.022946,.162966,.693704,-.091388,1.02201,.160131,.721396,-.091783,1.021085,.156957,.748676,-.091688,1.019894,.153292,.77537,-.090992,1.018608,.149158,.801547,-.089881,1.017646,.144551,.827013,-.088267,1.016355,.139614,.851708,-.086132,1.015446,.134026,.875652,-.083707,1.014321,.128101,.898703,-.080619,1.013454,.121841,.920904,-.07728,1.012634,.115379,.942077,-.073484,1.01177,.108355,.962245,-.069252,1.010894,.101153,.981385,-.064807,1.010114,.093666,.999379,-.06008,1.009294,.086007,1.016494,-.055007,1.008591,.078194,1.032357,-.04976,1.007821,.070328,1.047061,-.044468,1.006871,.062358,1.060675,-.03896,1.006062,.054279,1.073032,-.033343,1.004911,.046158,1.084293,-.027699,1.003791,.038111,1.094724,-.02213,1.002744,.030239,1.104302,-.016508,1.001815,.022397,1.11329,-.010846,1.001083,.014747,1.121649,-.005294,1.00049,.007234,1.12923,71e-6,.999975,-.000053,2e-4,-.00004,1.040431,.202155,504e-6,-.000102,1.040912,.202154,.002016,-.000407,1.041328,.202152,.004535,-.000917,1.040877,.202154,.008063,-.00163,1.040867,.202153,.012598,-.002547,1.04087,.202153,.01814,-.003667,1.040808,.202153,.024692,-.004991,1.040861,.202153,.032252,-.006519,1.040861,.202153,.040822,-.008252,1.040864,.202153,.050397,-.010187,1.040717,.202151,.060988,-.012327,1.040791,.202152,.072582,-.014669,1.04064,.202149,.085198,-.017217,1.040716,.202147,.098827,-.019968,1.040748,.202141,.113467,-.022921,1.040632,.202142,.129129,-.026074,1.040606,.202137,.145793,-.029399,1.040566,.202127,.163294,-.032524,1.040459,.202078,.181589,-.035552,1.040315,.201996,.200844,-.039208,1.040221,.201948,.220835,-.043489,1.040047,.201945,.241471,-.048523,1.039921,.202031,.263854,-.052764,1.039756,.201957,.286935,-.056387,1.039497,.201743,.310902,-.060338,1.039252,.201531,.335642,-.064594,1.038954,.201286,.360859,-.068772,1.038582,.200983,.386419,-.073086,1.03816,.200651,.412588,-.077887,1.037724,.200343,.439836,-.081391,1.037182,.199618,.467538,-.085121,1.036602,.198839,.495286,-.088718,1.035893,.197895,.523231,-.092514,1.035121,.196887,.55173,-.095238,1.034127,.19539,.580302,-.097949,1.033131,.193668,.608559,-.100418,1.031962,.191773,.637224,-.102129,1.030838,.189319,.665597,-.103578,1.029511,.186529,.693535,-.104652,1.028263,.183303,.721325,-.104766,1.026611,.179497,.748384,-.104717,1.025128,.175283,.775058,-.103846,1.023385,.170493,.801387,-.102728,1.022236,.165187,.826412,-.100679,1.019908,.159362,.851314,-.098451,1.018839,.153059,.8751,-.095363,1.017306,.146284,.89828,-.092008,1.016151,.138975,.92045,-.088095,1.01488,.131361,.941727,-.08369,1.013556,.123417,.962308,-.079077,1.012998,.115201,.981364,-.073894,1.011841,.106711,.999798,-.068435,1.011021,.098063,1.016983,-.06283,1.010194,.089183,1.033039,-.056914,1.009292,.08019,1.047994,-.050721,1.008474,.07101,1.06158,-.044454,1.007386,.061867,1.074023,-.038145,1.006135,.052711,1.08547,-.031679,1.00489,.043595,1.095673,-.025157,1.003627,.034506,1.105,-.018702,1.002331,.025468,1.113795,-.012458,1.001278,.016834,1.122012,-.006169,1.000548,.008265,1.129683,78e-6,.999988,-.000072,2e-4,-.000046,1.052496,.228243,504e-6,-.000115,1.052079,.228243,.002016,-.00046,1.052079,.228241,.004535,-.001035,1.052091,.228242,.008062,-.00184,1.051962,.228242,.012598,-.002875,1.052087,.228242,.018141,-.00414,1.052088,.228242,.024692,-.005636,1.052096,.228239,.032251,-.007361,1.052029,.228243,.04082,-.009316,1.052038,.228241,.050399,-.011501,1.052042,.228239,.06099,-.013917,1.052046,.228238,.072586,-.016562,1.05199,.228236,.085198,-.019437,1.051946,.228234,.098824,-.022542,1.051879,.228229,.113467,-.025875,1.051841,.228227,.129121,-.02943,1.051724,.228219,.14578,-.03317,1.051672,.228205,.163222,-.036567,1.051556,.228143,.181604,-.040245,1.051382,.228069,.200913,-.044395,1.05123,.22801,.221005,-.049088,1.051062,.227988,.241667,-.054506,1.050881,.228044,.263777,-.059437,1.050643,.227986,.286841,-.06359,1.050312,.227755,.310879,-.068224,1.050009,.227525,.33565,-.072986,1.049597,.227253,.360869,-.077435,1.049121,.226845,.386609,-.082385,1.048587,.226466,.412742,-.08757,1.047987,.226059,.439789,-.091929,1.047308,.225331,.467558,-.096038,1.046423,.224409,.495406,-.099938,1.045481,.223288,.523417,-.10405,1.044512,.222066,.551755,-.107503,1.043408,.220487,.580468,-.110234,1.042016,.218451,.608904,-.112993,1.040535,.2162,.63723,-.115173,1.038934,.213458,.665566,-.116433,1.036961,.210158,.693413,-.117589,1.03513,.206457,.721025,-.117885,1.03308,.202197,.748054,-.117606,1.030752,.197296,.774631,-.116771,1.028608,.191813,.800677,-.115194,1.02635,.185691,.826062,-.113138,1.024472,.179053,.85059,-.110359,1.022174,.171839,.87455,-.107072,1.020381,.164067,.897567,-.103268,1.018777,.155959,.919609,-.098794,1.016886,.14732,.941177,-.094067,1.01588,.138365,.961752,-.08867,1.014616,.129051,.981518,-.082965,1.013807,.119515,.99988,-.076971,1.012793,.109897,1.01737,-.070518,1.011894,.099872,1.033661,-.06383,1.010943,.089883,1.048672,-.05704,1.009802,.079691,1.062479,-.049917,1.00867,.069458,1.075052,-.042735,1.007429,.059191,1.086371,-.035513,1.005991,.048894,1.096623,-.028359,1.004468,.03877,1.105871,-.021111,1.002927,.028745,1.114481,-.013908,1.001728,.018884,1.12261,-.006843,1.00074,.009264,1.130165,62e-6,.999983,-.000006,2e-4,-.000051,1.064931,.25463,504e-6,-.000128,1.064668,.25463,.002016,-.000513,1.064794,.25463,.004535,-.001155,1.064851,.25463,.008063,-.002053,1.064966,.25463,.012598,-.003208,1.06484,.25463,.01814,-.004619,1.064602,.254631,.024695,-.006288,1.064965,.254632,.032251,-.008211,1.064795,.25463,.040821,-.010393,1.064802,.254628,.050398,-.01283,1.064758,.254627,.060987,-.015525,1.064731,.254625,.072584,-.018474,1.064615,.254621,.085199,-.021682,1.064672,.254619,.098826,-.025144,1.06463,.254613,.113465,-.02886,1.064515,.254606,.129119,-.032823,1.064416,.254598,.145767,-.036969,1.064347,.254579,.16319,-.040754,1.064132,.254506,.181622,-.044989,1.063951,.254437,.200981,-.049642,1.063745,.25437,.221145,-.054776,1.063547,.254324,.241896,-.060538,1.063289,.254346,.263684,-.066113,1.063013,.254296,.286796,-.070925,1.062625,.254059,.310867,-.076187,1.062216,.253817,.335644,-.081406,1.061703,.253481,.360917,-.086336,1.061066,.253005,.386786,-.09179,1.060454,.252558,.412921,-.09723,1.059568,.252008,.439722,-.102574,1.058706,.251323,.467559,-.106972,1.057682,.250239,.495605,-.111329,1.056612,.248944,.523589,-.115561,1.055101,.247471,.551787,-.119732,1.053745,.245777,.580426,-.122711,1.051829,.243448,.608778,-.125436,1.049642,.240769,.637069,-.127993,1.047749,.237739,.665251,-.129448,1.045244,.233928,.692977,-.130408,1.042279,.22964,.720346,-.130931,1.039693,.224829,.747365,-.130392,1.036675,.219144,.773734,-.12954,1.033719,.212965,.799578,-.127689,1.030774,.206047,.825002,-.125456,1.028551,.198576,.849564,-.122291,1.0258,.190471,.873412,-.11872,1.023657,.181739,.896628,-.114323,1.021381,.172586,.918952,-.109587,1.019674,.162914,.940602,-.104093,1.018126,.153039,.960917,-.098187,1.016339,.142774,.980911,-.091963,1.01544,.132316,.999686,-.085159,1.014377,.121453,1.017538,-.078139,1.013498,.110527,1.033918,-.070797,1.012332,.099437,1.04939,-.063129,1.011368,.088157,1.063402,-.055354,1.010111,.076951,1.076096,-.047522,1.008774,.065616,1.087562,-.039447,1.007202,.05431,1.097591,-.031359,1.005346,.042948,1.106782,-.023393,1.00371,.031799,1.115234,-.015461,1.002116,.020943,1.123166,-.007589,1.000858,.010288,1.130796,104e-6,1.000032,-.000024,2e-4,-.000056,1.07878,.281356,504e-6,-.000142,1.079271,.281355,.002015,-.000567,1.078635,.281355,.004535,-.001276,1.079164,.281356,.008064,-.002269,1.0793,.281355,.012598,-.003544,1.079149,.281355,.018143,-.005104,1.079329,.281355,.024691,-.006947,1.079073,.281353,.032254,-.009074,1.079253,.281354,.040822,-.011484,1.079176,.281353,.050399,-.014177,1.079057,.281349,.060987,-.017153,1.079007,.281347,.072586,-.020412,1.078998,.281343,.085203,-.023956,1.078962,.281336,.098823,-.027778,1.078839,.281332,.113464,-.031882,1.078783,.281325,.129114,-.036255,1.078633,.281315,.145748,-.04079,1.078545,.281287,.163179,-.045024,1.078311,.281208,.181649,-.049791,1.078135,.281137,.201042,-.054953,1.077845,.281063,.221267,-.060551,1.077576,.281006,.242114,-.066663,1.077257,.280978,.263568,-.072771,1.076897,.280925,.286744,-.078349,1.076405,.280689,.31084,-.084201,1.075898,.280418,.335612,-.089846,1.075287,.28002,.360975,-.095394,1.074482,.279513,.386932,-.10129,1.073617,.278961,.413171,-.107042,1.072719,.278283,.439886,-.113083,1.071698,.277547,.467535,-.11801,1.070213,.276311,.495701,-.122793,1.068857,.274867,.523772,-.127278,1.067037,.273153,.551849,-.131671,1.064923,.271176,.580338,-.135293,1.062749,.268626,.608771,-.138065,1.059944,.265569,.636756,-.140565,1.056851,.262054,.664574,-.142434,1.053461,.257807,.692151,-.143237,1.04991,.25293,.719376,-.143717,1.046426,.247414,.745852,-.143117,1.042377,.241001,.7723,-.141975,1.038789,.233797,.79805,-.140114,1.03529,.226218,.82337,-.137379,1.032374,.217785,.847735,-.134119,1.028853,.208748,.871897,-.129985,1.026395,.198877,.89495,-.125324,1.023787,.188803,.917909,-.120007,1.022073,.178493,.939567,-.114099,1.020098,.167466,.960534,-.107748,1.018851,.156223,.980423,-.100748,1.017362,.144716,.999334,-.093494,1.015961,.133028,1.017561,-.085728,1.015059,.120953,1.034225,-.077627,1.013888,.108943,1.049937,-.069375,1.012898,.096678,1.064265,-.060807,1.011635,.08435,1.077188,-.052052,1.010095,.071964,1.088637,-.043304,1.008399,.059531,1.098766,-.034458,1.006397,.047134,1.107697,-.025637,1.004354,.034887,1.116055,-.016932,1.002611,.022948,1.123819,-.008437,1.001023,.011386,1.131333,87e-6,.999952,-.000097,2e-4,-.000062,1.095622,.308458,504e-6,-.000155,1.094863,.308458,.002016,-.000622,1.095169,.308458,.004535,-.001399,1.095156,.308458,.008063,-.002487,1.095413,.308455,.012598,-.003886,1.095147,.308458,.018141,-.005596,1.09515,.308457,.024692,-.007616,1.09514,.308457,.032252,-.009947,1.095098,.308456,.040822,-.012589,1.095096,.308453,.050399,-.015541,1.09507,.308451,.060985,-.018803,1.094922,.308448,.072583,-.022375,1.094902,.308444,.085197,-.026258,1.094882,.308438,.098822,-.030448,1.094775,.308429,.11346,-.034944,1.094641,.308419,.129112,-.039731,1.09453,.308403,.145711,-.04461,1.094332,.308365,.163178,-.049362,1.094149,.308285,.181679,-.054666,1.093876,.30821,.201109,-.060336,1.093603,.308132,.221388,-.066414,1.09325,.308047,.242315,-.072881,1.092835,.307985,.263651,-.079453,1.092391,.307902,.28672,-.085882,1.091866,.307688,.310817,-.092274,1.091225,.307379,.335562,-.098306,1.090346,.306906,.361043,-.104572,1.089423,.306374,.387051,-.110843,1.088437,.30571,.413405,-.117062,1.087228,.304906,.440122,-.123501,1.085879,.304017,.467522,-.129245,1.084197,.302783,.495721,-.134285,1.082284,.301104,.523925,-.139143,1.080109,.299142,.551814,-.143638,1.077043,.296825,.579878,-.147774,1.074071,.294071,.608316,-.150724,1.070621,.290519,.636059,-.153168,1.06639,.286424,.663481,-.155139,1.062069,.281559,.690753,-.155944,1.057211,.276024,.717767,-.156176,1.052682,.269622,.743937,-.155783,1.047747,.262532,.770214,-.154245,1.04351,.254609,.795542,-.152192,1.039121,.246007,.821099,-.149256,1.035962,.236663,.845452,-.145605,1.03232,.226751,.86978,-.141186,1.02939,.216165,.893141,-.136137,1.026485,.204937,.916034,-.130332,1.024389,.193624,.938089,-.12404,1.02227,.181756,.959488,-.117011,1.020457,.169339,.979594,-.109617,1.018871,.156875,.998912,-.101562,1.017533,.144288,1.0171,-.093164,1.016445,.13137,1.034413,-.084488,1.015453,.118322,1.050347,-.075377,1.014259,.104963,1.064958,-.066108,1.013057,.091722,1.078045,-.056702,1.011491,.078231,1.089749,-.047106,1.009662,.064797,1.099831,-.037467,1.007417,.051315,1.108789,-.02799,1.005144,.038064,1.116865,-.018464,1.002925,.025008,1.124609,-.009068,1.001221,.01225,1.13204,93e-6,.999984,-.000071,2e-4,-.000067,1.112554,.335981,504e-6,-.000169,1.11266,.335981,.002016,-.000677,1.112827,.335981,.004533,-.001523,1.112147,.335982,.008063,-.002709,1.112882,.335979,.012598,-.004233,1.112891,.33598,.018141,-.006095,1.112882,.33598,.024693,-.008296,1.112877,.335978,.032252,-.010834,1.11286,.335976,.040824,-.013713,1.112965,.335974,.050398,-.016927,1.112753,.335971,.060991,-.020482,1.112826,.33597,.072587,-.024371,1.112676,.335962,.085199,-.028597,1.112593,.335955,.098822,-.033159,1.112453,.335943,.113461,-.038052,1.112329,.33593,.129108,-.043255,1.112144,.33591,.145665,-.048412,1.111905,.335857,.163185,-.053786,1.111668,.335781,.18171,-.059608,1.111345,.335696,.201166,-.065794,1.110979,.335606,.221489,-.072361,1.110553,.335505,.242471,-.079184,1.110112,.335396,.2639,-.086213,1.109584,.335271,.286688,-.093491,1.108927,.335089,.310773,-.100406,1.108091,.334737,.335573,-.106987,1.107169,.334208,.361117,-.113844,1.106097,.3336,.387175,-.120463,1.104826,.332828,.413665,-.127245,1.103415,.331929,.440386,-.133927,1.101632,.330851,.467527,-.140496,1.099563,.329538,.49563,-.145874,1.096956,.327618,.523864,-.150997,1.094201,.32539,.551705,-.155713,1.090342,.322688,.579383,-.159993,1.08601,.319483,.607301,-.163238,1.081226,.315522,.634873,-.165667,1.076065,.31084,.662028,-.167606,1.070466,.305377,.688755,-.168626,1.064601,.299056,.715612,-.168578,1.059269,.291963,.741604,-.167961,1.053648,.284018,.767757,-.166439,1.048928,.275474,.793264,-.164023,1.044343,.266056,.818165,-.160965,1.039909,.25575,.843255,-.156896,1.03618,.244843,.867249,-.152262,1.032303,.233464,.890994,-.146655,1.029365,.221128,.913829,-.140574,1.026607,.208554,.936508,-.13364,1.024512,.195772,.95772,-.12622,1.022421,.18242,.97894,-.118164,1.021293,.168852,.998285,-.109558,1.019444,.155261,1.016764,-.100562,1.017825,.141395,1.034387,-.091064,1.016996,.127311,1.050916,-.081468,1.015945,.113089,1.065652,-.071463,1.014547,.098879,1.079155,-.06124,1.013066,.084468,1.090822,-.05098,1.010788,.06994,1.1011,-.040549,1.008563,.055475,1.109824,-.030101,1.00595,.041033,1.117828,-.019884,1.003453,.027022,1.125443,-.0099,1.001484,.013306,1.132869,94e-6,1.000004,-.000046,2e-4,-.000073,1.132849,.36397,504e-6,-.000183,1.132155,.363969,.002016,-.000734,1.132516,.363969,.004535,-.001651,1.132256,.363969,.008062,-.002934,1.132318,.363966,.012597,-.004585,1.132386,.363968,.018141,-.006602,1.132457,.363967,.024693,-.008987,1.132511,.363967,.032252,-.011737,1.132488,.363965,.040819,-.014853,1.132241,.363959,.050398,-.018336,1.132372,.363958,.060988,-.022185,1.132373,.363954,.072582,-.026396,1.132137,.363943,.085195,-.030973,1.132071,.363935,.098822,-.035913,1.131978,.363922,.113461,-.041209,1.131801,.363905,.129116,-.046833,1.131535,.363867,.14564,-.052346,1.13129,.363814,.163199,-.058275,1.131046,.363734,.181742,-.064623,1.130671,.363642,.201227,-.071336,1.130224,.363539,.221587,-.078396,1.129758,.363419,.242625,-.085545,1.129213,.363256,.264183,-.09311,1.128549,.363097,.286668,-.101206,1.127767,.362939,.310745,-.108586,1.126796,.362516,.335602,-.115827,1.125686,.361953,.361202,-.123212,1.124451,.361275,.387298,-.130294,1.122861,.360376,.413918,-.137553,1.121154,.359362,.44068,-.144577,1.118825,.358069,.467667,-.151558,1.116002,.356581,.495449,-.157621,1.112778,.354531,.523514,-.162844,1.108842,.351915,.55125,-.167744,1.104075,.348797,.578629,-.172132,1.098733,.345222,.605757,-.175733,1.092224,.340665,.633392,-.178109,1.086201,.335286,.660783,-.180009,1.08011,.329286,.687219,-.181105,1.073419,.322319,.713873,-.181046,1.06741,.314616,.740094,-.180219,1.061414,.306014,.765233,-.178559,1.055287,.296704,.790885,-.175806,1.049727,.286394,.815464,-.172354,1.044519,.275189,.840259,-.168048,1.040375,.263441,.864285,-.162904,1.03601,.250918,.888806,-.157194,1.033525,.237611,.911682,-.150486,1.02949,.223809,.934481,-.143212,1.026778,.209705,.956337,-.135233,1.024632,.195281,.97738,-.12665,1.022737,.180878,.997427,-.117552,1.02111,.166112,1.016666,-.107814,1.019869,.151231,1.034337,-.097814,1.018543,.136375,1.051082,-.08733,1.017476,.121187,1.066326,-.076614,1.016083,.106043,1.079897,-.065793,1.014227,.090566,1.092136,-.054654,1.012334,.074988,1.102315,-.043516,1.009627,.059577,1.111105,-.032509,1.006808,.044202,1.118861,-.021381,1.003917,.028995,1.126363,-.010489,1.00167,.014269,1.133598,83e-6,.999989,-.000035,2e-4,-.000079,1.155026,.39247,504e-6,-.000198,1.154184,.392469,.002016,-.000791,1.15399,.392469,.004535,-.00178,1.154045,.392469,.008063,-.003164,1.154007,.392466,.012598,-.004944,1.154022,.392469,.018141,-.007119,1.154015,.392468,.024692,-.00969,1.154017,.392466,.032254,-.012656,1.154069,.392465,.040826,-.016018,1.15398,.392459,.050399,-.019771,1.153911,.392456,.060987,-.023919,1.15386,.392447,.072588,-.028461,1.153777,.392442,.085197,-.033393,1.153582,.392428,.098822,-.038716,1.153434,.392412,.113462,-.044422,1.153271,.39239,.129101,-.050455,1.153019,.392359,.145642,-.056392,1.152721,.392283,.163223,-.062859,1.152404,.392201,.181779,-.069721,1.151941,.392099,.201289,-.076968,1.151422,.391978,.221678,-.084518,1.150861,.391833,.242752,-.092017,1.150156,.391618,.264474,-.100184,1.149402,.391421,.286768,-.108921,1.148545,.391249,.310719,-.116815,1.147388,.390773,.335638,-.124785,1.146042,.390168,.36124,-.13263,1.144529,.389394,.387443,-.140298,1.142602,.388391,.414067,-.147913,1.140361,.387199,.440904,-.155362,1.137612,.385742,.467771,-.162574,1.133659,.383926,.494907,-.169312,1.129246,.381715,.522801,-.174778,1.124228,.378678,.550751,-.179824,1.118697,.375158,.578018,-.184284,1.112019,.370851,.605291,-.188215,1.105151,.365928,.632269,-.19076,1.097677,.360114,.659432,-.192457,1.090816,.353498,.685839,-.193458,1.083286,.346094,.711876,-.193502,1.076245,.337754,.738184,-.192371,1.069684,.328412,.763723,-.190531,1.063249,.318164,.789192,-.187726,1.057265,.3069,.813744,-.183783,1.051177,.295021,.838408,-.179328,1.045902,.282144,.862116,-.173573,1.040853,.268438,.885636,-.16735,1.036515,.254108,.909342,-.160229,1.033269,.239082,.931962,-.152529,1.029627,.224024,.954671,-.14408,1.027507,.208393,.975707,-.135023,1.024657,.19263,.996644,-.125258,1.022998,.176741,1.015817,-.115089,1.021234,.160926,1.034301,-.104317,1.020025,.145042,1.051131,-.093218,1.018739,.129052,1.066836,-.081828,1.017419,.112905,1.081027,-.070132,1.015714,.096578,1.093225,-.058382,1.013465,.080077,1.103691,-.046527,1.010853,.06358,1.112431,-.034624,1.007702,.047118,1.120035,-.022913,1.004551,.031018,1.127336,-.011284,1.001924,.015283,1.13451,17e-5,.999937,-.000058,2e-4,-.000084,1.177044,.421534,504e-6,-.000212,1.177312,.421533,.002016,-.00085,1.17773,.421533,.004535,-.001912,1.177722,.421533,.008063,-.003399,1.177844,.421529,.012598,-.00531,1.177768,.421533,.018141,-.007646,1.17773,.421531,.024692,-.010407,1.177663,.42153,.032252,-.013592,1.177681,.421527,.040821,-.017201,1.177562,.421524,.050401,-.021234,1.177445,.421516,.060988,-.025688,1.177461,.421509,.07259,-.030565,1.177364,.421498,.0852,-.03586,1.177205,.421482,.098823,-.041572,1.177011,.421462,.113465,-.047694,1.176794,.421436,.129094,-.054122,1.176504,.421396,.145652,-.06053,1.176203,.421311,.163245,-.067517,1.175805,.421218,.181825,-.074919,1.175271,.421108,.20136,-.0827,1.174717,.420974,.221773,-.090727,1.174021,.420795,.242908,-.098719,1.173173,.420536,.264742,-.107417,1.172285,.420296,.287091,-.116601,1.171326,.420065,.310723,-.125265,1.169907,.419582,.335685,-.133876,1.168352,.418912,.361285,-.14214,1.166322,.418006,.387562,-.150436,1.164136,.416899,.414175,-.158388,1.161162,.415513,.441021,-.166258,1.157608,.413836,.467698,-.17372,1.152519,.411702,.49473,-.180843,1.14702,.409102,.522524,-.186906,1.141256,.405789,.550055,-.192004,1.134114,.401759,.577512,-.196588,1.127086,.397153,.604348,-.20042,1.119029,.391767,.63097,-.20332,1.110308,.385573,.658023,-.204883,1.102643,.378245,.684422,-.205716,1.094573,.370191,.710405,-.205767,1.086405,.361231,.736417,-.204513,1.078712,.351106,.761836,-.202281,1.071619,.340096,.78714,-.199395,1.064873,.328139,.812197,-.195185,1.058313,.315044,.836342,-.190191,1.052085,.300933,.860311,-.184343,1.046705,.286411,.883597,-.177415,1.041072,.270897,.906852,-.170003,1.036797,.254825,.929991,-.161592,1.033264,.238176,.952478,-.152792,1.03025,.221581,.974216,-.143032,1.027331,.204378,.995372,-.132922,1.025135,.18747,1.01533,-.122009,1.02325,.170538,1.03407,-.11074,1.022021,.153777,1.051295,-.099016,1.020271,.136916,1.06746,-.08692,1.018948,.11988,1.082022,-.074729,1.017336,.102565,1.094378,-.062036,1.01482,.084994,1.104998,-.049413,1.011999,.06765,1.113773,-.036812,1.008711,.050148,1.121263,-.024274,1.005141,.032976,1.12842,-.012038,1.002196,.016239,1.135496,106e-6,1.000042,-.000062,2e-4,-.00009,1.203048,.451217,504e-6,-.000227,1.203226,.451215,.002016,-.000909,1.20345,.451215,.004535,-.002046,1.203569,.451215,.008062,-.003638,1.203609,.451209,.012598,-.005684,1.20358,.451214,.018141,-.008185,1.203515,.451212,.024694,-.011141,1.203618,.451211,.032253,-.014549,1.203609,.451207,.040815,-.018409,1.203302,.451203,.050401,-.022727,1.203454,.451195,.06099,-.027495,1.20348,.451188,.072591,-.032713,1.20322,.451172,.085203,-.038378,1.203058,.451154,.098829,-.044489,1.202838,.45113,.113466,-.051031,1.20253,.451098,.129084,-.057808,1.20227,.451041,.145669,-.064769,1.201904,.450956,.163278,-.072278,1.201411,.450853,.18188,-.080224,1.200825,.450721,.201436,-.088537,1.200164,.450566,.221865,-.097009,1.199335,.450351,.243083,-.105591,1.198383,.450062,.265033,-.114818,1.19738,.449769,.287456,-.124372,1.196137,.449438,.310758,-.133892,1.194554,.448974,.335721,-.143052,1.192649,.448216,.361348,-.151868,1.190233,.447202,.387573,-.160644,1.187211,.445926,.414159,-.169028,1.183452,.444313,.44095,-.177169,1.178562,.442315,.467998,-.18509,1.17354,.43996,.494566,-.192396,1.166344,.436989,.52173,-.198915,1.159283,.433439,.549405,-.20424,1.151503,.428984,.576755,-.208861,1.143004,.423839,.603635,-.212734,1.134099,.418012,.629979,-.215712,1.124555,.411445,.656597,-.217385,1.115293,.403628,.683317,-.218093,1.10646,.394639,.70899,-.217835,1.097389,.385012,.734898,-.216774,1.08894,.373999,.760342,-.21412,1.080385,.362128,.785517,-.210821,1.072959,.349184,.809933,-.206443,1.06545,.33508,.834339,-.200942,1.058701,.320257,.858793,-.194938,1.052711,.304133,.8823,-.187615,1.047044,.287771,.90556,-.179626,1.042083,.270571,.927916,-.170753,1.037077,.252741,.950415,-.16127,1.0332,.234656,.97292,-.151239,1.030418,.216652,.993893,-.140358,1.027479,.198252,1.014204,-.128963,1.024897,.180113,1.033878,-.117128,1.023648,.162282,1.051754,-.104678,1.02223,.144366,1.067924,-.092,1.020453,.126455,1.082643,-.078837,1.018518,.108194,1.095503,-.065669,1.016199,.089966,1.10629,-.052345,1.013113,.07153,1.115219,-.039024,1.009636,.053158,1.122587,-.025789,1.005801,.034959,1.129461,-.012622,1.002442,.017222,1.136468,152e-6,.999964,-.000065,2e-4,-.000096,1.231156,.481574,504e-6,-.000243,1.232187,.481572,.002016,-.000971,1.231948,.481572,.004535,-.002184,1.231919,.481572,.008061,-.003882,1.231453,.481566,.012597,-.006066,1.2318,.481572,.018142,-.008736,1.231756,.481569,.024693,-.011889,1.232062,.48157,.032254,-.015528,1.231915,.481563,.040822,-.01965,1.231863,.481559,.050402,-.024255,1.231737,.48155,.060992,-.029342,1.231678,.481537,.072592,-.034908,1.231537,.481521,.085207,-.040953,1.231336,.481499,.098834,-.047469,1.231071,.481469,.113474,-.054441,1.230757,.481431,.129077,-.061556,1.230424,.481359,.145691,-.069091,1.230022,.481269,.163321,-.077151,1.229461,.481156,.181936,-.085636,1.228718,.481011,.201516,-.094484,1.228023,.48083,.221963,-.103362,1.227057,.480562,.243264,-.112628,1.225997,.480247,.265291,-.122366,1.224744,.479891,.287824,-.132256,1.223255,.479461,.310927,-.142614,1.221348,.478978,.335749,-.152326,1.218953,.478132,.361361,-.161747,1.215806,.476971,.38748,-.170879,1.211853,.475477,.414231,-.179865,1.207783,.473686,.441065,-.188331,1.202051,.471415,.467923,-.196454,1.195463,.468647,.494526,-.204048,1.187542,.465459,.521318,-.21102,1.179235,.46165,.548654,-.21652,1.17011,.456868,.575778,-.221098,1.160163,.451227,.60261,-.224923,1.149751,.444866,.628891,-.227895,1.139169,.437577,.655635,-.23002,1.129736,.429369,.682115,-.230419,1.119516,.419673,.707514,-.229789,1.108277,.409143,.733169,-.22852,1.099159,.397296,.758342,-.225793,1.089839,.384578,.783477,-.222049,1.081428,.370323,.808497,-.217562,1.073742,.355253,.83279,-.211697,1.06585,.339282,.856677,-.204989,1.058834,.322181,.880662,-.197653,1.053291,.30461,.903474,-.188858,1.046822,.286042,.926313,-.179746,1.041663,.267224,.948458,-.169542,1.036532,.247978,.970873,-.159005,1.033008,.228535,.992958,-.147658,1.029844,.208819,1.013413,-.135771,1.02693,.189486,1.033483,-.123256,1.025545,.170422,1.051872,-.110401,1.023935,.152075,1.068396,-.09686,1.022092,.133169,1.083731,-.083259,1.020221,.114022,1.096849,-.069266,1.017663,.094772,1.107864,-.055203,1.014524,.075432,1.1166,-.041097,1.010514,.05598,1.123871,-.027083,1.006313,.036839,1.130718,-.01351,1.002778,.018156,1.137649,154e-6,1.000033,-.000028,2e-4,-.000103,1.264025,.51267,504e-6,-.000258,1.262437,.512667,.002016,-.001033,1.262691,.512668,.004535,-.002325,1.262834,.512667,.008063,-.004133,1.262783,.512659,.012598,-.006458,1.262803,.512666,.018141,-.009299,1.26272,.512665,.024683,-.012652,1.262061,.512655,.032257,-.016532,1.262858,.512656,.040826,-.020919,1.262709,.512649,.050403,-.02582,1.262685,.512639,.060993,-.031233,1.262544,.512625,.072597,-.037157,1.262435,.512607,.085211,-.043587,1.262209,.512581,.098842,-.05052,1.261907,.512544,.113484,-.057926,1.261575,.5125,.129097,-.06546,1.261293,.51242,.145727,-.073543,1.260736,.512316,.163375,-.082134,1.260117,.51219,.182011,-.091173,1.259299,.512024,.201598,-.10054,1.258381,.51181,.222084,-.109931,1.257293,.511505,.243446,-.119838,1.25605,.511151,.265574,-.13009,1.254607,.510724,.28823,-.140421,1.252808,.510191,.311336,-.151343,1.250489,.509627,.335719,-.161689,1.247279,.508688,.361314,-.171748,1.243467,.507393,.387541,-.181399,1.239145,.505758,.414204,-.190768,1.23376,.503676,.441092,-.199659,1.227433,.501129,.467789,-.207934,1.219247,.498078,.494454,-.215747,1.210441,.49463,.52095,-.222869,1.200559,.490467,.547802,-.228881,1.189872,.485444,.575563,-.23376,1.180081,.479268,.602426,-.237566,1.168544,.472272,.628772,-.240447,1.156546,.46439,.654963,-.242427,1.145123,.455345,.681384,-.24298,1.134322,.444885,.707173,-.24215,1.122665,.433338,.732477,-.240435,1.111733,.420647,.757567,-.237806,1.101271,.406799,.782341,-.233503,1.091341,.391761,.80669,-.228346,1.082042,.375576,.830804,-.222386,1.073504,.358545,.85494,-.215141,1.06588,.340431,.878709,-.207207,1.05885,.32169,.901928,-.198273,1.052588,.30193,.924845,-.188476,1.046521,.281513,.946932,-.177996,1.040966,.261234,.969256,-.166644,1.03667,.240356,.991323,-.154968,1.032694,.219748,1.013013,-.142425,1.030061,.199103,1.032845,-.129456,1.027254,.178936,1.051887,-.115763,1.025497,.159243,1.069179,-.101851,1.023807,.13956,1.084499,-.087357,1.021441,.119607,1.097921,-.072796,1.01878,.099501,1.109281,-.058037,1.015566,.079211,1.118194,-.043226,1.011494,.058873,1.125351,-.028633,1.007089,.038736,1.132002,-.013996,1.003014,.019063,1.138951,132e-6,1.000036,-.000007,2e-4,-.000109,1.296791,.544571,504e-6,-.000274,1.296055,.544568,.002016,-.001098,1.297239,.544568,.004535,-.00247,1.2966,.544568,.008062,-.00439,1.296368,.544559,.012597,-.00686,1.296454,.544566,.018141,-.009878,1.296522,.544565,.024693,-.013444,1.296536,.54456,.032256,-.017559,1.296638,.544557,.040824,-.022218,1.296491,.544547,.050408,-.027426,1.296552,.544532,.060997,-.033173,1.296283,.544518,.0726,-.039463,1.296113,.544496,.08522,-.046292,1.295894,.544466,.098851,-.053648,1.295545,.544422,.113496,-.061487,1.295201,.544371,.129112,-.069467,1.294754,.544273,.145765,-.078092,1.294209,.54416,.163431,-.087231,1.293534,.544017,.182088,-.096837,1.29258,.543828,.201698,-.106713,1.291586,.543585,.222231,-.116699,1.290325,.543238,.243653,-.127208,1.288888,.542836,.265855,-.137949,1.287131,.542329,.288623,-.148847,1.284936,.5417,.31183,-.160204,1.282109,.540997,.335728,-.171324,1.278036,.540045,.361403,-.181915,1.273912,.538603,.387647,-.192124,1.268881,.536741,.414217,-.201807,1.262363,.534432,.44109,-.211093,1.254755,.531623,.467823,-.219678,1.245456,.528314,.494361,-.227581,1.234953,.524391,.521264,-.235087,1.224839,.519902,.547881,-.241508,1.213175,.514574,.574965,-.246315,1.200505,.507837,.601847,-.250061,1.187901,.500286,.628207,-.252822,1.174601,.491502,.654445,-.254691,1.161944,.481726,.680175,-.255318,1.149305,.470727,.706168,-.254257,1.136708,.458045,.731458,-.2521,1.124047,.444438,.756378,-.249115,1.112942,.429611,.781311,-.244899,1.1018,.413501,.805755,-.239225,1.091662,.395889,.829867,-.23283,1.082291,.37786,.853067,-.225193,1.07282,.358704,.877084,-.216648,1.065415,.338413,.900123,-.20739,1.058403,.317596,.92337,-.197095,1.051412,.296301,.946021,-.186084,1.045877,.274498,.967669,-.174262,1.040316,.252565,.989761,-.161814,1.035489,.230312,1.012163,-.149076,1.03254,.208746,1.032547,-.135299,1.029598,.18718,1.052032,-.121277,1.027355,.166482,1.069907,-.106582,1.025622,.145939,1.085563,-.091589,1.023244,.125362,1.099447,-.076263,1.020661,.104087,1.110848,-.060825,1.017035,.083036,1.119923,-.045319,1.012675,.061719,1.126805,-.029852,1.007668,.040583,1.133282,-.014846,1.003335,.019969,1.140128,149e-6,1.000024,-.000037,2e-4,-.000116,1.334863,.57735,504e-6,-.000291,1.33335,.577348,.002015,-.001164,1.332853,.577347,.004535,-.002618,1.333295,.577347,.008062,-.004655,1.333189,.577336,.012598,-.007273,1.333309,.577345,.018141,-.010472,1.333274,.577342,.024694,-.014253,1.333231,.577339,.032254,-.018614,1.333265,.577332,.040827,-.023556,1.333261,.577321,.0504,-.029069,1.332893,.577309,.061,-.035166,1.332998,.577288,.072608,-.041833,1.332901,.577263,.085227,-.049067,1.332603,.577226,.098864,-.05686,1.332264,.577177,.113507,-.065114,1.331825,.577109,.129146,-.07361,1.331311,.577005,.145808,-.082766,1.330639,.576872,.163494,-.092458,1.329878,.576709,.182176,-.102639,1.328889,.576501,.201804,-.112983,1.32771,.576207,.222394,-.12365,1.326256,.575823,.243881,-.13478,1.324593,.575363,.266122,-.145931,1.322426,.574751,.289043,-.1575,1.319837,.574033,.31233,-.169208,1.316301,.573181,.33612,-.181125,1.312251,.572188,.361506,-.192232,1.307003,.570631,.387757,-.202981,1.301068,.568558,.414365,-.21316,1.293695,.566027,.440986,-.222617,1.283958,.562942,.467943,-.231583,1.274057,.559219,.494821,-.239881,1.262864,.554913,.521486,-.247336,1.250633,.549953,.547884,-.253921,1.237448,.544251,.574582,-.259099,1.223164,.53712,.601342,-.262695,1.208784,.52865,.627861,-.265337,1.194424,.518978,.653745,-.266872,1.179361,.508525,.679348,-.267403,1.16501,.496705,.705068,-.266429,1.151693,.482926,.730312,-.263829,1.137584,.468519,.755576,-.260491,1.125328,.452213,.780371,-.256166,1.113759,.435127,.804632,-.250079,1.101656,.416833,.828983,-.243181,1.091235,.397009,.852585,-.235383,1.081475,.376647,.875237,-.226031,1.071806,.355506,.899152,-.216343,1.064453,.333133,.922121,-.205772,1.057161,.311073,.944523,-.19398,1.050447,.287781,.967313,-.18192,1.044531,.26435,.989042,-.168822,1.039312,.241128,1.010881,-.15535,1.035298,.218138,1.032368,-.141231,1.032073,.195579,1.052254,-.126521,1.029395,.173399,1.070207,-.111243,1.026938,.151866,1.086528,-.095617,1.024957,.130711,1.10067,-.079687,1.021924,.108865,1.112461,-.063593,1.018281,.08676,1.121588,-.047313,1.013747,.064575,1.128522,-.031385,1.008433,.042499,1.134759,-.015356,1.003569,.02084,1.141448,114e-6,.999978,-.000056,2e-4,-.000122,1.372763,.611086,503e-6,-.000308,1.371456,.611084,.002016,-.001232,1.37344,.611084,.004535,-.002771,1.373387,.611083,.008061,-.004926,1.372916,.611083,.012601,-.0077,1.373956,.611084,.018142,-.011084,1.373419,.611078,.024695,-.015087,1.373492,.611074,.032255,-.019701,1.37336,.611066,.040827,-.02493,1.373327,.611055,.050408,-.030769,1.373222,.611037,.061004,-.037217,1.373079,.611014,.072613,-.04427,1.372895,.610982,.085238,-.051923,1.372624,.610941,.098878,-.060161,1.372252,.610883,.113522,-.068785,1.371785,.610798,.129176,-.077863,1.371103,.610683,.145876,-.087593,1.370541,.610537,.16357,-.097847,1.369496,.610349,.182283,-.108592,1.368477,.610109,.20193,-.11942,1.36698,.609763,.22257,-.130789,1.365375,.609343,.244123,-.142514,1.363456,.608815,.266437,-.154232,1.360916,.608114,.289467,-.16637,1.357909,.607291,.312861,-.178505,1.353588,.606272,.336736,-.19098,1.349211,.605153,.36174,-.202859,1.343319,.603548,.387878,-.213997,1.335908,.601268,.414357,-.224584,1.326676,.598499,.441442,-.234664,1.317331,.595066,.468409,-.243875,1.305818,.590996,.494999,-.252121,1.291863,.586293,.52173,-.259714,1.278212,.58084,.547894,-.266242,1.262656,.574494,.573865,-.271578,1.246364,.567007,.601124,-.275503,1.231274,.557771,.627606,-.277954,1.215252,.547255,.654004,-.279404,1.199977,.535766,.679554,-.279632,1.183995,.522792,.70428,-.278457,1.167428,.508488,.72983,-.275706,1.15276,.492425,.754376,-.27164,1.137942,.475285,.779209,-.266911,1.125222,.456679,.803562,-.260838,1.112179,.437267,.827985,-.253353,1.101439,.416227,.851737,-.245027,1.08989,.394728,.87485,-.235719,1.080018,.372244,.89768,-.225051,1.070807,.348846,.921351,-.214051,1.06318,.324961,.943818,-.202039,1.056148,.300836,.966368,-.189134,1.049277,.276333,.987426,-.175613,1.042176,.251862,1.010162,-.161473,1.038567,.227217,1.031224,-.146866,1.034102,.203582,1.052317,-.131644,1.0316,.180629,1.070879,-.115909,1.028913,.158165,1.087407,-.099638,1.026193,.135905,1.102159,-.083091,1.023567,.113394,1.114006,-.066178,1.019567,.090325,1.123374,-.04943,1.014856,.067302,1.13031,-.032557,1.009141,.044264,1.136334,-.016157,1.003984,.021807,1.142961,172e-6,.999951,-.000077,2e-4,-.000129,1.416584,.645866,504e-6,-.000326,1.417762,.645865,.002016,-.001302,1.417825,.645866,.004535,-.002929,1.417142,.645865,.008062,-.005207,1.416968,.645864,.012598,-.008136,1.417109,.645862,.018141,-.011715,1.417001,.645859,.02469,-.015941,1.416878,.645853,.032257,-.020823,1.417134,.645843,.040827,-.026347,1.416983,.645829,.050411,-.032518,1.416949,.645808,.061007,-.03933,1.416694,.645781,.072621,-.046783,1.416599,.645746,.085249,-.054865,1.416241,.645695,.098897,-.063563,1.415832,.64563,.113546,-.072607,1.415264,.645529,.12922,-.082257,1.414482,.645396,.145888,-.092515,1.413626,.645268,.163659,-.103393,1.41271,.645018,.182385,-.114684,1.411418,.644739,.202078,-.126098,1.409822,.644348,.222772,-.138145,1.407948,.643872,.24437,-.150405,1.405678,.643255,.266787,-.162798,1.402763,.642463,.289844,-.175434,1.398863,.641504,.31354,-.188158,1.394695,.640346,.337489,-.201014,1.389376,.639042,.362008,-.213719,1.382439,.637412,.38799,-.225248,1.373281,.63493,.414728,-.236348,1.363729,.631861,.441635,-.246701,1.352304,.628155,.468588,-.256167,1.339162,.623625,.495337,-.264662,1.323811,.618458,.521886,-.272207,1.30763,.612373,.548355,-.27889,1.291265,.605263,.574535,-.284442,1.273752,.597048,.60087,-.288389,1.256171,.587401,.627715,-.290816,1.238447,.576001,.65383,-.291886,1.221036,.563198,.679175,-.291629,1.202283,.549249,.704539,-.290489,1.185866,.533881,.729126,-.287529,1.168822,.516966,.754297,-.283184,1.152934,.498501,.778678,-.277732,1.137821,.478728,.802473,-.271203,1.123387,.457814,.826596,-.263494,1.110573,.435865,.850835,-.254572,1.099099,.412597,.874203,-.244815,1.088403,.388995,.897271,-.233993,1.078085,.364487,.919667,-.221934,1.068543,.339344,.943001,-.209714,1.061081,.31377,.965688,-.196367,1.054023,.287928,.987598,-.182263,1.047247,.262157,1.00928,-.167775,1.041376,.236855,1.031762,-.15253,1.037647,.211847,1.051965,-.136809,1.033396,.187546,1.071699,-.120418,1.031021,.164186,1.088881,-.103618,1.028403,.141184,1.103482,-.086271,1.024987,.117665,1.115646,-.068973,1.020884,.093896,1.125258,-.051285,1.015966,.069978,1.132045,-.033998,1.00999,.046126,1.138004,-.016696,1.00427,.022635,1.144463,89e-6,.999987,-.000016,2e-4,-.000136,1.463614,.681786,504e-6,-.000344,1.465345,.681785,.002015,-.001374,1.464172,.681783,.004535,-.003092,1.464846,.681784,.008062,-.005496,1.464783,.681784,.012598,-.008588,1.464883,.681781,.018141,-.012366,1.46474,.681777,.024692,-.016829,1.464665,.68177,.032258,-.02198,1.46472,.68176,.040829,-.027811,1.464625,.681742,.050415,-.034324,1.464571,.68172,.061013,-.041513,1.464346,.681688,.072628,-.049375,1.464131,.681644,.085264,-.057903,1.463847,.681588,.098918,-.067067,1.463369,.681509,.113568,-.07657,1.462549,.681389,.129265,-.086782,1.461703,.681239,.145997,-.097637,1.46084,.681047,.163751,-.109101,1.459737,.680806,.182505,-.120922,1.458231,.68048,.202241,-.133007,1.456393,.680042,.222987,-.145693,1.454258,.679503,.244638,-.158488,1.451543,.678792,.267132,-.171585,1.448115,.677907,.290365,-.184746,1.443992,.676796,.314178,-.198101,1.439271,.675498,.338289,-.21137,1.43283,.673922,.362543,-.224489,1.424163,.672151,.38847,-.236914,1.41516,.669601,.415105,-.248342,1.403811,.666255,.441925,-.258957,1.390149,.662166,.468668,-.268556,1.374104,.657229,.49572,-.277359,1.358102,.651347,.522574,-.285078,1.340754,.644598,.548981,-.291718,1.322033,.63682,.574946,-.297087,1.302148,.627812,.600744,-.301079,1.28213,.617485,.627565,-.303566,1.263339,.605047,.653598,-.30433,1.242712,.591167,.679239,-.30382,1.223212,.576025,.704043,-.302064,1.203763,.559649,.728796,-.299095,1.185434,.541271,.753581,-.294392,1.16763,.5218,.778577,-.288603,1.15193,.500628,.80255,-.281604,1.136072,.478434,.825803,-.273472,1.121673,.455384,.849768,-.264011,1.108491,.430811,.87325,-.253653,1.09655,.405524,.896725,-.242642,1.085905,.380038,.919158,-.230191,1.075091,.353482,.942236,-.217145,1.066848,.326605,.965031,-.203555,1.05931,.299842,.987048,-.188777,1.051749,.272859,1.008718,-.173613,1.044999,.24604,1.031097,-.157972,1.040066,.219826,1.052493,-.141589,1.035951,.194278,1.071773,-.124814,1.03252,.16983,1.089646,-.107321,1.029803,.146135,1.104932,-.089726,1.026612,.122127,1.117687,-.071433,1.022391,.097461,1.127188,-.053395,1.017113,.072556,1.13401,-.035151,1.010934,.047749,1.139746,-.017427,1.004633,.02353,1.146205,151e-6,1.00002,-.000106,2e-4,-.000144,1.517643,.718949,504e-6,-.000362,1.516387,.718947,.002016,-.001449,1.516742,.718946,.004536,-.003261,1.517196,.718946,.008063,-.005796,1.516806,.718945,.012598,-.009057,1.516986,.718943,.01814,-.013039,1.516603,.718937,.024694,-.017747,1.516739,.718929,.03226,-.023178,1.516994,.718917,.040831,-.029325,1.516649,.718896,.050419,-.036192,1.516594,.71887,.061019,-.04377,1.516327,.718833,.072638,-.052056,1.516054,.718782,.085274,-.061039,1.515628,.718714,.098938,-.070676,1.515199,.718623,.113607,-.080679,1.514222,.718483,.129329,-.091485,1.513354,.718316,.146077,-.102931,1.512301,.718096,.163856,-.114986,1.510977,.717818,.18264,-.127305,1.509225,.717432,.202432,-.140147,1.507152,.716939,.223229,-.153468,1.50478,.716331,.244943,-.166875,1.501612,.715527,.267559,-.180658,1.497898,.714523,.290926,-.194405,1.493208,.713266,.314863,-.208302,1.487388,.711758,.339053,-.22202,1.479677,.709982,.363627,-.235683,1.47095,.707958,.388887,-.248723,1.459907,.705346,.415474,-.260563,1.446579,.701644,.442065,-.271352,1.429962,.697134,.469418,-.281541,1.414343,.691665,.496419,-.290429,1.395681,.685227,.523071,-.298032,1.375347,.677815,.549641,-.304679,1.354816,.669063,.575489,-.309902,1.332505,.659071,.601108,-.313771,1.309752,.647799,.627199,-.316225,1.288381,.634856,.653243,-.316679,1.265785,.619627,.67896,-.315816,1.244333,.603244,.704055,-.313776,1.223315,.585191,.728713,-.310417,1.203142,.565969,.753301,-.305786,1.184323,.545347,.77789,-.299262,1.16607,.522753,.802354,-.29183,1.149599,.499017,.826005,-.283281,1.133655,.474335,.84892,-.273512,1.118132,.449019,.872765,-.262525,1.105606,.422329,.89595,-.250769,1.093539,.395057,.918816,-.238257,1.082388,.367709,.941089,-.224381,1.072484,.33935,.964514,-.210289,1.064054,.311239,.987128,-.195488,1.056645,.283272,1.009064,-.179491,1.049549,.255163,1.030163,-.163172,1.042741,.227757,1.052502,-.146457,1.03827,.20097,1.072971,-.129054,1.035014,.175767,1.091223,-.111285,1.032231,.151118,1.106518,-.092617,1.028211,.126196,1.119235,-.074168,1.023686,.100828,1.129311,-.055212,1.018311,.07524,1.135983,-.036571,1.011485,.049558,1.141648,-.017954,1.004952,.024273,1.147938,125e-6,1.000009,-.000048,199e-6,-.000151,1.566887,.757466,504e-6,-.000382,1.574111,.757466,.002016,-.001527,1.573735,.757466,.004535,-.003435,1.573737,.757466,.008062,-.006107,1.573782,.757464,.012599,-.009542,1.573796,.75746,.018142,-.013739,1.57371,.757455,.024694,-.018697,1.573562,.757446,.032259,-.024418,1.573667,.757429,.040834,-.030895,1.573555,.757407,.050422,-.038127,1.573383,.757376,.061025,-.046108,1.573086,.757332,.07265,-.054835,1.572833,.757274,.085296,-.064294,1.572395,.757195,.098962,-.074376,1.571729,.757087,.113649,-.084955,1.570571,.756925,.129389,-.096334,1.569582,.756729,.146167,-.108406,1.568444,.756481,.163973,-.121056,1.566905,.756158,.182798,-.13397,1.564939,.755715,.20265,-.147522,1.562666,.755167,.223502,-.161466,1.559877,.754465,.245269,-.175539,1.556008,.753552,.26801,-.189957,1.552013,.75242,.291474,-.204361,1.546509,.751008,.315527,-.218714,1.539575,.749266,.339954,-.233029,1.530968,.747232,.364649,-.247149,1.520994,.744906,.38952,-.260672,1.507748,.742123,.415717,-.272873,1.491777,.738187,.442862,-.284317,1.475658,.733189,.469939,-.294552,1.456572,.727165,.496916,-.303517,1.435237,.720043,.52348,-.311061,1.412192,.71164,.550092,-.317596,1.389033,.702174,.576384,-.322921,1.365086,.691225,.60228,-.326806,1.341317,.678841,.627676,-.329057,1.316518,.664815,.653458,-.329372,1.291877,.648548,.679227,-.328067,1.268126,.630676,.704476,-.325585,1.244424,.611585,.729232,-.321775,1.22301,.590803,.753405,-.316713,1.201297,.568653,.777274,-.309858,1.181071,.544763,.801882,-.301866,1.162826,.519747,.82603,-.292861,1.145704,.493531,.849359,-.282794,1.129629,.4669,.871837,-.271197,1.114155,.43923,.895896,-.258954,1.102334,.41057,.918951,-.245878,1.090163,.381314,.941148,-.231897,1.078738,.352268,.963464,-.216743,1.068862,.322688,.986628,-.201486,1.061077,.293523,1.009289,-.185521,1.053561,.264125,1.030659,-.168429,1.046627,.235706,1.052382,-.15121,1.040953,.208022,1.073476,-.133289,1.036534,.181245,1.092237,-.114768,1.03358,.155661,1.1082,-.095917,1.029997,.130223,1.121435,-.076492,1.025374,.104098,1.131382,-.057204,1.019485,.077776,1.137994,-.037747,1.012188,.05125,1.143441,-.018673,1.005309,.025245,1.149714,216e-6,1.000004,-.00012,2e-4,-.000159,1.633988,.797469,504e-6,-.000402,1.636076,.797469,.002016,-.001607,1.635679,.797467,.004535,-.003617,1.63604,.797468,.008063,-.00643,1.636159,.797467,.012599,-.010046,1.636128,.797462,.018141,-.014464,1.63573,.797457,.024696,-.019685,1.635836,.797445,.032259,-.025705,1.635719,.797426,.040835,-.032523,1.63561,.797401,.050425,-.040135,1.63546,.797363,.061033,-.048536,1.635182,.797313,.072661,-.057718,1.634817,.797243,.085315,-.067666,1.634314,.79715,.098985,-.078179,1.63335,.797016,.113699,-.089383,1.632253,.796839,.129456,-.101364,1.631025,.796623,.146275,-.114081,1.629867,.796331,.164108,-.127318,1.628043,.795956,.182983,-.140901,1.625813,.795458,.202891,-.155174,1.623149,.794834,.223787,-.169654,1.619686,.794015,.245678,-.18454,1.615694,.793013,.268495,-.199543,1.610812,.791727,.292093,-.214639,1.604629,.790107,.316184,-.229499,1.596061,.788154,.340986,-.244407,1.587195,.785797,.365808,-.258907,1.575031,.783093,.390528,-.272746,1.559448,.77997,.41651,-.285845,1.543294,.775852,.443443,-.297404,1.523476,.770323,.470442,-.307757,1.501515,.763721,.497499,-.316846,1.477841,.755889,.524316,-.324561,1.452427,.746662,.551212,-.33106,1.427421,.736004,.577323,-.335956,1.400369,.72381,.602976,-.339501,1.373093,.710184,.628357,-.341577,1.345853,.695017,.653642,-.342031,1.31904,.677972,.67944,-.340342,1.29249,.658877,.704744,-.337356,1.267182,.638085,.729692,-.333042,1.24328,.615615,.75392,-.327504,1.219751,.592054,.777695,-.320537,1.197796,.566967,.801426,-.31188,1.176872,.540643,.825649,-.302211,1.15816,.512906,.849282,-.291665,1.141257,.484587,.872341,-.28005,1.125469,.455556,.89511,-.266978,1.110222,.425652,.918841,-.253326,1.097419,.395015,.941209,-.238899,1.086101,.364948,.963142,-.223523,1.075023,.334151,.985996,-.207346,1.065628,.303708,1.008718,-.190889,1.057256,.273008,1.030554,-.173517,1.04972,.243221,1.053085,-.155645,1.043837,.214426,1.074267,-.137472,1.039312,.187036,1.093591,-.118385,1.035457,.160512,1.10985,-.098883,1.03163,.134384,1.123516,-.07905,1.026762,.107424,1.133578,-.058977,1.02064,.080317,1.140289,-.039013,1.013096,.052944,1.14561,-.019228,1.005694,.025989,1.151704,105e-6,.999981,-.000019,2e-4,-.000168,1.704841,.839096,504e-6,-.000423,1.704242,.839097,.002016,-.001691,1.703821,.839091,.004534,-.003805,1.703804,.839094,.008063,-.006765,1.704224,.839092,.012598,-.01057,1.704013,.839087,.018142,-.015219,1.703889,.839079,.024697,-.020712,1.704023,.839066,.032261,-.027046,1.703836,.839045,.040837,-.034218,1.703608,.839014,.050429,-.042224,1.703414,.838972,.061041,-.051061,1.703148,.838912,.072676,-.060717,1.702744,.838831,.08534,-.071175,1.702223,.838724,.099023,-.082182,1.700984,.838567,.113759,-.094007,1.699764,.838367,.129546,-.106621,1.698462,.838112,.146382,-.119956,1.696938,.837782,.16426,-.13376,1.694868,.837346,.183188,-.148108,1.692262,.83678,.203158,-.163075,1.689251,.836073,.224147,-.178255,1.685408,.835148,.246147,-.1939,1.680946,.833992,.269072,-.209553,1.675277,.832546,.292718,-.225226,1.667626,.830727,.317159,-.240836,1.658952,.82851,.341979,-.256103,1.647624,.825843,.366844,-.270887,1.633014,.82276,.392043,-.285324,1.617191,.819159,.417356,-.298817,1.597501,.814788,.444093,-.310711,1.575184,.808751,.471379,-.32141,1.55159,.801294,.498267,-.330421,1.524134,.792711,.525401,-.338331,1.496672,.78248,.551846,-.34443,1.467062,.770659,.578009,-.349047,1.436943,.757348,.604054,-.35249,1.407611,.742541,.629387,-.354158,1.377441,.726071,.654435,-.354422,1.347651,.707524,.679845,-.352663,1.318769,.687067,.704892,-.348994,1.2906,.664637,.729763,-.344105,1.263997,.640663,.754345,-.338129,1.239273,.615484,.778629,-.330905,1.215858,.58921,.801939,-.322113,1.192318,.56155,.825723,-.311673,1.17138,.532175,.849387,-.30041,1.152991,.502055,.872792,-.288328,1.136139,.471308,.895083,-.275087,1.119534,.440427,.918335,-.2607,1.105542,.40926,.941577,-.245717,1.09307,.377142,.963992,-.230079,1.081207,.345289,.98651,-.213523,1.071488,.313508,1.008806,-.196157,1.062011,.281962,1.030724,-.178467,1.05324,.251177,1.053782,-.160291,1.047057,.220986,1.075451,-.141308,1.041842,.192256,1.094947,-.121975,1.037704,.165023,1.111783,-.101744,1.0333,.138228,1.125525,-.081476,1.028234,.110679,1.135873,-.06077,1.021695,.082672,1.142478,-.040207,1.013838,.054506,1.147889,-.019908,1.006166,.026938,1.153852,204e-6,.999983,-.000123,199e-6,-.000176,1.771601,.882501,504e-6,-.000445,1.779195,.882504,.002016,-.001779,1.779635,.882498,.004536,-.004003,1.779586,.882499,.008062,-.007115,1.778613,.882496,.012598,-.011116,1.778678,.882492,.018142,-.016005,1.778531,.882481,.024696,-.021782,1.778556,.882466,.032262,-.028444,1.778507,.882442,.040842,-.035987,1.778385,.882408,.050436,-.044404,1.778034,.882364,.061053,-.053695,1.777761,.882287,.072692,-.063842,1.777256,.88219,.085364,-.074821,1.776518,.882067,.099064,-.086368,1.77508,.881884,.113828,-.098805,1.773836,.881657,.129649,-.11209,1.77237,.881361,.146518,-.126067,1.770594,.880982,.16444,-.140493,1.768089,.880484,.183437,-.155646,1.765301,.879843,.203468,-.171266,1.761698,.879035,.224562,-.187231,1.757518,.877982,.246665,-.20354,1.752318,.876667,.269652,-.219916,1.745356,.875028,.293531,-.236255,1.737186,.872977,.318048,-.25241,1.726709,.870448,.342963,-.268192,1.713109,.8674,.368336,-.283587,1.698087,.863882,.393512,-.298186,1.678638,.859724,.418602,-.311882,1.655604,.854835,.44508,-.3245,1.63225,.848353,.472289,-.335295,1.605069,.840218,.499128,-.344256,1.573846,.830556,.525834,-.351716,1.54112,.819269,.553177,-.358241,1.511385,.806222,.57948,-.36264,1.477866,.791647,.605205,-.365513,1.444218,.775398,.630617,-.366822,1.410954,.757144,.65573,-.366785,1.37901,.737323,.680529,-.364904,1.34728,.715601,.7058,-.36099,1.316416,.691547,.73055,-.355397,1.286344,.666141,.75497,-.348664,1.258954,.638929,.779042,-.340774,1.232965,.611015,.802839,-.331767,1.209775,.581877,.825793,-.321054,1.185813,.551509,.849512,-.309016,1.16508,.519698,.87312,-.296369,1.147091,.487506,.895942,-.282704,1.129658,.45532,.917996,-.268007,1.113463,.422605,.941281,-.252329,1.10004,.389347,.964584,-.236203,1.087973,.35643,.986371,-.219209,1.075983,.323089,1.009522,-.201588,1.06694,.290806,1.031976,-.183296,1.057999,.258682,1.053461,-.164509,1.049542,.227722,1.076121,-.145165,1.043718,.197439,1.096597,-.125199,1.039607,.169578,1.113908,-.104921,1.035528,.142222,1.127939,-.083623,1.029807,.113802,1.138391,-.062589,1.023312,.085164,1.14511,-.041376,1.014806,.056186,1.150141,-.020433,1.006501,.027654,1.156069,97e-6,.999949,-.000046,2e-4,-.000185,1.858268,.927857,504e-6,-.000468,1.861583,.927859,.002016,-.00187,1.860659,.927855,.004535,-.004208,1.860963,.927867,.008063,-.00748,1.860766,.927855,.012594,-.011683,1.859996,.927851,.018142,-.016828,1.860739,.927839,.024698,-.022901,1.860763,.927818,.032263,-.029903,1.860501,.927791,.040846,-.037834,1.860431,.927751,.05044,-.04668,1.859827,.92769,.061066,-.056446,1.859624,.92761,.072713,-.067109,1.859039,.927505,.085393,-.078613,1.858144,.927357,.09912,-.090747,1.856618,.927145,.11391,-.10385,1.855221,.926884,.129755,-.117777,1.85347,.926546,.146669,-.132441,1.851413,.926104,.164648,-.147565,1.848498,.92553,.183708,-.16347,1.845281,.924802,.203832,-.179763,1.841273,.923871,.225029,-.196564,1.836481,.922691,.247221,-.213537,1.830273,.921198,.270343,-.230662,1.822374,.91932,.294399,-.24774,1.812975,.917008,.31904,-.264448,1.800693,.914141,.344269,-.280831,1.785923,.910707,.369625,-.296478,1.767203,.906585,.394925,-.311287,1.744434,.901918,.420583,-.325578,1.720938,.89624,.4462,-.338384,1.693005,.889335,.472969,-.349187,1.660901,.880394,.50049,-.358687,1.628806,.869705,.527312,-.366042,1.593001,.857145,.554207,-.372045,1.557046,.842943,.58062,-.376134,1.520192,.826837,.60648,-.378636,1.482947,.808891,.631815,-.379414,1.445954,.789119,.657021,-.378972,1.410833,.767564,.681686,-.376728,1.376575,.744338,.706498,-.372844,1.342935,.718799,.731258,-.366649,1.311052,.691756,.755937,-.359354,1.280478,.662683,.779259,-.350487,1.250585,.632892,.803295,-.340941,1.225722,.60216,.82657,-.330174,1.201003,.57052,.849954,-.317854,1.178488,.537651,.873696,-.304426,1.158302,.503799,.896695,-.29012,1.139886,.469645,.919149,-.275106,1.122884,.435625,.942121,-.259282,1.107691,.401228,.964627,-.242123,1.093661,.367086,.986614,-.224575,1.08158,.332885,1.009623,-.206837,1.071375,.299209,1.033126,-.188092,1.062241,.266187,1.054954,-.168637,1.052912,.233733,1.07766,-.149166,1.047047,.203192,1.097983,-.128587,1.041607,.173918,1.115586,-.107339,1.03685,.145531,1.13017,-.086203,1.031427,.11689,1.141018,-.064171,1.024395,.087388,1.147681,-.04253,1.015719,.057733,1.15256,-.021011,1.006883,.028413,1.158406,158e-6,.999897,-.000106,2e-4,-.000195,1.950982,.975366,504e-6,-.000491,1.950207,.975365,.002015,-.001966,1.950675,.975362,.004535,-.004423,1.951281,.97537,.008062,-.007863,1.951045,.975362,.012597,-.012285,1.951199,.975356,.018145,-.017692,1.951528,.97534,.024699,-.024074,1.951194,.975321,.032266,-.031434,1.950865,.975288,.040853,-.039771,1.951038,.975244,.050452,-.049067,1.950336,.975173,.061077,-.059324,1.949805,.975078,.072736,-.070526,1.949133,.974951,.085431,-.082528,1.947947,.974777,.099182,-.095345,1.946337,.97454,.113999,-.109118,1.944725,.974241,.129888,-.123741,1.942857,.973852,.146842,-.139071,1.940251,.973342,.16489,-.154986,1.937086,.972684,.184025,-.171661,1.933404,.971856,.204245,-.188672,1.92877,.970785,.225528,-.206252,1.923041,.969448,.247841,-.223972,1.915788,.967742,.271157,-.241827,1.907008,.965607,.295297,-.259562,1.895854,.963007,.320121,-.276909,1.881289,.959722,.345566,-.293883,1.864528,.955831,.371012,-.309816,1.842062,.951127,.396834,-.325157,1.818068,.945725,.422277,-.339357,1.788874,.939318,.447928,-.352387,1.758283,.93147,.474315,-.36368,1.723668,.9219,.50156,-.372963,1.686081,.909996,.528391,-.380159,1.645816,.896244,.554754,-.385545,1.603709,.880326,.581888,-.389778,1.565475,.862716,.607791,-.391839,1.524196,.843146,.633511,-.392331,1.483921,.821554,.658621,-.391193,1.445013,.798336,.68316,-.388424,1.406963,.773299,.707429,-.384104,1.370996,.746668,.732212,-.377945,1.335879,.717502,.756871,-.369856,1.302489,.686954,.781065,-.360707,1.271815,.655372,.804167,-.350091,1.242416,.622683,.827948,-.338941,1.217208,.589185,.850901,-.326427,1.192354,.555005,.873589,-.312199,1.169639,.519594,.897085,-.297374,1.150181,.484105,.920459,-.281932,1.132858,.448661,.942637,-.265625,1.115401,.413051,.965341,-.248332,1.101078,.377329,.98753,-.229983,1.087377,.342349,1.010739,-.211647,1.076582,.307824,1.033449,-.192725,1.0659,.273368,1.055618,-.172726,1.056958,.240238,1.079345,-.15264,1.04962,.208322,1.100058,-.131931,1.044084,.178242,1.118547,-.110351,1.039387,.149493,1.132748,-.088128,1.033049,.119673,1.143419,-.066069,1.025521,.089728,1.150316,-.043513,1.016378,.059253,1.155208,-.021593,1.007506,.02914,1.160871,111e-6,.999916,-.000035,201e-6,-.000206,2.061,1.025243,504e-6,-.000516,2.049647,1.025237,.002015,-.002066,2.050169,1.025237,.004535,-.00465,2.051254,1.025255,.008063,-.008266,2.051302,1.025236,.0126,-.012915,2.051508,1.025226,.018144,-.018594,2.050981,1.025215,.0247,-.025304,2.050841,1.02519,.032267,-.033038,2.050537,1.025152,.040852,-.041795,2.05066,1.02509,.05046,-.05157,2.049921,1.025017,.061094,-.062347,2.04935,1.024908,.072762,-.074111,2.048517,1.02476,.085475,-.086661,2.047009,1.024555,.099249,-.10016,2.045261,1.024278,.114106,-.114628,2.043508,1.023941,.130032,-.130002,2.041321,1.023488,.14705,-.145985,2.038299,1.022905,.165164,-.162762,2.034658,1.022151,.18438,-.180172,2.030312,1.0212,.204704,-.198022,2.024944,1.019966,.226129,-.216359,2.018546,1.018424,.248582,-.234923,2.010153,1.016519,.272011,-.253474,1.999659,1.014072,.296259,-.27182,1.986076,1.011071,.321423,-.289959,1.970618,1.007389,.346897,-.307283,1.949667,1.002955,.37275,-.323817,1.925287,.997633,.398603,-.339241,1.896006,.991354,.424351,-.353633,1.863658,.983937,.449887,-.36666,1.82743,.975254,.475715,-.378213,1.789521,.964753,.502204,-.387133,1.745632,.951594,.530179,-.394976,1.705347,.936344,.556732,-.400134,1.658928,.918907,.583123,-.403439,1.613077,.899504,.609477,-.405285,1.567884,.878172,.634927,-.405055,1.523507,.854396,.660357,-.403494,1.481712,.829259,.684851,-.400104,1.439,.802359,.709654,-.395536,1.400956,.773534,.733472,-.388996,1.362156,.74323,.757502,-.380263,1.325113,.71109,.782249,-.370594,1.292913,.677166,.806017,-.359509,1.262088,.642527,.828687,-.347126,1.232059,.607589,.852372,-.334474,1.20716,.571938,.874266,-.320074,1.181978,.535518,.898168,-.304719,1.161156,.498375,.920456,-.288246,1.140667,.461179,.942832,-.271311,1.12278,.424533,.966458,-.254154,1.108743,.387784,.988907,-.235659,1.093872,.351689,1.011557,-.216322,1.081959,.315743,1.035099,-.197007,1.070885,.280402,1.056354,-.176878,1.059968,.246472,1.079854,-.156058,1.051815,.212818,1.101494,-.134772,1.045757,.182143,1.120587,-.113071,1.041169,.152867,1.135399,-.090411,1.034844,.122796,1.146612,-.067477,1.026974,.091888,1.153168,-.044849,1.017303,.060779,1.157912,-.021998,1.007735,.029919,1.163607,121e-6,.999959,3e-6,2e-4,-.000216,2.163956,1.077737,504e-6,-.000543,2.161128,1.077732,.002016,-.002173,2.162732,1.077729,.004535,-.004887,2.161402,1.077749,.008066,-.008692,2.163252,1.077732,.012599,-.013576,2.1613,1.077727,.018145,-.019546,2.161151,1.077702,.024702,-.026599,2.161223,1.077675,.032272,-.034729,2.160949,1.077632,.040862,-.043936,2.160967,1.077575,.05047,-.054203,2.160035,1.077473,.061113,-.065528,2.15949,1.077348,.072794,-.077882,2.158517,1.077178,.085528,-.09103,2.156605,1.076937,.099337,-.105251,2.154828,1.076631,.114228,-.120456,2.152812,1.076229,.130202,-.136573,2.150298,1.075713,.147284,-.153306,2.146752,1.075031,.16548,-.170931,2.142744,1.074173,.184793,-.189083,2.137475,1.073063,.205224,-.20784,2.13132,1.071683,.226743,-.226939,2.123154,1.069914,.249401,-.246344,2.114086,1.067718,.272955,-.26564,2.101599,1.064924,.297494,-.284846,2.086612,1.061512,.322731,-.303452,2.067356,1.057359,.348451,-.32133,2.043711,1.052294,.374451,-.338201,2.015033,1.046153,.400454,-.353816,1.981139,1.039003,.426434,-.368216,1.944128,1.030498,.452088,-.381251,1.903094,1.020454,.477901,-.392833,1.860402,1.008793,.504173,-.402408,1.814402,.994791,.53152,-.409545,1.766273,.977733,.558049,-.414351,1.714119,.958625,.584778,-.417437,1.664612,.937189,.610808,-.418519,1.613793,.913543,.636915,-.418094,1.565942,.888137,.662204,-.415742,1.518783,.860728,.686848,-.411746,1.473306,.831793,.710992,-.406153,1.430153,.800862,.735382,-.399519,1.389824,.768768,.759079,-.390927,1.350744,.734825,.782912,-.380111,1.313559,.69945,.806746,-.368383,1.280028,.663191,.830269,-.355606,1.249814,.625927,.853305,-.341988,1.221138,.588644,.876326,-.327545,1.195837,.550849,.898322,-.311779,1.171844,.512694,.921811,-.294944,1.150671,.474225,.944563,-.277333,1.132224,.435772,.967089,-.25934,1.115422,.398001,.989754,-.240836,1.100405,.360802,1.01247,-.221293,1.086533,.323566,1.036426,-.201191,1.075496,.287387,1.058709,-.18059,1.064233,.252184,1.081593,-.15981,1.055296,.218441,1.103146,-.137772,1.047978,.186223,1.122814,-.115347,1.042693,.156019,1.13779,-.092582,1.036049,.125579,1.149184,-.069152,1.027944,.093986,1.156062,-.045661,1.018039,.062122,1.160733,-.022719,1.008072,.03065,1.166487,231e-6,1.000063,-.00012,201e-6,-.000228,2.308308,1.133128,504e-6,-.000571,2.283756,1.133123,.002016,-.002284,2.283756,1.133123,.004535,-.005138,2.28331,1.133144,.008048,-.009119,2.266192,1.133138,.0126,-.014274,2.284377,1.13311,.018147,-.020553,2.284204,1.133093,.024702,-.027964,2.283517,1.13306,.032272,-.03651,2.282997,1.133007,.040866,-.046188,2.282986,1.13293,.050481,-.056979,2.28226,1.132824,.061133,-.068881,2.281533,1.132678,.07283,-.08185,2.280504,1.132481,.085592,-.095657,2.278304,1.132202,.099431,-.110594,2.276269,1.131845,.11436,-.12659,2.27389,1.131383,.130388,-.143454,2.270761,1.130784,.147547,-.161029,2.266794,1.130003,.165836,-.179523,2.262332,1.129016,.185269,-.198527,2.256326,1.127738,.205822,-.218138,2.249031,1.126156,.227527,-.238141,2.239993,1.124132,.250325,-.258302,2.228878,1.121594,.27407,-.278329,2.214204,1.118449,.298793,-.29831,2.196654,1.114528,.324131,-.317462,2.173394,1.109783,.350101,-.335853,2.146395,1.103901,.376293,-.353064,2.112341,1.096954,.402547,-.36895,2.0737,1.088642,.428791,-.383462,2.031152,1.078946,.454976,-.396635,1.986661,1.067536,.480566,-.407873,1.937038,1.054403,.506154,-.417303,1.885155,1.038894,.532862,-.424194,1.830369,1.020535,.560354,-.429344,1.776976,.999295,.587114,-.431949,1.721214,.97599,.613345,-.432547,1.665739,.950239,.639335,-.431338,1.6122,.922467,.664996,-.428473,1.561035,.892593,.688947,-.423355,1.50824,.861325,.713403,-.417235,1.461776,.828289,.737649,-.409848,1.418888,.793863,.761275,-.400901,1.376807,.758074,.784778,-.390174,1.337204,.721974,.808762,-.377683,1.301527,.682718,.831993,-.364037,1.267144,.644001,.854696,-.349494,1.236023,.605478,.877933,-.334499,1.209284,.565588,.90018,-.318435,1.183967,.526138,.923039,-.301669,1.161513,.486524,.945895,-.283298,1.140838,.446747,.968069,-.264438,1.122475,.408041,.991179,-.245463,1.106968,.369477,1.012926,-.22568,1.091435,.331626,1.036995,-.205401,1.079561,.294288,1.060909,-.18431,1.068215,.257696,1.083531,-.162846,1.058133,.223343,1.105644,-.14104,1.050851,.190541,1.125691,-.117965,1.045001,.15931,1.141297,-.094377,1.038028,.128238,1.152672,-.070831,1.029694,.096282,1.159333,-.046853,1.019136,.06372,1.163819,-.022991,1.008518,.031234,1.169564,125e-6,1.000069,-.000024,202e-6,-.000241,2.458341,1.191742,504e-6,-.0006,2.418738,1.19174,.002015,-.002401,2.418821,1.19173,.004535,-.005405,2.421986,1.191756,.008071,-.009618,2.424988,1.191753,.0126,-.015012,2.420242,1.191727,.018145,-.021612,2.419937,1.191703,.024704,-.02941,2.419746,1.191662,.032278,-.038398,2.419409,1.191604,.040874,-.048574,2.418995,1.191515,.050496,-.05992,2.41819,1.191389,.06116,-.072432,2.417487,1.191221,.072871,-.086009,2.415853,1.190984,.085664,-.100559,2.413669,1.190664,.099543,-.116283,2.411423,1.190256,.11452,-.133071,2.408711,1.189719,.130616,-.15067,2.4049,1.189019,.147856,-.169197,2.400512,1.188125,.166235,-.188545,2.394939,1.186972,.185804,-.20848,2.388232,1.185515,.206488,-.228883,2.37919,1.183673,.228383,-.249897,2.369208,1.181382,.251305,-.270851,2.355459,1.178478,.275349,-.29178,2.339142,1.174857,.300106,-.312257,2.316655,1.170411,.325849,-.332225,2.29154,1.164883,.351782,-.350862,2.257242,1.158196,.378248,-.368431,2.218671,1.150173,.404674,-.384428,2.17368,1.140703,.431385,-.39923,2.127083,1.129555,.457407,-.411875,2.073236,1.116436,.483275,-.423013,2.018223,1.101373,.509278,-.432624,1.962674,1.084257,.534751,-.439261,1.900814,1.064592,.561895,-.443801,1.839558,1.040881,.588677,-.445872,1.777763,1.015208,.6149,-.445896,1.71655,.987252,.641051,-.444148,1.657984,.957271,.666409,-.440299,1.600832,.924841,.691872,-.435318,1.548237,.891185,.716638,-.428631,1.497572,.855929,.739864,-.419872,1.447043,.819676,.763707,-.410456,1.403648,.781455,.786744,-.39939,1.360844,.742965,.809585,-.386381,1.320529,.70326,.834164,-.372622,1.286467,.662385,.856713,-.357177,1.252306,.621379,.87982,-.341458,1.22307,.580238,.902721,-.325024,1.197115,.539028,.92465,-.307543,1.172314,.498592,.947613,-.289557,1.151171,.45798,.96959,-.269799,1.129986,.417696,.992961,-.250111,1.113321,.377529,1.014582,-.229761,1.097149,.339096,1.038069,-.209375,1.083913,.301119,1.061661,-.188038,1.071241,.263506,1.085069,-.165874,1.060508,.227921,1.107744,-.143437,1.05293,.194062,1.127982,-.120574,1.046396,.162506,1.144541,-.096569,1.03988,.130788,1.155876,-.072039,1.030946,.098057,1.162719,-.047888,1.020124,.064956,1.167089,-.02374,1.008953,.031966,1.172775,277e-6,1.000067,-.000111,2e-4,-.000251,2.573709,1.253951,504e-6,-.000632,2.572401,1.25394,.002015,-.002527,2.571267,1.253927,.004535,-.005687,2.572481,1.253948,.008062,-.010108,2.571851,1.253941,.012588,-.01578,2.568431,1.253934,.018139,-.022731,2.569765,1.253893,.024709,-.030948,2.572115,1.253853,.032283,-.040401,2.571456,1.253785,.040883,-.051105,2.571041,1.253683,.050514,-.063041,2.570153,1.253538,.061188,-.076195,2.569085,1.253336,.072926,-.090402,2.567184,1.253065,.085746,-.105745,2.564731,1.252697,.099661,-.122296,2.561995,1.252218,.114699,-.139912,2.559019,1.25159,.130882,-.158362,2.555017,1.250766,.148202,-.177856,2.549419,1.249744,.166706,-.198049,2.542908,1.248423,.186404,-.219014,2.535205,1.246741,.207272,-.240376,2.524893,1.244596,.229345,-.26223,2.512804,1.241917,.252494,-.284134,2.496923,1.23861,.27669,-.305828,2.476583,1.234474,.301798,-.327107,2.451548,1.229292,.327423,-.3473,2.41863,1.222997,.353848,-.366699,2.381002,1.215366,.380342,-.384421,2.334413,1.206199,.40739,-.400855,2.28566,1.195374,.433913,-.415241,2.228604,1.18229,.460837,-.428275,2.171532,1.167385,.486381,-.438573,2.105639,1.150401,.511959,-.447348,2.040835,1.13099,.537586,-.454152,1.974797,1.109302,.564035,-.458684,1.907895,1.084131,.59069,-.460058,1.839482,1.055803,.61725,-.459662,1.772332,1.025103,.643406,-.45726,1.707313,.992502,.668794,-.452666,1.644722,.957657,.69393,-.446641,1.586832,.92134,.718708,-.439121,1.531197,.883841,.743469,-.430429,1.480765,.844931,.76608,-.419622,1.430338,.804786,.789801,-.408368,1.386295,.764206,.812718,-.395392,1.343758,.722565,.835453,-.380699,1.304655,.680585,.858801,-.364834,1.269287,.637235,.881537,-.348092,1.237493,.594579,.904656,-.331087,1.208862,.552313,.926357,-.312966,1.182365,.51008,.949001,-.294684,1.159452,.468677,.971598,-.275361,1.138706,.426723,.994905,-.254947,1.120552,.385875,1.017981,-.234109,1.104215,.345751,1.04084,-.21304,1.089276,.306762,1.063893,-.191616,1.075845,.269066,1.086907,-.169272,1.063788,.232171,1.109937,-.146076,1.054977,.197826,1.130808,-.122544,1.048572,.165272,1.146831,-.098492,1.040742,.13328,1.158955,-.07371,1.031818,.100262,1.166161,-.04861,1.020747,.066165,1.170491,-.024209,1.00938,.032741,1.176111,1e-5,1.000042,56e-6,202e-6,-.000267,2.786357,1.320169,504e-6,-.000665,2.741889,1.320168,.002015,-.00266,2.74,1.320143,.004536,-.005987,2.744276,1.320161,.008063,-.010644,2.743432,1.320162,.0126,-.016628,2.741741,1.320148,.018144,-.023937,2.741314,1.320127,.024708,-.032577,2.741916,1.320061,.03229,-.042536,2.742132,1.319976,.040894,-.053799,2.741199,1.319861,.050533,-.066361,2.740258,1.319691,.061223,-.080202,2.739045,1.319458,.072985,-.095109,2.736519,1.319138,.085841,-.111296,2.733903,1.318715,.099808,-.128685,2.730944,1.318156,.114903,-.147202,2.727293,1.317424,.131164,-.166575,2.722169,1.316485,.148599,-.187019,2.716148,1.315274,.167245,-.20824,2.708701,1.313733,.187078,-.230151,2.698998,1.311792,.208153,-.252538,2.687341,1.309343,.230418,-.275295,2.672621,1.306247,.253802,-.298066,2.653619,1.302374,.278261,-.320673,2.629943,1.297573,.303527,-.342528,2.599228,1.291625,.329571,-.363531,2.562226,1.284374,.355939,-.382963,2.515491,1.275478,.382987,-.401306,2.464858,1.264866,.409917,-.417455,2.404877,1.252184,.437015,-.432067,2.341408,1.237415,.463474,-.444204,2.271837,1.220687,.489835,-.454631,2.200593,1.200973,.516054,-.463338,2.129733,1.179346,.541397,-.469425,2.055635,1.155039,.566798,-.473526,1.980812,1.127866,.593114,-.474632,1.904723,1.097304,.619945,-.473597,1.832456,1.063603,.646325,-.470656,1.761501,1.027971,.67232,-.465675,1.694248,.990692,.697163,-.458527,1.629227,.951582,.721472,-.449904,1.568132,.911197,.745855,-.44014,1.512084,.869745,.770089,-.429338,1.460694,.827648,.792546,-.416701,1.410739,.784728,.815161,-.403151,1.365438,.741884,.837994,-.388714,1.324811,.6978,.86122,-.372573,1.287723,.653341,.883737,-.355024,1.252491,.609455,.906784,-.337092,1.221844,.565275,.928493,-.31837,1.192881,.521558,.951495,-.299605,1.169131,.478149,.973586,-.280067,1.146316,.436325,.9964,-.259823,1.12786,.394409,1.01978,-.238313,1.110521,.353045,1.042775,-.216506,1.093915,.312803,1.066822,-.194695,1.080326,.2741,1.089869,-.17229,1.067722,.236657,1.113606,-.149264,1.058471,.201603,1.134229,-.124814,1.050701,.168398,1.150922,-.10007,1.043051,.135616,1.163224,-.075155,1.033742,.102144,1.169965,-.049933,1.021818,.067532,1.1742,-.024461,1.009916,.033215,1.179766,188e-6,1.000045,-.000014,202e-6,-.000281,2.964186,1.39088,505e-6,-.000702,2.945157,1.390903,.002015,-.002802,2.931184,1.390863,.004535,-.006307,2.935673,1.3909,.008063,-.011213,2.934274,1.39089,.012598,-.017516,2.932216,1.390876,.018147,-.025221,2.933324,1.390832,.024711,-.034322,2.933945,1.390769,.032295,-.04481,2.933496,1.390674,.040904,-.056673,2.932487,1.390538,.050555,-.069906,2.931571,1.390342,.061259,-.084468,2.929914,1.390064,.073053,-.100152,2.927039,1.389695,.085948,-.117202,2.924241,1.389201,.099968,-.135531,2.92076,1.388548,.115135,-.154906,2.915998,1.387692,.131496,-.175352,2.910285,1.386611,.149049,-.196783,2.903174,1.38519,.167848,-.219066,2.894584,1.383407,.187879,-.241983,2.883171,1.381148,.209143,-.265398,2.869102,1.378261,.231689,-.289254,2.852238,1.37469,.255223,-.312776,2.828264,1.370166,.279952,-.33626,2.800175,1.364591,.305572,-.358865,2.764282,1.357758,.33165,-.380223,2.717845,1.349413,.358491,-.400252,2.665326,1.339084,.385445,-.418422,2.602293,1.326773,.412947,-.434993,2.536973,1.312141,.439681,-.448757,2.459463,1.295205,.467272,-.461427,2.38625,1.275573,.493568,-.471102,2.303225,1.2534,.519743,-.47893,2.221945,1.22889,.544882,-.484098,2.136425,1.20173,.57069,-.488125,2.057093,1.172022,.595905,-.489185,1.975334,1.139312,.622747,-.487535,1.895055,1.103038,.648695,-.483482,1.815995,1.064364,.675159,-.478096,1.744272,1.024098,.700714,-.470492,1.675257,.982186,.725641,-.461398,1.609135,.939137,.748552,-.449825,1.545091,.894791,.772808,-.438185,1.489394,.850373,.795928,-.425073,1.437026,.805287,.8189,-.411028,1.389654,.760003,.841633,-.396047,1.345873,.714914,.863213,-.379637,1.305185,.669271,.886662,-.362227,1.269147,.622935,.908504,-.343068,1.234714,.577757,.931425,-.323982,1.204997,.532922,.953835,-.304347,1.178871,.488154,.975813,-.284219,1.155019,.444885,.997662,-.263544,1.133941,.402224,1.021167,-.242611,1.1161,.36053,1.044038,-.220065,1.098348,.318968,1.068837,-.19758,1.084605,.279107,1.092548,-.174779,1.071217,.241111,1.116157,-.151596,1.060486,.204913,1.137486,-.127478,1.052751,.17141,1.154694,-.101915,1.044807,.137999,1.166867,-.076246,1.034824,.103807,1.173715,-.050661,1.022501,.068802,1.178236,-.025355,1.010324,.034155,1.183545,205e-6,1.000059,-.00011,201e-6,-.000294,3.16108,1.466721,505e-6,-.00074,3.155526,1.466737,.002016,-.002957,3.152852,1.466688,.004537,-.006655,3.150654,1.466667,.008066,-.011828,3.153109,1.466694,.012604,-.018479,3.152143,1.466721,.01815,-.026598,3.151025,1.466636,.024714,-.036191,3.1503,1.466562,.032301,-.047249,3.149861,1.46645,.040924,-.059766,3.149548,1.466289,.050579,-.073703,3.147516,1.466055,.061306,-.089022,3.14568,1.465738,.073135,-.105563,3.142428,1.465301,.086075,-.123544,3.139113,1.464715,.100153,-.142853,3.135064,1.463956,.115411,-.163183,3.129509,1.462962,.131876,-.18476,3.122959,1.46167,.14957,-.207172,3.114153,1.460045,.168523,-.230578,3.103626,1.457945,.188784,-.254658,3.090818,1.455279,.210264,-.279114,3.073352,1.451998,.23303,-.30393,3.052592,1.44778,.256959,-.328517,3.025187,1.442568,.281901,-.352755,2.990341,1.436026,.307728,-.375894,2.94682,1.427979,.334197,-.397924,2.892845,1.418249,.360966,-.417914,2.827937,1.40637,.388478,-.436526,2.758006,1.392134,.415567,-.452366,2.674696,1.375244,.443518,-.466917,2.595136,1.35566,.470631,-.478417,2.504173,1.333123,.497419,-.487825,2.413227,1.308181,.523961,-.495064,2.321239,1.280227,.549708,-.499844,2.228911,1.249894,.575296,-.502844,2.138834,1.21713,.600168,-.503368,2.04903,1.181412,.625874,-.501622,1.962267,1.142648,.652164,-.496936,1.8769,1.101268,.678029,-.490319,1.796344,1.057782,.703248,-.481575,1.718925,1.012884,.72852,-.471822,1.648358,.966487,.752577,-.460134,1.581989,.91988,.776163,-.447164,1.520109,.873087,.800016,-.433601,1.465081,.825803,.822176,-.418388,1.412564,.778249,.844873,-.402704,1.366184,.730849,.865955,-.385633,1.321865,.684037,.888173,-.368255,1.283464,.637192,.910994,-.349332,1.249215,.590131,.93427,-.329612,1.218366,.543213,.956653,-.309228,1.189808,.497752,.978476,-.28831,1.163674,.452837,1.000755,-.267243,1.141389,.409481,1.023827,-.246015,1.122012,.367354,1.045572,-.223777,1.103303,.325171,1.070445,-.200837,1.08801,.284442,1.094268,-.177211,1.07365,.245138,1.118639,-.153531,1.063051,.208289,1.139786,-.129074,1.053921,.173607,1.157848,-.104051,1.045968,.140467,1.170697,-.077694,1.035782,.105594,1.177874,-.051393,1.023483,.069898,1.182242,-.025392,1.01062,.034532,1.187612,-.000032,1.000062,-.000035,202e-6,-.000313,3.450327,1.548291,504e-6,-.00078,3.396162,1.548289,.002015,-.00312,3.395621,1.54826,.004533,-.007019,3.394299,1.548217,.008066,-.012486,3.398803,1.548274,.0126,-.0195,3.396363,1.548245,.018151,-.028076,3.396805,1.548192,.024722,-.038209,3.396384,1.548109,.032306,-.049868,3.395158,1.547979,.040936,-.063077,3.394303,1.547785,.05061,-.077791,3.392979,1.547513,.06136,-.093869,3.38991,1.547134,.073227,-.11138,3.386669,1.546619,.086217,-.130371,3.382974,1.545938,.100364,-.150684,3.378046,1.545039,.115733,-.172116,3.371719,1.54388,.132309,-.194809,3.363764,1.54238,.150174,-.218431,3.353699,1.540462,.16934,-.242954,3.341397,1.538002,.189788,-.268175,3.324957,1.534894,.211581,-.293776,3.304776,1.530954,.234561,-.319619,3.278192,1.526033,.258776,-.345089,3.24491,1.519926,.284059,-.370176,3.203338,1.512296,.310312,-.394171,3.152477,1.502956,.336748,-.416137,3.083616,1.491463,.364029,-.436752,3.010481,1.477493,.391575,-.455102,2.925454,1.460933,.419409,-.471378,2.83438,1.441554,.446811,-.484714,2.733329,1.418861,.474489,-.496021,2.63363,1.393405,.501751,-.504991,2.530935,1.364633,.528488,-.511392,2.426653,1.333234,.554428,-.515395,2.323633,1.299138,.580434,-.517761,2.224964,1.262462,.605474,-.517598,2.127228,1.223784,.629888,-.514946,2.030545,1.182321,.655579,-.510177,1.93907,1.138515,.68194,-.503097,1.852355,1.091502,.707228,-.493537,1.768084,1.043464,.731894,-.482372,1.69084,.994242,.756741,-.470312,1.619277,.944749,.78016,-.456412,1.55343,.894816,.803384,-.441492,1.493357,.845202,.826347,-.425944,1.43783,.795954,.849145,-.409532,1.388578,.746915,.870617,-.391988,1.341527,.698025,.892943,-.374229,1.302188,.649579,.913828,-.355148,1.262877,.601833,.93683,-.335238,1.230136,.554521,.958687,-.313939,1.199596,.507208,.982008,-.292741,1.173619,.461357,1.003691,-.27094,1.149015,.416031,1.027223,-.249102,1.128689,.372457,1.050048,-.226899,1.109444,.330281,1.074105,-.204329,1.092943,.288987,1.098971,-.18056,1.078591,.249075,1.123324,-.155987,1.066885,.211519,1.145445,-.130929,1.057617,.176506,1.162856,-.105269,1.048453,.142345,1.17536,-.079267,1.037439,.107452,1.182514,-.052547,1.024393,.071252,1.186575,-.025744,1.011093,.035019,1.19205,318e-6,1.000013,-.000152,204e-6,-.000334,3.909175,1.636412,504e-6,-.000825,3.678647,1.63641,.002015,-.003298,3.678315,1.636387,.004533,-.007417,3.674126,1.63631,.008062,-.01319,3.676771,1.636376,.012603,-.020613,3.678135,1.636369,.018153,-.029675,3.677315,1.636299,.024723,-.040378,3.676872,1.636196,.032318,-.052708,3.67575,1.636038,.040955,-.06666,3.674803,1.63581,.050645,-.082203,3.672735,1.635494,.061429,-.09915,3.669047,1.635048,.073333,-.117679,3.665401,1.634437,.086388,-.137725,3.661315,1.633634,.10062,-.159081,3.654992,1.632571,.116087,-.181721,3.647341,1.631202,.13282,-.205611,3.637877,1.629432,.150867,-.230542,3.626333,1.627161,.170234,-.256239,3.610671,1.624266,.190981,-.282751,3.591685,1.620589,.213013,-.30943,3.565864,1.615999,.236387,-.336427,3.534826,1.610216,.260943,-.362931,3.493984,1.603047,.286497,-.388644,3.442075,1.59392,.312769,-.412912,3.375973,1.582961,.339832,-.435635,3.299355,1.569343,.367214,-.456181,3.208994,1.553137,.394935,-.474325,3.10891,1.533791,.422935,-.490318,3.001767,1.511093,.451166,-.503827,2.891735,1.485145,.478695,-.514185,2.77343,1.455617,.506313,-.522502,2.657639,1.422946,.533427,-.528119,2.541132,1.387843,.559942,-.53143,2.42695,1.349542,.58515,-.531978,2.312437,1.309303,.6105,-.531054,2.205966,1.26628,.63538,-.528058,2.101993,1.221709,.659852,-.522751,2.00295,1.175062,.685151,-.515026,1.908647,1.125078,.71092,-.50502,1.819389,1.074296,.736066,-.493268,1.735806,1.02242,.760503,-.480032,1.658607,.97023,.785091,-.465986,1.589424,.917077,.807523,-.449721,1.522533,.864888,.830974,-.433461,1.465416,.813006,.852659,-.415808,1.409076,.761689,.874841,-.397855,1.360758,.711258,.896322,-.379041,1.316829,.661721,.918134,-.360048,1.278574,.612263,.939356,-.340108,1.2422,.564369,.961025,-.318877,1.210305,.516506,.984371,-.29713,1.183689,.469342,1.006905,-.274661,1.157466,.42308,1.029941,-.252234,1.135066,.378315,1.052751,-.229268,1.114518,.335169,1.077981,-.206662,1.09776,.293336,1.102542,-.183331,1.082051,.252984,1.126539,-.158797,1.068935,.21499,1.149023,-.133014,1.058996,.178903,1.16755,-.106641,1.050245,.144559,1.179994,-.079952,1.038648,.108667,1.187104,-.053316,1.025284,.072209,1.191406,-.026826,1.011453,.035833,1.196748,226e-6,1.000034,-.000061,2e-4,-.000346,3.996419,1.732034,504e-6,-.000873,4.000138,1.732038,.002016,-.003492,4.002078,1.732012,.004538,-.007859,4.005626,1.731962,.008064,-.013963,3.9985,1.731999,.01259,-.021794,3.995024,1.732004,.018154,-.031406,3.999233,1.731901,.024727,-.042733,3.998497,1.731774,.032327,-.055781,3.997064,1.731599,.040974,-.070543,3.995856,1.731325,.050685,-.086984,3.993839,1.730945,.061506,-.104897,3.989519,1.730417,.073458,-.124506,3.985313,1.729697,.086573,-.145706,3.979984,1.728747,.100909,-.168211,3.972562,1.727491,.116509,-.192198,3.963836,1.725854,.133404,-.21728,3.951919,1.723749,.151659,-.243556,3.937734,1.721093,.171288,-.270611,3.919021,1.71764,.192301,-.298389,3.895171,1.713272,.214683,-.326338,3.864171,1.707825,.238392,-.354394,3.824682,1.700956,.263151,-.381636,3.771168,1.692392,.289155,-.408266,3.709961,1.681769,.315832,-.43307,3.630302,1.668539,.342942,-.455741,3.534719,1.652513,.370892,-.476655,3.431531,1.633428,.398985,-.494692,3.314933,1.610694,.427206,-.510313,3.189741,1.58424,.455266,-.52276,3.058325,1.554195,.483472,-.532872,2.927213,1.520805,.511192,-.540229,2.794112,1.484026,.538706,-.545105,2.663786,1.443796,.565422,-.547251,2.534841,1.401429,.59127,-.547115,2.408437,1.356231,.616787,-.545113,2.291284,1.308887,.64138,-.540853,2.177478,1.260447,.665344,-.534561,2.069265,1.210634,.690147,-.527115,1.969776,1.158569,.714578,-.516171,1.870847,1.104593,.740349,-.504048,1.782674,1.049578,.764563,-.489683,1.698614,.994458,.78871,-.474541,1.624447,.938612,.812154,-.458099,1.554453,.883694,.834566,-.440345,1.490045,.83022,.857486,-.422491,1.432889,.776499,.879224,-.403588,1.380669,.724257,.899971,-.383819,1.333124,.673311,.922111,-.36425,1.292648,.622999,.942842,-.343873,1.253933,.573304,.964398,-.323206,1.221027,.52509,.98686,-.301711,1.191806,.47758,1.00976,-.278695,1.165162,.430624,1.033347,-.255591,1.141715,.384482,1.055937,-.232039,1.119739,.340532,1.081178,-.208664,1.102117,.297311,1.105696,-.184935,1.085062,.256227,1.129575,-.160673,1.070918,.217709,1.152135,-.135414,1.060642,.181471,1.171221,-.108462,1.051041,.14638,1.184412,-.081008,1.039694,.11012,1.19182,-.05371,1.025903,.073052,1.196195,-.026625,1.011816,.036129,1.201677,-.000175,.999945,98e-6,196e-6,-.00036,4.100786,1.83629,504e-6,-.000925,4.370184,1.836295,.002018,-.003706,4.385247,1.836243,.004534,-.008324,4.370146,1.83621,.008064,-.014805,4.372335,1.836256,.012597,-.023116,4.359918,1.836259,.018158,-.033299,4.371503,1.836123,.024732,-.045301,4.370533,1.835988,.032344,-.059143,4.369649,1.835768,.040999,-.074779,4.367861,1.835454,.050739,-.092178,4.364322,1.834974,.061594,-.111161,4.359221,1.834355,.073604,-.131958,4.35462,1.833499,.086796,-.154393,4.347915,1.832355,.101246,-.178201,4.339152,1.83088,.11699,-.203531,4.328327,1.828936,.134086,-.230043,4.31424,1.826442,.152589,-.257718,4.296795,1.82323,.172514,-.286176,4.273985,1.819124,.193853,-.315295,4.244136,1.813909,.216582,-.344507,4.205152,1.80741,.240668,-.373646,4.154781,1.799084,.265904,-.401897,4.091563,1.788905,.292226,-.429136,4.013199,1.776206,.319045,-.454057,3.912886,1.7605,.346721,-.477219,3.800927,1.741586,.374849,-.497883,3.675652,1.718818,.403078,-.515504,3.536892,1.692138,.431597,-.530621,3.391351,1.661434,.460246,-.542852,3.242817,1.626989,.488899,-.552238,3.093685,1.588582,.517215,-.559045,2.944163,1.5463,.54448,-.562351,2.794189,1.501299,.571542,-.563394,2.650239,1.453758,.598167,-.56259,2.513757,1.403321,.624104,-.559636,2.384203,1.352431,.648789,-.554148,2.259149,1.298758,.672715,-.546779,2.14025,1.244943,.696258,-.537896,2.030401,1.189971,.720048,-.527401,1.928311,1.134526,.744078,-.514142,1.830175,1.076504,.768895,-.499352,1.740731,1.018032,.792551,-.482982,1.658911,.96025,.817007,-.466406,1.586579,.903029,.839035,-.447616,1.516969,.846484,.862742,-.429261,1.458675,.79142,.884307,-.409479,1.402989,.737125,.905641,-.389303,1.352817,.683912,.926185,-.368344,1.306684,.63269,.947229,-.347366,1.267395,.581739,.969502,-.32672,1.233192,.532305,.990758,-.304973,1.201017,.484166,1.012749,-.282816,1.173018,.437385,1.035533,-.259084,1.147184,.390755,1.059915,-.235239,1.125388,.345399,1.084348,-.211044,1.105859,.301356,1.109544,-.186698,1.088888,.259708,1.13377,-.1619,1.073848,.220324,1.157553,-.136604,1.06319,.183857,1.176461,-.110428,1.05311,.148521,1.190137,-.082898,1.041484,.112124,1.197215,-.054554,1.026844,.07416,1.201654,-.026744,1.012264,.036527,1.207085,399e-6,1.000034,-.000201,191e-6,-.000373,4.194318,1.950551,504e-6,-.000983,4.80435,1.950552,.002015,-.003931,4.80282,1.950518,.004536,-.008847,4.805254,1.950472,.008064,-.015725,4.804152,1.950517,.012693,-.02474,4.826828,1.949914,.018159,-.035365,4.803103,1.950349,.02474,-.048122,4.80322,1.950183,.032361,-.062822,4.801522,1.949917,.041034,-.07943,4.799593,1.949538,.050815,-.097841,4.797179,1.948972,.061702,-.118026,4.789557,1.948246,.073766,-.140112,4.783293,1.947204,.087066,-.163819,4.775698,1.945855,.101637,-.189122,4.764612,1.944052,.117558,-.215884,4.751486,1.94171,.134884,-.243968,4.734791,1.938727,.153637,-.27317,4.712078,1.934891,.17389,-.303146,4.683575,1.929976,.195643,-.333704,4.646766,1.92374,.218767,-.36417,4.596814,1.915888,.243337,-.39453,4.535509,1.90597,.26886,-.423512,4.452006,1.893623,.295173,-.450609,4.345682,1.878286,.322784,-.476488,4.231632,1.859391,.350616,-.49942,4.093553,1.836912,.379127,-.519862,3.944127,1.809625,.40786,-.537373,3.782223,1.778529,.436717,-.551802,3.615563,1.742684,.465345,-.562951,3.440672,1.702289,.494158,-.571334,3.26807,1.658666,.522896,-.577227,3.100668,1.611027,.551379,-.580514,2.937615,1.559742,.578992,-.58061,2.778703,1.507257,.605095,-.577729,2.621626,1.451941,.630653,-.573,2.476506,1.395218,.656175,-.566944,2.341592,1.337862,.681036,-.558988,2.216478,1.279275,.704713,-.549211,2.096972,1.220526,.726894,-.53719,1.983311,1.161709,.749865,-.524167,1.8811,1.102095,.773553,-.508991,1.785637,1.042039,.797102,-.491658,1.697234,.981588,.821187,-.474093,1.62025,.921265,.843848,-.45498,1.547071,.862757,.866662,-.435421,1.482008,.8047,.888696,-.41499,1.424116,.749432,.910945,-.394472,1.372658,.694767,.9323,-.373239,1.325157,.641106,.95285,-.351347,1.282217,.589689,.974718,-.329809,1.244897,.539322,.996445,-.307902,1.212306,.490083,1.01758,-.285392,1.181402,.442702,1.040342,-.262782,1.155996,.395911,1.064399,-.238995,1.131708,.350206,1.089464,-.214297,1.111215,.305175,1.115565,-.189293,1.093094,.262686,1.14064,-.163843,1.077994,.223078,1.163824,-.137789,1.066014,.185651,1.182577,-.111087,1.055615,.150045,1.195775,-.083945,1.04294,.113457,1.203175,-.056145,1.028015,.075453,1.207282,-.027685,1.012552,.037217,1.213019,362e-6,.999938,-.000293,187e-6,-.000388,4.316009,2.0765,504e-6,-.001048,5.317799,2.076499,.002014,-.004182,5.306557,2.076523,.004539,-.009425,5.317505,2.076453,.008063,-.016737,5.312143,2.07641,.012614,-.026171,5.316434,2.076389,.018158,-.037641,5.307836,2.076265,.024767,-.051266,5.315297,2.076044,.032372,-.066859,5.307433,2.075743,.041066,-.084538,5.304809,2.07527,.050871,-.104062,5.299277,2.074622,.061821,-.125613,5.293419,2.073708,.07397,-.149085,5.286629,2.072457,.087375,-.174214,5.275937,2.070804,.102105,-.201136,5.263267,2.068647,.118223,-.229505,5.246309,2.065846,.135814,-.259217,5.225496,2.062189,.154887,-.28999,5.19658,2.057566,.17551,-.321618,5.160716,2.051593,.197636,-.353632,5.112202,2.043949,.221168,-.385303,5.046981,2.034445,.246099,-.416511,4.965386,2.022368,.27207,-.446377,4.860735,2.00716,.29909,-.474279,4.73514,1.988598,.326702,-.499809,4.584962,1.965865,.355017,-.52279,4.420447,1.938705,.383856,-.542755,4.241942,1.90637,.413059,-.559903,4.053302,1.869455,.441882,-.573174,3.852753,1.827946,.471516,-.584151,3.660377,1.781652,.500872,-.591843,3.466027,1.730885,.529677,-.596253,3.272812,1.676821,.557683,-.597604,3.084286,1.620064,.585652,-.596591,2.906111,1.560909,.612819,-.593138,2.738258,1.500318,.639848,-.588245,2.584172,1.438127,.664758,-.58014,2.430697,1.375746,.688754,-.570189,2.290701,1.312727,.712848,-.55942,2.162679,1.250063,.735111,-.54657,2.042186,1.18784,.757521,-.532944,1.933435,1.125513,.780056,-.517981,1.833524,1.063827,.802513,-.500724,1.739053,1.002154,.825462,-.481625,1.652381,.939811,.848973,-.462327,1.57756,.878279,.871521,-.441928,1.509291,.8192,.892325,-.420297,1.443799,.761607,.914935,-.399072,1.389647,.705351,.936429,-.377232,1.339903,.650213,.957614,-.355091,1.295467,.597773,.979578,-.332767,1.256692,.545914,1.00086,-.310147,1.221666,.495661,1.02255,-.287395,1.190775,.448026,1.045005,-.264582,1.162641,.40049,1.068703,-.241464,1.138358,.354088,1.093098,-.217504,1.115973,.309812,1.11923,-.19214,1.096284,.266297,1.144608,-.165975,1.080042,.225831,1.168599,-.139174,1.067749,.187761,1.18797,-.11191,1.056635,.151322,1.20124,-.083978,1.043566,.114337,1.208895,-.056089,1.028366,.076083,1.213344,-.028369,1.013074,.037735,1.21922,-.000534,.999968,76e-6,182e-6,-.000404,4.433519,2.216201,504e-6,-.001117,5.911693,2.216198,.002017,-.004469,5.919142,2.21619,.004536,-.010051,5.913172,2.21613,.008065,-.017867,5.911791,2.216145,.012467,-.027603,5.785357,2.216447,.018156,-.040159,5.901121,2.215958,.024758,-.05467,5.908781,2.215654,.032395,-.071352,5.906098,2.215283,.041108,-.090201,5.902558,2.214715,.050955,-.111004,5.895707,2.213905,.061968,-.134002,5.888736,2.212807,.074206,-.159038,5.880633,2.211303,.087742,-.185801,5.867001,2.209297,.102652,-.214368,5.851446,2.206657,.119006,-.244573,5.830722,2.203232,.136883,-.276067,5.802688,2.198778,.156335,-.30866,5.767185,2.193091,.177396,-.34194,5.719726,2.185858,.20007,-.375591,5.658792,2.176584,.224067,-.408564,5.573508,2.164759,.24942,-.440668,5.465696,2.149777,.275879,-.471138,5.332207,2.131225,.303307,-.499204,5.173339,2.108794,.331189,-.524547,4.985102,2.080585,.359932,-.547256,4.785788,2.047792,.389063,-.566479,4.569344,2.009518,.418725,-.583031,4.349557,1.965601,.448181,-.595809,4.121278,1.916911,.477703,-.605102,3.892291,1.86353,.507999,-.612462,3.676557,1.806286,.536889,-.615451,3.456241,1.745841,.565778,-.616029,3.249464,1.681137,.593863,-.613644,3.050273,1.615238,.62077,-.608268,2.859599,1.548003,.647171,-.601116,2.683287,1.480447,.673458,-.59284,2.524036,1.412084,.698064,-.581973,2.371046,1.34513,.721011,-.568963,2.229104,1.27844,.744293,-.555642,2.103213,1.212448,.766314,-.540934,1.98537,1.146287,.788164,-.525271,1.878842,1.0826,.809019,-.507986,1.779821,1.019978,.830947,-.489717,1.69163,.956931,.853732,-.469345,1.607513,.894207,.874904,-.447618,1.531176,.833436,.897289,-.426124,1.467302,.773611,.919226,-.404025,1.408321,.716016,.94086,-.381454,1.356209,.659515,.962764,-.358901,1.310082,.604629,.984322,-.335983,1.268485,.552335,1.005343,-.312533,1.230662,.501591,1.028153,-.289452,1.199168,.452032,1.049283,-.265754,1.168575,.404347,1.073687,-.242571,1.143533,.357445,1.097546,-.218681,1.119859,.312534,1.12334,-.194465,1.099634,.269437,1.148166,-.168797,1.081968,.228586,1.172518,-.141552,1.068789,.189866,1.19293,-.113325,1.057548,.152772,1.206816,-.0848,1.044145,.11539,1.215045,-.056019,1.028938,.076493,1.220048,-.027733,1.013338,.037767,1.225852,5e-5,.999927,-.00016,178e-6,-.000422,4.587902,2.372253,504e-6,-.001195,6.624675,2.372248,.002016,-.004782,6.626884,2.372187,.004531,-.010746,6.607379,2.372318,.008081,-.019161,6.640102,2.372084,.012637,-.029945,6.653708,2.372128,.018167,-.042999,6.623837,2.371902,.024769,-.058516,6.624484,2.371595,.032421,-.07637,6.620877,2.37112,.041164,-.096474,6.615235,2.370428,.051057,-.118786,6.607844,2.36944,.062136,-.14339,6.599216,2.368075,.07449,-.170034,6.588018,2.366218,.088179,-.198717,6.572526,2.363747,.103307,-.229147,6.551868,2.360517,.119964,-.261253,6.526089,2.356304,.138173,-.294703,6.489593,2.350797,.158072,-.329261,6.443573,2.343783,.179592,-.364298,6.379764,2.334673,.202709,-.399375,6.295845,2.323125,.227335,-.433616,6.184929,2.308547,.25323,-.466794,6.045905,2.28998,.2801,-.497509,5.871803,2.266964,.308146,-.525956,5.672422,2.239074,.336544,-.551101,5.443256,2.204809,.365223,-.572471,5.188034,2.164827,.395484,-.592088,4.943783,2.119489,.424416,-.606026,4.6664,2.067262,.455641,-.619671,4.418961,2.009937,.485298,-.627583,4.152737,1.9489,.514774,-.632072,3.893344,1.882692,.544172,-.634033,3.645332,1.814073,.573283,-.633239,3.414651,1.742717,.602155,-.630008,3.195712,1.669703,.63052,-.62455,2.994536,1.596021,.657121,-.615749,2.799373,1.522572,.682071,-.604738,2.616102,1.448978,.707605,-.593301,2.456112,1.37625,.731492,-.579628,2.303517,1.305297,.754139,-.564473,2.16534,1.235548,.776505,-.548787,2.041646,1.167051,.796833,-.531415,1.923334,1.100534,.817565,-.513778,1.818176,1.035144,.837981,-.495167,1.72383,.971583,.858513,-.47569,1.638448,.908841,.879892,-.454099,1.55942,.846701,.902258,-.432038,1.491471,.785332,.924114,-.409316,1.428878,.726409,.94423,-.385618,1.370785,.668588,.967001,-.362604,1.323529,.612943,.988579,-.339117,1.279679,.559038,1.01021,-.315355,1.240104,.506867,1.032084,-.291408,1.205261,.456934,1.054671,-.267387,1.175197,.407792,1.078314,-.243346,1.148153,.360992,1.102443,-.219205,1.123799,.315577,1.128524,-.194996,1.102624,.271742,1.153989,-.169897,1.085134,.230702,1.17942,-.14396,1.071699,.192146,1.200098,-.116173,1.060179,.155164,1.214837,-.086655,1.04629,.117071,1.222749,-.056956,1.03004,.07745,1.227273,-.027883,1.01365,.038092,1.233293,831e-6,1.000043,-.000462,173e-6,-.000442,4.741539,2.547922,504e-6,-.001284,7.491127,2.547919,.002014,-.005132,7.484889,2.547844,.004523,-.011521,7.439875,2.547587,.008059,-.020524,7.483694,2.547725,.012586,-.032029,7.470912,2.547685,.018081,-.045948,7.422534,2.547686,.024783,-.062844,7.487581,2.547107,.032451,-.082011,7.483603,2.546522,.041233,-.10354,7.475124,2.545684,.051181,-.127537,7.467521,2.544438,.062347,-.153921,7.456266,2.542744,.074829,-.182427,7.440422,2.540459,.088703,-.213134,7.420694,2.53738,.10408,-.24575,7.394875,2.533347,.12105,-.279941,7.358515,2.528069,.139697,-.315591,7.313001,2.521237,.160036,-.35198,7.246342,2.512378,.182147,-.388993,7.163688,2.500993,.205799,-.42557,7.048339,2.48645,.231091,-.461093,6.902586,2.468174,.257405,-.494668,6.712721,2.444774,.284956,-.525889,6.491261,2.415538,.31318,-.553693,6.232833,2.38061,.342327,-.578724,5.953834,2.338525,.371689,-.599706,5.649698,2.290256,.401919,-.617615,5.3479,2.235157,.432204,-.631632,5.036417,2.173932,.463151,-.643082,4.735976,2.107298,.493388,-.64997,4.432044,2.036121,.524128,-.654188,4.145472,1.961595,.55393,-.654671,3.866877,1.883602,.583856,-.653051,3.607848,1.804521,.611762,-.646994,3.356237,1.724047,.639117,-.63886,3.122531,1.643016,.666279,-.629093,2.913178,1.563932,.692936,-.617862,2.722675,1.484614,.716498,-.603279,2.536926,1.406734,.742273,-.589878,2.381054,1.331469,.764031,-.572744,2.228312,1.256796,.786601,-.555933,2.095451,1.18529,.807776,-.537992,1.972866,1.11594,.8284,-.519596,1.863394,1.048371,.847412,-.499847,1.76063,.982934,.86685,-.47992,1.670998,.919972,.88634,-.459434,1.587962,.8581,.906933,-.437767,1.515505,.796714,.92749,-.414068,1.448243,.736162,.950217,-.39091,1.390505,.677613,.971545,-.366964,1.337865,.620477,.992901,-.342603,1.291104,.565807,1.01546,-.318596,1.251138,.513086,1.037859,-.294242,1.214291,.461573,1.060535,-.269601,1.182517,.411838,1.086885,-.245608,1.1553,.363221,1.111237,-.220589,1.129715,.317174,1.138718,-.196008,1.108103,.273213,1.164223,-.170408,1.08964,.231968,1.187256,-.144205,1.074145,.192987,1.207851,-.116945,1.061615,.156118,1.222217,-.088852,1.047599,.118674,1.230315,-.059381,1.030869,.078993,1.235052,-.029145,1.014126,.038924,1.241359,479e-6,1.000114,-.000211,169e-6,-.000465,4.953966,2.747437,504e-6,-.001384,8.54453,2.74743,.002015,-.005537,8.545147,2.747339,.004542,-.012477,8.557734,2.747125,.008064,-.022143,8.530193,2.747341,.012543,-.034411,8.465151,2.747411,.018178,-.049792,8.543328,2.746874,.02481,-.067784,8.547247,2.746396,.032489,-.088416,8.537436,2.74573,.041313,-.11158,8.526655,2.744596,.051332,-.137462,8.517438,2.743082,.062603,-.16586,8.502803,2.74095,.07524,-.196548,8.481507,2.738057,.089341,-.22944,8.454287,2.734174,.105021,-.264395,8.420289,2.729086,.122399,-.30102,8.373503,2.72242,.141526,-.338997,8.309059,2.713686,.162451,-.377589,8.221539,2.702492,.185098,-.416349,8.100116,2.687893,.209406,-.454284,7.941704,2.669386,.235098,-.49045,7.733318,2.64559,.2621,-.524592,7.48612,2.615709,.290103,-.555558,7.193498,2.579231,.319135,-.583516,6.874796,2.534957,.348286,-.606714,6.516118,2.483017,.37884,-.62785,6.163912,2.424214,.409608,-.644715,5.801404,2.357563,.440553,-.657657,5.435955,2.285835,.470599,-.665621,5.063481,2.20794,.503172,-.673767,4.743532,2.12644,.533884,-.676009,4.413409,2.040694,.563808,-.674536,4.092169,1.953979,.591849,-.668913,3.787057,1.865897,.621474,-.663159,3.520578,1.777762,.6505,-.655018,3.275065,1.689902,.678011,-.643949,3.043141,1.603528,.70349,-.63003,2.827104,1.519484,.72825,-.61491,2.63262,1.436677,.752165,-.598649,2.45557,1.355753,.775894,-.581771,2.295932,1.278884,.79765,-.563193,2.152291,1.202767,.818505,-.54375,2.022099,1.130338,.838596,-.524017,1.903562,1.060263,.858396,-.504064,1.797204,.993077,.877088,-.483418,1.701208,.928606,.896606,-.462786,1.617736,.866039,.914342,-.440943,1.539227,.804293,.93355,-.419129,1.470383,.745206,.955237,-.3961,1.4091,.685832,.9767,-.371743,1.35493,.627953,.997681,-.346882,1.305249,.572127,1.020784,-.322391,1.262603,.517941,1.04384,-.297564,1.225115,.466188,1.067224,-.272639,1.190817,.415499,1.092358,-.247664,1.161265,.366782,1.117573,-.22226,1.133935,.319377,1.14573,-.196933,1.11175,.275293,1.170822,-.170577,1.091981,.233306,1.194559,-.143878,1.07581,.19395,1.214819,-.116347,1.062438,.156724,1.22983,-.088233,1.048092,.118984,1.238185,-.059408,1.031325,.079385,1.243527,-.030703,1.014698,.039893,1.249724,-.00152,.999819,76e-5,164e-6,-.000489,5.157359,2.9763,505e-6,-.001502,9.891415,2.976286,.002016,-.006,9.85773,2.976197,.004543,-.013519,9.870651,2.975832,.008064,-.023985,9.85578,2.97617,.012611,-.037471,9.850209,2.975941,.018162,-.053866,9.827134,2.974968,.02482,-.07339,9.849955,2.97501,.032545,-.095758,9.842021,2.974073,.041418,-.120834,9.829989,2.9727,.051511,-.148861,9.817421,2.970736,.06292,-.179456,9.797347,2.968033,.075744,-.212674,9.771533,2.964371,.090131,-.248193,9.735924,2.959437,.106187,-.285748,9.687707,2.952881,.124035,-.325017,9.622684,2.944273,.143733,-.365463,9.531452,2.933093,.165262,-.406157,9.401732,2.918484,.188622,-.446833,9.232451,2.899529,.213693,-.486209,9.013432,2.875137,.239987,-.522925,8.725671,2.844166,.267796,-.557452,8.400028,2.805649,.296547,-.588266,8.023041,2.75872,.325838,-.614837,7.606773,2.702676,.355479,-.63676,7.16068,2.638483,.386984,-.65723,6.736765,2.566849,.418853,-.673592,6.313742,2.488091,.450302,-.684966,5.884479,2.402458,.481149,-.691591,5.455771,2.311816,.512177,-.695337,5.055698,2.21733,.543437,-.69637,4.681506,2.121285,.574309,-.694186,4.334716,2.02416,.604787,-.689158,4.008524,1.927738,.633483,-.68058,3.703505,1.830456,.660766,-.669088,3.418386,1.734934,.688471,-.656673,3.168101,1.642316,.715729,-.64282,2.941735,1.550744,.740435,-.626155,2.73057,1.463345,.764114,-.608299,2.537561,1.378151,.787028,-.589519,2.364323,1.29763,.807985,-.569257,2.20797,1.21783,.830663,-.550055,2.076646,1.142746,.850416,-.528812,1.948085,1.070757,.869609,-.507478,1.834684,1.001282,.888324,-.486131,1.734879,.934987,.907482,-.46491,1.645974,.871203,.924829,-.442742,1.56355,.80926,.942958,-.420777,1.491264,.750037,.961999,-.398842,1.428069,.691715,.981043,-.375967,1.369668,.635669,1.002371,-.351469,1.318588,.578689,1.025343,-.326601,1.273628,.524424,1.048511,-.301395,1.234572,.471403,1.072242,-.275835,1.198354,.41995,1.096758,-.2502,1.166392,.370733,1.122781,-.224474,1.138991,.322864,1.150871,-.198592,1.114313,.277723,1.177319,-.171805,1.093534,.23495,1.201765,-.144291,1.077462,.195376,1.222629,-.115949,1.063288,.157315,1.237334,-.08714,1.048366,.118843,1.246153,-.058094,1.031224,.079207,1.25257,-.029194,1.014695,.039376,1.25906,-.000418,.999881,307e-6,159e-6,-.000515,5.393984,3.241865,505e-6,-.001636,11.548038,3.241848,.002016,-.006534,11.50664,3.241718,.004537,-.014706,11.51346,3.241196,.008068,-.026134,11.510533,3.241693,.012573,-.040676,11.428978,3.24103,.018212,-.058794,11.510745,3.240924,.024847,-.079926,11.497339,3.240201,.032603,-.10416,11.484607,3.238994,.041543,-.131552,11.470801,3.237182,.051738,-.162012,11.453219,3.234635,.063313,-.19526,11.427244,3.231153,.076381,-.231205,11.388534,3.226361,.091096,-.269678,11.340406,3.219943,.1076,-.31017,11.270127,3.211448,.126017,-.352435,11.178583,3.200168,.146411,-.395551,11.046559,3.185328,.168663,-.438627,10.858624,3.165972,.19273,-.48066,10.606379,3.140735,.218497,-.520987,10.288093,3.108388,.245752,-.558483,9.90748,3.067586,.273993,-.59209,9.453246,3.016931,.303495,-.622416,8.966138,2.956444,.333717,-.648303,8.443776,2.885116,.363928,-.66864,7.894122,2.805963,.39624,-.687748,7.385728,2.718338,.427161,-.699903,6.838511,2.622346,.460175,-.71121,6.356371,2.522476,.492593,-.717734,5.878312,2.417984,.524449,-.719956,5.423285,2.310941,.55601,-.719127,4.997909,2.201885,.587032,-.715077,4.600426,2.09333,.61703,-.707574,4.235885,1.986585,.644684,-.695781,3.881712,1.881279,.674483,-.685313,3.59096,1.777918,.70029,-.669619,3.303138,1.678004,.727892,-.654728,3.057771,1.581162,.751694,-.635727,2.826642,1.487769,.776271,-.617343,2.622178,1.399628,.799502,-.597683,2.441265,1.313195,.821768,-.57709,2.276954,1.232316,.84196,-.555165,2.125744,1.153914,.861582,-.532983,1.991236,1.079598,.88146,-.510933,1.874027,1.008883,.899952,-.488321,1.766812,.940802,.918954,-.466405,1.673436,.875653,.93613,-.443623,1.586986,.81313,.954799,-.421532,1.513558,.752241,.972435,-.398897,1.445787,.694711,.990147,-.376302,1.384382,.63877,1.009189,-.353623,1.331934,.583826,1.029687,-.330635,1.284478,.530476,1.052604,-.305698,1.243632,.477187,1.076524,-.279917,1.204997,.425349,1.101701,-.253951,1.17175,.375165,1.127264,-.227541,1.142519,.326869,1.156397,-.201265,1.116817,.280912,1.18302,-.173943,1.095289,.237447,1.208448,-.14586,1.078296,.196694,1.230417,-.116901,1.064416,.158409,1.248617,-.087507,1.050504,.119483,1.25731,-.057353,1.032796,.079092,1.263076,-.027785,1.015128,.038883,1.26987,.001331,.999935,-.000557,154e-6,-.000549,5.705205,3.554136,506e-6,-.001797,13.703335,3.554133,.002014,-.007156,13.614074,3.553937,.004544,-.016145,13.657344,3.553096,.00807,-.028652,13.627997,3.553894,.012584,-.044617,13.606235,3.554,.01818,-.064288,13.581339,3.549637,.024887,-.087627,13.608851,3.552006,.03269,-.114134,13.599099,3.550341,.041705,-.144154,13.579829,3.547982,.052035,-.1774,13.552845,3.544641,.06381,-.213813,13.515619,3.539941,.077171,-.252978,13.46046,3.533696,.092329,-.294852,13.393559,3.524977,.10939,-.338688,13.292376,3.513655,.128455,-.384018,13.147332,3.498484,.149661,-.42996,12.945774,3.478323,.172694,-.475024,12.658979,3.451862,.19765,-.518614,12.289564,3.417602,.224156,-.559298,11.828307,3.372913,.252008,-.59611,11.285162,3.317454,.281165,-.629292,10.684922,3.251171,.311434,-.658379,10.052939,3.172222,.342741,-.683455,9.405296,3.082825,.373543,-.701674,8.716078,2.983976,.407008,-.719664,8.108425,2.876244,.438623,-.729882,7.461252,2.763279,.471872,-.738696,6.880182,2.64559,.5047,-.743136,6.324308,2.52468,.537118,-.743676,5.808302,2.402723,.569412,-.741181,5.332306,2.281437,.598202,-.732348,4.857402,2.161401,.62964,-.724832,4.465554,2.043872,.659239,-.713435,4.093661,1.930129,.686547,-.698539,3.752593,1.817654,.715529,-.684471,3.457593,1.712567,.739456,-.664983,3.17122,1.610687,.764892,-.646322,2.929674,1.512031,.789301,-.626393,2.710719,1.419033,.809881,-.603498,2.506139,1.330115,.833385,-.582934,2.336089,1.245859,.854254,-.560419,2.17847,1.165042,.873964,-.537294,2.040087,1.086633,.893433,-.514264,1.911969,1.015028,.911756,-.490657,1.79984,.944938,.930894,-.467601,1.703188,.878743,.948078,-.444043,1.612092,.815356,.966162,-.421155,1.534444,.753883,.984166,-.398238,1.462397,.695534,1.002184,-.375278,1.400793,.638806,1.019669,-.352159,1.344172,.584549,1.039571,-.329651,1.295227,.53166,1.059989,-.306804,1.251281,.480529,1.081116,-.283345,1.211504,.430071,1.105742,-.258568,1.1764,.380277,1.13308,-.232146,1.144519,.331076,1.161888,-.205244,1.118059,.28404,1.192408,-.177932,1.097561,.239958,1.221043,-.149532,1.082021,.198751,1.244141,-.120046,1.067634,.160114,1.259465,-.089542,1.051626,.121101,1.268124,-.058593,1.033296,.079898,1.27433,-.028011,1.015382,.039038,1.28159,.00233,1.000087,-.001259,149e-6,-.000587,6.059834,3.927143,507e-6,-.001992,16.5604,3.927149,.002014,-.00791,16.406326,3.926821,.004549,-.017856,16.545532,3.927027,.008064,-.031632,16.375853,3.925487,.01245,-.048749,15.928564,3.928272,.01803,-.070371,16.072989,3.917862,.024964,-.096897,16.458925,3.924489,.032807,-.126073,16.377851,3.921896,.041917,-.159205,16.351561,3.91886,.052416,-.195762,16.307037,3.914339,.064464,-.235784,16.255514,3.907954,.078225,-.278812,16.176226,3.899254,.0939,-.324457,16.06653,3.887455,.111657,-.372174,15.913818,3.871777,.131478,-.42053,15.669197,3.850776,.153574,-.46933,15.355453,3.822348,.177505,-.516029,14.908978,3.785168,.203383,-.560585,14.352687,3.736602,.230569,-.600607,13.666022,3.675046,.259188,-.636296,12.900244,3.599811,.289272,-.668312,12.111226,3.51055,.32049,-.695986,11.292102,3.408535,.353031,-.719848,10.493485,3.295667,.385228,-.737073,9.661955,3.171998,.419219,-.752419,8.909942,3.042428,.452096,-.761179,8.155107,2.907108,.484909,-.766166,7.450609,2.769858,.518306,-.768596,6.811866,2.631935,.550067,-.765683,6.205275,2.49287,.582562,-.761197,5.663215,2.358645,.61445,-.753834,5.165358,2.227377,.644563,-.74286,4.712554,2.097547,.673658,-.729294,4.306101,1.97492,.702857,-.714839,3.943352,1.857613,.72935,-.696774,3.609432,1.743601,.754958,-.677394,3.308389,1.636607,.779575,-.657018,3.043803,1.533841,.800491,-.633342,2.793592,1.437092,.82503,-.612471,2.590307,1.344272,.847535,-.589882,2.406477,1.256436,.865979,-.56485,2.231999,1.173938,.886254,-.541357,2.083556,1.094722,.905566,-.517353,1.950928,1.021107,.924607,-.49332,1.835979,.948941,.943365,-.469366,1.731417,.88106,.960405,-.444745,1.635838,.816479,.977893,-.420493,1.552981,.754604,.996573,-.39715,1.481595,.694917,1.014,-.373483,1.41407,.638445,1.031807,-.349985,1.356031,.584035,1.051877,-.327062,1.305041,.53001,1.071701,-.304134,1.258836,.479439,1.093109,-.280962,1.217297,.429763,1.116681,-.258121,1.182063,.38105,1.143886,-.235365,1.150039,.333395,1.175163,-.211621,1.125074,.287477,1.203675,-.184061,1.102339,.243301,1.230477,-.154815,1.083927,.201826,1.253134,-.124513,1.067989,.162271,1.270092,-.093383,1.052032,.122855,1.279576,-.06177,1.033685,.081639,1.286472,-.030317,1.015583,.040411,1.294476,964e-6,1.000206,-.000454,144e-6,-.00063,6.467978,4.381146,504e-6,-.002208,20.193617,4.381151,.002017,-.008834,20.206446,4.380687,.004536,-.019864,20.183254,4.38055,.008174,-.035759,20.564249,4.381247,.012608,-.055034,20.111612,4.38239,.018198,-.079119,20.106096,4.379815,.025057,-.108067,20.215635,4.376874,.032962,-.14063,20.153549,4.374143,.042199,-.17735,20.084061,4.369558,.052928,-.218094,20.026609,4.363287,.065327,-.262407,19.940054,4.354386,.079568,-.309833,19.806814,4.342127,.095961,-.360074,19.641878,4.325533,.114516,-.411747,19.370914,4.30295,.135349,-.463726,18.9839,4.271991,.158293,-.514211,18.433926,4.230856,.183348,-.562511,17.733471,4.17625,.209959,-.60631,16.864214,4.105895,.238736,-.646958,15.935207,4.020104,.268543,-.681574,14.890014,3.916094,.299996,-.712458,13.846786,3.798239,.33193,-.73713,12.758296,3.664191,.365222,-.758156,11.73294,3.521867,.399061,-.774364,10.741743,3.369831,.43348,-.786412,9.812527,3.212079,.467002,-.792373,8.91513,3.053715,.500754,-.79541,8.094276,2.894526,.534023,-.794617,7.342067,2.735959,.566988,-.790689,6.664186,2.58116,.59996,-.784433,6.052983,2.432318,.630599,-.773378,5.486277,2.28763,.660807,-.760334,4.982516,2.150183,.690103,-.74543,4.531104,2.017266,.717315,-.727511,4.120734,1.891699,.743819,-.708376,3.759599,1.77268,.770147,-.688632,3.441912,1.66062,.79351,-.665931,3.1526,1.553166,.816535,-.643045,2.898883,1.45208,.839163,-.619917,2.674488,1.355544,.859066,-.594923,2.469262,1.267232,.879489,-.570343,2.292209,1.181702,.898525,-.544975,2.131086,1.102089,.918359,-.520585,1.994526,1.024744,.937502,-.496044,1.873079,.951712,.955573,-.47101,1.761232,.883374,.972957,-.445712,1.661604,.818008,.991248,-.421201,1.577169,.754446,1.008997,-.396444,1.499653,.694518,1.028127,-.372362,1.43203,.637259,1.04571,-.347895,1.36987,.581515,1.065977,-.324409,1.317341,.527713,1.087469,-.301181,1.270447,.476281,1.109943,-.277866,1.228398,.426403,1.13444,-.254849,1.190986,.377822,1.160986,-.231754,1.157681,.33074,1.188458,-.207973,1.128665,.286014,1.214405,-.183424,1.103711,.2436,1.239504,-.157972,1.084253,.203686,1.262961,-.130607,1.068258,.165214,1.28034,-.099652,1.051919,.126067,1.292129,-.067363,1.034016,.084791,1.299876,-.035026,1.015775,.042786,1.308328,-.002944,.999963,.001385,138e-6,-.000681,6.943771,4.946556,503e-6,-.002486,25.346689,4.946532,.002016,-.009973,25.49432,4.946311,.004539,-.02244,25.484949,4.945823,.008069,-.039836,25.420902,4.945311,.012628,-.062172,25.394403,4.945041,.018294,-.089609,25.440279,4.943295,.025079,-.121584,25.399988,4.939368,.033142,-.158595,25.356537,4.9362,.042596,-.199971,25.295067,4.929842,.053628,-.245624,25.196465,4.920586,.066496,-.29524,25.055311,4.9077,.081434,-.348006,24.84617,4.889647,.09864,-.403167,24.527803,4.86468,.118231,-.459106,24.051735,4.830574,.140139,-.513907,23.352467,4.78353,.164198,-.565953,22.418245,4.72053,.190502,-.614858,21.324049,4.638075,.21853,-.658304,20.038671,4.535464,.248094,-.696133,18.639786,4.411646,.279435,-.729388,17.234526,4.268872,.312002,-.757534,15.830426,4.109603,.346173,-.781866,14.495901,3.938782,.379435,-.797579,13.136444,3.756138,.414945,-.812334,11.946491,3.571258,.449991,-.821119,10.811908,3.384217,.484636,-.825066,9.763482,3.198076,.518675,-.824728,8.796811,3.015808,.552559,-.82171,7.932528,2.836886,.587272,-.817478,7.185156,2.664995,.61696,-.804441,6.445302,2.502223,.648054,-.792063,5.818812,2.345851,.678575,-.777793,5.264731,2.19715,.707287,-.760476,4.766033,2.056042,.735851,-.742541,4.335871,1.922805,.760594,-.720503,3.928021,1.798585,.784534,-.697719,3.579153,1.680605,.811029,-.677036,3.285307,1.568942,.831809,-.651479,3.001423,1.465496,.854364,-.627376,2.760672,1.367849,.872639,-.600496,2.540697,1.275644,.894296,-.576297,2.355273,1.188638,.913123,-.550377,2.188563,1.105652,.932025,-.52464,2.040739,1.028614,.949876,-.498402,1.910315,.954421,.968933,-.47322,1.79575,.884061,.985366,-.447086,1.690336,.817765,1.00494,-.422394,1.599626,.753295,1.022217,-.396726,1.519055,.69338,1.04149,-.371854,1.448745,.635747,1.05992,-.346769,1.384292,.579508,1.080408,-.322343,1.328798,.525045,1.101632,-.297979,1.279898,.473773,1.124812,-.274059,1.234005,.422949,1.148503,-.249954,1.195373,.374609,1.174554,-.225988,1.160362,.32735,1.202931,-.201932,1.131307,.283494,1.229335,-.176886,1.105885,.241092,1.254254,-.151225,1.085802,.201514,1.275743,-.124282,1.068524,.162866,1.292929,-.097122,1.051493,.124991,1.305805,-.068939,1.03389,.085521,1.314991,-.040082,1.015927,.045247,1.324033,-.009923,.999893,.004738,131e-6,-.000745,7.562414,5.671075,473e-6,-.002681,27.216688,5.670949,.002021,-.011462,32.962402,5.670177,.00454,-.025728,33.183949,5.670197,.008087,-.045746,33.185688,5.667313,.012673,-.071427,33.170441,5.668396,.018358,-.102673,33.145138,5.665252,.025299,-.13978,33.303326,5.653404,.033469,-.181718,33.107243,5.652829,.043139,-.228698,32.859524,5.645676,.054622,-.280648,32.694893,5.631547,.068115,-.336524,32.422569,5.611561,.083957,-.395671,32.035511,5.583449,.102259,-.456164,31.415047,5.543651,.123021,-.515765,30.47044,5.488278,.146127,-.572309,29.186451,5.413118,.171749,-.62571,27.653852,5.312369,.199549,-.673853,25.902435,5.185774,.229188,-.715905,23.978609,5.030582,.260421,-.751533,21.999035,4.853484,.293421,-.782309,20.087366,4.656137,.327077,-.806332,18.186535,4.443975,.361892,-.825818,16.418409,4.223844,.397146,-.840019,14.774344,3.998959,.434169,-.852434,13.321097,3.775443,.469288,-.856632,11.929448,3.552818,.504319,-.85713,10.675201,3.338825,.540067,-.855903,9.5919,3.130547,.575404,-.851565,8.607655,2.93293,.606782,-.839818,7.69056,2.743876,.63866,-.827508,6.900781,2.565115,.670577,-.814154,6.216821,2.395215,.696718,-.793162,5.551886,2.238233,.72599,-.775291,5.015406,2.090264,.75414,-.755758,4.546843,1.950834,.775992,-.729824,4.094254,1.820582,.80299,-.708909,3.732984,1.699191,.828291,-.686483,3.413194,1.583805,.847406,-.659162,3.103861,1.478093,.864951,-.631051,2.832976,1.378496,.887154,-.60659,2.616645,1.282127,.906337,-.580124,2.413988,1.194643,.927184,-.554835,2.24438,1.110354,.94381,-.527583,2.081964,1.031996,.96363,-.502243,1.948979,.956718,.979691,-.475006,1.822701,.886957,.99769,-.448815,1.715714,.819006,1.01646,-.423044,1.621868,.754892,1.035485,-.397637,1.539537,.693707,1.053165,-.371775,1.462285,.634867,1.072394,-.346372,1.396193,.578574,1.093397,-.321291,1.338344,.524341,1.115194,-.296102,1.287594,.472059,1.137943,-.271023,1.240495,.421674,1.164163,-.246367,1.201224,.371963,1.191457,-.221414,1.164472,.32504,1.220253,-.196228,1.134325,.280343,1.245456,-.169991,1.108214,.238098,1.270647,-.143314,1.087277,.197886,1.292124,-.115881,1.069397,.15956,1.309091,-.087816,1.051426,.120547,1.32113,-.059301,1.032904,.080834,1.332484,-.030912,1.015767,.040933,1.342834,-.002172,.999591,.001185,125e-6,-.00083,8.392562,6.634228,443e-6,-.002936,29.687805,6.634032,.002016,-.013374,45.025234,6.633008,.00454,-.030089,45.020294,6.633056,.008092,-.053499,45.066029,6.626466,.01271,-.08361,44.810101,6.63033,.018485,-.12026,45.216747,6.614516,.025134,-.161031,44.674168,6.600349,.033897,-.212161,44.819195,6.610186,.043978,-.266661,44.450245,6.593605,.056094,-.326582,44.134544,6.570142,.070528,-.390342,43.591648,6.536712,.087498,-.456162,42.70816,6.488329,.107138,-.521609,41.365093,6.420198,.129461,-.584225,39.525822,6.323702,.154245,-.641931,37.186111,6.193606,.181228,-.692829,34.47847,6.026897,.210711,-.73844,31.680904,5.825769,.242181,-.777397,28.828054,5.595428,.275337,-.80998,26.042755,5.342321,.309698,-.83599,23.376804,5.073076,.345702,-.858077,20.965754,4.794572,.382135,-.874122,18.710079,4.516676,.419871,-.887133,16.713011,4.241767,.455609,-.891199,14.819674,3.972124,.492617,-.894082,13.187921,3.717271,.528186,-.89127,11.708584,3.471719,.563462,-.885719,10.422834,3.23776,.596013,-.874241,9.237741,3.01906,.629455,-.862814,8.248549,2.813572,.66111,-.848126,7.358398,2.621046,.690314,-.829798,6.569392,2.441627,.720589,-.812314,5.905934,2.274629,.745631,-.788704,5.2768,2.119423,.771488,-.766133,4.752773,1.97438,.798704,-.744726,4.306095,1.839482,.820172,-.718062,3.889792,1.713244,.844368,-.693972,3.545456,1.594809,.863128,-.665748,3.212762,1.487512,.880094,-.637003,2.926572,1.386724,.904252,-.613728,2.70426,1.288131,.920506,-.585217,2.483164,1.199845,.940919,-.559603,2.300348,1.114958,.957044,-.531597,2.130516,1.034754,.972648,-.503583,1.979313,.960912,.994318,-.478813,1.859664,.889786,1.008754,-.450943,1.742705,.820833,1.028667,-.425516,1.64522,.756332,1.046145,-.398977,1.557184,.693921,1.067212,-.373657,1.480814,.635955,1.084111,-.346657,1.408762,.578832,1.106749,-.321392,1.350468,.523561,1.12844,-.295773,1.294865,.471146,1.151073,-.270028,1.246118,.420298,1.178601,-.244816,1.204226,.370575,1.206845,-.219027,1.166896,.323716,1.235963,-.192622,1.135756,.278058,1.26303,-.165331,1.10924,.235743,1.288937,-.137489,1.088379,.19539,1.310681,-.108685,1.068987,.156439,1.334352,-.07971,1.054273,.117096,1.344847,-.049947,1.034598,.076554,1.354943,-.020272,1.016079,.035585,1.365515,.00917,.999969,-.004771,117e-6,-.000935,9.424866,7.979243,41e-5,-.003275,33.013195,7.979422,.002009,-.016024,64.370331,7.977156,.004541,-.036176,64.655952,7.976128,.008109,-.064384,64.864494,7.964988,.012694,-.099984,64.487198,7.971348,.018554,-.143991,64.63797,7.923116,.025303,-.19204,61.930538,7.953975,.035297,-.259442,66.274422,7.921861,.045226,-.31837,63.33469,7.909609,.05837,-.388821,62.686401,7.864696,.074083,-.461667,61.332054,7.801843,.092537,-.533744,59.125607,7.708949,.113781,-.601905,55.997845,7.575799,.137786,-.664409,52.177567,7.393524,.16477,-.721193,48.019485,7.161756,.193894,-.768842,43.460278,6.882018,.225586,-.810332,39.08659,6.564607,.259311,-.845096,34.896049,6.221983,.294517,-.872849,30.952213,5.865831,.331163,-.895159,27.375792,5.507064,.368964,-.91286,24.21331,5.149763,.407255,-.925338,21.364958,4.806172,.444704,-.930956,18.791691,4.472272,.482041,-.932576,16.52116,4.160864,.519572,-.931547,14.589918,3.865206,.556236,-.926554,12.887797,3.590445,.590431,-.915839,11.352402,3.332747,.622723,-.901266,10.00266,3.093264,.657029,-.888747,8.90521,2.873842,.686164,-.868666,7.876704,2.66674,.719168,-.853152,7.051816,2.479017,.742294,-.826169,6.226034,2.306498,.77032,-.804936,5.590831,2.141328,.792337,-.777772,4.984083,1.994663,.81905,-.755478,4.507655,1.85395,.837684,-.726072,4.049884,1.72559,.861324,-.701424,3.678201,1.606303,.880741,-.673615,3.337163,1.495452,.903335,-.648506,3.05572,1.391162,.920311,-.61964,2.792068,1.294734,.935769,-.590245,2.554566,1.204518,.956592,-.564944,2.366468,1.11863,.972424,-.536842,2.187863,1.038323,.986269,-.50802,2.02348,.963803,1.006122,-.482411,1.895137,.890986,1.022504,-.45511,1.775886,.820936,1.037905,-.42745,1.665951,.758556,1.059281,-.402198,1.577363,.696126,1.076613,-.375156,1.493391,.636676,1.097828,-.349577,1.421129,.579947,1.116671,-.322955,1.355205,.52514,1.140514,-.297406,1.299979,.47146,1.166473,-.271786,1.249847,.420473,1.192591,-.245461,1.204625,.371118,1.223349,-.219412,1.166686,.3226,1.254833,-.19266,1.134121,.277572,1.285808,-.165167,1.108617,.234417,1.322015,-.137236,1.093841,.19464,1.342172,-.106871,1.074616,.155001,1.357238,-.075759,1.05355,.114648,1.367725,-.044279,1.033851,.073254,1.379461,-.013001,1.015713,.031895,1.391625,.018075,1.000203,-.009397,109e-6,-.001093,10.98682,9.992467,378e-6,-.003779,37.989063,9.992861,.002028,-.020252,101.850441,9.988345,.004557,-.045429,101.10675,9.983879,.008115,-.080453,100.646606,9.953411,.012864,-.125836,101.366592,9.943727,.018734,-.17935,100.786118,9.908408,.026314,-.24368,99.779343,9.821631,.0355,-.313552,98.608231,9.78245,.047562,-.394644,97.689568,9.845875,.062065,-.476697,95.177795,9.755218,.079552,-.557933,91.095581,9.615121,.099905,-.632818,85.110382,9.408299,.123231,-.699926,77.948921,9.120996,.14998,-.760671,70.491119,8.764173,.17955,-.812251,62.821407,8.341752,.211839,-.855909,55.51289,7.876337,.246434,-.892023,48.744549,7.386268,.282317,-.9192,42.462059,6.886009,.31958,-.940333,36.901031,6.400318,.360135,-.962176,32.353752,5.937503,.397805,-.969755,27.996445,5.489783,.437077,-.976494,24.359192,5.072855,.474388,-.975265,21.1243,4.684682,.513695,-.975335,18.476677,4.326597,.551542,-.970264,16.167391,3.999049,.587525,-.960365,14.143442,3.696317,.621251,-.945944,12.374341,3.414176,.654738,-.930709,10.877112,3.160455,.685794,-.911702,9.580887,2.921461,.717135,-.892948,8.481939,2.707478,.740798,-.865086,7.435941,2.510382,.77092,-.845137,6.650625,2.329648,.792303,-.815956,5.879976,2.163206,.818363,-.792225,5.274404,2.008042,.837362,-.762396,4.70096,1.867576,.862266,-.738465,4.254798,1.735819,.880069,-.70889,3.828697,1.61469,.896021,-.678588,3.451655,1.503477,.920156,-.654832,3.168722,1.3958,.934948,-.62474,2.879533,1.299955,.949686,-.595203,2.628258,1.208597,.970989,-.570041,2.433689,1.12231,.985606,-.541116,2.241461,1.042168,1.000819,-.512835,2.075567,.966543,1.012209,-.483024,1.919932,.895758,1.03532,-.459125,1.807884,.825668,1.052077,-.432333,1.695689,.760812,1.070459,-.406131,1.595491,.699897,1.088704,-.379721,1.508512,.640575,1.103817,-.352104,1.428159,.583765,1.131711,-.328122,1.366565,.52824,1.156448,-.302568,1.306843,.473988,1.181821,-.276487,1.252861,.422189,1.211347,-.25054,1.205265,.372005,1.243636,-.224264,1.165943,.324184,1.283038,-.198289,1.137772,.278419,1.316722,-.170179,1.115057,.235425,1.342715,-.140095,1.092994,.195084,1.363288,-.108794,1.071875,.155439,1.380656,-.076774,1.052475,.114636,1.394826,-.044509,1.032525,.07289,1.40883,-.011968,1.015459,.031101,1.42237,.020555,.999808,-.011002,1e-4,-.001334,13.377127,13.342275,342e-6,-.004563,45.758434,13.34271,.002026,-.027004,179.672058,13.331846,.004559,-.060563,179.294235,13.314877,.008232,-.108154,181.242035,13.222856,.013031,-.16759,179.684509,13.15386,.019526,-.242041,181.004608,12.986094,.026364,-.309289,159.606293,13.247752,.03767,-.409755,179.468521,12.368877,.051804,-.512051,167.955582,12.981333,.068214,-.601994,156.278793,12.704532,.088295,-.686849,143.096878,12.316531,.111478,-.75867,127.423111,11.793048,.138336,-.821348,111.763031,11.157992,.168447,-.873616,96.887924,10.447472,.201411,-.916322,83.225327,9.696606,.237443,-.95309,71.403137,8.949244,.274234,-.977751,60.739277,8.225874,.314566,-1.003135,52.115578,7.547433,.353932,-1.016312,44.341869,6.910326,.393858,-1.024848,37.827263,6.324401,.433805,-1.02895,32.380932,5.790555,.475812,-1.034084,27.955982,5.312826,.513254,-1.026743,23.977417,4.866118,.549965,-1.01674,20.628025,4.468437,.5903,-1.01203,18.036856,4.105483,.62642,-.998919,15.669224,3.780593,.658897,-.979874,13.603898,3.482054,.687252,-.955238,11.788331,3.211213,.718941,-.935663,10.355552,2.962083,.749877,-.915206,9.131123,2.741382,.772094,-.884837,7.973935,2.536501,.799495,-.861214,7.08623,2.347282,.820136,-.830976,6.240769,2.179332,.846715,-.807408,5.604792,2.018005,.865176,-.776657,4.975034,1.877021,.8811,-.744657,4.442767,1.743528,.907637,-.722088,4.035177,1.621563,.922239,-.690432,3.63316,1.506158,.936558,-.65965,3.281798,1.403606,.950047,-.629105,2.974179,1.304276,.961959,-.598277,2.704483,1.213888,.98741,-.576085,2.510453,1.125569,.999996,-.546494,2.304016,1.045567,1.014127,-.518186,2.127867,.970718,1.036275,-.494009,1.985804,.897557,1.049695,-.465659,1.845074,.830584,1.064617,-.438159,1.72513,.766083,1.077131,-.409813,1.613818,.705101,1.101054,-.385632,1.528694,.644828,1.122361,-.360045,1.447086,.587878,1.147359,-.335186,1.377588,.53213,1.169881,-.30904,1.313673,.478843,1.200554,-.28459,1.257256,.426855,1.232047,-.259332,1.208431,.376125,1.275402,-.235215,1.174692,.326614,1.306595,-.207508,1.141042,.281524,1.334304,-.17829,1.111778,.238694,1.364678,-.14853,1.090976,.198549,1.387168,-.117114,1.069308,.158529,1.408657,-.084977,1.050625,.118042,1.426214,-.052052,1.031444,.076541,1.444257,-.018653,1.014298,.034061,1.460618,.015206,.999413,-.008132,1e-4,-.002003,20.052612,20.032721,297e-6,-.005947,59.540512,20.033842,.002022,-.040439,404.848511,20.032743,.004588,-.090999,403.741241,19.910591,.008769,-.169802,441.471558,19.572552,.013708,-.253629,411.667816,19.145721,.020331,-.349396,371.322571,18.591049,.030259,-.468121,385.816498,18.331083,.04519,-.611444,391.924133,15.807686,.058476,-.676875,319.638641,16.947781,.079894,-.781421,278.80426,17.512903,.103871,-.855116,235.999786,16.290295,.131756,-.915747,197.168076,14.956566,.163487,-.966333,163.452347,13.60801,.198693,-1.008386,135.632706,12.299661,.236157,-1.039862,111.919281,11.08879,.274579,-1.059988,92.136581,9.983883,.317164,-1.084069,77.063034,9.008505,.357624,-1.092124,63.963051,8.127298,.399009,-1.09756,53.483341,7.347628,.441182,-1.100981,45.052429,6.658191,.481606,-1.097318,37.93264,6.047333,.524253,-1.09657,32.395638,5.505878,.564351,-1.088739,27.67938,5.018494,.600843,-1.073396,23.611519,4.58077,.635527,-1.055024,20.207081,4.194785,.672045,-1.039775,17.469036,3.847436,.698372,-1.009545,14.928226,3.532546,.729336,-.987168,12.95317,3.248834,.761147,-.966299,11.346271,2.994166,.78227,-.932841,9.813129,2.762244,.811832,-.910431,8.672224,2.549933,.832053,-.878369,7.578633,2.363132,.849383,-.844673,6.648379,2.189266,.86602,-.811703,5.850784,2.031716,.893083,-.789181,5.273372,1.88448,.909212,-.757541,4.700618,1.750298,.923169,-.725157,4.19664,1.62759,.937112,-.693769,3.764841,1.514906,.961901,-.670828,3.444598,1.406839,.975245,-.64024,3.120745,1.307873,.989696,-.611032,2.840732,1.216417,1.002057,-.581144,2.591596,1.132553,1.014022,-.55162,2.37382,1.051695,1.025307,-.522268,2.177992,.9775,1.05219,-.500826,2.042511,.904301,1.064408,-.472355,1.891934,.837557,1.077876,-.444815,1.761054,.773004,1.088939,-.416531,1.638939,.713958,1.118551,-.395057,1.555724,.652485,1.134469,-.368289,1.46549,.59633,1.162778,-.345095,1.390977,.539703,1.185298,-.319527,1.321225,.48625,1.208419,-.29359,1.259318,.434178,1.261013,-.273471,1.219767,.382032,1.297811,-.248226,1.176422,.33419,1.326591,-.220354,1.139881,.289075,1.357918,-.191937,1.111418,.246259,1.38759,-.162282,1.086511,.205129,1.415797,-.131515,1.067072,.165601,1.440194,-.099555,1.047799,.125462,1.4656,-.066957,1.030406,.084082,1.487714,-.033496,1.013889,.041981,1.509947,663e-6,.998773,-.000485,1e-4,-.004009,40.102047,40.087105,228e-6,-.009141,91.431366,40.074432,.001522,-.060544,605.651733,39.918827,.004919,-.188871,1712.9823,38.873421,.009053,-.320325,1583.453125,39.715633,.015375,-.471415,1486.033691,39.162876,.029306,-.735111,1751.70105,28.0832,.04345,-.859759,1392.47522,24.599945,.079075,-1.220033,1629.972656,18.507019,.09013,-1.091255,940.347351,17.961655,.098008,-.945965,425.901093,24.47801,.138246,-1.084105,416.823944,20.003433,.174489,-1.133148,302.730042,18.550846,.207969,-1.138483,242.853577,15.923334,.249132,-1.168197,191.649445,13.940813,.291391,-1.187038,152.910309,12.263267,.332856,-1.192793,121.905075,10.822873,.377473,-1.202846,99.145561,9.618412,.422601,-1.208871,81.343315,8.591735,.465276,-1.204545,66.742569,7.692911,.50471,-1.190839,54.787876,6.915612,.544909,-1.178827,45.507313,6.242786,.582125,-1.16059,37.819912,5.65169,.620694,-1.145481,31.926588,5.12366,.659127,-1.130178,27.14731,4.669475,.684358,-1.093728,22.650702,4.258717,.719453,-1.074591,19.454103,3.901225,.751695,-1.051678,16.735672,3.57687,.775082,-1.017716,14.281039,3.287471,.796233,-.982759,12.261332,3.023708,.827404,-.961227,10.767912,2.78774,.848149,-.928433,9.37135,2.570737,.864891,-.892838,8.142364,2.379204,.880979,-.858193,7.118954,2.20447,.910434,-.837281,6.389041,2.041554,.925396,-.803638,5.643217,1.893353,.942463,-.772925,5.031223,1.757331,.955217,-.73972,4.486978,1.633572,.96857,-.708048,4.014621,1.520414,.981672,-.677109,3.617768,1.412506,.992829,-.645712,3.258773,1.317079,1.02127,-.625746,3.00664,1.222611,1.031247,-.594628,2.733073,1.137911,1.043581,-.56554,2.498495,1.058439,1.05593,-.536962,2.289843,.984428,1.066727,-.508076,2.108603,.912794,1.081225,-.481297,1.951454,.845536,1.088198,-.451563,1.801891,.782718,1.123316,-.433247,1.704316,.721664,1.133206,-.404812,1.586153,.662761,1.152889,-.379901,1.490958,.606866,1.188158,-.359421,1.41573,.550666,1.217064,-.336049,1.344172,.496748,1.257727,-.314816,1.283196,.443538,1.286647,-.28953,1.225903,.394018,1.308729,-.262053,1.173928,.346255,1.351453,-.237704,1.139992,.300393,1.380284,-.209733,1.105997,.256661,1.414621,-.181613,1.082109,.215429,1.453045,-.152797,1.063853,.177098,1.481066,-.121803,1.043185,.137203,1.514113,-.09025,1.027072,.096998,1.547317,-.057603,1.012551,.055328,1.577983,-.023799,.999267,.013094,108e-6,-.12497,1249.704346,1249.703491,14e-5,-.119585,1195.855469,1195.85437,.003995,-.927433,9274.246094,232.443573,.012013,-1.13158,11315.999023,98.211105,.023892,-1.216018,12162.739258,67.2145,.047506,-1.517865,15186.294922,42.410069,.082523,-1.812564,18145.71875,24.421545,.112452,-1.805072,11112.966797,18.450365,.16446,-2.016784,8086.032715,14.043465,.19587,-1.898199,4245.658203,13.178202,.197797,-1.556158,1315.561768,30.760096,.21954,-1.433455,802.380371,25.037956,.268696,-1.483235,579.715515,20.975695,.265968,-1.261051,386.583649,12.017023,.325369,-1.343349,316.795959,12.612406,.387968,-1.411606,232.491623,13.29694,.435543,-1.411236,181.515228,11.646996,.482729,-1.405722,143.425354,10.265131,.531742,-1.402782,114.920082,9.114828,.559383,-1.346165,88.589005,8.089214,.607851,-1.342407,73.05661,7.249064,.656928,-1.338238,60.826897,6.531094,.681212,-1.285692,48.727219,5.868711,.729238,-1.279951,41.256016,5.324553,.751172,-1.230045,33.72826,4.816513,.773107,-1.184288,27.913816,4.377203,.815726,-1.171653,24.065962,3.999965,.837886,-1.130636,20.25486,3.658493,.857674,-1.089071,17.138168,3.34793,.87612,-1.048303,14.572968,3.072666,.893935,-1.00904,12.496377,2.825165,.927998,-.989064,11.040731,2.60552,.928445,-.935017,9.365102,2.401481,.945279,-.899993,8.177711,2.222282,.959378,-.863854,7.155303,2.059342,.971761,-.827684,6.284632,1.909314,.987812,-.795878,5.583837,1.771094,1.001958,-.76354,4.962345,1.645968,1.014357,-.730897,4.435898,1.527438,1.025946,-.698675,3.973241,1.421337,1.036435,-.666662,3.568025,1.323677,1.046807,-.635466,3.218647,1.232678,1.052974,-.60266,2.902273,1.147675,1.086089,-.585364,2.694939,1.068352,1.09466,-.554784,2.454491,.993445,1.117131,-.5315,2.270746,.923758,1.114009,-.496581,2.063934,.858381,1.137328,-.473914,1.91799,.79498,1.158671,-.450127,1.786523,.735697,1.177878,-.425306,1.662454,.677498,1.20751,-.403797,1.559058,.621762,1.244496,-.383812,1.466801,.56619,1.240412,-.35108,1.366853,.514288,1.321257,-.3412,1.309808,.464621,1.336512,-.31271,1.241822,.413228,1.365047,-.286935,1.186612,.366092,1.418984,-.265184,1.15212,.321528,1.388864,-.22775,1.089937,.271827,1.464383,-.207168,1.077271,.232838,1.473125,-.17577,1.041835,.193289,1.542908,-.150424,1.036794,.156153,1.563005,-.118748,1.013029,.114866,1.637048,-.089604,1.013493,.076804,1.670777,-.056398,.999208,.032691],j=[1,1,1,1,1,1,1,1,1,1,1,1,.999995,.99999,.999971,.999937,.999853,.99967,.999138,.996746,.979578,.979309,.978836,.977972,.976223,.972205,.962466,.953919,.949829,.942492,.92987,.921319,.911112,.896015,.885105,.869971,.855017,.838328,.821241,.802352,.783873,.763309,.743058,.721929,.699755,.677721,.655456,.632681,.609629,.586831,.564287,.541772,.519428,.497353,.475624,.454606,.434099,.414085,.394605,.375698,.357386,.339871,.323085,.306905,1,1,1,1,1,1,1,1,.999999,.999999,.999998,.999995,.99999,.99998,.999959,.999923,.999842,.99966,.999119,.996613,.981824,.979298,.978826,.977957,.976184,.972091,.962188,.953875,.949746,.942335,.930166,.921211,.910927,.896979,.88494,.869864,.854835,.8382,.821049,.802552,.783659,.763512,.742927,.721715,.699938,.677775,.655246,.632555,.609805,.586996,.564225,.541606,.519346,.497419,.475863,.454738,.434099,.414003,.394547,.375747,.357564,.340012,.323099,.306861,1,1,1,1,1,1,1,1,1,.999999,.999998,.999995,.999991,.999979,.999959,.999917,.999839,.999648,.999074,.996168,.98377,.979279,.9788,.977905,.976058,.971727,.96212,.953901,.949485,.941859,.930911,.920853,.910394,.8976,.884427,.870101,.854522,.838325,.820754,.802707,.783223,.763605,.742872,.721565,.699935,.677726,.655242,.63258,.609766,.586946,.564275,.541759,.519467,.497478,.475886,.454794,.434233,.414207,.394751,.375892,.357683,.340146,.323287,.307095,1,1,1,1,1,1,1,.999999,.999999,.999998,.999996,.999992,.999987,.999975,.999953,.999913,.99983,.99963,.998993,.995279,.985142,.979252,.978754,.977821,.975838,.971088,.962563,.954785,.949048,.941052,.93142,.920812,.90975,.897867,.883856,.870091,.854353,.838166,.820661,.802465,.783308,.763346,.742734,.721608,.699747,.677626,.655245,.632547,.609793,.587044,.56434,.541779,.519529,.497633,.476114,.45503,.43443,.414406,.394974,.376154,.357979,.340443,.323572,.307379,1,1,1,1,1,1,1,1,.999998,.999998,.999996,.999991,.999984,.99997,.999946,.999905,.999815,.999599,.998856,.993704,.986135,.979212,.97869,.977691,.975504,.970133,.962951,.955649,.948405,.940418,.93166,.920881,.909376,.897785,.883844,.869756,.854326,.837732,.820617,.802053,.783195,.763119,.74261,.721344,.699709,.677624,.655114,.632523,.609812,.587052,.564417,.541966,.519751,.497824,.476309,.455271,.434735,.414736,.395317,.376524,.358364,.340852,.323988,.307786,1,1,1,1,1,1,.999999,.999999,.999997,.999996,.999994,.999989,.99998,.999965,.99994,.999895,.999796,.999559,.998638,.992774,.986878,.980297,.978602,.977514,.975026,.969169,.963214,.956267,.947689,.940054,.931637,.920678,.90899,.897349,.883905,.869139,.854177,.837476,.820295,.801977,.782798,.762978,.742418,.721193,.69956,.677402,.655108,.632543,.609804,.587158,.564557,.542096,.519908,.498088,.476632,.455623,.435104,.415161,.395783,.377005,.358843,.341345,.324529,.308355,1,1,1,1,1,.999999,.999999,.999998,.999997,.999992,.999991,.999985,.999977,.999959,.999935,.999878,.999773,.999505,.998284,.992353,.987457,.981665,.978492,.977277,.97436,.968716,.963373,.956629,.947397,.939657,.931339,.920588,.908975,.896712,.883763,.86889,.853731,.837333,.819702,.801738,.782454,.762712,.742024,.721037,.699325,.677359,.65503,.632439,.609869,.587221,.564663,.542328,.52022,.4984,.476997,.456053,.435593,.415658,.3963,.377577,.359473,.342004,.32517,.308997,1,1,1,1,1,.999999,.999998,.999998,.999996,.999993,.999988,.999981,.999971,.999951,.999921,.999863,.999748,.999433,.997681,.99212,.98792,.982864,.978353,.976961,.973451,.968396,.9634,.95668,.947529,.939151,.930747,.920511,.908867,.896142,.883335,.868764,.853025,.837015,.819452,.801249,.782176,.762345,.741843,.720721,.699135,.677194,.654889,.632487,.609902,.587328,.564891,.542567,.520501,.498793,.477442,.456528,.436131,.416273,.39698,.378276,.360176,.342738,.32595,.309803,1,1,1,1,.999999,.999998,.999999,.999997,.999995,.999991,.999985,.999978,.999963,.999942,.999907,.999844,.999715,.999332,.996612,.991974,.988297,.983843,.978349,.97654,.972351,.968109,.96328,.956464,.947779,.938754,.929952,.920253,.90853,.895785,.882679,.868456,.852669,.836406,.819138,.800708,.781803,.761855,.741534,.720405,.698959,.676964,.654827,.632411,.609922,.587477,.565051,.542829,.520889,.499225,.477951,.457148,.436792,.416963,.397723,.379068,.361025,.343608,.326842,.310718,1,1,1,1,1,.999999,.999998,.999995,.999994,.99999,.999983,.999971,.999954,.999932,.999892,.99982,.999675,.99919,.995492,.991911,.98861,.984662,.979221,.975975,.971671,.967788,.963002,.955938,.947965,.938692,.929309,.919781,.908268,.895518,.882022,.867884,.852346,.835746,.818607,.800261,.781335,.761539,.741063,.720116,.698617,.676815,.6547,.632389,.610037,.587591,.565328,.543205,.521293,.499745,.478562,.457776,.437515,.417776,.398586,.379963,.361984,.344616,.327857,.311751,1,1,1,1,1,.999999,.999997,.999996,.999992,.999986,.999977,.999965,.999947,.999916,.999873,.999794,.999628,.998966,.994914,.991849,.988873,.985288,.98017,.975207,.971156,.967476,.962538,.955601,.947978,.938542,.928618,.919056,.90789,.895098,.881352,.867263,.851806,.835168,.818003,.799785,.780633,.76108,.740618,.719795,.698332,.676629,.654544,.632411,.610042,.587805,.565593,.543549,.521793,.500309,.479195,.458546,.438353,.418669,.399557,.381012,.363049,.34571,.329006,.312948,1,1,1,1,1,.999999,.999997,.999993,.99999,.999984,.999972,.99996,.999939,.999906,.999853,.999765,.999567,.998603,.994519,.991794,.989089,.985781,.980956,.974161,.970688,.967064,.96189,.955292,.947848,.938359,.928226,.918214,.907361,.894702,.880834,.8665,.851209,.834627,.817211,.79925,.780131,.760512,.740218,.719264,.698063,.676325,.65445,.632316,.61017,.587988,.565891,.544013,.522305,.500958,.479971,.459376,.439271,.419699,.40062,.382126,.364246,.346967,.330273,.314236,1,1,1,1,.999999,.999998,.999996,.999994,.999988,.999979,.999967,.999952,.999924,.999888,.999833,.999733,.99949,.997946,.994192,.991812,.989274,.986224,.981547,.974,.970269,.966545,.961031,.954921,.947416,.938226,.928003,.91739,.906553,.894191,.880329,.86554,.850476,.834058,.816467,.798509,.779561,.759828,.739738,.718878,.697718,.676138,.654342,.632317,.610292,.588207,.566289,.544443,.522927,.501674,.480765,.460314,.440304,.420782,.401824,.38341,.365538,.348312,.331692,.315688,1,1,1,1,.999999,.999998,.999996,.999993,.999985,.999976,.999961,.999943,.999913,.999872,.999807,.999691,.99939,.996859,.994003,.991808,.989423,.986523,.981783,.974511,.969791,.965933,.960377,.954434,.946803,.938026,.92762,.916545,.905639,.893489,.87982,.864852,.849513,.833311,.815878,.797621,.778938,.759253,.739142,.718479,.697274,.675902,.654135,.632357,.610364,.588497,.566631,.545012,.523579,.502429,.48168,.461304,.441425,.422039,.403135,.384779,.366976,.349796,.333231,.317277,1,1,1,1,.999999,.999998,.999996,.999991,.999983,.999974,.999956,.999932,.999901,.999852,.99978,.999646,.999248,.996193,.993784,.991782,.989539,.986694,.981765,.975135,.969309,.965128,.959788,.953831,.946255,.937664,.927351,.916044,.904715,.892528,.879111,.864256,.848452,.832434,.815129,.796806,.778118,.758668,.738466,.718024,.696958,.675642,.654067,.632325,.610546,.588786,.567123,.545617,.524312,.503348,.482637,.462418,.442657,.423338,.404564,.386277,.368545,.351448,.334906,.318961,1,1,1,.999999,.999999,.999998,.999994,.999989,.999979,.999968,.999949,.999921,.999886,.999833,.999747,.999596,.999029,.995749,.993677,.991724,.98962,.986723,.981515,.975767,.969056,.964124,.959142,.953036,.94565,.937022,.926971,.915515,.903584,.891603,.878212,.863472,.847652,.831398,.814299,.796105,.777231,.757977,.737895,.717415,.696595,.675317,.65398,.632343,.610735,.589076,.56762,.546251,.525165,.504255,.483759,.463666,.443987,.424783,.406042,.387891,.370293,.353221,.336715,.320806,1,1,1,.999999,.999998,.999998,.999993,.999987,.999977,.999964,.999943,.999911,.999867,.999807,.999714,.999531,.998645,.995399,.993512,.991717,.989661,.986652,.981559,.976183,.969411,.963317,.958457,.952091,.944951,.936307,.926454,.915043,.902668,.890462,.877245,.862672,.846823,.830201,.813293,.795306,.776393,.757199,.737324,.716808,.696187,.675094,.653814,.632453,.610885,.589483,.568099,.546975,.525953,.505268,.484936,.464988,.445458,.426314,.40775,.38967,.372098,.355105,.338682,.322825,1,1,1,1,.999999,.999996,.999992,.999983,.999976,.999959,.999933,.999898,.999849,.99978,.999676,.999454,.997884,.995166,.993394,.991723,.989654,.986389,.981632,.976607,.969701,.962555,.957605,.951232,.944099,.935556,.925699,.914492,.902027,.889116,.876093,.861649,.845956,.829238,.81222,.79442,.775657,.756265,.736673,.716372,.695669,.674886,.653728,.632568,.611217,.589929,.568783,.547752,.526931,.506425,.486238,.466425,.446945,.428026,.409536,.391551,.374087,.357155,.340787,.324974,1,1,1,1,.999998,.999996,.99999,.999984,.99997,.999952,.999925,.999886,.999831,.999757,.999633,.999356,.997017,.994868,.993337,.99171,.98958,.985848,.98164,.976711,.969755,.962166,.956609,.950365,.943026,.934693,.92488,.913729,.90135,.887966,.874726,.860474,.844905,.828269,.810905,.793364,.774812,.755478,.735886,.715847,.695231,.674537,.653667,.632527,.611475,.590363,.569462,.548571,.527976,.507634,.487632,.467901,.44868,.429833,.411467,.393568,.376197,.359374,.343034,.327273,1,1,1,.999999,.999998,.999993,.999989,.99998,.999965,.999945,.999913,.999869,.99981,.999723,.999583,.999213,.99654,.99474,.993244,.991671,.989411,.985533,.981616,.976847,.969968,.962315,.955468,.94942,.942016,.933617,.923949,.912899,.900495,.887022,.873283,.859153,.84383,.827325,.809888,.792172,.773832,.754686,.735035,.715297,.694955,.674242,.65366,.632752,.611804,.590993,.570154,.549539,.529087,.508974,.48903,.469599,.450466,.431761,.413508,.395761,.37848,.361679,.345465,.329752,1,1,1,1,.999997,.999994,.999987,.999978,.999961,.999936,.999903,.999855,.999786,.999689,.999527,.998988,.996137,.994527,.993108,.991599,.989084,.985308,.981527,.976677,.970079,.962535,.95449,.948271,.940942,.932422,.922836,.911896,.899632,.886118,.871864,.857719,.842536,.826163,.808849,.79086,.772802,.75386,.734335,.714582,.694543,.674071,.653544,.632922,.612153,.591573,.570951,.55052,.530352,.510311,.490707,.471359,.452396,.433837,.415736,.398052,.380874,.364232,.348023,.332368,1,1,1,.999999,.999998,.999994,.999988,.999976,.999957,.999928,.999891,.999837,.999759,.99965,.999463,.998551,.995879,.994366,.992964,.991479,.988521,.985101,.981482,.976168,.970242,.962585,.95395,.946973,.939686,.931248,.921614,.910765,.898617,.885183,.870772,.856138,.84112,.824962,.807732,.789813,.771638,.753008,.733686,.713927,.694082,.673967,.653549,.633135,.612702,.5922,.571904,.551679,.531678,.511898,.492437,.473239,.454451,.436067,.418054,.400542,.383486,.366848,.350781,.335182,1,1,1,.999999,.999997,.999993,.999985,.999972,.999951,.999919,.999877,.999817,.999733,.999608,.99938,.997685,.995603,.994264,.992911,.991287,.987923,.984871,.981239,.975933,.970149,.962511,.953824,.945699,.938285,.929907,.920343,.909537,.897435,.884056,.869626,.85449,.839459,.823511,.806511,.788752,.77044,.751995,.732962,.713424,.693525,.673798,.653622,.633301,.613224,.592938,.572833,.552904,.53303,.513556,.494215,.475279,.456673,.438411,.420583,.403178,.386178,.369728,.353688,.338147,1,1,1,.999999,.999997,.999991,.999984,.999967,.999944,.999912,.999863,.999796,.999703,.999563,.999279,.997104,.995394,.994111,.992825,.990979,.987529,.984661,.980774,.975758,.969866,.962465,.953678,.944489,.936886,.928356,.91882,.908073,.896092,.882833,.868463,.853212,.837744,.822048,.805333,.787643,.769414,.75083,.732178,.712972,.693227,.673569,.653744,.633739,.613735,.593822,.573916,.554158,.534652,.515248,.496233,.477436,.459009,.440929,.423259,.405951,.389136,.37269,.356789,.341329,1,1,1,.999999,.999996,.999991,.999981,.999966,.999939,.999903,.999847,.999771,.999666,.99951,.999131,.99669,.995147,.993882,.992696,.990474,.987227,.984334,.980153,.975438,.969406,.962238,.953598,.943868,.935356,.926721,.917122,.90643,.89455,.881354,.867131,.851954,.835972,.820331,.803911,.786452,.76842,.749821,.731298,.712393,.692979,.673418,.653859,.634232,.614327,.594732,.575131,.555584,.536346,.517175,.498323,.479744,.461485,.443645,.426061,.408969,.392155,.375921,.36006,.344677,1,1,1,.999999,.999997,.999991,.999979,.99996,.999931,.999891,.999832,.999748,.999629,.999449,.99888,.996305,.995024,.993812,.992508,.989721,.986936,.983936,.979629,.974979,.968928,.96197,.953291,.943458,.933644,.925007,.915388,.904755,.892932,.879831,.865794,.850672,.834591,.818398,.802304,.785151,.76745,.748987,.730325,.711758,.692761,.673417,.653908,.634686,.615168,.595707,.576393,.557198,.538018,.519253,.500555,.48222,.464197,.446414,.429106,.412035,.395508,.379284,.363538,.34822,1,1,1,.999999,.999995,.999989,.999977,.999955,.999924,.999879,.999813,.999722,.99959,.999381,.998335,.996088,.994814,.993709,.99222,.989209,.986575,.983383,.979084,.974272,.968359,.961275,.953025,.943098,.932434,.923101,.913477,.902861,.891059,.878072,.864118,.849188,.833281,.816808,.800596,.783745,.766331,.748123,.729686,.711078,.692527,.673491,.654296,.635113,.616048,.596847,.57772,.558879,.540028,.521371,.502996,.484858,.466997,.449477,.432217,.415426,.398924,.38289,.367206,.351955,1,1,1,.999998,.999996,.999988,.999974,.999953,.999918,.999865,.999791,.99969,.999542,.999293,.997535,.99579,.994609,.993557,.991766,.988767,.986255,.982544,.978541,.973528,.9677,.960596,.952299,.942684,.931653,.921211,.911489,.900818,.889018,.876245,.862406,.847517,.831852,.815367,.798719,.782224,.765167,.747304,.729133,.710485,.692196,.673589,.65477,.635717,.616986,.598119,.579298,.56056,.542163,.523669,.505564,.487642,.469991,.452658,.43562,.418937,.402612,.386633,.371091,.355949,1,1,.999999,.999998,.999995,.999986,.999973,.999948,.999909,.999852,.999769,.999656,.99949,.999186,.997059,.995624,.99451,.993327,.99102,.988379,.985771,.981971,.978051,.972892,.96702,.959965,.951625,.941902,.930951,.91937,.909285,.898562,.886809,.874251,.860597,.845808,.830365,.813972,.79726,.780597,.763854,.746401,.728519,.710203,.691882,.673687,.655275,.636621,.617909,.599473,.581032,.56256,.544295,.526228,.508293,.490652,.473242,.456004,.439212,.422663,.406476,.390647,.375204,.360129,1,1,1,.999999,.999994,.999984,.999969,.99994,.999898,.999837,.999746,.999617,.999438,.999016,.996703,.995302,.994356,.992993,.99039,.988072,.985152,.981447,.977273,.972234,.966113,.959033,.950869,.941217,.930175,.918279,.906941,.896201,.884509,.87192,.85842,.843906,.82873,.812524,.795978,.778979,.76245,.745459,.727966,.710046,.691808,.673739,.655756,.637574,.619153,.600887,.582796,.564748,.546636,.528904,.511252,.493791,.476563,.459695,.442942,.426632,.410558,.394895,.379517,.36456,1,1,1,.999998,.999994,.999984,.999966,.999934,.999887,.999819,.99972,.999578,.999367,.998696,.996353,.995201,.994115,.992665,.989948,.987633,.984331,.980827,.97639,.971327,.965201,.957977,.949712,.940128,.929187,.917237,.904645,.893711,.882112,.869516,.856236,.841929,.826924,.810991,.794686,.777761,.76098,.744384,.727314,.709877,.691988,.674098,.656243,.638603,.620606,.602574,.584694,.567018,.549311,.531673,.514403,.497148,.480177,.463439,.446998,.430743,.414943,.399304,.384121,.369251,1,1,1,.999997,.999992,.999981,.999962,.999927,.999874,.999798,.999691,.999533,.999291,.997909,.996117,.995029,.99388,.992142,.989576,.987185,.983587,.980055,.975487,.970172,.963998,.956738,.948637,.939083,.928169,.916144,.903147,.890916,.879389,.866895,.853826,.839729,.824957,.809472,.793341,.776743,.759808,.743277,.726643,.709685,.692249,.674639,.657008,.639576,.622114,.604471,.586851,.56934,.552135,.534806,.517599,.500765,.484035,.46744,.451212,.43524,.419399,.404083,.388944,.374182,1,1,1,.999998,.999993,.999979,.999958,.999919,.999861,.999774,.999656,.999482,.999195,.997307,.995837,.994722,.993707,.991391,.989169,.986461,.982904,.979062,.974536,.969035,.962653,.955486,.947243,.937747,.926861,.914936,.901835,.888472,.876571,.864223,.851252,.837374,.822985,.807788,.791927,.775702,.758928,.742347,.725914,.709495,.692569,.675363,.658085,.640639,.623698,.606505,.589267,.572008,.554939,.538132,.521211,.504487,.488048,.471807,.455651,.439858,.424332,.408983,.394071,.379402,1,1,1,.999997,.999992,.999978,.999954,.999913,.999844,.999753,.999618,.999424,.999067,.996875,.995659,.994603,.99342,.990874,.988713,.985585,.982193,.978145,.973416,.967801,.961483,.954069,.945704,.936138,.925374,.913395,.900339,.886675,.873512,.861326,.848513,.834956,.82082,.805943,.790574,.774677,.758279,.741807,.725271,.709231,.692874,.676189,.659352,.642296,.62525,.6087,.591823,.575012,.558143,.541491,.525075,.508558,.492277,.47627,.460459,.44474,.4294,.414309,.399421,.384907,1,1,1,.999997,.99999,.999977,.999947,.999902,.999832,.99973,.999577,.999359,.998845,.996554,.995328,.994442,.992919,.990393,.98817,.984855,.981312,.977149,.972137,.966207,.959967,.952454,.943873,.934434,.923813,.911942,.898928,.88512,.871043,.858248,.845666,.832346,.818482,.804029,.788982,.773571,.7577,.741484,.725186,.708915,.693244,.677028,.660656,.644079,.627377,.610804,.594542,.578112,.56165,.545163,.528962,.512926,.496893,.481007,.465397,.450042,.43474,.419831,.405156,.390692,1,1,.999999,.999997,.999989,.999973,.999942,.999891,.999813,.999698,.999532,.999285,.998286,.996295,.995215,.994182,.992032,.989855,.987415,.984047,.98005,.976017,.970845,.964767,.958269,.9506,.942033,.932501,.921807,.910017,.897149,.883414,.869182,.855055,.842687,.829548,.816162,.802072,.787436,.772533,.757043,.741263,.72533,.709262,.693497,.678038,.662128,.646068,.629824,.613437,.597334,.581401,.565372,.549288,.533182,.517405,.501765,.486143,.470675,.455465,.440532,.42563,.411113,.396887,1,1,.999999,.999996,.999989,.99997,.999934,.999879,.999793,.999665,.999481,.999192,.997506,.995926,.995009,.993736,.991298,.989326,.986371,.983199,.979032,.974596,.969364,.963198,.956385,.948509,.939993,.930421,.91959,.90814,.895349,.881699,.867456,.852784,.8395,.826629,.813602,.799983,.785873,.77134,.75648,.74119,.725687,.709997,.694192,.678975,.663673,.648135,.632442,.616477,.600565,.584772,.569202,.553595,.537881,.522193,.506784,.491554,.476349,.461278,.446419,.431913,.417443,.403271,1,1,.999999,.999995,.999986,.999966,.999927,.999867,.999772,.999629,.999423,.999075,.997024,.995773,.994651,.993353,.990822,.988569,.985596,.982182,.977871,.97314,.967584,.961408,.954294,.946398,.937603,.927937,.917305,.905833,.893138,.87977,.86572,.851023,.836801,.823784,.810909,.797886,.784177,.770243,.755925,.741144,.726214,.710971,.695563,.680212,.665304,.650297,.635168,.619796,.604217,.588692,.573254,.557998,.542839,.52747,.512162,.497115,.482296,.467477,.452812,.43831,.424184,.410163,1,1,.999999,.999996,.999984,.999962,.99992,.999852,.999745,.999586,.999354,.998894,.996686,.995485,.994493,.992573,.990323,.987772,.984692,.980887,.976446,.971625,.965717,.959421,.951975,.944086,.935066,.925403,.914814,.903208,.890958,.877817,.863828,.849289,.834872,.820889,.808183,.79566,.782556,.769066,.755386,.741229,.726726,.71217,.697209,.68217,.667203,.652689,.637938,.623262,.60819,.593002,.577817,.562737,.547836,.533036,.518052,.503135,.488422,.473986,.459552,.445282,.431149,.417407,1,1,.999999,.999994,.999983,.999957,.999914,.999835,.999718,.999538,.999275,.998454,.996341,.995246,.994222,.991844,.989829,.986688,.983562,.979638,.974932,.969827,.963621,.957146,.949365,.941398,.932245,.922556,.911949,.900627,.88844,.875544,.862005,.84781,.833372,.819134,.805508,.793339,.780916,.767837,.754858,.741307,.727496,.713386,.699131,.684542,.669878,.655261,.641035,.626685,.612377,.597625,.582805,.56803,.553204,.538684,.524269,.509662,.495119,.480735,.466634,.452593,.438748,.424915,1,1,.999998,.999994,.999982,.999956,.999901,.999818,.999683,.999487,.999185,.997584,.996004,.99505,.993715,.991212,.989057,.985879,.982243,.978206,.973119,.967919,.961343,.954603,.946712,.938378,.929266,.919443,.908911,.897725,.885589,.873254,.859889,.846123,.832094,.817898,.803866,.791061,.779235,.766885,.754292,.741565,.728331,.714861,.701179,.687166,.673012,.658716,.644442,.630472,.616519,.602514,.588172,.573689,.559281,.544768,.530543,.516485,.502303,.4881,.474095,.460245,.446598,.433169,1,1,.999997,.999993,.99998,.999947,.999891,.999794,.999647,.999425,.999062,.997049,.995778,.994652,.992778,.990482,.988004,.984893,.980881,.976605,.971199,.96561,.958925,.951746,.943791,.9352,.926018,.916028,.905724,.894528,.882914,.87074,.857802,.844552,.830857,.816921,.803102,.789625,.77748,.765891,.753908,.741795,.72939,.71644,.703411,.690068,.676438,.662586,.648697,.634732,.620997,.607451,.593765,.579748,.565661,.551594,.537396,.523433,.509708,.495972,.482082,.468427,.45489,.441623,1,1,.999999,.999991,.999977,.99994,.999875,.999769,.999605,.999352,.998882,.996665,.995459,.99438,.992014,.989912,.986796,.983537,.979326,.974792,.96914,.96316,.956222,.948807,.940518,.931755,.922452,.912319,.902227,.891142,.879838,.868047,.855745,.842718,.829827,.816398,.802786,.789396,.776581,.764901,.75371,.742102,.730448,.718337,.705768,.693172,.680153,.666882,.653401,.639837,.626152,.612676,.599435,.586109,.572473,.558715,.544964,.531112,.517416,.503992,.490653,.477162,.463832,.450645,1,1,.999999,.999992,.999973,.999933,.999861,.999741,.999554,.999267,.998411,.996303,.995191,.993945,.991406,.989019,.98572,.982057,.977501,.972605,.966697,.96034,.953031,.945347,.936866,.927917,.918562,.908598,.898486,.887794,.876545,.865379,.853428,.841167,.828649,.815967,.802957,.789865,.777077,.764695,.753544,.742694,.731571,.720304,.70849,.696351,.684134,.67147,.658541,.645376,.632209,.618776,.605511,.592527,.579546,.56631,.55286,.539492,.526005,.512564,.49934,.48636,.473357,.460306,1,1,.999998,.999991,.99997,.999926,.999842,.99971,.999498,.999164,.997464,.99587,.994917,.992911,.990682,.987816,.98441,.980551,.975693,.970263,.963946,.957248,.949765,.941571,.932941,.923873,.914332,.90456,.894394,.884127,.873294,.862503,.851335,.839566,.827776,.815708,.80337,.790821,.778386,.766121,.754193,.74342,.732975,.722326,.711376,.699992,.68818,.676354,.664004,.651449,.6386,.625776,.61266,.599603,.586719,.574078,.561273,.548129,.535155,.522015,.508851,.495837,.48319,.470624,1,1,.999998,.999988,.999965,.999916,.999823,.999669,.999425,.999025,.996874,.99567,.994415,.991991,.989766,.986646,.982812,.978356,.973317,.967612,.96082,.953603,.945969,.937323,.928661,.919507,.909833,.900245,.89039,.880252,.87,.859518,.849163,.838101,.82696,.815688,.804126,.792234,.780356,.768474,.756678,.745159,.734601,.724624,.714339,.703751,.692766,.681267,.669799,.657871,.645577,.633102,.62056,.607737,.59489,.582143,.569779,.55736,.544651,.531942,.519228,.506467,.49371,.481143,1,1,.999998,.999988,.999961,.999902,.999798,.999622,.999341,.998801,.996397,.995225,.993927,.991338,.9885,.985327,.981195,.976383,.970726,.964471,.957386,.949813,.941694,.932681,.923974,.914755,.905026,.895649,.886178,.876277,.866629,.85689,.846934,.836887,.826373,.815885,.805169,.794133,.782812,.771547,.760175,.748896,.737687,.727152,.717601,.70767,.697425,.686788,.675664,.664513,.652962,.640965,.628851,.616551,.604168,.591559,.579009,.566648,.554597,.542382,.529999,.517655,.505254,.492894,1,1,.999997,.999986,.999956,.999889,.999766,.999562,.99924,.997952,.996094,.994979,.992773,.990536,.987214,.983322,.978938,.973714,.967681,.960981,.953144,.945475,.936909,.927734,.918826,.90959,.900085,.890867,.881801,.872565,.863236,.854239,.84506,.835686,.826251,.816284,.806586,.796419,.785914,.77521,.764461,.753599,.742805,.731872,.72137,.711898,.702337,.692383,.682137,.671365,.660479,.649314,.637685,.625899,.613898,.601865,.589582,.577285,.565013,.553106,.54128,.529367,.51732,.505411,1,1,.999997,.999983,.999948,.999869,.999732,.999499,.999111,.997167,.99572,.994349,.991727,.989197,.985883,.981483,.976618,.970597,.964122,.956994,.948639,.9405,.931606,.922385,.913291,.904205,.894938,.88589,.877334,.868754,.860053,.851683,.843447,.834889,.826304,.817441,.808285,.799141,.78957,.7796,.76951,.759155,.748882,.738346,.727629,.717273,.707467,.698283,.688609,.678748,.668371,.657739,.646951,.635765,.624254,.612647,.6009,.589061,.576998,.564991,.553102,.541517,.530027,.518495,1,1,.999997,.999983,.999939,.999851,.999684,.999412,.998925,.996597,.995207,.993603,.990903,.987594,.983814,.979016,.973647,.967048,.960109,.952123,.94356,.9349,.925747,.916566,.907305,.898441,.889629,.881042,.872874,.865064,.857225,.849446,.842063,.834561,.826814,.818875,.810748,.802316,.793699,.784704,.775198,.765643,.755735,.745873,.735526,.725229,.714892,.704807,.695502,.686241,.676633,.666688,.656384,.645871,.635174,.624113,.612788,.601426,.589925,.578399,.566612,.554931,.543383,.532065,1,1,.999996,.999977,.999928,.999824,.999633,.999306,.998429,.996133,.99489,.992316,.989752,.986095,.981564,.976234,.970081,.962779,.955232,.946702,.937716,.928604,.919281,.910167,.901046,.892446,.884183,.876253,.868619,.861545,.854673,.847885,.841074,.83461,.827984,.820945,.813648,.806232,.798444,.790232,.781853,.772897,.763648,.754227,.744542,.734689,.724526,.714204,.704152,.694222,.685143,.67586,.666319,.656415,.646273,.635902,.625399,.614563,.60349,.592413,.581217,.57,.558608,.547242,1,.999999,.999995,.999972,.999915,.99979,.999562,.999168,.997237,.995672,.994074,.99122,.987792,.983822,.978599,.972804,.965718,.958053,.94946,.940503,.931011,.921608,.912409,.903378,.894606,.886369,.878756,.871573,.864862,.858421,.852541,.846802,.841027,.835206,.829628,.82373,.817415,.810655,.803873,.796659,.788887,.78094,.772537,.763507,.754487,.745163,.735572,.725687,.715611,.705398,.695418,.685592,.676518,.667304,.657875,.648182,.638235,.628062,.617813,.607283,.596552,.58577,.575033,.564153,1,1,.999995,.99997,.999898,.999748,.999472,.998969,.996528,.995102,.992701,.989963,.985981,.981194,.975183,.968501,.960502,.952012,.942861,.933376,.923506,.914042,.904921,.896282,.887987,.880341,.873536,.867293,.861556,.856148,.850987,.846352,.841684,.83688,.832036,.827091,.8219,.816206,.810042,.803629,.796918,.789653,.781915,.774014,.76553,.756526,.747669,.738342,.72877,.718942,.708942,.698855,.688933,.679131,.669855,.660811,.651549,.642127,.632454,.622651,.612709,.602606,.592344,.581877,1,.999999,.999993,.999963,.999874,.999691,.99935,.998431,.995873,.994456,.991327,.987798,.983232,.9775,.970828,.962815,.954228,.944752,.935126,.925179,.915102,.905763,.897087,.888933,.881452,.874687,.868716,.863585,.858931,.854662,.850569,.846719,.843151,.839426,.835588,.831443,.827004,.822395,.817254,.81163,.805464,.799124,.792382,.785091,.777315,.76936,.760908,.751957,.743128,.733917,.72434,.714713,.704721,.694835,.684862,.675099,.66557,.656644,.647651,.638581,.629337,.619926,.610358,.600707,1,1,.99999,.999953,.999843,.999613,.999186,.997025,.995317,.99285,.98976,.98527,.979807,.973049,.965228,.956248,.946394,.936324,.926124,.915808,.905942,.89706,.889001,.881755,.875351,.869688,.864736,.860745,.857305,.85419,.851261,.848484,.845642,.842948,.84006,.836901,.833379,.829393,.825103,.820431,.815288,.809575,.803326,.796949,.790174,.782873,.775048,.767139,.758772,.750019,.74112,.732127,.722743,.713225,.703637,.693768,.684016,.674277,.664703,.655328,.64655,.637812,.629036,.620129,1,1,.999988,.999933,.9998,.999508,.998917,.996236,.994617,.991176,.987089,.98188,.974966,.967156,.957914,.947585,.936937,.926318,.915662,.905567,.896223,.888166,.881117,.875079,.869981,.865675,.862091,.859183,.856981,.855065,.853273,.851572,.849782,.847768,.845668,.843345,.840703,.837646,.834094,.83003,.825631,.820873,.815619,.809856,.803578,.797096,.790359,.783152,.775507,.767504,.759411,.750982,.742208,.733383,.724445,.71519,.705827,.69644,.686773,.677242,.667735,.658471,.649236,.640305,1,.999999,.999984,.999918,.999737,.99935,.997576,.995476,.992614,.988817,.983601,.97688,.968694,.959092,.948297,.936831,.925592,.914494,.904159,.894643,.886417,.87962,.874023,.869533,.865967,.863238,.861113,.859527,.858367,.857594,.856882,.856172,.855316,.854197,.852818,.851062,.849046,.846747,.844043,.840842,.837164,.832985,.828344,.823544,.818276,.812543,.806374,.799838,.79317,.786246,.778956,.771297,.763278,.755252,.746984,.738445,.729688,.721045,.712189,.703099,.694045,.68493,.675601,.66648,1,.999999,.999978,.999888,.999639,.999093,.99631,.994405,.990527,.985186,.978518,.969748,.959597,.948104,.935724,.923704,.912023,.901356,.89185,.883847,.87728,.872289,.868583,.865913,.864098,.862993,.862356,.862125,.862107,.862168,.862359,.86249,.86243,.862063,.861431,.860386,.85895,.85709,.854848,.852381,.849503,.846167,.842399,.838194,.833566,.828579,.823464,.817951,.812079,.805873,.79932,.792533,.785715,.778636,.77126,.763618,.755719,.747815,.739825,.731602,.723212,.714845,.706465,.697933,1,.999998,.999969,.999836,.999475,.997943,.995219,.99176,.986663,.979592,.970218,.959155,.946575,.933047,.920022,.907749,.896801,.887506,.880077,.874322,.870126,.867481,.865949,.865293,.865287,.865746,.866502,.867439,.868442,.869382,.870161,.870782,.871303,.871511,.871427,.870978,.870136,.868892,.867248,.865209,.862775,.859944,.857004,.853671,.849984,.845927,.841518,.836774,.83175,.826407,.821001,.815333,.809412,.803238,.796802,.790204,.783457,.776713,.769749,.762596,.755239,.74769,.740127,.732595,1,.999997,.99995,.999744,.999162,.996124,.992844,.987757,.980062,.969642,.957087,.942735,.927747,.913622,.900889,.890115,.881584,.875288,.870926,.868307,.867033,.866972,.867692,.86895,.870549,.87232,.874144,.875947,.877674,.879192,.880478,.881539,.882307,.882739,.882902,.882847,.882461,.881725,.880636,.879197,.877422,.875296,.872849,.870076,.866988,.863637,.860159,.856475,.852525,.848328,.843883,.839198,.834322,.829221,.823907,.818461,.812972,.807316,.801474,.795459,.789276,.783025,.776615,.770223,.999999,.999994,.999909,.999536,.997195,.994123,.988168,.979344,.967003,.951763,.934724,.917948,.902918,.890432,.880902,.874401,.870394,.868503,.868209,.869062,.870725,.873006,.875558,.87823,.880893,.883445,.885832,.888059,.890058,.891782,.893247,.89446,.895397,.896023,.89638,.896433,.896198,.895673,.894865,.893908,.8927,.891224,.889501,.887539,.885336,.882903,.880244,.877373,.874296,.871019,.867549,.863933,.860153,.856355,.852395,.848277,.844006,.839587,.835045,.830378,.825579,.820649,.815592,.810432,.999998,.999988,.999795,.998892,.994635,.98729,.975397,.958508,.938352,.917733,.8998,.885878,.876516,.8712,.869099,.869317,.871112,.87387,.87716,.880682,.884228,.887737,.891076,.894161,.896981,.899543,.901847,.903882,.905672,.907188,.908451,.90948,.910289,.910878,.911259,.91143,.911396,.911154,.910712,.910081,.909266,.908264,.907094,.905752,.904244,.902577,.900799,.898931,.896923,.894782,.892513,.890117,.8876,.884968,.882222,.879369,.876408,.873345,.870183,.866926,.863575,.86016,.856672,.853098,.999991,.999947,.999158,.992842,.980107,.95723,.928231,.901539,.882688,.872588,.869394,.870671,.874458,.879378,.884639,.88977,.894601,.898972,.90293,.906456,.909568,.912329,.91475,.916893,.918774,.920429,.921868,.92311,.924185,.925089,.925842,.926457,.926934,.927285,.927522,.927639,.92765,.927553,.927356,.927061,.926671,.926187,.925617,.924962,.924224,.923409,.922519,.921555,.920521,.919419,.918252,.917021,.915729,.914377,.912967,.911503,.909984,.908414,.906791,.905122,.903401,.901637,.899826,.897972,.987461,.940121,.871507,.898572,.916705,.926425,.931922,.935265,.937431,.938899,.93995,.940717,.941301,.941754,.942111,.942397,.942631,.942823,.942983,.943117,.943231,.943329,.943412,.943484,.943545,.943599,.943644,.943682,.943716,.943744,.943766,.943785,.943799,.943808,.943815,.943818,.943818,.943814,.943807,.943797,.943784,.943769,.943751,.94373,.943707,.943681,.943652,.943623,.943589,.943554,.943518,.943479,.943438,.943396,.943351,.943305,.943257,.943207,.943156,.943104,.943049,.942993,.942936,.942877],c3.prototype.init=function(e){this.entity=e},c3.prototype.set=function(e){Object.assign(this,e),Object.keys(e).forEach(e=>this.changed.dispatch(e)),(void 0!==e.color||void 0!==e.intensity)&&(this.color[3]=this.intensity)},c3.prototype.dispose=function(){0==--c3.areaLightTexturesRefs&&(this.ctx.dispose(c3.ltc_mat_texture),c3.ltc_mat_texture=null,this.ctx.dispose(c3.ltc_mag_texture),c3.ltc_mag_texture=null)},c2=function(e){return new c3(e)};var c9={},lX=X("iFSYq"),c4={},c5=new Uint32Array(1);c4=function(e,t){return[e/t,(c5[0]=e,c5[0]=(c5[0]<<16|c5[0]>>16)>>>0,c5[0]=(1431655765&c5[0])<<1|(2863311530&c5[0])>>>1>>>0,c5[0]=(858993459&c5[0])<<2|(3435973836&c5[0])>>>2>>>0,c5[0]=(252645135&c5[0])<<4|(4042322160&c5[0])>>>4>>>0,c5[0]=(16711935&c5[0])<<8|(4278255360&c5[0])>>>8>>>0,23283064365386963e-26*c5[0])]};var c6={};c6=/* glsl */`
attribute vec2 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;var c8={};c8=/* glsl */`
precision highp float;

${uN.octMapUvToDir}

varying vec2 vTexCoord;

uniform samplerCube uCubemap;
uniform float uTextureSize;

void main() {
  vec3 N = octMapUVToDir(vTexCoord, uTextureSize);
  gl_FragColor = textureCube(uCubemap, N);
}
`;var c7={};c7=/* glsl */`
precision highp float;

${uN.octMapUvToDir}
${uN.octMap}
${uN.rgbm}
${uN.gamma}
${uN.encodeDecode}
${uN.math.PI}

varying vec2 vTexCoord;

uniform sampler2D uSource;
uniform int uSourceEncoding;
uniform float uSourceSize;
uniform float uTextureSize;
uniform int uOutputEncoding;

void main() {
  vec3 N = octMapUVToDir(vTexCoord, uTextureSize);
  vec3 normal = N;

  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, normal));
  up = cross(normal,right);

  vec3 sampledColor = vec3(0.0, 0.0, 0.0);
  float index = 0.0;
  const float dphi = 2.0 * PI / 180.0 * 2.0;
  const float dtheta = 0.5 * PI / 64.0 * 2.0;
  for(float phi = 0.0; phi < 2.0 * PI; phi += dphi) {
    for(float theta = 0.0; theta < 0.5 * PI; theta += dtheta) {
      vec3 temp = cos(phi) * right + sin(phi) * up;
      vec3 sampleVector = cos(theta) * normal + sin(theta) * temp;
      // in theory this should be sample from mipmap level e.g. 2.0, 0.0
      // but sampling from prefiltered roughness gives much smoother results
      vec2 sampleUV = envMapOctahedral(sampleVector, 0.0, 2.0);
      vec4 color = texture2D( uSource, sampleUV);
      sampledColor += decode(color, uSourceEncoding).rgb * cos(theta) * sin(theta);
      index += 1.0;
    }
  }

  sampledColor = PI * sampledColor / index;
  gl_FragColor = encode(vec4(sampledColor, 1.0), uOutputEncoding);
}
`;var fe={};fe=/* glsl */`
precision highp float;

varying vec2 vTexCoord;

uniform float uLevelSize;
uniform sampler2D uSource;
uniform float uSourceSize;
uniform float uSourceRegionSize;

void main() {
  vec2 uv = vTexCoord;
  uv *= uSourceRegionSize / uSourceSize;

  gl_FragColor = texture2D(uSource, uv);
}
`;var ft={};ft=/* glsl */`
precision highp float;

${uN.octMapUvToDir}
${uN.octMap}

varying vec2 vTexCoord;

// uniform float uLevelSize;
uniform sampler2D uSource;
uniform float uRoughnessLevel;
uniform float uMipmapLevel;

// uniform float uSourceSize;
// uniform float uSourceRegionSize;

void main() {
  vec2 uv = vTexCoord;
  float width = 2048.0;
  float maxLevel = 11.0; // this should come from log of size
  float levelSizeInPixels = pow(2.0, 1.0 + uMipmapLevel + uRoughnessLevel);
  float levelSize = width / levelSizeInPixels;
  float roughnessLevelWidth = width / pow(2.0, 1.0 + uRoughnessLevel);
  float vOffset = (width - pow(2.0, maxLevel - uRoughnessLevel));
  float hOffset = 2.0 * roughnessLevelWidth - pow(2.0, log2(2.0 * roughnessLevelWidth) - uMipmapLevel);
  // trying to fix oveflow from atlas..
  uv = (uv * levelSize - 0.5) / (levelSize - 1.0);
  uv *= levelSize;
  uv = (uv + vec2(hOffset, vOffset)) / width;
  gl_FragColor = texture2D(uSource, uv);
}
`;var fr={};function fn(e){this.type="ReflectionProbe",this.enabled=!0,this.changed=new l6,this.rgbm=!1,this.set(e);let t=e.ctx;this._ctx=t,this.dirty=!0;let r=this._dynamicCubemap=t.textureCube({width:512,height:512,pixelFormat:this.rgbm?t.PixelFormat.RGBA8:t.PixelFormat.RGBA16F,encoding:this.rgbm?t.Encoding.RGBM:t.Encoding.Linear}),n=[{eye:[0,0,0],target:[1,0,0],up:[0,-1,0]},{eye:[0,0,0],target:[-1,0,0],up:[0,-1,0]},{eye:[0,0,0],target:[0,1,0],up:[0,0,1]},{eye:[0,0,0],target:[0,-1,0],up:[0,0,-1]},{eye:[0,0,0],target:[0,0,1],up:[0,-1,0]},{eye:[0,0,0],target:[0,0,-1],up:[0,-1,0]}].map((e,n)=>(e.projectionMatrix=lX.perspective(lX.create(),Math.PI/2,1,.1,100)// TODO: change this to radians
    ,e.viewMatrix=lX.lookAt(lX.create(),e.eye,e.target,e.up),e.drawPassCmd={name:"ReflectionProbe.sidePass",pass:t.pass({name:"ReflectionProbe.sidePass",color:[{texture:r,target:t.gl.TEXTURE_CUBE_MAP_POSITIVE_X+n}],clearColor:[0,0,0,1],clearDepth:1})},e)),o={aPosition:t.vertexBuffer([[-1,-1],[1,-1],[1,1],[-1,1]]),aTexCoord:t.vertexBuffer([[0,0],[1,0],[1,1],[0,1]])},i=t.indexBuffer([[0,1,2],[0,2,3]]),a=this._octMap=t.texture2D({width:1024,height:1024,pixelFormat:this.rgbm?t.PixelFormat.RGBA8:t.PixelFormat.RGBA16F,encoding:this.rgbm?t.Encoding.RGBM:t.Encoding.Linear}),s=this._reflectionMap=t.texture2D({width:2048,height:2048,min:t.Filter.Linear,mag:t.Filter.Linear,pixelFormat:this.rgbm?t.PixelFormat.RGBA8:t.PixelFormat.RGBA16F,encoding:this.rgbm?t.Encoding.RGBM:t.Encoding.Linear}),l={name:"ReflectionProbe.cubemapToOctMap",pass:t.pass({name:"ReflectionProbe.cubemapToOctMap",color:[a]}),pipeline:t.pipeline({vert:c6,frag:c8}),attributes:o,indices:i,uniforms:{uTextureSize:a.width,uCubemap:r}},u={name:"ReflectionProbe.convolveOctmapAtlasToOctMap",pass:t.pass({name:"ReflectionProbe.convolveOctmapAtlasToOctMap",color:[a]}),pipeline:t.pipeline({vert:c6,frag:c7}),attributes:o,indices:i,uniforms:{uTextureSize:64,uSource:s,uSourceSize:s.width,uSourceEncoding:s.encoding,uOutputEncoding:a.encoding}},c={name:"ReflectionProbe.clearOctMapAtlas",pass:t.pass({name:"ReflectionProbe.clearOctMapAtlas",color:[s],clearColor:[0,0,0,0]})},f={name:"ReflectionProbe.blitToOctMapAtlasCmd",pass:t.pass({name:"ReflectionProbe.blitToOctMapAtlasCmd",color:[s]}),pipeline:t.pipeline({vert:c6,frag:fe}),uniforms:{uSource:a,uSourceSize:a.width},attributes:o,indices:i},d={name:"ReflectionProbe.downsampleFromOctMapAtlasCmd",pass:t.pass({name:"ReflectionProbe.downsampleFromOctMapAtlasCmd",color:[a],clearColor:[0,1,0,1]}),pipeline:t.pipeline({vert:c6,frag:ft}),uniforms:{uSource:s,uSourceSize:s.width},attributes:o,indices:i},p={name:"ReflectionProbe.prefilterFromOctMapAtlasCmd",pass:t.pass({name:"ReflectionProbe.prefilterFromOctMapAtlasCmd",color:[a],clearColor:[0,1,0,1]}),pipeline:t.pipeline({vert:c6,frag:fr}),uniforms:{uSource:s,uSourceSize:s.width,uSourceEncoding:s.encoding,uOutputEncoding:a.encoding},attributes:o,indices:i},h=new Float32Array(512);for(let e=0;e<128;e++){let t=c4(e,128);h[4*e]=t[0],h[4*e+1]=t[1],h[4*e+2]=0,h[4*e+3]=0}let m=t.texture2D({data:h,width:1,height:128,pixelFormat:t.PixelFormat.RGBA32F,encoding:t.Encoding.Linear});function g(e,r,n){let o=s.width,i=Math.max(64,o/(2<<e+r)),a=o/(2<<r),l=o-Math.pow(2,Math.log2(o)-r),u=2*a-Math.pow(2,Math.log2(2*a)-e);t.submit(f,{viewport:[u,l,i,i],uniforms:{uLevelSize:i,uSourceRegionSize:n}})}this.update=function(e){var o,i,h,v,y;if(e){this.dirty=!1,n.forEach(n=>{t.submit(n.drawPassCmd,()=>e(n,r.encoding))}),t.submit(l),t.submit(c),g(0,0,a.width);for(let e=0;e<4;e++)o=e,i=a.width/Math.pow(2,e+1),t.submit(d,{viewport:[0,0,i,i],uniforms:{uMipmapLevel:o,uRoughnessLevel:0}}),g(e+1,0,a.width/Math.pow(2,1+e));g(5,0,64);for(let e=1;e<=5;e++)h=Math.max(0,e-1),v=e,y=Math.max(64,a.width/Math.pow(2,e+1)),t.submit(p,{viewport:[0,0,y,y],uniforms:{uSourceMipmapLevel:0,uSourceRoughnessLevel:h,uRoughnessLevel:v,uNumSamples:128,uHammersleyPointSetMap:m}}),g(0,e,Math.max(64,a.width/Math.pow(2,1+e)));t.submit(u,{viewport:[0,0,64,64]}),t.submit(f,{viewport:[s.width-64,s.height-64,64,64],uniforms:{uSourceRegionSize:64}})}}}fr=/* glsl */`
precision highp float;

// Variables
varying vec2 vTexCoord;
uniform float uTextureSize;
uniform sampler2D uSource;
uniform int uSourceEncoding;
uniform sampler2D uHammersleyPointSetMap;
uniform int uNumSamples;
uniform float uLevel;
uniform float uSourceMipmapLevel;
uniform float uSourceRoughnessLevel;
uniform float uRoughnessLevel;
uniform int uOutputEncoding;

// Includes
${uN.math.PI}
${uN.math.saturate}
${uN.octMap}
${uN.octMapUvToDir}
${uN.rgbm}
${uN.gamma}
${uN.encodeDecode}

//Sampled from a texture generated by code based on
//http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
vec2 Hammersley(int i, int N) {
  return texture2D(uHammersleyPointSetMap, vec2(0.5, (float(i) + 0.5)/float(N))).rg;
}

//Based on Real Shading in Unreal Engine 4
vec3 ImportanceSampleGGX(vec2 Xi, float Roughness, vec3 N) {
  //this is mapping 2d point to a hemisphere but additionally we add spread by roughness
  float a = Roughness * Roughness;
  a *= 0.75; // to prevent overblurring as we sample from previous roughness level with smaller number of samples
  float Phi = 2.0 * PI * Xi.x;
  float CosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
  float SinTheta = sqrt(1.0 - CosTheta * CosTheta);
  vec3 H;
  H.x = SinTheta * cos(Phi);
  H.y = SinTheta * sin(Phi);
  H.z = CosTheta;

  //Tangent space vectors
  vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
  vec3 tangent = normalize(cross(up, N));
  vec3 bitangent = normalize(cross(N, tangent));

  //Tangent to World Space
  return tangent * H.x + bitangent * H.y + N * H.z;
}

//TODO: optimize this using sign()
//Source: http://webglinsights.github.io/downloads/WebGL-Insights-Chapter-16.pdf

vec4 textureOctMapLod(sampler2D tex, vec2 uv) {
  float width = 2048.0;
  float maxLevel = 11.0; // this should come from log of size
  float levelSizeInPixels = pow(2.0, 1.0 + uSourceMipmapLevel + uSourceRoughnessLevel);
  float levelSize = max(64.0, width / levelSizeInPixels);
  float roughnessLevelWidth = width / pow(2.0, 1.0 + uSourceRoughnessLevel);
  float vOffset = (width - pow(2.0, maxLevel - uSourceRoughnessLevel));
  float hOffset = 2.0 * roughnessLevelWidth - pow(2.0, log2(2.0 * roughnessLevelWidth) - uSourceMipmapLevel);
  // trying to fix oveflow from atlas..
  uv = (uv * levelSize + 0.5) / (levelSize + 1.0);
  uv *= levelSize;
  uv = (uv + vec2(hOffset, vOffset)) / width;
  return texture2D(uSource, uv);
}

vec3 PrefilterEnvMap( float roughness, vec3 R ) {
  vec3 N = R;
  vec3 V = R;
  vec3 PrefilteredColor = vec3(0.0);
  const int NumSamples = 512;
  float TotalWeight = 0.0;
  for( int i = 0; i < NumSamples; i++ ) {
    if (i > uNumSamples) {
      break;
    }
    vec2 Xi = Hammersley( i, uNumSamples );
    vec3 H = ImportanceSampleGGX( Xi, roughness, N );
    vec3 L = 2.0 * dot( V, H ) * H - V;
    float NoL = saturate( dot( N, L ) );
    if( NoL > 0.0 ) {
      vec4 color = textureOctMapLod(uSource, envMapOctahedral(L));
      PrefilteredColor += NoL * decode(color, uSourceEncoding).rgb;
      TotalWeight += NoL;
    }
  }
  return PrefilteredColor / TotalWeight;
}

void main() {
  vec3 normal = octMapUVToDir(vTexCoord);
  vec3 color = PrefilterEnvMap(uRoughnessLevel / 5.0, normal);
  gl_FragColor = encode(vec4(color, 1.0), uOutputEncoding);
}
`,fn.prototype.init=function(e){this.entity=e},fn.prototype.set=function(e){Object.assign(this,e),Object.keys(e).forEach(e=>this.changed.dispatch(e))},c9=function(e){return new fn(e)};var fo={},fi={};fi=function(e){Array.isArray(e=void 0!==e?e:1)||(e=[e,e]);var t=[[-e[0],-e[1],0],[e[0],-e[1],0],[e[0],e[1],0],[-e[0],e[1],0]],r=[0,0,-1];return{positions:t,cells:[[0,1,2],[2,3,0]],uvs:[[0,0],[1,0],[1,1],[0,1]],normals:[r.slice(),r.slice(),r.slice(),r.slice()]}};var fa={};// Based on http://gamedev.stackexchange.com/questions/60313/implementing-a-skybox-with-glsl-version-330
fa=/* glsl */`
attribute vec2 aPosition;

${uN.math.inverseMat4}
${uN.math.transposeMat3}

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;

varying vec3 wcNormal;

void main() {
  mat4 inverseProjection = inverse(uProjectionMatrix);
  mat3 inverseModelview = transpose(mat3(uViewMatrix));
  vec3 unprojected = (inverseProjection * vec4(aPosition, 0.0, 1.0)).xyz;
  wcNormal = (uModelMatrix * vec4(inverseModelview * unprojected, 1.0)).xyz;

  gl_Position = vec4(aPosition, 0.9999, 1.0);
}
`;var fs={};fs=/* glsl */`
#ifdef USE_DRAW_BUFFERS
  #extension GL_EXT_draw_buffers : enable
#endif

precision highp float;

#define USE_TONEMAPPING

// Variables
// assuming texture in Linear Space
// most likely HDR or Texture2D with sRGB Ext
uniform sampler2D uEnvMap;
uniform int uEnvMapEncoding;
uniform int uOutputEncoding;
uniform float uBackgroundBlur;

varying vec3 wcNormal;

uniform bool uUseTonemapping;
#ifdef USE_TONEMAPPING
  ${uN.tonemapUncharted2}
  uniform float uExposure;
#endif

// Includes
${uN.math.PI}
${uN.math.TWO_PI}

${uN.rgbm}
${uN.gamma}
${uN.encodeDecode}
${uN.envMapEquirect}
${uN.octMap}
${uN.irradiance}

void main() {
  vec3 N = normalize(wcNormal);

  vec4 color = vec4(0.0);

  if (uBackgroundBlur <= 0.0) {
    color = decode(texture2D(uEnvMap, envMapEquirect(N)), uEnvMapEncoding);
  } else {
    color = vec4(getIrradiance(N, uEnvMap, uEnvMapEncoding), 1.0);
  }
  #ifdef USE_TONEMAPPING
    if (uUseTonemapping) {
      color.rgb *= uExposure;
      color.rgb = tonemapUncharted2(color.rgb);
    }
  #endif

  gl_FragData[0] = encode(color, uOutputEncoding);
  #ifdef USE_DRAW_BUFFERS
    gl_FragData[1] = vec4(0.0);
  #endif
}
`;var fl={};fl=/* glsl */`
attribute vec3 aPosition;
attribute vec2 aTexCoord0;

varying vec2 vTexCoord0;

void main() {
  gl_Position = vec4(aPosition, 1.0);
  vTexCoord0 = aTexCoord0;
}
`;var fu={};function fc(e){this.type="Skybox",this.enabled=!0,this.changed=new l6,this.rgbm=!1,this.backgroundBlur=0;let t=this._ctx=e.ctx;this.texture=null,this.diffuseTexture=null,this._dirtySunPosition=!0,this.set(e);let r=[];t.capabilities.maxColorAttachments>1&&r.push("#define USE_DRAW_BUFFERS"),this._drawCommand={name:"Skybox.draw",pipeline:t.pipeline({vert:fa,frag:r.join("\n")+"\n"+fs,depthTest:!0}),attributes:{aPosition:t.vertexBuffer([[-1,-1],[1,-1],[1,1],[-1,1]])},indices:t.indexBuffer([[0,1,2],[0,2,3]]),uniforms:{uUseTonemapping:!1,uExposure:1}};var n=fi();this._skyTexture=t.texture2D({width:512,height:256,pixelFormat:this.rgbm?t.PixelFormat.RGBA8:t.PixelFormat.RGBA16F,encoding:this.rgbm?t.Encoding.RGBM:t.Encoding.Linear,min:t.Filter.Linear,mag:t.Filter.Linear}),this._updateSkyTexture={name:"Skybox.updateSkyTexture",pass:t.pass({name:"Skybox.updateSkyTexture",color:[this._skyTexture],clearColor:[0,0,0,0]}),pipeline:t.pipeline({vert:fl,frag:fu}),uniforms:{uSunPosition:[0,0,0]},attributes:{aPosition:t.vertexBuffer(n.positions),aTexCoord0:t.vertexBuffer(n.uvs)},indices:t.indexBuffer(n.cells)}}fu=/* glsl */`
precision highp float;

${uN.math.PI}
${uN.sky}
${uN.rgbm}
${uN.gamma}
${uN.encodeDecode}

uniform vec3 uSunPosition;

varying vec2 vTexCoord0;
uniform bool uRGBM;

void main() {
  //Texture coordinates to Normal is Based on
  //http://gl.ict.usc.edu/Data/HighResProbes/
  // u=[0,2], v=[0,1],
  // theta=pi*(u-1), phi=pi*v
  // (Dx,Dy,Dz) = (sin(phi)*sin(theta), cos(phi), -sin(phi)*cos(theta)).

  float u = vTexCoord0.x;
  float v = 1.0 - vTexCoord0.y; // uv's a Y flipped in WebGL

  float theta = PI * (u * 2.0 - 1.0);
  float phi = PI * v;

  float x = sin(phi) * sin(theta);
  float y = cos(phi);
  float z = -sin(phi) * cos(theta);

  vec3 N = vec3(x, y, z);

  vec3 color = sky(uSunPosition, N);

   if (uRGBM) {
     gl_FragColor = encodeRGBM(color);
  } else {
    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
  }
}
`,fc.prototype.init=function(e){this.entity=e},fc.prototype.set=function(e){Object.assign(this,e),e.sunPosition&&(this._dirtySunPosition=!0),Object.keys(e).forEach(e=>this.changed.dispatch(e))},fc.prototype.draw=function(e,t){var r=this._ctx;!this.texture&&this._dirtySunPosition&&(this._dirtySunPosition=!1,r.submit(this._updateSkyTexture,{uniforms:{uSunPosition:this.sunPosition,uRGBM:this.rgbm}}));let n=this.texture||this._skyTexture,o=0;t.backgroundMode&&(this.backgroundTexture&&(n=this.backgroundTexture),this.backgroundBlur>0&&(o=this.backgroundBlur,this._reflectionProbe||(this._reflectionProbe=this.entity.renderer.getComponents("ReflectionProbe")[0]),this._reflectionProbe&&(n=this._reflectionProbe._reflectionMap)));let i=e.entity?e.entity.getComponent("PostProcessing"):null,a=!(i&&i.enabled);// TODO: can we somehow avoid creating an object every frame here?
r.submit(this._drawCommand,{uniforms:{uProjectionMatrix:e.projectionMatrix,uViewMatrix:e.viewMatrix,uModelMatrix:this.entity.transform.modelMatrix,uEnvMap:n,uEnvMapEncoding:n.encoding,uOutputEncoding:t.outputEncoding,uBackgroundBlur:o,uUseTonemapping:!!t.backgroundMode&&a,uExposure:t.backgroundMode?e.exposure:1}})},fo=function(e){if(!e.sunPosition&&!e.texture)throw Error("Skybox requires either a sunPosition or a texture");return new fc(e)};var ff={};// Overlay position and size if relative to screen size if < 1 or in pixels if > 1
function fd(e){this.type="Overlay",this.enabled=!0,this.changed=new l6,this.entity=null,this.dirty=!1,this.x=0,this.y=0,this.width=1,this.height=1,this.texture=null,this.alpha=1,this.set(e)}fd.prototype.init=function(e){this.entity=e},fd.prototype.set=function(e){Object.assign(this,e),Object.keys(e).forEach(e=>this.changed.dispatch(e))},fd.prototype.update=function(){},ff=function(e){return new fd(e)};var fp={};function fh(e){this.type="BoundingBoxHelper",this.entity=null,this.enabled=!0,this.color=[1,0,0,1],this.changed=new l6,this.dirty=!1,e&&this.set(e)}// this function gets called when the component is added
// to an enity
fh.prototype.init=function(e){this.entity=e},fh.prototype.set=function(e){Object.assign(this,e),this.dirty=!0,Object.keys(e).forEach(e=>this.changed.dispatch(e))},fh.prototype.update=function(){this.dirty&&(this.dirty=!1)},fh.prototype.getBBoxPositionsList=function(e){return[[e[0][0],e[0][1],e[0][2]],[e[1][0],e[0][1],e[0][2]],[e[0][0],e[0][1],e[0][2]],[e[0][0],e[1][1],e[0][2]],[e[0][0],e[0][1],e[0][2]],[e[0][0],e[0][1],e[1][2]],[e[1][0],e[1][1],e[1][2]],[e[0][0],e[1][1],e[1][2]],[e[1][0],e[1][1],e[1][2]],[e[1][0],e[0][1],e[1][2]],[e[1][0],e[1][1],e[1][2]],[e[1][0],e[1][1],e[0][2]],[e[1][0],e[0][1],e[0][2]],[e[1][0],e[0][1],e[1][2]],[e[1][0],e[0][1],e[0][2]],[e[1][0],e[1][1],e[0][2]],[e[0][0],e[1][1],e[0][2]],[e[1][0],e[1][1],e[0][2]],[e[0][0],e[1][1],e[0][2]],[e[0][0],e[1][1],e[1][2]],[e[0][0],e[0][1],e[1][2]],[e[0][0],e[1][1],e[1][2]],[e[0][0],e[0][1],e[1][2]],[e[1][0],e[0][1],e[1][2]]]},fh.prototype.getBBoxGeometry=function(e,t,r){this.getBBoxPositionsList(t).forEach(t=>{e.addPosition(t),e.addColor(r)})},fh.prototype.draw=function(e){this.getBBoxGeometry(e,this.entity.transform.worldBounds,this.color)},// by pex-renderer convention we export factory function
// instead of the class type
fp=function(e){return new fh(e)};var fm={},fg=ub.vec3;function fv(e){this.type="LightHelper",this.entity=null,this.changed=new l6,this.dirty=!1,this.enabled=!0,e&&this.set(e)}// this function gets called when the component is added
// to an enity
fv.prototype.init=function(e){this.entity=e},fv.prototype.set=function(e){Object.assign(this,e),this.dirty=!0,Object.keys(e).forEach(e=>this.changed.dispatch(e))},fv.prototype.update=function(){this.dirty&&(this.dirty=!1)},fv.prototype.getCirclePositions=function(e){let t=[];for(let r=0;r<e.steps;r++){let n=r/e.steps*2*Math.PI,o=Math.cos(n),i=Math.sin(n),a=[0,0,0];a[e.axis?e.axis[0]:0]=o,a[e.axis?e.axis[1]:1]=i,fg.scale(a,e.radius||1),fg.add(a,e.center||[0,0,0]),t.push(a)}let r=t.reduce((e,r,n)=>(e.push(r),e.push(t[(n+1)%t.length]),e),[]);return r},fv.prototype.getPrismPositions=function(e){let t=e.radius,r=e.position||[0,0,0],n=[[0,t,0],[t,0,0],[0,-t,0],[t,0,0],[0,t,0],[-t,0,0],[0,-t,0],[-t,0,0],[0,t,0],[0,0,t],[0,-t,0],[0,0,t],[0,t,0],[0,0,-t],[0,-t,0],[0,0,-t],[-t,0,0],[0,0,-t],[t,0,0],[0,0,-t],[t,0,0],[0,0,t],[-t,0,0],[0,0,t]];return n.forEach(e=>fg.add(e,r)),n},fv.prototype.getQuadPositions=function(e){let t=e.width,r=e.height,n=e.position||[0,0,0],o=[[-1,-1,0],[1,-1,0],[1,-1,0],[1,1,0],[1,1,0],[-1,1,0],[-1,1,0],[-1,-1,0],[-1,-1,0],[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[-1,-1,.5],[1,-1,0],[1,-1,.5],[1,1,0],[1,1,.5],[-1,1,0],[-1,1,.5],[0,0,0],[0,0,.5]];return o.forEach(e=>{e[0]*=t/2,e[1]*=r/2,fg.add(e,n)}),o},fv.prototype.draw=function(e){let t;if(t=this.entity.getComponent("DirectionalLight")){let r=this.entity.getComponent("Transform"),n=this.getPrismPositions({radius:.3}).concat(/* prettier-ignore */[[0,0,.3],[0,0,1],[.3,0,0],[.3,0,1],[-.3,0,0],[-.3,0,1],[0,.3,0],[0,.3,1],[0,-.3,0],[0,-.3,1]]);n.forEach(n=>{fg.multMat4(n,r.modelMatrix),e.addPosition(n),e.addColor(t.color)})}if(t=this.entity.getComponent("AreaLight")){//area light
let r=this.entity.getComponent("Transform"),n=this.getQuadPositions({width:1,height:1});n.forEach(n=>{fg.multMat4(n,r.modelMatrix),e.addPosition(n),e.addColor(t.color)})}if(t=this.entity.getComponent("PointLight")){//pointlight
let r=this.entity.getComponent("Transform"),n=this.getPrismPositions({radius:.2}).concat(/* prettier-ignore */[[0,0,0],[0,.6,0],[0,-0,0],[0,-.6,0],[0,0,0],[.6,0,0],[-0,0,0],[-.6,0,0],[0,0,0],[0,0,.6],[0,0,-0],[0,0,-.6]]);n.forEach(n=>{fg.multMat4(n,r.modelMatrix),e.addPosition(n),e.addColor(t.color)})}if(t=this.entity.getComponent("SpotLight")){//spotlight
let r=this.entity.getComponent("Transform"),n=t.range,o=n*Math.tan(t.angle),i=this.getPrismPositions({radius:.2}).concat([[0,0,0],[o,0,n],[0,0,0],[-o,0,n],[0,0,0],[0,o,n],[0,0,0],[0,-o,n]]).concat(this.getCirclePositions({radius:o,center:[0,0,n],steps:64,axis:[0,1]}));i.forEach(n=>{e.addPosition(fg.multMat4(fg.copy(n),r.modelMatrix)),e.addColor(t.color)})}},// by pex-renderer convention we export factory function
// instead of the class type
fm=function(e){return new fv(e)};var fy={},fb=ub.vec3;function fx(e){this.type="CameraHelper",this.entity=null,this.color=[1,0,0,1],this.changed=new l6,this.dirty=!1,this.enabled=!0,e&&this.set(e)}// this function gets called when the component is added
// to an enity
fx.prototype.init=function(e){this.entity=e},fx.prototype.set=function(e){Object.assign(this,e),this.dirty=!0,Object.keys(e).forEach(e=>this.changed.dispatch(e))},fx.prototype.update=function(){this.dirty&&(this.dirty=!1)},fx.prototype.getBBoxPositionsList=function(e){return[[e[0][0],e[0][1],e[0][2]],[e[1][0],e[0][1],e[0][2]],[e[0][0],e[0][1],e[0][2]],[e[0][0],e[1][1],e[0][2]],[e[0][0],e[0][1],e[0][2]],[e[0][0],e[0][1],e[1][2]],[e[1][0],e[1][1],e[1][2]],[e[0][0],e[1][1],e[1][2]],[e[1][0],e[1][1],e[1][2]],[e[1][0],e[0][1],e[1][2]],[e[1][0],e[1][1],e[1][2]],[e[1][0],e[1][1],e[0][2]],[e[1][0],e[0][1],e[0][2]],[e[1][0],e[0][1],e[1][2]],[e[1][0],e[0][1],e[0][2]],[e[1][0],e[1][1],e[0][2]],[e[0][0],e[1][1],e[0][2]],[e[1][0],e[1][1],e[0][2]],[e[0][0],e[1][1],e[0][2]],[e[0][0],e[1][1],e[1][2]],[e[0][0],e[0][1],e[1][2]],[e[0][0],e[1][1],e[1][2]],[e[0][0],e[0][1],e[1][2]],[e[1][0],e[0][1],e[1][2]]]},fx.prototype.draw=function(e,t){if("orthographic"==(cType=this.entity.getComponent("Camera")).projection){let t=this.entity.getComponent("Transform"),r=(cType.right+cType.left)/2-(cType.right-cType.left)/(2/cType.zoom),n=(cType.right+cType.left)/2+(cType.right-cType.left)/(2/cType.zoom),o=(cType.top+cType.bottom)/2+(cType.top-cType.bottom)/(2/cType.zoom),i=(cType.top+cType.bottom)/2-(cType.top-cType.bottom)/(2/cType.zoom);if(cType.view){let e=1/cType.zoom/(cType.view.size[0]/cType.view.totalSize[0]),t=1/cType.zoom/(cType.view.size[1]/cType.view.totalSize[1]),a=(cType.right-cType.left)/cType.view.size[0],s=(cType.top-cType.bottom)/cType.view.size[1];r+=a*(cType.view.offset[0]/e),n=r+a*(cType.view.size[0]/e),o-=s*(cType.view.offset[1]/t),i=o-s*(cType.view.size[1]/t)}this.getBBoxPositionsList([[r,o,-cType.near],[n,i,-cType.far]]).forEach(r=>{e.addPosition(fb.multMat4(fb.copy(r),t.modelMatrix)),e.addColor(this.color)})}if("perspective"==cType.projection){let t=this.entity.getComponent("Transform");cType.far,cType.near;let r=2*Math.tan(cType.fov/2)*cType.near,n=2*Math.tan(cType.fov/2)*cType.far,o=r*cType.aspect,i=n*cType.aspect,a=[-(.5*i),.5*n,-cType.far],s=[.5*i,.5*n,-cType.far],l=[-(.5*i),-(.5*n),-cType.far],u=[.5*i,-(.5*n),-cType.far],c=[-(.5*o),.5*r,-cType.near],f=[.5*o,.5*r,-cType.near],d=[-(.5*o),-(.5*r),-cType.near],p=[.5*o,-(.5*r),-cType.near];[[0,0,0],a,[0,0,0],s,[0,0,0],l,[0,0,0],u,a,s,s,u,u,l,l,a,c,f,f,p,p,d,d,c].forEach(r=>{e.addPosition(fb.multMat4(fb.copy(r),t.modelMatrix)),e.addColor(this.color)})}},// by pex-renderer convention we export factory function
// instead of the class type
fy=function(e){return new fx(e)};var fw={};function fS(e){this.type="AxisHelper",this.entity=null,this.scale=1,this.changed=new l6,this.dirty=!1,this.enabled=!0,e&&this.set(e)}// this function gets called when the component is added
// to an enity
fS.prototype.init=function(e){this.entity=e},fS.prototype.set=function(e){Object.assign(this,e),this.dirty=!0,Object.keys(e).forEach(e=>this.changed.dispatch(e))},fS.prototype.update=function(){this.dirty&&(this.dirty=!1)},fS.prototype.draw=function(e){e.addPosition([0,0,0]),e.addColor([1,0,0,1]),e.addPosition([this.scale,0,0]),e.addColor([1,0,0,1]),e.addPosition([0,0,0]),e.addColor([0,1,0,1]),e.addPosition([0,this.scale,0]),e.addColor([0,1,0,1]),e.addPosition([0,0,0]),e.addColor([0,0,1,1]),e.addPosition([0,0,this.scale]),e.addColor([0,0,1,1])},// by pex-renderer convention we export factory function
// instead of the class type
fw=function(e){return new fS(e)};var f_={};function fE(e){this.type="GridHelper",this.entity=null,this.color=[.7,.7,.7,1],this.size=10,this.step=1,this.enabled=!0,this.changed=new l6,this.dirty=!1,e&&this.set(e)}// this function gets called when the component is added
// to an enity
fE.prototype.init=function(e){this.entity=e},fE.prototype.set=function(e){Object.assign(this,e),this.dirty=!0,Object.keys(e).forEach(e=>this.changed.dispatch(e))},fE.prototype.update=function(){this.dirty&&(this.dirty=!1)},fE.prototype.draw=function(e){for(let t=-this.size/2;t<=this.size/2;t+=this.step)e.addPosition([this.size/2,0,t]),e.addPosition([-this.size/2,0,t]),e.addColor(this.color),e.addColor(this.color);for(let t=-this.size/2;t<=this.size/2;t+=this.step)e.addPosition([t,0,this.size/2]),e.addPosition([t,0,-this.size/2]),e.addColor(this.color),e.addColor(this.color)},// by pex-renderer convention we export factory function
// instead of the class type
f_=function(e){return new fE(e)};var fA={},fM={},fC=(fM={load:X("jSebG"),loadBinary:X("lIZb1"),loadImage:X("aqyWn"),loadText:X("6RMJd"),loadJSON:X("85Ju0")}).loadJSON,fT=fM.loadImage,fP=fM.loadBinary,fO=ub.quat,fR=ub.mat4,fL=ub.utils;// Constants
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#specifying-extensions
let fN=["KHR_materials_unlit","KHR_materials_pbrSpecularGlossiness","KHR_texture_transform"],fD={// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Buffers
ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER:34962,// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Data_types
BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,UNSIGNED_INT:5125,FLOAT:5126// 0x1406
},fF={[fD.BYTE]:Int8Array,[fD.UNSIGNED_BYTE]:Uint8Array,[fD.SHORT]:Int16Array,[fD.UNSIGNED_SHORT]:Uint16Array,[fD.UNSIGNED_INT]:Uint32Array,[fD.FLOAT]:Float32Array},fI={[fD.BYTE]:1,[fD.UNSIGNED_BYTE]:1,[fD.SHORT]:2,[fD.UNSIGNED_SHORT]:2,[fD.UNSIGNED_INT]:4,[fD.FLOAT]:4},fU={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fz={JSON:1313821514,BIN:5130562},fk={POSITION:"positions",NORMAL:"normals",TANGENT:"tangents",TEXCOORD_0:"texCoords",TEXCOORD_1:"texCoords1",JOINTS_0:"joints",WEIGHTS_0:"weights",COLOR_0:"vertexColors"};function fB(e){return[Math.pow(e[0],1/2.2),Math.pow(e[1],1/2.2),Math.pow(e[2],1/2.2),4==e.length?e[3]:1]}// Build
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/accessor.schema.json
function fj(e,t){if(e._data)return e;let r=fU[e.type];void 0===e.byteOffset&&(e.byteOffset=0),e._bufferView=t[e.bufferView];let n=fF[e.componentType],o=fI[e.componentType],i=new n(e._bufferView._data.slice(e.byteOffset,e.byteOffset+e.count*r*o));// Sparse accessors
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/accessor.sparse.schema.json
if(e._data=i,void 0!==e.sparse){let o=fF[e.sparse.indices.componentType],i=new o(t[e.sparse.indices.bufferView]._data,e.sparse.indices.byteOffset||0,e.sparse.count),a=new n(t[e.sparse.values.bufferView]._data,e.sparse.values.byteOffset||0,e.sparse.count*r);null!==e._data&&(e._data=e._data.slice());let s=0;for(let t=0;t<i.length;t++){let n=i[t]*r;for(let t=0;t<r;t++)e._data[n++]=a[s++]}}return e}function f$(e,t,r,n){// Retrieve glTF root object properties
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/texture.schema.json
let o=t.textures[e.index],i=t.images[o.source],a=t.samplers&&t.samplers[o.sampler]?t.samplers[o.sampler]:{};a.minFilter=a.minFilter||r.Filter.LinearMipmapLinear,a.magFilter=a.magFilter||r.Filter.Linear,a.wrapS=a.wrapS||r.Wrap.Repeat,a.wrapT=a.wrapT||r.Wrap.Repeat;let s=a.minFilter!==r.Filter.Nearest&&a.minFilter!==r.Filter.Linear;if(!o._tex){let e=i._img;if((!fL.isPowerOfTwo(e.width)||!fL.isPowerOfTwo(e.height))&&(a.wrapS!==r.Wrap.Clamp||a.wrapT!==r.Wrap.Clamp||s)){let t=document.createElement("canvas");t.width=fL.nextPowerOfTwo(e.width),t.height=fL.nextPowerOfTwo(e.height);let r=t.getContext("2d");r.drawImage(e,0,0,t.width,t.height),e=t}o._tex=r.texture2D({data:e,width:e.width,height:e.height,encoding:n||r.Encoding.Linear,pixelFormat:r.PixelFormat.RGBA8,wrapS:a.wrapS,wrapT:a.wrapT,min:a.minFilter,mag:a.magFilter}),s&&r.update(o._tex,{mipmap:!0,aniso:16})}// https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_texture_transform/schema/KHR_texture_transform.textureInfo.schema.json
let l=e.extensions&&e.extensions.KHR_texture_transform,u=e.texCoord;return u||l?{texture:o._tex,// textureInfo
texCoord:u||0,// textureTransform.texCoord: Overrides the textureInfo texCoord value if supplied.
...l||{}}:o._tex}class fV{constructor(e){this._arrayBuffer=e,this._dataView=new DataView(e),this._byteOffset=0}getPosition(){return this._byteOffset}getLength(){return this._arrayBuffer.byteLength}readUint32(){let e=this._dataView.getUint32(this._byteOffset,!0);return this._byteOffset+=4,e}readUint8Array(e){let t=new Uint8Array(this._arrayBuffer,this._byteOffset,e);return this._byteOffset+=e,t}skipBytes(e){this._byteOffset+=e}}function fG(e){return!(e.length<5)&&"data:"===e.substr(0,5)}let fq={enabledCameras:[0],enabledScene:void 0,includeCameras:!1,includeLights:!1};fA=async function(e,t,r={}){let n=Object.assign({},fq,r),o=t._ctx,i=lj.extname(e),a=lj.dirname(e),s=".glb"===i,{json:l,bin:u}=function(e){if(e instanceof ArrayBuffer){var t;let r=function(e){let t;let r=new fV(e),n=r.readUint32();if(1179937895// glTF
!==n)throw Error(`Unexpected magic: ${n}`);let o=r.readUint32();if(2!==o)throw Error(`Unsupported version: ${o} `);let i=r.readUint32();if(i!==r.getLength())throw Error(`Length in header does not match actual data length: ${i} != ${r.getLength()}`);// Decode chunks
// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#chunks
// uint32 chunkLength
// uint32 chunkType
// ubyte[] chunkData
// JSON
let a=r.readUint32(),s=r.readUint32();if(s!==fz.JSON)throw Error("First chunk format is not JSON");// Decode Buffer to Text
let l=r.readUint8Array(a);if("undefined"!=typeof TextDecoder)t=new TextDecoder().decode(l);else{let e="",r=l.byteLength;for(let t=0;t<r;t++)e+=String.fromCharCode(l[t]);t=e}// BIN
let u=null;for(;r.getPosition()<r.getLength();){let e=r.readUint32(),t=r.readUint32();switch(t){case fz.JSON:throw Error("Unexpected JSON chunk");case fz.BIN:u=r.readUint8Array(e);break;default:r.skipBytes(e)}}return{json:t,bin:u}}(e);return{json:JSON.parse(r.json),bin:(t=r.bin).buffer.slice(t.byteOffset,t.byteLength+t.byteOffset)}}return{json:e}}(s?await fP(e):await fC(e));// Check required extensions
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#specifying-extensions
if(l.extensionsRequired){let e=l.extensionsRequired.filter(e=>!fN.includes(e));e.length&&console.warn("glTF loader: unsupported extensions",e)}// Check asset version
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/asset.schema.json
let c=parseInt(l.asset.version);// Data setup
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#binary-data-storage
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/buffer.schema.json
for(let e of((!c||c<2)&&console.warn(`glTF Loader: Invalid or unsupported version: ${l.asset.version}`),l.buffers))s?e._data=u:fG(e.uri)?e._data=function(e){let t=atob(e.split(",")[1]),r=t.length,n=new Uint8Array(new ArrayBuffer(r));for(let e=0;e<r;e++)n[e]=t.charCodeAt(e);return n.buffer}(e.uri):e._data=await fP([a,e.uri].join("/"));// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/bufferView.schema.json
for(let e of l.bufferViews){let t=l.buffers[e.buffer]._data;void 0===e.byteOffset&&(e.byteOffset=0),e._data=t.slice(e.byteOffset,e.byteOffset+e.byteLength),e.target===fD.ELEMENT_ARRAY_BUFFER?e._indexBuffer=o.indexBuffer(e._data):e.target===fD.ARRAY_BUFFER&&(e._vertexBuffer=o.vertexBuffer(e._data))}// Load images
// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/image.schema.json
if(l.images)for(let e of l.images)// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#uris
if(s||e.bufferView){let t=l.bufferViews[e.bufferView];t.byteOffset=t.byteOffset||0;let r=l.buffers[t.buffer],n=r._data.slice(t.byteOffset,t.byteOffset+t.byteLength),o=new Blob([n],{type:e.mimeType}),i=URL.createObjectURL(o);e._img=await fT({url:i,crossOrigin:"anonymous"})}else fG(e.uri)?e._img=await fT({url:e.uri,crossOrigin:"anonymous"}):e._img=await fT({url:[a,e.uri].join("/").replace(/%/g,"%25"),crossOrigin:"anonymous"});return(l.scenes||[{}]).map((e,r)=>(// Create scene root entity
    e.root=t.entity([t.transform({enabled:n.enabledScene||r===(l.scene||0)})]),e.root.name=e.name||`scene_${r}`,// Add scene entities for each node and its children
    // TODO: scene.entities is just convenience. We could use a user-friendly entity traverse.
    e.entities=l.nodes.reduce((e,r,i)=>{let a=// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/node.schema.json
    function(e,t,r,n,o,i){let a;let s=[];if(e.matrix){let t=fR.create(),r=[Math.hypot(e.matrix[0],e.matrix[1],e.matrix[2]),Math.hypot(e.matrix[4],e.matrix[5],e.matrix[6]),Math.hypot(e.matrix[8],e.matrix[9],e.matrix[10])];for(let n of[0,1,2])t[n]=e.matrix[n]/r[0],t[n+4]=e.matrix[n+4]/r[1],t[n+8]=e.matrix[n+8]/r[2];a={position:[e.matrix[12],e.matrix[13],e.matrix[14]],rotation:fO.fromMat4(fO.create(),t),scale:r}}else a={position:e.translation||[0,0,0],rotation:e.rotation||[0,0,0,1],scale:e.scale||[1,1,1]};if(s.push(o.transform(a)),i.includeCameras&&Number.isInteger(e.camera)){let r=t.cameras[e.camera],a=i.enabledCameras.includes(e.camera);// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/camera.schema.json
    "orthographic"===r.type?s.push(o.camera({enabled:a,name:r.name||`camera_${e.camera}`,projection:"orthographic",near:r.orthographic.znear,far:r.orthographic.zfar,left:-r.orthographic.xmag/2,right:r.orthographic.xmag/2,top:r.orthographic.ymag/2,bottom:r.orthographic.ymag/2})):s.push(o.camera({enabled:a,name:r.name||`camera_${e.camera}`,near:r.perspective.znear,far:r.perspective.zfar||1/0,fov:r.perspective.yfov,aspect:r.perspective.aspectRatio||n.gl.drawingBufferWidth/n.gl.drawingBufferHeight}))}e.entity=o.entity(s),e.entity.name=e.name||`node_${r}`;// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/skin.schema.json
    let l=null;if(Number.isInteger(e.skin)){let r=t.skins[e.skin],n=fj(t.accessors[r.inverseBindMatrices],t.bufferViews),i=[];for(let e=0;e<n._data.length;e+=16)i.push(n._data.slice(e,e+16));l=o.skin({inverseBindMatrices:i})}if(Number.isInteger(e.mesh)){var u;let i=(u=t.meshes[e.mesh]).primitives.map(e=>{let r=o.geometry(// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/mesh.primitive.schema.json
    function(e,t,r){let n={},o=Object.keys(e.attributes).reduce((n,o)=>{let i=fk[o];i||console.warn(`glTF Loader: Unknown attribute '${o}'`);let a=fj(t.accessors[e.attributes[o]],t.bufferViews);return a.sparse?n[i]=a._data:(a._bufferView._vertexBuffer||(a._bufferView._vertexBuffer=r.vertexBuffer(a._bufferView._data)),n[i]={buffer:a._bufferView._vertexBuffer,offset:a.byteOffset,type:a.componentType,stride:a._bufferView.byteStride}),n},{}),i=t.accessors[e.attributes.POSITION],a=t.accessors[e.indices]&&fj(t.accessors[e.indices],t.bufferViews);return(// Create geometry
    n={...n,...o,bounds:[i.min,i.max]},a?(a._bufferView._indexBuffer||(a._bufferView._indexBuffer=r.indexBuffer(a._bufferView._data)),n={...n,indices:{buffer:a._bufferView._indexBuffer,offset:a.byteOffset,type:a.componentType},count:a.count}):n={...n,count:i._data.length/3},e.mode&&(n={...n,primitive:e.mode}),n)}(e,t,n,o)),i=void 0!==e.material?o.material(// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/material.schema.json
    function(e,t,r){let n={baseColor:[1,1,1,1],roughness:1,metallic:1,castShadows:!0,receiveShadows:!0,cullFace:!e.doubleSided},o=e.pbrMetallicRoughness;o&&(n={...n,baseColor:[1,1,1,1],roughness:1,metallic:1},o.baseColorFactor&&(n.baseColor=fB(o.baseColorFactor)),o.baseColorTexture&&(n.baseColorMap=f$(o.baseColorTexture,t,r,r.Encoding.SRGB)),void 0!==o.metallicFactor&&(n.metallic=o.metallicFactor),void 0!==o.roughnessFactor&&(n.roughness=o.roughnessFactor),o.metallicRoughnessTexture&&(n.metallicRoughnessMap=f$(o.metallicRoughnessTexture,t,r)));// Specular/Glossiness workflow
    // https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness/schema/glTF.KHR_materials_pbrSpecularGlossiness.schema.json
    let i=e.extensions?e.extensions.KHR_materials_pbrSpecularGlossiness:null;return i&&(n={...n,useSpecularGlossinessWorkflow:!0,diffuse:[1,1,1,1],specular:[1,1,1],glossiness:1},i.diffuseFactor&&(n.diffuse=fB(i.diffuseFactor)),i.specularFactor&&(n.specular=fB(i.specularFactor)),void 0!==i.glossinessFactor&&(n.glossiness=i.glossinessFactor),i.diffuseTexture&&(n.diffuseMap=f$(i.diffuseTexture,t,r,r.Encoding.SRGB)),i.specularGlossinessTexture&&(n.specularGlossinessMap=f$(i.specularGlossinessTexture,t,r,r.Encoding.SRGB))),e.normalTexture&&(n.normalMap=f$(e.normalTexture,t,r)),e.occlusionTexture&&(n.occlusionMap=f$(e.occlusionTexture,t,r)),e.emissiveTexture&&(n.emissiveColorMap=f$(e.emissiveTexture,t,r,r.Encoding.SRGB)),e.emissiveFactor&&(n={...n,emissiveColor:fB(e.emissiveFactor)}),"BLEND"===e.alphaMode&&(n={...n,depthWrite:!1,blend:!0,blendSrcRGBFactor:r.BlendFactor.SrcAlpha,blendSrcAlphaFactor:r.BlendFactor.One,blendDstRGBFactor:r.BlendFactor.OneMinusSrcAlpha,blendDstAlphaFactor:r.BlendFactor.One}),"MASK"===e.alphaMode&&(n.alphaTest=e.alphaCutoff||.5),e.extensions&&e.extensions.KHR_materials_unlit&&(n={...n,unlit:!0}),n}(t.materials[e.material],t,n,o)):o.material(),a=[r,i];// Create morph
    if(e.targets){let r={},n=e.targets.reduce((n,o)=>{let i=Object.keys(o);return i.forEach(i=>{let a=fk[i]||i;n[a]=n[a]||[];let s=fj(t.accessors[o[i]],t.bufferViews);if(n[a].push(s._data),!r[a]){let n=fj(t.accessors[e.attributes[i]],t.bufferViews);r[a]=n._data}}),n},{}),i=o.morph({sources:r,targets:n,weights:u.weights});a.push(i)}return a});if(1===i.length)i[0].forEach(t=>{e.entity.addComponent(t)}),l&&e.entity.addComponent(l);else{// create sub nodes for each primitive
    let t=i.map((t,n)=>{let i=o.entity(t);return i.name=`node_${r}_${n}`,i.transform.set({parent:e.entity.transform}),l&&i.addComponent(l),i}),n=[e.entity].concat(t);return n}}return e.entity}(r,l,i,o,t,n);return a.length?a.forEach(t=>e.push(t)):e.push(a),e},[]),// Build pex-renderer hierarchy
    l.nodes.forEach((t,r)=>{let n=l.nodes[r],o=n.entity.transform;n.entity.transform.parent||n.entity.transform.set({parent:e.root.transform}),t.children&&t.children.forEach(e=>{let t=l.nodes[e],r=t.entity.transform;r.set({parent:o})})}),l.nodes.forEach(e=>{if(void 0!==e.skin){let t=l.skins[e.skin],r=t.joints.map(e=>l.nodes[e].entity);1===l.meshes[e.mesh].primitives.length?e.entity.getComponent("Skin").set({joints:r}):e.entity.transform.children.forEach(e=>{// FIXME: currently we share the same Skin component
    // so this code is redundant after first child
    e.entity.getComponent("Skin").set({joints:r})})}}),l.animations&&l.animations.forEach(r=>{let n=function(e,t,r){// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/animation.schema.json
    // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/animation.channel.schema.json
    let n=e.channels.map(r=>{// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/animation.sampler.schema.json
    let n=e.samplers[r.sampler],o=fj(t.accessors[n.input],t.bufferViews),i=fj(t.accessors[n.output],t.bufferViews),a=t.nodes[r.target.node].entity,s=[],l=i._data,u=fU[i.type];"weights"===r.target.path&&(u=a.getComponent("Morph").weights.length);for(let e=0;e<l.length;e+=u)1===u&&s.push([l[e]]),2===u&&s.push([l[e],l[e+1]]),3===u&&s.push([l[e],l[e+1],l[e+2]]),4===u&&s.push([l[e],l[e+1],l[e+2],l[e+3]]);return{input:o._data,output:s,interpolation:n.interpolation,target:a,path:r.target.path}});return r.animation({channels:n,autoplay:!0,loop:!0})}(r,l,t);e.root.addComponent(n)}),t.update(),e))};var fH={};// TODO
// add positions documentation
// change index to offset so it's always up to date?
// allow int instead of bool
function fW(e){e=e||{},this.count=0;var t=e.size||32;this.positions=new Float32Array(t*(e.positions||3)),this.positionsIndex=0,e.colors&&(this.colors=new Float32Array(t*e.colors),this.colorsIndex=0),e.normals&&(this.normals=new Float32Array(t*e.normals),this.normalsIndex=0),e.uvs&&(this.uvs=new Float32Array(t*e.uvs),this.uvsIndex=0),e.cells&&(this.cells=new Uint16Array(t*e.cells),this.indexCount=0)}fW.prototype.addPosition=function(e){this.positionsIndex+e.length>=this.positions.length&&(this.positions=this._expandFloatArray(this.positions));for(var t=0;t<e.length;t++)this.positions[this.positionsIndex++]=e[t];this.count++},fW.prototype.addColor=function(e){this.colorsIndex+e.length>=this.colors.length&&(this.colors=this._expandFloatArray(this.colors));for(var t=0;t<e.length;t++)this.colors[this.colorsIndex++]=e[t]},fW.prototype.addNormal=function(e){this.normalsIndex+e.length>=this.normals.length&&(this.normals=this._expandFloatArray(this.normals));for(var t=0;t<e.length;t++)this.normals[this.normalsIndex++]=e[t]},fW.prototype.addUV=function(e){this.uvsIndex+e.length>=this.uvs.length&&(this.uvs=this._expandFloatArray(this.uvs));for(var t=0;t<e.length;t++)this.uvs[this.uvsIndex++]=e[t]},fW.prototype.addCell=function(e){this.indexCount+e.length>=this.cells.length&&(this.cells=this._expandUintArray(this.cells));for(var t=0;t<e.length;t++)this.cells[this.indexCount++]=e[t]},fW.prototype.reset=function(){this.positionsIndex=0,this.normals&&(this.normalsIndex=0),this.uvs&&(this.uvsIndex=0),this.colors&&(this.colorsIndex=0),this.cells&&(this.indexCount=0),this.count=0},fW.prototype._expandFloatArray=function(e){let t=new Float32Array(2*e.length);return t.set(e),t},fW.prototype._expandUintArray=function(e){let t=new Uint16Array(2*e.length);return t.set(e),t},fH=function(e){return new fW(e)};var fX={};fX=/* glsl */`
// Variables
attribute vec3 aPosition;

#ifdef USE_NORMALS
attribute vec3 aNormal;
#endif

#ifdef USE_TANGENTS
attribute vec4 aTangent;
varying vec4 vTangentView;
#endif

#ifdef USE_TEXCOORD_0
attribute vec2 aTexCoord0;
#endif

#ifdef USE_TEXCOORD_1
attribute vec2 aTexCoord1;
#endif

#ifdef USE_INSTANCED_OFFSET
attribute vec3 aOffset;
#endif

#ifdef USE_INSTANCED_SCALE
attribute vec3 aScale;
#endif

#ifdef USE_INSTANCED_ROTATION
attribute vec4 aRotation;
#endif

#ifdef USE_INSTANCED_COLOR
attribute vec4 aColor;
#endif

#ifdef USE_VERTEX_COLORS
attribute vec4 aVertexColor;
#endif

#if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)
varying vec4 vColor;
#endif

#ifdef USE_DISPLACEMENT_MAP
uniform sampler2D uDisplacementMap;
uniform mediump float uDisplacement;
#endif

#ifdef USE_SKIN
attribute vec4 aJoint;
attribute vec4 aWeight;
uniform mat4 uJointMat[NUM_JOINTS];
#endif

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;
uniform mat3 uNormalMatrix;
uniform mat4 uInverseViewMatrix;

uniform float uPointSize;

varying vec3 vNormalWorld;
varying vec3 vNormalView;
varying vec2 vTexCoord0;
#ifdef USE_TEXCOORD_1
varying vec2 vTexCoord1;
#endif
varying vec3 vPositionWorld;
varying vec3 vPositionView;

// Includes
${uN.math.transposeMat4}
${uN.math.quatToMat4}

void main() {
  vec4 position = vec4(aPosition, 1.0);
  vec3 normal = vec3(0.0, 0.0, 0.0);
  vec2 texCoord = vec2(0.0, 0.0);

#ifdef USE_NORMALS
  normal = aNormal;
#endif

#ifdef USE_TANGENTS
  vec4 tangent = aTangent;
#endif

#ifdef USE_TEXCOORD_0
  texCoord = aTexCoord0;
#endif

  vTexCoord0 = texCoord;

#ifdef USE_TEXCOORD_1
  vTexCoord1 = aTexCoord1;
#endif

#ifdef USE_DISPLACEMENT_MAP
  float h = texture2D(uDisplacementMap, aTexCoord0).r;
  position.xyz += uDisplacement * h * normal;
#endif

#ifdef USE_INSTANCED_SCALE
  position.xyz *= aScale;
#endif

#ifdef USE_INSTANCED_ROTATION
  mat4 rotationMat = quatToMat4(aRotation);
  position = rotationMat * position;

  normal = vec3(rotationMat * vec4(normal, 0.0));
#endif

#ifdef USE_INSTANCED_OFFSET
  position.xyz += aOffset;
#endif

#if defined(USE_VERTEX_COLORS) && defined(USE_INSTANCED_COLOR)
  vColor = aVertexColor * aColor;
#else
  #ifdef USE_INSTANCED_COLOR
    vColor = aColor;
  #endif

  #ifdef USE_VERTEX_COLORS
    vColor = aVertexColor;
  #endif
#endif

  vPositionWorld = vec3(uModelMatrix * position);
  vPositionView = vec3(uViewMatrix * vec4(vPositionWorld, 1.0));

#ifdef USE_SKIN
   mat4 skinMat =
    aWeight.x * uJointMat[int(aJoint.x)] +
    aWeight.y * uJointMat[int(aJoint.y)] +
    aWeight.z * uJointMat[int(aJoint.z)] +
    aWeight.w * uJointMat[int(aJoint.w)];

  vNormalView = vec3(uViewMatrix * skinMat * vec4(normal, 0.0));

  #ifdef USE_TANGENTS
    vTangentView.xyz = vec4(uViewMatrix * skinMat * vec4(tangent, 0.0));
    vTangentView.w = tangent.w;
  #endif

  vNormalWorld = normalize(vec3(uInverseViewMatrix * vec4(vNormalView, 0.0)));

  gl_Position = uProjectionMatrix * uViewMatrix * skinMat * position;
#else
  vNormalView = vec3(uNormalMatrix * normal);

  #ifdef USE_TANGENTS
    vTangentView.xyz = vec3(uNormalMatrix * tangent.xyz);
    vTangentView.w = tangent.w;
  #endif

  vNormalWorld = normalize(vec3(uInverseViewMatrix * vec4(vNormalView, 0.0)));

  gl_Position = uProjectionMatrix * vec4(vPositionView, 1.0);
#endif
  gl_PointSize = uPointSize;
}
`;var fK={};fK=/* glsl */`
#extension GL_OES_standard_derivatives : require
#ifdef USE_DRAW_BUFFERS
  #extension GL_EXT_draw_buffers : enable
#endif

precision mediump float;

// Variables
uniform highp mat4 uInverseViewMatrix;
uniform highp mat4 uViewMatrix;
uniform highp mat3 uNormalMatrix;
uniform highp mat4 uModelMatrix;

uniform vec3 uCameraPosition;

uniform int uOutputEncoding;

#ifdef USE_TONEMAPPING
  ${uN.tonemapUncharted2}
  uniform float uExposure;
#endif

varying vec3 vNormalWorld;
varying vec3 vNormalView;

varying vec2 vTexCoord0;
#ifdef USE_TEXCOORD_1
  varying vec2 vTexCoord1;
#endif

varying highp vec3 vPositionWorld;
varying highp vec3 vPositionView;

#ifdef USE_TANGENTS
  varying vec4 vTangentView;
#endif

#if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)
  varying vec4 vColor;
#endif

struct PBRData {
  mat4 inverseViewMatrix;
  vec2 texCoord0;
  vec2 texCoord1;
  vec3 normalView;
  vec4 tangentView;
  vec3 positionWorld;
  vec3 positionView;
  vec3 eyeDirView;
  vec3 eyeDirWorld;
  vec3 normalWorld; // N, world space
  vec3 viewWorld; // V, view vector from position to camera, world space
  float NdotV;

  vec3 baseColor;
  vec3 emissiveColor;
  float opacity;
  float roughness; // roughness value, as authored by the model creator (input to shader)
  float metallic; // metallic value at the surface
  float linearRoughness; // roughness mapped to a more linear change in the roughness (proposed by [2])
  vec3 f0; // Reflectance at normal incidence, specular color
  float clearCoatLinearRoughness;
  vec3 clearCoatNormal;
  vec3 reflectionWorld;
  vec3 directColor;
  vec3 diffuseColor; // color contribution from diffuse lighting
  vec3 indirectDiffuse; // contribution from IBL light probe and Ambient Light
  vec3 indirectSpecular; // contribution from IBL light probe and Area Light
};

// Includes
${uN.math.PI}
${uN.math.saturate}
${uN.rgbm}
${uN.gamma}
${uN.encodeDecode}
${uN.textureCoordinates}
${uN.baseColor}

#ifndef USE_UNLIT_WORKFLOW
  // Lighting
  ${uN.octMap}
  ${uN.depthUnpack}
  ${uN.normalPerturb}
  ${uN.irradiance}
  ${uN.shadowing}
  ${uN.brdf}
  ${uN.clearCoat}
  ${uN.indirect}
  ${uN.direct}
  ${uN.lightAmbient}
  ${uN.lightDirectional}
  ${uN.lightPoint}
  ${uN.lightSpot}
  ${uN.lightArea}

  // Material and geometric context
  ${uN.emissiveColor}
  ${uN.alpha}
  ${uN.ambientOcclusion}
  ${uN.normal}
  ${uN.metallicRoughness}
  ${uN.specularGlossiness}
#endif

void main() {
  vec3 color;

  PBRData data;
  data.texCoord0 = vTexCoord0;

  #ifdef USE_TEXCOORD_1
    data.texCoord1 = vTexCoord1;
  #endif

  #ifdef USE_UNLIT_WORKFLOW
    getBaseColor(data);

    color = data.baseColor;
  #else
    data.inverseViewMatrix = uInverseViewMatrix;
    data.positionWorld = vPositionWorld;
    data.positionView = vPositionView;
    // TODO: is normalization needed for normalView, tangentView, normalWorld?
    data.normalView = normalize(vNormalView);
    data.normalView *= float(gl_FrontFacing) * 2.0 - 1.0;
    #ifdef USE_TANGENTS
      data.tangentView = normalize(vTangentView);
      data.tangentView *= float(gl_FrontFacing) * 2.0 - 1.0;
    #endif
    data.normalWorld = normalize(vNormalWorld);
    data.normalWorld *= float(gl_FrontFacing) * 2.0 - 1.0;
    data.eyeDirView = normalize(-vPositionView);
    data.eyeDirWorld = vec3(uInverseViewMatrix * vec4(data.eyeDirView, 0.0));
    data.indirectDiffuse = vec3(0.0);
    data.indirectSpecular = vec3(0.0);
    data.opacity = 1.0;

    getNormal(data);
    getEmissiveColor(data);

    #ifdef USE_METALLIC_ROUGHNESS_WORKFLOW
      getBaseColor(data);
      getRoughness(data);
      // TODO: avoid disappearing highlights at roughness 0
      // data.roughness = 0.004 + 0.996 * data.roughness;
      data.roughness = clamp(data.roughness, MIN_ROUGHNESS, 1.0);
      getMetallic(data);

      // Compute F0 for both dielectric and metallic materials
      data.f0 = 0.16 * uReflectance * uReflectance * (1.0 - data.metallic) + data.baseColor.rgb * data.metallic;
      data.diffuseColor = data.baseColor * (1.0 - data.metallic);
    #endif
    #ifdef USE_SPECULAR_GLOSSINESS_WORKFLOW
      getBaseColorAndMetallicRoughnessFromSpecularGlossiness(data);
      data.diffuseColor = data.baseColor * (1.0 - data.metallic);
    #endif

    #ifdef USE_ALPHA_MAP
      #ifdef USE_ALPHA_MAP_TEX_COORD_TRANSFORM
        vec2 alphaTexCoord = getTextureCoordinates(data, ALPHA_MAP_TEX_COORD_INDEX, uAlphaMapTexCoordTransform);
      #else
        vec2 alphaTexCoord = getTextureCoordinates(data, ALPHA_MAP_TEX_COORD_INDEX);
      #endif
      data.opacity *= texture2D(uAlphaMap, alphaTexCoord).r;
    #endif
    #ifdef USE_ALPHA_TEST
      alphaTest(data);
    #endif

    data.linearRoughness = data.roughness * data.roughness;

    #ifdef USE_CLEAR_COAT
      data.clearCoatLinearRoughness = uClearCoatRoughness * uClearCoatRoughness;
      data.f0 = mix(data.f0, f0ClearCoatToSurface(data.f0), uClearCoat);
      data.roughness = max(data.roughness, uClearCoatRoughness);

      getClearCoatNormal(data);
    #endif

    // view vector in world space
    data.viewWorld = normalize(uCameraPosition - vPositionWorld);

    data.NdotV = abs(dot(data.normalWorld, data.viewWorld)) + FLT_EPS;

    float ao = 1.0;
    #ifdef USE_OCCLUSION_MAP
      #ifdef USE_OCCLUSION_MAP_TEX_COORD_TRANSFORM
        vec2 aoTexCoord = getTextureCoordinates(data, OCCLUSION_MAP_TEX_COORD_INDEX, uOcclusionMapTexCoordTransform);
      #else
        vec2 aoTexCoord = getTextureCoordinates(data, OCCLUSION_MAP_TEX_COORD_INDEX);
      #endif
      ao *= texture2D(uOcclusionMap, aoTexCoord).r;
    #endif
    #ifdef USE_AO
      vec2 vUV = vec2(gl_FragCoord.x / uScreenSize.x, gl_FragCoord.y / uScreenSize.y);
      ao *= texture2D(uAO, vUV).r;
    #endif

    //TODO: No kd? so not really energy conserving
    //we could use disney brdf for irradiance map to compensate for that like in Frostbite
    #ifdef USE_REFLECTION_PROBES
      data.reflectionWorld = reflect(-data.eyeDirWorld, data.normalWorld);
      EvaluateLightProbe(data, ao);
    #endif
    #if NUM_AMBIENT_LIGHTS > 0
      #pragma unroll_loop
      for (int i = 0; i < NUM_AMBIENT_LIGHTS; i++) {
        EvaluateAmbientLight(data, uAmbientLights[i], ao);
      }
    #endif
    #if NUM_DIRECTIONAL_LIGHTS > 0
      #pragma unroll_loop
      for (int i = 0; i < NUM_DIRECTIONAL_LIGHTS; i++) {
        EvaluateDirectionalLight(data, uDirectionalLights[i], uDirectionalLightShadowMaps[i]);
      }
    #endif
    #if NUM_POINT_LIGHTS > 0
      #pragma unroll_loop
      for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
        EvaluatePointLight(data, uPointLights[i], uPointLightShadowMaps[i]);
      }
    #endif
    #if NUM_SPOT_LIGHTS > 0
      #pragma unroll_loop
      for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
        EvaluateSpotLight(data, uSpotLights[i], uSpotLightShadowMaps[i]);
      }
    #endif
    #if NUM_AREA_LIGHTS > 0
      #pragma unroll_loop
      for (int i = 0; i < NUM_AREA_LIGHTS; i++) {
        EvaluateAreaLight(data, uAreaLights[i], ao);
      }
    #endif
    color = data.emissiveColor + data.indirectDiffuse + data.indirectSpecular + data.directColor;
    #ifdef USE_TONEMAPPING
      color.rgb *= uExposure;
      color.rgb = tonemapUncharted2(color.rgb);
    #endif
  #endif // USE_UNLIT_WORKFLOW

  gl_FragData[0] = encode(vec4(color, 1.0), uOutputEncoding);
  #ifdef USE_DRAW_BUFFERS
    gl_FragData[1] = encode(vec4(data.emissiveColor, 1.0), uOutputEncoding);
  #endif
  #ifdef USE_BLEND
    gl_FragData[0].a = data.opacity;
  #endif
}
`;var fY={};fY=/* glsl */`
// Variables
attribute vec3 aPosition;

#ifdef USE_NORMALS
attribute vec3 aNormal;
#endif

#ifdef USE_TEXCOORD_0
attribute vec2 aTexCoord0;
#endif

#ifdef USE_TEXCOORD_1
attribute vec2 aTexCoord1;
#endif

#ifdef USE_INSTANCED_OFFSET
attribute vec3 aOffset;
#endif

#ifdef USE_INSTANCED_SCALE
attribute vec3 aScale;
#endif

#ifdef USE_INSTANCED_ROTATION
attribute vec4 aRotation;
#endif

#ifdef USE_INSTANCED_COLOR
attribute vec4 aColor;
#endif

#ifdef USE_VERTEX_COLORS
attribute vec4 aVertexColor;
#endif

#if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)
varying vec4 vColor;
#endif

#ifdef USE_SKIN
attribute vec4 aJoint;
attribute vec4 aWeight;
uniform mat4 uJointMat[NUM_JOINTS];
#endif

#ifdef USE_DISPLACEMENT_MAP
uniform sampler2D uDisplacementMap;
uniform float uDisplacement;
#endif

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;
uniform mat3 uNormalMatrix;

uniform float uPointSize;

float uDisplacementShadowStretch = 1.3;

varying vec3 vNormalView;
varying vec2 vTexCoord0;
#ifdef USE_TEXCOORD_1
varying vec2 vTexCoord1;
#endif
varying vec3 vPositionView;

// Includes
${uN.math.transposeMat4}
${uN.math.quatToMat4}

void main() {
  vec4 position = vec4(aPosition, 1.0);
  vec3 normal = vec3(0.0, 0.0, 0.0);
  vec2 texCoord = vec2(0.0, 0.0);
  vec4 positionView = vec4(0.0);

  #ifdef USE_NORMALS
    normal = aNormal;
  #endif

  #ifdef USE_TEXCOORD_0
    texCoord = aTexCoord0;
  #endif

  vTexCoord0 = texCoord;

  #ifdef USE_TEXCOORD_1
    vTexCoord1 = aTexCoord1;
  #endif

  #ifdef USE_DISPLACEMENT_MAP
    float h = texture2D(uDisplacementMap, aTexCoord0).r;
    position.xyz += uDisplacement * h * normal * uDisplacementShadowStretch;
  #endif

  #ifdef USE_INSTANCED_SCALE
    position.xyz *= aScale;
  #endif

  #ifdef USE_INSTANCED_ROTATION
    mat4 rotationMat = quatToMat4(aRotation);
    position = rotationMat * position;
    normal = vec3(rotationMat * vec4(normal, 0.0));
  #endif

  #ifdef USE_INSTANCED_OFFSET
    position.xyz += aOffset;
  #endif

  #if defined(USE_VERTEX_COLORS) && defined(USE_INSTANCED_COLOR)
    vColor = aVertexColor * aColor;
  #else
    #ifdef USE_INSTANCED_COLOR
      vColor = aColor;
    #endif

    #ifdef USE_VERTEX_COLORS
      vColor = aVertexColor;
    #endif
  #endif

  #ifdef USE_SKIN
    mat4 skinMat =
      aWeight.x * uJointMat[int(aJoint.x)] +
      aWeight.y * uJointMat[int(aJoint.y)] +
      aWeight.z * uJointMat[int(aJoint.z)] +
      aWeight.w * uJointMat[int(aJoint.w)];

    positionView = uViewMatrix * skinMat * position;
  #else
    positionView = uViewMatrix * uModelMatrix * position;
  #endif

  gl_Position = uProjectionMatrix * positionView;
  gl_PointSize = uPointSize;

  vPositionView = positionView.xyz;
  vNormalView = normalize(uNormalMatrix * normal);
}
`;var fZ={};fZ=/* glsl */`
precision highp float;

// Variables
varying vec3 vNormalView;
varying vec2 vTexCoord0;
#ifdef USE_TEXCOORD_1
  varying vec2 vTexCoord1;
#endif
varying vec3 vPositionView;

#if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)
  varying vec4 vColor;
#endif

struct PBRData {
  vec2 texCoord0;
  vec2 texCoord1;
  float opacity;
};

// Includes
${uN.textureCoordinates}
${uN.baseColor}
${uN.alpha}
${uN.depthPack}

void main() {
  PBRData data;
  data.texCoord0 = vTexCoord0;

  #ifdef USE_TEXCOORD_1
    data.texCoord1 = vTexCoord1;
  #endif

  getBaseColor(data);

  #ifdef USE_ALPHA_MAP
    #ifdef ALPHA_MAP_TEX_COORD_TRANSFORM
      vec2 alphaTexCoord = getTextureCoordinates(data, ALPHA_MAP_TEX_COORD_INDEX, uAlphaMapTexCoordTransform);
    #else
      vec2 alphaTexCoord = getTextureCoordinates(data, ALPHA_MAP_TEX_COORD_INDEX);
    #endif
    data.opacity *= texture2D(uAlphaMap, alphaTexCoord).r;
  #endif

  #ifdef USE_ALPHA_TEST
    alphaTest(data);
  #endif

  float far = 10.0; // TODO: hardcoded far for depth pass
  gl_FragColor = packDepth(length(vPositionView) / far);
}
`;var fJ={};fJ=/* glsl */`
precision highp float;

// Variables
varying vec3 vNormalView;
varying vec2 vTexCoord0;
#ifdef USE_TEXCOORD_1
  varying vec2 vTexCoord1;
#endif
varying vec3 vPositionView;

#if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)
  varying vec4 vColor;
#endif

struct PBRData {
  vec2 texCoord0;
  vec2 texCoord1;
  float opacity;
};

// Includes
${uN.textureCoordinates}
${uN.baseColor}
${uN.alpha}

void main() {
  PBRData data;
  data.texCoord0 = vTexCoord0;

  #ifdef USE_TEXCOORD_1
    data.texCoord1 = vTexCoord1;
  #endif

  getBaseColor(data);

  #ifdef USE_ALPHA_MAP
    #ifdef USE_ALPHA_MAP_TEX_COORD_TRANSFORM
      vec2 alphaTexCoord = getTextureCoordinates(data, ALPHA_MAP_TEX_COORD_INDEX, uAlphaMapTexCoordTransform);
    #else
      vec2 alphaTexCoord = getTextureCoordinates(data, ALPHA_MAP_TEX_COORD_INDEX);
    #endif
    data.opacity *= texture2D(uAlphaMap, alphaTexCoord).r;
  #endif

  #ifdef USE_ALPHA_TEST
    alphaTest(data);
  #endif

  vec3 normal = vNormalView;
  normal *= float(gl_FrontFacing) * 2.0 - 1.0;

  gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
}
`;var fQ={};fQ=/* glsl */`
attribute vec2 aPosition;
attribute vec2 aTexCoord0;

uniform vec4 uBounds; // x, y, width, height

varying vec2 vTexCoord;

void main() {
  vec2 pos = aPosition;
  pos = (pos + 1.0) / 2.0; // move from -1..1 to 0..1
  pos = vec2(
    uBounds.x + pos.x * uBounds.z,
    uBounds.y + pos.y * uBounds.w
  );
  pos = pos * 2.0 - 1.0;
  gl_Position = vec4(pos, 0.0, 1.0);
  vTexCoord = aTexCoord0;
}
`;var f1={};f1=/* glsl */`
precision highp float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
    gl_FragColor = texture2D(uTexture, vTexCoord);
}
`;var f0={};f0=/* glsl */`
  attribute vec3 aPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uProjectionMatrix;
  uniform mat4 uViewMatrix;

  varying vec4 vColor;

  void main () {
    vColor = aVertexColor;
    gl_Position = uProjectionMatrix * uViewMatrix * vec4(aPosition, 1.0);
  }
`;var f2={};f2=/* glsl */`
#ifdef USE_DRAW_BUFFERS
  #extension GL_EXT_draw_buffers : enable
#endif
#ifdef GL_ES
precision highp float;
#endif

#ifdef USE_DRAW_BUFFERS
${uN.gamma}
${uN.rgbm}
${uN.encodeDecode}
uniform int uOutputEncoding;
#endif

varying vec4 vColor;

void main () {
#ifdef USE_DRAW_BUFFERS
  gl_FragData[0] = encode(vec4(vColor.rgb * 3.0, 1.0), uOutputEncoding);
  gl_FragData[1] = vec4(0.0);
#else
  gl_FragData[0] = vColor;
#endif
}
`;var f3={};f3=/* glsl */`
attribute vec3 aPosition;

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;

void main () {
  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1.0);
}
`;var f9={};f9=/* glsl */`
precision mediump float;

void main () {
  gl_FragData[0] = vec4(1.0, 0.0, 0.0, 1.0);
}
`;let f4=new Map().set([".gltf",".glb"],fA),f5=Array.from(f4.entries());var f6={frame:0,shadowQuality:2,debug:!1,profile:!1,profiler:null,paused:!1,rgbm:!1};function f8(e){return null==e}// TODO remove, should be in AABB
function f7(e){return lK.isEmpty(e)?[]:[[e[0][0],e[0][1],e[0][2],1],[e[1][0],e[0][1],e[0][2],1],[e[1][0],e[0][1],e[1][2],1],[e[0][0],e[0][1],e[1][2],1],[e[0][0],e[1][1],e[0][2],1],[e[1][0],e[1][1],e[0][2],1],[e[1][0],e[1][1],e[1][2],1],[e[0][0],e[1][1],e[1][2],1]]}// opts = Context
// opts = { ctx: Context, width: Number, height: Number, profile: Boolean }
function de(e){this.entities=[],this.root=this.entity(),// check if we passed gl context or options object
e=e.texture2D?{ctx:e}:e;let t=this._ctx=e.ctx,r=e.ctx.gl;r.getExtension("OES_standard_derivatives"),this._dummyTexture2D=t.texture2D({width:4,height:4}),this._dummyTextureCube=t.textureCube({width:4,height:4}),this._defaultMaterial=uy({ctx:t,unlit:!0,baseColor:[1,0,0,1]}),this._debug=!1,this._programCacheMap={values:[],getValue:function(e,t,r){for(var n=0;n<this.values.length;n++){var o=this.values[n];if(o.frag===r&&o.vert===t&&o.flags.length===e.length){for(var i=!0,a=0;a<e.length;a++)if(o.flags[a]!==e[a]){i=!1;break}if(i)return o.program}}return!1},setValue:function(e,t,r,n){this.values.push({flags:e,vert:t,frag:r,program:n})}},e.profile&&(f6.profiler=lQ(e.ctx,this),f6.profiler.flush=e.profileFlush),e.pauseOnBlur&&s8&&(window.addEventListener("focus",()=>{f6.paused=!1}),window.addEventListener("blur",()=>{f6.paused=!0})),// TODO: move from State object to internal probs and renderer({ opts }) setter?
Object.assign(f6,e),this._state=f6,this.shaders={chunks:uN,pipeline:{depthPrePass:{vert:fY,frag:fJ},depthPass:{vert:fY,frag:fZ},material:{vert:fX,frag:fK}}},this.helperPositionVBuffer=t.vertexBuffer({data:[0,0,0]}),this.helperColorVBuffer=t.vertexBuffer({data:[0,0,0,0]}),this.drawHelperLinesCmd={pipeline:t.pipeline({vert:`
        ${f0}
        `,frag:`
        ${f2}
        `,depthTest:!0,primitive:t.Primitive.Lines}),attributes:{aPosition:this.helperPositionVBuffer,aVertexColor:this.helperColorVBuffer},count:1},this.drawHelperLinesPostProcCmd={pipeline:t.pipeline({vert:`
        ${f0}
        `,frag:`       
        ${t.capabilities.maxColorAttachments>1?"#define USE_DRAW_BUFFERS":""}
        ${f2}
        `,depthTest:!0,primitive:t.Primitive.Lines}),attributes:{aPosition:this.helperPositionVBuffer,aVertexColor:this.helperColorVBuffer},count:1}}de.prototype.updateDirectionalLightShadowMap=function(e,t){let r=this._ctx,n=e.entity.transform.worldPosition,o=[0,0,1,0],i=[0,1,0,0];lH.multMat4(o,e.entity.transform.modelMatrix),lq.add(o,n),lH.multMat4(i,e.entity.transform.modelMatrix),lX.lookAt(e._viewMatrix,n,o,i);let a=t.reduce((e,t)=>e.concat(f7(t.entity.transform.worldBounds)),[]),s=a.map(t=>lq.multMat4(lq.copy(t),e._viewMatrix)),l=lK.fromPoints(s),u=-l[1][2],c=-l[0][2];e.set({_near:u,_far:c}),lX.ortho(e._projectionMatrix,l[0][0],l[1][0],l[0][1],l[1][1],u,c),r.submit(e._shadowMapDrawCommand,()=>{this.drawMeshes(null,!0,e,t)})},de.prototype.updateSpotLightShadowMap=function(e,t){let r=e.entity.transform.worldPosition,n=[0,0,1,0],o=[0,1,0,0];lH.multMat4(n,e.entity.transform.modelMatrix),// vec3.add(target, position)
lH.multMat4(o,e.entity.transform.modelMatrix),lX.lookAt(e._viewMatrix,r,n,o);let i=t.reduce((e,t)=>e.concat(f7(t.entity.transform.worldBounds)),[]),a=i.map(t=>lq.multMat4(lq.copy(t),e._viewMatrix)),s=lK.fromPoints(a),l=-s[1][2],u=-s[0][2];e.set({_near:l,_far:u}),lX.perspective(e._projectionMatrix,2*e.angle,e._shadowMap.width/e._shadowMap.height,l,u);let c=this._ctx;c.submit(e._shadowMapDrawCommand,()=>{this.drawMeshes(null,!0,e,t)})},de.prototype.updatePointLightShadowMap=function(e,t){let r=this._ctx;e._sides.forEach(n=>{var o=[0,0,0];r.submit(n.drawPassCmd,()=>{let r=e.entity.transform.worldPosition;lq.set(o,r),lq.add(o,n.target),lX.lookAt(n.viewMatrix,r,o,n.up);var i={_projectionMatrix:n.projectionMatrix,_viewMatrix:n.viewMatrix};this.drawMeshes(null,!0,i,t)})})},de.prototype.parseShader=function(e,t){return e=e.replace(/#pragma unroll_loop[\s]+?for \(int i = (\d+); i < (\d+|\D+); i\+\+\) \{([\s\S]+?)(?=\})\}/g,function(e,r,n,o){let i="";// Replace lights number
n=n.replace(/NUM_AMBIENT_LIGHTS/g,t.numAmbientLights||0).replace(/NUM_DIRECTIONAL_LIGHTS/g,t.numDirectionalLights||0).replace(/NUM_POINT_LIGHTS/g,t.numPointLights||0).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights||0).replace(/NUM_AREA_LIGHTS/g,t.numAreaLights||0);for(let e=Number.parseInt(r);e<Number.parseInt(n);e++)i+=o.replace(/\[i\]/g,`[${e}]`);return i})},de.prototype.getMaterialProgramAndFlags=function(e,t,r,n){var o=this._ctx,i=[];return(e._attributes.aNormal?i.push("#define USE_NORMALS"):i.push("#define USE_UNLIT_WORKFLOW"),e._attributes.aTangent&&i.push("#define USE_TANGENTS"),e._attributes.aTexCoord0&&i.push("#define USE_TEXCOORD_0"),e._attributes.aTexCoord1&&i.push("#define USE_TEXCOORD_1"),e._attributes.aOffset&&i.push("#define USE_INSTANCED_OFFSET"),e._attributes.aScale&&i.push("#define USE_INSTANCED_SCALE"),e._attributes.aRotation&&i.push("#define USE_INSTANCED_ROTATION"),e._attributes.aColor&&i.push("#define USE_INSTANCED_COLOR"),e._attributes.aVertexColor&&i.push("#define USE_VERTEX_COLORS"),n.useSSAO&&i.push("#define USE_AO"),t.displacementMap&&i.push("#define USE_DISPLACEMENT_MAP"),r&&(i.push("#define USE_SKIN"),i.push("#define NUM_JOINTS "+r.joints.length)),o.capabilities.maxColorAttachments>1&&i.push("#define USE_DRAW_BUFFERS"),t.baseColorMap&&(i.push("#define USE_BASE_COLOR_MAP"),t.baseColor||(t.baseColor=[1,1,1,1]),i.push(`#define BASE_COLOR_MAP_TEX_COORD_INDEX ${t.baseColorMap.texCoord||0}`),t.baseColorMap.texCoordTransformMatrix&&i.push("#define USE_BASE_COLOR_MAP_TEX_COORD_TRANSFORM")),t.alphaMap&&(i.push("#define USE_ALPHA_MAP"),i.push(`#define ALPHA_MAP_TEX_COORD_INDEX ${t.alphaMap.texCoord||0}`),t.alphaMap.texCoordTransformMatrix&&i.push("#define USE_ALPHA_MAP_TEX_COORD_TRANSFORM")),t.alphaTest&&i.push("#define USE_ALPHA_TEST"),n.depthPrePassOnly)?(i.push("#define DEPTH_PRE_PASS_ONLY"),i.push("#define SHADOW_QUALITY 0"),i.push("#define NUM_AMBIENT_LIGHTS 0"),i.push("#define NUM_DIRECTIONAL_LIGHTS 0"),i.push("#define NUM_POINT_LIGHTS 0"),i.push("#define NUM_SPOT_LIGHTS 0"),i.push("#define NUM_AREA_LIGHTS 0"),{flags:i,vert:t.vert||fY,frag:t.frag||fJ}):n.depthPassOnly?(i.push("#define DEPTH_PASS_ONLY"),i.push("#define SHADOW_QUALITY 0"),i.push("#define NUM_AMBIENT_LIGHTS 0"),i.push("#define NUM_DIRECTIONAL_LIGHTS 0"),i.push("#define NUM_POINT_LIGHTS 0"),i.push("#define NUM_SPOT_LIGHTS 0"),i.push("#define NUM_AREA_LIGHTS 0"),{flags:i,vert:t.vert||fY,frag:t.frag||fZ}):(i.push("#define SHADOW_QUALITY "+(t.receiveShadows?f6.shadowQuality:0)),t.unlit?-1===i.indexOf("#define USE_UNLIT_WORKFLOW")&&i.push("#define USE_UNLIT_WORKFLOW"):t.useSpecularGlossinessWorkflow?(i.push("#define USE_SPECULAR_GLOSSINESS_WORKFLOW"),t.diffuseMap&&(i.push("#define USE_DIFFUSE_MAP"),i.push(`#define DIFFUSE_MAP_TEX_COORD_INDEX ${t.diffuseMap.texCoord||0}`),t.diffuseMap.texCoordTransformMatrix&&i.push("#define USE_DIFFUSE_MAP_TEX_COORD_TRANSFORM")),t.specularGlossinessMap&&(i.push("#define USE_SPECULAR_GLOSSINESS_MAP"),i.push(`#define SPECULAR_GLOSSINESS_MAP_TEX_COORD_INDEX ${t.specularGlossinessMap.texCoord||0}`),t.specularGlossinessMap.texCoordTransformMatrix&&i.push("#define USE_SPECULAR_GLOSSINESS_MAP_TEX_COORD_TRANSFORM"))):(i.push("#define USE_METALLIC_ROUGHNESS_WORKFLOW"),t.metallicMap&&(i.push("#define USE_METALLIC_MAP"),i.push(`#define METALLIC_MAP_TEX_COORD_INDEX ${t.metallicMap.texCoord||0}`),t.metallicMap.texCoordTransformMatrix&&i.push("#define USE_METALLIC_MAP_TEX_COORD_TRANSFORM")),t.roughnessMap&&(i.push("#define USE_ROUGHNESS_MAP"),i.push(`#define ROUGHNESS_MAP_TEX_COORD_INDEX ${t.roughnessMap.texCoord||0}`),t.roughnessMap.texCoordTransformMatrix&&i.push("#define USE_ROUGHNESS_MAP_TEX_COORD_TRANSFORM")),t.metallicRoughnessMap&&(i.push("#define USE_METALLIC_ROUGHNESS_MAP"),i.push(`#define METALLIC_ROUGHNESS_MAP_TEX_COORD_INDEX ${t.metallicRoughnessMap.texCoord||0}`),t.metallicRoughnessMap.texCoordTransformMatrix&&i.push("#define USE_METALLIC_ROUGHNESS_MAP_TEX_COORD_TRANSFORM"))),t.occlusionMap&&(i.push("#define USE_OCCLUSION_MAP"),i.push(`#define OCCLUSION_MAP_TEX_COORD_INDEX ${t.occlusionMap.texCoord||0}`),t.occlusionMap.texCoordTransformMatrix&&i.push("#define USE_OCCLUSION_MAP_TEX_COORD_TRANSFORM")),t.normalMap&&(i.push("#define USE_NORMAL_MAP"),i.push(`#define NORMAL_MAP_TEX_COORD_INDEX ${t.normalMap.texCoord||0}`),t.normalMap.texCoordTransformMatrix&&i.push("#define USE_NORMAL_MAP_TEX_COORD_TRANSFORM")),t.emissiveColorMap&&(i.push("#define USE_EMISSIVE_COLOR_MAP"),i.push(`#define EMISSIVE_COLOR_MAP_TEX_COORD_INDEX ${t.emissiveColorMap.texCoord||0}`),t.emissiveColorMap.texCoordTransformMatrix&&i.push("#define USE_EMISSIVE_COLOR_MAP_TEX_COORD_TRANSFORM")),f8(t.emissiveColor)||i.push("#define USE_EMISSIVE_COLOR"),f8(t.clearCoat)||i.push("#define USE_CLEAR_COAT"),t.clearCoatNormalMap&&(i.push("#define USE_CLEAR_COAT_NORMAL_MAP"),i.push(`#define CLEAR_COAT_NORMAL_MAP_TEX_COORD_INDEX ${t.clearCoatNormalMap.texCoord||0}`),t.clearCoatNormalMap.texCoordTransformMatrix&&i.push("#define USE_CLEAR_COAT_NORMAL_MAP_TEX_COORD_TRANSFORM")),t.blend&&i.push("#define USE_BLEND"),i.push("#define NUM_AMBIENT_LIGHTS "+(n.numAmbientLights||0)),i.push("#define NUM_DIRECTIONAL_LIGHTS "+(n.numDirectionalLights||0)),i.push("#define NUM_POINT_LIGHTS "+(n.numPointLights||0)),i.push("#define NUM_SPOT_LIGHTS "+(n.numSpotLights||0)),i.push("#define NUM_AREA_LIGHTS "+(n.numAreaLights||0)),n.useReflectionProbes&&i.push("#define USE_REFLECTION_PROBES"),n.useTonemapping&&i.push("#define USE_TONEMAPPING"),{flags:i,vert:t.vert||fX,frag:t.frag||fK})},de.prototype.buildProgram=function(e,t){var r=this._ctx;let n=null;try{n=r.program({vert:e,frag:t})}catch(e){throw console.error("pex-renderer glsl error",e),n=r.program({vert:f3,frag:f9}),e}return n},de.prototype.getMaterialProgram=function(e,t,r,n){var{flags:o,vert:i,frag:a}=this.getMaterialProgramAndFlags(e,t,r,n),s=o.join("\n")+"\n",l=s+i,u=s+a,c=this._programCacheMap.getValue(o,i,a);return c||(c=this.buildProgram(this.parseShader(l,n),this.parseShader(u,n)),this._programCacheMap.setValue(o,i,a,c)),c},de.prototype.traverseTransformTree=function(e,t,r){e.enabled&&(t(e),e.children.forEach(e=>{this.traverseTransformTree(e,t,r)}),r&&r(e))},de.prototype.update=function(){this.entities=[],this.traverseTransformTree(this.root.transform,e=>{this.entities.push(e.entity),e.entity.components.forEach(e=>{e.update&&e.update()})},e=>{e.entity.components.forEach(e=>{e.afterUpdate&&e.afterUpdate()})})},de.prototype.getGeometryPipeline=function(e,t,r,n){let o=this._ctx,i=this.getMaterialProgram(e,t,r,n);this._pipelineCache||(this._pipelineCache={});// TODO: better pipeline caching
let a=t.id+"_"+i.id+"_"+e.primitive,s=this._pipelineCache[a];return(!s||t.needsPipelineUpdate)&&(t.needsPipelineUpdate=!1,s=o.pipeline({program:i,depthTest:t.depthTest,depthWrite:t.depthWrite,depthFunc:t.depthFunc,blend:t.blend,blendSrcRGBFactor:t.blendSrcRGBFactor,blendSrcAlphaFactor:t.blendSrcAlphaFactor,blendDstRGBFactor:t.blendDstRGBFactor,blendDstAlphaFactor:t.blendDstAlphaFactor,cullFace:t.cullFace,cullFaceMode:t.cullFaceMode,primitive:e.primitive}),this._pipelineCache[a]=s),s},de.prototype.getOverlayCommand=function(){let e=this._ctx;if(!this._drawOverlayCmd){let t=e.program({vert:fQ,frag:f1});this._drawOverlayCmd={name:"DrawOverlayCmd",attributes:{aPosition:e.vertexBuffer([[-1,-1],[1,-1],[1,1],[-1,1]]),aTexCoord0:e.vertexBuffer([[0,0],[1,0],[1,1],[0,1]])},indices:e.indexBuffer([[0,1,2],[0,2,3]]),pipeline:e.pipeline({program:t,depthTest:!1,depthWrite:!1,blend:!0,blendSrcRGBFactor:e.BlendFactor.One,blendDstRGBFactor:e.BlendFactor.OneMinusSrcAlpha,blendSrcAlphaFactor:e.BlendFactor.One,blendDstAlphaFactor:e.BlendFactor.OneMinusSrcAlpha,cullFace:!0,cullFaceMode:e.Face.Back,primitive:e.Primitive.Triangles})}}return this._drawOverlayCmd},de.prototype.getComponents=function(e){let t=[];for(let r=0;r<this.entities.length;r++){let n=this.entities[r],o=n.getComponent(e);o&&t.push(o)}return t},// sort meshes by material
// do material search by props not string concat
// set global uniforms like lights once
// set update transforms once per frame
// draw + shadowmap @ 1000 objects x 30 uniforms = 60'000 setters / frame!!
// transform feedback?
de.prototype.drawMeshes=function(e,t,r,n,o,i){let a=this._ctx;function s(t){return!!t.enabled&&(!e||!e.entity||!e.entity.tags.length||!t.entity.tags.length||t.entity.tags[0]===e.entity.tags[0])}n=n||this.getComponents("Geometry").filter(s);let l=this.getComponents("AmbientLight").filter(s),u=this.getComponents("DirectionalLight").filter(s),c=this.getComponents("PointLight").filter(s),f=this.getComponents("SpotLight").filter(s),d=this.getComponents("AreaLight").filter(s),p=this.getComponents("ReflectionProbe").filter(s);t||r||(u.forEach(e=>{if(e.castShadows){let t=n.filter(e=>{let t=e.entity.getComponent("Material");return t&&t.castShadows});this.updateDirectionalLightShadowMap(e,t)}}),c.forEach(e=>{if(e.castShadows){let t=n.filter(e=>{let t=e.entity.getComponent("Material");return t&&t.castShadows});this.updatePointLightShadowMap(e,t)}}),f.forEach(e=>{if(e.castShadows){let t=n.filter(e=>{let t=e.entity.getComponent("Material");return t&&t.castShadows});this.updateSpotLightShadowMap(e,t)}}));var h=this._sharedUniforms=this._sharedUniforms||{};if(h.uOutputEncoding=f6.rgbm?a.Encoding.RGBM:a.Encoding.Linear// TODO: State.postprocess
,i&&(h.uOutputEncoding=a.Encoding.Gamma),p.length>0&&(h.uReflectionMap=p[0]._reflectionMap,h.uReflectionMapEncoding=p[0]._reflectionMap.encoding),r?(h.uProjectionMatrix=r._projectionMatrix,h.uViewMatrix=r._viewMatrix):(h.uCameraPosition=e.entity.transform.worldPosition,h.uProjectionMatrix=e.projectionMatrix,h.uViewMatrix=e.viewMatrix,h.uInverseViewMatrix=e.inverseViewMatrix),e){let t=e.entity.getComponent("PostProcessing");t&&t.ssao&&(h.uAO=t._frameAOTex,h.uScreenSize=[e.viewport[2],e.viewport[3]]// TODO: should this be camera viewport size?
),t&&t.enabled||(h.uExposure=e.exposure)}l.forEach((e,t)=>{h["uAmbientLights["+t+"].color"]=e.color}),u.forEach((e,t)=>{let r=[0,0,1,0]// TODO: GC
,n=[0,0,0];lH.multMat4(r,e.entity.transform.modelMatrix),lq.set(n,r),h["uDirectionalLights["+t+"].direction"]=n,h["uDirectionalLights["+t+"].color"]=e.color,h["uDirectionalLights["+t+"].castShadows"]=e.castShadows,h["uDirectionalLights["+t+"].projectionMatrix"]=e._projectionMatrix,h["uDirectionalLights["+t+"].viewMatrix"]=e._viewMatrix,h["uDirectionalLights["+t+"].near"]=e._near,h["uDirectionalLights["+t+"].far"]=e._far,h["uDirectionalLights["+t+"].bias"]=e.bias,h["uDirectionalLights["+t+"].shadowMapSize"]=e.castShadows?[e._shadowMap.width,e._shadowMap.height]:[0,0],h["uDirectionalLightShadowMaps["+t+"]"]=e.castShadows?e._shadowMap:this._dummyTexture2D}),c.forEach((e,t)=>{h["uPointLights["+t+"].position"]=e.entity.transform.worldPosition,h["uPointLights["+t+"].color"]=e.color,h["uPointLights["+t+"].range"]=e.range,h["uPointLights["+t+"].castShadows"]=e.castShadows,h["uPointLightShadowMaps["+t+"]"]=e.castShadows?e._shadowCubemap:this._dummyTextureCube}),f.forEach((e,t)=>{let r=[0,0,1,0]// TODO: GC
,n=[0,0,0];lH.multMat4(r,e.entity.transform.modelMatrix),lq.set(n,r),h["uSpotLights["+t+"].position"]=e.entity.transform.position,h["uSpotLights["+t+"].direction"]=n,h["uSpotLights["+t+"].color"]=e.color,h["uSpotLights["+t+"].angle"]=e.angle,h["uSpotLights["+t+"].innerAngle"]=e.innerAngle,h["uSpotLights["+t+"].range"]=e.range,h["uSpotLights["+t+"].castShadows"]=e.castShadows,h["uSpotLights["+t+"].projectionMatrix"]=e._projectionMatrix,h["uSpotLights["+t+"].viewMatrix"]=e._viewMatrix,h["uSpotLights["+t+"].near"]=e._near,h["uSpotLights["+t+"].far"]=e._far,h["uSpotLights["+t+"].bias"]=e.bias,h["uSpotLights["+t+"].shadowMapSize"]=e.castShadows?[e._shadowMap.width,e._shadowMap.height]:[0,0],h["uSpotLightShadowMaps["+t+"]"]=e.castShadows?e._shadowMap:this._dummyTexture2D}),d.forEach((e,t)=>{h.ltc_mat=e.ltc_mat_texture,h.ltc_mag=e.ltc_mag_texture,h["uAreaLights["+t+"].position"]=e.entity.transform.position,h["uAreaLights["+t+"].color"]=e.color,h["uAreaLights["+t+"].intensity"]=e.intensity// FIXME: why area light has intensity and other lights don't?
,h["uAreaLights["+t+"].rotation"]=e.entity.transform.rotation,h["uAreaLights["+t+"].size"]=[e.entity.transform.scale[0]/2,e.entity.transform.scale[1]/2]}),n.sort((e,t)=>{var r=e.entity.getComponent("Material")||this._defaultMaterial,n=t.entity.getComponent("Material")||this._defaultMaterial;return(r.blend?1:0)-(n.blend?1:0)});var m=n.findIndex(e=>(e.entity.getComponent("Material")||this._defaultMaterial).blend);for(let i=0;i<n.length;i++){m===i&&o&&o.enabled&&o.draw(e,{outputEncoding:h.uOutputEncoding,backgroundMode:!0});let s=n[i],b=s.entity.transform;if(!b.enabled||!s._attributes.aPosition)continue;let x=s.entity.getComponent("Material")||this._defaultMaterial;if(!x.enabled||x.blend&&t)continue;let w=s.entity.getComponent("Skin"),S=x._uniforms;if(x.baseColorMap&&(S.uBaseColorMap=x.baseColorMap.texture||x.baseColorMap,x.baseColorMap.texCoordTransformMatrix&&(S.uBaseColorMapTexCoordTransform=x.baseColorMap.texCoordTransformMatrix)),S.uBaseColor=x.baseColor,x.emissiveColorMap&&(S.uEmissiveColorMap=x.emissiveColorMap.texture||x.emissiveColorMap,x.emissiveColorMap.texCoordTransformMatrix&&(S.uEmissiveColorMapTexCoordTransform=x.emissiveColorMap.texCoordTransformMatrix)),f8(x.emissiveColor)||(S.uEmissiveColor=x.emissiveColor,S.uEmissiveIntensity=x.emissiveIntensity),x.useSpecularGlossinessWorkflow?(x.diffuse&&(S.uDiffuse=x.diffuse),x.specular&&(S.uSpecular=x.specular),f8(x.glossiness)||(S.uGlossiness=x.glossiness),x.diffuseMap&&(S.uDiffuseMap=x.diffuseMap.texture||x.diffuseMap,x.diffuseMap.texCoordTransformMatrix&&(S.uDiffuseMapTexCoordTransform=x.diffuseMap.texCoordTransformMatrix)),x.specularGlossinessMap&&(S.uSpecularGlossinessMap=x.specularGlossinessMap.texture||x.specularGlossinessMap,x.specularGlossinessMap.texCoordTransformMatrix&&(S.uSpecularGlossinessMapTexCoordTransform=x.specularGlossinessMap.texCoordTransformMatrix))):!x.unlit&&(x.metallicMap&&(S.uMetallicMap=x.metallicMap.texture||x.metallicMap,x.metallicMap.texCoordTransformMatrix&&(S.uMetallicMapTexCoordTransform=x.metallicMap.texCoordTransformMatrix)),f8(x.metallic)||(S.uMetallic=x.metallic),x.roughnessMap&&(S.uRoughnessMap=x.roughnessMap.texture||x.roughnessMap,x.roughnessMap.texCoordTransformMatrix&&(S.uRoughnessMapTexCoordTransform=x.roughnessMap.texCoordTransformMatrix)),f8(x.roughness)||(S.uRoughness=x.roughness),x.metallicRoughnessMap&&(S.uMetallicRoughnessMap=x.metallicRoughnessMap.texture||x.metallicRoughnessMap,x.metallicRoughnessMap.texCoordTransformMatrix&&(S.uMetallicRoughnessMapTexCoordTransform=x.metallicRoughnessMap.texCoordTransformMatrix))),S.uReflectance=x.reflectance,f8(x.clearCoat)||(S.uClearCoat=x.clearCoat,S.uClearCoatRoughness=x.clearCoatRoughness||.04),x.clearCoatNormalMap&&(S.uClearCoatNormalMap=x.clearCoatNormalMap.texture||x.clearCoatNormalMap,x.clearCoatNormalMap.texCoordTransformMatrix&&(S.uClearCoatNormalMapTexCoordTransform=x.clearCoatNormalMap.texCoordTransformMatrix),S.uClearCoatNormalMapScale=x.clearCoatNormalMapScale),x.normalMap&&(S.uNormalMap=x.normalMap.texture||x.normalMap,S.uNormalScale=x.normalScale,x.normalMap.texCoordTransformMatrix&&(S.uNormalMapTexCoordTransform=x.normalMap.texCoordTransformMatrix)),x.occlusionMap&&(S.uOcclusionMap=x.occlusionMap.texture||x.occlusionMap,x.occlusionMap.texCoordTransformMatrix&&(S.uOcclusionMapTexCoordTransform=x.occlusionMap.texCoordTransformMatrix)),x.displacementMap&&(S.uDisplacementMap=x.displacementMap,S.uDisplacement=x.displacement),x.alphaMap&&(S.uAlphaMap=x.alphaMap.texture||x.alphaMap,x.alphaMap.texCoordTransformMatrix&&(S.uAlphaMapTexCoordTransform=x.alphaMap.texCoordTransformMatrix)),x.uniforms)for(var g in x.uniforms)h[g]=x.uniforms[g];w&&(S.uJointMat=w.jointMatrices);let _=null;if(t&&!r)_=this.getGeometryPipeline(s,x,w,{depthPrePassOnly:!0});else if(t)_=this.getGeometryPipeline(s,x,w,{depthPassOnly:!0});else{let t=e.entity.getComponent("PostProcessing");_=this.getGeometryPipeline(s,x,w,{numAmbientLights:l.length,numDirectionalLights:u.length,numPointLights:c.length,numSpotLights:f.length,numAreaLights:d.length,useReflectionProbes:p.length,useSSAO:t&&t.enabled&&t.ssao,useTonemapping:!(t&&t.enabled)})}void 0!==x.alphaTest&&(h.uAlphaTest=x.alphaTest),h.uPointSize=x.pointSize,// TODO: shared uniforms HUH?
// if (meshProgram !== prevProgram) {
// prevProgram = meshProgram
// // this is a bit hacky but prevents checking the same uniforms over and over again
// // this would be even better if we sort meshes by material
Object.assign(S,h),// }
S.uModelMatrix=b.modelMatrix,v=r?r._viewMatrix:e.viewMatrix;var v,y=lX.copy(v);lX.mult(y,b.modelMatrix),lX.invert(y),lX.transpose(y),S.uNormalMatrix=lW.fromMat4(lW.create(),y),a.submit({name:"drawGeometry",attributes:s._attributes,indices:s._indices,count:s.count,pipeline:_,uniforms:S,instances:s.instances})}-1===m&&o&&o.enabled&&o.draw(e,{outputEncoding:h.uOutputEncoding,backgroundMode:!0})},de.prototype.drawHelpers=function(e,t,r){function n(t){return!!t.enabled&&(!e||!e.entity||!e.entity.tags.length||!t.entity.tags.length||t.entity.tags[0]===e.entity.tags[0])}let o=!1,i=fH({colors:1,positions:1}),a=this.getComponents("BoundingBoxHelper").filter(n);if(a.forEach(e=>{e.draw(i),o=!0}),//light helper
(a=this.getComponents("LightHelper").filter(n)).forEach(e=>{e.draw(i),o=!0}),//camera helper
(a=this.getComponents("CameraHelper").filter(n)).forEach(t=>{t.draw(i,e),o=!0}),//grid helper
(a=this.getComponents("GridHelper").filter(n)).forEach(t=>{t.draw(i,e),o=!0}),//axis helper
(a=this.getComponents("AxisHelper").filter(n)).forEach(e=>{e.draw(i),o=!0}),o){let n=f6.rgbm?r.Encoding.RGBM:r.Encoding.Linear// TODO: State.postprocess
;r.update(this.helperPositionVBuffer,{data:i.positions}),r.update(this.helperColorVBuffer,{data:i.colors});let o=t?this.drawHelperLinesPostProcCmd:this.drawHelperLinesCmd;o.count=i.count,r.submit(o,{uniforms:{uProjectionMatrix:e.projectionMatrix,uViewMatrix:e.viewMatrix,uOutputEncoding:n},viewport:e.viewport})}},de.prototype.draw=function(){let e=this._ctx;if(!f6.paused){this.update(),f6.profiler&&f6.profiler.startFrame();var t=this.getComponents("Camera"),r=this.getComponents("Overlay"),n=this.getComponents("Skybox");// TODO: update light probes
/*
  if (!vec3.equals(State.prevSunPosition, State.sunPosition)) {
    vec3.set(State.prevSunPosition, State.sunPosition)

    // TODO: update sky only if it's used
    // TODO: implement
    if (State.skyEnvMap) {
      this._skybox.setEnvMap(State.skyEnvMap)
    } else {
      this._skyEnvMapTex.setSunPosition(State.sunPosition)
      this._skybox.setEnvMap(this._skyEnvMapTex.texture)
    }
  }
  */this.getComponents("ReflectionProbe").forEach(e=>{// TODO: this should be just node.reflectionProbe
e.dirty&&e.update((e,t)=>{n.length>0&&n[0].draw(e,{outputEncoding:t,backgroundMode:!1})})}),// draw scene
t.filter(e=>e.enabled).forEach(t=>{let r=[t.viewport[2],t.viewport[3]];t.viewport[2],t.viewport[3],t.viewport[2],t.viewport[3];let o=t.entity.getComponent("PostProcessing");if(o&&o.enabled&&(f6.profiler&&f6.profiler.time("depthPrepass",!0),e.submit(o._drawFrameNormalsFboCommand,()=>{let e=t.far;// TODO: Far clipping plane scaling fixes depth buffer precision artifacts
// but breaks shadows on large scale scenes (eg maps)
t.set({far:.99*e}),this.drawMeshes(t,!0),t.set({far:e})}),f6.profiler&&f6.profiler.timeEnd("depthPrepass")),o&&o.enabled&&o.ssao&&(f6.profiler&&f6.profiler.time("ssao",!0),e.submit(o._ssaoCmd,{uniforms:{uNear:t.near,uFar:t.far,uFov:t.fov,viewMatrix:t.viewMatrix,uInverseViewMatrix:lX.invert(lX.copy(t.viewMatrix)),viewProjectionInverseMatrix:lX.invert(lX.mult(lX.copy(t.viewMatrix),t.projectionMatrix)),cameraPositionWorldSpace:t.entity.transform.worldPosition,uIntensity:o.ssaoIntensity,uNoiseScale:[10,10],uSampleRadiusWS:o.ssaoRadius,uBias:o.ssaoBias,uScreenSize:r}}),f6.profiler&&f6.profiler.timeEnd("ssao"),f6.profiler&&f6.profiler.time("ssao-blur",!0),e.submit(o._bilateralBlurHCmd,{uniforms:{near:t.near,far:t.far,sharpness:o.ssaoBlurSharpness,imageSize:r,depthMapSize:r,direction:[o.ssaoBlurRadius,0]}}),e.submit(o._bilateralBlurVCmd,{uniforms:{near:t.near,far:t.far,sharpness:o.ssaoBlurSharpness,imageSize:r,depthMapSize:r,direction:[0,o.ssaoBlurRadius]}}),f6.profiler&&f6.profiler.timeEnd("ssao-blur")),f6.profiler&&f6.profiler.time("drawFrame",!0),o&&o.enabled?e.submit(o._drawFrameFboCommand,()=>{this.drawMeshes(t,!1,null,null,n[0],!1),this.drawHelpers(t,!0,e)}):e.submit({viewport:t.viewport},()=>{this.drawMeshes(t,!1,null,null,n[0],!0),this.drawHelpers(t,!1,e)}),f6.profiler&&f6.profiler.timeEnd("drawFrame"),f6.profiler&&f6.profiler.time("postprocess"),o&&o.enabled&&o.bloom){e.submit(o._thresholdCmd,{uniforms:{uExposure:t.exposure,uBloomThreshold:o.bloomThreshold,imageSize:r}});for(let t=0;t<o._downSampleCmds.length;t++)e.submit(o._downSampleCmds[t],{uniforms:{intensity:o.bloomRadius}});for(let t=0;t<o._bloomCmds.length;t++)e.submit(o._bloomCmds[t],{uniforms:{imageSize:r}})}o&&o.enabled&&o.dof&&(f6.profiler&&f6.profiler.time("dof",!0),e.submit(o._dofCmd,{uniforms:{uFar:t.far,uNear:t.near,imageSize:r,depthMapSize:r,uPixelSize:[1/r[0],1/r[1]],uFocusDistance:o.dofFocusDistance,uSensorHeight:t.actualSensorHeight,uFocalLength:t.focalLength,uFStop:t.fStop,uDOFDebug:o.dofDebug}}),f6.profiler&&f6.profiler.timeEnd("dof")),o&&o.enabled&&(e.submit(o._blitCmd,{uniforms:{uNear:t.near,uFar:t.far,uFov:t.fov,uExposure:t.exposure,uFXAA:o.fxaa,uFog:o.fog,uBloom:o.bloom,uBloomIntensity:o.bloomIntensity,uSunDispertion:o.sunDispertion,uSunIntensity:o.sunIntensity,uSunColor:o.sunColor,uInscatteringCoeffs:o.inscatteringCoeffs,uFogColor:o.fogColor,uFogStart:o.fogStart,uFogDensity:o.fogDensity,uSunPosition:o.sunPosition,uOutputEncoding:e.Encoding.Gamma,uOverlay:o.dof?o._frameDofBlurTex:o._frameColorTex,uScreenSize:r},viewport:t.viewport}),f6.profiler&&f6.profiler.timeEnd("postprocess"))}),r.filter(e=>e.enabled).forEach(t=>{let r=[t.x,t.y,t.width,t.height];(t.x>1||t.y>1||t.width>1||t.height>1)&&(r[0]/=e.gl.drawingBufferWidth,r[1]/=e.gl.drawingBufferHeight,r[2]/=e.gl.drawingBufferWidth,r[3]/=e.gl.drawingBufferHeight),// overlay coordinates are from top left corner so we need to flip y
r[1]=1-r[1]-r[3],e.submit(this.getOverlayCommand(),{uniforms:{uBounds:r,uTexture:t.texture}})}),f6.profiler&&f6.profiler.endFrame()}},de.prototype.entity=function(e,t){return l4(e,t,this)},de.prototype.add=function(e,t){return e===this.root||e.transform.set({parent:t?t.transform:e.transform.parent||this.root.transform}),e},de.prototype.remove=function(e){e.transform.set({parent:null})},de.prototype.transform=function(e){return l5(Object.assign({ctx:this._ctx},e))},de.prototype.skin=function(e){return uo(Object.assign({ctx:this._ctx},e))},de.prototype.morph=function(e){return ua(Object.assign({ctx:this._ctx},e))},de.prototype.animation=function(e){return ul(Object.assign({ctx:this._ctx},e))},de.prototype.geometry=function(e){return uh(Object.assign({ctx:this._ctx},e))},de.prototype.material=function(e){return uy(Object.assign({ctx:this._ctx},e))},de.prototype.camera=function(e){return uC(Object.assign({ctx:this._ctx,rgbm:f6.rgbm},e))},de.prototype.postProcessing=function(e){return uP(Object.assign({ctx:this._ctx,rgbm:f6.rgbm},e))},de.prototype.orbiter=function(e){return cw(Object.assign({ctx:this._ctx},e))},de.prototype.ambientLight=function(e){return cq(Object.assign({ctx:this._ctx},e))},de.prototype.directionalLight=function(e){return cW(Object.assign({ctx:this._ctx},e))},de.prototype.pointLight=function(e){return cY(Object.assign({ctx:this._ctx},e))},de.prototype.spotLight=function(e){return cQ(Object.assign({ctx:this._ctx},e))},de.prototype.areaLight=function(e){return c2(Object.assign({ctx:this._ctx},e))},de.prototype.reflectionProbe=function(e){return c9(Object.assign({ctx:this._ctx,rgbm:f6.rgbm},e))},de.prototype.skybox=function(e){return fo(Object.assign({ctx:this._ctx,rgbm:f6.rgbm},e))},de.prototype.overlay=function(e){return ff(Object.assign({ctx:this._ctx},e))},de.prototype.boundingBoxHelper=function(e){return fp(e)},de.prototype.lightHelper=function(e){return fm(e)},de.prototype.cameraHelper=function(e){return fy(e)},de.prototype.axisHelper=function(e){return fw(e)},de.prototype.gridHelper=function(e){return f_(e)},de.prototype.loadScene=async function(e,t={}){let r=lj.extname(e),[,n]=t.loader||f5.find(([e])=>e.includes(r))||[];if(n){let r=await n(e,this,t);return r.length>1?r:r[0]}console.error(`pex-renderer: No loader found for file extension ${r}`)},lB=function(e){return new de(e)};let dt=async e=>e.ok?e:Promise.reject(Error(`GET ${e.url} ${e.status} (${e.statusText})`)),dr=async(e,t={})=>await (await dt(await fetch(e,t))).text(),dn=async(e,t={})=>await (await dt(await fetch(e,t))).json(),di=async(e,t={})=>await (await dt(await fetch(e,t))).arrayBuffer(),da=async(e,t={})=>await (await dt(await fetch(e,t))).blob(),ds=async(e,t={})=>{let r=new Image,n=e;if(e.url){let{url:t,...o}=e;n=t;try{Object.assign(r,o)}catch(e){return Promise.reject(Error(e))}}let o=await da(n,t);return await new Promise((e,t)=>{r.addEventListener("load",function t(){r.removeEventListener("load",t),e(r)}),r.addEventListener("error",function e(){r.removeEventListener("error",e),t(r)}),r.src=URL.createObjectURL(o)})},dl={text:dr,json:dn,image:ds,blob:da,arrayBuffer:di},du=Object.keys(dl),dc=e=>{let t=Object.keys(e);return Promise.allSettled(t.map(async t=>{let r=e[t],n=du.find(e=>r[e]);return n?await dl[n](r[n],r.options):Promise.reject(Error(`io.load: unknown resource type "${Object.keys(r)}".
Resource needs one of ${du.join("|")} set to an url.`))})).then(e=>Object.fromEntries(Array.from(e.map(e=>e.value||e.reason),(e,r)=>[t[r],e])))};var df={};df=//Returns data as floats and flipped along Y by default
function(e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));for(var t=0,r=e.length,n=0,o=0,i=1,a=!1,s=0;s<20;s++){var l,u=function(){var n="";do{var o=e[t];if(10==o){++t;break}n+=String.fromCharCode(o)}while(++t<r)return n}();if(l=u.match("#\\?RADIANCE"));else if(l=u.match("FORMAT=32-bit_rle_rgbe"))a=!0;else if(l=u.match("EXPOSURE=\\s*([0-9]*[.][0-9]*)"))i=Number(l[1]);else if(l=u.match("#.*"));else if(l=u.match("-Y ([0-9]+) \\+X ([0-9]+)")){o=Number(l[1]),n=Number(l[2]);break}}if(!a)throw Error("File is not run length encoded!");var c=new Uint8Array(n*o*4);!function(e,t,r,n,o,i){var a,s,l,u=[,,,,],c=null,f=[,,],d=e.length;function p(t){var r=0;do t[r++]=e[n];while(++n<d&&r<t.length)return r}function h(t,r,o){var i=0;do t[r+i++]=e[n];while(++n<d&&i<o)return i}for(;i>0;){if(p(u)<u.length)throw Error("Error reading bytes: expected "+u.length);if(2!=u[0]||2!=u[1]||(128&u[2])!=0){//this file is not run length encoded
t[r++]=u[0],t[r++]=u[1],t[r++]=u[2],t[r++]=u[3],function(e,t,r,n){var o=4*n,i=h(t,r,o);if(i<o)throw Error("Error reading raw pixels: got "+i+" bytes, expected "+o)}(0,t,r,o*i-1);return}if(((255&u[2])<<8|255&u[3])!=o)throw Error("Wrong scanline width "+((255&u[2])<<8|255&u[3])+", expected "+o);null==c&&(c=Array(4*o)),a=0;/* read each of the four channels for the scanline into the buffer */for(var m=0;m<4;m++)for(s=(m+1)*o;a<s;){if(p(f)<f.length)throw Error("Error reading 2-byte buffer");if((255&f[0])>128){if(0==/* a run of the same value */(l=(255&f[0])-128)||l>s-a)throw Error("Bad scanline data");for(;l-- >0;)c[a++]=f[1]}else{if(0==/* a non-run */(l=255&f[0])||l>s-a)throw Error("Bad scanline data");if(c[a++]=f[1],--l>0){if(h(c,a,l)<l)throw Error("Error reading non-run data");a+=l}}}/* copy byte data to output */for(var m=0;m<o;m++)t[r+0]=c[m],t[r+1]=c[m+o],t[r+2]=c[m+2*o],t[r+3]=c[m+3*o],r+=4;i--}}(e,c,0,t,n,o);for(var f=new Float32Array(n*o*4),d=0;d<c.length;d+=4){var p=c[d+0]/255,h=c[d+1]/255,m=c[d+2]/255,g=Math.pow(2,c[d+3]-128);p*=g,h*=g,m*=g;var v=d;f[v+0]=p,f[v+1]=h,f[v+2]=m,f[v+3]=1}return{shape:[n,o],exposure:i,gamma:1,data:f}};/**
 * @module canvasScreenshot
 */var dd={};dd=function(e,t){if(t||(t={}),!e)return"";var r=(/[^./\\]*$/.exec(e)||[""])[0];return t.preserveCase?r:r.toLowerCase()};let dp=null;/**
 * Get the mimetype
 *
 * @private
 * @param {string} filename
 * @returns {string}
 */function dh(e){let t=/*@__PURE__*/q(dd)(e);return["jpg","jpeg"].includes(t)?"image/jpeg":"image/png"}var dm=/**
 * Take a screenshot.
 * Setting `options.useBlob` to `true` will consequently make the module async and return the latter.
 * @alias module:canvasScreenshot
 * @param {HTMLCanvasElement} canvas The canvas element
 * @param {import("./types.js").CanvasScreenshotOptions} [options={}]
 * @returns {string | Promise<Blob>} A `DOMString` or a `Promise` resolving with a `Blob`.
 *
 * Type is inferred from the filename extension (jpg/jpeg) for `"image/jpeg"` and default to `"image/png"`.
 */function(e,t={}){let r=new Date,{filename:n=`Screen Shot ${r.toISOString().slice(0,10)} at ${r.toTimeString().slice(0,8).replace(/:/g,".")}.png`,quality:o=1,useBlob:i,download:a=!0}={...t};if(a&&((dp=dp||document.createElement("a")).download=n),i)return new Promise(t=>{e.toBlob(e=>{if(a){let t=URL.createObjectURL(e);dp.href=t;let r=new MouseEvent("click");dp.dispatchEvent(r),setTimeout(()=>{URL.revokeObjectURL(t)},1)}t(e)},dh(n),o)});let s=e.toDataURL(`${dh(n)};base64`,o);if(a){dp.href=s;let e=new MouseEvent("click");dp.dispatchEvent(e)}return s};/**
 * Returns pairwise product sum of given components.
 *
 * @param a -
 * @param b -
 * @param c -
 * @param d -
 */let dg=(e,t,r,n)=>e*t+r*n,dv=(e,t,r,n,o,i)=>e*t+r*n+o*i,dy=(e,t=e=>void 0!==e?": "+e:"")=>class extends Error{constructor(r){super(e(r)+t(r))}},db=dy(()=>"illegal arity"),dx=e=>{throw new db(e)},dw=(e,t)=>null!=e&&"function"==typeof e[t],dS=e=>dw(e,"xform")?e.xform():e,d_=e=>null!=e&&"function"==typeof e[Symbol.iterator],dE=(e,t)=>[e[0],e[1],t],dA=Symbol(),dM=()=>{},dC=e=>null!=e&&"function"!=typeof e&&void 0!==e.length;class dT{constructor(e){this.value=e}deref(){return this.value}}let dP=e=>new dT(e),dO=e=>e instanceof dT,dR=e=>e instanceof dT?e:new dT(e),dL=e=>e instanceof dT?e.deref():e,dN=e=>2===e.length?[void 0,e[1]]:3===e.length?[e[1],e[2]]:dx(e.length);function dD(...e){let t=e[0],r=t[0],n=t[1],o=t[2];e=dN(e);let i=null==e[0]?r():e[0],a=e[1];return dL(n(dw(a,"$reduce")?a.$reduce(o,i):dC(a)?dF(o,i,a):dI(o,i,a)))}let dF=(e,t,r)=>{for(let n=0,o=r.length;n<o;n++)if(dO(t=e(t,r[n]))){t=t.deref();break}return t},dI=(e,t,r)=>{for(let n of r)if(dO(t=e(t,n))){t=t.deref();break}return t},dU=(e,t)=>[e,e=>e,t];function*dz(e,t){let r=dS(e)([dM,dM,(e,t)=>t])[2];for(let e of t){let t=r(dA,e);if(dO(t)){(t=dL(t.deref()))!==dA&&(yield t);return}t!==dA&&(yield t)}}let dk=(e,t,r=dz)=>{let n=t.length-1;return d_(t[n])?t.length>1?r(e.apply(null,t.slice(0,n)),t[n]):r(e(),t[0]):void 0};function dB(e,t){return d_(t)?dz(dB(e),t):t=>{let r=t[2];return dE(t,(t,n)=>r(t,e(n)))}}class dj{constructor(e,t,r){void 0===e?(e=0,t=1/0):void 0===t&&(t=e,e=0),r=void 0===r?e<t?1:-1:r,this.from=e,this.to=t,this.step=r}*[Symbol.iterator](){let{from:e,to:t,step:r}=this;if(r>0)for(;e<t;)yield e,e+=r;else if(r<0)for(;e>t;)yield e,e+=r}$reduce(e,t){let r=this.step;if(r>0)for(let n=this.from,o=this.to;n<o&&!dO(t);n+=r)t=e(t,n);else for(let n=this.from,o=this.to;n>o&&!dO(t);n+=r)t=e(t,n);return t}}let d$=(e,t,r)=>{let n,o;switch(r.length){case 4:o=r[3],n=r[2];break;case 3:o=r[2];break;case 2:return dB(t=>e(r[0],r[1],t));default:dx(r.length)}return t(dS(r[0])(r[1]),n,o)};function*dV(...e){let t=e.map(e=>e[Symbol.iterator]());for(;;){let e=[];for(let r of t){let t=r.next();if(t.done)return;e.push(t.value)}yield e}}let dG=dy(()=>"unsupported operation"),dq=e=>{throw new dG(e)},dH=(e=0)=>{let t;let r=[,,,,,],n=(...n)=>{let o=r[n[e].length]||t;return o?o(...n):dq(`no impl for vec size ${n[e].length}`)};// fn.impls = impls;
return n.add=(e,t)=>r[e]=t,n.default=e=>t=e,n.impl=e=>r[e]||t,n},dW="o,a,b",dX=e=>([t,r])=>`${t}=${r}${e}n;`,dK=([e,t])=>`${e}*${t}`,dY=e=>t=>t>1?`${e}[i${e}+${t}*s${e}]`:1==t?`${e}[i${e}+s${e}]`:`${e}[i${e}]`,dZ=e=>dB(dY(e),new dj(void 0,void 0,void 0)),dJ=e=>dB(t=>`${e}[${t}]`,new dj(void 0,void 0,void 0)),dQ=(e,t,r,n="a",o="",i="",a="",s=!1)=>{var l,u;let c;return[i,function e(...t){return d$(e,dD,t)}(function(...e){return(function e(...t){let[r,n,o,i,a,s,l,u,c,f]=t;switch(t.length){case 0:dx(0);case 1:return r;case 2:return(...e)=>r(n(...e));case 3:return(...e)=>r(n(o(...e)));case 4:return(...e)=>r(n(o(i(...e))));case 5:return(...e)=>r(n(o(i(a(...e)))));case 6:return(...e)=>r(n(o(i(a(s(...e))))));case 7:return(...e)=>r(n(o(i(a(s(l(...e)))))));case 8:return(...e)=>r(n(o(i(a(s(l(u(...e))))))));case 9:return(...e)=>r(n(o(i(a(s(l(u(c(...e)))))))));default:let d=(...e)=>r(n(o(i(a(s(l(u(c(f(...e))))))))));return 10===t.length?d:e(d,...t.slice(10))}}).apply(null,e=e.map(dS))}(function e(t,r){return d_(r)?function*(e,t){var r;let n=dS(e)(r?[...r]:dU(()=>[],(e,t)=>(e.push(t),e))),o=n[1],i=n[2];for(let e of t){let t=i([],e);if(dO(t)){yield*dL(o(t.deref()));return}t.length&&(yield*t)}yield*dL(o([]))}(e(t),r):e=>{let r=e[2],n=t;return dE(e,(e,t)=>--n>0?r(e,t):0===n?dR(r(e,t)):dP(e))}}(e),function e(...t){return dk(e,t)||(e=>{let r=e[2],n=t[0],o=t[1]||0;return dE(e,(e,t)=>r(e,n(o++,t)))})}((e,r)=>t(r,e))),(l=(l=o)||"",c=!0,u?[...u].join(l):dU(()=>"",(e,t)=>(e=c?e+t:e+l+t,c=!1,e))),dV.apply(null,r.split(",").map(s?dZ:dJ))),a,""!==n?`return ${n};`:""]},d1=(e,t,r="a",n,o,i=!1)=>[n,"for(let i=a.length;--i>=0;) {",e(t.split(",").map(i?e=>`${e}[i${e}+i*s${e}]`:e=>`${e}[i]`)),"}",o,null!==r?`return ${r};`:""],d0=(e,t)=>`!${e} && (${e}=${t.split(",")[1]});`,d2=(e,t,r,n=r,o="a",i,a,s,l=!1)=>Function(r,dQ(e,t,n,o,i,a,s,l).join("")),d3=(e,t,r=t,n="a",o,i,a=!1)=>Function(t,d1(e,r,n,o,i,a).join("")),d9=(e,t=dW,r,n="o",o=1,i)=>{r=r||t,i=null!=i?i:d0(n,t);let a=dH(o),s=o=>a.add(o,d2(o,e,t,r,n,"",i));return a.default(d3(e,t,r,n,i)),[a,s(2),s(3),s(4)]},d4=e=>d9(dX(e),"o,a,n"),d5=e=>d6.add(e,d2(e,([e])=>`${e}*${e}`,"a","a","","+","return ",";")),d6=dH();d6.default(d3(([e])=>`sum+=${e}*${e};`,"a",void 0,"sum","let sum=0;")),d5(2);let d8=d5(3);d5(4);let d7=(e,t,r)=>(e||(e=[]),e[0]=t,e[1]=r,e),pe=(e,t,r,n)=>(e||(e=[]),e[0]=t,e[1]=r,e[2]=n,e),pt=(e,t,r,n,o)=>(e||(e=[]),e[0]=t,e[1]=r,e[2]=n,e[3]=o,e),pr=(e,t,r,n,o,i,a)=>(e||(e=[]),e[0]=t,e[1]=r,e[2]=n,e[3]=o,e[4]=i,e[5]=a,e),pn=(e,...t)=>{e||(e=[]);for(let r=0,n=t.length;r<n;r++)e[r]=t[r];return e},po=e=>{let[t,r,n,o,i,a,s,l,u,c,f,d,p,h,m,g]=e;return[dg(t,a,-r,i),dg(t,s,-n,i),dg(t,l,-o,i),dg(r,s,-n,a),dg(r,l,-o,a),dg(n,l,-o,s),dg(u,h,-c,p),dg(u,m,-f,p),dg(u,g,-d,p),dg(c,m,-f,h),dg(c,g,-d,h),dg(f,g,-d,m)]},pi=e=>dv(e[0],e[11],-e[1],e[10],e[2],e[9])+dv(e[3],e[8],-e[4],e[7],e[5],e[6]),pa=dH(1);pa.add(4,(e,t)=>{let[r,n,o,i]=t,a=dg(r,i,-n,o);if(0!==a)return pt(e||t,i*(a=1/a),-n*a,-o*a,r*a)}),pa.add(6,(e,t)=>{let[r,n,o,i,a,s]=t,l=dg(r,i,-n,o);if(0!==l)return pr(e||t,i*(l=1/l),-n*l,-o*l,r*l,dg(o,s,-i,a)*l,dg(n,a,-r,s)*l)}),pa.add(9,(e,t)=>{let[r,n,o,i,a,s,l,u,c]=t,f=dg(c,a,-s,u),d=dg(s,l,-c,i),p=dg(u,i,-a,l),h=dv(r,f,n,d,o,p);if(0!==h)return pn(e||t,f*(h=1/h),dg(-c,n,o,u)*h,dg(s,n,-o,a)*h,d*h,dg(c,r,-o,l)*h,dg(-s,r,o,i)*h,p*h,dg(-u,r,n,l)*h,dg(a,r,-n,i)*h)});let ps=pa.add(16,(e,t)=>{let r=po(t),n=pi(r);if(0===n)return;n=1/n;let[o,i,a,s,l,u,c,f,d,p,h,m,g,v,y,b]=t,[x,w,S,_,E,A,M,C,T,P,O,R]=r;return pn(e||t,dv(u,R,-c,O,f,P)*n,dv(-i,R,a,O,-s,P)*n,dv(v,A,-y,E,b,_)*n,dv(-p,A,h,E,-m,_)*n,dv(-l,R,c,T,-f,C)*n,dv(o,R,-a,T,s,C)*n,dv(-g,A,y,S,-b,w)*n,dv(d,A,-h,S,m,w)*n,dv(l,O,-u,T,f,M)*n,dv(-o,O,i,T,-s,M)*n,dv(g,E,-v,S,b,x)*n,dv(-d,E,p,S,-m,x)*n,dv(-l,P,u,C,-c,M)*n,dv(o,P,-i,C,a,M)*n,dv(-g,_,v,w,-y,x)*n,dv(d,_,-p,w,h,x)*n)}),pl=e=>d2(e,dK,"o,a,io=0,ia=0,so=1,sa=1","o,a","","+","return ",";",!0),pu=pl(2),pc=pl(3),pf=pl(4),pd=dH(1);pd.add(4,(e,t,r)=>d7(e||r,pu(t,r,0,0,2),pu(t,r,1,0,2))),pd.add(6,(e,t,r)=>d7(e||r,pu(t,r,0,0,2)+t[4],pu(t,r,1,0,2)+t[5])),pd.add(9,(e,t,r)=>pe(e||r,pc(t,r,0,0,3),pc(t,r,1,0,3),pc(t,r,2,0,3))),pd.add(16,(e,t,r)=>pt(e||r,pf(t,r,0,0,4),pf(t,r,1,0,4),pf(t,r,2,0,4),pf(t,r,3,0,4)));let pp=(e,t,r)=>{let{0:n,1:o,2:i}=r,{0:a,1:s,2:l,3:u}=t,c=u*n+s*i-l*o,f=u*o+l*n-a*i,d=u*i+a*o-s*n,p=-a*n-s*o-l*i;return pe(e||r,c*u+-(p*a)+-(f*l)- -(d*s),f*u+-(p*s)+-(d*a)- -(c*l),d*u+-(p*l)+-(c*s)- -(f*a))},ph=(e,t,r)=>{let{0:n,1:o,2:i,3:a}=t,{0:s,1:l,2:u,3:c}=r;return pt(e||t,n*c+a*s+o*u-i*l,o*c+a*l+i*s-n*u,i*c+a*u+n*l-o*s,a*c-n*s-o*l-i*u)},pm=-1/0,pg=1/0;Object.freeze([pm,pm]),Object.freeze([pg,pg]),Object.freeze([1,1]),Object.freeze([0,0]),Object.freeze([1,0]),Object.freeze([0,1]),Object.freeze([pm,pm,pm]),Object.freeze([pg,pg,pg]),Object.freeze([1,1,1]),Object.freeze([0,0,0]);let pv=Object.freeze([1,0,0]),py=Object.freeze([0,1,0]),pb=Object.freeze([0,0,1]);Object.freeze([pm,pm,pm,pm]),Object.freeze([pg,pg,pg,pg]),Object.freeze([1,1,1,1]),Object.freeze([0,0,0,0]),Object.freeze([1,0,0,0]),Object.freeze([0,1,0,0]),Object.freeze([0,0,1,0]),Object.freeze([0,0,0,1]);let[px,pw,pS,p_]=d9(([e,t])=>`${e}=${t};`,"o,a",void 0,"o",1,"!o&&(o=[]);"),[pE,pA,pM,pC]=d4("*"),[pT,pP,pO,pR]=d4("+"),[pL,pN,pD,pF]=d9(([e,t,r])=>`${e}=(${t}*n)+${r};`,"o,a,n,b",dW),pI=(e,t,r=1)=>{e||(e=t);let n=Math.sqrt(d8(t));return n>=1e-6?pM(e,t,r/n):e!==t?pS(e,t):e},pU=([e,t])=>`t=${e}-${t};s+=t*t;`,pz="let t,s=0;",pk=e=>pB.add(e,d2(e,pU,"a,b",void 0,"s","",pz)),pB=dH();pB.default(d3(pU,"a,b",void 0,"s",pz)),pk(2);let pj=pk(3);pk(4);let p$=(e,t)=>Math.sqrt(pj(e,t)),[pV,pG,pq,pH]=d9(([e,t,r])=>`${e}=${t}+(${r}-${t})*n;`,"o,a,b,n"),pW=(e,t,r)=>e+(t-e)*r,pX=1/4294967296;class pK{float(e=1){return this.int()*pX*e}probability(e){return this.float()<e}norm(e=1){return(this.int()*pX-.5)*2*e}normMinMax(e,t){let r=this.minmax(e,t);return .5>this.float()?r:-r}minmax(e,t){return this.float()*(t-e)+e}minmaxInt(e,t){e|=0;let r=(0|t)-e;return r?e+this.int()%r:e}minmaxUint(e,t){e>>>=0;let r=(t>>>0)-e;return r?e+this.int()%r:e}}class pY extends pK{constructor(e=3737844653){super(),this.buffer=new Uint32Array([e,0])}copy(){let e=new pY;return e.buffer.set(this.buffer),e}seed(e){return this.buffer.set([e,0]),this}int(){let e=this.buffer,t=1540483477*e[1]++>>>0,r=e[0]=(t^t>>24^1540483477*e[0]>>>0)*1540483477>>>0;return(r^r>>>13)>>>0}}let pZ=e=>"string"==typeof e,pJ=(e,t)=>(e>>>t|e<<32-t)>>>0,pQ=e=>(3840&e)*4352|(240&e)*272|(15&e)*17,p1=e=>((61440&e)*69632|(3840&e)*4352|(240&e)*272|(15&e)*17)>>>0;var p0=Object.assign(Object.create(null),{url:"file:///.yarn/cache/@thi.ng-errors-npm-2.4.0-1129ad1945-96cc3b1a2e.zip/node_modules/@thi.ng/errors/assert.js"}),p2=X("hkq8B");let p3=dy(()=>"Assertion failed"),p9=(void 0===p2||void 0===p2.env)&&(!p0.env||"production"!==p0.env.MODE||p0.env.UMBRELLA_ASSERTS||p0.env.VITE_UMBRELLA_ASSERTS)?(e,t)=>{if("function"==typeof e&&!e()||!e)throw new p3("function"==typeof t?t():t)}:()=>{},p4=dy(()=>"illegal argument(s)"),p5=e=>{throw new p4(e)},p6=Math.PI,p8=2*p6,p7=1/p8,he=Math.sqrt(3),ht=1/3,hr=1e-6,hn=e=>e<0?0:e>1?1:e,ho=e=>e-Math.floor(e);(y=$||($={}))[y.RED=0]="RED",y[y.ORANGE=1]="ORANGE",y[y.YELLOW=2]="YELLOW",y[y.CHARTREUSE=3]="CHARTREUSE",y[y.GREEN=4]="GREEN",y[y.SPRING_GREEN=5]="SPRING_GREEN",y[y.CYAN=6]="CYAN",y[y.AZURE=7]="AZURE",y[y.BLUE=8]="BLUE",y[y.VIOLET=9]="VIOLET",y[y.MAGENTA=10]="MAGENTA",y[y.ROSE=11]="ROSE";class hi{constructor(e,t){this.mode=e,this.value=t}deref(){return this.value}}function ha(e,t){return t||(t={}),(...r)=>{let n=JSON.stringify(r);return void 0!==n?n in t?t[n]:t[n]=e.apply(null,r):e.apply(null,r)}}let hs=ha((e,t)=>e.repeat(t)),hl=ha((e,t=" ")=>{let r=hs(String(t),e);return(t,n)=>null==t?r:(t=t.toString(),(n=void 0!==n?n:t.length)<e?r.substring(n)+t:t)});hl(2,"0"),hl(3,"0"),hl(4,"0");let hu=ha((e,t=!1)=>t?t=>hf(t)||t.toFixed(e):t=>t.toFixed(e));ha((e,t=3)=>{let r=e-t-1,n=Math.pow(10,r),o=-Math.pow(10,r-1),i=Math.pow(10,-(t-1)),a=hl(e);return r=>{let s=Math.abs(r);return a(hf(r)||(0===r?"0":s<i||s>=n?hc(r,e):r.toFixed(t-(r<o?1:0))))}});let hc=(e,t)=>e.toExponential(Math.max(t-4-(Math.log(Math.abs(e))/Math.LN10>=10?2:1)-(e<0?1:0),0)),hf=e=>isNaN(e)?"NaN":e===1/0?"+∞":e===-1/0?"-∞":void 0;Object.freeze([0,0,0,1]),Object.freeze([1,1,1,1]),Object.freeze([1,0,0,1]),Object.freeze([0,1,0,1]),Object.freeze([0,0,1,1]),Object.freeze([0,1,1,1]),Object.freeze([1,0,1,1]),Object.freeze([1,1,0,1]);let hd=[.2126,.7152,.0722],hp=[.4360747,.2225045,.0139322,.3850649,.7168786,.0971045,.1430804,.0606169,.7141733],hh=[3.1338561,-.9787684,.0719453,-1.6168667,1.9161415,-.2289914,-.4906146,.033454,1.4052427],hm=[.4124564,.2126729,.0193339,.3575761,.7151522,.119192,.1804375,.072175,.9503041],hg=[3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252],hv=[.9555766,-.0282895,.0122982,-.0230393,1.0099416,-.020483,.0631636,.0210077,1.3299098],hy=[1.0478112,.0295424,-.0092345,.0228866,.9904844,.0150436,-.050127,-.0170491,.7521316],hb=[.96422,1,.82521],hx=[.95047,1,1.08883],hw=[.8189330101,.0329845436,.0482003018,.3618667424,.9293118715,.2643662691,-.1288597137,.0361456387,.633851707],hS=[.2104542553,1.9779984951,.0259040371,.793617785,-2.428592205,.7827717662,-.0040720468,.4505937099,-.808675766];hu(3),((e=0)=>t=>(100*t).toFixed(e)+"%")(3);let h_=1/255,hE={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32",// additions
transparent:"0000",rebeccapurple:"639"},hA={canvas:"fff",canvastext:"000",linktext:"001ee4",visitedtext:"4e2386",activetext:"eb3323",buttonface:"ddd",buttontext:"000",buttonborder:"000",field:"fff",fieldtext:"000",highlight:"bbd5fb",highlighttext:"000",mark:"000",marktext:"fff",graytext:"808080"},hM=(e,t,r,n)=>(e||(e=[]),e[0]=t,e[1]=r,e[2]=n,e),hC=(e,t,r,n,o)=>(e||(e=[]),e[0]=t,e[1]=r,e[2]=n,e[3]=o,e),hT=(e,t)=>hC(e||[],(t>>>16&255)*h_,(t>>>8&255)*h_,(255&t)*h_,(t>>>24)*h_),hP=(e,t)=>hC(e||[],(255&t)*h_,(t>>>8&255)*h_,(t>>>16&255)*h_,(t>>>24)*h_),hO=e=>{e=(pZ(e)?e:e.deref()).toLowerCase();let t=hE[e]||hA[e];if(t||"#"===e[0])return new hi("srgb",hT([],hI(t||e)));let r=e.split(/[(),/ ]+/),[n,o,i,a,s]=r;switch(p9(5===r.length||6===r.length,`invalid color: ${e}`),n){case"rgb":case"rgba":return new hi("srgb",[hF(o,1,h_,!0),hF(i,1,h_,!0),hF(a,1,h_,!0),hN(s)]);case"hsl":case"hsla":return new hi("hsl",[hL(o),hD(i),hD(a),hN(s)]);case"lab":return new hi("lab50",[hF(o),hF(i,1.25),hF(a,1.25),hN(s)]);case"lch":return new hi(n,[hF(o),hF(i,1.5),hL(a),hN(s)]);case"oklab":return new hi(n,[hF(o,1,1),hF(i,.4,1),hF(a,.4,1),hN(s)]);case"oklch":return new hi(n,[hF(o,1,1),hF(i,.4,1),hL(a),hN(s)]);default:dq(`color mode: ${n}`)}},hR={rad:p8,grad:400,turn:1,deg:360},hL=e=>{let t=/^(-?[0-9.]+)(deg|rad|grad|turn)?$/.exec(e);return p9(!!t,`expected hue, got: ${e}`),ho(parseFloat(t[1])/(hR[t[2]]||360))},hN=e=>e?hF(e,1,1,!0):1,hD=(e,t=!0)=>{p9(/^([0-9.]+)%$/.test(e),`expected percentage, got: ${e}`);let r=parseFloat(e)/100;return t?hn(r):r},hF=(e,t=1,r=.01,n=!1)=>{p9(/^-?[0-9.]+%?$/.test(e),`expected number or percentage, got: ${e}`);let o=parseFloat(e)*(e.endsWith("%")?.01*t:r);return n?hn(o):o},hI=e=>{let t=/^#?([0-9a-f]{3,8})$/i.exec(e);if(t){let e=t[1],r=parseInt(e,16);switch(e.length){case 3:return(4278190080|pQ(r))>>>0;case 4:return pJ(p1(r),8);case 6:return(4278190080|r)>>>0;case 8:return pJ(r,8)}}return p5(`invalid hex color: "${e}"`)},hU=e=>"number"==typeof e,hz=ha((e,t=3,r=",",n="[",o="]")=>{let i="number"==typeof t?hu(t):t;switch(e){case 1:return e=>`${n}${i(e[0])}${o}`;case 2:return e=>`${n}${i(e[0])}${r}${i(e[1])}${o}`;case 3:return e=>`${n}${i(e[0])}${r}${i(e[1])}${r}${i(e[2])}${o}`;case 4:return e=>`${n}${i(e[0])}${r}${i(e[1])}${r}${i(e[2])}${r}${i(e[3])}${o}`;default:return e=>{let t=[];for(let r=0;r<e.length;r++)t.push(i(e[r]));return`${n}${t.join(r)}${o}`}}});(b=V||(V={}))[b.I8=5120]="I8",b[b.U8=5121]="U8",b[b.I16=5122]="I16",b[b.U16=5123]="U16",b[b.I32=5124]="I32",b[b.U32=5125]="U32",b[b.F32=5126]="F32",V.I8,V.U8,V.I16,V.U16,V.I32,V.U32,V.F32,V.I8,V.U8,V.U8,V.I16,V.U16,V.I32,V.U32,V.F32,Float32Array,Float64Array,Int8Array,Int16Array,Int32Array,Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,BigInt64Array,BigUint64Array;let hk=(e,t,r,n,o,i)=>{let a=[];for(;r-- >0;)a.push(new e(t,n,o)),n+=i;return a},hB=e=>dw(e,"xform")?e.xform():e,hj=(e,t)=>[e[0],e[1],t];class h${constructor(e){this.value=e}deref(){return this.value}}let hV=e=>new h$(e),hG=e=>e instanceof h$,hq=e=>e instanceof h$?e:new h$(e),hH=e=>e instanceof h$?e.deref():e,hW=e=>2===e.length?[void 0,e[1]]:3===e.length?[e[1],e[2]]:dx(e.length);function hX(...e){let t=e[0],r=t[0],n=t[1],o=t[2];e=hW(e);let i=null==e[0]?r():e[0],a=e[1];return hH(n(dw(a,"$reduce")?a.$reduce(o,i):dC(a)?hK(o,i,a):hY(o,i,a)))}let hK=(e,t,r)=>{for(let n=0,o=r.length;n<o;n++)if(hG(t=e(t,r[n]))){t=t.deref();break}return t},hY=(e,t,r)=>{for(let n of r)if(hG(t=e(t,n))){t=t.deref();break}return t},hZ=(e,t)=>[e,e=>e,t];function*hJ(e,t){let r=hB(e)([dM,dM,(e,t)=>t])[2];for(let e of t){let t=r(dA,e);if(hG(t)){(t=hH(t.deref()))!==dA&&(yield t);return}t!==dA&&(yield t)}}let hQ=(e,t,r=hJ)=>{let n=t.length-1;return d_(t[n])?t.length>1?r(e.apply(null,t.slice(0,n)),t[n]):r(e(),t[0]):void 0};function h1(e,t){return d_(t)?hJ(h1(e),t):t=>{let r=t[2];return hj(t,(t,n)=>r(t,e(n)))}}class h0{constructor(e,t,r){void 0===e?(e=0,t=1/0):void 0===t&&(t=e,e=0),r=void 0===r?e<t?1:-1:r,this.from=e,this.to=t,this.step=r}*[Symbol.iterator](){let{from:e,to:t,step:r}=this;if(r>0)for(;e<t;)yield e,e+=r;else if(r<0)for(;e>t;)yield e,e+=r}$reduce(e,t){let r=this.step;if(r>0)for(let n=this.from,o=this.to;n<o&&!hG(t);n+=r)t=e(t,n);else for(let n=this.from,o=this.to;n>o&&!hG(t);n+=r)t=e(t,n);return t}}let h2=(e,t,r)=>{let n,o;switch(r.length){case 4:o=r[3],n=r[2];break;case 3:o=r[2];break;case 2:return h1(t=>e(r[0],r[1],t));default:dx(r.length)}return t(hB(r[0])(r[1]),n,o)};function*h3(...e){let t=e.map(e=>e[Symbol.iterator]());for(;;){let e=[];for(let r of t){let t=r.next();if(t.done)return;e.push(t.value)}yield e}}let h9=(e=0)=>{let t;let r=[,,,,,],n=(...n)=>{let o=r[n[e].length]||t;return o?o(...n):dq(`no impl for vec size ${n[e].length}`)};// fn.impls = impls;
return n.add=(e,t)=>r[e]=t,n.default=e=>t=e,n.impl=e=>r[e]||t,n},h4="o,a",h5="o,a,b",h6=(e="op")=>([t,r])=>`${t}=${e}(${r});`,h8=([e,t])=>`${e}*${t}`,h7=e=>t=>t>1?`${e}[i${e}+${t}*s${e}]`:1==t?`${e}[i${e}+s${e}]`:`${e}[i${e}]`,me=e=>h1(h7(e),new h0(void 0,void 0,void 0)),mt=e=>h1(t=>`${e}[${t}]`,new h0(void 0,void 0,void 0)),mr=(e,t,r,n="a",o="",i="",a="",s=!1)=>{var l,u;let c;return[i,function e(...t){return h2(e,hX,t)}(function(...e){return(function e(...t){let[r,n,o,i,a,s,l,u,c,f]=t;switch(t.length){case 0:dx(0);case 1:return r;case 2:return(...e)=>r(n(...e));case 3:return(...e)=>r(n(o(...e)));case 4:return(...e)=>r(n(o(i(...e))));case 5:return(...e)=>r(n(o(i(a(...e)))));case 6:return(...e)=>r(n(o(i(a(s(...e))))));case 7:return(...e)=>r(n(o(i(a(s(l(...e)))))));case 8:return(...e)=>r(n(o(i(a(s(l(u(...e))))))));case 9:return(...e)=>r(n(o(i(a(s(l(u(c(...e)))))))));default:let d=(...e)=>r(n(o(i(a(s(l(u(c(f(...e))))))))));return 10===t.length?d:e(d,...t.slice(10))}}).apply(null,e=e.map(hB))}(function e(t,r){return d_(r)?function*(e,t){var r;let n=hB(e)(r?[...r]:hZ(()=>[],(e,t)=>(e.push(t),e))),o=n[1],i=n[2];for(let e of t){let t=i([],e);if(hG(t)){yield*hH(o(t.deref()));return}t.length&&(yield*t)}yield*hH(o([]))}(e(t),r):e=>{let r=e[2],n=t;return hj(e,(e,t)=>--n>0?r(e,t):0===n?hq(r(e,t)):hV(e))}}(e),function e(...t){return hQ(e,t)||(e=>{let r=e[2],n=t[0],o=t[1]||0;return hj(e,(e,t)=>r(e,n(o++,t)))})}((e,r)=>t(r,e))),(l=(l=o)||"",c=!0,u?[...u].join(l):hZ(()=>"",(e,t)=>(e=c?e+t:e+l+t,c=!1,e))),h3.apply(null,r.split(",").map(s?me:mt))),a,""!==n?`return ${n};`:""]},mn=(e,t,r="a",n,o,i=!1)=>[n,"for(let i=a.length;--i>=0;) {",e(t.split(",").map(i?e=>`${e}[i${e}+i*s${e}]`:e=>`${e}[i]`)),"}",o,null!==r?`return ${r};`:""],mo=(e,t)=>`!${e} && (${e}=${t.split(",")[1]});`,mi=(e,t,r,n=r,o="a",i,a,s,l=!1)=>Function(r,mr(e,t,n,o,i,a,s,l).join("")),ma=(e,t,r,n,o,i=o,a="a",s="",l,u,c=!1)=>Function(n,`return (${o})=>{${mr(e,r,i,a,s,l,u,c).join("")}}`)(...t),ms=(e,t,r=t,n="a",o,i,a=!1)=>Function(t,mn(e,r,n,o,i,a).join("")),ml=(e,t,r,n,o=n,i="a",a,s,l=!1)=>Function(r,`return (${n})=>{${mn(t,o,i,a,s,l).join("")}}`)(...e),mu=(e,t=h5,r,n="o",o=1,i)=>{r=r||t,i=null!=i?i:mo(n,t);let a=h9(o),s=o=>a.add(o,mi(o,e,t,r,n,"",i));return a.default(ms(e,t,r,n,i)),[a,s(2),s(3),s(4)]},mc=(e,t,r=h4,n,o="o",i=1,a)=>{let s=t||h6("op");n=n||r,a=null!=a?a:mo(o,r);let l=h9(i),u=t=>l.add(t,ma(t,[e],s,"op",r,n,o,"",a));return l.default(ml([e],s,"op",r,n,o,a)),[l,u(2),u(3),u(4)]},[mf,md,mp,mh]=mc((e,t,r)=>e<t?t:e>r?r:e,((e="op")=>([t,r,n,o])=>`${t}=${e}(${r},${n},${o});`)(),"o,a,b,c"),[mm,mg,mv,my]=mc(hn,h6(),h4),[mb,mx,mw,mS]=mc(e=>e<-1?-1:e>1?1:e,h6(),h4),m_=(e,t,r,n=!0,o=!0)=>{let i=r>0?n?function(){return this.buf[this.offset+r*this.stride]}:function(){return this.buf[this.offset+r]}:function(){return this.buf[this.offset]},a=r>0?n?function(e){this.buf[this.offset+r*this.stride]=e}:function(e){this.buf[this.offset+r]=e}:function(e){this.buf[this.offset]=e};o&&Object.defineProperty(e,r,{get:i,set:a,enumerable:!0}),Object.defineProperty(e,t,{get:i,set:a,enumerable:!0})},mE=(e,t,r,n)=>t.forEach((t,o)=>m_(e,t,o,r,n)),mA=Math.abs,mM=(e,t,r=hr)=>mA(e-t)<=r,mC=e=>mT.add(e,ma(e,[mM,hr],([e,t])=>`eq(${e},${t},eps)`,"eq,_eps","a,b,eps=_eps","a,b","","&&","return a.length === b.length && ",";")),mT=h9();mT.default((e,t,r=hr)=>dw(e,"eqDelta")?e.eqDelta(t,r):dw(t,"eqDelta")?t.eqDelta(e,r):mO(e,t,e.length,r)),mC(2),mC(3);let mP=mC(4),mO=(e,t,r,n=hr,o=0,i=0,a=1,s=1)=>{for(;r>0;r--,o+=a,i+=s)if(!mM(e[o],t[i],n))return!1;return!0},mR=1/4294967296;class mL{float(e=1){return this.int()*mR*e}probability(e){return this.float()<e}norm(e=1){return(this.int()*mR-.5)*2*e}normMinMax(e,t){let r=this.minmax(e,t);return .5>this.float()?r:-r}minmax(e,t){return this.float()*(t-e)+e}minmaxInt(e,t){e|=0;let r=(0|t)-e;return r?e+this.int()%r:e}minmaxUint(e,t){e>>>=0;let r=(t>>>0)-e;return r?e+this.int()%r:e}}let mN=Math.random,mD=new class extends mL{int(){return 4294967296*mN()>>>0}float(e=1){return mN()*e}norm(e=1){return(mN()-.5)*2*e}},[mF,mI,mU,mz]=mc(mD,([e,t,r])=>`${e}=rnd.minmax(${t},${r});`,"o,a,b,rnd=op","o,a,b"),[mk,mB,mj,m$]=mu(([e,t])=>`${e}=${t};`,"o,a",void 0,"o",1,"!o&&(o=[]);"),mV=Array.isArray,mG={},mq=(e,t)=>{for(let e in t){let r=t[e];if(mV(r)){let[n,o,i,a]=r;t[e]=2===r.length?(e,t)=>o(e,n(e,t)):3===r.length?(e,t)=>i(e,o(e,n(e,t))):(e,t)=>a(e,i(e,o(e,n(e,t))))}}mG[e]={...mG[e],...t}},mH=(e,t,r,n)=>{let o=mG[r];p9(!!o,`no conversions available for ${r}`);let i=o[n];return i?i(e,t):mG.rgb[n]?o.rgb(e,mG.rgb[n]([],t)):dq(`can't convert: ${n} -> ${r}`)},mW=(e,t=1)=>void 0!=e?hn(e):t,mX=e=>{if("number"==typeof e[0])switch(e.length){case 1:return e.push(0,0,1),[e];case 2:return e.push(0,1),[e];case 3:return e.push(1),[e];default:return[e]}return e},mK=e=>e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055,mY=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),mZ=(e,t)=>hC(e||t,mY(t[0]),mY(t[1]),mY(t[2]),mW(t[3])),mJ=(e,t)=>mZ(null,hT(e,t)),mQ=(e,t)=>mZ(null,hP(e,t)),m1=e=>{let t=e.channels||{},r=e.order,n=r.length;r.reduce((e,r)=>(e[r]={range:[0,1],...t[r]},e),t);let o=Object.freeze(r.map(e=>t[e].range[0])),i=Object.freeze(r.map(e=>t[e].range[1])),a=m$([],o),s=m$([],i);a[n-1]=1;let l=r.findIndex(e=>!!t[e].hue),u=class{constructor(e,t=0,r=1){this.offset=t,this.stride=r,this.buf=e||[0,0,0,0],this.offset=t,this.stride=r}get mode(){return e.mode}get length(){return n}get range(){return[o,i]}get[Symbol.toStringTag](){return e.mode}get xyz(){return[this[0],this[1],this[2]]}[Symbol.iterator](){return function*(e,t,r,n){for(;t-- >0;)yield e[r],r+=n}(this.buf,this.length,this.offset,this.stride)}copy(){return new u(this.deref())}copyView(){return new u(this.buf,this.offset,this.stride)}empty(){return new u}deref(){return[this[0],this[1],this[2],this[3]]}set(e){return m$(this,e)}clamp(){return l>=0&&(this[l]=ho(this[l])),mh(null,this,o,i),this}eqDelta(e,t=hr){return mP(this,e,t)}randomize(e){return mF(this,a,s,e)}toJSON(){return this.deref()}toString(){return hz(4,4)(this)}};mE(u.prototype,r),mq(e.mode,e.from),mq("rgb",{[e.mode]:e.toRgb});let c=(t,r,n)=>{let o=new u(...n);return r!==e.mode?mH(o,t,e.mode,r):o.set(t)},f=(t,...r)=>null==t?new u:pZ(t)?f(hO(t),...r):dC(t)?pZ(t.mode)?c(t,t.mode,r):new u(t,...r):dw(t,"deref")?c(t.deref(),t.mode,r):hU(t)?r.length&&r.every(hU)?new u(...mX([t,...r])):c(mJ([],t),"rgb",r):p5(`can't create a ${e.mode} color from: ${t}`);return f.class=u,f.range=[o,i],f.random=(e,t,r,n)=>new u(t,r,n).randomize(e),f.mapBuffer=(e,t=e.length/n|0,r=0,o=1,i=n)=>hk(u,e,t,r,o,i),f},m0=(e,t=1)=>[Math.cos(e)*t,Math.sin(e)*t],m2=e=>(e%=p8)<0?p8+e:e,m3=(e,t)=>m2(Math.atan2(e,t)),m9=(e,t)=>{let{1:r,2:n}=t;return hC(e||t,t[0],Math.hypot(r,n),0===r&&0===n?0:m3(n,r)*p7,mW(t[3]))},m4=(e,t)=>{let{1:r,2:n}=t;n*=p8;let o=mW(t[3]);return r>0?hC(e||t,t[0],Math.cos(n)*r,Math.sin(n)*r,o):hC(e||t,t[0],0,0,o)},m5=e=>{let t=e**3;return t>.008856?t:(e-16/116)/7.787},m6=(e,t,r=hb)=>{let n=(t[0]+.16)/1.16;return hC(e||t,m5(t[1]/5+n)*r[0],m5(n)*r[1],m5(n-t[2]/2)*r[2],mW(t[3]))},m8=(e,t)=>m6(e,t,hx),m7=e=>mi(e,h8,"o,a,io=0,ia=0,so=1,sa=1","o,a","","+","return ",";",!0);m7(2);let ge=m7(3);m7(4);let gt=(e,t,r,n=!1)=>{let o=ge(t,r,0,0,3),i=ge(t,r,1,0,3),a=ge(t,r,2,0,3),s=mW(r[3]);return n?hC(e||r,hn(o),hn(i),hn(a),s):hC(e||r,o,i,a,s)},gr=(e,t,r=hh)=>gt(e,r,t),gn=(e,t)=>gr(e,t,hg),go=(e,t)=>gr(null,m6(e,t)),gi=(e,t)=>gn(null,m8(e,t)),ga=e=>gs.add(e,mi(e,h8,"a,b",void 0,"","+","return ",";")),gs=h9();gs.default(ms(([e,t])=>`s+=${e}*${t};`,"a,b",void 0,"s","let s=0;")),ga(2);let gl=ga(3);ga(4);let gu=(e,t=hd)=>gl(e,t),gc=(e,t,r=1)=>hC(e||[],hn(Math.abs((t=6*ho(t))-3)-1),hn(2-Math.abs(t-2)),hn(2-Math.abs(t-4)),r),gf=(e,t,r=1)=>hC(e||t,hn(t[0]),hn(t[1]),hn(t[2]),mW(t[3],r)),gd=(e,t,r=1)=>hC(e||t,ho(t[0]),hn(t[1]),hn(t[2]),mW(t[3],r)),gp=(e,t)=>{e=gf(e||t,t);let r=e[1]<e[2]?[e[2],e[1],-1,2/3]:[e[1],e[2],0,-1/3],n=e[0]<r[0]?[r[0],r[1],r[3],e[0]]:[e[0],r[1],r[2],r[0]],o=n[0]-Math.min(n[1],n[3]);return hM(e,hn(Math.abs((n[3]-n[1])/(6*o+hr)+n[2])),hn(o),hn(n[0]))},gh=(e,t)=>{let r=gu(t);e=gp(e,t);let n=gu(gc([],e[0]));return e[1]*=r<n?n/(r+hr):(1-n)/(1+hr-r),e[2]=r,e},gm=(e,t)=>hC(e||t,mK(t[0]),mK(t[1]),mK(t[2]),mW(t[3])),gg=(e,t)=>{let r=t[0],n=t[1],o=t[2],i=gc(e||t,r,mW(t[3])),a=gu(i);return o<a?n*=o/a:a<1&&(n*=(1-o)/(1-a)),hM(i,hn((i[0]-a)*n+o),hn((i[1]-a)*n+o),hn((i[2]-a)*n+o))},gv=m1({mode:"hcy",channels:{h:{hue:!0}},order:["h","c","y","alpha"],from:{rgb:gh,srgb:gh,lch:[m4,go,gm,gh]},toRgb:gg}),gy=he/2,gb=(e,t)=>{e=gf(e||t,t);let{0:r,1:n,2:o}=e,i=ht*(r+n+o);return i<1e-6||r===n&&r===o?hM(e,0,0,i):hM(e,m3(gy*(n-o),.5*(2*r-n-o))/p8,1-Math.min(r,n,o)/i,i)},gx=(e,t)=>{e=gd(e||t,t);let r=e[1],n=e[2];if(r<1e-6)return hM(e,n,n,n);let o=6*e[0]%6,i=n*(1-r),a=1-Math.abs(o%2-1),s=3*n*r/(1+a),l=s*a+i;switch(s+=i,0|o){case 0:return hM(e,s,l,i);case 1:return hM(e,l,s,i);case 2:return hM(e,i,s,l);case 3:return hM(e,i,l,s);case 4:return hM(e,l,i,s);case 5:return hM(e,s,i,l);default:return hM(e,i,i,i)}},gw=m1({mode:"hsi",channels:{h:{hue:!0}},order:["h","s","i","alpha"],from:{rgb:gb,srgb:gb,lch:[m4,go,gm,gb]},toRgb:gx}),gS=(e,t)=>(e=gp(e,t),e[2]-=.5*e[1],e[1]/=1+hr-Math.abs(2*e[2]-1),e),g_=(e,t)=>{let r=hn(t[1]),n=hn(t[2]);e=gc(e||t,t[0],mW(t[3]));let o=(1-Math.abs(2*n-1))*r;return hM(e,(e[0]-.5)*o+n,(e[1]-.5)*o+n,(e[2]-.5)*o+n)},gE=m1({mode:"hsl",channels:{h:{hue:!0}},order:["h","s","l","alpha"],from:{rgb:gS,srgb:gS,hsv:(e,t)=>{e=gd(e||t,t);let r=e[1],n=e[2],o=(2-r)*n/2;return e[2]=o,e[1]=o&&o<1?r*n/(o<.5?2*o:2-2*o):r,e},lch:[m4,go,gm,gS]},toRgb:g_}),gA=(e,t)=>(e=gp(e,t),e[1]/=e[2]+hr,e),gM=(e,t)=>{e=gd(e||t,t);let r=e[1],n=e[2];return gc(e,t[0],e[3]),hM(e,((e[0]-1)*r+1)*n,((e[1]-1)*r+1)*n,((e[2]-1)*r+1)*n)},gC=m1({mode:"hsv",channels:{h:{hue:!0}},order:["h","s","v","alpha"],from:{rgb:gA,srgb:gA,hsl:(e,t)=>{e=gd(e||t,t);let r=e[1],n=e[2],o=2*n,i=(o+r*(1-Math.abs(o-1)))*.5;return e[1]=2*(i-n)/i,e[2]=i,e},lch:[m4,go,gm,gA]},toRgb:gM}),gT=(e,t=0)=>(e<0?0:e>1?1:e)*255+.5<<t,gP=m1({mode:"srgb",order:["r","g","b","alpha"],from:{abgr32:(e,t)=>hP(e,t[0]),argb32:(e,t)=>hT(e,t[0]),hcy:gg,hsi:gx,hsl:g_,hsv:gM,rgb:gm},toRgb:mZ}),gO=e=>(255*mW(e[3])+.5<<24|255*hn(e[0])+.5<<16|255*hn(e[1])+.5<<8|255*hn(e[2])+.5)>>>0;class gR{constructor(e,t=0,r=1){this.offset=t,this.stride=r,this.buf=e||[0]}eqDelta(e,t){return mP(hT([],this[0]),hT([],e[0]),t)}get length(){return 1}get range(){return[[0],[4294967295]]}get alpha(){return(this[0]>>>24)/255}set alpha(e){this[0]=16777215&this[0]|gT(e,24)}get xyz(){let e=this[0];return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}*[Symbol.iterator](){yield this[0]}deref(){return[this[0]]}randomize(e=mD){let t=this[0];return this[0]=4278190080&t|16777215&e.int(),this}clamp(){return this}set(e){return this[0]=e[0],this}toJSON(){return[this[0]]}}class gL extends gR{get mode(){return"argb32"}get r(){return(this[0]>>16&255)/255}set r(e){this[0]=4278255615&this[0]|gT(e,16)}get g(){return(this[0]>>8&255)/255}set g(e){this[0]=4294902015&this[0]|gT(e,8)}get b(){return(255&this[0])/255}set b(e){this[0]=4294967040&this[0]|gT(e)}copy(){return new gL([this[0]])}copyView(){return new gL(this.buf,this.offset,this.stride)}empty(){return new gL}}m_(gL.prototype,"value",0);class gN extends gR{get mode(){return"abgr32"}get r(){return(255&this[0])/255}set r(e){this[0]=4294967040&this[0]|gT(e)}get g(){return(this[0]>>8&255)/255}set g(e){this[0]=4294902015&this[0]|gT(e,8)}get b(){return(this[0]>>16&255)/255}set b(e){this[0]=4278255615&this[0]|gT(e,16)}copy(){return new gN([this[0]])}copyView(){return new gN(this.buf,this.offset,this.stride)}empty(){return new gN}}m_(gN.prototype,"value",0);let gD=(e,t)=>{let r=(n,...o)=>null==n?new e:hU(n)?o.length&&o.every(hU)?new e([gO([n,...o])]):new e([n],...o):pZ(n)?r(hO(n)):dC(n)?pZ(n.mode)?new e([t(gP(n))],...o):new e(n,...o):dw(n,"deref")?new e([t(gP(n))],...o):p5(`can't create a ARGB32 color from: ${n}`);return r.class=e,r.range=[[0],[4294967295]],r.random=(t=mD,r,n,o)=>new e(r,n,o).set([16777215&t.int()|4278190080]),r.mapBuffer=(t,r=t.length,n=0,o=1,i=1)=>hk(e,t,r,n,o,i),r},gF=gD(gL,gO),gI=gD(gN,e=>(255*mW(e[3])+.5<<24|255*hn(e[2])+.5<<16|255*hn(e[1])+.5<<8|255*hn(e[0])+.5)>>>0),gU=(e,t,r=hp)=>gt(null,r,gf(e,t)),gz=(e,t)=>gU(e,t,hm),gk=e=>e>.00885645?Math.cbrt(e):7.787037*e+16/116,gB=(e,t,r=hb)=>{let n=gk(t[0]/r[0]),o=gk(t[1]/r[1]),i=gk(t[2]/r[2]);return hC(e||t,1.16*o-.16,5*(n-o),2*(o-i),mW(t[3]))},gj=(e,t)=>gB(e,t,hx),g$=(e,t)=>gB(null,gU(e,t)),gV=(e,t)=>gt(e,hy,t),gG=(e,t)=>gt(e,hv,t),gq=(e,t)=>gj(e,gG(e,m6(e,t))),gH=(e,t)=>gB(e,gV(e,m8(e,t))),gW=m1({mode:"lab50",channels:{a:{range:[-.7929,.9355]},b:{range:[-1.1203,.9339]}},order:["l","a","b","alpha"],from:{rgb:g$,lch:m4,lab65:gH,xyz50:gB,xyz65:[gV,gB]},toRgb:go}),gX=m1({mode:"lab65",channels:{a:{range:[-.8618,.9823]},b:{range:[-1.0786,.9448]}},order:["l","a","b","alpha"],from:{rgb:(e,t)=>gj(null,gz(e,t)),lch:[m4,gq],lab50:gq,xyz50:[gG,gj],xyz65:gj},toRgb:gi}),gK=m1({mode:"lch",channels:{c:{range:[0,1.312]},h:{hue:!0}},order:["l","c","h","alpha"],from:{rgb:(e,t)=>m9(null,g$(e,t)),lab50:m9,lab65:[gH,m9],xyz50:[gB,m9],xyz65:[gV,gB,m9]},toRgb:[m4,go]}),[gY,gZ,gJ,gQ]=mu(((e="op")=>([t,r])=>`${t}=${e}(${r},n);`)("Math.pow"),"o,a,n"),g1=[.4122214708,.2119034982,.0883024619,.5363325363,.6806995451,.2817188376,.0514459929,.1073969566,.6299787005],g0=(e,t)=>gt(null,hS,gJ(null,gt(e,g1,t),1/3)),g2=(e,t)=>gt(null,hS,gJ(null,gt(e,hw,t),1/3)),g3=[4.0767416621,-1.2684380046,-.0041960863,-3.307711591,2.6097574011,-.7034186147,.2309699292,-.3413193965,1.707614701],g9=(e,{0:t,1:r,2:n,3:o})=>gt(e,g3,[(t+.3963377774*r+.2158037573*n)**3,(t-.1055613458*r-.0638541728*n)**3,(t-.0894841775*r-1.291485548*n)**3,o]),g4=m1({mode:"oklab",channels:{a:{range:[-.2339,.2762]},b:{range:[-.3115,.1986]}},order:["l","a","b","alpha"],from:{lab50:[m6,gG,g2],lab65:[m8,g2],lch:[m4,m8,g2],rgb:g0,xyz50:[gG,g2],xyz65:g2},toRgb:g9}),g5=(e,t)=>hC(e||t,t[0],Math.hypot(t[1],t[2]),m3(t[2],t[1])*p7,mW(t[3])),g6=m1({mode:"oklch",channels:{c:{range:[0,.3225]}},order:["l","c","h","alpha"],from:{oklab:g5,rgb:(e,t)=>g5(null,g0(e,t))},toRgb:[(e,t)=>hC(e||t,t[0],...m0(t[2]*p8,t[1]),mW(t[3])),g9]}),g8=(e,t)=>0!==t?e/t:0,g7=(e,t)=>{let{0:r,1:n,2:o}=t;return hC(e||t,g8(o*r,n),o,g8(o*(1-r-n),n),mW(t[3]))},ve=(e,t,r=hd)=>{let n=t[0],o=(2-2*r[2])*t[1],i=(2-2*r[0])*t[2];return hC(e||t,n+i,n-r[2]/r[1]*o-r[0]/r[1]*i,n+o,mW(t[3]))},vt=m1({mode:"rgb",order:["r","g","b","alpha"],from:{abgr32:(e,t)=>mQ(e,t[0]),argb32:(e,t)=>mJ(e,t[0]),hcy:gg,hsi:gx,hsl:g_,hsv:gM,lab50:go,lab65:gi,lch:[m4,go],oklab:g9,rgb:m$,srgb:mZ,xyy:[g7,gn],xyz50:gr,xyz65:gn,ycc:ve},toRgb:m$}),vr=(e,t)=>{let{0:r,1:n}=t,o=r+n+t[2];return hC(e||t,g8(r,o),g8(n,o),n,mW(t[3]))},vn=m1({mode:"xyy",channels:{x:{range:[0,.6484]},y:{range:[0,.5979]}},order:["x","y","Y","alpha"],from:{rgb:(e,t)=>vr(null,gz(e,t)),xyz50:vr,xyz65:vr},toRgb:[g7,gn]}),vo=[1.2270138511035211,-.04058017842328059,-.0763812845057069,-.5577999806518222,1.1122568696168302,-.4214819784180127,.28125614896646783,-.07167667866560119,1.586163220440795],vi=[.9999999984505198,1.0000000088817607,1.0000000546724108,.3963377921737678,-.10556134232365633,-.08948418209496575,.21580375806075877,-.06385417477170588,-1.2914855378640917],va=(e,t)=>gt(null,vo,gJ(null,gt(e,vi,t),3)),vs=m1({mode:"xyz50",channels:{x:{range:[0,hb[0]]},y:{range:[0,hb[1]]},z:{range:[0,hb[2]]}},order:["x","y","z","alpha"],from:{rgb:gU,lab50:m6,lab65:[m8,gV],lch:[m4,m6],oklab:[va,gV],xyy:g7},toRgb:gr}),vl=m1({mode:"xyz65",channels:{x:{range:[0,hx[0]]},y:{range:[0,hx[1]]},z:{range:[0,hx[2]]}},order:["x","y","z","alpha"],from:{rgb:gz,lab50:[gq,m8],lab65:m8,lch:[m4,gq,m8],oklab:va,xyy:g7},toRgb:gn}),vu=m1({mode:"ycc",channels:{cb:{range:[-.5,.5]},cr:{range:[-.5,.5]}},order:["y","cb","cr","alpha"],from:{rgb:(e,t,r=hd)=>{let n=gl(t,r);return hC(e||t,n,.5*(t[2]-n)/(1-r[2]),.5*(t[0]-n)/(1-r[0]),mW(t[3]))}},toRgb:ve}),vc={argb32:gF,abgr32:gI,hcy:gv,hsi:gw,hsl:gE,hsv:gC,lab50:gW,lab65:gX,lch:gK,oklab:g4,oklch:g6,rgb:vt,srgb:gP,xyy:vn,xyz50:vs,xyz65:vl,ycc:vu};function vf(e,t,r,n){if(pZ(e))return t?vc[e](t,r,n):vf(hO(e));if(t){let o=vc[e.mode](t,r,n);return o.set(e.deref()),o}return vc[e.mode](e.deref())}var vd={};vd=function(){function e(e){// before continuing, check if classic syntax actually there
// example: p = ['A<B>C', 'Z']
// left should be ['A', 'B']
var t,r=e[0].match(/(.+)<(.)/),n=e[0].match(/(.)>(.+)/);// right should be ['B', 'C']
//return original production.
if(null===r&&null===n)return e;var o=e[1].successor||e[1].successors?e[1]:{successor:e[1]};return null!==r&&(t=r[2],o.leftCtx=r[1]),null!==n&&(t=n[1],o.rightCtx=n[2]),[t,o]}function t(e){if("string"!=typeof e&&e instanceof String==!1)return e;for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push({symbol:n})}return t}// TODO: continue here
Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,n=Array(r);r--;)n[r]=[t[r],e[t[r]]];return n});var r=/*#__PURE__*/function(){function r(e){var t=e.axiom,r=void 0===t?"":t,n=e.productions,o=e.finals,i=e.branchSymbols,a=e.ignoredSymbols,s=e.allowClassicSyntax,l=e.classicParametricSyntax,u=e.forceObjects,c=e.debug;this.ignoredSymbols=void 0===a?"+-&^/|\\":a,this.debug=void 0!==c&&c,this.branchSymbols=void 0===i?"[]":i,this.allowClassicSyntax=void 0===s||s,this.classicParametricSyntax=void 0!==l&&l,this.forceObjects=void 0!==u&&u,this.setAxiom(r),this.clearProductions(),n&&this.setProductions(n),o&&this.setFinals(o)}// TODO: forceObject to be more intelligent based on other productions??
var n=r.prototype;return n.setAxiom=function(e){this.axiom=this.forceObjects?t(e):e},n.getRaw=function(){return this.axiom}// if using objects in axioms, as used in parametric L-Systems
,n.getString=function(e){return(void 0===e&&(e=!0),"string"==typeof this.axiom)?this.axiom:!0===e?this.axiom.reduce(function(e,t){if(void 0===t.symbol)throw console.log("found:",t),Error("L-Systems that use only objects as symbols (eg: {symbol: 'F', params: []}), cant use string symbols (eg. 'F')! Check if you always return objects in your productions and no strings.");return e+t.symbol},""):JSON.stringify(this.axiom)},n.setProduction=function(r,n,o){void 0===o&&(o=!1);var i,a,s=[r,n];if(void 0===s)throw Error("no production specified.");if(n.successor&&n.successors)throw Error('You can not have both a "successor" and a "successors" field in your production!');if(!0===this.allowClassicSyntax&&(s=e(s)),i=s,a=this.forceObjects,i[1]=// if applicable also transform strings into array of {symbol: String} objects
// TODO: make more modular! dont have forceObjects in here
function e(r,n){if(r.hasOwnProperty("successors"))for(var o=0;o<r.successors.length;o++)r.successors[o]=e(r.successors[o],n);else!1===r.hasOwnProperty("successor")&&(r={successor:r});return n&&r.hasOwnProperty("successor")&&(r.successor=t(r.successor)),r}(i[1],a),(s=i)[1].isStochastic=void 0!==s[1].successors&&s[1].successors.every(function(e){return void 0!==e.weight}),s[1].isStochastic){// calculate weight sum
s[1].weightSum=0;for(var l=0,u=s[1].successors;l<u.length;l++){var c=u[l];s[1].weightSum+=c.weight}}var f=s[0];if(!0===o&&this.productions.has(f)){var d=this.productions.get(f),p=d.successor,h=d.successors;p&&!h&&// to new successors field.
(d={successors:[d]}),d.successors.push(s[1]),this.productions.set(f,d)}else this.productions.set(f,s[1])}// set multiple productions from name:value Object
,n.setProductions=function(e){if(void 0===e)throw Error("no production specified.");this.clearProductions();for(var t=0,r=Object.entries(e);t<r.length;t++){var n=r[t],o=n[0],i=n[1];this.setProduction(o,i,!0)}},n.clearProductions=function(){this.productions=new Map},n.setFinal=function(e,t){var r=[e,t];if(void 0===r)throw Error("no final specified.");this.finals.set(r[0],r[1])}// set multiple finals from name:value Object
,n.setFinals=function(e){if(void 0===e)throw Error("no finals specified.");for(var t in this.finals=new Map,e)e.hasOwnProperty(t)&&this.setFinal(t,e[t])}//var hasWeight = el => el.weight !== undefined;
,n.getProductionResult=function(e,t,r,n,o){void 0===o&&(o=!1);var i,a,s=void 0!==e.leftCtx||void 0!==e.rightCtx,l=void 0!==e.condition,u=!1,c=!0;if(l&&!1===e.condition({index:t,currentAxiom:this.axiom,part:r,params:n})?c=!1:s&&(void 0!==e.leftCtx&&void 0!==e.rightCtx?c=this.match({direction:"left",match:e.leftCtx,index:t,branchSymbols:this.branchSymbols,ignoredSymbols:this.ignoredSymbols}).result&&this.match({direction:"right",match:e.rightCtx,index:t,branchSymbols:this.branchSymbols,ignoredSymbols:this.ignoredSymbols}).result:void 0!==e.leftCtx?c=this.match({direction:"left",match:e.leftCtx,index:t,branchSymbols:this.branchSymbols,ignoredSymbols:this.ignoredSymbols}).result:void 0!==e.rightCtx&&(c=this.match({direction:"right",match:e.rightCtx,index:t,branchSymbols:this.branchSymbols,ignoredSymbols:this.ignoredSymbols}).result)),!1===c)u=!1;else if(e.successors){e.isStochastic&&(a=Math.random()*e.weightSum,i=0);/*
          go through the list and use
          the first valid production in that list. (that returns true)
          This assumes, it's a list of functions.
          No recursion here: no successors inside successors.
          */for(var f=0,d=e.successors;f<d.length;f++){var p=d[f];if(!e.isStochastic||!((i+=p.weight)<a)){// and evaluated recursively because it , kax also have rightCtx, leftCtx and condition to further inhibit production. This is not standard L-System behaviour though!
// last true is for recursiv call
// TODO: refactor getProductionResult to use an object if not a hit on perf
var h=this.getProductionResult(p,t,r,n,!0);if(void 0!==h&&!1!==h){u=h;break}}// If currentWeight >= thresWeight, a production is choosen stochastically
}}else u="function"==typeof e.successor?e.successor({index:t,currentAxiom:this.axiom,part:r,params:n}):e.successor;return u||(o?u:r)},n.applyProductions=function(){for(var e="string"==typeof this.axiom?"":[],t=0,r=0,n=this.axiom;r<n.length;r++){var o,i=n[r],a=i.symbol||i,s=i.params||[],l=i;if(this.productions.has(a)){var u=this.productions.get(a);l=this.getProductionResult(u,t,i,s)}// Got result. Now add result to new axiom.
"string"==typeof e?e+=l:l instanceof Array?// If result is an array, merge result into new axiom instead of pushing.
(o=e).push.apply(o,l):e.push(l),t++}// finally set new axiom and also return it for convenience.
return this.axiom=e,e},n.iterate=function(e){void 0===e&&(e=1),this.iterations=e;for(var t,r=0;r<e;r++)t=this.applyProductions();return t},n.final=function(e){for(var t=0,r=0,n=this.axiom;r<n.length;r++){var o=n[r],i=o;if("object"==typeof o&&o.symbol&&(i=o.symbol),this.finals.has(i)){var a=this.finals.get(i),s=typeof a;if("function"!==s)throw Error("'"+i+"' has an object for a final function. But it is __not a function__ but a "+s+"!");// execute symbols function
// supply in first argument an details object with current index and part
// and in the first argument inject the external argument (like a render target)
a({index:t,part:o},e)}t++}}/*
    how to use match():
     -----------------------
    It is mainly a helper function for context sensitive productions.
    If you use the classic syntax, it will by default be automatically transformed to proper
    JS-Syntax.
    Howerver, you can use the match helper function in your on productions:
    	index is the index of a production using `match`
    eg. in a classic L-System
    	LSYS = ABCDE
    B<C>DE -> 'Z'
    	the index of the `B<C>D -> 'Z'` production would be the index of C (which is 2) when the
    production would perform match(). so (if not using the ClassicLSystem class) you'd construction your context-sensitive production from C to Z like so:
    	LSYS.setProduction('C', (index, axiom) => {
    	(LSYS.match({index, match: 'B', direction: 'left'}) &&
    	 LSYS.match({index, match: 'DE', direction: 'right'}) ? 'Z' : 'C')
    })
    	You can just write match({index, ...} instead of match({index: index, ..}) because of new ES6 Object initialization, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_6
    */,n.match=function(e){var t,r,n,o,i,a,s,l=e.axiom_,u=e.match,c=e.ignoredSymbols,f=e.branchSymbols,d=e.index,p=e.direction,h=0,m=0;l=l||this.axiom,void 0===f&&(f=void 0!==this.branchSymbols?this.branchSymbols:[]),void 0===c&&(c=void 0!==this.ignoredSymbols?this.ignoredSymbols:[]);var g=[];if("right"===p){if(o=a=1,n=d+1,i=0,s=u.length,f.length>0){var v=f;t=v[0],r=v[1]}}else if("left"===p){if(o=a=-1,n=d-1,i=u.length-1,s=-1,f.length>0){var y=f;r=y[0],t=y[1]}}else throw Error(p,"is not a valid direction for matching.");for(;n<l.length&&n>=0;n+=o){var b=l[n].symbol||l[n],x=u[i];if(b===x)// -> no more matches to do. return with true, as everything matched until here
// *yay*
{if((0===h||m>0)&&(b===t?(m++,h++,i+=a):b===r?(m=Math.max(0,m-1),h=Math.max(0,h-1),0===m&&(i+=a)):(g.push(n),i+=a)),i===s)return{result:!0,matchIndices:g}}else if(b===t)h++,m>0&&m++;else if(b===r)h=Math.max(0,h-1),m>0&&(m=Math.max(0,m-1));else if((0===h||m>0&&x!==r)&&!1===c.includes(b))break}return{result:!1,matchIndices:g}},r}();return r.getStringResult=r.getString,// for users eg.
r.transformClassicStochasticProductions=// Get a list of productions that have identical initiators,
// Output a single stochastic production. Probability per production
// is defined by amount of input productions (4 => 25% each, 2 => 50% etc.)
// These transformers get a classic ABOP snytax as input and return a standardized
// production object in the form of ['F',
// {
//  successor:String/Iterable
//  [alternatively]stochasticSuccessors: Iterable of standardized objects with mandatory weight fields,
//  leftCtx: iterable/string,
//  rightCtx: Iterable/String,
//  condition: Function }]
function(e){return function(){for(var t=e.length,r=Math.random(),n=0;n<t;n++)if(r<=(n+1)/t)return e[n];console.error("Should have returned a result of the list, something is wrong here with the random numbers?.")}},r.transformClassicCSProduction=e,r.transformClassicParametricAxiom=// [ {symbol: 'A', params: [1,2,5]}, {symbol: 'B', params:[25]} ]
// strips spaces
function(e){for(var t=e.replace(/\s+/g,"").split(/[\(\)]/),r=[],n=0;n<t.length-1;n+=2){var o=t[n+1].split(",").map(Number);r.push({symbol:t[n],params:o})}// console.log('parsed axiom:', newAxiom)
},r.testClassicParametricSyntax=// And simply require it here, eg:
// this.testClassicParametricSyntax = require(classicSyntax.testParametric)??
function(e){return/\(.+\)/.test(e)},r}();let vp=Array.prototype.reduce,vh=(e,t,r)=>void 0===r?vp.call(t,e):vp.call(t,e,r),vm=(e,t,r=[])=>vh((r,n,o)=>(r[o]=e(n,o,t,r),r),t,r||t),vg=Array.prototype.forEach,vv=(e,t)=>(vg.call(t,e),t),{fill:vy}=Array.prototype,{isFinite:vb}=Number,{floor:vx}=Math,vw=(e=0,t,r,n)=>vy.call(vb(e)?Array(vx(e)):e,t,r,n);var vS=(e,t)=>(e%t+t)%t;let v_=(e,t,r=t.length)=>r||0===r?t[vS(e,r)]:vS(e,t),vE={diff:"-",dt:"-","⏳":"-",pause:0,"⏸":0,add:"+","⏭":"+"},vA=vE.diff,vM={[vE.diff]:Date.now,[vE.add]:1e3/60};var vC=function(e,t,r=e){var n,o,i;// Get the initial time and step-step.
let{time:a=0,step:s=vA,now:l}=e,u=null!==(n=vE[s])&&void 0!==n?n:s,c=u===vE.diff,f=null!==(i=null!==(o=null!=t?t:l)&&void 0!==o?o:vM[u])&&void 0!==i?i:u,d=u?(c?0:a)+(isNaN(f)?f():f):a,p=d-a;return(// If only returning a value, return the relevant calculated unknown.
r?(r.time=d,r.dt=p,r.step=s,r):c?p:d)};/** @module cube *//** @module utils *//**
 * Two times PI.
 * @constant {number}
 */let vT=2*Math.PI;function vP(e){let t=1/(Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])||1);return e[0]*=t,e[1]*=t,e[2]*=t,e}function vO(e){let t=typeof e[0];"object"!==t&&"undefined"!==t&&console.error("First argument must be an object.")}let vR=t=>e||(t<=255?Uint8Array:t<=65535?Uint16Array:Uint32Array),vL=[0,0,0],vN={z:[0,1,2,1,-1,1],"-z":[0,1,2,-1,-1,-1],"-x":[2,1,0,1,-1,-1],x:[2,1,0,-1,-1,1],y:[0,2,1,1,1,1],"-y":[0,2,1,1,-1,-1]};function vD(e,t,r,n,o,i,a="z",s=0,l=!1,u=[1,1],c=[0,0],f=[0,0,0],d=!0){let{positions:p,normals:h,uvs:m,cells:g}=e,[v,y,b,x,w,S]=vN[a],_=t.vertex;for(let e=0;e<=i;e++)for(let a=0;a<=o;a++)if(p[3*t.vertex+v]=(-r/2+a*r/o)*x+f[v],p[3*t.vertex+y]=(-n/2+e*n/i)*w+f[y],p[3*t.vertex+b]=s+f[b],h[3*t.vertex+b]=S,m[2*t.vertex]=a/o*u[0]+c[0],m[2*t.vertex+1]=(1-e/i)*u[1]+c[1],t.vertex++,e<i&&a<o){let r=_+e*(o+1)+a;if(l){let n=_+(e+1)*(o+1)+a;g[t.cell]=r,g[t.cell+1]=n,g[t.cell+2]=n+1,g[t.cell+3]=r+1}else g[t.cell]=r,g[t.cell+(d?1:2)]=r+o+1,g[t.cell+(d?2:1)]=r+o+2,g[t.cell+3]=r,g[t.cell+(d?4:5)]=r+o+2,g[t.cell+(d?5:4)]=r+1;t.cell+=l?4:6}return e}var vF=/**
 * @typedef {Object} CubeOptions
 * @property {number} [sx=1]
 * @property {number} [sy=sx]
 * @property {number} [sz=sx]
 * @property {number} [nx=1]
 * @property {number} [ny=nx]
 * @property {number} [nz=nx]
 *//**
 * @alias module:cube
 * @param {CubeOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({sx:e=1,sy:t=e,sz:r=e,nx:n=1,ny:o=n,nz:i=n}={}){vO(arguments);let a=(n+1)*(o+1)*2+(n+1)*(i+1)*2+(i+1)*(o+1)*2,s={positions:new Float32Array(3*a),normals:new Float32Array(3*a),uvs:new Float32Array(2*a),cells:new(vR(a))((n*o*2+n*i*2+i*o*2)*6)},l=.5*e,u=.5*t,c=.5*r,f={vertex:0,cell:0};return vD(s,f,e,t,n,o,"z",c),vD(s,f,e,t,n,o,"-z",-c),vD(s,f,r,t,i,o,"-x",-l),vD(s,f,r,t,i,o,"x",l),vD(s,f,e,r,n,i,"y",u),vD(s,f,e,r,n,i,"-y",-u),s},vI=/** @module roundedCube *//**
 * @typedef {Object} RoundedCubeOptions
 * @property {number} [sx=1]
 * @property {number} [sy=sx]
 * @property {number} [sz=sx]
 * @property {number} [nx=1]
 * @property {number} [ny=nx]
 * @property {number} [nz=nx]
 * @property {number} [radius=sx * 0.25]
 * @property {number} [roundSegments=8]
 * @property {number} [edgeSegments=1]
 *//**
 * @alias module:roundedCube
 * @param {RoundedCubeOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({sx:e=1,sy:t=e,sz:r=e,nx:n=1,ny:o=n,nz:i=n,radius:a=.25*e,roundSegments:s=8,edgeSegments:l=1}={}){vO(arguments);let u=(n+1)*(o+1)*2+(n+1)*(i+1)*2+(i+1)*(o+1)*2+(s+1)*(s+1)*24+(s+1)*(l+1)*24,c={positions:new Float32Array(3*u),normals:new Float32Array(3*u),uvs:new Float32Array(2*u),cells:new(vR(u))((n*o*2+n*i*2+i*o*2+s*s*24+s*l*24)*6)},f=.5*e,d=.5*t,p=.5*r,h=2*a,m=e-h,g=t-h,v=r-h,y=m/e,b=g/t,x=v/r,w=a/e,S=a/t,_=a/r,E={vertex:0,cell:0},A=[[m,g,n,o,"z",p,[y,b],[w,S],(e,t)=>[e,t,0]],[m,g,n,o,"-z",-p,[y,b],[w,S],(e,t)=>[-e,t,0]],[v,g,i,o,"-x",-f,[x,b],[_,S],(e,t)=>[0,t,e]],[v,g,i,o,"x",f,[x,b],[_,S],(e,t)=>[0,t,-e]],[m,v,n,i,"y",d,[y,x],[w,_],(e,t)=>[e,0,-t]],[m,v,n,i,"-y",-d,[y,x],[w,_],(e,t)=>[e,0,t]]],M=(e,t)=>[[0,0],[1-a/(e+h),0],[1-a/(e+h),1-a/(t+h)],[0,1-a/(t+h)]],C=(e,t)=>[0,a/(t+h)],T=(e,t)=>[1-a/(e+h),a/(t+h)];for(let e=0;e<A.length;e++){let[t,r,n,o,i,u,f,d,p]=A[e];vD(c,E,t,r,n,o,i,u,!1,f,d);// Corner order: ccw uv-like order and L/B (0) R/T (2)
// 0,1 -- 1,1
//  |  --  |
// 0,0 -- 1,0
for(let e=0;e<4;e++){let n=Math.ceil(e/2)%2,o=Math.floor(e/2)%2,m=(0===n?-1:1)*(t+a)*.5,g=(0===o?-1:1)*(r+a)*.5;vD(c,E,a,a,s,s,i,u,!1,[a/(t+h),a/(r+h)],M(t,r)[e],p(m,g)),(0===e||2===e)&&(vD(c,E,a,r,s,l,i,u,!1,[d[0],f[1]],0===n?C(t,r):T(t,r),p(m,0)),vD(c,E,t,a,l,s,i,u,!1,[f[0],d[1]],0===o?[...C(r,t)].reverse():[...T(r,t)].reverse(),p(0,g)))}}let P=.5*m,O=.5*g,R=.5*v;for(let e=0;e<c.positions.length;e+=3){let t=[c.positions[e],c.positions[e+1],c.positions[e+2]];vL[0]=t[0],vL[1]=t[1],vL[2]=t[2],t[0]<-P?t[0]=-P:t[0]>P&&(t[0]=P),t[1]<-O?t[1]=-O:t[1]>O&&(t[1]=O),t[2]<-R?t[2]=-R:t[2]>R&&(t[2]=R),vL[0]-=t[0],vL[1]-=t[1],vL[2]-=t[2],vP(vL),c.normals[e]=vL[0],c.normals[e+1]=vL[1],c.normals[e+2]=vL[2],c.positions[e]=t[0]+a*vL[0],c.positions[e+1]=t[1]+a*vL[1],c.positions[e+2]=t[2]+a*vL[2]}return c},vU=/** @module sphere *//** @module ellipsoid *//**
 * @typedef {Object} EllipsoidOptions
 * @property {number} [radius=0.5]
 * @property {number} [nx=32]
 * @property {number} [ny=16]
 * @property {number} [rx=1]
 * @property {number} [rx=0.5]
 * @property {number} [rz=ry]
 * @property {number} [theta=Math.PI]
 * @property {number} [thetaOffset=0]
 * @property {number} [phi=TAU]
 * @property {number} [phiOffset=0]
 *//**
 * Default to an oblate spheroid.
 * @alias module:ellipsoid
 * @param {EllipsoidOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({radius:e=1,nx:t=32,ny:r=16,rx:n=.5,ry:o=.25,rz:i=o,theta:a=Math.PI,thetaOffset:s=0,phi:l=vT,phiOffset:u=0}={}){vO(arguments);let c=(r+1)*(t+1),f=new Float32Array(3*c),d=new Float32Array(3*c),p=new Float32Array(2*c),h=new(vR(c))(r*t*6),m=0,g=0;for(let c=0;c<=r;c++){let v=c/r,y=v*a+s,b=Math.cos(y),x=Math.sin(y);for(let r=0;r<=t;r++){let a=r/t,s=a*l+u,c=Math.cos(s),h=Math.sin(s);vL[0]=-n*c*x,vL[1]=-o*b,vL[2]=i*h*x,f[3*m]=e*vL[0],f[3*m+1]=e*vL[1],f[3*m+2]=e*vL[2],vP(vL),d[3*m]=vL[0],d[3*m+1]=vL[1],d[3*m+2]=vL[2],p[2*m]=a,p[2*m+1]=v,m++}if(c>0)for(let e=m-2*(t+1);e+t+2<m;e++){let r=e,n=e+1,o=e+t+1,i=e+t+2;h[g]=r,h[g+1]=n,h[g+2]=o,h[g+3]=o,h[g+4]=n,h[g+5]=i,g+=6}}return{positions:f,normals:d,uvs:p,cells:h}},vz=/**
 * @typedef {Object} SphereOptions
 * @property {number} [radius=0.5]
 * @property {number} [nx=32]
 * @property {number} [ny=16]
 * @property {number} [theta=Math.PI]
 * @property {number} [thetaOffset=0]
 * @property {number} [phi=TAU]
 * @property {number} [phiOffset=0]
 *//**
 * @alias module:sphere
 * @param {SphereOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({radius:e=.5,nx:t=32,ny:r=16,theta:n,thetaOffset:o,phi:i,phiOffset:a}={}){return vO(arguments),vU({radius:e,nx:t,ny:r,theta:n,thetaOffset:o,phi:i,phiOffset:a,rx:1,ry:1})};/** @module icosphere */let vk=.5+Math.sqrt(5)/2;var vB=/**
 * @typedef {Object} IcosphereOptions
 * @property {number} [radius=0.5]
 * @property {number} [subdivisions=2]
 *//**
 * @alias module:icosphere
 * @param {IcosphereOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({radius:e=.5,subdivisions:t=2}={}){if(vO(arguments),t>10)throw Error("Max subdivisions is 10.");let r=Math.pow(4,t),n=10*r+2,o=0===t?3:3*Math.pow(2,t)+9,i=n+o,a=new Float32Array(3*i),s=new Float32Array(2*i);// prettier-ignore
a.set(Float32Array.of(-1,vk,0,1,vk,0,-1,-vk,0,1,-vk,0,0,-1,vk,0,1,vk,0,-1,-vk,0,1,-vk,vk,0,-1,vk,0,1,-vk,0,-1,-vk,0,1));// prettier-ignore
let l=Uint16Array.of(0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,11,10,2,5,11,4,1,5,9,7,1,8,10,7,6,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,9,8,1,4,9,5,2,4,11,6,2,10,8,6,7),u=12,c=t?{}:null;function f(e,t){// Cantor's pairing function
let r=Math.floor((e+t)*(e+t+1)/2+Math.min(e,t)),n=c[r];return void 0!==n?(delete c[r],n):(c[r]=u,a[3*u+0]=(a[3*e+0]+a[3*t+0])*.5,a[3*u+1]=(a[3*e+1]+a[3*t+1])*.5,a[3*u+2]=(a[3*e+2]+a[3*t+2])*.5,u++)}let d=l,p=t>5?Uint32Array:vR(i);// Subdivide
for(let e=0;e<t;e++){let e=d.length;l=new p(4*e);for(let t=0;t<e;t+=3){let e=d[t+0],r=d[t+1],n=d[t+2],o=f(e,r),i=f(r,n),a=f(n,e);l[4*t+0]=e,l[4*t+1]=o,l[4*t+2]=a,l[4*t+3]=r,l[4*t+4]=i,l[4*t+5]=o,l[4*t+6]=n,l[4*t+7]=a,l[4*t+8]=i,l[4*t+9]=o,l[4*t+10]=i,l[4*t+11]=a}d=l}// Normalize
for(let e=0;e<3*n;e+=3){let t=a[e+0],r=a[e+1],n=a[e+2],o=1/Math.sqrt(t*t+r*r+n*n);a[e+0]*=o,a[e+1]*=o,a[e+2]*=o}for(let e=0;e<n;e++)s[2*e+0]=-Math.atan2(a[3*e+2],a[3*e])/vT+.5,s[2*e+1]=Math.asin(a[3*e+1])/Math.PI+.5;let h={};function m(e,t,r,n){if(n){let t=h[e];if(void 0!==t)return t}return a[3*u+0]=a[3*e+0],a[3*u+1]=a[3*e+1],a[3*u+2]=a[3*e+2],s[2*u+0]=t,s[2*u+1]=r,n&&(h[e]=u),u++}for(let e=0;e<l.length;e+=3){let t=l[e+0],r=l[e+1],n=l[e+2],o=s[2*t],i=s[2*r],a=s[2*n],u=s[2*t+1],c=s[2*r+1],f=s[2*n+1];o-i>=.5&&1!==u&&(i+=1),i-a>.5&&(a+=1),(o<.5&&a-o>.5||1===o&&0===f)&&(o+=1),i<.5&&o-i>.5&&(i+=1);// Poles
let d=0===u||1===u,p=0===c||1===c,h=0===f||1===f;d?(o=(i+a)*.5,u===1-i?s[2*t]=o:l[e+0]=m(t,o,u,!1)):p?(i=(o+a)*.5,c===o?s[2*r]=i:l[e+1]=m(r,i,c,!1)):h&&(a=(o+i)*.5,f===o?s[2*n]=a:l[e+2]=m(n,a,f,!1)),o===s[2*t]||d||(l[e+0]=m(t,o,u,!0)),i===s[2*r]||p||(l[e+1]=m(r,i,c,!0)),a===s[2*n]||h||(l[e+2]=m(n,a,f,!0))}return{positions:a.map(t=>t*e),normals:a,uvs:s,cells:l}},vj=/** @module cylinder *//**
 * @typedef {Object} CylinderOptions
 * @property {number} [height=1]
 * @property {number} [radius=0.25]
 * @property {number} [nx=16]
 * @property {number} [ny=1]
 * @property {number} [radiusApex=radius]
 * @property {number} [capSegments=1]
 * @property {boolean} [capApex=true]
 * @property {boolean} [capBase=true]
 * @property {number} [phi=TAU]
 *//**
 * @alias module:cylinder
 * @param {CylinderOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({height:e=1,radius:t=.25,nx:r=16,ny:n=1,radiusApex:o=t,capSegments:i=1,capApex:a=!0,capBase:s=!0,capBaseSegments:l=i,phi:u=vT}={}){vO(arguments);let c=0;a&&(c+=i),s&&(c+=l);let f=r+1,d=n+1,p=f*d+2*f*c,h=new Float32Array(3*p),m=new Float32Array(3*p),g=new Float32Array(2*p),v=new(vR(p))((r*n+r*c)*6),y=0,b=0,x=e/2,w=1/(f-1),S=1/(d-1);for(let r=0;r<f;r++){let n=r*w;for(let r=0;r<d;r++){let i=r*S,a=n*u,s=-Math.cos(a),l=Math.sin(a),c=t*(1-i)+o*i;h[3*y]=c*s,h[3*y+1]=e*i-x,h[3*y+2]=c*l,vL[0]=e*s,vL[1]=t-o,vL[2]=e*l,vP(vL),m[3*y]=vL[0],m[3*y+1]=vL[1],m[3*y+2]=vL[2],g[2*y]=n,g[2*y+1]=i,y++}}for(let e=0;e<d-1;e++)for(let t=0;t<f-1;t++)v[b+0]=(t+0)*d+(e+0),v[b+1]=(t+1)*d+(e+0),v[b+2]=(t+1)*d+(e+1),v[b+3]=(t+0)*d+(e+0),v[b+4]=(t+1)*d+(e+1),v[b+5]=(t+0)*d+(e+1),b+=6;function _(e,t,r,n){let o=y,i=1/(f-1);for(let o=0;o<n;o++)for(let a=0;a<f;a++){let s=a*i*u,l=-Math.cos(s),c=Math.sin(s);// inner point
h[3*y]=r*l*o/n,h[3*y+1]=t,h[3*y+2]=r*c*o/n,m[3*y+1]=-e,g[2*y]=.5*l*o/n+.5,g[2*y+1]=.5*c*o/n+.5,// outer point
h[3*++y]=r*l*(o+1)/n,h[3*y+1]=t,h[3*y+2]=r*c*(o+1)/n,m[3*y+1]=-e,g[2*y]=.5*(l*(o+1))/n+.5,g[2*y+1]=.5*(c*(o+1))/n+.5,y++}for(let t=0;t<n;t++)for(let r=0;r<f-1;r++){let n=o+t*f*2+2*r,i=n+0,a=n+1,s=n+2,l=n+3;1===e?(v[b]=i,v[b+1]=s,v[b+2]=l,v[b+3]=i,v[b+4]=l,v[b+5]=a):(v[b+0]=i,v[b+1]=l,v[b+2]=s,v[b+3]=i,v[b+4]=a,v[b+5]=l),b+=6}}return s&&_(1,-x,t,l),a&&_(-1,x,o,i),{positions:h,normals:m,uvs:g,cells:v}},v$=/** @module cone *//**
 * @typedef {Object} ConeOptions
 * @property {number} [height=1]
 * @property {number} [radius=0.25]
 * @property {number} [nx=16]
 * @property {number} [ny=1]
 * @property {number} [capSegments=1]
 * @property {boolean} [capBase=true]
 * @property {number} [phi=TAU]
 *//**
 * @alias module:cone
 * @param {ConeOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({height:e,radius:t,nx:r,ny:n,capSegments:o,capBase:i,phi:a}={}){return vO(arguments),vj({height:e,radius:t,nx:r,ny:n,capSegments:o,capBase:i,phi:a,radiusApex:0,capApex:!1})},vV=/** @module capsule *//**
 * @typedef {Object} CapsuleOptions
 * @property {number} [height=0.5]
 * @property {number} [radius=0.25]
 * @property {number} [nx=16]
 * @property {number} [ny=1]
 * @property {number} [roundSegments=32]
 * @property {number} [phi=TAU]
 *//**
 * @alias module:capsule
 * @param {CapsuleOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({height:e=.5,radius:t=.25,nx:r=16,ny:n=1,roundSegments:o=16,phi:i=vT}={}){vO(arguments);let a=n+1,s=2*o,l=s+a,u=l*r,c=new Float32Array(3*u),f=new Float32Array(3*u),d=new Float32Array(2*u),p=new(vR(u))((l-1)*(r-1)*6),h=0,m=0,g=1/(r-1),v=1/(s-1),y=1/(a-1);function b(n,o,a){for(let s=0;s<r;s++,h++){let r=-Math.cos(s*g*i)*n,l=Math.sin(s*g*i)*n,u=t*o+e*a;c[3*h]=t*r,c[3*h+1]=u,c[3*h+2]=t*l,f[3*h]=r,f[3*h+1]=o,f[3*h+2]=l,d[2*h]=s*g,d[2*h+1]=1-(.5-u/(2*t+e))}}for(let e=0;e<o;e++)b(Math.sin(Math.PI*e*v),Math.sin(Math.PI*(e*v-.5)),-.5);for(let e=0;e<a;e++)b(1,0,e*y-.5);for(let e=o;e<s;e++)b(Math.sin(Math.PI*e*v),Math.sin(Math.PI*(e*v-.5)),.5);for(let e=0;e<l-1;e++)for(let t=0;t<r-1;t++){let n=e*r,o=(e+1)*r,i=t+1;p[m]=n+t,p[m+1]=n+i,p[m+2]=o+i,p[m+3]=n+t,p[m+4]=o+i,p[m+5]=o+t,m+=6}return{positions:c,normals:f,uvs:d,cells:p}},vG=/** @module torus *//**
 * @typedef {Object} TorusOptions
 * @property {number} [radius=0.4]
 * @property {number} [segments=64]
 * @property {number} [minorRadius=0.1]
 * @property {number} [minorSegments=32]
 * @property {number} [theta=TAU]
 * @property {number} [thetaOffset=0]
 * @property {number} [phi=TAU]
 * @property {number} [phiOffset=0]
 *//**
 * @alias module:torus
 * @param {TorusOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({radius:e=.4,segments:t=64,minorRadius:r=.1,minorSegments:n=32,theta:o=vT,thetaOffset:i=0,phi:a=vT,phiOffset:s=0}={}){vO(arguments);let l=(n+1)*(t+1),u=new Float32Array(3*l),c=new Float32Array(3*l),f=new Float32Array(2*l),d=new(vR(l))(n*t*6),p=0,h=0;for(let l=0;l<=n;l++){let m=l/n;for(let n=0;n<=t;n++,p++){let g=n/t,v=g*a+s,y=-Math.cos(v),b=Math.sin(v),x=m*o+i,w=-Math.cos(x),S=Math.sin(x);if(vL[0]=(e+r*w)*y,vL[1]=(e+r*w)*b,vL[2]=r*S,u[3*p]=vL[0],u[3*p+1]=vL[1],u[3*p+2]=vL[2],vL[0]-=e*y,vL[1]-=e*b,vP(vL),c[3*p]=vL[0],c[3*p+1]=vL[1],c[3*p+2]=vL[2],f[2*p]=g,f[2*p+1]=m,l>0&&n>0){let e=(t+1)*l+n-1,r=(t+1)*(l-1)+n-1,o=(t+1)*(l-1)+n,i=(t+1)*l+n;d[h]=e,d[h+1]=r,d[h+2]=i,d[h+3]=r,d[h+4]=o,d[h+5]=i,h+=6}}}return{positions:u,normals:c,uvs:f,cells:d}},vq=/** @module tetrahedron *//**
 * @typedef {Object} TetrahedronOptions
 * @property {number} [radius=0.5]
 *//**
 * @alias module:tetrahedron
 * @param {TetrahedronOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({radius:e=.5}={}){return vO(arguments),vj({height:1.5*e,radius:e,nx:3,ny:1,radiusApex:0,capSegments:0,capApex:!1,capBaseSegments:1})},vH=/** @module icosahedron *//**
 * @typedef {Object} IcosahedronOptions
 * @property {number} [radius=0.5]
 *//**
 * @alias module:icosahedron
 * @param {IcosahedronOptions} [options={}]
 * @returns {import("../types.js").SimplicialComplex}
 */function({radius:e}={}){return vO(arguments),vB({subdivisions:0,radius:e})};/**
 * @see [`pex` custom shader setup](https://github.com/pex-gl/pex-renderer/blob/main/examples/custom-shader.js)
 *//**
 * @see [`pex` custom shader setup](https://github.com/pex-gl/pex-renderer/blob/main/examples/custom-shader.js)
 */let vW="(?:^|\\n) *",vX="(?=(?: +)|\\n|$)",vK="#pragma swap-at",vY=RegExp(`(${vW+vK+vX}(?:.|\\n)*?)(?:${vW+"#pragma swap-by"+vX}((?:.|\\n)*?))?${vW+"#pragma swap-to"+vX}`,"g"),vZ=RegExp(vW+vK+vX,"g"),vJ=RegExp(`(${vW+"#define GLSLIFY"}(?:(?: +.*)|\\n|$))`,"g");var vQ=function(e,t){return(// Swap any chunks into their matched places.
e.replace(vY,(e,r,n="")=>vv(e=>e&&(t=t.replace(e,n)),r.split(vZ))),// Include any `glslify` info as-is, may be important for it to function.
e.replace(vJ,(e,r)=>t=r+t),t)},v1=e=>`
#if defined(DEPTH_PRE_PASS_ONLY) || defined(DEPTH_PASS_ONLY)
${vQ(e,/*@__PURE__*/q(fY))}
#else
${vQ(e,/*@__PURE__*/q(fX))}
#endif
`,v0={};v0="#define GLSLIFY 1\n// ...\n#pragma swap-at\n#if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)\nvarying vec4 vColor;\n#endif\n#pragma swap-by\n// Custom shader start.\nvarying vec4 vColor;\n// Custom shader end. Doesn't include match.\n#pragma swap-to\n// ...\n#pragma swap-at\nvoid main() {\n  vec4 position = vec4(aPosition, 1.0);\n#pragma swap-by\n// Custom shader start.\n\nuniform sampler2D x_volumeTexture;\nuniform vec2 x_volumeTile;\nuniform mat4 x_volumeInverse;\nuniform vec4 x_volumeRamp;\n\nfloat map_1(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map_1(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map_1(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map_1(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nuniform vec4 x_colors[2];\nuniform vec4 x_colorNoise;\n// Time now, step, looped.\nuniform vec3 x_time;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289(float x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n  {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n  return p;\n  }\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise(vec4 v)\n  {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n// First corner\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n  //  x1 = x0 - i1  + 1.0 * C.xxxx\n  //  x2 = x0 - i2  + 2.0 * C.xxxx\n  //  x3 = x0 - i3  + 3.0 * C.xxxx\n  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n\n// Permutations\n  i = mod289(i);\n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }\n\nconst vec3 ndcMin = vec3(-1, 1, -1);\nconst vec3 ncdMax = vec3(1, -1, 1);\nconst vec3 xzyMin = vec3(0);\nconst vec2 xzMax = vec2(1, 1);\n\nvec4 volume(sampler2D voxels, vec2 tile, in vec3 at) {\n  // Map the lookup position into volume space.\n  vec3 xzy = map_1(at.xzy, ndcMin, ncdMax, xzyMin, vec3(xzMax, tile.x*tile.y));\n  // Transform the volume-space origin into volume UV-space.\n  vec2 uv = (xzy.xy+floor(vec2(mod(xzy.z, tile.x), xzy.z/tile.x)))/tile;\n  // Sample the volume at the world-space origin.\n  vec4 voxel = texture2D(voxels, uv);\n  vec2 inside = 1.0-step(0.5, abs(uv-0.5));\n\n  voxel.a *= inside.x*inside.y;\n\n  return voxel;\n}\n\n#if defined(x_orientToVolume) || defined(x_clampToVolume)\n  // Scales for sampling normals and distance to clamp.\n  uniform vec2 x_volumeSurface;\n\n  \n\n// Requires `voxels` and `tile` to be defined in `glslify`'s `require` mapping.\nvec4 map_0(vec3 at) { return volume(x_volumeTexture, x_volumeTile, at); }\n\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you I\xf1igo :)\n\nvec3 calcNormal(vec3 pos, float eps) {\n  const vec3 v1 = vec3( 1.0,-1.0,-1.0);\n  const vec3 v2 = vec3(-1.0,-1.0, 1.0);\n  const vec3 v3 = vec3(-1.0, 1.0,-1.0);\n  const vec3 v4 = vec3( 1.0, 1.0, 1.0);\n\n  return normalize( v1 * map_0( pos + v1*eps ).x +\n                    v2 * map_0( pos + v2*eps ).x +\n                    v3 * map_0( pos + v3*eps ).x +\n                    v4 * map_0( pos + v4*eps ).x );\n}\n\nvec3 calcNormal(vec3 pos) {\n  return calcNormal(pos, 0.002);\n}\n\nvec3 toVolumeNormal(vec3 at, float eps) { return calcNormal(at, eps); }\nvec3 toVolumeNormal(vec3 at) { return calcNormal(at); }\n\n  /**\n * @see [GameDev](https://gamedev.stackexchange.com/a/11484)\n */\n\nconst vec3 atDef = vec3(0, 1, 0);\n\nmat4 rotation3d(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1.0 - c;\n\n  return mat4(\n    oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n    0.0,                                0.0,                                0.0,                                1.0\n  );\n}\n\nmat4 rotationByAxes(in vec3 at, in vec3 to) {\n  vec3 axis = cross(to, at);\n  float angle = acos(dot(to, at));\n\n  return rotation3d(axis, angle);\n}\n\nmat4 rotationByAxes(in vec3 to) { return rotationByAxes(atDef, to); }\n\n#endif\n\nvoid main() {\n  /**\n   * Transform the `position` as the origin instead of the `aPosition`:\n   * 1. Swap the origin for `aPosition` as `position`\n   * 2. Let default flow handle transforms to `position`\n   * ...\n   */\n  vec4 position = vec4(0, 0, 0, 1);\n\n  // Custom shader end. Doesn't include match.\n#pragma swap-to\n// ...\n#pragma swap-at\n\n  vPositionWorld = vec3(uModelMatrix * position);\n  vPositionView = vec3(uViewMatrix * vec4(vPositionWorld, 1.0));\n#pragma swap-by\n  // Custom shader, doesn't include match.\n#pragma swap-to\n// ...\n#pragma swap-at\n    positionView = uViewMatrix * skinMat * position;\n#pragma swap-at\n  vNormalView = vec3(uViewMatrix * skinMat * vec4(normal, 0.0));\n#pragma swap-by\n    // Custom shader start.\n    position = skinMat*position;\n  #else\n    position = uModelMatrix*position;\n  #endif\n\n  /**\n   * Transform the `position` as the origin instead of the `aPosition`:\n   * ...\n   * 3. Now the origin is in world-space, use it to sample the volume\n   * 4. Swap `position` back to `aPosition`\n   * 5. Apply volume transform, sampled at the origin, to `position`\n   * 6. Reapply the other transforms to `position` as per default flow\n   */\n\n  // Sample the volume at the world-space origin `position` transformed into the\n  // volume's local space.\n  vec4 x_voxel = volume(x_volumeTexture, x_volumeTile,\n    vec3(x_volumeInverse*position));\n\n  #if defined(x_orientToVolume) || defined(x_clampToVolume)\n    vec3 x_volumeNormal = toVolumeNormal(position.xyz, x_volumeSurface.x);\n    // mat3 x_volumeOrient = x_lookAt(x_volumeNormal);\n    mat4 x_volumeOrient = rotationByAxes(x_volumeNormal);\n  #endif\n\n  #if !defined(USE_VERTEX_COLORS) && !defined(USE_INSTANCED_COLOR)\n    vColor = vec4(1);\n  #endif\n\n  vColor *= mix(x_colors[0], x_colors[1],\n    // @todo Make the noise properly symmetrical, expand on this `abs` idea.\n    snoise(abs(vec4(position.xyz, x_time.z)*x_colorNoise)));\n\n  // Ramp the voxel by its distance from the volume, map it to a scale vector.\n  vec3 x_scale = x_voxel.xyz*x_voxel.a;\n\n  x_scale = map_1(smoothstep(x_volumeRamp.y, x_volumeRamp.x, x_scale),\n    vec3(0), vec3(1), vec3(x_volumeRamp.z), vec3(x_volumeRamp.w));\n\n  // Swap `position` back to `aPosition` scaled by the origin's volume sample.\n  position = vec4(aPosition*x_scale, 1);\n\n  #ifdef x_orientToVolume\n    // Orient the geometry to look along the volume normal.\n    position = x_volumeOrient*position;\n    normal = vec3(x_volumeOrient*vec4(normal, 0));\n  #endif\n\n  // Reapply transformations to `position`.\n  // @todo Possible bug in the pipeline, should transform the normal first?\n  #ifdef USE_DISPLACEMENT_MAP\n    position.xyz += uDisplacement*h*normal;\n  #endif\n  #ifdef USE_INSTANCED_SCALE\n    position.xyz *= aScale;\n  #endif\n  #ifdef USE_INSTANCED_ROTATION\n    position = rotationMat*position;\n  #endif\n  #ifdef USE_INSTANCED_OFFSET\n    position.xyz += aOffset;\n  #endif\n\n  #ifdef x_clampToVolume\n    // Clamp position within the volume, move it back along the volume normal.\n    position.xyz -= x_volumeNormal*max(x_voxel.xyz, 0.0)*x_volumeSurface.y;\n  #endif\n\n  #if !defined(DEPTH_PRE_PASS_ONLY) && !defined(DEPTH_PASS_ONLY)\n    vPositionWorld = vec3(uModelMatrix*position);\n    vPositionView = vec3(uViewMatrix*vec4(vPositionWorld, 1));\n  #endif\n\n  #ifdef USE_SKIN\n    // Custom shader end. Includes match:$&\n#pragma swap-to\n// ...\n";let v2=v1(/*@__PURE__*/q(v0));var v3=e=>`
#ifdef DEPTH_PRE_PASS_ONLY
${vQ(e,/*@__PURE__*/q(fJ))}
#elif defined(DEPTH_PASS_ONLY)
${vQ(e,/*@__PURE__*/q(fZ))}
#else
${vQ(e,/*@__PURE__*/q(fK))}
#endif
`,v9={};v9="#define GLSLIFY 1\n// ...\n#pragma swap-at\n#if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)\n  varying vec4 vColor;\n#endif\n#pragma swap-by\n// Custom shader start.\n#define USE_VERTEX_COLORS\n// Custom shader end. Includes match.$&\n#pragma swap-to\n// ...\n";let v4=v3(/*@__PURE__*/q(v9));var v5={};v5="#define GLSLIFY 1\n// ...\n#pragma swap-at\nvoid main() {\n#pragma swap-by\n// Custom shader start.\n\n// Time now, step, looped.\nuniform vec3 x_time;\nuniform vec3 x_distortNoise;\nuniform vec3 x_distortSpeed;\nuniform vec4 x_distortSurface;\n\nvec3 x_atNoise(vec3 at) {\n  return (at*x_distortNoise)+(x_time.z*x_distortSpeed);\n}\n\n#ifdef x_cellNoise\n  uniform float x_distortJitter;\n\n  // Permutation polynomial: (34x^2 + x) mod 289\nvec3 permute_0(vec3 x) {\n  return mod((34.0 * x + 1.0) * x, 289.0);\n}\n\nvec3 dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {\n  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);\n}\n\nvec2 worley(vec3 P, float jitter, bool manhattanDistance) {\nfloat K = 0.142857142857; // 1/7\nfloat Ko = 0.428571428571; // 1/2-K/2\nfloat  K2 = 0.020408163265306; // 1/(7*7)\nfloat Kz = 0.166666666667; // 1/6\nfloat Kzo = 0.416666666667; // 1/2-1/6*2\n\n	vec3 Pi = mod(floor(P), 289.0);\n 	vec3 Pf = fract(P) - 0.5;\n\n	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);\n	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);\n	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);\n\n	vec3 p = permute_0(Pi.x + vec3(-1.0, 0.0, 1.0));\n	vec3 p1 = permute_0(p + Pi.y - 1.0);\n	vec3 p2 = permute_0(p + Pi.y);\n	vec3 p3 = permute_0(p + Pi.y + 1.0);\n\n	vec3 p11 = permute_0(p1 + Pi.z - 1.0);\n	vec3 p12 = permute_0(p1 + Pi.z);\n	vec3 p13 = permute_0(p1 + Pi.z + 1.0);\n\n	vec3 p21 = permute_0(p2 + Pi.z - 1.0);\n	vec3 p22 = permute_0(p2 + Pi.z);\n	vec3 p23 = permute_0(p2 + Pi.z + 1.0);\n\n	vec3 p31 = permute_0(p3 + Pi.z - 1.0);\n	vec3 p32 = permute_0(p3 + Pi.z);\n	vec3 p33 = permute_0(p3 + Pi.z + 1.0);\n\n	vec3 ox11 = fract(p11*K) - Ko;\n	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;\n	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed\n\n	vec3 ox12 = fract(p12*K) - Ko;\n	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;\n	vec3 oz12 = floor(p12*K2)*Kz - Kzo;\n\n	vec3 ox13 = fract(p13*K) - Ko;\n	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;\n	vec3 oz13 = floor(p13*K2)*Kz - Kzo;\n\n	vec3 ox21 = fract(p21*K) - Ko;\n	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;\n	vec3 oz21 = floor(p21*K2)*Kz - Kzo;\n\n	vec3 ox22 = fract(p22*K) - Ko;\n	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;\n	vec3 oz22 = floor(p22*K2)*Kz - Kzo;\n\n	vec3 ox23 = fract(p23*K) - Ko;\n	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;\n	vec3 oz23 = floor(p23*K2)*Kz - Kzo;\n\n	vec3 ox31 = fract(p31*K) - Ko;\n	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;\n	vec3 oz31 = floor(p31*K2)*Kz - Kzo;\n\n	vec3 ox32 = fract(p32*K) - Ko;\n	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;\n	vec3 oz32 = floor(p32*K2)*Kz - Kzo;\n\n	vec3 ox33 = fract(p33*K) - Ko;\n	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;\n	vec3 oz33 = floor(p33*K2)*Kz - Kzo;\n\n	vec3 dx11 = Pfx + jitter*ox11;\n	vec3 dy11 = Pfy.x + jitter*oy11;\n	vec3 dz11 = Pfz.x + jitter*oz11;\n\n	vec3 dx12 = Pfx + jitter*ox12;\n	vec3 dy12 = Pfy.x + jitter*oy12;\n	vec3 dz12 = Pfz.y + jitter*oz12;\n\n	vec3 dx13 = Pfx + jitter*ox13;\n	vec3 dy13 = Pfy.x + jitter*oy13;\n	vec3 dz13 = Pfz.z + jitter*oz13;\n\n	vec3 dx21 = Pfx + jitter*ox21;\n	vec3 dy21 = Pfy.y + jitter*oy21;\n	vec3 dz21 = Pfz.x + jitter*oz21;\n\n	vec3 dx22 = Pfx + jitter*ox22;\n	vec3 dy22 = Pfy.y + jitter*oy22;\n	vec3 dz22 = Pfz.y + jitter*oz22;\n\n	vec3 dx23 = Pfx + jitter*ox23;\n	vec3 dy23 = Pfy.y + jitter*oy23;\n	vec3 dz23 = Pfz.z + jitter*oz23;\n\n	vec3 dx31 = Pfx + jitter*ox31;\n	vec3 dy31 = Pfy.z + jitter*oy31;\n	vec3 dz31 = Pfz.x + jitter*oz31;\n\n	vec3 dx32 = Pfx + jitter*ox32;\n	vec3 dy32 = Pfy.z + jitter*oy32;\n	vec3 dz32 = Pfz.y + jitter*oz32;\n\n	vec3 dx33 = Pfx + jitter*ox33;\n	vec3 dy33 = Pfy.z + jitter*oy33;\n	vec3 dz33 = Pfz.z + jitter*oz33;\n\n	vec3 d11 = dist(dx11, dy11, dz11, manhattanDistance);\n	vec3 d12 =dist(dx12, dy12, dz12, manhattanDistance);\n	vec3 d13 = dist(dx13, dy13, dz13, manhattanDistance);\n	vec3 d21 = dist(dx21, dy21, dz21, manhattanDistance);\n	vec3 d22 = dist(dx22, dy22, dz22, manhattanDistance);\n	vec3 d23 = dist(dx23, dy23, dz23, manhattanDistance);\n	vec3 d31 = dist(dx31, dy31, dz31, manhattanDistance);\n	vec3 d32 = dist(dx32, dy32, dz32, manhattanDistance);\n	vec3 d33 = dist(dx33, dy33, dz33, manhattanDistance);\n\n	vec3 d1a = min(d11, d12);\n	d12 = max(d11, d12);\n	d11 = min(d1a, d13); // Smallest now not in d12 or d13\n	d13 = max(d1a, d13);\n	d12 = min(d12, d13); // 2nd smallest now not in d13\n	vec3 d2a = min(d21, d22);\n	d22 = max(d21, d22);\n	d21 = min(d2a, d23); // Smallest now not in d22 or d23\n	d23 = max(d2a, d23);\n	d22 = min(d22, d23); // 2nd smallest now not in d23\n	vec3 d3a = min(d31, d32);\n	d32 = max(d31, d32);\n	d31 = min(d3a, d33); // Smallest now not in d32 or d33\n	d33 = max(d3a, d33);\n	d32 = min(d32, d33); // 2nd smallest now not in d33\n	vec3 da = min(d11, d21);\n	d21 = max(d11, d21);\n	d11 = min(da, d31); // Smallest now in d11\n	d31 = max(da, d31); // 2nd smallest now not in d31\n	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;\n	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest\n	d12 = min(d12, d21); // 2nd smallest now not in d21\n	d12 = min(d12, d22); // nor in d22\n	d12 = min(d12, d31); // nor in d31\n	d12 = min(d12, d32); // nor in d32\n	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz\n	d11.y = min(d11.y,d12.z); // Only two more to go\n	d11.y = min(d11.y,d11.z); // Done! (Phew!)\n	return sqrt(d11.xy); // F1, F2\n\n}\n\n  float x_toNoise(vec3 at) {\n    vec2 f1f2 = worley(at, x_distortJitter, false);\n\n    #if (x_cellNoise >= 0) && (x_cellNoise < 2)\n      return f1f2[x_cellNoise];\n    #else\n      return f1f2.y-f1f2.x;\n    #endif\n  }\n#else\n  //\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute_1( permute_1( permute_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n  // @todo Make the noise properly symmetrical, expand on this `abs` idea.\n  // float x_toNoise(vec3 at) { return x_noiseSimplex(abs(at)); }\n  float x_toNoise(vec3 at) { return snoise(at); }\n#endif\n\n#ifdef x_orientToField\n  // Scale for sampling normals.\n  uniform float x_distortNormal;\n\n  vec2 x_mapNoise(vec3 at) { return vec2(x_toNoise(at)); }\n\n  // Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you I\xf1igo :)\n\nvec3 calcNormal(vec3 pos, float eps) {\n  const vec3 v1 = vec3( 1.0,-1.0,-1.0);\n  const vec3 v2 = vec3(-1.0,-1.0, 1.0);\n  const vec3 v3 = vec3(-1.0, 1.0,-1.0);\n  const vec3 v4 = vec3( 1.0, 1.0, 1.0);\n\n  return normalize( v1 * x_mapNoise( pos + v1*eps ).x +\n                    v2 * x_mapNoise( pos + v2*eps ).x +\n                    v3 * x_mapNoise( pos + v3*eps ).x +\n                    v4 * x_mapNoise( pos + v4*eps ).x );\n}\n\nvec3 calcNormal(vec3 pos) {\n  return calcNormal(pos, 0.002);\n}\n\n#endif\n\nvarying vec3 x_position;\n\n// Custom shader end. Includes match.$&\n#pragma swap-to\n// ...\n#pragma swap-at\n    #ifdef USE_VERTEX_COLORS\n      vColor = aVertexColor;\n    #endif\n  #endif\n#pragma swap-at\n  #ifdef USE_VERTEX_COLORS\n    vColor = aVertexColor;\n  #endif\n#endif\n#pragma swap-by\n  // Custom shader end. Includes match.$&\n\n  /**\n   * Transform the local-space `position` and `normal` by the noise field:\n   * 1. Now the `position` is in local-space, use it to sample the noise field\n   * 2. Move `position` and `normal` by the noise samples\n   */\n\n  // Move `position` by a given amount along the current `normal`.\n  position.xyz += normal*x_distortSurface.x;\n\n  // Sample the noise at the local-space `position`.\n  vec3 x_positionNoise = x_atNoise(position.xyz);\n\n  #ifdef x_orientToField\n    normal = normalize(mix(normal,\n      calcNormal(x_positionNoise, x_distortNormal), x_distortSurface.y));\n  #endif\n\n  // Move `position` by the noise field sample along the new `normal`.\n  position.xyz += normal*x_toNoise(x_positionNoise)*x_distortSurface.z;\n  x_position = position.xyz;\n\n  // Custom shader end.\n#pragma swap-to\n// ...\n";let v6=v1(/*@__PURE__*/q(v5));var v8={};v8="#define GLSLIFY 1\n// ...\n#pragma swap-at\n#if defined(USE_VERTEX_COLORS) || defined(USE_INSTANCED_COLOR)\n  varying vec4 vColor;\n#endif\n#pragma swap-by\n// Custom shader start.\n\n// Time now, step, looped.\nuniform highp vec3 x_time;\nuniform highp vec3 x_distortNoise;\nuniform highp vec3 x_distortSpeed;\nuniform highp vec4 x_distortSurface;\n\nvec3 x_atNoise(vec3 at) {\n  return (at*x_distortNoise)+(x_time.z*x_distortSpeed);\n}\n\n#ifdef x_cellNoise\n  uniform highp float x_distortJitter;\n\n  // Permutation polynomial: (34x^2 + x) mod 289\nvec3 permute_0(vec3 x) {\n  return mod((34.0 * x + 1.0) * x, 289.0);\n}\n\nvec3 dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {\n  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);\n}\n\nvec2 worley(vec3 P, float jitter, bool manhattanDistance) {\nfloat K = 0.142857142857; // 1/7\nfloat Ko = 0.428571428571; // 1/2-K/2\nfloat  K2 = 0.020408163265306; // 1/(7*7)\nfloat Kz = 0.166666666667; // 1/6\nfloat Kzo = 0.416666666667; // 1/2-1/6*2\n\n	vec3 Pi = mod(floor(P), 289.0);\n 	vec3 Pf = fract(P) - 0.5;\n\n	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);\n	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);\n	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);\n\n	vec3 p = permute_0(Pi.x + vec3(-1.0, 0.0, 1.0));\n	vec3 p1 = permute_0(p + Pi.y - 1.0);\n	vec3 p2 = permute_0(p + Pi.y);\n	vec3 p3 = permute_0(p + Pi.y + 1.0);\n\n	vec3 p11 = permute_0(p1 + Pi.z - 1.0);\n	vec3 p12 = permute_0(p1 + Pi.z);\n	vec3 p13 = permute_0(p1 + Pi.z + 1.0);\n\n	vec3 p21 = permute_0(p2 + Pi.z - 1.0);\n	vec3 p22 = permute_0(p2 + Pi.z);\n	vec3 p23 = permute_0(p2 + Pi.z + 1.0);\n\n	vec3 p31 = permute_0(p3 + Pi.z - 1.0);\n	vec3 p32 = permute_0(p3 + Pi.z);\n	vec3 p33 = permute_0(p3 + Pi.z + 1.0);\n\n	vec3 ox11 = fract(p11*K) - Ko;\n	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;\n	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed\n\n	vec3 ox12 = fract(p12*K) - Ko;\n	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;\n	vec3 oz12 = floor(p12*K2)*Kz - Kzo;\n\n	vec3 ox13 = fract(p13*K) - Ko;\n	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;\n	vec3 oz13 = floor(p13*K2)*Kz - Kzo;\n\n	vec3 ox21 = fract(p21*K) - Ko;\n	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;\n	vec3 oz21 = floor(p21*K2)*Kz - Kzo;\n\n	vec3 ox22 = fract(p22*K) - Ko;\n	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;\n	vec3 oz22 = floor(p22*K2)*Kz - Kzo;\n\n	vec3 ox23 = fract(p23*K) - Ko;\n	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;\n	vec3 oz23 = floor(p23*K2)*Kz - Kzo;\n\n	vec3 ox31 = fract(p31*K) - Ko;\n	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;\n	vec3 oz31 = floor(p31*K2)*Kz - Kzo;\n\n	vec3 ox32 = fract(p32*K) - Ko;\n	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;\n	vec3 oz32 = floor(p32*K2)*Kz - Kzo;\n\n	vec3 ox33 = fract(p33*K) - Ko;\n	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;\n	vec3 oz33 = floor(p33*K2)*Kz - Kzo;\n\n	vec3 dx11 = Pfx + jitter*ox11;\n	vec3 dy11 = Pfy.x + jitter*oy11;\n	vec3 dz11 = Pfz.x + jitter*oz11;\n\n	vec3 dx12 = Pfx + jitter*ox12;\n	vec3 dy12 = Pfy.x + jitter*oy12;\n	vec3 dz12 = Pfz.y + jitter*oz12;\n\n	vec3 dx13 = Pfx + jitter*ox13;\n	vec3 dy13 = Pfy.x + jitter*oy13;\n	vec3 dz13 = Pfz.z + jitter*oz13;\n\n	vec3 dx21 = Pfx + jitter*ox21;\n	vec3 dy21 = Pfy.y + jitter*oy21;\n	vec3 dz21 = Pfz.x + jitter*oz21;\n\n	vec3 dx22 = Pfx + jitter*ox22;\n	vec3 dy22 = Pfy.y + jitter*oy22;\n	vec3 dz22 = Pfz.y + jitter*oz22;\n\n	vec3 dx23 = Pfx + jitter*ox23;\n	vec3 dy23 = Pfy.y + jitter*oy23;\n	vec3 dz23 = Pfz.z + jitter*oz23;\n\n	vec3 dx31 = Pfx + jitter*ox31;\n	vec3 dy31 = Pfy.z + jitter*oy31;\n	vec3 dz31 = Pfz.x + jitter*oz31;\n\n	vec3 dx32 = Pfx + jitter*ox32;\n	vec3 dy32 = Pfy.z + jitter*oy32;\n	vec3 dz32 = Pfz.y + jitter*oz32;\n\n	vec3 dx33 = Pfx + jitter*ox33;\n	vec3 dy33 = Pfy.z + jitter*oy33;\n	vec3 dz33 = Pfz.z + jitter*oz33;\n\n	vec3 d11 = dist(dx11, dy11, dz11, manhattanDistance);\n	vec3 d12 =dist(dx12, dy12, dz12, manhattanDistance);\n	vec3 d13 = dist(dx13, dy13, dz13, manhattanDistance);\n	vec3 d21 = dist(dx21, dy21, dz21, manhattanDistance);\n	vec3 d22 = dist(dx22, dy22, dz22, manhattanDistance);\n	vec3 d23 = dist(dx23, dy23, dz23, manhattanDistance);\n	vec3 d31 = dist(dx31, dy31, dz31, manhattanDistance);\n	vec3 d32 = dist(dx32, dy32, dz32, manhattanDistance);\n	vec3 d33 = dist(dx33, dy33, dz33, manhattanDistance);\n\n	vec3 d1a = min(d11, d12);\n	d12 = max(d11, d12);\n	d11 = min(d1a, d13); // Smallest now not in d12 or d13\n	d13 = max(d1a, d13);\n	d12 = min(d12, d13); // 2nd smallest now not in d13\n	vec3 d2a = min(d21, d22);\n	d22 = max(d21, d22);\n	d21 = min(d2a, d23); // Smallest now not in d22 or d23\n	d23 = max(d2a, d23);\n	d22 = min(d22, d23); // 2nd smallest now not in d23\n	vec3 d3a = min(d31, d32);\n	d32 = max(d31, d32);\n	d31 = min(d3a, d33); // Smallest now not in d32 or d33\n	d33 = max(d3a, d33);\n	d32 = min(d32, d33); // 2nd smallest now not in d33\n	vec3 da = min(d11, d21);\n	d21 = max(d11, d21);\n	d11 = min(da, d31); // Smallest now in d11\n	d31 = max(da, d31); // 2nd smallest now not in d31\n	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;\n	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest\n	d12 = min(d12, d21); // 2nd smallest now not in d21\n	d12 = min(d12, d22); // nor in d22\n	d12 = min(d12, d31); // nor in d31\n	d12 = min(d12, d32); // nor in d32\n	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz\n	d11.y = min(d11.y,d12.z); // Only two more to go\n	d11.y = min(d11.y,d11.z); // Done! (Phew!)\n	return sqrt(d11.xy); // F1, F2\n\n}\n\n  float x_toNoise(vec3 at) {\n    vec2 f1f2 = worley(at, x_distortJitter, false);\n\n    #if (x_cellNoise >= 0) && (x_cellNoise < 2)\n      return f1f2[x_cellNoise];\n    #else\n      return f1f2.y-f1f2.x;\n    #endif\n  }\n#else\n  //\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute_1( permute_1( permute_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n  // @todo Make the noise properly symmetrical, expand on this `abs` idea.\n  // float x_toNoise(vec3 at) { return x_noiseSimplex(abs(at)); }\n  float x_toNoise(vec3 at) { return snoise(at); }\n#endif\n\nvarying highp vec3 x_position;\n// Custom shader end. Includes match.$&\n#pragma swap-to\n// ...\n#pragma swap-at\n    #ifdef USE_ALPHA_TEST\n      alphaTest(data);\n    #endif\n#pragma swap-at\n  #ifdef USE_ALPHA_TEST\n    alphaTest(data);\n  #endif\n#pragma swap-by\n  float x_alpha = x_toNoise(x_atNoise(x_position))*x_distortSurface.a;\n\n  data.opacity *= mix(1.0+x_alpha, x_alpha, max(0.0, sign(x_alpha)));\n\n  // Custom shader end. Includes match.$&\n#pragma swap-to\n// ...\n";let v7=v3(/*@__PURE__*/q(v8)),ye=self.x_api={},{min:yt,max:yr,abs:yn,floor:yo,round:yi,sqrt:ya,sin:ys,cos:yl,PI:yu,TAU:yc=2*yu}=Math,yf=(e,t,r,n,o)=>pI(e,pt(e,t,r,n,yl(o*=.5)),ys(o)),yd=(e,t,r=[])=>pA(r,pe(r,yl(e),ys(e),t),ya(1-t*t)),yp=ye.query=new URLSearchParams(location.search),yh=ye.id=yp.get("id")??"id",ym=ye.seed=parseInt(yp.get("seed")??1730319106)||0,yg=new pY(ym),yv=()=>yg.float(),yy=()=>yg.int(),yb=ye.pauseOnBlur="false"!==yp.get("pause-on-blur"),yx=ye.shadows=parseFloat(yp.get("shadows")||4)||0,yw=ye.state={/** Flag `boolean` to start the app in a paused state. Default is `false`. */pause:"true"===yp.get("pause"),/** Flag `boolean` to animate or update instantly. Default is `true`. */animate:"false"!==yp.get("animate")},yS=ye.screenshots="true"===yp.get("screenshots"),y_=ye.screenshotsAt=yS?[yp.has("screenshot-at-0")?vm(e=>parseFloat(e),yp.getAll("screenshot-at-0"),0):[.17,.19,.74],yp.has("screenshot-at-1")?vm(e=>parseFloat(e),yp.getAll("screenshot-at-1"),0):[.42,.26,.58],yp.has("screenshot-at-2")?vm(e=>parseFloat(e),yp.getAll("screenshot-at-2"),0):[-.78,-.19,-.03],yp.has("screenshot-at-3")?vm(e=>parseFloat(e),yp.getAll("screenshot-at-3"),0):[.09,.14,.51]].filter(e=>!isNaN(yt(...e))):null,yE=ye.upload="true"===yp.get("upload"),yA=ye.fxaa="false"!==yp.get("fxaa"),yM=ye.ssao="false"!==yp.get("ssao"),yC=ye.dof="false"!==yp.get("dof"),yT=ye.bloom="false"!==yp.get("bloom"),yP=ye.fog="false"!==yp.get("fog"),yO=ye.fogColor=vf(yp.get("fog-color")||"#1e1e1e").buf.slice(0,3),yR=ye.distortOrient="false"!==yp.get("distort-orient"),yL=yp.get("distort-cell")||2;yL=ye.distortCell="false"!==yL&&yL;/**
 * Distorted body noise input `number` scaling values per-axis.
 * 3 values, like `distort-noise=0&distort-noise=1&distort-noise=2`.
 * Default is `4`, `4`, `4` for `x`, `y`, `z` scales.
 */let yN=ye.distortNoise=yp.has("distort-noise")?vm(e=>parseFloat(e)||0,yp.getAll("distort-noise"),0):[4,4,4],yD=ye.distortSpeed=yp.has("distort-speed")?vm(e=>parseFloat(e)||0,yp.getAll("distort-speed"),0):[0,0,5e-5],yF=ye.distortJitter=parseFloat(yp.get("distort-jitter")||1)||0,yI=ye.distortSurface=yp.has("distort-surface")?vm(e=>parseFloat(e)||0,yp.getAll("distort-surface"),0):[.01,.1,.1,.3],yU=ye.distortMetal=parseFloat(yp.get("distort-metal")||.1)||0,yz=ye.distortRough=parseFloat(yp.get("distort-rough")||.9)||0,yk=ye.distortGaps=parseFloat(yp.get("distort-gaps")||.08)||0,yB=yp.get("distort-cull")||"front";yB=ye.distortCull=({none:"None",front:"Front",back:"Back",both:"FrontAndBack",Both:"FrontAndBack","front-and-back":"FrontAndBack"})[yB]??yB;/** Flag `boolean` to render the distorted body. Default is `true`. */let yj=ye.bodyShow="false"!==yp.get("body"),y$=ye.volumeRamp=[0,.03,.15,1],yV=ye.volumeClamp=parseFloat(yp.get("volume-clamp")||1.5),yG=ye.shapeColors=vm(e=>vf(e).buf,yp.has("shape-color")?yp.getAll("shape-color"):["#d17521","#0d1ec7"],0),yq=ye.shapeColorNoise=yp.has("shape-color-noise")?vm(e=>parseFloat(e),yp.getAll("shape-color-noise"),0):[5,5,5,3e-4],yH=ye.shapeMetal=parseFloat(yp.get("shape-metal")||.7)||0,yW=ye.shapeRough=parseFloat(yp.get("shape-rough")||.3)||0,yX=ye.shapeScales=yp.has("shape-scale")?vm(e=>parseFloat(e),yp.getAll("shape-scale"),0):[.02,.05],yK=ye.useShapes=yp.has("shape")?yp.getAll("shape"):["cube-f","tetrahedron-f"],yY=ye.scatter=parseFloat(yp.get("scatter")||600)||0,yZ=ye.scatterOffsets="false"!==yp.get("scatter-offsets"),yJ=ye.scatterRotates="true"===yp.get("scatter-rotates"),yQ=ye.scatterScales="false"!==yp.get("scatter-scales"),y1=ye.scatterGrow="false"!==yp.get("scatter-grow"),y0=ye.growSteps=parseInt(yp.get("grow-steps")||2)||0,y2=ye.growOffsets="false"!==yp.get("grow-offsets"),y3=ye.growRotates="true"===yp.get("grow-rotates"),y9=ye.growScales="false"!==yp.get("grow-scales"),y4=ye.growOffset=yp.has("grow-offset")?vm(e=>parseFloat(e),yp.getAll("grow-offset"),0):[-.01,.2,0],y5=ye.growRotate=yp.has("grow-rotate")?vm(e=>parseFloat(e),yp.getAll("grow-rotate"),0):yf([],...py,.08*yu),y6=ye.growScale=parseFloat(yp.get("grow-scale")||pW(...yX,.5))||0,y8=ye.growLength=parseFloat(yp.get("grow-length")||.03)||0,y7=ye.growAngle=parseFloat(yp.get("grow-angle")||.25)*yu||0,be=ye.growLengthRate=parseFloat(yp.get("grow-length-rate")||1.2)||0,bt=ye.growWidthRate=parseFloat(yp.get("grow-width-rate")||1.2)||0,br=ye.growAngleRate=parseFloat(yp.get("grow-angle-rate")||1.2)||0,bn=e=>e.replace(" ","+").replace("$","&").replace(".","?"),bo=ye.growAxiom=bn(yp.get("grow-axiom")??"^^A"),bi=ye.growRules=yp.has("grow-rule")?vm(bn,yp.getAll("grow-rule"),0):[// Tree (c) by edge-rewriting from Houdini Kitchen.
// 'F->F[+F]F[-F]F',
// Variations...
// 'F->F[_?@\\&+F]F[_?@/^-F]F',
// 'A->MF'
// Tree (e) by node-rewriting from Houdini Kitchen.
// 'A->F[+A][-A]FA',
// 'A->MF',
// Variations...
// 'F->/F[+A]\\f[-A]F',
// 'F->fMfM',
// Tree (f) by node-rewriting from Houdini Kitchen.
// 'A->F-[[A]+A]+F[+FA]-A',
// 'A->MF',
// Concentric by Shadi.
// 'A->[F"![^A&&A]-A++A]',
// Variations...
'A->M[F"![^A&&A]-A++A]'],ba=ye.eyeScale=vw(3,parseFloat(yp.get("eye-scale")||.03)||0),bs=ye.eyeIntense=parseFloat(yp.get("eye-intense")||.2)||0,bl=ye.eyeAlpha=parseFloat(yp.get("eye-alpha")||.6)||0,bu=ye.eyeColor=vf(yp.get("eye-color")||"#fff").buf,bc=ye.eyeEmit=parseFloat(yp.get("eye-emit")||2)||0,bf=ye.eyesAt=[yp.has("eye-l")?vm(e=>parseFloat(e),yp.getAll("eye-l"),0):[-.022,.106,.158],yp.has("eye-r")?vm(e=>parseFloat(e),yp.getAll("eye-r"),0):[.065,.11,.135]].filter(e=>!isNaN(yt(...e))),bd=ye.lightsAt=[yp.has("lit-at-0")?vm(e=>parseFloat(e),yp.getAll("lit-at-0"),0):[-1,-1,-1],yp.has("lit-at-1")?vm(e=>parseFloat(e),yp.getAll("lit-at-1"),0):[-1,1,1],yp.has("lit-at-2")?vm(e=>parseFloat(e),yp.getAll("lit-at-2"),0):[1,-1,-1],yp.has("lit-at-3")?vm(e=>parseFloat(e),yp.getAll("lit-at-3"),0):[1,1,1]].filter(e=>!isNaN(yt(...e))),bp=ye.lightsColor=[vf(yp.get("lit-color-0")||"#00f").buf,vf(yp.get("lit-color-1")||"#00f").buf,vf(yp.get("lit-color-2")||"#f0f").buf,vf(yp.get("lit-color-3")||"#f0f").buf],bh=e=>e.href.replace(/\?.*$/,""),bm=new class extends ek{constructor(...[e]){let t=s1(e||{}),r=ia(t),n=oI(r),o=t1(n),i=o6(o),a=nZ(i),s=tT(a),l={...s,customUserAgent:"string"==typeof s.customUserAgent?[[s.customUserAgent]]:s.customUserAgent},u=oU(l),c=s9(u,e?.extensions||[]);super(c),this.config=c,this.middlewareStack.use(io(this.config)),this.middlewareStack.use(oB(this.config)),this.middlewareStack.use(r0(this.config)),this.middlewareStack.use(r9(this.config)),this.middlewareStack.use(r7(this.config)),this.middlewareStack.use(n4(this.config)),this.middlewareStack.use(tR(this.config)),this.middlewareStack.use(rJ(this.config)),this.middlewareStack.use(tC(this.config)),this.middlewareStack.use(oN(this.config))}destroy(){super.destroy()}}({region:n,credentials:{accessKeyId:i,secretAccessKey:o}});async function bg(e,n,o){let i={Bucket:t,Key:r+n,Body:e,ContentType:o};try{console.log("S3 uploaded",i,await bm.send(new rY(i)))}catch(e){console.warn("S3 error",i,e)}}var bv={};bv=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("gbexB");var by={};by=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("jDauw");var bb={};bb=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("7BKIm");var bx={};bx=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("kbPwK");var bw={};bw=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("33KmV");var bS={};bS=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("1qeZb");var b_={};b_=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("fh6Zo");var bE={};bE=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("36Wz7");var bA={};bA=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("1atLk");var bM={};bM=X("13t6T").getBundleURL("3Bbsg")+X("pPM0a").resolve("5trg3"),(async()=>{let e=ye.$canvas=document.querySelector("canvas"),t=ye.context=/*@__PURE__*/q(s4)({canvas:e,preserveDrawingBuffer:!0}),r=ye.renderer=/*@__PURE__*/q(lB)({ctx:t,pauseOnBlur:yb,shadowQuality:yx}),n=ye.timer=vC({step:1e3/60,loop:1e8}),{skyHDR:o,volumeImg:i}=await dc({skyHDR:{arrayBuffer:new URL(bv)+""},volumeImg:{image:new URL(by)+""}}),a=ye.blend={blend:!0,blendSrcRGBFactor:t.BlendFactor.One,blendDstRGBFactor:t.BlendFactor.OneMinusSrcAlpha,blendSrcAlphaFactor:t.BlendFactor.One,blendDstAlphaFactor:t.BlendFactor.OneMinusSrcAlpha},s=ye.camera=r.camera({fov:.5*yu,near:.01,far:100,fStop:1.6,sensorFit:"overscan",exposure:0}),l=ye.ease={eps:1e-4,orbit:.05,dof:.03,exposure:.03,surface:.02,light:.05},u=ye.easeNone={eps:0,orbit:1,dof:1,exposure:1,surface:1,light:1},c=ye.orbit=r.orbiter({position:[-.1,-.1,0],target:[0,.1,.25],element:e,minDistance:.2,maxDistance:1.5,easing:u.orbit}),f=ye.post=r.postProcessing({fxaa:yA,ssao:yM,dof:yC,dofFocusDistance:.5*c.minDistance,bloom:yT,bloomThreshold:1,bloomRadius:.5,fog:yP,fogColor:yO,fogDensity:.3,fogStart:c.minDistance,inscatteringCoeffs:vw(3,.3)});ye.viewer=r.add(r.entity([s,c,f]));let d={};c.update(),d.matrix=c.matrix,d.lat=c.lat,d.lon=c.lon,d.distance=c.distance,d.currentLat=c.currentLat,d.currentLon=c.currentLon,d.currentDistance=c.currentDistance;let p=ye.skyHDRData=/*@__PURE__*/q(df)(o),{data:h,shape:[m,g]}=p,v=ye.skyTexture=t.texture2D({data:h,width:m,height:g,flipY:!0,pixelFormat:t.PixelFormat.RGBA32F,encoding:t.Encoding.Linear}),y=ye.backgroundTexture=t.texture2D({data:[...yO,1],width:1,height:1}),b=ye.skybox=r.skybox({texture:v,backgroundTexture:y}),x=ye.reflector=r.reflectionProbe(),w=ye.environment=r.add(r.entity([b,x]));w.transform.set({rotation:pM(null,[0,1,0,yl(.5*yu)],ys(.5*yu))});let S=ye.volume=r.add(r.entity()),_=ye.volumeTexture=t.texture2D(i);S.transform.set({scale:vw(3,1.3)});let E=ye.volumeBounds=[{radius:.38,centre:[0,-.19,-.05]},{radius:.23,centre:[-.01,.25,.07]}],A={enabledCameras:null},M=e=>r.loadScene(bh(e),A),C=ye.body=await M(new URL(bb)),T=ye.distortPre=(yR?"#define x_orientToField\n":"")+(!1!==yL?`#define x_cellNoise ${yL}
`:""),P=ye.bodyMaterialState={vert:T+v6,frag:T+v7,uniforms:{x_distortNoise:yN,x_distortSpeed:yD,x_distortJitter:yF,x_distortSurface:yI,x_distortNormal:1e-5,x_time:vw(3)},metallic:yU,roughness:yz,castShadows:!!yx,receiveShadows:!!yx,// @todo Improve alpha blending and face-culling issues.
alphaTest:yk,...a,cullFace:"None"!==yB,cullFaceMode:t.Face[yB]??t.Face.FrontAndBack};C.entities.forEach(e=>e.getComponent("Material")&&e.addComponent(r.material(P))),C.root.transform.set({scale:vw(3,1.2),position:[0,-.32,0],enabled:yj}),r.add(C.root,S);let O=ye.toShapes=vm(([e,t],r,n,o)=>o[e]=t,[["cube-g",vF],["rounded-cube-g",vI],["sphere-g",vz],["icosphere-g",vB],["ellipsoid-g",vU],["cylinder-g",vj],["cone-g",v$],["capsule-g",vV],["torus-g",vG],["tetrahedron-g",vq],["icosahedron-g",vH],["cube-f",()=>M(new URL(bx))],["tetrahedron-f",()=>M(new URL(bw))],// @todo Why is this white? Might be broken normals, tangents, even UVs?
["icosahedron-f",()=>M(new URL(bS))],// @todo Why is this white? Might be broken normals, tangents, even UVs?
["sphere-f",()=>M(new URL(b_))],// @todo Why is this white? Might be broken normals, tangents, even UVs?
["octahedron-f",()=>M(new URL(bE))],// @todo Why is this white? Might be broken normals, tangents, even UVs?
["soccer-f",()=>M(new URL(bA))],// @todo Why is this not appearing?
["dodecahedron-f",()=>M(new URL(bM))]],{}),R=ye.shapes=vm(e=>e.root?e:{root:r.entity([r.geometry(e)])},await Promise.all(vm(e=>O[e](),yK)),0),L=ye.shapeTo={volumeClamp:yV},N=ye.shapeMaterialState={// ...shapeInVolume,
vert:"#define x_orientToVolume\n#define x_clampToVolume\n"+v2,frag:v4,uniforms:{x_volumeTexture:_,x_volumeTile:[8,8],x_volumeInverse:[],// Starting the ramp off below 0, to grow the shapes in over time.
x_volumeRamp:pP(null,[...y$],-y$[1]),x_volumeSurface:[.1,-(1.5*L.volumeClamp)],x_colors:yG,x_colorNoise:yq,x_time:vw(3)},metallic:yH,roughness:yW,castShadows:!!yx,receiveShadows:!!yx,...a},D=ye.instancesAll={instances:0},F=ye.instancesShapes=vm(()=>({...D}),R),I=ye.instanced=(e,t,r)=>(e[t]??={data:r??[],divisor:1}).data;yY&&vh((e,t,r,n)=>{let o=v_(yy(),F);if(yZ){let{radius:t,centre:i}=v_(yy(),E);I(o,"offsets").push(I(e,"offsets",n)[r]=pD(null,yd(yv()*yc,pW(-1,1,yv())),yv()**.6*t,i))}return yJ&&I(o,"rotations").push(I(e,"rotations")[r]=yf(null,yv(),yv(),yv(),yv()*yc)),yQ&&I(o,"scales").push(I(e,"scales")[r]=vw(3,pW(...yX,yv()))),++e.instances,++o.instances,e},vw(yY),D);let U=ye.grow={instances:{all:D,shapes:F},// Current "turtle" state.
at:{// Instance target.
shape:0,// Instance properties.
offset:[...y4],rotation:[...y5],scale:vw(3,y6),// Step scales.
length:y8,width:y6,angle:y7,// Step scale rates of change.
lengthRate:be,widthRate:bt,angleRate:br,// Derived steps.
ahead:void 0,yawR:void 0,yawL:void 0,pitchD:void 0,pitchU:void 0,rollCW:void 0,rollCCW:void 0},turnBack:yf([],...py,yu),rollOver:yf([],...pb,yu),toInstance(e,t,r,n,o){let{at:i,instances:a,toScale:s,toRotation:l,toOffset:u}=e,{all:c,shapes:f}=a,d=e.shape=v_(t??=i.shape,f);if(y2&&(r??=u(e)?.slice?.())){let e;// Distance outside the nearest volume.
let t=vh((t,n)=>{let{radius:o,centre:i}=n;return t>(t=p$(r,i)-o)&&(e=n),t},E,1/0);// Wrap inside the nearest volume.
if(e&&t>0){let{centre:n,radius:o}=e;pq(null,r,n,(t+o+o)/(t+o))}I(c,"offsets").push(r),I(d,"offsets").push(r)}return y3&&(n??=l(e)?.slice?.())&&I(c,"rotations").push(n)&&I(d,"rotations").push(n),y9&&(o??=s(e)?.slice?.())&&I(c,"scales").push(o)&&I(d,"scales").push(o),++c.instances,++d.instances,d},toOffset:({at:{offset:e,length:t,ahead:r}},n=0,o=t)=>n?pD(e,r,n*o,e):e,toScale:({at:{scale:e,width:t}},r=1,n)=>pM(e,pe(e,1,1,1),r*(n??=t)),toRotation:({at:e,at:{rotation:t,ahead:r=e.ahead??=[]}},n)=>pp(r,n?ph(t,t,n):t,pb)&&t,toLength:({at:e},t=1)=>e.length*=t,toWidth:({at:e},t=1)=>e.width*=t,toAngle({at:e},t=1){let{yawL:r,yawR:n,pitchD:o,pitchU:i,rollCW:a,rollCCW:s}=e,{angle:l}=e,u=l!==(l=e.angle*=t);(u||!n)&&yf(e.yawR??=[],...py,-l),(u||!r)&&yf(e.yawL??=[],...py,l),(u||!o)&&yf(e.pitchD??=[],...pv,-l),(u||!i)&&yf(e.pitchU??=[],...pv,l),(u||!a)&&yf(e.rollCW??=[],...pb,-l),(u||!s)&&yf(e.rollCCW??=[],...pb,l)},setup(e){e.toAngle(e),e.toLength(e),e.toWidth(e),e.toRotation(e),e.toOffset(e),e.toScale(e)},branches:[]},z=U.finals={/**
     * @see [3D interactive demo](https://github.com/nylki/lindenmayer/blob/main/docs/examples/interactive_lsystem_builder/index_3d.html)
     * @see [Houdini L-system syntax](https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html)
     * @see [Houdini L-system recipes](https://www.houdinikitchen.net/2019/12/21/how-to-create-l-systems/)
     *//** Move forward, creating geometry. */F:(e,t)=>t.toOffset(t,1,e.part.size)&&t.toInstance(t),/** Move forward half the length, creating geometry. */H:(e,t)=>t.toOffset(t,.5,e.part.size)&&t.toInstance(t),/** Move forward but don't record a vertex. */G:(...e)=>console.warn("Grow L-system `G` final unused",...e),/** Move forward, no geometry created. */f:(e,t)=>t.toOffset(t,1,e.part.size),/** Move forward a half length, no geometry created. */h:(e,t)=>t.toOffset(t,.5,e.part.size),/** Copy geometry from leaf `J` at the turtle's position. */J:(e,t)=>t.toInstance(t,e.part.shape??0),/** Copy geometry from leaf `K` at the turtle's position. */K:(e,t)=>t.toInstance(t,e.part.shape??1),/** Copy geometry from leaf `M` at the turtle's position. */M:(e,t)=>t.toInstance(t,e.part.shape??yy()),/** Apply tropism vector (gravity). */T:(...e)=>console.warn("Grow L-system `T` final unused",...e),/** Turn right by angle. */"+":(e,t)=>t.toRotation(t,e.part.by??t.at.yawR),/** Turn left by angle. */"-":(e,t)=>t.toRotation(t,e.part.by??t.at.yawL),/** Pitch down by angle. */"&":(e,t)=>t.toRotation(t,e.part.by??t.at.pitchD),/** Pitch up by angle. */"^":(e,t)=>t.toRotation(t,e.part.by??t.at.pitchU),/** Roll clockwise by angle. */"\\":(e,t)=>t.toRotation(t,e.part.by??t.at.rollCW),/** Roll counter-clockwise by angle. */"/":(e,t)=>t.toRotation(t,e.part.by??t.at.rollCCW),/** Turn back. */"|":(e,t)=>t.toRotation(t,e.part.by??t.turnBack),/** Roll over. */"*":(e,t)=>t.toRotation(t,e.part.by??t.rollOver),/** Pitch/roll/turn random amount up to angle. */"~":(...e)=>console.warn("Grow L-system `~` final unused",...e),/** Multiply current length by step size scale. */'"':(e,t)=>t.toLength(t,e.part.by??t.at.lengthRate),/** Multiply current width by thickness scale. */"!":(e,t)=>t.toWidth(t,e.part.by??t.at.widthRate),/** Multiply current angle by angle scale. */";":(e,t)=>t.toAngle(t,e.part.by??t.at.angleRate),/** Divide current length by step size scale. */_:(e,t)=>t.toLength(t,e.part.by??1/t.at.lengthRate),/** Divide current width by thickness scale. */"?":(e,t)=>t.toWidth(t,e.part.by??1/t.at.widthRate),/** Divide current angle by angle scale. */"@":(e,t)=>t.toAngle(t,e.part.by??1/t.at.angleRate),/** Push turtle state (start a branch). */"[":(e,t)=>{let{at:r,toOffset:n,toRotation:o,toScale:i,branches:a}=t;a.push({...r,ahead:void 0,yawR:void 0,yawL:void 0,pitchD:void 0,pitchU:void 0,rollCW:void 0,rollCCW:void 0,offset:[...n(t)],rotation:[...o(t)],scale:[...i(t)]})},/** Pop turtle state (end a branch). */"]":(e,t)=>{let{branches:r,setup:n}=t;t.at=r.pop(),n(t)}},k=U.system=new/*@__PURE__*/(q(vd))({// forceObjects: true,
finals:z,productions:vh((e,t)=>{let[r,n]=t.split(/(?:=|(?:->))/);return e[r]=n,e},bi,{})}),B=U.run=(e,t,r)=>{let{offset:n,rotation:o,scale:i}=U.at;e&&pS(n,e),t&&p_(o,t),(r||0===r)&&pe(i,r,r,r),k.setAxiom(bo),U.setup(U),console.log(k.axiom,bi,k.productions),console.log(k.iterate(y0)),k.final(U)};y1?vv((e,t)=>B(e,I(D,"rotations")[t],I(D,"scales")[t]),I(D,"offsets")):B();let j=ye.shapeRoot=r.add(r.entity());R.forEach(({root:e,entities:t},n)=>{let o=F[n];function i(e){let t=e.getComponent("Geometry");if(!t)return e;let n=e.getComponent("Material");// @todo Need `positions` and `cells` arrays, but have write-only buffers.
// if(g.normals) { return; }
// const { positions, indices: cells } = g;
// g.set({ normals: toNormals(positions, cells) });
return n&&e.removeComponent(n),e.addComponent(r.material(N)),t.set(o),e}o.instances&&(t?.forEach?.(i),r.add(i(e),j))});let $=ye.eyesTo={scale:ba,intensity:bs},V=ye.eyes=vm(e=>r.add(r.entity([r.transform({position:e,scale:vw(3,0)}),r.geometry(vz()),r.material({...a,opacity:bl,emissiveColor:pM(null,[...bu],bc)}),r.pointLight({color:bu,intensity:0,range:1,castShadows:!!yx})]),S),bf,0);ye.pointLights=vm((e,t)=>{let n=bp[t];return r.add(r.entity([r.pointLight({intensity:9,castShadows:!!yx,color:n}),r.transform({position:e,enabled:yr(...n)>0})]))},bd,0);let G=()=>{},H=ye.draw=()=>{let{pause:e,animate:t}=yw;if(e)return;let{eps:o,dof:i,exposure:a,surface:d,light:p}=t?l:u,h=P.uniforms,{x_time:m}=h,g=N.uniforms,{x_time:v,x_volumeRamp:y,x_volumeSurface:b,x_volumeInverse:x}=g,{time:w,dt:_,loop:E}=t?vC(n):n;pS(m,pe(v,w,_,yn((w+E)%(2*E)-E)));let[A]=y;0-A>o&&pP(null,y,pW(A,0,d)-A);let M=b[1],C=L.volumeClamp;yn(M-C)>o&&(b[1]=pW(M,C,d));let T=S.transform;T.update(),ps(x,T.modelMatrix);let O=f.dofFocusDistance,R=c.distance;yn(O-R)>o&&f.set({dofFocusDistance:pW(O,R,i)});let D=s.exposure;yn(D-1)>o&&s.set({exposure:pW(D,1,a)});let{scale:F,intensity:I}=$;vv(e=>{let t=e.transform,r=t.scale,n=e.getComponent("PointLight"),i=n.intensity;yn(yr(...F)-yr(...r))>o&&t.set({scale:pq(null,r,F,p)}),yn(I-i)>o&&n.set({intensity:pW(i,I,p)})},V),r.draw()},W=ye.resize=e=>{let{innerWidth:r,innerHeight:n}=self,{pixelRatio:o}=t;t.set({width:r,height:n}),s.set({viewport:[0,0,r*o,n*o]}),t.frame(()=>(H(),e?.(),!1))},X=new Promise(e=>W(e));addEventListener("resize",()=>W());/** @todo Fix broken first image, never seems to be in the right place. */let K=ye.screenshot=(r,n=yh,o="@",i="png")=>new Promise(a=>t.frame(()=>{let{animate:t}=yw,s=new Date().toISOString().replace(/(:|\.)/gi,"-");r&&(yw.animate=!1,c.set(r),c.update()),H(),yw.animate=t;let l=`${n}-${s}-${o}.${i}`,u=dm(e,{filename:l,download:!yE});// Draw only one frame.
        return /** `POST` screens to the bucket with info in the gitignored `.env`. */yE&&bg(u,l,"image/"+i),a(u),!1}));await (yS?y_.reduce((e,t,r)=>e.then(()=>K({position:t},yh,r)),X):X),addEventListener("keyup",({key:t})=>"f"===t?e.requestFullscreen():" "===t?yw.pause=!yw.pause:"s"===t?K():"r"===t&&G()),c.set({...d}),c.update(),c.set({easing:(yw.animate?l:u).orbit,lat:10,lon:-70,distance:pW(c.minDistance,c.maxDistance,.25)}),t.frame(H)})()}();