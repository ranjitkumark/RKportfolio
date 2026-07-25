import { useCallback, useEffect, useRef, useState } from "react";
import { isNightAt } from "../lib/sunTimes.js";

const STORAGE_KEY = "theme-mode"; // "auto" | "light" | "dark"
const RECHECK_MS = 5 * 60 * 1000; // re-evaluate auto mode every 5 minutes

function systemPrefersDark() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
}

export function useTheme() {
  const [themeMode, setThemeModeState] = useState(() => localStorage.getItem(STORAGE_KEY) || "auto");
  const [resolvedTheme, setResolvedTheme] = useState(systemPrefersDark() ? "dark" : "light");
  const coordsRef = useRef(null);

  const setThemeMode = useCallback((mode) => {
    localStorage.setItem(STORAGE_KEY, mode);
    setThemeModeState(mode);
  }, []);

  const cycleThemeMode = useCallback(() => {
    setThemeMode(themeMode === "auto" ? "light" : themeMode === "light" ? "dark" : "auto");
  }, [themeMode, setThemeMode]);

  useEffect(() => {
    if (themeMode !== "auto") {
      const isDark = themeMode === "dark";
      setResolvedTheme(isDark ? "dark" : "light");
      applyTheme(isDark);
      return;
    }

    let cancelled = false;

    const resolveFromCoords = () => {
      if (!coordsRef.current) return null;
      const { lat, lon } = coordsRef.current;
      return isNightAt(new Date(), lat, lon);
    };

    const recompute = () => {
      const night = resolveFromCoords();
      const isDark = night === null ? systemPrefersDark() : night;
      if (!cancelled) {
        setResolvedTheme(isDark ? "dark" : "light");
        applyTheme(isDark);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (!coordsRef.current) recompute();
    };
    mediaQuery.addEventListener("change", onSystemChange);

    // Apply immediately from whatever we know synchronously (system preference or
    // previously cached coords) so the DOM never lags behind the painted icon —
    // geolocation, if granted, refines this a moment later.
    recompute();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          coordsRef.current = { lat: position.coords.latitude, lon: position.coords.longitude };
          recompute();
        },
        () => recompute(), // permission denied or unavailable — fall back to system preference
        { timeout: 8000, maximumAge: 1000 * 60 * 60 }
      );
    } else {
      recompute();
    }

    const interval = setInterval(recompute, RECHECK_MS);

    return () => {
      cancelled = true;
      clearInterval(interval);
      mediaQuery.removeEventListener("change", onSystemChange);
    };
  }, [themeMode]);

  return { themeMode, resolvedTheme, setThemeMode, cycleThemeMode };
}
