import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as H}from"./Button-C6TBcjs3.js";import{P as L}from"./Popover-_RY5IAdS.js";import{r as x,R as m}from"./index-D4H_InIO.js";import{$ as Y,a as Z,b as ee}from"./UIKitOverlay-CTPW_A9x.js";import{n as te}from"./useFocus-CgYBR30T.js";import{c as C,b as oe}from"./useFocusable-C_0kSj5S.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-BNEFiel2.js";import"./context-Cc1G11um.js";import"./useButton-BW3PNPly.js";import"./useUiKitComponents-DylESbeD.js";import"./context-BAxB0ZoE.js";import"./useLabels-BjMgE2Wj.js";import"./useLocalizedStringFormatter-_Pjder9J.js";import"./VisuallyHidden-CsyuHRxB.js";import"./useFocusWithin-DR07ZYpu.js";import"./useControlledState-Dxxc-Ijj.js";import"./FocusScope-rs3O88_f.js";import"./getScrollParent-hNI_q5fK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";function re(t,o){let{role:i="dialog"}=t,a=te();a=t["aria-label"]?void 0:a;let s=x.useRef(!1);return x.useEffect(()=>{if(o.current&&!o.current.contains(document.activeElement)){C(o.current);let l=setTimeout(()=>{(document.activeElement===o.current||document.activeElement===document.body)&&(s.current=!0,o.current&&(o.current.blur(),C(o.current)),s.current=!1)},500);return()=>{clearTimeout(l)}}},[o]),Y(),{dialogProps:{...oe(t,{labelable:!0}),role:i,tabIndex:-1,"aria-labelledby":t["aria-labelledby"]||a,onBlur:l=>{s.current&&l.stopPropagation()}},titleProps:{id:a}}}const r=({placement:t="bottom",label:o,children:i,customTrigger:a,customPopover:s,...l})=>{const c=x.useRef(null),d=Z(l),{triggerProps:p,overlayProps:T}=ee({type:"dialog"},d);return e.jsxs(e.Fragment,{children:[a?m.cloneElement(a,{ref:c,...p,onClick:p.onPress}):e.jsx(H,{ref:c,...p,onPress:Q=>{var O;return(O=p.onPress)==null?void 0:O.call(p,Q)},children:o}),d.isOpen&&(s?m.cloneElement(s(c,d),{children:m.cloneElement(i,T)}):e.jsx(L,{triggerRef:c,state:d,placement:t,...l,children:m.cloneElement(i,T)}))]})};try{r.displayName="PopoverTrigger",r.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},customTrigger:{defaultValue:null,description:"",name:"customTrigger",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},customPopover:{defaultValue:null,description:"",name:"customPopover",required:!1,type:{name:"((ref: RefObject<null>, state: OverlayTriggerState) => ReactElement<any, string | JSXElementConstructor<any>>)"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},crossOffset:{defaultValue:null,description:"",name:"crossOffset",required:!1,type:{name:"number"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"end"'},{value:'"start"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!1,type:{name:"Element"}}}}}catch{}const n=({title:t,children:o,dialogStyle:i,...a})=>{const s=x.useRef(null),{dialogProps:l,titleProps:c}=re(a,s);return e.jsxs("div",{...l,ref:s,className:"p-8",style:i,children:[t&&e.jsx("h3",{...c,className:"mt-0",children:t}),o]})};try{n.displayName="Dialog",n.__docgenInfo={description:"",displayName:"Dialog",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},dialogStyle:{defaultValue:null,description:"",name:"dialogStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const $e={title:"UI-Kit components/Popover",component:r,tags:["autodocs"],argTypes:{label:{description:"Текст, который будет отображаться на кнопке, открывающей поповер.",control:{type:"text"}},placement:{description:"Позиция поповера относительно триггера. Возможные значения: 'top', 'bottom', 'left', 'right', а также 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'.",control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],defaultValue:"bottom"},offset:{description:"Смещение поповера относительно его якорного элемента вдоль основной оси. Этот проп определяет расстояние между поповером и элементом-триггером.",control:{type:"number"}},crossOffset:{description:"Смещение поповера относительно его якорного элемента вдоль крестовой оси. Этот проп определяет дополнительное расстояние между поповером и триггером по перпендикулярной оси.",control:{type:"number"}},children:{description:"Дочерний элемент, который будет отображаться внутри поповера."}}},u={render:()=>e.jsx(r,{label:"Open Popover",children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover."})})},f={render:()=>e.jsx(r,{label:"Open Popover (Custom)",placement:"top end",children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover with custom placement."})})},g={render:()=>e.jsx(r,{label:"Open Popover (Offset)",placement:"bottom end",offset:50,children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover with offset placement."})})},v={render:()=>e.jsx(r,{label:"Open Popover (Cross Offset)",placement:"bottom",crossOffset:20,children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover with cross offset placement."})})},h={render:()=>e.jsx(r,{label:"Open Popover (Offset + Cross Offset)",placement:"top end",offset:40,crossOffset:30,children:e.jsx(n,{title:"Popover title",children:"This is the content of the popover with combined offsets."})})},b={render:()=>e.jsx(r,{placement:"top end",label:"asd",customTrigger:e.jsx("button",{children:"Custom trigger"}),children:e.jsx(n,{dialogStyle:{padding:"8px 12px"},children:"Custom trigger content"})})},P={render:()=>e.jsx("div",{className:"w-full h-screen flex items-center justify-center",children:e.jsx(r,{label:"Click",placement:"top",customPopover:(t,o)=>e.jsx(L,{bg:"red",md:{placement:"right"},triggerRef:t,state:o}),children:e.jsx(n,{children:"Media placement"})})})},y={render:()=>{var t;return e.jsx(r,{label:"",customTrigger:e.jsx(H,{variant:"primary",children:'Should open modal inside "storybook-root"'}),portalContainer:(t=document.getElementById("storybook-root"))!=null?t:void 0,children:e.jsx(n,{dialogStyle:{backgroundColor:"red"},children:"Custom root placement"})})}};var j,$,D;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover">
      <Dialog title="Popover title">This is the content of the popover.</Dialog>
    </PopoverTrigger>
}`,...(D=($=u.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var S,E,_;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover (Custom)" placement="top end">
      <Dialog title="Popover title">
        This is the content of the popover with custom placement.
      </Dialog>
    </PopoverTrigger>
}`,...(_=(E=f.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var R,w,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover (Offset)" placement="bottom end" offset={50}>
      <Dialog title="Popover title">
        This is the content of the popover with offset placement.
      </Dialog>
    </PopoverTrigger>
}`,...(V=(w=g.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var k,q,N;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover (Cross Offset)" placement="bottom" crossOffset={20}>
      <Dialog title="Popover title">
        This is the content of the popover with cross offset placement.
      </Dialog>
    </PopoverTrigger>
}`,...(N=(q=v.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var B,I,M;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="Open Popover (Offset + Cross Offset)" placement="top end" offset={40} crossOffset={30}>
      <Dialog title="Popover title">
        This is the content of the popover with combined offsets.
      </Dialog>
    </PopoverTrigger>
}`,...(M=(I=h.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var A,J,W;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <PopoverTrigger placement="top end" label="asd" customTrigger={<button>Custom trigger</button>}>
      <Dialog dialogStyle={{
      padding: "8px 12px"
    }}>
        Custom trigger content
      </Dialog>
    </PopoverTrigger>
}`,...(W=(J=b.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var X,F,K;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="w-full h-screen flex items-center justify-center">
      <PopoverTrigger label="Click" placement="top" customPopover={(ref, state) => <Popover bg="red" md={{
      placement: "right"
    }} triggerRef={ref} state={state} />}>
        <Dialog>Media placement</Dialog>
      </PopoverTrigger>
    </div>
}`,...(K=(F=P.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,z,G;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <PopoverTrigger label="" customTrigger={<Button variant="primary">
          Should open modal inside "storybook-root"
        </Button>} portalContainer={document.getElementById("storybook-root") ?? undefined}>
      <Dialog dialogStyle={{
      backgroundColor: "red"
    }}>
        Custom root placement
      </Dialog>
    </PopoverTrigger>
}`,...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const De=["Default","CustomPlacement","OffsetPlacement","CrossOffsetPlacement","OffsetAndCrossOffset","CustomTrigger","MediaPlacement","ModalWithCustomRoot"];export{v as CrossOffsetPlacement,f as CustomPlacement,b as CustomTrigger,u as Default,P as MediaPlacement,y as ModalWithCustomRoot,h as OffsetAndCrossOffset,g as OffsetPlacement,De as __namedExportsOrder,$e as default};
