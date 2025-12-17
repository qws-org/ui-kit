import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as C}from"./index-D4H_InIO.js";import{B as n,F as A}from"./useUiKitTheme-CtXWrNYe.js";import{c as R,U as Pr}from"./provider-CDfx5bk4.js";const Er={title:"UI-Kit layout/Box",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box."}}},argTypes:{className:{control:"text"}}},c={args:{p:{py:64,px:96},children:r.jsx(A,{width:350,height:200,textOverflow:"ellipsis",p:10,verticalAlign:"bottom",textTransform:"uppercase",textDecoration:"underline",color:"text-primary-inverted",horizontalAlign:"right",children:"Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе. Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло странное спокойствие. Я не знаю, было ли это божественным вмешательством или родством всех живых существ, но скажу тебе, Джерри, что в тот момент я был морским биологом."})}},i={args:{className:"bg-green-100 p-4",children:r.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item"})}},d={args:{className:"bg-green-100"},render:e=>{const[a,o]=C.useState(32),t=()=>{o(s=>s+12)};return r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,m:a,d:{m:{mr:10}},children:a}),r.jsx("button",{onClick:t,children:"Increase margin +"})]})}},p={args:{className:"bg-green-100 p-4"},render:e=>{const[a,o]=C.useState(0),t=()=>{o(s=>typeof s=="string"?0:s+12)};return r.jsxs(A,{align:"end",position:{type:"relative"},className:"w-full h-[200px]",children:[r.jsxs(n,{...e,position:{type:"absolute",top:a,left:a},md:{position:{top:0,left:0}},p:{px:200},className:"bg-amber-400 px-4",children:["top value: ",a]}),r.jsx("button",{className:"mt-auto",onClick:t,children:"Increase margin +"})]})}},m={render:()=>r.jsx(n,{p:{px:200},bg:"background-primary",width:444,height:222,className:"bg-amber-400 ",md:{width:441},d:{width:441},children:"content"})},g={args:{bg:"surface-accent2-default",hover:{bg:"surface-accent2-hovered"},className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"cover",md:{bg:"linear-gradient(to right, #ff7e5f, #feb47b)",hover:{bg:"surface-accent1-hovered"},bgSize:"600"},d:{bg:"surface-accent1-default",hover:{bg:"surface-accent2-hovered"},bgSize:"40rem"}},render:e=>{const a=R();return r.jsx(Pr,{value:{components:{Link:C.forwardRef((o,t)=>r.jsx("a",{...o,ref:t,children:o.children}))},theme:R({colors:{...a.colors,"surface-accent1-default":"linear-gradient(321.9deg, #4A1290 -54.36%, #F9766E 12.84%, #4A1290 82.37%)"}})},children:r.jsx(n,{...e})})}},u={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"auto",hover:{bg:"#ccc"},md:{bg:"#ccc",hover:{bg:"/main-page-bg-mobile.jpg",bgRepeat:"repeat-x"}}}},l={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[100px] w-[100px]",bgRepeat:"no-repeat",hover:{bgGroup:"#ccc"},md:{bg:"#ccc",hover:{bgGroup:"linear-gradient(to right, #ff7e5f, #feb47b)"}}},render(e){return r.jsx(A,{groupParent:!0,className:"w-[500px] h-500px border-2 border-cyan-300",align:"center",justify:"center",p:50,children:r.jsx(n,{...e})})}},b={args:{children:"Border color",hover:{border:{color:"border-destructive"}},md:{hover:{border:{color:{top:"border-primary"}}}},d:{hover:{border:{color:{bottom:"border-accent"}}}}}},h={args:{children:"Border radius",p:10,border:{radius:"15px",width:"1px",style:"double",color:"#fff"},hover:{border:{radius:{topLeft:"5px",bottomRight:"5px"}}}}},x={args:{children:"Shadow color",color:"#000",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",hover:{boxShadow:"none"}},render(e){return r.jsx(n,{bg:"#fff",p:20,children:r.jsx(n,{...e})})}},f={args:{children:"Shadow color",p:20,bg:"#e80505",opacity:1,hover:{opacity:.3}},render(e){return r.jsx(n,{...e})}},v={args:{p:20,bg:"#e80505",overflow:"hidden",md:{overflow:"auto"}},render(e){return r.jsx(n,{...e,style:{width:200,height:100},children:r.jsx(n,{bg:"#ccc",style:{height:200},children:"Контент, который выходит за пределы"})})}},B={render(){return r.jsx(n,{p:20,width:300,height:200,bg:"https://picsum.photos/600/400",children:r.jsx(n,{p:30,bg:"rgba(255,255,255,0.5)",backdropBlur:1,hover:{backdropBlur:20},md:{backdropBlur:10},color:"red",border:{radius:"8px"},children:"Контент с backdropBlur"})})}},w={args:{"data-id":"uniqueId","data-kek":"1","data-kek2":"2"},render(e){return r.jsx(n,{...e,style:{width:200,height:100},children:"Box с дата атрибутами"})}},y={render(){return r.jsxs(A,{gap:20,children:[r.jsx(n,{width:500,height:300,border:{radius:{topLeft:"big-card"}},bg:"background-accent2-vertical",md:{border:{radius:"big-card"}},d:{border:{radius:"menus"}},hover:{border:{radius:"popups"}}}),r.jsx(n,{width:500,height:300,border:{radius:{topRight:"checkbox"}},bg:"background-accent1-vertical",md:{border:{radius:"40px"}}}),r.jsx(n,{width:500,height:300,border:{radius:{topLeft:"big-card"}},bg:"background-accent2-reversed",md:{border:{radius:"banner"},hover:{border:{radius:"form"}}}})]})}},k={args:{p:20,bg:"surface-accent1-default",animation:{name:"none"},d:{animation:{name:"frameAppear"},hover:{animation:{name:"spin"}}}},render(e){return r.jsx(n,{...e,className:"w-[300px]",children:"Контент с анимацией появления"})}},S={args:{border:{width:{top:"1px",left:"3px",right:"4px",bottom:"0px"}}},render(e){return r.jsx(n,{...e,className:"w-[300px]",children:"Контент с разным borderWidth"})}},j={args:{animation:{name:"keyframes",duration:2,transition:"ease-in-out",direction:"forwards",keyframes:{"0%":{opacity:0},"100%":{opacity:1}}},children:"Custom Animation",bg:"red"},render(e){return r.jsx(n,{...e})}},N={args:{animation:{name:"keyframes",duration:2,transition:"ease-in-out",direction:"forwards",keyframes:{"0%":{opacity:0,transform:"translateY(200%)"},"50%":{opacity:1,transform:"translateY(-100%)"},"100%":{opacity:1,transform:"translateY(0)"}}},children:"Custom Animation",bg:"red"},render(e){return r.jsx(n,{...e})}};var F,I,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var T,D,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>
  }
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,G,U;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(G=d.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var W,Y,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var K,M,H;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(H=(M=m.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var O,q,_;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(q=g.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var J,Q,V;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(V=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Z,$;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,nr;b.parameters={...b.parameters,docs:{...(rr=b.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
}`,...(nr=(er=b.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var ar,or,tr;h.parameters={...h.parameters,docs:{...(ar=h.parameters)==null?void 0:ar.docs,source:{originalSource:`{
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
}`,...(tr=(or=h.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var sr,cr,ir;x.parameters={...x.parameters,docs:{...(sr=x.parameters)==null?void 0:sr.docs,source:{originalSource:`{
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
}`,...(ir=(cr=x.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var dr,pr,mr;f.parameters={...f.parameters,docs:{...(dr=f.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(mr=(pr=f.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var gr,ur,lr;v.parameters={...v.parameters,docs:{...(gr=v.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(lr=(ur=v.parameters)==null?void 0:ur.docs)==null?void 0:lr.source}}};var br,hr,xr;B.parameters={...B.parameters,docs:{...(br=B.parameters)==null?void 0:br.docs,source:{originalSource:`{
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
}`,...(xr=(hr=B.parameters)==null?void 0:hr.docs)==null?void 0:xr.source}}};var fr,vr,Br;w.parameters={...w.parameters,docs:{...(fr=w.parameters)==null?void 0:fr.docs,source:{originalSource:`{
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
}`,...(Br=(vr=w.parameters)==null?void 0:vr.docs)==null?void 0:Br.source}}};var wr,yr,kr;y.parameters={...y.parameters,docs:{...(wr=y.parameters)==null?void 0:wr.docs,source:{originalSource:`{
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
}`,...(kr=(yr=y.parameters)==null?void 0:yr.docs)==null?void 0:kr.source}}};var Sr,jr,Nr;k.parameters={...k.parameters,docs:{...(Sr=k.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(Nr=(jr=k.parameters)==null?void 0:jr.docs)==null?void 0:Nr.source}}};var Ar,Cr,Rr;S.parameters={...S.parameters,docs:{...(Ar=S.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
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
}`,...(Rr=(Cr=S.parameters)==null?void 0:Cr.docs)==null?void 0:Rr.source}}};var Fr,Ir,zr;j.parameters={...j.parameters,docs:{...(Fr=j.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
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
}`,...(zr=(Ir=j.parameters)==null?void 0:Ir.docs)==null?void 0:zr.source}}};var Tr,Dr,Lr;N.parameters={...N.parameters,docs:{...(Tr=N.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
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
}`,...(Lr=(Dr=N.parameters)==null?void 0:Dr.docs)==null?void 0:Lr.source}}};const Kr=["Default","WithCustomClass","DynamicMargin","Positioning","Dimension","Background","BackgroundHover","BackgroundHoverGroup","borderColor","BorderRadius","shadows","opacity","overflow","backdropBlur","dataAttributes","borderRadius","AppearAnimation","BoxBorderWidth","CustomAnimation","FromBottomAnimation"];export{k as AppearAnimation,g as Background,u as BackgroundHover,l as BackgroundHoverGroup,h as BorderRadius,S as BoxBorderWidth,j as CustomAnimation,c as Default,m as Dimension,d as DynamicMargin,N as FromBottomAnimation,p as Positioning,i as WithCustomClass,Kr as __namedExportsOrder,B as backdropBlur,b as borderColor,y as borderRadius,w as dataAttributes,Er as default,f as opacity,v as overflow,x as shadows};
