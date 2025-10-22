# 🌟 HNG ZERO-ONE  

This project is a continuation of **Stage 0**, expanding the single Profile Card into a **multi-page application**.  
It now includes a **Contact Form**, an **About Me** page, and the **Profile Card Component**, all built with semantic HTML, accessibility, and responsive design in mind.  

---

## 🧩 Profile Card Component  

The **Profile Card** component is a reusable UI element that displays a user’s essential information — such as their **avatar**, **name**, **bio**, and optional **socials buttons**.  
It’s designed to be responsive, accessible, and visually consistent across the application.

### Features

- Displays a user’s **avatar**, **name**, and **profile details**.
- Supports both **image URLs** and **uploaded images** for the avatar.
- Responsive and adaptive layout.
- Accessible structure with semantic HTML.
- Customizable styling via CSS variables or utility classes.

### 📘 Instructions for Using the Uploaded Image Option

Follow these steps to enable image upload functionality in the Profile Card component.

1. **Add the File Input**  
   Create a file input and a visible label to trigger it.

   ```html
   <input type="file" accept="image/*" id="avatar-upload" />
   <label for="avatar-upload">Upload New Avatar</label>

2. **Change the comment status of code in script.js file**  

   The needed upload code has been commented out in the JS file, remove the comment for it to work.

## 📬 Contact Form  

The **Contact Form** validates three fields:  

- **Full Name** – must include first and last name.  
- **Email** – must be a valid email format.  
- **Message** – must meet the minimum character length requirement of 10.  

When all fields are valid, a success message appears containing a **button** that redirects the user to the **About Me** page.  

## 👤 About Me  

The **About Me** page provides a short description of the developer — a personal insight into their journey, interests, and what drives them to learn and grow in web development.  

---

## 🧠 Technologies Used  

- **HTML5** – for semantic and accessible markup.  
- **CSS3** – for responsive design and flexible layouts.  
- **JavaScript (ES6)** – for interactivity, validation, and dynamic behavior.  