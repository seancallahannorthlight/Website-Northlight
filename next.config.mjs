/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old address of the Disclaimer page (was "Email Disclaimer") — keep links working.
  async redirects() {
    return [
      { source: "/legal/email-disclaimer", destination: "/legal/disclaimer", permanent: true },
    ];
  },
};

export default nextConfig;
