import { useEffect, useState } from "react";

const THEME_KEY = "theme";

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem(THEME_KEY) || "light";
    });

    useEffect(() => {
        // Apply the theme class to the root element
        document.documentElement.classList.toggle("dark", theme === "dark");

        // Save theme preference to localStorage
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return { theme, setTheme: toggleTheme };
};
