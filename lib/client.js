'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _history = require('history');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

/*createHistory component allows to emulate routing with html5 (without #)  */
var history = (0, _history.createHistory)();
/*start react app with ReactDom.render*/
_reactDom2['default'].render(_react2['default'].createElement(
  _reactRouter2['default'],
  { history: history },
  _routes2['default']
), document.getElementById('app'));