(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./components/organisms/footer/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/footer/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules */ "./components/molecules/index.js");

var _jsxFileName = "/Users/andredacruz/Documents/GitHub/redadviser_fe/components/organisms/footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject20() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background: #D9DADA;\n  border-radius: 6px;\n  width:48px;\n  height:112px;\n  padding:24px 14px;\n  box-sizing:border-box;\n  display:flex;\n  flex-flow:column;\n  align-items:center;\n  justify-content:space-between;\n  transition: all 0.5s ease;\n  :hover{\n    background: #6F6F6E;\n    cursor:pointer;\n    ", "{\n      transform: translateY(-5px) rotate(-90deg);\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height:8px;\n  object-fit:contain;\n   transform: rotate(-90deg);\n  transition: all 0.5s ease;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["    \n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  font-family: Montserrat-Medium;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  color: #FFFFFF;\n  transition: all 0.5s ease;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position:absolute;\n  top:-32px;\n  right: calc(63px + (124 - 62) * ((100vw - 570px) / (1920 - 570)));\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-right:20px;\n  :last-of-type{\n    margin-right:0;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display:flex;\n  flex-flow:row;\n  align-items:center;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width:163px;\n  :hover{\n    cursor:pointer;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-transform: uppercase;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display:flex;\n  flex-flow:row;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width:50%;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display:flex;\n  flex-flow:column;\n  width:20%;\n  .maps{\n    text-decoration:underline;\n  }\n  :first-of-type{\n    width:40%;\n  }\n  @media screen and (max-width:1280px){\n    :first-of-type{\n      width:35%;\n    }\n  }\n  @media screen and (max-width:1200px){\n    width:20%;\n    :first-of-type{\n      width:25%;\n    }\n    :last-of-type{\n      margin-left:2%;\n    }\n  }\n  @media screen and (max-width:1024px){\n    :first-of-type{\n      width:30%;\n    }\n  }\n  @media screen and (max-width:800px){\n    width:25%;\n    :first-of-type{\n      width:40%;\n    }\n    :last-of-type{\n      margin-left:unset;\n    }\n    ", "\n  }\n  @media screen and (max-width:600px){\n    width:100%;\n    :first-of-type{\n      width:100%;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display:none;\n  flex-flow:row;\n  justify-content:center;\n  @media screen and (min-width:801px){\n    &.desktop{\n      display:flex;\n    }\n  }\n  @media screen and (max-width:1200px){\n    &.desktop{\n      justify-content:flex-end;\n    }\n  }\n  @media screen and (max-width:800px){\n    flex-flow:column;\n    &.desktop{\n      display:none;\n    }\n    &.mobile{\n      display:flex;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-top: 72px;\n  padding-bottom: calc(48px + (177 - 48) * ((100vw - 375px) / (1920 - 375)));\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position:absolute;\n  top: 72px;\n  left: calc(63px + (124 - 62) * ((100vw - 570px) / (1920 - 570)));\n  @media screen and (max-width:800px){\n    display:none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom:2px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top:32px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom:8px;\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position:relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var scroll = react_scroll__WEBPACK_IMPORTED_MODULE_3___default.a.animateScroll;


