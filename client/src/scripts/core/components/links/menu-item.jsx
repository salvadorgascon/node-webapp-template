import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const MenuItem = (props)=> {
	return (
        <div className="menu-item"><Link to={props.route} className="menu-link"><span className="menu-title">{props.text}</span></Link>
</div>)
}

export default MenuItem