import { LucideIcon } from "lucide-react";

export type Submenu = {
    href: string;
    label: string;
    active?: boolean;
};

export interface CollapsibleMenuProps {
    icon: LucideIcon;
    label: string;
    isSubmenuActive: boolean;
    submenus: Submenu[];
    isOpen: boolean | undefined;
}

export interface CollapsibleButtonContentProps {
    Icon: LucideIcon;
    label: string;
    isOpen: boolean | undefined;
}
