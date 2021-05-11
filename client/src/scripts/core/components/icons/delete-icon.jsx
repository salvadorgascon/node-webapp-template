import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteIcon = () => {
    return <FontAwesomeIcon icon={faTrash} />;
}

export default DeleteIcon