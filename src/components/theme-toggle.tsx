"use client";
import { Moon, Sun, Computer } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <ToggleGroup type="single" size="sm">
      <ToggleGroupItem
        value="bold"
        aria-label="Toggle bold"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Toggle italic"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="strikethrough"
        aria-label="Toggle strikethrough"
        onClick={() => setTheme("system")}
      >
        <Computer className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ThemeToggle;
