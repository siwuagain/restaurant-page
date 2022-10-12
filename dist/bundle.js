/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutus.js":
/*!************************!*\
  !*** ./src/aboutus.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function aboutus() {

  const container = document.createElement('div');

  const aboutustitle = document.createTextNode('About Us');

  const owner = document.createElement('div');
  owner.classList.add('owner');

  const ownertext = document.createTextNode('SpongeBob Squarepants, award-winning chef and jellyfish-lover, decided to open The BouG Resto after countless years of preparation and effort. With the help of his mentor, John Cena, Mr. SquarePants has been running the restaurant ever since its opening. \n Contact: imreadyimready@pineapple.com');
  owner.appendChild(ownertext);

  const ownerimage = document.createElement('img');
  ownerimage.src = "./images/spongebob.png";
  owner.appendChild(ownerimage);

  const headchef = document.createElement('div'); 
  headchef.classList.add('headchef');

  const headchefimage = document.createElement('img');
  headchefimage.src = "./images/snoopdogg.png";
  headchef.appendChild(headchefimage);

  const headcheftext = document.createTextNode('Snoop Dogg, current headchef and co-owner of the business, just completing side quests. \n Contact: itsthaDOdoubleG@yahoo.com');
  headchef.appendChild(headcheftext);

  const others = document.createElement('div');
  others.classList.add('others');

  const othersimage = document.createElement('img');
  othersimage.src = "./images/staff.png";
  others.appendChild(othersimage);

  const otherstext = document.createTextNode('Our team is full of experienced veterans and aspiring newcomers ready to welcome you with warm smiles and great service. \n Contact: thebouGresto@thebouGresto.com \n 1800-123-1412314');
  others.appendChild(otherstext)

  container.append(aboutustitle, owner, headchef, others);

  return container;
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutus);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function home(){
  const container = document.createElement('div');

  const intro = document.createElement('div');
  intro.classList.add('intro');

  const introtext = document.createTextNode(("Established in 10 B.G.S. (Before GangNam Style), The BouG Resto has been in the heart of every family in the beautiful town of Masalasacasa. We hold the record for being voted 'Worst Restaurant' for the most consecutive years (we lost count, we've had the title ever since we opened really). We serve traditional Gomoloco cuisine with an exciting modern twist: the 'BouG style'."));
  intro.appendChild(introtext);

  const introimage = document.createElement('img');
  introimage.src = "./images/resto.png";
  intro.appendChild(introimage);

  const openhours = document.createElement('div');
  openhours.classList.add('openhours');

  const openhourstext = document.createTextNode("Monday : 3 PM - 11 PM \n Tuesday : 3 PM - 11 PM \n Wednesday : 3 PM - 11 PM \n Thursday : 3 PM - 11 PM \n Friday : 3 PM - 11 PM \n Saturday : CLOSED \n Sunday : CLOSED");
  openhours.appendChild(openhourstext);

  const location = document.createElement('div');
  location.classList.add('location');

  const locationtext = document.createTextNode('888 Hall of Fame Avenue, Masalacasa, Prouvania');
  location.appendChild(locationtext);

  container.append(intro, openhours, location);

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu(){
  const container = document.createElement('div');

  const menutitle = document.createTextNode("Menu Items \n We have an extensive menu of ove 100+ dishes. For your sanity's sake, we are only showing you our top 3.");
  
  const item1 = document.createElement('div')
  const item1info = document.createTextNode("The Big One - 30$ \n A giant 10lbs lump of mystery meat slathered in Uncle Zac's mystery gravy sauce, a side of locally-grown vegetables, and rice." )
  const item1img = document.createElement('img');
  item1img.src = "./images/bigone.png";
  item1.appendChild(item1img);

  const item2 = document.createElement('div')
  const item2info = document.createTextNode("Neptune's Garden - 100$ \n An array of fresh and sought-after seafood.")
  const item2img = document.createElement('img');
  item2img.src = "./images/seafood.png";
  item2.appendChild(item2img);

  const item3 = document.createElement('div')
  const item3info = document.createTextNode("Snoop Dogg's Homemade Apple Pie - 40$ \n One of Snoop Dogg's side quests. Pretty tasty.")
  const item3img = document.createElement('img');
  item3img.src = "./images/sdpie.png";
  item3.appendChild(item3img);

  container.append(menutitle, item1, item2, item3);

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus */ "./src/aboutus.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




