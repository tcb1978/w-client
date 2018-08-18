import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Artist from './Artist';

class ArtistList extends PureComponent {
  state = {
    artists: [],
  }

  async componentDidMount() {
    try {
      const url = require('./data/songs.json');
      const res = await fetch(url);
      const artists = await res.json();
      console.log(artists);
      this.setState({
        artists: artists.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const artists = this.state.artists;
    return (
      <ArtistGrid>
        {/*artists.map(artist => <Artist key={artist.id} movie={artist} />)*/}
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