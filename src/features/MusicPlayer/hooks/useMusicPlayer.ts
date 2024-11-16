import { useState, useEffect, useRef } from 'react';
import { Song } from '../components/organisms/PlaylistItem/types';
import { MusicPlayerContextProps } from '../store/MusicPlayerContext';
import { PLAYLIST_DATA } from '../constants/playlistData';
// import { MusicPlayerContextProps, PLAYLIST_DATA } from '../context/MusicPlayerContext';

const DEFAULT_SONG: Song = {
    id: '0',
    title: 'Unknown Song',
    artist: 'Unknown Artist',
    videoId: '',
};

export const useMusicPlayer = (): MusicPlayerContextProps => {
    const [currentSong, setCurrentSong] = useState<Song>(PLAYLIST_DATA[0] || DEFAULT_SONG);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
    const playerRef = useRef<any>(null);

    const currentIndex = PLAYLIST_DATA.findIndex(song => song.id === currentSong.id);

    useEffect(() => {
        setCurrentTime(0);
        setDuration(0);
    }, [currentSong]);

    const handleSongSelect = (song: Song) => {
        setCurrentSong(song);
        setIsPlaying(true);
    };

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
        }
        setCurrentTime(time);
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        if (playerRef.current?.internalPlayer) {
            playerRef.current.internalPlayer.setVolume(newVolume);
        }
        if (newVolume > 0) setIsMuted(false);
    };

    const toggleMute = () => {
        if (playerRef.current?.internalPlayer) {
            playerRef.current.internalPlayer.setVolume(isMuted ? volume : 0);
        }
        setIsMuted(!isMuted);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlayEnabled(prev => !prev);
    };

    const onVideoEnd = () => {
        if (isAutoPlayEnabled) {
            handleNext();
        } else {
            setIsPlaying(false);
        }
    };

    return {
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
        // playerRef,
    };
};

