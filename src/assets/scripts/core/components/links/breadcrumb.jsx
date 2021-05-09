import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Breadcrumb = (props)=> {
	return (<ol className="breadcrumb breadcrumb-dot fw-bold fs-7 my-1">{props.children}</ol>)
}

export default Breadcrumb