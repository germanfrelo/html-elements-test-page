// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ["prettier-plugin-astro"], // Ref: https://docs.astro.build/en/editor-setup/#prettier
	quoteProps: "consistent",
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: ["*.astro", "*.css", "*.html"],
			options: {
				printWidth: Number.POSITIVE_INFINITY,
			},
		},
		{
			files: ["*.jsonc"],
			options: {
				trailingComma: "none",
			},
		},
	],
};

export default config;
