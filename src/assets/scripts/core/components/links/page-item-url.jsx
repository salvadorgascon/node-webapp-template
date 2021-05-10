import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const PageItemUrl = (props)=> {	
	return (<li className="page-item "><a href={props.url} className="page-link">{props.text}</a></li>)
}

export default PageItemUrl

