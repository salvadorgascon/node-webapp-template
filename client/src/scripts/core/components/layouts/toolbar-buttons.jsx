import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const ToolbarButtons = (props)=> {
	return (<div className="d-flex align-items-center py-1">{props.children}
        </div>)
}

export default ToolbarButtons