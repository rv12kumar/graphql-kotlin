(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6663],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>p,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>u});var n=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],s={id:"data-loaders",title:"Data Loaders"},l=void 0,d={unversionedId:"server/data-loaders",id:"version-4.x.x/server/data-loaders",isDocsHomePage:!1,title:"Data Loaders",description:"Data Loaders are a popular caching pattern from the JavaScript GraphQL implementation.",source:"@site/versioned_docs/version-4.x.x/server/data-loaders.md",sourceDirName:"server",slug:"/server/data-loaders",permalink:"/graphql-kotlin/docs/4.x.x/server/data-loaders",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/data-loaders.md",version:"4.x.x",lastUpdatedBy:"Jonathan Hollingsworth",lastUpdatedAt:1635176985,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"data-loaders",title:"Data Loaders"},sidebar:"version-4.x.x/docs",previous:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/4.x.x/server/graphql-request-handler"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/4.x.x/server/server-subscriptions"}},p=[{value:"<code>KotlinDataLoader</code>",id:"kotlindataloader",children:[]},{value:"<code>getValueFromDataLoader</code>",id:"getvaluefromdataloader",children:[]}],c={toc:p};function u(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data Loaders are a popular caching pattern from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"JavaScript GraphQL implementation"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," provides ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/batching/"},"support for this pattern")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistry"),"."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," allows you to abstract the schema generation and data fetching code, you may not even need data loaders if instead you have some persistant cache on your server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User(val id: ID) {\n\n    // The friendService and userService, which have nothing to do with GraphQL,\n    // should be concerned with caching and batch calls instead of your schema classes\n    fun getFriends(): List<User> {\n        val friends: List<ID> = friendService.getFriends(id)\n        return userService.getUsers(friends)\n    }\n\n}\n")),(0,o.kt)("p",null,"If you still want to use data loaders though, they are supported through the common interfaces."),(0,o.kt)("h2",{id:"kotlindataloader"},(0,o.kt)("inlineCode",{parentName:"h2"},"KotlinDataLoader")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/graphql-request-handler"},"GraphQLRequestHandler")," accepts an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistryFactory")," that will be used on every request.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistryFactory")," generates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistry")," on every request. The registry is a map of a unique data loader names to a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," object that handles the cache for an output type in your graph.\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," caches the types by some unique value, usually by the type id, and can handle different types of batch requests."),(0,o.kt)("p",null,"To help in the registration of these various ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaders"),", we have created a basic interface ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinDataLoader"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface KotlinDataLoader<K, V> {\n    val dataLoaderName: String\n    fun getDataLoader(): DataLoader<K, V>\n}\n")),(0,o.kt)("p",null,"This allows for library users to still have full control over the creation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," and its various configuraiton options,\nbut then allows common server code to handle the registration, generation on request, and execution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader"\n    override fun getDataLoader() = DataLoader<ID, User>({ ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id -> userService.getUser(id) }\n        }\n    }, DataLoaderOptions.newOptions().setCachingEnabled(false))\n}\n\nclass FriendsDataLoader : KotlinDataLoader<ID, List<User>> {\n    override val dataLoaderName = "FriendsDataLoader"\n    override fun getDataLoader() = DataLoader<ID, List<User>> { ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id ->\n                val friends: List<ID> = friendService.getFriends(id)\n                userService.getUsers(friends)\n            }\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"getvaluefromdataloader"},(0,o.kt)("inlineCode",{parentName:"h2"},"getValueFromDataLoader")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," includes a helpful extension function on the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," so that you can easily retrieve values from the data loaders in your schema code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class User(val id: ID) {\n\n    @GraphQLDescription("Get the users friends using data loader")\n    fun getFriends(dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<List<User>> {\n        return dataFetchingEnvironment.getValueFromDataLoader("FriendsDataLoader", id)\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Because the execution of data loaders is handled by ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),", which runs using ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletionStage"),", currently we can\nnot support ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," functions when envoking data loaders. Instead, return the ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," directly from the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"\nresponse in your schema functions. See issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/986"},"#986"),"."))))}u.isMDXComponent=!0}}]);