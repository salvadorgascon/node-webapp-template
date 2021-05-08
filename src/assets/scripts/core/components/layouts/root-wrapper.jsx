import React from 'react'
import ReactDOM from 'react-dom'

const RootWrapper = (props)=> {
	return (<div className="d-flex flex-column flex-root">{props.children}</div>)
}

export default RootWrapper