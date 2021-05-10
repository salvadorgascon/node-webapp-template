import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const ModalBody = (props)=> {
	return ( <div className="modal-body">{props.children}</div>)
}

export default ModalBody