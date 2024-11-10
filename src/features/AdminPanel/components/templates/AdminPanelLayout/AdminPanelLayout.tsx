import { useSidebar } from "../../../../../hooks/use-sidebar";
import { useStore } from "../../../../../hooks/use-store";
import { LayoutProps } from "../../../../../Layouts/layout";
import { Footer } from "../../organisms/Footer";
import { Sidebar } from "../../organisms/Sidebar";
import { getTransitionClasses } from "./AdminPanelLayout.styles";

export function AdminPanelLayout({ children }: LayoutProps) {
    const sidebar = useStore(useSidebar, (x) => x);
    
    if (!sidebar) return null;
    
    const { getOpenState, settings } = sidebar;
    const classes = getTransitionClasses(settings.disabled, getOpenState());

    return (
        <>
            <Sidebar />
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </>
    );
}
