import React from 'react';
// import { Content } from '../../templates/Content';
import { useStore } from '../../../hooks/use-store';
import { useSidebar } from '../../../hooks/use-sidebar';
import { DashboardBreadcrumb } from '../../../features/AdminPanel/components/organisms/DashboardBreadcrumb';
import { DashboardSettings } from '../../../features/AdminPanel/components/organisms/DashboardSettings';
import { ContentLayout } from '../../../features/AdminPanel/components/templates/ContentLayout';
// import { ContentLayout } from '../../../features/AdminPanel/_temp/admin-panel/content-layout';

export const Dashboard: React.FC = () => {
    const sidebar = useStore(useSidebar, (x) => x);
    if (!sidebar) return null;
    const { settings, setSettings } = sidebar;

    return (
        <ContentLayout title="Dashboard">
            <DashboardBreadcrumb />
            <DashboardSettings settings={settings} setSettings={setSettings} />
        </ContentLayout>
    );
};
