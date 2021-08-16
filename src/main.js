'use strict';

//* Imports

import { switchThemeBtn, theme } from './modules/selectors';

//* Theme Switching Functionality

switchThemeBtn.addEventListener('click', function () {
	if (theme.getAttribute('href') == 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css') {
		theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css');
	} else {
		theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css');
	}
});
