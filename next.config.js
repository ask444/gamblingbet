// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;