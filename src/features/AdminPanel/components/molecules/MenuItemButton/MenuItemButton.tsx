import { Link } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";
import { TooltipWrapper } from "../TooltipWrapper";
import { Button } from "../../../../../ui/button";
import { MenuItemIcon } from "../../atoms/MenuItemIcon";
import { MenuItemLabel } from "../../atoms/MenuItemLabel";

interface MenuItemButtonProps {
    href: string;
    label: string;
    Icon: LucideIcon;
    active: boolean;
    isOpen: boolean | undefined;
}

export function MenuItemButton({ href, label, Icon, active, isOpen }: MenuItemButtonProps) {
    return (
        <TooltipWrapper label={label} isOpen={isOpen}>
            <Button
                variant={active ? "secondary" : "ghost"}
                className="w-full justify-start h-10 mb-1"
                asChild
            >
                <Link to={href}>
                    <MenuItemIcon Icon={Icon} isOpen={isOpen} />
                    <MenuItemLabel label={label} isOpen={isOpen} />
                </Link>
            </Button>
        </TooltipWrapper>
    );
}
