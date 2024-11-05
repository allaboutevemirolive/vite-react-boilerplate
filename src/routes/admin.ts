import { createFileRoute } from "@tanstack/react-router";
// import About from "../pages/About";
import AdminPanelLayout from "../features/AdminPanel/_temp/admin-panel/admin-panel-layout";

export const Route = createFileRoute("/admin")({
	component: AdminPanelLayout,
});
