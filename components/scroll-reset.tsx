"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReset(): null {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname]);

  return null;
}