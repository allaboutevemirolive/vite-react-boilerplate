import { FooterLink } from "../../atoms/FooterLink";

export function FooterContent() {
    return (
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
            Built on top of{" "}
            <FooterLink href="https://ui.shadcn.com">
                shadcn/ui
            </FooterLink>
            . The source code is available on{" "}
            <FooterLink href="https://github.com/salimi-my/shadcn-ui-sidebar">
                GitHub
            </FooterLink>
            .
        </p>
    );
}
