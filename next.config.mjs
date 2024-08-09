/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fal.media',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'v2.fal.media',
        port: '',
        pathname: '/**'
      }
    ],
  },
};

export default nextConfig;
