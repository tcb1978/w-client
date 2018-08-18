/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Artist';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'https://s3-us-west-2.amazonaws.com/wurrly-data/test/songs.json';
const BACKDROP_PATH = 'https://s3-us-west-2.amazonaws.com/wurrly-data/test/songs.json';

class ArtistDetail extends Component {
  state = {
    artist: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://s3-us-west-2.amazonaws.com/wurrly-data/test/songs.json`);
      const artist = await res.json();
      this.setState({
        artist,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { artist } = this.state;
    return (
      <ArtistWrapper backdrop={`${BACKDROP_PATH}${artist.backdrop_path}`}>
        <ArtistInfo>
          <Overdrive id={artist.id}>
            <Poster src={`${POSTER_PATH}${artist.poster_path}`} alt={artist.title} />
          </Overdrive>
          <div>
            {this.state.artist.title ? (
              <h1>{artist.title}</h1>
            ) : (
              <i>A title is not currently available for this album.</i>
            )}
            {this.state.artist.release_date ? (
              <h3>{artist.release_date}</h3>
            ) : (
              <i>A release date is not currently available for this album.</i>
            )}
            {this.state.artist.overview ? (
              <p>{artist.overview}</p>
            ) : (
              <i>An overview is not available for this album.</i>
            )}
          </div>
        </ArtistInfo>
      </ArtistWrapper>
    );
  }
}

export default ArtistDetail;

const ArtistWrapper = styled.div`
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  padding-top: 50vh;
  position: relative;
`;

const ArtistInfo = styled.div`
  background: #fff;
  display: flex;
  padding: 2rem 10%;
  text-align: left;
  > div {
    margin-left: 20px;
  }
  img {
    position: rleative;
    top: -5rem;
  }
`;