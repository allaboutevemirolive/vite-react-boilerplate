import { useState } from "react";
import { CollapsibleMenuProps } from "./types";
import { Collapsible, CollapsibleContent } from "../../../../../ui/collapsible";
import { CollapsibleTriggerButton } from "../../molecules/CollapsibleTriggerButton";
import { CollapsibleSubmenuList } from "../CollapsibleSubmenuList";
// import { Collapsible, CollapsibleContent } from "../../../ui/collapsible";
// import { CollapsibleTriggerButton } from "./CollapsibleTriggerButton";
// import { CollapsibleSubmenuList } from "./CollapsibleSubmenuList";
// import { CollapsibleMenuProps } from "../types/menu";

export function CollapsibleMenu({ 
    icon: Icon, 
    label, 
    isSubmenuActive, 
    submenus, 
    isOpen 
}: CollapsibleMenuProps) {
    const [isCollapsed, setIsCollapsed] = useState(isSubmenuActive);

    return (
        <Collapsible 
            open={isCollapsed} 
            onOpenChange={setIsCollapsed} 
            className="w-full"
        >
            <CollapsibleTriggerButton 
                Icon={Icon}
                label={label}
                isOpen={isOpen}
                isSubmenuActive={isSubmenuActive}
            />
            <CollapsibleContent 
                className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
            >
                <CollapsibleSubmenuList 
                    submenus={submenus}
                    isOpen={isOpen}
                />
            </CollapsibleContent>
        </Collapsible>
    );
}
