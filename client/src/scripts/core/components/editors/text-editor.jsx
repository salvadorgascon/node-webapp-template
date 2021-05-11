import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class TextEditor extends React.Component {
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
    groupClasses: "",
    inputClasses: ""
  }

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className={"form-group " + this.props.groupClasses}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <textarea id={this.props.id}
          className={"form-control " + this.props.inputClasses + (!this.props.visible ? " d-none" : "")}name={this.props.name}
          rows="3"
          placeholder={this.props.placeHolder}
          disabled={this.props.enabled ? "" : "disabled"}
          value={this.props.value}/>
      </div>);
  }
}

export default TextEditor