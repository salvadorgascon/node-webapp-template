import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FormattedMessage } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons'


class ErrorListAlert extends React.PureComponent {
    static propTypes = {
        visible: PropTypes.bool,
        errors: PropTypes.array
    }

    static defaultProps = {
        visible: false,
        errors: []
    }

    constructor(props) {
        super(props);
    }

    render() {
        var remoteErrors = [];

        for (let i = 0; i < this.props.errors.length; i++) {
            remoteErrors.push(<li key={i}>{this.props.errors[i].ErrorMessage}</li>);
        }

        return (
            <div className={"alert alert-danger " +
                (this.props.visible ? "" : "d-none")} role="alert">
                <h4 className="alert-heading"><FormattedMessage id="errors"/></h4>
                <ul>{remoteErrors}</ul>
            </div>);
    }
}

export default ErrorListAlert