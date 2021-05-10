import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import UrlIcon from 'scripts/core/components/icons/url-icon'

class UrlEditor extends React.Component {
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
      this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler() {
      if (this.props.value) {
        window.open(this.props.value);
      }
    
      event.preventDefault();
    }

    render() {
        return (
            <div className={"form-group " + this.props.groupClasses}>
              <label htmlFor={this.props.id}>{this.props.label}</label>
              <div className="input-group">
                <input type="url"
                       id={this.props.id}
                       className={"form-control " + this.props.inputClasses + (!this.props.visible ? " d-none" : "")}
                       name={this.props.name}
                       defaultValue={this.props.value}
                       placeholder={this.props.placeHolder}
                disabled={this.props.enabled ? "" : "disabled"} />
                <div className="input-group-append">
                <button onClick={this.buttonClickHandler} className="btn btn-secondary" type="button"><UrlIcon/></button>
                </div>
              </div>
                
            </div>);
    }
}

export default UrlEditor