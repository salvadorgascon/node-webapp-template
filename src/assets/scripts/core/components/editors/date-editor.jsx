import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class DateEditor extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
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
        $('#' + this.props.id).datepicker({ language: 'ca'});
    }

    componentWillUnmount() {
        $('#' + this.props.id).datepicker('destroy');
    }

    render() {
        return (
            <div className={"form-group " + this.props.groupClasses}>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type="text"
                       id={this.props.id}
                    className={"form-control " + this.props.inputClasses + (!this.props.visible ? " d-none" : "")}
                       name={this.props.name}
                        defaultValue={this.props.value}
                        placeholder={this.props.placeHolder}
                       disabled={this.props.enabled ? "" : "disabled"} />
            </div>);
    }
}

export default DateEditor