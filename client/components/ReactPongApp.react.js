import React, { Component } from 'react';
import Ball from './Ball.react';
import Paddle from './Paddle.react';
import Menu from './Menu.react';
import Scoreboard from './Scoreboard.react';

class ReactPongApp extends Component {
	constructor() {
		super();

		this.state = {
			score: null,
			inGame: false,
			player1Score: 0,
			player2Score: 0
		};
	}

	componentDidMount() {
		let context = this.refs.canvas.getContext('2d');

		this.context = context;
		this.clientWidth = document.documentElement.clientWidth;
		this.clientHeight = document.documentElement.clientHeight;
	}

	hitRightWall() {
		var newScore = this.state.player1Score += 1;

		this.setState({
			player1Score: newScore
		});

		this.reinitialize();
	}

	hitLeftWall() {
		var newScore = this.state.player2Score += 1;

		this.setState({
			player2Score: newScore
		});

		this.reinitialize();
	}

	reinitialize() {
		this.ball.reinitialize();
	}

	startGame() {
		this.ball = new Ball({
			clientWidth: this.clientWidth,
			clientHeight: this.clientHeight,
			collisionHandler: (x, y, done) => {
				this.collisionHandler(x, y, done);
			},
			hitRightWall: this.hitRightWall.bind(this),
			hitLeftWall: this.hitLeftWall.bind(this)
		});

		this.paddle1 = new Paddle({
			clientHeight: this.clientHeight,
			clientWidth: this.clientWidth,
			movementHandler: (handler) => {
				window.addEventListener('keydown', (value, e) => {
			        switch(value.keyCode) {
			            case 38:
			                handler('up')
			                break;

			            case 40:
			                handler('down');
			                break;
			        }
				});
			},
			control: 'human'
		});

		this.paddle2 = new Paddle({
			clientHeight: this.clientHeight,
			clientWidth: this.clientWidth,
			control: 'ai'
		});

		this.setState({
			score: 0,
			inGame: true
		});

		requestAnimationFrame(() => {
			this.update();
		});
	}

	collisionHandler(x, y, done) {
		let hitUpperWall = y < 0 + 10;
		let hitLowerWall = y > this.clientHeight - 10;

		let hitPaddle1X = x < this.paddle1.x + 20 && x > this.paddle1.x + 10;
		let withinPaddle1Y = this.paddle1.y < y && y < this.paddle1.y + 100;
		let hitPaddle1 = hitPaddle1X && withinPaddle1Y;

		let hitPaddle2X = x > this.paddle2.x - 0;
		let withinPaddle2Y = this.paddle2.y < y && y < this.paddle2.y + 100;
		let hitPaddle2 = hitPaddle2X && withinPaddle2Y;

		let hitLeftWall = x < 0 + 10;
		let hitRightWall = x > this.clientWidth - 10;

		done(hitUpperWall, hitLowerWall, hitPaddle1, hitPaddle2, hitLeftWall, hitRightWall);
	}

	update() {
		const context = this.context;

		this.paddle2.y = this.ball.y - 50;

		context.fillStyle = '#000000';
		context.globalAlpha = 0.5;
		context.fillRect(0, 0, this.clientWidth, this.clientHeight);
		context.globalAlpha = 1;

		this.ball.draw(this.context);
		this.paddle1.draw(this.context);
		this.paddle2.draw(this.context);

		if (this.state.inGame) {
			requestAnimationFrame(() => {
				this.update();
			});
		}
	}

	render() {
		return (
			<div>
				<div className="outer">
							{ this.state.inGame ? <Scoreboard className="center" player1Score={ this.state.player1Score } player2Score={ this.state.player2Score }/> : <Menu startGame={ this.startGame.bind(this) } className="center" /> }
				</div>
				<canvas ref="canvas" width={ this.clientWidth } height={ this.clientHeight }></canvas>
			</div>
		);
	}
}

export default ReactPongApp;
