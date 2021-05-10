import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FormattedMessage } from 'react-intl'

import Button from 'react-bootstrap/Button'

import clearForm from 'scripts/core/functions/forms/clear-form'
import serializeFormObject from 'scripts/core/functions/forms/serialize-form-object'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEraser } from '@fortawesome/free-solid-svg-icons'

class FilterForm extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        applyHandler: PropTypes.func.isRequired,
        clearHandler: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.applyClickHandler = this.applyClickHandler.bind(this);
        this.clearClickHandler = this.clearClickHandler.bind(this);

    }

    componentDidMount() {
        $('#' + this.props.id).submit(() => {
            this.props.applyHandler(event);
            return false;
        });
    }

    applyClickHandler(event) {
        this.props.applyHandler(event);

        event.preventDefault();
        return false;
    }

    clearClickHandler(event) {
        clearForm('#' + this.props.id);

        this.props.clearHandler(event);

        event.preventDefault();
        return false;
    }

    getFormData() {
        var data = serializeFormObject('#'+this.props.id);

        return data;
    }

    render() {
        return (
            <form id={this.props.id}
                  className="filter-form"
                ref={(form) => { this.form = form; }}>
                <legend><FormattedMessage id="filtre" /></legend>
                {this.props.children}
                <div className="row">
                    <div className="col-12">
                        <Button variant="primary" onClick={this.applyClickHandler}><FontAwesomeIcon icon={faSearch} /> <FormattedMessage id="aplicaFiltre" /></Button>
                        <Button className="ml-3" variant="secondary" onClick={this.clearClickHandler}><FontAwesomeIcon icon={faEraser} /> <FormattedMessage id="netejaFiltre" /></Button>
                    </div>
                </div>
            </form>)
    }
}

export default FilterForm