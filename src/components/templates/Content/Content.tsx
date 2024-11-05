// plop-templates/component.tsx.hbs
import React from 'react';
import { Navbar } from '../../organisms/Navbar';

interface ContentLayoutProps {
    title: string;
    children: React.ReactNode;
}

export function Content({ title, children }: ContentLayoutProps) {
    return (
        <div>
            <Navbar title={title} />
            <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
        </div>
    );
}
