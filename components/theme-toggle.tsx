"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const current = (theme === "system" ? resolvedTheme : theme) ?? "light"
  const isDark = current === "dark"

  const toggle = () => setTheme(isDark ? "light" : "dark")

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={`touch-target relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-card/60 text-ink/80 backdrop-blur transition-all duration-300 hover:border-terracotta hover:text-terracotta ${className}`}
    >
      {/* Always render both icons; show one based on theme to avoid hydration flicker */}
      <Sun
        className={`h-[18px] w-[18px] transition-all duration-300 ${
          mounted && isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
        strokeWidth={1.8}
      />
      <Moon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          mounted && isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
        strokeWidth={1.8}
      />
    </button>
  )
}
