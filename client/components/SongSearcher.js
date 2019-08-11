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
      searchPage: 1
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onPageChange = this.onPageChange.bind(this)
  }

  async onSubmit() {
    event.preventDefault()
    const lyrics = this.state.searchLyrics
    const res = await axios.get(`/api/music?lyrics=${lyrics}`)
    this.setState({musicResults: res.data.message.body.track_list})
  }

  onSearchChange(event) {
    this.setState({searchLyrics: event.target.value})
  }

  async onPageChange(event, data) {
    const lyrics = this.state.searchLyrics
    let page = data.activePage
    const res = await axios.get(`/api/music?lyrics=${lyrics}&page=${page}`)
    this.setState({
      searchPage: data.activePage,
      musicResults: res.data.message.body.track_list
    })
  }

  render() {
    const {isLoading, value, musicResults} = this.state
    return (
      <div>
        <div className="song-search">
          <h2>Have a song lyric in mind? Look it up here!</h2>

          <Form onSubmit={this.onSubmit} className="searchForm" size="massive">
            <Form.Field>
              <label style={{textAlign: 'center'}}>Put in your lyrics!</label>

              <input
                type="text"
                placeholder="Lyrics go here"
                onChange={this.onSearchChange}
                value={this.state.lyrics}
                style={{width: 1000}}
              />
            </Form.Field>

            <Button
              style={{width: 200}}
              color="yellow"
              size="large"
              type="submit"
            >
              Search
            </Button>
          </Form>
        </div>

        <SongSearchResults
          searchResults={this.state.musicResults}
          pageChange={this.onPageChange}
          pageNum={this.state.searchPage}
        />
      </div>
    )
  }
}

export default SongSearcher
