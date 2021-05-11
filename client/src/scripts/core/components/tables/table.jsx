import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Table = (props)=> {
	return (<table className="table table-row-bordered table-striped border table-hover">
        <thead>
        <tr className="fw-bolder fs-6 text-gray-800">
            {props.columns}
        </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>        
    </table>)
}

export default Table