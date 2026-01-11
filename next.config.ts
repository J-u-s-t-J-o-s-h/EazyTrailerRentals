import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "192.168.1.202:3000",
    "172.19.240.1:3000"
  ],
};

export default nextConfig;
