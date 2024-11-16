import React from 'react';
import { AdminPanelLayout } from '../../features/AdminPanel/components/templates/AdminPanelLayout';
import { Music } from '../../components/pages/Music';

export const MusicPage: React.FC = () => {
    return (
        <AdminPanelLayout>
            <Music />
        </AdminPanelLayout>
    );
};
