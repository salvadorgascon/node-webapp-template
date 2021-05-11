import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FormattedMessage, injectIntl } from 'react-intl'

class LogicalSelector extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    groupClasses: PropTypes.string,
    selectClasses: PropTypes.string,
    enabled: PropTypes.bool,
    visible: PropTypes.bool,
    value: PropTypes.bool,
    allowClear: PropTypes.bool,
    placeHolder: PropTypes.string,
    includeAll: PropTypes.bool,
    valueTrue: PropTypes.string,
    valueFalse: PropTypes.string,
    valueAll: PropTypes.string
  }

  static defaultProps = {
    enabled: true,
    visible: true,
    allowClear: false,
    selectClasses: "",
    groupClasses: "",
    includeAll: false,
    valueTrue: "true",
    valueFalse: "false",
    valueAll: ""
  }

  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);

    this.state = { value: this.props.value };
  }

  componentDidMount() {
    var select2Settings = {
      disabled: !this.props.enabled,
      minimumResultsForSearch: Infinity,
      allowClear: this.props.allowClear
    };

    if (this.props.placeHolder) {
      select2Settings.placeholder = this.props.placeHolder;
    }

    $('#' + this.props.id).select2(select2Settings);
  }

  componentWillUnmount() {
    $('#' + this.props.id).select2('destroy');
  }

  shouldComponentUpdate() {
    return false;
  }

  changeHandler() {
    this.setState((state) => {
      return $.extend(true, state,
        {
           value: $('#' + this.props.id).val()
        });
    });
  }

  render() {
    var items = [];

    if (this.props.includeAll) {
      items.push(<option value="" key="0">{this.props.intl.formatMessage({ id: "all" })}</option>);
    } else {
      if (this.props.allowClear) {
        items.push(<option value={this.props.valueAll} key="0"></option>);
      }
    }

    items.push(<option value={this.props.valueTrue} key="1">{this.props.intl.formatMessage({ id: "yes" })}</option>);
    items.push(<option value={this.props.valueFalse} key="2">{this.props.intl.formatMessage({ id: "no" })}</option>);
    
    return (
      <div className={"form-group " + this.props.groupClasses}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <select className={"form-control select2" + this.props.selectClasses + (!this.props.visible ? " d-none" : "")}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value == true ? this.props.valueTrue : (this.props.value == false ? this.props.valueFalse : this.props.valueAll)}
          onChange={this.changeHandler}>
          {items}
        </select>
      </div>);
  }
}

export default injectIntl(LogicalSelector)