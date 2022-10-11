/** @type {import('next').NextConfig} */
const withReactSvg = require("next-react-svg");
const path = require("path");

const { i18n } = require("./next-i18next.config");

const nextConfig = {
	reactStrictMode: true,
};
module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	nextConfig,
	i18n,
};
// module.exports = withReactSvg({
// 	include: path.resolve(__dirname, "src/assets/svg"),
// 	webpack(config, options) {
// 		return config;
// 	},
// 	eslint: {
// 		ignoreDuringBuilds: true,
// 	},
// 	nextConfig,
// 	i18n,
// });

// module.exports = {
// 	webpack(config) {
// 		config.module.rules.push({
// 			test: /\.svg$/i,
// 			// issuer section restricts svg as component only to
// 			// svgs imported from js / ts files.
// 			//
// 			// This allows configuring other behavior for
// 			// svgs imported from other file types (such as .css)
// 			issuer: { and: [/\.(js|ts|md)x?$/] },
// 			use: [
// 				{
// 					loader: "@svgr/webpack",
// 					options: {
// 						svgoConfig: { plugins: [{ removeViewBox: false }] },
// 					},
// 				},
// 			],
// 		});
// 		return config;
// 	},
// 	eslint: {
// 		ignoreDuringBuilds: true,
// 	},
// 	nextConfig,
// 	i18n,
// };
