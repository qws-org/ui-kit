import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as d}from"./index-D4lIrffr.js";import{c as O}from"./index-DW2zCSF8.js";import{B as K}from"./Box-6kaav-hc.js";import{F as C}from"./Flex-C7UOgSUL.js";import{l as re,k as oe}from"./useFocus-CQXXRA8U.js";import{$ as Q}from"./useControlledState-YrJM5BK_.js";import{$ as se}from"./useFocusRing-DrLnOQ8w.js";import{G as le}from"./Grid-CW2WW8i1.js";import{T as b}from"./Text-r_YyQiuA.js";import{u as de}from"./useUiKitComponents-DIX1Mu9T.js";function ce(e){let[r,o]=Q(e.isExpanded,e.defaultExpanded||!1,e.onExpandedChange);const s=u.useCallback(()=>{o(!0)},[o]),a=u.useCallback(()=>{o(!1)},[o]),t=u.useCallback(()=>{o(!r)},[o,r]);return{isExpanded:r,setExpanded:o,expand:s,collapse:a,toggle:t}}function ue(e){let{allowsMultipleExpanded:r=!1,isDisabled:o=!1}=e,[s,a]=Q(u.useMemo(()=>e.expandedKeys?new Set(e.expandedKeys):void 0,[e.expandedKeys]),u.useMemo(()=>e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,[e.defaultExpandedKeys]),e.onExpandedChange);return u.useEffect(()=>{if(!r&&s.size>1){let t=s.values().next().value;t!=null&&a(new Set([t]))}}),{allowsMultipleExpanded:r,isDisabled:o,expandedKeys:s,setExpandedKeys:a,toggleKey(t){let l;r?(l=new Set(s),l.has(t)?l.delete(t):l.add(t)):l=new Set(s.has(t)?[]:[t]),a(l)}}}const pe=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:n.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",clipRule:"evenodd"})});try{ArrowRight.displayName="ArrowRight",ArrowRight.__docgenInfo={description:"",displayName:"ArrowRight",props:{}}}catch{}const me=O({base:"transition-transform cursor-pointer ",variants:{variant:{primary:"bg-[var(--colors-surface-neutral-default)]",secondary:""},isDisabled:{true:"cursor-default",false:""}},defaultVariants:{isExpanded:!1,variant:"primary"}}),he=O({base:"transition-transform  ",variants:{variant:{primary:"",secondary:""},isExpanded:{true:"",false:""}},compoundVariants:[{variant:"primary",isExpanded:!0,class:"-rotate-90"},{variant:"primary",isExpanded:!1,class:"rotate-0"},{variant:"secondary",isExpanded:!0,class:"-rotate-90"},{variant:"secondary",isExpanded:!1,class:"rotate-90"}],defaultVariants:{variant:"primary",isExpanded:!1}}),fe=e=>n.jsx(C,{justify:"space-between",align:"center",p:0,m:0,children:e.children}),ge=[24,24,24,24],I=e=>{var $,P,S;const{id:r,title:o,children:s,isExpanded:a,isDisabled:t,onToggle:l,variant:j="primary",className:w,headingWrapper:E,duration:A=500}=e,X=re(),k=r!=null?r:X,c=d.useContext(v),x=c?($=c.expandedKeys)==null?void 0:$.has(k):a,Z=ce({isExpanded:x,onExpandedChange:ie=>{c&&c.toggleKey(k),l==null||l(ie)}}),ee=d.useRef(null),ne=(P=t!=null?t:c==null?void 0:c.isDisabled)!=null?P:!1,{focusProps:te}=se(),ae=E!=null?E:fe;return n.jsxs(n.Fragment,{children:[n.jsx(K,{width:"100%",className:me({variant:j,className:`${w!=null?w:""}`,isDisabled:ne}),style:{transitionDuration:`${A}ms`},...oe(e,te),onClick:()=>{Z.toggle()},p:(S=e.p)!=null?S:ge,children:n.jsxs(ae,{children:[n.jsx(n.Fragment,{children:o}),n.jsx(pe,{className:he({isExpanded:x,variant:j}),style:{transitionDuration:`${A}ms`,minWidth:"24px"}})]})}),n.jsx(K,{maxHeight:x?"max-content":0,ref:ee,opacity:x?100:0,className:"overflow-hidden transition-all ease-in-out ",style:{transitionDuration:`${A}ms`},children:s})]})};try{I.displayName="AccordionItem",I.__docgenInfo={description:"",displayName:"AccordionItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isExpanded: boolean) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},headingWrapper:{defaultValue:null,description:"",name:"headingWrapper",required:!1,type:{name:"HeadingWrapper"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"string | number"}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"visible"'},{value:'"hidden"'},{value:'"scroll"'},{value:'"clip"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"clip"'},{value:'"ellipsis"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"pre"'},{value:'"pre-line"'},{value:'"pre-wrap"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitTypographyProps & { ...; })'}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 5 more ... & { ...; }>, "bgGroup">'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 5 more ... & { ...; }>, "bgGroup">'}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}}}}}catch{}const v=d.createContext(null),i=({children:e,...r})=>{const o=ue(r);return n.jsx(n.Fragment,{children:n.jsx(v.Provider,{value:o,children:e})})};i.Item=I;try{v.displayName="AccordionContext",v.__docgenInfo={description:"",displayName:"AccordionContext",props:{}}}catch{}try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{expandedKeys:{defaultValue:null,description:"",name:"expandedKeys",required:!1,type:{name:"Set<ID>"}},onExpandedChange:{defaultValue:null,description:"",name:"onExpandedChange",required:!1,type:{name:"((keys: Set<ID>) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},allowsMultipleExpanded:{defaultValue:null,description:"",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}}}}}catch{}const ye={title:"UI-Kit components/Accordion",component:i,argTypes:{expandedKeys:{control:"object",description:"Набор ключей открытых элементов"},onExpandedChange:{action:"onExpandedChange",description:"Событие изменения состояния открытия элементов"},isDisabled:{control:"boolean",description:"Флаг для отключения всех элементов"}}},p={args:{},render:e=>{const[r,o]=d.useState(),s=a=>{var t;o(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:s,expandedKeys:r,children:[n.jsx(i.Item,{id:"item-1",title:" By using, visiting and/or accessing any part of the jack-poker.com website and/or registering ",children:n.jsx(b,{content:`## 1. Introduction
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
</ol>`})})]})}},m={args:{},render:e=>{const[r,o]=d.useState(),s=t=>{var l;o(t),(l=e.onExpandedChange)==null||l.call(e,t)},{Link:a}=de();return n.jsxs(i,{...e,onExpandedChange:s,expandedKeys:r,children:[n.jsx(i.Item,{id:"item-1",title:"Место для заголовка",variant:"secondary",children:n.jsx(b,{content:`## 1. Introduction
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
`})}),n.jsx(i.Item,{id:"item-2",title:"Например текст",variant:"secondary",children:"Content for Item 2"}),n.jsx(i.Item,{id:"item-3",title:n.jsx(a,{href:"/",children:"Или ссылка на главную"}),variant:"secondary",children:"Content for Item 3"})]})}},h={args:{},render:e=>{const[r,o]=d.useState(),s=a=>{var t;o(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsx(i,{...e,expandedKeys:r,onExpandedChange:s,children:n.jsx(i.Item,{id:"item-1",title:"Disabled",variant:"primary",isDisabled:!0,children:null})})}},f={args:{},render:e=>{const[r,o]=d.useState(new Set(["item-1"])),s=a=>{var t;o(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:s,expandedKeys:r,children:[n.jsx(i.Item,{id:"item-1",title:"500",variant:"primary",duration:500,children:"500ms"}),n.jsx(i.Item,{id:"item-2",title:"800",variant:"primary",duration:800,children:"800ms"}),n.jsx(i.Item,{id:"item-3",title:"1500",variant:"primary",duration:1500,children:"1500ms"})]})}},g={args:{},render:e=>{const[r,o]=d.useState(new Set(["item-1"])),s=a=>{var t;o(a),(t=e.onExpandedChange)==null||t.call(e,a)};return n.jsxs(i,{...e,onExpandedChange:s,expandedKeys:r,children:[n.jsx(i.Item,{id:"item-1",title:"Grid with 2 columns",variant:"primary",p:{px:40},headingWrapper:a=>n.jsx(le,{gap:18,cols:2,children:a.children}),children:"500ms"}),n.jsx(i.Item,{id:"item-2",title:"Flex justify-content:center",variant:"primary",headingWrapper:a=>n.jsx(C,{gap:24,align:"center",justify:"center",flexDirection:"row",children:a.children}),children:"800ms"}),n.jsx(i.Item,{headingWrapper:a=>n.jsx(C,{gap:8,align:"end",children:a.children}),id:"item-3",title:"Flex align-items: end",variant:"primary",children:"1500ms"})]})}},y={render:()=>n.jsxs(i,{allowsMultipleExpanded:!0,children:[n.jsx(i.Item,{id:"item-1",title:"1",variant:"primary",children:"Content1"}),n.jsx(i.Item,{id:"item-2",title:"2",variant:"primary",children:"Content2"}),n.jsx(i.Item,{id:"item-3",title:"3",variant:"primary",children:"Content3"})]})};var q,T,V;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,W,z;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(W=m.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var R,_,G;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(_=h.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var L,M,U;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(M=f.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var B,H,F;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(H=g.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var N,J,Y;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Y=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};const xe=["Default","SecondaryVariant","Disabled","CustomDurations","CustomHeadingWrapper","MultipleExpanded"],Se=Object.freeze(Object.defineProperty({__proto__:null,CustomDurations:f,CustomHeadingWrapper:g,Default:p,Disabled:h,MultipleExpanded:y,SecondaryVariant:m,__namedExportsOrder:xe,default:ye},Symbol.toStringTag,{value:"Module"}));export{f as C,p as D,m as S,h as a,g as b,Se as s};