function Footer(props) {
  var _props$footer = props.footer,
      logo = _props$footer.logo,
      hi = _props$footer.hi,
      network = _props$footer.network,
      legal = _props$footer.legal,
      goUpText = _props$footer.goUpText;
  var followText = props.followText,
      linkDribbble = props.linkDribbble,
      linkInstagram = props.linkInstagram,
      linkFacebook = props.linkFacebook,
      linkLinkedin = props.linkLinkedin;
  var optionScroll = {
    spy: true,
    duration: 500,
    smooth: true,
    delay: 100
  };

  var ScrollTop = function ScrollTop() {
    scroll.scrollToTop(optionScroll);
  };

  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    backgroundColor: "#F9F9F9",
    noFade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(DivContainerFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(DivLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    src: logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    sm: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(DivContent, {
    className: "desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(BoxContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(Title, {
    color: "#202020",
    dangerouslySetInnerHTML: {
      __html: hi.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("a", {
    href: 'mailto:' + hi.email,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: hi.email
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx("a", {
    href: 'tel:' + hi.number,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: hi.number
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text10"], {
    color: "#6F6F6E",
    maxWidth: "233px",
    dangerouslySetInnerHTML: {
      __html: hi.address
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("a", {
    href: hi.linkMaps,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text10"], {
    className: "maps",
    color: "#E3000F",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: hi.textMaps
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), __jsx(BoxContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(Title, {
    color: "#202020",
    dangerouslySetInnerHTML: {
      __html: network.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), network.data.map(function (network, index) {
    return __jsx(Margin, {
      small: true,
      key: String(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("a", {
      href: network.link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
      color: "#6F6F6E",
      maxWidth: "163px",
      dangerouslySetInnerHTML: {
        __html: network.text
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    })));
  })), __jsx(BoxContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(Title, {
    color: "#202020",
    dangerouslySetInnerHTML: {
      __html: followText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx(DivSocial, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, linkDribbble && __jsx(ButtonSocial, {
    href: linkDribbble,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(IconSocial, {
    src: "/static/icons/icon_dribbble.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), linkInstagram && __jsx(ButtonSocial, {
    href: linkInstagram,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(IconSocial, {
    src: "/static/icons/icon_instagram.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), linkFacebook && __jsx(ButtonSocial, {
    href: linkFacebook,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(IconSocial, {
    src: "/static/icons/icon_facebook.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), linkLinkedin && __jsx(ButtonSocial, {
    href: linkLinkedin,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(IconSocial, {
    src: "/static/icons/icon_linkedin.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })))), __jsx(BoxContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(Title, {
    color: "#202020",
    dangerouslySetInnerHTML: {
      __html: legal.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx(Margin, {
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(LinkPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("a", {
    href: "legal#PrivacyPolicy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: legal.privacyText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })))), __jsx(Margin, {
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(LinkPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("a", {
    href: "legal#Cookies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: legal.cookiesText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })))), __jsx(LinkPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("a", {
    href: "legal#TermsOfUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: legal.termsText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))))), __jsx(DivContent, {
    className: "mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(DivLogoMob, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx("img", {
    src: logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), __jsx(Margin, {
    big: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), __jsx(BoxContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(Title, {
    color: "#202020",
    dangerouslySetInnerHTML: {
      __html: hi.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), __jsx("a", {
    href: 'mailto:' + hi.email,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: hi.email
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), __jsx("a", {
    href: 'tel:' + hi.number,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: hi.number
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text10"], {
    color: "#6F6F6E",
    maxWidth: "233px",
    dangerouslySetInnerHTML: {
      __html: hi.address
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }), __jsx("a", {
    href: hi.linkMaps,
    target: "_blank",
    style: {
      maxWidth: '163px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text10"], {
    className: "maps",
    color: "#E3000F",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: hi.textMaps
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }))), __jsx(Margin, {
    big: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), __jsx(DivBoxMob, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx(BoxContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(Title, {
    color: "#202020",
    dangerouslySetInnerHTML: {
      __html: network.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), network.data.map(function (network, index) {
    return __jsx(Margin, {
      small: true,
      key: String(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, __jsx("a", {
      href: network.link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
      color: "#6F6F6E",
      maxWidth: "163px",
      dangerouslySetInnerHTML: {
        __html: network.text
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    })));
  })), __jsx(BoxContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx(Title, {
    color: "#202020",
    dangerouslySetInnerHTML: {
      __html: followText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), __jsx(DivSocial, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, linkDribbble && __jsx(ButtonSocial, {
    href: linkDribbble,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(IconSocial, {
    src: "/static/icons/icon_dribbble.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  })), linkInstagram && __jsx(ButtonSocial, {
    href: linkInstagram,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(IconSocial, {
    src: "/static/icons/icon_instagram.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })), linkFacebook && __jsx(ButtonSocial, {
    href: linkFacebook,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx(IconSocial, {
    src: "/static/icons/icon_facebook.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  })), linkLinkedin && __jsx(ButtonSocial, {
    href: linkLinkedin,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx(IconSocial, {
    src: "/static/icons/icon_linkedin.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }))))), __jsx(Margin, {
    big: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }), __jsx(BoxContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(Title, {
    color: "#202020",
    dangerouslySetInnerHTML: {
      __html: legal.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), __jsx(Margin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }), __jsx(Margin, {
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx(LinkPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx("a", {
    href: "legal#PrivacyPolicy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: legal.privacyText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  })))), __jsx(LinkPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("a", {
    href: "legal#Cookies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text12"], {
    color: "#6F6F6E",
    maxWidth: "163px",
    dangerouslySetInnerHTML: {
      __html: legal.cookiesText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }))))))), __jsx(DivGoUp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx(Button, {
    onClick: ScrollTop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, __jsx(Icon, {
    src: "/static/icons/icon_angleright.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, goUpText)))));
}
var DivContainerFooter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Margin = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (_ref) {
  var big = _ref.big;
  return big && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
}, function (_ref2) {
  var small = _ref2.small;
  return small && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
});
var DivLogo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var DivLogoMob = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var DivContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
var BoxContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9(), function (_ref3) {
  var half = _ref3.half;
  return half && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject10());
});
var DivBoxMob = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11());
var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text10"])(_templateObject12());
var LinkPage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject13());
var DivSocial = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject14());
var ButtonSocial = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject15());
var IconSocial = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject16());
var DivGoUp = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject17()); //BUTTON

var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject18());
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject19());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject20(), Icon);

/***/ })

}]);
//# sourceMappingURL=4.js.map