import {Person} from '../person/person';

export class InternalUserRegistration {

  private email: string;
  private person: Person;
  private username: string;
  private password: string;
  private mobilePhone: string;
  private passwordConfirmation: string;

  constructor(email: string,
              person: Person,
              username: string,
              password: string,
              mobilePhone: string,
              passwordConfirmation: string) {
    this.email = email;
    this.person = person;
    this.username = username;
    this.password = password;
    this.mobilePhone = mobilePhone;
    this.passwordConfirmation = passwordConfirmation;
  }

}
