import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../../../../temp/default/ui/tooltip';
import { Switch } from '../../../../../temp/default/ui/switch';
import { Label } from '../../../../../temp/default/ui/label';

interface SwitchWithTooltipProps {
    id: string;
    label: string;
    tooltipText: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}

export const SwitchWithTooltip: React.FC<SwitchWithTooltipProps> = ({ id, label, tooltipText, checked, onCheckedChange }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center space-x-2">
                        <Switch id={id} onCheckedChange={onCheckedChange} checked={checked} />
                        <Label htmlFor={id}>{label}</Label>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipText}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
