var _ = require('lodash');
import './style.css';
import './hello.scss';
import {area,circumference} from './js/circle'
import volume from './js/cube';

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack fuck!!!'], ' ');

	return element;
}

document.body.appendChild(component());

console.log(area(5));
console.log(circumference(5));

console.log(volume(3));