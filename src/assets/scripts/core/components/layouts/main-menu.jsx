import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import MenuItem from 'scripts/core/components/links/menu-item'
import MenuDropDown from 'scripts/core/components/links/menu-dropdown'

import { Link } from "react-router-dom";

const MainMenu = (props)=> {
	return (
        <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
            <MenuItem route="/" text="Home"/>
            <MenuDropDown text="Test1">
            <MenuItem route="/" text="Subtext1"/>
            </MenuDropDown>

        </div>);
}

export default MainMenu