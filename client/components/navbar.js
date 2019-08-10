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
    const {isLoggedIn} = this.props
    // console.log(this.props)
    return (
      <div className="all-nav-bar">
        <img className="nav-logo" src="Earworm.png" />
        <nav className="center-nav">
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Button secondary to="/" onClick={this.displaySideNav}>
                Menu
              </Button>
              <SidebarNav
                sidebarToggle={this.state.sidebarToggle}
                displaySideNav={this.displaySideNav}
                user={this.props}
              />
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Button secondary onClick={this.displaySideNav}>
                Menu
              </Button>
              <SidebarNav
                sidebarToggle={this.state.sidebarToggle}
                displaySideNav={this.displaySideNav}
                user={this.props}
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
