/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "uf8-8-validate": "commmonjs utf-8-validate",
      butfferutil: "commonjs bufferutil",
      canvas: "commonjs canvas",
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/150",
      },
    ],
  },
};

export default nextConfig;
