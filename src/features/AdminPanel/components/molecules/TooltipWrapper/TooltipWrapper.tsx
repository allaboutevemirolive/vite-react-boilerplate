import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../../../../../ui/tooltip";
import { ReactNode } from "react";
// import { TooltipProvider } from "../../../../../ui/tooltip";

interface TooltipWrapperProps {
    label: string;
    isOpen: boolean | undefined;
    children: ReactNode;
}

export function TooltipWrapper({ label, isOpen, children }: TooltipWrapperProps) {
    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                {!isOpen && (
                    <TooltipContent side="right">
                        {label}
                    </TooltipContent>
                )}
            </Tooltip>
        </TooltipProvider>
    );
}
