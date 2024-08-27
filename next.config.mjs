import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  assetPrefix,
  basePath,
  images: {
    unoptimized: true, // Optional: this setting is often used to avoid issues with image optimization
  },
  reactStrictMode: true,
  // Add any other custom configurations here
};

const sentryConfig = {
  // Sentry configuration options
  org: 'zohaib-ot',
  project: 'javascript-nextjs',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryConfig);
