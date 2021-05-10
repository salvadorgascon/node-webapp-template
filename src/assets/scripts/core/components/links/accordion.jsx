import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Accordion = (props)=> {
	return (<div className="accordion" id={props.id}>{props.children}</div>)
}

export default Accordion