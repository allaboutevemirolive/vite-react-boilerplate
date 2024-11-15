import React, { useContext } from 'react';
import styled from 'styled-components';
import { MusicPlayerContext } from '../../../store/MusicPlayerContext';
import { SkipButton } from '../../molecules/SkipButton';
import { PlayPauseButton } from '../../molecules/PlayPauseButton';
import { ProgressBar } from '../../molecules/ProgressBar';
import { VolumeControl } from '../../molecules/VolumeControl';
import { RepeatIcon } from 'lucide-react';

const Container = styled.div`
    height: 8rem; // 128px = 8rem
    background-color: #1f2937; // gray-900
    border-top: 1px solid #2d3748; // gray-800
    padding: 0.75rem 1.5rem; // py-3 px-6
    display: flex;
    flex-direction: column;
`;

const ControlsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem; // mt-4
`;

const SongInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem; // space-x-4
`;

const SongImage = styled.img`
    width: 3rem; // w-12
    height: 3rem; // h-12
    border-radius: 0.5rem; // rounded-lg
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // shadow-lg
`;

const SongDetails = styled.div`
    max-width: 12.5rem; // max-w-[200px]
`;

const SongTitle = styled.div`
    font-weight: 500; // font-medium
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SongArtist = styled.div`
    color: #9ca3af; // text-gray-400
    font-size: 0.875rem; // text-sm
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PlaybackControls = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem; // space-x-6
`;

const AutoPlayButton = styled.button`
    color: #9ca3af; // text-gray-400
    transition: color 0.2s ease;

    &:hover {
        color: white;
    }

    &.active {
        color: white;
    }
`;

const PlayerControls: React.FC = () => {
    const {
        currentSong,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        isAutoPlayEnabled,
        togglePlayPause,
        handlePrevious,
        handleNext,
        handleSeek,
        handleVolumeChange,
        toggleMute,
        toggleAutoPlay,
    } = useContext(MusicPlayerContext);

    return (
        <Container>
            <ProgressBar currentTime={currentTime} duration={duration} onSeek={handleSeek} />

            <ControlsRow>
                {/* Song Info */}
                <SongInfo>
                    <SongImage src="/api/placeholder/48/48" alt={`${currentSong?.title} artwork`} />
                    <SongDetails>
                        <SongTitle>{currentSong?.title}</SongTitle>
                        <SongArtist>{currentSong?.artist}</SongArtist>
                    </SongDetails>
                </SongInfo>

                {/* Playback Controls */}
                <PlaybackControls>
                    <SkipButton direction="previous" onClick={handlePrevious} />
                    <PlayPauseButton isPlaying={isPlaying} onClick={togglePlayPause} />
                    <SkipButton direction="next" onClick={handleNext} />
                    <AutoPlayButton
                        onClick={toggleAutoPlay}
                        className={isAutoPlayEnabled ? 'active' : ''}
                        aria-label="Toggle autoplay"
                        title="Toggle autoplay"
                    >
                        <RepeatIcon size={20} />
                    </AutoPlayButton>
                </PlaybackControls>

                {/* Volume Controls */}
                <VolumeControl
                    volume={volume}
                    isMuted={isMuted}
                    onVolumeChange={handleVolumeChange}
                    onToggleMute={toggleMute}
                />
            </ControlsRow>
        </Container>
    );
};

export default PlayerControls;
