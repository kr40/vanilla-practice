'use strict';

//* Imports

import { switchThemeBtn, theme } from './modules/selectors';

//* Theme Switching Functionality

switchThemeBtn.addEventListener('click', function () {
	theme.getAttribute('href') == 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css'
		? theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css')
		: theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css');

	switchThemeBtn.textContent == 'Light 💡'
		? (switchThemeBtn.textContent = 'Dark 🌑')
		: (switchThemeBtn.textContent = 'Light 💡');
});

// Write a function to get the latest date
function getDate() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	console.log(`${day}/${month}/${year}`);
}

getDate();

// This is a test comment
