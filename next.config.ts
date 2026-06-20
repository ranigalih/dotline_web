import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  /* 
    Allow local network connections for development
    Run with: npm run dev -- --hostname 192.168.224.1
  */
  productionBrowserSourceMaps: false,
};

export default nextConfig;
