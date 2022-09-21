"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[1026],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7896),i=(n(2784),n(876));const r={sidebar_position:3},s="Statics and Dynamics",o={unversionedId:"misc/statics-and-dynamics",id:"misc/statics-and-dynamics",title:"Statics and Dynamics",description:"It is helpful to understand why and how LiveViewJS takes a HTML template and breaks it into static and dynamic parts.",source:"@site/docs/13-misc/statics-and-dynamics.md",sourceDirName:"13-misc",slug:"/misc/statics-and-dynamics",permalink:"/docs/misc/statics-and-dynamics",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Live Components",permalink:"/docs/misc/livecomponents"},next:{title:"Debugging LiveViews",permalink:"/docs/misc/debugging-wire"}},l={},c=[{value:"Template Example",id:"template-example",level:2},{value:"Parts of the Template",id:"parts-of-the-template",level:2},{value:"Zip Together",id:"zip-together",level:2},{value:"Send Both Statics and Dynamics to Client",id:"send-both-statics-and-dynamics-to-client",level:2},{value:"Only Update the Dynamics",id:"only-update-the-dynamics",level:2},{value:"Super Fast \ud83c\udfce",id:"super-fast-",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"statics-and-dynamics"},"Statics and Dynamics"),(0,i.kt)("p",null,"It is helpful to understand why and how ",(0,i.kt)("strong",{parentName:"p"},"LiveViewJS")," takes a HTML template and breaks it into static and dynamic parts.  "),(0,i.kt)("h2",{id:"template-example"},"Template Example"),(0,i.kt)("p",null,"Let's say we have the following template being returned in a LiveView's ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"...\nrender: (context, meta) => {\n  const {title, body} = context;\n  return html`\n    <div>\n      <h1>${title}</h1>\n      <p>${body}</p>\n    </div>\n  `\n}\n...\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  The ",(0,i.kt)("inlineCode",{parentName:"p"},"html"),' tag is a "tagged template literal" function which allows ',(0,i.kt)("strong",{parentName:"p"},"LiveViewJS")," to parse the template literal into a tree of static and dynamic parts.  For more information on tagged template literals, see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"},"MDN"),".")),(0,i.kt)("h2",{id:"parts-of-the-template"},"Parts of the Template"),(0,i.kt)("p",null,"The template above is pretty simple but easy to see how it can break into static parts and dynamic parts.  There are two dynamic parts of the template: ",(0,i.kt)("inlineCode",{parentName:"p"},"${context.title}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"${context.body}"),".  The rest of the template is static.  The parts break down into something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// array of static parts\nconst statics = [\n  "\n    <div>\n      <h1>",\n  "</h1>\n      <p>",\n  "</p>\n    </div>\n  "\n];\n\n// array of dynamic parts\nconst dynamics = [\n  title,\n  body\n];\n\n')),(0,i.kt)("h2",{id:"zip-together"},"Zip Together"),(0,i.kt)("p",null,"You can see that once we resolve the values for ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),' we can "zip" these two arrays together to create the final HTML string.  This is exactly what ',(0,i.kt)("strong",{parentName:"p"},"LiveViewJS")," does when it renders a HTML LiveView.  "),(0,i.kt)("h2",{id:"send-both-statics-and-dynamics-to-client"},"Send Both Statics and Dynamics to Client"),(0,i.kt)("p",null,"In the case of the websocket, ",(0,i.kt)("strong",{parentName:"p"},"LiveViewJS")," initially sends both the statics and dynamics to the client.  The client then uses the statics and dynamics to render the HTML.  The client also stores the statics in memory so that it can use them to re-render the HTML when the dynamics change. "),(0,i.kt)("h2",{id:"only-update-the-dynamics"},"Only Update the Dynamics"),(0,i.kt)("p",null,"When updates occur on the server and the LiveView is rerendered, we don't need to send the statics again.  We only need to send the dynamics and furthermore, we only need to send the dynamics that have changed.  The client then uses the stored statics and the new dynamics to re-render the HTML."),(0,i.kt)("h2",{id:"super-fast-"},"Super Fast \ud83c\udfce"),(0,i.kt)("p",null,"This sending only the value of a dynamic part of the LiveView that changed is extremely efficient and allows ",(0,i.kt)("strong",{parentName:"p"},"LiveViewJS")," to be super fast.  It also allows ",(0,i.kt)("strong",{parentName:"p"},"LiveViewJS")," to be very lightweight.  The client only needs to store the statics in memory and the server only needs to send the dynamics that have changed."))}p.isMDXComponent=!0}}]);