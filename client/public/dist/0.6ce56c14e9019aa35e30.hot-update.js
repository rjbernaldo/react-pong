webpackHotUpdate(0,{

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Ball = __webpack_require__(161);

	var _Ball2 = _interopRequireDefault(_Ball);

	var _Paddle = __webpack_require__(162);

	var _Paddle2 = _interopRequireDefault(_Paddle);

	var _Menu = __webpack_require__(163);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Scoreboard = __webpack_require__(164);

	var _Scoreboard2 = _interopRequireDefault(_Scoreboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactPongApp = function (_Component) {
		_inherits(ReactPongApp, _Component);

		function ReactPongApp() {
			_classCallCheck(this, ReactPongApp);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactPongApp).call(this));

			_this.state = {
				score: null,
				inGame: false
			};
			return _this;
		}

		_createClass(ReactPongApp, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var context = this.refs.canvas.getContext('2d');

				this.context = context;
				this.clientWidth = document.documentElement.clientWidth;
				this.clientHeight = document.documentElement.clientHeight;
			}
		}, {
			key: 'startGame',
			value: function startGame() {
				var _this2 = this;

				this.ball = new _Ball2.default({
					clientWidth: this.clientWidth,
					clientHeight: this.clientHeight,
					collisionHandler: function collisionHandler(x, y, done) {
						_this2.collisionHandler(x, y, done);
					},
					hitLeftWall: this.hitLeftWall,
					hitRightWall: this.hitRightWall
				});

				this.paddle1 = new _Paddle2.default({
					clientHeight: this.clientHeight,
					clientWidth: this.clientWidth,
					movementHandler: function movementHandler(handler) {
						window.addEventListener('keydown', function (value, e) {
							switch (value.keyCode) {
								case 38:
									handler('up');
									break;

								case 40:
									handler('down');
									break;
							}
						});
					},
					control: 'human'
				});

				this.paddle2 = new _Paddle2.default({
					clientHeight: this.clientHeight,
					clientWidth: this.clientWidth,
					control: 'ai'
				});

				this.setState({
					score: 0,
					inGame: true
				});

				requestAnimationFrame(function () {
					_this2.update();
				});
			}
		}, {
			key: 'collisionHandler',
			value: function collisionHandler(x, y, done) {
				var hitUpperWall = y < 0 + 10;
				var hitLowerWall = y > this.clientHeight - 10;

				var hitPaddle1X = x < this.paddle1.x + 20;
				var withinPaddle1Y = this.paddle1.y < y && y < this.paddle1.y + 100;
				var hitPaddle1 = hitPaddle1X && withinPaddle1Y;

				var hitPaddle2X = x > this.paddle2.x - 0;
				var withinPaddle2Y = this.paddle2.y < y && y < this.paddle2.y + 100;
				var hitPaddle2 = hitPaddle2X && withinPaddle2Y;

				var hitLeftWall = x < 0 + 10;
				var hitRightWall = x > this.clientWidth - 10;

				done(hitUpperWall, hitLowerWall, hitPaddle1, hitPaddle2, hitLeftWall, hitRightWall);
			}
		}, {
			key: 'update',
			value: function update() {
				var _this3 = this;

				var context = this.context;

				this.paddle2.y = this.ball.y - 50;

				context.fillStyle = '#000000';
				context.globalAlpha = 0.5;
				context.fillRect(0, 0, this.clientWidth, this.clientHeight);
				context.globalAlpha = 1;

				this.ball.draw(this.context);
				this.paddle1.draw(this.context);
				this.paddle2.draw(this.context);

				if (this.state.inGame) {
					requestAnimationFrame(function () {
						_this3.update();
					});
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'outer' },
						_react2.default.createElement(
							'div',
							{ className: 'middle' },
							_react2.default.createElement(
								'div',
								{ className: 'inner' },
								this.state.inGame ? _react2.default.createElement(_Scoreboard2.default, { className: 'center' }) : _react2.default.createElement(_Menu2.default, { startGame: this.startGame.bind(this), className: 'center' })
							)
						)
					),
					_react2.default.createElement('canvas', { ref: 'canvas', width: this.clientWidth, height: this.clientHeight })
				);
			}
		}]);

		return ReactPongApp;
	}(_react.Component);

	exports.default = ReactPongApp;

/***/ }

})