/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            port: '',
            // pathname: '/account123/**',
          },
          {
                 protocol: 'https',
                 hostname: 'res.cloudinary.com',
                 port: '',
                //  pathname: '/duqob6xcy/**',
              },
        ],
      },
};

export default nextConfig;
