"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[665],{3905:function(A,t,e){e.d(t,{Zo:function(){return m},kt:function(){return d}});var a=e(7294);function n(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function r(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,a)}return e}function l(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){n(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function i(A,t){if(null==A)return{};var e,a,n=function(A,t){if(null==A)return{};var e,a,n={},r=Object.keys(A);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(n[e]=A[e]);return n}(A,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(n[e]=A[e])}return n}var o=a.createContext({}),g=function(A){var t=a.useContext(o),e=t;return A&&(e="function"==typeof A?A(t):l(l({},t),A)),e},m=function(A){var t=g(A.components);return a.createElement(o.Provider,{value:t},A.children)},s={inlineCode:"code",wrapper:function(A){var t=A.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(A,t){var e=A.components,n=A.mdxType,r=A.originalType,o=A.parentName,m=i(A,["components","mdxType","originalType","parentName"]),p=g(e),d=n,c=p["".concat(o,".").concat(d)]||p[d]||s[d]||r;return e?a.createElement(c,l(l({ref:t},m),{},{components:e})):a.createElement(c,l({ref:t},m))}));function d(A,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof A||n){var r=e.length,l=new Array(r);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=A,i.mdxType="string"==typeof A?A:n,l[1]=i;for(var g=2;g<r;g++)l[g]=e[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},1530:function(A,t,e){e.r(t),e.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return g},metadata:function(){return s},toc:function(){return d}});var a=e(7462),n=e(3366),r=e(7294),l=e(3905);var i=function(A){var t=A.children;return r.createElement("div",{style:{width:200}},t)},o=["components"],g={title:"Controllers",description:"Integrate a wide set of controllers in Home Assistant and provide an easy to use interface to run custom actions on a controller event."},m=void 0,s={unversionedId:"blueprints/controllers",id:"blueprints/controllers",title:"Controllers",description:"Integrate a wide set of controllers in Home Assistant and provide an easy to use interface to run custom actions on a controller event.",source:"@site/docs/blueprints/controllers.mdx",sourceDirName:"blueprints",slug:"/blueprints/controllers",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers.mdx",tags:[],version:"current",frontMatter:{title:"Controllers",description:"Integrate a wide set of controllers in Home Assistant and provide an easy to use interface to run custom actions on a controller event."},sidebar:"docs",previous:{title:"Overview",permalink:"/awesome-ha-blueprints/docs/blueprints"},next:{title:"Hooks",permalink:"/awesome-ha-blueprints/docs/blueprints/hooks"}},p={},d=[{value:"Supported Controllers",id:"supported-controllers",level:3}],c={toc:d};function u(A){var t=A.components,r=(0,n.Z)(A,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Controllers are part of the ",(0,l.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,l.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Controllers")," are blueprints which allow to easily integrate a wide range of controllers (wall switches, remotes, dimmers, etc.) and use them to run a set of actions when interacting with them. They consist in a practical abstraction layer for easily building controlled-based automations without worrying about the handling of RAW controller events, and the integration used to connect controllers to Home Assistant (Zigbee2MQTT, ZHA, etc.)."),(0,l.kt)("p",null,"You can integrate Controllers with ",(0,l.kt)("a",{parentName:"p",href:"hooks"},"Hooks")," and create controller-based automations to control lights, media players and much more, without having to write a single line of code."),(0,l.kt)("h3",{id:"supported-controllers"},"Supported Controllers"),(0,l.kt)("p",null,"Currently ",(0,l.kt)("strong",{parentName:"p"},"14")," devices are supported from ",(0,l.kt)("strong",{parentName:"p"},"4")," different vendors."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Can't find the controller you're looking for in this list? ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/EPMatt/awesome-ha-blueprints/issues/new?assignees=&labels=blueprint%2Cnew%2Ccontroller&template=new-controller-support.md&title=New+Controller+-+"},"Submit a new blueprint proposal for your controller here."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Manufacturer"),(0,l.kt)("th",{parentName:"tr",align:null},"Model"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Integrations"),(0,l.kt)("th",{parentName:"tr",align:null},"Picture"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1524_e1810"},"E1524/E1810")),(0,l.kt)("td",{parentName:"tr",align:null},"IKEA E1524/E1810 TR\xc5DFRI Wireless 5-Button Remote"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"ikea_e1524_e1810",src:e(8269).Z,width:"1400",height:"1400"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1743"},"E1743")),(0,l.kt)("td",{parentName:"tr",align:null},"IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"ikea_e1743",src:e(4954).Z,width:"1400",height:"1400"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1744"},"E1744")),(0,l.kt)("td",{parentName:"tr",align:null},"IKEA E1744 SYMFONISK Rotary Remote"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"ikea_e1744",src:e(7508).Z,width:"1400",height:"1400"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1766"},"E1766")),(0,l.kt)("td",{parentName:"tr",align:null},"IKEA E1766 TR\xc5DFRI Open/Close Remote"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"ikea_e1766",src:e(2297).Z,width:"450",height:"450"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1812"},"E1812")),(0,l.kt)("td",{parentName:"tr",align:null},"IKEA E1812 TR\xc5DFRI Shortcut button"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"ikea_e1812",src:e(567).Z,width:"500",height:"500"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e2001_e2002"},"E2001/E2002")),(0,l.kt)("td",{parentName:"tr",align:null},"IKEA E2001/E2002 STYRBAR Remote control"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"ikea_e2001_e2002",src:e(3910).Z,width:"1400",height:"1400"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_ictc_g_1"},"ICTC-G-1")),(0,l.kt)("td",{parentName:"tr",align:null},"IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"ikea_ictc_g_1",src:e(1449).Z,width:"1400",height:"1400"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OSRAM"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/osram_ac025xx00nj"},"AC025XX00NJ")),(0,l.kt)("td",{parentName:"tr",align:null},"OSRAM AC025XX00NJ SMART+ Switch Mini"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"osram_ac025xx00nj",src:e(9513).Z,width:"1000",height:"1000"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Philips"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/philips_324131092621"},"324131092621")),(0,l.kt)("td",{parentName:"tr",align:null},"Philips 324131092621 Hue Dimmer switch"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"philips_324131092621",src:e(5229).Z,width:"448",height:"378"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Philips"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/philips_8718699693985"},"8718699693985")),(0,l.kt)("td",{parentName:"tr",align:null},"Philips 8718699693985 Hue Smart Button"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"philips_8718699693985",src:e(1747).Z,width:"719",height:"690"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Philips"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/philips_929002398602"},"929002398602")),(0,l.kt)("td",{parentName:"tr",align:null},"Philips 929002398602 Hue Dimmer switch v2"),(0,l.kt)("td",{parentName:"tr",align:null},"ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"philips_929002398602",src:e(1030).Z,width:"480",height:"517"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Xiaomi"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/xiaomi_wxcjkg11lm"},"WXCJKG11LM")),(0,l.kt)("td",{parentName:"tr",align:null},"Xiaomi WXCJKG11LM Aqara Opple 2 button remote"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"xiaomi_wxcjkg11lm",src:e(1553).Z,width:"1000",height:"1000"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Xiaomi"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/xiaomi_wxcjkg12lm"},"WXCJKG12LM")),(0,l.kt)("td",{parentName:"tr",align:null},"Xiaomi WXCJKG12LM Aqara Opple 4 button remote"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"xiaomi_wxcjkg12lm",src:e(6836).Z,width:"1000",height:"1000"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Xiaomi"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/xiaomi_wxcjkg13lm"},"WXCJKG13LM")),(0,l.kt)("td",{parentName:"tr",align:null},"Xiaomi WXCJKG13LM Aqara Opple 6 button remote"),(0,l.kt)("td",{parentName:"tr",align:null},"deCONZ,ZHA,Zigbee2MQTT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i,{mdxType:"Image"},(0,l.kt)("img",{alt:"xiaomi_wxcjkg13lm",src:e(6609).Z,width:"1000",height:"1000"})))))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Can't find the controller you're looking for in this list? ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/EPMatt/awesome-ha-blueprints/issues/new?assignees=&labels=blueprint%2Cnew%2Ccontroller&template=new-controller-support.md&title=New+Controller+-+"},"Submit a new blueprint proposal for your controller here."))))}u.isMDXComponent=!0},8269:function(A,t,e){t.Z=e.p+"assets/images/ikea_e1524_e1810-f345123bc9aa4cfcf501bd0b3b4a6902.png"},4954:function(A,t,e){t.Z=e.p+"assets/images/ikea_e1743-03730979af710785343d78bc8a1b750b.png"},7508:function(A,t,e){t.Z=e.p+"assets/images/ikea_e1744-b0eb77f8f52926ea7610a9fdf67e8f99.png"},2297:function(A,t,e){t.Z=e.p+"assets/images/ikea_e1766-3340c5fa6a32c77246c197780c123d93.png"},567:function(A,t,e){t.Z=e.p+"assets/images/ikea_e1812-379114be3eb09b62bf88df2f2159bfe7.png"},3910:function(A,t,e){t.Z=e.p+"assets/images/ikea_e2001_e2002-e7920c24b96fb3610e7abecd77ff4aaf.png"},1449:function(A,t,e){t.Z=e.p+"assets/images/ikea_ictc_g_1-9fafba6bd44539771e07f009bbfd787c.png"},9513:function(A,t,e){t.Z=e.p+"assets/images/osram_ac025xx00nj-d9ebda293573c3d9978e85f1942a1f76.png"},5229:function(A,t,e){t.Z=e.p+"assets/images/philips_324131092621-2af26c331a8278c3ce44dcc221a25265.png"},1747:function(A,t,e){t.Z=e.p+"assets/images/philips_8718699693985-eb0077f11a2c40bab13791948b734249.png"},1030:function(A,t){t.Z="data:image/png;base64,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x+PxmTB1zslaK+ecmqZRmqaSTqa99/f3dXx8rGfPnp0bwO3fk05Op2o3eq0AajwIYGDVGvB5zfAmAZymqfb397urWPWfu6qq7gYK85uk2se2QZplmba3t1VVVRfobSif9/1WVaU4jpWmaTdVDoAABgG88owxMy34zZs3ZwKzrmuFYagXL15oPB6feY72kpZN0+jFixeaTEH+808AAAWTSURBVCba399XXdcLn6+vvf4z4QsQwMBSOzo60ubmZnc60fvOly3LUk+fPj03AIMg0ObmppIkUZ7n2tvbm/n6cDhUlmUaDAbd55ubm93n7Tm/7c0dnHNK01QvX75Unud6/fp115TbKeb+xTja5tv+3fnvn01ZAAEMGvBSmF+jfV9rvOzj20tIZlkm7/1MWLa/vPdd+Latt9+C54MzSRJ9+ctfnrlQSP+jMUbWWoVheOb5HvvEAj9uIICBFQjgfmPsN8j21J1F11Wef+x8+C26+1EQBDObodrHOOe6HdRZli285vSi5rpoY9V5V8di+hkggEEAL983fsEdhM4LrotC7bznOe/GCW2I9i+W0W/J5z1f++ftbumLAhsAAQw82oZ8lTBf9Hf6129utfcK7l+juQ3fy7bWfvgSvMD9sAwBaMDLE779NnuX/w3CFiCAgZUPYCzncRFDAAIYAIA1xBowaMCPrbrNTRvfdPMU09AADRgggAHQgAECGJf6R3uc5wdT+0EDBgCABgzQgB9flbvnNdzzrm3NlbIAGjAIYACgAQNY8aMm1oABGjBowABAAAMEMAAQwCCAAYAABoCHxRowCGCABgyAAAYIYAAggAEAIIABGjAAEMAggIEbYBMWCGAAAAhggAYMAAQwCGAAIIABAhirgzVgEMAAABDAAA0YAAhgrB0nSc45RgIAAQzcW/31/qCua1nLyxJ37pghAAEMvPPGe2ahcXeMMTLGyAb29xkNPLSQIcASNeDXjALuIYS9MebHjARowMA7ryVVDAPu8CBPYRj+njFmwmiAAAZOvXjxopT0f9iEhTtuwL/FKIAABs767aZpGAXcJQIYBDCwKIDrulZd14wECGAQwMC9vSCt/a73vqAF4478jjHm9xgGEMDAnGfPnu1J+m7TNCKEcduMMf+KUQABDJz/JvkvpZMdq6efMyi4DeMgCP41wwACGDjvRWntf7bW/oCRwC2/rv5JHMdvGQkQwMA5nj596iV9h6ti4RYdhEH4DxgGEMDA+0P4v3jv/5P3XgQxbqH9/v0wCl8xElgmLK5heSvLwcFTSb8bBMFXgyBgQHC9NzljvheF0Z8Jo5BdfaABA5exs7OzV9f1t+q6LmnBuKbPrbV/jfAFAQxc0bNnz77XNM03y7KsCWFcsvG2vx0ZY/5ikiSfMSoggIHrhfB/aJrm18qyrDg3GJd0YIz55SzL/gdDgaU9WGQI8Fi8efPmT0RR9JvW2hesCeOC5vsjY8xfSdP0fzEqoAEDt9OE/2vTNH/MOfdbNGHMO90x/+8l/QLhCwIYuGVPnz79cdM0f9o593eapuGiCmj9jqS/MBgMfjXLsgOGA48BU9B4tA4ODnastX8vDMO/LWmbEbnnN49zLhF6F5vl+s/Z++86Sd+T9I8l/eZgMGCXHghg4D69efNm6L3/G5L+uqRf3NzcXBgQl72m9Kpee7q9qEn/100Cd/7z+ee77vP3P/a/19M/3zPG/MAY811jzL9jhzMIYGBJvH79+mNjzF+V9Oettb9ojBlYa2WMuXSwWvuoV2a8pHOnYJ1z/XBsJI0u+byVMea4Pz4XNOBC0uSSz5tLmva/t1NHkg6ttYfGmANjzI+NMb+bpunv8yoHAQwsuVevXkWS/rCkj40x86k6PX3zv0wDnkgqLvmfPZZUXfKxo9MQvIyD58+fM8UKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALfr/wONbA7gZFEPhwAAAABJRU5ErkJggg=="},1553:function(A,t,e){t.Z=e.p+"assets/images/xiaomi_wxcjkg11lm-5d2a2f0beaf70989fa033fd7d81bca09.png"},6836:function(A,t,e){t.Z=e.p+"assets/images/xiaomi_wxcjkg12lm-66f2458b73ab33194180fb4eaf3ddbf5.png"},6609:function(A,t,e){t.Z=e.p+"assets/images/xiaomi_wxcjkg13lm-cb1056c9bcee52e448708cd84fbcee1d.png"}}]);