import { useState, useEffect } from "react";

// Type for breakpoint values
type Breakpoint = number;

// Type for hook return value to handle SSR
type MobileState = boolean | undefined;

/**
 * Hook for detecting mobile devices based on screen width
 * @param breakpoint - Maximum width in pixels to consider as mobile
 * @returns boolean | undefined - Returns undefined during SSR, then true/false after hydration
 */
export function useIsMobile(breakpoint: Breakpoint = 768): MobileState {
  const [isMobile, setIsMobile] = useState<MobileState>(undefined);

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia(
      `(max-width: ${breakpoint}px)`
    );

    const updateIsMobile = (
      event: MediaQueryListEvent | MediaQueryList
    ): void => {
      setIsMobile(event.matches);
    };

    // Set initial value
    updateIsMobile(mediaQuery);

    // Handle browser compatibility
    try {
      mediaQuery.addEventListener("change", updateIsMobile);
      return () => mediaQuery.removeEventListener("change", updateIsMobile);
    } catch (e) {
      // Fallback for older browsers
      mediaQuery.addListener(updateIsMobile);
      return () => mediaQuery.removeListener(updateIsMobile);
    }
  }, [breakpoint]);

  return isMobile;
}

// Types for multi-breakpoint hook
interface BreakpointState {
  isMobile: boolean | undefined;
  isDesktop: boolean | undefined;
}

interface BreakpointQueries {
  mobile: MediaQueryList;
  desktop: MediaQueryList;
}

/**
 * Hook for detecting multiple device breakpoints
 * @returns BreakpointState - Object containing boolean states for different device sizes
 */
export function useBreakpoint(): BreakpointState {
  const [breakpoint, setBreakpoint] = useState<BreakpointState>({
    isMobile: undefined,
    isDesktop: undefined,
  });

  useEffect(() => {
    const queries: BreakpointQueries = {
      mobile: window.matchMedia("(max-width: 1023px)"),
      desktop: window.matchMedia("(min-width: 1024px)"),
    };

    const updateBreakpoint = (): void => {
      setBreakpoint({
        isMobile: queries.mobile.matches,
        isDesktop: queries.desktop.matches,
      });
    };

    // Set initial values
    updateBreakpoint();

    // Add listeners with type safety
    const addListener = (query: MediaQueryList): void => {
      try {
        query.addEventListener("change", updateBreakpoint);
      } catch (e) {
        query.addListener(updateBreakpoint);
      }
    };

    // Remove listeners with type safety
    const removeListener = (query: MediaQueryList): void => {
      try {
        query.removeEventListener("change", updateBreakpoint);
      } catch (e) {
        query.removeListener(updateBreakpoint);
      }
    };

    // Add listeners to all queries
    Object.values(queries).forEach(addListener);

    // Cleanup
    return () => {
      Object.values(queries).forEach(removeListener);
    };
  }, []);

  return breakpoint;
}

// Optional: Custom type guard for checking if breakpoints are initialized
export function isBreakpointInitialized(breakpoint: BreakpointState): boolean {
  return (
    breakpoint.isMobile !== undefined && breakpoint.isDesktop !== undefined
  );
}
