import React from 'react';
import styled from 'styled-components';
import { Navbar } from "../../organisms/Navbar";
import { MusicPlayerLayout } from '../../../../../components/organisms/MusicPlayerLayout';

interface ContentLayoutProps {
    title: string;
    children: React.ReactNode;
}

// Styled Components
const Container = styled.div`
    /* Assuming 'container' sets a max-width and centers content */
    max-width: 4000px;  
    // margin: 0 auto;
`;

const ContentWrapper = styled.div`
    padding-top: 2rem;  // Assuming '8' translates to 2rem in your system
    padding-bottom: 2rem;
    padding-left: 1rem;  // Assuming '4' translates to 1rem
    padding-right: 1rem;

    @media (min-width: 640px) {  // Assuming 'sm' breakpoint is 640px
        padding-left: 2rem;  // Assuming '8' translates to 2rem
        padding-right: 2rem;
    }
`;

export function ContentLayout({ title, children }: ContentLayoutProps) {
    return (
        <div>
            <Navbar title={title} />
            <Container>
                {/*
                <ContentWrapper>
                    {children}
                </ContentWrapper>
                */}
                
                <MusicPlayerLayout/>
            
            </Container>
        </div>
    );
}
