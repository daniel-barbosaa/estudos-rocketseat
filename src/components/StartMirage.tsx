"use client"
<<<<<<< HEAD
import { makeServer } from "@/services/miraje";

export function StartMirage() {
=======
import { makeServer } from "@/services/mirage";

export function StartMirage({ children }: { children: React.ReactNode }) {
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
  
    if (process.env.NODE_ENV === "development") {
      makeServer({ environment: "development" });
    }

<<<<<<< HEAD
  return <></>;
}
=======
  return <>{children}</>;
}
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
