"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon className="w-[1.2rem] h-[1.2rem] transition-all dark:-rotate-90 dark:scale-0 rotate-0 scale-100" />
      <Sun className="absolute w-[1.2rem] h-[1.2rem] transition-all dark:rotate-0 dark:scale-100 rotate-90 scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
