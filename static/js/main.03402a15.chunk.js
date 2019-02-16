(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{270:function(e,t,n){e.exports=n(664)},664:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(31),l=n.n(i),c=n(22),o=n(268),s=n.n(o),u=n(34),p=n.n(u),h=n(27),d=n.n(h),m=n(32),g=n.n(m),f=n(108),E=n.n(f);var b,y,v=Object(c.withStyles)(function(e){return{textField:{margin:e.spacing.unit,width:200}}})(function(e){var t=e.classes,n=e.label,a=e.value;return r.a.createElement(d.a,{item:!0},r.a.createElement(E.a,{label:n,className:t.textField,value:a,margin:"none",variant:"standard",InputProps:{readOnly:!0}}))}),w=n(33),x=n(39),O=n(40),j=(b={},Object(O.a)(b,"TRAIN",function(e,t){return Object(x.a)({},e,{snackbar:{open:!0,info:{message:"perceptron trained",key:(new Date).getTime()}},calculated:Object(x.a)({},e.calculated,{index:t.index,weights:t.weights,products:t.products,weightedSum:t.weightedSum,weightDiff:t.weightDiff,output:t.output,errors:t.errors,epoch:t.epoch})})}),Object(O.a)(b,"CHANGE_HYPERPLANE",function(e,t){return Object(x.a)({},e,{snackbar:{open:!0,info:{message:"the base hyperplane changed",key:(new Date).getTime()}},calculated:Object(x.a)({},e.calculated,{weightDiff:t.weightDiff,errors:t.errors}),hyperplane:t.hyperplane,trainingSet:t.trainingSet})}),Object(O.a)(b,"CHANGE_CALCULATED",function(e,t){return Object(x.a)({},e,{snackbar:{open:!0,info:{message:"the training set changed",key:(new Date).getTime()}},calculated:Object(x.a)({},t.calculated),trainingSet:t.trainingSet})}),Object(O.a)(b,"CHANGE_LEARNING_RATE",function(e,t){return Object(x.a)({},e,{snackbar:{open:!0,info:{message:"the learning rate changed",key:(new Date).getTime()}},learningRate:t.learningRate})}),b),N=Object(O.a)({},"CHANGE_TAB_INDEX",function(e,t){return t.tabIndex}),C=(y={},Object(O.a)(y,"CHANGE_SNACKBAR",function(e,t){return t.snackbar}),Object(O.a)(y,"TOGGLE_SNACKBAR",function(e,t){return Object(x.a)({},e,{open:t.open})}),y),S=Object(O.a)({},"TOGGLE_SHOW_NEXT",function(e,t){return t.showNext}),A=Object(O.a)({},"CHANGE_TRAINING_SET",function(e,t){return t.trainigSet}),k=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(a.type)?t[a.type](n,a):n}},I=k({},j),T=k(0,N),G=k({},C),P=k(!1,S),R=k({},{}),_=k([],A),D=k(.1,{}),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(x.a)({},I(Object(x.a)({},e,{tabIndex:T(e.tabIndex,t),snackbar:G(e.snackbar,t),showNext:P(e.showNext,t),calculated:R(e.calculated,t),trainingSet:_(e.trainingSet,t),learningRate:D(e.learningRate,t)}),t))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Array.from({length:e},function(){return e=t,a=n,Math.random()*(a-e)+e;var e,a})},M=function(){return 10*Math.random()},K=function(e,t,n){var a=Object(w.a)(n,3),r=a[0],i=a[1];return t>=(-1*a[2]-e*r)/i?1:0},B=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=[],a=0;a<t;a++){var r=M(),i=M(),l=K(r,i,e);n.push({inputs:[r,i,1],target:l})}return n},z=function(e,t){for(var n=[],a=0;a<3;a++)n.push(e[a]*t[a]);return n},W=function(e){return e.reduce(function(e,t){return e+t})},X=function(e){return e>=0?1:0},F=function(e,t){return e-t},U=function(e,t,n){if(0===t)return[0,0,0];for(var a=[],r=0;r<3;r++)a.push(n*t*e[r]);return a},J=function(e,t){for(var n=[],a=0;a<3;a++)n.push(e[a]+t[a]);return n},V=r.a.createContext();V.Consumer;var Y=Object(c.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},paper:{padding:e.spacing.unit}}})(function(e){var t=e.classes,n=Object(a.useContext)(V).state,i=n.calculated,l=i.index,c=i.weights,o=n.trainingSet[l].inputs;return r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignContent:"center",spacing:16,className:t.container},o.slice(0,2).map(function(e,n){return r.a.createElement(d.a,{key:n,item:!0},r.a.createElement(g.a,{className:t.paper},r.a.createElement(v,{label:"input",value:e}),r.a.createElement(v,{label:"weight",value:c[n]})))}))});var q=Object(c.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},paper:{padding:e.spacing.unit}}})(function(e){var t=e.classes,n=Object(a.useContext)(V).state;return r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignContent:"center",spacing:16,className:t.container},n.calculated.products.map(function(e,n){return r.a.createElement(d.a,{key:n,item:!0},r.a.createElement(g.a,{className:t.paper},n<2?r.a.createElement(v,{label:"product",value:e}):r.a.createElement(v,{label:"bias",value:e})))}))});var Q=Object(c.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},paper:{padding:e.spacing.unit}}})(function(e){var t=e.classes,n=Object(a.useContext)(V).state;return r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignContent:"center",spacing:16,className:t.container},r.a.createElement(d.a,{item:!0},r.a.createElement(g.a,{className:t.paper},r.a.createElement(v,{label:"sum",value:n.calculated.weightedSum}))))});var Z=Object(c.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},paper:{padding:e.spacing.unit}}})(function(e){var t=e.classes,n=Object(a.useContext)(V).state,i=n.calculated,l=i.index,c=i.errors,o=i.epoch,s=i.output,u=n.trainingSet.length,p=n.trainingSet[l],h=c[o*u+l];return r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignContent:"center",spacing:16,className:t.container},r.a.createElement(d.a,{item:!0},r.a.createElement(g.a,{className:t.paper},r.a.createElement(v,{label:"target",value:p.target}))),r.a.createElement(d.a,{item:!0},r.a.createElement(g.a,{className:t.paper},r.a.createElement(v,{label:"output",value:s}))),r.a.createElement(d.a,{item:!0},r.a.createElement(g.a,{className:t.paper},r.a.createElement(v,{label:"error",value:h}))))});var $=function(){return r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignContent:"center",spacing:16},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(Y,null)),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(q,null)),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(Q,null)),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(Z,null)))},ee=n(667),te=n(668),ne=n(533),ae=n(150),re=n(151),ie=n(669),le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=Math.pow(10,t);return Math.round(e*n)/n},ce=function(e,t){var n=Object(w.a)(e,3),a=n[0],r=n[1],i=n[2],l=Object(w.a)(t,3),c=l[0],o=l[1],s=l[2];return[{x:0,y:le(-i/r),xp:0,yp:le(-s/o)},{x:10,y:le((-10*a-i)/r),xp:10,yp:le((-10*c-s)/o)}]},oe=function(e,t,n,a){for(var r=[],i=[],l=[],c=[],o=0;o<e.length;o++){var s=e[o],u=Object(w.a)(s.inputs,2),p=u[0],h=u[1],d=s.target,m={x:p,y:h,z:1};o===t?l.push(m):a&&o===n?c.push(m):0===d?r.push(m):i.push(m)}return{classA:r,classB:i,currentPoint:l,nextPoint:c}};var se=function(){var e=Object(a.useContext)(V).state,t=e.calculated,n=t.weights,i=t.index,l=e.trainingSet,c=e.showNext,o=ce(e.hyperplane,n),s=oe(l,i,(i+1)%l.length,c);return r.a.createElement(ee.a,{width:"100%",height:500},r.a.createElement(te.a,{margin:{top:5,right:20,bottom:5,left:0}},r.a.createElement(ne.a,{name:"base",yAxisId:"0",data:o,type:"monotone",dataKey:"y",stroke:"green"}),r.a.createElement(ne.a,{name:"perceptron",yAxisId:"0",data:o,type:"monotone",dataKey:"yp",stroke:"blue"}),r.a.createElement(ne.a,{name:"class a",yAxisId:"0",data:s.classA,dataKey:"y",isAnimationActive:!1,stroke:"transparent",dot:{fill:"black"}}),r.a.createElement(ne.a,{name:"class b",yAxisId:"0",data:s.classB,dataKey:"y",isAnimationActive:!1,stroke:"transparent",dot:{fill:"red"}}),r.a.createElement(ne.a,{name:"current",yAxisId:"0",data:s.currentPoint,dataKey:"y",isAnimationActive:!1,stroke:"transparent",dot:{fill:"#818181",r:9}}),r.a.createElement(ne.a,{name:"next",yAxisId:"0",hide:!c,data:s.nextPoint,dataKey:"y",isAnimationActive:!1,stroke:"gray",dot:{fill:"#ead42e",r:9}}),r.a.createElement(ae.a,{dataKey:"x",type:"number",domain:[0,10],allowDataOverflow:!0}),r.a.createElement(re.a,{yAxisId:"0",dataKey:"y",type:"number",domain:[0,10],allowDataOverflow:!0}),r.a.createElement(ie.a,{strokeDasharray:"3 3"})))},ue=n(670),pe=n(665),he=n(666);var de=function(){var e=Object(a.useContext)(V).state,t=e.calculated,n=t.errors,i=t.epoch,l=e.trainingSet.length,c=n.filter(function(e,t){return t>=i*l&&t<n.length}).map(function(e,t){return{x:t,y:e}});return r.a.createElement(ee.a,{width:"100%",height:500},r.a.createElement(ue.a,{data:c,margin:{top:5,right:20,bottom:5,left:0}},r.a.createElement(pe.a,null),r.a.createElement(he.a,{name:"error",dataKey:"y",fill:"#8884d8",minPointSize:4}),r.a.createElement(ae.a,{dataKey:"x"}),r.a.createElement(re.a,null),r.a.createElement(ie.a,{strokeDasharray:"3 3"})))},me=n(241),ge=n.n(me);var fe=function(){return r.a.createElement(ge.a,{source:'# Perceptron\n\nI created [this react app](https://perceptron.arexinspace.com/) to play with a perceptron, changing the learning rate, the training set, etc and visualizing the neuron while you train it.\n\n\n# About the perceptron\n\nA perceptron is a linear threshold gate or binary classifier which can decide whether an input belongs to a certain set or not.\n\nThe threshold function or linear classifier is a function that maps its inputs to a single binary value. This splits a high-dimensional input space with a hyperplane: all points on one side of the hyperplane are classified as "yes", while the others are classified as "no". In the case of two dimensions the hyperplane is a line that divides the plane in two sides.\n\n![Threshold function](https://raw.githubusercontent.com/PacoMojica/perceptron/master/img/thresholdFunction.png)\n\nThe linear threshold gate, also known as McCulloch-Pitts neural model, models the strength of connections using weights and the threshold phenomenon, a value below the threshold produces no output. The input of the threshold function is the dot product between input feature vector and weights.\n\n![Threshold gate](https://raw.githubusercontent.com/PacoMojica/perceptron/master/img/thresholdGate.png)\n\nThe perceptron algorithm introduced the idea of training, if a problem is linearly separable, a single perceptron can find the weights that define the separating hyperplane. In the training proccess, weight updates occur only when the error is greater than zero.\n\n\n# About the app\n\nWhen [the app](https://perceptron.arexinspace.com/) is started, an array of 20 random inputs is created, to decide if an input belongs to a class, a base hyperplane is created, in this case a line defined by three parameters.\n\nThe sidebar contains buttons to train, change the training set and change the base hyperplane. The bottom part contains information about the training state.\n\nIn settings you can change the learning rate and the training set size.\n\nIn the top bar you can change the view to:\n\n- The hyperplanes, the green line is the \'base hyperplane\' and the blue line is the one defined by the perceptron.\n- The inputs and weights, here you can see the inputs, the weights, the products, the bias, etc.\n- The error graph, it shows the error for each input vector passed to the perceptron\n\n\n[View on GitHub](https://github.com/PacoMojica/perceptron)'})},Ee=function(e){var t=e.children;return r.a.createElement(p.a,{component:"div",style:{padding:24,minHeight:500}},t)};var be=Object(c.withStyles)(function(e){return{root:{flexGrow:1}}})(function(e){var t=e.classes,n=Object(a.useContext)(V).state;return r.a.createElement("div",{className:t.root},0===n.tabIndex&&r.a.createElement(Ee,null,r.a.createElement(se,null)),1===n.tabIndex&&r.a.createElement(Ee,null,r.a.createElement($,null)),2===n.tabIndex&&r.a.createElement(Ee,null,r.a.createElement(de,null)),3===n.tabIndex&&r.a.createElement(Ee,null,r.a.createElement(fe,null)))}),ye=n(157),ve=n.n(ye),we=n(254),xe=n.n(we),Oe=n(61),je=n.n(Oe),Ne=n(113),Ce=n.n(Ne),Se=n(115),Ae=n.n(Se),ke=n(114),Ie=n.n(ke),Te=n(116),Ge=n.n(Te);function Pe(e){var t=e.classes,n=e.Icon,a=e.onClick;return r.a.createElement(Ce.a,{button:e.button,onClick:function(){return"function"===typeof a&&a()},className:e.nested?t.nested:t.parent},r.a.createElement(Ie.a,null,r.a.createElement(n,null)),r.a.createElement(Ae.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{component:"span",className:t.inline,color:"textPrimary"},e.value)),secondary:e.label}))}Pe.defaultProps={label:"",Icon:Ge.a,nested:!1,button:!1};var Re=Object(c.withStyles)(function(e){return{inline:{display:"inline",paddingLeft:8},parent:{paddingLeft:2*e.spacing.unit},nested:{paddingLeft:6*e.spacing.unit}}})(Pe),_e=n(244),De=n.n(_e),He=n(242),Le=n.n(He),Me=n(243),Ke=n.n(Me);function Be(e){var t=e.classes,n=e.children,i=e.title,l=e.Icon,c=e.startOpen,o=e.handleMouseEnter,s=e.handleMouseLeave,u=Object(a.useState)(c),p=Object(w.a)(u,2),h=p[0],d=p[1];return r.a.createElement("div",null,r.a.createElement(Ce.a,{button:!0,className:t.parent,onClick:function(){d(!h)},onMouseEnter:o,onMouseLeave:s},r.a.createElement(Ie.a,null,r.a.createElement(l,null)),r.a.createElement(Ae.a,{primary:i}),h?r.a.createElement(Le.a,null):r.a.createElement(Ke.a,null)),r.a.createElement(De.a,{in:h,timeout:"auto",onMouseEnter:o,onMouseLeave:s,unmountOnExit:!0},r.a.createElement(je.a,{component:"div",disablePadding:!0},n.map(function(e){return r.a.cloneElement(e,{nested:!0})}))))}Be.defaultProps={Icon:Ge.a,startOpen:!1};var ze=Object(c.withStyles)(function(e){return{inline:{display:"inline",paddingLeft:8},parent:{paddingLeft:2*e.spacing.unit}}})(Be),We=n(247),Xe=n.n(We),Fe=n(248),Ue=n.n(Fe),Je=n(246),Ve=n.n(Je),Ye=n(245),qe=n.n(Ye),Qe=n(252),Ze=n.n(Qe),$e=n(253),et=n.n($e),tt=n(156),nt=n.n(tt),at=n(250),rt=n.n(at),it=n(249),lt=n.n(it),ct=n(251),ot=n.n(ct),st=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var i={type:e};return n.forEach(function(e,t){return i[e]=a[t]}),i}},ut=st("CHANGE_TAB_INDEX","tabIndex"),pt=(st("CHANGE_INDEX","index"),st("CHANGE_TRAINING_SET","trainingSet"),st("CHANGE_HYPERPLANE","hyperplane","trainingSet","errors","weightDiff")),ht=st("CHANGE_LEARNING_RATE","learningRate"),dt=(st("UPDATE_EPOCH","epoch"),st("CHANGE_CALCULATED","calculated","trainingSet")),mt=st("TRAIN","index","weights","products","weightedSum","weightDiff","output","errors","epoch"),gt=(st("CHANGE_SNACKBAR","snackbar"),st("TOGGLE_SNACKBAR","open")),ft=st("TOGGLE_SHOW_NEXT","showNext");var Et=function(){var e=Object(a.useContext)(V),t=e.state,n=e.dispatch,i=t.calculated,l=i.index,c=i.epoch,o=i.weightDiff,s=t.trainingSet.length,u=(l+1)%s,p=t.trainingSet[u];return r.a.createElement(je.a,{dense:!0},r.a.createElement(ze,{title:"Weight Updates",Icon:qe.a,startOpen:!0},o.map(function(e,t){return r.a.createElement(Re,{key:t,label:t<2?"weight":"bias",value:e,Icon:0===e?Ve.a:e>0?Xe.a:Ue.a})})),r.a.createElement(ze,{title:"Training Info"},r.a.createElement(Re,{key:"index",label:"index",value:l}),r.a.createElement(Re,{key:"set size",label:"set size",value:s,Icon:lt.a}),r.a.createElement(Re,{key:"current epoch",label:"current epoch",value:c,Icon:rt.a}),r.a.createElement(Re,{key:"learning rate",label:"learning rate",value:t.learningRate,Icon:ot.a})),r.a.createElement(ze,{title:"Next Item",Icon:Ze.a,handleMouseEnter:function(){n(ft(!0))},handleMouseLeave:function(){n(ft(!1))}},r.a.createElement(Re,{key:"input 1",label:"input 1",value:p.inputs[0],Icon:nt.a}),r.a.createElement(Re,{key:"input 2",label:"input 2",value:p.inputs[1],Icon:nt.a}),r.a.createElement(Re,{key:"target",label:"target",value:p.target,Icon:et.a})))},bt=n(119);var yt=function(){var e=Object(a.useContext)(V),t=e.state,n=e.dispatch,i=t.learningRate,l=t.hyperplane,c=t.calculated,o=c.errors,s=c.index,u=c.weights,p=c.weightDiff,h=c.epoch,d=t.trainingSet.length;return r.a.createElement(je.a,{dense:!0},r.a.createElement(Re,{value:"Train",button:!0,onClick:function(){return function(){var e=J(u,p),a=(s+1)%d,r=!a&&h+1||h,l=t.trainingSet[a],c=l.inputs,m=l.target,g=z(c,e),f=W(g),E=X(f),b=F(m,E),y=[].concat(Object(bt.a)(o),[b]),v=U(c,b,i);n(mt(a,e,g,f,v,E,y,r))}()}}),r.a.createElement(Re,{value:"Change Base Hyperplane",button:!0,onClick:function(){return function(){var e=L(),a=t.trainingSet.map(function(t){var n=t.inputs;return{inputs:Object(bt.a)(n),target:K(n[0],n[1],e)}}),r=a[s],l=r.inputs,c=r.target,u=F(c,t.calculated.output),p=[].concat(Object(bt.a)(o.filter(function(e,t){return t!==o.length-1})),[u]),h=U(l,u,i);n(pt(e,a,p,h))}()}}),r.a.createElement(Re,{value:"Change Training Set",button:!0,onClick:function(){return function(){var e=B(l,d),t=e[0],a=t.inputs,r=t.target,c=z(a,u),o=W(c),s=X(o),p=F(r,s),h=U(a,p,i);n(dt({index:0,weights:u,products:c,weightedSum:o,weightDiff:h,output:s,errors:[p],epoch:0},e))}()}}))};var vt=Object(c.withStyles)(function(e){return{drawer:{width:300,flexShrink:0},toolbar:e.mixins.toolbar,drawerPaper:{width:300}}},{withTheme:!0})(function(e){var t=e.classes;return r.a.createElement("nav",{className:t.drawer},r.a.createElement(xe.a,{variant:"permanent",classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(ve.a,null),r.a.createElement(yt,null),r.a.createElement(ve.a,null),r.a.createElement(Et,null)))}),wt=n(255),xt=n.n(wt),Ot=n(75),jt=n.n(Ot),Nt=n(256),Ct=n.n(Nt);var St=Object(c.withStyles)(function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing.unit,backgroundColor:e.palette.background.default},toolbar:e.mixins.toolbar,close:{padding:e.spacing.unit/2}}})(function(e){var t=e.classes,n=Object(a.useContext)(V),i=n.state,l=n.dispatch,c=i.snackbar,o=c.open,s=c.info,u=function(e,t){"clickaway"!==t&&l(gt(!1))};return r.a.createElement("div",{className:t.root},r.a.createElement(vt,null),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(be,null),r.a.createElement(xt.a,{key:s.key,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:o,autoHideDuration:4e3,onClose:u,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},s.message),action:[r.a.createElement(jt.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:u},r.a.createElement(Ct.a,null))]})))}),At=n(264),kt=n.n(At),It=n(265),Tt=n.n(It),Gt=n(267),Pt=n.n(Gt),Rt=n(87),_t=n.n(Rt),Dt=n(266),Ht=n.n(Dt),Lt=n(259),Mt=n.n(Lt),Kt=n(263),Bt=n.n(Kt),zt=n(261),Wt=n.n(zt),Xt=n(260),Ft=n.n(Xt),Ut=n(152),Jt=n.n(Ut),Vt=n(262),Yt=n.n(Vt),qt=n(257),Qt=n.n(qt),Zt=n(258),$t=n.n(Zt);var en=function(e){var t=e.id,n=e.type,i=e.label,l=e.initState,c=e.helperText,o=e.dispatch,s=Object(a.useState)(l),u=Object(w.a)(s,2),p=u[0],h=u[1];return r.a.createElement(E.a,{margin:"dense",id:t,label:i,type:n,value:p,variant:"filled",helperText:c,fullWidth:!0,onKeyPress:function(e){"Enter"===e.key&&o(p)},onChange:function(e){var t=e.target;h(t.value)},InputProps:{endAdornment:r.a.createElement(Qt.a,{position:"end"},r.a.createElement(jt.a,{title:"apply change",onClick:function(){return o(p)}},r.a.createElement($t.a,null)))}})};var tn=Object(c.withStyles)(function(e){return{link:{paddingTop:e.spacing.unit}}},{withTheme:!0})(function(e){var t=e.isOpen,n=e.handleClose,i=e.classes,l=Object(a.useContext)(V),c=l.state,o=l.dispatch,s=c.hyperplane,u=c.learningRate,h=c.calculated.weights;return r.a.createElement(Mt.a,{open:t,onClose:function(){return n(!t)},"aria-labelledby":"form-dialog-title",maxWidth:"xs"},r.a.createElement(Ft.a,{id:"form-dialog-title"},"Settings"),r.a.createElement(Wt.a,null,r.a.createElement(en,{id:"learningRate",type:"number",label:"Learning Rate",initState:u,helperText:"changes how quickly or how slowly you want to update the weights",dispatch:function(e){return o(ht(e))}}),r.a.createElement(en,{id:"trainingSetSize",type:"number",label:"Training Set Size",initState:c.trainingSet.length,helperText:"generates a new training set with the supplied size",dispatch:function(e){return function(e){var t=B(s,e=e>0?e:1),n=t[0],a=n.inputs,r=n.target,i=z(a,h),l=W(i),c=X(l),p=F(r,c),d=U(a,p,u);o(dt({index:0,weights:h,products:i,weightedSum:l,weightDiff:d,output:c,errors:[p],epoch:0},t))}(e)}}),r.a.createElement(p.a,{align:"center",className:i.link},r.a.createElement(Yt.a,{href:"https://github.com/PacoMojica/perceptron",target:"_blank",rel:"noopener noreferrer",variant:"body1"},"View on GitHub"))),r.a.createElement(Bt.a,null,r.a.createElement(Jt.a,{onClick:function(){return n(!t)},color:"primary"},"close")))});var nn=Object(c.withStyles)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1},title:{width:230},moreButton:{marginRight:70}}})(function(e){var t=e.classes,n=Object(a.useContext)(V),i=n.state,l=n.dispatch,c=Object(a.useState)(!1),o=Object(w.a)(c,2),s=o[0],u=o[1];return r.a.createElement(kt.a,{position:"fixed",className:t.appBar},r.a.createElement(tn,{isOpen:s,handleClose:function(e){u(e)}}),r.a.createElement(Tt.a,null,r.a.createElement(p.a,{variant:"h5",color:"inherit",className:t.title},"Perceptron"),r.a.createElement(jt.a,{onClick:function(e){return u(!0)},color:"inherit",className:t.moreButton},r.a.createElement(Ht.a,null)),r.a.createElement(Pt.a,{value:i.tabIndex,onChange:function(e,t){l(ut(t))}},r.a.createElement(_t.a,{label:"Hyperplanes"}),r.a.createElement(_t.a,{label:"Inputs & Weigths"}),r.a.createElement(_t.a,{label:"Error Graph"}),r.a.createElement(_t.a,{label:"About"}))))});var an=Object(c.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper},container:{flexGrow:1,margin:3*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(s.a,null),r.a.createElement(nn,null),r.a.createElement("div",{className:t.container},r.a.createElement(St,null)))});n(662);l.a.render(r.a.createElement(function(e){var t=e.children,n=Object(a.useReducer)(H,function(){var e=L(),t=L(),n=B(e),a=n[0],r=a.inputs,i=a.target,l=z(r,t),c=W(l),o=X(c),s=F(i,o);return{tabIndex:0,snackbar:{open:!1,info:{message:"",key:""}},showNext:!1,calculated:{index:0,weights:t,products:l,weightedSum:c,weightDiff:U(r,s,.1),output:o,errors:[s],epoch:0},hyperplane:e,trainingSet:n,learningRate:.1}}()),i=Object(w.a)(n,2),l={state:i[0],dispatch:i[1]};return r.a.createElement(V.Provider,{value:l},t)},null,r.a.createElement(an,null)),document.getElementById("root"))}},[[270,2,1]]]);
//# sourceMappingURL=main.03402a15.chunk.js.map