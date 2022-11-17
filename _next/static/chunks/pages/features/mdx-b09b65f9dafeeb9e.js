(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{2545:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/mdx",function(){return t(9978)}])},7845:function(e,n,t){"use strict";var r=t(5893);n.Z={github:"https://github.com/shuding/nextra",docsRepositoryBase:"https://github.com/shuding/nextra/blob/master",titleSuffix:" \u2013 Nextra",logo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Nextra"}),(0,r.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"The Next.js Static Site Generator"})]}),head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,r.jsx)("meta",{name:"description",content:"Nextra: the Next.js site builder"}),(0,r.jsx)("meta",{name:"og:description",content:"Nextra: the Next.js site builder"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://nextra.vercel.app/og.png"}),(0,r.jsx)("meta",{name:"twitter:site:domain",content:"nextra.vercel.app"}),(0,r.jsx)("meta",{name:"twitter:url",content:"https://nextra.vercel.app"}),(0,r.jsx)("meta",{name:"og:title",content:"Nextra: Next.js static site generator"}),(0,r.jsx)("meta",{name:"og:image",content:"https://nextra.vercel.app/og.png"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Nextra"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,r.jsxs)(r.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Nextra."]}),unstable_faviconGlyph:"\ud83d\udc4b"}},9978:function(e,n,t){"use strict";t.r(n);var r=t(5893),s=t(7829),i=t.n(s),a=t(3805),o=t(7845),l=t(1127),d=t.n(l),c=function(e){return(0,a.withSSG)(i()({filename:"mdx.mdx",route:"/features/mdx",meta:{},pageMap:[{name:"_app",route:"/_app"},{name:"advanced",children:[{name:"code-highlighting",route:"/advanced/code-highlighting"},{name:"meta.json",meta:{"code-highlighting":"Code Highlighting"}}],route:"/advanced"},{name:"features",children:[{name:"i18n",route:"/features/i18n"},{name:"image",route:"/features/image"},{name:"mdx",route:"/features/mdx"},{name:"meta.json",meta:{mdx:"MDX",ssg:"Next.js SSG",i18n:"Next.js i18n",image:"Next.js Image",themes:"Themes"}},{name:"ssg",route:"/features/ssg"},{name:"themes",route:"/features/themes"}],route:"/features"},{name:"get-started",route:"/get-started"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction","get-started":"Get Started",features:"Features",themes:"Themes",advanced:"Advanced"}},{name:"themes",children:[{name:"blog",children:[{name:"index",route:"/themes/blog"},{name:"meta.json",meta:{index:"Installation"}}],route:"/themes/blog"},{name:"docs",children:[{name:"bleed",route:"/themes/docs/bleed"},{name:"callout",route:"/themes/docs/callout"},{name:"configuration",route:"/themes/docs/configuration"},{name:"index",route:"/themes/docs"},{name:"meta.json",meta:{index:"Installation",configuration:"Configuration",callout:"Callout",bleed:"Bleed"}}],route:"/themes/docs"},{name:"meta.json",meta:{docs:"Docs Theme",blog:"Blog Theme"}}],route:"/themes"}]},o.Z))(e)};function h(e){var n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre",strong:"strong",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",ol:"ol",li:"li",ul:"ul",blockquote:"blockquote"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"MDX"}),"\n",(0,r.jsxs)(n.p,{children:["With Nextra, all your ",(0,r.jsx)(n.code,{children:".md"})," and ",(0,r.jsx)(n.code,{children:".mdx"})," files under the pages directory will be rendered with ",(0,r.jsx)(n.a,{href:"https://mdxjs.com/about",children:"MDX"}),", it's an\nadvanced Markdown format with React component support."]}),"\n",(0,r.jsx)(n.p,{children:"You can use import and use React components inside your Markdown files like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"import Callout from 'nextra-theme-docs/callout'\n\n**Markdown With React Components**\n\n<Callout emoji=\"\u2705\">\n  **MDX** (the library), at its core, transforms MDX (the syntax) to JSX.\n  It receives an MDX string and outputs a _JSX string_. It does this by parsing\n  the MDX document to a syntax tree and then generates a JSX document from that tree. \n</Callout>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generates:"}),"\n","\n",(0,r.jsxs)("div",{className:"p-4 border border-gray-200 dark:border-gray-900 rounded mt-6",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Markdown With React Components"})}),(0,r.jsx)(d(),{emoji:"\u2705",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"MDX"})," (the library), at its core, transforms MDX (the syntax) to JSX. It\nreceives an MDX string and outputs a ",(0,r.jsx)(n.em,{children:"JSX string"}),". It does this by parsing the\nMDX document to a syntax tree and then generates a JSX document from that\ntree."]})})]}),"\n",(0,r.jsx)(n.h2,{children:"Heading"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.h1,{children:[(0,r.jsx)(n.strong,{children:"Hello"}),", This Is a ",(0,r.jsx)(n.em,{children:"Title"})," Inside ",(0,r.jsx)(n.code,{children:"h1"})]}),"\n",(0,r.jsxs)("h2",{children:[(0,r.jsx)(n.strong,{children:"Hello"}),", This Is a ",(0,r.jsx)(n.em,{children:"Title"})," Inside ",(0,r.jsx)(n.code,{children:"h2"})]}),"\n","\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.strong,{children:"Hello"}),", This Is a ",(0,r.jsx)(n.em,{children:"Title"})," Inside ",(0,r.jsx)(n.code,{children:"h3"})]}),"\n",(0,r.jsxs)(n.h4,{children:[(0,r.jsx)(n.strong,{children:"Hello"}),", This Is a ",(0,r.jsx)(n.em,{children:"Title"})," Inside ",(0,r.jsx)(n.code,{children:"h4"})]}),"\n",(0,r.jsxs)(n.h5,{children:[(0,r.jsx)(n.strong,{children:"Hello"}),", This Is a ",(0,r.jsx)(n.em,{children:"Title"})," Inside ",(0,r.jsx)(n.code,{children:"h5"})]}),"\n",(0,r.jsxs)(n.h6,{children:[(0,r.jsx)(n.strong,{children:"Hello"}),", This Is a ",(0,r.jsx)(n.em,{children:"Title"})," Inside ",(0,r.jsx)(n.code,{children:"h6"})]}),"\n",(0,r.jsx)(n.h2,{children:"List"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"one"}),"\n",(0,r.jsx)(n.li,{children:"two"}),"\n",(0,r.jsx)(n.li,{children:"three"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"one"}),"\n",(0,r.jsx)(n.li,{children:"two"}),"\n",(0,r.jsx)(n.li,{children:"three"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Task List"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media\n"})}),"\n",(0,r.jsx)(n.p,{children:"Renders"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[x] Write the press release"}),"\n",(0,r.jsx)(n.li,{children:"[ ] Update the website"}),"\n",(0,r.jsx)(n.li,{children:"[ ] Contact the media"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Syntax Highlighting"}),"\n",(0,r.jsx)(n.p,{children:"Automatic syntax highlighting:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"```js\nconsole.log('hello, world')\n```\n"})}),"\n",(0,r.jsx)(n.p,{children:"Renders:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"console.log('hello, world')\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also add the ",(0,r.jsx)(n.code,{children:"highlight=<line|range>"})," modifier to highlight specific lines:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"```jsx highlight=4,6-8\nimport useSWR from 'swr'\n\nfunction Profile() {\n  const { data, error } = useSWR('/api/user', fetcher)\n\n  if (error) return <div>failed to load</div>\n  if (!data) return <div>loading...</div>\n  return <div>hello {data.name}!</div>\n}\n```\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import useSWR from 'swr'\n\nfunction Profile() {\n  const { data, error } = useSWR('/api/user', fetcher)\n\n  if (error) return <div>failed to load</div>\n  if (!data) return <div>loading...</div>\n  return <div>hello {data.name}!</div>\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Inline Code"}),"\n",(0,r.jsxs)(n.p,{children:["You can use `content` to wrap inline code content like: ",(0,r.jsx)(n.code,{children:"let x = 1"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"Blockquote"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Where some people measure progress in answers-right per test or tests-passed per year, we are more interested in Sistine-Chapel-Ceilings per Lifetime."}),"\n",(0,r.jsx)(n.p,{children:"\u2014 Alan Kay, A Personal Computer for Children of All Ages"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Nested quotes:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Where some people measure progress in answers-right per test or tests-passed per year, we are more interested in Sistine-Chapel-Ceilings per Lifetime."}),"\n",(0,r.jsx)(n.p,{children:"\u2014 Alan Kay, A Personal Computer for Children of All Ages"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This is ",(0,r.jsx)(n.strong,{children:"great"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"\u2014 Shu Ding."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Table"}),"\n",(0,r.jsx)(n.p,{children:"| Syntax        | Description |   Test Text |\n| :------------ | :---------: | ----------: |\n| Header        |    Title    | Here's this |\n| Paragraph     |    Text     |    And more |\n| Strikethrough |             |    ~~Text~~ |"}),"\n",(0,r.jsx)(n.h2,{children:"React Components"}),"\n",(0,r.jsxs)(n.p,{children:["React components and Markdown can be ",(0,r.jsx)(n.strong,{children:"mixed together"}),", for instance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"> <Callout>\n>   Give [**Nextra**](https://github.com/shuding/nextra) a star!\n> </Callout>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Renders:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(d(),{children:(0,r.jsxs)(n.p,{children:["Give ",(0,r.jsx)(n.a,{href:"https://github.com/shuding/nextra",children:(0,r.jsx)(n.strong,{children:"Nextra"})})," a star!"]})}),"\n"]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,Object.assign({},e,{children:(0,r.jsx)(h,e)}))}},1127:function(e,n,t){e.exports=t(3952)},3952:function(e,n,t){var r,s=(r=t(7294))&&"object"===typeof r&&"default"in r?r.default:r;const i={default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"};e.exports=({children:e,type:n="default",emoji:t="\ud83d\udca1"})=>s.createElement("div",{className:`${i[n]} flex rounded-lg callout mt-6`},s.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},t),s.createElement("div",{className:"pr-4 py-2"},e))}},function(e){e.O(0,[511,774,888,179],(function(){return n=2545,e(e.s=n);var n}));var n=e.O();_N_E=n}]);