'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _mjmlCore = require('mjml-core');

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mjmlSection = require('mjml-section');

var _mjmlSection2 = _interopRequireDefault(_mjmlSection);

var _mjmlColumn = require('mjml-column');

var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);

var _mjmlImage = require('mjml-image');

var _mjmlImage2 = _interopRequireDefault(_mjmlImage);

var _mjmlText = require('mjml-text');

var _mjmlText2 = _interopRequireDefault(_mjmlText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagName = 'mj-section-bg-img';
var parentTag = ['mj-container', 'mj-wrapper'];
var endingTag = false;
var defaultMJMLDefinition = {
  attributes: {
    'background-color': null,
    'background-url': null,
    'background-repeat': 'repeat',
    'background-size': 'auto',
    'border': null,
    'border-bottom': null,
    'border-left': null,
    'border-radius': null,
    'border-right': null,
    'border-top': null,
    'direction': 'ltr',
    'full-width': null,
    'padding': '20px 0',
    'padding-top': null,
    'padding-bottom': null,
    'padding-left': null,
    'padding-right': null,
    'text-align': 'center',
    'vertical-align': 'top',
    'css-class': '',
    'background-height': '',
    'background-width': ''
  }
};
var baseStyles = {
  div: {
    margin: '0px auto'
  },
  table: {
    fontSize: '0px',
    width: '100%'
  },
  td: {
    textAlign: 'center',
    verticalAlign: 'top'
  }
};
var postRender = function postRender($) {
  $('.mj-section-bg-img-outlook-background').each(function () {
    var url = $(this).data('url');
    var width = parseInt($(this).data('width'));
    var height = parseInt($(this).data('height'));
    var bgcolor = $(this).data('bgcolor');

    $(this).removeAttr('class').removeAttr('data-url').removeAttr('data-width').removeAttr('data-height').removeAttr('data-bgcolor');

    if (!url) {
      return;
    }

    $(this).before(_mjmlCore.helpers.startConditionalTag + '\n     <v:image xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block; width:' + width + 'px; height:' + height + 'px;" src="' + url + '" />\n     <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block;position: absolute; width:' + width + 'px; height:' + height + 'px;">\n     <v:fill opacity="0%" color="' + bgcolor + '" />\n     <v:textbox inset="0,0,0,0">\n      ' + _mjmlCore.helpers.endConditionalTag);

    $(this).after(_mjmlCore.helpers.startConditionalTag + '\n        </v:textbox>\n        </v:fill>\n        </v:rect>\n        </v:image>\n      ' + _mjmlCore.helpers.endConditionalTag);
  });

  $('.mj-section-bg-img-outlook-open').each(function () {
    var $columnDiv = $(this).next();
    var classes = $columnDiv.attr('data-class') ? $columnDiv.attr('data-class').split(' ').map(function (c) {
      return c + '-outlook';
    }).join(' ') : false;

    $(this).replaceWith(_mjmlCore.helpers.startConditionalTag + '\n      <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n        <tr>\n          <td style="vertical-align:' + $columnDiv.data('vertical-align') + ';width:' + parseInt($(this).data('width')) + 'px;"' + (classes ? ' class="' + classes + '"' : '') + '>\n      ' + _mjmlCore.helpers.endConditionalTag);

    $columnDiv.removeAttr('data-vertical-align');
    $columnDiv.removeAttr('data-class');
  });

  $('.mj-section-bg-img-outlook-line').each(function () {
    var $columnDiv = $(this).next();
    var width = parseInt($(this).data('width'));
    var classes = $columnDiv.attr('data-class') ? $columnDiv.attr('data-class').split(' ').map(function (c) {
      return c + '-outlook';
    }).join(' ') : false;

    $(this).replaceWith(_mjmlCore.helpers.startConditionalTag + '\n      </td><td style="vertical-align:' + $columnDiv.data('vertical-align') + ';width:' + width + 'px;"' + (classes ? ' class="' + classes + '"' : '') + '>\n      ' + _mjmlCore.helpers.endConditionalTag);

    $columnDiv.removeAttr('data-vertical-align');
    $columnDiv.removeAttr('data-class');
  });

  $('.mj-section-bg-img-outlook-close').each(function () {
    $(this).replaceWith(_mjmlCore.helpers.startConditionalTag + '\n      </td></tr></table>\n      ' + _mjmlCore.helpers.endConditionalTag);
  });

  return $;
};

var SectionBgImg = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {
  _inherits(SectionBgImg, _Component);

  function SectionBgImg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SectionBgImg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SectionBgImg.__proto__ || Object.getPrototypeOf(SectionBgImg)).call.apply(_ref, [this].concat(args))), _this), _this.styles = _this.getStyles(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SectionBgImg, [{
    key: 'isFullWidth',
    value: function isFullWidth() {
      var _props = this.props,
          mjAttribute = _props.mjAttribute,
          defaultUnit = _props.defaultUnit;


      return mjAttribute('full-width') == 'full-width';
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var _props2 = this.props,
          mjAttribute = _props2.mjAttribute,
          parentWidth = _props2.parentWidth,
          defaultUnit = _props2.defaultUnit;


      var background = mjAttribute('background-url') ? {
        background: ((mjAttribute('background-color') || '') + ' url(' + mjAttribute('background-url') + ') top center / ' + (mjAttribute('background-size') || '') + ' ' + (mjAttribute('background-repeat') || '')).trim()
      } : {
        background: mjAttribute('background-color')
      };

      return _mjmlCore.helpers.merge({}, baseStyles, {
        table: {
          borderRadius: defaultUnit(mjAttribute('border-radius'), "px")
        },
        td: {
          border: mjAttribute('border'),
          borderBottom: mjAttribute('border-bottom'),
          borderLeft: mjAttribute('border-left'),
          borderRight: mjAttribute('border-right'),
          borderTop: mjAttribute('border-top'),
          direction: mjAttribute('direction'),
          fontSize: '0px',
          padding: defaultUnit(mjAttribute('padding'), 'px'),
          paddingBottom: defaultUnit(mjAttribute('padding-bottom'), 'px'),
          paddingLeft: defaultUnit(mjAttribute('padding-left'), 'px'),
          paddingRight: defaultUnit(mjAttribute('padding-right'), 'px'),
          paddingTop: defaultUnit(mjAttribute('padding-top'), 'px'),
          textAlign: mjAttribute('text-align'),
          verticalAlign: mjAttribute('vertical-align')
        },
        div: {
          borderRadius: defaultUnit(mjAttribute('border-radius'), "px"),
          maxWidth: defaultUnit(parentWidth)
        }
      }, {
        div: this.isFullWidth() ? {} : (0, _cloneDeep2.default)(background),
        table: this.isFullWidth() ? {} : (0, _cloneDeep2.default)(background),
        tableFullwidth: this.isFullWidth() ? (0, _cloneDeep2.default)(background) : {}
      });
    }
  }, {
    key: 'renderFullWidthSection',
    value: function renderFullWidthSection() {
      var mjAttribute = this.props.mjAttribute;


      return _react2.default.createElement(
        'table',
        {
          className: mjAttribute('css-class'),
          role: 'presentation',
          cellPadding: '0',
          cellSpacing: '0',
          'data-legacy-background': mjAttribute('background-url'),
          'data-legacy-border': '0',
          style: _mjmlCore.helpers.merge({}, this.styles.tableFullwidth, this.styles.table),
          'data-class': mjAttribute('css-class')
        },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              this.renderSection()
            )
          )
        )
      );
    }
  }, {
    key: 'renderSection',
    value: function renderSection() {
      var _props3 = this.props,
          renderWrappedOutlookChildren = _props3.renderWrappedOutlookChildren,
          mjAttribute = _props3.mjAttribute,
          children = _props3.children,
          parentWidth = _props3.parentWidth;

      var fullWidth = this.isFullWidth();
      var divProps = fullWidth ? {} : {
        "className": mjAttribute('css-class'),
        "data-class": mjAttribute('css-class')
      };

      return _react2.default.createElement(
        'div',
        _extends({
          style: this.styles.div
        }, divProps),
        _react2.default.createElement(
          'table',
          {
            role: 'presentation',
            cellPadding: '0',
            cellSpacing: '0',
            className: 'mj-section-bg-img-outlook-background',
            'data-legacy-align': 'center',
            'data-legacy-background': fullWidth ? undefined : mjAttribute('background-url'),
            'data-legacy-border': '0',
            'data-url': mjAttribute('background-url') || '',
            'data-width': mjAttribute('background-width') || '',
            'data-height': mjAttribute('background-height') || '',
            'data-bgcolor': mjAttribute('background-color') || '#FFFFFF',
            style: this.styles.table },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { style: this.styles.td },
                renderWrappedOutlookChildren(children)
              )
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.isFullWidth() ? this.renderFullWidthSection() : this.renderSection();
    }
  }]);

  return SectionBgImg;
}(_react.Component)) || _class;

SectionBgImg.tagName = tagName;
SectionBgImg.parentTag = parentTag;
SectionBgImg.defaultMJMLDefinition = defaultMJMLDefinition;
SectionBgImg.baseStyles = baseStyles;
SectionBgImg.postRender = postRender;

exports.default = SectionBgImg;