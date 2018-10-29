(function(b,d){'function'==typeof define&&define.amd?define('lib/cito',[],d):'object'==typeof module&&module.exports?module.exports=d():b.cito=d()})(this,function(){'use strict';function b(Ha){return'string'==typeof Ha}function d(Ha){return Ha instanceof Array}function g(Ha){return'function'==typeof Ha}function h(Ha,Ia){var Ja=typeof Ha;return'string'==Ja?Ha={tag:'#',children:Ha}:'function'==Ja&&(Ha=Ha(Ia),Ha=void 0===Ha?Ia:h(Ha,Ia)),Ha}function j(Ha,Ia,Ja){var Ka=h(Ia,Ja);return Ia!==Ka&&Ha&&(Ha.children=Ka),Ka}function w(Ha,Ia,Ja){var Ka=j(null,A(Ha,Ia));return Ka.dom||(Ka.dom=Ja.firstChild,'<'===Ka.tag&&(Ka.domLength=Ja.childNodes.length)),Ka}function x(Ha,Ia,Ja){var Ka=Ha[Ia],La=h(Ka,Ja);return Ka!==La&&(Ha[Ia]=La),La}function y(Ha,Ia,Ja){return g(Ia)&&(Ia=Ia(Ja),void 0===Ia&&(Ia=Ja),Ha.children=Ia),Ia}function A(Ha,Ia){return 1===Ia?Ha[0]:Ha}function B(Ha,Ia,Ja){var Ma,Ka=Ia.dom,La=Ia.domLength||1,Na=Ja&&Ja.dom;if(Ka!==Na)for(;La--;)Ma=0<La?Ka.nextSibling:null,Na?Ha.insertBefore(Ka,Na):Ha.appendChild(Ka),Ka=Ma}function C(){return na.createTextNode('')}function D(Ha,Ia,Ja){if(Ha.insertAdjacentHTML){var Ka,La,Ma;if(Ba||Ca){var Na='beforebegin'===Ia?Ha.previousSibling:'beforeend'===Ia?Ha.lastChild:null;Na&&3===Na.nodeType&&(Ka=Na,Ca&&0===Na.length&&(Ma=!0,Na.nodeValue=' '),Ba&&(La=Na.length))}Ha.insertAdjacentHTML(Ia,Ja),Ka&&(Ba&&Ka.length!==La&&Ka.splitText(La),Ca&&Ma&&(Ka.nodeValue=''))}else if(va.innerHTML=Ja,'beforebegin'===Ia)for(var Oa=Ha.parentNode;va.firstChild;)Oa.insertBefore(va.firstChild,Ha);else if('beforeend'===Ia)for(;va.firstChild;)Ha.appendChild(va.firstChild)}function E(Ha,Ia,Ja,Ka){if(Ja){var La=Ja.dom;if(Ka){var Ma=Ja.domLength||1;1===Ma?(ja(Ja),Ha.replaceChild(Ia,La)):(Ha.insertBefore(Ia,La),$(Ha,Ja))}else Ha.insertBefore(Ia,La)}else Ha.appendChild(Ia)}function F(Ha,Ia,Ja,Ka,La,Ma){if(ua)return H(Ha,Ia,Ka,La);var Na,Oa=Ha.tag,Pa=Ha.children;switch(Oa){case void 0:return O(Ha,Pa,Ia,Ja,Ka,La);case'#':if(Ma)return void _(Ia,Pa);Na=na.createTextNode(Pa);break;case'!':Na=na.createComment(Pa);break;case'<':if(Pa){if(Ma)Ia.innerHTML=Pa;else{var Qa=Ia.childNodes,Ra=Qa.length;if(Ka){var Sa=Ka.dom,Ta=Sa.previousSibling;D(Sa,'beforebegin',Pa),Na=Ta?Ta.nextSibling:Ia.firstChild}else D(Ia,'beforeend',Pa),Na=Qa[Ra];Ha.dom=Na,Ha.domLength=Qa.length-Ra,La&&Ka&&$(Ia,Ka)}return}Na=C();break;default:var Ua='svg'===Oa?'http://www.w3.org/2000/svg':'math'===Oa?'http://www.w3.org/1998/Math/MathML':Ja;var Va=Ha.attrs,Wa=Va&&Va.is;Ua?(Ha.ns=Ua,Na=Wa?na.createElementNS(Ua,Oa,Wa):na.createElementNS(Ua,Oa)):Na=Wa?na.createElement(Oa,Wa):na.createElement(Oa),Ha.dom=Na,ua&&Ia&&E(Ia,Na,Ka,La),'string'==typeof Pa?_(Na,Pa,!1):W(Na,Ha,Ua,Pa,!1),Va&&P(Na,Oa,Ua,Va);var Xa=Ha.events;Xa&&S(Na,Ha,Xa),!ua&&Ia&&E(Ia,Na,Ka,La);var Ya=Xa&&Xa.$created;return void(Ya&&G(Ya,'$created',Na,Ha));}Ha.dom=Na,Ia&&E(Ia,Na,Ka,La)}function G(Ha,Ia,Ja,Ka,La,Ma){var Na={type:Ia,target:Ja,virtualNode:Ka};if(La&&(Na[La]=Ma),d(Ha)){for(var Oa=0;Oa<Ha.length;Oa++)if(!1===Ha[Oa].call(Ja,Na))return;}else Ha.call(Ja,Na)}function H(Ha,Ia,Ja,Ka){var Ma,La=I(Ha);if(Ia){var Na;Ja||Ia.hasChildNodes()?(Ja?(Na=Ja.dom.previousSibling,D(Ja.dom,'beforebegin',La),Ka&&$(Ia,Ja)):(Na=Ia.lastChild,D(Ia,'beforeend',La)),Ma=Na?Na.nextSibling:Ia.firstChild):(Ia.innerHTML=La,Ma=Ia.firstChild)}else va.innerHTML=La,Ma=va.removeChild(va.firstChild);J(Ma,Ha)}function I(Ha,Ia){var Ja=Ha.tag,Ka=Ha.children;switch(Ja){case'#':return L(Ka)+Da;case'!':return'<!--'+M(Ka)+'-->';case'<':return Ka+Da;default:var La;if(Ja){var Ma=Ha.attrs;if('select'===Ja&&Ma?Ia={selectedIndex:Ma.selectedIndex,value:Ma.value,optionIndex:0}:'option'===Ja&&Ia&&((Ia.value&&Ia.value===Ma.value||void 0!==Ia.selectedIndex&&Ia.selectedIndex===Ia.optionIndex)&&(Ma.selected=!0),Ia.optionIndex++),La='<'+Ja,Ma)for(var Na in La+=' ',Ma){var Oa=Ma[Na];if(!1===Oa||'select'===Ja&&('value'==Na||'selectedIndex'==Na))continue;else if('textarea'===Ja&&'value'==Na){Ka=Oa;continue}else if(!0===Oa)Oa='';else if('style'==Na&&!b(Oa)){var Pa='';for(var Qa in Oa)Pa+=Qa+': '+Oa[Qa]+'; ';Oa=Pa}La+=' '+N(Na,Oa)}}else La='';Ja&&(La+='>'),Ka=y(Ha,Ka);var Ra=X(Ka);if(1<Ra)for(var Sa=0,Ta=Ka.length;Sa<Ta;Sa++)La+=I(x(Ka,Sa),Ia);else if(0!==Ra){var Ua=A(Ka,Ra);b(Ua)?(La+=L(Ua),(!Ja||!Ua)&&(La+=Da)):La+=I(j(Ha,Ua),Ia)}else Ja||(La+=Da);return Ja&&(La+='</'+Ja+'>'),La;}}function J(Ha,Ia){var Ja=Ia.tag;if(Ja){Ia.dom=Ha;var Ka,La;switch(Ja){case'#':Ka=Ha.nodeValue,La=Ka.indexOf(Da),-1!==La&&(La+1<Ka.length&&Ha.splitText(La+1),Ha.nodeValue=Ka.substr(0,La));break;case'!':break;case'<':for(var Na,Ma=0;Ha;Ha=Ha.nextSibling)if(Ma++,3===Ha.nodeType)if(Ka=Ha.nodeValue,1<Ma&&Ka===Da){Na=Ha.nextSibling,Ha.parentNode.removeChild(Ha),Ma--;break}else if(La=Ka.indexOf(Da),-1!==La){La+1<Ka.length&&Ha.splitText(La+1),Ha.nodeValue=Ka.substr(0,La),Na=Ha.nextSibling;break}return Ia.domLength=Ma,Na;default:var Oa=Ia.children,Pa=X(Oa);if(1<Pa){Oa=Ia.children;for(var Qa=Ha.firstChild,Ra=0,Sa=Oa.length;Ra<Sa;Ra++)Qa=J(Qa,Oa[Ra])}else if(0!==Pa){var Ta=A(Oa,Pa);b(Ta)?!Ta&&(Ha.firstChild.nodeValue=''):J(Ha.firstChild,Ta)}var Ua=Ia.events;if(Ua){S(Ha,Ia,Ua);var Va=Ua.$created;Va&&G(Va,'$created',Ha,Ia)}}return Ha.nextSibling}return K(Ha,Ia)}function K(Ha,Ia){var La,Ja=Ia.children,Ka=X(Ja);if(0===Ka)1<Ha.length&&Ha.splitText(1),Ha.nodeValue='',Ia.dom=Ha,La=Ha.nextSibling;else{if(1<Ka){La=Ha;for(var Ma=0;Ma<Ja.length;Ma++)La=J(La,Ja[Ma]);Ha=Ja[0].dom}else{var Na=j(Ia,A(Ja,Ka));La=J(Ha,Na),Ha=Na.dom}Ia.dom=Ha;for(var Oa=0;Ha!==La;)Oa++,Ha=Ha.nextSibling;Ia.domLength=Oa}return La}function L(Ha){return Ha=''+Ha,sa?(va.innerText=Ha,Ha=va.innerHTML):ta?Ha=Ha.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;'):Ha=Ha.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'),Ha}function M(Ha){return Ha=''+Ha,Ha.replace(/-{2,}/g,'-')}function N(Ha,Ia){var Ja=typeof Ia;return Ia=''+Ia,'number'!=Ja&&(ta?Ia=Ia.split('&').join('&amp;').split('"').join('&quot;'):Ia=Ia.replace(/&/g,'&amp;').replace(/"/g,'&quot;')),Ha+'="'+Ia+'"'}function O(Ha,Ia,Ja,Ka,La,Ma){Ia=y(Ha,Ia);var Oa,Pa,Qa,Na=X(Ia);if(Ka&&(Ha.ns=Ka),0===Na)Oa=C(),E(Ja,Oa,La,Ma);else if(1<Na){Pa=0;for(var Ra=0,Sa=Ia.length;Ra<Sa;Ra++)Qa=x(Ia,Ra),F(Qa,Ja,Ka,La,!1),Pa+=Qa.domLength||1;Oa=Ia[0].dom,Ma&&$(Ja,La)}else Qa=j(Ha,A(Ia,Na)),F(Qa,Ja,Ka,La,Ma),Oa=Qa.dom,Pa=Qa.domLength;Ha.dom=Oa,Ha.domLength=Pa}function P(Ha,Ia,Ja,Ka,La,Ma){var Na,Oa;if(Ka)for(Oa in Ka){var Pa=!1,Qa=Ka[Oa];if('style'===Oa){var Ra=La&&La[Oa];Ra!==Qa&&(Pa=R(Ha,Ra,Ka,Qa))}else T(Ia,Oa)?Ha[Oa]!==Qa&&(Ha[Oa]=Qa,Pa=!0):La&&La[Oa]===Qa||('class'!==Oa||Ja?Q(Ha,Oa,Qa):Ha.className=Qa,Pa=!0);Pa&&Ma&&(Na||(Na=[])).push(Oa)}if(La)for(Oa in La)Ka&&void 0!==Ka[Oa]||('class'!==Oa||Ja?!T(Ia,Oa)&&Ha.removeAttribute(Oa):Ha.className='',Ma&&(Na||(Na=[])).push(Oa));return Na}function Q(Ha,Ia,Ja){if(!1===Ja)Ha.removeAttribute(Ia);else{!0==Ja&&(Ja='');var La,Ka=Ia.indexOf(':');if(-1!==Ka){var Ma=Ia.substr(0,Ka);'xlink'===Ma?La='http://www.w3.org/1999/xlink':void 0}La?Ha.setAttributeNS(La,Ia,Ja):Ha.setAttribute(Ia,Ja)}}function R(Ha,Ia,Ja,Ka){var Ma,La=!1;if(!b(Ka)&&(!za||!Ia||b(Ia))){var Na='';if(Ka)for(Ma in Ka)Na+=Ma+': '+Ka[Ma]+'; ';Ka=Na,za||(Ja.style=Ka)}var Oa=Ha.style;if(b(Ka))Oa.cssText=Ka,La=!0;else{if(Ka)for(Ma in Ka){var Pa=Ka[Ma];if(!Ia||Ia[Ma]!==Pa){var Qa=Pa.indexOf('!important');if(-1!==Qa)Oa.setProperty(Ma,Pa.substr(0,Qa),'important');else{if(Ia){var Ra=Ia[Ma];Ra&&-1!==Ra.indexOf('!important')&&Oa.removeProperty(Ma)}Oa.setProperty(Ma,Pa,'')}La=!0}}if(Ia)for(Ma in Ia)Ka&&void 0!==Ka[Ma]||(Oa.removeProperty(Ma),La=!0)}return La}function S(Ha,Ia,Ja,Ka){if(Ja)for(var La in Ha.virtualNode=Ia,Ja)Ka&&Ka[La]||U(Ha,La);if(Ka)for(La in Ka)Ja&&Ja[La]||V(Ha,La)}function T(Ha,Ia){return'input'===Ha?'value'===Ia||'checked'===Ia:'textarea'===Ha?'value'===Ia:'select'===Ha?'value'===Ia||'selectedIndex'===Ia:'option'===Ha?'selected'===Ia:void 0}function U(Ha,Ia){if('$'!==Ia[0])if(xa)Ha.addEventListener(Ia,ba,!1);else{var Ja='on'+Ia;Ja in Ha?Ha[Ja]=ba:Ha.attachEvent(Ja,ba)}}function V(Ha,Ia){if('$'!==Ia[0])if(xa)Ha.removeEventListener(Ia,ba,!1);else{var Ja='on'+Ia;Ja in Ha?Ha[Ja]=null:Ha.detachEvent(Ja,ba)}}function W(Ha,Ia,Ja,Ka,La){Ka=y(Ia,Ka);var Ma=X(Ka);if(1<Ma)for(var Na=0,Oa=Ka.length;Na<Oa;Na++)F(x(Ka,Na),Ha,Ja);else if(0!==Ma){var Pa=A(Ka,Ma);!La&&b(Pa)?_(Ha,Pa):(Pa=j(Ia,Pa),F(Pa,Ha,Ja,null,!1,!La))}}function X(Ha){return d(Ha)?Ha.length:Ha||b(Ha)?-1:0}function Y(Ha,Ia,Ja){1<Ja?Z(Ha,Ia,0,Ia.length):0!=Ja&&(b(Ia)?Ha.removeChild(Ha.firstChild):$(Ha,w(Ia,Ja,Ha)))}function Z(Ha,Ia,Ja,Ka){for(;Ja<Ka;Ja++)$(Ha,Ia[Ja])}function $(Ha,Ia){ja(Ia);for(var La,Ja=Ia.dom,Ka=Ia.domLength||1;Ka--;)La=0<Ka?Ja.nextSibling:null,Ha.removeChild(Ja),Ja=La}function _(Ha,Ia,Ja){if(Ia)'textContent'in na?Ha.textContent=Ia:Ha.innerText=Ia;else{if(Ja)for(;Ha.firstChild;)Ha.removeChild(Ha.firstChild);Ha.appendChild(C())}}function aa(Ha,Ia,Ja,Ka,La,Ma,Na){if(La=y(Ia,La,Ka),La!==Ka){var Oa=X(Ka);if(0===Oa)return void W(Ha,Ia,Ja,La,!1);var Qa,Ra,Pa=X(La);if(0===Pa)return void Y(Ha,Ka,Oa);if(2>Pa){if(Ra=A(La,Pa),!Ma&&b(Ra)){if(Pa===Oa){if(Qa=A(Ka,Oa),Ra==Qa)return;if(b(Qa))return void(Ha.firstChild.nodeValue=Ra)}return ka(Ka,Oa),void _(Ha,Ra,!0)}if(2>Oa)return Qa=w(Ka,Oa,Ha),Ra=j(Ia,Ra,Qa),void ha(Qa,Ra,Ha,Ja,null,0,Na,!Ma)}-1===Pa&&(Ia.children=La=[La]),2>Oa&&(Qa=w(Ka,Oa,Ha),1===Oa?Ka[0]=Qa:Ka=[Qa]);var Za,Sa=Ka.length,Ta=La.length,Ua=Sa-1,Va=La.length-1,Wa=0,Xa=0,Ya=!0;outer:for(;Ya&&Wa<=Ua&&Xa<=Va;){Ya=!1;var $a,_a,ab,bb;for($a=Ka[Wa],ab=x(La,Xa,$a);$a.key===ab.key;){if(ha($a,ab,Ha,Ja,Ka,Wa+1,Na),Wa++,Xa++,Wa>Ua||Xa>Va)break outer;$a=Ka[Wa],ab=x(La,Xa,$a),Ya=!0}for(_a=Ka[Ua],bb=x(La,Va);_a.key===bb.key;){if(ha(_a,bb,Ha,Ja,La,Va+1,Na),Ua--,Va--,Wa>Ua||Xa>Va)break outer;_a=Ka[Ua],bb=x(La,Va),Ya=!0}for(;$a.key===bb.key;){if(Za=Va+1<Ta?La[Va+1]:Na,ha($a,bb,Ha,Ja,null,0,Za),B(Ha,bb,Za),Wa++,Va--,Wa>Ua||Xa>Va)break outer;$a=Ka[Wa],bb=x(La,Va),Ya=!0}for(;_a.key===ab.key;){if(Za=Wa<Sa?Ka[Wa]:Na,ha(_a,ab,Ha,Ja,null,0,Za),B(Ha,ab,Za),Ua--,Xa++,Wa>Ua||Xa>Va)break outer;_a=Ka[Ua],ab=x(La,Xa),Ya=!0}}if(Wa>Ua)for(Za=Va+1<Ta?x(La,Va+1):Na,cb=Xa;cb<=Va;cb++)F(x(La,cb),Ha,Ja,Za);else if(Xa>Va)Z(Ha,Ka,Wa,Ua+1);else{var cb,db=Ka[Ua+1],eb={};for(cb=Ua;cb>=Wa;cb--)Qa=Ka[cb],Qa.next=db,eb[Qa.key]=Qa,db=Qa;for(Za=Va+1<Ta?x(La,Va+1):Na,cb=Va;cb>=Xa;cb--){Ra=La[cb];var fb=Ra.key;Qa=eb[fb],Qa?(eb[fb]=null,db=Qa.next,ha(Qa,Ra,Ha,Ja,null,0,Za),Ha.nextSibling!=(Za&&Za.dom)&&B(Ha,Ra,Za)):F(Ra,Ha,Ja,Za),Za=Ra}for(cb=Wa;cb<=Ua;cb++)Qa=Ka[cb],null!==eb[Qa.key]&&$(Ha,Qa)}}}function ba(Ha){Ha=fa(Ha,this);var Ia=Ha.currentTarget,Ja=Ia.virtualNode.events[Ha.type];if(d(Ja)){for(var Ka=0,La=Ja.length;Ka<La;Ka++)if(ga(Ja[Ka],Ia,Ha),Fa){Fa=!1;break}}else ga(Ja,Ia,Ha)}function ca(){this.defaultPrevented=!0,this.returnValue=!1}function da(){this.cancelBubble=!0}function ea(){Fa=!0,this.stopPropagation()}function fa(Ha,Ia){return Ha||(Ha=window.event,!Ha.preventDefault&&(Ha.preventDefault=ca,Ha.stopPropagation=da,Ha.defaultPrevented=!1===Ha.returnValue,Ha.target=Ha.srcElement),Ha.currentTarget=Ia.nodeType?Ia:Ha.target),Ha.stopImmediatePropagation=ea,Ha}function ga(Ha,Ia,Ja){try{!1===Ha.call(Ia,Ja)&&Ja.preventDefault()}catch(Ka){qa.error(Ka.stack||Ka)}}function ha(Ha,Ia,Ja,Ka,La,Ma,Na,Oa){if(Ia!==Ha){var Pa=Ia.tag;if(Ha.tag!==Pa)F(Ia,Ja,Ka,Ha,!0);else{var Qa=Ha.dom,Ra=Ha.children,Sa=Ia.children;switch(Pa){case void 0:var Ta=La&&Ma<La.length?La[Ma]:Na;ia(Ha,Ra,Ia,Sa,Ja,Ka,Ta);break;case'#':case'!':Ra!==Sa&&(Qa.nodeValue=Sa),Ia.dom=Qa;break;case'<':Ra===Sa?(Ia.dom=Ha.dom,Ia.domLength=Ha.domLength):F(Ia,Ja,null,Ha,!0,Oa);break;default:var Ua=Ia.attrs,Va=Ha.attrs;if((Ua&&Ua.is)!==(Va&&Va.is))return void F(Ia,Ja,Ka,Ha,!0);var Wa=Ha.ns;Wa&&(Ia.ns=Wa),Ia.dom=Qa,Sa!==Ra&&aa(Qa,Ia,Wa,Ra,Sa,!1);var Xa=Ia.events,Ya=Ha.events;if(Ua!==Va){var Za=Xa&&Xa.$changed,$a=P(Qa,Pa,Wa,Ua,Va,!!Za);$a&&G(Za,'$changed',Qa,Ia,'changes',$a)}Xa!==Ya&&S(Qa,Ia,Xa,Ya);}}}}function ia(Ha,Ia,Ja,Ka,La,Ma,Na){if(Ka=y(Ja,Ka,Ia),Ka!==Ia){var Qa,Ra,Oa=X(Ka),Pa=X(Ia);if(Ma&&(Ja.ns=Ma),0===Oa)0===Pa?Qa=Ha.dom:(Y(La,Ia,Pa),Qa=C(),E(La,Qa,Na));else{if(0===Pa)return La.removeChild(Ha.dom),void O(Ja,Ka,La,Ma,Na);if(aa(La,Ja,Ma,Ia,Ka,!0,Na),Ka=Ja.children,d(Ka)){Qa=Ka[0].dom,Ra=0;for(var Sa=0,Ta=Ka.length;Sa<Ta;Sa++)Ra+=Ka[Sa].domLength||1}else Qa=Ka.dom,Ra=Ka.domLength}Ja.dom=Qa,Ja.domLength=Ra}}function ja(Ha){if(!b(Ha)){var Ia=Ha.dom;if(Ia){var Ja=Ha.events;if(Ja){for(var Ka in Ja)V(Ia,Ka);var La=Ja.$destroyed;La&&G(La,'$destroyed',Ia,Ha)}Ia.virtualNode&&(Ia.virtualNode=void 0)}var Ma=Ha.children;Ma&&ka(Ma,X(Ma))}}function ka(Ha,Ia){if(1<Ia)for(var Ja=0,Ka=Ha.length;Ja<Ka;Ja++)ja(Ha[Ja]);else 0!==Ia&&ja(A(Ha,Ia))}function la(Ha,Ia){for(var Ja in Ha)Ia[Ja]=Ha[Ja];for(Ja in Ia)void 0===Ha[Ja]&&(Ia[Ja]=void 0)}function ma(Ha){Ha&&Ha!=na.body&&Ha!=na.activeElement&&Ha.focus()}var na=window.document,oa=window.navigator,pa=function(){},qa=window.console||{warn:pa,error:pa},ra=oa.userAgent,sa=-1!==ra.indexOf('WebKit'),ta=-1!==ra.indexOf('Firefox'),ua=-1!==ra.indexOf('Trident'),va=na.createElement('div'),xa='addEventListener'in na,za='setProperty'in va.style,Aa=na.createElement('p'),Ba,Ca;Aa.insertAdjacentHTML&&(Aa.appendChild(na.createTextNode('a')),Aa.insertAdjacentHTML('beforeend','b'),Ba=1===Aa.childNodes.length,Aa=na.createElement('p'),Aa.appendChild(C()),Aa.insertAdjacentHTML('beforeend','<b>'),Ca=3!==Aa.firstChild.nodeType);var Da='\x03',Ea='createRange'in na?na.createRange():null,Fa=!1;return{vdom:{create:function(Ha){return Ha=h(Ha),F(Ha),Ha},append:function(Ha,Ia){return Ia=h(Ia),F(Ia,Ha),Ia},update:function(Ha,Ia){var Ja=na.activeElement;return Ia=h(Ia,Ha),ha(Ha,Ia,Ha.dom.parentNode),la(Ia,Ha),ma(Ja),Ha},updateChildren:function(Ha,Ia){var Ja=na.activeElement,Ka=Ha.children;Ka!==Ia&&aa(Ha.dom,Ha,Ha.ns,Ka,Ia,!Ha.tag),ma(Ja)},remove:function(Ha){var Ia=Ha.dom.parentNode;$(Ia,Ha)}}}}),define('lib/zombular',['./cito'],b=>{const d=(F,G)=>'function'==typeof F?d(F(G),G):F,g=(F,G)=>H=>H?G():setTimeout(G,F),h=F=>{for(;0<F.length;)F.shift()()},j=/([0-9a-z\-_]+|[<!])|([#\.]?[0-9a-z\-_]+)/gi,x=(F,G,H)=>[].concat(...F.map(I=>G(I,H))),y=(F,G)=>0===F||F?'string'==typeof F?[F]:'function'==typeof F?y(F(),G):'object'==typeof F?Array.isArray(F)?x(F,y,G):d(()=>{let H=[];return Object.entries(F).forEach(([I,J])=>F.hasOwnProperty(I)&&d(J)?H.push(I):void 0),H}):[F+'']:[],A=(F,G)=>F===void 0||null===F?'':'number'==typeof F?F+'':'function'==typeof F?A(F(),G):Array.isArray(F)?x(F,A,G):F,B=(F,G)=>{if(F=d(F,G),'string'==typeof F){if(-1!=['<','!'].indexOf(F))return{tag:F};if(''===F)return{};F={is:F}}if('object'!=typeof F)return{};F.is=d(F.is,G);let H={tag:'div',attrs:{},events:{}},I=[];return F.is&&(F.is.match(j)||[]).forEach(J=>{'.'==J.charAt(0)?I.push(J.substr(1)):'#'==J.charAt(0)?H.attrs.id=J.substr(1):H.tag=J}),Object.entries(F).forEach(([J,K])=>{if(F.hasOwnProperty(J)&&'is'!==J)if('on'===J.substr(0,2))H.events[J.substr(2)]=K;else{let L=d(K,G);if(void 0===L)return;'key'===J?H.key=L:'class'===J?I=I.concat(y(L,G)):H.attrs[J]=L}}),0<I.length&&(H.attrs['class']=I.join(' ')),H};return Object.assign((F,...G)=>H=>{let I=B(F,H);return I.children=A(G,H),I},{node:(F,G)=>{let H,K,I=[],J=!1;const L=g(0,()=>{J=!0,H?b.vdom.update(H,G(K)):H=b.vdom.append(F,G(K)),h(I),K={update:M},J=!1}),M=(N,O={})=>{K=Object.assign(K,O);let P=!1;'function'==typeof N?I.push(N):!0===N&&(P=!0),J||L(P)};return K={update:M},L(!0),{vnode:H,update:M,set:N=>G=N}},Ref:(F,G)=>({get:()=>F[G],set:H=>F[G]=H}),Val:F=>({get:()=>F,set:()=>F=F}),throttled:g,callQueue:h})}),define('lib/body',['./zombular'],b=>{let d,g,h=b.node(document.body,b(''));const w=()=>{let y,x=window.location.hash.slice(1);[d,...y]=x.split(';'),g={},y.forEach(A=>{let[B,...C]=A.split('=');g[decodeURIComponent(B)]=decodeURIComponent(C.join('='))}),h.update()};return window.addEventListener('hashchange',w),w(),Object.assign((...x)=>b(...x),b,{setBody:x=>{h.set(x),h.update()},update:h.update,route:(x,y)=>{if(void 0===x)return{route:d,args:g};null===x&&(y=Object.assign({},g,y),x=d);let A=[x];return Object.entries(y).forEach(([B,C])=>{void 0!==C&&A.push(encodeURIComponent(B)+'='+encodeURIComponent(C))}),'#'+A.join(';')}})}),!function(b,d,g){'undefined'!=typeof module&&module.exports?module.exports=g():'function'==typeof define&&define.amd?define('lib/reqwest',g):d[b]=g()}('reqwest',this,function(){function succeed(b){var d=protocolRe.exec(b.url);return d=d&&d[1]||context.location.protocol,httpsRe.test(d)?twoHundo.test(b.request.status):!!b.request.response}function handleReadyState(b,d,g){return function(){return b._aborted?g(b.request):b._timedOut?g(b.request,'Request is aborted: timeout'):void(b.request&&4==b.request[readyState]&&(b.request.onreadystatechange=noop,succeed(b)?d(b.request):g(b.request)))}}function setHeaders(b,d){var h,g=d.headers||{};g.Accept=g.Accept||defaultHeaders.accept[d.type]||defaultHeaders.accept['*'];var j='undefined'!=typeof FormData&&d.data instanceof FormData;for(h in d.crossOrigin||g[requestedWith]||(g[requestedWith]=defaultHeaders.requestedWith),g[contentType]||j||(g[contentType]=d.contentType||defaultHeaders.contentType),g)g.hasOwnProperty(h)&&'setRequestHeader'in b&&b.setRequestHeader(h,g[h])}function setCredentials(b,d){'undefined'!=typeof d.withCredentials&&'undefined'!=typeof b.withCredentials&&(b.withCredentials=!!d.withCredentials)}function generalCallback(b){lastValue=b}function urlappend(b,d){return b+(/\?/.test(b)?'&':'?')+d}function handleJsonp(b,d,g,h){var j=uniqid++,w=b.jsonpCallback||'callback',x=b.jsonpCallbackName||reqwest.getcallbackPrefix(j),y=new RegExp('((^|\\?|&)'+w+')=([^&]+)'),A=h.match(y),B=doc.createElement('script'),C=0,D=-1!==navigator.userAgent.indexOf('MSIE 10.0');return A?'?'===A[3]?h=h.replace(y,'$1='+x):x=A[3]:h=urlappend(h,w+'='+x),context[x]=generalCallback,B.type='text/javascript',B.src=h,B.async=!0,'undefined'!=typeof B.onreadystatechange&&!D&&(B.htmlFor=B.id='_reqwest_'+j),B.onload=B.onreadystatechange=function(){return B[readyState]&&'complete'!==B[readyState]&&'loaded'!==B[readyState]||C?!1:void(B.onload=B.onreadystatechange=null,B.onclick&&B.onclick(),d(lastValue),lastValue=void 0,head.removeChild(B),C=1)},head.appendChild(B),{abort:function(){B.onload=B.onreadystatechange=null,g({},'Request is aborted: timeout',{}),lastValue=void 0,head.removeChild(B),C=1}}}function getRequest(b,d){var x,g=this.o,h=(g.method||'GET').toUpperCase(),j='string'==typeof g?g:g.url,w=!1!==g.processData&&g.data&&'string'!=typeof g.data?reqwest.toQueryString(g.data):g.data||null,y=!1;return('jsonp'==g.type||'GET'==h)&&w&&(j=urlappend(j,w),w=null),'jsonp'==g.type?handleJsonp(g,b,d,j):(x=g.xhr&&g.xhr(g)||xhr(g),x.open(h,j,!1!==g.async),setHeaders(x,g),setCredentials(x,g),context[xDomainRequest]&&x instanceof context[xDomainRequest]?(x.onload=b,x.onerror=d,x.onprogress=function(){},y=!0):x.onreadystatechange=handleReadyState(this,b,d),g.before&&g.before(x),y?setTimeout(function(){x.send(w)},200):x.send(w),x)}function Reqwest(b,d){this.o=b,this.fn=d,init.apply(this,arguments)}function setType(b){return null===b?void 0:b.match('json')?'json':b.match('javascript')?'js':b.match('text')?'html':b.match('xml')?'xml':void 0}function init(o,fn){function complete(b){for(o.timeout&&clearTimeout(self.timeout),self.timeout=null;0<self._completeHandlers.length;)self._completeHandlers.shift()(b)}function timedOut(){self._timedOut=!0,self.request.abort()}function error(b,d,g){for(b=self.request,self._responseArgs.resp=b,self._responseArgs.msg=d,self._responseArgs.t=g,self._erred=!0;0<self._errorHandlers.length;)self._errorHandlers.shift()(b,d,g);complete(b)}this.url='string'==typeof o?o:o.url,this.timeout=null,this._fulfilled=!1,this._successHandler=function(){},this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){timedOut()},o.timeout)),o.success&&(this._successHandler=function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push(function(){o.error.apply(o,arguments)}),o.complete&&this._completeHandlers.push(function(){o.complete.apply(o,arguments)}),this.request=getRequest.call(this,function(resp){var type=o.type||resp&&setType(resp.getResponseHeader('Content-Type'));resp='jsonp'===type?resp:self.request;var filteredResponse=globalSetupOptions.dataFilter(resp.responseText,type),r=filteredResponse;try{resp.responseText=r}catch(b){}if(r)switch(type){case'json':try{resp=context.JSON?context.JSON.parse(r):eval('('+r+')')}catch(b){return error(resp,'Could not parse JSON in response',b)}break;case'js':resp=eval(r);break;case'html':resp=r;break;case'xml':resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML;}for(self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp),self._successHandler(resp);0<self._fulfillmentHandlers.length;)resp=self._fulfillmentHandlers.shift()(resp);complete(resp)},error)}function reqwest(b,d){return new Reqwest(b,d)}function normalize(b){return b?b.replace(/\r?\n/g,'\r\n'):''}function serial(b,d){var w,x,y,A,g=b.name,h=b.tagName.toLowerCase(),j=function(B){B&&!B.disabled&&d(g,normalize(B.attributes.value&&B.attributes.value.specified?B.value:B.text))};if(!b.disabled&&g)switch(h){case'input':/reset|button|image|file/i.test(b.type)||(w=/checkbox/i.test(b.type),x=/radio/i.test(b.type),y=b.value,(!w&&!x||b.checked)&&d(g,normalize(w&&''===y?'on':y)));break;case'textarea':d(g,normalize(b.value));break;case'select':if('select-one'===b.type.toLowerCase())j(0<=b.selectedIndex?b.options[b.selectedIndex]:null);else for(A=0;b.length&&A<b.length;A++)b.options[A].selected&&j(b.options[A]);}}function eachFormElement(){var d,g,b=this,h=function(j,w){var x,y,A;for(x=0;x<w.length;x++)for(A=j[byTag](w[x]),y=0;y<A.length;y++)serial(A[y],b)};for(g=0;g<arguments.length;g++)d=arguments[g],/input|select|textarea/i.test(d.tagName)&&serial(d,b),h(d,['input','select','textarea'])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var b={};return eachFormElement.apply(function(d,g){d in b?(b[d]&&!isArray(b[d])&&(b[d]=[b[d]]),b[d].push(g)):b[d]=g},arguments),b}function buildParams(b,d,g,h){var j,w,x,y=/\[\]$/;if(isArray(d))for(w=0;d&&w<d.length;w++)x=d[w],g||y.test(b)?h(b,x):buildParams(b+'['+('object'==typeof x?w:'')+']',x,g,h);else if(d&&'[object Object]'===d.toString())for(j in d)buildParams(b+'['+j+']',d[j],g,h);else h(b,d)}var context=this;if('window'in context)var doc=document,byTag='getElementsByTagName',head=doc[byTag]('head')[0];else{var XHR2;try{XHR2=require('xhr2')}catch(b){throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')}}var lastValue,httpsRe=/^http/,protocolRe=/(^\w+):\/\//,twoHundo=/^(20\d|1223)$/,readyState='readyState',contentType='Content-Type',requestedWith='X-Requested-With',uniqid=0,callbackPrefix='reqwest_'+ +new Date,xmlHttpRequest='XMLHttpRequest',xDomainRequest='XDomainRequest',noop=function(){},isArray='function'==typeof Array.isArray?Array.isArray:function(b){return b instanceof Array},defaultHeaders={contentType:'application/x-www-form-urlencoded',requestedWith:xmlHttpRequest,accept:{'*':'text/javascript, text/html, application/xml, text/xml, */*',xml:'application/xml, text/xml',html:'text/html',text:'text/plain',json:'application/json, text/javascript',js:'application/javascript, text/javascript'}},xhr=function(b){if(!0===b.crossOrigin){var d=context[xmlHttpRequest]?new XMLHttpRequest:null;if(d&&'withCredentials'in d)return d;if(context[xDomainRequest])return new XDomainRequest;throw new Error('Browser does not support cross-origin requests')}return context[xmlHttpRequest]?new XMLHttpRequest:XHR2?new XHR2:new ActiveXObject('Microsoft.XMLHTTP')},globalSetupOptions={dataFilter:function(b){return b}};return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(b,d){return b=b||function(){},d=d||function(){},this._fulfilled?this._responseArgs.resp=b(this._responseArgs.resp):this._erred?d(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(b),this._errorHandlers.push(d)),this},always:function(b){return this._fulfilled||this._erred?b(this._responseArgs.resp):this._completeHandlers.push(b),this},fail:function(b){return this._erred?b(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(b),this},'catch':function(b){return this.fail(b)}},reqwest.serializeArray=function(){var b=[];return eachFormElement.apply(function(d,g){b.push({name:d,value:g})},arguments),b},reqwest.serialize=function(){if(0===arguments.length)return'';var b,d,g=Array.prototype.slice.call(arguments,0);return b=g.pop(),b&&b.nodeType&&g.push(b)&&(b=null),b&&(b=b.type),d='map'==b?serializeHash:'array'==b?reqwest.serializeArray:serializeQueryString,d.apply(null,g)},reqwest.toQueryString=function(b,d){var g,h,w=[],x=encodeURIComponent,y=function(A,B){B='function'==typeof B?B():null==B?'':B,w[w.length]=x(A)+'='+x(B)};if(isArray(b))for(h=0;b&&h<b.length;h++)y(b[h].name,b[h].value);else for(g in b)b.hasOwnProperty(g)&&buildParams(g,b[g],d||!1,y);return w.join('&').replace(/%20/g,'+')},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(b,d){return b&&(b.type&&(b.method=b.type)&&delete b.type,b.dataType&&(b.type=b.dataType),b.jsonpCallback&&(b.jsonpCallbackName=b.jsonpCallback)&&delete b.jsonpCallback,b.jsonp&&(b.jsonpCallback=b.jsonp)),new Reqwest(b,d)},reqwest.ajaxSetup=function(b){for(var d in b=b||{},b)globalSetupOptions[d]=b[d]},reqwest});
'use strict';define(['lib/body', 'lib/reqwest'], (z, reqwest) => {

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

const data = {
	fences: ['art201.jpg', 'art204.jpg', 'art207.jpg', 'art210.jpg', 'art213.jpg', 'art216.jpg', 'art202.jpg', 'art205.jpg', 'art208.jpg', 'art211.jpg', 'art214.jpg', 'art203.jpg', 'art206.jpg', 'art209.jpg', 'art212.jpg', 'art215.jpg'],
	gates: ['art101.jpg', 'art105.jpg', 'art109.jpg', 'art113.jpg', 'art117.jpg', 'art102.jpg', 'art106.jpg', 'art110.jpg', 'art114.jpg', 'art118.jpg', 'art103.jpg', 'art107.jpg', 'art111.jpg', 'art115.jpg', 'art119.jpg', 'art104.jpg', 'art108.jpg', 'art112.jpg', 'art116.jpg', 'art120.jpg'],
	balcony: ['art501.jpg', 'art505.jpg', 'art509.jpg', 'art513.jpg', 'art517.jpg', 'art521.jpg', 'art502.jpg', 'art506.jpg', 'art510.jpg', 'art514.jpg', 'art518.jpg', 'art522.jpg', 'art503.jpg', 'art507.jpg', 'art511.jpg', 'art515.jpg', 'art519.jpg', 'art523.jpg', 'art504.jpg', 'art508.jpg', 'art512.jpg', 'art516.jpg', 'art520.png', 'art524.jpg'],
	furniture: ['art401.jpg', 'art404.jpg', 'art407.jpg', 'art410.jpg', 'art413.jpg', 'art416.jpg', 'art402.jpg', 'art405.jpg', 'art408.jpg', 'art411.jpg', 'art414.jpg', 'art403.jpg', 'art406.jpg', 'art409.jpg', 'art412.jpg', 'art415.jpg'],
	greenGardens: ['art801.jpg', 'art802.jpg', 'art803.jpg'],
	sheds: ['art901.JPG', 'art902.JPG', 'art903.JPG', 'art904.JPG', 'art905.JPG', 'art906.JPG', 'art907.JPG', 'art908.JPG'],
	stairs: ['art301.jpg', 'art307.jpg', 'art313.jpg', 'art319.jpg', 'art325.jpg', 'art331.jpg', 'art302.jpg', 'art308.jpg', 'art314.jpg', 'art320.jpg', 'art326.jpg', 'art332.jpg', 'art303.jpg', 'art309.jpg', 'art315.jpg', 'art321.jpg', 'art327.jpg', 'art333.jpg', 'art304.jpg', 'art310.jpg', 'art316.jpg', 'art322.jpg', 'art328.jpg', 'art334.jpg', 'art305.jpg', 'art311.jpg', 'art317.jpg', 'art323.jpg', 'art329.jpg', 'art335.jpg', 'art306.jpg', 'art312.jpg', 'art318.jpg', 'art324.jpg', 'art330.jpg', 'art336.jpg'],
	decor: ['art701.jpg', 'art704.jpg', 'art708.jpg', 'art711.jpg', 'art714.jpg', 'art702.jpg', 'art705.jpg', 'art709.jpg', 'art712.jpg', 'art715.jpg', 'art703.jpg', 'art706.jpg', 'art710.jpg', 'art713.jpg', 'art716.jpg'],
	balcony_fencing: []
}

const Style = z('style', `
* { box-sizing: border-box; }
body { margin: 0; background: #fcfcfe; color: #333; }
.philosopher { font-family: philosopher, sans-serif; }

.header { text-align: center; display: flex; flex-wrap: nowrap; align-items: center; justify-content: center;
	max-width: 100vw; }
.header > * { margin: 12px; }
.header:before, .header:after { content: ''; width: 155px; height: 18px; display: block; }
.header:before { background-image: url('assets/lev-or.png') }
.header:after { background-image: url('assets/prav-or.png') }

.f0 { font-size: 15px; }
.f1 { font-size: 49px; }
.f2 { font-size: 28px; }
.f3 { font-size: 37px; }
.f4 { font-size: 20px; }
.f5 { font-size: 18px; }
.f6 { font-size: 13px; }
.f7 { font-size: 53px; }

.w0 { font-weight: 200; }
.w1 { font-weight: 300; }
.w2 { font-weight: 400; }
.w3 { font-weight: 500; }
.w4 { font-weight: 600; }
.w5 { font-weight: 700; }
.w6 { font-weight: 800; }
.w7 { font-weight: 900; }

.sp1 { margin-top: 15px; }
.sp2 { margin-top: 30px; }
.sp3 { margin-top: 45px; }
.sp4 { margin-top: 60px; }

.c0 { color: #333; }
.c1 { color: #373737; }
.c2 { color: #2d2d2d; }
.c3 { color: #282828; }
.c4 { color: #898ca3; }
.c5 { color: #111; }
.c6 { color: #444; }
.c7 { color: #375168; }
.c8 { color: #cc9947; }

.b0 { background: #fcf3e8; }
.b1 { background: linear-gradient(#fff, #fdfdfd); }
.b2 { background: #fff; }

.preview { cursor: pointer; }

.btn { border: 2px solid #cc9947; padding: 9px 18px; background: #fff;
	height: 45px; transition: all .2s; outline: none; cursor: pointer; }
.btn:hover { background: #cc9947; color: #fff; }

.sz0 { width: }
.ma { margin: auto; }

input { padding: 8px; outline: none; display: block; border: 0; border: 1px solid #aaa; }
.error { color: #D7244C; border-color: #D7244C;}
.error::-webkit-input-placeholder { /* Chrome */
  color: #D7244C;
}
.error:-ms-input-placeholder { /* IE 10+ */
  color: #D7244C;
}
.error::-moz-placeholder { /* Firefox 19+ */
  color: #D7244C;
  opacity: 1;
}
.error:-moz-placeholder { /* Firefox 4 - 18 */
  color: #D7244C;
  opacity: 1;
}

.hero { background: #fff; }
.main-bg { background: url("assets/bg.jpg") no-repeat center; height: 670px; }
.bg3 { background: url("assets/bg3.jpg"); background-size: 100vw 350px; display: flex; justify-content: center;
	height: 350px; width: 100vw; align-items: center; }
@keyframes slideInDown {
  from { transform: translate3d(0, -100%, 0); }
  to { transform: translate3d(0, 0, 0); }
}

.hero-body { padding-top: 52px; padding-bottom: 0; }

.hero-head { background: #e8eff3; position: fixed; width: 100%; z-index: 1; }
.nav-menu.is-active { animation: slideInDown 0.2s ease; background: #fff!important; }
.nav-toggle { background-color: rgba(10,10,10,.1); }

.nav-toggle.is-active span { background-color: #4a4a4a; }

a.nav-item { color: #666!important; transition: color .2s; }
a.nav-item:hover { color: #888!important; }

.nav-right { justify-content: center; }

.nav-point { width: 7px; height: 7px; background-color: #d3ba83; margin-left: 12px; margin-right: 12px;
	border-radius: 50%; margin-top: 24px; }
.nav-menu.is-active .nav-point { display: none; }
.image { height: 186px; overflow: hidden; text-align: center; background: #222; }
.image img { height: 100%; width: auto; display: inline-block; }
.card { border-top-left-radius: 2px; border-top-right-radius: 2px; overflow: hidden; background: #f5f5f5; }

.underline { text-decoration: underline; }
.fdrow { flex-direction: row; }

.cp { cursor: pointer; }
.nw { flex-wrap: nowrap; }
.ac { align-items: center; }
.at { align-items: flex-start; }

.p0 { padding: 34px; }

.sz0 { width: 1em; }
.sz1 { width: 10em; }
.sz2 { width: 6em; }

.is-flex { flex-wrap: wrap; }
.jc { justify-content: center; }

img.fullscreen { max-height: calc(100vh - 46px); }

.modal-content { width: auto; max-width: calc(100vw - 46px); }

.section { padding-top: 0px; }

`);

const Header = name => z('', z('.header.philosopher.f1.w4', z('div', name)));

const Header2 = name => z('',
	z('.bg3',
		Header(name)
	),
);

const Button = (text, action) => z({is: '.btn.w2.c2', onclick: action}, text);

const Catalog = (src, images) => {
	images = Array(...images);
	let list = [];
	while (images.length > 0) list.push(z('.columns',
		images.splice(0, 4).map(
			i => z('.column.is-3', z('.card.sp2',
					z({is: '.card-image.preview', onclick() {
						imageModalOpened = src+i;
						z.update();
					}},
						z('figure.image',
							z({is: 'img', src: src+i})
						)
					),
					z('.card-content.has-text-centered',
						z('.philosopher.f4', 'Арт ' + i.substr(0, i.length - 4).substr(3)),
						z('.sp1'),
						Button('Узнать стоимость', e => {
							art = i.substr(0, i.length - 4).substr(3);
							modalOpened = true;
							z.update();
						})
					)
				)
			)
		)
	));
	return list
}

let art;
let imageModalOpened = false;
let modalOpened = false;

const closeModal = () => {
	modalOpened=false;
	z.update();
}

const Modal = () => z({is: '.modal', class: {'is-active': modalOpened}},
	z({is: '.modal-background', onclick: closeModal}),
	z('.modal-content.b0',
		z({is: 'img', src: 'assets/form.jpg'}),
		z('.has-text-centered.c3',
			z('.philosopher',
				z('.f3.w5', 'Как с вами связаться?'),
				z('.f4', 'Наш менеджер свяжется с вами в течение часа')),
			z({is: 'form.sp1', onsubmit(e) {
				e.preventDefault();
				let i0 = e.target.children[0].firstChild;
				let i1 = e.target.children[1].firstChild;
				let err = false;
				if (i0.value.trim().length == 0) {
					i0.classList.add('error');
					err = true;
				}
				if (i1.value.trim().length == 0) {
					i1.classList.add('error');
					err = true;
				}
				if (err) return;
				let data = `art=${art}&name=${encodeURIComponent(i0.value)}&phone=${encodeURIComponent(i1.value)}`;
				reqwest({
					url: '/scripts/order.php',
					method: 'post',
					data,
					success: res => {
						try {
							res = JSON.parse(res);
							if (res.FormResponse && res.FormResponse.success) document.location = '/спасибо-за-заявку.-мы-свяжемся-с-вами-очень-скоро.html';
						} catch(err) { console.error(err) }	
					}
				});
			}},
				z('.sp1', z({is: 'input.ma.f5', required: true, placeholder: 'Как вас зовут?'})),
				z('.sp1', z({is: 'input.ma.f5', required: true, placeholder: 'Номер телефона'})),
				z({is: 'button.btn.w2.c2.sp1.f5', type: 'submit'}, 'Заказать консультацию')
			),
			z('.sp4')
		)
	),
	z({is:'button.modal-close.is-large', onclick: closeModal})
);

const navLink = (name, to) => z({is: 'a.nav-item', onclick: e=>{
	document.location = to;
	menu = false;
	z.update();
}}, name);

let menu = false, politicsModalOpened = false;

const openPolitics = () => {
	politicsModalOpened = true;
	z.update();
}

const closePolitics = () => {
	politicsModalOpened = false;
	z.update();
}

const politicsModal = () => z({is: '.modal', class: {'is-active': politicsModalOpened}},
	z({is: '.modal-background', onclick: closePolitics}),
	z('.modal-content.b2.p0',
		z('.f2.c5', 'Соглашение об обработке персональных данных'),
		z('.sp2.f5', 'Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.'),
		z('.sp2.f5', 'Все лица заполнившие сведения составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных.'),
		z('.sp2.f5', 'Гражданин, принимая настоящее Соглашение, выражают свою заинтересованность и полное согласие, что обработка их персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.'),
	),
	z({is:'button.modal-close.is-large', onclick: closePolitics})
);

const closeImage = () => {
	imageModalOpened = false;
	z.update();
}

const imageModal = () => z({is: '.modal', class: {'is-active': imageModalOpened}},
	z({is: '.modal-background', onclick: closeImage}),
	z('.modal-content', z({is: 'img.fullscreen', src: imageModalOpened})),
	z({is:'button.modal-close.is-large', onclick: closeImage})
);

const Footer = () => z('.footer.b2',
	z('.container',
		z('.is-flex.ac',
			z('.sz2'),
			z('.is-flex.nw.ac',
				z('<', '<img src="assets/logo3.jpg">'),
				z('.sz0'),
				z('.v.f6',
					z('p.c6', '© Петербургский кузнец 1997'),
					z({is: '.underline.cp.c4', onclick: openPolitics}, 'Политика конфиденциальности')
				)
			),
			z('.sz1'),
			z('.is-flex.nw.at.sp1',
				z('<', '<img src="assets/tel.jpg">'),
				z('.sz0'),
				z('.v.has-text-right',
					z('p.c6.philosopher.f4', '8 (921) 559-90-38'),
					z({is: '.underline.cp.f6', onclick: () => {
						modalOpened = true;
						z.update();
					}}, 'Заказать звонок')
				)
			),
			z('.sz0'),
			z('.sz0'),
			z('.is-flex.nw.at.sp1',
				z('<', '<img src="assets/mail.jpg">'),
				z('.sz0'),
				z('.v.has-text-right',
					z('p.c6.philosopher.f4', 'info@spbkuznec.ru'),
					z({is: 'a.underline.cp.f6.c0', href: "mailto:spbkuznec@mail.ru"}, 'Написать письмо')
				)
			)
		)
	)
);

let names = {
	fences: 'Ворота и заборы',
	stairs: 'Перила и лестницы',
	greenGardens: 'Беседки и навесы',
	furniture: 'Мебель и декор',
	balcony: 'Балконы и ограждения'
}

const Body = () => z('',
	Style,
	Modal,
	politicsModal,
	imageModal,
	z('.hero.main-bg',
		z({is: '.hero-head', class: ()=>({'is-active': menu})},
			z('.nav',
				z('.container',
					z({is: 'span.nav-toggle',
						onclick() {
							menu=!menu;
							z.update();
						},
						class: ()=>({'is-active': menu})
					}, z('span'), z('span'), z('span')),
					z({is: '.nav-right.nav-menu', class: ()=>({'is-active': menu})},
					navLink('Ворота и заборы', '#fences'),
					z('.nav-point'),
					navLink('Перила и лестницы', '#stairs'),
					z('.nav-point'),
					navLink('Беседки и навесы', '#greenGardens'),
					z('.nav-point'),
					navLink('Мебель и декор', '#furniture'),
					z('.nav-point'),
					navLink('Баклоны и ограждения', '#balcony'),
					z('.nav-point'),
					navLink('Главная', '/'),
					)
				)
			)
		),
		z('.hero-body',
			z('.container.has-text-centered',
				z('.is-flex.ac.jc.nw',
					!window.mobilecheck() ? z('.v.has-text-left',
						z('p.c7.philosopher.f2', 'info@spbkuznec.ru'),
						z({is: 'a.underline.cp.c8', href: "mailto:spbkuznec@mail.ru"}, 'Написать письмо')
					) : '',
					z('.sz0'),
					z('<', '<a href="/"><img src="assets/logo2.png"></a>'),
					z('.sz0'),
					!window.mobilecheck() ? z('.v.has-text-right',
						z('p.c7.philosopher.f2', '8 (921) 559-90-38'),
						z({is: 'a.underline.cp.c8', onclick: () => {
							modalOpened = true;
							z.update();
						}}, 'Заказать звонок')
					) : ''
				),
				() => z('.f7.c7.philosopher', names[z.route().route]),
				() => {
					document.title = `Каталог - ${names[z.route().route]}`
				}
			)
		)
	),
	()=>z.route().route === 'fences' ? z('',
		Header('Ворота'),
		z('.section.container',
			Catalog('assets/gates/', data.gates)
		),
		Header2('Заборы'),
		z('.section.container',
			Catalog('assets/fences/', data.fences)
		)
	) : z.route().route === 'stairs' ? z('',
		z('.section.container.sp2',
			Catalog('assets/stairs/', data.stairs)
		)
	) : z.route().route === 'greenGardens' ? z('',
		Header('Беседки'),
		z('.section.container',
			Catalog('assets/greenGardens/', data.greenGardens)
		),
		Header2('Навесы'),
		z('.section.container',
			Catalog('assets/sheds/', data.sheds)
		)
	) : z.route().route === 'furniture' ? z('',
		Header('Мебель'),
		z('.section.container',
			Catalog('assets/furniture/', data.furniture)
		),
		Header2('Декор'),
		z('.section.container',
			Catalog('assets/decor/', data.decor)
		)
	) : z.route().route === 'balcony' ? z('',
		z('.section.container.sp2',
			Catalog('assets/balcony/', data.balcony)
		)
	) : document.location = '/',
	Footer
);

z.setBody(Body());

});