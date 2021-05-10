export default IconSettings

import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

const SettingsIcon = () => {
    return <FontAwesomeIcon icon={faCogs} />;
}

export default SettingsIcon

