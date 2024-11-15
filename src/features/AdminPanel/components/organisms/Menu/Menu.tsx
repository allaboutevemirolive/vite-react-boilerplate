import { useLocation } from "@tanstack/react-router";
import { getMenuList } from "../../../../../lib/menu-list";
import { ScrollArea } from "../../../../../ui/scroll-area";
import { CollapseMenuButton } from "../../molecules/CollapseMenuButton";
import { MenuGroupLabel } from "../../molecules/MenuGroupLabel";
import { MenuItem } from "../../molecules/MenuItem";
import { SignOutButton } from "../../molecules/SignOutButton";

interface MenuProps {
    isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
    const location = useLocation();
    const pathname = location.pathname;
    const menuList = getMenuList(pathname);

    return (
        <ScrollArea className="[&>div>div[style]]:!block">
            <nav className="mt-8 h-full w-full">
                <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
                    {menuList.map(({ groupLabel, menus }, index) => (
                        <li className="w-full" key={index}>
                            <MenuGroupLabel isOpen={isOpen} groupLabel={groupLabel} />
                            {menus.map(({ href, label, icon: Icon, active, submenus }, index) =>
                                !submenus || submenus.length === 0 ? (
                                    <MenuItem
                                        key={index}
                                        href={href}
                                        label={label}
                                        Icon={Icon}
                                        active={active}
                                        pathname={pathname}
                                        isOpen={isOpen}
                                    />
                                ) : (
                                    <CollapseMenuButton
                                        key={index}
                                        icon={Icon}
                                        label={label}
                                        active={active === undefined ? pathname.startsWith(href) : active}
                                        submenus={submenus}
                                        isOpen={isOpen}
                                    />
                                )
                            )}
                        </li>
                    ))}
                    <li className="w-full grow flex items-end">
                        <SignOutButton isOpen={isOpen} />
                    </li>
                </ul>
            </nav>
        </ScrollArea>
    );
}

