import React, { createContext, useState, useRef, useEffect, ReactNode } from 'react';
import { Song } from '../components/organisms/PlaylistItem/types';

interface MusicPlayerContextProps {
    songs: Song[];
    currentSong: Song;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    handleSongSelect: (song: Song) => void;
    handlePrevious: () => void;
    handleNext: () => void;
    togglePlayPause: () => void;
    handleSeek: (time: number) => void;
    handleVolumeChange: (volume: number) => void;
    toggleMute: () => void;
}

const DEFAULT_SONG: Song = {
    id: '0',
    title: 'Unknown Song',
    artist: 'Unknown Artist',
    videoId: ''
};

export const PLAYLIST_DATA: Song[] = [
    { id: '1', title: 'Sample Song', artist: 'Sample Artist', videoId: 'CanCZktm0TQ' },
    { id: '2', title: 'Another Song', artist: 'Another Artist', videoId: 'dQw4w9WgXcQ' }
];

export const MusicPlayerContext = createContext<MusicPlayerContextProps>({} as MusicPlayerContextProps);

export const MusicPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentSong, setCurrentSong] = useState<Song>(PLAYLIST_DATA[0] || DEFAULT_SONG);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(false);
    const playerRef = useRef<any>(null);

    useEffect(() => {
        // Reset time when song changes
        setCurrentTime(0);
        setDuration(0);
    }, [currentSong]);

    const handleSongSelect = (song: Song) => {
        setCurrentSong(song);
        setIsPlaying(true);
    };

    const currentIndex = PLAYLIST_DATA.findIndex(song => song.id === currentSong.id);

    const handlePrevious = () => {
        if (currentTime > 3) {
            // If more than 3 seconds into song, restart current song
            handleSeek(0);
            return;
        }
        const newIndex = (currentIndex - 1 + PLAYLIST_DATA.length) % PLAYLIST_DATA.length;
        const newSong = PLAYLIST_DATA[newIndex];
        if (newSong) {
            handleSongSelect(newSong);
        }
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % PLAYLIST_DATA.length;
        const newSong = PLAYLIST_DATA[newIndex];
        if (newSong) {
            handleSongSelect(newSong);
        }
    };

    const handleSeek = (time: number) => {
        if (playerRef.current?.internalPlayer) {
            playerRef.current.internalPlayer.seekTo(time);
            setCurrentTime(time);
        }
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        if (playerRef.current?.internalPlayer) {
            playerRef.current.internalPlayer.setVolume(newVolume);
        }
        if (newVolume > 0) {
            setIsMuted(false);
        }
    };

    const toggleMute = () => {
        if (playerRef.current?.internalPlayer) {
            playerRef.current.internalPlayer.setVolume(isMuted ? volume : 0);
            setIsMuted(!isMuted);
        }
    };

    return (
        <MusicPlayerContext.Provider
            value={{
                songs: PLAYLIST_DATA,
                currentSong,
                isPlaying,
                currentTime,
                duration,
                volume,
                isMuted,
                handleSongSelect,
                handlePrevious,
                handleNext,
                togglePlayPause: () => setIsPlaying(prev => !prev),
                handleSeek,
                handleVolumeChange,
                toggleMute,
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
};
