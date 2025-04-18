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
    themeIcon.src = theme === 'dark' ? './assets/images/icon-sun.svg' : './assets/images/icon-moon.svg';

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