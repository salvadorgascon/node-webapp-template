import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const ModalFooter = (props)=> {
	return ( <div className="modal-footer">{props.children}</div>)
}

export default ModalFooter