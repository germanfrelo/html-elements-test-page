document.addEventListener("DOMContentLoaded", () => {
	// Load a style sheet

	const formChangeStyleSheet = document.querySelector("#formChangeStyleSheet");

	formChangeStyleSheet.addEventListener("change", (event) => {
		const styleSheetHref = event.target.value;
		document
			.querySelector("#customStyleSheet")
			.setAttribute("href", styleSheetHref);
	});
});
