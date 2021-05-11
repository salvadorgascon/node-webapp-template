import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Content = (props)=> {
	return <div className="content d-flex flex-column flex-column-fluid" id="kt_content">{props.children}</div>
}

export default Content