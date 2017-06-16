export class User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    role: string;
    password: string;

    constructor(firstName: string = null,
                lastName: string = null,
                role: string = null,
                password:string = null,
                userName:string = null) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.password  = password;
        this.role      = role;
        this.userName = userName;
    }

    getFirstName() {
      return this.firstName;
    }

    getLastName() {
      return this.lastName;
    }

    getRole() {
      return this.role;
    }

    getPassword() {
      return this.password;
    }

    getUserName() {
      return this.userName;
    }
}
