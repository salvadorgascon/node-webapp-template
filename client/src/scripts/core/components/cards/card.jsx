import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import CardHeader from 'scripts/core/components/cards/card-header'
import CardBody from 'scripts/core/components/cards/card-body'
import CardFooter from 'scripts/core/components/cards/card-footer'

class Card extends React.Component {
    static Header = CardHeader;
    static Body = CardBody;
    static Footer = CardFooter;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card card-custom">
                {this.props.children}
            </div>)
    }
}

export default Card