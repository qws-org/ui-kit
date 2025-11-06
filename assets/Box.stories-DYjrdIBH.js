import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as y}from"./index-D4H_InIO.js";import{B as e,F as j}from"./useUiKitTheme-CFgZUW6S.js";import{U as jr,c as N}from"./provider-VsmyRJut.js";const Ir={title:"UI-Kit layout/Box",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box."}}},argTypes:{className:{control:"text"}}},c={args:{p:{py:64,px:96},children:r.jsx(j,{width:350,height:200,textOverflow:"ellipsis",p:10,verticalAlign:"bottom",textTransform:"uppercase",textDecoration:"underline",color:"text-primary-inverted",horizontalAlign:"right",children:"Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе. Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло странное спокойствие. Я не знаю, было ли это божественным вмешательством или родством всех живых существ, но скажу тебе, Джерри, что в тот момент я был морским биологом."})}},d={args:{className:"bg-green-100 p-4",children:r.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item"})}},i={args:{className:"bg-green-100"},render:n=>{const[a,o]=y.useState(32),t=()=>{o(s=>s+12)};return r.jsxs(r.Fragment,{children:[r.jsx(e,{...n,m:a,d:{m:{mr:10}},children:a}),r.jsx("button",{onClick:t,children:"Increase margin +"})]})}},p={args:{className:"bg-green-100 p-4"},render:n=>{const[a,o]=y.useState(0),t=()=>{o(s=>typeof s=="string"?0:s+12)};return r.jsxs(j,{align:"end",position:{type:"relative"},className:"w-full h-[200px]",children:[r.jsxs(e,{...n,position:{type:"absolute",top:a,left:a},md:{position:{top:0,left:0}},p:{px:200},className:"bg-amber-400 px-4",children:["top value: ",a]}),r.jsx("button",{className:"mt-auto",onClick:t,children:"Increase margin +"})]})}},g={render:()=>r.jsx(e,{p:{px:200},bg:"background-primary",width:444,height:222,className:"bg-amber-400 ",md:{width:441},d:{width:441},children:"content"})},m={args:{bg:"surface-accent2-default",hover:{bg:"surface-accent2-hovered"},className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"cover",md:{bg:"linear-gradient(to right, #ff7e5f, #feb47b)",hover:{bg:"surface-accent1-hovered"},bgSize:"600"},d:{bg:"surface-accent1-default",hover:{bg:"surface-accent2-hovered"},bgSize:"40rem"}},render:n=>{const a=N();return r.jsx(jr,{value:{components:{Link:y.forwardRef((o,t)=>r.jsx("a",{...o,ref:t,children:o.children}))},theme:N({colors:{...a.colors,"surface-accent1-default":"linear-gradient(321.9deg, #4A1290 -54.36%, #F9766E 12.84%, #4A1290 82.37%)"}})},children:r.jsx(e,{...n})})}},u={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[200px]",bgRepeat:"no-repeat",bgSize:"auto",hover:{bg:"#ccc"},md:{bg:"#ccc",hover:{bg:"/main-page-bg-mobile.jpg",bgRepeat:"repeat-x"}}}},l={args:{bg:"/main-page-bg-mobile.jpg",className:"h-[100px] w-[100px]",bgRepeat:"no-repeat",hover:{bgGroup:"#ccc"},md:{bg:"#ccc",hover:{bgGroup:"linear-gradient(to right, #ff7e5f, #feb47b)"}}},render(n){return r.jsx(j,{groupParent:!0,className:"w-[500px] h-500px border-2 border-cyan-300",align:"center",justify:"center",p:50,children:r.jsx(e,{...n})})}},b={args:{children:"Border color",hover:{border:{color:"border-destructive"}},md:{hover:{border:{color:{top:"border-primary"}}}},d:{hover:{border:{color:{bottom:"border-accent"}}}}}},h={args:{children:"Border radius",p:10,border:{radius:"15px",width:"1px",style:"double",color:"#fff"},hover:{border:{radius:{topLeft:"5px",bottomRight:"5px"}}}}},x={args:{children:"Shadow color",color:"#000",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",textShadow:"2px 2px 6px rgba(0, 0, 0, 0.6)",hover:{boxShadow:"none"}},render(n){return r.jsx(e,{bg:"#fff",p:20,children:r.jsx(e,{...n})})}},f={args:{children:"Shadow color",p:20,bg:"#e80505",opacity:1,hover:{opacity:.3}},render(n){return r.jsx(e,{...n})}},v={args:{p:20,bg:"#e80505",overflow:"hidden",md:{overflow:"auto"}},render(n){return r.jsx(e,{...n,style:{width:200,height:100},children:r.jsx(e,{bg:"#ccc",style:{height:200},children:"Контент, который выходит за пределы"})})}},B={render(){return r.jsx(e,{p:20,width:300,height:200,bg:"https://picsum.photos/600/400",children:r.jsx(e,{p:30,bg:"rgba(255,255,255,0.5)",backdropBlur:1,hover:{backdropBlur:20},md:{backdropBlur:10},color:"red",border:{radius:"8px"},children:"Контент с backdropBlur"})})}},w={args:{"data-id":"uniqueId","data-kek":"1","data-kek2":"2"},render(n){return r.jsx(e,{...n,style:{width:200,height:100},children:"Box с дата атрибутами"})}},S={render(){return r.jsxs(j,{gap:20,children:[r.jsx(e,{width:500,height:300,border:{radius:{topLeft:"big-card"}},bg:"background-accent2-vertical",md:{border:{radius:"big-card"}},d:{border:{radius:"menus"}},hover:{border:{radius:"popups"}}}),r.jsx(e,{width:500,height:300,border:{radius:{topRight:"checkbox"}},bg:"background-accent1-vertical",md:{border:{radius:"40px"}}}),r.jsx(e,{width:500,height:300,border:{radius:{topLeft:"big-card"}},bg:"background-accent2-reversed",md:{border:{radius:"banner"},hover:{border:{radius:"form"}}}})]})}},k={args:{p:20,bg:"surface-accent1-default",animation:{name:"none"},d:{animation:{name:"frameAppear"},hover:{animation:{name:"spin"}}}},render(n){return r.jsx(e,{...n,className:"w-[300px]",children:"Контент с анимацией появления"})}};var R,A,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var C,F,z;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>
  }
}`,...(z=(F=d.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var T,D,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,G,U;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var H,O,q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var W,_,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(_=u.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Q,V,X;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(V=l.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,nr;h.parameters={...h.parameters,docs:{...(rr=h.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
}`,...(nr=(er=h.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var ar,or,tr;x.parameters={...x.parameters,docs:{...(ar=x.parameters)==null?void 0:ar.docs,source:{originalSource:`{
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
}`,...(tr=(or=x.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var sr,cr,dr;f.parameters={...f.parameters,docs:{...(sr=f.parameters)==null?void 0:sr.docs,source:{originalSource:`{
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
}`,...(dr=(cr=f.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var ir,pr,gr;v.parameters={...v.parameters,docs:{...(ir=v.parameters)==null?void 0:ir.docs,source:{originalSource:`{
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
}`,...(gr=(pr=v.parameters)==null?void 0:pr.docs)==null?void 0:gr.source}}};var mr,ur,lr;B.parameters={...B.parameters,docs:{...(mr=B.parameters)==null?void 0:mr.docs,source:{originalSource:`{
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
}`,...(lr=(ur=B.parameters)==null?void 0:ur.docs)==null?void 0:lr.source}}};var br,hr,xr;w.parameters={...w.parameters,docs:{...(br=w.parameters)==null?void 0:br.docs,source:{originalSource:`{
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
}`,...(xr=(hr=w.parameters)==null?void 0:hr.docs)==null?void 0:xr.source}}};var fr,vr,Br;S.parameters={...S.parameters,docs:{...(fr=S.parameters)==null?void 0:fr.docs,source:{originalSource:`{
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
}`,...(Br=(vr=S.parameters)==null?void 0:vr.docs)==null?void 0:Br.source}}};var wr,Sr,kr;k.parameters={...k.parameters,docs:{...(wr=k.parameters)==null?void 0:wr.docs,source:{originalSource:`{
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
}`,...(kr=(Sr=k.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};const Cr=["Default","WithCustomClass","DynamicMargin","Positioning","Dimension","Background","BackgroundHover","BackgroundHoverGroup","borderColor","BorderRadius","shadows","opacity","overflow","backdropBlur","dataAttributes","borderRadius","AppearAnimation"];export{k as AppearAnimation,m as Background,u as BackgroundHover,l as BackgroundHoverGroup,h as BorderRadius,c as Default,g as Dimension,i as DynamicMargin,p as Positioning,d as WithCustomClass,Cr as __namedExportsOrder,B as backdropBlur,b as borderColor,S as borderRadius,w as dataAttributes,Ir as default,f as opacity,v as overflow,x as shadows};
