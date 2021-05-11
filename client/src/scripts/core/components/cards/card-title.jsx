import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class CardTitle extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="card-title">
            <h3 className="card-label">{this.props.text}</h3>
            </div>)
    }
}

export default CardTitle