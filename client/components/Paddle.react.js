import React, { Component } from 'react';

class Paddle extends Component {
    constructor(args) {
        super();

        this.x = 50;
        this.y = window.innerHeight / 2;

        if (args.control === 'human') {
            window.addEventListener('keydown', this.keysHandler.bind(this));
        }
    }

    keysHandler(value, e) {
        switch(value.keyCode) {
            case 38:
                this.move('up')
                break;

            case 40:
                this.move('down');
                break;
        }
    }

    move(direction) {
        if (direction === 'down' && this.y + 10 < window.innerHeight) {
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
