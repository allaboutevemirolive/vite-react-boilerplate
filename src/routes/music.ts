import { createFileRoute } from "@tanstack/react-router";
import { Music } from "../components/templates/Music";

export const Route = createFileRoute("/music")({
	component: Music,
});
