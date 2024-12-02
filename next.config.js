/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  experimental: {
    appDir: true,
  },
  matcher: ["/pages/:path*"], // Only protect specific routes
};
module.exports = nextConfig;
