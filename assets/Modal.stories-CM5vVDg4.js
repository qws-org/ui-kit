import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as m}from"./Button-fk38tfQ5.js";import{c as F,d as T,b as C,e as P,$ as B,a as O,f as k,g as E}from"./Overlay-CCJpmfyJ.js";import{r as w,R}from"./index-D4lIrffr.js";import{$ as S}from"./mergeProps-BZNQxkBP.js";import{B as I}from"./Box-CAJ1XJ0R.js";import{F as f}from"./Flex-BQSQ-TPb.js";import"./useButton-XCm6Pd7v.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-N1sfzKbq.js";import"./useFocus-DvfpPP1Y.js";import"./index-D5gmOSW9.js";import"./index-BB7Ugo0s.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-BHsjZyyA.js";import"./context-CsAOKUm5.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./useControlledState-YrJM5BK_.js";import"./useFocusWithin-Di0NsHIX.js";import"./platform-BAdLVq7s.js";import"./domHelpers-DlYETLWZ.js";const D=s=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...s,children:e.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.516 5.63a1.333 1.333 0 1 0-1.885 1.886l8.485 8.486-8.485 8.485a1.333 1.333 0 1 0 1.886 1.886l8.485-8.485 8.485 8.485a1.333 1.333 0 0 0 1.886-1.886l-8.485-8.485 8.485-8.485a1.333 1.333 0 1 0-1.886-1.886l-8.485 8.485z",clipRule:"evenodd"})});try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}}}catch{}function q(s,r,o){let{overlayProps:t,underlayProps:a}=F({...s,isOpen:r.isOpen,onClose:r.close},o);return T({isDisabled:!r.isOpen}),C(),w.useEffect(()=>{if(r.isOpen&&o.current)return P([o.current])},[r.isOpen,o]),{modalProps:S(t),underlayProps:a}}const l=({label:s,children:r,...o})=>{const t=B(o),{triggerProps:a,overlayProps:u}=O({type:"dialog"},t);return e.jsxs(e.Fragment,{children:[e.jsx(m,{...o,...a,onPress:n=>{var b,h;(b=o==null?void 0:o.onPress)==null||b.call(o,n),(h=a==null?void 0:a.onPress)==null||h.call(a,n)},children:s}),t.isOpen&&e.jsx(p,{...o,state:t,children:R.cloneElement(r(()=>t.close()),u)})]})};try{l.displayName="ModalTrigger",l.__docgenInfo={description:"",displayName:"ModalTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}}}}}catch{}const p=({state:s,children:r,closeButtonSlot:o,...t})=>{const a=w.useRef(null),{modalProps:u,underlayProps:n}=q(t,s,a);return e.jsx(k,{children:e.jsx(E,{contain:!0,autoFocus:!0,children:e.jsx(f,{...n,style:{...n.style},align:"center",justify:"center",bg:"background-secondary",position:{type:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:e.jsxs(I,{...u,style:{...n.style},ref:a,position:{type:"relative"},width:"100%",height:"100vh",p:{pt:52,pb:16,pr:16,pl:16},md:{p:{pt:36}},className:"overflow-auto",children:[t.isDismissable&&(o?o==null?void 0:o(()=>s.close()):e.jsx(m,{onPress:()=>s.close(),autoFocus:!0,variant:"transparent",border:{width:"0"},position:{type:"absolute",top:14,right:16},md:{position:{top:36,right:40}},children:e.jsx(D,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})})),e.jsx(f,{justify:"center",align:"center",height:"100%",children:r})]})})})})};p.Trigger=l;try{p.displayName="Modal",p.__docgenInfo={description:"",displayName:"Modal",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"OverlayTriggerState"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}}}}}catch{}const ne={title:"UI-Kit components/Modal",component:l,parameters:{docs:{description:{component:`Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`}}},argTypes:{label:{control:"text",description:"Текст, отображаемый на кнопке, которая открывает модалку."},isDismissable:{control:"boolean",description:"Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape."}}},i={render:()=>e.jsx(l,{label:"Open default Modal",isDismissable:!0,children:s=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Default Modal"}),e.jsx("p",{children:"This is a basic modal with simple text content."}),e.jsx("button",{onClick:s,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},d={render:()=>e.jsx(l,{label:"Open Form Modal",isDismissable:!0,closeButtonSlot:s=>e.jsx(m,{onPress:s,autoFocus:!0,variant:"default",border:{width:"2"},position:{type:"absolute",top:20,right:20},md:{position:{top:36,right:40}},children:e.jsx(D,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})}),children:s=>e.jsxs("form",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"first-name",className:"mb-2",children:"First Name:"}),e.jsx("input",{id:"first-name",placeholder:"John",className:"p-2 border border-gray-300 rounded-md"}),e.jsx("label",{htmlFor:"last-name",className:"mt-4 mb-2",children:"Last Name:"}),e.jsx("input",{id:"last-name",placeholder:"Doe",className:"p-2 border border-gray-300 rounded-md"}),e.jsx(m,{className:"mt-4",onPress:s,children:"Submit"})]})})},c={render:()=>e.jsx(l,{label:"Non-Dismissable Modal",children:s=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Non-Dismissible Modal"}),e.jsx("p",{children:"This modal cannot be closed by clicking outside or pressing the Escape key."}),e.jsx("button",{onClick:s,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})};var x,g,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open default Modal" isDismissable>
      {close => <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button onClick={close} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Close Modal
          </button>
        </div>}
    </ModalTrigger>
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var N,j,M;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open Form Modal" isDismissable closeButtonSlot={close => <Button onPress={close} autoFocus variant="default" border={{
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
}`,...(M=(j=d.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var $,v,_;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const ie=["Default","FormModal","NonDismissibleModal"];export{i as Default,d as FormModal,c as NonDismissibleModal,ie as __namedExportsOrder,ne as default};
