import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const TopMenuBar = props => {
  return (
    <div className="topMenuBar">
      {props.user.isLoggedIn ? (
        <Menu size="massive" inverted fluid widths={3}>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/home" onClick={props.user.handleClick}>
            Logout
          </Menu.Item>
          <Menu.Item as={Link} to="/searchForASong">
            Search for a Song!
          </Menu.Item>
        </Menu>
      ) : (
        <Menu size="massive" inverted fluid widths={4}>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/login">
            Login
          </Menu.Item>
          <Menu.Item as={Link} to="/signup">
            Sign Up
          </Menu.Item>
          <Menu.Item as={Link} to="/searchForASong">
            Search for a Song!
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default TopMenuBar
