// plop-templates/component.tsx.hbs
import { Link } from "@tanstack/react-router";

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
        >
            {children}
        </Link>
    );
}
