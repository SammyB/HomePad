webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aos__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aos___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aos__);
// libs



__WEBPACK_IMPORTED_MODULE_0_jquery___default()(function () {

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).foundation();

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#fullpage').fullpage({
    scrollBar: true
  });

  __WEBPACK_IMPORTED_MODULE_1_aos___default.a.init({
    duration: 800
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#ajax-contact-form').submit(function () {
    var str = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).serialize();

    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
      type: 'POST',
      url: 'contact.php',
      data: str,
      success: function success(msg) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ajaxComplete(function () {
          if (msg == 'OK') {
            var result = '<div class="notification_ok">Your message has been sent Succesfully. Thank you.</div>';
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#fields').hide();
          } else {
            result = msg;
          }
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#note').hide();
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#note').html(result).slideDown('slow');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#note').html(result);
        });
      }
    });
    return false;
  });
});

/***/ })

},[11]);