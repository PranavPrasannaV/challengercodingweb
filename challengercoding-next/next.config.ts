import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io");
const pagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserOrOrgPagesRepo
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: 'export',
  trailingSlash: true,
  ...(pagesBasePath
    ? {
        basePath: pagesBasePath,
        assetPrefix: `${pagesBasePath}/`,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
