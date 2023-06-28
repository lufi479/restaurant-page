/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadFooter(){
    const footer = document.createElement("div");
    footer.classList.add("footer");
    let text1 = "Background by "
    const creator = document.createElement("a");
    creator.href = "https://unsplash.com/@kfred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    creator.textContent = "Karl Fredrickson";
    let text2 = " on ";
    const website = document.createElement("a");
    website.href = "https://unsplash.com/images/food/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    website.textContent = "Unsplash";

    footer.appendChild(document.createTextNode(text1));
    footer.appendChild(creator);
    footer.appendChild(document.createTextNode(text2));
    footer.appendChild(website);

    return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFooter);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHeader(){
    let header = document.createElement("div");
    header.classList.add("header");
   
    let logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "R C";


    let ul = document.createElement("ul");
    ul.classList.add("navigation");


    let home = document.createElement("li");
    home.classList.add("nav-home");

    let homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Home";

    home.appendChild(homeLink);


    let menu = document.createElement("li");
    menu.classList.add("nav-menu");

    let menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.textContent = "Menu";

    menu.appendChild(menuLink);


    let contact = document.createElement("li");
    contact.classList.add("nav-contact");

    let contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Home";

    contact.appendChild(contactLink);

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);

    header.appendChild(logo);
    header.appendChild(ul);

    return header;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);

