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
  let [page, setPage] = React.useState(0)
  let [rowsPerPage, setRowsPerPage] = React.useState(10)
  const musicResults = props.musicResults.message.body.track_list

  const handleChangePage = (event, newPage = 1) => {
    setPage(newPage)
  }

  const pageRowChange = event => {
    props.getAllSongs(props.lyrics, event.target.value, page)
    setRowsPerPage(event.target.value)
  }

  React.useEffect(
    () => {
      props.getAllSongs(props.lyrics, rowsPerPage, page)
    },
    [page]
  )

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Song Title</TableCell>
          <TableCell>Album</TableCell>
          <TableCell>Artist</TableCell>
          <TableCell />
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
          rowsPerPageOptions={[10, 25, 50]}
          page={page}
          count={1000}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
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
