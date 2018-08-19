import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const Song = ({song}) => {
    const {artist, title, imagePath, id} = song;
    return (
        <Link to={`/${id}`}>
            <Overdrive id={id.toString()}>
                {<Poster src={`${imagePath}`} alt={title}/>}
            </Overdrive>
        </Link>
    )
};

export default Song;

Song.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    artist: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};

export const Poster = styled.img`
  box-shadow: 0 0 35px #000;
`;

