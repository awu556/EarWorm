import React, {Component} from 'react'
import axios from 'axios'
import {Button} from 'semantic-ui-react'

class SongSearcher extends Component {
  constructor() {
    super()
    this.state = {
      trackData: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit() {
    event.preventDefault()
    const res = await axios.get('/api/music/')
    this.setState({trackData: res.data.message.body.track_list})
  }

  render() {
    console.log(this.state.trackData)
    return (
      <div className="song-search">
        <div>
          <h2>Have a song lyric in mind? Look it up here!</h2>
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Put in your lyrics!</label>
            <input type="text" />
            <Button type="submit">Search</Button>
          </form>
        </div>
        <div />
      </div>
    )
  }
}
/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     trackList: state.songs
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     recieveSongs: (lyrics) => dispatch(recieveSongs(lyrics))
//   }
// }

export default SongSearcher
