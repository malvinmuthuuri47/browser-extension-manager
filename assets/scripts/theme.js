// // Get the button and image elements from the DOM
// const themeButton = document.querySelector('.header button');
// const themeImage = themeButton.querySelector('img');

// // check the current theme on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     applyTheme(savedTheme);
// });

// // Add event listener for button click
// themeButton.addEventListener('click', () => {
//     const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     applyTheme(newTheme);
// });

// // Function to apply the theme and update the image
// function applyTheme(theme) {
//     if (theme === 'dark') {
//         document.body.classList.add('dark-mode');
//         themeImage.src = '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-sun.svg';
//         themeImage.alt = 'Switch to light theme';
//     } else {
//         document.body.classList.remove('dark-mode');
//         themeImage.src = '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-moon.svg';
//         themeImage.alt = 'Switch to dark theme';
//     }

//     // save the user's theme preference in localStorage
//     localStorage.setItem('theme', theme);
// }

// // Get the main content card and change each extension item color
// const extensionItem = document.querySelectorAll('.mian-content .extension-item');

// if (extensionItem) {
//     console.log('Found the card item you want to change');
//     console.log(extensionItem);
// } else {
//     console.error('Error locating card. Look at your HTML structure properly');
// }

// // get the button and image elements from the DOM
// const themeButton = document.querySelector('.header button');
// const themeImage = themeButton.querySelector('img');

// // function to apply the theme and update the UI
// function applyTheme(theme) {
//     if (theme === 'dark') {
//         document.body.classList.add('dark-mode');
//         themeImage.src = '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-sun.svg';
//         themeImage.alt = 'Switch to Light Theme';

//         // update extensionItem background for dark mode
//         document.querySelectorAll('.extension-item').forEach(item => {
//             item.style.backgroundColor = '#333';
//             item.style.color = 'white';
//         });
//     } else {
//         document.body.classList.remove('dark-mode');
//         themeImage.src = '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-moon.svg';
//         themeImage.alt = 'Switch to Dark Theme';
//     }

//     // save the user's theme preference in localStorage
//     localStorage.setItem('theme', theme);
// }

// // Check the current theme on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     applyTheme(savedTheme);
// });

// // Add event listener for button click
// themeButton.addEventListener('click', () => {
//     const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     applyTheme(newTheme);
// })

// // get the button and image elements from the DOM
// const themeButton = document.querySelector('.header button');
// const themeIcon = document.querySelector('.header button img');

// // check and apply saved theme preference on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     applyTheme(savedTheme);
// });

// themeButton.addEventListener('click', () => {
//     const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     applyTheme(newTheme);
// });

// function applyTheme(theme) {
//     document.body.classList.toggle('dark-mode', theme === 'dark');

//     // update icon dynamically
//     themeIcon.src = theme === 'dark' ? '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-sun.svg' : '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-moon.svg';
//     themeIcon.alt = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

//     // save theme preference in localStorage
//     localStorage.setItem('theme', theme);
// }

// get the button and image elements from the DOM
const themeButton = document.querySelector('.header button');
const themeIcon = document.querySelector('.header button img');
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header button')

// check and apply saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

themeButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');

    // update icon dynamically
    themeIcon.src = theme === 'dark' ? '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-sun.svg' : '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-moon.svg';
    themeIcon.alt = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

    // apply dark-mode class to the header
    header.classList.toggle('dark-mode', theme === 'dark');

    // apply dark-mode to the header button
    headerBtn.classList.toggle('dark-mode', theme === 'dark');

    // apply dark-mode class to each extension-item
    document.querySelectorAll('.extension-item').forEach(item => {
        item.classList.toggle('dark-mode', theme === 'dark');
    });

    // apply dark-mode to all the buttons in the navbar
    document.querySelectorAll('.navbar .navbar-category button').forEach(item => {
        item.classList.toggle('dark-mode', theme === 'dark');
    })

    // apply dark mode class to each remove button in the extension-item
    document.querySelectorAll('.extension-item .toggle-container button').forEach(item => {
        item.classList.toggle('dark-mode', theme === 'dark');
    })

    // save theme preference in localStorage
    localStorage.setItem('theme', theme);
}


// // get the button and image elements from the DOM
// const themeButton = document.querySelector('header button');
// const themeIcon = document.querySelector('.header button img');
// const header = document.querySelector('.header');
// const headerBtn = document.querySelector('.header button');

// // check and apply saved theme preference on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) applyTheme(savedTheme);
// });

// themeButton.addEventListener('click', (event) => {
//     event.stopPropagation();
//     const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     applyTheme(newTheme);
// });

// function applyTheme(theme) {
//     document.body.classList.toggle('dark-mode', theme === 'dark');

//     // update icon dynamically
//     themeIcon.src = theme === 'dark' ? '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-sun.svg' : '/Frontent_Mentor_Folder/Browser-extension-manager-ui-project/browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-moon.svg';
//     themeIcon.alt = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

//     // apply dark-mode class to the header
//     header.classList.toggle('dark-mode', theme === 'dark');

//     // apply dark-mode class to the header button
//     headerBtn.classList.toggle('dark-mode', theme === 'dark');

//     // apply dark-mode class to each extension-item
//     document.querySelectorAll('.extension-item').forEach(item => {
//         item.classList.toggle('dark-mode', theme === 'dark');
//     });

//     // apply dark-mode class to all buttons in the navbar
//     document.querySelectorAll('.navbar .navbar-category button').forEach(item => {
//         item.classList.toggle('dark-mode', theme === 'dark');
//     });

//     // apply dark mode class to each remove button in the extension-item
//     document.querySelectorAll('.extension-item .toggle-container button').forEach(item => {
//         item.classList.toggle('dark-mode', theme === 'dark');
//     });

//     // save theme preference in localstorage
//     localStorage.setItem('theme', theme);
// }