/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repoName =
  process.env.GITHUB_PAGES_REPO_NAME ||
  process.env.GITHUB_REPOSITORY?.split("/")[1] ||
  "";
const basePath = isProduction && repoName ? `/${repoName}` : "";

const nextConfig = {
  output: isProduction ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

module.exports = nextConfig;
