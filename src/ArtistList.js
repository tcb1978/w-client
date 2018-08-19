import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Song from './Song';
import {CONFIG} from './config/config.js';

class ArtistList extends PureComponent {
  state = {
    songs: [],
  };

  async componentDidMount() {
    if (this.state.songs.length > 0) return;
    try {
      const res = await fetch(`${CONFIG.api.baseUrl}/songs`);
      const artists = await res.json();
      const newArray = [...artists.items];
      this.setState({
        songs: newArray,
      });
      console.log(this.state.songs);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const artists = this.state.songs;
    return (
      <ArtistGrid>
          {
            artists.map((song, i) => <Song key={`artist_list_item_${i}`} song={song}  />)
          }
      </ArtistGrid>
    );
  }
}

export default ArtistList;

const ArtistGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
    padding: 1rem;
`;