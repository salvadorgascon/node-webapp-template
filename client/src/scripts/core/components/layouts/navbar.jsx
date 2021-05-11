import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import MainMenu from 'scripts/core/components/layouts/main-menu'

const Navbar = (props)=> {
	return (<div className="d-flex align-items-stretch" id="kt_header_nav">		
    <div className="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
        <MainMenu/>																
    </div>			
</div>)
}

export default Navbar