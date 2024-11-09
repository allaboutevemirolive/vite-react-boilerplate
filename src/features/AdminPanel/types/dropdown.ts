import { LucideIcon } from "lucide-react";

export type Submenu = {
    href: string;
    label: string;
    active?: boolean;
};

export interface DropdownMenuItemContentProps {
    icon: LucideIcon;
    label: string;
    isSubmenuActive: boolean;
    submenus: Submenu[];
    isOpen: boolean | undefined;
}
