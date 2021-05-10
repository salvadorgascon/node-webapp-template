import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class AjaxSelector extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      enabled: PropTypes.bool,
      visible: PropTypes.bool,
      // value: PropTypes.string,
      multiple: PropTypes.bool,
      allowClear: PropTypes.bool,
      placeHolder: PropTypes.string,
      groupClasses: PropTypes.string,
      selectClasses: PropTypes.string,
      changeHandler: PropTypes.func
    }

    static defaultProps = {
      enabled: true,
      visible: true,
      multiple: false,
      allowClear: true,
      groupClasses: ""
    }

    constructor(props) {
      super(props);

      this.changeHandler = this.changeHandler.bind(this);

      this.state = { postData: null }
    }

  componentDidMount() {
    var select2Settings = {
      disabled: !this.props.enabled,
      multiple: this.props.multiple,
      allowClear: this.props.allowClear,
      ajax: {
        url: this.props.url,
        dataType: 'json',
        cache: false,
        delay: 250,
        data: function (params) {
          var query = $.extend(true, {}, this.state.postData, params);

          return query;
        }.bind(this)
      }
    };

    if (this.props.placeHolder) {
      select2Settings.placeholder = this.props.placeHolder;
    }

    $('#' + this.props.id).select2(select2Settings).on('change', this.changeHandler);
  }

  changeHandler() {
    if (this.props.changeHandler) {
      this.props.changeHandler();
    }
  }

  componentWillUnmount() {
    $('#' + this.props.id).off('change.select2').select2('destroy');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  enable() {
    $('#' + this.props.id).select2().prop('disabled', false);
  }

  disable() {
    $('#' + this.props.id).select2().prop('disabled', true);
  }

  getValue() {
    return $('#' + this.props.id).val();
  }

  setPostData(data) {
    this.setState((state) => {
      return $.extend(true, state, { postData: data});
    });
  }

  render() {
    return (
      <div className={"form-group " + this.props.groupClasses}>
      <label htmlFor={this.props.id}>{this.props.label}</label>
        <select
          className={"form-control select2" + this.props.selectClasses + (!this.props.visible ? " d-none" : "")}
          id={this.props.id}
          name={this.props.name}>
          <option></option>
        </select></div>)
  }
}

export default AjaxSelector