(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Training_BAP_calculator_reactjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_App_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__),Result=function(e){var _=e.result,t=e.expression;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calc__result"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,t),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,_))},Rows=function(e){var _=e.onClick;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calc__rows"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"AC",onClick:function(e){return _(e.target.name)}},"AC"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"(",onClick:function(e){return _(e.target.name)}},"("),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:")",onClick:function(e){return _(e.target.name)}},")"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"/",onClick:function(e){return _(e.target.name)}},"/")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"7",onClick:function(e){return _(e.target.name)}},"7"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"8",onClick:function(e){return _(e.target.name)}},"8"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"9",onClick:function(e){return _(e.target.name)}},"9"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"*",onClick:function(e){return _(e.target.name)}},"X")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"4",onClick:function(e){return _(e.target.name)}},"4"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"5",onClick:function(e){return _(e.target.name)}},"5"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"6",onClick:function(e){return _(e.target.name)}},"6"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"-",onClick:function(e){return _(e.target.name)}},"-")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"1",onClick:function(e){return _(e.target.name)}},"1"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"2",onClick:function(e){return _(e.target.name)}},"2"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"3",onClick:function(e){return _(e.target.name)}},"3"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"+",onClick:function(e){return _(e.target.name)}},"+")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"0",onClick:function(e){return _(e.target.name)}},"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:".",onClick:function(e){return _(e.target.name)}},"."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{name:"=",onClick:function(e){return _(e.target.name)}},"=")))};__webpack_exports__.a=function(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(D_Training_BAP_calculator_reactjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),expression=_useState2[0],setExpression=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(D_Training_BAP_calculator_reactjs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],calculate=function calculate(exp){try{console.log(exp),setResult(eval(exp))}catch(e){clear()}},clear=function(){setExpression(""),setResult("")},handleClick=function(e){"AC"===e?clear():"="===e?calculate(expression):setExpression(expression+e)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calc"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Result,{expression:expression,result:result}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Rows,{onClick:handleClick}))}},function(e,_,t){e.exports=t(12)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),n=t.n(a),r=t(3),c=t.n(r),E=(t(10),t(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(E.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a26dc905.chunk.js.map