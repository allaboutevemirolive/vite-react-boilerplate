import React from 'react';
import { Pause, Play } from 'lucide-react';

interface PlayPauseButtonProps {
    isPlaying: boolean;
    onClick: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ isPlaying, onClick }) => (
    <button
        onClick={onClick}
        className="bg-white text-black rounded-full p-3 hover:scale-105 transition-transform"
        aria-label={isPlaying ? 'Pause' : 'Play'}
    >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
    </button>
);

export default PlayPauseButton;
