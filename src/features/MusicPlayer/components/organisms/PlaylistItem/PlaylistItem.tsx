import React from 'react';
import { Song } from './types';
// import { Song } from '../../types/types';

interface PlaylistItemProps {
    song: Song;
    isActive: boolean;
    onSelect: (song: Song) => void;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ song, isActive, onSelect }) => (
    <div
        onClick={() => onSelect(song)}
        className={`cursor-pointer p-3 rounded-lg transition-all duration-200 ${
            isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-800 text-gray-300'
        }`}
    >
        <div className="font-medium truncate">{song.title}</div>
        <div className={`text-sm ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>{song.artist}</div>
    </div>
);

export default PlaylistItem;
