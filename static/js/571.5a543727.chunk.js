"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{571:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(524),i=r(791),o=r(691),p=r(87),l=r(689),f=r(635),d=r(184);t.default=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),r=t[0],u=t[1],h=(0,i.useState)(!1),v=(0,a.Z)(h,2),m=v[0],x=v[1],w=(0,i.useState)(null),b=(0,a.Z)(w,2),j=b[0],k=b[1],y=(0,p.lr)(),g=(0,a.Z)(y,2),Z=g[0],S=g[1],q=Z.get("query"),_=(0,l.TH)();(0,i.useEffect)((function(){if(q){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),k(null),e.next=5,(0,f.d9)(q);case 5:t=e.sent,console.log(t),u([t]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),k(e.t0.message);case 13:return e.prev=13,x(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[q]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.search.value.trim("");S({query:t})},children:[(0,d.jsx)("input",{type:"text",name:"search",placeholder:"enter Post Id ",required:!0,defaultValue:q}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),m&&(0,d.jsx)(o.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"}),j&&(0,d.jsxs)("p",{children:["Some error occured: ",j]}),(null===r||void 0===r?void 0:r.length)&&(0,d.jsx)("ul",{children:r.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsxs)(p.rU,{to:(0,s.cE)(e.id),state:{from:_},children:[(0,d.jsx)("h2",{children:e.title}),(0,d.jsx)("p",{children:e.body})]})},e.id)}))})]})}},635:function(e,t,r){r.d(t,{Jq:function(){return s},d9:function(){return i},w8:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(243).Z.create({baseURL:"https://jsonplaceholder.typicode.com/"}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("posts/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("posts/".concat(t,"/comments"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=571.5a543727.chunk.js.map