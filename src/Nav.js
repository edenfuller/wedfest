import React, { Component } from 'react';
import { config } from './config.js';

export class Nav extends Component {
    constructor( props ) {
        super( props );
        if(props && props.state) this.state = props.state;
    }

    render() {
        const body = [];
        const sections = this.state.config.sections;
        for (let i = 0; i < sections.length; i += 1) {
            const anchor = '#' + sections[i].id;
            const linkTitle = sections[i].title;
            let linkSpacer = '';
            if ( i < (sections.length - 1)) {linkSpacer += '   ◆ '};
            const link = <a href={anchor}><p className="nav-item">{linkTitle}&nbsp;{linkSpacer}&nbsp;</p></a>;
            body.push(link);
        }
        return (
            <div id="nav">
                { body }
            </div>
        );
    }
};
