import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FormattedMessage } from 'react-intl'

const BreadcrumbHome = (props)=> {
	return (<li className="breadcrumb-item text-muted"><a href="index.html" className="text-muted text-hover-primary"><FormattedMessage id="home"/> </a></li>)
}

export default BreadcrumbHome