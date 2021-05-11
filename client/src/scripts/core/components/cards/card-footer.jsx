import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import CardToolbar from 'scripts/core/components/cards/card-toolbar'

class CardFooter extends React.Component {
    static Toolbar = CardToolbar;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-footer">
                {this.props.children}
            </div>)
    }
}

export default CardFooter