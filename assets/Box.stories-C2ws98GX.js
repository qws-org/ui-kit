import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as se}from"./index-D4lIrffr.js";import{B as n}from"./Box-Db_zQf3q.js";import{F as w}from"./Flex-WDMsqn3l.js";import"./useUiKitTheme-CDzDdjzd.js";import"./context-CsAOKUm5.js";const le={title:"UI-Kit layout/Box",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box."}}},argTypes:{className:{control:"text"}}},t={args:{p:{py:64,px:96},children:e.jsx(w,{width:350,height:200,textOverflow:"ellipsis",p:10,verticalAlign:"bottom",textTransform:"uppercase",textDecoration:"underline",color:"text-primary-inverted",horizontalAlign:"right",children:"Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе. Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло странное спокойствие. Я не знаю, было ли это божественным вмешательством или родством всех живых существ, но скажу тебе, Джерри, что в тот момент я был морским биологом."})}},s={args:{className:"bg-green-100 p-4",children:e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item"})}},c={args:{className:"bg-green-100"},render:r=>{const[o,f]=se.useState(32),v=()=>{f(a=>a+12)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,m:o,d:{m:{mr:10}},children:o}),e.jsx("button",{onClick:v,children:"Increase margin +"})]})}},i={args:{className:"bg-green-100 p-4"},render:r=>{const[o,f]=se.useState(0),v=()=>{f(a=>typeof a=="string"?0:a+12)};return e.jsxs(w,{align:"end",position:{type:"relative"},className:"w-full h-[200px]",children:[e.jsxs(n,{...r,position:{type:"absolute",top:o,left:o},md:{position:{top:0,left:0}},p:{px:200},className:"bg-amber-400 px-4",children:["top value: ",o]}),e.jsx("button",{className:"mt-auto",onClick:v,children:"Increase margin +"})]})}},p={render:()=>e.jsx(n,{p:{px:200},bg:"background-primary",width:444,height:222,className:"bg-amber-400 ",md:{width:441},d:{width:441},children:"content"})},d={args:{bg:"surface-accent2-default",hover:{bg:"surface-accent2-hovered"},className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"cover",md:{bg:"linear-gradient(to right, #ff7e5f, #feb47b)",hover:{bg:"surface-accent1-hovered"},bgSize:"600"},d:{bg:"surface-accent1-default",hover:{bg:"surface-accent2-hovered"},bgSize:"40rem"}}},g={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"auto",hover:{bg:"#ccc"},md:{bg:"#ccc",hover:{bg:"/main-page-bg-mobile.jpg",bgRepeat:"repeat-x"}}}},m={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[100px] w-[100px]",bgRepeat:"no-repeat",hover:{bgGroup:"#ccc"},md:{bg:"#ccc",hover:{bgGroup:"linear-gradient(to right, #ff7e5f, #feb47b)"}}},render(r){return e.jsx(w,{groupParent:!0,className:"w-[500px] h-500px border-2 border-cyan-300",align:"center",justify:"center",p:50,children:e.jsx(n,{...r})})}},l={args:{children:"Border color",hover:{border:{color:"border-destructive"}},md:{hover:{border:{color:{top:"border-primary"}}}},d:{hover:{border:{color:{bottom:"border-accent"}}}}}},b={args:{children:"Border radius",p:10,border:{radius:"15px",width:"1px",style:"double",color:"#fff"},hover:{border:{radius:{topLeft:"5px",bottomRight:"5px"}}}}},u={args:{children:"Shadow color",color:"#000",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",hover:{boxShadow:"none"}},render(r){return e.jsx(n,{bg:"#fff",p:20,children:e.jsx(n,{...r})})}},h={args:{children:"Shadow color",p:20,bg:"#e80505",opacity:1,hover:{opacity:.3}},render(r){return e.jsx(n,{...r})}},x={args:{p:20,bg:"#e80505",overflow:"hidden",md:{overflow:"auto"}},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:e.jsx(n,{bg:"#ccc",style:{height:200},children:"Контент, который выходит за пределы"})})}};var S,y,B;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    p: {
      py: 64,
      px: 96
    },
    children: <Flex width={350} height={200} textOverflow={"ellipsis"} p={10} verticalAlign="bottom" textTransform={"uppercase"} textDecoration={"underline"} color={"text-primary-inverted"} horizontalAlign={"right"}>
        Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе.
        Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло
        странное спокойствие. Я не знаю, было ли это божественным вмешательством
        или родством всех живых существ, но скажу тебе, Джерри, что в тот момент
        я был морским биологом.
      </Flex>
  }
}`,...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var j,N,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>
  }
}`,...(C=(N=s.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var R,k,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100"
  },
  render: args => {
    const [margin, setMargin] = useState<UIKitIndentations>(32);
    const increment = (): void => {
      setMargin(prev => prev + 12);
    };
    return <>
        <Box {...args} m={margin} d={{
        m: {
          mr: 10
        }
      }}>
          {margin}
        </Box>

        <button onClick={increment}>Increase margin +</button>
      </>;
  }
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var F,I,D;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4"
  },
  render: args => {
    const [top, setTop] = useState<number | string>(0);
    const increment = (): void => {
      setTop(prev => typeof prev === "string" ? 0 : prev + 12);
    };
    return <Flex align={"end"} position={{
      type: "relative"
    }} className={"w-full h-[200px]"}>
        <Box {...args} position={{
        type: "absolute",
        top,
        left: top
      }} md={{
        position: {
          top: 0,
          left: 0
        }
      }} p={{
        px: 200
      }} className={"bg-amber-400 px-4"}>
          top value: {top}
        </Box>

        <button className={"mt-auto"} onClick={increment}>
          Increase margin +
        </button>
      </Flex>;
  }
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var G,T,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <Box p={{
      px: 200
    }} bg={"background-primary"} width={444} height={222} className={"bg-amber-400 "} md={{
      width: 441
    }} d={{
      width: 441
    }}>
        content
      </Box>;
  }
}`,...(M=(T=p.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var A,H,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    bg: "surface-accent2-default",
    hover: {
      bg: "surface-accent2-hovered"
    },
    className: "h-[200px]",
    bgRepeat: "no-repeat",
    bgSize: "cover",
    md: {
      bg: "linear-gradient(to right, #ff7e5f, #feb47b)",
      hover: {
        bg: "surface-accent1-hovered"
      },
      bgSize: "600"
    },
    d: {
      bg: "surface-accent1-default",
      hover: {
        bg: "surface-accent2-hovered"
      },
      bgSize: "40rem"
    }
  }
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var E,O,K;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    bg: "/main-page-bg-mobile.jpg",
    className: "h-[200px]",
    bgRepeat: "no-repeat",
    bgSize: "auto",
    hover: {
      bg: "#ccc"
    },
    md: {
      bg: "#ccc",
      hover: {
        bg: "/main-page-bg-mobile.jpg",
        bgRepeat: "repeat-x"
      }
    }
  }
}`,...(K=(O=g.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var L,U,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    bg: "/main-page-bg-mobile.jpg",
    className: "h-[100px] w-[100px]",
    bgRepeat: "no-repeat",
    hover: {
      bgGroup: "#ccc"
    },
    md: {
      bg: "#ccc",
      hover: {
        bgGroup: "linear-gradient(to right, #ff7e5f, #feb47b)"
      }
    }
  },
  render(args) {
    return <Flex groupParent className={"w-[500px] h-500px border-2 border-cyan-300"} align={"center"} justify={"center"} p={50}>
        <Box {...args} />
      </Flex>;
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var _,q,J;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Border color",
    hover: {
      border: {
        color: "border-destructive"
      }
    },
    md: {
      hover: {
        border: {
          color: {
            top: "border-primary"
          }
        }
      }
    },
    d: {
      hover: {
        border: {
          color: {
            bottom: "border-accent"
          }
        }
      }
    }
  }
}`,...(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,V,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: "Border radius",
    p: 10,
    border: {
      radius: "15px",
      width: "1px",
      style: "double",
      color: "#fff"
    },
    hover: {
      border: {
        radius: {
          topLeft: "5px",
          bottomRight: "5px"
        }
      }
    }
  }
}`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: "Shadow color",
    color: "#000",
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
    hover: {
      boxShadow: "none"
    }
  },
  render(args) {
    return <Box bg={"#fff"} p={20}>
        <Box {...args} />
      </Box>;
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: "Shadow color",
    p: 20,
    bg: "#e80505",
    opacity: 1,
    hover: {
      opacity: 0.3
    }
  },
  render(args) {
    return <Box {...args}></Box>;
  }
}`,...(ne=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,te;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    p: 20,
    bg: "#e80505",
    overflow: "hidden",
    md: {
      overflow: "auto"
    }
  },
  render(args) {
    return <Box {...args} style={{
      width: 200,
      height: 100
    }}>
        <Box bg="#ccc" style={{
        height: 200
      }}>
          Контент, который выходит за пределы
        </Box>
      </Box>;
  }
}`,...(te=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const be=["Default","WithCustomClass","DynamicMargin","Positioning","Dimension","Background","BackgroundHover","BackgroundHoverGroup","borderColor","BorderRadius","shadows","opacity","overflow"];export{d as Background,g as BackgroundHover,m as BackgroundHoverGroup,b as BorderRadius,t as Default,p as Dimension,c as DynamicMargin,i as Positioning,s as WithCustomClass,be as __namedExportsOrder,l as borderColor,le as default,h as opacity,x as overflow,u as shadows};
