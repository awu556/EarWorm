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
      value: '',
      searchLyrics: '',
      searchPage: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  async onSubmit() {
    event.preventDefault()
    const lyrics = this.state.searchLyrics
    const res = await axios.get(`/api/music?lyrics=${lyrics}`)
    this.setState({musicResults: res.data.message.body.track_list})
  }

  onSearchChange(event) {
    this.setState({searchLyrics: event.target.value})
    console.log(this.state)
  }

  render() {
    const {isLoading, value, musicResults} = this.state
    return (
      <div className="song-search">
        <div>
          <h2>Have a song lyric in mind? Look it up here!</h2>

          <Form onSubmit={this.onSubmit} className="searchForm">
            <Form.Field>
              <label>Put in your lyrics!</label>

              <input
                type="text"
                placeholder="Lyrics go here"
                onChange={this.onSearchChange}
                value={this.state.lyrics}
              />
            </Form.Field>

            <Button type="submit">Search</Button>
          </Form>
        </div>

        <SongSearchResults
          searchResults={this.state.musicResults}
          pageNum={this.state.searchPage}
        />
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
