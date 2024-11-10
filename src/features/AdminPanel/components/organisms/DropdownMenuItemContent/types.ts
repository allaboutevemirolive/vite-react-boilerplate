import { LucideIcon } from "lucide-react";
import { Submenu } from "../../molecules/SubmenuItems/types";

export interface DropdownMenuItemContentProps {
    icon: LucideIcon;
    label: string;
    isSubmenuActive: boolean;
    submenus: Submenu[];
    isOpen: boolean | undefined;
}
