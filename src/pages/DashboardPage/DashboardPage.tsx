// plop-templates/component.tsx.hbs
import React from 'react';
import AdminPanelLayout from '../../features/AdminPanel/_temp/admin-panel/admin-panel-layout';
import { Dashboard } from '../Dashboard/Dashboard';

// pages/DashboardPage.tsx
// import React from 'react';
// import { AdminPanelLayout } from './AdminPanelLayout';
// import { Dashboard } from './Dashboard';

export const DashboardPage: React.FC = () => {
    return (
        <AdminPanelLayout>
            <Dashboard />
        </AdminPanelLayout>
    );
};
