import React from 'react';
import { ReusableBreadcrumb } from '../../../features/AdminPanel/components/molecules/ReusableBreadcrumb';
import { PlaceholderContent } from '../../../features/AdminPanel/components/molecules/PlaceholderContent';
import { ContentLayout } from '../../../features/AdminPanel/components/templates/ContentLayout';
import { MusicPlayer } from '../../../features/MusicPlayer/components/pages/MusicPlayer';
// import MusicPlayer from '../../../features/MusicPlayer/components/pages/MusicPlayer/MusicPlayer';
// import { MusicPlayer } from '../../../features/MusicPlayer/components/pages/MusicPlayer';

export const Music: React.FC = () => {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Music', href: '/music' },      
    ];

    return (
        <ContentLayout title="Discover Music">
            <ReusableBreadcrumb items={breadcrumbItems} />
            <MusicPlayer/>
            
            {/*<PlaceholderContent />*/}
        </ContentLayout>
    );
};
