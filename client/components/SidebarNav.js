import React from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const SidebarNav = props => (
  <Sidebar
    as={Menu}
    animation="uncover"
    direction="left"
    icon="labeled"
    inverted
    vertical
    visible={false}
    width="thin"
  >
    <Menu.Item as={Link}>
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as={Link}>
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as={Link}>
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
)

export default SidebarNav

SidebarNav.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
}
