import React, {Component} from 'react'
import {connect} from 'react-redux'
import SongSearchResults from './SongSearchResults'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import {getAllSongs} from '../store/songData'

class SongSearcher extends Component {
  constructor() {
    super()
    this.state = {
      searchLyrics: '',
      searchPage: 1
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSubmit() {
    event.preventDefault()
    const lyrics = this.state.searchLyrics
    this.props.getAllSongs(lyrics)
  }

  onSearchChange(event) {
    this.setState({searchLyrics: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="song-search">
          <h2>Have a song lyric in mind? Look it up here!</h2>

          <form onSubmit={this.onSubmit} size="massive">
            <TextField
              type="text"
              variant="outlined"
              placeholder="Like a rolling stone...."
              onChange={this.onSearchChange}
            />

            <Button type="submit">Search</Button>
          </form>
        </div>

        {this.props.musicResults.message &&
        this.props.musicResults.message.body.track_list.length > 0 ? (
          <SongSearchResults
            pageNum={this.state.searchPage}
            searchLyrics={this.state.searchLyrics}
          />
        ) : (
          ''
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    musicResults: state.songs
  }
}

const mapDispatchToProps = {
  getAllSongs
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSearcher)
