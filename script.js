let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
	let slides = document.querySelectorAll(".slide");
	let currentSlide = slides[slideIndex - 1];

	// Prevent going before first slide or beyond last slide
	if (
		(slideIndex === 1 && n === -1) ||
		(slideIndex === slides.length && n === 1)
	) {
		return;
	}

	// Apply fade-out effect to the current slide
	currentSlide.style.opacity = "0";

	setTimeout(() => {
		currentSlide.style.display = "none"; // Hide after fade-out
		slideIndex += n;
		showSlides(slideIndex);
	}, 500); // Match the animation duration (0.5s)
}

function showSlides(n) {
	let slides = document.querySelectorAll(".slide");
	let pageNumber = document.getElementById("pageNumber");
	let prevButton = document.querySelector(".prev");
	let nextButton = document.querySelector(".next");

	slides.forEach((slide) => {
		slide.style.display = "none";
		slide.style.opacity = "0"; // Start with hidden state
	});

	let newSlide = slides[n - 1];
	newSlide.style.display = "block";

	setTimeout(() => {
		newSlide.style.opacity = "1";
	}, 50); // Small delay for smooth effect

	// Update page count
	pageNumber.textContent = `Page ${n} of ${slides.length}`;

	// Hide Prev on first slide, Hide Next on last slide
	prevButton.style.display = n === 1 ? "none" : "block";
	nextButton.style.display = n === slides.length ? "none" : "block";
}
