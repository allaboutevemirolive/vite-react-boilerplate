// SignOutButton.tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../../../ui/tooltip";
import { Button } from "../../../ui/button";
import { LogOut } from "lucide-react";
import { cn } from "../../../lib/utils";

interface SignOutButtonProps {
    isOpen: boolean | undefined;
}

export function SignOutButton({ isOpen }: SignOutButtonProps) {
    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        onClick={() => { }}
                        variant="outline"
                        className="w-full justify-center h-10 mt-5"
                    >
                        <span className={cn(isOpen === false ? "" : "mr-4")}>
                            <LogOut size={18} />
                        </span>
                        <p className={cn("whitespace-nowrap", isOpen === false ? "opacity-0 hidden" : "opacity-100")}>
                            Sign out
                        </p>
                    </Button>
                </TooltipTrigger>
                {isOpen === false && (
                    <TooltipContent side="right">Sign out</TooltipContent>
                )}
            </Tooltip>
        </TooltipProvider>
    );
}
