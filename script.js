let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
	let slides = document.querySelectorAll(".slide");

	// Prevent going before first slide or beyond last slide
	if (
		(slideIndex === 1 && n === -1) ||
		(slideIndex === slides.length && n === 1)
	) {
		return;
	}

	// Remove fade effect before changing slide
	slides[slideIndex - 1].classList.remove("fade");

	slideIndex += n;

	// Update slides and buttons visibility
	showSlides(slideIndex);
}

function showSlides(n) {
	let slides = document.querySelectorAll(".slide");
	let pageNumber = document.getElementById("pageNumber");
	let prevButton = document.querySelector(".prev");
	let nextButton = document.querySelector(".next");

	slides.forEach((slide) => {
		slide.style.display = "none";
		slide.classList.remove("fade"); // Reset fade effect
	});

	slides[n - 1].style.display = "block";

	// Add fade effect
	setTimeout(() => {
		slides[n - 1].classList.add("fade");
	}, 50);

	// Update page count
	pageNumber.textContent = `Page ${n} of ${slides.length}`;

	// Hide Prev on first slide, Hide Next on last slide
	prevButton.style.display = n === 1 ? "none" : "block";
	nextButton.style.display = n === slides.length ? "none" : "block";
}
