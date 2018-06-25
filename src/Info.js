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
            const paragraph = <div className="info-body">{sections[i].body}</div>;
            const holder = <div className="info-bg">{header}{paragraph}</div>
            body.push(holder);
        }
        return (
            <div className="info-holder">
                { body }
            </div>
        );
    }
};
