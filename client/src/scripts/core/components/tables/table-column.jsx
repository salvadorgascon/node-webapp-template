import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const TableColumn = (props)=> { 
    return (<th>{props.text}</th>)
}

export default TableColumn