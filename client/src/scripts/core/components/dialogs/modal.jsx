import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Modal = (props)=> {
	return (
        <div className="modal fade" tabindex="-1" id={props.id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>)
}

export default Modal