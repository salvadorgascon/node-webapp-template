import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import CardTitle from 'scripts/core/components/cards/card-title'
import CardToolbar from 'scripts/core/components/cards/card-toolbar'

class CardHeader extends React.Component {
    static Title = CardTitle;
    static Toolbar = CardToolbar;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-header">
                {this.props.children}
            </div>)
    }
}

export default CardHeader