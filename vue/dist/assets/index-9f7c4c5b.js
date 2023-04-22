import{P as b,h as I,B as X,c as F,_ as f,aN as se,d as oe,t as ce,r as K,b as E,a as A,k as ve,a9 as pe,u as ye,ad as ne,y as be,A as ge,f as me,aI as xe,a8 as he,a5 as we,W as Be,aH as Q,aK as Ae}from"./index-ea5c2aef.js";var ue=function(){return{id:String,prefixCls:String,inputPrefixCls:String,defaultValue:b.oneOfType([b.string,b.number]),value:{type:[String,Number,Symbol],default:void 0},placeholder:{type:[String,Number]},autocomplete:String,type:{type:String,default:"text"},name:String,size:{type:String},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},addonBefore:b.any,addonAfter:b.any,prefix:b.any,suffix:b.any,autofocus:{type:Boolean,default:void 0},allowClear:{type:Boolean,default:void 0},lazy:{type:Boolean,default:!0},maxlength:Number,loading:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},showCount:{type:[Boolean,Object]},htmlSize:Number,onPressEnter:Function,onKeydown:Function,onKeyup:Function,onFocus:Function,onBlur:Function,onChange:Function,onInput:Function,"onUpdate:value":Function,valueModifiers:Object,hidden:Boolean}};const Ce=ue;var Fe=function(){return I(I({},X(ue(),["prefix","addonBefore","addonAfter","suffix"])),{},{rows:Number,autosize:{type:[Boolean,Object],default:void 0},autoSize:{type:[Boolean,Object],default:void 0},onResize:{type:Function},onCompositionstart:Function,onCompositionend:Function,valueModifiers:Object})};function le(t,e,v,r,o){var p;return F(t,(p={},f(p,"".concat(t,"-sm"),v==="small"),f(p,"".concat(t,"-lg"),v==="large"),f(p,"".concat(t,"-disabled"),r),f(p,"".concat(t,"-rtl"),o==="rtl"),f(p,"".concat(t,"-borderless"),!e),p))}var L=function(e){return e!=null&&(Array.isArray(e)?se(e).length:!0)};function _e(t){return L(t.prefix)||L(t.suffix)||L(t.allowClear)}function ee(t){return L(t.addonBefore)||L(t.addonAfter)}var Ie=["text","input"];const Se=oe({compatConfig:{MODE:3},name:"ClearableLabeledInput",inheritAttrs:!1,props:{prefixCls:String,inputType:b.oneOf(ce("text","input")),value:b.any,defaultValue:b.any,allowClear:{type:Boolean,default:void 0},element:b.any,handleReset:Function,disabled:{type:Boolean,default:void 0},direction:{type:String},size:{type:String},suffix:b.any,prefix:b.any,addonBefore:b.any,addonAfter:b.any,readonly:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},bordered:{type:Boolean,default:!0},triggerFocus:{type:Function},hidden:Boolean},setup:function(e,v){var r=v.slots,o=v.attrs,p=K(),P=function(n){var d;if((d=p.value)!==null&&d!==void 0&&d.contains(n.target)){var i=e.triggerFocus;i==null||i()}},y=function(n){var d,i=e.allowClear,u=e.value,l=e.disabled,h=e.readonly,g=e.handleReset,C=e.suffix,m=C===void 0?r.suffix:C;if(!i)return null;var _=!l&&!h&&u,x="".concat(n,"-clear-icon");return A(ve,{onClick:g,onMousedown:function(w){return w.preventDefault()},class:F((d={},f(d,"".concat(x,"-hidden"),!_),f(d,"".concat(x,"-has-suffix"),!!m),d),x),role:"button"},null)},Y=function(n){var d,i=e.suffix,u=i===void 0?(d=r.suffix)===null||d===void 0?void 0:d.call(r):i,l=e.allowClear;return u||l?A("span",{class:"".concat(n,"-suffix")},[y(n),u]):null},U=function(n,d){var i,u,l,h=e.focused,g=e.value,C=e.prefix,m=C===void 0?(i=r.prefix)===null||i===void 0?void 0:i.call(r):C,_=e.size,x=e.suffix,N=x===void 0?(u=r.suffix)===null||u===void 0?void 0:u.call(r):x,w=e.disabled,R=e.allowClear,j=e.direction,W=e.readonly,z=e.bordered,D=e.hidden,G=e.addonAfter,Z=G===void 0?r.addonAfter:G,c=e.addonBefore,a=c===void 0?r.addonBefore:c,s=Y(n);if(!_e({prefix:m,suffix:N,allowClear:R}))return E(d,{value:g});var $=m?A("span",{class:"".concat(n,"-prefix")},[m]):null,B=F("".concat(n,"-affix-wrapper"),(l={},f(l,"".concat(n,"-affix-wrapper-focused"),h),f(l,"".concat(n,"-affix-wrapper-disabled"),w),f(l,"".concat(n,"-affix-wrapper-sm"),_==="small"),f(l,"".concat(n,"-affix-wrapper-lg"),_==="large"),f(l,"".concat(n,"-affix-wrapper-input-with-clear-btn"),N&&R&&g),f(l,"".concat(n,"-affix-wrapper-rtl"),j==="rtl"),f(l,"".concat(n,"-affix-wrapper-readonly"),W),f(l,"".concat(n,"-affix-wrapper-borderless"),!z),f(l,"".concat(o.class),!ee({addonAfter:Z,addonBefore:a})&&o.class),l));return A("span",{ref:p,class:B,style:o.style,onMouseup:P,hidden:D},[$,E(d,{style:null,value:g,class:le(n,z,_,w)}),s])},k=function(n,d){var i,u,l,h=e.addonBefore,g=h===void 0?(i=r.addonBefore)===null||i===void 0?void 0:i.call(r):h,C=e.addonAfter,m=C===void 0?(u=r.addonAfter)===null||u===void 0?void 0:u.call(r):C,_=e.size,x=e.direction,N=e.hidden;if(!ee({addonBefore:g,addonAfter:m}))return d;var w="".concat(n,"-group"),R="".concat(w,"-addon"),j=g?A("span",{class:R},[g]):null,W=m?A("span",{class:R},[m]):null,z=F("".concat(n,"-wrapper"),w,f({},"".concat(w,"-rtl"),x==="rtl")),D=F("".concat(n,"-group-wrapper"),(l={},f(l,"".concat(n,"-group-wrapper-sm"),_==="small"),f(l,"".concat(n,"-group-wrapper-lg"),_==="large"),f(l,"".concat(n,"-group-wrapper-rtl"),x==="rtl"),l),o.class);return A("span",{class:D,style:o.style,hidden:N},[A("span",{class:z},[j,E(d,{style:null}),W])])},T=function(n,d){var i,u=e.value,l=e.allowClear,h=e.direction,g=e.bordered,C=e.hidden,m=e.addonAfter,_=m===void 0?r.addonAfter:m,x=e.addonBefore,N=x===void 0?r.addonBefore:x;if(!l)return E(d,{value:u});var w=F("".concat(n,"-affix-wrapper"),"".concat(n,"-affix-wrapper-textarea-with-clear-btn"),(i={},f(i,"".concat(n,"-affix-wrapper-rtl"),h==="rtl"),f(i,"".concat(n,"-affix-wrapper-borderless"),!g),f(i,"".concat(o.class),!ee({addonAfter:_,addonBefore:N})&&o.class),i));return A("span",{class:w,style:o.style,hidden:C},[E(d,{style:null,value:u}),y(n)])};return function(){var S,n=e.prefixCls,d=e.inputType,i=e.element,u=i===void 0?(S=r.element)===null||S===void 0?void 0:S.call(r):i;return d===Ie[0]?T(n,u):k(n,U(n,u))}}});function te(t){return typeof t>"u"||t===null?"":String(t)}function re(t,e,v,r){if(v){var o=e;if(e.type==="click"){Object.defineProperty(o,"target",{writable:!0}),Object.defineProperty(o,"currentTarget",{writable:!0});var p=t.cloneNode(!0);o.target=p,o.currentTarget=p,p.value="",v(o);return}if(r!==void 0){Object.defineProperty(o,"target",{writable:!0}),Object.defineProperty(o,"currentTarget",{writable:!0}),o.target=t,o.currentTarget=t,t.value=r,v(o);return}v(o)}}function $e(t,e){if(t){t.focus(e);var v=e||{},r=v.cursor;if(r){var o=t.value.length;switch(r){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(o,o);break;default:t.setSelectionRange(0,o)}}}}const Pe=oe({compatConfig:{MODE:3},name:"AInput",inheritAttrs:!1,props:Ce(),setup:function(e,v){var r=v.slots,o=v.attrs,p=v.expose,P=v.emit,y=K(),Y=K(),U,k=pe(),T=ye("input",e),S=T.direction,n=T.prefixCls,d=T.size,i=T.autocomplete,u=K(e.value===void 0?e.defaultValue:e.value),l=K(!1);ne(function(){return e.value},function(){u.value=e.value}),ne(function(){return e.disabled},function(){e.value!==void 0&&(u.value=e.value),e.disabled&&(l.value=!1)});var h=function(){U=setTimeout(function(){var a;((a=y.value)===null||a===void 0?void 0:a.getAttribute("type"))==="password"&&y.value.hasAttribute("value")&&y.value.removeAttribute("value")})},g=function(a){$e(y.value,a)},C=function(){var a;(a=y.value)===null||a===void 0||a.blur()},m=function(a,s,$){var B;(B=y.value)===null||B===void 0||B.setSelectionRange(a,s,$)},_=function(){var a;(a=y.value)===null||a===void 0||a.select()};p({focus:g,blur:C,input:y,stateValue:u,setSelectionRange:m,select:_});var x=function(a){var s=e.onFocus;l.value=!0,s==null||s(a),Q(function(){h()})},N=function(a){var s=e.onBlur;l.value=!1,s==null||s(a),k.onFieldBlur(),Q(function(){h()})},w=function(a){P("update:value",a.target.value),P("change",a),P("input",a),k.onFieldChange()},R=Ae(),j=function(a,s){u.value!==a&&(e.value===void 0?u.value=a:Q(function(){y.value.value!==u.value&&R.update()}),Q(function(){s&&s()}))},W=function(a){re(y.value,a,w),j("",function(){g()})},z=function(a){var s=a.target,$=s.value,B=s.composing;if(!((a.isComposing||B)&&e.lazy||u.value===$)){var M=a.target.value;re(y.value,a,w),j(M,function(){h()})}},D=function(a){a.keyCode===13&&P("pressEnter",a),P("keydown",a)};be(function(){h()}),ge(function(){clearTimeout(U)});var G=function(){var a,s=e.addonBefore,$=s===void 0?r.addonBefore:s,B=e.addonAfter,M=B===void 0?r.addonAfter:B,O=e.disabled,H=e.bordered,q=H===void 0?!0:H,V=e.valueModifiers,ie=V===void 0?{}:V,de=e.htmlSize,ae=X(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","bordered","htmlSize","lazy","showCount","valueModifiers"]),J=I(I(I({},ae),o),{},{autocomplete:i.value,onChange:z,onInput:z,onFocus:x,onBlur:N,onKeydown:D,class:F(le(n.value,q,d.value,O,S.value),f({},o.class,o.class&&!$&&!M)),ref:y,key:"ant-input",size:de,id:(a=ae.id)!==null&&a!==void 0?a:k.id.value});ie.lazy&&delete J.onInput,J.autofocus||delete J.autofocus;var fe=A("input",X(J,["size"]),null);return me(fe,[[xe]])},Z=function(){var a,s=u.value,$=e.maxlength,B=e.suffix,M=B===void 0?(a=r.suffix)===null||a===void 0?void 0:a.call(r):B,O=e.showCount,H=Number($)>0;if(M||O){var q=he(te(s)).length,V=null;return we(O)==="object"?V=O.formatter({count:q,maxlength:$}):V="".concat(q).concat(H?" / ".concat($):""),A(Be,null,[!!O&&A("span",{class:F("".concat(n.value,"-show-count-suffix"),f({},"".concat(n.value,"-show-count-has-suffix"),!!M))},[V]),M])}return null};return function(){var c=I(I(I({},o),e),{},{prefixCls:n.value,inputType:"input",value:te(u.value),handleReset:W,focused:l.value&&!e.disabled});return A(Se,I(I({},X(c,["element","valueModifiers","suffix","showCount"])),{},{ref:Y}),I(I({},r),{},{element:G,suffix:Z}))}}});export{Se as C,Pe as I,$e as a,te as f,Ce as i,re as r,Fe as t};