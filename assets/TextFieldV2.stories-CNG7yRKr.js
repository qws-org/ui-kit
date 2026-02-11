import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as p,R as Ke}from"./index-D4H_InIO.js";import{$ as Oe,I as g}from"./index-De9P05t2.js";import{u as Le,e as Ge,d as Je,b as Xe,c as Qe,i as Ye,B as i}from"./useUiKitTheme-DM2M9t7C.js";import{B as Ze}from"./Button-DNrrNjFw.js";import{F as z}from"./Flex-Dqt0tYUj.js";import{T as m}from"./Typography-C00fsG9p.js";import{S as pe}from"./Eye-CyNTCh-E.js";const ea=({variant:a,isFocused:n,value:s})=>{const l=n||!!s;return{primary:{as:"label",position:{type:"absolute",left:"32px",top:l?"6px":"16px"},opacity:l?50:void 0,color:"text-secondary-default",fontSize:l?"body.mobile.xsmall":"body.mobile.large",md:{fontSize:l?"body.desktop.xsmall":"body.desktop.large",lineHeight:l?"body.desktop.xsmall":"body.desktop.large"},lineHeight:l?"body.mobile.small":"body.mobile.large"},secondary:{as:"label",position:{type:"absolute",left:"12px",top:l?"7px":"15px"},opacity:l?50:void 0,color:n?"text-selection":"text-secondary-default",fontSize:l?"body.mobile.xsmall":"body.mobile.medium",md:{fontSize:l?"body.desktop.xsmall":"body.desktop.medium",lineHeight:l?"body.desktop.xsmall":"body.desktop.medium"},lineHeight:l?"body.mobile.small":"body.mobile.medium"}}[a]},aa=({variant:a})=>({primary:{as:"p",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",fontWeight:"mobile.normal",md:{fontWeight:"desktop.normal"},color:"text-destructive",m:{mt:2,ml:32}},secondary:{as:"p",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",fontWeight:"mobile.normal",md:{fontWeight:"desktop.normal"},m:{mt:4},color:"text-destructive"}})[a],B={padding:{primary:[26,32,8,32],secondary:[22,12,6,12]}},ra=({variant:a,isError:n,isFocused:s})=>({primary:{m:{outlineColor:n?"text-destructive":"surface-neutral-dark-default",outlineWidth:"1px"}},secondary:{m:{outlineColor:n?"text-destructive":s?"border-selected":"surface-neutral-dark-default",outlineWidth:"1px"}}})[a],ta=({variant:a,isError:n,isFocused:s})=>({primary:{m:{color:n?"text-destructive":"surface-neutral-dark-default",width:"1px",radius:"form"}},secondary:{m:{color:n?"text-destructive":s?"border-selected":"surface-neutral-dark-default",width:"1px",radius:"form"}}})[a],na=({variant:a})=>({primary:{m:{bg:"surface-neutral-dark-default",bgSize:"cover",bgRepeat:"no-repeat",bgPosition:"center"}},secondary:{m:{bg:"surface-neutral-dark-default",bgSize:"cover",bgRepeat:"no-repeat",bgPosition:"center"}}})[a],la=({variant:a})=>({primary:{m:{width:"100%",height:"100%",maxHeight:"56px"}},secondary:{m:{width:"100%",height:"100%",maxHeight:"48px"}}})[a],t=p.forwardRef((a,n)=>{var E,W,N,_,$,R,U,A,H,K,O,L,G,J,X,Q,Y,Z,ee,ae,re,te,ne,le,se,ie,oe,ue,de,me;const{label:s,icon:l,errorMessage:u,name:c,type:$e,className:M,customInput:D,onChange:oa,spellCheck:ua,variant:d="primary",...r}=a,[F,q]=p.useState(!1),Re=p.useRef(null),Ue=typeof s=="string"?s:"input-label",{inputProps:o}=Oe({...a,label:Ue,inputElementType:"input"},n!=null?n:Re),S=Le({m:{p:r.p,m:r.m},md:r.md,d:r.d,defaultPadding:(E=B==null?void 0:B.padding)==null?void 0:E[d]}),T=Ge({m:{...ta({variant:d,isError:!!u,isFocused:F}).m,...r.border},md:(W=r==null?void 0:r.md)==null?void 0:W.border,d:(N=r==null?void 0:r.d)==null?void 0:N.border,hover:{m:(_=r==null?void 0:r.hover)==null?void 0:_.border,md:(R=($=r==null?void 0:r.md)==null?void 0:$.hover)==null?void 0:R.border,d:(A=(U=r==null?void 0:r.d)==null?void 0:U.hover)==null?void 0:A.border}}),C=Je({m:{...na({variant:d}).m,...a},md:(H=a==null?void 0:a.md)!=null?H:{},d:(K=a.d)!=null?K:{},hover:{m:(O=a.hover)!=null?O:{},md:(G=(L=a.md)==null?void 0:L.hover)!=null?G:{},d:(X=(J=a.d)==null?void 0:J.hover)!=null?X:{}}}),P=Xe({m:{...la({variant:d}).m,...r},md:r.md,d:r.d}),w=Qe({m:{fontSize:(Q=r.fontSize)!=null?Q:"body.mobile.medium",lineHeight:(Y=r==null?void 0:r.lineHeight)!=null?Y:"body.mobile.medium",...r},md:(Z=r==null?void 0:r.md)!=null?Z:{},d:(ee=r==null?void 0:r.d)!=null?ee:{},hover:{m:(ae=r==null?void 0:r.hover)!=null?ae:{},md:(te=(re=r==null?void 0:r.md)==null?void 0:re.hover)!=null?te:{},d:(le=(ne=r==null?void 0:r.d)==null?void 0:ne.hover)!=null?le:{}}}),I=Ye({m:{...ra({variant:d,isError:!!u,isFocused:F}).m,...r},md:r==null?void 0:r.md,d:r==null?void 0:r.d,hover:{m:(se=r==null?void 0:r.hover)!=null?se:{},md:(oe=(ie=r==null?void 0:r.md)==null?void 0:ie.hover)!=null?oe:{},d:(de=(ue=r==null?void 0:r.d)==null?void 0:ue.hover)!=null?de:{}}}),Ae=s&&typeof s!="string"?s({isFocused:F,value:o.value}):e.jsx(e.Fragment,{}),He=l?l==null?void 0:l({isDisabled:(me=o==null?void 0:o.disabled)!=null?me:!1}):e.jsx(e.Fragment,{});return e.jsxs(i,{position:{type:"relative"},children:[typeof s=="string"?e.jsx(m,{...ea({variant:d,isFocused:F,value:o.value}),children:s}):Ae,D?Ke.cloneElement(D,{...r,...o,ref:n,onClick:o.onClick,className:`${T.className} ${C.className} ${S.className} ${P.className} ${w.classNames} ${I.className} ${M}`,style:{...T.style,...C.style,...S.styles,...P.styles,...w.styles,...I.style},onFocus:()=>q(!0),onBlur:()=>q(!1)}):e.jsx("input",{...o,...r,ref:n,value:o.value,name:c,type:$e,className:` ${T.className} ${C.className} ${S.className} ${P.className} ${w.classNames} ${I.className} ${M}`,onFocus:()=>q(!0),onBlur:()=>q(!1),style:{...T.style,...C.style,...S.styles,...P.styles,...w.styles,...I.style}}),l&&e.jsx(e.Fragment,{children:He}),typeof u=="string"?e.jsx(m,{...aa({variant:d}),children:u}):u]})});try{t.displayName="TextFieldV2",t.__docgenInfo={description:"",displayName:"TextFieldV2",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | ((args: { isFocused: boolean; value?: string | number | readonly string[]; }) => ReactNode)"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"((args: { isDisabled?: boolean; }) => ReactNode)"}},errorMessage:{defaultValue:null,description:"An error message for the field.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"block"'},{value:'"inline"'},{value:'"inline-block"'},{value:'"flex"'},{value:'"inline-flex"'},{value:'"table"'},{value:'"table-cell"'},{value:'"grid"'},{value:'"table-row"'}]}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"visible"'},{value:'"hidden"'},{value:'"scroll"'},{value:'"clip"'}]}},backdropBlur:{defaultValue:null,description:"",name:"backdropBlur",required:!1,type:{name:"string | number"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:'{ name: "ping" | "none" | "spin" | "frameAppear" | "pulse" | "bounce" | "keyframes"; duration?: number; transition?: "linear" | "ease-in" | "ease-out" | "ease-in-out" | "ease"; direction?: "forwards" | ... 2 more ... | undefined; keyframes?: Partial<...> | undefined; } | undefined'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"none"'},{value:'"default"'},{value:'"pointer"'},{value:'"wait"'},{value:'"text"'},{value:'"move"'},{value:'"help"'},{value:'"all-scroll"'},{value:'"grabbing"'},{value:'"grab"'},{value:'"col-resize"'},{value:'"row-resize"'},{value:'"n-resize"'},{value:'"e-resize"'},{value:'"s-resize"'},{value:'"w-resize"'},{value:'"ne-resize"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"nwse-resize"'},{value:'"nesw-resize"'},{value:'"ns-resize"'},{value:'"ew-resize"'},{value:'"sw-resize"'},{value:'"se-resize"'},{value:'"nw-resize"'},{value:'"no-drop"'},{value:'"copy"'},{value:'"alias"'},{value:'"vertical-text"'},{value:'"crosshair"'},{value:'"cell"'},{value:'"progress"'},{value:'"context-menu"'},{value:'"not-allowed"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"pre"'},{value:'"pre-line"'},{value:'"pre-wrap"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"additional"'},{value:'"accent"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"string | number"}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitAnimationProps & UiKitTypographyProps & { ...; })'}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"UiKitAnimationProps"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"p"'},{value:'"main"'},{value:'"table"'},{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"section"'},{value:'"article"'},{value:'"nav"'},{value:'"ul"'},{value:'"ol"'},{value:'"li"'},{value:'"footer"'},{value:'"header"'},{value:'"tr"'},{value:'"td"'},{value:'"th"'},{value:'"picture"'},{value:'"hr"'},{value:'"label"'}]}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 8 more ... & { ...; }>, "bgGroup">'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 8 more ... & { ...; }>, "bgGroup">'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}}}}}catch{}const sa={title:"UI-Kit components/TextFieldV2",component:t,argTypes:{label:{control:"text",description:"Label for the input field"},errorMessage:{control:"text",description:"Error message if validation fails"},icon:{description:"Optional icon element"},type:{control:"radio",options:["text","password","email","number"],description:"Type of input field"},isDisabled:{control:"boolean",description:"Disables the input field"},isRequired:{control:"boolean",description:"Marks the field as required"}}},b={args:{label:"Default Input"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(i,{bg:"#401A75",height:130,p:32,children:e.jsx(t,{...a})}),e.jsx(i,{bg:"white",height:130,p:32,children:e.jsx(t,{...a})}),e.jsx(i,{bg:"#19171F",height:130,p:32,children:e.jsx(t,{...a})})]})},v={args:{label:"Label for Value Chain"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(i,{bg:"#19171F",height:130,p:32,children:e.jsx(t,{...a,variant:"secondary"})}),e.jsx(i,{bg:"white",height:130,p:32,children:e.jsx(t,{...a,variant:"secondary"})}),e.jsx(i,{bg:"#401A75",height:130,p:32,children:e.jsx(t,{...a,variant:"secondary"})})]})},x={args:{label:"Username"},render:a=>e.jsxs(i,{p:32,children:[e.jsx(t,{...a,bg:"surface-accent2-hovered",m:{mb:32}}),e.jsx(t,{...a,bg:"background-accent1-vertical",m:{mb:32}}),e.jsx(t,{...a,bg:"surface-primary-grad-subtle",m:{mb:32}}),e.jsx(t,{...a,variant:"secondary",bg:"surface-accent2-hovered",m:{mb:32}}),e.jsx(t,{...a,variant:"secondary",bg:"background-accent1-vertical",m:{mb:32}}),e.jsx(t,{...a,variant:"secondary",bg:"surface-primary-grad-subtle",m:{mb:32}})]})},f={args:{errorMessage:"error"},render:a=>e.jsxs(i,{bg:"#401A75",height:500,p:32,children:[e.jsx(t,{...a,label:({isFocused:n,value:s})=>e.jsx(m,{as:"label",position:{type:"absolute",top:n||s?"1px":"10px",left:"14px"},color:"text-primary-hovered",children:"Customed label"}),p:{px:14},m:{mb:111},color:"text-selection",customInput:e.jsx(g,{mask:"+\\91 9999999999",maskChar:"_"}),errorMessage:e.jsx(m,{position:{type:"absolute",right:"20px",top:"50px"},color:"text-selection",children:"Custom error message"})}),e.jsx(t,{...a,label:({isFocused:n,value:s})=>e.jsx(m,{as:"label",position:{type:"absolute",top:n||s?"1px":"10px",left:"14px"},color:"text-primary-hovered",children:"Customed label"}),p:{px:14},m:{mb:12},color:"text-selection",outlineColor:a.errorMessage?"orange":"text-selection",errorMessage:e.jsx(m,{position:{type:"absolute",right:"20px",top:"50px"},color:"text-selection",children:"Custom error message"})})]})},y={render:()=>{const[a,n]=p.useState(""),[s,l]=p.useState(null),u=c=>{if(c.preventDefault(),!a.trim()){l("Email is required");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){l("Invalid email format");return}l(null),alert("Form submitted!")};return e.jsxs("form",{onSubmit:u,children:[e.jsx(t,{name:"email",label:"Email",type:"email",value:a,onChange:c=>n(c),errorMessage:s!=null?s:void 0}),e.jsx(Ze,{type:"submit",className:"mt-4 p-2 bg-blue-500 text-white rounded",children:"Submit"})]})}},h={args:{label:"Password"},render:a=>{const[n,s]=p.useState(!1);return e.jsxs(z,{gap:8,bg:"grey",flexDirection:"column",p:22,children:[e.jsx(t,{...a,type:n?"text":"password",icon:({isDisabled:l})=>e.jsx(i,{onClick:()=>s(!n),position:{type:"absolute",top:"15px",right:"32px"},cursor:l?"auto":"pointer",children:e.jsx(pe,{})})}),e.jsx(t,{...a,variant:"secondary",type:n?"text":"password",icon:({isDisabled:l})=>e.jsx(i,{onClick:()=>s(!n),position:{type:"absolute",top:"10px",right:"12px"},cursor:l?"auto":"pointer",children:e.jsx(pe,{})})})]})}},V={args:{label:"Disabled",value:"Some text",isDisabled:!0},render:a=>e.jsx(t,{...a})},k={args:{label:"Error",value:"Some text"},render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(z,{flexDirection:"column",gap:16,bg:"#401A75",height:230,p:32,children:[e.jsx(t,{...a,errorMessage:"error message"}),e.jsx(t,{...a,variant:"secondary",errorMessage:"error message"})]}),e.jsxs(z,{flexDirection:"column",gap:16,bg:"#19171F",height:230,p:32,children:[e.jsx(t,{...a,errorMessage:"error message"}),e.jsx(t,{...a,variant:"secondary",errorMessage:"error message"})]})]})},j={args:{m:{mb:10}},render:a=>e.jsxs(i,{bg:"#401A75",height:500,p:32,children:[e.jsx(t,{...a,label:"Phone India",customInput:e.jsx(g,{mask:"+\\91 9999999999",maskChar:"_"})}),e.jsx(t,{...a,label:"Phone Russia",customInput:e.jsx(g,{mask:"+7 (999) 999-99-99",maskChar:"_"})}),e.jsx(t,{...a,label:"Card",customInput:e.jsx(g,{mask:"9999 9999 9999 9999",maskChar:"•"})}),e.jsx(t,{...a,label:"Date",customInput:e.jsx(g,{mask:"99.99.9999",maskChar:"_"})})]})};var ce,ge,be;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: "Default Input"
  },
  render: args => <>
      <Box bg="#401A75" height={130} p={32}>
        <TextFieldV2 {...args} />
      </Box>
      <Box bg="white" height={130} p={32}>
        <TextFieldV2 {...args} />
      </Box>
      <Box bg="#19171F" height={130} p={32}>
        <TextFieldV2 {...args} />
      </Box>
    </>
}`,...(be=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,xe,fe;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: "Label for Value Chain"
  },
  render: args => <>
      <Box bg="#19171F" height={130} p={32}>
        <TextFieldV2 {...args} variant="secondary" />
      </Box>
      <Box bg="white" height={130} p={32}>
        <TextFieldV2 {...args} variant="secondary" />
      </Box>
      <Box bg="#401A75" height={130} p={32}>
        <TextFieldV2 {...args} variant="secondary" />
      </Box>
    </>
}`,...(fe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ye,he,Ve;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: "Username"
  },
  render: args => <Box p={32}>
      <TextFieldV2 {...args} bg={"surface-accent2-hovered"} m={{
      mb: 32
    }} />
      <TextFieldV2 {...args} bg={"background-accent1-vertical"} m={{
      mb: 32
    }} />
      <TextFieldV2 {...args} bg={"surface-primary-grad-subtle"} m={{
      mb: 32
    }} />
      <TextFieldV2 {...args} variant="secondary" bg={"surface-accent2-hovered"} m={{
      mb: 32
    }} />
      <TextFieldV2 {...args} variant="secondary" bg={"background-accent1-vertical"} m={{
      mb: 32
    }} />
      <TextFieldV2 {...args} variant="secondary" bg={"surface-primary-grad-subtle"} m={{
      mb: 32
    }} />
    </Box>
}`,...(Ve=(he=x.parameters)==null?void 0:he.docs)==null?void 0:Ve.source}}};var ke,je,Fe;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    errorMessage: "error"
  },
  render: args => <Box bg="#401A75" height={500} p={32}>
      <TextFieldV2 {...args} label={({
      isFocused,
      value
    }) => <Typography as="label" position={{
      type: "absolute",
      top: isFocused || value ? "1px" : "10px",
      left: "14px"
    }} color={"text-primary-hovered"}>
            Customed label
          </Typography>} p={{
      px: 14
    }} m={{
      mb: 111
    }} color="text-selection" customInput={<InputMask mask={"+\\\\91 9999999999"} maskChar={"_"} />} errorMessage={<Typography position={{
      type: "absolute",
      right: "20px",
      top: "50px"
    }} color="text-selection">
            Custom error message
          </Typography>} />
      <TextFieldV2 {...args} label={({
      isFocused,
      value
    }) => <Typography as="label" position={{
      type: "absolute",
      top: isFocused || value ? "1px" : "10px",
      left: "14px"
    }} color={"text-primary-hovered"}>
            Customed label
          </Typography>} p={{
      px: 14
    }} m={{
      mb: 12
    }} color="text-selection" outlineColor={args.errorMessage ? "orange" : "text-selection"} errorMessage={<Typography position={{
      type: "absolute",
      right: "20px",
      top: "50px"
    }} color="text-selection">
            Custom error message
          </Typography>} />
    </Box>
}`,...(Fe=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var qe,Se,Te;y.parameters={...y.parameters,docs:{...(qe=y.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const onSubmit = (e: FormEvent): void => {
      e.preventDefault();
      if (!email.trim()) {
        setError("Email is required");
        return;
      }
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
        setError("Invalid email format");
        return;
      }
      setError(null);
      alert("Form submitted!");
    };
    return <form onSubmit={onSubmit}>
        <TextFieldV2 name="email" label="Email" type="email" value={email} onChange={e => setEmail(e)} errorMessage={error ?? undefined} />

        <Button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          Submit
        </Button>
      </form>;
  }
}`,...(Te=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var Ce,Pe,we;h.parameters={...h.parameters,docs:{...(Ce=h.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    label: "Password"
  },
  render: args => {
    const [isVisible, setIsVisible] = useState(false);
    return <Flex gap={8} bg={"grey"} flexDirection={"column"} p={22}>
        <TextFieldV2 {...args} type={isVisible ? "text" : "password"} icon={({
        isDisabled
      }) => {
        return <Box onClick={() => setIsVisible(!isVisible)} position={{
          type: "absolute",
          top: "15px",
          right: "32px"
        }} cursor={isDisabled ? "auto" : "pointer"}>
                <Eye />
              </Box>;
      }} />
        <TextFieldV2 {...args} variant="secondary" type={isVisible ? "text" : "password"} icon={({
        isDisabled
      }) => {
        return <Box onClick={() => setIsVisible(!isVisible)} position={{
          type: "absolute",
          top: "10px",
          right: "12px"
        }} cursor={isDisabled ? "auto" : "pointer"}>
                <Eye />
              </Box>;
      }} />
      </Flex>;
  }
}`,...(we=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};var Ie,Be,ze;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    value: "Some text",
    isDisabled: true
  },
  render: args => {
    return <TextFieldV2 {...args} />;
  }
}`,...(ze=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Me,De,Ee;k.parameters={...k.parameters,docs:{...(Me=k.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    label: "Error",
    value: "Some text"
  },
  render: args => {
    return <>
        <Flex flexDirection={"column"} gap={16} bg="#401A75" height={230} p={32}>
          <TextFieldV2 {...args} errorMessage={"error message"} />
          <TextFieldV2 {...args} variant="secondary" errorMessage={"error message"} />
        </Flex>
        <Flex flexDirection={"column"} gap={16} bg="#19171F" height={230} p={32}>
          <TextFieldV2 {...args} errorMessage={"error message"} />
          <TextFieldV2 {...args} variant="secondary" errorMessage={"error message"} />
        </Flex>
      </>;
  }
}`,...(Ee=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var We,Ne,_e;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    m: {
      mb: 10
    }
  },
  render: args => {
    return <Box bg="#401A75" height={500} p={32}>
        <TextFieldV2 {...args} label={"Phone India"} customInput={<InputMask mask={"+\\\\91 9999999999"} maskChar={"_"} />} />

        <TextFieldV2 {...args} label={"Phone Russia"} customInput={<InputMask mask="+7 (999) 999-99-99" maskChar="_" />} />

        <TextFieldV2 {...args} label={"Card"} customInput={<InputMask mask="9999 9999 9999 9999" maskChar="•" />} />

        <TextFieldV2 {...args} label={"Date"} customInput={<InputMask mask="99.99.9999" maskChar="_" />} />
      </Box>;
  }
}`,...(_e=(Ne=j.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};const ia=["Primary","Secondary","WithBgColor","WithCustomization","WithValidation","WithToggleIcon","Disabled","Error","Mask"],fa=Object.freeze(Object.defineProperty({__proto__:null,Disabled:V,Error:k,Mask:j,Primary:b,Secondary:v,WithBgColor:x,WithCustomization:f,WithToggleIcon:h,WithValidation:y,__namedExportsOrder:ia,default:sa},Symbol.toStringTag,{value:"Module"}));export{V as D,b as P,y as W,h as a,fa as s};
