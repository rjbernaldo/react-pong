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

	    function Ball(args) {
	        _classCallCheck(this, Ball);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ball).call(this));

	        _this.x = args.clientWidth / 2;
	        _this.y = args.clientHeight / 2;

	        _this.speed = 10;
	        _this.xMovement = _this.speed;
	        _this.yMovement = _this.speed;

	        _this.state = {
	            collisionHandler: args.collisionHandler,
	            player1Scores: args.player1Scores,
	            player2SCores: args.player2Scores
	        };
	        return _this;
	    }

	    _createClass(Ball, [{
	        key: 'move',
	        value: function move() {
	            var _this2 = this;

	            this.state.collisionHandler(this.x, this.y, function (hitUpperWall, hitLowerWall, hitPaddle1, hitPaddle2, hitLeftWall, hitRightWall) {
	                if (hitUpperWall) {
	                    _this2.yMovement = 0 + _this2.speed;
	                } else if (hitLowerWall) {
	                    _this2.yMovement = 0 - _this2.speed;
	                } else if (hitPaddle1) {
	                    _this2.xMovement = 0 + _this2.speed;
	                } else if (hitPaddle2) {
	                    _this2.xMovement = 0 - _this2.speed;
	                } else if (hitLeftWall) {
	                    // console.log('right wins');
	                    _this2.state.player2Scores();
	                    // this.xMovement = 0 + this.speed;
	                } else if (hitRightWall) {
	                        // console.log('left wins');
	                        _this2.state.player1Scores();
	                        // this.xMovement = 0 - this.speed;
	                    }

	                _this2.x += _this2.xMovement;
	                _this2.y += _this2.yMovement;
	            });
	        }
	    }, {
	        key: 'draw',
	        value: function draw(context) {
	            this.move();

	            var radius = 5;
	            var startAngle = 0;
	            var endAngle = 2 * Math.PI;

	            context.beginPath();
	            context.arc(this.x, this.y, radius, startAngle, endAngle, false);
	            context.fillStyle = 'white';
	            context.fill();
	            context.lineWidth = 1;
	            context.strokeStyle = 'white';
	            context.stroke();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('span', null);
	        }
	    }]);

	    return Ball;
	}(_react.Component);

	exports.default = Ball;

/***/ }

})