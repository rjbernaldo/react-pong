import React, { Component } from 'react';

class Paddle extends Component {
    constructor(args) {
        super();

        this.x = 0;
        this.y = args.clientHeight / 2;
        this.clientHeight = args.clientHeight;
        args.control === 'human' ? this.x = 50 : this.x = args.clientWidth - 60;
        args.movementHandler ? args.movementHandler(this.move.bind(this)) : null;
    }

    move(direction) {
        if (direction === 'down' && this.y + 110 < this.clientHeight) {
            this.y += 20;
        } else if (direction === 'up' && 0 < this.y - 10) {
            this.y -= 20;
        }
    }

    draw(context) {
        let width = 10;
        let height = 100;

        context.beginPath();
        context.rect(this.x, this.y, width, height);
        context.fillStyle = 'white';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = 'white';
        context.stroke();

    }

    render() {
        return (
            <span></span>
        );
    }
}

export default Paddle;
