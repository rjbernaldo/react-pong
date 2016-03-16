import React, { Component } from 'react';

class Ball extends Component {
    constructor(args) {
        super();

        this.x = args.clientWidth / 2;
        this.y = args.clientHeight / 2;

        this.speed = 10;
        this.xMovement = this.speed;
        this.yMovement = this.speed;

        this.state = {
            collisionHandler: args.collisionHandler
        };
    }

    move() {
        this.state.collisionHandler(this.x, this.y, (hitUpperWall, hitLowerWall, hitPaddle1, hitPaddle2, hitLeftWall, hitRightWall) => {
            if (hitUpperWall) {
                this.yMovement = 0 + this.speed;
            } else if (hitLowerWall) {
                this.yMovement = 0 - this.speed;
            } else if (hitPaddle1) {
                this.xMovement = 0 + this.speed;
            } else if (hitPaddle2) {
                this.xMovement = 0 - this.speed;
            } else if (hitLeftWall) {
                console.log('right wins');
                this.xMovement = 0 + this.speed;
            } else if (hitRightWall) {
                console.log('left wins');
                this.xMovement = 0 - this.speed;
            }

            this.x += this.xMovement;
            this.y += this.yMovement;
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
