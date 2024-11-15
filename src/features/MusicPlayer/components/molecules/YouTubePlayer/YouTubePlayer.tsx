import React, { useContext } from 'react';
import styled from 'styled-components';
import { MusicPlayerContext } from '../../../store/MusicPlayerContext';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

const VideoWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1.0rem; // Example: Add rounded corners
`;

const YouTubePlayer: React.FC = () => {
    const { currentSong, isPlaying } = useContext(MusicPlayerContext);

    // We construct the YouTube embed URL
    const embedUrl = `https://www.youtube.com/embed/${currentSong?.videoId}?autoplay=${isPlaying ? 1 : 0}`;

    return (
        <Container>
            <VideoWrapper>
                <Iframe
                    src={embedUrl}
                    title={`${currentSong?.title} by ${currentSong?.artist}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </VideoWrapper>
        </Container>
    );
};

export default YouTubePlayer;
