import React from 'react';
import styled from 'styled-components';
import { LayoutGrid, LogOut, User } from "lucide-react";
import { Button } from "../../../../../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../../ui/avatar";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "../../../../../ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../../../../../ui/dropdown-menu";
import { Link } from '@tanstack/react-router';

// Styled Components
const StyledButton = styled(Button)`
    position: relative;
    height: 2rem; // Assuming '8' translates to 2rem
    width: 2rem;
    border-radius: 50%;
`;

const StyledAvatar = styled(Avatar)`
    height: 2rem;
    width: 2rem;
`;

const StyledAvatarFallback = styled(AvatarFallback)`
    background-color: transparent;
`;

const StyledDropdownMenuContent = styled(DropdownMenuContent)`
    width: 14rem; // Assuming '56' translates to 14rem
`;

const StyledDropdownMenuLabel = styled(DropdownMenuLabel)`
    font-weight: normal;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem; // Assuming '1' translates to 0.25rem
`;

const Name = styled.p`
    font-size: 0.875rem; // Assuming 'sm' translates to 0.875rem
    font-weight: 500;
    line-height: 1;
`;

const Email = styled.p`
    font-size: 0.75rem; // Assuming 'xs' translates to 0.75rem
    line-height: 1;
    color: var(--muted-foreground); // Assuming you have a CSS variable for muted foreground
`;

const StyledDropdownMenuItem = styled(DropdownMenuItem)`
    &:hover {
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const Icon = styled.svg` // Assuming Lucide icons are SVGs
    width: 1rem; // Assuming '4' translates to 1rem
    height: 1rem;
    margin-right: 0.75rem; // Assuming '3' translates to 0.75rem
    color: var(--muted-foreground);
`;

export const UserNav: React.FC = () => {
    return (
        <DropdownMenu>
            <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <StyledButton variant="outline">
                                <StyledAvatar>
                                    <AvatarImage src="#" alt="Avatar" />
                                    <StyledAvatarFallback>JD</StyledAvatarFallback>
                                </StyledAvatar>
                            </StyledButton>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">Profile</TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <StyledDropdownMenuContent align="end" forceMount>
                <StyledDropdownMenuLabel>
                    <UserInfo>
                        <Name>John Doe</Name>
                        <Email>johndoe@example.com</Email>
                    </UserInfo>
                </StyledDropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <StyledDropdownMenuItem asChild>
                        <StyledLink href="/dashboard">
                            <Icon as={LayoutGrid} />
                            Dashboard
                        </StyledLink>
                    </StyledDropdownMenuItem>
                    <StyledDropdownMenuItem asChild>
                        <StyledLink href="/account">
                            <Icon as={User} />
                            Account
                        </StyledLink>
                    </StyledDropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <StyledDropdownMenuItem onClick={() => { }}>
                    <Icon as={LogOut} />
                    Sign out
                </StyledDropdownMenuItem>
            </StyledDropdownMenuContent>
        </DropdownMenu>
    );
};
