import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { injectIntl } from 'react-intl'

class Callout extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      enabled: PropTypes.bool,
      route: PropTypes.string,
      actionHandler: PropTypes.func
    }

    static defaultProps = {
        enabled: true
    }

    constructor(props) {
        super(props);
    }

  render() {

    var title = null;

    if (this.props.enabled) {
      title = (<a href={this.props.route} className="h4 text-dark text-hover-primary mb-5">
                      {this.props.title}
                  </a>);
    } else {
      title = (<p className="h4 text-dark mb-5">
                        {this.props.title}
                  </p>);
    }

    var button = null;

    if (this.props.enabled) {
        button = (<a href={this.props.route} className="btn font-weight-bolder text-uppercase btn-primary py-4 px-6">
          {this.props.intl.formatMessage({ id: 'open' })}
                    </a>);
    } 

    return (
          <div className="card card-custom">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between p-4 flex-lg-wrap flex-xl-nowrap">
                <div className="d-flex flex-column mr-5">
                    {title}
                  <p className="text-dark-50">{this.props.description}</p>
                </div>
                <div className="ml-6 ml-lg-0 ml-xxl-6 flex-shrink-0">
                    {button}
                </div>
                {this.props.children}
              </div>
            </div>
          </div>)
    }
}

export default injectIntl(Callout)