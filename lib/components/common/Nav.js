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

var _reactRouter = require('react-router');

//import ReactRouter from 'react-router';
//let Link = ReactRouter.Link;

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Person = {
    name: 'John',
    age: 20
};
var name = Person.name;
var age = Person.age;

var name = Person.name;
var age = Person.age;

var Nav = (function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, _Nav);

        _get(Object.getPrototypeOf(_Nav.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Nav, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'ul',
                { style: styles.ulStyles },
                this.props.links.map(function (link, i) {
                    return _react2['default'].createElement(
                        'li',
                        { style: styles.liStyles, key: i },
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/' + link, style: styles.linkStyles },
                            link
                        )
                    );
                })
            );
        }
    }]);

    var _Nav = Nav;
    Nav = (0, _radium2['default'])(Nav) || Nav;
    return Nav;
})(_react2['default'].Component);

exports['default'] = Nav;
;

var styles = {
    ulStyles: {
        listStyle: 'none',
        paddingLeft: 4
    },

    liStyles: {
        padding: 20
    },
    linkStyles: {
        color: '#244762',
        textTransform: 'uppercase',
        fontSize: 14,
        textDecoration: 'none',
        ':active': {
            fontWeight: 'bold'
        }
    }

};
module.exports = exports['default'];