function display() {

  const pagecontainer = document.createElement('div')

  const title = document.createElement('div');
  title.textContent="The BouG Resto";
  title.classList.add('title');

  const btnbar = document.createElement('div');
  btnbar.classList.add('btnbar')

  const homebtn = document.createElement('button');
  homebtn.textContent='HOME';

  const menubtn = document.createElement('button');
  menubtn.textContent='MENU';

  const aboutusbtn = document.createElement('button');
  aboutusbtn.textContent='ABOUT US';

  const btnarray = [homebtn, menubtn, aboutusbtn];

  btnarray.forEach((btn => {
    btn.addEventListener('click', () => {
      changePageDisplay(event.target);
    })
  })) 

  btnbar.append(homebtn, menubtn, aboutusbtn);

  const contentcontainer = document.createElement('div')

  function changePageDisplay(currentButton) {

    contentcontainer.innerHTML = ''

    if (currentButton === homebtn) {
      contentcontainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    } else if (currentButton === menubtn) {
      contentcontainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    } else if (currentButton === aboutusbtn) {
      contentcontainer.appendChild((0,_aboutus__WEBPACK_IMPORTED_MODULE_1__["default"])());
    }
  }

  pagecontainer.append(title, btnbar, contentcontainer);
  return pagecontainer;
}

