// complete button functionality

let taskRemaining = document.querySelectorAll(".complete-btn").length;
document.getElementById("task-remaining").innerText = taskRemaining;

let taskCompleted = 0;
document.getElementById("task-completed").innerText = taskCompleted;

document.querySelectorAll(".complete-btn").forEach((completeButton) => {
	completeButton.addEventListener("click", function () {
		if (!this.disabled) {
			this.disabled = true;

			taskRemaining--;
			taskCompleted++;

			document.getElementById("task-remaining").innerText = taskRemaining;
			document.getElementById("task-completed").innerText = taskCompleted;

			let taskName =
				this.closest(".card-item").querySelector(".task").innerText;
			const currentTime = new Date();
			const time = currentTime.toLocaleTimeString();

			const newActivity = document.createElement("p");
			newActivity.classList.add(
				"mt-3",
				"text-sm",
				"bg-indigo-50",
				"p-2",
				"rounded-lg",
				"text-left"
			);

			newActivity.innerText = `You have completed the task ${taskName} at ${time}`;
			document.getElementById("history").appendChild(newActivity);
		}
	});
});

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
		weekday: "short",
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

document.getElementById("btn-history").addEventListener("click", function () {
	document.getElementById("history").innerHTML = "";
});
