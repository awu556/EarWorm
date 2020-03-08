import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import Navbar from './Navbar'

const Header = props => {
  const {isLoggedIn} = props
  return (
    <div className="main-header">
      <Link to="/">
        <img src="Earworm.png" className="logo" />
      </Link>

      <nav>
        <Navbar user={isLoggedIn} />
      </nav>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Header)

/**
 * PROP TYPES
 */
Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
