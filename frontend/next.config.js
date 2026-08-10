/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_PAGES_REPO_NAME;

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProduction && repoName ? `/${repoName}` : "",
};

module.exports = nextConfig;

