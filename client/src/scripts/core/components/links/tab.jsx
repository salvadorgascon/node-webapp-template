import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Modal = (props)=> {
	return (<ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
        {props.children}
        </ul>)
}

export default Modal