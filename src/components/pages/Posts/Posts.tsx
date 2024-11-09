import React from 'react';
// import { ContentLayout } from '../../../features/AdminPanel/_temp/admin-panel/content-layout';
import { ReusableBreadcrumb } from '../../../features/AdminPanel/components/molecules/ReusableBreadcrumb';
import { PlaceholderContent } from '../../../features/AdminPanel/components/molecules/PlaceholderContent';
import { ContentLayout } from '../../../features/AdminPanel/components/templates/ContentLayout';

export const Posts: React.FC = () => {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Posts', href: '/posts' },
    ];

    return (
        <ContentLayout title="New Post">
            <ReusableBreadcrumb items={breadcrumbItems} />
            <PlaceholderContent />
        </ContentLayout>
    );
};
