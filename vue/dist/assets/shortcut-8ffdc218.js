import{cL as s}from"./index-63893352.js";var r=1/0,i=17976931348623157e292;function e(t){if(!t)return t===0?t:0;if(t=s(t),t===r||t===-r){var n=t<0?-1:1;return n*i}return t===t?t:0}function f(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}const h=t=>{const n=[];return t.shiftKey&&n.push("Shift"),t.ctrlKey&&n.push("Ctrl"),t.metaKey&&n.push("Cmd"),(t.code.startsWith("Key")||t.code.startsWith("Digit"))&&n.push(t.code),n.join(" + ")};export{h as g,f as l,e as t};