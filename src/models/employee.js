import User from "./user.js"

export default class  Employee extends User{
    constructor(id, firstName, lastName, city, age, salary) { //kelime anlamı oluşturucu demek 
        //this ==>  User classı demek
        super(id, firstName, lastName, city, age)
        this.salary = salary
    }
}