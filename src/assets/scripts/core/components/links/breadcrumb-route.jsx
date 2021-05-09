import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const BreadcrumbRoute = (props)=> {
	return (<li className="breadcrumb-item text-muted"><a href={props.route} className="text-muted text-hover-primary">{props.text}</a></li>)
}

export default BreadcrumbRoute