"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeSwitchToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-5 w-5 text-yellow-500" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleToggle}
        aria-label="Toggle dark mode"
        id="theme-switch"
      />
      <Moon className="h-5 w-5 text-indigo-500" />
      <Label htmlFor="theme-switch" className="sr-only">
        Toggle theme
      </Label>
    </div>
  );
}
