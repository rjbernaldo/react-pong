import React, { Component } from 'react';

class Menu extends Component {
    constructor(args) {
        super();
    }

    render() {
        return (
            <div className="menu middle">
                <div className="inner">
                    <button onClick={ this.props.startGame }>Start Game</button>
                </div>
            </div>
        );
    }
}

export default Menu;
