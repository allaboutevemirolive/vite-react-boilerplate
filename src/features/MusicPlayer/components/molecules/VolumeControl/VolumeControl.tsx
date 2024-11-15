import { Volume2, VolumeX } from 'lucide-react';

interface VolumeControlProps {
    volume: number;
    isMuted: boolean;
    onVolumeChange: (volume: number) => void;
    onToggleMute: () => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
    volume,
    isMuted,
    onVolumeChange,
    onToggleMute,
}) => (
    <div className="flex items-center space-x-2">
        <button
            onClick={onToggleMute}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <div className="w-24 relative h-1 bg-gray-700 rounded-full">
            <div
                className="absolute h-full bg-white rounded-full"
                style={{ width: `${isMuted ? 0 : volume}%` }}
            />
            <input
                type="range"
                min={0}
                max={100}
                value={isMuted ? 0 : volume}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 cursor-pointer"
            />
        </div>
    </div>
);

export default VolumeControl;
