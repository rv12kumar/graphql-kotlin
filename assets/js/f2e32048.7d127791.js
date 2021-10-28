(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8122],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4125:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>u,default:()=>h});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"contextual-data",title:"Contextual Data"},l=void 0,s={unversionedId:"schema-generator/execution/contextual-data",id:"version-4.x.x/schema-generator/execution/contextual-data",isDocsHomePage:!1,title:"Contextual Data",description:'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL',source:"@site/versioned_docs/version-4.x.x/schema-generator/execution/contextual-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/contextual-data",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/contextual-data",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/execution/contextual-data.md",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1635445138,formattedLastUpdatedAt:"10/28/2021",frontMatter:{id:"contextual-data",title:"Contextual Data"},sidebar:"version-4.x.x/docs",previous:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/data-fetching-environment"},next:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/optional-undefined-arguments"}},u=[{value:"GraphQLContext Interface",id:"graphqlcontext-interface",children:[]},{value:"Handling Context Errors",id:"handling-context-errors",children:[]},{value:"Injection Customization",id:"injection-customization",children:[]}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL\nserver, but shouldn\'t necessarily be part of the GraphQL schema. A prime example of something that is appropriate\nfor the GraphQL context would be trace headers for an OpenTracing system such as\n',(0,o.kt)("a",{parentName:"p",href:"https://expediadotcom.github.io/haystack"},"Haystack"),". The GraphQL query does not need the information to perform\nits function, but the server needs the information to ensure observability."),(0,o.kt)("p",null,"The contents of the GraphQL context vary across applications and it is up to the GraphQL server developers to decide\nwhat it should contain. ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," provides a simple mechanism to\nbuild a context per operation with the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/graphql-context-factory"},"GraphQLContextFactory"),".\nIf a custom factory is defined, it will then be used to populate GraphQL context based on the incoming request and make it available during execution."),(0,o.kt)("h2",{id:"graphqlcontext-interface"},"GraphQLContext Interface"),(0,o.kt)("p",null,"The easiest way to specify a context class is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," marker interface. This interface does not require any implementations,\nit is just used to inform the schema generator that this is the class that should be used as the context for every request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyGraphQLContext(val customValue: String) : GraphQLContext\n")),(0,o.kt)("p",null,"Then, you can use the class as an argument and it will be automatically injected during execution time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ContextualQuery : Query {\n    fun contextualQuery(\n        context: MyGraphQLContext,\n        value: Int\n    ): String = "The custom value was ${context.customValue} and the value was $value"\n}\n')),(0,o.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  contextualQuery(value: Int!): String!\n}\n")),(0,o.kt)("p",null,"Note that the argument that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," is not reflected in the GraphQL schema."),(0,o.kt)("h2",{id:"handling-context-errors"},"Handling Context Errors"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/graphql-context-factory"},"GraphQLContextFactory")," may return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". If your factory implementation never returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", then there is no need to change your schema.\nIf the factory could return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", then the context arugments in your schema should be nullable so a runtime exception is not thrown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ContextualQuery : Query {\n    fun contextualQuery(context: MyGraphQLContext?, value: Int): String {\n        if (context != null) {\n            return "The custom value was ${context.customValue} and the value was $value"\n        }\n\n        return "The context was null and the value was $value"\n    }\n}\n')),(0,o.kt)("h2",{id:"injection-customization"},"Injection Customization"),(0,o.kt)("p",null,"The context is injected into the execution through the ",(0,o.kt)("inlineCode",{parentName:"p"},"FunctionDataFetcher")," class.\nIf you want to customize the logic on how the context is determined, that is possible to override.\nSee more details on the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/fetching-data"},"Fetching Data documentation")))}h.isMDXComponent=!0}}]);