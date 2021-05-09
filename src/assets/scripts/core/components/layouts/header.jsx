import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import Logo from 'media/metronic/logos/logo-2-dark.svg'

import Navbar from 'scripts/core/components/layouts/navbar'
import Topbar from 'scripts/core/components/layouts/topbar'

const Header = (props)=> {
	return (
	<div id="kt_header" className="header align-items-stretch">
		<div className="container-fluid d-flex align-items-stretch justify-content-between">
			<div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">		
				<a href="index.html"><img alt="Logo" src={Logo} className="h-35px"/></a>		
			</div>
			<div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
				<Navbar/>
				<Topbar/>
			</div>
		</div>
	</div>)
}

export default Header

