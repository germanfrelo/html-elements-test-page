/** @type {import('stylelint').Config} */
export default {
	extends: [
		// The order of configs is important: later configs take precedence over earlier ones
		"stylelint-config-html/astro", // Enables .astro syntax parsing
		"stylelint-config-standard", // Extends stylelint-config-recommended and turns on additional rules to enforce modern conventions
		"stylelint-config-recess-order", // Sorts CSS properties
	],
	plugins: ["stylelint-plugin-defensive-css"], // Enforces defensive CSS best practices
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	reportUnscopedDisables: true,
	rules: {
		/* Avoid errors
		---------------------------------------- */
		// Descending
		"no-descending-specificity": [
			true, // Already enabled in stylelint-config-recommended
			{ severity: "warning" }, // Relax the default 'error' severity level because this rule has limitations
		],
		// Invalid
		"syntax-string-no-invalid": true,
		// Unknown
		"no-unknown-animations": true,
		"no-unknown-custom-media": true,
		"no-unknown-custom-properties": true,

		/* Enforce conventions
		(overrides rules from stylelint-config-standard)
		---------------------------------------- */
		// Empty lines
		"comment-empty-line-before": null,
		"declaration-empty-line-before": "never",
		// Max & min
		"max-nesting-depth": [
			4,
			{
				severity: "warning",
				ignore: ["blockless-at-rules", "pseudo-classes"],
			},
		],
		// Pattern
		"custom-property-pattern": null,
		"selector-class-pattern": null,
		"selector-id-pattern": null,
		// Redundant
		"declaration-block-no-redundant-longhand-properties": null,

		/* Plugin: use-defensive-css
		---------------------------------------- */
		"plugin/use-defensive-css": [
			true,
			{
				"severity": "warning",
				"accidental-hover": false,
				"background-repeat": true,
				"custom-property-fallbacks": false,
				"flex-wrapping": false,
				"scroll-chaining": true,
				"scrollbar-gutter": false,
				"vendor-prefix-grouping": true,
			},
		],
	},
	ignoreFiles: [
		// See https://stylelint.io/user-guide/configure#ignorefiles
		"**/*.min.*",
		"dist/",
		"node_modules/",
	],
};
