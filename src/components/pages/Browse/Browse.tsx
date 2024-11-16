import React from 'react';
import { ReusableBreadcrumb } from '../../../features/AdminPanel/components/molecules/ReusableBreadcrumb';
import { ContentLayout } from '../../../features/AdminPanel/components/templates/ContentLayout';

export const Browse: React.FC = () => {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Browse', href: '/browse' },      
    ];

    return (
        <ContentLayout title="Discover Music">
            <ReusableBreadcrumb items={breadcrumbItems} />
            
        </ContentLayout>
    );
};
