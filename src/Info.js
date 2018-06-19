import React, { Component } from 'react';
import { config } from './config.js';

export class Info extends Component {
    constructor( props ) {
        super( props );
        if(props && props.state) this.state = props.state;
    }

    render() {
        const body = [];
        const sections = this.state.config.sections;
        for (let i = 0; i < sections.length; i += 1) {
            const header = <h2 className="info-header">{sections[i].title}</h2>;
            body.push(header);
            const paragraph = <p className="info-body">{sections[i].body}</p>;
            body.push(paragraph);
        }
        return (
            <div className="info-holder">
                { body }
            </div>
        );
    }
};
