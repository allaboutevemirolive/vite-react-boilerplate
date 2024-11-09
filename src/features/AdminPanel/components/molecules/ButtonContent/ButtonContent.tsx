// import { cn } from "../../../lib/utils";

import { LucideIcon } from "lucide-react";
import { cn } from "../../../../../lib/utils";

interface ButtonContentProps {
    Icon: LucideIcon;
    label: string;
    isOpen: boolean | undefined;
}

export function ButtonContent({ Icon, label, isOpen }: ButtonContentProps) {
    return (
        <div className="w-full items-center flex justify-between">
            <div className="flex items-center">
                <span className={cn(isOpen === false ? "" : "mr-4")}>
                    <Icon size={18} />
                </span>
                <p className={cn("max-w-[200px] truncate",
                    isOpen === false ? "opacity-0" : "opacity-100")}>
                    {label}
                </p>
            </div>
        </div>
    );
}
