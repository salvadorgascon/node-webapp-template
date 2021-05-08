import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Wrapper = (props)=> {
	return (<div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">{props.children}</div>)
}

export default Wrapper

