import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import PageTitle from 'scripts/core/components/labels/page-title'
import PageDescription from 'scripts/core/components/labels/page-description'

import TextSeparator from 'scripts/core/components/labels/text-separator'

import Breadcrumb from 'scripts/core/components/links/breadcrumb'
import BreadcrumbHome from 'scripts/core/components/links/breadcrumb-home'
import BreadcrumbRoute from 'scripts/core/components/links/breadcrumb-route'

const Toolbar = (props)=> {
	return (
    <div className="toolbar" id="kt_toolbar">
        <div id="kt_toolbar_container" className="container-fluid d-flex flex-stack">

        <div data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">									
            <PageTitle text="Home"/>
            <PageDescription text="aassa"/>
            <TextSeparator/>
            <Breadcrumb>
                <BreadcrumbHome/>
                <BreadcrumbRoute text="Customers" route="/customers"/>
            </Breadcrumb>
        </div>
        <div className="d-flex align-items-center py-1">
        </div>
        </div>
    </div>);
}

export default Toolbar