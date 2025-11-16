"use client";

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
function toggle_mode() {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }

  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
}
export default function ModeToggle() {
  return (
    <Toggle
      aria-label="Toggle Theme"
      variant="outline"
      className="hover:bg-accent! active:bg-background data-[state=on]:bg-background data-[state=on]:*:[&.moon]:hidden data-[state=off]:*:[&.sun]:hidden modetoggle"
      onPressedChange={toggle_mode}
      id="ModeToggle"
      defaultPressed={!document.documentElement.classList.contains("dark")}
    >
      <Moon className="moon" />
      <Sun className="sun" />
    </Toggle>
  );
}
