import { LucideIcon } from "lucide-react";
import { cn } from "../../../../../lib/utils";
// import { cn } from "../../../lib/utils";

interface MenuItemIconProps {
    Icon: LucideIcon;
    isOpen: boolean | undefined;
}

export function MenuItemIcon({ Icon, isOpen }: MenuItemIconProps) {
    return (
        <span className={cn(isOpen ? "mr-4" : "")}>
            <Icon size={18} />
        </span>
    );
}
