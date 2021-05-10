import React from 'react'
import ReactDOM from 'react-dom'

import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types'

import { IntlProvider, injectIntl, FormattedMessage } from 'react-intl'

class GenericButton extends React.Component {
    static propTypes = {
        hint: PropTypes.string,
        enabled: PropTypes.bool,
        visible: PropTypes.bool,
        actionHandler: PropTypes.func,
        route: PropTypes.string,
        className: PropTypes.string
    }

    static defaultProps = {
        enabled: true,
        visible: true
    }

    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        if (this.props.actionHandler) {
            this.props.actionHandler();
        }

        if (this.props.route) {
            this.props.history.push(this.props.route);
        }

        event.preventDefault();
    }

    render() {
        var text = this.props.text || this.props.intl.formatMessage({ id: 'add' });

        if (this.props.enabled) {
            return (<button
                className={"btn btn-secondary btn-sm " + (this.props.className ? this.props.className : "") + " "+(this.props.visible ? "" : "d-none")}
                data-toggle="tooltip"
                title={this.props.hint}
                onClick={this.clickHandler}>{this.props.children}</button>)
        }
        else {
            return (<button
                disabled="disabled"
                className={"btn btn-secondary btn-sm " + (this.props.className ? this.props.className : "") + " " + (this.props.visible ? "" : "d-none")}
                data-toggle="tooltip"
                title={this.props.hint}
                onClick={this.clickHandler}>{this.props.children}</button>)
        }
    }
}

export default injectIntl(withRouter(GenericButton))