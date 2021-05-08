import React from 'react'
import ReactDOM from 'react-dom'

const Page = (props)=> {
	return <div className="d-flex flex-row flex-column-fluid page">{props.children}</div>
}

export default Page