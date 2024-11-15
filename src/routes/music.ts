import { createFileRoute } from "@tanstack/react-router";
import { MusicPage } from "../pages/MusicPage";

export const Route = createFileRoute("/music")({
	component: MusicPage,
});
