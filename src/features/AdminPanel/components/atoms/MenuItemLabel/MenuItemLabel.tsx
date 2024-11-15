import { cn } from "../../../../../lib/utils";

interface MenuItemLabelProps {
    label: string;
    isOpen: boolean | undefined;
}

export function MenuItemLabel({ label, isOpen }: MenuItemLabelProps) {
    return (
        <p
            className={cn(
                "max-w-[200px] truncate transition-transform duration-200",
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
            )}
        >
            {label}
        </p>
    );
}
