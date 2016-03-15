import React, { Component } from 'react';

class Ball extends Component {
    constructor() {
        super();

        this.x = 0;
        this.y = 0;
        // this.state = {
        //     x: 0,
        //     y: 0
        // }
    }

    componentDidMount() {
        this.setState({
            x: this.props.initialX,
            y: this.props.initialY
        })

        this.move();
    }

    move() {
        let bounce = this.x
        if ()
        this.x+=10;
        this.y+=10;
    }

    draw(state) {
        // this.move();

        let context = state.context;
        let x = this.x;
        let y = this.y;
        let radius = 5;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;

        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, false);
        // context.fillStyle = 'white';
        // context.fill();
        context.lineWidth = 1;
        context.strokeStyle = 'white';
        context.stroke();
    }

    render() {
        // this feels wrong...
        return (
            <span></span>
        )
    }
}

export default Ball;
