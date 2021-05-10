import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MailIcon = () => {
    return <FontAwesomeIcon icon={faEnvelope} />;
}

export default MailIcon