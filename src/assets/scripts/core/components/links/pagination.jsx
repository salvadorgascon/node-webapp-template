import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const Paginator = (props)=> {	
	return (<ul className="pagination">
		 <li className="page-item previous"><a href="#" className="page-link"><i className="previous"></i></a></li>
		 {props.children}
		 <li className="page-item next"><a href="#"  className="page-link"><i className="next"></i></a></li>
	</ul>)
}

export default Paginator

