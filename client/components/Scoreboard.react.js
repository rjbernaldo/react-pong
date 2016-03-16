import React, { Component } from 'react';

class Scoreboard extends Component {
    constructor(args) {
        super();
    }

    render() {
        return (
            <div className="scoreboard inner">
                { this.props.player1Score } { this.props.player2Score }
            </div>
        );
    }
}

export default Scoreboard;
