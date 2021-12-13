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

function getDate() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	console.log(`${day}/${month}/${year}`);
}

getDate();

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
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

const p = document.createElement('p');
p.textContent = 'Hello World';
document.querySelector('.container').appendChild(p);

class Subscriber extends Person {
	constructor(name, age, newsLetter) {
		super(name, age);
		this.newsLetter = newsLetter;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old and subscribed to ${this.newsLetter}`;
	}
}

const kartik2 = new Subscriber('kartik');

kartik2.age = 28;
kartik2.newsLetter = 'The Daily Mail';

kartik2.getDescription(); //?

const numbers = [1, 2, 3, 4, 5];
function addArray(numbers) {
	return numbers.reduce((acc, curr) => acc + curr);
}

console.log(addArray(numbers));
