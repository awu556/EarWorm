import React, {Component} from 'react'
import axios from 'axios'
import SongSearchResults from './SongSearchResults'
import {Button, Form, Segment} from 'semantic-ui-react'

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
    res.data.message.body.track_list.length > 0
      ? this.setState({musicResults: res.data.message.body.track_list})
      : this.setState({musicResults: 'Sorry, no songs match your lyrics!'})
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
    return (
      <div>
        <div className="song-search">
          <Segment className="searchSegment">
            <h2>Have a song lyric in mind? Look it up here!</h2>

            <Form onSubmit={this.onSubmit} size="massive">
              <Form.Field>
                <input
                  type="text"
                  placeholder="Like a rolling stone...."
                  onChange={this.onSearchChange}
                  value={this.state.lyrics}
                />
              </Form.Field>

              <Button
                color="yellow"
                size="large"
                type="submit"
                disabled={this.state.searchLyrics.length === 0}
              >
                Search
              </Button>
            </Form>
          </Segment>
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
