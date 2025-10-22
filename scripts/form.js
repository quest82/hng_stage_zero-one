// CONTACT FORM - Form Validation & Success message appearance

// ---- DOM QUERIES
const form = document.querySelector("form");
const nameError = document.querySelector(".nameErrorMessage");
const emailError = document.querySelector(".emailErrorMessage ");
const successPage = document.querySelector(".success");
const redirectBtn = document.querySelector(".success__btn-redirect")
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

// ---- REGEX

const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameTest = /^[A-Za-z]+(?:[ '-][A-Za-z]+)+$/;


// Event Listeners

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Reset
	emailError.style.display = "none";
	nameError.style.display = "none";
	nameInput.classList.remove("errorInput");
	emailInput.classList.remove("errorInput");

	let valid = true;

	// Name Validation
	if (!nameTest.test(nameInput.value.trim())) {
		nameInput.classList.add("errorInput");
		nameError.style.display = "block";
		valid = false;
	}

	// Email Validation
	if (!emailTest.test(emailInput.value)) {
		emailInput.classList.add("errorInput");
		emailError.style.display = "block";
		valid = false;
	}

	if (nameTest.test(nameInput.value) && emailTest.test(emailInput.value)) {
		form.style.display = "none";
		successPage.style.display = "block";
		valid = true;
	}
});


// Redirect Button Link

redirectBtn.addEventListener ('click', () => window.open('../about_me.html', "_blank"))