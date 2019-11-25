import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className="homePage">
      {!email ? '' : <h1>Welcome, {email}</h1>}

      <h2>
        Ever listen to a song but only catch a small part in your head? It gets
        annoying trying to figure it out. <br />
        Let EarWorm help you find that song, and get it out of your head!
      </h2>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
