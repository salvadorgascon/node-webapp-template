import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const AccordionItem = (props)=> {
	return (
    <div className="accordion-item">
        <h2 className="accordion-header" id={props.id}>
            <button className="accordion-button fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={'#'+props.targetId} aria-expanded="true" aria-controls={props.targetId}>
                {props.text}
            </button>
        </h2>
        <div id={props.targetId} className="accordion-collapse collapse" aria-labelledby={props.id} data-bs-parent={'#'+props.parentId}>
            <div className="accordion-body">{props.children}</div>
        </div>
    </div>
    
    )
}

export default AccordionItem