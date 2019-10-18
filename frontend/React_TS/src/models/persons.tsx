export default class Persons {
    ID?: number;
    FullName: string;
    Address: string;
    Age: number;

    constructor(fullanme: string, address: string, age: number) {
        this.FullName = fullanme;
        this.Address = address;
        this.Age = age;
    } 
}