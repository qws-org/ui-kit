import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as y}from"./index-D4H_InIO.js";import{B as n}from"./useUiKitTheme-SvpDMYhK.js";import{F as j}from"./Flex-B_0Xiuxz.js";import{U as Be,c as k}from"./provider-Dbbnan_i.js";import"./context-Cc1G11um.js";const Ae={title:"UI-Kit layout/Box",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box."}}},argTypes:{className:{control:"text"}}},c={args:{p:{py:64,px:96},children:e.jsx(j,{width:350,height:200,textOverflow:"ellipsis",p:10,verticalAlign:"bottom",textTransform:"uppercase",textDecoration:"underline",color:"text-primary-inverted",horizontalAlign:"right",children:"Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе. Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло странное спокойствие. Я не знаю, было ли это божественным вмешательством или родством всех живых существ, но скажу тебе, Джерри, что в тот момент я был морским биологом."})}},i={args:{className:"bg-green-100 p-4",children:e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item"})}},d={args:{className:"bg-green-100"},render:r=>{const[o,a]=y.useState(32),t=()=>{a(s=>s+12)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,m:o,d:{m:{mr:10}},children:o}),e.jsx("button",{onClick:t,children:"Increase margin +"})]})}},p={args:{className:"bg-green-100 p-4"},render:r=>{const[o,a]=y.useState(0),t=()=>{a(s=>typeof s=="string"?0:s+12)};return e.jsxs(j,{align:"end",position:{type:"relative"},className:"w-full h-[200px]",children:[e.jsxs(n,{...r,position:{type:"absolute",top:o,left:o},md:{position:{top:0,left:0}},p:{px:200},className:"bg-amber-400 px-4",children:["top value: ",o]}),e.jsx("button",{className:"mt-auto",onClick:t,children:"Increase margin +"})]})}},g={render:()=>e.jsx(n,{p:{px:200},bg:"background-primary",width:444,height:222,className:"bg-amber-400 ",md:{width:441},d:{width:441},children:"content"})},m={args:{bg:"surface-accent2-default",hover:{bg:"surface-accent2-hovered"},className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"cover",md:{bg:"linear-gradient(to right, #ff7e5f, #feb47b)",hover:{bg:"surface-accent1-hovered"},bgSize:"600"},d:{bg:"surface-accent1-default",hover:{bg:"surface-accent2-hovered"},bgSize:"40rem"}},render:r=>{const o=k();return e.jsx(Be,{value:{components:{Link:y.forwardRef((a,t)=>e.jsx("a",{...a,ref:t,children:a.children}))},theme:k({colors:{...o.colors,"surface-accent1-default":"linear-gradient(321.9deg, #4A1290 -54.36%, #F9766E 12.84%, #4A1290 82.37%)"}})},children:e.jsx(n,{...r})})}},l={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"auto",hover:{bg:"#ccc"},md:{bg:"#ccc",hover:{bg:"/main-page-bg-mobile.jpg",bgRepeat:"repeat-x"}}}},u={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[100px] w-[100px]",bgRepeat:"no-repeat",hover:{bgGroup:"#ccc"},md:{bg:"#ccc",hover:{bgGroup:"linear-gradient(to right, #ff7e5f, #feb47b)"}}},render(r){return e.jsx(j,{groupParent:!0,className:"w-[500px] h-500px border-2 border-cyan-300",align:"center",justify:"center",p:50,children:e.jsx(n,{...r})})}},b={args:{children:"Border color",hover:{border:{color:"border-destructive"}},md:{hover:{border:{color:{top:"border-primary"}}}},d:{hover:{border:{color:{bottom:"border-accent"}}}}}},h={args:{children:"Border radius",p:10,border:{radius:"15px",width:"1px",style:"double",color:"#fff"},hover:{border:{radius:{topLeft:"5px",bottomRight:"5px"}}}}},x={args:{children:"Shadow color",color:"#000",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",hover:{boxShadow:"none"}},render(r){return e.jsx(n,{bg:"#fff",p:20,children:e.jsx(n,{...r})})}},f={args:{children:"Shadow color",p:20,bg:"#e80505",opacity:1,hover:{opacity:.3}},render(r){return e.jsx(n,{...r})}},v={args:{p:20,bg:"#e80505",overflow:"hidden",md:{overflow:"auto"}},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:e.jsx(n,{bg:"#ccc",style:{height:200},children:"Контент, который выходит за пределы"})})}},B={render(){return e.jsx(n,{p:20,width:300,height:200,bg:"https://picsum.photos/600/400",children:e.jsx(n,{p:30,bg:"rgba(255,255,255,0.5)",backdropBlur:1,hover:{backdropBlur:20},md:{backdropBlur:10},color:"red",border:{radius:"8px"},children:"Контент с backdropBlur"})})}},w={args:{"data-id":"uniqueId","data-kek":"1","data-kek2":"2"},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:"Box с дата атрибутами"})}},S={args:{p:20,bg:"surface-accent1-default",animation:{name:"none"},d:{animation:{name:"frameAppear"},hover:{animation:{name:"spin"}}}},render(r){return e.jsx(n,{...r,className:"w-[300px]",children:"Контент с анимацией появления"})}};var N,A,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var I,C,F;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>
  }
}`,...(F=(C=i.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var z,T,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var P,G,U;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(G=p.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var E,K,M;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var H,L,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,W,_;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var J,Q,V;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(V=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,oe,ae;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,se,ce;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ce=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,de,pe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,me,le;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render() {
    return <Box p={20} width={300} height={200} bg="https://picsum.photos/600/400">
        <Box p={30} bg="rgba(255,255,255,0.5)" backdropBlur={1} hover={{
        backdropBlur: 20
      }} md={{
        backdropBlur: 10
      }} color="red" border={{
        radius: "8px"
      }}>
          Контент с backdropBlur
        </Box>
      </Box>;
  }
}`,...(le=(me=B.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var ue,be,he;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(be=w.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,fe,ve;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    p: 20,
    bg: "surface-accent1-default",
    animation: {
      name: "none"
    },
    d: {
      animation: {
        name: "frameAppear"
      },
      hover: {
        animation: {
          name: "spin"
        }
      }
    }
  },
  render(args) {
    return <Box {...args} className="w-[300px]">
        Контент с анимацией появления
      </Box>;
  }
}`,...(ve=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};const Re=["Default","WithCustomClass","DynamicMargin","Positioning","Dimension","Background","BackgroundHover","BackgroundHoverGroup","borderColor","BorderRadius","shadows","opacity","overflow","backdropBlur","dataAttributes","AppearAnimation"];export{S as AppearAnimation,m as Background,l as BackgroundHover,u as BackgroundHoverGroup,h as BorderRadius,c as Default,g as Dimension,d as DynamicMargin,p as Positioning,i as WithCustomClass,Re as __namedExportsOrder,B as backdropBlur,b as borderColor,w as dataAttributes,Ae as default,f as opacity,v as overflow,x as shadows};