/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function loadPage(){
    const hero = document.createElement("div");
    hero.classList.add("main-hero");

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = "Random Cafe";

    const saying = document.createElement("div");
    saying.classList.add("saying");
    saying.textContent = "The best cafe in the area";

    hero.appendChild(name);
    hero.appendChild(saying);

    // const footer = document.createElement("div");
    // footer.classList.add("footer");
    // let text1 = "Background by "
    // const creator = document.createElement("a");
    // creator.href = "https://unsplash.com/@kfred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    // creator.textContent = "Karl Fredrickson";
    // let text2 = " on ";
    // const website = document.createElement("a");
    // website.href = "https://unsplash.com/images/food/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    // website.textContent = "Unsplash";

    // footer.appendChild(document.createTextNode(text1));
    // footer.appendChild(creator);
    // footer.appendChild(document.createTextNode(text2));
    // footer.appendChild(website);

    // const content = document.getElementById("content");

    // content.appendChild(hero);
    // content.appendChild(footer);

    return hero;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ (() => {

function loadPage(){
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const header = document.createElement("div");
    header.classList.add("menu-header");
    header.textContent = "Menu";

    const container = document.createElement("div");
    container.classList.add("item-container");

    //Coffee Item
    const coffeeItem = document.createElement("div");
    coffeeItem.classList.add("item");

    const coffeeName = document.createElement("div");
    coffeeName.classList.add("item-name");
    coffeeName.textContent = "Coffee";

    const coffeeDesc = document.createElement("div");
    coffeeDesc.classList.add("item-desc");
    coffeeDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const coffeePrice = document.createElement("div");
    coffeePrice.classList.add("item-price");
    coffeePrice.textContent = "$5.99";

    coffeeItem.appendChild(coffeeName);
    coffeeItem.appendChild(coffeeDesc);
    coffeeItem.appendChild(coffeePrice);

    container.appendChild(coffeeItem);

    //Latte Item
    const latteItem = document.createElement("div");
    latteItem.classList.add("item");

    const latteName = document.createElement("div");
    latteName.classList.add("item-name");
    latteName.textContent = "Latte";

    const latteDesc = document.createElement("div");
    latteDesc.classList.add("item-desc");
    latteDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const lattePrice = document.createElement("div");
    lattePrice.classList.add("item-price");
    lattePrice.textContent = "$5.99";

    latteItem.appendChild(latteName);
    latteItem.appendChild(latteDesc);
    latteItem.appendChild(lattePrice);

    container.appendChild(latteItem);

    //Expresso Item
    const exprItem = document.createElement("div");
    exprItem.classList.add("item");

    const exprName = document.createElement("div");
    exprName.classList.add("item-name");
    exprName.textContent = "Expresso";

    const exprDesc = document.createElement("div");
    exprDesc.classList.add("item-desc");
    exprDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const exprPrice = document.createElement("div");
    exprPrice.classList.add("item-price");
    exprPrice.textContent = "$5.99";

    exprItem.appendChild(exprName);
    exprItem.appendChild(exprDesc);
    exprItem.appendChild(exprPrice);

    container.appendChild(exprItem);

    //Tea Item
    const teaItem = document.createElement("div");
    teaItem.classList.add("item");

    const teaName = document.createElement("div");
    teaName.classList.add("item-name");
    teaName.textContent = "Tea";

    const teaDesc = document.createElement("div");
    teaDesc.classList.add("item-desc");
    teaDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const teaPrice = document.createElement("div");
    teaPrice.classList.add("item-price");
    teaPrice.textContent = "$5.99";

    teaItem.appendChild(teaName);
    teaItem.appendChild(teaDesc);
    teaItem.appendChild(teaPrice);

    container.appendChild(teaItem);

    //Cold Bre Coffee Item
    const coldItem = document.createElement("div");
    coldItem.classList.add("item");

    const coldName = document.createElement("div");
    coldName.classList.add("item-name");
    coldName.textContent = "Cold Brew Coffee";

    const coldDesc = document.createElement("div");
    coldDesc.classList.add("item-desc");
    coldDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur";

    const coldPrice = document.createElement("div");
    coldPrice.classList.add("item-price");
    coldPrice.textContent = "$5.99";

    coldItem.appendChild(coldName);
    coldItem.appendChild(coldDesc);
    coldItem.appendChild(coldPrice);

    container.appendChild(coldItem);

    menu.appendChild(header);
    menu.appendChild(container);

    return menu;

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page */ "./src/main-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");





console.log((0,_main_page__WEBPACK_IMPORTED_MODULE_0__["default"])());

const content = document.getElementById("content");


content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_2__["default"])());
content.appendChild((0,_main_page__WEBPACK_IMPORTED_MODULE_0__["default"])());
content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRHpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7O0FDekN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztVQzlIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDQTtBQUNEO0FBQ0E7O0FBRWxDLFlBQVksc0RBQVE7O0FBRXBCOzs7QUFHQSxvQkFBb0IsbURBQVU7QUFDOUIsb0JBQW9CLHNEQUFRO0FBQzVCLG9CQUFvQixtREFBVSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGxldCB0ZXh0MSA9IFwiQmFja2dyb3VuZCBieSBcIlxuICAgIGNvbnN0IGNyZWF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjcmVhdG9yLmhyZWYgPSBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BrZnJlZD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIjtcbiAgICBjcmVhdG9yLnRleHRDb250ZW50ID0gXCJLYXJsIEZyZWRyaWNrc29uXCI7XG4gICAgbGV0IHRleHQyID0gXCIgb24gXCI7XG4gICAgY29uc3Qgd2Vic2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHdlYnNpdGUuaHJlZiA9IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vaW1hZ2VzL2Zvb2QvY29mZmVlP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiO1xuICAgIHdlYnNpdGUudGV4dENvbnRlbnQgPSBcIlVuc3BsYXNoXCI7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dDEpKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRvcik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQyKSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHdlYnNpdGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEZvb3RlcjsiLCJmdW5jdGlvbiBsb2FkSGVhZGVyKCl7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICBcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJSIENcIjtcblxuXG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xuXG5cbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXYtaG9tZVwiKTtcblxuICAgIGxldCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWVMaW5rLmhyZWYgPSBcIiNcIjtcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lTGluayk7XG5cblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1tZW51XCIpO1xuXG4gICAgbGV0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbWVudUxpbmsuaHJlZiA9IFwiI1wiO1xuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcblxuXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbnRhY3RcIik7XG5cbiAgICBsZXQgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb250YWN0TGluay5ocmVmID0gXCIjXCI7XG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhlYWRlcjsiLCJcbmZ1bmN0aW9uIGxvYWRQYWdlKCl7XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwibWFpbi1oZXJvXCIpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIlJhbmRvbSBDYWZlXCI7XG5cbiAgICBjb25zdCBzYXlpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNheWluZy5jbGFzc0xpc3QuYWRkKFwic2F5aW5nXCIpO1xuICAgIHNheWluZy50ZXh0Q29udGVudCA9IFwiVGhlIGJlc3QgY2FmZSBpbiB0aGUgYXJlYVwiO1xuXG4gICAgaGVyby5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKHNheWluZyk7XG5cbiAgICAvLyBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIC8vIGxldCB0ZXh0MSA9IFwiQmFja2dyb3VuZCBieSBcIlxuICAgIC8vIGNvbnN0IGNyZWF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAvLyBjcmVhdG9yLmhyZWYgPSBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BrZnJlZD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIjtcbiAgICAvLyBjcmVhdG9yLnRleHRDb250ZW50ID0gXCJLYXJsIEZyZWRyaWNrc29uXCI7XG4gICAgLy8gbGV0IHRleHQyID0gXCIgb24gXCI7XG4gICAgLy8gY29uc3Qgd2Vic2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIC8vIHdlYnNpdGUuaHJlZiA9IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vaW1hZ2VzL2Zvb2QvY29mZmVlP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiO1xuICAgIC8vIHdlYnNpdGUudGV4dENvbnRlbnQgPSBcIlVuc3BsYXNoXCI7XG5cbiAgICAvLyBmb290ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dDEpKTtcbiAgICAvLyBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRvcik7XG4gICAgLy8gZm9vdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQyKSk7XG4gICAgLy8gZm9vdGVyLmFwcGVuZENoaWxkKHdlYnNpdGUpO1xuXG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgcmV0dXJuIGhlcm87XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7IiwiZnVuY3Rpb24gbG9hZFBhZ2UoKXtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgLy9Db2ZmZWUgSXRlbVxuICAgIGNvbnN0IGNvZmZlZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvZmZlZUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG5cbiAgICBjb25zdCBjb2ZmZWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2ZmZWVOYW1lLmNsYXNzTGlzdC5hZGQoXCJpdGVtLW5hbWVcIik7XG4gICAgY29mZmVlTmFtZS50ZXh0Q29udGVudCA9IFwiQ29mZmVlXCI7XG5cbiAgICBjb25zdCBjb2ZmZWVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2ZmZWVEZXNjLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRlc2NcIik7XG4gICAgY29mZmVlRGVzYy50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4cGVkaXRhIHJlcHVkaWFuZGFlIG5lcXVlIGlsbHVtIGFzcGVybmF0dXJcIjtcblxuICAgIGNvbnN0IGNvZmZlZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2ZmZWVQcmljZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1wcmljZVwiKTtcbiAgICBjb2ZmZWVQcmljZS50ZXh0Q29udGVudCA9IFwiJDUuOTlcIjtcblxuICAgIGNvZmZlZUl0ZW0uYXBwZW5kQ2hpbGQoY29mZmVlTmFtZSk7XG4gICAgY29mZmVlSXRlbS5hcHBlbmRDaGlsZChjb2ZmZWVEZXNjKTtcbiAgICBjb2ZmZWVJdGVtLmFwcGVuZENoaWxkKGNvZmZlZVByaWNlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVJdGVtKTtcblxuICAgIC8vTGF0dGUgSXRlbVxuICAgIGNvbnN0IGxhdHRlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGF0dGVJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3QgbGF0dGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYXR0ZU5hbWUuY2xhc3NMaXN0LmFkZChcIml0ZW0tbmFtZVwiKTtcbiAgICBsYXR0ZU5hbWUudGV4dENvbnRlbnQgPSBcIkxhdHRlXCI7XG5cbiAgICBjb25zdCBsYXR0ZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhdHRlRGVzYy5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjXCIpO1xuICAgIGxhdHRlRGVzYy50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4cGVkaXRhIHJlcHVkaWFuZGFlIG5lcXVlIGlsbHVtIGFzcGVybmF0dXJcIjtcblxuICAgIGNvbnN0IGxhdHRlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhdHRlUHJpY2UuY2xhc3NMaXN0LmFkZChcIml0ZW0tcHJpY2VcIik7XG4gICAgbGF0dGVQcmljZS50ZXh0Q29udGVudCA9IFwiJDUuOTlcIjtcblxuICAgIGxhdHRlSXRlbS5hcHBlbmRDaGlsZChsYXR0ZU5hbWUpO1xuICAgIGxhdHRlSXRlbS5hcHBlbmRDaGlsZChsYXR0ZURlc2MpO1xuICAgIGxhdHRlSXRlbS5hcHBlbmRDaGlsZChsYXR0ZVByaWNlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYXR0ZUl0ZW0pO1xuXG4gICAgLy9FeHByZXNzbyBJdGVtXG4gICAgY29uc3QgZXhwckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGV4cHJJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3QgZXhwck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGV4cHJOYW1lLmNsYXNzTGlzdC5hZGQoXCJpdGVtLW5hbWVcIik7XG4gICAgZXhwck5hbWUudGV4dENvbnRlbnQgPSBcIkV4cHJlc3NvXCI7XG5cbiAgICBjb25zdCBleHByRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXhwckRlc2MuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY1wiKTtcbiAgICBleHByRGVzYy50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4cGVkaXRhIHJlcHVkaWFuZGFlIG5lcXVlIGlsbHVtIGFzcGVybmF0dXJcIjtcblxuICAgIGNvbnN0IGV4cHJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXhwclByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXByaWNlXCIpO1xuICAgIGV4cHJQcmljZS50ZXh0Q29udGVudCA9IFwiJDUuOTlcIjtcblxuICAgIGV4cHJJdGVtLmFwcGVuZENoaWxkKGV4cHJOYW1lKTtcbiAgICBleHBySXRlbS5hcHBlbmRDaGlsZChleHByRGVzYyk7XG4gICAgZXhwckl0ZW0uYXBwZW5kQ2hpbGQoZXhwclByaWNlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBySXRlbSk7XG5cbiAgICAvL1RlYSBJdGVtXG4gICAgY29uc3QgdGVhSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVhSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IHRlYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlYU5hbWUuY2xhc3NMaXN0LmFkZChcIml0ZW0tbmFtZVwiKTtcbiAgICB0ZWFOYW1lLnRleHRDb250ZW50ID0gXCJUZWFcIjtcblxuICAgIGNvbnN0IHRlYURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlYURlc2MuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY1wiKTtcbiAgICB0ZWFEZXNjLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhwZWRpdGEgcmVwdWRpYW5kYWUgbmVxdWUgaWxsdW0gYXNwZXJuYXR1clwiO1xuXG4gICAgY29uc3QgdGVhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlYVByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXByaWNlXCIpO1xuICAgIHRlYVByaWNlLnRleHRDb250ZW50ID0gXCIkNS45OVwiO1xuXG4gICAgdGVhSXRlbS5hcHBlbmRDaGlsZCh0ZWFOYW1lKTtcbiAgICB0ZWFJdGVtLmFwcGVuZENoaWxkKHRlYURlc2MpO1xuICAgIHRlYUl0ZW0uYXBwZW5kQ2hpbGQodGVhUHJpY2UpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlYUl0ZW0pO1xuXG4gICAgLy9Db2xkIEJyZSBDb2ZmZWUgSXRlbVxuICAgIGNvbnN0IGNvbGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2xkSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IGNvbGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2xkTmFtZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1uYW1lXCIpO1xuICAgIGNvbGROYW1lLnRleHRDb250ZW50ID0gXCJDb2xkIEJyZXcgQ29mZmVlXCI7XG5cbiAgICBjb25zdCBjb2xkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29sZERlc2MuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY1wiKTtcbiAgICBjb2xkRGVzYy50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4cGVkaXRhIHJlcHVkaWFuZGFlIG5lcXVlIGlsbHVtIGFzcGVybmF0dXJcIjtcblxuICAgIGNvbnN0IGNvbGRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29sZFByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXByaWNlXCIpO1xuICAgIGNvbGRQcmljZS50ZXh0Q29udGVudCA9IFwiJDUuOTlcIjtcblxuICAgIGNvbGRJdGVtLmFwcGVuZENoaWxkKGNvbGROYW1lKTtcbiAgICBjb2xkSXRlbS5hcHBlbmRDaGlsZChjb2xkRGVzYyk7XG4gICAgY29sZEl0ZW0uYXBwZW5kQ2hpbGQoY29sZFByaWNlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xkSXRlbSk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRNYWluIGZyb20gXCIuL21haW4tcGFnZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnUtcGFnZVwiO1xuaW1wb3J0IGxvYWRIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcblxuY29uc29sZS5sb2cobG9hZE1haW4oKSk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblxuY29udGVudC5hcHBlbmRDaGlsZChsb2FkSGVhZGVyKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChsb2FkTWFpbigpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZEZvb3RlcigpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=