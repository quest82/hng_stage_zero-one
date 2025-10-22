const currentTime = document.querySelector(
	".profileCard__currentTime__milliseconds__number"
);

let currentDate = Date.now();
currentTime.textContent = currentDate;

// This code allows an uploaded image to be converted to URL if the component is reused. It takes the image submitted in a form as a file type input.

// const fileInput = document.querySelector('profileCard__data__avatar__input');
// const avatarImg = document.querySelector('.profileCard__data__avatar');

//     fileInput.addEventListener('change', (event) => {
//       const file = event.target.files[0];

//       if (file) {
//         const objectUrl = URL.createObjectURL(file);
//         avatarImg.src = objectUrl; // Display the uploaded image
//       }
//     });

