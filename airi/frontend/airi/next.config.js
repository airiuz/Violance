/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/auth/api/:path*/",
        destination: "http://127.0.0.1:8000/auth/api/:path*/",
      },
    ];
  };

  return {
    trailingSlash: true,
    rewrites,
  };
};
