import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (avoids picking up a stray
  // lockfile in a parent directory).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
