// complete button functionality

let taskRemaining = document.querySelectorAll(".complete-btn").length;
document.getElementById("task-remaining").innerText = taskRemaining;

let taskCompleted = 0;
document.getElementById("task-completed").innerText = taskCompleted;

function allTaskCompleted() {
	const taskRemaining = document.querySelectorAll(".complete-btn");

	for (let button of taskRemaining) {
		if (!button.disabled) {
			return;
		}
	}
	alert("Congrats!!! You have successfully completed all the tasks.");
}

document.querySelectorAll(".complete-btn").forEach((completeButton) => {
	completeButton.addEventListener("click", function () {
		if (!this.disabled) {
			this.disabled = true;

			taskRemaining--;
			taskCompleted++;

			document.getElementById("task-remaining").innerText = taskRemaining;
			document.getElementById("task-completed").innerText = taskCompleted;

			alert("Board Updated Successfully.");

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

			newActivity.innerHTML = `You have completed the task <b>${taskName}</b> at ${time}`; //dynamic task and date update in the activity log

			document.getElementById("history").appendChild(newActivity);

			allTaskCompleted();
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
