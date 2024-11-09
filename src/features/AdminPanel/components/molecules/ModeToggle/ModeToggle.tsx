import * as React from "react";
// import { useTheme } from "./path/to/useTheme"; // Adjust this path to your useTheme hook
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../../../../styles/theme/useTheme";
// import { TooltipProvider } from "../../../../../temp/default/ui/tooltip";
// import { TooltipProvider } from "../../../../../ui/tooltip";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../../../temp/default/ui/tooltip";
import { Button } from "../../../../../temp/default/ui/button";
// import { Button } from "../../../temp/default/ui/button";
// import { useTheme } from "../../../styles/theme/useTheme";

export const ModeToggle: React.FC = () => {
    const { setTheme, theme } = useTheme();

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        className="rounded-full w-8 h-8 bg-background mr-2"
                        variant="outline"
                        size="icon"
                        onClick={setTheme}
                    >
                        <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
                        <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
                        <span className="sr-only">Switch Theme</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Switch Theme</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

