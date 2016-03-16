import React, { Component } from 'react';

class Ball extends Component {
    constructor(args) {
        super();

        this.state = {
            collisionHandler: args.collisionHandler,
            hitRightWall: args.hitRightWall,
            hitLeftWall: args.hitLeftWall,
            initialX: args.clientWidth / 2,
            initialY: args.clientHeight / 2,
            speed: 10
        };

        this.reinitialize();
    }

    reinitialize() {
        this.x = this.state.initialX;
        this.y = this.state.initialY;
        this.xMovement = this.state.speed;
        this.yMovement = this.state.speed;
    }

    move() {
        this.state.collisionHandler(this.x, this.y, (hitUpperWall, hitLowerWall, hitPaddle1, hitPaddle2, hitLeftWall, hitRightWall) => {
            if (hitUpperWall) {
                this.yMovement = 0 + this.state.speed;
            } else if (hitLowerWall) {
                this.yMovement = 0 - this.state.speed;
            } else if (hitPaddle1) {
                this.xMovement = 0 + this.state.speed;
            } else if (hitPaddle2) {
                this.xMovement = 0 - this.state.speed;
            } else if (hitLeftWall) {
                // console.log('right wins');
                this.state.hitLeftWall();
                // this.xMovement = 0 + this.speed;
            } else if (hitRightWall) {
                // console.log('left wins');
                this.state.hitRightWall();
                // this.xMovement = 0 - this.speed;
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
