import React, { Component } from 'react';

export class Ball extends Component {
    constructor() {
        super();

        this.state = {
            x: 0,
            y: 0
        }
    }

    componentDidMount() {
        this.setState({
            x: this.props.initialX,
            y: this.props.initialY
        })

        this.move();
    }

    move() {
        this.setState({
            x: this.state.x + 1,
            y: this.state.y + 1
        })

        this.move();
    }

    draw(state) {
        let context = state.context;
        let x = this.state.x;
        let y = this.state.y;
        let radius = 5;
        let startAngle = 0;
        let endAngle = 0;

        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle);
    }

    render() {
        // this feels wrong...
        return (
            <span></span>
        )
    }
}
