import { FooterLink } from "../../atoms/FooterLink";

export function FooterContent() {
    return (
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
            Built with love by{" "} 
            <FooterLink href="https://github.com/allaboutevemirolive">
                allaboutevemirolive
            </FooterLink>
        </p>
    );
}
