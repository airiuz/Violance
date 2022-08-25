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
        source: "/api/:path*/",
        destination: "http://127.0.0.1:8000/v1/api/:path*/",
      },
    ];
  };

  return {
    trailingSlash: true,
    rewrites,
  };
};
