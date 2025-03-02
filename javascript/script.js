// background color change

const colorTray = ["beige", "coral", "bisque", "lavender", "pink", "plum", ""];
let i = 0;
document
	.getElementById("bg-color-change")
	.addEventListener("click", function () {
		document.documentElement.style.backgroundColor = colorTray[i];
		i = (i + 1) % colorTray.length;
	});

// current date update

function updateDate() {
	const currentDate = new Date();
	const displayDatetime = {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
	};
	document.getElementById("date").innerText = currentDate.toLocaleString(
		"en-BD",
		displayDatetime
	);
}
setInterval(updateDate, 1000);
updateDate();

// activity log update
