import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'

const ClearIcon = () => {
    return <FontAwesomeIcon icon={faEraser} />;
}

export default ClearIcon