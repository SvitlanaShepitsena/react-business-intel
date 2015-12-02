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

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _commonAside = require("./common/Aside");

var _commonAside2 = _interopRequireDefault(_commonAside);

var _commonToolbar = require("./common/Toolbar");

var _commonToolbar2 = _interopRequireDefault(_commonToolbar);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _settingsTypographyJs = require('../settings/typography.js');

var _settingsTypographyJs2 = _interopRequireDefault(_settingsTypographyJs);

var _reactSkeleton = require('react-skeleton');

var _reactSkeleton2 = _interopRequireDefault(_reactSkeleton);

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, _App);

        _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).call(this, props);
        this.state = { location: this.props.location };
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var content = "ReactJs. Best Practices for Personal Webapps";
            var youTubeId = 'xjX_-VjsUfU';
            return _react2['default'].createElement(
                'div',
                { style: styles.mainContainerStyles },
                _react2['default'].createElement(_radium.Style, { rules: { textarea: { fontFamily: _settingsTypographyJs2['default'].fontFamilySegoe } } }),
                _react2['default'].createElement(_reactHelmet2['default'], {
                    title: 'Web Application Startup Template with ReactJs',
                    meta: [{ "property": "og:title", "content": content }, { "property": "og:url", "content": 'http://www.chicagowebapp.com' + this.state.location.pathname }, { "property": "og:video", "content": 'http://youtu.be/' + youTubeId }, { "property": "og:description", "content": "Web app template in details" }, { "property": "og:image", "content": 'http://img.youtube.com/vi/' + youTubeId + '/hqdefault.jpg' }]
                }),
                _react2['default'].createElement(
                    'div',
                    { style: styles.asideStyles },
                    _react2['default'].createElement(_commonAside2['default'], null)
                ),
                _react2['default'].createElement(
                    'div',
                    { style: styles.mainContentStyles },
                    this.props.children
                ),
                _react2['default'].createElement(
                    'div',
                    { style: styles.footerStyles },
                    _react2['default'].createElement(_commonToolbar2['default'], { title: 'Footer content' })
                )
            );
        }
    }]);

    var _App = App;
    App = (0, _radium2['default'])(App) || App;
    return App;
})(_react2['default'].Component);

exports['default'] = App;
;
var styles = {
    mainContainerStyles: {
        color: '#393939',
        fontWeight: 500,
        fontFamily: "Segoe UI, Arial,sans-serif",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: 1240,
        minHeight: 1220,
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: 100,
        height: 'auto'
    },
    footerStyles: {
        position: 'absolute',
        minHeight: 90,
        minWidth: '100%',
        bottom: 0
    },
    asideStyles: {
        float: 'left'
    },
    mainContentStyles: {
        fontFamily: _settingsTypographyJs2['default'].fontFamilySegoe,
        float: 'left',
        width: 980,
        marginLeft: 10,
        marginRight: 10
    }
};
module.exports = exports['default'];