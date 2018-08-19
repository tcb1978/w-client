import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {CONFIG} from './config/config.js';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = `${CONFIG.api.baseUrl}/songs`;

const Artist = ({ artist }) => (
  <Link to={`/${artist.id}`}>
    <Overdrive id={artist.id}>
     {/* <Poster src={`${POSTER_PATH}${aritst.image_path}`} alt={artist.title} /> */}
    </Overdrive>
  </Link>
);

export default Artist;

Artist.propTypes = {
  artist: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px #000;
`;

