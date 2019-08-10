import React from 'react'
import {Header, Image, Table, Loader, Pagination} from 'semantic-ui-react'

const SongSearchResults = props => {
  const musicData = props.searchResults
  return musicData && musicData.length > 1 ? (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Track Name</Table.HeaderCell>
            <Table.HeaderCell>Album</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Lyrics Link</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {musicData.map(data => (
            <Table.Row key={data.track.track_id}>
              <Table.Cell>
                <Header.Content>{data.track.track_name}</Header.Content>
              </Table.Cell>
              <Table.Cell>{data.track.album_name}</Table.Cell>
              <Table.Cell>{data.track.artist_name}</Table.Cell>
              <Table.Cell href={data.track.track_share_url}>
                Link to Lyrics!
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Pagination
        defaultActivePage={1}
        totalPages={10}
        onChange={props.searchPage}
        value={props.pageNum}
      />
    </div>
  ) : (
    <Loader>Fetching songs that match your lyrics...</Loader>
  )
}

export default SongSearchResults
