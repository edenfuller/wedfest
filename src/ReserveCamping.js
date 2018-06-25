import React, { Component } from 'react';

export class ReserveCamping extends Component {
    constructor( props ) {
        super( props );
        if(props && props.state) this.state = props.state;
    }

    render() {
        return (
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEwHLJ6ITbKMwKXLZPG8SWRtZOp69_c4zsabn7vEg2AuH7EQ/viewform">
                <button className="rsvp">
                    RSVP NOW
                </button>
            </a>
        );
    }
};
