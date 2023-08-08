(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,n)=>{const a=n(475),s=n(27),{lightningChart:o,regularColorSteps:i,ImageFill:l,ImageFitMode:r,PalettedFill:d,LUT:m,formatLongitudeLatitude:c,emptyLine:u,Themes:p}=a,{createWaterDropDataGenerator:h}=s,g=o({warnings:!1}).ChartXY({}).setTitle("Loading temperature data ...").setPadding({right:40}).setMouseInteractions(!1),w=g.getDefaultAxisY().setTitle("Latitude").setMouseInteractions(!1).setAnimationScroll(!1),y=g.getDefaultAxisX().setTitle("Longitude").setMouseInteractions(!1).setAnimationScroll(!1),f=g.getTheme();let x;const T=e=>{I.setFillStyle(new d({lut:new m({units:"intensity",steps:i(0,100,f.examples.coldHotColorPalette,{alpha:e}),interpolate:!0})})),x=x||g.addLegendBox().add(g)},I=g.addHeatmapGridSeries({columns:500,rows:320,start:{x:-126,y:24},end:{x:-66,y:48},dataOrder:"columns"}).setWireframeStyle(u).setCursorResultTableFormatter(((e,t,n)=>e.addRow(c(n.x,n.y)).addRow("Temp:","",M(n.intensity).toFixed(1),"°С")));fetch(document.head.baseURI+"examples/assets/1110/usa-temperature-data.json").then((e=>e.json())).then((e=>{I.invalidateIntensityValues(e.data),g.setTitle("Loading animation ..."),h().setColumns(500).setRows(320).setWaterDrops([{columnNormalized:.6,rowNormalized:.6,amplitude:1},{columnNormalized:.2,rowNormalized:.1,amplitude:.9},{columnNormalized:.1,rowNormalized:.8,amplitude:.6}]).generate().then((e=>e.map((e=>e.map((e=>.4*e)))))).then((t=>{g.setTitle("Animated United States Temperature Heat map");const n=[];for(let a=0;a<100;a+=1){const s=a/99;if(0===s)n.push(e.data);else{const a=[];for(let n=0;n<500;n+=1){const o=[];a.push(o);for(let a=0;a<320;a+=1)o.push(e.data[n][a]+s*t[a][n])}n.push(a)}}let a=0,s=window.performance.now(),o=0;const i=()=>{const e=window.performance.now();a+=e-s;const t=a%5e3,l=t<2500?t/2500:1-(t-2500)/2500,r=Math.round(l*(n.length-1));r!==o&&(o=r,I.invalidateIntensityValues(n[r])),s=e,requestAnimationFrame(i)};i()}))}));const L=new Image;L.crossOrigin="",L.src=document.head.baseURI+"examples/assets/1110/"+(f.isDark?"usa.png":"usa-light.png"),g.setSeriesBackgroundFillStyle(new l({source:L,fitMode:r.Stretch}));const M=e=>5/9*(e-32);y.setThickness(60),w.setThickness(80);const S=()=>{const e=g.engine.container.getBoundingClientRect(),t=Math.ceil(e.width-80),n=Math.ceil(e.height-60),a=.551875,s=n/t;if(s<a){const e=n/a,s=Math.max(t-e,0);g.setPadding({left:s/2,right:s/2,top:0,bottom:0})}else if(s>a){const e=t*a,s=Math.max(n-e,0);g.setPadding({top:s/2,bottom:s/2,left:0,right:16})}};S(),window.addEventListener("resize",S);const b=document.getElementById("chart")||document.body,C=document.createElement("div");g.engine.container.append(C),C.style.position="absolute",C.style.left="6px",C.style.bottom="6px",C.style.zIndex="999",C.style.color="white",C.style.display="flex",C.style.flexDirection="row",C.style.color=b.parentElement.parentElement&&window.getComputedStyle(b.parentElement.parentElement).color||"white";const E=document.createElement("span");C.append(E),E.innerHTML="Heat map transparency";const k=document.createElement("input");C.append(k),k.type="range",k.min=0,k.max=255,k.value=150,T(k.value),k.oninput=e=>T(k.value)}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);