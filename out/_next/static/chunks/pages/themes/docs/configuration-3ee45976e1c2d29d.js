(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9],{7595:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/themes/docs/configuration",function(){return t(6854)}])},7845:function(e,n,t){"use strict";var s=t(5893);n.Z={github:"https://github.com/Ibex-CRM/Cabra",docsRepositoryBase:"https://github.com/Ibex-CRM/Cabra/blob/master",titleSuffix:" \u2013 Cabra Docs",logo:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Nextra"}),(0,s.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"The Next.js Static Site Generator"})]}),head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,s.jsx)("meta",{name:"description",content:"Nextra: the Next.js site builder"}),(0,s.jsx)("meta",{name:"og:description",content:"Nextra: the Next.js site builder"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://nextra.vercel.app/og.png"}),(0,s.jsx)("meta",{name:"twitter:site:domain",content:"nextra.vercel.app"}),(0,s.jsx)("meta",{name:"twitter:url",content:"https://nextra.vercel.app"}),(0,s.jsx)("meta",{name:"og:title",content:"Nextra: Next.js static site generator"}),(0,s.jsx)("meta",{name:"og:image",content:"https://nextra.vercel.app/og.png"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Nextra"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,s.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,s.jsxs)(s.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Nextra."]}),unstable_faviconGlyph:"\ud83d\udc10"}},6854:function(e,n,t){"use strict";t.r(n),t.d(n,{Unstable:function(){return d}});var s=t(5893),r=t(7829),i=t.n(r),o=t(3805),a=t(7845),c=t(1127),l=t.n(c),d=function(){return(0,s.jsx)(l(),{type:"error",emoji:"",children:" This is an unstable and experimental feature and not recommended for general use."})},h=function(e){return(0,o.withSSG)(i()({filename:"configuration.mdx",route:"/themes/docs/configuration",meta:{},pageMap:[{name:"_app",route:"/_app"},{name:"advanced",children:[{name:"code-highlighting",route:"/advanced/code-highlighting"},{name:"meta.json",meta:{"code-highlighting":"Code Highlighting"}}],route:"/advanced"},{name:"components",children:[{name:"tagPill",route:"/components/tagPill"}],route:"/components"},{name:"features",children:[{name:"i18n",route:"/features/i18n"},{name:"image",route:"/features/image"},{name:"mdx",route:"/features/mdx"},{name:"meta.json",meta:{mdx:"MDX",ssg:"Next.js SSG",i18n:"Next.js i18n",image:"Next.js Image",themes:"Themes"}},{name:"ssg",route:"/features/ssg"},{name:"themes",route:"/features/themes"}],route:"/features"},{name:"get-started",route:"/get-started"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction","get-started":"Get Started",features:"Features",themes:"Themes",advanced:"Advanced"}},{name:"themes",children:[{name:"blog",children:[{name:"index",route:"/themes/blog"},{name:"meta.json",meta:{index:"Installation"}}],route:"/themes/blog"},{name:"docs",children:[{name:"bleed",route:"/themes/docs/bleed"},{name:"callout",route:"/themes/docs/callout"},{name:"configuration",route:"/themes/docs/configuration"},{name:"index",route:"/themes/docs"},{name:"meta.json",meta:{index:"Installation",configuration:"Configuration",callout:"Callout",bleed:"Bleed"}}],route:"/themes/docs"},{name:"meta.json",meta:{docs:"Docs Theme",blog:"Blog Theme"}}],route:"/themes"}]},a.Z))(e)};function x(e){var n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",strong:"strong",br:"br",a:"a"},e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["To configure the theme, edit or create\nthe ",(0,s.jsx)(n.code,{children:"theme.config.js"})," file in the root\ndirectory. The file looks something like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  projectLink: 'https://gitlab.com/librewolf-community/browser',\n  titleSuffix: ' \u2013 Nextra',\n  footerText: `MIT ${new Date().getFullYear()} \xa9 Nextra.`,\n  // ...\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"projectLink"})}),"\n",(0,s.jsx)(n.p,{children:"The URL that the button in the top right will point to."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"https://github.com/shuding/nextra"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"projectLinkIcon"})}),"\n",(0,s.jsx)(n.p,{children:"Changes the icon that is shown in the top right."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"ReactNode"}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," GitHub icon"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import Gitlab from '@geist-ui/react-icons/gitlab'\n\nexport default {\n  projectLinkIcon: <Gitlab />,\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"docsRepositoryBase"})}),"\n",(0,s.jsxs)(n.p,{children:["The base URL of the GitHub repository the docs are located in. This will be used for the ",(0,s.jsx)(n.code,{children:"Edit this Page on GitHub"})," button."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"https://github.com/shuding/nextra"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"titleSuffix"})}),"\n",(0,s.jsx)(n.p,{children:"Suffix that will be added to page titles in the URL bar."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"\u2013 Nextra"})]}),"\n",(0,s.jsxs)(n.h2,{children:[(0,s.jsx)(n.code,{children:"nextLinks"})," and ",(0,s.jsx)(n.code,{children:"prevLinks"})]}),"\n",(0,s.jsx)(n.p,{children:"Specifies if arrows are being shown at the bottom\nof a page showing the next and previous page, like\nthe ones at the bottom of this page."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"search"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies if a search box should be shown in the top right."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"customSearch"})}),"\n",(0,s.jsx)(n.p,{children:"A custom component to display instead of the search bar in the top right, for example, Algolia."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"ReactNode"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"darkMode"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies if the user can select a dark mode."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"defaultMenuCollapsed"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies if the menu on the left is collapsed by default."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"font"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies if nextra should load its own fonts. Disable this if you want to use a custom font."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"footer"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies if the footer should be shown."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"footerText"})}),"\n",(0,s.jsx)(n.p,{children:"The text that is shown on the left of the footer."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"ReactNode"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  footerText: `MIT ${new Date().getFullYear()} \xa9 Nextra.`,\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"footerEditLink"})}),"\n",(0,s.jsx)(n.p,{children:"The text that should be shown on the link that leads to the editable page on the repository."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"ReactNode"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"Edit this page"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example:"})," ",(0,s.jsx)(n.code,{children:"Edit this page on GitHub"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"logo"})}),"\n",(0,s.jsx)(n.p,{children:"The logo in the top left."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"ReactNode"}),"\\"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'export default {\n  logo: (\n    <React.Fragment>\n      <span className="mr-2 font-extrabold hidden md:inline">Nextra</span>\n      <span className="text-gray-600 font-normal hidden md:inline">\n        The Next Docs Builder\n      </span>\n    </React.Fragment>\n  ),\n}\n'})}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"head"})}),"\n",(0,s.jsx)(n.p,{children:"The head that should be inserted into the html document."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"ReactNode"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'export default {\n  head: (\n    <React.Fragment>\n      <meta name="msapplication-TileColor" content="#ffffff" />\n      <meta name="theme-color" content="#ffffff" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <meta httpEquiv="Content-Language" content="en" />\n      <meta name="description" content="Nextra: the next docs builder" />\n      <meta name="twitter:card" content="summary_large_image" />\n      <meta name="twitter:site" content="@shuding_" />\n      <meta property="og:title" content="Nextra: the next docs builder" />\n      <meta property="og:description" content="Nextra: the next docs builder" />\n      <meta name="apple-mobile-web-app-title" content="Nextra" />\n    </React.Fragment>\n  ),\n}\n'})}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"direction"})}),"\n",(0,s.jsx)(n.p,{children:"The direction of the text on the page"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"ltr"})," || ",(0,s.jsx)(n.code,{children:"rtl"})]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"i18n"})}),"\n",(0,s.jsxs)(n.p,{children:["The internationalization (i18n) config. See more ",(0,s.jsx)(n.a,{href:"/features/i18n",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"floatTOC"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies if the table of contents of a page\n(the headings) should be displayed floating\non the right instead of being integrated in\nthe menu on the left."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n","\n","\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"unstable_faviconGlyph"})}),"\n",(0,s.jsx)(n.p,{children:"A glyph that should be used as a favicon."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"char"})]}),"\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(n.h2,{children:(0,s.jsx)(n.code,{children:"unstable_stork"})}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://stork-search.net/",children:"Stork Search"})," for the\nsearch bar, a library for fast full-text search powered\nby WebAssembly."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(d,{})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(h,Object.assign({},e,{children:(0,s.jsx)(x,e)}))}},1127:function(e,n,t){e.exports=t(3952)},3952:function(e,n,t){var s,r=(s=t(7294))&&"object"===typeof s&&"default"in s?s.default:s;const i={default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"};e.exports=({children:e,type:n="default",emoji:t="\ud83d\udca1"})=>r.createElement("div",{className:`${i[n]} flex rounded-lg callout mt-6`},r.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},t),r.createElement("div",{className:"pr-4 py-2"},e))}},function(e){e.O(0,[511,774,888,179],(function(){return n=7595,e(e.s=n);var n}));var n=e.O();_N_E=n}]);