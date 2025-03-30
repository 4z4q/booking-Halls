"use client";

import * as React from "react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

const initialState: {
  theme: Theme;
  setTheme: (theme: Theme) => void;
} = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = React.createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Update theme
  useEffect(() => {
    const root = document.documentElement;

    if (!mounted) {
      setMounted(true);

      // Get stored theme from localStorage if available
      const storedTheme = localStorage.getItem("theme") as Theme;
      if (storedTheme) {
        setTheme(storedTheme);
      }

      // Apply initial theme to prevent flash
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      const initialTheme =
        storedTheme === "system" ? systemTheme : storedTheme || defaultTheme;

      if (initialTheme === "dark") {
        root.classList.add("dark");
      }

      return;
    }

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const resolvedTheme = theme === "system" ? systemTheme : theme;

    // Remove transition temporarily if needed
    if (disableTransitionOnChange) {
      root.classList.add("no-transitions");
      setTimeout(() => root.classList.remove("no-transitions"), 0);
    }

    // Apply theme
    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(resolvedTheme);
    } else {
      root.setAttribute(attribute, resolvedTheme);
    }

    // Update color-scheme
    root.style.colorScheme = resolvedTheme;

    // Store theme preference
    localStorage.setItem("theme", theme);
  }, [theme, defaultTheme, attribute, disableTransitionOnChange, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem || !mounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const root = document.documentElement;
        const systemTheme = mediaQuery.matches ? "dark" : "light";

        if (attribute === "class") {
          root.classList.remove("light", "dark");
          root.classList.add(systemTheme);
        } else {
          root.setAttribute(attribute, systemTheme);
        }

        root.style.colorScheme = systemTheme;
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, attribute, enableSystem, mounted]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
