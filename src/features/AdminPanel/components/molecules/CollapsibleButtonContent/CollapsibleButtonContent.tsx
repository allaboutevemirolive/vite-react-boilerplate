import { ChevronDown } from "lucide-react";
import { CollapsibleButtonContentProps } from "../../organisms/CollapsibleMenu/types";
import { cn } from "../../../../../lib/utils";
// import { CollapsibleButtonContentProps } from "./types";
// import { cn } from "../../../lib/utils";
// import { CollapsibleButtonContentProps } from "../types/menu";

export function CollapsibleButtonContent({ Icon, label, isOpen }: CollapsibleButtonContentProps) {
    return (
        <div className="w-full items-center flex justify-between">
            <div className="flex items-center">
                <span className="mr-4">
                    <Icon size={18} />
                </span>
                <p className={cn(
                    "max-w-[150px] truncate",
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                )}>
                    {label}
                </p>
            </div>
            <ChevronDown size={18} className="transition-transform duration-200" />
        </div>
    );
}
