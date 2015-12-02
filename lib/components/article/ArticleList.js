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

var _Article = require('./Article');

var _Article2 = _interopRequireDefault(_Article);

var _reactRouter = require('react-router');

var ArticleList = (function (_React$Component) {
    _inherits(ArticleList, _React$Component);

    function ArticleList(props) {
        _classCallCheck(this, ArticleList);

        _get(Object.getPrototypeOf(ArticleList.prototype), 'constructor', this).call(this, props);
        this.state = {
            articles: [{
                id: 1,
                title: 'Article 1',
                body: 'Body of article 1'
            }, {
                id: 2,
                title: 'Article 2',
                body: 'Body of article 2'
            }]
        };
    }

    _createClass(ArticleList, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                !this.props.children && _react2['default'].createElement(
                    'ul',
                    null,
                    this.state.articles.map(function (article, i) {
                        return _react2['default'].createElement(
                            'li',
                            { key: i },
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/articles/' + article.id },
                                article.title
                            )
                        );
                    })
                ),
                _react2['default'].createElement(
                    'div',
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return ArticleList;
})(_react2['default'].Component);

exports['default'] = ArticleList;

;
var arr1 = [1, 2, 3];

arr1.map(function (el) {
    return el * 10;
});
module.exports = exports['default'];
/* Parent view if no children */ /* Child view */