import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useMDXComponents } from "nextra-theme-docs";
import React from "react";

export async function generateStaticParams() {
  const { RouteToFilepath } = await import(
    "../../../.next/static/chunks/nextra-page-map-.mjs"
  );
  return Object.keys(RouteToFilepath).map((mdxPath) => ({
    mdxPath: mdxPath.split("/"),
  }));
}

export async function generateMetadata({
  params: { mdxPath },
}: {
  params: { mdxPath: string[] };
}): Promise<Metadata> {
  const { metadata } = await loadPage(mdxPath);
  return metadata;
}

export default async function Page({
  params: { mdxPath },
}: {
  params: {
    mdxPath: string[];
  };
}) {
  const {
    default: MDXContent,
    useTOC,
    metadata,
    title,
  } = await loadPage(mdxPath);

  const { wrapper: Wrapper } = useMDXComponents();

  return (
    <Wrapper toc={useTOC()} metadata={metadata} title={title}>
      <MDXContent />
    </Wrapper>
  );
}

async function loadPage(mdxPath: string[] = []): Promise<{
  default: React.ElementType;
  useTOC: () => never;
  metadata: Metadata;
  title: never;
}> {
  const { RouteToFilepath } = await import(
    "../../../.next/static/chunks/nextra-page-map-.mjs"
  );
  try {
    return await import(
      `../../../mdx/${(RouteToFilepath as Record<string, string>)[mdxPath.join("/")]}`
    );
  } catch {
    notFound();
  }
}
