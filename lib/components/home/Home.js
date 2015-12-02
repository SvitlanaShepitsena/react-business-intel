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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _commonToolbar = require('../common/Toolbar');

var _commonToolbar2 = _interopRequireDefault(_commonToolbar);

var _reactYoutube = require('react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            var opts = {
                height: '490',
                width: '740',
                playerVars: {
                    autoplay: 0
                }
            };
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_commonToolbar2['default'], { title: 'Web Application Startup Template with ReactJs', sv: 'toolbarStyles' }),
                _react2['default'].createElement(
                    'div',
                    { style: styles.containerStyles },
                    _react2['default'].createElement('br', null),
                    _react2['default'].createElement(
                        'div',
                        { style: styles.iframeContainer },
                        _react2['default'].createElement(
                            'span',
                            { style: styles.colorPlaylist },
                            'Youtube Playlist'
                        ),
                        _react2['default'].createElement(
                            'h2',
                            { style: styles.pageHeaderStyles },
                            'ReactJs. Best Practices for Personal Webapps!'
                        ),
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                                'ul',
                                { style: styles.ul },
                                _react2['default'].createElement(
                                    'li',
                                    { style: styles.li },
                                    _react2['default'].createElement(
                                        'span',
                                        { style: styles.videoDate },
                                        'Nov 24, 2015'
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { style: styles.li },
                                    _react2['default'].createElement(
                                        'span',
                                        { style: styles.videoTitle },
                                        '1. Why ReactJs '
                                    )
                                )
                            ),
                            _react2['default'].createElement(_reactYoutube2['default'], {
                                id: '1',
                                url: 'http://youtu.be/xjX_-VjsUfU',
                                opts: opts,
                                onPlay: this._onPlay
                            }),
                            _react2['default'].createElement('p', { style: styles.pStyles })
                        ),
                        _react2['default'].createElement('hr', null)
                    )
                )
            );
        }
    }]);

    return Home;
})(_react2['default'].Component);

exports['default'] = Home;

;
var styles = {
    pageHeaderStyles: {
        color: '#393939',
        marginBottom: '10',
        fontWeight: 500
    },
    ul: {
        decoration: 'none',
        margin: 0,
        marginBottom: 10,
        padding: 0
    },
    colorPlaylist: {
        fontSize: 20,
        color: '#C62828'
    },
    li: {
        display: 'inline'
    },
    videoDate: {
        fontSize: 16,
        color: "#797979",
        fontWeight: 400
    },
    videoTitle: {
        marginLeft: 20,
        fontSize: 22,
        color: "#555555",
        fontWeight: 500
    },

    iframeContainer: {
        textAlign: 'left'
    },
    containerStyles: {
        padding: 10,
        backgroundColor: 'whitesmoke',
        display: 'block',
        height: 'auto'
    },
    pStyles: {
        display: 'block',
        fontSize: 14,
        lineHeight: 2,
        paddingLeft: 20
    }
};
module.exports = exports['default'];