import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import buildRemoteAutocomplete from 'scripts/core/functions/editors/build-remote-autocomplete'

class StringEditorRemoteAutocomplete extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        enabled: PropTypes.bool,
        visible: PropTypes.bool,
        placeHolder: PropTypes.string,
        groupClasses: PropTypes.string,
        inputClasses: PropTypes.string
    }

    static defaultProps = {
        enabled: true,
        visible: true,
        groupClasses: ""
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        buildRemoteAutocomplete('#' + this.props.id, this.props.url);
    }

    componentWillUnmount() {
        $('#' + this.props.id).typeahead('destroy');
    }

    render() {
        return (
            <div className={"form-group " + this.props.groupClasses}>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className="typeahead">
                    <input type="text"
                           id={this.props.id}
                           className={"form-control " + this.props.inputClasses + (!this.props.visible ? " d-none" : "")}
                           name={this.props.name}
                        defaultValue={this.props.value}
                           placeholder={this.props.placeHolder}
                           disabled={this.props.enabled ? "" : "disabled"} />
                </div>
            </div>);
    }
}

export default StringEditorRemoteAutocomplete