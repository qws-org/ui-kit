import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as G}from"./Button-Cky82kFv.js";import"./useUiKitTheme-BAQBC71h.js";import{P as H}from"./Popover-CsK6VvMQ.js";import{r as y,R as d}from"./index-D4H_InIO.js";import{$ as L,a as Q,b as Y}from"./UIKitOverlay-AfJ5H8c6.js";import{n as Z}from"./useFocus-CgYBR30T.js";import{c as O,b as ee}from"./useFocusable-C_0kSj5S.js";import"./useButton-BW3PNPly.js";import"./useUiKitComponents-Cpk-WV-T.js";import"./context-BAxB0ZoE.js";import"./useLabels-BjMgE2Wj.js";import"./useLocalizedStringFormatter-_Pjder9J.js";import"./VisuallyHidden-CsyuHRxB.js";import"./useFocusWithin-DR07ZYpu.js";import"./useControlledState-Dxxc-Ijj.js";import"./FocusScope-rs3O88_f.js";import"./getScrollParent-hNI_q5fK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";function te(t,o){let{role:i="dialog"}=t,a=Z();a=t["aria-label"]?void 0:a;let s=y.useRef(!1);return y.useEffect(()=>{if(o.current&&!o.current.contains(document.activeElement)){O(o.current);let l=setTimeout(()=>{(document.activeElement===o.current||document.activeElement===document.body)&&(s.current=!0,o.current&&(o.current.blur(),O(o.current)),s.current=!1)},500);return()=>{clearTimeout(l)}}},[o]),L(),{dialogProps:{...ee(t,{labelable:!0}),role:i,tabIndex:-1,"aria-labelledby":t["aria-labelledby"]||a,onBlur:l=>{s.current&&l.stopPropagation()}},titleProps:{id:a}}}const r=({placement:t="bottom",label:o,children:i,customTrigger:a,customPopover:s,...l})=>{const c=y.useRef(null),p=Q(l),{triggerProps:x,overlayProps:T}=Y({type:"dialog"},p);return e.jsxs(e.Fragment,{children:[a?d.cloneElement(a,{ref:c,...x,onClick:x.onPress}):e.jsx(G,{ref:c,...x,children:o}),p.isOpen&&(s?d.cloneElement(s(c,p),{children:d.cloneElement(i,T)}):e.jsx(H,{triggerRef:c,state:p,placement:t,...l,children:d.cloneElement(i,T)}))]})};try{r.displayName="PopoverTrigger",r.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},customTrigger:{defaultValue:null,description:"",name:"customTrigger",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},customPopover:{defaultValue:null,description:"",name:"customPopover",required:!1,type:{name:"((ref: RefObject<null>, state: OverlayTriggerState) => ReactElement<any, string | JSXElementConstructor<any>>)"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},crossOffset:{defaultValue:null,description:"",name:"crossOffset",required:!1,type:{name:"number"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"end"'},{value:'"start"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!1,type:{name:"Element"}}}}}catch{}const n=({title:t,children:o,dialogStyle:i,...a})=>{const s=y.useRef(null),{dialogProps:l,titleProps:c}=te(a,s);return e.jsxs("div",{...l,ref:s,className:"p-8",style:i,children:[t&&e.jsx("h3",{...c,className:"mt-0",children:t}),o]})};try{n.displayName="Dialog",n.__docgenInfo={description:"",displayName:"Dialog",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},dialogStyle:{defaultValue:null,description:"",name:"dialogStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Te={title:"UI-Kit components/Popover",component:r,tags:["autodocs"],argTypes:{label:{description:"Текст, который будет отображаться на кнопке, открывающей поповер.",control:{type:"text"}},placement:{description:"Позиция поповера относительно триггера. Возможные значения: 'top', 'bottom', 'left', 'right', а также 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'.",control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],defaultValue:"bottom"},offset:{description:"Смещение поповера относительно его якорного элемента вдоль основной оси. Этот проп определяет расстояние между поповером и элементом-триггером.",control:{type:"number"}},crossOffset:{description:"Смещение поповера относительно его якорного элемента вдоль крестовой оси. Этот проп определяет дополнительное расстояние между поповером и триггером по перпендикулярной оси.",control:{type:"number"}},children:{description:"Дочерний элемент, который будет отображаться внутри поповера."}}},m={render:()=>e.jsx(r,{label:"Open Popover",children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover."})})},u={render:()=>e.jsx(r,{label:"Open Popover (Custom)",placement:"top end",children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover with custom placement."})})},f={render:()=>e.jsx(r,{label:"Open Popover (Offset)",placement:"bottom end",offset:50,children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover with offset placement."})})},g={render:()=>e.jsx(r,{label:"Open Popover (Cross Offset)",placement:"bottom",crossOffset:20,children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover with cross offset placement."})})},v={render:()=>e.jsx(r,{label:"Open Popover (Offset + Cross Offset)",placement:"top end",offset:40,crossOffset:30,children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover with combined offsets."})})},h={render:()=>e.jsx(r,{placement:"top end",label:"asd",customTrigger:e.jsx("button",{children:"Custom trigger"}),children:e.jsx(n,{dialogStyle:{padding:"8px 12px"},children:"Custom trigger content"})})},b={render:()=>e.jsx("div",{className:"w-full h-screen flex items-center justify-center",children:e.jsx(r,{label:"Click",placement:"top",customPopover:(t,o)=>e.jsx(H,{bg:"red",md:{placement:"right"},triggerRef:t,state:o}),children:e.jsx(n,{children:"Media placement"})})})},P={render:()=>{var t;return e.jsx(r,{label:"",customTrigger:e.jsx(G,{variant:"primary",children:'Should open modal inside "storybook-root"'}),portalContainer:(t=document.getElementById("storybook-root"))!=null?t:void 0,children:e.jsx(n,{dialogStyle:{backgroundColor:"red"},children:"Custom root placement"})})}};var C,j,$;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover">
      <Dialog title="Popover title">This is the content of the popover.</Dialog>
    </PopoverTrigger>
}`,...($=(j=m.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var D,S,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover (Custom)" placement="top end">
      <Dialog title="Popover title">
        This is the content of the popover with custom placement.
      </Dialog>
    </PopoverTrigger>
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var _,R,w;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover (Offset)" placement="bottom end" offset={50}>
      <Dialog title="Popover title">
        This is the content of the popover with offset placement.
      </Dialog>
    </PopoverTrigger>
}`,...(w=(R=f.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var V,k,q;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover (Cross Offset)" placement="bottom" crossOffset={20}>
      <Dialog title="Popover title">
        This is the content of the popover with cross offset placement.
      </Dialog>
    </PopoverTrigger>
}`,...(q=(k=g.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var N,B,I;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover (Offset + Cross Offset)" placement="top end" offset={40} crossOffset={30}>
      <Dialog title="Popover title">
        This is the content of the popover with combined offsets.
      </Dialog>
    </PopoverTrigger>
}`,...(I=(B=v.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var M,A,J;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <PopoverTrigger placement="top end" label="asd" customTrigger={<button>Custom trigger</button>}>
      <Dialog dialogStyle={{
      padding: "8px 12px"
    }}>
        Custom trigger content
      </Dialog>
    </PopoverTrigger>
}`,...(J=(A=h.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var W,X,F;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="w-full h-screen flex items-center justify-center">
      <PopoverTrigger label="Click" placement="top" customPopover={(ref, state) => <Popover bg="red" md={{
      placement: "right"
    }} triggerRef={ref} state={state} />}>
        <Dialog>Media placement</Dialog>
      </PopoverTrigger>
    </div>
}`,...(F=(X=b.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var K,U,z;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="" customTrigger={<Button variant="primary">
          Should open modal inside "storybook-root"
        </Button>} portalContainer={document.getElementById("storybook-root") ?? undefined}>
      <Dialog dialogStyle={{
      backgroundColor: "red"
    }}>
        Custom root placement
      </Dialog>
    </PopoverTrigger>
}`,...(z=(U=P.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const Oe=["Default","CustomPlacement","OffsetPlacement","CrossOffsetPlacement","OffsetAndCrossOffset","CustomTrigger","MediaPlacement","ModalWithCustomRoot"];export{g as CrossOffsetPlacement,u as CustomPlacement,h as CustomTrigger,m as Default,b as MediaPlacement,P as ModalWithCustomRoot,v as OffsetAndCrossOffset,f as OffsetPlacement,Oe as __namedExportsOrder,Te as default};
