(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1069:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),b=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=b(t),s=r,f=p["".concat(c,".").concat(s)]||p[s]||u[s]||o;return t?a.a.createElement(f,l(l({ref:n},d),{},{components:t})):a.a.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var d=2;d<o;d++)c[d]=t[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},183:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),o=(t(0),t(1069)),c={id:"classic-api-reference-relay-root-container",title:"Relay.RootContainer",original_id:"classic-api-reference-relay-root-container"},l={unversionedId:"classic-api-reference-relay-root-container",id:"version-classic/classic-api-reference-relay-root-container",isDocsHomePage:!1,title:"Relay.RootContainer",description:"Relay.RootContainer is a React component that attempts to fulfill the data required in order to render an instance of Component for a given route.",source:"@site/versioned_docs/version-classic/Classic-APIReference-RootContainer.md",slug:"/classic-api-reference-relay-root-container",permalink:"/docs/classic/classic-api-reference-relay-root-container",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-APIReference-RootContainer.md",version:"classic",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1614914173,sidebar:"version-classic/docs",previous:{title:"Relay.Renderer",permalink:"/docs/classic/classic-api-reference-relay-renderer"},next:{title:"Relay.QL",permalink:"/docs/classic/classic-api-reference-relay-ql"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Props",id:"props",children:[{value:"Component",id:"component",children:[]},{value:"route",id:"route",children:[]},{value:"forceFetch",id:"forcefetch",children:[]},{value:"renderLoading",id:"renderloading",children:[]},{value:"renderFetched",id:"renderfetched",children:[]},{value:"renderFailure",id:"renderfailure",children:[]},{value:"onReadyStateChange",id:"onreadystatechange",children:[]}]}],d={toc:i};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," is a React component that attempts to fulfill the data required in order to render an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," for a given ",Object(o.b)("inlineCode",{parentName:"p"},"route"),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Props")),Object(o.b)("ul",{className:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#component"},Object(o.b)("pre",null,"Component"),"Relay container that defines fragments and the view to render.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#route"},Object(o.b)("pre",null,"route"),"Route that defines the query roots.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#forcefetch"},Object(o.b)("pre",null,"forceFetch"),"Whether to send a server request regardless of data available on the client.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#renderloading"},Object(o.b)("pre",null,"renderLoading"),"Called to render when data requirements are being fulfilled.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#renderfetched"},Object(o.b)("pre",null,"renderFetched"),"Called to render when data requirements are fulfilled.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#renderfailure"},Object(o.b)("pre",null,"renderFailure"),"Called to render when data failed to be fulfilled.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#onreadystatechange"},Object(o.b)("pre",null,"onReadyStateChange")))),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"component"},"Component"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nComponent: RelayContainer\n\n")),Object(o.b)("p",null,"Must be a valid ",Object(o.b)("inlineCode",{parentName:"p"},"RelayContainer"),". Relay will attempt to fulfill its data requirements before rendering it."),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-root-container#component-and-route"}),"Root Container ",">"," Component and Route")),Object(o.b)("h3",{id:"route"},"route"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nroute: RelayRoute\n\n")),Object(o.b)("p",null,"Either an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Route")," or an object with the ",Object(o.b)("inlineCode",{parentName:"p"},"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"queries"),", and optionally the ",Object(o.b)("inlineCode",{parentName:"p"},"params")," properties."),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-root-container#component-and-route"}),"Root Container ",">"," Component and Route")),Object(o.b)("h3",{id:"forcefetch"},"forceFetch"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nforceFetch: boolean\n\n")),Object(o.b)("p",null,"If supplied and set to true, a request for data will always be made to the server regardless of whether data on the client is available to immediately fulfill the data requirements."),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-root-container#force-fetching"}),"Root Container ",">"," Force Fetching")),Object(o.b)("h3",{id:"renderloading"},"renderLoading"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nrenderLoading(): ?ReactElement\n\n")),Object(o.b)("p",null,"When data requirements have yet to be fulfilled, ",Object(o.b)("inlineCode",{parentName:"p"},"renderLoading")," is called to render the view. If this returns ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),", the previously rendered view (or nothing if there is no previous view) is rendered."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}4-6{"}"}'}),"\n<Relay.RootContainer\n  Component={ProfilePicture}\n  route={profileRoute}\n  renderLoading={function() {\n    return <div>Loading...</div>;\n  }}\n/>\n\n")),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-root-container#renderloading"}),"Root Container ",">"," renderLoading")),Object(o.b)("h3",{id:"renderfetched"},"renderFetched"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nrenderFetched(\n  data: {[propName: string]: $RelayData},\n  readyState: {stale: boolean}\n): ?ReactElement\n\n")),Object(o.b)("p",null,"When all data requirements are fulfilled, ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," is called to render the view. This callback is expected to spread ",Object(o.b)("inlineCode",{parentName:"p"},"data")," into the supplied ",Object(o.b)("inlineCode",{parentName:"p"},"Container")," when rendering it."),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}4-10{"}"}'}),"\n<Relay.RootContainer\n  Component={ProfilePicture}\n  route={profileRoute}\n  renderFetched={function(data) {\n    return (\n      <ScrollView>\n        <ProfilePicture {...data} />\n      </ScrollView>\n    );\n  }}\n/>\n\n")),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-root-container#renderfetched"}),"Root Container ",">"," renderFetched")),Object(o.b)("h3",{id:"renderfailure"},"renderFailure"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nrenderFailure(error: Error, retry: Function): ?ReactElement\n\n")),Object(o.b)("p",null,"When data requirements failed to be fulfilled, ",Object(o.b)("inlineCode",{parentName:"p"},"renderFailure")," is called to render the view."),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}4-11{"}"}'}),"\n<Relay.RootContainer\n  Component={ProfilePicture}\n  route={profileRoute}\n  renderFailure={function(error, retry) {\n    return (\n      <div>\n        <p>{error.message}</p>\n        <p><button onClick={retry}>Retry?</button></p>\n      </div>\n    );\n  }}\n/>\n\n")),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-root-container#renderfailure"}),"Root Container ",">"," renderFailure")),Object(o.b)("h3",{id:"onreadystatechange"},"onReadyStateChange"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nonReadyStateChange(\n  readyState: {\n    aborted: boolean;\n    done: boolean;\n    error: ?Error;\n    events: Array<ReadyStateEvent>;\n    ready: boolean;\n    stale: boolean;\n  }\n): void\n\n")),Object(o.b)("p",null,"This callback prop is called as the various events of data resolution occurs."),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-ready-state"}),"Ready State")))}b.isMDXComponent=!0}}]);