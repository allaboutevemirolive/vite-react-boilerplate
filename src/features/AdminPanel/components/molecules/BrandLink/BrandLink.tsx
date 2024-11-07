import { Link } from "@tanstack/react-router";
import { PanelsTopLeft } from "lucide-react";
import { cn } from "../../../../../lib/utils";

interface BrandLinkProps {
    getOpenState: () => boolean;
}

export function BrandLink({ getOpenState }: BrandLinkProps) {
    return (
        <Link href="/dashboard" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
                className={cn(
                    "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                    !getOpenState()
                        ? "-translate-x-96 opacity-0 hidden"
                        : "translate-x-0 opacity-100"
                )}
            >
                Brand
            </h1>
        </Link>
    );
}
