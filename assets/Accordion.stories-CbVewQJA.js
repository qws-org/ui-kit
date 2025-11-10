import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{r as c,R as d}from"./index-D4H_InIO.js";import{c as Y}from"./index-DW2zCSF8.js";import{B as q}from"./useUiKitTheme-BS4EXINP.js";import{F as A}from"./Flex-DFpHf_29.js";import{l as re,k as oe}from"./useFocus-CgYBR30T.js";import{$ as O}from"./useControlledState-Dxxc-Ijj.js";import{$ as le}from"./useFocusRing-h6Cxu8gH.js";import{G as se}from"./Grid-s0MY2vbn.js";import{T as b}from"./Text-DGsDBo4m.js";import{u as de}from"./useUiKitComponents-DylESbeD.js";function ue(e){let[r,o]=O(e.isExpanded,e.defaultExpanded||!1,e.onExpandedChange);const l=c.useCallback(()=>{o(!0)},[o]),a=c.useCallback(()=>{o(!1)},[o]),t=c.useCallback(()=>{o(!r)},[o,r]);return{isExpanded:r,setExpanded:o,expand:l,collapse:a,toggle:t}}function ce(e){let{allowsMultipleExpanded:r=!1,isDisabled:o=!1}=e,[l,a]=O(c.useMemo(()=>e.expandedKeys?new Set(e.expandedKeys):void 0,[e.expandedKeys]),c.useMemo(()=>e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,[e.defaultExpandedKeys]),e.onExpandedChange);return c.useEffect(()=>{if(!r&&l.size>1){let t=l.values().next().value;t!=null&&a(new Set([t]))}}),{allowsMultipleExpanded:r,isDisabled:o,expandedKeys:l,setExpandedKeys:a,toggleKey(t){let s;r?(s=new Set(l),s.has(t)?s.delete(t):s.add(t)):s=new Set(l.has(t)?[]:[t]),a(s)}}}const pe=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:n.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",clipRule:"evenodd"})});try{ArrowRight.displayName="ArrowRight",ArrowRight.__docgenInfo={description:"",displayName:"ArrowRight",props:{}}}catch{}const me=Y({base:"transition-transform cursor-pointer ",variants:{variant:{primary:"bg-[var(--colors-surface-neutral-default)]",secondary:""},isDisabled:{true:"cursor-default",false:""}},defaultVariants:{isExpanded:!1,variant:"primary"}}),he=Y({base:"transition-transform  ",variants:{variant:{primary:"",secondary:""},isExpanded:{true:"",false:""}},compoundVariants:[{variant:"primary",isExpanded:!0,class:"-rotate-90"},{variant:"primary",isExpanded:!1,class:"rotate-0"},{variant:"secondary",isExpanded:!0,class:"-rotate-90"},{variant:"secondary",isExpanded:!1,class:"rotate-90"}],defaultVariants:{variant:"primary",isExpanded:!1}}),fe=e=>n.jsx(A,{justify:"space-between",align:"center",p:0,m:0,children:e.children}),ge=[24,24,24,24],I=e=>{var j,$,P;const{id:r,title:o,children:l,isExpanded:a,isDisabled:t,onToggle:s,variant:C="primary",className:v,headingWrapper:w,duration:E=500}=e,X=re(),k=r!=null?r:X,u=d.useContext(Q),x=u?(j=u.expandedKeys)==null?void 0:j.has(k):a,Z=ue({isExpanded:x,onExpandedChange:ie=>{u&&u.toggleKey(k),s==null||s(ie)}}),ee=d.useRef(null),ne=($=t!=null?t:u==null?void 0:u.isDisabled)!=null?$:!1,{focusProps:te}=le(),ae=w!=null?w:fe;return n.jsxs(n.Fragment,{children:[n.jsx(q,{width:"100%",className:me({variant:C,className:`${v!=null?v:""}`,isDisabled:ne}),style:{transitionDuration:`${E}ms`},...oe(e,te),onClick:()=>{Z.toggle()},p:(P=e.p)!=null?P:ge,children:n.jsxs(ae,{children:[n.jsx(n.Fragment,{children:o}),n.jsx(pe,{className:he({isExpanded:x,variant:C}),style:{transitionDuration:`${E}ms`,minWidth:"24px"}})]})}),n.jsx(q,{maxHeight:x?"max-content":0,ref:ee,opacity:x?100:0,className:"overflow-hidden transition-all ease-in-out ",style:{transitionDuration:`${E}ms`},children:l})]})};try{I.displayName="AccordionItem",I.__docgenInfo={description:"",displayName:"AccordionItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isExpanded: boolean) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},headingWrapper:{defaultValue:null,description:"",name:"headingWrapper",required:!1,type:{name:"HeadingWrapper"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"string | number"}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 8 more ... & { ...; }>, "bgGroup">'}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 8 more ... & { ...; }>, "bgGroup">'}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"hidden"'},{value:'"visible"'},{value:'"scroll"'},{value:'"clip"'}]}},backdropBlur:{defaultValue:null,description:"",name:"backdropBlur",required:!1,type:{name:"string | number"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:'{ name: "none" | "spin" | "frameAppear"; duration?: number; transition?: "linear" | "ease-in" | "ease-out" | "ease-in-out" | "ease"; direction?: "forwards" | "backwards" | "both" | undefined; } | undefined'}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"none"'},{value:'"default"'},{value:'"pointer"'},{value:'"wait"'},{value:'"text"'},{value:'"move"'},{value:'"help"'},{value:'"all-scroll"'},{value:'"grabbing"'},{value:'"grab"'},{value:'"col-resize"'},{value:'"row-resize"'},{value:'"n-resize"'},{value:'"e-resize"'},{value:'"s-resize"'},{value:'"w-resize"'},{value:'"ne-resize"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"nwse-resize"'},{value:'"nesw-resize"'},{value:'"ns-resize"'},{value:'"ew-resize"'},{value:'"sw-resize"'},{value:'"se-resize"'},{value:'"nw-resize"'},{value:'"no-drop"'},{value:'"copy"'},{value:'"alias"'},{value:'"vertical-text"'},{value:'"crosshair"'},{value:'"cell"'},{value:'"progress"'},{value:'"context-menu"'},{value:'"not-allowed"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"pre"'},{value:'"pre-line"'},{value:'"pre-wrap"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitAnimationProps & UiKitTypographyProps & { ...; })'}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"UiKitAnimationProps"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}}}}}catch{}const Q=d.createContext(null),i=({children:e,...r})=>{const o=ce(r);return n.jsx(n.Fragment,{children:n.jsx(Q.Provider,{value:o,children:e})})};i.Item=I;try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{expandedKeys:{defaultValue:null,description:"",name:"expandedKeys",required:!1,type:{name:"Set<ID>"}},onExpandedChange:{defaultValue:null,description:"",name:"onExpandedChange",required:!1,type:{name:"((keys: Set<ID>) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},allowsMultipleExpanded:{defaultValue:null,description:"",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}}}}}catch{}const ye={title:"UI-Kit components/Accordion",component:i,argTypes:{expandedKeys:{control:"object",description:"Набор ключей открытых элементов"},onExpandedChange:{action:"onExpandedChange",description:"Событие изменения состояния открытия элементов"},isDisabled:{control:"boolean",description:"Флаг для отключения всех элементов"}}},p={args:{},render:e=>{const[r,o]=d.useState(),l=a=>{var t;o(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:l,expandedKeys:r,children:[n.jsx(i.Item,{id:"item-1",title:" By using, visiting and/or accessing any part of the jack-poker.com website and/or registering ",children:n.jsx(b,{content:`## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](https://jpws-cms-dev-test-test.jack-flush.com/assets/b9a18fab-c61b-440a-8878-cd9c8e57c4da.jpg?width=1240&height=900)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
`})}),n.jsx(i.Item,{id:"item-2",title:"Item 2",children:n.jsx(b,{content:`<ol>
<li style="font-size: 18pt;"><span style="font-size: 18pt;">The Cash Game Leaderboard promotion runs from May 19th, 2025 to June 8th, 2025, spanning three weekly rounds.</span></li>
</ol>
<ol start="2">
<li style="font-size: 14pt;"><span style="font-size: 14pt;">The total prize pool is $1,000,000, split into:</span></li>
</ol>
<ul>
<li>$750,000 in Score-Based Leaderboard Prizes</li>
<li>$250,000 in Random Prizes, awarded throughout the entire promotion</li>
</ul>
<ol start="3">
<li>Players earn leaderboard points in real-money cash games as follows: -1 point for every call or bet that results in a losing hand</li>
</ol>
<ul>
<li>2 points for every all-in that ends in a loss</li>
</ul>
<ol start="4">
<li>The leaderboard is divided into three separate limit groups:</li>
</ol>
<ul>
<li>Low limits: $0.10 – $0.50</li>
<li>Medium limits: $1 – $4</li>
<li>High limits: $10 – $20</li>
</ul>
<ol start="5">
<li>Awarded separately per stake level across the three rounds:</li>
</ol>
<ul>
<li>Low limits: $20,000 total</li>
<li>Medium limits: $50,000 total</li>
<li>High limits: $180,000 total</li>
<li>The $250,000 Random Prize Pool is distributed randomly among participating players</li>
</ul>
<ol start="6">
<li>Eligibility: The promotion is open to all eligible players who meet the platform’s age and jurisdictional requirements.</li>
</ol>
<ol start="7">
<li>Leaderboard Updates: The leaderboard rankings are updated in real time, and players can track their positions via the game client or promotions page.</li>
</ol>
<ol start="8">
<li>General Terms: Gift from the Poker Gods: Cash Game Leaderboard promotion is subject to JackPoker’s General Terms and Conditions. JackPoker reserves the right to modify, suspend, or cancel the promotion at any time.</li>
</ol>`})}),n.jsx(i.Item,{id:"item-3",title:"Item 3",children:n.jsx(b,{content:`<p><img src="https://jpws-cms-dev-test-test.jack-flush.com/assets/b9a18fab-c61b-440a-8878-cd9c8e57c4da.jpg?width=1240&amp;height=900" alt="Bg Slider Desktop" loading="lazy"></p>
<ol>
<li style="font-size: 18pt;"><span style="font-size: 18pt;">The Cash Game Leaderboard promotion runs from May 19th, 2025 to June 8th, 2025, spanning three weekly rounds.</span></li>
</ol>
<ol start="2">
<li style="font-size: 14pt;"><span style="font-size: 14pt;">The total prize pool is $1,000,000, split into:</span></li>
</ol>
<ul>
<li>$750,000 in Score-Based Leaderboard Prizes</li>
<li>$250,000 in Random Prizes, awarded throughout the entire promotion</li>
</ul>
<ol start="3">
<li>Players earn leaderboard points in real-money cash games as follows: -1 point for every call or bet that results in a losing hand</li>
</ol>
<ul>
<li>2 points for every all-in that ends in a loss</li>
</ul>
<ol start="4">
<li>The leaderboard is divided into three separate limit groups:</li>
</ol>
<ul>
<li>Low limits: $0.10 &ndash; $0.50</li>
<li>Medium limits: $1 &ndash; $4</li>
<li>High limits: $10 &ndash; $20</li>
</ul>
<ol start="5">
<li>Awarded separately per stake level across the three rounds:</li>
</ol>
<ul>
<li>Low limits: $20,000 total</li>
<li>Medium limits: $50,000 total</li>
<li>High limits: $180,000 total</li>
<li>The $250,000 Random Prize Pool is distributed randomly among participating players</li>
</ul>
<ol start="6">
<li>Eligibility: The promotion is open to all eligible players who meet the platform&rsquo;s age and jurisdictional requirements.</li>
</ol>
<ol start="7">
<li>Leaderboard Updates: The leaderboard rankings are updated in real time, and players can track their positions via the game client or promotions page.</li>
</ol>
<ol start="8">
<li>General Terms: Gift from the Poker Gods: Cash Game Leaderboard promotion is subject to JackPoker&rsquo;s General Terms and Conditions. JackPoker reserves the right to modify, suspend, or cancel the promotion at any time.</li>
</ol>`})})]})}},m={args:{},render:e=>{const[r,o]=d.useState(),l=t=>{var s;o(t),(s=e.onExpandedChange)==null||s.call(e,t)},{Link:a}=de();return n.jsxs(i,{...e,onExpandedChange:l,expandedKeys:r,children:[n.jsx(i.Item,{id:"item-1",title:"Место для заголовка",variant:"secondary",children:n.jsx(b,{content:`## 1. Introduction
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
`})}),n.jsx(i.Item,{id:"item-2",title:"Например текст",variant:"secondary",children:"Content for Item 2"}),n.jsx(i.Item,{id:"item-3",title:n.jsx(a,{href:"/",children:"Или ссылка на главную"}),variant:"secondary",children:"Content for Item 3"})]})}},h={args:{},render:e=>{const[r,o]=d.useState(),l=a=>{var t;o(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsx(i,{...e,expandedKeys:r,onExpandedChange:l,children:n.jsx(i.Item,{id:"item-1",title:"Disabled",variant:"primary",isDisabled:!0,children:null})})}},f={args:{},render:e=>{const[r,o]=d.useState(new Set(["item-1"])),l=a=>{var t;o(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:l,expandedKeys:r,children:[n.jsx(i.Item,{id:"item-1",title:"500",variant:"primary",duration:500,children:"500ms"}),n.jsx(i.Item,{id:"item-2",title:"800",variant:"primary",duration:800,children:"800ms"}),n.jsx(i.Item,{id:"item-3",title:"1500",variant:"primary",duration:1500,children:"1500ms"})]})}},g={args:{},render:e=>{const[r,o]=d.useState(new Set(["item-1"])),l=a=>{var t;o(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:l,expandedKeys:r,children:[n.jsx(i.Item,{id:"item-1",title:"Grid with 2 columns",variant:"primary",p:{px:40},headingWrapper:a=>n.jsx(se,{gap:18,cols:2,children:a.children}),children:"500ms"}),n.jsx(i.Item,{id:"item-2",title:"Flex justify-content:center",variant:"primary",headingWrapper:a=>n.jsx(A,{gap:24,align:"center",justify:"center",flexDirection:"row",children:a.children}),children:"800ms"}),n.jsx(i.Item,{headingWrapper:a=>n.jsx(A,{gap:8,align:"end",children:a.children}),id:"item-3",title:"Flex align-items: end",variant:"primary",children:"1500ms"})]})}},y={render:()=>n.jsxs(i,{allowsMultipleExpanded:!0,children:[n.jsx(i.Item,{id:"item-1",title:"1",variant:"primary",children:"Content1"}),n.jsx(i.Item,{id:"item-2",title:"2",variant:"primary",children:"Content2"}),n.jsx(i.Item,{id:"item-3",title:"3",variant:"primary",children:"Content3"})]})};var K,S,T;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();
    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };
    return <Accordion {...args} onExpandedChange={handleExpandedChange} expandedKeys={expandedKeys}>
        <Accordion.Item id="item-1" title=" By using, visiting and/or accessing any part of the jack-poker.com website and/or registering ">
          <Text content="## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](https://jpws-cms-dev-test-test.jack-flush.com/assets/b9a18fab-c61b-440a-8878-cd9c8e57c4da.jpg?width=1240&amp;height=900)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
" />
        </Accordion.Item>
        <Accordion.Item id="item-2" title="Item 2">
          <Text content='<ol>
<li style="font-size: 18pt;"><span style="font-size: 18pt;">The Cash Game Leaderboard promotion runs from May 19th, 2025 to June 8th, 2025, spanning three weekly rounds.</span></li>
</ol>
<ol start="2">
<li style="font-size: 14pt;"><span style="font-size: 14pt;">The total prize pool is $1,000,000, split into:</span></li>
</ol>
<ul>
<li>$750,000 in Score-Based Leaderboard Prizes</li>
<li>$250,000 in Random Prizes, awarded throughout the entire promotion</li>
</ul>
<ol start="3">
<li>Players earn leaderboard points in real-money cash games as follows: -1 point for every call or bet that results in a losing hand</li>
</ol>
<ul>
<li>2 points for every all-in that ends in a loss</li>
</ul>
<ol start="4">
<li>The leaderboard is divided into three separate limit groups:</li>
</ol>
<ul>
<li>Low limits: $0.10 &ndash; $0.50</li>
<li>Medium limits: $1 &ndash; $4</li>
<li>High limits: $10 &ndash; $20</li>
</ul>
<ol start="5">
<li>Awarded separately per stake level across the three rounds:</li>
</ol>
<ul>
<li>Low limits: $20,000 total</li>
<li>Medium limits: $50,000 total</li>
<li>High limits: $180,000 total</li>
<li>The $250,000 Random Prize Pool is distributed randomly among participating players</li>
</ul>
<ol start="6">
<li>Eligibility: The promotion is open to all eligible players who meet the platform&rsquo;s age and jurisdictional requirements.</li>
</ol>
<ol start="7">
<li>Leaderboard Updates: The leaderboard rankings are updated in real time, and players can track their positions via the game client or promotions page.</li>
</ol>
<ol start="8">
<li>General Terms: Gift from the Poker Gods: Cash Game Leaderboard promotion is subject to JackPoker&rsquo;s General Terms and Conditions. JackPoker reserves the right to modify, suspend, or cancel the promotion at any time.</li>
</ol>' />
        </Accordion.Item>
        <Accordion.Item id="item-3" title="Item 3">
          <Text content={'<p><img src="https://jpws-cms-dev-test-test.jack-flush.com/assets/b9a18fab-c61b-440a-8878-cd9c8e57c4da.jpg?width=1240&amp;height=900" alt="Bg Slider Desktop" loading="lazy"></p>\\n' + "<ol>\\n" + '<li style="font-size: 18pt;"><span style="font-size: 18pt;">The Cash Game Leaderboard promotion runs from May 19th, 2025 to June 8th, 2025, spanning three weekly rounds.</span></li>\\n' + "</ol>\\n" + '<ol start="2">\\n' + '<li style="font-size: 14pt;"><span style="font-size: 14pt;">The total prize pool is $1,000,000, split into:</span></li>\\n' + "</ol>\\n" + "<ul>\\n" + "<li>$750,000 in Score-Based Leaderboard Prizes</li>\\n" + "<li>$250,000 in Random Prizes, awarded throughout the entire promotion</li>\\n" + "</ul>\\n" + '<ol start="3">\\n' + "<li>Players earn leaderboard points in real-money cash games as follows: -1 point for every call or bet that results in a losing hand</li>\\n" + "</ol>\\n" + "<ul>\\n" + "<li>2 points for every all-in that ends in a loss</li>\\n" + "</ul>\\n" + '<ol start="4">\\n' + "<li>The leaderboard is divided into three separate limit groups:</li>\\n" + "</ol>\\n" + "<ul>\\n" + "<li>Low limits: $0.10 &ndash; $0.50</li>\\n" + "<li>Medium limits: $1 &ndash; $4</li>\\n" + "<li>High limits: $10 &ndash; $20</li>\\n" + "</ul>\\n" + '<ol start="5">\\n' + "<li>Awarded separately per stake level across the three rounds:</li>\\n" + "</ol>\\n" + "<ul>\\n" + "<li>Low limits: $20,000 total</li>\\n" + "<li>Medium limits: $50,000 total</li>\\n" + "<li>High limits: $180,000 total</li>\\n" + "<li>The $250,000 Random Prize Pool is distributed randomly among participating players</li>\\n" + "</ul>\\n" + '<ol start="6">\\n' + "<li>Eligibility: The promotion is open to all eligible players who meet the platform&rsquo;s age and jurisdictional requirements.</li>\\n" + "</ol>\\n" + '<ol start="7">\\n' + "<li>Leaderboard Updates: The leaderboard rankings are updated in real time, and players can track their positions via the game client or promotions page.</li>\\n" + "</ol>\\n" + '<ol start="8">\\n' + "<li>General Terms: Gift from the Poker Gods: Cash Game Leaderboard promotion is subject to JackPoker&rsquo;s General Terms and Conditions. JackPoker reserves the right to modify, suspend, or cancel the promotion at any time.</li>\\n" + "</ol>"} />
        </Accordion.Item>
      </Accordion>;
  }
}`,...(T=(S=p.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var V,z,D;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var W,R,G;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(R=h.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var L,_,M;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(_=f.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var U,B,H;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var F,N,J;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return <Accordion allowsMultipleExpanded={true}>
        <Accordion.Item id="item-1" title="1" variant="primary">
          Content1
        </Accordion.Item>
        <Accordion.Item id="item-2" title="2" variant="primary">
          Content2
        </Accordion.Item>
        <Accordion.Item id="item-3" title="3" variant="primary">
          Content3
        </Accordion.Item>
      </Accordion>;
  }
}`,...(J=(N=y.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};const xe=["Default","SecondaryVariant","Disabled","CustomDurations","CustomHeadingWrapper","MultipleExpanded"],qe=Object.freeze(Object.defineProperty({__proto__:null,CustomDurations:f,CustomHeadingWrapper:g,Default:p,Disabled:h,MultipleExpanded:y,SecondaryVariant:m,__namedExportsOrder:xe,default:ye},Symbol.toStringTag,{value:"Module"}));export{f as C,p as D,m as S,h as a,g as b,qe as s};
