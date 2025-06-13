import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as d}from"./index-D4lIrffr.js";import{$ as Z}from"./useFocusRing-Cjk9jXmb.js";import{c as ee,$ as ne}from"./mergeProps-GaW3dV0e.js";import{c as M}from"./index-DW2zCSF8.js";import{B as k}from"./Box-DDJXXdIg.js";import{F as w}from"./Flex-DkManfot.js";import{$ as U}from"./useControlledState-YrJM5BK_.js";import{G as te}from"./Grid-BrT_Vj2A.js";import{T as x}from"./Text-CPt9xDgH.js";import{u as ae}from"./useUiKitComponents-DIX1Mu9T.js";function ie(e){let[o,i]=U(e.isExpanded,e.defaultExpanded||!1,e.onExpandedChange);const s=u.useCallback(()=>{i(!0)},[i]),t=u.useCallback(()=>{i(!1)},[i]),a=u.useCallback(()=>{i(!o)},[i,o]);return{isExpanded:o,setExpanded:i,expand:s,collapse:t,toggle:a}}function re(e){let{allowsMultipleExpanded:o=!1,isDisabled:i=!1}=e,[s,t]=U(u.useMemo(()=>e.expandedKeys?new Set(e.expandedKeys):void 0,[e.expandedKeys]),u.useMemo(()=>e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,[e.defaultExpandedKeys]),e.onExpandedChange);return u.useEffect(()=>{if(!o&&s.size>1){let a=s.values().next().value;a!=null&&t(new Set([a]))}}),{allowsMultipleExpanded:o,isDisabled:i,expandedKeys:s,setExpandedKeys:t,toggleKey(a){let l;o?(l=new Set(s),l.has(a)?l.delete(a):l.add(a)):l=new Set(s.has(a)?[]:[a]),t(l)}}}const oe=e=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:n.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",clipRule:"evenodd"})});try{ArrowRight.displayName="ArrowRight",ArrowRight.__docgenInfo={description:"",displayName:"ArrowRight",props:{}}}catch{}const se=M({base:"transition-transform cursor-pointer ",variants:{variant:{primary:"bg-[var(--colors-surface-neutral-default)]",secondary:""},isDisabled:{true:"cursor-default",false:""}},defaultVariants:{isExpanded:!1,variant:"primary"}}),le=M({base:"transition-transform  ",variants:{variant:{primary:"",secondary:""},isExpanded:{true:"",false:""}},compoundVariants:[{variant:"primary",isExpanded:!0,class:"-rotate-90"},{variant:"primary",isExpanded:!1,class:"rotate-0"},{variant:"secondary",isExpanded:!0,class:"-rotate-90"},{variant:"secondary",isExpanded:!1,class:"rotate-90"}],defaultVariants:{variant:"primary",isExpanded:!1}}),de=e=>n.jsx(w,{justify:"space-between",align:"center",p:0,m:0,children:e.children}),ce=[24,24,24,24],E=e=>{var C;const{id:o,title:i,children:s,isExpanded:t,isDisabled:a,onToggle:l,variant:A="primary",className:B,headingWrapper:H,duration:v=500}=e,F=ee(),I=o??F,c=d.useContext(b),y=c?(C=c.expandedKeys)==null?void 0:C.has(I):t,N=ie({isExpanded:y,onExpandedChange:X=>{c&&c.toggleKey(I),l==null||l(X)}}),J=d.useRef(null),Y=a??(c==null?void 0:c.isDisabled)??!1,{focusProps:O}=Z(),Q=H??de;return n.jsxs(n.Fragment,{children:[n.jsx(k,{width:"100%",className:se({variant:A,className:`${B??""}`,isDisabled:Y}),style:{transitionDuration:`${v}ms`},...ne(e,O),onClick:()=>{N.toggle()},p:e.p??ce,children:n.jsxs(Q,{children:[n.jsx(n.Fragment,{children:i}),n.jsx(oe,{className:le({isExpanded:y,variant:A}),style:{transitionDuration:`${v}ms`,minWidth:"24px"}})]})}),n.jsx(k,{maxHeight:y?"max-content":0,ref:J,opacity:y?100:0,className:"overflow-hidden transition-all ease-in-out ",style:{transitionDuration:`${v}ms`},children:s})]})};try{E.displayName="AccordionItem",E.__docgenInfo={description:"",displayName:"AccordionItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isExpanded: boolean) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},headingWrapper:{defaultValue:null,description:"",name:"headingWrapper",required:!1,type:{name:"HeadingWrapper"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"string | number"}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string | number"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"ellipsis"'},{value:'"clip"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"pre"'},{value:'"pre-line"'},{value:'"pre-wrap"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitTypographyProps & { ...; })'}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 5 more ... & { ...; }>, "bgGroup">'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 5 more ... & { ...; }>, "bgGroup">'}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}}}}}catch{}const b=d.createContext(null),r=({children:e,...o})=>{const i=re(o);return n.jsx(n.Fragment,{children:n.jsx(b.Provider,{value:i,children:e})})};r.Item=E;try{b.displayName="AccordionContext",b.__docgenInfo={description:"",displayName:"AccordionContext",props:{}}}catch{}try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{expandedKeys:{defaultValue:null,description:"",name:"expandedKeys",required:!1,type:{name:"Set<ID>"}},onExpandedChange:{defaultValue:null,description:"",name:"onExpandedChange",required:!1,type:{name:"((keys: Set<ID>) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const ue={title:"UI-Kit components/Accordion",component:r,argTypes:{expandedKeys:{control:"object",description:"Набор ключей открытых элементов"},onExpandedChange:{action:"onExpandedChange",description:"Событие изменения состояния открытия элементов"},isDisabled:{control:"boolean",description:"Флаг для отключения всех элементов"}}},p={args:{},render:e=>{const[o,i]=d.useState(),s=t=>{var a;i(t),(a=e.onExpandedChange)==null||a.call(e,t)};return n.jsxs(r,{...e,onExpandedChange:s,expandedKeys:o,children:[n.jsx(r.Item,{id:"item-1",title:" By using, visiting and/or accessing any part of the jack-poker.com website and/or registering ",children:n.jsx(x,{content:`## 1. Introduction
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
`})}),n.jsx(r.Item,{id:"item-2",title:"Item 2",children:n.jsx(x,{content:`<ol>
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
</ol>`})}),n.jsx(r.Item,{id:"item-3",title:"Item 3",children:n.jsx(x,{content:`<p><img src="https://jpws-cms-dev-test-test.jack-flush.com/assets/b9a18fab-c61b-440a-8878-cd9c8e57c4da.jpg?width=1240&amp;height=900" alt="Bg Slider Desktop" loading="lazy"></p>
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
</ol>`})})]})}},m={args:{},render:e=>{const[o,i]=d.useState(),s=a=>{var l;i(a),(l=e.onExpandedChange)==null||l.call(e,a)},{Link:t}=ae();return n.jsxs(r,{...e,onExpandedChange:s,expandedKeys:o,children:[n.jsx(r.Item,{id:"item-1",title:"Место для заголовка",variant:"secondary",children:n.jsx(x,{content:`## 1. Introduction
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
`})}),n.jsx(r.Item,{id:"item-2",title:"Например текст",variant:"secondary",children:"Content for Item 2"}),n.jsx(r.Item,{id:"item-3",title:n.jsx(t,{href:"/",children:"Или ссылка на главную"}),variant:"secondary",children:"Content for Item 3"})]})}},h={args:{},render:e=>{const[o,i]=d.useState(),s=t=>{var a;i(t),(a=e.onExpandedChange)==null||a.call(e,t)};return n.jsx(r,{...e,expandedKeys:o,onExpandedChange:s,children:n.jsx(r.Item,{id:"item-1",title:"Disabled",variant:"primary",isDisabled:!0,children:null})})}},g={args:{},render:e=>{const[o,i]=d.useState(new Set(["item-1"])),s=t=>{var a;i(t),(a=e.onExpandedChange)==null||a.call(e,t)};return n.jsxs(r,{...e,onExpandedChange:s,expandedKeys:o,children:[n.jsx(r.Item,{id:"item-1",title:"500",variant:"primary",duration:500,children:"500ms"}),n.jsx(r.Item,{id:"item-2",title:"800",variant:"primary",duration:800,children:"800ms"}),n.jsx(r.Item,{id:"item-3",title:"1500",variant:"primary",duration:1500,children:"1500ms"})]})}},f={args:{},render:e=>{const[o,i]=d.useState(new Set(["item-1"])),s=t=>{var a;i(t),(a=e.onExpandedChange)==null||a.call(e,t)};return n.jsxs(r,{...e,onExpandedChange:s,expandedKeys:o,children:[n.jsx(r.Item,{id:"item-1",title:"Grid with 2 columns",variant:"primary",p:{px:40},headingWrapper:t=>n.jsx(te,{gap:18,cols:2,children:t.children}),children:"500ms"}),n.jsx(r.Item,{id:"item-2",title:"Flex justify-content:center",variant:"primary",headingWrapper:t=>n.jsx(w,{gap:24,align:"center",justify:"center",flexDirection:"row",children:t.children}),children:"800ms"}),n.jsx(r.Item,{headingWrapper:t=>n.jsx(w,{gap:8,align:"end",children:t.children}),id:"item-3",title:"Flex align-items: end",variant:"primary",children:"1500ms"})]})}};var $,j,P;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(j=p.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var S,K,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(K=m.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var q,V,D;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(V=h.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var W,z,R;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(z=g.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var _,G,L;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(G=f.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const pe=["Default","SecondaryVariant","Disabled","CustomDurations","CustomHeadingWrapper"],Ie=Object.freeze(Object.defineProperty({__proto__:null,CustomDurations:g,CustomHeadingWrapper:f,Default:p,Disabled:h,SecondaryVariant:m,__namedExportsOrder:pe,default:ue},Symbol.toStringTag,{value:"Module"}));export{g as C,p as D,m as S,h as a,f as b,Ie as s};
