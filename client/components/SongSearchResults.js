import React from 'react'
import {connect} from 'react-redux'
import {getAllSongs} from '../store/songData'
import IndividualSongResult from './IndividualSongResult'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'

const SongSearchResults = props => {
  let rowCount = 10
  const musicResults = props.musicResults.message.body.track_list

  const pageRowChange = event => {
    // console.log(event.target.value)
    props.getAllSongs(props.lyrics, event.target.value)
    rowCount = event.target.value
    console.log(rowCount)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Song Title</TableCell>
          <TableCell>Album</TableCell>
          <TableCell>Artist</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {musicResults.map(row => {
          return (
            <IndividualSongResult key={row.track.track_id} row={row.track} />
          )
        })}
      </TableBody>
      <TableFooter>
        <TablePagination
          page={0}
          count={rowCount}
          labelRowsPerPage={(10, 60, 30, 10)}
          onChangeRowsPerPage={pageRowChange}
        />
      </TableFooter>
    </Table>
  )
}

const mapStateToProps = state => {
  return {
    musicResults: state.songs
  }
}

const mapDispatchToProps = {
  getAllSongs
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSearchResults)
