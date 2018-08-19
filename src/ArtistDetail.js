/* eslint react/no-did-mount-set-state: 0 */
import React, {Component} from 'react';
import styled from 'styled-components';
import {CONFIG} from './config/config.js';
import {Poster} from './Song';
import Overdrive from 'react-overdrive';

const POSTER_PATH = `${CONFIG.api.baseUrl}/songs`;
const BACKDROP_PATH = `${CONFIG.api.baseUrl}/songs`;

class ArtistDetail extends Component {
    state = {
        song: null
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        try {
            const res = await fetch(`${BACKDROP_PATH}/${id}`);
            const song = await res.json();
            console.log(song);
            this.setState({
                song
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        if (!this.state.song) {
            return (<span>loading...</span>);
        }
        const {artist, imagePath, title, id, available, wurrlyCount} = this.state.song;

        return (
            <ArtistWrapper backdrop={`${imagePath}`}>
                <ArtistInfo>
                    <Overdrive id={id.toString()}>
                        <Poster src={imagePath} alt={title}/>
                    </Overdrive>
                    <div>
                        {artist.name ? (
                            <h1>{title}</h1>
                        ) : (
                            <i>An artist is not currently available for this selection.</i>
                        )}
                        {available ? (
                            <h3>{available}</h3>
                        ) : (
                            <i>A release date is not currently available for this album.</i>
                        )}
                        {wurrlyCount ? (
                            <p>{wurrlyCount}</p>
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