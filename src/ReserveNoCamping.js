import React, { Component } from 'react';

export class ReserveNoCamping extends Component {
    constructor( props ) {
        super( props );
        if(props && props.state) this.state = props.state;
    }

    render() {
        return (
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLHjpjuqBsZJ_R0pLMdsRjYgRLUcR1X-_1jatdxJFZyrxOKg/viewform">
                <button className="rsvp">
                    RSVP NOW
                </button>
            </a>
        );
    }
};
