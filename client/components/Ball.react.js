import React, { Component } from 'react';

class Ball extends Component {
    constructor(args) {
        super();

        this.x = window.innerWidth / 2;
        this.xForward = true;

        this.y = window.innerHeight / 2;
        this.yUp = true;

        this.collisionHandler = args.collisionHandler;
    }

    move() {
        this.collisionHandler(this.x, this.y, (withinXBounds, withinYBounds) => {
            if (withinXBounds) {
                this.xForward ? this.x += 10 : this.x -= 10;
            } else {
                this.xForward ? this.x -= 10 : this.x += 10;
                this.xForward = !this.xForward;
            }

            if (withinYBounds) {
                // move down
                this.yUp ? this.y += 10 : this.y -= 10;
            } else {
                // move up
                this.yUp ? this.y -= 10 : this.y += 10;
                this.yUp = !this.yUp;
            }
        });
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
        return (
            <span></span>
        )
    }
}

export default Ball;
