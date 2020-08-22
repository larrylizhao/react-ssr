"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_app["default"], null), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}