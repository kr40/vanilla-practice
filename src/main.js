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

// Write a function to get the latest time
function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	console.log(`${hours}:${minutes}:${seconds}`);
}

getTime();

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi, I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

const john = new Person('John', 30);

console.log(john);

const kartik = new Person('Kartik', 28);

console.log(kartik);

kartik.getGreeting(); //?
kartik.getDescription(); //?

// Create an html paragraph element
const p = document.createElement('p');
// Add "hello world" to the paragraph
p.textContent = 'Hello World';
// Add the paragraph to the container class
document.querySelector('.container').appendChild(p);
