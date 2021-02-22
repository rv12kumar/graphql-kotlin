(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{178:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),c=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||i;return t?o.a.createElement(d,s(s({ref:r},l),{},{components:t})):o.a.createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=m;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return a})),t.d(r,"default",(function(){return c}));var n=t(3),o=t(7),i=(t(0),t(178)),p={id:"spring-subscriptions",title:"Subscriptions"},s={unversionedId:"server/spring-server/spring-subscriptions",id:"server/spring-server/spring-subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"_To see more details on how to implement subscriptions in your schema, see the schema generator docs on executing subscriptions.",source:"@site/docs/server/spring-server/spring-subscriptions.md",slug:"/server/spring-server/spring-subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-subscriptions.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1614029087,sidebar:"docs",previous:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"},next:{title:"Client Overview",permalink:"/graphql-kotlin/docs/client/client-overview"}},a=[{value:"Flow Support",id:"flow-support",children:[]},{value:"<code>graphql-ws</code> subprotocol",id:"graphql-ws-subprotocol",children:[{value:"Subscription Hooks",id:"subscription-hooks",children:[]}]},{value:"Example",id:"example",children:[]}],l={toc:a};function c(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"To see more details on how to implement subscriptions in your schema, see the schema generator docs on ",Object(i.b)("a",{parentName:"em",href:"/graphql-kotlin/docs/schema-generator/execution/subscriptions"},"executing subscriptions"),".\nThis page lists the ",Object(i.b)("inlineCode",{parentName:"em"},"graphql-kotlin-spring-server")," specific features.")),Object(i.b)("h2",{id:"flow-support"},"Flow Support"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides automatic support for Kotlin ",Object(i.b)("inlineCode",{parentName:"p"},"Flow")," through ",Object(i.b)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy"),"\nthat supports existing ",Object(i.b)("inlineCode",{parentName:"p"},"Publisher"),"s and relies on Kotlin reactive-streams interop to convert ",Object(i.b)("inlineCode",{parentName:"p"},"Flow")," to a ",Object(i.b)("inlineCode",{parentName:"p"},"Publisher"),"."),Object(i.b)("h2",{id:"graphql-ws-subprotocol"},Object(i.b)("inlineCode",{parentName:"h2"},"graphql-ws")," subprotocol"),Object(i.b)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},Object(i.b)("inlineCode",{parentName:"a"},"graphql-ws")," subprotocol")," defined by Apollo.\nThis requires that your client send and parse messages in a specific format."),Object(i.b)("p",null,"You can see more details in the file ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ApolloSubscriptionProtocolHandler.kt"},"ApolloSubscriptionProtocolHandler"),"."),Object(i.b)("p",null,"If you would like to implement your own subscription handler, you can provide a primary spring bean for ",Object(i.b)("inlineCode",{parentName:"p"},"HandlerMapping")," that overrides the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/SubscriptionAutoConfiguration.kt"},"default one")," which sets the url for subscriptions to the Apollo subscription handler."),Object(i.b)("h3",{id:"subscription-hooks"},"Subscription Hooks"),Object(i.b)("p",null,"In line with the Apollo protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"onConnect"),Object(i.b)("li",{parentName:"ul"},"onOperation"),Object(i.b)("li",{parentName:"ul"},"onOperationComplete"),Object(i.b)("li",{parentName:"ul"},"onDisconnect")),Object(i.b)("p",null,"You can see more details in the file ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ApolloSubscriptionHooks.kt"},"ApolloSubscriptionHooks"),"."),Object(i.b)("p",null,"If you would like to implement your own subscription hooks, you can provide a primary spring bean for ",Object(i.b)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-beans"},"default one")," which do not perform any actions."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"You can see an example implementation of a ",Object(i.b)("inlineCode",{parentName:"p"},"Subscription")," in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/subscriptions/SimpleSubscription.kt"},"example app"),"."))}c.isMDXComponent=!0}}]);