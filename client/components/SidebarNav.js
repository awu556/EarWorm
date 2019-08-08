import React from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SidebarNav = props =>
  props.user.isLoggedIn ? (
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
      <Menu.Item
        as={Link}
        to="#"
        onClick={props.displaySideNav && props.user.handleClick}
      >
        <Icon name="arrow alternate circle left" />
        Logout
      </Menu.Item>
    </Sidebar>
  ) : (
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
