import React, { useContext } from 'react';
import { MusicPlayerContext } from '../../../store/MusicPlayerContext';

const YouTubePlayer: React.FC = () => {
    const { currentSong, isPlaying } = useContext(MusicPlayerContext);
    
    return (
        <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="w-full h-full relative">
                <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${currentSong?.videoId}?autoplay=${isPlaying ? 1 : 0}`}
                    title={`${currentSong?.title} by ${currentSong?.artist}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default YouTubePlayer;
