// import { cn } from "../../../../lib/utils";

import { SidebarSettings } from "../../../../../hooks/use-sidebar";
import { cn } from "../../../../../lib/utils";

interface SidebarContainerProps {
    isOpen: boolean;
    settings: SidebarSettings;
    children: React.ReactNode;
}

export function SidebarContainer({ isOpen, settings, children }: SidebarContainerProps) {
    return (
        <aside
            className={cn(
                "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
                !isOpen ? "w-[90px]" : "w-72",
                settings.disabled && "hidden"
            )}
        >
            {children}
        </aside>
    );
}
