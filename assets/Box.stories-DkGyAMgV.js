import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as z}from"./index-D4H_InIO.js";import{B as n}from"./useUiKitTheme-BGeTiEix.js";import{F as t}from"./Flex-kujzUWYy.js";import{T as i}from"./Typography-CUqmvUF7.js";import{c as I,U as or}from"./provider-DLj25TkS.js";import"./context-Cc1G11um.js";import"./index-DW2zCSF8.js";const mr={title:"UI-Kit layout/Box",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box."}}},argTypes:{className:{control:"text"}}},d={args:{p:{py:64,px:96},children:e.jsx(t,{width:350,height:200,textOverflow:"ellipsis",p:10,verticalAlign:"bottom",textTransform:"uppercase",textDecoration:"underline",color:"text-primary-inverted",horizontalAlign:"right",children:"Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе. Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло странное спокойствие. Я не знаю, было ли это божественным вмешательством или родством всех живых существ, но скажу тебе, Джерри, что в тот момент я был морским биологом."})}},p={args:{className:"bg-green-100 p-4",children:e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item"})}},l={args:{className:"bg-green-100"},render:r=>{const[o,a]=z.useState(32),s=()=>{a(c=>c+12)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,m:o,d:{m:{mr:10}},children:o}),e.jsx("button",{onClick:s,children:"Increase margin +"})]})}},m={args:{className:"bg-green-100 p-4"},render:r=>{const[o,a]=z.useState(0),s=()=>{a(c=>typeof c=="string"?0:c+12)};return e.jsxs(t,{align:"end",position:{type:"relative"},className:"w-full h-[200px]",children:[e.jsxs(n,{...r,position:{type:"absolute",top:o,left:o},md:{position:{top:0,left:0}},p:{px:200},className:"bg-amber-400 px-4",children:["top value: ",o]}),e.jsx("button",{className:"mt-auto",onClick:s,children:"Increase margin +"})]})}},g={render:()=>e.jsx(n,{p:{px:200},bg:"background-primary",width:444,height:222,className:"bg-amber-400 ",md:{width:441},d:{width:441},children:"content"})},u={args:{bg:"surface-accent2-default",hover:{bg:"surface-accent2-hovered"},className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"cover",md:{bg:"linear-gradient(to right, #ff7e5f, #feb47b)",hover:{bg:"surface-accent1-hovered"},bgSize:"600"},d:{bg:"surface-accent1-default",hover:{bg:"surface-accent2-hovered"},bgSize:"40rem"}},render:r=>{const o=I();return e.jsx(or,{value:{components:{Link:z.forwardRef((a,s)=>e.jsx("a",{...a,ref:s,children:a.children}))},theme:I({colors:{...o.colors,"surface-accent1-default":"linear-gradient(321.9deg, #4A1290 -54.36%, #F9766E 12.84%, #4A1290 82.37%)"}})},children:e.jsx(n,{...r})})}},h={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"auto",hover:{bg:"#ccc"},md:{bg:"#ccc",hover:{bg:"/main-page-bg-mobile.jpg",bgRepeat:"repeat-x"}}}},b={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[100px] w-[100px]",bgRepeat:"no-repeat",hover:{bgGroup:"#ccc"},md:{bg:"#ccc",hover:{bgGroup:"linear-gradient(to right, #ff7e5f, #feb47b)"}}},render(r){return e.jsx(t,{groupParent:!0,className:"w-[500px] h-500px border-2 border-cyan-300",align:"center",justify:"center",p:50,children:e.jsx(n,{...r})})}},x={args:{children:"Border color",hover:{border:{color:"border-destructive"}},md:{hover:{border:{color:{top:"border-primary"}}}},d:{hover:{border:{color:{bottom:"border-accent"}}}}}},f={args:{children:"Border radius",p:10,border:{radius:"15px",width:"1px",style:"double",color:"#fff"},hover:{border:{radius:{topLeft:"5px",bottomRight:"5px"}}}}},y={args:{children:"Shadow color",color:"#000",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",hover:{boxShadow:"none"}},render(r){return e.jsx(n,{bg:"#fff",p:20,children:e.jsx(n,{...r})})}},v={args:{children:"Shadow color",p:20,bg:"#e80505",opacity:1,hover:{opacity:.3}},render(r){return e.jsx(n,{...r})}},B={args:{p:20,bg:"#e80505",overflow:"hidden",md:{overflow:"auto"}},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:e.jsx(n,{bg:"#ccc",style:{height:200},children:"Контент, который выходит за пределы"})})}},S={render(){return e.jsx(n,{p:20,width:300,height:200,bg:"https://picsum.photos/600/400",children:e.jsx(n,{p:30,bg:"rgba(255,255,255,0.5)",backdropBlur:1,hover:{backdropBlur:20},md:{backdropBlur:10},color:"red",border:{radius:"8px"},children:"Контент с backdropBlur"})})}},w={args:{"data-id":"uniqueId","data-kek":"1","data-kek2":"2"},render(r){return e.jsx(n,{...r,style:{width:200,height:100},children:"Box с дата атрибутами"})}},k={render(){return e.jsxs(t,{gap:20,children:[e.jsx(n,{width:500,height:300,border:{radius:{topLeft:"big-card"}},bg:"background-accent2-vertical",md:{border:{radius:"big-card"}},d:{border:{radius:"menus"}},hover:{border:{radius:"popups"}}}),e.jsx(n,{width:500,height:300,border:{radius:{topRight:"checkbox"}},bg:"background-accent1-vertical",md:{border:{radius:"40px"}}}),e.jsx(n,{width:500,height:300,border:{radius:{topLeft:"big-card"}},bg:"background-accent2-reversed",md:{border:{radius:"banner"},hover:{border:{radius:"form"}}}})]})}},j={args:{p:20,bg:"surface-accent1-default",animation:{name:"none"},d:{animation:{name:"frameAppear"},hover:{animation:{name:"spin"}}}},render(r){return e.jsx(n,{...r,className:"w-[300px]",children:"Контент с анимацией появления"})}},N={args:{border:{width:{top:"1px",left:"3px",right:"4px",bottom:"0px"}}},render(r){return e.jsx(n,{...r,className:"w-[300px]",children:"Контент с разным borderWidth"})}},A={args:{animation:{name:"keyframes",duration:2,transition:"ease-in-out",direction:"forwards",keyframes:{"0%":{opacity:0},"100%":{opacity:1}}},children:"Custom Animation",bg:"red"},render(r){return e.jsx(n,{...r})}},C={args:{animation:{name:"keyframes",duration:2,transition:"ease-in-out",direction:"forwards",keyframes:{"0%":{opacity:0,transform:"translateY(200%)"},"50%":{opacity:1,transform:"translateY(-100%)"},"100%":{opacity:1,transform:"translateY(0)"}}},children:"Custom Animation",bg:"red"},render(r){return e.jsx(n,{...r})}},D={render(){return e.jsx(t,{as:"ul",flexDirection:"column",listStyle:{type:"disc"},align:"center",children:["list disc","list disc","list disc"].map((r,o)=>e.jsx(i,{as:"li",display:"list-item",horizontalAlign:"center",fontSize:"body.mobile.large",lineHeight:"body.mobile.large",md:{fontSize:"button.desktop.large",lineHeight:"body.desktop.large",horizontalAlign:"left"},children:r},o))})}},F={render(){return e.jsx(t,{as:"ul",flexDirection:"column",listStyle:{type:"decimal"},align:"center",children:["list decimal","list decimal","list decimal"].map((r,o)=>e.jsx(i,{as:"li",display:"list-item",children:r},o))})}},T={render(){return e.jsxs("div",{children:[e.jsx(t,{as:"ul",flexDirection:"column",listStyle:{type:"disc",position:"inside"},align:"center",children:["list inside","list inside","list inside"].map((r,o)=>e.jsx(i,{bg:"orange",as:"li",display:"list-item",children:r},o))}),e.jsx("div",{className:"h-4"}),e.jsx(t,{as:"ul",flexDirection:"column",listStyle:{type:"disc",position:"outside"},align:"center",children:["list outside","list outside","list outside"].map((r,o)=>e.jsx(i,{bg:"orange",as:"li",display:"list-item",children:r},o))})]})}},L={render(){return e.jsx(t,{as:"ul",flexDirection:"column",listStyle:{type:"disc",position:"inside"},md:{listStyle:{type:"none"}},d:{listStyle:{type:"decimal",position:"outside"}},align:"center",children:["CustomList","CustomList","CustomList"].map((r,o)=>e.jsx(i,{as:"li",display:"list-item",children:r},o))})}},R={render(){return e.jsx(n,{d:{position:{type:"fixed",top:"100px"}},md:{position:{type:"relative",top:"auto"}},position:{type:"absolute",top:10,left:10},children:"Position Test"})}};var P,W,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(W=d.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var E,G,U;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>
  }
}`,...(U=(G=p.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Y,K,M;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(M=(K=l.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var O,q,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(q=m.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var J,Q,V;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(V=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Z,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,te,ae;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,ie,ce;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,le;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(le=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var me,ge,ue;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var he,be,xe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(be=v.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var fe,ye,ve;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Be,Se,we;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(we=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var ke,je,Ne;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(je=w.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Ae,Ce,De;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(De=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var Fe,Te,Le;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Le=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};var Re,ze,Ie;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var Pe,We,He;A.parameters={...A.parameters,docs:{...(Pe=A.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(He=(We=A.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ee,Ge,Ue;C.parameters={...C.parameters,docs:{...(Ee=C.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=C.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var Ye,Ke,Me;D.parameters={...D.parameters,docs:{...(Ye=D.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Me=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Oe,qe,_e;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render() {
    return <Flex as="ul" flexDirection="column" listStyle={{
      type: "decimal"
    }} align={"center"}>
        {["list decimal", "list decimal", "list decimal"].map((item, index) => <Typography key={index} as="li" display={"list-item"}>
            {item}
          </Typography>)}
      </Flex>;
  }
}`,...(_e=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Je,Qe,Ve;T.parameters={...T.parameters,docs:{...(Je=T.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ve=(Qe=T.parameters)==null?void 0:Qe.docs)==null?void 0:Ve.source}}};var Xe,Ze,$e;L.parameters={...L.parameters,docs:{...(Xe=L.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...($e=(Ze=L.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var er,rr,nr;R.parameters={...R.parameters,docs:{...(er=R.parameters)==null?void 0:er.docs,source:{originalSource:`{
  render() {
    return <Box d={{
      position: {
        type: "fixed",
        top: "100px"
      }
    }} md={{
      position: {
        type: "relative",
        top: "auto"
      }
    }} position={{
      type: "absolute",
      top: 10,
      left: 10
    }}>
        Position Test
      </Box>;
  }
}`,...(nr=(rr=R.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};const gr=["Default","WithCustomClass","DynamicMargin","Positioning","Dimension","Background","BackgroundHover","BackgroundHoverGroup","borderColor","BorderRadius","shadows","opacity","overflow","backdropBlur","dataAttributes","borderRadius","AppearAnimation","BoxBorderWidth","CustomAnimation","FromBottomAnimation","ListWithDisc","ListWithDecimal","ListWithPositionExample","CustomList","DeviceDependingPositioning"];export{j as AppearAnimation,u as Background,h as BackgroundHover,b as BackgroundHoverGroup,f as BorderRadius,N as BoxBorderWidth,A as CustomAnimation,L as CustomList,d as Default,R as DeviceDependingPositioning,g as Dimension,l as DynamicMargin,C as FromBottomAnimation,F as ListWithDecimal,D as ListWithDisc,T as ListWithPositionExample,m as Positioning,p as WithCustomClass,gr as __namedExportsOrder,S as backdropBlur,x as borderColor,k as borderRadius,w as dataAttributes,mr as default,v as opacity,B as overflow,y as shadows};
