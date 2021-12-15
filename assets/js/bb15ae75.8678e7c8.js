"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[669],{7669:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=n(6738),l=["components"],s={title:"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports deCONZ, ZHA, Zigbee2MQTT."},p=void 0,u={unversionedId:"blueprints/controllers/ikea_ictc_g_1",id:"blueprints/controllers/ikea_ictc_g_1",isDocsHomePage:!1,title:"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/ikea_ictc_g_1.mdx",sourceDirName:"blueprints/controllers",slug:"/blueprints/controllers/ikea_ictc_g_1",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_ictc_g_1",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_ictc_g_1.mdx",tags:[],version:"current",frontMatter:{title:"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports deCONZ, ZHA, Zigbee2MQTT."}},d=[{value:"Description",id:"description",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Available Hooks",id:"available-hooks",children:[{value:"Light",id:"light",children:[{value:"Default Mapping",id:"default-mapping",children:[],level:4}],level:3},{value:"Media Player",id:"media-player",children:[{value:"Default Mapping",id:"default-mapping-1",children:[],level:4}],level:3}],level:2},{value:"Additional Notes",id:"additional-notes",children:[{value:"Helper - Last Controller Event",id:"helper---last-controller-event",children:[],level:3}],level:2},{value:"Changelog",id:"changelog",children:[],level:2}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Lu,{id:"ikea_ictc_g_1",category:"controllers",mdxType:"ImportCard"}),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,r.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,r.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),(0,r.kt)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to optionally loop the rotate actions while the remote is rotating either left or right. Once the remote stops rotating, the loop stops as well. This is useful when rotating the controller should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers/ikea_ictc_g_1#available-hooks"},"Hooks available for this controller")," for additional details."))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)(a.nb,{id:"deconz",mdxType:"Requirement"}),(0,r.kt)(a.nb,{id:"zha",mdxType:"Requirement"}),(0,r.kt)(a.nb,{id:"zigbee2mqtt",mdxType:"Requirement"},(0,r.kt)("p",null,"When configuring the remote with Zigbee2MQTT make sure to disable the legacy integration for it, as reported ",(0,r.kt)("a",{parentName:"p",href:"https://www.zigbee2mqtt.io/devices/ICTC-G-1.html#legacy-integration"},"here"),". This blueprint won't work with controllers with a legacy integration due to their instability and fundamental problems.")),(0,r.kt)(a.nb,{name:"Input Text Integration",required:!0,mdxType:"Requirement"},(0,r.kt)("p",null,"This integration provides the entity which must be provided to the blueprint in the ",(0,r.kt)("strong",{parentName:"p"},"Helper - Last Controller Event")," input. Learn more about this helper by reading the dedicated section in the ",(0,r.kt)("a",{parentName:"p",href:"#helper---last-controller-event"},"Additional Notes"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)(a.II,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),(0,r.kt)(a.II,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"deCONZ, ZHA",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"Zigbee2MQTT",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. You will need to manually create a text input entity for this, please read the blueprint Additional Notes for more info.",selector:"entity",required:!0,mdxType:"Input"}),(0,r.kt)(a.II,{name:"Rotate left",description:"Action to run on rotate left.",selector:"action",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Rotate left stop",description:"Action to run when stopping to rotate left the remote.",selector:"action",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Rotate right",description:"Action to run on rotate right.",selector:"action",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Rotate right stop",description:"Action to run when stopping to rotate right the remote.",selector:"action",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Rotate left - loop until stop",description:"Loop the rotate left action until the rotation is stopped.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Rotate left - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Rotate right - loop until stop",description:"Loop the rotate right action until the rotation is stopped.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Rotate right - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,r.kt)(a.II,{name:"Helper - Debounce delay",description:"Delay used for debouncing RAW controller events, by default set to 0. A value of 0 disables the debouncing feature. Increase this value if you notice custom actions or linked Hooks running multiple times when interacting with the device. When the controller needs to be debounced, usually a value of 100 is enough to remove all duplicate events.",selector:"number",mdxType:"Input"}),(0,r.kt)("h2",{id:"available-hooks"},"Available Hooks"),(0,r.kt)("h3",{id:"light"},"Light"),(0,r.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),(0,r.kt)("h4",{id:"default-mapping"},"Default Mapping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rotate left -> Brightness down (continuous, until stop)"),(0,r.kt)("li",{parentName:"ul"},"Rotate right -> Brightness up (continuous, until stop)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),(0,r.kt)("h3",{id:"media-player"},"Media Player"),(0,r.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,r.kt)("h4",{id:"default-mapping-1"},"Default Mapping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rotate left -> Volume down (continuous, until stop)"),(0,r.kt)("li",{parentName:"ul"},"Rotate right -> Volume up (continuous, until stop)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),(0,r.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,r.kt)("h3",{id:"helper---last-controller-event"},"Helper - Last Controller Event"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input"},"Controllers-Hooks Ecosystem documentation"),"."),(0,r.kt)("p",null,"The helper is used to determine stop rotation events when the controller is integrated with ZHA, Zigbee2MQTT, because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different rotation events, so the blueprint must store the previous rotation."),(0,r.kt)("p",null,"This blueprint provides beta support for controllers integrated with deCONZ, since not all the supported events are mapped for this integration. If you are using the IKEA ICTC-G-1 with deCONZ and would like to help, you can reach out ",(0,r.kt)("a",{parentName:"p",href:"https://community.home-assistant.io/t/awesome-ha-blueprints-a-curated-list-of-blueprints-easily-create-controller-based-automations-remotes-switches-for-controlling-lights-media-players-and-more/256687"},"here"),"."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2021-03-26"),": first blueprint version \ud83c\udf89")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2021-04-19"),": Fix stop rotation events not being detected with deCONZ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2021-04-23"),": Fix deCONZ events not being recognized")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2021-05-26"),":"),(0,r.kt)("p",{parentName:"li"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Breaking Change"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," is now a mandatory input. It also simplifies the blueprint setup (reducing issues due to improper configuration missing the helper, which was required only in certain conditions as was stated in the docs), and provides support for advanced features which might be developed in the future."),(0,r.kt)("p",{parentName:"li"},"If you plan to update this blueprint, please make sure to provide a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"input_text")," entity for the ",(0,r.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," input. You should create a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"input_text")," for each Controller blueprint you're configuring, since using the same for multiple automation could lead to inconsistencies and undefined behaviour."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Other changes:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 Add Debouncing support. Debouncing avoids duplicate action runs which might occur with certain controllers and integrations. The feature is disabled by default, check the documentation to find out how to enable it"),(0,r.kt)("li",{parentName:"ul"},"Prevent undesired endless loops, which might occur in rare cases when the corresponding stop event is not received, by running loop actions a finite number of times, customizable with two new blueprint inputs"),(0,r.kt)("li",{parentName:"ul"},"Use any RAW stop event (left/right) to identify the stop event corresponding to the current remote rotation"),(0,r.kt)("li",{parentName:"ul"},"Fix inputs wrongly marked as required"),(0,r.kt)("li",{parentName:"ul"},"Fix for Zigbee2MQTT reporting null state changes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2021-07-04"),": Fix deCONZ rotation stop events not being properly recognized")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2021-08-02"),": Improve inputs documentation and organization")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2021-10-26"),": Standardize blueprints structure and inputs naming across the whole collection. Improve blueprint documentation. No functionality change."))))}h.isMDXComponent=!0}}]);