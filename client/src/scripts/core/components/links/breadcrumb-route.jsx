import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const BreadcrumbRoute = (props)=> {
	return (<li className="breadcrumb-item text-muted"><Link to={props.route} className="text-muted text-hover-primary">{props.text}</Link></li>)
}

export default BreadcrumbRoute