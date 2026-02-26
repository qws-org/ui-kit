import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as R}from"./index-D4H_InIO.js";import{B as n}from"./useUiKitTheme-BNEFiel2.js";import{F as o}from"./Flex-B3yF0wJj.js";import{T as i}from"./Typography-CVeNWNbW.js";import{c as z,U as $e}from"./provider-DLj25TkS.js";import"./context-Cc1G11um.js";import"./index-DW2zCSF8.js";const cr={title:"UI-Kit layout/Box",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box."}}},argTypes:{className:{control:"text"}}},d={args:{p:{py:64,px:96},children:e.jsx(o,{width:350,height:200,textOverflow:"ellipsis",p:10,verticalAlign:"bottom",textTransform:"uppercase",textDecoration:"underline",color:"text-primary-inverted",horizontalAlign:"right",children:"Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе. Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло странное спокойствие. Я не знаю, было ли это божественным вмешательством или родством всех живых существ, но скажу тебе, Джерри, что в тот момент я был морским биологом."})}},l={args:{className:"bg-green-100 p-4",children:e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item"})}},p={args:{className:"bg-green-100"},render:r=>{const[a,t]=R.useState(32),s=()=>{t(c=>c+12)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,m:a,d:{m:{mr:10}},children:a}),e.jsx("button",{onClick:s,children:"Increase margin +"})]})}},m={args:{className:"bg-green-100 p-4"},render:r=>{const[a,t]=R.useState(0),s=()=>{t(c=>typeof c=="string"?0:c+12)};return e.jsxs(o,{align:"end",position:{type:"relative"},className:"w-full h-[200px]",children:[e.jsxs(n,{...r,position:{type:"absolute",top:a,left:a},md:{position:{top:0,left:0}},p:{px:200},className:"bg-amber-400 px-4",children:["top value: ",a]}),e.jsx("button",{className:"mt-auto",onClick:s,children:"Increase margin +"})]})}},g={render:()=>e.jsx(n,{p:{px:200},bg:"background-primary",width:444,height:222,className:"bg-amber-400 ",md:{width:441},d:{width:441},children:"content"})},u={args:{bg:"surface-accent2-default",hover:{bg:"surface-accent2-hovered"},className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"cover",md:{bg:"linear-gradient(to right, #ff7e5f, #feb47b)",hover:{bg:"surface-accent1-hovered"},bgSize:"600"},d:{bg:"surface-accent1-default",hover:{bg:"surface-accent2-hovered"},bgSize:"40rem"}},render:r=>{const a=z();return e.jsx($e,{value:{components:{Link:R.forwardRef((t,s)=>e.jsx("a",{...t,ref:s,children:t.children}))},theme:z({colors:{...a.colors,"surface-accent1-default":"linear-gradient(321.9deg, #4A1290 -54.36%, #F9766E 12.84%, #4A1290 82.37%)"}})},children:e.jsx(n,{...r})})}},h={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"auto",hover:{bg:"#ccc"},md:{bg:"#ccc",hover:{bg:"/main-page-bg-mobile.jpg",bgRepeat:"repeat-x"}}}},b={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[100px] w-[100px]",bgRepeat:"no-repeat",hover:{bgGroup:"#ccc"},md:{bg:"#ccc",hover:{bgGroup:"linear-gradient(to right, #ff7e5f, #feb47b)"}}},render(r){return e.jsx(o,{groupParent:!0,className:"w-[500px] h-500px border-2 border-cyan-300",align:"center",justify:"center",p:50,children:e.jsx(n,{...r})})}},x={args:{children:"Border color",hover:{border:{color:"border-destructive"}},md:{hover:{border:{color:{top:"border-primary"}}}},d:{hover:{border:{color:{bottom:"border-accent"}}}}}},f={args:{children:"Border radius",p:10,border:{radius:"15px",width:"1px",style:"double",color:"#fff"},hover:{border:{radius:{topLeft:"5px",bottomRight:"5px"}}}}},y={args:{children:"Shadow color",color:"#000",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",hover:{boxShadow:"none"}},render(r){return e.jsx(n,{bg:"#fff",p:20,children:e.jsx(n,{...r})})}},v={args:{children:"Shadow color",p:20,bg:"#e80505",opacity:1,hover:{opacity:.3}},render(r){return e.jsx(n,{...r})}},B={args:{p:20,bg:"#e80505",overflow:"hidden",md:{overflow:"auto"}},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:e.jsx(n,{bg:"#ccc",style:{height:200},children:"Контент, который выходит за пределы"})})}},S={render(){return e.jsx(n,{p:20,width:300,height:200,bg:"https://picsum.photos/600/400",children:e.jsx(n,{p:30,bg:"rgba(255,255,255,0.5)",backdropBlur:1,hover:{backdropBlur:20},md:{backdropBlur:10},color:"red",border:{radius:"8px"},children:"Контент с backdropBlur"})})}},w={args:{"data-id":"uniqueId","data-kek":"1","data-kek2":"2"},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:"Box с дата атрибутами"})}},k={render(){return e.jsxs(o,{gap:20,children:[e.jsx(n,{width:500,height:300,border:{radius:{topLeft:"big-card"}},bg:"background-accent2-vertical",md:{border:{radius:"big-card"}},d:{border:{radius:"menus"}},hover:{border:{radius:"popups"}}}),e.jsx(n,{width:500,height:300,border:{radius:{topRight:"checkbox"}},bg:"background-accent1-vertical",md:{border:{radius:"40px"}}}),e.jsx(n,{width:500,height:300,border:{radius:{topLeft:"big-card"}},bg:"background-accent2-reversed",md:{border:{radius:"banner"},hover:{border:{radius:"form"}}}})]})}},j={args:{p:20,bg:"surface-accent1-default",animation:{name:"none"},d:{animation:{name:"frameAppear"},hover:{animation:{name:"spin"}}}},render(r){return e.jsx(n,{...r,className:"w-[300px]",children:"Контент с анимацией появления"})}},N={args:{border:{width:{top:"1px",left:"3px",right:"4px",bottom:"0px"}}},render(r){return e.jsx(n,{...r,className:"w-[300px]",children:"Контент с разным borderWidth"})}},A={args:{animation:{name:"keyframes",duration:2,transition:"ease-in-out",direction:"forwards",keyframes:{"0%":{opacity:0},"100%":{opacity:1}}},children:"Custom Animation",bg:"red"},render(r){return e.jsx(n,{...r})}},C={args:{animation:{name:"keyframes",duration:2,transition:"ease-in-out",direction:"forwards",keyframes:{"0%":{opacity:0,transform:"translateY(200%)"},"50%":{opacity:1,transform:"translateY(-100%)"},"100%":{opacity:1,transform:"translateY(0)"}}},children:"Custom Animation",bg:"red"},render(r){return e.jsx(n,{...r})}},F={render(){return e.jsx(o,{as:"ul",flexDirection:"column",listStyle:{type:"disc"},align:"center",children:["list disc","list disc","list disc"].map((r,a)=>e.jsx(i,{as:"li",display:"list-item",horizontalAlign:"center",fontSize:"body.mobile.large",lineHeight:"body.mobile.large",md:{fontSize:"button.desktop.large",lineHeight:"body.desktop.large",horizontalAlign:"left"},children:r},a))})}},D={render(){return e.jsx(o,{as:"ul",flexDirection:"column",listStyle:{type:"decimal"},align:"center",children:["list decimal","list decimal","list decimal"].map((r,a)=>e.jsx(i,{as:"li",display:"list-item",children:r},a))})}},L={render(){return e.jsxs("div",{children:[e.jsx(o,{as:"ul",flexDirection:"column",listStyle:{type:"disc",position:"inside"},align:"center",children:["list inside","list inside","list inside"].map((r,a)=>e.jsx(i,{bg:"orange",as:"li",display:"list-item",children:r},a))}),e.jsx("div",{className:"h-4"}),e.jsx(o,{as:"ul",flexDirection:"column",listStyle:{type:"disc",position:"outside"},align:"center",children:["list outside","list outside","list outside"].map((r,a)=>e.jsx(i,{bg:"orange",as:"li",display:"list-item",children:r},a))})]})}},T={render(){return e.jsx(o,{as:"ul",flexDirection:"column",listStyle:{type:"disc",position:"inside"},md:{listStyle:{type:"none"}},d:{listStyle:{type:"decimal",position:"outside"}},align:"center",children:["CustomList","CustomList","CustomList"].map((r,a)=>e.jsx(i,{as:"li",display:"list-item",children:r},a))})}};var I,W,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(W=d.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var H,E,G;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>
  }
}`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var U,Y,K;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var M,O,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var _,J,Q;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,ae,oe;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,se,ie;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,de,le;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(de=f.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var pe,me,ge;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ue,he,be;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(he=v.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var xe,fe,ye;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ye=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,Be,Se;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};var we,ke,je;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(je=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};var Ne,Ae,Ce;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render() {
    return <Flex gap={20}>
        <Box width={500} height={300} border={{
        radius: {
          topLeft: "big-card"
        }
      }} bg="background-accent2-vertical" md={{
        border: {
          radius: "big-card"
        }
      }} d={{
        border: {
          radius: "menus"
        }
      }} hover={{
        border: {
          radius: "popups"
        }
      }}></Box>
        <Box width={500} height={300} border={{
        radius: {
          topRight: "checkbox"
        }
      }} bg="background-accent1-vertical" md={{
        border: {
          radius: "40px"
        }
      }}></Box>
        <Box width={500} height={300} border={{
        radius: {
          topLeft: "big-card"
        }
      }} bg="background-accent2-reversed" md={{
        border: {
          radius: "banner"
        },
        hover: {
          border: {
            radius: "form"
          }
        }
      }}></Box>
      </Flex>;
  }
}`,...(Ce=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Fe,De,Le;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Le=(De=j.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var Te,Re,ze;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    border: {
      width: {
        top: "1px",
        left: "3px",
        right: "4px",
        bottom: "0px"
      }
    }
  },
  render(args) {
    return <Box {...args} className="w-[300px]">
        Контент с разным borderWidth
      </Box>;
  }
}`,...(ze=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};var Ie,We,Pe;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    animation: {
      name: "keyframes",
      duration: 2,
      transition: "ease-in-out",
      direction: "forwards",
      keyframes: {
        "0%": {
          opacity: 0
        },
        "100%": {
          opacity: 1
        }
      }
    },
    children: "Custom Animation",
    bg: "red"
  },
  render(args) {
    return <Box {...args}></Box>;
  }
}`,...(Pe=(We=A.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};var He,Ee,Ge;C.parameters={...C.parameters,docs:{...(He=C.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    animation: {
      name: "keyframes",
      duration: 2,
      transition: "ease-in-out",
      direction: "forwards",
      keyframes: {
        "0%": {
          opacity: 0,
          transform: "translateY(200%)"
        },
        "50%": {
          opacity: 1,
          transform: "translateY(-100%)"
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        }
      }
    },
    children: "Custom Animation",
    bg: "red"
  },
  render(args) {
    return <Box {...args}></Box>;
  }
}`,...(Ge=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:Ge.source}}};var Ue,Ye,Ke;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render() {
    return <Flex as="ul" flexDirection="column" listStyle={{
      type: "disc"
    }} align={"center"}>
        {["list disc", "list disc", "list disc"].map((item, index) => <Typography key={index} as="li" display={"list-item"} horizontalAlign="center" fontSize={"body.mobile.large"} lineHeight={"body.mobile.large"} md={{
        fontSize: "button.desktop.large",
        lineHeight: "body.desktop.large",
        horizontalAlign: "left"
      }}>
            {item}
          </Typography>)}
      </Flex>;
  }
}`,...(Ke=(Ye=F.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Me,Oe,qe;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render() {
    return <Flex as="ul" flexDirection="column" listStyle={{
      type: "decimal"
    }} align={"center"}>
        {["list decimal", "list decimal", "list decimal"].map((item, index) => <Typography key={index} as="li" display={"list-item"}>
            {item}
          </Typography>)}
      </Flex>;
  }
}`,...(qe=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var _e,Je,Qe;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render() {
    return <div>
        <Flex as="ul" flexDirection="column" listStyle={{
        type: "disc",
        position: "inside"
      }} align={"center"}>
          {["list inside", "list inside", "list inside"].map((item, index) => <Typography bg={"orange"} key={index} as="li" display={"list-item"}>
              {item}
            </Typography>)}
        </Flex>
        <div className={"h-4"}></div>
        <Flex as="ul" flexDirection="column" listStyle={{
        type: "disc",
        position: "outside"
      }} align={"center"}>
          {["list outside", "list outside", "list outside"].map((item, index) => <Typography bg={"orange"} key={index} as="li" display={"list-item"}>
                {item}
              </Typography>)}
        </Flex>
      </div>;
  }
}`,...(Qe=(Je=L.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ve,Xe,Ze;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render() {
    return <Flex as="ul" flexDirection="column" listStyle={{
      type: "disc",
      position: "inside"
    }} md={{
      listStyle: {
        type: "none"
      }
    }} d={{
      listStyle: {
        type: "decimal",
        position: "outside"
      }
    }} align={"center"}>
        {["CustomList", "CustomList", "CustomList"].map((item, index) => <Typography key={index} as="li" display={"list-item"}>
            {item}
          </Typography>)}
      </Flex>;
  }
}`,...(Ze=(Xe=T.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};const dr=["Default","WithCustomClass","DynamicMargin","Positioning","Dimension","Background","BackgroundHover","BackgroundHoverGroup","borderColor","BorderRadius","shadows","opacity","overflow","backdropBlur","dataAttributes","borderRadius","AppearAnimation","BoxBorderWidth","CustomAnimation","FromBottomAnimation","ListWithDisc","ListWithDecimal","ListWithPositionExample","CustomList"];export{j as AppearAnimation,u as Background,h as BackgroundHover,b as BackgroundHoverGroup,f as BorderRadius,N as BoxBorderWidth,A as CustomAnimation,T as CustomList,d as Default,g as Dimension,p as DynamicMargin,C as FromBottomAnimation,D as ListWithDecimal,F as ListWithDisc,L as ListWithPositionExample,m as Positioning,l as WithCustomClass,dr as __namedExportsOrder,S as backdropBlur,x as borderColor,k as borderRadius,w as dataAttributes,cr as default,v as opacity,B as overflow,y as shadows};
