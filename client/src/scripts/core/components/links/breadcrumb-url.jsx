import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const BreadcrumbUrl = (props)=> {
	return (<li className="breadcrumb-item text-muted"><a href={props.url} className="text-muted text-hover-primary">{props.text}</a></li>)
}

export default BreadcrumbUrl