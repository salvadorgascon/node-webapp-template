import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const PageDescription = (props)=> {
	return (<React.Fragment>
        <span className="h-20px border-gray-200 border-start ms-3 mx-2"></span>
        <small className="text-muted fs-7 fw-bold my-1 ms-1">{props.text}</small>
    </React.Fragment>)
}

export default PageDescription