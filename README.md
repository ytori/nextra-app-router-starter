# Nextra App Router Starter

This is a starter kit for creating websites by combining [Nextra](https://nextra.site/) with Next.js's [App Router](https://nextjs.org/docs/app).

# Features

As mentioned in [this issue](https://github.com/shuding/nextra/issues/2023), Nextra does not currently support the App Router in its current release version, v3. Support for the App Router is planned for Nextra v4, which has a pre-release version available.

This repository aims to enable quick website building with Nextra + App Router by adding the following configurations based on the [example](https://github.com/shuding/nextra/tree/v4-v2/examples/docs) provided by Nextra:

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint v9](https://eslint.org/) ([Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files))
- [Prettier](https://prettier.io/)
- [Tailwind](https://tailwindcss.com/)

# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

Please check the version in [package.json](./package.json).

## Commands

```sh
# Install
pnpm install

# Development
pnpm dev

# Build
pnpm build

# Start
pnpm start
```

For more details, please refer to [package.json](./package.json).

# Tips

## Static Export

You can perform a [static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) by following these steps:

- Modify [next.config.mjs](./next.config.mjs) as follows:

```diff
export default withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
+ output: 'export',
+ images: {
+   unoptimized: true
+ },
});
```

- Modify [package.json](./package.json) as follows:

```diff
  "scripts": {
    ...
-  "postbuild": "pagefind --site .next/server/app --output-path .next/static/chunks/pagefind",
+  "postbuild": "pagefind --site out --output-path out/_next/static/chunks/pagefind",
    ...
  },
```

- Build and preview on the developer's PC if needed using the following commands:

```sh
# Build
pnpm build

# Preview
pnpm preview
```

- If there are no issues, deploy the `out` directory to GitHub Pages or Amazon S3.

## About [Search](https://nextra.site/docs/guide/search)

Please note that it is not available during development (`pnpm dev`).
