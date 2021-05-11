import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FavoriteIcon = () => {
    return <FontAwesomeIcon icon={faStar} />;
}

export default FavoriteIcon