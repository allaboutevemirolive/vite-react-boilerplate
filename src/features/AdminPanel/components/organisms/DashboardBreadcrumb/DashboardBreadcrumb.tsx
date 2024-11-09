import React from 'react';
import { ReusableBreadcrumb } from '../../molecules/ReusableBreadcrumb';

export const DashboardBreadcrumb: React.FC = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/dashboard' },
        { label: 'Dashboard' }
    ];

    return (
        <div>
            <ReusableBreadcrumb items={breadcrumbItems} />
        </div>
    );
};

