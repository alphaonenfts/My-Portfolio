/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', "yotube.com", "www.youtube.com"],
  },
};

export default nextConfig;