import React, { useContext } from 'react';
import { MusicPlayerContext } from '../../../store/MusicPlayerContext';
import { SkipButton } from '../../molecules/SkipButton';
import { PlayPauseButton } from '../../molecules/PlayPauseButton';
import { ProgressBar } from '../../molecules/ProgressBar';
import { VolumeControl } from '../../molecules/VolumeControl';

const PlayerControls: React.FC = () => {
    const {
        currentSong,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        togglePlayPause,
        handlePrevious,
        handleNext,
        handleSeek,
        handleVolumeChange,
        toggleMute,
    } = useContext(MusicPlayerContext);

    return (
        <div className="h-32 bg-gray-900 border-t border-gray-800 px-6 py-3 flex flex-col">
            {/* Progress Bar */}
            <ProgressBar
                currentTime={currentTime}
                duration={duration}
                onSeek={handleSeek}
            />
            
            {/* Main Controls */}
            <div className="flex items-center justify-between mt-4">
                {/* Song Info */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/api/placeholder/48/48"
                        alt={`${currentSong?.title} artwork`}
                        className="w-12 h-12 rounded-lg shadow-lg"
                    />
                    <div>
                        <div className="font-medium text-white truncate max-w-[200px]">
                            {currentSong?.title}
                        </div>
                        <div className="text-gray-400 text-sm truncate max-w-[200px]">
                            {currentSong?.artist}
                        </div>
                    </div>
                </div>

                {/* Playback Controls */}
                <div className="flex items-center space-x-6">
                    <SkipButton direction="previous" onClick={handlePrevious} />
                    <PlayPauseButton isPlaying={isPlaying} onClick={togglePlayPause} />
                    <SkipButton direction="next" onClick={handleNext} />
                </div>

                {/* Volume Controls */}
                {/**/}
                <VolumeControl
                    volume={volume}
                    isMuted={isMuted}
                    onVolumeChange={handleVolumeChange}
                    onToggleMute={toggleMute}
                />
            </div>
        </div>
    );
};

export default PlayerControls;
