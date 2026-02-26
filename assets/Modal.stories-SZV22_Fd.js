import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as te}from"./useUiKitTheme-BNEFiel2.js";import{B as n}from"./Button-C6TBcjs3.js";import{C as ne}from"./Card-7KEwy5M1.js";import{C as re}from"./Checkbox-Df5Bc7P7.js";import{F as l}from"./Flex-B3yF0wJj.js";import{r as le,R as z}from"./index-D4H_InIO.js";import{c as ie,d as ae,$ as oe,e as se,a as de,b as me,U as ue}from"./UIKitOverlay-CTPW_A9x.js";import{k as pe}from"./useFocus-CgYBR30T.js";import{b as ce}from"./FocusScope-rs3O88_f.js";import{T as D}from"./TextField-C9RHM7eP.js";import{T as o}from"./Typography-CVeNWNbW.js";import"./context-Cc1G11um.js";import"./index-DW2zCSF8.js";import"./useButton-BW3PNPly.js";import"./useFocusable-C_0kSj5S.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./useUiKitComponents-DylESbeD.js";import"./useControlledState-Dxxc-Ijj.js";import"./useFormValidation-CRkeO8jQ.js";import"./useFocusWithin-DR07ZYpu.js";import"./getScrollParent-hNI_q5fK.js";import"./index-De9P05t2.js";import"./useField-D9D6f-j8.js";import"./useLabels-BjMgE2Wj.js";function be(t,r,i){let{overlayProps:d,underlayProps:a}=ie({...t,isOpen:r.isOpen,onClose:r.close},i);return ae({isDisabled:!r.isOpen}),oe(),le.useEffect(()=>{if(r.isOpen&&i.current)return se([i.current],{shouldUseInert:!0})},[r.isOpen,i]),{modalProps:pe(d),underlayProps:a}}const F=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...t,children:e.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.516 5.63a1.333 1.333 0 1 0-1.885 1.886l8.485 8.486-8.485 8.485a1.333 1.333 0 1 0 1.886 1.886l8.485-8.485 8.485 8.485a1.333 1.333 0 0 0 1.886-1.886l-8.485-8.485 8.485-8.485a1.333 1.333 0 1 0-1.886-1.886l-8.485 8.485z",clipRule:"evenodd"})});try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}}}catch{}const s=({label:t,children:r,customTrigger:i,modalContentWrapperProps:d,...a})=>{const u=de(a),{triggerProps:m,overlayProps:k}=me({type:"dialog"},u);return e.jsxs(e.Fragment,{children:[i?z.cloneElement(i,{...a,...m,onClick:m.onPress}):e.jsx(n,{...a,...m,onPress:p=>{var c,h;(c=a==null?void 0:a.onPress)==null||c.call(a,p),(h=m==null?void 0:m.onPress)==null||h.call(m,p)},children:t}),u.isOpen&&e.jsx(b,{...a,state:u,contentWrapperProps:d,children:z.cloneElement(r(()=>u.close()),k)})]})};try{s.displayName="ModalTrigger",s.__docgenInfo={description:"",displayName:"ModalTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}},customTrigger:{defaultValue:null,description:"",name:"customTrigger",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},modalContentWrapperProps:{defaultValue:null,description:"",name:"modalContentWrapperProps",required:!1,type:{name:"FlexProps"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!1,type:{name:"Element"}}}}}catch{}const he=[52,16,16,16],ge=[36,16,16,16],b=({state:t,children:r,closeButtonSlot:i,overlayBackground:d="background-transparent",overlayBlur:a=4,md:u,contentWrapperProps:m,portalContainer:k,...p})=>{var P,C;const c=le.useRef(null),{modalProps:h,underlayProps:S}=be(p,t,c);return e.jsx(ue,{portalContainer:k,children:e.jsx(ce,{contain:!0,autoFocus:!0,children:e.jsx(l,{...S,style:{...S.style},align:"center",justify:"center",bg:d,backdropBlur:a,position:{type:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:e.jsxs(te,{...h,style:{...S.style},ref:c,position:{type:"relative"},width:"100%",height:"100dvh",p:(P=p.p)!=null?P:he,md:{p:(C=u==null?void 0:u.p)!=null?C:ge,...u},className:"overflow-auto",...p,children:[p.isDismissable&&(i?i==null?void 0:i(()=>t.close()):e.jsx(n,{onPress:()=>t.close(),autoFocus:!0,variant:"transparent",border:{width:"0"},position:{type:"absolute",top:14,right:16},md:{position:{top:36,right:40}},children:e.jsx(F,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})})),e.jsx(l,{justify:"center",align:"center",height:"100%",...m,children:r})]})})})})};b.Trigger=s;try{b.displayName="Modal",b.__docgenInfo={description:"",displayName:"Modal",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"OverlayTriggerState"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}},overlayBackground:{defaultValue:{value:"background-transparent"},description:"",name:"overlayBackground",required:!1,type:{name:"string"}},overlayBlur:{defaultValue:{value:"4"},description:"",name:"overlayBlur",required:!1,type:{name:"string | number"}},contentWrapperProps:{defaultValue:null,description:"",name:"contentWrapperProps",required:!1,type:{name:"FlexProps"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!1,type:{name:"Element"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"hidden"'},{value:'"inline"'},{value:'"inline-block"'},{value:'"flex"'},{value:'"inline-flex"'},{value:'"table"'},{value:'"table-cell"'},{value:'"grid"'},{value:'"table-row"'},{value:'"list-item"'}]}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"hidden"'},{value:'"visible"'},{value:'"scroll"'},{value:'"clip"'}]}},backdropBlur:{defaultValue:null,description:"",name:"backdropBlur",required:!1,type:{name:"string | number"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:'{ name: "none" | "spin" | "frameAppear" | "ping" | "pulse" | "bounce" | "keyframes"; duration?: number; transition?: "linear" | "ease-in" | "ease-out" | "ease-in-out" | "ease"; direction?: "forwards" | ... 2 more ... | undefined; keyframes?: Partial<...> | undefined; } | undefined'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"none"'},{value:'"default"'},{value:'"pointer"'},{value:'"wait"'},{value:'"text"'},{value:'"move"'},{value:'"help"'},{value:'"all-scroll"'},{value:'"grabbing"'},{value:'"grab"'},{value:'"col-resize"'},{value:'"row-resize"'},{value:'"n-resize"'},{value:'"e-resize"'},{value:'"s-resize"'},{value:'"w-resize"'},{value:'"ne-resize"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"nwse-resize"'},{value:'"nesw-resize"'},{value:'"ns-resize"'},{value:'"ew-resize"'},{value:'"sw-resize"'},{value:'"se-resize"'},{value:'"nw-resize"'},{value:'"no-drop"'},{value:'"copy"'},{value:'"alias"'},{value:'"vertical-text"'},{value:'"crosshair"'},{value:'"cell"'},{value:'"progress"'},{value:'"context-menu"'},{value:'"not-allowed"'}]}},listStyle:{defaultValue:null,description:"",name:"listStyle",required:!1,type:{name:'{ position?: "inside" | "outside"; type?: "none" | "disc" | "decimal"; } | undefined'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"middle"'},{value:'"bottom"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"pre"'},{value:'"pre-line"'},{value:'"pre-wrap"'},{value:'"break-spaces"'}]}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"all"'},{value:'"word"'},{value:'"keep"'},{value:'"normal"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"additional"'},{value:'"accent"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"string | number"}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitAnimationProps & UiKitTypographyProps & { ...; })'}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"UiKitAnimationProps"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"p"'},{value:'"table"'},{value:'"main"'},{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"section"'},{value:'"article"'},{value:'"nav"'},{value:'"ul"'},{value:'"ol"'},{value:'"li"'},{value:'"footer"'},{value:'"header"'},{value:'"tr"'},{value:'"td"'},{value:'"th"'},{value:'"picture"'},{value:'"hr"'},{value:'"label"'}]}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 9 more ... & { ...; }>, "bgGroup">'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 9 more ... & { ...; }>, "bgGroup">'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}}}}}catch{}const Ue={title:"UI-Kit components/Modal",component:s,parameters:{docs:{description:{component:`Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`}}},argTypes:{label:{control:"text",description:"Текст, отображаемый на кнопке, которая открывает модалку."},isDismissable:{control:"boolean",description:"Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape."}}},g={render:()=>e.jsx(s,{label:"Open default Modal",isDismissable:!0,children:t=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Default Modal"}),e.jsx("p",{children:"This is a basic modal with simple text content."}),e.jsx("button",{onClick:t,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},f={render:()=>e.jsx(s,{label:"Open Form Modal",isDismissable:!0,closeButtonSlot:t=>e.jsx(n,{onPress:t,autoFocus:!0,variant:"default",bg:"background-accent1",border:{width:"2"},position:{type:"absolute",top:20,right:20},md:{position:{top:36,right:40}},children:e.jsx(F,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})}),children:t=>e.jsxs("form",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"first-name",className:"mb-2",children:"First Name:"}),e.jsx("input",{id:"first-name",placeholder:"John",className:"p-2 border border-gray-300 rounded-md"}),e.jsx("label",{htmlFor:"last-name",className:"mt-4 mb-2",children:"Last Name:"}),e.jsx("input",{id:"last-name",placeholder:"Doe",className:"p-2 border border-gray-300 rounded-md"}),e.jsx(n,{className:"mt-4",onPress:t,children:"Submit"})]})})},x={render:()=>e.jsx(s,{label:"Non-Dismissable Modal",children:t=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Non-Dismissible Modal"}),e.jsx("p",{children:"This modal cannot be closed by clicking outside or pressing the Escape key."}),e.jsx("button",{onClick:t,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},y={render:()=>e.jsx(b,{state:{isOpen:!0,open(){},close(){},setOpen(){},toggle(){}},p:{pt:12,pb:16,pr:16,pl:16},md:{p:{pt:36}},children:e.jsx(l,{align:"center",flexDirection:"column",p:{px:8},children:e.jsxs(ne,{border:{radius:"0px"},p:{px:16},variant:"default",bg:"orange",minWidth:312,maxWidth:768,width:"100vw",height:"100vh",md:{maxHeight:644,maxWidth:360},"data-testid":"registration-form",display:"block",children:[e.jsxs("form",{onSubmit:()=>{},autoComplete:"off",children:[e.jsxs(l,{justify:"space-between",align:"center",p:{py:12},maxHeight:56,children:[e.jsx(te,{as:"p"}),e.jsx(o,{as:"p",m:{mb:0},fontSize:"title.mobile.xsmall",lineHeight:"title.mobile.xsmall",fontWeight:"mobile.bold",horizontalAlign:"center","data-testid":"registration-form-title",children:"Sign Up"}),e.jsx(l,{justify:"center",align:"center",height:32,width:32,cursor:"pointer",p:8,border:{radius:"8px",width:"1px",color:"border-subtle"},children:"X"})]}),e.jsx(D,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(D,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(D,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(l,{m:{mb:16},md:{m:{mb:24}},children:e.jsx(re,{"aria-label":"label","data-testid":"registration-form-remember-password-checkbox",children:e.jsxs(l,{flexWrap:"wrap",whiteSpace:"nowrap",gap:2,align:"center",children:[e.jsx(o,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:'"I am 18 years old and I accept the"'}),e.jsx(n,{href:"",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Terms and Conditions"}),e.jsx(o,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"and"}),e.jsx(n,{href:"",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Privacy Policy"})]})})}),e.jsx(n,{type:"submit",size:"small",weight:"bold",md:{fontSize:"button.desktop.medium"},p:{py:12},width:"100%",maxHeight:"none",minHeight:"none",height:"fit-content","data-testid":"registration-form-submit-button",children:"SIGN UP"})]}),e.jsxs(l,{gap:8,m:{mt:16},justify:"center",children:[e.jsx(o,{fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Have an account?"}),e.jsx(o,{fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",color:"text-selection",className:"cursor-pointer",children:"Log In"})]})]})})})},T={render:()=>e.jsx(s,{label:"",customTrigger:e.jsx(n,{variant:"primary",children:"Custom trigger"}),children:t=>e.jsxs(l,{bg:"white",width:200,flexDirection:"column",p:10,gap:20,children:["Custom trigger modal",e.jsx(n,{variant:"accent",bg:"yellow",onPress:t,children:"Close"})]})})},v={render:()=>e.jsx(s,{label:"",customTrigger:e.jsx(n,{variant:"primary",children:"Open modal"}),modalContentWrapperProps:{bg:"red",minHeight:"max-content"},children:t=>e.jsxs(l,{bg:"white",width:200,flexDirection:"column",p:10,gap:20,children:["Modal content",e.jsx(n,{variant:"accent",bg:"yellow",onPress:t,children:"Close"})]})})},w={render:()=>{var t;return e.jsx(s,{label:"",customTrigger:e.jsx(n,{variant:"primary",children:'Should open modal inside "storybook-root"'}),modalContentWrapperProps:{bg:"red",minHeight:"max-content"},portalContainer:(t=document.getElementById("storybook-root"))!=null?t:void 0,children:r=>e.jsxs(l,{bg:"white",width:200,flexDirection:"column",p:10,gap:20,children:["Modal content",e.jsx(n,{variant:"accent",bg:"yellow",onPress:r,children:"Close"})]})})}},j={render:()=>{var t;return e.jsx(s,{label:"Click",portalContainer:(t=document.getElementById("storybook-root"))!=null?t:void 0,height:"100%",children:r=>e.jsxs(l,{height:"98vh",flexDirection:"column",border:{radius:"0"},width:"100%",md:{width:"660px",height:"760px",maxHeight:"96vh",border:{radius:"16px"}},"data-testid":"promo-modal",bg:"white",children:[e.jsxs(l,{align:"center",position:{type:"relative"},gap:15,p:{pl:16},md:{p:{pl:32},border:{radius:"16px"}},border:{radius:"0 0 16px 16px"},style:{flexShrink:0},overflow:"hidden",children:[e.jsxs(l,{flexDirection:"column",gap:8,width:"100%",children:[e.jsx(o,{fontWeight:"mobile.bold",fontFamily:"accent","data-testid":"modal-title",children:"Title"}),e.jsx(l,{flexDirection:"column",children:"Subtitle"})]}),e.jsx(l,{style:{flexShrink:0},m:{ml:"auto"},md:{width:238,height:210},width:161,height:142,children:e.jsx("img",{src:"https://placehold.co/600x400",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsx(l,{backdropBlur:12,position:{type:"absolute",top:6,right:6},md:{position:{top:16,right:16}},border:{radius:"8px"},children:e.jsx(n,{p:10,variant:"secondary",md:{p:14},onPress:r,"data-testid":"modal-close-button",children:e.jsx(F,{width:20,height:20})})})]}),e.jsxs(l,{flexDirection:"column",gap:16,p:16,md:{gap:24,p:32},position:{type:"relative"},overflow:"auto",style:{WebkitOverflowScrolling:"touch",flex:"1 1 auto"},children:[e.jsxs(l,{flexDirection:"column",gap:16,children:[e.jsx(o,{fontWeight:"mobile.bold",fontFamily:"accent","data-testid":"modal-description-title",style:{wordBreak:"break-word"},whiteSpace:"pre-wrap",children:"Description Title lorem Description Title lorem Description Title lorem Description Title loremDescription Title lorem Description Title lorem Description Title lorem Description Title lorem Description Title lorem Description Title lorem Description Title lorem Description Title lorem Description Title lorem"}),e.jsx(o,{fontFamily:"accent",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",md:{fontSize:"body.desktop.medium",lineHeight:"body.desktop.medium"},"data-testid":"modal-description",style:{wordBreak:"break-word"},whiteSpace:"pre-wrap",children:"Title lorem Description Title lorem Description Title lorem Description Title lorem Description Title lorem Description Title lorem"})]}),e.jsxs(l,{flexDirection:"column",gap:16,children:[e.jsx(o,{fontWeight:"mobile.bold",fontFamily:"accent",fontSize:"title.mobile.xsmall",lineHeight:"title.mobile.xsmall","data-testid":"modal-terms-title",children:"Terms"}),["Term 1","Term 2","Term 3","Term 4","Term 5","Term 6","Term 7","Term 8","Term 9","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10","Term 10"].map((i,d)=>e.jsxs(l,{align:"start",gap:12,children:[e.jsx(l,{align:"center",justify:"center",bg:"surface-neutral-default",border:{radius:"50%"},width:24,height:24,style:{flexShrink:0},"data-testid":`modal-term-${d}`,children:e.jsx(o,{fontWeight:"mobile.bold",fontFamily:"accent",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:d+1})}),e.jsx(o,{fontFamily:"accent",md:{fontSize:"body.desktop.medium",lineHeight:"body.desktop.medium"},fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall","data-testid":`modal-term-${d}`,style:{wordBreak:"break-word"},whiteSpace:"pre-wrap",children:i})]},d))]})]}),e.jsx(l,{p:16,bg:"background-popups2",width:"100%",border:{radius:"16px 16px 0 0"},md:{border:{radius:"16px"}},style:{flexShrink:0},children:e.jsx(n,{bg:"surface-accent-button-default",border:{radius:"8px"},width:"100%",p:{px:20,py:14},onPress:r,"data-testid":"modal-action-button",children:e.jsx(o,{color:"text-primary-inverted",fontWeight:"mobile.bold",fontFamily:"accent",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",md:{fontSize:"body.desktop.medium",lineHeight:"body.desktop.medium"},children:"Register"})})})]})})}};var V,q,B;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open default Modal" isDismissable>
      {close => <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button onClick={close} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Close Modal
          </button>
        </div>}
    </ModalTrigger>
}`,...(B=(q=g.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var M,H,N;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open Form Modal" isDismissable closeButtonSlot={close => <Button onPress={close} autoFocus variant="default" bg={"background-accent1"} border={{
    width: "2"
  }} position={{
    type: "absolute",
    top: 20,
    right: 20
  }} md={{
    position: {
      top: 36,
      right: 40
    }
  }}>
          <Close viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8" />
        </Button>}>
      {close => <form className="flex flex-col">
          <label htmlFor="first-name" className="mb-2">
            First Name:
          </label>
          <input id="first-name" placeholder="John" className="p-2 border border-gray-300 rounded-md" />
          <label htmlFor="last-name" className="mt-4 mb-2">
            Last Name:
          </label>
          <input id="last-name" placeholder="Doe" className="p-2 border border-gray-300 rounded-md" />
          <Button className="mt-4" onPress={close}>
            Submit
          </Button>
        </form>}
    </ModalTrigger>
}`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var W,$,_;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Non-Dismissable Modal">
      {close => <div className="p-4">
          <h2>Non-Dismissible Modal</h2>
          <p>
            This modal cannot be closed by clicking outside or pressing the
            Escape key.
          </p>
          <button onClick={close} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Close Modal
          </button>
        </div>}
    </ModalTrigger>
}`,...(_=($=x.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var I,O,E;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Modal state={{
    isOpen: true,
    open() {},
    close() {},
    setOpen() {},
    toggle() {}
  }} p={{
    pt: 12,
    pb: 16,
    pr: 16,
    pl: 16
  }} md={{
    p: {
      pt: 36
    }
  }}>
      <Flex align="center" flexDirection="column" p={{
      px: 8
    }}>
        <Card border={{
        radius: "0px"
      }} p={{
        px: 16
      }} variant="default" bg={"orange"} minWidth={312} maxWidth={768} width="100vw" height="100vh" md={{
        maxHeight: 644,
        maxWidth: 360
      }} data-testid="registration-form" display={"block"}>
          <form onSubmit={() => {}} autoComplete="off">
            <Flex justify="space-between" align="center" p={{
            py: 12
          }} maxHeight={56}>
              <Box as="p"></Box>
              <Typography as="p" m={{
              mb: 0
            }} fontSize="title.mobile.xsmall" lineHeight="title.mobile.xsmall" fontWeight="mobile.bold" horizontalAlign="center" data-testid="registration-form-title">
                {"Sign Up"}
              </Typography>

              <Flex justify="center" align="center" height={32} width={32} cursor={"pointer"} p={8} border={{
              radius: "8px",
              width: "1px",
              color: "border-subtle"
            }}>
                X
              </Flex>
            </Flex>

            <TextField bg={"surface-neutral-dark-default"} label={"Email"} data-testid="registration-form-email-input" m={{
            mb: 8
          }} />

            <TextField bg={"surface-neutral-dark-default"} label={"Email"} data-testid="registration-form-email-input" m={{
            mb: 8
          }} />
            <TextField bg={"surface-neutral-dark-default"} label={"Email"} data-testid="registration-form-email-input" m={{
            mb: 8
          }} />

            <Flex m={{
            mb: 16
          }} md={{
            m: {
              mb: 24
            }
          }}>
              <Checkbox aria-label="label" data-testid="registration-form-remember-password-checkbox">
                <Flex flexWrap="wrap" whiteSpace="nowrap" gap={2} align="center">
                  <Typography color="text-primary-muted" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                    "I am 18 years old and I accept the"
                  </Typography>

                  <Button href={""} p={{
                  px: 0,
                  py: 0
                }} color="text-selection" size="small" variant="tertiary" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                    Terms and Conditions
                  </Button>
                  <Typography color="text-primary-muted" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                    and
                  </Typography>
                  <Button href={""} p={{
                  px: 0,
                  py: 0
                }} color="text-selection" size="small" variant="tertiary" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                    Privacy Policy
                  </Button>
                </Flex>
              </Checkbox>
            </Flex>

            <Button type="submit" size="small" weight="bold" md={{
            fontSize: "button.desktop.medium"
          }} p={{
            py: 12
          }} width="100%" maxHeight="none" minHeight="none" height="fit-content" data-testid="registration-form-submit-button">
              SIGN UP
            </Button>
          </form>
          <Flex gap={8} m={{
          mt: 16
        }} justify={"center"}>
            <Typography fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
              {"Have an account?"}
            </Typography>

            <Typography fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall" color={"text-selection"} className="cursor-pointer">
              {"Log In"}
            </Typography>
          </Flex>
        </Card>
      </Flex>
    </Modal>
}`,...(E=(O=y.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var U,K,R;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="" customTrigger={<Button variant="primary">Custom trigger</Button>}>
      {close => <Flex bg="white" width={200} flexDirection="column" p={10} gap={20}>
          Custom trigger modal
          <Button variant="accent" bg="yellow" onPress={close}>
            Close
          </Button>
        </Flex>}
    </ModalTrigger>
}`,...(R=(K=T.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var A,G,L;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="" customTrigger={<Button variant="primary">Open modal</Button>} modalContentWrapperProps={{
    bg: "red",
    minHeight: "max-content"
  }}>
      {close => <Flex bg="white" width={200} flexDirection="column" p={10} gap={20}>
          Modal content
          <Button variant="accent" bg="yellow" onPress={close}>
            Close
          </Button>
        </Flex>}
    </ModalTrigger>
}`,...(L=(G=v.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var J,X,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="" customTrigger={<Button variant="primary">
          Should open modal inside "storybook-root"
        </Button>} modalContentWrapperProps={{
    bg: "red",
    minHeight: "max-content"
  }} portalContainer={document.getElementById("storybook-root") ?? undefined}>
      {close => <Flex bg="white" width={200} flexDirection="column" p={10} gap={20}>
          Modal content
          <Button variant="accent" bg="yellow" onPress={close}>
            Close
          </Button>
        </Flex>}
    </ModalTrigger>
}`,...(Q=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,Z,ee;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Click" portalContainer={document.getElementById("storybook-root") ?? undefined} height="100%">
      {close => <Flex height="98vh" flexDirection="column" border={{
      radius: "0"
    }} width="100%" md={{
      width: "660px",
      height: "760px",
      maxHeight: "96vh",
      border: {
        radius: "16px"
      }
    }} data-testid="promo-modal" bg="white">
          <Flex align="center" position={{
        type: "relative"
      }} gap={15} p={{
        pl: 16
      }} md={{
        p: {
          pl: 32
        },
        border: {
          radius: "16px"
        }
      }} border={{
        radius: "0 0 16px 16px"
      }} style={{
        flexShrink: 0
      }} overflow="hidden">
            <Flex flexDirection="column" gap={8} width="100%">
              <Typography fontWeight="mobile.bold" fontFamily="accent" data-testid="modal-title">
                Title
              </Typography>
              <Flex flexDirection="column">Subtitle</Flex>
            </Flex>
            <Flex style={{
          flexShrink: 0
        }} m={{
          ml: "auto"
        }} md={{
          width: 238,
          height: 210
        }} width={161} height={142}>
              <img src="https://placehold.co/600x400" style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} />
            </Flex>
            <Flex backdropBlur={12} position={{
          type: "absolute",
          top: 6,
          right: 6
        }} md={{
          position: {
            top: 16,
            right: 16
          }
        }} border={{
          radius: "8px"
        }}>
              <Button p={10} variant="secondary" md={{
            p: 14
          }} onPress={close} data-testid="modal-close-button">
                <Close width={20} height={20} />
              </Button>
            </Flex>
          </Flex>
          <Flex flexDirection="column" gap={16} p={16} md={{
        gap: 24,
        p: 32
      }} position={{
        type: "relative"
      }} overflow="auto" style={{
        WebkitOverflowScrolling: "touch",
        flex: "1 1 auto"
      }}>
            <Flex flexDirection="column" gap={16}>
              <Typography fontWeight="mobile.bold" fontFamily="accent" data-testid="modal-description-title" style={{
            wordBreak: "break-word"
          }} whiteSpace="pre-wrap">
                Description Title lorem Description Title lorem Description
                Title lorem Description Title loremDescription Title lorem
                Description Title lorem Description Title lorem Description
                Title lorem Description Title lorem Description Title lorem
                Description Title lorem Description Title lorem Description
                Title lorem
              </Typography>
              <Typography fontFamily="accent" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall" md={{
            fontSize: "body.desktop.medium",
            lineHeight: "body.desktop.medium"
          }} data-testid="modal-description" style={{
            wordBreak: "break-word"
          }} whiteSpace="pre-wrap">
                Title lorem Description Title lorem Description Title lorem
                Description Title lorem Description Title lorem Description
                Title lorem
              </Typography>
            </Flex>
            <Flex flexDirection="column" gap={16}>
              <Typography fontWeight="mobile.bold" fontFamily="accent" fontSize="title.mobile.xsmall" lineHeight="title.mobile.xsmall" data-testid="modal-terms-title">
                Terms
              </Typography>
              {["Term 1", "Term 2", "Term 3", "Term 4", "Term 5", "Term 6", "Term 7", "Term 8", "Term 9", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10", "Term 10"].map((el, i) => <Flex key={i} align="start" gap={12}>
                  <Flex align="center" justify="center" bg="surface-neutral-default" border={{
              radius: "50%"
            }} width={24} height={24} style={{
              flexShrink: 0
            }} data-testid={\`modal-term-\${i}\`}>
                    <Typography fontWeight="mobile.bold" fontFamily="accent" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                      {i + 1}
                    </Typography>
                  </Flex>
                  <Typography fontFamily="accent" md={{
              fontSize: "body.desktop.medium",
              lineHeight: "body.desktop.medium"
            }} fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall" data-testid={\`modal-term-\${i}\`} style={{
              wordBreak: "break-word"
            }} whiteSpace="pre-wrap">
                    {el}
                  </Typography>
                </Flex>)}
            </Flex>
          </Flex>
          <Flex p={16} bg="background-popups2" width="100%" border={{
        radius: "16px 16px 0 0"
      }} md={{
        border: {
          radius: "16px"
        }
      }} style={{
        flexShrink: 0
      }}>
            <Button bg="surface-accent-button-default" border={{
          radius: "8px"
        }} width="100%" p={{
          px: 20,
          py: 14
        }} onPress={close} data-testid="modal-action-button">
              <Typography color="text-primary-inverted" fontWeight="mobile.bold" fontFamily="accent" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall" md={{
            fontSize: "body.desktop.medium",
            lineHeight: "body.desktop.medium"
          }}>
                Register
              </Typography>
            </Button>
          </Flex>
        </Flex>}
    </ModalTrigger>
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ke=["Default","FormModal","NonDismissibleModal","ValueChain","CustomTrigger","ModalContentWrapperProps","ModalWithCustomRoot","ModalFix"];export{T as CustomTrigger,g as Default,f as FormModal,v as ModalContentWrapperProps,j as ModalFix,w as ModalWithCustomRoot,x as NonDismissibleModal,y as ValueChain,Ke as __namedExportsOrder,Ue as default};