document.body.appendChild(display())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUMxQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUMvQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7O1VDNUJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDTTtBQUNOO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlEQUFJO0FBQ3ZDLE1BQU07QUFDTixtQ0FBbUMsaURBQUk7QUFDdkMsTUFBTTtBQUNOLG1DQUFtQyxvREFBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYWJvdXR1cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gYWJvdXR1cygpIHtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGFib3V0dXN0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBYm91dCBVcycpO1xyXG5cclxuICBjb25zdCBvd25lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG93bmVyLmNsYXNzTGlzdC5hZGQoJ293bmVyJyk7XHJcblxyXG4gIGNvbnN0IG93bmVydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTcG9uZ2VCb2IgU3F1YXJlcGFudHMsIGF3YXJkLXdpbm5pbmcgY2hlZiBhbmQgamVsbHlmaXNoLWxvdmVyLCBkZWNpZGVkIHRvIG9wZW4gVGhlIEJvdUcgUmVzdG8gYWZ0ZXIgY291bnRsZXNzIHllYXJzIG9mIHByZXBhcmF0aW9uIGFuZCBlZmZvcnQuIFdpdGggdGhlIGhlbHAgb2YgaGlzIG1lbnRvciwgSm9obiBDZW5hLCBNci4gU3F1YXJlUGFudHMgaGFzIGJlZW4gcnVubmluZyB0aGUgcmVzdGF1cmFudCBldmVyIHNpbmNlIGl0cyBvcGVuaW5nLiBcXG4gQ29udGFjdDogaW1yZWFkeWltcmVhZHlAcGluZWFwcGxlLmNvbScpO1xyXG4gIG93bmVyLmFwcGVuZENoaWxkKG93bmVydGV4dCk7XHJcblxyXG4gIGNvbnN0IG93bmVyaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBvd25lcmltYWdlLnNyYyA9IFwiLi9pbWFnZXMvc3BvbmdlYm9iLnBuZ1wiO1xyXG4gIG93bmVyLmFwcGVuZENoaWxkKG93bmVyaW1hZ2UpO1xyXG5cclxuICBjb25zdCBoZWFkY2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICBoZWFkY2hlZi5jbGFzc0xpc3QuYWRkKCdoZWFkY2hlZicpO1xyXG5cclxuICBjb25zdCBoZWFkY2hlZmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaGVhZGNoZWZpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL3Nub29wZG9nZy5wbmdcIjtcclxuICBoZWFkY2hlZi5hcHBlbmRDaGlsZChoZWFkY2hlZmltYWdlKTtcclxuXHJcbiAgY29uc3QgaGVhZGNoZWZ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Nub29wIERvZ2csIGN1cnJlbnQgaGVhZGNoZWYgYW5kIGNvLW93bmVyIG9mIHRoZSBidXNpbmVzcywganVzdCBjb21wbGV0aW5nIHNpZGUgcXVlc3RzLiBcXG4gQ29udGFjdDogaXRzdGhhRE9kb3VibGVHQHlhaG9vLmNvbScpO1xyXG4gIGhlYWRjaGVmLmFwcGVuZENoaWxkKGhlYWRjaGVmdGV4dCk7XHJcblxyXG4gIGNvbnN0IG90aGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG90aGVycy5jbGFzc0xpc3QuYWRkKCdvdGhlcnMnKTtcclxuXHJcbiAgY29uc3Qgb3RoZXJzaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBvdGhlcnNpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL3N0YWZmLnBuZ1wiO1xyXG4gIG90aGVycy5hcHBlbmRDaGlsZChvdGhlcnNpbWFnZSk7XHJcblxyXG4gIGNvbnN0IG90aGVyc3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnT3VyIHRlYW0gaXMgZnVsbCBvZiBleHBlcmllbmNlZCB2ZXRlcmFucyBhbmQgYXNwaXJpbmcgbmV3Y29tZXJzIHJlYWR5IHRvIHdlbGNvbWUgeW91IHdpdGggd2FybSBzbWlsZXMgYW5kIGdyZWF0IHNlcnZpY2UuIFxcbiBDb250YWN0OiB0aGVib3VHcmVzdG9AdGhlYm91R3Jlc3RvLmNvbSBcXG4gMTgwMC0xMjMtMTQxMjMxNCcpO1xyXG4gIG90aGVycy5hcHBlbmRDaGlsZChvdGhlcnN0ZXh0KVxyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGFib3V0dXN0aXRsZSwgb3duZXIsIGhlYWRjaGVmLCBvdGhlcnMpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXR1czsiLCJcclxuZnVuY3Rpb24gaG9tZSgpe1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoJ2ludHJvJyk7XHJcblxyXG4gIGNvbnN0IGludHJvdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKChcIkVzdGFibGlzaGVkIGluIDEwIEIuRy5TLiAoQmVmb3JlIEdhbmdOYW0gU3R5bGUpLCBUaGUgQm91RyBSZXN0byBoYXMgYmVlbiBpbiB0aGUgaGVhcnQgb2YgZXZlcnkgZmFtaWx5IGluIHRoZSBiZWF1dGlmdWwgdG93biBvZiBNYXNhbGFzYWNhc2EuIFdlIGhvbGQgdGhlIHJlY29yZCBmb3IgYmVpbmcgdm90ZWQgJ1dvcnN0IFJlc3RhdXJhbnQnIGZvciB0aGUgbW9zdCBjb25zZWN1dGl2ZSB5ZWFycyAod2UgbG9zdCBjb3VudCwgd2UndmUgaGFkIHRoZSB0aXRsZSBldmVyIHNpbmNlIHdlIG9wZW5lZCByZWFsbHkpLiBXZSBzZXJ2ZSB0cmFkaXRpb25hbCBHb21vbG9jbyBjdWlzaW5lIHdpdGggYW4gZXhjaXRpbmcgbW9kZXJuIHR3aXN0OiB0aGUgJ0JvdUcgc3R5bGUnLlwiKSk7XHJcbiAgaW50cm8uYXBwZW5kQ2hpbGQoaW50cm90ZXh0KTtcclxuXHJcbiAgY29uc3QgaW50cm9pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGludHJvaW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9yZXN0by5wbmdcIjtcclxuICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb2ltYWdlKTtcclxuXHJcbiAgY29uc3Qgb3BlbmhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3BlbmhvdXJzLmNsYXNzTGlzdC5hZGQoJ29wZW5ob3VycycpO1xyXG5cclxuICBjb25zdCBvcGVuaG91cnN0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNb25kYXkgOiAzIFBNIC0gMTEgUE0gXFxuIFR1ZXNkYXkgOiAzIFBNIC0gMTEgUE0gXFxuIFdlZG5lc2RheSA6IDMgUE0gLSAxMSBQTSBcXG4gVGh1cnNkYXkgOiAzIFBNIC0gMTEgUE0gXFxuIEZyaWRheSA6IDMgUE0gLSAxMSBQTSBcXG4gU2F0dXJkYXkgOiBDTE9TRUQgXFxuIFN1bmRheSA6IENMT1NFRFwiKTtcclxuICBvcGVuaG91cnMuYXBwZW5kQ2hpbGQob3BlbmhvdXJzdGV4dCk7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb250ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzg4OCBIYWxsIG9mIEZhbWUgQXZlbnVlLCBNYXNhbGFjYXNhLCBQcm91dmFuaWEnKTtcclxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbnRleHQpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGludHJvLCBvcGVuaG91cnMsIGxvY2F0aW9uKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJmdW5jdGlvbiBtZW51KCl7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IG1lbnV0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTWVudSBJdGVtcyBcXG4gV2UgaGF2ZSBhbiBleHRlbnNpdmUgbWVudSBvZiBvdmUgMTAwKyBkaXNoZXMuIEZvciB5b3VyIHNhbml0eSdzIHNha2UsIHdlIGFyZSBvbmx5IHNob3dpbmcgeW91IG91ciB0b3AgMy5cIik7XHJcbiAgXHJcbiAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGl0ZW0xaW5mbyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGhlIEJpZyBPbmUgLSAzMCQgXFxuIEEgZ2lhbnQgMTBsYnMgbHVtcCBvZiBteXN0ZXJ5IG1lYXQgc2xhdGhlcmVkIGluIFVuY2xlIFphYydzIG15c3RlcnkgZ3Jhdnkgc2F1Y2UsIGEgc2lkZSBvZiBsb2NhbGx5LWdyb3duIHZlZ2V0YWJsZXMsIGFuZCByaWNlLlwiIClcclxuICBjb25zdCBpdGVtMWltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGl0ZW0xaW1nLnNyYyA9IFwiLi9pbWFnZXMvYmlnb25lLnBuZ1wiO1xyXG4gIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW0xaW1nKTtcclxuXHJcbiAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGl0ZW0yaW5mbyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTmVwdHVuZSdzIEdhcmRlbiAtIDEwMCQgXFxuIEFuIGFycmF5IG9mIGZyZXNoIGFuZCBzb3VnaHQtYWZ0ZXIgc2VhZm9vZC5cIilcclxuICBjb25zdCBpdGVtMmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGl0ZW0yaW1nLnNyYyA9IFwiLi9pbWFnZXMvc2VhZm9vZC5wbmdcIjtcclxuICBpdGVtMi5hcHBlbmRDaGlsZChpdGVtMmltZyk7XHJcblxyXG4gIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBpdGVtM2luZm8gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNub29wIERvZ2cncyBIb21lbWFkZSBBcHBsZSBQaWUgLSA0MCQgXFxuIE9uZSBvZiBTbm9vcCBEb2dnJ3Mgc2lkZSBxdWVzdHMuIFByZXR0eSB0YXN0eS5cIilcclxuICBjb25zdCBpdGVtM2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGl0ZW0zaW1nLnNyYyA9IFwiLi9pbWFnZXMvc2RwaWUucG5nXCI7XHJcbiAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNpbWcpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKG1lbnV0aXRsZSwgaXRlbTEsIGl0ZW0yLCBpdGVtMyk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgYWJvdXR1cyBmcm9tICcuL2Fib3V0dXMnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheSgpIHtcclxuXHJcbiAgY29uc3QgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQ9XCJUaGUgQm91RyBSZXN0b1wiO1xyXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcblxyXG4gIGNvbnN0IGJ0bmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ0bmJhci5jbGFzc0xpc3QuYWRkKCdidG5iYXInKVxyXG5cclxuICBjb25zdCBob21lYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgaG9tZWJ0bi50ZXh0Q29udGVudD0nSE9NRSc7XHJcblxyXG4gIGNvbnN0IG1lbnVidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtZW51YnRuLnRleHRDb250ZW50PSdNRU5VJztcclxuXHJcbiAgY29uc3QgYWJvdXR1c2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGFib3V0dXNidG4udGV4dENvbnRlbnQ9J0FCT1VUIFVTJztcclxuXHJcbiAgY29uc3QgYnRuYXJyYXkgPSBbaG9tZWJ0biwgbWVudWJ0biwgYWJvdXR1c2J0bl07XHJcblxyXG4gIGJ0bmFycmF5LmZvckVhY2goKGJ0biA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZVBhZ2VEaXNwbGF5KGV2ZW50LnRhcmdldCk7XHJcbiAgICB9KVxyXG4gIH0pKSBcclxuXHJcbiAgYnRuYmFyLmFwcGVuZChob21lYnRuLCBtZW51YnRuLCBhYm91dHVzYnRuKTtcclxuXHJcbiAgY29uc3QgY29udGVudGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZVBhZ2VEaXNwbGF5KGN1cnJlbnRCdXR0b24pIHtcclxuXHJcbiAgICBjb250ZW50Y29udGFpbmVyLmlubmVySFRNTCA9ICcnXHJcblxyXG4gICAgaWYgKGN1cnJlbnRCdXR0b24gPT09IGhvbWVidG4pIHtcclxuICAgICAgY29udGVudGNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lKCkpO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50QnV0dG9uID09PSBtZW51YnRuKSB7XHJcbiAgICAgIGNvbnRlbnRjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudEJ1dHRvbiA9PT0gYWJvdXR1c2J0bikge1xyXG4gICAgICBjb250ZW50Y29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0dXMoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYWdlY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgYnRuYmFyLCBjb250ZW50Y29udGFpbmVyKTtcclxuICByZXR1cm4gcGFnZWNvbnRhaW5lcjtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXNwbGF5KCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9