import{E as k,F as C,G as A,I as u,N as E,g as M,h as c,j as f,k as h,ka as I,n as F,o as T}from"./chunk-2RZZVVGO.mjs";var _='"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',w={position:"relative",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},P={...w,borderRadius:6,background:"rgba(136, 85, 255, 0.3)",color:"#85F",border:"1px dashed #85F",flexDirection:"column"},z={onClick:{type:u.EventHandler},onMouseEnter:{type:u.EventHandler},onMouseLeave:{type:u.EventHandler}},$={type:u.Number,title:"Font Size",min:2,max:200,step:1,displayStepper:!0},L={font:{type:u.Boolean,title:"Font",defaultValue:!1,disabledTitle:"Default",enabledTitle:"Custom"},fontFamily:{type:u.String,title:"Family",placeholder:"Inter",hidden:({font:e})=>!e},fontWeight:{type:u.Enum,title:"Weight",options:[100,200,300,400,500,600,700,800,900],optionTitles:["Thin","Extra-light","Light","Regular","Medium","Semi-bold","Bold","Extra-bold","Black"],hidden:({font:e})=>!e}};function N(e,t){return B(!0,e,t)}function K(e,t){return B(!1,e,t)}function B(e,t,a=!0){let n=E();c(()=>{a&&n===e&&t()},[n])}function O(e){return e.startsWith("var(--token-")?"rgb"+e.split(") /*")[0].split(", rgb")[1]:e}function U(e){return k(O(e)).toValue()}var g=e=>e instanceof F;function j(e,t){c(()=>g(e)?e.onChange(t):void 0)}function G(e){let t=Math.floor(e/60),a=Math.floor(e%60);return t+":"+(a<10?"0":"")+a}function R(e){let t=h(null);return t.current===null&&(t.current=e()),t.current}function D(e,t){var a;let n=h(t),l=h(),s=h(!1),p=C.current()===C.canvas,d=t?.onChangeDeps?t.onChangeDeps:[],y=M(t?.onChange,[...d]),b=M(m=>!((a=n.current)===null||a===void 0)&&a.transform?n.current.transform(m):m,[]),S=R(()=>g(e)?e:T(b(e)));return c(()=>{if(!g(e)&&s.current){var m,x;let V=b(e);if((m=l.current)===null||m===void 0||m.stop(),y&&y(V,S),((x=n.current)===null||x===void 0?void 0:x.animate)&&!p){var v;l.current=A(S,V,(v=n.current)===null||v===void 0?void 0:v.transition)}else S.set(V)}s.current=!0},[e,...d]),S}var q={100:"Thin",200:"Extra-light",300:"Light",400:"Regular",500:"Medium",600:"Semi-bold",700:"Bold",800:"Extra-bold",900:"Black"};function W(e){let{fontFamily:t="Inter",fontSize:a=16,fontWeight:n=400,font:l=!1}=e,s=q[n],p=`"${t} ${s}", "${t}", ${_}`,d=t?{fontSize:a,fontWeight:n,fontFamily:p}:{fontSize:a,fontWeight:n},y=async()=>{await I.loadWebFontsFromSelectors([`CUSTOM;${t}`,`CUSTOM;${t} ${s}`,`GF;${t}-${s.toLowerCase()}`]).catch(b=>console.error(b))};return c(()=>{l&&y()},[l,t,n]),d}function H(e){let{borderRadius:t,isMixedBorderRadius:a,topLeftRadius:n,topRightRadius:l,bottomRightRadius:s,bottomLeftRadius:p}=e;return f(()=>a?`${n}px ${l}px ${s}px ${p}px`:`${t}px`,[t,a,n,l,s,p])}var J={borderRadius:{title:"Radius",type:u.FusedNumber,toggleKey:"isMixedBorderRadius",toggleTitles:["Radius","Radius per corner"],valueKeys:["topLeftRadius","topRightRadius","bottomRightRadius","bottomLeftRadius"],valueLabels:["TL","TR","BR","BL"],min:0}};function Y(e){let{padding:t,paddingPerSide:a,paddingTop:n,paddingRight:l,paddingBottom:s,paddingLeft:p}=e;return f(()=>a?`${n}px ${l}px ${s}px ${p}px`:t,[t,a,n,l,s,p])}var Z={padding:{type:u.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0,title:"Padding"}};function ee(){return f(()=>C.current()===C.canvas,[])}export{w as a,P as b,z as c,L as d,N as e,K as f,U as g,g as h,j as i,G as j,D as k,W as l,ee as m,H as n,J as o,Y as p,Z as q};
//# sourceMappingURL=chunk-D65GEEWZ.mjs.map
