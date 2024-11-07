import { Link } from "@tanstack/react-router";
import { Dot } from "lucide-react";
import { Button } from "../../../ui/button";
import { cn } from "../../../lib/utils";

interface SubMenuButtonProps {
    href: string;
    label: string;
    active: boolean | undefined;
    isOpen: boolean | undefined;
}

export function SubMenuButton({ href, label, active, isOpen }: SubMenuButtonProps) {
    return (
        <Link to={href} className="w-full">
            <Button
                variant={active ? "secondary" : "ghost"}
                className="w-full justify-start h-10 mb-1"
            >
                <span className="mr-4 ml-2">
                    <Dot size={18} />
                </span>
                <p className={cn("max-w-[170px] truncate", isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0")}>
                    {label}
                </p>
            </Button>
        </Link>
    );
}

