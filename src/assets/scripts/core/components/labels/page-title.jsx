import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const PageTitle = (props)=> {
	return (<h1 className="d-flex align-items-center text-dark fw-bolder my-1 fs-3">{props.text}</h1>)
}

export default PageTitle