import { cn } from "../../../../../lib/utils";
import { BrandLink } from "../BrandLink";

interface SidebarHeaderProps {
    getOpenState: () => boolean;
}

export function SidebarHeader({ getOpenState }: SidebarHeaderProps) {
    return (
        <div
            className={cn(
                "flex justify-center items-center transition-transform ease-in-out duration-300 mb-1",
                !getOpenState() ? "translate-x-1" : "translate-x-0"
            )}
        >
            <BrandLink getOpenState={getOpenState} />
        </div>
    );
}
