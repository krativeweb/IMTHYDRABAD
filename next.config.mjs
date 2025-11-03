/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow external images from imthyderabad.edu.in
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.imthyderabad.edu.in",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Optional: Improve build performance
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
