// MenuGroupLabel.tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../../../../../ui/tooltip";
import { Ellipsis } from "lucide-react";
// import { TooltipProvider } from "../../../../../ui/tooltip";

interface MenuGroupLabelProps {
    isOpen: boolean | undefined;
    groupLabel: string | undefined;
}

export function MenuGroupLabel({ isOpen, groupLabel }: MenuGroupLabelProps) {
    if (!groupLabel) return <p className="pb-2"></p>;

    return isOpen || isOpen === undefined ? (
        <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
            {groupLabel}
        </p>
    ) : (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger className="w-full">
                    <div className="w-full flex justify-center items-center">
                        <Ellipsis className="h-5 w-5" />
                    </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>{groupLabel}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
