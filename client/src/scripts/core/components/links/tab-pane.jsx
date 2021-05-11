import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const TabPane = (props)=> {
	return (
        <div class="tab-pane fade" id={props.targetId} role="tabpanel">{props.text}</div>)
}

export default TabPane