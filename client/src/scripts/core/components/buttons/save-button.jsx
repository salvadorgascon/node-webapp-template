import React from 'react'
import ReactDOM from 'react-dom'

import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types'

import { IntlProvider, injectIntl, FormattedMessage } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

class SaveButton extends React.Component {
    static propTypes = {
        text: PropTypes.string,
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

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        if (this.props.actionHandler)
        {
            this.props.actionHandler();
        }

        if (this.props.route){
            this.props.history.push(this.props.route);
        }

        event.preventDefault();
    }

    render(){
        var text = this.props.text || this.props.intl.formatMessage({id: 'save'});

        if (this.props.enabled)
        {
            return (<button className={"btn btn-primary btn-sm " + (this.props.className ? this.props.className : "") + " " + (this.props.visible ? "" : "d-none")} data-toggle="tooltip" title={this.props.hint} onClick={this.clickHandler}><FontAwesomeIcon icon={faSave}/> {text}</button>)
        }
        else
        {
            return (<button disabled="disabled" className={"btn btn-primary btn-sm " + (this.props.className ? this.props.className : "") + " " + (this.props.visible ? "" : "d-none")} data-toggle="tooltip" title={this.props.hint} onClick={this.clickHandler}><FontAwesomeIcon icon={faSave}/> {text}</button>)
        }
    }
}

export default injectIntl(withRouter(SaveButton))