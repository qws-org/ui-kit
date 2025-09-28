import{j as e}from"./index-Ft8_MerW.js";import{B as b}from"./Button-bMtkucD1.js";import{G as B,H as F,D as T,I as C,p as P,J as k,K as O,F as f,B as E}from"./useUiKitTheme-CYtl-eFU.js";import{r as w,R}from"./index-D4H_InIO.js";import{$ as S,a as I}from"./useOverlayTrigger-DSHIka3b.js";import"./index-BVDRNj0I.js";import"./useButton-BKE6a1No.js";import"./useFocusable-DgiKHf_j.js";import"./useFocus-DOcXS7Ug.js";import"./useUiKitComponents-CnsSmy5U.js";import"./useControlledState-Dxxc-Ijj.js";function q(s,r,a){let{overlayProps:l,underlayProps:o}=B({...s,isOpen:r.isOpen,onClose:r.close},a);return F({isDisabled:!r.isOpen}),T(),w.useEffect(()=>{if(r.isOpen&&a.current)return C([a.current],{shouldUseInert:!0})},[r.isOpen,a]),{modalProps:P(l),underlayProps:o}}const D=s=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...s,children:e.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.516 5.63a1.333 1.333 0 1 0-1.885 1.886l8.485 8.486-8.485 8.485a1.333 1.333 0 1 0 1.886 1.886l8.485-8.485 8.485 8.485a1.333 1.333 0 0 0 1.886-1.886l-8.485-8.485 8.485-8.485a1.333 1.333 0 1 0-1.886-1.886l-8.485 8.485z",clipRule:"evenodd"})});try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}}}catch{}const t=({label:s,children:r,...a})=>{const l=S(a),{triggerProps:o,overlayProps:d}=I({type:"dialog"},l);return e.jsxs(e.Fragment,{children:[e.jsx(b,{...a,...o,onPress:i=>{var c,n;(c=a==null?void 0:a.onPress)==null||c.call(a,i),(n=o==null?void 0:o.onPress)==null||n.call(o,i)},children:s}),l.isOpen&&e.jsx(h,{...a,state:l,children:R.cloneElement(r(()=>l.close()),d)})]})};try{t.displayName="ModalTrigger",t.__docgenInfo={description:"",displayName:"ModalTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}}}}}catch{}const h=({state:s,children:r,closeButtonSlot:a,overlayBackground:l="background-transparent",overlayBlur:o=4,...d})=>{const i=w.useRef(null),{modalProps:c,underlayProps:n}=q(d,s,i);return e.jsx(k,{children:e.jsx(O,{contain:!0,autoFocus:!0,children:e.jsx(f,{...n,style:{...n.style},align:"center",justify:"center",bg:l,backdropBlur:o,position:{type:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:e.jsxs(E,{...c,style:{...n.style},ref:i,position:{type:"relative"},width:"100%",height:"100vh",p:{pt:52,pb:16,pr:16,pl:16},md:{p:{pt:36}},className:"overflow-auto",children:[d.isDismissable&&(a?a==null?void 0:a(()=>s.close()):e.jsx(b,{onPress:()=>s.close(),autoFocus:!0,variant:"transparent",border:{width:"0"},position:{type:"absolute",top:14,right:16},md:{position:{top:36,right:40}},children:e.jsx(D,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})})),e.jsx(f,{justify:"center",align:"center",height:"100%",children:r})]})})})})};h.Trigger=t;try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"OverlayTriggerState"}},closeButtonSlot:{defaultValue:null,description:"",name:"closeButtonSlot",required:!1,type:{name:"((close: () => void) => ReactNode)"}},overlayBackground:{defaultValue:{value:"background-transparent"},description:"",name:"overlayBackground",required:!1,type:{name:"string"}},overlayBlur:{defaultValue:{value:"4"},description:"",name:"overlayBlur",required:!1,type:{name:"string | number"}}}}}catch{}const X={title:"UI-Kit components/Modal",component:t,parameters:{docs:{description:{component:`Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`}}},argTypes:{label:{control:"text",description:"Текст, отображаемый на кнопке, которая открывает модалку."},isDismissable:{control:"boolean",description:"Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape."}}},m={render:()=>e.jsx(t,{label:"Open default Modal",isDismissable:!0,children:s=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Default Modal"}),e.jsx("p",{children:"This is a basic modal with simple text content."}),e.jsx("button",{onClick:s,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},p={render:()=>e.jsx(t,{label:"Open Form Modal",isDismissable:!0,closeButtonSlot:s=>e.jsx(b,{onPress:s,autoFocus:!0,variant:"default",border:{width:"2"},position:{type:"absolute",top:20,right:20},md:{position:{top:36,right:40}},children:e.jsx(D,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8"})}),children:s=>e.jsxs("form",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"first-name",className:"mb-2",children:"First Name:"}),e.jsx("input",{id:"first-name",placeholder:"John",className:"p-2 border border-gray-300 rounded-md"}),e.jsx("label",{htmlFor:"last-name",className:"mt-4 mb-2",children:"Last Name:"}),e.jsx("input",{id:"last-name",placeholder:"Doe",className:"p-2 border border-gray-300 rounded-md"}),e.jsx(b,{className:"mt-4",onPress:s,children:"Submit"})]})})},u={render:()=>e.jsx(t,{label:"Non-Dismissable Modal",children:s=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Non-Dismissible Modal"}),e.jsx("p",{children:"This modal cannot be closed by clicking outside or pressing the Escape key."}),e.jsx("button",{onClick:s,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})};var g,x,y;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open default Modal" isDismissable>
      {close => <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button onClick={close} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Close Modal
          </button>
        </div>}
    </ModalTrigger>
}`,...(y=(x=m.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var N,j,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var v,$,_;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=($=u.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};const Y=["Default","FormModal","NonDismissibleModal"];export{m as Default,p as FormModal,u as NonDismissibleModal,Y as __namedExportsOrder,X as default};
