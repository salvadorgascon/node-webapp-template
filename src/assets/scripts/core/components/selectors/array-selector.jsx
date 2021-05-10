import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FormattedMessage, injectIntl } from 'react-intl'

class ArraySelector extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
      // value: PropTypes.string,
      enabled: PropTypes.bool,
      visible: PropTypes.bool,
      multiple: PropTypes.bool,
      allowClear: PropTypes.bool,
      placeHolder: PropTypes.string,
      groupClasses: PropTypes.string,
      selectClasses: PropTypes.string,
      includeAll: PropTypes.bool,
      search: PropTypes.bool
    }

    static defaultProps = {
      enabled: true,
      visible: true,
      multiple: false,
      allowClear: true,
      groupClasses: "",
      includeAll: false,
      search: false
    }

    constructor(props) {
      super(props);

      this.changeHandler = this.changeHandler.bind(this);

      this.state = { value: this.props.value };
    }

  componentDidMount() {
    var select2Settings = {
      disabled: !this.props.enabled,
      // minimumResultsForSearch: Infinity,
      allowClear: this.props.allowClear,
      multiple: this.props.multiple,
      data: this.props.items
      };

    if (this.props.placeHolder) {
      select2Settings.placeholder = this.props.placeHolder;
    }

    //if (this.props.items && this.props.items.length < 7) {
    //  select2Settings.minimumResultsForSearch = Infinity;
    //  }

    if (!this.props.search) {
      select2Settings.minimumResultsForSearch = Infinity;
      }

    $('#' + this.props.id).select2(select2Settings);
  }

  componentWillUnmount() {
        $('#' + this.props.id).select2('destroy');
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
        items.push(<option value="" key="-1">{this.props.intl.formatMessage({ id: "all" })}</option>);
      } else {
        if (this.props.allowClear) {
          items.push(<option value="" key="-1"></option>);
        }
      }

      for (let i = 0; i < this.props.items.length; i++) {
          items.push(<option
                         key={this.props.items[i].id}
                         value={this.props.items[i].id}>{this.props.items[i].text}</option>);
      }

      return (
        <div className={"form-group " + this.props.groupClasses}>
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <select
            className={"form-control select2" + this.props.selectClasses + (!this.props.visible ? " d-none" : "")}
            id={this.props.id}
            name={this.props.name}
            value={this.props.value != undefined ? this.props.value : ""}
            onChange={this.changeHandler}>
            {items}
          </select></div>)
    }
}

export default injectIntl(ArraySelector)