import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

// TODO: Prop active
const TabItem = (props)=> {
	return (<li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href={props.targetId}>{props.text}</a></li>)
}

export default TabItem