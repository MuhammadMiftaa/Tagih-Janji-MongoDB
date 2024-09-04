/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "asset.kompas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blue.kumparan.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thumb.viva.co.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sinpo.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    instrumentationHook: true,
  },
};

module.exports = nextConfig;
