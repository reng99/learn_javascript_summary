/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

//引入弹出登录层的样式
__webpack_require__(5);


// 弹出层登录的页面相关的javascript代码

/**
 * tab切换
 */

(function(){
    var tabs = $("#loginPopup .tabs li");
    var pswLogin = $("#loginPopup .pswLogin");
    var msgLogin = $("#loginPopup .msgLogin");

    msgLogin.hide();
    tabs.click(function(){
        var _index = $(this).index();
        if(_index==0){
            pswLogin.show();
            msgLogin.hide();
        }else if(_index==1){
            pswLogin.hide();
            msgLogin.show();
        }
        $(this).addClass("active").siblings().removeClass("active");
    });
})();

/**
 * 弹出层实现
 * 调用方式
 * 
 * showLogin(element);element是传入的元素
 */
(function(){

    // 调用接口
    showLogin("#login");

    //实现一个类
    var Size = {
        // 获取浏览器的可视宽度
        getPageWidth:function(){
            var pageWidth = window.innerWidth;// 浏览器的可视宽度
            if(typeof pageWidth != "number"){
                if(document.compatMode == "CSS1Compat"){//ie
                    pageWidth = document.documentElement.clientWidth;
                }else{//非ie
                    pageWidth = document.body.clientWidth;
                }
            }
            return pageWidth;
        },
        // 获取浏览器的可视高度
        getPageHeight:function(){
            var pageHeight = window.innerHeight;// 浏览器的可视高度
            if(typeof pageHeight != "number"){
                if(document.compatMode == "CSS1Compat"){// ie
                    pageHeight = document.documentElement.clientHeight;
                }else{
                    pageHeight = document.body.clientHeight;
                }
            }
            return pageHeight;
        }
    };

    $("#loginPopup .layer").css({
        width:Size.getPageWidth()+"px",
        height:Size.getPageHeight()+"px"
    });
    $("#loginPopup .container").css({
        left:Math.floor((Size.getPageWidth()-$("#loginPopup .container").width())/2) + "px",
    });
    $(window).resize(function(){
        $("#loginPopup .layer").css({
            width:Size.getPageWidth()+"px",
            height:Size.getPageHeight()+"px"
        });
        $("#loginPopup .container").css({
            left:Math.floor((Size.getPageWidth()-$("#loginPopup .container").width())/2) + "px"
        });
    });
    function showLogin(element){
        $(element).click(function(){
            $("#loginPopup").fadeIn(1000);
            $("body").css({
                "overflow":"hidden"
            });
        });
    }
    $("#loginPopup .close").click(function(){
        $("#loginPopup").fadeOut(1000);
        $("body").css({
            "overflow":"auto"
        });
    });
})();


/**
 * 清空输入的字段
 */
(function(){
    $("#loginPopup .clear").click(function(){
        $(this).parent().find("input").val("");
    });
})();

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });