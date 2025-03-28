"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["53193"],{6419:function(n,e,i){i.r(e),i.d(e,{frontMatter:()=>c,default:()=>x,contentTitle:()=>h,assets:()=>u,toc:()=>m,metadata:()=>t});var t=JSON.parse('{"id":"guides/markdown-features/admonitions","title":"Admonitions","description":"Handling admonitions/callouts in Docusaurus Markdown","source":"@site/docs/guides/markdown-features/markdown-features-admonitions.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/admonitions","permalink":"/docs/markdown-features/admonitions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-admonitions.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1743097488000,"frontMatter":{"id":"admonitions","description":"Handling admonitions/callouts in Docusaurus Markdown","slug":"/markdown-features/admonitions"},"sidebar":"docs","previous":{"title":"Code blocks","permalink":"/docs/markdown-features/code-blocks"},"next":{"title":"Headings and Table of contents","permalink":"/docs/markdown-features/toc"}}'),o=i(85893),s=i(80980),r=i(14522),a=i(15398),d=i(58636),l=i(49356);let c={id:"admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},h="Admonitions",u={},m=[{value:"Usage with Prettier",id:"usage-with-prettier",level:2},{value:"Specifying title",id:"specifying-title",level:2},{value:"Nested admonitions",id:"nested-admonitions",level:2},{value:"Admonitions with MDX",id:"admonitions-with-mdx",level:2},{value:"Usage in JSX",id:"usage-in-jsx",level:2},{value:"Customizing admonitions",id:"customizing-admonitions",level:2},{value:"Customizing rendering behavior",id:"customizing-rendering-behavior",level:3},{value:"Customizing parsing behavior",id:"customizing-parsing-behavior",level:3},{value:"Custom admonition type components",id:"custom-admonition-type-components",level:3}];function p(n){let e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"admonitions",children:"Admonitions"})}),"\n","\n",(0,o.jsx)(e.p,{children:"In addition to the basic Markdown syntax, we have a special admonitions syntax by wrapping text with a set of 3 colons, followed by a label denoting its type."}),"\n",(0,o.jsx)(e.p,{children:"Example:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-md",children:":::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::warning\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n"})}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["Some ",(0,o.jsx)(e.strong,{children:"content"})," with ",(0,o.jsx)(e.em,{children:"Markdown"})," ",(0,o.jsx)(e.code,{children:"syntax"}),". Check ",(0,o.jsxs)(e.a,{href:"#",children:["this ",(0,o.jsx)(e.code,{children:"api"})]}),"."]})}),(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["Some ",(0,o.jsx)(e.strong,{children:"content"})," with ",(0,o.jsx)(e.em,{children:"Markdown"})," ",(0,o.jsx)(e.code,{children:"syntax"}),". Check ",(0,o.jsxs)(e.a,{href:"#",children:["this ",(0,o.jsx)(e.code,{children:"api"})]}),"."]})}),(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["Some ",(0,o.jsx)(e.strong,{children:"content"})," with ",(0,o.jsx)(e.em,{children:"Markdown"})," ",(0,o.jsx)(e.code,{children:"syntax"}),". Check ",(0,o.jsxs)(e.a,{href:"#",children:["this ",(0,o.jsx)(e.code,{children:"api"})]}),"."]})}),(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsxs)(e.p,{children:["Some ",(0,o.jsx)(e.strong,{children:"content"})," with ",(0,o.jsx)(e.em,{children:"Markdown"})," ",(0,o.jsx)(e.code,{children:"syntax"}),". Check ",(0,o.jsxs)(e.a,{href:"#",children:["this ",(0,o.jsx)(e.code,{children:"api"})]}),"."]})}),(0,o.jsx)(e.admonition,{type:"danger",children:(0,o.jsxs)(e.p,{children:["Some ",(0,o.jsx)(e.strong,{children:"content"})," with ",(0,o.jsx)(e.em,{children:"Markdown"})," ",(0,o.jsx)(e.code,{children:"syntax"}),". Check ",(0,o.jsxs)(e.a,{href:"#",children:["this ",(0,o.jsx)(e.code,{children:"api"})]}),"."]})})]}),"\n",(0,o.jsx)(e.h2,{id:"usage-with-prettier",children:"Usage with Prettier"}),"\n",(0,o.jsxs)(e.p,{children:["If you use ",(0,o.jsx)(e.a,{href:"https://prettier.io",children:"Prettier"})," to format your Markdown files, Prettier might auto-format your code to invalid admonition syntax. To avoid this problem, add empty lines around the starting and ending directives. This is also why the examples we show here all have empty lines around the content."]}),"\n","\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-md",children:"\x3c!-- Prettier doesn't change this --\x3e\n:::note\n\nHello world\n\n:::\n\n\x3c!-- Prettier changes this --\x3e\n:::note\nHello world\n:::\n\n\x3c!-- to this --\x3e\n::: note Hello world:::\n"})}),"\n",(0,o.jsx)(e.h2,{id:"specifying-title",children:"Specifying title"}),"\n",(0,o.jsx)(e.p,{children:"You may also specify an optional title."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-md",children:":::note[Your Title **with** some _Markdown_ `syntax`!]\n\nSome **content** with some _Markdown_ `syntax`.\n\n:::\n"})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsxs)(e.admonition,{type:"note",children:[(0,o.jsxs)(e.mdxAdmonitionTitle,{children:["Your Title ",(0,o.jsx)(e.strong,{children:"with"})," some ",(0,o.jsx)(e.em,{children:"Markdown"})," ",(0,o.jsx)(e.code,{children:"syntax"}),"!"]}),(0,o.jsxs)(e.p,{children:["Some ",(0,o.jsx)(e.strong,{children:"content"})," with some ",(0,o.jsx)(e.em,{children:"Markdown"})," ",(0,o.jsx)(e.code,{children:"syntax"}),"."]})]})}),"\n",(0,o.jsx)(e.h2,{id:"nested-admonitions",children:"Nested admonitions"}),"\n",(0,o.jsxs)(e.p,{children:["Admonitions can be nested. Use more colons ",(0,o.jsx)(e.code,{children:":"})," for each parent admonition level."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-md",children:":::::info[Parent]\n\nParent content\n\n::::danger[Child]\n\nChild content\n\n:::tip[Deep Child]\n\nDeep child content\n\n:::\n\n::::\n\n:::::\n"})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsxs)(e.admonition,{title:"Parent",type:"info",children:[(0,o.jsx)(e.p,{children:"Parent content"}),(0,o.jsxs)(e.admonition,{title:"Child",type:"danger",children:[(0,o.jsx)(e.p,{children:"Child content"}),(0,o.jsx)(e.admonition,{title:"Deep Child",type:"tip",children:(0,o.jsx)(e.p,{children:"Deep child content"})})]})]})}),"\n",(0,o.jsx)(e.h2,{id:"admonitions-with-mdx",children:"Admonitions with MDX"}),"\n",(0,o.jsx)(e.p,{children:"You can use MDX inside admonitions too!"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:'import Tabs from \'@theme/Tabs\';\n\nimport TabItem from \'@theme/TabItem\';\n\n:::tip[Use tabs in admonitions]\n\n<Tabs>\n  <TabItem value="apple" label="Apple">This is an apple \uD83C\uDF4E</TabItem>\n  <TabItem value="orange" label="Orange">This is an orange \uD83C\uDF4A</TabItem>\n  <TabItem value="banana" label="Banana">This is a banana \uD83C\uDF4C</TabItem>\n</Tabs>\n\n:::\n'})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(e.admonition,{title:"Use tabs in admonitions",type:"tip",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(d.Z,{value:"apple",label:"Apple",children:"This is an apple \uD83C\uDF4E"}),(0,o.jsx)(d.Z,{value:"orange",label:"Orange",children:"This is an orange \uD83C\uDF4A"}),(0,o.jsx)(d.Z,{value:"banana",label:"Banana",children:"This is a banana \uD83C\uDF4C"})]})})}),"\n",(0,o.jsx)(e.h2,{id:"usage-in-jsx",children:"Usage in JSX"}),"\n",(0,o.jsxs)(e.p,{children:["Outside of Markdown, you can use the ",(0,o.jsx)(e.code,{children:"@theme/Admonition"})," component to get the same output."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="MyReactPage.jsx"',children:"import Admonition from '@theme/Admonition';\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      <Admonition type=\"info\">\n        <p>Some information</p>\n      </Admonition>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["The types that are accepted are the same as above: ",(0,o.jsx)(e.code,{children:"note"}),", ",(0,o.jsx)(e.code,{children:"tip"}),", ",(0,o.jsx)(e.code,{children:"danger"}),", ",(0,o.jsx)(e.code,{children:"info"}),", ",(0,o.jsx)(e.code,{children:"warning"}),". Optionally, you can specify an icon by passing a JSX element or a string, or a title:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="MyReactPage.jsx"',children:'<Admonition type="tip" icon="\uD83D\uDCA1" title="Did you know...">\n  Use plugins to introduce shorter syntax for the most commonly used JSX\n  elements in your project.\n</Admonition>\n'})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(l.Z,{type:"tip",icon:"\uD83D\uDCA1",title:"Did you know...",children:(0,o.jsx)(e.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})})}),"\n",(0,o.jsx)(e.h2,{id:"customizing-admonitions",children:"Customizing admonitions"}),"\n",(0,o.jsxs)(e.p,{children:["There are two kinds of customizations possible with admonitions: ",(0,o.jsx)(e.strong,{children:"parsing"})," and ",(0,o.jsx)(e.strong,{children:"rendering"}),"."]}),"\n",(0,o.jsx)(e.h3,{id:"customizing-rendering-behavior",children:"Customizing rendering behavior"}),"\n",(0,o.jsxs)(e.p,{children:["You can customize how each individual admonition type is rendered through ",(0,o.jsx)(e.a,{href:"/docs/swizzling",children:"swizzling"}),". You can often achieve your goal through a simple wrapper. For example, in the follow example, we swap out the icon for ",(0,o.jsx)(e.code,{children:"info"})," admonitions only."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="src/theme/Admonition.js"',children:"import React from 'react';\nimport Admonition from '@theme-original/Admonition';\nimport MyCustomNoteIcon from '@site/static/img/info.svg';\n\nexport default function AdmonitionWrapper(props) {\n  if (props.type !== 'info') {\n    return <Admonition title=\"My Custom Admonition Title\" {...props} />;\n  }\n  return <Admonition icon={<MyCustomNoteIcon />} {...props} />;\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"customizing-parsing-behavior",children:"Customizing parsing behavior"}),"\n",(0,o.jsxs)(e.p,{children:["Admonitions are implemented with a ",(0,o.jsx)(e.a,{href:"/docs/markdown-features/plugins",children:"Remark plugin"}),". The plugin is designed to be configurable. To customize the Remark plugin for a specific content plugin (docs, blog, pages), pass the options through the ",(0,o.jsx)(e.code,{children:"admonitions"})," key."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          admonitions: {\n            keywords: ['note', 'tip', 'info', 'warning', 'danger'],\n            extendDefaults: true,\n          },\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,o.jsx)(e.p,{children:"The plugin accepts the following options:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"keywords"}),": An array of keywords that can be used as the type for the admonition."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"extendDefaults"}),": Should the provided options (such as ",(0,o.jsx)(e.code,{children:"keywords"}),") be merged into the existing defaults. Defaults to ",(0,o.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"keyword"})," will be passed as the ",(0,o.jsx)(e.code,{children:"type"})," prop of the ",(0,o.jsx)(e.code,{children:"Admonition"})," component."]}),"\n",(0,o.jsx)(e.h3,{id:"custom-admonition-type-components",children:"Custom admonition type components"}),"\n",(0,o.jsxs)(e.p,{children:["By default, the theme doesn't know what do to with custom admonition keywords such as ",(0,o.jsx)(e.code,{children:":::my-custom-admonition"}),". It is your responsibility to map each admonition keyword to a React component so that the theme knows how to render them."]}),"\n",(0,o.jsxs)(e.p,{children:["If you registered a new admonition type ",(0,o.jsx)(e.code,{children:"my-custom-admonition"})," via the following config:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  presets: [\n    [\n      'classic',\n      {\n        // ...\n        docs: {\n          admonitions: {\n            keywords: ['my-custom-admonition'],\n            extendDefaults: true,\n          },\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,o.jsxs)(e.p,{children:["You can provide the corresponding React component for ",(0,o.jsx)(e.code,{children:":::my-custom-admonition"})," by creating the following file (unfortunately, since it's not a React component file, it's not swizzlable):"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",metastring:'title="src/theme/Admonition/Types.js"',children:"import React from 'react';\nimport DefaultAdmonitionTypes from '@theme-original/Admonition/Types';\n\nfunction MyCustomAdmonition(props) {\n  return (\n    <div style={{border: 'solid red', padding: 10}}>\n      <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>\n      <div>{props.children}</div>\n    </div>\n  );\n}\n\nconst AdmonitionTypes = {\n  ...DefaultAdmonitionTypes,\n\n  // Add all your custom admonition types here...\n  // You can also override the default ones if you want\n  'my-custom-admonition': MyCustomAdmonition,\n};\n\nexport default AdmonitionTypes;\n"})}),"\n",(0,o.jsx)(e.p,{children:"Now you can use your new admonition keyword in a Markdown file, and it will be parsed and rendered with your custom logic:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-md",children:":::my-custom-admonition[My Title]\n\nIt works!\n\n:::\n"})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(e.admonition,{title:"My Title",type:"my-custom-admonition",children:(0,o.jsx)(e.p,{children:"It works!"})})})]})}function x(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},37796:function(n,e,i){i.d(e,{Z:()=>o});var t=i(85893);function o(n){return(0,t.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}i(67294)},49356:function(n,e,i){i.d(e,{Z:()=>C});var t=i(85893),o=i(67294),s=i(90496),r=i(77827),a=i(55951);let d={admonition:"admonition_o5H7",admonitionHeading:"admonitionHeading_FzoX",admonitionIcon:"admonitionIcon_rXq6",admonitionContent:"admonitionContent_Knsx"};function l(n){let{type:e,className:i,children:o}=n;return(0,t.jsx)("div",{className:(0,s.Z)(a.k.common.admonition,a.k.common.admonitionType(e),d.admonition,i),children:o})}function c(n){let{icon:e,title:i}=n;return(0,t.jsxs)("div",{className:d.admonitionHeading,children:[(0,t.jsx)("span",{className:d.admonitionIcon,children:e}),i]})}function h(n){let{children:e}=n;return e?(0,t.jsx)("div",{className:d.admonitionContent,children:e}):null}function u(n){let{type:e,icon:i,title:o,children:s,className:r}=n;return(0,t.jsxs)(l,{type:e,className:r,children:[o||i?(0,t.jsx)(c,{title:o,icon:i}):null,(0,t.jsx)(h,{children:s})]})}let m={icon:(0,t.jsx)(function(n){return(0,t.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,t.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function p(n){return(0,t.jsx)(u,{...m,...n,className:(0,s.Z)("alert alert--secondary",n.className),children:n.children})}let x={icon:(0,t.jsx)(function(n){return(0,t.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,t.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(n){return(0,t.jsx)(u,{...x,...n,className:(0,s.Z)("alert alert--success",n.className),children:n.children})}var f=i(37796);let g={icon:(0,t.jsx)(f.Z,{}),title:(0,t.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(n){return(0,t.jsx)(u,{...g,...n,className:(0,s.Z)("alert alert--info",n.className),children:n.children})}function w(n){return(0,t.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let v={icon:(0,t.jsx)(w,{}),title:(0,t.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},b={icon:(0,t.jsx)(function(n){return(0,t.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,t.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},k={icon:(0,t.jsx)(w,{}),title:(0,t.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var T=i(57922);let N={note:p,tip:j,info:y,warning:function(n){return(0,t.jsx)(u,{...v,...n,className:(0,s.Z)("alert alert--warning",n.className),children:n.children})},danger:function(n){return(0,t.jsx)(u,{...b,...n,className:(0,s.Z)("alert alert--danger",n.className),children:n.children})},secondary:n=>(0,t.jsx)(p,{title:"secondary",...n}),important:n=>(0,t.jsx)(y,{title:"important",...n}),success:n=>(0,t.jsx)(j,{title:"success",...n}),caution:function(n){return(0,t.jsx)(u,{...k,...n,className:(0,s.Z)("alert alert--warning",n.className),children:n.children})},"my-custom-admonition":function(n){return(0,t.jsxs)("div",{style:{border:"solid red",padding:10},children:[(0,t.jsx)(T.Z,{as:"h5",style:{color:"blue",fontSize:30},children:n.title}),(0,t.jsx)("div",{children:n.children})]})}};function C(n){let e=function(n){let{mdxAdmonitionTitle:e,rest:i}=function(n){let e=o.Children.toArray(n),i=e.find(n=>o.isValidElement(n)&&"mdxAdmonitionTitle"===n.type),s=e.filter(n=>n!==i);return{mdxAdmonitionTitle:i?.props.children,rest:s.length>0?(0,t.jsx)(t.Fragment,{children:s}):null}}(n.children),s=n.title??e;return{...n,...s&&{title:s},children:i}}(n),i=function(n){let e=N[n];return e||(console.warn(`No admonition component found for admonition type "${n}". Using Info as fallback.`),N.info)}(e.type);return(0,t.jsx)(i,{...e})}},58636:function(n,e,i){i.d(e,{Z:()=>s});var t=i(85893);i(67294);var o=i(90496);function s(n){let{children:e,hidden:i,className:s}=n;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_pnkT",s),hidden:i,children:e})}},15398:function(n,e,i){i.d(e,{Z:()=>g});var t=i(85893),o=i(67294),s=i(90496),r=i(54947),a=i(3620),d=i(844),l=i(97486),c=i(32263),h=i(16971);function u(n){return o.Children.toArray(n).filter(n=>"\n"!==n).map(n=>{if(!n||o.isValidElement(n)&&function(n){let{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(n){let{value:e,tabValues:i}=n;return i.some(n=>n.value===e)}var p=i(71607);function x(n){let{className:e,block:i,selectedValue:o,selectValue:a,tabValues:d}=n,l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),h=n=>{let e=n.currentTarget,i=d[l.indexOf(e)].value;i!==o&&(c(e),a(i))},u=n=>{let e=null;switch(n.key){case"Enter":h(n);break;case"ArrowRight":{let i=l.indexOf(n.currentTarget)+1;e=l[i]??l[0];break}case"ArrowLeft":{let i=l.indexOf(n.currentTarget)-1;e=l[i]??l[l.length-1]}}e?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},e),children:d.map(n=>{let{value:e,label:i,attributes:r}=n;return(0,t.jsx)("li",{role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,ref:n=>{l.push(n)},onKeyDown:u,onClick:h,...r,className:(0,s.Z)("tabs__item","tabItem_AQgk",r?.className,{"tabs__item--active":o===e}),children:i??e},e)})})}function j(n){let{lazy:e,children:i,selectedValue:r}=n,a=(Array.isArray(i)?i:[i]).filter(Boolean);if(e){let n=a.find(n=>n.props.value===r);return n?(0,o.cloneElement)(n,{className:(0,s.Z)("margin-top--md",n.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==r}))})}function f(n){let e=function(n){let{defaultValue:e,queryString:i=!1,groupId:t}=n,s=function(n){let{values:e,children:i}=n;return(0,o.useMemo)(()=>{let n=e??u(i).map(n=>{let{props:{value:e,label:i,attributes:t,default:o}}=n;return{value:e,label:i,attributes:t,default:o}});return!function(n){let e=(0,c.lx)(n,(n,e)=>n.value===e.value);if(e.length>0)throw Error(`Docusaurus error: Duplicate values "${e.map(n=>n.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n},[e,i])}(n),[r,p]=(0,o.useState)(()=>(function(n){let{defaultValue:e,tabValues:i}=n;if(0===i.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:i}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${i.map(n=>n.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=i.find(n=>n.default)??i[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:e,tabValues:s})),[x,j]=function(n){let{queryString:e=!1,groupId:i}=n,t=(0,a.k6)(),s=function(n){let{queryString:e=!1,groupId:i}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!i)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:e,groupId:i});return[(0,l._X)(s),(0,o.useCallback)(n=>{if(!s)return;let e=new URLSearchParams(t.location.search);e.set(s,n),t.replace({...t.location,search:e.toString()})},[s,t])]}({queryString:i,groupId:t}),[f,g]=function(n){let{groupId:e}=n,i=e?`docusaurus.tab.${e}`:null,[t,s]=(0,h.Nk)(i);return[t,(0,o.useCallback)(n=>{i&&s.set(n)},[i,s])]}({groupId:t}),y=(()=>{let n=x??f;return m({value:n,tabValues:s})?n:null})();return(0,d.Z)(()=>{y&&p(y)},[y]),{selectedValue:r,selectValue:(0,o.useCallback)(n=>{if(!m({value:n,tabValues:s}))throw Error(`Can't select invalid tab value=${n}`);p(n),j(n),g(n)},[j,g,s]),tabValues:s}}(n);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(x,{...e,...n}),(0,t.jsx)(j,{...e,...n})]})}function g(n){let e=(0,p.Z)();return(0,t.jsx)(f,{...n,children:u(n.children)},String(e))}},14522:function(n,e,i){i.d(e,{Z:()=>a});var t=i(85893);i(67294);var o=i(90496);let s="dot_giz1",r="bar_rrRL";function a(n){let{children:e,minHeight:i,url:a="http://localhost:3000",style:d,bodyStyle:l}=n;return(0,t.jsxs)("div",{className:"browserWindow_my1Q",style:{...d,minHeight:i},children:[(0,t.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,t.jsxs)("div",{className:"buttons_uHc7",children:[(0,t.jsx)("span",{className:s,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:s,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:s,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,o.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:a}),(0,t.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:r}),(0,t.jsx)("span",{className:r}),(0,t.jsx)("span",{className:r})]})})]}),(0,t.jsx)("div",{className:"browserWindowBody_Idgs",style:l,children:e})]})}},80980:function(n,e,i){i.d(e,{Z:()=>a,a:()=>r});var t=i(67294);let o={},s=t.createContext(o);function r(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);