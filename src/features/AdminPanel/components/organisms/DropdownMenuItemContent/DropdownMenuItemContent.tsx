import { Button } from "../../../../../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../../../ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../../../ui/tooltip";
import { DropdownMenuItemContentProps } from "../../../types/dropdown";
import { ButtonContent } from "../../molecules/ButtonContent";
import { SubmenuItems } from "../../molecules/SubmenuItems";

export function DropdownMenuItemContent({
    icon: Icon,
    label,
    isSubmenuActive,
    submenus,
    isOpen
}: DropdownMenuItemContentProps) {
    return (
        <DropdownMenu>
            <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant={isSubmenuActive ? "secondary" : "ghost"}
                                className="w-full justify-start h-10 mb-1"
                            >
                                <ButtonContent
                                    Icon={Icon}
                                    label={label}
                                    isOpen={isOpen}
                                />
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="start" alignOffset={2}>
                        {label}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent side="right" sideOffset={25} align="start">
                <DropdownMenuLabel className="max-w-[190px] truncate">
                    {label}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <SubmenuItems submenus={submenus} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
