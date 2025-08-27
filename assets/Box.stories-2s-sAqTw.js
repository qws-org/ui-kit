import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as B}from"./index-D4H_InIO.js";import{B as n}from"./Box-CjIIFAwH.js";import{F as S}from"./Flex-Colc0XVJ.js";import{U as me,c as y}from"./provider-C97RgxgR.js";import"./useUiKitTheme-C48eyZgp.js";import"./context-Cc1G11um.js";const we={title:"UI-Kit layout/Box",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box."}}},argTypes:{className:{control:"text"}}},c={args:{p:{py:64,px:96},children:e.jsx(S,{width:350,height:200,textOverflow:"ellipsis",p:10,verticalAlign:"bottom",textTransform:"uppercase",textDecoration:"underline",color:"text-primary-inverted",horizontalAlign:"right",children:"Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе. Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло странное спокойствие. Я не знаю, было ли это божественным вмешательством или родством всех живых существ, но скажу тебе, Джерри, что в тот момент я был морским биологом."})}},i={args:{className:"bg-green-100 p-4",children:e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item"})}},d={args:{className:"bg-green-100"},render:r=>{const[o,a]=B.useState(32),t=()=>{a(s=>s+12)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,m:o,d:{m:{mr:10}},children:o}),e.jsx("button",{onClick:t,children:"Increase margin +"})]})}},p={args:{className:"bg-green-100 p-4"},render:r=>{const[o,a]=B.useState(0),t=()=>{a(s=>typeof s=="string"?0:s+12)};return e.jsxs(S,{align:"end",position:{type:"relative"},className:"w-full h-[200px]",children:[e.jsxs(n,{...r,position:{type:"absolute",top:o,left:o},md:{position:{top:0,left:0}},p:{px:200},className:"bg-amber-400 px-4",children:["top value: ",o]}),e.jsx("button",{className:"mt-auto",onClick:t,children:"Increase margin +"})]})}},g={render:()=>e.jsx(n,{p:{px:200},bg:"background-primary",width:444,height:222,className:"bg-amber-400 ",md:{width:441},d:{width:441},children:"content"})},m={args:{bg:"surface-accent2-default",hover:{bg:"surface-accent2-hovered"},className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"cover",md:{bg:"linear-gradient(to right, #ff7e5f, #feb47b)",hover:{bg:"surface-accent1-hovered"},bgSize:"600"},d:{bg:"surface-accent1-default",hover:{bg:"surface-accent2-hovered"},bgSize:"40rem"}},render:r=>{const o=y();return e.jsx(me,{value:{components:{Link:B.forwardRef((a,t)=>e.jsx("a",{...a,ref:t,children:a.children}))},theme:y({colors:{...o.colors,"surface-accent1-default":"linear-gradient(321.9deg, #4A1290 -54.36%, #F9766E 12.84%, #4A1290 82.37%)"}})},children:e.jsx(n,{...r})})}},l={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"auto",hover:{bg:"#ccc"},md:{bg:"#ccc",hover:{bg:"/main-page-bg-mobile.jpg",bgRepeat:"repeat-x"}}}},u={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[100px] w-[100px]",bgRepeat:"no-repeat",hover:{bgGroup:"#ccc"},md:{bg:"#ccc",hover:{bgGroup:"linear-gradient(to right, #ff7e5f, #feb47b)"}}},render(r){return e.jsx(S,{groupParent:!0,className:"w-[500px] h-500px border-2 border-cyan-300",align:"center",justify:"center",p:50,children:e.jsx(n,{...r})})}},b={args:{children:"Border color",hover:{border:{color:"border-destructive"}},md:{hover:{border:{color:{top:"border-primary"}}}},d:{hover:{border:{color:{bottom:"border-accent"}}}}}},h={args:{children:"Border radius",p:10,border:{radius:"15px",width:"1px",style:"double",color:"#fff"},hover:{border:{radius:{topLeft:"5px",bottomRight:"5px"}}}}},x={args:{children:"Shadow color",color:"#000",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",hover:{boxShadow:"none"}},render(r){return e.jsx(n,{bg:"#fff",p:20,children:e.jsx(n,{...r})})}},f={args:{children:"Shadow color",p:20,bg:"#e80505",opacity:1,hover:{opacity:.3}},render(r){return e.jsx(n,{...r})}},v={args:{p:20,bg:"#e80505",overflow:"hidden",md:{overflow:"auto"}},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:e.jsx(n,{bg:"#ccc",style:{height:200},children:"Контент, который выходит за пределы"})})}},w={args:{"data-id":"uniqueId","data-kek":"1","data-kek2":"2"},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:"Box с дата атрибутами"})}};var j,N,k;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var R,I,C;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>
  }
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var F,z,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var T,D,P;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var G,U,E;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(E=(U=g.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var K,M,H;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
  },
  render: args => {
    const theme = createTheme();
    return <UIKitProvider value={{
      components: {
        Link: forwardRef((props, ref) => {
          return <a {...props} ref={ref}>
                  {props.children}
                </a>;
        })
      },
      theme: createTheme({
        colors: {
          ...theme.colors,
          "surface-accent1-default": "linear-gradient(321.9deg, #4A1290 -54.36%, #F9766E 12.84%, #4A1290 82.37%)"
        }
      })
    }}>
        <Box {...args}></Box>
      </UIKitProvider>;
  }
}`,...(H=(M=m.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var L,O,q;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var W,_,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(_=u.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Q,V,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,te;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ce,ie;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,ge;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    "data-id": "uniqueId",
    "data-kek": "1",
    "data-kek2": "2"
  },
  render(args) {
    return <Box {...args} style={{
      width: 200,
      height: 100
    }}>
        Box с дата атрибутами
      </Box>;
  }
}`,...(ge=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Be=["Default","WithCustomClass","DynamicMargin","Positioning","Dimension","Background","BackgroundHover","BackgroundHoverGroup","borderColor","BorderRadius","shadows","opacity","overflow","dataAttributes"];export{m as Background,l as BackgroundHover,u as BackgroundHoverGroup,h as BorderRadius,c as Default,g as Dimension,d as DynamicMargin,p as Positioning,i as WithCustomClass,Be as __namedExportsOrder,b as borderColor,w as dataAttributes,we as default,f as opacity,v as overflow,x as shadows};
