// import { useSidebar } from "../../../../hooks/use-sidebar";
// import { useStore } from "../../../../hooks/use-store";
// import { cn } from "../../../../lib/utils";
// import { Footer } from "./footer";
// import { Sidebar } from "./sidebar";

// export default function AdminPanelLayout({
//     children
// }: {
//     children: React.ReactNode;
// }) {
//     const sidebar = useStore(useSidebar, (x) => x);
//     if (!sidebar) return null;
//     const { getOpenState, settings } = sidebar;
//     return (
//         <>
//             <Sidebar />
//             <main
//                 className={cn(
//                     "min-h-[calc(100vh_-_56px)] bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 transition-[margin-left] ease-in-out duration-300",
//                     !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-72")
//                 )}
//             >
//                 {children}
//             </main>
//             <footer
//                 className={cn(
//                     "border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-[margin-left] ease-in-out duration-300",
//                     !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-72")
//                 )}
//             >
//                 <Footer />
//             </footer>
//         </>
//     );
// }
