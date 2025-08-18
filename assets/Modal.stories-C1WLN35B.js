import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as v}from"./Button-CkodgV2P.js";import{c as T,d as C,b as F,e as O,f as P,$ as k,a as E}from"./Overlay-Cl96hl_H.js";import{r as w,R as B}from"./index-D4lIrffr.js";import{$ as S}from"./mergeProps-GaW3dV0e.js";import{B as h}from"./Box-Db_zQf3q.js";import{F as f}from"./Flex-CoW9Pnhb.js";import"./useButton-RPoKjpgA.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BNl4w5lM.js";import"./useFocus-D2ojjsQ8.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-CDzDdjzd.js";import"./context-CsAOKUm5.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./useControlledState-YrJM5BK_.js";import"./useFocusWithin-C81oifS1.js";import"./platform-B5sWMkIr.js";import"./domHelpers-DlYETLWZ.js";const R=s=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...s,children:e.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.516 5.63a1.333 1.333 0 1 0-1.885 1.886l8.485 8.486-8.485 8.485a1.333 1.333 0 1 0 1.886 1.886l8.485-8.485 8.485 8.485a1.333 1.333 0 0 0 1.886-1.886l-8.485-8.485 8.485-8.485a1.333 1.333 0 1 0-1.886-1.886l-8.485 8.485z",clipRule:"evenodd"})});try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{}}}catch{}function I(s,r,o){let{overlayProps:l,underlayProps:a}=T({...s,isOpen:r.isOpen,onClose:r.close},o);return C({isDisabled:!r.isOpen}),F(),w.useEffect(()=>{if(r.isOpen&&o.current)return O([o.current])},[r.isOpen,o]),{modalProps:S(l),underlayProps:a}}const m=({state:s,children:r,...o})=>{const l=w.useRef(null),{modalProps:a,underlayProps:n}=I(o,s,l);return e.jsx(P,{children:e.jsx(f,{...n,style:{...n.style},align:"center",justify:"center",bg:"background-secondary",position:{type:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:e.jsxs(h,{...a,style:{...n.style},ref:l,position:{type:"relative"},width:"100%",height:"100vh",p:{pt:52,pb:16,pr:16,pl:16},md:{p:{pt:36}},className:"overflow-auto",children:[o.isDismissable&&e.jsx(h,{position:{type:"absolute",top:14,right:16},md:{position:{top:36,right:40}},children:e.jsx(R,{viewBox:"0 0 32 32",className:"w-6 h-6 md:w-8 md:h-8",onClick:()=>s.close()})}),e.jsx(f,{justify:"center",align:"center",height:"100%",children:r})]})})})};try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"OverlayTriggerState"}}}}}catch{}const t=({label:s,children:r,...o})=>{const l=k(o),{triggerProps:a,overlayProps:n}=E({type:"dialog"},l);return e.jsxs(e.Fragment,{children:[e.jsx(v,{...o,...a,onPress:p=>{var b,u;(b=o==null?void 0:o.onPress)==null||b.call(o,p),(u=a==null?void 0:a.onPress)==null||u.call(a,p)},children:s}),l.isOpen&&e.jsx(m,{...o,state:l,children:B.cloneElement(r(()=>l.close()),n)})]})};try{t.displayName="ModalTrigger",t.__docgenInfo={description:"",displayName:"ModalTrigger",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const te={title:"UI-Kit components/Modal",component:t,parameters:{docs:{description:{component:`Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`}}},argTypes:{label:{control:"text",description:"Текст, отображаемый на кнопке, которая открывает модалку."},isDismissable:{control:"boolean",description:"Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape."}}},i={render:()=>e.jsx(t,{label:"Open default Modal",isDismissable:!0,children:s=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Default Modal"}),e.jsx("p",{children:"This is a basic modal with simple text content."}),e.jsx("button",{onClick:s,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})},d={render:()=>e.jsx(t,{label:"Open Form Modal",isDismissable:!0,children:s=>e.jsxs("form",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"first-name",className:"mb-2",children:"First Name:"}),e.jsx("input",{id:"first-name",placeholder:"John",className:"p-2 border border-gray-300 rounded-md"}),e.jsx("label",{htmlFor:"last-name",className:"mt-4 mb-2",children:"Last Name:"}),e.jsx("input",{id:"last-name",placeholder:"Doe",className:"p-2 border border-gray-300 rounded-md"}),e.jsx(v,{className:"mt-4",onPress:s,children:"Submit"})]})})},c={render:()=>e.jsx(t,{label:"Non-Dismissable Modal",children:s=>e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{children:"Non-Dismissible Modal"}),e.jsx("p",{children:"This modal cannot be closed by clicking outside or pressing the Escape key."}),e.jsx("button",{onClick:s,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Close Modal"})]})})};var x,g,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ModalTrigger label="Open default Modal" isDismissable>
      {close => <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button onClick={close} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Close Modal
          </button>
        </div>}
    </ModalTrigger>
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var N,M,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(M=d.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var $,_,D;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const ne=["Default","FormModal","NonDismissibleModal"];export{i as Default,d as FormModal,c as NonDismissibleModal,ne as __namedExportsOrder,te as default};
