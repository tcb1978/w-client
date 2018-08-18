import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Artist from './Artist';

class ArtistList extends PureComponent {
  state = {
    artists: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://s3-us-west-2.amazonaws.com/wurrly-data/test/songs.json');
      const artists = await res.json();
      console.log(Object.keys(artists));
      this.setState({
        artists: artists.items,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // console.log(this.state.artists);
    const artists = this.state.artists;
    return (
      <ArtistGrid>
        {artists.map(artist => <Artist key={artist.id} artist={artist.name} />)}
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