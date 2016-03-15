import React, { Component } from 'react';
import Ball from './Ball.react';

class ReactPongApp extends Component {
	constructor() {
		super();

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

		this.setState({
			score: 0,
			objects: [ball]
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
			obj.draw(this.state);
		});

		requestAnimationFrame(() => {
			this.update();
		});
	}

	render() {
		return (
			<div>
				<canvas ref="canvas" width={ this.state.screenWidth } height={ this.state.screenHeight }>
					<Ball initialX={ this.state.screenWidth / 2 } initialY={ this.state.screenHeight / 2}/>
				</canvas>
			</div>
		);
	}
}

export default ReactPongApp
