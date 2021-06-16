import Person from './Person.js';

export class Student extends Person {
  constructor(name, age, gender, courses) {
    super(name, age, gender);

    this.courses = courses;
  }
}

