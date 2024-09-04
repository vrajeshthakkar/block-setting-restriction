/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/js/block-setting-restriction.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
// /**
//  * Adds a filter to modify or extend the behavior of WordPress blocks or other functionalities.
//  *
//  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
//  */
// import { addFilter } from '@wordpress/hooks';
// const bsrOptionsData = bsrConfig.bsrData;
// const currentUserId = bsrConfig.userId;
// addFilter(
//     'blockEditor.useSetting.before',
//     'conditional-block/useSetting.before',
//     (settingValue, settingName, clientId, blockName) => {
//         if (bsrOptionsData.hasOwnProperty(blockName)) {
//             const matchingArray = bsrOptionsData[blockName];
//             if (matchingArray.includes(currentUserId)) {
//                 // console.log("Current user ID exists in matching array.");
//                 // Get all block settings
//                 const blockSettings = wp.blocks.getBlockType(blockName);
//                 if ( blockSettings ) {
//                     // Combine supports and any other relevant settings
//                     const allSettings = {
//                         ...blockSettings.supports,
//                         ...blockSettings.attributes,
//                         // ...blockSettings.deprecated,
//                     };
//                     // console.log(`All Settings for ${blockName}: `, allSettings);
//                     const settingNames = Object.keys(allSettings);
//                     console.log("Setting name: ", settingName);
//                     console.log("Available Setting Names: ", settingNames);
//                     // if (settingNames.includes(settingName)) {
//                     //     return false;
//                     // } else {
//                     //     console.log("Setting not found in above object" );
//                     // }
//                     return false;
//                 }
//             } else {
//                 console.log("Not Exists");
//             }
//         }
//         return settingValue;
//     }
// );
// ------------------------------------------ SOLUTION 2 ------------------------------------------






 // domReady(() => {
// const withDynamicInspectorControls = (settings, name) => {
//     console.log("Settings: ", settings);
//     if ( name === 'core/paragraph' ) {
//         return settings;
//     }
// }
// addFilter(
//     'blocks.registerBlockType',
//     'block-setting-restriction/with-dynamic-inspector-controls',
//     withDynamicInspectorControls
// )
// Function to disable specific supports based on conditions

const disableBlockSupports = (controls, block) => {
  const bsrOptionsData = bsrConfig.bsrData;
  const theCurrentUserId = bsrConfig.userId;
  console.log("controls: ", controls);

  const isUserInMatchingArray = (blockName, currentUserId) => {
    if (bsrOptionsData.hasOwnProperty(blockName)) {
      const matchingArray = bsrOptionsData[blockName];
      return matchingArray.includes(currentUserId);
    }

    return false;
  };

  const userHasAccess = isUserInMatchingArray(name, theCurrentUserId);

  if (!userHasAccess) {
    if ('core/paragraph' === name) {
      settings.supports = { ...settings.supports,
        color: false,
        typography: false,
        __experimentalBorder: false,
        spacing: false
      };
    }
  }

  return controls;
}; // Apply the filter to modify block supports


(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.inspectorControls', 'my-plugin/disable-block-supports', disableBlockSupports); // const withDynamicInspectorControls = createHigherOrderComponent( ( OriginalComponent ) => {
//     return ( props ) => {
//         const { name: blockName, clientId } = props;
//         const currentUserId = bsrConfig.userId;
//         const isUserInMatchingArray = ( blockName, currentUserId ) => {
//             const bsrOptionsData = bsrConfig.bsrData;
//             if ( bsrOptionsData.hasOwnProperty( blockName ) ) {
//                 const matchingArray = bsrOptionsData[ blockName ];
//                 return matchingArray.includes( currentUserId );
//             }
//             return false;
//         };
//         // Check if the user should have access to block settings
//         const userHasAccess = isUserInMatchingArray( blockName, currentUserId );
//         console.log( "Has Access:", userHasAccess );
//         console.log( "Current User ID:", currentUserId );
//         console.log( "Block Name:", blockName );
//         if ( userHasAccess ) {
//             // Disable block settings for the user
//             console.log(props);
//             return (
//                 <Fragment>
//                     <Disabled>
//                         <div style={ { opacity: 0.6, backgroundColor: '#eee', border: '2px dashed #999' } }>
//                             <OriginalComponent {...props} />
//                         </div>
//                     </Disabled>
//                 </Fragment>
//             );
//         } else {
//             console.log("Here...");
//         }
//         return <OriginalComponent {...props} />;
//     };
// }, 'withDynamicInspectorControls');
// addFilter(
//     'editor.InspectorControls',
//     // 'editor.BlockEdit',
//     'block-setting-restriction/with-dynamic-inspector-controls',
//     withDynamicInspectorControls
// );
// });

jQuery(document).ready(function ($) {
  $(document).on("keyup", ".bsr-form-group #searchBlockName", function () {
    var value = $(this).val().toLowerCase();
    console.log(value);
    $("#blockSettingRestrictionForm .bsr-form-group.has-filter").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=restriction.js.map