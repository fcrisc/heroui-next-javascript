"use client";

import "../styles/globals.css";
import { clsx } from "clsx";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { Providers } from "./providers";

import { siteConfig } from "@/config/sites";
import { fontSans } from "@/config/fonts";
import { subtitle, title } from "@/components/primitives";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 grow">
              <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                  <h1 className={title()}>404 - Page Not Found</h1>
                  <p className={subtitle()}>This page does not exist.</p>
                  <Link
                    isExternal
                    className={buttonStyles({
                      color: "primary",
                      radius: "full",
                      variant: "shadow",
                      size: "lg",
                    })}
                    href={siteConfig.navItems[0].href}
                  >
                    Home
                  </Link>
                </div>
              </section>
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
