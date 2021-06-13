export class Person {

  private gender: string;
  private birthDay: string;
  private lastName: string;
  private firstName: string;
  private middleName: string;
  private personTypes: string[];

  constructor(gender: string,
              birthDay: string,
              lastName: string,
              firstName: string,
              middleName: string,
              personTypes: string[]) {
    this.gender = gender;
    this.birthDay = birthDay;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.personTypes = personTypes;
  }

}
