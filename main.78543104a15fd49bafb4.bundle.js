(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(2)),rellax_1=__importDefault(__webpack_require__(622));exports.default=_a=>{var{children:children,className:className,zIndex:zIndex,speed:speed,mobile:mobile,tablet:tablet,desktop:desktop,percentage:percentage,xs:xs,style:style}=_a,options=__rest(_a,["children","className","zIndex","speed","mobile","tablet","desktop","percentage","xs","style"]);const[rellax,setRellax]=react_1.useState(null),rellaxElement=react_1.useRef(null);return react_1.useEffect(()=>(rellaxElement.current&&setRellax(new rellax_1.default(rellaxElement.current,options)),()=>{rellax&&rellax.destroy()}),[rellaxElement]),react_1.default.createElement("div",{ref:rellaxElement,"data-rellax-speed":speed&&speed.toString(),"data-rellax-xs-speed":xs&&xs.toString(),"data-rellax-mobile-speed":mobile&&mobile.toString(),"data-rellax-tablet-speed":tablet&&tablet.toString(),"data-rellax-desktop-speed":desktop&&desktop.toString(),"data-rellax-zindex":zIndex&&zIndex.toString(),"data-rellax-percentage":percentage&&percentage.toString(),className:className,style:style},children)}},275:function(module,exports,__webpack_require__){__webpack_require__(276),__webpack_require__(425),module.exports=__webpack_require__(426)},30:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const rellaxWrapper_1=__importDefault(__webpack_require__(273));var rellaxWrapper_2=__webpack_require__(273);Object.defineProperty(exports,"RellaxWrapper",{enumerable:!0,get:function(){return rellaxWrapper_2.default}}),exports.default=rellaxWrapper_1.default},342:function(module,exports){},426:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(274);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(616)],module)}.call(this,__webpack_require__(427)(module))},616:function(module,exports,__webpack_require__){var map={"./1-rellaxWrapper.stories.js":617};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=616},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Horizontal",(function(){return Horizontal})),__webpack_require__.d(__webpack_exports__,"Centered",(function(){return Centered})),__webpack_require__.d(__webpack_exports__,"Callback",(function(){return Callback}));__webpack_require__(27),__webpack_require__(35),__webpack_require__(36),__webpack_require__(19),__webpack_require__(103),__webpack_require__(38),__webpack_require__(67),__webpack_require__(53),__webpack_require__(29),__webpack_require__(156),__webpack_require__(54),__webpack_require__(81),__webpack_require__(260),__webpack_require__(58),__webpack_require__(618),__webpack_require__(619),__webpack_require__(55),__webpack_require__(22),__webpack_require__(56),__webpack_require__(39),__webpack_require__(40),__webpack_require__(41);var react__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_22___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__),_src__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(30),_src__WEBPACK_IMPORTED_MODULE_23___default=__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_23__);__webpack_require__(623);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__(272).withSource;var addSourceDecorator=__webpack_require__(272).addSource,__SOURCE_PREFIX__="/Users/scottrichardson/workspace/node/scottjr632/react-rellax-wrapper/stories",__STORY__="import React, { useState } from 'react'\n\nimport RellaxWrapper from '../src'\n\nimport './index.css'\n\nexport default {\n  title: 'Rellax Wrapper',\n  component: RellaxWrapper\n}\n\nexport const Default = () => (\n  <div className={'default__container'}>\n    <div className={'default__wrapper'}>\n      <RellaxWrapper speed={-7}>\n        <div className={'icon'}>\n          🐌\n        </div>\n      </RellaxWrapper>\n      <RellaxWrapper speed={7}>\n        <div className={'icon'}>\n          🚀\n        </div>\n      </RellaxWrapper>\n    </div>\n    <h3>Vertical Parallex</h3>\n  </div>\n)\n\nexport const Horizontal = () => (\n  <div className={'horizontal__container'} id='wrapper'>\n    <h3>Horizontal Scrolling</h3>\n    <RellaxWrapper speed={-7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>\n      <div className={'icon'}>\n        🐌\n      </div>\n    </RellaxWrapper>\n    <RellaxWrapper speed={7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>\n      <div className={'icon'}>\n        🚀\n      </div>\n    </RellaxWrapper>\n  </div>\n)\n\nexport const Centered = () => (\n  <div className={'default__container'}>\n    <div className={'default__wrapper'}>\n      <RellaxWrapper speed={-7} center={true}>\n        <div className={'icon'}>\n          🐌\n        </div>\n      </RellaxWrapper>\n      <RellaxWrapper speed={7} center={true}>\n        <div className={'icon'}>\n          🚀\n        </div>\n      </RellaxWrapper>\n    </div>\n    <h3>Centered Parallex</h3>\n  </div>\n)\n\nexport const Callback = () => {\n  const [slowValues, setSlowValues] = useState({x: 0, y: 0});\n  const [fastValues, setFastValues] = useState({x: 0, y: 0});\n  return (\n    <div className={'default__container'}>\n      <div className={'default__wrapper'}>\n        <RellaxWrapper speed={-7} callback={pos => setSlowValues({...pos})}>\n          <div className={'icon'}>\n            🐌\n            <div className={'text'}>{`X: ${slowValues.x}  Y: ${slowValues.y}`}</div>\n          </div>\n        </RellaxWrapper>\n        <RellaxWrapper speed={7} callback={pos => setFastValues({...pos})}>\n          <div className={'icon'}>\n            🚀\n            <div className={'text'}>{`X: ${fastValues.x}  Y: ${fastValues.y}`}</div>\n          </div>\n        </RellaxWrapper>\n      </div>\n      <h3>Using Callback</h3>\n    </div>\n  )\n}",__ADDS_MAP__={"rellax-wrapper--default":{startLoc:{col:23,line:12},endLoc:{col:1,line:28},startBody:{col:23,line:12},endBody:{col:1,line:28}},"rellax-wrapper--horizontal":{startLoc:{col:26,line:30},endLoc:{col:1,line:44},startBody:{col:26,line:30},endBody:{col:1,line:44}},"rellax-wrapper--centered":{startLoc:{col:24,line:46},endLoc:{col:1,line:62},startBody:{col:24,line:46},endBody:{col:1,line:62}},"rellax-wrapper--callback":{startLoc:{col:24,line:64},endLoc:{col:1,line:86},startBody:{col:24,line:64},endBody:{col:1,line:86}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:"import React, { useState } from 'react'\n\nimport RellaxWrapper from '../src'\n\nimport './index.css'\n\nexport default {\n  title: 'Rellax Wrapper',\n  component: RellaxWrapper\n}\n\nexport const Default = () => (\n  <div className={'default__container'}>\n    <div className={'default__wrapper'}>\n      <RellaxWrapper speed={-7}>\n        <div className={'icon'}>\n          🐌\n        </div>\n      </RellaxWrapper>\n      <RellaxWrapper speed={7}>\n        <div className={'icon'}>\n          🚀\n        </div>\n      </RellaxWrapper>\n    </div>\n    <h3>Vertical Parallex</h3>\n  </div>\n)\n\nexport const Horizontal = () => (\n  <div className={'horizontal__container'} id='wrapper'>\n    <h3>Horizontal Scrolling</h3>\n    <RellaxWrapper speed={-7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>\n      <div className={'icon'}>\n        🐌\n      </div>\n    </RellaxWrapper>\n    <RellaxWrapper speed={7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>\n      <div className={'icon'}>\n        🚀\n      </div>\n    </RellaxWrapper>\n  </div>\n)\n\nexport const Centered = () => (\n  <div className={'default__container'}>\n    <div className={'default__wrapper'}>\n      <RellaxWrapper speed={-7} center={true}>\n        <div className={'icon'}>\n          🐌\n        </div>\n      </RellaxWrapper>\n      <RellaxWrapper speed={7} center={true}>\n        <div className={'icon'}>\n          🚀\n        </div>\n      </RellaxWrapper>\n    </div>\n    <h3>Centered Parallex</h3>\n  </div>\n)\n\nexport const Callback = () => {\n  const [slowValues, setSlowValues] = useState({x: 0, y: 0});\n  const [fastValues, setFastValues] = useState({x: 0, y: 0});\n  return (\n    <div className={'default__container'}>\n      <div className={'default__wrapper'}>\n        <RellaxWrapper speed={-7} callback={pos => setSlowValues({...pos})}>\n          <div className={'icon'}>\n            🐌\n            <div className={'text'}>{`X: ${slowValues.x}  Y: ${slowValues.y}`}</div>\n          </div>\n        </RellaxWrapper>\n        <RellaxWrapper speed={7} callback={pos => setFastValues({...pos})}>\n          <div className={'icon'}>\n            🚀\n            <div className={'text'}>{`X: ${fastValues.x}  Y: ${fastValues.y}`}</div>\n          </div>\n        </RellaxWrapper>\n      </div>\n      <h3>Using Callback</h3>\n    </div>\n  )\n}",locationsMap:{"rellax-wrapper--default":{startLoc:{col:23,line:12},endLoc:{col:1,line:28},startBody:{col:23,line:12},endBody:{col:1,line:28}},"rellax-wrapper--horizontal":{startLoc:{col:26,line:30},endLoc:{col:1,line:44},startBody:{col:26,line:30},endBody:{col:1,line:44}},"rellax-wrapper--centered":{startLoc:{col:24,line:46},endLoc:{col:1,line:62},startBody:{col:24,line:46},endBody:{col:1,line:62}},"rellax-wrapper--callback":{startLoc:{col:24,line:64},endLoc:{col:1,line:86},startBody:{col:24,line:64},endBody:{col:1,line:86}}}}},title:"Rellax Wrapper",component:_src__WEBPACK_IMPORTED_MODULE_23___default.a};var _ref=react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"default__container"},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"default__wrapper"},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_23___default.a,{speed:-7},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"icon"},"🐌")),react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_23___default.a,{speed:7},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"icon"},"🚀"))),react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("h3",null,"Vertical Parallex")),Default=addSourceDecorator((function(){return _ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-rellaxWrapper.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref2=react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"horizontal__container",id:"wrapper"},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("h3",null,"Horizontal Scrolling"),react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_23___default.a,{speed:-7,horizontal:!0,wrapper:"#wrapper",relativeToWrapper:!0},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"icon"},"🐌")),react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_23___default.a,{speed:7,horizontal:!0,wrapper:"#wrapper",relativeToWrapper:!0},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"icon"},"🚀"))),Horizontal=addSourceDecorator((function(){return _ref2}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-rellaxWrapper.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref3=react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"default__container"},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"default__wrapper"},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_23___default.a,{speed:-7,center:!0},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"icon"},"🐌")),react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_23___default.a,{speed:7,center:!0},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"icon"},"🚀"))),react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("h3",null,"Centered Parallex")),Centered=addSourceDecorator((function(){return _ref3}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-rellaxWrapper.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref4=react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("h3",null,"Using Callback"),Callback=addSourceDecorator((function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_22__.useState)({x:0,y:0}),2),slowValues=_useState2[0],setSlowValues=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_22__.useState)({x:0,y:0}),2),fastValues=_useState4[0],setFastValues=_useState4[1];return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"default__container"},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"default__wrapper"},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_23___default.a,{speed:-7,callback:function callback(pos){return setSlowValues(_objectSpread({},pos))}},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"icon"},"🐌",react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"text"},"X: ".concat(slowValues.x,"  Y: ").concat(slowValues.y)))),react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_23___default.a,{speed:7,callback:function callback(pos){return setFastValues(_objectSpread({},pos))}},react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"icon"},"🚀",react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div",{className:"text"},"X: ".concat(fastValues.x,"  Y: ").concat(fastValues.y))))),_ref4)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-rellaxWrapper.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},623:function(module,exports,__webpack_require__){var api=__webpack_require__(624),content=__webpack_require__(625);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},625:function(module,exports,__webpack_require__){(exports=__webpack_require__(626)(!1)).push([module.i,'* {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;\n}\n\nhtml {\n    font-size: 15px\n}\n\n.black {\n    background-color: black;\n}\n\n.default__container {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n}\n\n.default__wrapper {\n    display: flex;\n    position: absolute;\n    height: 100vh;\n    margin-top: 50vh;\n}\n\n.default__wrapper > div {\n    padding: 0 10rem;\n}\n\n.text {\n    font-size: 2rem;\n}\n\n.icon {\n    font-size: 5rem;\n}\n\n.horizontal__container {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n    overflow-y: hidden;\n    overflow-x: scroll;\n    padding-left: 10rem;\n}\n\n.horizontal__container .icon {\n    width: 65vw;\n}',""]),module.exports=exports}},[[275,1,2]]]);
//# sourceMappingURL=main.78543104a15fd49bafb4.bundle.js.map