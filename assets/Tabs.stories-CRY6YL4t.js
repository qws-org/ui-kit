import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-D4lIrffr.js";import{B as c}from"./Box-CCqxjOYT.js";import{B as x}from"./Button-BqGQKWfW.js";import{C as M}from"./Container-CdrhJll-.js";import{f as F,a as C,d as $,b as O}from"./useFocusable-D8DZ0gut.js";import{$ as j}from"./useLabels-CiyqkEhI.js";import{$ as U}from"./context-AwJ7Bysb.js";import{e as W,f as L}from"./useSelectableItem-hE6E3-ha.js";import{$ as E}from"./useSingleSelectListState-CndHVQ32.js";import{F as H}from"./Flex-DJWhnznN.js";import{$ as G}from"./useHasTabbableChild-BRVyzT68.js";import{$ as J}from"./filterDOMProps-DievmF8q.js";import{$ as Q}from"./Item-Uk9RLypc.js";function X(i){var e,a;let t=E({...i,onSelectionChange:i.onSelectionChange?s=>{var d;s!=null&&((d=i.onSelectionChange)===null||d===void 0||d.call(i,s))}:void 0,suppressTextValueWarning:!0,defaultSelectedKey:(a=(e=i.defaultSelectedKey)!==null&&e!==void 0?e:S(i.collection,i.disabledKeys?new Set(i.disabledKeys):new Set))!==null&&a!==void 0?a:void 0}),{selectionManager:r,collection:l,selectedKey:u}=t,m=p.useRef(u);return p.useEffect(()=>{let s=u;i.selectedKey==null&&(r.isEmpty||s==null||!l.getItem(s))&&(s=S(l,t.disabledKeys),s!=null&&r.setSelectedKeys([s])),(s!=null&&r.focusedKey==null||!r.isFocused&&s!==m.current)&&r.setFocusedKey(s),m.current=s}),{...t,isDisabled:i.isDisabled||!1}}function S(i,e){let a=null;if(i){var t,r,l,u;for(a=i.getFirstKey();a!=null&&(e.has(a)||!((r=i.getItem(a))===null||r===void 0||(t=r.props)===null||t===void 0)&&t.isDisabled)&&a!==i.getLastKey();)a=i.getKeyAfter(a);a!=null&&(e.has(a)||!((u=i.getItem(a))===null||u===void 0||(l=u.props)===null||l===void 0)&&l.isDisabled)&&a===i.getLastKey()&&(a=i.getFirstKey())}return a}const w=new WeakMap;function h(i,e,a){return i?(typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${w.get(i)}-${a}-${e}`):""}function Y(i,e,a){let{key:t,isDisabled:r,shouldSelectOnPressUp:l}=i,{selectionManager:u,selectedKey:m}=e,s=t===m,d=r||e.isDisabled||e.selectionManager.isDisabled(t),{itemProps:v,isPressed:q}=W({selectionManager:u,key:t,ref:a,isDisabled:d,shouldSelectOnPressUp:l,linkBehavior:"selection"}),g=h(e,t,"tab"),B=h(e,t,"tabpanel"),{tabIndex:z}=v,f=e.collection.getItem(t),K=J(f==null?void 0:f.props,{labelable:!0});delete K.id;let N=F(f==null?void 0:f.props),{focusableProps:_}=C({isDisabled:d},a);return{tabProps:$(K,_,N,v,{id:g,"aria-selected":s,"aria-disabled":d||void 0,"aria-controls":s?B:void 0,tabIndex:d?void 0:z,role:"tab"}),isSelected:s,isDisabled:d,isPressed:q}}function Z(i,e,a){let t=G(a)?void 0:0;var r;const l=h(e,(r=i.id)!==null&&r!==void 0?r:e==null?void 0:e.selectedKey,"tabpanel"),u=j({...i,id:l,"aria-labelledby":h(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:$(u,{tabIndex:t,role:"tabpanel","aria-describedby":i["aria-describedby"],"aria-details":i["aria-details"]})}}class ee{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}isDisabled(e){var a,t;return this.disabledKeys.has(e)||!!(!((t=this.collection.getItem(e))===null||t===void 0||(a=t.props)===null||a===void 0)&&a.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getKeyAbove(e){return this.tabDirection?null:this.getPreviousKey(e)}getKeyBelow(e){return this.tabDirection?null:this.getNextKey(e)}getNextKey(e){let a=e;do a=this.collection.getKeyAfter(a),a==null&&(a=this.collection.getFirstKey());while(a!=null&&this.isDisabled(a));return a}getPreviousKey(e){let a=e;do a=this.collection.getKeyBefore(a),a==null&&(a=this.collection.getLastKey());while(a!=null&&this.isDisabled(a));return a}constructor(e,a,t,r=new Set){this.collection=e,this.flipDirection=a==="rtl"&&t==="horizontal",this.disabledKeys=r,this.tabDirection=t==="horizontal"}}function ae(i,e,a){let{orientation:t="horizontal",keyboardActivation:r="automatic"}=i,{collection:l,selectionManager:u,disabledKeys:m}=e,{direction:s}=U(),d=p.useMemo(()=>new ee(l,s,t,m),[l,m,t,s]),{collectionProps:v}=L({ref:a,selectionManager:u,keyboardDelegate:d,selectOnFocus:r==="automatic",disallowEmptySelection:!0,scrollRef:a,linkBehavior:"selection"}),q=O();w.set(e,q);let g=j({...i,id:q});return{tabListProps:{...$(v,g),role:"tablist","aria-orientation":t,tabIndex:void 0}}}function T({state:i}){var t;const e=p.useRef(null),{tabPanelProps:a}=Z({},i,e);return n.jsx("div",{...a,ref:e,className:"w-full",children:(t=i.selectedItem)==null?void 0:t.props.children})}try{T.displayName="Panel",T.__docgenInfo={description:"",displayName:"Panel",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"TabListState<unknown>"}}}}}catch{}const P=function({item:i,state:e}){const{key:a,rendered:t}=i,r=p.useRef(null),{tabProps:l}=Y({key:a},e,r);return n.jsx("div",{...l,ref:r,className:"cursor-pointer",children:t})};try{P.displayName="Tab",P.__docgenInfo={description:"",displayName:"Tab",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Node<T>"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"TabListState<T>"}}}}}catch{}const o=function(i){var r;const e=X(i),a=p.useRef(null),{tabListProps:t}=ae(i,e,a);return n.jsxs(c,{...i,width:(i==null?void 0:i.width)??"100%",children:[n.jsx(H,{...t,style:{...t.style},justify:"center",className:"overflow-x-auto",ref:a,p:4,gap:6,children:[...e.collection].map(l=>n.jsx(P,{item:l,state:e},l.key))}),n.jsx(T,{state:e},(r=e.selectedItem)==null?void 0:r.key)]})};o.Item=Q;try{o.displayName="Tabs",o.__docgenInfo={description:"",displayName:"Tabs",props:{bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},bgSize:{defaultValue:null,description:"",name:"bgSize",required:!1,type:{name:"enum",value:[{value:'"cover"'},{value:'"contain"'},{value:'"auto"'}]}},bgRepeat:{defaultValue:null,description:"",name:"bgRepeat",required:!1,type:{name:"enum",value:[{value:'"no-repeat"'},{value:'"repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"repeat-round"'},{value:'"repeat-space"'}]}},bgPosition:{defaultValue:null,description:"",name:"bgPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-top"'}]}},groupParent:{defaultValue:null,description:"",name:"groupParent",required:!1,type:{name:"boolean"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"table"'},{value:'"block"'},{value:'"hidden"'},{value:'"inline"'},{value:'"inline-block"'},{value:'"flex"'},{value:'"inline-flex"'},{value:'"table-cell"'},{value:'"grid"'}]}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"any"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"any"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'{ type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit"; top?: PositionValue; left?: PositionValue | undefined; right?: PositionValue | undefined; bottom?: PositionValue | undefined; zIndex?: number | undefined; } | undefined'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"string"}},outlineWidth:{defaultValue:null,description:"",name:"outlineWidth",required:!1,type:{name:"string"}},outlineOffset:{defaultValue:null,description:"",name:"outlineOffset",required:!1,type:{name:"string"}},outlineStyle:{defaultValue:null,description:"",name:"outlineStyle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},textShadow:{defaultValue:null,description:"",name:"textShadow",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"number | keyof FontSize"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"number | keyof FontWeight"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"number | keyof LineHeight"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'},{value:'"normal-case"'}]}},textDecoration:{defaultValue:null,description:"",name:"textDecoration",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"line-through"'},{value:'"overline"'},{value:'"no-underline"'}]}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"ellipsis"'},{value:'"clip"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"pre"'},{value:'"nowrap"'},{value:'"pre-line"'},{value:'"pre-wrap"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"UiKitBorderProps"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:'(Omit<UiKitBackgroundProps, "groupParent"> & UiKitOutlineProps & UiKitEffectProps & UiKitTypographyProps & { ...; })'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 5 more ... & { ...; }>, "bgGroup">'}},d:{defaultValue:null,description:"",name:"d",required:!1,type:{name:'Omit<Partial<UIKitIndentationsProps & UiKitPositionProps & UIKitDimensionProps & UiKitDisplayProps & ... 5 more ... & { ...; }>, "bgGroup">'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<any, MouseEvent>) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"(CSSProperties & Record<string, string | number>)"}},selectedKey:{defaultValue:null,description:"",name:"selectedKey",required:!1,type:{name:"string | number"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!1,type:{name:"((selectedItem: T) => void)"}}}}}catch{}const ie={title:"UI-Kit components/Tabs",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},b={decorators:[i=>n.jsx(M,{className:"w-[700px]",children:n.jsx(i,{})})],args:{},render:()=>n.jsxs(o,{"aria-label":"History of Ancient Rome",children:[n.jsx(o.Item,{title:"Tab 1",children:n.jsx(c,{p:10,children:"Senatus Populusque Romanus. asdasd 12132131231231231231 Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. |"})},"FoR"),n.jsx(o.Item,{title:"Tab 2",children:n.jsx(c,{p:10,children:"Senatus Populusque Romanus. "})},"MaR"),n.jsx(o.Item,{title:"Tab 3",children:n.jsxs(c,{p:10,children:["Senatus Populusque Romanus. Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. |eeee Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. |"," "]})},"Emp")]})},y={...b,render(){const[i,e]=p.useState("MaR");return n.jsxs(o,{"aria-label":"History of Ancient Rome",selectedKey:i,children:[n.jsx(o.Item,{title:n.jsx(x,{variant:"secondary",size:"xsmall",md:{size:"small",p:{px:24,py:8}},className:"rounded",isActive:i==="FoR",onPress:()=>{e("FoR")},children:"Tab 1 state"}),children:n.jsx(c,{p:10,children:"Senatus Populusque Romanus. asdasd 12132131231231231231 Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. |"})},"FoR"),n.jsx(o.Item,{title:n.jsx(x,{variant:"secondary",size:"xsmall",className:"rounded",isActive:i==="MaR",md:{size:"small",p:{px:24,py:8}},onPress:()=>{e("MaR")},children:"Tab 2 state"}),children:n.jsx(c,{p:10,children:"Senatus Populusque Romanus. Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. | asdasdas asdasd 2121211 alskdmlaskdmlasknd asd | Arma virumque cano, Troiae qui primus ab oris. | asdasdas asdasd 2121211 alskdmlaskdmlasknd asd a sdasdasdasdasds ss 2121211 alskdmlaskdmlasknd asd a sdasdasdasdasds ss"})},"MaR"),n.jsx(o.Item,{title:n.jsx(x,{variant:"secondary",isDisabled:!0,size:"xsmall",md:{size:"small",p:{px:24,py:8}},className:"rounded",children:"Tab disabled"}),children:n.jsx(c,{p:10,children:"Senatus Populusque Romanus. "})},"Rak")]})}};var A,V,k;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [Story => {
    return <Container className={"w-[700px]"}>
          <Story />
        </Container>;
  }],
  args: {},
  render: () => {
    return <Tabs aria-label="History of Ancient Rome">
        <Tabs.Item key="FoR" title="Tab 1">
          <Box p={10}>
            Senatus Populusque Romanus. asdasd 12132131231231231231 Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus
            ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. |
          </Box>
        </Tabs.Item>
        <Tabs.Item key="MaR" title="Tab 2">
          <Box p={10}>Senatus Populusque Romanus. </Box>
        </Tabs.Item>
        <Tabs.Item key="Emp" title="Tab 3">
          <Box p={10}>
            Senatus Populusque Romanus. Arma virumque cano, Troiae qui primus ab
            oris. | Arma virumque cano, Troiae qui primus ab oris. |eeee Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus
            ab oris. |{" "}
          </Box>
        </Tabs.Item>
      </Tabs>;
  }
}`,...(k=(V=b.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var R,I,D;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  render() {
    const [state, setState] = useState<string>("MaR");
    return <Tabs aria-label="History of Ancient Rome" selectedKey={state}>
        <Tabs.Item key="FoR" title={<Button variant="secondary" size="xsmall" md={{
        size: "small",
        p: {
          px: 24,
          py: 8
        }
      }} className={\`rounded\`} isActive={state === "FoR"} onPress={() => {
        setState("FoR");
      }}>
              Tab 1 state
            </Button>}>
          <Box p={10}>
            Senatus Populusque Romanus. asdasd 12132131231231231231 Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus
            ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. |
          </Box>
        </Tabs.Item>
        <Tabs.Item key="MaR" title={<Button variant="secondary" size="xsmall" className={\`rounded\`} isActive={state === "MaR"} md={{
        size: "small",
        p: {
          px: 24,
          py: 8
        }
      }} onPress={() => {
        setState("MaR");
      }}>
              Tab 2 state
            </Button>}>
          <Box p={10}>
            Senatus Populusque Romanus. Troiae qui primus ab oris. | Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. | asdasdas asdasd 2121211
            alskdmlaskdmlasknd asd | Arma virumque cano, Troiae qui primus ab
            oris. | asdasdas asdasd 2121211 alskdmlaskdmlasknd asd a
            sdasdasdasdasds ss 2121211 alskdmlaskdmlasknd asd a sdasdasdasdasds
            ss
          </Box>
        </Tabs.Item>
        <Tabs.Item key="Rak" title={<Button variant="secondary" isDisabled={true} size="xsmall" md={{
        size: "small",
        p: {
          px: 24,
          py: 8
        }
      }} className={\`rounded\`}>
              Tab disabled
            </Button>}>
          <Box p={10}>Senatus Populusque Romanus. </Box>
        </Tabs.Item>
      </Tabs>;
  }
}`,...(D=(I=y.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const te=["Default","WithControlledState"],qe=Object.freeze(Object.defineProperty({__proto__:null,Default:b,WithControlledState:y,__namedExportsOrder:te,default:ie},Symbol.toStringTag,{value:"Module"}));export{b as D,y as W,qe as s};
