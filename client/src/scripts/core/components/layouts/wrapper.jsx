import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Wrapper = (props)=> {
	return (<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">{props.children}</div>)
}

export default Wrapper

