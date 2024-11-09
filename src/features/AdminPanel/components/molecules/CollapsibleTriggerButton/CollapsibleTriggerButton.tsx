// import { Button } from "../../../ui/button";
// import { CollapsibleTrigger } from "../../../ui/collapsible";
// import { CollapsibleButtonContent } from "./CollapsibleButtonContent";
// import { CollapsibleButtonContentProps } from "../types/menu";

import { Button } from "../../../../../ui/button";
import { CollapsibleTrigger } from "../../../../../ui/collapsible";
import { CollapsibleButtonContentProps } from "../../organisms/CollapsibleMenu/types";
import { CollapsibleButtonContent } from "../CollapsibleButtonContent";

interface CollapsibleTriggerButtonProps extends CollapsibleButtonContentProps {
    isSubmenuActive: boolean;
}

export function CollapsibleTriggerButton({
    Icon,
    label,
    isOpen,
    isSubmenuActive
}: CollapsibleTriggerButtonProps) {
    return (
        <CollapsibleTrigger
            className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
            asChild
        >
            <Button
                variant={isSubmenuActive ? "secondary" : "ghost"}
                className="w-full justify-start h-10"
            >
                <CollapsibleButtonContent
                    Icon={Icon}
                    label={label}
                    isOpen={isOpen}
                />
            </Button>
        </CollapsibleTrigger>
    );
}
