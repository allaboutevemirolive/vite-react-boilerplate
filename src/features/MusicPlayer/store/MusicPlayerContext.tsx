import React, { createContext, useState, useRef, useEffect, ReactNode } from 'react';
import { Song } from '../components/organisms/PlaylistItem/types';
import { PLAYLIST_DATA } from '../constants/playlistData';

interface MusicPlayerContextProps {
    songs: Song[];
    currentSong: Song;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    isAutoPlayEnabled: boolean; // New prop
    handleSongSelect: (song: Song) => void;
    handlePrevious: () => void;
    handleNext: () => void;
    togglePlayPause: () => void;
    handleSeek: (time: number) => void;
    handleVolumeChange: (volume: number) => void;
    toggleMute: () => void;
    toggleAutoPlay: () => void; // New function
    onVideoEnd: () => void; // New function
}

const DEFAULT_SONG: Song = {
    id: '0',
    title: 'Unknown Song',
    artist: 'Unknown Artist',
    videoId: ''
};

// export const PLAYLIST_DATA: Song[] = [
//     { id: '1', title: 'Sample Song', artist: 'Sample Artist', videoId: 'CanCZktm0TQ' },
//     // { id: '2', title: 'Another Song', artist: 'Another Artist', videoId: 'dQw4w9WgXcQ' },
//     { id: '3', title: 'Strip That Down', artist: 'Liam Payne Featuring Quavo', videoId: 'vSW2M-BB1NE' },
//     { id: '4', title: 'Chandelier', artist: 'Sia', videoId: '2vjPBrBU-TM' },
//     { id: '5', title: 'Side To Side', artist: 'Ariana Grande Featuring Nicki Minaj', videoId: 'SXiSVQZLje8' },
//     { id: '6', title: 'The Monster', artist: 'Eminem Featuring Rihanna', videoId: 'EHkozMIXZ8w' },
//     { id: '7', title: 'Dusk Till Dawn', artist: 'ZAYN Featuring Sia', videoId: 'tt2k8PGm-TI' }
// ];

export const MusicPlayerContext = createContext<MusicPlayerContextProps>({} as MusicPlayerContextProps);

export const MusicPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentSong, setCurrentSong] = useState<Song>(PLAYLIST_DATA[0] || DEFAULT_SONG);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true); // New state
    const playerRef = useRef<any>(null);

    useEffect(() => {
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

    // New function to handle video end
    const onVideoEnd = () => {
        if (isAutoPlayEnabled) {
            handleNext();
        } else {
            setIsPlaying(false);
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

    const toggleAutoPlay = () => {
        setIsAutoPlayEnabled(prev => !prev);
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
                isAutoPlayEnabled,
                handleSongSelect,
                handlePrevious,
                handleNext,
                togglePlayPause: () => setIsPlaying(prev => !prev),
                handleSeek,
                handleVolumeChange,
                toggleMute,
                toggleAutoPlay,
                onVideoEnd,
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
};
