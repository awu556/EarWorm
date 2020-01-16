import React from 'react'
import {connect} from 'react-redux'
import IndividualSongResult from './IndividualSongResult'

import {getAllSongs} from '../store/songData'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'

const SongSearchResults = props => {
  const musicResults = props.musicResults.message.body.track_list

  const handlePageChange = () => {
    console.log(props.pageNum)
    props.getAllSongs(props.searchLyrics, pageNum)
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
          page={pageNum}
          rowsPerPage={30}
          count={180}
          onChangePage={handlePageChange}
          labelRowsPerPage={(10, 60, 30, 10)}
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
