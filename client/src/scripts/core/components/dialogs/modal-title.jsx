import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const ModalTitle = (props)=> {
	return ( <h5 className="modal-title">{props.text}</h5>)
}

export default ModalTitle