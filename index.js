// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

import Person from './Person.js';
import { Student } from './Student.js';

let ali = new Person('ali', 23, 'male');
console.log(ali);

let s1 = new Student('mai', 25, 'female', 'js');
console.log(s1);
