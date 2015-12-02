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

var _commonToolbar = require('../common/Toolbar');

var _commonToolbar2 = _interopRequireDefault(_commonToolbar);

var _settingsColorsJs = require('../../settings/colors.js');

var _settingsColorsJs2 = _interopRequireDefault(_settingsColorsJs);

var _settingsLayoutJs = require('../../settings/layout.js');

var _settingsLayoutJs2 = _interopRequireDefault(_settingsLayoutJs);

var _settingsComponentsJs = require('../../settings/components.js');

var _settingsComponentsJs2 = _interopRequireDefault(_settingsComponentsJs);

var ArticleForm = (function (_React$Component) {
    _inherits(ArticleForm, _React$Component);

    function ArticleForm(props) {
        _classCallCheck(this, _ArticleForm);

        _get(Object.getPrototypeOf(_ArticleForm.prototype), 'constructor', this).call(this, props);
    }

    _createClass(ArticleForm, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_commonToolbar2['default'], { title: 'New Article' }),
                _react2['default'].createElement(
                    'form',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        _react2['default'].createElement('input', {
                            style: styles.titleStyles,
                            placeholder: 'Title' })
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        _react2['default'].createElement('textarea', {
                            style: styles.contentStyles,
                            cols: '86',
                            type: 'text',
                            placeholder: 'Article Content' })
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        _react2['default'].createElement(
                            'label',
                            { htmlFor: 'picturesUpload' },
                            'Upload Pictures'
                        )
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        _react2['default'].createElement('input', {
                            name: 'picturesUpload',
                            label: 'File input',
                            type: 'file' })
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        _react2['default'].createElement(
                            'label',
                            { style: [styles.base], htmlFor: 'videoUrl' },
                            'Embed Video'
                        )
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        _react2['default'].createElement('input', {
                            name: 'videoUrl',
                            style: styles.titleStyles,
                            placeholder: 'Video URL' })
                    ),
                    _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement('input', { type: 'submit',
                            style: [styles.buttonStyles] })
                    )
                )
            );
        }
    }]);

    var _ArticleForm = ArticleForm;
    ArticleForm = (0, _radium2['default'])(ArticleForm) || ArticleForm;
    return ArticleForm;
})(_react2['default'].Component);

exports['default'] = ArticleForm;
;

var styles = {
    buttonStyles: {
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: 4,
        color: '#fff',
        backgroundColor: _settingsColorsJs2['default'].blue700,
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 1.42857143,
        marginBottom: 0,
        padding: '6px 12px',
        textAlign: 'center',
        touchAction: 'manipulation',
        userSelect: 'none',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',

        ':hover': {
            backgroundColor: '#244762'
        },

        ':focus': {
            backgroundColor: '#0088FF'
        },

        ':active': {
            backgroundColor: '#005299',
            transform: 'translateY(1px)'
        }
    },
    base: {
        color: _settingsColorsJs2['default'].blue600
    },
    titleStyles: {
        color: '#1E88E5',
        lineHeight: 1.5,
        padding: _settingsLayoutJs2['default'].padding5,
        width: 600
    },
    contentStyles: {
        display: 'block',
        height: '100%',
        padding: _settingsLayoutJs2['default'].padding5,
        minHeight: 300
    }
};
module.exports = exports['default'];