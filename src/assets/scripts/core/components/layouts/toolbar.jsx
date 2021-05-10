import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Toolbar = (props)=> {
	return (
    <div className="toolbar" id="kt_toolbar">
        <div id="kt_toolbar_container" className="container-fluid d-flex flex-stack">
            <div data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">									
                {props.info}                
            </div>
            {props.buttons}
        </div>
    </div>);
}

export default Toolbar