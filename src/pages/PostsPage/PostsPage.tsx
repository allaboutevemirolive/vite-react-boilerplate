import React from 'react';
// import AdminPanelLayout from '../../features/AdminPanel/_temp/admin-panel/admin-panel-layout';
import { Posts } from '../../components/pages/Posts';
import { AdminPanelLayout } from '../../features/AdminPanel/components/templates/AdminPanelLayout';

export const PostsPage: React.FC = () => {
    return (
        <AdminPanelLayout>
            <Posts />
        </AdminPanelLayout>
    );
};
