import { Menu } from "../../../../../components/organisms/Menu";
import { useSidebar } from "../../../../../hooks/use-sidebar";
import { SidebarHeader } from "../../molecules/SidebarHeader";

interface SidebarContentProps {
    getOpenState: () => boolean;
}

export function SidebarContent({ getOpenState }: SidebarContentProps) {
    const { setIsHover } = useSidebar();

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800"
        >
            <SidebarHeader getOpenState={getOpenState} />
            <Menu isOpen={getOpenState()} />
        </div>
    );
}
