import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const PageItemRoute = (props)=> {	
	return (<li className="page-item "><Link to={props.route} className="page-link">{props.text}</Link></li>)
}

export default PageItemRoute

