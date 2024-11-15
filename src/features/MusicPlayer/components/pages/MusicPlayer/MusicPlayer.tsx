import React from 'react';
import { MusicPlayerProvider } from '../../../store/MusicPlayerContext';
import { YouTubePlayer } from '../../molecules/YouTubePlayer';
import { PlayerControls } from '../../organisms/PlayerControls';

const MusicPlayer: React.FC = () => {
    return (
        <MusicPlayerProvider>
            <div className="flex flex-col h-screen text-white">
                <div className="flex-grow w-full">
                    <YouTubePlayer />
                </div>
                <PlayerControls />
            </div>
        </MusicPlayerProvider>
    );
};

export default MusicPlayer;
