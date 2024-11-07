import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../ui/dropdown-menu";
import { Button } from "../../../ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../../../ui/tooltip";
import { Link } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type Submenu = {
    href: string;
    label: string;
    active?: boolean;
};

interface DropdownMenuItemContentProps {
    icon: LucideIcon;
    label: string;
    isSubmenuActive: boolean;
    submenus: Submenu[];
    isOpen: boolean | undefined;
}

export function DropdownMenuItemContent({ icon: Icon, label, isSubmenuActive, submenus, isOpen }: DropdownMenuItemContentProps) {
    return (
        <DropdownMenu>
            <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button variant={isSubmenuActive ? "secondary" : "ghost"} className="w-full justify-start h-10 mb-1">
                                <div className="w-full items-center flex justify-between">
                                    <div className="flex items-center">
                                        <span className={cn(isOpen === false ? "" : "mr-4")}>
                                            <Icon size={18} />
                                        </span>
                                        <p className={cn("max-w-[200px] truncate", isOpen === false ? "opacity-0" : "opacity-100")}>
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="start" alignOffset={2}>
                        {label}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent side="right" sideOffset={25} align="start">
                <DropdownMenuLabel className="max-w-[190px] truncate">{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {submenus.map((submenu, index) => (
                    <DropdownMenuItem key={index} asChild>
                        <Link href={submenu.href} className={`cursor-pointer ${(submenu.active ? "bg-secondary" : "")}`}>
                            <p className="max-w-[180px] truncate">{submenu.label}</p>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
