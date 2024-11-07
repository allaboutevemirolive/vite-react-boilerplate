import { ChevronDown, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../ui/collapsible";
import { Button } from "../../../ui/button";
import { cn } from "../../../lib/utils";
import { SubMenuButton } from "../../molecules/SubMenuButton";

type Submenu = {
    href: string;
    label: string;
    active?: boolean;
};

interface CollapsibleMenuProps {
    icon: LucideIcon;
    label: string;
    isSubmenuActive: boolean;
    submenus: Submenu[];
    isOpen: boolean | undefined;
}

export function CollapsibleMenu({ icon: Icon, label, isSubmenuActive, submenus, isOpen }: CollapsibleMenuProps) {
    const [isCollapsed, setIsCollapsed] = useState(isSubmenuActive);

    return (
        <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed} className="w-full">
            <CollapsibleTrigger className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1" asChild>
                <Button variant={isSubmenuActive ? "secondary" : "ghost"} className="w-full justify-start h-10">
                    <div className="w-full items-center flex justify-between">
                        <div className="flex items-center">
                            <span className="mr-4">
                                <Icon size={18} />
                            </span>
                            <p className={cn("max-w-[150px] truncate", isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0")}>
                                {label}
                            </p>
                        </div>
                        <ChevronDown size={18} className="transition-transform duration-200" />
                    </div>
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                {submenus.map((submenu, index) => (
                    <SubMenuButton key={index} href={submenu.href} label={submenu.label} active={submenu.active} isOpen={isOpen} />
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
}
