import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const TopMenuBar = props => {
  return (
    <div className="topMenuBar">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/searchForASong">
            Search for a Song!
          </Button>

          {props.user ? (
            <div>
              <Button color="inherit" href="#" onClick={props.handleClick}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Sign Up
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatchToProps)(TopMenuBar)
