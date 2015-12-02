'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _tinycolor2 = require('tinycolor2');

var _tinycolor22 = _interopRequireDefault(_tinycolor2);

var _reactRouter = require('react-router');

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var Aside = (function (_React$Component) {
    _inherits(Aside, _React$Component);

    function Aside(props) {
        _classCallCheck(this, _Aside);

        _get(Object.getPrototypeOf(_Aside.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Aside, [{
        key: 'render',
        value: function render() {

            var links = ['articles', 'about', 'contact', 'post'];
            return _react2['default'].createElement(
                'div',
                { style: [styles.base] },
                _react2['default'].createElement(_Logo2['default'], null),
                _react2['default'].createElement(_Nav2['default'], { links: links })
            );
        }
    }]);

    var _Aside = Aside;
    Aside = (0, _radium2['default'])(Aside) || Aside;
    return Aside;
})(_react2['default'].Component);

exports['default'] = Aside;
;

var styles = {
    base: {
        backgroundColor: (0, _tinycolor22['default'])('whitesmoke'),
        boxShadow: '0 1px 2px rgba(0,0,0,.3)',
        width: 220,
        height: 'auto',
        minHeight: 1100
    }
};
module.exports = exports['default'];