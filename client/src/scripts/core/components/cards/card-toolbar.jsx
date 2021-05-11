import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class CardToolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-toolbar">
                {this.props.children}
            </div>)
    }
}

export default CardToolbar