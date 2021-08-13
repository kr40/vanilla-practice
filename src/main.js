'use strict';

//* Imports

import { switchThemeBtn } from './modules/selectors';

//* Theme Switching Functionality

switchThemeBtn.addEventListener('click', function () {
	const theme = document.getElementsByTagName('link')[6];

	if (theme.getAttribute('href') == 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css') {
		theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css');
	} else {
		theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css');
	}
});
