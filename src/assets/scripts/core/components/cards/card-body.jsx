import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class CardBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="card-body">{this.props.children}</div>)
    }
}

export default CardBody