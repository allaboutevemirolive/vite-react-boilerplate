import React from 'react';
import { Posts } from '../../components/pages/Posts';
import { AdminPanelLayout } from '../../features/AdminPanel/components/templates/AdminPanelLayout';

export const PostsPage: React.FC = () => {
    return (
        <AdminPanelLayout>
            <Posts />
        </AdminPanelLayout>
    );
};
