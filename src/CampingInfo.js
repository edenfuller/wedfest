import React, { Component } from 'react';

export class CampingInfo extends Component {
    constructor( props ) {
        super( props );
        if(props && props.state) this.state = props.state;
    }

    render() {
        return (
            <p>Camping info for VIP</p>
        );
    }
};
