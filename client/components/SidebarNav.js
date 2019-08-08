import React from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SidebarNav = props => (
  <Sidebar
    as={Menu}
    animation="overlay"
    direction="left"
    icon="labeled"
    inverted
    vertical
    visible={props.sidebarToggle}
    width="thin"
  >
    <Menu.Item as={Link} to="/" onClick={props.displaySideNav}>
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as={Link} to="/login" onClick={props.displaySideNav}>
      <Icon name="user" />
      Login
    </Menu.Item>
    <Menu.Item as={Link} to="/signup" onClick={props.displaySideNav}>
      <Icon name="user" />
      Sign Up
    </Menu.Item>
  </Sidebar>
)

export default SidebarNav
