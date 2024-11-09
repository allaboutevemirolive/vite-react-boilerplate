import { Link } from "@tanstack/react-router";
import { Submenu } from "../../../types/dropdown";
import { DropdownMenuItem } from "../../../../../ui/dropdown-menu";
// import { DropdownMenuItem } from "../../../ui/dropdown-menu";
// import { Submenu } from "./types";

interface SubmenuItemsProps {
    submenus: Submenu[];
}

export function SubmenuItems({ submenus }: SubmenuItemsProps) {
    return (
        <>
            {submenus.map((submenu, index) => (
                <DropdownMenuItem key={index} asChild>
                    <Link
                        to={submenu.href}
                        className={`cursor-pointer ${submenu.active ? "bg-secondary" : ""}`}
                    >
                        <p className="max-w-[180px] truncate">{submenu.label}</p>
                    </Link>
                </DropdownMenuItem>
            ))}
        </>
    );
}
