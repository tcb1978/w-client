/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import {CONFIG} from './config/config.js';
import { Poster } from './Artist';
import Overdrive from 'react-overdrive';

const POSTER_PATH = `${CONFIG.api.baseUrl}/songs`;
const BACKDROP_PATH = `${CONFIG.api.baseUrl}/songs`;

class ArtistDetail extends Component {
  state = {
    artist: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`${BACKDROP_PATH}${artist.imagePath}`);
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
      <ArtistWrapper backdrop={`${BACKDROP_PATH}${artist.image_path}`}>
        <ArtistInfo>
          <Overdrive id={artist.id}>
            <Poster src={`${POSTER_PATH}${artist.image_path}`} alt={artist.title} />
          </Overdrive>
          <div>
            {this.state.artist.artist.nam ? (
              <h1>{artist.title}</h1>
            ) : (
              <i>An artist is not currently available for this slection.</i>
            )}
            {this.state.artist.available ? (
              <h3>{artist.available}</h3>
            ) : (
              <i>A release date is not currently available for this album.</i>
            )}
            {this.state.artist.wurrlyCount ? (
              <p>{artist.wurrlyCount}</p>
            ) : (
              <i>An Wurrly Count is not available for this slection.</i>
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