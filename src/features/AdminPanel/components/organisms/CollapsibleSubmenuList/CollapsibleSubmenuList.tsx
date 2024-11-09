// import { SubMenuButton } from "../../molecules/SubMenuButton";
// import { Submenu } from "../types/menu";

import { SubMenuButton } from "../../../../../components/molecules/SubMenuButton";
import { Submenu } from "../CollapsibleMenu/types";

interface CollapsibleSubmenuListProps {
    submenus: Submenu[];
    isOpen: boolean | undefined;
}

export function CollapsibleSubmenuList({ submenus, isOpen }: CollapsibleSubmenuListProps) {
    return (
        <>
            {submenus.map((submenu, index) => (
                <SubMenuButton
                    key={index}
                    href={submenu.href}
                    label={submenu.label}
                    active={submenu.active}
                    isOpen={isOpen}
                />
            ))}
        </>
    );
}
