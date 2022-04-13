"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[851],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},976:function(e,t,r){r.d(t,{Lu:function(){return g},II:function(){return l},nb:function(){return m}});var n=r(7294);var a=function(e){var t=e.variant,r=e.children;return n.createElement("span",{className:"badge badge--"+t},r)},o={action:{type:"Action"},addon:{type:"Add-on"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},i={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};var l=function(e){var t=e.selector,r=e.required,l=e.name,s=e.description,p=t?o[t]:o.none;return n.createElement("div",null,n.createElement("span",{style:i.inputName},l," ",n.createElement(a,{variant:"primary"},p.type)," ",r?n.createElement(a,{variant:"warning"},r," Required"):n.createElement(a,{variant:"info"},"Optional")),n.createElement("br",null),n.createElement("p",{style:i.inputDescription,className:"margin-top--sm"},s),n.createElement("hr",null))},s={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};var p=function(e){var t=e.name,r=e.required,o=e.children;return n.createElement("div",{className:"margin-bottom--lg"},n.createElement("div",{style:s.requirementNameContainer},n.createElement("h3",{style:s.requirementName},t," "),r?n.createElement(a,{variant:"warning"},r," Required"):n.createElement(a,{variant:"info"},"Optional")),o)};var u={zigbee2mqtt:function(e){var t=e.required,r=e.refers,a=e.children;return n.createElement(p,{name:"Zigbee2MQTT Integration",required:t},n.createElement("p",null,"If you plan to integrate the ",r," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),n.createElement("p",null,a),n.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){var t=e.required,r=e.refers,a=e.children;return n.createElement(p,{name:"ZHA Integration",required:t},n.createElement("p",null,"If you plan to integrate the ",r," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),n.createElement("p",null,a),n.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){var t=e.required,r=e.refers,a=e.children;return n.createElement(p,{name:"deCONZ Integration",required:t},n.createElement("p",null,"If you plan to integrate the ",r," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),n.createElement("p",null,a),n.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){var t=e.required,r=e.children;return n.createElement(p,{name:"Controller Automation",required:t},n.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",n.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),n.createElement("p",null,r),n.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",n.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};var m=function(e){var t=e.id,r=e.required,a=e.name,o=e.refers,i=e.children,l=t?u[t]:p;return n.createElement(l,{name:a,required:r,refers:o},i)},c=r(5861),d=r(7757),h=r.n(d),f=r(470),k={myHomeAssistantImage:{width:"100%",maxWidth:212}};var g=function(e){var t=e.category,r=e.id,a=(0,n.useState)(!1),o=a[0],i=a[1],l="https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/"+t+"/"+r+"/"+r+".yaml",s=function(){var e=(0,c.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(l);case 2:i(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.createElement("div",{className:"card item shadow--md"},n.createElement("div",{className:"card__header margin-bottom--md"},n.createElement("h3",null,"Import this blueprint")),n.createElement("div",{className:"card__body"},n.createElement("div",{className:"row row--no-gutters"},n.createElement("div",{className:"col col--6"},n.createElement("h5",null,"My Home Assistant"),n.createElement("p",null,n.createElement("a",{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url="+escape(l),target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:k.myHomeAssistantImage})),n.createElement("br",null),n.createElement("small",null,"(Home Assistant 2021.3.0 or higher)"))),n.createElement("div",{className:"col col--6"},n.createElement("h5",null,"Direct Link"),n.createElement("button",{type:"button",className:"button button--"+(o?"success":"primary"),onClick:s},n.createElement("span",null,n.createElement(f.Z,{size:16}),n.createElement("span",null," ",o?"Link Copied!":"Copy Link")))))))}},7721:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(976),l=["components"],s={title:"Hook - Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."},p=void 0,u={unversionedId:"blueprints/hooks/media_player",id:"blueprints/hooks/media_player",title:"Hook - Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection.",source:"@site/docs/blueprints/hooks/media_player.mdx",sourceDirName:"blueprints/hooks",slug:"/blueprints/hooks/media_player",permalink:"/awesome-ha-blueprints/docs/blueprints/hooks/media_player",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/hooks/media_player.mdx",tags:[],version:"current",frontMatter:{title:"Hook - Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."}},m={},c=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Supported Controllers",id:"supported-controllers",level:2},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Lu,{id:"media_player",category:"hooks",mdxType:"ImportCard"}),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,o.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,o.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"An automation created with this blueprint must be linked to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers"},"Controller")," automation. Controllers are blueprints which allow to easily integrate a wide range of controllers and use them to run a set of actions when interacting with them. They expose an abstract interface used by Hooks to create controller-based automations."),(0,o.kt)("p",{parentName:"div"},"See the list of ",(0,o.kt)("a",{parentName:"p",href:"#supported-controllers"},"Controllers supported by this Hook")," for additional details."))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)(i.nb,{id:"controller",required:!0,mdxType:"Requirement"}),(0,o.kt)(i.nb,{name:"Media Player Integration",required:!0,mdxType:"Requirement"},(0,o.kt)("p",null,"This integration provides the entity which represents a media player in Home Assistant. It should be activated by default so unless you tweaked the default configuration you're good to go."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/media_player/"},"Media Player Integration Docs"))),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)(i.II,{name:"Controller Device",description:"The controller device which will control the Media Player. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as a Device. This value should match the one specified in the corresponding Controller automation.",selector:"device",required:!0,mdxType:"Input"}),(0,o.kt)(i.II,{name:"Controller Entity",description:"The controller entity which will control the Media Player. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as an Entity. This value should match the one specified in the corresponding Controller automation.",selector:"entity",required:!0,mdxType:"Input"}),(0,o.kt)(i.II,{name:"Controller model",description:"The model for the controller used in this automation. Choose a value from the list of supported controllers.",selector:"select",required:!0,mdxType:"Input"}),(0,o.kt)(i.II,{name:"Media Player",description:"Media player which will be controlled with this automation.",selector:"entity",required:!0,mdxType:"Input"}),(0,o.kt)(i.II,{name:"Volume steps - short actions",description:"Number of steps from min to max volume when controlling volume with short actions (eg. button press), if the media player supports it.",selector:"number",mdxType:"Input"}),(0,o.kt)(i.II,{name:"Volume steps - long actions",description:"Number of steps from min to max volume when controlling volume with long actions (eg. button hold or controller rotation), if the media player supports it.",selector:"number",mdxType:"Input"}),(0,o.kt)("h2",{id:"supported-controllers"},"Supported Controllers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1524_e1810"},"IKEA E1524/E1810 TR\xc5DFRI Wireless 5-Button Remote")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1743"},"IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1744"},"IKEA E1744 SYMFONISK Rotary Remote")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1766"},"IKEA E1766 TR\xc5DFRI Open/Close Remote")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1812"},"IKEA E1812 TR\xc5DFRI Shortcut button")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e2001_e2002"},"IKEA E2001/E2002 STYRBAR Remote control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_ictc_g_1"},"IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/osram_ac025xx00nj"},"OSRAM AC025XX00NJ SMART+ Switch Mini")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/philips_324131092621"},"Philips 324131092621 Hue Dimmer switch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/philips_8718699693985"},"Philips 8718699693985 Hue Smart Button")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/philips_929002398602"},"Philips 929002398602 Hue Dimmer switch v2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/xiaomi_wxcjkg11lm"},"Xiaomi WXCJKG11LM Aqara Opple 2 button remote")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/xiaomi_wxcjkg12lm"},"Xiaomi WXCJKG12LM Aqara Opple 4 button remote")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/xiaomi_wxcjkg13lm"},"Xiaomi WXCJKG13LM Aqara Opple 6 button remote"))),(0,o.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,o.kt)("p",null,"Not all media players support the customization of the number of steps for volume control, due to the fact that some of them do not expose their current volume level to Home Assistant. In these situations, the automation will fallback to the ",(0,o.kt)("inlineCode",{parentName:"p"},"media_player.volume_up")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"media_player.volume_down")," services."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-03-04"),": first blueprint version \ud83c\udf89"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-03-07"),": add support for IKEA E1744 SYMFONISK rotary remote"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-03-14"),": add support for IKEA E1812 Shortcut button, fix E1743 naming"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-03-25"),": update action mapping for IKEA E1744. If you're using this Hook with an IKEA E1744, please update also the corresponding Controller blueprint"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-03-26"),": add the ability to specify number of steps from min to max volume, both for short and long actions, when controlling the media player"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-03-27"),": Add support for Philips Hue dimmer switch"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-04-19"),": remove unused variable, fix warnings for undefined variables in Home Assistant Core >=2021.4.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-05-16"),": Add support for Osram SMART+ Switch Mini"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-07-03"),": Add support for Philips Hue Smart Button"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-08-02"),": Improve inputs documentation and organization"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-10-26"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Standardize blueprints structure and inputs naming across the whole collection."),(0,o.kt)("li",{parentName:"ul"},"Improve blueprint documentation."),(0,o.kt)("li",{parentName:"ul"},"\ud83c\udf89 Add support for alternate mappings. Additional mappings for currently supported controllers will be added from now on. Refer to the documentation of your controller for more details."),(0,o.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"li"},"Breaking Change"),": update controller names in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller Model")," input, to match the full name of controllers, prevent ambiguities and enable support for alternate mappings. After updating this blueprint, please reconfigure your automations by selecting again the value for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller Model")," input, matching the full name of the controller you're using with this hook."),(0,o.kt)("li",{parentName:"ul"},"Fix typo for IKEA E1524/E1810 center button long press action in mapping definition."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-10-29"),": Add support for IKEA E1766 TR\xc5DFRI Open/Close Remote."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-11-07"),": Add support for IKEA E2001/E2002 STYRBAR Remote control."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-11-21"),": Add support for Philips 929002398602 Hue Dimmer switch v2."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2021-12-03"),": Add support for Xiaomi WXCJKG11LM, WXCJKG12LM, WXCJKG13LM.")))}h.isMDXComponent=!0},470:function(e,t,r){var n=r(7294),a=r(5697),o=r.n(a),i=["color","size"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=(0,n.forwardRef)((function(e,t){var r=e.color,a=e.size,o=s(e,i);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:r},o),n.createElement("path",{fillRule:"evenodd",d:"M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"}),n.createElement("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),n.createElement("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}))}));p.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},p.defaultProps={color:"currentColor",size:"1em"},t.Z=p}}]);