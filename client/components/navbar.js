import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import TopMenuBar from './TopMenuBar'

class Navbar extends Component {
  render() {
    const {isLoggedIn} = this.props
    return (
      <div className="all-nav-bar">
        <Link to="/">
          <img src="Earworm.png" />
        </Link>

        <nav>
          <TopMenuBar user={isLoggedIn} />
        </nav>
      </div>
    )
  }
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

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
