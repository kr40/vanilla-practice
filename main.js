'use strict';

const counterText = document.querySelector('.counter');
const incrementBtn = document.querySelector('.increment');
const resetBtn = document.querySelector('.reset');

const incrementCounter = () => {
	counterText.innerHTML = parseInt(counterText.innerHTML) + 1;
};

incrementBtn.addEventListener('click', incrementCounter);

const resetCounter = () => {
	counterText.innerHTML = 0;
};

resetBtn.addEventListener('click', resetCounter);
