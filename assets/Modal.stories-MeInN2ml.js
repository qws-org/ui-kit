import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as _}from"./Button-BnmsPwwv.js";import{c as v,d as T,b as C,e as O,f as w,$ as F,a as P}from"./Overlay-Cl96hl_H.js";import{r as D,R as k}from"./index-D4lIrffr.js";import{$ as E}from"./mergeProps-GaW3dV0e.js";import"./useButton-RPoKjpgA.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BNl4w5lM.js";import"./useFocus-D2ojjsQ8.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-Dh9h4W8C.js";import"./context-CsAOKUm5.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./useControlledState-YrJM5BK_.js";import"./useFocusWithin-C81oifS1.js";import"./platform-B5sWMkIr.js";import"./domHelpers-DlYETLWZ.js";const S=s=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...s,children:e.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M5.637 4.223a1 1 0 0 0-1.414 1.414L10.587 12l-6.364 6.364a1 1 0 1 0 1.414 1.414L12 13.415l6.364 6.364a1 1 0 1 0 1.414-1.414L13.415 12l6.364-6.364a1 1 0 0 0-1.414-1.414L12 10.587z",clipRule:"evenodd"})});try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}}}catch{}function L(s,o,a){let{overlayProps:l,underlayProps:r}=v({...s,isOpen:o.isOpen,onClose:o.close},a);return T({isDisabled:!o.isOpen}),C(),D.useEffect(()=>{if(o.isOpen&&a.current)return O([a.current])},[o.isOpen,a]),{modalProps:E(l),underlayProps:r}}const m=({state:s,children:o,...a})=>{const l=D.useRef(null),{modalProps:r,underlayProps:c}=L(a,s,l);return e.jsx(w,{children:e.jsxs("div",{className:"fixed inset-0 z-50 bg-[rgba(22,20,25,0.9)] flex items-center justify-center",...c,children:[a.isDismissable&&e.jsx(S,{onClick:()=>{s.close()},className:"absolute top-3.5 right-4 md:hidden"}),e.jsx("div",{...r,ref:l,className:"rounded-lg",children:o})]})})};try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"OverlayTriggerState"}}}}}catch{}const n=({label:s,children:o,...a})=>{const l=F(a),{triggerProps:r,overlayProps:c}=P({type:"dialog"},l);return e.jsxs(e.Fragment,{children:[e.jsx(_,{...a,...r,onPress:p=>{var b,u;(b=a==null?void 0:a.onPress)==null||b.call(a,p),(u=r==null?void 0:r.onPress)==null||u.call(r,p)},children:s}),l.isOpen&&e.jsx(m,{...a,state:l,children:k.cloneElement(o(()=>l.close()),c)})]})};try{n.displayName="ModalTrigger",n.__docgenInfo={description:"",displayName:"ModalTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const ae={title:"UI-Kit components/Modal",component:n,parameters:{docs:{description:{component:`Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`}}},argTypes:{label:{control:"text",description:"Текст, отображаемый на кнопке, которая открывает модалку."},isDismissable:{control:"boolean",description:"Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape."}}},t={render:()=>e.jsx(n,{label:"Open default Modal",isDismissable:!0,children:s=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Default Modal"}),e.jsx("p",{children:"This is a basic modal with simple text content."}),e.jsx("button",{onClick:s,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},i={render:()=>e.jsx(n,{label:"Open Form Modal",isDismissable:!0,children:s=>e.jsxs("form",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"first-name",className:"mb-2",children:"First Name:"}),e.jsx("input",{id:"first-name",placeholder:"John",className:"p-2 border border-gray-300 rounded-md"}),e.jsx("label",{htmlFor:"last-name",className:"mt-4 mb-2",children:"Last Name:"}),e.jsx("input",{id:"last-name",placeholder:"Doe",className:"p-2 border border-gray-300 rounded-md"}),e.jsx(_,{className:"mt-4",onPress:s,children:"Submit"})]})})},d={render:()=>e.jsx(n,{label:"Non-Dismissable Modal",children:s=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Non-Dismissible Modal"}),e.jsx("p",{children:"This modal cannot be closed by clicking outside or pressing the Escape key."}),e.jsx("button",{onClick:s,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})};var f,h,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open default Modal" isDismissable>
      {close => <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button onClick={close} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Close Modal
          </button>
        </div>}
    </ModalTrigger>
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,N,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open Form Modal" isDismissable>
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
}`,...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var M,j,$;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(j=d.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};const re=["Default","FormModal","NonDismissibleModal"];export{t as Default,i as FormModal,d as NonDismissibleModal,re as __namedExportsOrder,ae as default};
