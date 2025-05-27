import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ne}from"./index-D4lIrffr.js";import{B as n}from"./Box-C17LOxdN.js";import{F as v}from"./Flex-DjceiBxt.js";import"./context-CsAOKUm5.js";import"./index-HUzi1mn4.js";const ie={title:"UI-Kit layout/Box",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box."}}},argTypes:{className:{control:"text"}}},t={args:{p:{py:64,px:96},children:e.jsx(v,{width:350,height:200,textOverflow:"ellipsis",p:10,verticalAlign:"bottom",textTransform:"uppercase",textDecoration:"underline",color:"text-primary-inverted",horizontalAlign:"right",children:"Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе. Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло странное спокойствие. Я не знаю, было ли это божественным вмешательством или родством всех живых существ, но скажу тебе, Джерри, что в тот момент я был морским биологом."})}},s={args:{className:"bg-green-100 p-4",children:e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item"})}},c={args:{className:"bg-green-100"},render:r=>{const[o,h]=ne.useState(32),f=()=>{h(a=>a+12)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,m:o,d:{m:{mr:10}},children:o}),e.jsx("button",{onClick:f,children:"Increase margin +"})]})}},p={args:{className:"bg-green-100 p-4"},render:r=>{const[o,h]=ne.useState(0),f=()=>{h(a=>typeof a=="string"?0:a+12)};return e.jsxs(v,{align:"end",position:{type:"relative"},className:"w-full h-[200px]",children:[e.jsxs(n,{...r,position:{type:"absolute",top:o,left:o},md:{position:{top:0,left:0}},p:{px:200},className:"bg-amber-400 px-4",children:["top value: ",o]}),e.jsx("button",{className:"mt-auto",onClick:f,children:"Increase margin +"})]})}},i={render:()=>e.jsx(n,{p:{px:200},bg:"background-primary",width:444,height:222,className:"bg-amber-400 ",md:{width:441},d:{width:441},children:"content"})},g={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",md:{bg:"linear-gradient(to right, #ff7e5f, #feb47b)"},d:{bg:"/main-page-bg-desktop.jpg"}}},d={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"auto",hover:{bg:"#ccc"},md:{bg:"#ccc",hover:{bg:"/main-page-bg-mobile.jpg",bgRepeat:"repeat-x"}}}},m={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[100px] w-[100px]",bgRepeat:"no-repeat",hover:{bgGroup:"#ccc"},md:{bg:"#ccc",hover:{bgGroup:"linear-gradient(to right, #ff7e5f, #feb47b)"}}},render(r){return e.jsx(v,{groupParent:!0,className:"w-[500px] h-500px border-2 border-cyan-300",align:"center",justify:"center",p:50,children:e.jsx(n,{...r})})}},l={args:{children:"Border color",hover:{border:{color:"border-destructive"}},md:{hover:{border:{color:{top:"border-primary"}}}},d:{hover:{border:{color:{bottom:"border-accent"}}}}}},b={args:{children:"Border radius",p:10,border:{radius:"15px",width:"1px",style:"double",color:"#fff"},hover:{border:{radius:{topLeft:"5px",bottomRight:"5px"}}}}},u={args:{children:"Shadow color",color:"#000",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",hover:{boxShadow:"none"}},render(r){return e.jsx(n,{bg:"#fff",p:20,children:e.jsx(n,{...r})})}},x={args:{children:"Shadow color",p:20,bg:"#e80505",opacity:1,hover:{opacity:.3}},render(r){return e.jsx(n,{...r})}};var w,y,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var B,j,N;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>
  }
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var k,C,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var F,I,D;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var G,T,M;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var z,A,H;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    bg: "/main-page-bg-mobile.jpg",
    className: "h-[200px]",
    bgRepeat: "no-repeat",
    md: {
      bg: "linear-gradient(to right, #ff7e5f, #feb47b)"
    },
    d: {
      bg: "/main-page-bg-desktop.jpg"
    }
  }
}`,...(H=(A=g.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var P,E,O;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var K,L,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(L=m.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,Q,V;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(V=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ge=["Default","WithCustomClass","DynamicMargin","Positioning","Dimension","Background","BackgroundHover","BackgroundHoverGroup","borderColor","BorderRadius","shadows","opacity"];export{g as Background,d as BackgroundHover,m as BackgroundHoverGroup,b as BorderRadius,t as Default,i as Dimension,c as DynamicMargin,p as Positioning,s as WithCustomClass,ge as __namedExportsOrder,l as borderColor,ie as default,x as opacity,u as shadows};
