/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false,
      aws4: false,
      snappy: false,
      "@aws-sdk/credential-providers": false,
      "@mongodb-js/zstd": false,
      "gcp-metadata": false,
      kerberos: false,
    };

    return config;
  },
};

module.exports = nextConfig;
