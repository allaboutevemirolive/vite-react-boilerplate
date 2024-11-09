// import { LucideIcon } from "lucide-react";
// import { useLocation } from "@tanstack/react-router";
// import { CollapsibleMenu } from "../../../../components/organisms/CollapsibleMenu";
// import { DropdownMenuItemContent } from "../../../../components/organisms/DropdownMenuItemContent";

// type Submenu = {
//     href: string;
//     label: string;
//     active?: boolean;
// };

// interface CollapseMenuButtonProps {
//     icon: LucideIcon;
//     label: string;
//     active: boolean;
//     submenus: Submenu[];
//     isOpen: boolean | undefined;
// }

// export function CollapseMenuButton({
//     icon,
//     label,
//     submenus,
//     isOpen
// }: CollapseMenuButtonProps) {
//     const location = useLocation();
//     const pathname = location.pathname;

//     const isSubmenuActive = submenus.some((submenu: Submenu) =>
//         submenu.active === undefined ? submenu.href === pathname : submenu.active
//     );

//     return isOpen ? (
//         <CollapsibleMenu icon={icon} label={label} isSubmenuActive={isSubmenuActive} submenus={submenus} isOpen={isOpen} />
//     ) : (
//         <DropdownMenuItemContent icon={icon} label={label} isSubmenuActive={isSubmenuActive} submenus={submenus} isOpen={isOpen} />
//     );
// }

