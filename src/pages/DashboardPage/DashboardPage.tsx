import React from 'react';
import { Dashboard } from '../../components/pages/Dashboard/Dashboard';
import { AdminPanelLayout } from '../../features/AdminPanel/components/templates/AdminPanelLayout';

export const DashboardPage: React.FC = () => {
    return (
        <AdminPanelLayout>
            <Dashboard />
        </AdminPanelLayout>
    );
};
