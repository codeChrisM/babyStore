webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _FeaturedProducts = __webpack_require__(97);

var _FeaturedProducts2 = _interopRequireDefault(_FeaturedProducts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Chris'
    };

    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_FeaturedProducts2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Chris'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'loopListings',
    value: function loopListings() {
      return;
      _react2.default.createElement(
        'div',
        { className: 'product' },
        _react2.default.createElement(
          'div',
          { className: 'product-img' },
          _react2.default.createElement(
            'span',
            { className: 'details' },
            'details'
          ),
          '  ',
          _react2.default.createElement(
            'div',
            { className: 'summary' },
            'Summary about the product'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'product-details' },
          _react2.default.createElement(
            'div',
            { className: 'product-title' },
            'title'
          ),
          _react2.default.createElement(
            'div',
            { className: 'product-author' },
            'author'
          ),
          _react2.default.createElement(
            'div',
            { className: 'product-price' },
            'price'
          ),
          _react2.default.createElement('span', null)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'featured-area' },
        _react2.default.createElement(
          'section',
          { className: 'featured-product-results' },
          _react2.default.createElement(
            'div',
            { className: 'product' },
            _react2.default.createElement(
              'div',
              { className: 'product-img' },
              _react2.default.createElement('img', { src: '/img/product_outfit.jpg' }),
              _react2.default.createElement(
                'span',
                { className: 'details' },
                'details'
              ),
              '  ',
              _react2.default.createElement(
                'div',
                { className: 'summary' },
                'Summary about the product'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'product-details' },
              _react2.default.createElement(
                'div',
                { className: 'product-title' },
                'title'
              ),
              _react2.default.createElement(
                'div',
                { className: 'product-author' },
                'author'
              ),
              _react2.default.createElement(
                'div',
                { className: 'product-price' },
                'price'
              ),
              _react2.default.createElement('span', null)
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      itemCount: '5',
      totalCost: '2103.92'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'header-top wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'contact' },
            'Call us at: ',
            _react2.default.createElement(
              'span',
              null,
              '708-246-1212'
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn', type: 'submit' },
              'LIVE CHAT NOW'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'user-session-area' },
            _react2.default.createElement(
              'div',
              null,
              'Baby Registry'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Login/ Register'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                ' ' + this.state.itemCount + ' items'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Check out'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '$'
                ),
                ' ' + this.state.totalCost
              )
            )
          )
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Baby Apparel'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Baby Gifts'
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'dropbtn' },
              'Christening'
            ),
            _react2.default.createElement(
              'div',
              { className: ' dropdown-content' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'dropbtn' },
              'Furniture'
            ),
            _react2.default.createElement(
              'div',
              { className: ' dropdown-content' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'dropbtn' },
              'Bedding'
            ),
            _react2.default.createElement(
              'div',
              { className: ' dropdown-content' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'dropbtn' },
              'Decor'
            ),
            _react2.default.createElement(
              'div',
              { className: ' dropdown-content' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'dropbtn' },
              'Lighting'
            ),
            _react2.default.createElement(
              'div',
              { className: ' dropdown-content' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'dropbtn' },
              'Sale'
            ),
            _react2.default.createElement(
              'div',
              { className: ' dropdown-content' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Silver'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'dropbtn' },
              'Brands'
            ),
            _react2.default.createElement(
              'div',
              { className: ' dropdown-content' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Christening'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[100]);