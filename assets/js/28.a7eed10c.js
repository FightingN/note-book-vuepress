(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{383:function(t,s,a){"use strict";a.r(s);var r=a(42),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue-项目的代码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-项目的代码规范"}},[t._v("#")]),t._v(" vue 项目的代码规范")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vue3js.cn/docs/zh/style-guide/#%E8%A7%84%E5%88%99%E7%B1%BB%E5%88%AB",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 风格指南"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"文件组件命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件组件命名"}},[t._v("#")]),t._v(" 文件组件命名")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"https://vue3js.cn/docs/zh/guide/single-file-component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("单文件组件"),a("OutboundLink")],1),t._v("的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" MyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n或者\ncomponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n\n")])])]),a("h3",{attrs:{id:"组件引入书写规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件引入书写规范"}},[t._v("#")]),t._v(" 组件引入书写规范")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 在所有地方 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n或者\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 在单文件组件和字符串模板中 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"props-命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props-命名"}},[t._v("#")]),t._v(" props 命名")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 "),a("a",{attrs:{href:"https://vue3js.cn/docs/zh/guide/render-function.html#jsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSX"),a("OutboundLink")],1),t._v(" 中应该始终使用 kebab-case。")])]),t._v(" "),a("li",[a("p",[t._v("我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  greetingText"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n组件使用时"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WelcomeMessage greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);