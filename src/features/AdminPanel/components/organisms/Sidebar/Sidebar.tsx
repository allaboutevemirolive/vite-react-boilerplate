import { useSidebar } from "../../../../../hooks/use-sidebar";
import { useStore } from "../../../../../hooks/use-store";
import { SidebarToggle } from "../../../_temp/admin-panel/sidebar-toggle";
import { SidebarContainer } from "../../templates/SidebarContainer";
import { SidebarContent } from "../SidebarContent";

export function Sidebar() {
    const sidebar = useStore(useSidebar, (x) => x);
    if (!sidebar) return null;

    const { isOpen, toggleOpen, getOpenState, settings } = sidebar;

    return (
        <SidebarContainer isOpen={getOpenState()} settings={settings}>
            <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
            <SidebarContent getOpenState={getOpenState} />
        </SidebarContainer>
    );
}
