import React from 'react';
// import AdminPanelLayout from '../../features/AdminPanel/_temp/admin-panel/admin-panel-layout';
import { Dashboard } from '../../components/pages/Dashboard/Dashboard';
import { AdminPanelLayout } from '../../features/AdminPanel/components/templates/AdminPanelLayout';

export const DashboardPage: React.FC = () => {
    return (
        <AdminPanelLayout>
            <Dashboard />
        </AdminPanelLayout>
    );
};
