/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "github-readme-streak-stats.herokuapp.com",
          },
        ],
      },
};

export default nextConfig;
