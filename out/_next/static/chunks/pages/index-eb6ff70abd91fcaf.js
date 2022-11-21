(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1464:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8479)}])},7845:function(e,t,n){"use strict";var r=n(5893);t.Z={github:"https://github.com/Ibex-CRM/Cabra",docsRepositoryBase:"https://github.com/Ibex-CRM/Cabra/blob/master",titleSuffix:" \u2013 Cabra Docs",logo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Nextra"}),(0,r.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"The Next.js Static Site Generator"})]}),head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,r.jsx)("meta",{name:"description",content:"Cabra: the Goat Agency design system"}),(0,r.jsx)("meta",{name:"og:description",content:"Cabra: the Goat Agency design system"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://res.cloudinary.com/montycat/image/upload/v1557750788/Goat/goat_logo.png"}),(0,r.jsx)("meta",{name:"og:title",content:"Cabra: the Goat Agency design system"}),(0,r.jsx)("meta",{name:"og:image",content:"https://res.cloudinary.com/montycat/image/upload/v1557750788/Goat/goat_logo.png"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Cabra"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,r.jsxs)(r.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Cabra."]}),unstable_faviconGlyph:"\ud83d\udc10"}},8479:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),o=n(7829),i=n.n(o),a=n(3805),s=n(7845),c=(n(4155).env.NEXT_PUBLIC_BASE_PATH,n(1132)),l=n.n(c),u=function(e){return(0,a.withSSG)(i()({filename:"index.mdx",route:"/",meta:{},pageMap:[{name:"_app",route:"/_app"},{name:"components",children:[{name:"tagPill",route:"/components/tagPill"}],route:"/components"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction",tokens:"Tokens",components:"Components"}},{name:"tokens",children:[{name:"colors",route:"/tokens/colors"},{name:"meta.json",meta:{colors:"Colors"}}],route:"/tokens"}]},s.Z))(e)};function m(e){var t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",img:"img"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Nextra"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Nextra"})," is a ",(0,r.jsx)(t.a,{href:"https://nextjs.org",children:"Next.js"})," based static site generator."]}),"\n",(0,r.jsxs)(t.p,{children:["It supports Markdown and React components (",(0,r.jsx)(t.a,{href:"/features/mdx",children:"MDX"}),"), automatically generated ",(0,r.jsx)(t.a,{href:"/get-started#sidebar-and-anchor-links",children:"sidebar and anchor links"}),", file-system based routing, built-in syntax highlighting, image optimization, custom layouts, i18n, and all the features you love about Next.js."]}),"\n",(0,r.jsx)(t.p,{children:"Here's what you will get in 1 minute:"}),"\n",(0,r.jsx)(l(),{children:(0,r.jsx)(t.img,{src:"%60$%7Bprefix%7D/demo.png%60",alt:"Nextra Example"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(u,Object.assign({},e,{children:(0,r.jsx)(m,e)}))}},1132:function(e,t,n){e.exports=n(3045)},3045:function(e,t,n){function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var o=r(n(7294)),i=r(n(4184));e.exports=({full:e,children:t})=>o.createElement("div",{className:i("bleed relative mt-6 -mx-6 md:-mx-8 2xl:-mx-24",{full:e})},t)},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,c=[],l=!1,u=-1;function m(){l&&s&&(l=!1,s.length?c=s.concat(c):u=-1,c.length&&h())}function h(){if(!l){var e=a(m);l=!0;for(var t=c.length;t;){for(s=c,c=[];++u<t;)s&&s[u].run();u=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[511,774,888,179],(function(){return t=1464,e(e.s=t);var t}));var t=e.O();_N_E=t}]);