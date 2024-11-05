// plop-templates/component.tsx.hbs
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../temp/default/ui/breadcrumb';
import { Link } from '@tanstack/react-router';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../temp/default/ui/tooltip';
import { Switch } from '../../temp/default/ui/switch';
import { Label } from '../../temp/default/ui/label';
import { Content } from '../../components/templates/Content';
// import { useSidebar } from '../../temp/default/ui/sidebar';
import { useStore } from '../../hooks/use-store';
import { useSidebar } from '../../hooks/use-sidebar';

export const Dashboard: React.FC = () => {
    const sidebar = useStore(useSidebar, (x) => x);
    if (!sidebar) return null;
    const { settings, setSettings } = sidebar;
    return (
        <Content title="Dashboard">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <TooltipProvider>
                <div className="flex gap-6 mt-6">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="is-hover-open"
                                    onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                                    checked={settings.isHoverOpen}
                                />
                                <Label htmlFor="is-hover-open">Hover Open</Label>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>When hovering on the sidebar in mini state, it will open</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="disable-sidebar"
                                    onCheckedChange={(x) => setSettings({ disabled: x })}
                                    checked={settings.disabled}
                                />
                                <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Hide sidebar</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </Content>
    );
};
