import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
<<<<<<< HEAD
import { SidebarProvider } from "@/contexts/SidebarDrawerContex";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

=======
import { StartMirage } from "@/components/StartMirage";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888

export const metadata: Metadata = {
  title: "Dashgo.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD




  return (
      <html lang="en">
        <body className={`${roboto.className}`}>
          <SidebarProvider>
            <Providers>
                {children}
            </Providers>
          </SidebarProvider>
=======
  return (
      <html lang="en">
        <body className={`${roboto.className}`}>
          <Providers>
              {children}
          </Providers>
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
        </body>
      </html>
  );
}
