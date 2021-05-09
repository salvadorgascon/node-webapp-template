import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const BreadcrumbText = (props)=> {
	return (<li className="breadcrumb-item text-muted"><span className="text-muted text-hover-primary">{props.text}</span></li>)
}

export default BreadcrumbText