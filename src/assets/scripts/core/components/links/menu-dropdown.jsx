import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const MenuDropDown = (props)=> {
	return (
		<div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" 
			className="menu-item menu-lg-down-accordion me-lg-1">
				<span className="menu-link py-3">
					<span className="menu-title">{props.text}</span>
					<span className="menu-arrow d-lg-none"></span>
				</span>
				<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px" >													
					{props.children}
				</div> 
		</div>)
}

export default MenuDropDown
