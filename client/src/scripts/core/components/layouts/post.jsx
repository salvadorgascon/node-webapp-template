import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Post = (props)=> {
	return (
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">{props.children}</div>
        </div>)
}

export default Post