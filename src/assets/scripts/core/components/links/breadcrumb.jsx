import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Breadcrumb = (props)=> {
	return (<ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">{props.children}</ul>)
}

export default Breadcrumb