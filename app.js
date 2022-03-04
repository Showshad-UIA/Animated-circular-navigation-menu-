let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

menuToggle.onclick = function () {
	menu.classList.toggle("active");
	menuToggle.classList.toggle("active");
};
const li = document.querySelectorAll("li");
function activeLink() {
	list.forEach((item) => item.classList.remove(active));
	this.classList.add("active");
}
