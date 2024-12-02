/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        //  pathname: '/duqob6xcy/**',
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "ishot-it.s3.us-east-2.amazonaws.com",
        port: "",
        // pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
