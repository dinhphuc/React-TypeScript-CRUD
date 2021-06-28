export default class Persons {
    Id?: string;
    FullName: string;
    Address: string;
    Age: number;

    constructor(id: string,fullanme: string, address: string, age: number) {
        this.Id = id;
        this.FullName = fullanme;
        this.Address = address;
        this.Age = age;
    } 
}