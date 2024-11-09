import React from 'react';
import { SwitchWithTooltip } from '../../molecules/SwitchWithTooltip';

interface DashboardSettingsProps {
    settings: { isHoverOpen: boolean; disabled: boolean };
    setSettings: (newSettings: Partial<{ isHoverOpen: boolean; disabled: boolean }>) => void;
}

export const DashboardSettings: React.FC<DashboardSettingsProps> = ({ settings, setSettings }) => {
    return (
        <div className="flex gap-6 mt-6">
            <SwitchWithTooltip
                id="is-hover-open"
                label="Hover Open"
                tooltipText="When hovering on the sidebar in mini state, it will open"
                checked={settings.isHoverOpen}
                onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
            />
            <SwitchWithTooltip
                id="disable-sidebar"
                label="Disable Sidebar"
                tooltipText="Hide sidebar"
                checked={settings.disabled}
                onCheckedChange={(x) => setSettings({ disabled: x })}
            />
        </div>
    );
};

