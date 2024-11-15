import React from 'react';
import styled from 'styled-components';
import { MusicPlayerProvider } from '../../../store/MusicPlayerContext';
import { YouTubePlayer } from '../../molecules/YouTubePlayer';
import { PlayerControls } from '../../organisms/PlayerControls';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; 
    color: white;
    max-height: 800px;
    max-width: 3000px;
`;

const VideoContainer = styled.div`
    flex-grow: 1;
    width: 100%;
`;

const MusicPlayer: React.FC = () => {
    return (
        <MusicPlayerProvider>
            <Container>
                <VideoContainer>
                    <YouTubePlayer />
                </VideoContainer>
                <PlayerControls />
            </Container>
        </MusicPlayerProvider>
    );
};

export default MusicPlayer;
