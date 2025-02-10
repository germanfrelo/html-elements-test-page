document.addEventListener("DOMContentLoaded", () => {
	// Load a style sheet

	const formChangeStyleSheet = document.querySelector("#formChangeStyleSheet");

	formChangeStyleSheet.addEventListener("change", (event) => {
		const styleSheetHref = event.target.value;
		document
			.querySelector("#customStyleSheet")
			.setAttribute("href", styleSheetHref);
	});

	// Show and close the modal dialog

	const dialog = document.querySelector("#gfl-dialog");
	const showButton = document.querySelector("#gfl-dialog-show");
	const closeButton = document.querySelector("#gfl-dialog-close");

	// "Show the dialog" button opens the dialog modally
	showButton.addEventListener("click", () => {
		dialog.showModal();
	});

	// "Close" button closes the dialog
	closeButton.addEventListener("click", () => {
		dialog.close();
	});
});
