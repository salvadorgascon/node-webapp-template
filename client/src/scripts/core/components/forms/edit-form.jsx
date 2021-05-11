import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FormattedMessage, injectIntl } from 'react-intl'

import buildFormValidation from 'scripts/core/functions/forms/build-form-validation'
import serializeFormObject from 'scripts/core/functions/forms/serialize-form-object'
import ajaxPostBlock from 'scripts/core/functions/ajax/ajax-post-block'

import ErrorListAlert from 'scripts/core/components/alerts/error-list-alert'

class EditForm extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        validators: PropTypes.object,
        saveUrl: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.form = React.createRef();

        this.state = {
            showRemoteErrors: false,
            remoteErrors: []
        };
    }

    componentDidMount() {
        if (this.props.validators) {
            this.formValidation = buildFormValidation(this.props.id, this.props.validators);
        }
    }

    componentWillUnmount() {
        if (this.formValidation) {
            this.formValidation.destroy();
        }
    }

    save(callback) {
        if (this.props.saveUrl) {
            this.formValidation.validate().then((status) => {
                if (status == "Valid") {
                    var formData = serializeFormObject("#" + this.props.id);

                    ajaxPostBlock(
                        this.props.saveUrl,
                        formData,
                        this.props.id,
                        this.props.intl.formatMessage({ id: "saving" }),
                        this.props.intl.formatMessage({ id: 'errorSave' }),
                        (responseData) => {
                            if (responseData.IsValid) {
                                callback(responseData);
                            } else {
                                this.setState((state) => {
                                    return $.extend(true,
                                        state,
                                        {
                                            showRemoteErrors: true,
                                            remoteErrors: response.data.Errors
                                        });
                                });
                            }
                        }
                    );
                }
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <ErrorListAlert
                    visible={this.state.showRemoteErrors}
                    errors={this.state.remoteErrors}/>
                <form id={this.props.id} className="edit-form" ref={(form) => { this.form = form; }}>
                    <legend><FormattedMessage id="data"/></legend>
                    {this.props.children}
                </form>
            </React.Fragment>);
    }
}

export default injectIntl(EditForm, { forwardRef: true });