import styled from 'styled-components';
import { ModeToggle } from "../../molecules/ModeToggle"; 
import { SheetMenu } from "../SheetMenu";
import { UserNav } from "../UserNav";

interface NavbarProps {
    title: string;
}

const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    background-color: hsl(var(--background) / 95%); // Correct usage of HSL with opacity
    box-shadow: var(--shadow); // Assuming you have a shadow variable
    backdrop-filter: blur(10px); // Adjust blur value as needed
    @supports (backdrop-filter: blur(10px)) {
        background-color: hsl(var(--background) / 60%); // Correct usage of HSL with opacity
    }

    @media (prefers-color-scheme: dark) {
        box-shadow: var(--shadow-secondary); // Assuming you have a dark mode shadow variable
    }
`;

const Container = styled.div`
    margin-left: 1rem; // Assuming '4' translates to 1rem
    margin-right: 1rem;
    height: 3.5rem; // Assuming '14' translates to 3.5rem
    display: flex;
    align-items: center;

    @media (min-width: 640px) { // Assuming 'sm' breakpoint is 640px
        margin-left: 2rem; // Assuming '8' translates to 2rem
        margin-right: 2rem;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem; // Assuming '4' translates to 1rem

    @media (min-width: 1024px) { // Assuming 'lg' breakpoint is 1024px
        gap: 0;
    }
`;

const Title = styled.h1`
    font-weight: bold;
`;

const ActionsContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export function Navbar({ title }: NavbarProps) {
    return (
        <Header>
            <Container>
                <TitleContainer>
                    <SheetMenu />
                    <Title>{title}</Title>
                </TitleContainer>
                <ActionsContainer>
                    <ModeToggle />
                    <UserNav />
                </ActionsContainer>
            </Container>
        </Header>
    );
}
