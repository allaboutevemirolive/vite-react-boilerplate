import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: {
                    DEFAULT: "hsl(var(--background))",
                    dark: "hsl(222, 14%, 18%)",    // Slightly lighter dark background
                    light: "hsl(35, 25%, 96%)"     // Warmer light background
                },
                foreground: {
                    DEFAULT: "hsl(var(--foreground))",
                    dark: "hsl(220, 15%, 90%)",    // Higher contrast for dark mode
                    light: "hsl(220, 25%, 25%)"    // Softer dark text for light mode
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    dark: "hsl(206, 55%, 65%)",    // Softer blue for dark mode
                    light: "hsl(206, 65%, 45%)"    // Deeper blue for light mode
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                    dark: "hsl(222, 18%, 32%)",    // Lighter secondary for dark mode
                    light: "hsl(220, 16%, 92%)"    // Softer secondary for light mode
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                    dark: "hsl(0, 60%, 60%)",      // Muted red for dark mode
                    light: "hsl(0, 70%, 45%)"      // Softer red for light mode
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                    dark: "hsl(222, 16%, 25%)",    // Lighter muted for dark mode
                    light: "hsl(220, 16%, 95%)"    // Softer muted for light mode
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                    dark: "hsl(222, 22%, 35%)",    // Lighter accent for dark mode
                    light: "hsl(220, 18%, 88%)"    // Softer accent for light mode
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                    dark: "hsl(222, 14%, 20%)",    // Slightly darker than background
                    light: "hsl(35, 25%, 97%)"     // Slightly lighter than background
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                    dark: "hsl(222, 14%, 22%)",    // Lighter than background
                    light: "hsl(35, 25%, 95%)"     // Slightly darker than background
                }
            },
            opacity: {
                '85': '0.85',
                '75': '0.75',
                '90': '0.90',
            },
            blur: {
                'xs': '2px',
                'comfort': '1.5px',
            },
            fontSize: {
                'comfort-base': ['1.0625rem', '1.75'],  // 17px with comfortable line height
                'comfort-lg': ['1.125rem', '1.85'],     // 18px with comfortable line height
            },
            letterSpacing: {
                'comfort': '-0.01em',
            },
            lineHeight: {
                'comfort': '1.75',
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" }
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" }
                },
                "collapsible-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-collapsible-content-height)" }
                },
                "collapsible-up": {
                    from: { height: "var(--radix-collapsible-content-height)" },
                    to: { height: "0" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-out",
                "collapsible-up": "collapsible-up 0.2s ease-out"
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
