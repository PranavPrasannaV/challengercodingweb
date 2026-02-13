import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io");
const hasCustomDomain = fs.existsSync(path.join(process.cwd(), "public", "CNAME"));
const pagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserOrOrgPagesRepo && !hasCustomDomain
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
