import { faker } from '@faker-js/faker';
import { User, Subject } from '../models/user.model';

const ALL_SUBJECTS: Subject[] = [
  'Maths',
  'Physics',
  'Chemistry',
  'Economics',
  'English',
  'Biology',
  'History',
  'Arts',
];


export class UserBuilder {
  private user: Partial<User> = {};

  static user() {
    return new UserBuilder();
  }

  static create() {
    return new UserBuilder();
  }

  fullName(value = faker.person.fullName()) {
    this.user.fullName = value;
    return this;
  }

  email(value = faker.internet.email()) {
    this.user.email = value;
    return this;
  }

  currentAddress(value = faker.location.streetAddress()) {
    this.user.currentAddress = value;
    return this;
  }

  permanentAddress(value = faker.location.streetAddress()) {
    this.user.permanentAddress = value;
    return this;
  }

  firstName(value = faker.person.firstName()) {
    this.user.firstName = value;
    return this;
  }

  lastName(value = faker.person.lastName()) {
    this.user.lastName = value;
    return this;
  }

  age(value = faker.number.int({ min: 18, max: 80 })) {
    this.user.age = value;
    return this;
  }

  salary(value = faker.number.int({ min: 3000, max: 10000 })) {
    this.user.salary = value;
    return this;
  }

  department(value = faker.person.jobType()) {
    this.user.department = value;
    return this;
  }

  sex(value: 'male' | 'female' = faker.helpers.arrayElement(['male', 'female'])) {
    this.user.sex = value;
    return this;
  }

  mobileNumber(value = faker.string.numeric(10)) {
    this.user.mobileNumber = value;
    return this;
  }

  dateOfBirth(value = faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toISOString()) {
    this.user.dateOfBirth = value;
    return this;
  }

  withRandomSubjects(min = 1, max = 3) {
    const count = faker.number.int({ min, max });
    this.user.subjects = faker.helpers
      .shuffle(ALL_SUBJECTS)
      .slice(0, count);
    return this;
  }

  build(): User {
    return this.user as User;
  }
}
