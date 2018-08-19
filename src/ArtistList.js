import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Artist from './Artist';
import {CONFIG} from './config/config.js';

class ArtistList extends PureComponent {
  state = {
    artists: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch(`${CONFIG.api.baseUrl}/songs`);
      const artists = await res.json();
      const newArray = [...artists.items];
      this.setState({
        artists: newArray,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const artists = this.state.artists;
    return (
      <ArtistGrid>
          {artists.map((artist, i) => <Artist key={`artist_list_item_${i}`}>{artist.artist.name}</Artist>)}
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