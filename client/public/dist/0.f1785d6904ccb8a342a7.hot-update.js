webpackHotUpdate(0,{

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ball = function (_Component) {
	    _inherits(Ball, _Component);

	    function Ball() {
	        _classCallCheck(this, Ball);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ball).call(this));

	        _this.x = 0;
	        _this.y = 0;
	        // this.state = {
	        //     x: 0,
	        //     y: 0
	        // }
	        return _this;
	    }

	    _createClass(Ball, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setState({
	                x: this.props.initialX,
	                y: this.props.initialY
	            });

	            this.move();
	        }
	    }, {
	        key: 'move',
	        value: function move() {
	            // this.setState({
	            //     x: this.state.x + 1,
	            //     y: this.state.y + 1
	            // })

	            this.x += 10;
	            this.y += 10;

	            // this.move();

	            console.log('move', this.x, this.y);
	        }
	    }, {
	        key: 'draw',
	        value: function draw(state) {
	            this.move();

	            var context = state.context;
	            var x = this.x;
	            var y = this.y;
	            var radius = 5;
	            var startAngle = 0;
	            var endAngle = 2 * Math.PI;

	            context.beginPath();
	            context.arc(x, y, radius, startAngle, endAngle, false);
	            // context.fillStyle = 'white';
	            // context.fill();
	            context.lineWidth = 1;
	            context.strokeStyle = 'white';
	            context.stroke();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // this feels wrong...
	            return _react2.default.createElement('span', null);
	        }
	    }]);

	    return Ball;
	}(_react.Component);

	exports.default = Ball;

/***/ }

})