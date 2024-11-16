import React, { ReactNode } from 'react';
import { MusicPlayerContext } from './MusicPlayerContext';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

export const MusicPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const musicPlayer = useMusicPlayer();

    return (
        <MusicPlayerContext.Provider value={musicPlayer}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

