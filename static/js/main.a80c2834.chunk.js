(this.webpackJsonpdraganddrop_flowcharts=this.webpackJsonpdraganddrop_flowcharts||[]).push([[0],{39:function(t,e,n){t.exports=n(96)},95:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(8),a=n.n(i),p=n(5),l=n(2);function u(){var t=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 100vh;\n"]);return u=function(){return t},t}function c(){var t=Object(p.a)(["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"]);return c=function(){return t},t}var d=Object(l.createGlobalStyle)(c()),s=l.default.div(u()),f=function(t){var e=t.children;return r.createElement(s,null,e,r.createElement(d,null))},m=n(4);function x(){var t=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"]);return x=function(){return t},t}var g=l.default.div(x());function y(){var t=Object(p.a)(['\n    order: -1;\n    overflow-y: auto;\n    flex: 0 0 350px;\n    padding: 32px;\n    background: #FFF;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    padding-inline-start: 40px;\n    font-family: proxima-nova,Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;\n']);return y=function(){return t},t}var b=l.default.div(y()),v=n(37),E=n(38);n(95);function h(){var t=Object(p.a)(["\n  background: #FFF;\n  width: 279px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  margin: 8px 0 0 0;\n  box-sizing: border-box;\n  border: 1px solid #BAC2CA;\n  border-radius: 4px;\n  color: #606A72;\n  transition: background-color .25s ease-out,color .25s ease-out;\n  text-align: center;\n"]);return h=function(){return t},t}var w=l.default.div(h()),k=function(t){var e=t.type,n=t.ports,o=t.properties,i=t.bg;return r.createElement(w,{style:{background:i},draggable:!0,onDragStart:function(t){t.dataTransfer.setData(m.REACT_FLOW_CHART,JSON.stringify({type:e,ports:n,properties:o}))}},r.createElement("div",{className:"icon-container"},r.createElement(v.a,{className:"icon-bg",icon:E.a}),e))},F={offset:{x:0,y:0},nodes:{node1:{id:"node1",type:"output-only",position:{x:400,y:100},ports:{port1:{id:"port1",type:"output",properties:{value:"yes"}}}},node2:{id:"node2",type:"End",position:{x:400,y:300},ports:{port1:{id:"port1",type:"input"}}}},links:{link1:{id:"link1",from:{nodeId:"node1",portId:"port1"},to:{nodeId:"node2",portId:"port1"}}},selected:{},hovered:{}};function O(){var t=Object(p.a)(["\n    letter-spacing: .5px;\n    text-transform: uppercase;\n    font-size: 14px;\n    line-height: 14px;\n    font-weight: 600;\n    color: #606A72;\n    margin: 32px 0 8px 0;\n"]);return O=function(){return t},t}var j=l.default.div(O()),A=function(){return r.createElement(f,null,r.createElement(g,null,r.createElement(m.FlowChartWithState,{initialValue:F,config:{snapToGrid:!0}})),r.createElement(b,null,r.createElement(j,null,"Actions"),r.createElement(k,{bg:"white",type:"Email",ports:{port1:{id:"port1",type:"input"},port2:{id:"port2",type:"output"}}}),r.createElement(k,{bg:"white",type:"Update Profile Property",ports:{port1:{id:"port1",type:"input",properties:{custom:"property"}},port2:{id:"port2",type:"output",properties:{custom:"property"}}}}),r.createElement(j,null,"Timming"),r.createElement(k,{bg:"#ECF3F5",type:"Time Delay",ports:{port1:{id:"port1",type:"input"},port2:{id:"port2",type:"output"}}}),r.createElement(j,null,"Logic"),r.createElement(k,{bg:"#D9E0E7",type:"Conditional split",ports:{port1:{id:"port1",type:"input"},port2:{id:"port2",type:"output"}}}),r.createElement(k,{bg:"#D9E0E7",type:"Trigger Split",ports:{port1:{id:"port1",type:"input"},port2:{id:"port2",type:"output"}}})))};var C=function(){return o.a.createElement(f,null,o.a.createElement(A,null))};a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a80c2834.chunk.js.map