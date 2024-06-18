"use client"
import { makeServer } from "@/services/mirage";

export function StartMirage({ children }: { children: React.ReactNode }) {
  
    if (process.env.NODE_ENV === "development") {
      makeServer({ environment: "development" });
    }

  return <>{children}</>;
}