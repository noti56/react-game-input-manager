"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react");function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),o=function(){var t=navigator.userAgent.toLowerCase();return t.includes("win")?"windows":t.includes("macintosh")?"macOS":t.includes("x11")?"unix":t.includes("linux")&&!t.includes("android")?"linux":t.includes("iphone")?"iphone":t.includes("android")?"android":void 0},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={},a={},s={},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default={buttons:["A","B","X","Y","LB","RB","LT","RT","Back","Start","LS","RS","DPadUp","DPadDown","DPadLeft","DPadRight"],axis:["LeftStickX","-LeftStickY","RightStickX","-RightStickY"],buttonAxis:[null,null,null,null,null,null,"LeftTrigger","RightTrigger"]},Object.defineProperty(s,"__esModule",{value:!0}),s.XBOX=void 0;var l,c=(l=u)&&l.__esModule?l:{default:l};s.XBOX=c.default,s.default={XBOX:c.default},Object.defineProperty(a,"__esModule",{value:!0});var d=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){return t&&t.__esModule?t:{default:t}}(n.default),f=s;var h=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return o.padState={connected:!1,buttons:{A:!1,B:!1,X:!1,Y:!1,LB:!1,LT:!1,LS:!1,RB:!1,RT:!1,RS:!1,Start:!1,Back:!1,DPadUp:!1,DPadRight:!1,DPadDown:!1,DPadLeft:!1},axis:{LeftStickX:0,LeftStickY:0,RightStickX:0,RightStickY:0,RightTrigger:0,LeftTrigger:0}},o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,p.default.Component),d(e,[{key:"componentDidMount",value:function(){this.mounted=!0,window&&window.requestAnimationFrame&&window.requestAnimationFrame(this.updateGamepad.bind(this))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateGamepad",value:function(){if(this.mounted){var t=this.props.gamepadIndex,e=navigator.getGamepads();if(e.length&&e.length>t&&e[t]){var n=e[t];this.padState.connected||(this.padState.connected=!0,this.props.onConnect(t)),this.updateAllButtons(n),this.updateAllAxis(n)}else this.padState.connected&&(this.padState.connected=!1,this.props.onDisconnect(t));window&&window.requestAnimationFrame&&window.requestAnimationFrame(this.updateGamepad.bind(this))}}},{key:"updateAllButtons",value:function(t){for(var e=0;e<t.buttons.length;++e){var n=t.buttons[e].pressed,o=t.buttons[e].value,i=this.buttonIndexToButtonName(e);this.updateButton(i,n);var r=this.buttonIndexToAxisName(e);this.updateAxis(r,o)}}},{key:"updateButton",value:function(t,e){void 0!==this.padState.buttons[t]&&this.padState.buttons[t]!==e&&(this.padState.buttons[t]=e,this.props.onButtonChange(t,e),this.props["onButton"+(e?"Down":"Up")](t),e&&this.props["on"+t.replace("DPad","")]())}},{key:"updateAllAxis",value:function(t){for(var e=0;e<t.axes.length;++e){var n=this.axisIndexToAxisName(e);t.axes[e],this.updateAxis(n,t.axes[e])}}},{key:"updateAxis",value:function(t,e){if(t&&null!=e&&NaN!==e){var n="-"===t[0],o=e*(n?-1:1);if(Math.abs(o)<this.props.deadZone&&(o=0),n&&(t=t.substr(1)),this.padState.axis[t]!==o){var i=this.padState.axis[t];this.padState.axis[t]=o,this.props.onAxisChange(t,o,i),"LeftStickX"===t&&(i<=this.props.stickThreshold&&o>this.props.stickThreshold&&this.props.onRight(),i>=-this.props.stickThreshold&&o<-this.props.stickThreshold&&this.props.onLeft()),"LeftStickY"===t&&(i<=this.props.stickThreshold&&o>this.props.stickThreshold&&this.props.onUp(),i>=-this.props.stickThreshold&&o<-this.props.stickThreshold&&this.props.onDown())}}}},{key:"buttonIndexToButtonName",value:function(t){var e=this.props.layout;return e.buttons&&e.buttons.length>=t+1?e.buttons[t]:null}},{key:"buttonIndexToAxisName",value:function(t){var e=this.props.layout;return e.buttonAxis&&e.buttonAxis.length>=t+1?e.buttonAxis[t]:null}},{key:"axisIndexToAxisName",value:function(t){var e=this.props.layout;return e.axis&&e.axis.length>=t+1?e.axis[t]:null}},{key:"render",value:function(){return p.default.Children.only(this.props.children)}}]),e}();h.defaultProps={layout:f.XBOX,stickThreshold:.5,deadZone:.08,gamepadIndex:0,onConnect:function(){},onDisconnect:function(){},onButtonDown:function(){},onButtonUp:function(){},onButtonChange:function(){},onAxisChange:function(){},onA:function(){},onB:function(){},onX:function(){},onY:function(){},onStart:function(){},onBack:function(){},onLT:function(){},onRT:function(){},onLB:function(){},onRB:function(){},onLS:function(){},onRS:function(){},onUp:function(){},onDown:function(){},onLeft:function(){},onRight:function(){}},a.default=h,Object.defineProperty(r,"__esModule",{value:!0}),r.layouts=r.Gamepad=void 0;var v=m(a),y=m(s);function m(t){return t&&t.__esModule?t:{default:t}}v.default.layouts=y.default,r.Gamepad=v.default,r.layouts=y.default;var g=r.default=v.default;!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}('.cursor {\n  /* left: 50%; */\n  width: 100%;\n  height: 100%;\n  /* cursor: none; */\n\n  position: fixed;\n  /* top: 50%; */\n  /* transform: translate(-50%, -50%); */\n  /* border-radius: 100%; */\n}\n.virtual-joystic {\n  top: 0;\n  left: 0;\n  background-color: inherit;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999999999999999999999999999999999999999999999999 !important;\n  /* display: flex; */\n  /* flex-direction: column; */\n  /* justify-content: space-between; */\n  /* align-items: flex-end; */\n}\n.joystics-wrapper {\n  position: absolute;\n  /* opacity: 0.8; */\n\n  display: flex;\n  width: 100%;\n  height: 27%;\n  justify-content: space-between;\n\n  align-self: flex-end;\n  bottom: 25%;\n}\n.space {\n  width: 40px;\n}\n.joystic-container {\n  /* filter: drop-shadow(0 0 0.75rem black); */\n  border-radius: 100%;\n}\n.VirtualJoystickButton-wrapper {\n  position: absolute;\n  right: 18%;\n  bottom: 15%;\n  /* filter: drop-shadow(0 0 0.4rem black); */\n  /* width: 25%;\n  height: 50%; */\n\n  display: grid;\n  grid-template-areas:\n    ". y ."\n    "x . b"\n    ". a .";\n}\n#Y {\n  grid-area: y;\n}\n#X {\n  grid-area: x;\n}\n#B {\n  grid-area: b;\n}\n#A {\n  grid-area: a;\n}\n\n.virtual-button {\n  opacity: 0.7;\n  border-radius: 100%;\n  background-color: lightgray;\n  font-size: larger;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  /* filter: drop-shadow(0 0 0.4rem black); */\n  border: 1px solid gray;\n}\n.shoulder {\n  position: absolute;\n  /* background-color: lightgray; */\n  font-size: larger;\n  display: flex;\n  flex-direction: column;\n  top: 25%;\n}\n.shoulder-button {\n  width: 70px;\n  height: 35px;\n  /* filter: drop-shadow(0 0 0.1rem black); */\n  border: 1px solid gray;\n  margin-bottom: 5px;\n  opacity: 0.7;\n  background-color: lightgray;\n}\n.right-shoulder {\n  right: 0;\n}\n.left-shoulder {\n  left: 0;\n}\n/* .VirtualJoystickButton-wrapper .text-button-wrapper {\n    background-color: gray;\n    border-radius: 50%;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n');var b={},k={},x={};!function(t){var e;Object.defineProperty(t,"__esModule",{value:!0}),t.JoystickShape=void 0,(e=t.JoystickShape||(t.JoystickShape={})).Circle="circle",e.Square="square"}(x);var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.shapeFactory=void 0;var _=x;w.shapeFactory=function(t,e){switch(t){case _.JoystickShape.Circle:return{borderRadius:e};case _.JoystickShape.Square:return{borderRadius:Math.sqrt(e)}}};var S={};Object.defineProperty(S,"__esModule",{value:!0}),S.shapeBoundsFactory=void 0;var P=x;S.shapeBoundsFactory=function(t,e,n,o,i,r,a,s,u){return t===P.JoystickShape.Square?{relativeX:o=R(e-u.left-s/2,s),relativeY:i=R(n-u.top-s/2,s)}:(r>a&&(o*=a/r,i*=a/r),{relativeX:o,relativeY:i})};var C,R=function(t,e){var n=e/2;return t>n?n:t<-n?-1*n:t},L=i&&i.__extends||(C=function(t,e){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},C(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}C(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),B=i&&i.__assign||function(){return B=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},B.apply(this,arguments)};Object.defineProperty(k,"__esModule",{value:!0}),k.Joystick=void 0;var E,M,T=n.default,O=x,j=w,A=S;!function(t){t.PointerDown="pointerdown",t.PointerMove="pointermove",t.PointerUp="pointerup"}(E||(E={})),function(t){t[t.TopRight=2.35619449]="TopRight",t[t.TopLeft=-2.35619449]="TopLeft",t[t.BottomRight=.785398163]="BottomRight",t[t.BottomLeft=-.785398163]="BottomLeft"}(M||(M={}));var D=function(t){function e(e){var n,o=t.call(this,e)||this;return o._stickRef=T.createRef(),o._baseRef=T.createRef(),o._pointerId=null,o.state={dragging:!1},o._throttleMoveCallback=(n=0,function(t){var e=(new Date).getTime(),i=o.props.throttle||0;if(!(e-n<i))return n=e,o.props.move?o.props.move(t):void 0}),o}return L(e,t),e.prototype.componentWillUnmount=function(){var t=this;this.props.followCursor&&window.removeEventListener(E.PointerMove,(function(e){return t._pointerMove(e)}))},e.prototype.componentDidMount=function(){var t=this;this.props.followCursor&&(this._parentRect=this._baseRef.current.getBoundingClientRect(),this.setState({dragging:!0}),window.addEventListener(E.PointerMove,(function(e){return t._pointerMove(e)})),this.props.start&&this.props.start({type:"start",x:null,y:null,distance:null,direction:null}))},e.prototype._updatePos=function(t){var e=this;window.requestAnimationFrame((function(){e.setState({coordinates:t})})),"number"==typeof this.props.minDistance&&t.distance<this.props.minDistance||this._throttleMoveCallback({type:"move",x:t.relativeX,y:-t.relativeY,direction:t.direction,distance:t.distance})},e.prototype._pointerDown=function(t){var e=this;this.props.disabled||this.props.followCursor||(this._parentRect=this._baseRef.current.getBoundingClientRect(),this.setState({dragging:!0}),window.addEventListener(E.PointerUp,(function(t){return e._pointerUp(t)})),window.addEventListener(E.PointerMove,(function(t){return e._pointerMove(t)})),this._pointerId=t.pointerId,this._stickRef.current.setPointerCapture(t.pointerId),this.props.start&&this.props.start({type:"start",x:null,y:null,distance:null,direction:null}))},e.prototype._getDirection=function(t){return t>M.TopRight||t<M.TopLeft?"FORWARD":t<M.TopRight&&t>M.BottomRight?"RIGHT":t<M.BottomLeft?"LEFT":"BACKWARD"},e.prototype._distance=function(t,e){return Math.hypot(t,e)},e.prototype._distanceToPercentile=function(t){var e=t/(this._baseSize/2)*100;return e>100?100:e},e.prototype._pointerMove=function(t){if(t.preventDefault(),this.state.dragging){if(!this.props.followCursor&&t.pointerId!==this._pointerId)return;var e=t.clientX,n=t.clientY,o=e-this._parentRect.left-this._radius,i=n-this._parentRect.top-this._radius,r=this._distance(o,i),a=(0,A.shapeBoundsFactory)(this.props.controlPlaneShape||this.props.baseShape,e,n,o,i,r,this._radius,this._baseSize,this._parentRect);o=a.relativeX,i=a.relativeY;var s=Math.atan2(o,i);this._updatePos({relativeX:o,relativeY:i,distance:this._distanceToPercentile(r),direction:this._getDirection(s),axisX:e-this._parentRect.left,axisY:n-this._parentRect.top})}},e.prototype._pointerUp=function(t){var e=this;if(t.pointerId===this._pointerId){var n={dragging:!1};this.props.sticky||(n.coordinates=void 0),window.requestAnimationFrame((function(){e.setState(n)})),window.removeEventListener(E.PointerUp,(function(t){return e._pointerUp(t)})),window.removeEventListener(E.PointerMove,(function(t){return e._pointerMove(t)})),this._pointerId=null,this.props.stop&&this.props.stop({type:"stop",x:this.props.sticky?this.state.coordinates.relativeX:null,y:this.props.sticky?this.state.coordinates.relativeY:null,direction:this.props.sticky?this.state.coordinates.direction:null,distance:this.props.sticky?this.state.coordinates.distance:null})}},e.prototype.getBaseShapeStyle=function(){var t=this.props.baseShape||O.JoystickShape.Circle;return(0,j.shapeFactory)(t,this._baseSize)},e.prototype.getStickShapeStyle=function(){var t=this.props.stickShape||O.JoystickShape.Circle;return(0,j.shapeFactory)(t,this._baseSize)},e.prototype._getBaseStyle=function(){var t=void 0!==this.props.baseColor?this.props.baseColor:"#000033",e="".concat(this._baseSize,"px"),n=B(B({},this.getBaseShapeStyle()),{height:e,width:e,background:t,display:"flex",justifyContent:"center",alignItems:"center"});return this.props.baseImage&&(n.background="url(".concat(this.props.baseImage,")"),n.backgroundSize="100%"),n},e.prototype._getStickStyle=function(){var t=void 0!==this.props.stickColor?this.props.stickColor:"#3D59AB",e="".concat(this._baseSize/1.5,"px"),n=B(B({},this.getStickShapeStyle()),{background:t,cursor:"move",height:e,width:e,border:"none",flexShrink:0,touchAction:"none"});return this.props.stickImage&&(n.background="url(".concat(this.props.stickImage,")"),n.backgroundSize="100%"),void 0!==this.state.coordinates&&(n=Object.assign({},n,{position:"absolute",transform:"translate3d(".concat(this.state.coordinates.relativeX,"px, ").concat(this.state.coordinates.relativeY,"px, 0)")})),n},e.prototype.render=function(){var t=this;this._baseSize=this.props.size||100,this._radius=this._baseSize/2;var e=this._getBaseStyle(),n=this._getStickStyle();return T.createElement("div",{className:this.props.disabled?"joystick-base-disabled":"",ref:this._baseRef,style:e},T.createElement("button",{ref:this._stickRef,disabled:this.props.disabled,onPointerDown:function(e){return t._pointerDown(e)},className:this.props.disabled?"joystick-disabled":"",style:n}))},e}(T.Component);k.Joystick=D,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.JoystickShape=t.Joystick=void 0;var e=k;Object.defineProperty(t,"Joystick",{enumerable:!0,get:function(){return e.Joystick}});var n=x;Object.defineProperty(t,"JoystickShape",{enumerable:!0,get:function(){return n.JoystickShape}})}(b);var N=function(t){var e=t.joysticOptions,o=t.onMove,i=t.onStop;return n.default.createElement(b.Joystick,{size:(null==e?void 0:e.size)?null==e?void 0:e.size:100,sticky:null!=(null==e?void 0:e.sticky)&&(null==e?void 0:e.sticky),baseColor:(null==e?void 0:e.baseColor)?null==e?void 0:e.baseColor:"gray",stickColor:(null==e?void 0:e.stickColor)?null==e?void 0:e.stickColor:"darkgray",baseImage:(null==e?void 0:e.baseImage)&&(null==e?void 0:e.baseImage),stickImage:(null==e?void 0:e.stickImage)&&(null==e?void 0:e.stickImage),stickShape:(null==e?void 0:e.stickShape)&&(null==e?void 0:e.stickShape),throttle:(null==e?void 0:e.throttle)&&(null==e?void 0:e.throttle),disabled:null!=(null==e?void 0:e.disabled)&&(null==e?void 0:e.disabled),baseShape:(null==e?void 0:e.baseShape)&&(null==e?void 0:e.baseShape),controlPlaneShape:(null==e?void 0:e.controlPlaneShape)&&(null==e?void 0:e.controlPlaneShape),minDistance:(null==e?void 0:e.minDistance)&&(null==e?void 0:e.minDistance),move:function(t){o&&o(t)},stop:function(t){i&&i(t)}})},I=function(t,e,n){var o={x:e.x-t.x,y:e.y-t.y};return n?(0!=o.x&&(o.x=o.x/n),0!=o.y&&(o.y=o.y/n),o):o},J=function(t,e){if(e){if("RightTrigger"==e||"LeftTrigger"==e)return;var n=null,o=e.toLocaleLowerCase(),i=Number(t);if(!i&&0!=i)return void console.error("the values were not right, check your parameters");if("y"==o[o.length-1]&&(n="y"),"x"==o[o.length-1]&&(n="x"),!n)return void console.error("the values were not right, check your parameters");if("x"==n)return{x:i,y:null};if("y"==n)return{y:i,x:null}}else{if("number"==typeof t)return void console.error("error check first value sent");if(t.x&&t.y)return{x:t.x/50,y:t.y/50}}},X=function(t){var e=t.button,o=t.className,i=t.textColor;return e?n.default.createElement("button",{id:e.gamepadButton,onClick:function(){return e.onPress&&e.onPress()},className:o},n.default.createElement("b",{style:{color:i||"black"}},e.gamepadButton)):n.default.createElement("span",null)},Y=function(t,e){e.forEach((function(e){var n;null===(n=null==t?void 0:t.vibrationActuator)||void 0===n||n.playEffect(t.vibrationActuator.type,{startDelay:0,duration:e,weakMagnitude:1,strongMagnitude:1})}))},z=function(t){navigator.vibrate(t)};exports.InputManager=function(e){var i,r,a,s=e.keysGamepadControls,u=e.showVirtualJoysticOnNoGamepadMobile,l=e.children,c=e.virtualJoysticOptionsLeft,d=e.virtualJoysticOptionsRight,p=e.mouseSensetivity,f=e.hideMouseCursor,h=t.useState("keyboardMouse"),v=h[0],y=h[1],m=t.useState(),b=m[0],k=m[1],x={x:0,y:0},w=t.useRef(),_=function(t){k(null),y("keyboardMouse");var e=t.key.toLowerCase();" "==t.key&&(e="space");var n=s.find((function(t){return t.keyboardKeyLowerCase==e}));n&&n.onPress&&n.onPress(t)},S=function(t){k(null),y("keyboardMouse");var e=t.key.toLowerCase();" "==t.key&&(e="space");var n=s.find((function(t){return t.keyboardKeyLowerCase==e}));n&&n.onRelase&&n.onRelase(t)},P=function(t){k(null),y("keyboardMouse"),i&&i(t)},C=function(t){k(null),y("keyboardMouse"),r&&r(t)},R=function(t){return"right"==t||"left"==t?s.find((function(e){return e.axisMouseOrGamePad==t})):s.find((function(e){return e.gamepadButton==t}))},L=function(t){var e={x:t.x,y:t.y},n=I(e,x,p);a&&a(n),x=e},B=function(){document.removeEventListener("keydown",_),document.removeEventListener("keyup",S),document.removeEventListener("click",P),document.removeEventListener("contextmenu",C),document.removeEventListener("mousemove",L)};t.useEffect((function(){E()&&y("virtualJoystic")}),[]),t.useEffect((function(){var t,e,n;return"virtualJoystic"==v?B():(B(),r=null===(t=s.find((function(t){return t.isMouseClickMenu})))||void 0===t?void 0:t.onPress,i=null===(e=s.find((function(t){return t.isMouseClickLeft})))||void 0===e?void 0:e.onPress,a=null===(n=s.find((function(t){return t.axisMouseOrGamePad})))||void 0===n?void 0:n.onPress,r&&document.addEventListener("contextmenu",C),i&&document.addEventListener("click",P),a&&document.addEventListener("mousemove",L),document.addEventListener("keydown",_),document.addEventListener("keyup",S)),function(){B()}}),[v,JSON.stringify(s)]);var E=function(){var t=o();return("iphone"==t&&!b||"android"==t&&!b)&&u};return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{ref:w,className:"cursor",style:{cursor:f?"none":""}},n.default.createElement(g,{onConnect:function(t){y("gamepad");var e=navigator.getGamepads();e[t]&&k(e[t])},onAxisChange:function(t,e,n){var o;t.toLocaleLowerCase().includes("right")&&((o=R("right"))&&o.onPress&&o.onPress(J(e,t)));t.toLocaleLowerCase().includes("left")&&((o=R("left"))&&o.onPress&&o.onPress(J(e,t)))},onButtonChange:function(t,e){var n=function(t){return s.find((function(e){return e.gamepadButton==t}))}(t);e?(k(navigator.getGamepads()[0]),y("gamepad"),n&&n.onPress&&n.onPress()):n&&n.onRelase&&n.onRelase()}},n.default.createElement("span",{style:{display:"none"}})),E()&&n.default.createElement("div",{className:"virtual-joystic"},n.default.createElement("div",{className:"joystics-wrapper"},n.default.createElement("span",{className:"joystic-container",style:{position:"absolute",left:"40px",bottom:0}},R("left")&&n.default.createElement(N,{joysticOptions:d,onMove:function(t){var e=R("left");e&&e.onPress&&e.onPress(J(t))},onStop:function(t){var e=R("left");e&&e.onRelase&&e.onRelase(t)}})),n.default.createElement("div",{className:"VirtualJoystickButton-wrapper"},n.default.createElement(X,{button:R("A"),className:"virtual-button",textColor:"green"}),n.default.createElement(X,{button:R("Y"),className:"virtual-button",textColor:"yellow"}),n.default.createElement(X,{button:R("X"),className:"virtual-button",textColor:"blue"}),n.default.createElement(X,{button:R("B"),className:"virtual-button",textColor:"red"})),n.default.createElement("span",{className:"joystic-container",style:{position:"absolute",right:"40px",bottom:0}},R("right")&&n.default.createElement(N,{joysticOptions:c,onMove:function(t){var e=R("right");e&&e.onPress&&e.onPress(J(t))},onStop:function(t){var e=R("right");e&&e.onRelase&&e.onRelase(t)}}))),n.default.createElement("div",null,n.default.createElement("span",{className:"left-shoulder shoulder"},n.default.createElement(X,{button:R("LT"),className:"shoulder-button"}),n.default.createElement(X,{button:R("LB"),className:"shoulder-button"})),n.default.createElement("span",{className:"right-shoulder shoulder"},n.default.createElement(X,{button:R("RT"),className:"shoulder-button"}),n.default.createElement(X,{button:R("RB"),className:"shoulder-button"})))),l))},exports.VirtualJoystic=N,exports.calcCursorPoints=I,exports.getAxisCalc=J,exports.getPlatform=o,exports.vibrate=function(t){var e=o(),n=navigator.getGamepads()[0];(n||"android"==e||"iphone"==e)&&(!(null==n?void 0:n.id.toLocaleLowerCase().includes("kishi"))&&"android"!=e||"iphone"==e?n&&Y(n,t):z(t))};
//# sourceMappingURL=index.js.map
