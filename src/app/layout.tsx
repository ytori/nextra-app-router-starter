import { Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import "./globals.css";

export const { viewport } = Head;

export const metadata = {
  metadataBase: new URL("https://nextra.site"),
  title: {
    template: "%s - Nextra",
  },
  description: "Nextra: the Next.js site builder",
  applicationName: "Nextra",
  generator: "Next.js",
  appleWebApp: {
    title: "Nextra",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://nextra.site",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pageMap } = await import(
    "../../.next/static/chunks/nextra-page-map-.mjs"
  );

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/core/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          <Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>
          <Navbar
            // Next.js discord server
            chatLink="https://discord.gg/hEM84NMkRv"
          />
          {children}
        </Layout>
      </body>
    </html>
  );
}
