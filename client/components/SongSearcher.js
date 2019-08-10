import React, {Component} from 'react'
import axios from 'axios'
import SongSearchResults from './SongSearchResults'
import {Button, Form, Search} from 'semantic-ui-react'

class SongSearcher extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      musicResults: [],
      value: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  // async componentDidMount() {
  //   const res = await axios.get('/api/music/')
  //   this.setState({ musicResults: res.data.message.body.track_list })
  // }

  async onSubmit() {
    event.preventDefault()
    const res = await axios.get('/api/music/')
    this.setState({musicResults: res.data.message.body.track_list})
  }

  render() {
    const {isLoading, value, musicResults} = this.state
    console.log(this.state.musicResults)
    return (
      <div className="song-search">
        <div>
          <h2>Have a song lyric in mind? Look it up here!</h2>

          <Form onSubmit={this.onSubmit} className="searchForm">
            <Form.Field>
              <label>Put in your lyrics!</label>

              <Search loading={isLoading} />
            </Form.Field>

            <Button type="submit">Search</Button>
          </Form>
        </div>

        <SongSearchResults searchResults={this.state.musicResults} />
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
