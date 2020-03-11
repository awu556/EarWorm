import React from 'react'
import {connect} from 'react-redux'

const MyAccount = props => {
  const {user} = props
  return (
    <div>
      <h1>
        Hello {user.email}, here are a list of your previous search terms and
        saved songs
      </h1>
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState, null)(MyAccount)
