import React, { useContext } from 'react';
import { RepeatIcon } from 'lucide-react';
import { SkipButton } from '../../molecules/SkipButton';
import { PlayPauseButton } from '../../molecules/PlayPauseButton';
import { MusicPlayerContext } from '../../../store/MusicPlayerContext';

const PlayerControls: React.FC = () => {
    const context = useContext(MusicPlayerContext);

    if (!context) return null;

    const {
        currentSong,
        isPlaying,
        isAutoPlayEnabled,
        togglePlayPause,
        handlePrevious,
        handleNext,
        toggleAutoPlay,
    } = context;

    return (
        <div className="h-24 bg-background border-t border-border px-6 flex items-center justify-between">
            {/* Song Info */}
            <div className="flex items-center gap-4">
                <img
                    src={currentSong?.artist || '/api/placeholder/48/48'}
                    alt={`${currentSong?.title || 'Unknown'} artwork`}
                    className="w-12 h-12 rounded-md shadow-md"
                />
                <div className="max-w-xs">
                    <div className="text-foreground font-medium truncate">
                        {currentSong?.title || 'Unknown Title'}
                    </div>
                    <div className="text-muted-foreground text-sm truncate">
                        {currentSong?.artist || 'Unknown Artist'}
                    </div>
                </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-6 justify-center">
                <SkipButton direction="previous" onClick={handlePrevious} />
                <PlayPauseButton isPlaying={isPlaying} onClick={togglePlayPause} />
                <SkipButton direction="next" onClick={handleNext} />
                <button
                    onClick={toggleAutoPlay}
                    className={`p-2 rounded hover:text-foreground ${isAutoPlayEnabled ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                    aria-label="Toggle autoplay"
                    title="Toggle autoplay"
                >
                    <RepeatIcon size={20} />
                </button>
            </div>
        </div>
    );
};

export default PlayerControls;

