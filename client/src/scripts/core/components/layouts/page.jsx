import React from 'react'
import ReactDOM from 'react-dom'

const Page = (props)=> {
	return <div className="page d-flex flex-row flex-column-fluid">{props.children}</div>
}

export default Page