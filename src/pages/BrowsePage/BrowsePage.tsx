import React from 'react';
import { AdminPanelLayout } from '../../features/AdminPanel/components/templates/AdminPanelLayout';
import { Browse } from '../../components/pages/Browse';

export const BrowsePage: React.FC = () => {
    return (
        <AdminPanelLayout>
            <Browse />
        </AdminPanelLayout>
    );
};
