import React from 'react';
import { SkipBack, SkipForward } from 'lucide-react';

interface SkipButtonProps {
    direction: 'previous' | 'next';
    onClick: () => void;
}

const SkipButton: React.FC<SkipButtonProps> = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className="text-gray-400 hover:text-white transition-colors"
        aria-label={direction === 'previous' ? 'Previous song' : 'Next song'}
    >
        {direction === 'previous' ? <SkipBack size={24} /> : <SkipForward size={24} />}
    </button>
);

export default SkipButton;
