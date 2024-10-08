import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { Head } from "nextra/components";
import "./globals.css";
import { Metadata } from "next";

import { Inter } from "next/font/google";

const siteConfig = {
  name: "Nextra App Router Starter",
  github: "https://github.com/ytori/nextra-app-router-starter",
} as const;

export const { viewport } = Head;

export const metadata: Metadata = {
  title: {
    template: `%s - ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: "A starter kit for Nextra and Next.js App Router",
  applicationName: `${siteConfig.name}`,
  generator: "Next.js",
  appleWebApp: {
    title: `${siteConfig.name}`,
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pageMap } = await import(
    "../../.next/static/chunks/nextra-page-map-.mjs"
  );

  return (
    <html
      lang="en"
      dir="ltr"
      className={inter.className}
      suppressHydrationWarning
    >
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          editLink="Edit this page on GitHub"
          docsRepositoryBase={`${siteConfig.github}/blob/main`}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {/*
          <Banner storageKey="Nextra 4">Nextra 4.0.0-app-router</Banner>
          */}
          <Navbar
            logo={
              <span className="bg-gradient-to-r from-black to-gray-500 bg-clip-text text-xl font-bold tracking-tight text-transparent dark:from-white dark:to-gray-400">
                {siteConfig.name}
              </span>
            }
            projectLink={siteConfig.github}
          />
          {children}
          <Footer>
            <span className="text-sm font-semibold tracking-tight">
              © {new Date().getFullYear()} - {siteConfig.name}
            </span>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
