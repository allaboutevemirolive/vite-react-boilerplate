// plop-templates/component.tsx.hbs
import React from 'react';
import { MenuIcon, PanelsTopLeft } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../../../../ui/sheet';
import { Button } from '../../../../../ui/button';
import { Link } from '@tanstack/react-router';
import { Menu } from '../Menu';
// import { Menu } from '../Menu';


export const SheetMenu: React.FC = () => {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden" asChild>
                <Button className="h-8" variant="outline" size="icon">
                    <MenuIcon size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
                <SheetHeader>
                    <Button
                        className="flex justify-center items-center pb-2 pt-1"
                        variant="link"
                        asChild
                    >
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <PanelsTopLeft className="w-6 h-6 mr-1" />
                            <SheetTitle className="font-bold text-lg">Brand</SheetTitle>
                        </Link>
                    </Button>
                </SheetHeader>
                <Menu isOpen />
            </SheetContent>
        </Sheet>
    );
};
