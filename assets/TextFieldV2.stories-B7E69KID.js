import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as c,R as Ge}from"./index-D4H_InIO.js";import{$ as Je,I as m}from"./index-De9P05t2.js";import{u as Xe,e as Qe,d as Ye,b as Ze,c as Le,j as ea,B as o}from"./useUiKitTheme-BGeTiEix.js";import{B as aa}from"./Button-eOGHJ8sC.js";import{F as z}from"./Flex-kujzUWYy.js";import{T as p}from"./Typography-CUqmvUF7.js";import{S as ce}from"./Eye-CyNTCh-E.js";const ra=({variant:a,isFocused:l,isLabelFloated:n})=>({primary:{as:"label",position:{type:"absolute",left:"32px",top:n?"6px":"16px"},opacity:n?50:void 0,color:"text-secondary-default",fontSize:n?"body.mobile.xsmall":"body.mobile.large",md:{fontSize:n?"body.desktop.xsmall":"body.desktop.large",lineHeight:n?"body.desktop.xsmall":"body.desktop.large"},lineHeight:n?"body.mobile.small":"body.mobile.large"},secondary:{as:"label",position:{type:"absolute",left:"12px",top:n?"7px":"15px"},opacity:n?50:void 0,color:l?"text-selection":"text-secondary-default",fontSize:n?"body.mobile.xsmall":"body.mobile.medium",md:{fontSize:n?"body.desktop.xsmall":"body.desktop.medium",lineHeight:n?"body.desktop.xsmall":"body.desktop.medium"},lineHeight:n?"body.mobile.small":"body.mobile.medium"}})[a],na=({variant:a})=>({primary:{as:"p",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",fontWeight:"mobile.normal",md:{fontWeight:"desktop.normal"},color:"text-destructive",m:{mt:2,ml:32}},secondary:{as:"p",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",fontWeight:"mobile.normal",md:{fontWeight:"desktop.normal"},m:{mt:4},color:"text-destructive"}})[a],B={padding:{primary:[26,32,8,32],secondary:[22,12,6,12]}},ta=({variant:a,isError:l,isFocused:n})=>({primary:{m:{outlineColor:l?"text-destructive":"surface-neutral-dark-default",outlineWidth:"1px"}},secondary:{m:{outlineColor:l?"text-destructive":n?"border-selected":"surface-neutral-dark-default",outlineWidth:"1px"}}})[a],la=({variant:a,isError:l,isFocused:n})=>({primary:{m:{color:l?"text-destructive":"surface-neutral-dark-default",width:"1px",radius:"form"}},secondary:{m:{color:l?"text-destructive":n?"border-selected":"surface-neutral-dark-default",width:"1px",radius:"form"}}})[a],sa=({variant:a})=>({primary:{m:{bg:"surface-neutral-dark-default",bgSize:"cover",bgRepeat:"no-repeat",bgPosition:"center"}},secondary:{m:{bg:"surface-neutral-dark-default",bgSize:"cover",bgRepeat:"no-repeat",bgPosition:"center"}}})[a],oa=({variant:a})=>({primary:{m:{width:"100%",height:"100%",maxHeight:"56px"}},secondary:{m:{width:"100%",height:"100%",maxHeight:"48px"}}})[a],t=c.forwardRef((a,l)=>{var _,W,N,$,R,U,A,H,K,O,G,J,X,Q,Y,Z,L,ee,ae,re,ne,te,le,se,oe,ie,ue,de,me,pe;const{label:n,icon:s,errorMessage:u,name:g,type:Re,className:D,customInput:E,onChange:da,spellCheck:ma,variant:d="primary",alwaysShowMask:M=!1,...r}=a,[b,w]=c.useState(!1),Ue=c.useRef(null),Ae=typeof n=="string"?n:"input-label",{inputProps:i}=Je({...a,label:Ae,inputElementType:"input"},l!=null?l:Ue),He=b||!!i.value||M,q=Xe({m:{p:r.p,m:r.m},md:r.md,d:r.d,defaultPadding:(_=B==null?void 0:B.padding)==null?void 0:_[d]}),F=Qe({m:{...la({variant:d,isError:!!u,isFocused:b}).m,...r.border},md:(W=r==null?void 0:r.md)==null?void 0:W.border,d:(N=r==null?void 0:r.d)==null?void 0:N.border,hover:{m:($=r==null?void 0:r.hover)==null?void 0:$.border,md:(U=(R=r==null?void 0:r.md)==null?void 0:R.hover)==null?void 0:U.border,d:(H=(A=r==null?void 0:r.d)==null?void 0:A.hover)==null?void 0:H.border}}),T=Ye({m:{...sa({variant:d}).m,...a},md:(K=a==null?void 0:a.md)!=null?K:{},d:(O=a.d)!=null?O:{},hover:{m:(G=a.hover)!=null?G:{},md:(X=(J=a.md)==null?void 0:J.hover)!=null?X:{},d:(Y=(Q=a.d)==null?void 0:Q.hover)!=null?Y:{}}}),C=Ze({m:{...oa({variant:d}).m,...r},md:r.md,d:r.d}),P=Le({m:{fontSize:(Z=r.fontSize)!=null?Z:"body.mobile.medium",lineHeight:(L=r==null?void 0:r.lineHeight)!=null?L:"body.mobile.medium",...r},md:(ee=r==null?void 0:r.md)!=null?ee:{},d:(ae=r==null?void 0:r.d)!=null?ae:{},hover:{m:(re=r==null?void 0:r.hover)!=null?re:{},md:(te=(ne=r==null?void 0:r.md)==null?void 0:ne.hover)!=null?te:{},d:(se=(le=r==null?void 0:r.d)==null?void 0:le.hover)!=null?se:{}}}),I=ea({m:{...ta({variant:d,isError:!!u,isFocused:b}).m,...r},md:r==null?void 0:r.md,d:r==null?void 0:r.d,hover:{m:(oe=r==null?void 0:r.hover)!=null?oe:{},md:(ue=(ie=r==null?void 0:r.md)==null?void 0:ie.hover)!=null?ue:{},d:(me=(de=r==null?void 0:r.d)==null?void 0:de.hover)!=null?me:{}}}),Ke=n&&typeof n!="string"?n({isFocused:b,value:i.value,alwaysShowMask:M}):e.jsx(e.Fragment,{}),Oe=s?s==null?void 0:s({isDisabled:(pe=i==null?void 0:i.disabled)!=null?pe:!1}):e.jsx(e.Fragment,{});return e.jsxs(o,{position:{type:"relative"},children:[typeof n=="string"?e.jsx(p,{...ra({variant:d,isFocused:b,isLabelFloated:He}),children:n}):Ke,E?Ge.cloneElement(E,{...r,...i,ref:l,alwaysShowMask:M,onClick:i.onClick,className:`${F.className} ${T.className} ${q.className} ${C.className} ${P.classNames} ${I.className} ${D}`,style:{...F.style,...T.style,...q.styles,...C.styles,...P.styles,...I.style},onFocus:()=>w(!0),onBlur:()=>w(!1)}):e.jsx("input",{...i,...r,ref:l,value:i.value,name:g,type:Re,className:` ${F.className} ${T.className} ${q.className} ${C.className} ${P.classNames} ${I.className} ${D}`,onFocus:()=>w(!0),onBlur:()=>w(!1),style:{...F.style,...T.style,...q.styles,...C.styles,...P.styles,...I.style}}),s&&e.jsx(e.Fragment,{children:Oe}),typeof u=="string"?e.jsx(p,{...na({variant:d}),children:u}):u]})});try{t.displayName="TextFieldV2",t.__docgenInfo={description:"",displayName:"TextFieldV2",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | ((args: { isFocused: boolean; value?: string | number | readonly string[]; alwaysShowMask?: boolean; }) => ReactNode) | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"((args: { isDisabled?: boolean; }) => ReactNode)"}},errorMessage:{defaultValue:null,description:"An error message for the field.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},alwaysShowMask:{defaultValue:null,description:"",name:"alwaysShowMask",required:!1,type:{name:"boolean"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"hidden"'},{value:'"inline"'},{value:'"inline-block"'},{value:'"flex"'},{value:'"inline-flex"'},{value:'"table"'},{value:'"table-cell"'},{value:'"grid"'},{value:'"table-row"'},{value:'"list-item"'}]}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"hidden"'},{value:'"visible"'},{value:'"scroll"'},{value:'"clip"'}]}},backdropBlur:{defaultValue:null,description:"",name:"backdropBlur",required:!1,type:{name:"string | number"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:'{ name: "none" | "spin" | "frameAppear" | "ping" | "pulse" | "bounce" | "keyframes"; duration?: number; transition?: "linear" | "ease-in" | "ease-out" | "ease-in-out" | "ease"; direction?: "forwards" | ... 2 more ... | undefined; keyframes?: Partial<...> | undefined; } | undefined'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"none"'},{value:'"default"'},{value:'"pointer"'},{value:'"wait"'},{value:'"text"'},{value:'"move"'},{value:'"help"'},{value:'"all-scroll"'},{value:'"grabbing"'},{value:'"grab"'},{value:'"col-resize"'},{value:'"row-resize"'},{value:'"n-resize"'},{value:'"e-resize"'},{value:'"s-resize"'},{value:'"w-resize"'},{value:'"ne-resize"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"nwse-resize"'},{value:'"nesw-resize"'},{value:'"ns-resize"'},{value:'"ew-resize"'},{value:'"sw-resize"'},{value:'"se-resize"'},{value:'"nw-resize"'},{value:'"no-drop"'},{value:'"copy"'},{value:'"alias"'},{value:'"vertical-text"'},{value:'"crosshair"'},{value:'"cell"'},{value:'"progress"'},{value:'"context-menu"'},{value:'"not-allowed"'}]}},listStyle:{defaultValue:null,description:"",name:"listStyle",required:!1,type:{name:'{ position?: "inside" | "outside"; type?: "none" | "disc" | "decimal"; } | undefined'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"pre"'},{value:'"pre-line"'},{value:'"pre-wrap"'},{value:'"break-spaces"'}]}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"all"'},{value:'"word"'},{value:'"keep"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"additional"'},{value:'"accent"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"string | number"}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitAnimationProps & UiKitTypographyProps & { ...; })'}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"UiKitAnimationProps"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"p"'},{value:'"table"'},{value:'"main"'},{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"section"'},{value:'"article"'},{value:'"nav"'},{value:'"ul"'},{value:'"ol"'},{value:'"li"'},{value:'"footer"'},{value:'"header"'},{value:'"tr"'},{value:'"td"'},{value:'"th"'},{value:'"picture"'},{value:'"hr"'},{value:'"label"'}]}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 9 more ... & { ...; }>, "bgGroup">'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 9 more ... & { ...; }>, "bgGroup">'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}}}}}catch{}const ia={title:"UI-Kit components/TextFieldV2",component:t,argTypes:{label:{control:"text",description:"Label for the input field"},errorMessage:{control:"text",description:"Error message if validation fails"},icon:{description:"Optional icon element"},type:{control:"radio",options:["text","password","email","number"],description:"Type of input field"},isDisabled:{control:"boolean",description:"Disables the input field"},isRequired:{control:"boolean",description:"Marks the field as required"}}},v={args:{label:"Default Input"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(o,{bg:"#401A75",height:130,p:32,children:e.jsx(t,{...a})}),e.jsx(o,{bg:"white",height:130,p:32,children:e.jsx(t,{...a})}),e.jsx(o,{bg:"#19171F",height:130,p:32,children:e.jsx(t,{...a})})]})},f={args:{label:"Label for Value Chain"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(o,{bg:"#19171F",height:130,p:32,children:e.jsx(t,{...a,variant:"secondary"})}),e.jsx(o,{bg:"white",height:130,p:32,children:e.jsx(t,{...a,variant:"secondary"})}),e.jsx(o,{bg:"#401A75",height:130,p:32,children:e.jsx(t,{...a,variant:"secondary"})})]})},x={args:{label:"Username"},render:a=>e.jsxs(o,{p:32,children:[e.jsx(t,{...a,bg:"surface-accent2-hovered",m:{mb:32}}),e.jsx(t,{...a,bg:"background-accent1-vertical",m:{mb:32}}),e.jsx(t,{...a,bg:"surface-primary-grad-subtle",m:{mb:32}}),e.jsx(t,{...a,variant:"secondary",bg:"surface-accent2-hovered",m:{mb:32}}),e.jsx(t,{...a,variant:"secondary",bg:"background-accent1-vertical",m:{mb:32}}),e.jsx(t,{...a,variant:"secondary",bg:"surface-primary-grad-subtle",m:{mb:32}})]})},y={args:{errorMessage:"error"},render:a=>e.jsxs(o,{bg:"#401A75",height:500,p:32,children:[e.jsx(t,{...a,label:({isFocused:l,value:n})=>e.jsx(p,{as:"label",position:{type:"absolute",top:l||n?"1px":"10px",left:"14px"},color:"text-primary-hovered",children:"Customed label"}),p:{px:14},m:{mb:111},color:"text-selection",customInput:e.jsx(m,{mask:"+\\91 9999999999",maskChar:"_"}),errorMessage:e.jsx(p,{position:{type:"absolute",right:"20px",top:"50px"},color:"text-selection",children:"Custom error message"})}),e.jsx(t,{...a,label:({isFocused:l,value:n})=>e.jsx(p,{as:"label",position:{type:"absolute",top:l||n?"1px":"10px",left:"14px"},color:"text-primary-hovered",children:"Customed label"}),p:{px:14},m:{mb:12},color:"text-selection",outlineColor:a.errorMessage?"orange":"text-selection",errorMessage:e.jsx(p,{position:{type:"absolute",right:"20px",top:"50px"},color:"text-selection",children:"Custom error message"})})]})},h={render:()=>{const[a,l]=c.useState(""),[n,s]=c.useState(null),u=g=>{if(g.preventDefault(),!a.trim()){s("Email is required");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){s("Invalid email format");return}s(null),alert("Form submitted!")};return e.jsxs("form",{onSubmit:u,children:[e.jsx(t,{name:"email",label:"Email",type:"email",value:a,onChange:g=>l(g),errorMessage:n!=null?n:void 0}),e.jsx(aa,{type:"submit",className:"mt-4 p-2 bg-blue-500 text-white rounded",children:"Submit"})]})}},V={args:{label:"Password"},render:a=>{const[l,n]=c.useState(!1);return e.jsxs(z,{gap:8,bg:"grey",flexDirection:"column",p:22,children:[e.jsx(t,{...a,type:l?"text":"password",icon:({isDisabled:s})=>e.jsx(o,{onClick:()=>n(!l),position:{type:"absolute",top:"15px",right:"32px"},cursor:s?"auto":"pointer",children:e.jsx(ce,{})})}),e.jsx(t,{...a,variant:"secondary",type:l?"text":"password",icon:({isDisabled:s})=>e.jsx(o,{onClick:()=>n(!l),position:{type:"absolute",top:"10px",right:"12px"},cursor:s?"auto":"pointer",children:e.jsx(ce,{})})})]})}},k={args:{label:"Disabled",value:"Some text",isDisabled:!0},render:a=>e.jsx(t,{...a})},j={args:{label:"Error",value:"Some text"},render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(z,{flexDirection:"column",gap:16,bg:"#401A75",height:230,p:32,children:[e.jsx(t,{...a,errorMessage:"error message"}),e.jsx(t,{...a,variant:"secondary",errorMessage:"error message"})]}),e.jsxs(z,{flexDirection:"column",gap:16,bg:"#19171F",height:230,p:32,children:[e.jsx(t,{...a,errorMessage:"error message"}),e.jsx(t,{...a,variant:"secondary",errorMessage:"error message"})]})]})},S={args:{m:{mb:10}},render:a=>e.jsxs(o,{bg:"#401A75",height:500,p:32,children:[e.jsx(t,{...a,label:"Phone India",customInput:e.jsx(m,{mask:"+\\91 9999999999",maskChar:"_"})}),e.jsx(t,{...a,label:"Phone Russia",customInput:e.jsx(m,{mask:"+7 (999) 999-99-99",maskChar:"_"})}),e.jsx(t,{...a,alwaysShowMask:!0,label:"Phone with alwaysShowMask",customInput:e.jsx(m,{mask:"+5 (999) 999-99-99",maskChar:"_"})}),e.jsx(t,{...a,label:"Card",customInput:e.jsx(m,{mask:"9999 9999 9999 9999",maskChar:"•"})}),e.jsx(t,{...a,label:"Date",customInput:e.jsx(m,{mask:"99.99.9999",maskChar:"_"})})]})};var ge,be,ve;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(be=v.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,xe,ye;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ye=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var he,Ve,ke;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ke=(Ve=x.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var je,Se,we;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(we=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var qe,Fe,Te;h.parameters={...h.parameters,docs:{...(qe=h.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Te=(Fe=h.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var Ce,Pe,Ie;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ie=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};var Me,Be,ze;k.parameters={...k.parameters,docs:{...(Me=k.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    value: "Some text",
    isDisabled: true
  },
  render: args => {
    return <TextFieldV2 {...args} />;
  }
}`,...(ze=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var De,Ee,_e;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(_e=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var We,Ne,$e;S.parameters={...S.parameters,docs:{...(We=S.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    m: {
      mb: 10
    }
  },
  render: args => {
    return <Box bg="#401A75" height={500} p={32}>
        <TextFieldV2 {...args} label={"Phone India"} customInput={<InputMask mask={"+\\\\91 9999999999"} maskChar={"_"} />} />

        <TextFieldV2 {...args} label={"Phone Russia"} customInput={<InputMask mask="+7 (999) 999-99-99" maskChar="_" />} />

        <TextFieldV2 {...args} alwaysShowMask label={"Phone with alwaysShowMask"} customInput={<InputMask mask="+5 (999) 999-99-99" maskChar="_" />} />

        <TextFieldV2 {...args} label={"Card"} customInput={<InputMask mask="9999 9999 9999 9999" maskChar="•" />} />

        <TextFieldV2 {...args} label={"Date"} customInput={<InputMask mask="99.99.9999" maskChar="_" />} />
      </Box>;
  }
}`,...($e=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:$e.source}}};const ua=["Primary","Secondary","WithBgColor","WithCustomization","WithValidation","WithToggleIcon","Disabled","Error","Mask"],ha=Object.freeze(Object.defineProperty({__proto__:null,Disabled:k,Error:j,Mask:S,Primary:v,Secondary:f,WithBgColor:x,WithCustomization:y,WithToggleIcon:V,WithValidation:h,__namedExportsOrder:ua,default:ia},Symbol.toStringTag,{value:"Module"}));export{k as D,v as P,h as W,V as a,ha as s};
