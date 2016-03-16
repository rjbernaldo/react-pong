import React, { Component } from 'react';
import Ball from './Ball.react';
import Paddle from './Paddle.react';

class ReactPongApp extends Component {
	constructor() {
		super();

		this.state = {
			screenWidth: null,
			screenHeight: null,
			score: null,
			context: null
		};
	}

	componentDidMount() {
		let context = this.refs.canvas.getContext('2d');

		this.setState({
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight,
			context: context
		});

		this.start();
	}

	start() {
		this.ball = new Ball({
			collisionHandler: (x, y, done) => {
				this.collisionHandler(x, y, done);
			}
		});

		this.paddle1 = new Paddle({
			control: 'human'
		});

		this.setState({
			score: 0
		});

		requestAnimationFrame(() => {
			this.update();
		});
	}

	collisionHandler(x, y, done) {
		/*
		1) hit upper wall -> bounce
		2) hit lower wall -> bounce
		3) hit paddle 1 -> bounce
		4) hit paddle 2 -> bounce
		5) hit left wall -> score
		6) hit right wall -> score
		*/

		let hitUpperWall = y < 0 + 10;
		let hitLowerWall = y > window.innerHeight - 10;
		let hitPaddle1;
		let hitPaddle2;
		let hitLeftWall = x < 0 + 10;
		let hitRightWall = x > window.innerWidth - 10;

		done(hitUpperWall, hitLowerWall, hitPaddle1, hitPaddle2, hitLeftWall, hitRightWall);
	}

	update() {
		const context = this.state.context;

		context.fillStyle = '#000000';
		context.globalAlpha = 0.5;
		context.fillRect(0, 0, this.state.screenWidth, this.state.screenHeight);
		context.globalAlpha = 1;

		this.ball.draw(this.state.context);
		this.paddle1.draw(this.state.context);

		requestAnimationFrame(() => {
			this.update();
		});
	}

	render() {
		return (
			<div>
				<canvas ref="canvas" width={ this.state.screenWidth } height={ this.state.screenHeight }></canvas>
			</div>
		);
	}
}

export default ReactPongApp;
