import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const NotificationIcon = () => {
    return <FontAwesomeIcon icon={faBell} />;
}

export default NotificationIcon