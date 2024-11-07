// import { MenuItemButton } from "./MenuItemButton";

import { LucideIcon } from "lucide-react";
import { MenuItemButton } from "../../../features/AdminPanel/components/molecules/MenuItemButton";

interface MenuItemProps {
    href: string;
    label: string;
    Icon: LucideIcon;
    active: boolean | undefined;
    pathname: string;
    isOpen: boolean | undefined;
}

export function MenuItem({ href, label, Icon, active, pathname, isOpen }: MenuItemProps) {
    const isActive = active === undefined ? pathname.startsWith(href) : active;

    return (
        <MenuItemButton
            href={href}
            label={label}
            Icon={Icon}
            active={isActive}
            isOpen={isOpen}
        />
    );
}
