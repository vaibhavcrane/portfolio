/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["media.graphassets.com"],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
