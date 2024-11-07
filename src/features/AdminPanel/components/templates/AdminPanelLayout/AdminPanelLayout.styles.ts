import { cn } from "../../../../../lib/utils";

export const getTransitionClasses = (isDisabled: boolean, isOpen: boolean) => ({
    main: cn(
        "min-h-[calc(100vh_-_56px)] bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 transition-[margin-left] ease-in-out duration-300",
        !isDisabled && (!isOpen ? "lg:ml-[90px]" : "lg:ml-72")
    ),
    footer: cn(
        "border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-[margin-left] ease-in-out duration-300",
        !isDisabled && (!isOpen ? "lg:ml-[90px]" : "lg:ml-72")
    )
});
