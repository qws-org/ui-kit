import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as A}from"./useUiKitTheme-BEqTWvt-.js";import{B as t}from"./Button-C46qZg3v.js";import{C as L}from"./Card-CmxCssAb.js";import{C as J}from"./Checkbox-DnovwsH9.js";import{F as i}from"./Flex-BPqJxTbe.js";import{r as R,R as C}from"./index-D4H_InIO.js";import{c as X,d as Q,$ as Y,e as Z,a as ee,b as ae,U as le}from"./UIKitOverlay-CdTqnF_w.js";import{k as ne}from"./useFocus-CgYBR30T.js";import{b as te}from"./FocusScope-rs3O88_f.js";import{T as P}from"./TextField-Cac-vVtZ.js";import{T as f}from"./Typography-DHz4PIyX.js";import"./context-Cc1G11um.js";import"./index-DW2zCSF8.js";import"./useButton-BW3PNPly.js";import"./useFocusable-C_0kSj5S.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./useUiKitComponents-DylESbeD.js";import"./useControlledState-Dxxc-Ijj.js";import"./useFormValidation-CRkeO8jQ.js";import"./useFocusWithin-DR07ZYpu.js";import"./getScrollParent-hNI_q5fK.js";import"./useField-D9D6f-j8.js";import"./useLabels-BjMgE2Wj.js";function re(a,o,n){let{overlayProps:p,underlayProps:l}=X({...a,isOpen:o.isOpen,onClose:o.close},n);return Q({isDisabled:!o.isOpen}),Y(),R.useEffect(()=>{if(o.isOpen&&n.current)return Z([n.current],{shouldUseInert:!0})},[o.isOpen,n]),{modalProps:ne(p),underlayProps:l}}const G=a=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...a,children:e.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.516 5.63a1.333 1.333 0 1 0-1.885 1.886l8.485 8.486-8.485 8.485a1.333 1.333 0 1 0 1.886 1.886l8.485-8.485 8.485 8.485a1.333 1.333 0 0 0 1.886-1.886l-8.485-8.485 8.485-8.485a1.333 1.333 0 1 0-1.886-1.886l-8.485 8.485z",clipRule:"evenodd"})});try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}}}catch{}const u=({label:a,children:o,customTrigger:n,modalContentWrapperProps:p,...l})=>{const s=ee(l),{triggerProps:r,overlayProps:d}=ae({type:"dialog"},s);return e.jsxs(e.Fragment,{children:[n?C.cloneElement(n,{...l,...r,onClick:r.onPress}):e.jsx(t,{...l,...r,onPress:c=>{var g,m;(g=l==null?void 0:l.onPress)==null||g.call(l,c),(m=r==null?void 0:r.onPress)==null||m.call(r,c)},children:a}),s.isOpen&&e.jsx(b,{...l,state:s,contentWrapperProps:p,children:C.cloneElement(o(()=>s.close()),d)})]})};try{u.displayName="ModalTrigger",u.__docgenInfo={description:"",displayName:"ModalTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}},customTrigger:{defaultValue:null,description:"",name:"customTrigger",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},modalContentWrapperProps:{defaultValue:null,description:"",name:"modalContentWrapperProps",required:!1,type:{name:"FlexProps"}}}}}catch{}const ie=[52,16,16,16],oe=[36,16,16,16],b=({state:a,children:o,closeButtonSlot:n,overlayBackground:p="background-transparent",overlayBlur:l=4,md:s,contentWrapperProps:r,...d})=>{var V,q;const c=R.useRef(null),{modalProps:g,underlayProps:m}=re(d,a,c);return e.jsx(le,{children:e.jsx(te,{contain:!0,autoFocus:!0,children:e.jsx(i,{...m,style:{...m.style},align:"center",justify:"center",bg:p,backdropBlur:l,position:{type:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:e.jsxs(A,{...g,style:{...m.style},ref:c,position:{type:"relative"},width:"100%",height:"100vh",p:(V=d.p)!=null?V:ie,md:{p:(q=s==null?void 0:s.p)!=null?q:oe,...s},className:"overflow-auto",...d,children:[d.isDismissable&&(n?n==null?void 0:n(()=>a.close()):e.jsx(t,{onPress:()=>a.close(),autoFocus:!0,variant:"transparent",border:{width:"0"},position:{type:"absolute",top:14,right:16},md:{position:{top:36,right:40}},children:e.jsx(G,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})})),e.jsx(i,{justify:"center",align:"center",height:"100%",...r,children:o})]})})})})};b.Trigger=u;try{b.displayName="Modal",b.__docgenInfo={description:"",displayName:"Modal",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"OverlayTriggerState"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}},overlayBackground:{defaultValue:{value:"background-transparent"},description:"",name:"overlayBackground",required:!1,type:{name:"string"}},overlayBlur:{defaultValue:{value:"4"},description:"",name:"overlayBlur",required:!1,type:{name:"string | number"}},contentWrapperProps:{defaultValue:null,description:"",name:"contentWrapperProps",required:!1,type:{name:"FlexProps"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"table"'},{value:'"grid"'},{value:'"inline"'},{value:'"block"'},{value:'"inline-block"'},{value:'"flex"'},{value:'"inline-flex"'},{value:'"table-cell"'},{value:'"table-row"'}]}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"visible"'},{value:'"hidden"'},{value:'"scroll"'},{value:'"clip"'}]}},backdropBlur:{defaultValue:null,description:"",name:"backdropBlur",required:!1,type:{name:"string | number"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:'{ name: "none" | "spin" | "frameAppear" | "ping" | "pulse" | "bounce" | "keyframes"; duration?: number; transition?: "linear" | "ease-in" | "ease-out" | "ease-in-out" | "ease"; direction?: "forwards" | ... 2 more ... | undefined; keyframes?: Partial<...> | undefined; } | undefined'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"none"'},{value:'"default"'},{value:'"pointer"'},{value:'"wait"'},{value:'"text"'},{value:'"move"'},{value:'"help"'},{value:'"all-scroll"'},{value:'"grabbing"'},{value:'"grab"'},{value:'"col-resize"'},{value:'"row-resize"'},{value:'"n-resize"'},{value:'"e-resize"'},{value:'"s-resize"'},{value:'"w-resize"'},{value:'"ne-resize"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"nwse-resize"'},{value:'"nesw-resize"'},{value:'"ns-resize"'},{value:'"ew-resize"'},{value:'"sw-resize"'},{value:'"se-resize"'},{value:'"nw-resize"'},{value:'"no-drop"'},{value:'"copy"'},{value:'"alias"'},{value:'"vertical-text"'},{value:'"crosshair"'},{value:'"cell"'},{value:'"progress"'},{value:'"context-menu"'},{value:'"not-allowed"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"pre"'},{value:'"pre-line"'},{value:'"pre-wrap"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"additional"'},{value:'"accent"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"string | number"}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitAnimationProps & UiKitTypographyProps & { ...; })'}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"UiKitAnimationProps"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"p"'},{value:'"main"'},{value:'"article"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"hr"'},{value:'"label"'},{value:'"li"'},{value:'"nav"'},{value:'"ol"'},{value:'"picture"'},{value:'"section"'},{value:'"span"'},{value:'"table"'},{value:'"td"'},{value:'"th"'},{value:'"tr"'},{value:'"ul"'}]}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 8 more ... & { ...; }>, "bgGroup">'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 8 more ... & { ...; }>, "bgGroup">'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}}}}}catch{}const ke={title:"UI-Kit components/Modal",component:u,parameters:{docs:{description:{component:`Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`}}},argTypes:{label:{control:"text",description:"Текст, отображаемый на кнопке, которая открывает модалку."},isDismissable:{control:"boolean",description:"Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape."}}},h={render:()=>e.jsx(u,{label:"Open default Modal",isDismissable:!0,children:a=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Default Modal"}),e.jsx("p",{children:"This is a basic modal with simple text content."}),e.jsx("button",{onClick:a,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},x={render:()=>e.jsx(u,{label:"Open Form Modal",isDismissable:!0,closeButtonSlot:a=>e.jsx(t,{onPress:a,autoFocus:!0,variant:"default",bg:"background-accent1",border:{width:"2"},position:{type:"absolute",top:20,right:20},md:{position:{top:36,right:40}},children:e.jsx(G,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})}),children:a=>e.jsxs("form",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"first-name",className:"mb-2",children:"First Name:"}),e.jsx("input",{id:"first-name",placeholder:"John",className:"p-2 border border-gray-300 rounded-md"}),e.jsx("label",{htmlFor:"last-name",className:"mt-4 mb-2",children:"Last Name:"}),e.jsx("input",{id:"last-name",placeholder:"Doe",className:"p-2 border border-gray-300 rounded-md"}),e.jsx(t,{className:"mt-4",onPress:a,children:"Submit"})]})})},y={render:()=>e.jsx(u,{label:"Non-Dismissable Modal",children:a=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Non-Dismissible Modal"}),e.jsx("p",{children:"This modal cannot be closed by clicking outside or pressing the Escape key."}),e.jsx("button",{onClick:a,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},v={render:()=>e.jsx(b,{state:{isOpen:!0,open(){},close(){},setOpen(){},toggle(){}},p:{pt:12,pb:16,pr:16,pl:16},md:{p:{pt:36}},children:e.jsx(i,{align:"center",flexDirection:"column",p:{px:8},children:e.jsxs(L,{border:{radius:"0px"},p:{px:16},variant:"default",bg:"orange",minWidth:312,maxWidth:768,width:"100vw",height:"100vh",md:{maxHeight:644,maxWidth:360},"data-testid":"registration-form",display:"block",children:[e.jsxs("form",{onSubmit:()=>{},autoComplete:"off",children:[e.jsxs(i,{justify:"space-between",align:"center",p:{py:12},maxHeight:56,children:[e.jsx(A,{as:"p"}),e.jsx(f,{as:"p",m:{mb:0},fontSize:"title.mobile.xsmall",lineHeight:"title.mobile.xsmall",fontWeight:"mobile.bold",horizontalAlign:"center","data-testid":"registration-form-title",children:"Sign Up"}),e.jsx(i,{justify:"center",align:"center",height:32,width:32,cursor:"pointer",p:8,border:{radius:"8px",width:"1px",color:"border-subtle"},children:"X"})]}),e.jsx(P,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(P,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(P,{bg:"surface-neutral-dark-default",label:"Email","data-testid":"registration-form-email-input",m:{mb:8}}),e.jsx(i,{m:{mb:16},md:{m:{mb:24}},children:e.jsx(J,{"aria-label":"label","data-testid":"registration-form-remember-password-checkbox",children:e.jsxs(i,{flexWrap:"wrap",whiteSpace:"nowrap",gap:2,align:"center",children:[e.jsx(f,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:'"I am 18 years old and I accept the"'}),e.jsx(t,{href:"",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Terms and Conditions"}),e.jsx(f,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"and"}),e.jsx(t,{href:"",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Privacy Policy"})]})})}),e.jsx(t,{type:"submit",size:"small",weight:"bold",md:{fontSize:"button.desktop.medium"},p:{py:12},width:"100%",maxHeight:"none",minHeight:"none",height:"fit-content","data-testid":"registration-form-submit-button",children:"SIGN UP"})]}),e.jsxs(i,{gap:8,m:{mt:16},justify:"center",children:[e.jsx(f,{fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Have an account?"}),e.jsx(f,{fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",color:"text-selection",className:"cursor-pointer",children:"Log In"})]})]})})})},w={render:()=>e.jsx(u,{label:"",customTrigger:e.jsx(t,{variant:"primary",children:"Custom trigger"}),children:a=>e.jsxs(i,{bg:"white",width:200,flexDirection:"column",p:10,gap:20,children:["Custom trigger modal",e.jsx(t,{variant:"accent",bg:"yellow",onPress:a,children:"Close"})]})})},j={render:()=>e.jsx(u,{label:"",customTrigger:e.jsx(t,{variant:"primary",children:"Open modal"}),modalContentWrapperProps:{bg:"red",minHeight:"max-content"},children:a=>e.jsxs(i,{bg:"white",width:200,flexDirection:"column",p:10,gap:20,children:["Modal content",e.jsx(t,{variant:"accent",bg:"yellow",onPress:a,children:"Close"})]})})};var N,S,T;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open default Modal" isDismissable>
      {close => <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button onClick={close} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Close Modal
          </button>
        </div>}
    </ModalTrigger>
}`,...(T=(S=h.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var z,M,F;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(M=x.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var k,D,B;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(D=y.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var H,_,W;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(_=v.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var $,O,I;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="" customTrigger={<Button variant="primary">Custom trigger</Button>}>
      {close => <Flex bg="white" width={200} flexDirection="column" p={10} gap={20}>
          Custom trigger modal
          <Button variant="accent" bg="yellow" onPress={close}>
            Close
          </Button>
        </Flex>}
    </ModalTrigger>
}`,...(I=(O=w.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var U,E,K;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(E=j.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};const De=["Default","FormModal","NonDismissibleModal","ValueChain","CustomTrigger","ModalContentWrapperProps"];export{w as CustomTrigger,h as Default,x as FormModal,j as ModalContentWrapperProps,y as NonDismissibleModal,v as ValueChain,De as __namedExportsOrder,ke as default};
