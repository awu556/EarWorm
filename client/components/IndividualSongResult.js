import React from 'react'
import {connect} from 'react-redux'
import {getAllTrackLyrics} from '../store/trackMatchLyric'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const IndividualSongResult = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const row = props.row

  const handleClose = () => {
    setAnchorEl(null)
  }

  const getLyrics = (trackName, trackArtist) => {
    props.getAllTrackLyrics(trackName, trackArtist)
    setAnchorEl(event.target)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return (
    <TableRow key={row.track_id}>
      <TableCell>{row.track_name}</TableCell>
      <TableCell>{row.album_name}</TableCell>
      <TableCell>{row.artist_name}</TableCell>
      <TableCell>
        <Button
          onClick={() => getLyrics(row.track_name, row.artist_name)}
          variant="contained"
          color="secondary"
        >
          Lyric Sample
        </Button>
        {props.lyrics.message ? (
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Typography>
              {props.lyrics.message.body.lyrics.lyrics_body.slice(0, -70)}
            </Typography>
          </Popover>
        ) : (
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Typography>Loading...</Typography>
          </Popover>
        )}
      </TableCell>
      <TableCell>
        <Button variant="contained" color="primary" href={row.track_share_url}>
          Link to lyrics!
        </Button>
      </TableCell>
    </TableRow>
  )
}

const mapStateToProps = state => {
  return {
    lyrics: state.trackLyrics
  }
}

const mapDispatchToProps = {
  getAllTrackLyrics
}

export default connect(mapStateToProps, mapDispatchToProps)(
  IndividualSongResult
)
