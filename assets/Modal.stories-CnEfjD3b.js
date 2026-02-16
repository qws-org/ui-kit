import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{F as i,B as X,C as Z}from"./useUiKitTheme-rLaUpywi.js";import{B as n}from"./Button-Ci1pOyPw.js";import{C as ee}from"./Checkbox-C63WfyHi.js";import{r as Q,R as S}from"./index-D4H_InIO.js";import{c as ae,d as le,$ as ne,e as te,a as re,b as ie,U as oe}from"./UIKitOverlay-F0mRSLcD.js";import{k as se}from"./useFocus-CgYBR30T.js";import{b as de}from"./FocusScope-rs3O88_f.js";import{T as V}from"./TextField-BiPpvx-Q.js";import{T as c}from"./Typography-CvIea7b8.js";import"./useButton-BW3PNPly.js";import"./useFocusable-C_0kSj5S.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./useUiKitComponents-RqvEn_pR.js";import"./useControlledState-Dxxc-Ijj.js";import"./useFormValidation-CRkeO8jQ.js";import"./useFocusWithin-DR07ZYpu.js";import"./getScrollParent-hNI_q5fK.js";import"./index-De9P05t2.js";import"./useField-D9D6f-j8.js";import"./useLabels-BjMgE2Wj.js";function ue(a,r,t){let{overlayProps:m,underlayProps:l}=ae({...a,isOpen:r.isOpen,onClose:r.close},t);return le({isDisabled:!r.isOpen}),ne(),Q.useEffect(()=>{if(r.isOpen&&t.current)return te([t.current],{shouldUseInert:!0})},[r.isOpen,t]),{modalProps:se(m),underlayProps:l}}const Y=a=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...a,children:e.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.516 5.63a1.333 1.333 0 1 0-1.885 1.886l8.485 8.486-8.485 8.485a1.333 1.333 0 1 0 1.886 1.886l8.485-8.485 8.485 8.485a1.333 1.333 0 0 0 1.886-1.886l-8.485-8.485 8.485-8.485a1.333 1.333 0 1 0-1.886-1.886l-8.485 8.485z",clipRule:"evenodd"})});try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}}}catch{}const s=({label:a,children:r,customTrigger:t,modalContentWrapperProps:m,...l})=>{const d=re(l),{triggerProps:o,overlayProps:P}=ie({type:"dialog"},d);return e.jsxs(e.Fragment,{children:[t?S.cloneElement(t,{...l,...o,onClick:o.onPress}):e.jsx(n,{...l,...o,onPress:u=>{var p,f;(p=l==null?void 0:l.onPress)==null||p.call(l,u),(f=o==null?void 0:o.onPress)==null||f.call(o,u)},children:a}),d.isOpen&&e.jsx(b,{...l,state:d,contentWrapperProps:m,children:S.cloneElement(r(()=>d.close()),P)})]})};try{s.displayName="ModalTrigger",s.__docgenInfo={description:"",displayName:"ModalTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}},customTrigger:{defaultValue:null,description:"",name:"customTrigger",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},modalContentWrapperProps:{defaultValue:null,description:"",name:"modalContentWrapperProps",required:!1,type:{name:"FlexProps"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!1,type:{name:"Element"}}}}}catch{}const me=[52,16,16,16],pe=[36,16,16,16],b=({state:a,children:r,closeButtonSlot:t,overlayBackground:m="background-transparent",overlayBlur:l=4,md:d,contentWrapperProps:o,portalContainer:P,...u})=>{var q,T;const p=Q.useRef(null),{modalProps:f,underlayProps:C}=ue(u,a,p);return e.jsx(oe,{portalContainer:P,children:e.jsx(de,{contain:!0,autoFocus:!0,children:e.jsx(i,{...C,style:{...C.style},align:"center",justify:"center",bg:m,backdropBlur:l,position:{type:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:e.jsxs(X,{...f,style:{...C.style},ref:p,position:{type:"relative"},width:"100%",height:"100dvh",p:(q=u.p)!=null?q:me,md:{p:(T=d==null?void 0:d.p)!=null?T:pe,...d},className:"overflow-auto",...u,children:[u.isDismissable&&(t?t==null?void 0:t(()=>a.close()):e.jsx(n,{onPress:()=>a.close(),autoFocus:!0,variant:"transparent",border:{width:"0"},position:{type:"absolute",top:14,right:16},md:{position:{top:36,right:40}},children:e.jsx(Y,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})})),e.jsx(i,{justify:"center",align:"center",height:"100%",...o,children:r})]})})})})};b.Trigger=s;try{b.displayName="Modal",b.__docgenInfo={description:"",displayName:"Modal",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"OverlayTriggerState"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}},overlayBackground:{defaultValue:{value:"background-transparent"},description:"",name:"overlayBackground",required:!1,type:{name:"string"}},overlayBlur:{defaultValue:{value:"4"},description:"",name:"overlayBlur",required:!1,type:{name:"string | number"}},contentWrapperProps:{defaultValue:null,description:"",name:"contentWrapperProps",required:!1,type:{name:"FlexProps"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!1,type:{name:"Element"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"table"'},{value:'"block"'},{value:'"inline"'},{value:'"inline-block"'},{value:'"flex"'},{value:'"inline-flex"'},{value:'"table-cell"'},{value:'"grid"'},{value:'"table-row"'}]}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"visible"'},{value:'"hidden"'},{value:'"scroll"'},{value:'"clip"'}]}},backdropBlur:{defaultValue:null,description:"",name:"backdropBlur",required:!1,type:{name:"string | number"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:'{ name: "none" | "spin" | "frameAppear" | "ping" | "pulse" | "bounce" | "keyframes"; duration?: number; transition?: "linear" | "ease-in" | "ease-out" | "ease-in-out" | "ease"; direction?: "forwards" | ... 2 more ... | undefined; keyframes?: Partial<...> | undefined; } | undefined'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"none"'},{value:'"default"'},{value:'"pointer"'},{value:'"wait"'},{value:'"text"'},{value:'"move"'},{value:'"help"'},{value:'"all-scroll"'},{value:'"grabbing"'},{value:'"grab"'},{value:'"col-resize"'},{value:'"row-resize"'},{value:'"n-resize"'},{value:'"e-resize"'},{value:'"s-resize"'},{value:'"w-resize"'},{value:'"ne-resize"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"nwse-resize"'},{value:'"nesw-resize"'},{value:'"ns-resize"'},{value:'"ew-resize"'},{value:'"sw-resize"'},{value:'"se-resize"'},{value:'"nw-resize"'},{value:'"no-drop"'},{value:'"copy"'},{value:'"alias"'},{value:'"vertical-text"'},{value:'"crosshair"'},{value:'"cell"'},{value:'"progress"'},{value:'"context-menu"'},{value:'"not-allowed"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"pre"'},{value:'"pre-line"'},{value:'"pre-wrap"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"additional"'},{value:'"accent"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"string | number"}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"bottom"'},{value:'"right"'},{value:'"top"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitAnimationProps & UiKitTypographyProps & { ...; })'}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"UiKitAnimationProps"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"p"'},{value:'"main"'},{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"section"'},{value:'"article"'},{value:'"nav"'},{value:'"ul"'},{value:'"ol"'},{value:'"li"'},{value:'"footer"'},{value:'"header"'},{value:'"table"'},{value:'"tr"'},{value:'"td"'},{value:'"th"'},{value:'"picture"'},{value:'"hr"'},{value:'"label"'}]}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 8 more ... & { ...; }>, "bgGroup">'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 8 more ... & { ...; }>, "bgGroup">'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}}}}}catch{}const De={title:"UI-Kit components/Modal",component:s,parameters:{docs:{description:{component:`Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`}}},argTypes:{label:{control:"text",description:"Текст, отображаемый на кнопке, которая открывает модалку."},isDismissable:{control:"boolean",description:"Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape."}}},g={render:()=>e.jsx(s,{label:"Open default Modal",isDismissable:!0,children:a=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Default Modal"}),e.jsx("p",{children:"This is a basic modal with simple text content."}),e.jsx("button",{onClick:a,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},h={render:()=>e.jsx(s,{label:"Open Form Modal",isDismissable:!0,closeButtonSlot:a=>e.jsx(n,{onPress:a,autoFocus:!0,variant:"default",bg:"background-accent1",border:{width:"2"},position:{type:"absolute",top:20,right:20},md:{position:{top:36,right:40}},children:e.jsx(Y,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})}),children:a=>e.jsxs("form",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"first-name",className:"mb-2",children:"First Name:"}),e.jsx("input",{id:"first-name",placeholder:"John",className:"p-2 border border-gray-300 rounded-md"}),e.jsx("label",{htmlFor:"last-name",className:"mt-4 mb-2",children:"Last Name:"}),e.jsx("input",{id:"last-name",placeholder:"Doe",className:"p-2 border border-gray-300 rounded-md"}),e.jsx(n,{className:"mt-4",onPress:a,children:"Submit"})]})})},x={render:()=>e.jsx(s,{label:"Non-Dismissable Modal",children:a=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Non-Dismissible Modal"}),e.jsx("p",{children:"This modal cannot be closed by clicking outside or pressing the Escape key."}),e.jsx("button",{onClick:a,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},y={render:()=>e.jsx(b,{state:{isOpen:!0,open(){},close(){},setOpen(){},toggle(){}},p:{pt:12,pb:16,pr:16,pl:16},md:{p:{pt:36}},children:e.jsx(i,{align:"center",flexDirection:"column",p:{px:8},children:e.jsxs(Z,{border:{radius:"0px"},p:{px:16},variant:"default",bg:"orange",minWidth:312,maxWidth:768,width:"100vw",height:"100vh",md:{maxHeight:644,maxWidth:360},"data-testid":"registration-form",display:"block",children:[e.jsxs("form",{onSubmit:()=>{},autoComplete:"off",children:[e.jsxs(i,{justify:"space-between",align:"center",p:{py:12},maxHeight:56,children:[e.jsx(X,{as:"p"}),e.jsx(c,{as:"p",m:{mb:0},fontSize:"title.mobile.xsmall",lineHeight:"title.mobile.xsmall",fontWeight:"mobile.bold",horizontalAlign:"center","data-testid":"registration-form-title",children:"Sign Up"}),e.jsx(i,{justify:"center",align:"center",height:32,width:32,cursor:"pointer",p:8,border:{radius:"8px",width:"1px",color:"border-subtle"},children:"X"})]}),e.jsx(V,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(V,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(V,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(i,{m:{mb:16},md:{m:{mb:24}},children:e.jsx(ee,{"aria-label":"label","data-testid":"registration-form-remember-password-checkbox",children:e.jsxs(i,{flexWrap:"wrap",whiteSpace:"nowrap",gap:2,align:"center",children:[e.jsx(c,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:'"I am 18 years old and I accept the"'}),e.jsx(n,{href:"",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Terms and Conditions"}),e.jsx(c,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"and"}),e.jsx(n,{href:"",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Privacy Policy"})]})})}),e.jsx(n,{type:"submit",size:"small",weight:"bold",md:{fontSize:"button.desktop.medium"},p:{py:12},width:"100%",maxHeight:"none",minHeight:"none",height:"fit-content","data-testid":"registration-form-submit-button",children:"SIGN UP"})]}),e.jsxs(i,{gap:8,m:{mt:16},justify:"center",children:[e.jsx(c,{fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Have an account?"}),e.jsx(c,{fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",color:"text-selection",className:"cursor-pointer",children:"Log In"})]})]})})})},v={render:()=>e.jsx(s,{label:"",customTrigger:e.jsx(n,{variant:"primary",children:"Custom trigger"}),children:a=>e.jsxs(i,{bg:"white",width:200,flexDirection:"column",p:10,gap:20,children:["Custom trigger modal",e.jsx(n,{variant:"accent",bg:"yellow",onPress:a,children:"Close"})]})})},w={render:()=>e.jsx(s,{label:"",customTrigger:e.jsx(n,{variant:"primary",children:"Open modal"}),modalContentWrapperProps:{bg:"red",minHeight:"max-content"},children:a=>e.jsxs(i,{bg:"white",width:200,flexDirection:"column",p:10,gap:20,children:["Modal content",e.jsx(n,{variant:"accent",bg:"yellow",onPress:a,children:"Close"})]})})},j={render:()=>{var a;return e.jsx(s,{label:"",customTrigger:e.jsx(n,{variant:"primary",children:'Should open modal inside "storybook-root"'}),modalContentWrapperProps:{bg:"red",minHeight:"max-content"},portalContainer:(a=document.getElementById("storybook-root"))!=null?a:void 0,children:r=>e.jsxs(i,{bg:"white",width:200,flexDirection:"column",p:10,gap:20,children:["Modal content",e.jsx(n,{variant:"accent",bg:"yellow",onPress:r,children:"Close"})]})})}};var M,N,z;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open default Modal" isDismissable>
      {close => <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button onClick={close} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Close Modal
          </button>
        </div>}
    </ModalTrigger>
}`,...(z=(N=g.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var k,F,B;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(F=h.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var D,H,W;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(H=x.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var _,I,$;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(I=y.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var O,E,U;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="" customTrigger={<Button variant="primary">Custom trigger</Button>}>
      {close => <Flex bg="white" width={200} flexDirection="column" p={10} gap={20}>
          Custom trigger modal
          <Button variant="accent" bg="yellow" onPress={close}>
            Close
          </Button>
        </Flex>}
    </ModalTrigger>
}`,...(U=(E=v.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var K,A,R;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(R=(A=w.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var G,L,J;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(L=j.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};const He=["Default","FormModal","NonDismissibleModal","ValueChain","CustomTrigger","ModalContentWrapperProps","ModalWithCustomRoot"];export{v as CustomTrigger,g as Default,h as FormModal,w as ModalContentWrapperProps,j as ModalWithCustomRoot,x as NonDismissibleModal,y as ValueChain,He as __namedExportsOrder,De as default};
