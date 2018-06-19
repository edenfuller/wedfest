import React, { Component } from 'react';

export class ReserveCamping extends Component {
    constructor( props ) {
        super( props );
        if(props && props.state) this.state = props.state;
    }

    render() {
        return (
            <a href="http://google.com"><button className="rsvp">
                RSVP NOW
            </button></a>
        );
    }
};
