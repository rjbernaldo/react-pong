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
		let ball = new Ball();

		let paddle1 = new Paddle({
			control: 'human',
			movementHandler: (x, y) => {
				this.paddle1.x = x;
				this.paddle1.y = y;
			}
		});

		// let aiPaddle = new Paddle({ control: 'ai' });

		this.setState({
			score: 0,
			objects: [ball, paddle1]
		});

		requestAnimationFrame(() => {
			this.update();
		});
	}

	update() {
		const context = this.state.context;

		context.fillStyle = '#000000';
		context.globalAlpha = 0.5;
		context.fillRect(0, 0, this.state.screenWidth, this.state.screenHeight);
		context.globalAlpha = 1;

		this.state.objects.forEach((obj) => {
			obj.draw(this.state.context);
		});

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
