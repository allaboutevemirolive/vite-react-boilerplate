import React from 'react';

interface ProgressBarProps {
    currentTime: number;
    duration: number;
    onSeek: (time: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, duration, onSeek }) => {
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full flex items-center space-x-2">
            <span className="text-xs text-gray-400 w-12">{formatTime(currentTime)}</span>
            <div className="flex-grow relative h-1 bg-gray-700 rounded-full">
                <div
                    className="absolute h-full bg-white rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                <input
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={(e) => onSeek(Number(e.target.value))}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                />
            </div>
            <span className="text-xs text-gray-400 w-12">{formatTime(duration)}</span>
        </div>
    );
};

export default ProgressBar;
