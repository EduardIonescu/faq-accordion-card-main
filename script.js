const buttons = document.querySelectorAll(".button");
const paragraphs = document.querySelectorAll(".description");

const toggleDescription = (button, index) => {
	button.classList.toggle("button-active");
	button.classList.toggle("button-inactive");
	paragraphs[index].classList.toggle("hidden");
};

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		toggleDescription(button, index);
	});
});
