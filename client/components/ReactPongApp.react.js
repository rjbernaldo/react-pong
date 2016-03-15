import React, { Component } from 'react';
import Ball from './Ball.react';
import Paddle from './Paddle.react';

class ReactPongApp extends Component {
	constructor() {
		super();

		this.paddle1 = {
			x: null,
			y: null
		};
		this.paddle2 = {
			x: null,
			y: null
		};

		this.state = {
			screenWidth: 0,
			screenHeight: 0,
			score: 0,
			context: null,
			objects: []
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
		let ball = new Ball({
			collisionHandler: this.collisionHandler
		});

		let paddle1 = new Paddle({
			control: 'human'
		});

		this.setState({
			score: 0,
			ball: ball,
			paddle1: paddle1
			// paddle2: paddle2
		});

		requestAnimationFrame(() => {
			this.update();
		});
	}

	collisionHandler(x, y, done) {
		let buffer = 15;
		let paddle1Hit = 0 < x - buffer;
		// let paddle2Hit = x + buffer < window.innerWidth;
		let withinXBounds = 0 < x - buffer && x + buffer < window.innerWidth;
		// let withinXBounds = paddle1Hit || paddle2Hit;
		// let withinXBounds = paddle1Hit && x + buffer < window.innerWidth;

		let withinYBounds = 0 < y - buffer && y + buffer < window.innerHeight;

		done(withinXBounds, withinYBounds);
	}

	update() {
		const context = this.state.context;

		context.fillStyle = '#000000';
		context.globalAlpha = 0.5;
		context.fillRect(0, 0, this.state.screenWidth, this.state.screenHeight);
		context.globalAlpha = 1;

		this.state.ball.draw(this.state.context);
		this.state.paddle1.draw(this.state.context);
		// this.state.paddle2.draw(this.state.context);

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
