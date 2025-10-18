# Profile Card Component

The **Profile Card** component is a reusable UI element that displays a user’s essential information — such as their **avatar**, **name**, **bio**, and optional **socials buttons**.  
It’s designed to be responsive, accessible, and visually consistent across the application.

## Features

- Displays a user’s **avatar**, **name**, and **profile details**.
- Supports both **image URLs** and **uploaded images** for the avatar.
- Responsive and adaptive layout.
- Accessible structure with semantic HTML.
- Customizable styling via CSS variables or utility classes.

## 📘 Instructions for Using the Uploaded Image Option

Follow these steps to enable image upload functionality in the Profile Card component.

1. **Add the File Input**  
   Create a file input and a visible label to trigger it.

   ```html
   <input type="file" accept="image/*" id="avatar-upload" />
   <label for="avatar-upload">Upload New Avatar</label>

2. **Change the comment status of code in script.js file**  

   The needed upload code has been commented out in the JS file, remove the comment for it to work.
