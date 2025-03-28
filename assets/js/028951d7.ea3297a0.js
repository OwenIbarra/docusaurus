"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["23008"],{23491:function(e,s,t){t.d(s,{Z:()=>n});let n=t.p+"assets/images/social-card-e1b6e0c51be29d4ab2d4c966d220410c.png"},99203:function(e,s,t){t.d(s,{Z:()=>n});let n=t.p+"assets/images/broken-anchor-4191e5dd94aef9e8c5e3524880670f0f.jpg"},34873:function(e,s,t){t.d(s,{Z:()=>n});let n=t.p+"assets/images/social-card-e1b6e0c51be29d4ab2d4c966d220410c.png"},93e3:function(e,s,t){t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>l});var n=t(70694),r=t(85893),o=t(80980);t(14522),t(51118),t(39468);let a={title:"Docusaurus 3.1",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2024-01-05T00:00:00.000Z")},i=void 0,c={image:t(23491).Z,authorsImageUrls:[void 0]},l=[{value:"Highlights",id:"highlights",level:2},{value:"Broken anchors checker",id:"broken-anchors-checker",level:3},{value:"<code>parseFrontMatter</code> hook",id:"parsefrontmatter-hook",level:3},{value:"Other changes",id:"other-changes",level:2}];function d(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["We are happy to announce ",(0,r.jsx)(s.strong,{children:"Docusaurus 3.1"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The upgrade should be easy: as explained in our ",(0,r.jsx)(s.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,r.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Docusaurus blog post social card",src:t(34873).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,r.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(s.h3,{id:"broken-anchors-checker",children:"Broken anchors checker"}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9528",children:"#9528"}),", we improved the built-in broken links checker to also detect broken anchors."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Docusaurus blog post social card",src:t(99203).Z+"",width:"1920",height:"896"})}),"\n",(0,r.jsxs)(s.admonition,{title:"Make it fail fast",type:"tip",children:[(0,r.jsxs)(s.p,{children:["The new ",(0,r.jsx)(s.a,{href:"/docs/api/docusaurus-config#onBrokenAnchors",children:(0,r.jsx)(s.code,{children:"onBrokenAnchors"})})," option has value ",(0,r.jsx)(s.code,{children:"warn"})," by default, for retro-compatibility reasons."]}),(0,r.jsxs)(s.p,{children:["We recommend to turn it to ",(0,r.jsx)(s.code,{children:"throw"})," and fail your CI builds instead of deploying broken anchors to productions."]})]}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsxs)(s.p,{children:["For users and plugin authors implementing custom ",(0,r.jsx)(s.code,{children:"<Heading>"})," and ",(0,r.jsx)(s.code,{children:"<Link>"})," components, we provide a new ",(0,r.jsx)(s.a,{href:"/docs/docusaurus-core#useBrokenLinks",children:(0,r.jsx)(s.code,{children:"useBrokenLinks"})})," React hook API."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Most Docusaurus users don't need to care about it"}),", built-in components (",(0,r.jsx)(s.code,{children:"docusaurus/Link"})," and ",(0,r.jsx)(s.code,{children:"@theme/Heading"}),") already use it internally."]})]}),"\n",(0,r.jsxs)(s.h3,{id:"parsefrontmatter-hook",children:[(0,r.jsx)(s.code,{children:"parseFrontMatter"})," hook"]}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9624",children:"#9624"}),", we added a new ",(0,r.jsxs)(s.a,{href:"/docs/api/docusaurus-config#markdown",children:[(0,r.jsx)(s.code,{children:"siteConfig.markdown.parseFrontMatter"})," function hook"]}),"."]}),"\n",(0,r.jsx)(s.p,{children:"This makes it possible to implement convenient front matter transformations, shortcuts, or to integrate with external systems using front matter that Docusaurus plugins do not support."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  markdown: {\n    // highlight-start\n    parseFrontMatter: async (params) => {\n      // Reuse the default parser\n      const result = await params.defaultParseFrontMatter(params);\n\n      // Process front matter description placeholders\n      result.frontMatter.description =\n        result.frontMatter.description?.replaceAll('{{MY_VAR}}', 'MY_VALUE');\n\n      // Create your own front matter shortcut\n      if (result.frontMatter.i_do_not_want_docs_pagination) {\n        result.frontMatter.pagination_prev = null;\n        result.frontMatter.pagination_next = null;\n      }\n\n      // Rename an unsupported front matter coming from another system\n      if (result.frontMatter.cms_seo_summary) {\n        result.frontMatter.description = result.frontMatter.cms_seo_summary;\n        delete result.frontMatter.cms_seo_summary;\n      }\n\n      return result;\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Read the ",(0,r.jsx)(s.a,{href:"/docs/markdown-features#front-matter",children:"front matter guide"})," and the ",(0,r.jsxs)(s.a,{href:"/docs/api/docusaurus-config#markdown",children:[(0,r.jsx)(s.code,{children:"parseFrontMatter"})," API ref"]})," for details."]}),"\n",(0,r.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsx)(s.p,{children:"Other notable changes include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9674",children:"#9674"}),": add ",(0,r.jsx)(s.code,{children:"siteConfig.markdown.remarkRehypeOptions"})," to pass options to ",(0,r.jsx)(s.code,{children:"remark-rehype"}),", letting you customize things such as MDX footnote label"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9671",children:"#9671"}),": add code block MagicComments support for (Visual) Basic/Batch/Fortran/COBOL/ML"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9610",children:"#9610"}),": enable CLI port configuration via ",(0,r.jsx)(s.code,{children:"PORT"})," environment variable"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9477",children:"#9477"}),": complete Brazilian Portuguese (pt-BR) translations"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Check the ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/changelog/3.1.0",children:"3.1.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},51118:function(e,s,t){t.d(s,{Z:()=>o});var n=t(85893);t(67294);var r=t(14522);function o(e){let{url:s}=e;return(0,n.jsx)("div",{style:{padding:10},children:(0,n.jsx)(r.Z,{url:s,style:{minWidth:"min(100%,45vw)",width:800,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,n.jsx)("iframe",{src:s,title:s,style:{display:"block",width:"100%",height:300}})})})}},14522:function(e,s,t){t.d(s,{Z:()=>i});var n=t(85893);t(67294);var r=t(90496);let o="dot_giz1",a="bar_rrRL";function i(e){let{children:s,minHeight:t,url:i="http://localhost:3000",style:c,bodyStyle:l}=e;return(0,n.jsxs)("div",{className:"browserWindow_my1Q",style:{...c,minHeight:t},children:[(0,n.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,n.jsxs)("div",{className:"buttons_uHc7",children:[(0,n.jsx)("span",{className:o,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:o,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:o,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,r.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:i}),(0,n.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:a}),(0,n.jsx)("span",{className:a}),(0,n.jsx)("span",{className:a})]})})]}),(0,n.jsx)("div",{className:"browserWindowBody_Idgs",style:l,children:s})]})}},39468:function(e,s,t){t.d(s,{Z:()=>o});var n=t(85893),r=t(67294);function o(e){let{children:s="Boom!",message:t="Boom!\nSomething bad happened, but you can try again!",cause:o}=e,[a,i]=(0,r.useState)(!1);if(a)throw Error(t,{cause:o?Error(o):void 0});return(0,n.jsx)("button",{className:"button button--danger",type:"button",onClick:()=>i(!0),children:s})}},80980:function(e,s,t){t.d(s,{Z:()=>i,a:()=>a});var n=t(67294);let r={},o=n.createContext(r);function a(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}},70694:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/3.1","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/3.1/index.mdx","source":"@site/blog/releases/3.1/index.mdx","title":"Docusaurus 3.1","description":"We are happy to announce Docusaurus 3.1.","date":"2024-01-05T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":1.665,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.","socials":{"bluesky":"https://bsky.app/profile/sebastienlorber.com","x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","instagram":"https://www.instagram.com/thisweekinreact","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 3.1","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2024-01-05T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1743097488000,"lastUpdatedBy":"S\xe9bastien Lorber","prevItem":{"title":"Docusaurus 3.2","permalink":"/blog/releases/3.2"},"nextItem":{"title":"Announcing Docusaurus 3.0","permalink":"/blog/releases/3.0"}}')}}]);