import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '../../../../../temp/default/ui/breadcrumb';
import { Link } from '@tanstack/react-router';

interface BreadcrumbItemProps {
    label: string;
    href?: string; // `href` is optional for items without a link
}

interface BreadcrumbProps {
    items: BreadcrumbItemProps[];
    showSeparators?: boolean; // Control visibility of separators between items
}

export const ReusableBreadcrumb: React.FC<BreadcrumbProps> = ({ items, showSeparators = true }) => (
    <Breadcrumb>
        <BreadcrumbList>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <BreadcrumbItem>
                        {item.href ? (
                            <BreadcrumbLink asChild>
                                <Link to={item.href}>{item.label}</Link>
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        )}
                    </BreadcrumbItem>
                    {showSeparators && index < items.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
            ))}
        </BreadcrumbList>
    </Breadcrumb>
);

