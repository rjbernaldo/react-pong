import React, { Component } from 'react';

class Ball extends Component {
    constructor() {
        super();

        this.x = window.innerWidth / 2;
        this.xForward = true;

        this.y = window.innerHeight / 2;
        this.yForward = true;
    }

    move() {
        if (0 < this.x - 15 && this.x + 10 < window.innerWidth) {
            this.xForward ? this.x += 10 : this.x -= 10;
        } else {
            this.xForward ? this.x -= 10 : this.x += 10;
            this.xForward = !this.xForward;
        }

        if (0 < this.y - 10 && this.y + 10 < window.innerHeight) {
            this.yForward ? this.y += 10 : this.y -= 10;
        } else {
            this.yForward ? this.y -= 10 : this.y += 10;
            this.yForward = !this.yForward;
        }
    }

    draw(context) {
        this.move();

        let radius = 5;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;

        context.beginPath();
        context.arc(this.x, this.y, radius, startAngle, endAngle, false);
        context.fillStyle = 'white';
        context.fill();
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
