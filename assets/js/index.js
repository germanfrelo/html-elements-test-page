document.addEventListener("DOMContentLoaded", () => {
	// Load a style sheet

	const formChangeStyleSheet = document.querySelector("#formChangeStyleSheet");

	formChangeStyleSheet.addEventListener("change", (event) => {
		const styleSheetHref = event.target.value;
		document
			.querySelector("#customStyleSheet")
			.setAttribute("href", styleSheetHref);
	});

	// Toggle Color Scheme

	const btnColorScheme = document.querySelector("#btnColorScheme");
	const colorScheme = document.querySelector('meta[name="color-scheme"]');

	btnColorScheme.addEventListener("click", () => {
		if (colorScheme) {
			if (colorScheme.content === "dark") {
				colorScheme.content = "light";
			} else {
				if ((colorScheme.content = "light")) {
					colorScheme.content = "dark";
				}
			}
		}
	});
});
