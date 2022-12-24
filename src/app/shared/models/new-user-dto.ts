export class NewUserDto {
    username: string;
    dni: string;
    firstName: string;
    lastName: string;
    surName: string;
    phone: string;
    address: string;
    email: string;
    password: string;
    encoded: string;
    constructor(username: string, dni: string, firstName: string, lastName: string, surName: string, phone: string, address: string, email: string, password: string, encoded: string) {
        this.username = username;
        this.dni = dni;
        this.firstName = firstName;
        this.lastName = lastName;
        this.surName = surName;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.password = password;
        this.encoded = encoded;
    }
}
