import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as l}from"./index-D4lIrffr.js";import{$ as X}from"./useFocusRing-CS2iyisF.js";import{c as Z,$ as ee}from"./mergeProps-DUrzxDUC.js";import{c as I}from"./index-DW2zCSF8.js";import{B as ne}from"./Box-DTLb8-xX.js";import{F as v}from"./Flex-CJqTk8X2.js";import{$ as U}from"./useControlledState-YrJM5BK_.js";import{G as ae}from"./Grid-DPQTMopu.js";import{T as M}from"./Text-Bv2YpiT2.js";import{u as te}from"./useUiKitComponents-C9IiVWkE.js";function re(e){let[o,r]=U(e.isExpanded,e.defaultExpanded||!1,e.onExpandedChange);const d=u.useCallback(()=>{r(!0)},[r]),a=u.useCallback(()=>{r(!1)},[r]),t=u.useCallback(()=>{r(!o)},[r,o]);return{isExpanded:o,setExpanded:r,expand:d,collapse:a,toggle:t}}function ie(e){let{allowsMultipleExpanded:o=!1,isDisabled:r=!1}=e,[d,a]=U(u.useMemo(()=>e.expandedKeys?new Set(e.expandedKeys):void 0,[e.expandedKeys]),u.useMemo(()=>e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,[e.defaultExpandedKeys]),e.onExpandedChange);return u.useEffect(()=>{if(!o&&d.size>1){let t=d.values().next().value;t!=null&&a(new Set([t]))}}),{allowsMultipleExpanded:o,isDisabled:r,expandedKeys:d,setExpandedKeys:a,toggleKey(t){let s;o?(s=new Set(d),s.has(t)?s.delete(t):s.add(t)):s=new Set(d.has(t)?[]:[t]),a(s)}}}const oe=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:n.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",clipRule:"evenodd"})});try{ArrowRight.displayName="ArrowRight",ArrowRight.__docgenInfo={description:"",displayName:"ArrowRight",props:{}}}catch{}const de=I({base:"w-full transition-transform cursor-pointer ",variants:{variant:{primary:"bg-[var(--colors-surface-neutral-default)]",secondary:""},isDisabled:{true:"cursor-default",false:""}},defaultVariants:{isExpanded:!1,variant:"primary"}}),se=I({base:"transition-transform",variants:{variant:{primary:"",secondary:""},isExpanded:{true:"",false:""}},compoundVariants:[{variant:"primary",isExpanded:!0,class:"-rotate-90"},{variant:"primary",isExpanded:!1,class:"rotate-0"},{variant:"secondary",isExpanded:!0,class:"-rotate-90"},{variant:"secondary",isExpanded:!1,class:"rotate-90"}],defaultVariants:{variant:"primary",isExpanded:!1}}),le=I({base:"overflow-hidden transition-all ease-in-out ",variants:{isExpanded:{true:"max-h-screen opacity-100",false:"max-h-0 opacity-0"}}}),ce=e=>n.jsx(v,{justify:"space-between",align:"center",p:0,m:0,children:e.children}),ue=[24,24,24,24],E=e=>{var w;const{id:o,title:r,children:d,isExpanded:a,isDisabled:t,onToggle:s,variant:A="primary",className:B,headingWrapper:H,duration:x=500}=e,Y=Z(),C=o??Y,c=l.useContext(y),b=c?(w=c.expandedKeys)==null?void 0:w.has(C):a,z=re({isExpanded:b,onExpandedChange:Q=>{c&&c.toggleKey(C),s==null||s(Q)}}),L=l.useRef(null),O=t??(c==null?void 0:c.isDisabled)??!1,{focusProps:G}=X(),J=H??ce;return n.jsxs(n.Fragment,{children:[n.jsx(ne,{className:de({variant:A,className:`${B??""}`,isDisabled:O}),style:{transitionDuration:`${x}ms`},...ee(e,G),onClick:()=>{z.toggle()},p:e.p??ue,children:n.jsxs(J,{children:[n.jsx(n.Fragment,{children:r}),n.jsx(oe,{className:se({isExpanded:b,variant:A}),style:{transitionDuration:`${x}ms`}})]})}),n.jsx("div",{ref:L,className:le({isExpanded:b}),style:{transitionDuration:`${x}ms`},children:d})]})};try{E.displayName="AccordionItem",E.__docgenInfo={description:"",displayName:"AccordionItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isExpanded: boolean) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},headingWrapper:{defaultValue:null,description:"",name:"headingWrapper",required:!1,type:{name:"HeadingWrapper"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"cover"'},{value:'"contain"'}]}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"repeat"'},{value:'"no-repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 5 more ... & { ...; }>, "bgGroup">'}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "fixed" | "static" | "absolute" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"number | keyof FontSize"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"number | keyof LineHeight"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"middle"'},{value:'"bottom"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"ellipsis"'},{value:'"clip"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"pre"'},{value:'"nowrap"'},{value:'"pre-line"'},{value:'"pre-wrap"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitTypographyProps & { ...; })'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 5 more ... & { ...; }>, "bgGroup">'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}}}}}catch{}const y=l.createContext(null),i=({children:e,...o})=>{const r=ie(o);return n.jsx(n.Fragment,{children:n.jsx(y.Provider,{value:r,children:e})})};i.Item=E;try{y.displayName="AccordionContext",y.__docgenInfo={description:"",displayName:"AccordionContext",props:{}}}catch{}try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{expandedKeys:{defaultValue:null,description:"",name:"expandedKeys",required:!1,type:{name:"Set<ID>"}},onExpandedChange:{defaultValue:null,description:"",name:"onExpandedChange",required:!1,type:{name:"((keys: Set<ID>) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const pe={title:"UI-Kit components/Accordion",component:i,argTypes:{expandedKeys:{control:"object",description:"Набор ключей открытых элементов"},onExpandedChange:{action:"onExpandedChange",description:"Событие изменения состояния открытия элементов"},isDisabled:{control:"boolean",description:"Флаг для отключения всех элементов"}}},p={args:{},render:e=>{const[o,r]=l.useState(),d=a=>{var t;r(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:d,expandedKeys:o,children:[n.jsx(i.Item,{id:"item-1",title:"Item 1",children:n.jsx(M,{content:`## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
`})}),n.jsx(i.Item,{id:"item-2",title:"Item 2",children:"Content for Item 2"}),n.jsx(i.Item,{id:"item-3",title:"Item 3",children:"Content for Item 3"})]})}},m={args:{},render:e=>{const[o,r]=l.useState(),d=t=>{var s;r(t),(s=e.onExpandedChange)==null||s.call(e,t)},{Link:a}=te();return n.jsxs(i,{...e,onExpandedChange:d,expandedKeys:o,children:[n.jsx(i.Item,{id:"item-1",title:"Место для заголовка",variant:"secondary",children:n.jsx(M,{content:`## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
`})}),n.jsx(i.Item,{id:"item-2",title:"Например текст",variant:"secondary",children:"Content for Item 2"}),n.jsx(i.Item,{id:"item-3",title:n.jsx(a,{href:"/",children:"Или ссылка на главную"}),variant:"secondary",children:"Content for Item 3"})]})}},f={args:{},render:e=>{const[o,r]=l.useState(),d=a=>{var t;r(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsx(i,{...e,expandedKeys:o,onExpandedChange:d,children:n.jsx(i.Item,{id:"item-1",title:"Disabled",variant:"primary",isDisabled:!0,children:null})})}},g={args:{},render:e=>{const[o,r]=l.useState(new Set(["item-1"])),d=a=>{var t;r(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:d,expandedKeys:o,children:[n.jsx(i.Item,{id:"item-1",title:"500",variant:"primary",duration:500,children:"500ms"}),n.jsx(i.Item,{id:"item-2",title:"800",variant:"primary",duration:800,children:"800ms"}),n.jsx(i.Item,{id:"item-3",title:"1500",variant:"primary",duration:1500,children:"1500ms"})]})}},h={args:{},render:e=>{const[o,r]=l.useState(new Set(["item-1"])),d=a=>{var t;r(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:d,expandedKeys:o,children:[n.jsx(i.Item,{id:"item-1",title:"Grid with 2 columns",variant:"primary",p:{px:40},headingWrapper:a=>n.jsx(ae,{gap:18,cols:2,children:a.children}),children:"500ms"}),n.jsx(i.Item,{id:"item-2",title:"Flex justify-content:center",variant:"primary",headingWrapper:a=>n.jsx(v,{gap:24,align:"center",justify:"center",flexDirection:"row",children:a.children}),children:"800ms"}),n.jsx(i.Item,{headingWrapper:a=>n.jsx(v,{gap:8,align:"end",children:a.children}),id:"item-3",title:"Flex align-items: end",variant:"primary",children:"1500ms"})]})}};var K,S,V;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();
    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };
    return <Accordion {...args} onExpandedChange={handleExpandedChange} expandedKeys={expandedKeys}>
        <Accordion.Item id="item-1" title="Item 1">
          <Text content="## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
" />
        </Accordion.Item>
        <Accordion.Item id="item-2" title="Item 2">
          Content for Item 2
        </Accordion.Item>
        <Accordion.Item id="item-3" title="Item 3">
          Content for Item 3
        </Accordion.Item>
      </Accordion>;
  }
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var j,q,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();
    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };
    const {
      Link
    } = useUiKitComponents();
    return <Accordion {...args} onExpandedChange={handleExpandedChange} expandedKeys={expandedKeys}>
        <Accordion.Item id="item-1" title="Место для заголовка" variant="secondary">
          <Text content="## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
" />
        </Accordion.Item>
        <Accordion.Item id="item-2" title="Например текст" variant="secondary">
          Content for Item 2
        </Accordion.Item>
        <Accordion.Item id="item-3" title={<Link href="/">Или ссылка на главную</Link>} variant="secondary">
          Content for Item 3
        </Accordion.Item>
      </Accordion>;
  }
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var W,_,P;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();
    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };
    return <Accordion {...args} expandedKeys={expandedKeys} onExpandedChange={handleExpandedChange}>
        <Accordion.Item id="item-1" title="Disabled" variant="primary" isDisabled>
          {null}
        </Accordion.Item>
      </Accordion>;
  }
}`,...(P=(_=f.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var k,R,T;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>(new Set(["item-1"]));
    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };
    return <Accordion {...args} onExpandedChange={handleExpandedChange} expandedKeys={expandedKeys}>
        <Accordion.Item id="item-1" title="500" variant="primary" duration={500}>
          500ms
        </Accordion.Item>
        <Accordion.Item id="item-2" title="800" variant="primary" duration={800}>
          800ms
        </Accordion.Item>
        <Accordion.Item id="item-3" title="1500" variant="primary" duration={1500}>
          1500ms
        </Accordion.Item>
      </Accordion>;
  }
}`,...(T=(R=g.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var $,F,N;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>(new Set(["item-1"]));
    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };
    return <Accordion {...args} onExpandedChange={handleExpandedChange} expandedKeys={expandedKeys}>
        <Accordion.Item id="item-1" title="Grid with 2 columns" variant="primary" p={{
        px: 40
      }} headingWrapper={wrapperProps => <Grid gap={18} cols={2}>
              {wrapperProps.children}
            </Grid>}>
          500ms
        </Accordion.Item>
        <Accordion.Item id="item-2" title="Flex justify-content:center" variant="primary" headingWrapper={wrapperProps => <Flex gap={24} align="center" justify="center" flexDirection="row">
              {wrapperProps.children}
            </Flex>}>
          800ms
        </Accordion.Item>
        <Accordion.Item headingWrapper={wrapperProps => <Flex gap={8} align="end">
              {wrapperProps.children}
            </Flex>} id="item-3" title="Flex align-items: end" variant="primary">
          1500ms
        </Accordion.Item>
      </Accordion>;
  }
}`,...(N=(F=h.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const me=["Default","SecondaryVariant","Disabled","CustomDurations","CustomHeadingWrapper"],we=Object.freeze(Object.defineProperty({__proto__:null,CustomDurations:g,CustomHeadingWrapper:h,Default:p,Disabled:f,SecondaryVariant:m,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{g as C,p as D,m as S,f as a,h as b,we as s};
