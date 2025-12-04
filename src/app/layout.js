import "../styles/globals.css";
import { clsx } from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/sites";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <a
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </a>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
