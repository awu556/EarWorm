import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Button} from 'semantic-ui-react'

import SidebarNav from './SidebarNav'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      sidebarToggle: false
    }
    this.displaySideNav = this.displaySideNav.bind(this)
  }

  displaySideNav() {
    !this.state.sidebarToggle
      ? this.setState({sidebarToggle: true})
      : this.setState({sidebarToggle: false})
  }

  render() {
    const {isLoggedIn, handleClick} = this.props
    return (
      <div>
        <h1>EarWorm</h1>
        <nav className="center-nav">
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Button onClick={this.displaySideNav}>Home</Button>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <SidebarNav
                sidebarToggle={this.state.sidebarToggle}
                displaySideNav={this.displaySideNav}
              />
            </div>
          )}
        </nav>
        <hr />
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
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
